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
} from "../actions/actionTypes";

const initialState = {
  packages: [],
  showPackages: [],
  detail: [],
  isAdmin: null,
  adminView: [],
  offers: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES:
      console.log(action.payload);
      return {
        ...state,
        packages: action.payload,
        adminView: action.payload,
      };
    case GET_HOTELS:
      return {
        ...state,
        adminView: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        adminView: action.payload,
      };
    case GET_BUSES:
      return {
        ...state,
        adminView: action.payload,
      };
    case GET_MAIN_PACKAGES:
      return {
        ...state,
        showPackages: state.packages.slice(0, 4) || "nada",
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

    case PUT_CITY:
      return state;
    case PUT_BUS:
      return state;
      case PUT_HOTEL:
      return state;
    default:
      return state;
  }
}
