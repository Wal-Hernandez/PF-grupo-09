const {Router}=require("express")
const {createInvoice,getInvoice,getInvoices,deleteInvoiceById,updateInvoice}=require("../controllers/invoiceController")

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

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const invoice = await deleteInvoiceById(id);
      return res.status(200).json(invoice);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  router.put("/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const {
        dateTime,
        confirmation,
        bookingId
          } = req.body;
   
      const invoice = await updateInvoice(
        id,
        dateTime,
        confirmation,
        bookingId
      );
      return res.status(200).json(invoice);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

module.exports=router;