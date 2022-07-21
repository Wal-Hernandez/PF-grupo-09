<<<<<<< HEAD
const {Router} = require("express")
const router = Router()
const {TypeUser} = require('../db')



router.post("/",async(req,res)=>{ 
	let [admin, adminCreated] = await TypeUser.findOrCreate({ 
		where: { description: "admin"
		},
		defaults: {
		  description: "admin"
		}
	});
    let [client, clientCreated] = await TypeUser.findOrCreate({ 
		where: { description: "client"
		},
		defaults: {
		  description: "client"
		}
	});
	let array=[admin.dataValues, client.dataValues]
    res.send(array)
})

module.exports=router;
=======
const { Router } = require("express");
const router = Router();
const { getUserType } = require("../controllers/typeUserController");

router.post("/", async (req, res) => {
  try {
    const userType = await getUserType();
    return res.sendStatus(201).json(userType);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
>>>>>>> 3fad8ad1dd70417f984d6ee6d2d15ee5e54c607e
