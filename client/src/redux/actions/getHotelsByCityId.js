/* import { GET_HOTEL_BY_CITY } from "./actionTypes"; */

export function getHotelsByCityId(id) {
    return {
      type: "GET_HOTEL_BY_CITY",
      payload: id,
    };
  }