const {Booking,User,Package} = require('../db');

const getAllBookings= async ()=>{
try{
  const reservations = await Booking.findAll(
   {
    include: [
      { model: User },
      { model: Package}
    ]
   } 
  )

return reservations
}
catch(err){
  return {
    msg:"Error getAllBookings(bookingController.js)",
    error: err,
  };
 }
}

const getBooking= async (id)=>{
  try{
    const reservation = await Booking.findByPk(id,{
      include: [
        { model: User ,
        attributes:['name', 'mail']},
        { model: Package,
        attributes:[]}
      ]
     } )
  
  return reservation
  }
  catch(err){
    return {
      msg:"Error getBooking(bookingController.js)",
      error: err,
    };
  }
}

  const createBooking = async (numberPeople,amount,packageId,userId) => {
    try {
  
    const fecha=Date(Date.now());
    console.log(fecha.toString())
      const booking=await Booking.create(
        {
        dateTime: fecha,
        numberPeople:numberPeople,
        amount:amount,
        status:'reserved',
        packageId:packageId,
        userId:userId
        })
      
       return "booking created successfully"
         
        
    } catch (err) {
      return {
        msg:"Error createBooking(bookingController.js)",
        error: err,
      };
    }
  };

module.exports={getAllBookings,getBooking,createBooking}
