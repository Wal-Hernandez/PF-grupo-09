import React, { useState } from "react";
// import "bootswatch/dist/lux/bootstrap.min.css";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51LTBDuKIottmlf7Xbtn9K29aMc0spCuzel3dOw1hX5hb5KLxKfAIWhGjh1ACx5ux3j1VRqigkN4yPNontWKFBYt200falMP3nU"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      // try {
      //   const { data } = await axios.post(
      //     "http://localhost:3001/api/checkout",
      //     {
      //       id,
      //       amount: 10000, //cents
      //     }
      //   );
      //   console.log(data);

      //   elements.getElement(CardElement).clear();
      // } catch (error) {
      //   console.log(error);
      // }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      {/* Product Information */}
      <img
        src="https://www.corsair.com/medias/sys_master/images/images/h80/hdd/9029904465950/-CH-9109011-ES-Gallery-K70-RGB-MK2-01.png"
        alt="Corsair Gaming Keyboard RGB"
        className="img-fluid"
      />

      <h3 className="text-center my-2">Price: 100$</h3>

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
          "Buy"
        )}
      </button>
    </form>
  );
};

function Pasarela({ userlog }) {
  return (
    <div>
      <div>{userlog ? userlog.email : null}</div>
      <div></div>
      <Elements stripe={stripePromise}>
        <div className="container p-4">
          <div className="row h-100">
            <div className="col-md-4 offset-md-4 h-100">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default Pasarela;
