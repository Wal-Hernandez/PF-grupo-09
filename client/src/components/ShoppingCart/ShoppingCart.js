import React, { useEffect, useState } from "react";
import { rootReducer, initialState } from "../../redux/reducer/rootReducer";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { TYPES } from "../../redux/actions/shoppingActions";
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";
import { getCities } from "../../redux/actions/getCities";
import { removeDetailCart } from "../../redux/actions/removeDetailCart";
import { removeCart } from "../../redux/actions/removeCart";
import { addDetailCart } from "../../redux/actions/addDetailCart";
import { loadCart } from "../../redux/actions/loadCart";
import { addOnePeople } from "../../redux/actions/addOnePeople";
import Pasarela from "../Pasarela";
import Footer from "../Footer/index";
import "../ShoppingCart/ShoppingCart.css";

import { getAuth } from "firebase/auth";

import Navbar from "../Navbar";
import swal from "sweetalert";

export default function ShoppingCart({ userlog }) {
  const [pulsado, setPulsado] = useState(false);
  let arrayCartNotLoggedin = useSelector(
    (state) => state.rootReducer.arrayCartNotLoggedin
  );

  const { packages, showPackages } = useSelector((state) => state.rootReducer);

  const cart = useSelector((state) => state.rootReducer.cart);

  const dispatch = useDispatch();
  console.log(packages);
  const auth = getAuth();
  const user = auth.currentUser;

  console.log("USERCOMUN:", user?.email);

  useEffect(() => {
    dispatch(getCities());
    !packages.length
      ? dispatch(getPackages())
      : !showPackages.length
      ? dispatch(getMainPackages())
      : console.log("hecho");
  }, [dispatch, packages, showPackages]);

  // El QUE ESTABA ANTES
  useEffect(() => {
    if (user?.email !== undefined) {
      dispatch(loadCart(user?.email));
    }
  }, [user, dispatch]);

  //SUBIDO POR AGUS FIDELIO
  //  useEffect(()=>{
  //     if(!packages.length) dispatch(getPackages())
  //     if(user?.email!==undefined){
  //         dispatch(loadCart(user?.email))
  //    }
  //   },[user,dispatch])

  const addToCart = (id) => {
    if (user) {
      console.log("ID:", id);
      let detalles = cart[0]["cartDetails"];
      detalles.forEach((element) => {
        console.log("foreach", element.packageId);
      });
      let detailpackageId = detalles.filter((d) => d.packageId == id);
      console.log("detalle:", detalles);
      console.log("detailpackageId:", detailpackageId);

      if (detailpackageId.length === 1) {
        //Logica para aumentar una persona al detalle del paquete
        let idCartDetail = detailpackageId[0].id;

        console.log("idCartDetail", idCartDetail);
        let numberPeople = detailpackageId[0].numberPeople;
        console.log("numberPeople", numberPeople);
        dispatch(addOnePeople(idCartDetail, numberPeople, user.email));
      } else {
        //logica para agregar un nuevo detalle
        let idCart = cart[0]["id"];
        console.log("IDCART:", idCart, id);
        let email = cart[0]["user"]["mail"];
        dispatch(addDetailCart(idCart, id, email));
      }
    } else {
      console.log(id);
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }
  };
  const delFromCart = async (idCart, id) => {
    if (user) {
      dispatch(removeDetailCart(id, userlog.email));

      // dispatch(loadCart(userlog.email))
    } else {
      console.log(id);
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: idCart });
      /*         console.log(id,all)
    if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
    } else {
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
    } */
    }
  };

  const clearCart = () => {
    if (user) {
      dispatch(removeCart(cart[0]["id"], userlog.email));
      swal({
        title: "Carrito vaciado",
        icon: "success",
      });

      //una vez borrado todo los detalles recargar el carrito
      //dispatch(loadCart(userlog.email))
    } else {
      dispatch({ type: TYPES.CLEAR_CART });
    }
  };
  let myCarttext;
  let myCartparsed = [];
  let myCartparsedfiltered = {};
  let myCarttextNotLoggedin;
  let myCartparsedNotLoggedin = [];
  let myCartparsedfilteredNotLoggedin = {};
  let myCarttextLoggedin;
  let myCartparsedLoggedin = [];
  let myCartparsedfilteredLoggedin = {};
  let myCartAll = [];

  if (user) {
    if (localStorage.getItem("myCartLoggedin")) {
      //logica para pasar del cart al myCartAll
      //chau
    }
    if (cart.length !== 0) {
      let detalles =
        cart[0] &&
        cart[0]["cartDetails"]?.map((cd) => ({
          id: cd.packageId,
          quantity: cd.numberPeople,
          idDetail: cd.id,
        }));
      myCartAll = detalles;
    }

    // ...
  } else {
    // No user is signed in.
    if (localStorage.getItem("myCartNotLoggedin")) {
      myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin");
      myCartAll = JSON.parse(myCarttextNotLoggedin);
    }
  }

  let precioTotal =
    packages.length &&
    myCartAll?.map((c) => {
      return {
        id: c.id,
        quantity: c.quantity,
        data: packages?.find((elemento) => elemento.id === c.id)["price"],
      };
    });
  let total = 0;
  if (precioTotal) {
    total = precioTotal
      .map((item) => item.data * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(total);
  }

  let myCartAll2 = myCartAll?.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }

    return 0;
  });

  return (
    <div>
      <Navbar userlog={userlog} />
      <div>
        <h3>Carrito</h3>
        <button className="btn btn-danger btn-lg" onClick={clearCart}>
          Limpiar carrito
        </button>
        <hr></hr>

        <article>
          {myCartAll2?.map((Cart) => (
            <ProductItem
              idDetail={Cart.idDetail}
              id={Cart.id}
              quantity={Cart.quantity}
              data={packages.filter((elemento) => elemento.id === Cart.id)}
              arrayCartNotLoggedin={arrayCartNotLoggedin}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
        </article>
        <div>{}</div>
      </div>
      <div>
        <hr></hr>
        <div>
          <h1>Total: ${total}.00</h1>
        </div>

        <button
          className="btn btn-primary btn-lg"
          onClick={() => setPulsado(!pulsado)}
        >
          Comprar
        </button>
        {pulsado ? <Pasarela total={total} cart={cart} /> : null}
      </div>
      <div className="div-cart">
        <Footer />
      </div>
    </div>
  );
}
