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
    POST_USER
} from "../actions/actionTypes";

const initialState = {
    packages: [],
    showPackages: [],
    detail: [],
    isAdmin: null,
    adminView: [],
    offers: [],
    cities: [],
    cart:{}
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
                cities: action.payload
            };
        case GET_BUSES:
            return {
                ...state,
                adminView: action.payload,
            };
        case GET_PLATFORMS:
            return {
                ...state,
                adminView: action.payload,
            };
        case GET_ACTIVITIES:
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

        case FILTER_BY_DESTINY:
            return {
                ...state,
                packages: action.payload
            }
        case FILTER_BY_DATE:
            return {
                ...state,
                packages: action.payload
            }
        case SORT_BY_PRICE:
            return {
                ...state,
                packages: action.payload
            }
        case SORT_BY_STOCK:
            return {
                ...state,
                packages: action.payload
            }
        case LOAD_CART:
            return {
                ...state,
                cart: action.payload
            } 
        case POST_USER:
            return{ ...state,
                cart:action.payload
            }
            ;
        case PUT_CITY:
            return state;
        case PUT_BUS:
            return state;
        case PUT_HOTEL:
            return state;
        case DELETE_MODEL:
            return state;
        case PUT_ACTIVITY:
            return state;
        case POST_CITY:
            return state;
        case POST_BUS:
            return state;
        case POST_ACTIVITY:
            return state;
        default:
            return state;
    }
}