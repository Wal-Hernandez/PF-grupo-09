const {Router}=require("express")
const {getActivitiesFromCity,getActivities,createActivity,deleteActivityById,updateActivity}=require("../controllers/activityController")


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
        // console.log(activities)   ver las actividades de una ciudad
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

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const activityRemove = await deleteActivityById(id);
      return res.status(200).json(activityRemove);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const{name,description,price,cityId}=req.body

    try {
      const activityUpdate = await updateActivity(id,name,description,price,cityId);
      return res.status(200).json(activityUpdate);
    } catch (error) {
      return res.status(400).json(error);
    }
  });





module.exports=router;