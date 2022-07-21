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