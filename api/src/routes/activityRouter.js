const {Router}=require("express")
const {getActivitiesFromCity,getActivities,createActivity}=require("../controllers/activityController")


const router=Router()

router.get("/",async(req,res)=>{
    try {        
         const activities=await getActivities()
        // console.log(activities) ver las actividades de una ciudad
         return res.status(200).json(activities)
    } catch (err) {
       return res.status(400).json(err);
    }
})

router.get("/:id",async(req,res)=>{
    try {
         const {id}=req.params
         console.log(id)
         const activities=await getActivitiesFromCity(id)
        // console.log(activities) ver las actividades de una ciudad
         return res.status(200).json(activities)
    } catch (err) {
       return res.status(400).json(err);
    }
})


router.post("/",async (req,res)=>{
    try {
        console.log(req.body)
        const{ name,description,price,cityId}=req.body
        let activity=await createActivity(name,description,price,cityId)
        return res.status(201).json(activity)
    } catch (err) {
        return res.status(400).json(err);
    }
})


module.exports=router;