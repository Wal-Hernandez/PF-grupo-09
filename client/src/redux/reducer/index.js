import {
  GET_PACKAGE_ID,
  GET_CLEAN,
  GET_PACKAGES,
  GET_MAIN_PACKAGES,
  GET_HOTELS
} from "../actions/actionTypes";

const initialState = {
  packages: [],
  showPackages: [],
  detail: [],
  isAdmin: null,
  adminView: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES:
      console.log(action.payload)
      return {
        ...state,
        packages: action.payload,
        adminView: action.payload
      };
      case GET_HOTELS:
        return {
          ...state,
          adminView: action.payload
        };
      case GET_MAIN_PACKAGES:
        return {
            ...state,
            showPackages: state.packages.slice(0,4) || "nada"
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
      
    default:
      return state;
  }
}
