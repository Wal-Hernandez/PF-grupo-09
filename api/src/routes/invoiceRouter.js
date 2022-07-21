const {Router}=require("express")
const {createInvoice,getInvoice,getInvoices}=require("../controllers/invoiceController")

const router=Router()

router.get("/",async(req,res)=>{
    try { 
         const invoices=await getInvoices()
        
         return res.status(200).json(invoices)
    } catch (err) {
       return res.status(400).json(err);
    }
})
router.get("/:id",async(req,res)=>{
    try { 
         const {id}=req.params
         const invoice=await getInvoice(id)
        
         return res.status(200).json(invoice)
    } catch (err) {
       return res.status(400).json(err);
    }
})


router.post("/",async (req,res)=>{
    try {
        const{bookingId,confirmation}=req.body
        let invoice=await createInvoice(bookingId,confirmation)
        return res.status(201).json(invoice)
    } catch (err) {
        return res.status(400).json(err);
    }
})


module.exports=router;