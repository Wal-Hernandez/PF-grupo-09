const {Router}=require("express")

const {db}= require("../../firebase")
const router=Router()

router.get('/',async(req,res)=>{
try{const result = await db.collection('usuarios').get()
const result2 = await result.docs.map(a=> ({
    id: a.id,
    ...a.data(),
  }))
 res.status(201).json(result2)}

catch(err){

   return res.status(400).json(err);


}

})

router.get("/:id", async (req, res) => {
    await db.collection("usuarios").doc(req.params.id).delete();
    res.redirect("/");
  });

  router.post("/:id", async (req, res) => {
    const { rol } = req.body;
    const { id } = req.params;
   try{ await db.collection("usuarios").doc(id).update( {rol:rol} );
    res.status(200).json("Exito");}
    catch(err){console.log(err)}
  });
module.exports=router;