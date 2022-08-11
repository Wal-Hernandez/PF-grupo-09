
const { Package} = require("../db");


const updateStock = async (
  id,
  numberPeople
 ) => {
   try {
     if (!id||! numberPeople) return "All fields are required";
     
     let package= await Package.findByPk(id);
     package=JSON.parse(JSON.stringify(package));
     stockActual=package['stock'];

     stockFinal=Number(stockActual)-Number(numberPeople)

     const packageUpdate = await Package.update(
       {
         stock:stockFinal
       },
       { where: { id: id } }
     );
     if (packageUpdate[0]) {
       return { msg: "The packages has been update successfully", valor: true };
     }
     return { msg: "Id packages not found" };
   } catch (error) {
     return {
       msg: "Error updateStock(stockController.js)",
       error: error,
     };
   }
 };



module.exports = {updateStock };
