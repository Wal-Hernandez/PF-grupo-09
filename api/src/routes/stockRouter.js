const {Router}=require("express")
const {updateStock}=require("../controllers/stockController.js")


const router=Router()

router.put("/",async(req,res)=>{
    const {id,numberPeople}=req.body
    try {
         
         const reduceStock=await updateStock(id,numberPeople)
       
         return res.status(200).json(reduceStock)
    } catch (err) {
       return res.status(400).json(err);
    }
})

module.exports = router;