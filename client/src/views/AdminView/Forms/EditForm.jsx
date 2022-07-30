

import React from "react";
import {PutActivityForm} from "./PutActivityForm"
import {PutBusForm} from "./PutBusForm"
import {PutPackageForm} from "./PutPackageForm"
import {PutHotelForm} from "./PutHotelForm"
import {PutCityForm} from "./PutCityForm"
import {PutPlatformForm} from "./PutPlatformForm"

function Ejemplo({ lang,id }) {
  if (lang === "") return <div>Waiting for the Data</div>;
  if (lang === "hotels")return (<PutHotelForm id = {id}/>);
  if (lang === "plattforms") return (<PutPlatformForm  id = {id}/>);
  if (lang === "cities") return (<PutCityForm  id = {id}/>);
  if (lang === "buses") return (<PutBusForm  id = {id}/>);
  if (lang === "activities") return (<PutActivityForm  id = {id}/>);
  if (lang === "packages") return (<PutPackageForm  id = {id}/>);
}

export const EditForm = ({ word,id }) => {

  return (
    <div>
      <Ejemplo lang={word} id={id}/>
    </div>
  );
};
