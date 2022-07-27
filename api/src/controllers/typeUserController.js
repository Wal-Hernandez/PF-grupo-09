const { TypeUser } = require("../db");

const getUserType = async () => {
  try {
    let [admin, adminCreated] = await TypeUser.findOrCreate({
      where: { description: "admin" },
      defaults: {
        description: "admin",
      },
    });
    let [client, clientCreated] = await TypeUser.findOrCreate({
      where: { description: "client" },
      defaults: {
        description: "client",
      },
    });
    let array = [admin.dataValues, client.dataValues];
    return array;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUserType };
