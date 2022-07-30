import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';
import Services from './views/ServicesView';
import Admin from './views/AdminView';
import FAQ from './components/FAQ/FAQ.jsx'

import AboutView from './views/AboutView';  
import{Alert} from './components/Login/Login'

import{Register} from './components/Login/Register'
import{Login} from './components/Login/Login'
import { ProtectedRouted } from "./components/Login/ProtectedRouted";
import { ProtectedRoutedAdmin } from './components/Login/ProtectedRouteAdmin';

import { AuthProvider } from "./context/context";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from './Firebase/firebase-config';

import {firestore} from "./context/context"

function App() {
  const [userlog, setUser] = React.useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    const infoFinal2 = docuCifrada.data().nombre;
    const infoFinal3 = docuCifrada.data().apellido;
    const infoFinal4 = docuCifrada.data().mail;
    return [infoFinal,infoFinal2,infoFinal3,infoFinal4];
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol[0],
        nombre:rol[1],
        apellido: rol[2],
        mail: rol[3]
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!userlog) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
       <AuthProvider>
    <Routes>
      <Route path="/" element={<Home userlog={userlog}/>} />
      <Route path="/details/:id" element={<Details userlog={userlog}/>} />
      <Route path="/buy" element={<EditBuy userlog={userlog}/>} />
      <Route path="/editBuy" element={<Buy userlog={userlog}/>} />
      <Route path="/services" element={<Services userlog={userlog}/>} />
      <Route path="/admin" element={<ProtectedRoutedAdmin><Admin userlog={userlog}/></ProtectedRoutedAdmin>} />
      <Route path ="/faq" element ={<FAQ userlog={userlog}/>}/>
      <Route path="/about" element={<AboutView userlog={userlog}/>} />
      <Route path ="/reg" element ={<Register/>}/>
       <Route path ="/login" element ={<Login/>}/>
      

    </Routes>
    </AuthProvider>
    </div>
  );
}
export default App;