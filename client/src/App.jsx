import './App.css';
import React from 'react';
<<<<<<< HEAD
import { Route, Routes} from 'react-router-dom';
=======
import { Route, Routes } from 'react-router-dom';
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';
import Services from './views/ServicesView';
import Admin from './views/AdminView';
import FAQ from './components/FAQ/FAQ.jsx'
import ErrorPage from './views/ErrorPage';
<<<<<<< HEAD
import AboutView from './views/AboutView';  
import{Alert} from './components/Login/Login'
import{Login} from './components/Login/Login'
import {Register} from './components/Login/Register'
import { ProtectedRouted } from "./components/Login/ProtectedRouted";
import { ProtectedRoutedAdmin } from './components/Login/ProtectedRouteAdmin';

=======
import AboutView from './views/AboutView';
import { Alert } from './components/Login/Login'
import { Login } from './components/Login/Login'
import { Register } from './components/Login/Register'
import { ProtectedRouted } from "./components/Login/ProtectedRouted";
import { ProtectedRoutedAdmin } from './components/Login/ProtectedRouteAdmin';


>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
import { AuthProvider } from "./context/context";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from './Firebase/firebase-config';

<<<<<<< HEAD
import {firestore} from "./context/context"
import ShoppingCart from  './components/ShoppingCart/ShoppingCart'
=======
import { firestore } from "./context/context"
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5

function App() {
  const [userlog, setUser] = React.useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
<<<<<<< HEAD
    if(docuCifrada.data()){const infoFinal = docuCifrada.data().rol;
    const infoFinal2 = docuCifrada.data().nombre;
    const infoFinal3 = docuCifrada.data().apellido;
    const infoFinal4 = docuCifrada.data().mail;
    return [infoFinal,infoFinal2,infoFinal3,infoFinal4];}
    else{ return 4}
=======
    if (docuCifrada.data()) {
      const infoFinal = docuCifrada.data().rol;
      const infoFinal2 = docuCifrada.data().nombre;
      const infoFinal3 = docuCifrada.data().apellido;
      const infoFinal4 = docuCifrada.data().mail;
      return [infoFinal, infoFinal2, infoFinal3, infoFinal4];
    }
    else { return 4 }
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
<<<<<<< HEAD
      if(typeof rol !== 'number'){
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
    }else{ return 8}});
=======
      if (typeof rol !== 'number') {
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: rol[0],
          nombre: rol[1],
          apellido: rol[2],
          mail: rol[3]
        };
        setUser(userData);
        console.log("userData fianl", userData);
      } else { return 8 }
    });
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

<<<<<<< HEAD
      if (!userlog) {  
=======
      if (!userlog) {
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
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
<<<<<<< HEAD
       <Route path ="/shoppingcart" element ={<ShoppingCart/>}/>
=======
       <Route path ="/shoppingcart" element ={<ShoppingCart userlog={userlog}/>}/>
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
      <Route path ="*" element={<ErrorPage/>}/>
 
    </Routes>
    </AuthProvider>
    </div>
  );
}
export default App;

