import React, { useEffect } from "react";
import { rootReducer, initialState } from "../../redux/reducer/rootReducer";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { TYPES } from "../../redux/actions/shoppingActions";
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";
import { getCities } from "../../redux/actions/getCities";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import Pasarela from "../Pasarela/index";
import { useState } from "react";

export default function ShoppingCart() {
  let arrayCartNotLoggedin = useSelector((state) => state.arrayCartNotLoggedin);
  const { packages, showPackages } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  console.log(packages);
  const auth = getAuth();
  const user = auth.currentUser;
  const [pulsado, setPulsado] = useState(false);

  useEffect(() => {
    dispatch(getCities());
    !packages.length
      ? dispatch(getPackages())
      : !showPackages.length
      ? dispatch(getMainPackages())
      : console.log("hecho");
  }, [dispatch, packages, showPackages]);

  //   console.log(myCartAll);

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
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
      myCarttextLoggedin = localStorage.getItem("myCartLoggedin");
      myCartAll = JSON.parse(myCarttextLoggedin);
    }
    // ...
  } else {
    // No user is signed in.
    if (localStorage.getItem("myCartNotLoggedin")) {
      myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin");
      myCartAll = JSON.parse(myCarttextNotLoggedin);
    }
  }
  const sumAllCart = myCartAll
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(sumAllCart);
  console.log("aaaaba", myCartAll);

  return (
    <div>
      <div>
        <h3>Carrito</h3>
        <button onClick={clearCart}>Limpiar carrito</button>
        <hr></hr>
        <article>
          {myCartAll?.map((Cart) => (
            <ProductItem
              id={Cart.id}
              quantity={Cart.quantity}
              data={packages.filter((elemento) => elemento.id == Cart.id)}
              arrayCartNotLoggedin={arrayCartNotLoggedin}
            />
          ))}
        </article>
      </div>
      <div>
        <hr></hr>
        {/* <Total PackagesInCart={myCartparsed} allpackages={packages} arrayCartNotLoggedin={arrayCartNotLoggedin}/> */}
      </div>
      <div>
        <button onClick={() => setPulsado(!pulsado)}>Comprar</button>
        {pulsado ? <Pasarela /> : null}
      </div>
    </div>
  );
}
