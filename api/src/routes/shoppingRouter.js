const {Router}=require("express")
const {getShoppings}=require("../controllers/shoppingControllers")


const router=Router()

router.get("/:mail",async(req,res)=>{
    const {mail}=req.params
    try {
         
         const shoppings=await getShoppings(mail)
       
         return res.status(200).json(shoppings)
    } catch (err) {
       return res.status(400).json(err);
    }
})

module.exports = router;
