const { Package,CartDetail} = require("../db");


const getCartDetails = async (id) => {
  try {
    let  cartdetails= await CartDetail.findAll({
      where:{cartId:id},
      include: {
        model: Package,
        attributes: [],
        } 
    });

    return cartdetails;
  } catch (err) {
    return {
      msg: "Error getCartDetails(cartDetailController.js)",
      error: err,
    };
  }
};

const getCartDetail = async (id) => {
  try {
    let detail = await CartDetail.findByPk(id, {
      include: {
        model: Package,
        attributes: [],
      },
    });
    return detail;
  } catch (err) {
    return {
      msg: "Error getDetail(cartDetailController.js)",
      error: err,
    };
  }
};
const createCartDetail = async (
    idCart,
    idPackage,
    numberPeople,
    isQualified,
) => {
  try {
    if (
        !idCart||
        !idPackage||
        !numberPeople
       
    ) {
      return "All fields are required";
    }
  
    const cartDetailCreate = await CartDetail.create({
        numberPeople,
        isQualified,
        packageId:idPackage,
        cartId: idCart 
    });
  
    return " created cartDetail successfully";
  } catch (err) {
    return {
      msg: "Error createCartDetail(cartDetailController.js)",
      error: err,
    };
  }
};
const deleteCartDetailById = async (id) => {
  try {
    const deleteCartDetail = await CartDetail.destroy({
      where: { id: id },
    });

    if (deleteCartDetail) {
      return { msg: "The cartDetail has been deleted successfully", valor: true };
    }
    return { msg: "Id cartDetail not found" };
  } catch (error) {
    return {
      msg: "Error deleteCartDetailById(cartDetailController.js)",
      error: error,
    };
  }
};
const updatecartDetailById = async (
 id, numberPeople
) => {
  try {
    if (!id||numberPeople) return "All fields are required";
    
    // CartDetail.findByPk(id)
    //  id_package
    //  Package.findByPk(id_package)
    //  stock >== numberPeople

    const a = await CartDetail.update(
      {
        numberPeople:numberPeople 
      },
      { where: { id: id } }
    );
    if (a[0]) {
      return { msg: "The cartDetail has been update successfully", valor: true };
    }
    return { msg: "Id cartDetail not found" };
  } catch (error) {
    return {
      msg: "Error updatecartDetailById(cartDetailController.js)",
      error: error,
    };
  }
};
const addPeoplecartDetailById= async (
  id,numberPeople
 ) => {
   try {
    
     numberPeople=Number(numberPeople)+1;
     console.log("NumberP:",numberPeople)
     const a = await CartDetail.update(
       {
         numberPeople:numberPeople 
       },
       { where: { id: id } }
     );
     if (a[0]) {
       return { msg: "The cartDetail has been update successfully", valor: true };
     }
     console.log("A:",a)
     return { msg: "Id cartDetail not found" };
   } catch (error) {
     return {
       msg: "Error updatecartDetailById(cartDetailController.js)",
       error: error,
     };
   }
 };
 const deletePeoplecartDetailById= async (
  id,numberPeople
 ) => {
   try {
    
     numberPeople=Number(numberPeople)-1;
     console.log("NumberP:",numberPeople)
     const a = await CartDetail.update(
       {
         numberPeople:numberPeople 
       },
       { where: { id: id } }
     );
     if (a[0]) {
       return { msg: "The cartDetail has been update successfully", valor: true };
     }
     console.log("A:",a)
     return { msg: "Id cartDetail not found" };
   } catch (error) {
     return {
       msg: "Error updatecartDetailById(cartDetailController.js)",
       error: error,
     };
   }
 };
 


module.exports = {
    getCartDetails,
    updatecartDetailById,
    deleteCartDetailById,
    createCartDetail,
    getCartDetail,
    addPeoplecartDetailById,
    deletePeoplecartDetailById
};
