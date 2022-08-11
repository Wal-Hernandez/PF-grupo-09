import {
  GET_PACKAGE_ID,
  GET_CLEAN,
  GET_PACKAGES,
  GET_MAIN_PACKAGES,
  GET_HOTELS,
  GET_CITIES,
  PUT_CITY,
  GET_OFFERS,
  GET_BUSES,
  PUT_BUS,
  PUT_HOTEL,
  GET_PLATFORMS,
  GET_ACTIVITIES,
  FILTER_BY_DESTINY,
  SORT_BY_PRICE,
  SORT_BY_STOCK,
  DELETE_MODEL,
  PUT_ACTIVITY,
  POST_ACTIVITY,
  POST_BUS,
  POST_CITY,
  FILTER_BY_DATE,
  CLEAR_FILTERS,
  LOAD_CART,
  CLEAR_CART_LOGOUT,
  LOAD_CART_LOGIN,
  POST_USER,
  REMOVE_DETAIL_CART,
  ADD_DETAIL_CART,
  REMOVE_CART,
  ADD_ONE_PEOPLE,
  DELETE_ONE_PEOPLE,
  FILTER_BY_ACTIVITY,
  CHANGE_STATE_CART,
  LOAD_SHOPPING,
  FINISH_TRAVEL,
  GET_USER_REVIEWS,
} from "../actions/actionTypes";
import { TYPES } from "../actions/shoppingActions";
import { getAuth } from "firebase/auth";

