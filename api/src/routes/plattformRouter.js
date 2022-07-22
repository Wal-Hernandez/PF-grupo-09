const {Router}=require("express")
const {getPlattforms,createPlattform,getPlattform, deletePlattform, putPlattform}=require("../controllers/plattformController")

const router=Router()

router.get("/",async(req,res)=>{
    try { 
         const plattforms=await getPlattforms()
        
         return res.status(200).json(plattforms)
    } catch (err) {
       return res.status(400).json(err);
    }
})

router.get("/:id",async(req,res)=>{
    try { 
        const {id}=req.params
         const plattform=await getPlattform(id)
        
         return res.status(200).json(plattform)
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

router.delete("/:id",async (req,res)=>{
    const {id} = req.params
    if(id) {
        try { 
             let deleteP=await deletePlattform(id) 
             console.log
             return res.status(200).json(deleteP)    
    } catch (err) {
        return res.status(400).json(err);
    }
    } else {
        return res.status(400).json("Cannot remove platform") 
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { terminal, address, location } = req.body;
    if(id) {
     try {
         let searchP=await putPlattform(id, terminal, address, location) 
         return res.status(200).json(searchP)    
        } catch (err) {
            return res.status(400).json(err);
        }
        } else {
            return res.status(400).json("cannot update platform") 
        }
  });


module.exports=router;