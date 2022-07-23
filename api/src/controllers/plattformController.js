const e = require("express");

const { Plattform } = require("../db");

const getPlattforms = async () => {
  try {
    let plattforms = await Plattform.findAll({});

    return plattforms;
  } catch (err) {
    return {
      msg: "Error getPlattforms(plattformController.js)",
      error: err,
    };
  }
};

const getPlattform = async (id) => {
  try {
    let plattform = await Plattform.findByPk(id);
    if (plattform) {
      return plattform;
    }
    return { msg: "Plattform not found" };
  } catch (err) {
    return {
      msg: "Error getPlattform(plattformController.js)",
      error: err,
    };
  }
};

const createPlattform = async (terminal, address, location) => {
  try {
    if (!terminal || !address || !location) {
      return "All fields are required";
    }
    if (typeof terminal !== "string" || typeof address !== "string") {
      return "Only letters are allowed in the terminal/address field";
    }
    const plattform = await Plattform.create({
      terminal,
      address,
      location,
    });

    return "platform created successfully";
  } catch (err) {
    return {
      msg: "Error createPlattform(plattformController.js)",
      error: err,
    };
  }
};

const deletePlattform = async (id) => {
  try {
    const buscarElemento = await Plattform.findByPk(id);
    console.log(buscarElemento);
    if (buscarElemento) {
      Plattform.destroy({ where: { id: id } });
      return { msg: "Platform removed successfully" };
    } else {
      return { msg: "Platform not found" };
    }
  } catch (err) {
    return {
      msg: "Error getPlattforms(plattformController.js)",
      error: err,
    };
  }
};

const putPlattform = async (id, terminal, address, location) => {
  try {
    if (!terminal || !address || !location) {
      return "All fields are required";
    }
    if (typeof terminal !== "string" || typeof address !== "string") {
      return "Only letters are allowed in the terminal/address field";
    }
    const searchPlatform = await Plattform.findByPk(id);
    if (searchPlatform) {
      searchPlatform.terminal = terminal;
      searchPlatform.address = address;
      searchPlatform.location = location;
      console.log(searchPlatform);
      await searchPlatform.save();
      return { msg: "Plattform updated successfully" };
    } else return { msg: "Plattform not found" };
  } catch (err) {
    return {
      msg: "Error getPlattforms(plattformController.js)",
      error: err,
    };
  }
};

module.exports = {
  getPlattforms,
  createPlattform,
  getPlattform,
  deletePlattform,
  putPlattform,
};
