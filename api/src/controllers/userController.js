const { User, TypeUser } = require("../db");

<<<<<<< HEAD

const getUser = async () => {
    try {
      let allUsers = await User.findAll({
        include: {
          model: TypeUser,
          attributes: ["description"],
        },
      });
      
      return allUsers;
    } catch (err) {
      return {
        msg: "Error getUser(userControllers.js)",
        error: err,
      };
    }
  };
  const createUser = async (
    name,
    surname,
    mail,
    password,
    typeUserId,
  ) => {
    try {
      const UserCreate = await User.create({
         name,
        surname,
        mail,
        password,
        typeUserId,
      });
  
      return "Usercreated successfully";
    } catch (err) {
      return {
        msg: "Error createUser(UserController.js)",
        error: err,
      };
    }
  };
  
  module.exports = { getUser, createUser };
=======
const getUsers = async () => {
  try {
    let allUsers = await User.findAll({
      include: {
        model: TypeUser,
        attributes: ["description"],
      },
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
    let user = await User.findByPk(id,{
      include: {
        model: TypeUser,
        attributes: ["description"],
      },
    });

    return user;
  } catch (err) {
    return {
      msg: "Error getUser(userControllers.js)",
      error: err,
    };
  }
};
const createUser = async (name, surname, mail, password, typeUserId) => {
  try {
    const UserCreate = await User.create({
      name,
      surname,
      mail,
      password,
      typeUserId,
    });

    return "Usercreated successfully";
  } catch (err) {
    return {
      msg: "Error createUser(UserController.js)",
      error: err,
    };
  }
};

module.exports = { getUsers, createUser,getUser };
>>>>>>> 3fad8ad1dd70417f984d6ee6d2d15ee5e54c607e
