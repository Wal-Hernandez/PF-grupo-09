import React, { useEffect } from "react";
import { getPackages } from "../../redux/actions/getPackages";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { addOnePeople } from "../../redux/actions/addOnePeople";
import { deleteOnePeople } from "../../redux/actions/deleteOnePeople";
import { TYPES } from "../../redux/actions/shoppingActions";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import Loaderpag from "../Loaderpag/Loaderpag";

export default function ProductItem({
  id,
  quantity,
  data,
  arrayCartNotLoggedin,
  delFromCart,
  idDetail,
  addToCart,
}) {
  const dispatch = useDispatch();
  console.log(id);
  data = data[0];
  console.log(data);
  const auth = getAuth();
  const user = auth.currentUser;

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
      myCartparsedLoggedin = JSON.parse(myCarttextLoggedin);
    }
    // ...
  } else {
    // No user is signed in.
    console.log("No logueado");
    if (localStorage.getItem("myCartNotLoggedin")) {
      console.log("estamos en shopping cart y el carrito existe");
      myCarttext = localStorage.getItem("myCartNotLoggedin");
      myCartparsed = JSON.parse(myCarttext);
    }
    myCartAll = myCartparsedfilteredNotLoggedin;
  }

  const addOne = (id, idCartDetail, numberPeople) => {
    if (user) {
      dispatch(addOnePeople(idCartDetail, numberPeople, user.email));
    } else {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }
  };
  const deleteOne = (id, idCartDetail, numberPeople) => {
    if (user) {
      dispatch(deleteOnePeople(idCartDetail, numberPeople, user.email));
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <div>
      {data ? (
        <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded card-cart">
          <div class="mr-1">
            <img
              class="rounded"
              src={data.city?.image}
              width="220"
              height="170"
            />
          </div>
          <Link to={`/details/${data?.id}`}>
            <div class="d-flex flex-column align-items-center product-details info-cart">
              <h4 class="font-weight-bold">{data?.name}</h4>
              <div class="d-flex flex-column align-items-start product-desc">
                <div class="sizese mr-1">
                  <span class="text-grey">Hotel:</span>{" "}
                  <span class="font-weight-bold">{data?.hotel.name}</span>
                </div>

                <div class="colores">
                  <span class="text-grey b "> Stock</span>{" "}
                  <span class="font-weight-bold b">
                    {data?.stock - quantity}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div class="d-flex flex-row align-items-center qty">
            <button
              onClick={() => deleteOne(id, idDetail, quantity)}
              disabled={quantity === 1}
              className="btn a-cart"
            >
              <i class="fa fa-minus text-danger"></i>
            </button>
            <h5 class="text-grey mt-1 mr-1 ml-1">{quantity}</h5>
            <button
              onClick={() => addOne(id, idDetail, quantity)}
              disabled={quantity >= data?.stock}
              className="btn a-cart"
            >
              <i class="fa fa-plus text-success"></i>
            </button>
          </div>
          <div>
            <h5 class="text-grey">${quantity * data?.price}</h5>
          </div>
          <div class="d-flex align-items-center">
            <button
              className="btn a-cart"
              onClick={() => delFromCart(id, idDetail)}
            >
              <i class="fa fa-trash mb-1 text-danger"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="loader">
          {" "}
          <Loaderpag />
        </div>
      )}
    </div>
  );
}
