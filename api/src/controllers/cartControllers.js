const { Package,Cart,CartDetail,Hotel,City, Activity,User,Business, Plattform} = require("../db");


const getCart = async (mail) => {
  console.log(mail)
  try {
    //busco el usuario que coincida con el mail que recibo
    let user=await User.findAll({ where: { mail: mail } })

    if (!mail) {
      return "All fields are required";
    }
    let userJson=JSON.parse(JSON.stringify(user));
    //obtengo solo el id de ese usuario
    let id=userJson[0]['id']
    console.log(id)


    let  cart= await Cart.findAll({   // REVISAR RELACIONES DE INCLUDE
      where:{userId:id,
             statusCartId:1},
include:[{
  model: User,
},
{
  model: CartDetail,
  include:{
    model:Package,
    include:[{model:Hotel,},{ model:City},{model:Activity},{model: Business},{model:Plattform}]
  }
}
]
  });

    return cart;
  } catch (err) {
    return {
      msg: "Error getCart(cartController.js)",
      error: err,
    };
  }
};

const createCart = async (   
    mail
) => {
  try {
    console.log("CREATECART: mail:",mail)
    if (!mail) {
      return "All fields are required";
    }
    let user=await User.findAll({ where: { mail: mail } })
   
    let userJson=JSON.parse(JSON.stringify(user));
    // console.log(userJson)
    let id=userJson[0]['id']
    // console.log(id)

    const cart = await Cart.create({
        userId:id,
        statusCartId:1
    });
  
    return " created cart successfully";
  } catch (err) {
    return {
      msg: "Error createCart(cartController.js)",
      error: err,
    };
  }
};
const deleteCartById = async (id) => {
  try {
    const deleteCart = await Cart.destroy({
      where: { id: id },
    });

    if (deleteCart) {
      return { msg: "The cart has been deleted successfully", valor: true };
    }
    return { msg: "Id cart not found" };
  } catch (error) {
    return {
      msg: "Error deleteCartById(cartController.js)",
      error: error,
    };
  }
};

const clearCart=async (id) => {
  try {
    const clearCart = await CartDetail.destroy({
      where: { cartId: id },
    });

    if (clearCart) {
      return { msg: "The cart has been clear successfully", valor: true };
    }

    return { msg: "Id cart not found" };
  } catch (error) {
    return {
      msg: "Error clearCart(cartController.js)",
      error: error,
    };
  }
};


const updateCartById = async (
 id,userId,statusCartId
) => {
  try {
    if (!id||userId||!statusCartId) return "All fields are required";
    
   
    const cartUpdate = await Cart.update(
      {
        userId,statusCartId
      },
      { where: { id: id } }
    );
    if (cartUpdate[0]) {
      return { msg: "The cart has been update successfully", valor: true };
    }
    return { msg: "Id cart not found" };
  } catch (error) {
    return {
      msg: "Error updateCartById(cartController.js)",
      error: error,
    };
  }
};

const finishCartById = async (
  id
 ) => {
   try {
     if (!id) return "All fields are required";
     
    const statusCartId=3
     const cartUpdate = await Cart.update(
       {
         statusCartId
       },
       { where: { id: id } }
     );
     if (cartUpdate[0]) {
       return { msg: "The cart has been update successfully", valor: true };
     }
     return { msg: "Id cart not found" };
   } catch (error) {
     return {
       msg: "Error updateCartById(cartController.js)",
       error: error,
     };
   }
 };





module.exports = {
    getCart,
    deleteCartById,
    createCart,
    updateCartById,
    clearCart,
    finishCartById
};
