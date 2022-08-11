import React, { useState } from "react";
// import "bootswatch/dist/lux/bootstrap.min.css";
import logo from "../../images/Buspack.png";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { changeStateCart } from "../../redux/actions/changeStateCart";
import { reduceStock } from "../../redux/actions/reduceStock";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "../Pasarela/Pasarela.css";
import { confirmPasswordReset } from "firebase/auth";
import { sendPayment } from "../../redux/actions/sendPayment";
import axios from "axios";
import swal from "sweetalert";
import { DB_HEROKU } from "../../redux/actions/actionTypes";
const stripePromise = loadStripe(
  "pk_test_51LTBDuKIottmlf7Xbtn9K29aMc0spCuzel3dOw1hX5hb5KLxKfAIWhGjh1ACx5ux3j1VRqigkN4yPNontWKFBYt200falMP3nU"
);

const CheckoutForm = ({ total, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  let packageDetails = cart[0]?.cartDetails.map((e) => {
    // return `${e.package.name}, ${e.package.city.name}`;
    return {
      cityName: e.package.city.name,
      packageName: e.package.name,
      packageId: e.packageId,
      numberPeople: e.numberPeople,
      hotelName: e.package.hotel.name,
      hotelImage: e.package.hotel.urlImage, //cambiar por imgen de city
      start_date: e.package.start_date,
      plattform: `${e.package.plattform.terminal}: ${e.package.plattform.address}`,
    };
  });
  console.log("carrito", packageDetails);

  const [loading, setLoading] = useState(false);
  let description = packageDetails?.map((e) => e.packageName);
  console.log(description);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod);
      const { id, card } = paymentMethod;
      try {
        let pay = {
          id,
          amount: total * 100,
          card: card.brand,
          idCart: cart[0].id,
          idUser: cart[0].userId,
          userFullName: `${cart[0].user.name} ${cart[0].user.surname}`,
          userMail: cart[0].user.mail,
          description: description,
        };
        console.log("hola", pay);
        let resBack = await axios.post(`${DB_HEROKU}/payment`, pay);
        resBack = resBack.data;
        console.log(resBack);

        if (!resBack.error) {
          //cambiar el estado del carrito
          dispatch(changeStateCart({ id: pay.idCart, mail: pay.userMail }));
          let packagesUpdateStockcart = cart[0].cartDetails.map(function (
            details
          ) {
            return {
              id: details.packageId,
              numberPeople: details.numberPeople,
            };
          });

          packagesUpdateStockcart.forEach((item) => {
            dispatch(reduceStock(item));
          });

          swal({
            title: "El pago fue realizado con exito",
            icon: "success",
          });
          elements.getElement(CardElement).clear();
          
          dispatch(sendPayment(cart[0].user.mail))
        } else {
          swal({
            title: `El pago fue denegado: ${resBack.error.raw.message}`,
            icon: "error",
          });
          elements.getElement(CardElement).clear();
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    } else {
      swal({
        title: `Hay datos invalidos o faltan campos por completar`,
        icon: "error",
      });
      elements.getElement(CardElement).clear();
      setLoading(false);
    }
  };

  console.log(!stripe || loading);
  console.log("total", total);

  return (
    <form className="card card-body card-pasarela" onSubmit={handleSubmit}>
      {/* Product Information */}
      <img src={logo} alt="buspack" className="img-fluid" />

      <h3 className="text-center my-2">Total ${total}</h3>

      {/* User Card Input */}
      <div className="form-group">
        <CardElement />
      </div>

      <button disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Comprar"
        )}
      </button>
    </form>
  );
};

function Pasarela({ userlog, total, cart }) {
  return (
    <div className="pasarela">
      <div>{userlog ? userlog.email : null}</div>
      <div></div>
      <Elements stripe={stripePromise}>
        <div className="container p-4">
          <div className="row h-100">
            <div className="col-md-4 offset-md-4 h-100 card-pasarela">
              <CheckoutForm total={total} cart={cart} />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default Pasarela;
