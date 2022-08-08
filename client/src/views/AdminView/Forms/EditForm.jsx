

import React from "react";
import {PutActivityForm} from "./PutActivityForm"
import {PutBusForm} from "./PutBusForm"
import {PutPackageForm} from "./PutPackageForm"
import {PutHotelForm} from "./PutHotelForm"
import {PutCityForm} from "./PutCityForm"
import {PutPlatformForm} from "./PutPlatformForm"
import {PutUserForm} from "./PutUser"
function Ejemplo({ lang,pack }) {
  if (lang === "") return <div>Waiting for the Data</div>;
  if (lang === "hotels")return (<PutHotelForm pack = {pack}/>);
  if (lang === "plattforms") return (<PutPlatformForm  pack = {pack}/>);
  if (lang === "cities") return (<PutCityForm  pack = {pack}/>);
  if (lang === "business") return (<PutBusForm  pack = {pack}/>);
  if (lang === "activities") return (<PutActivityForm  pack = {pack}/>);
  if (lang === "packages") return (<PutPackageForm  pack = {pack}/>);
  if (lang === "users") return (<PutUserForm pack ={pack}/>)
}

export const EditForm = ({word,pack} ) => {
  console.log(pack)
  return (
    <div>
      <Ejemplo lang={word} pack={pack}/>
    </div>
  );
};
