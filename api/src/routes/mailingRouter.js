const {Router}=require("express")
const { enviarMail, sendPaymentConfirmation } = require("../controllers/mailingController")

const router=Router()
router.post('/', async (req,res)=>{
try{ const {mail} =req.body
await enviarMail(mail)
res.status(201).json('Exitoo')
}

catch(err){
    return res.status(400).json(err);
}




})

router.post('/confirmation', async (req,res)=>{
    try{ const {mail} =req.body /// no es por body
    await sendPaymentConfirmation(mail)
    res.status(201).json('Exitoo')
    }
    
    catch(err){
        return res.status(400).json(err);
    }
    
    
    
    
    })


module.exports=router;