const { Invoice, Booking } = require("../db");

const getInvoices = async () => {
  try {
    let invoices = await Invoice.findAll({});

    return invoices;
  } catch (err) {
    return {
      msg: "Error getInvoices(invoiceController.js)",
      error: err,
    };
  }
};
const getInvoice = async (id) => {
  try {
    let invoice = await Invoice.findByPk(id, {
      include: {
        model: Booking,
      },
    });
    if (invoice) {
      return invoice;
    }
    return { msg: "Invoice not found" };
  } catch (err) {
    return {
      msg: "Error getInvoice(invoiceController.js)",
      error: err,
    };
  }
};

const createInvoice = async (bookingId, confirmation) => {
  try {
    if (!bookingId || !confirmation) {
      return "All fields are required";
    }
    const fecha = Date(Date.now());

    const invoice = await Invoice.create({
      dateTime: fecha,
      confirmation: confirmation,
      bookingId: bookingId,
    });
    return "invoice created successfully";
  } catch (err) {
    return {
      msg: "Error createInvoice(invoiceController.js)",
      error: err,
    };
  }
};
const deleteInvoiceById = async (id) => {
  try {
    const deleteInvoice = await Invoice.destroy({
      where: { id: id },
    });

    if (deleteInvoice) {
      return { msg: "The invoice has been deleted successfully", valor: true };
    }
    return { msg: "Id invoice not found" };
  } catch (error) {
    return {
      msg: "Error deleteInvoiceById(invoiceController.js)",
      error: error,
    };
  }
};
const updateInvoiceById = async (id, bookingId, confirmation) => {
  try {
    if (!bookingId || !confirmation) {
      return "All fields are required";
    }

    const a = await Invoice.update(
      {
        bookingId,
        confirmation,
      },
      { where: { id: id } }
    );
    if (a[0]) {
      return { msg: "The invoice has been update successfully", valor: true };
    }
    return { msg: "Id invoice not found" };
  } catch (error) {
    return {
      msg: "Error updateInvoiceById(invoiceController.js)",
      error: error,
    };
  }
};

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  deleteInvoiceById,
  updateInvoiceById,
};
