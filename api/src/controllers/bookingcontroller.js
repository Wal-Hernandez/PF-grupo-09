const { Booking, User, Package } = require("../db");

const getAllBookings = async () => {
  try {
    const reservations = await Booking.findAll({
      include: [{ model: User }, { model: Package }],
    });

    return reservations;
  } catch (err) {
    return {
      msg: "Error getAllBookings(bookingController.js)",
      error: err,
    };
  }
};

const getBooking = async (id) => {
  try {
    const reservation = await Booking.findByPk(id, {
      include: [
        { model: User, attributes: ["name", "mail"] },
        { model: Package, attributes: [] },
      ],
    });
    if (reservation) {
      return reservation;
    }
    return { msg: "Reservation not found" };
  } catch (err) {
    return {
      msg: "Error getBooking(bookingController.js)",
      error: err,
    };
  }
};

const createBooking = async (numberPeople, amount, packageId, userId) => {
  try {
    if (!numberPeople || !amount || !packageId || !userId) {
      return "All fields are required";
    }
    const fecha = Date(Date.now());
    const booking = await Booking.create({
      dateTime: fecha,
      numberPeople: numberPeople,
      amount: amount,
      status: "reserved",
      packageId: packageId,
      userId: userId,
    });

    return "Booking created successfully";
  } catch (err) {
    return {
      msg: "Error createBooking(bookingController.js)",
      error: err,
    };
  }
};

const deleteBookingById = async (id) => {
  try {
    const deleteBooking = await Booking.destroy({
      where: { id: id },
    });

    if (deleteBooking) {
      return { msg: "The booking has been deleted successfully", valor: true };
    }
    return { msg: "Id booking not found" };
  } catch (error) {
    return {
      msg: "Error deleteBookingById(bookingController.js)",
      error: error,
    };
  }
};

const updateBookingById = async (
  id,
  numberPeople,
  amount,
  packageId,
  userId
) => {
  try {
    if (!numberPeople || !amount || !packageId || !userId) {
      return "All fields are required";
    }
    const a = await Booking.update(
      {
        numberPeople,
        amount,
        packageId,
        userId,
      },
      { where: { id: id } }
    );
    if (a[0]) {
      return { msg: "The booking has been update successfully", valor: true };
    }
    return { msg: "Id booking not found" };
  } catch (error) {
    return {
      msg: "Error updateBookingById(bookingController.js)",
      error: error,
    };
  }
};

module.exports = {
  getAllBookings,
  getBooking,
  createBooking,
  deleteBookingById,
  updateBookingById,
};
