const {getAllBooking,getBookingByNumber,AddBooking,getDescriptionById} =require('../controllers/bookingcontroller.js')
const {Router}=require("express")
const router=Router()
router.get('/booking', async(req,res,next)=>{

    const{num} =req.query;
    try{ if(!num){
    let allBooking = await getAllBooking()
    res.json(allBooking);
    }
    let numBooking = await getBookingByNumber(Number(num));
    
    if(numBooking){
        console.log(numBooking)
    res.json(numBooking)
    }
    
    
    }
    catch(error){()=>{ next(error)}}
    
    })
    router.get('/status', async(req,res,next)=>{

        const{id} = req.query
        try{ 
            let numBooking = await getDescriptionById(Number(id));
            
            if(numBooking){
                
            res.json(numBooking)
            }
        }
            catch(error){()=>{ next(error)}}
    })
    
    router.post('/booking', async(req,res,next)=>{
    const{dateTime, numberPeople, amount, description}= req.body
    // let a = new Date(dateTime);
    // console.log(a)
    try{ let resp =await AddBooking(dateTime,numberPeople,amount,description)
        res.json(resp)}
    catch(error){next(error)}
    
    
    })
    module.exports=router;