import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { getOffers } from "../../redux/actions/getOffers";
export default Offers= ()=>{
    const dispatch = useDispatch();


    const offers= useSelector(state=> state.offers);
    React.useEffect(()=>{dispatch(getOffers())},[dispatch,offers])
let offers_daily= offers.slice(0,5).map(a);
return(
<div>





</div>



)

}