const {Router}=require("express")
const {getPlattforms,createPlattform}=require("../controllers/plattformController")

const router=Router()

router.get("/",async(req,res)=>{
    try { 
         const plattforms=await getPlattforms()
        
         return res.status(200).json(plattforms)
    } catch (err) {
       return res.status(400).json(err);
    }
})

router.post("/",async (req,res)=>{
    try {
        const{ terminal,address,location}=req.body
        let plattform=await createPlattform(terminal,address,location)
        return res.status(201).json(plattform)
    } catch (err) {
        return res.status(400).json(err);
    }
})


module.exports=router;