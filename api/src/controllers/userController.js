const { User, Cart, ReviewHotel, CartDetail, ReviewActivity, ReviewBusiness} = require("../db");

const getUsers = async () => {
  try {
    let allUsers = await User.findAll({
      include: [
        { model: Cart,
          include:{
            model:CartDetail}
           }
        ,{model:ReviewHotel},
        {model:ReviewActivity},
        {model:ReviewBusiness}
    ]
      // include: {
      //   model: TypeUser,
      //   attributes: ["description"],
      // },
    });

    return allUsers;

  } catch (err) {
    return {
      msg: "Error getUsers(userControllers.js)",
      error: err,
    };
  }
 

};

const getUser = async (id) => {

  try {
    let user = await User.findByPk(id, {
      include:[
        { model: Cart,
          include:{
            model:CartDetail}
           }
        ,{model:ReviewHotel},
        {model:ReviewActivity},
        {model:ReviewBusiness}
      ]
    });

    return user;
  } catch (err) {
    return {
      msg: "Error getUser(userControllers.js)",
      error: err,
    };
  }

};

const createUser = async (name, surname, mail, rol) => {
  console.log(name,surname,mail,rol)
  try {

    const UserCreate = await User.create({
      name,
      surname,
      mail,
      rol,
    });
     
    return "Usercreated successfully";
  } catch (err) {
    return {
      msg: "Error createUser(UserController.js)",
      error: err,
    };
  }
};

const deleteUserById = async (id) => {
  try {
    const deleteUser = await User.destroy({
      where: { id: id },
    });

    if (deleteUser) {
      return { msg: "The User has been deleted successfully", valor: true };
    }
    return { msg: "Id User not found" };
  } catch (error) {
    return {
      msg: "Error deleteUserById(userController.js)",
      error: error,
    };
  }
};

// const updateUserById = async ( id,name, surname, mail, password, typeUserId) => {
//   try {
//     if (!name || !surname||!mail||!password ||!typeUserId) {
//       return "All fields are required";
//     }
//     if (typeof name !== "string") {
//       return "Only letters are allowed in the name field";
//     }
//     if(mail.includes(!'@')){
//         return "The email must contain an @"
//     }
//     if(mail.includes(mail.length>=6)){
//       return "The email must be 6 or more characters"
//   }
//   if(mail.length>=6){
//     return "The password must be 6 or more characters"
// }

//     const user = await User.update(
//       {
//         name,
//         surname,
//         mail,
//         password,
//         typeUserId
//       },
//       { where: { id: id } }
//     );
//     if (user[0]) {
//       return { msg: "The User has been update successfully", valor: true };
//     }
//     return { msg: "Id User not found" };
//   } catch (error) {
//     return {
//       msg: "Error updateUserById(userController.js)",
//       error: error,
//     };
//   }
// };

module.exports = {
  getUsers,
  createUser,
  getUser,
  // updateUserById,
  deleteUserById,
};