import { useAuth } from "../../context/context";

import { getAuth } from "firebase/auth";
import { Login } from "./Login";
import NoPermissions from "../NoPermissions/NoPermissions";
import { app } from "../../Firebase/firebase-config";
import {  doc, getDoc,getFirestore } from "firebase/firestore";

export function ProtectedRoutedAdmin({ children }) {
  const auth = getAuth();
  const user = auth.currentUser;
 
  const { loading } = useAuth();
  const firestore = getFirestore(app);
  const getRol= async(uid) => {
    // obtener rol
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    if(docuCifrada.data()){const infoFinal = docuCifrada.data().rol;
    return infoFinal;}
    else{return 4}
  }
let rol = getRol(user?.uid)
 
  if (!user) {
    return <Login />;
  }

  if (loading) return <h1>Loading</h1>;

  if (user.email !== "productowner@henry.com"&& rol ==='client') {
    return <NoPermissions />;
  }
  return <>{children}</>;
}
