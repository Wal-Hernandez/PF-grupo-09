const { Package,Cart,CartDetail,Hotel,City, Activity,User,Business, Plattform} = require("../db");


const getCart = async (id) => {
  try {
    let  cart= await Cart.findAll({   // REVISAR RELACIONES DE INCLUDE
      where:{id:id,
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
}]/* ,
    include: [{
        model: CartDetail,
        where: {
          cartId: id    
        },
        include: [{
            model: Package,
            include: [{
              model: Hotel,
              model: City, 
              model: Activity,                
          }]               
        }]
    }
  ] */
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
    
    userId,
   
) => {
  try {
    if (!userId) {
      return "All fields are required";
    }
  
    const cart = await Cart.create({
        userId:userId,
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

module.exports = {
    getCart,
    deleteCartById,
    createCart,
    updateCartById
};
