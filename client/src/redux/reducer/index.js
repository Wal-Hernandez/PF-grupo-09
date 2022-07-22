import {
  GET_PACKAGE_ID,
  GET_CLEAN,
  GET_PACKAGES,
} from "../actions/actionTypes";

const initialState = {
  packages: [],
  showPackages: [],
  detail: [],
  isAdmin: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES:
      return {
        ...state,
        packages: action.payload,
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
