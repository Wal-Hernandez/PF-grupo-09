const {Booking} = require('../db');
module.exports={
getAllBooking: async function(next){
try{let reservations = await Booking.findAll(next)

return reservations
}
catch(error){next()}


}, 
getBookingByNumber: async function(id,next){
    try{ let reserve = await Booking.findByPk(id)
    return reserve;
    
    }
    catch(error){next()}

},
AddBooking: async function(dateTime, numberPeople, amount,description){
try{ const reserve = await Booking.create({dateTime:dateTime,numberPeople:Number(numberPeople),amount:Number(amount),
description:description
})

return 'Booking successfully created'


}
catch(error){return `Rayooos ${error}`}
},

getDescriptionById: async function(id){
    try{
      const stat= await Booking.findByPk(Number(id))
      return stat.description    
         }
     catch{ 
   return {msg:'There is no description'}
             }
},



}