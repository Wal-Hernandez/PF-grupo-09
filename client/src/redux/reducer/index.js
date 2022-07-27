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
    POST_CITY
} from "../actions/actionTypes";

import {TYPES} from "../actions/shoppingActions"

const initialState = {
    packages: [],
    showPackages: [],
    detail: [],
    isAdmin: null,
    adminView: [],
    offers: [],
    cities: [],
    products: [
        {id:1,name:"Producto1", price:100},
        {id:2,name:"Producto2", price:200},
        {id:3,name:"Producto3", price:300},
        {id:4,name:"Producto4", price:400},
        {id:5,name:"Producto5", price:500},
        {id:6,name:"Producto6", price:600},
    ],
    cart:[],
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
        case TYPES.ADD_TO_CART:{
            let newItem=state.products.find(product => product.id === action.payload)
         
            let itemInCart = state.cart.find(item => item.id ===newItem.id)
            //console.log(action.payload)
            //console.log(state.products[action.payload].totalProducto)
            //let totalaPagar=0


            return itemInCart 
                ? {
                    ...state,
                    cart:state.cart.map(item => item.id===newItem.id ?
                    {...item, quantity:item.quantity +1} : item),
                   
                }
                : {
                    ...state,
                    cart:[...state.cart, {...newItem, quantity: 1}],
                }

            }


        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity>1 ? 
            {
                ...state,
                cart: state.cart.map((item) =>
                    item.id===action.payload ? 
                    {...item, quantity:item.quantity-1}: item
                )
            }:{
                ...state,
                cart:state.cart.filter(item => item.id!== action.payload)
            }

        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart:state.cart.filter(item => item.id!== action.payload)
            }
        }
        case TYPES.CLEAR_CART:{
            return {
                ...state,
                cart:[]
            }
        }
        default:
            return state;
    }
}