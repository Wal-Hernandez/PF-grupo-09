import { useAuth } from "../../context/context";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Login } from "./Login";
import NoPermissions from "../NoPermissions/NoPermissions";
import { app } from "../../Firebase/firebase-config";
import {  doc, getDoc,getFirestore } from "firebase/firestore";

export function ProtectedRoutedAdmin({ children }) {
  const [roles, setRoles] = useState("");
  console.log(roles, "ACAAAA")
  const auth = getAuth();
  const user = auth.currentUser;
 
  const { loading } = useAuth();
  const firestore = getFirestore(app);
  
  const getRol= async(uid) => {
    // obtener rol
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    if(docuCifrada.data()){const infoFinal = docuCifrada.data().rol;
      console.log(infoFinal, "INFOO")
      setRoles(infoFinal)
    return infoFinal;}
    else{return 4}
  }

/*   getRol.then((response) => {const rol = response})

  */
getRol(user?.uid)
  if (!user) {
    return <Login />;
  }

  if (loading) return <h1>Loading</h1>;

console.log(roles)
  if (roles !=='admin') {

    return <NoPermissions />;
  }
  return <>{children}</>;
}
