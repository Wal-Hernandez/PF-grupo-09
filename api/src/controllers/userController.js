const { User, TypeUser } = require("../db");

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

module.exports = { getUser, createUser };