const initialState = {

    packages: [],
    showPackages: [],
    detail: [],
    isAdmin: null,
    offers: [],
    hotels: [],
    cities: [],
    business: [],
    platforms: [],
    activities: [],
    cart:[],
    arrayCartNotLoggedin:[],
    arrayCartLoggedin:[],
    shopping:[],
    aux: [],
    userReviews: []

};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES:
      console.log(action.payload);
      return {
        ...state,
        packages: action.payload,
        aux: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_MAIN_PACKAGES:
      let paquetesDisponibles = state.packages?.filter((e) => {
        return e.stock > 0;
      });
      return {
        ...state,
        showPackages: paquetesDisponibles.slice(0, 4) || "nada",
      };
    case GET_PACKAGE_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_CLEAN:
      return {
        ...state,
        detail: action.payload,
        packages: action.payload,
        showPackages: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        adminView: action.payload,
        cities: action.payload,
      };
    case GET_OFFERS:
      let resp = action.payload.map((a) => {
        return {
          origen: a.plattform.terminal,
          destino: a.city.name,
          precio: a.precio,
        };
      });
      return {
        ...state,
        offers: resp,
      };

    case FILTER_BY_DESTINY:
      return {
        ...state,
        packages: action.payload,
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        packages: action.payload,
      };
    case FILTER_BY_DATE:
      return {
        ...state,
        packages: action.payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        packages: action.payload,
      };
    case SORT_BY_STOCK:
      return {
        ...state,
        packages: action.payload,
      };
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case LOAD_CART_LOGIN:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_DETAIL_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_DETAIL_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_ONE_PEOPLE:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_ONE_PEOPLE:
      return {
        ...state,
        cart: action.payload,
      };

    case CLEAR_CART_LOGOUT:
      return {
        ...state,
        cart: [],
      };

    case POST_USER:
      return { ...state, cart: action.payload };
    case CHANGE_STATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case LOAD_SHOPPING:
      return {
        ...state,
        shopping: action.payload,
      };
    case FINISH_TRAVEL:
      return {
        ...state,
        shopping: action.payload,
      };
    case TYPES.ADD_TO_CART: {
      let cartAll;
      const auth = getAuth();
      const user = auth.currentUser;
      let cartNotLoggedin;
      let cartJSONNotLoggedin;
      let newItemNotLoggedin;
      let itemInCartNotLoggedin = [];
      let cartLoggedin;
      let cartJSONLoggedin;
      let newItemLoggedin;
      let itemInCartLoggedin = [];
      console.log("userroot", user);

      if (user) {
        //Las cosas se guardan en el carrito logueado (la base de datos)

        newItemLoggedin = state.detail;
        console.log(newItemLoggedin);
        itemInCartLoggedin = state.arrayCartLoggedin.find(
          (item) => item.id == newItemLoggedin.id
        );
        console.log(newItemLoggedin);

        if (!localStorage.getItem("myCartLoggedin")) {
          console.log(
            "el carrito logueado NO existe, por lo que se crea ahora"
          );
          cartLoggedin = [
            ...state.arrayCartLoggedin,
            { id: newItemLoggedin.id, quantity: 1 },
          ];
          cartJSONLoggedin = JSON.stringify(cartLoggedin);
          localStorage.setItem("myCartLoggedin", cartJSONLoggedin);
        } else {
          console.log("el carrito logueado existe y tiene algo");
          let myCarttextLoggedin = localStorage.getItem("myCartLoggedin");
          let myCartparsedLoggedin = JSON.parse(myCarttextLoggedin);
          itemInCartLoggedin = myCartparsedLoggedin.find(
            (item) => item.id === newItemLoggedin.id
          );

          if (itemInCartLoggedin && myCartparsedLoggedin) {
            console.log(
              "en el if es verdadero, por lo que existe itemInCart en carrito logueado"
            );
            cartLoggedin = myCartparsedLoggedin.map((item) =>
              item.id === newItemLoggedin.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            console.log("no existe item en el cart");
            cartLoggedin = [
              ...myCartparsedLoggedin,
              { id: newItemLoggedin.id, quantity: 1 },
            ];
          }
          console.log(cartLoggedin);
          let cartJSONLoggedin = JSON.stringify(cartLoggedin);
          localStorage.setItem("myCartLoggedin", cartJSONLoggedin);
        }
      } else {
        // las cosas se guardan en el carrito no logueado
        console.log(state.packages);
        newItemNotLoggedin = state.packages.find(
          (item) => item.id == action.payload
        );
        itemInCartNotLoggedin = state.arrayCartNotLoggedin.find(
          (item) => item.id === newItemNotLoggedin.id
        );
        console.log(newItemNotLoggedin);

        if (!localStorage.getItem("myCartNotLoggedin")) {
          console.log("el carrito NO existe, por lo que se crea ahora");
          cartNotLoggedin = [
            ...state.arrayCartNotLoggedin,
            { id: newItemNotLoggedin.id, quantity: 1 },
          ];
          cartJSONNotLoggedin = JSON.stringify(cartNotLoggedin);
          localStorage.setItem("myCartNotLoggedin", cartJSONNotLoggedin);
        } else {
          console.log("el carrito existe y tiene algo");
          let myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin");
          let myCartparsedNotLoggedin = JSON.parse(myCarttextNotLoggedin);
          itemInCartNotLoggedin = myCartparsedNotLoggedin.find(
            (item) => item.id === newItemNotLoggedin.id
          );

          if (itemInCartNotLoggedin && myCartparsedNotLoggedin) {
            console.log("en el if es verdadero, por lo que existe itemInCart");
            cartNotLoggedin = myCartparsedNotLoggedin.map((item) =>
              item.id === newItemNotLoggedin.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            console.log("no existe item en el cart");
            cartNotLoggedin = [
              ...myCartparsedNotLoggedin,
              { id: newItemNotLoggedin.id, quantity: 1 },
            ];
          }
          console.log(cartNotLoggedin);
          let cartJSONNotLoggedin = JSON.stringify(cartNotLoggedin);
          localStorage.setItem("myCartNotLoggedin", cartJSONNotLoggedin);
        }
      }

      return {
        ...state,
        arrayCartNotLoggedin: [],
        arrayCartLoggedin: [],
      };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let cart;
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        //RESTAR UNA PERSONA EN UN DETALLE DE LA DB DE UN USER LOGEADO

        let myCarttextLoggedin = localStorage.getItem("myCartLoggedin");
        let myCartparsedLoggedin = JSON.parse(myCarttextLoggedin);

        let itemToDeleteLoggedin = myCartparsedLoggedin.find(
          (item) => item.id === action.payload
        );

        if (itemToDeleteLoggedin.quantity > 1) {
          cart = myCartparsedLoggedin.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          cart = myCartparsedLoggedin.filter(
            (item) => item.id !== action.payload
          );
        }
        let cartJSONLoggedin = JSON.stringify(cart);
        localStorage.setItem("myCartLoggedin", cartJSONLoggedin);

        // let myCarttextLoggedin=localStorage.getItem("myCartLoggedin")
        // let myCartparsedLoggedin=JSON.parse(myCarttextLoggedin)

        // let itemToDeleteLoggedin = myCartparsedLoggedin.find(item => item.id === action.payload);

        // if (itemToDeleteLoggedin.quantity>1){
        //     cart = myCartparsedLoggedin.map((item) =>
        //     item.id===action.payload ?
        //     {...item, quantity:item.quantity-1}: item
        // )

        // } else {
        //     cart=myCartparsedLoggedin.filter(item => item.id!== action.payload)
        // }
        // let cartJSONLoggedin= JSON.stringify(cart)
        // localStorage.setItem("myCartLoggedin", cartJSONLoggedin)
      } else {
        let myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin");
        let myCartparsedNotLoggedin = JSON.parse(myCarttextNotLoggedin);

        let itemToDeleteNotLoggedin = myCartparsedNotLoggedin.find(
          (item) => item.id === action.payload
        );

        if (itemToDeleteNotLoggedin.quantity > 1) {
          cart = myCartparsedNotLoggedin.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          cart = myCartparsedNotLoggedin.filter(
            (item) => item.id !== action.payload
          );
        }
        let cartJSONNotLoggedin = JSON.stringify(cart);
        localStorage.setItem("myCartNotLoggedin", cartJSONNotLoggedin);
        console.log(cart);
      }
      return { ...state, arrayCartNotLoggedin: [] };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log("remove all from carttttt");
      if (user) {
        //LOGICA PARA BORRAR UN DETALLE DEL CARRITO DB DE UN USER LOGEADO
        console.log("entró a remove one from cart con usuario logueado");
        let myCarttextLoggedin = localStorage.getItem("myCartLoggedin");
        let myCartparsedLoggedin = JSON.parse(myCarttextLoggedin);

        let cart = myCartparsedLoggedin.filter(
          (item) => item.id !== action.payload
        );
        console.log(cart);
        let cartJSONLoggedin = JSON.stringify(cart);
        localStorage.setItem("myCartLoggedin", cartJSONLoggedin);
      } else {
        console.log("estoy en no logueado?=??");
        let myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin");
        let myCartparsedNotLoggedin = JSON.parse(myCarttextNotLoggedin);

        let cart = myCartparsedNotLoggedin.filter(
          (item) => item.id !== action.payload
        );
        console.log(cart);
        let cartJSONNotLoggedin = JSON.stringify(cart);
        localStorage.setItem("myCartNotLoggedin", cartJSONNotLoggedin);
      }

      return {
        ...state,
        arrayCartNotLoggedin: [],
      };
    }
    case TYPES.CLEAR_CART: {
      const auth = getAuth();
      const user = auth.currentUser;
      let cart = [];
      let cartJSON;
      if (user) {
        //TRABAJAR EL BOTON ELIMINAR TODO CARRITO DE USER LOGEADO
        cartJSON = JSON.stringify(cart);
        localStorage.setItem("myCartLoggedin", cartJSON);
      } else {
        cartJSON = JSON.stringify(cart);
        localStorage.setItem("myCartNotLoggedin", cartJSON);
      }
      return {
        ...state,
        arrayCartNotLoggedin: [],
      };
    }
    // case FILTER_BY_PASSENGER: {
    //   if (action.payload) {
    //     const filterPassenger = state.aux.filter(
    //       (a) => parseInt(action.payload) < a.stock
    //     );
    //     return {
    //       ...state,
    //       packages: filterPassenger,
    //     };
    //   }
    //   return {
    //     ...state,
    //   };
    // }
    default:
      return state;
  }
}
