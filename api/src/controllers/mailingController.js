const nodemailer = require('nodemailer');
require('dotenv').config();
const{USER_MAIL,PASS_MAIL}=process.env

const enviarMail = async (mail) =>{

 const config={
host:'smtp.gmail.com',
port: 465,
auth: {
     user: USER_MAIL,
      pass: PASS_MAIL
      }
 }

const mensaje ={
from: 'carloslamas3.0@gmail.com',
to:`${mail}`,
subject: 'Bienvenid@ a Buspack',
text: 'Tu registro ha sido satisfactorio. Disfruta de la aventura <3'

}
const transport = nodemailer.createTransport(config)
const info =  await transport.sendMail(mensaje)
return info
}

const sendPaymentConfirmation = async (mail) =>{

     const config={
    host:'smtp.gmail.com',
    port: 465,
    auth: {
         user: USER_MAIL,
          pass: PASS_MAIL
          }
     }
    
    const mensaje ={
    from: 'carloslamas3.0@gmail.com',
    to:`${mail}`,
    subject: 'Pago',
    text: 'Tu pago ha sido confirmado. Te esperamos'
    
    }
    const transport = nodemailer.createTransport(config)
    const info =  await transport.sendMail(mensaje)
    return info
    }



module.exports={enviarMail,sendPaymentConfirmation}