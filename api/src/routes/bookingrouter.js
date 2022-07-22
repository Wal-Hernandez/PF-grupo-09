const {createBooking,getAllBookings,getBooking,deleteBookingById,updateBooking} =require('../controllers/bookingController.js')
const {Router}=require("express")
const router=Router()

router.get("/",async(req,res)=>{
    try {
         const bookings=await getAllBookings()
        
         return res.status(200).json(bookings)
    } catch (err) {
       return res.status(400).json(err);
    }
})

router.get("/:id",async(req,res)=>{
    try {
         const {id}=req.params
         
         const booking=await getBooking (id)
       
         return res.status(200).json(booking)
    } catch (err) {
       return res.status(400).json(err);
    }
})


router.post("/",async (req,res)=>{
    try {
        console.log(req.body)
        const{ numberPeople,amount,packageId,userId}=req.body
        let booking=await createBooking(numberPeople,amount,packageId,userId)
        return res.status(201).json(booking)
    } catch (err) {
        return res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await deleteBookingById(id);
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {
      name,
      location,
      stars,
      phone,
      price,
      pool,
      wifi,
      gym,
      urlImage,
      cityId,
    } = req.body;
    try {
      const hotel = await updateHotelById(
        id,
        name,
        location,
        stars,
        phone,
        price,
        pool,
        wifi,
        gym,
        urlImage,
        cityId
      );
      return res.status(200).json(hotel);
    } catch (error) {
      return res.status(400).json(error);
    }
  });


module.exports=router;