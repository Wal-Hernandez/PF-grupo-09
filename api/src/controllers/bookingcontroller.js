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

  const deleteBookingById = async (id) => {
  
    try {
        const deleteBooking = await Booking.destroy({
          where: { id: id },
        });
        if(deleteBooking){
          return {
          msg: "The booking has been removed successfully",
          valor:true,
        }
      }
        return {
         msg: "The booking cannot be removed because the id does not exist",     
        }  
    } catch (err) {
      return{
        msg: "Error deleteBookingById(bookingController.js)",
        error: err,
      }
    }
  };
  
  const updateBooking = async (id,dateTime,numberPeople,amount,status,packageId,userId) => {
    try {
      const booking = await Booking.update(
        {
          dateTime: dateTime,
          numberPeople:numberPeople,
          amount:amount,
          status:status,
          packageId:packageId,
          userId:userId
        },
        { where: { id: id } }
      );
      if(booking[0])
      return {
        msg: "the booking was updated successfully",
        valor:true,
      }
      return {
        msg: "the booking to update was not found",
      }
  
    } catch (err) {
      return{
        msg: "Error updateBooking(bookingController.js)",
        error: err,
      }
    }
  };

module.exports={getAllBookings,getBooking,createBooking,deleteBookingById,updateBooking}
