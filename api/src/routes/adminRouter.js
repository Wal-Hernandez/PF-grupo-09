const {Router}=require("express")

const {db}= require("../../firebase")
const {
  getUsers,
} = require("../controllers/userController");
const { User, Cart, Review} = require("../db");
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
router.get('/user',async(req,res)=>{
try{const result = await db.collection('usuarios').get()
const result2 = await result.docs.map(a=> ({
    id: a.id,
    ...a.data(),
  }))
  const users = await getUsers();
  //let AllUsers = [...result2,...users];
  let cosos=result2.map(a=>users.find(b=>b.mail===a.correo))
  result2.forEach((a,i)=>a['usuarioDB']=cosos[i]);
  let usuarios=result2.filter(a=>a['usuarioDB']!==undefined)
 res.status(201).json(usuarios)}





catch{return res.status(400).json('Wrong');}

})



router.get("/:id", async (req, res) => {
    await db.collection("usuarios").doc(req.params.id).delete();
    res.redirect("/");
  });

  router.post("/:id", async (req, res) => {
    const { rol,usuario} = req.body;
    const { id } = req.params;
   try{ 
   
    await User.update({rol:rol},{where:{id:usuario.id}})

    await db.collection("usuarios").doc(id).update( {rol:rol} );
    res.status(200).json("Exito");}
    catch(err){console.log(err)}
  });
module.exports=router;