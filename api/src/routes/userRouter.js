const { Router } = require("express");
const { createCart,getCart } = require("../controllers/cartControllers");
const router = Router();
const {createCartDetail}=require("../controllers/cartDetailControllers")
const {
  getUser,
  createUser,
  getUsers,
} = require("../controllers/userController");
 


router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, surname, mail, rol,storage } = req.body;
    //console.log(req.body);
    //crea un usuario nuevo 
    let userCreated = await createUser(name, surname, mail, rol);
    // creo un carrito vacio a ese usuario , la primera vez que se crea
    let cartCreated= await createCart(mail);
    const carrito=await getCart(mail);
    const carritoJson=JSON.parse(JSON.stringify(carrito))
    const id=carritoJson[0]['id']
    console.log("CARRITO ID:"+id)
    
     //CREAR DETALLE DE CARRITO EN LA DB SI TIENE LOCALSTORAGE
   console.log(storage)
  
   for (let i = 0; i < storage.length; i++) {
    let detalle=await createCartDetail (
      idCart=id,
      idPackage=storage[i].id,
      numberPeople=storage[i].quantity,
      isQualified=false
  )
   }
    
    let cartUser=await getCart(mail);

    return res.status(201).json(cartUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
