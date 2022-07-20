const { Invoice} = require("../db");

const getInvoices= async () => {
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
  const getInvoice= async (nro) => {
    try {
      let invoices = await Invoice.findByPk(nro);
      
      return invoices;
    } catch (err) {
      return {
       msg: "Error getInvoice(invoiceController.js)",
       error: err,
     };
    }
  };

  const createInvoice = async (bookingId,confirmation) => {
    try {
    
      const Invoice=await Invoice.create(
        {
        dateTime: Date. toISOString(),
        confirmation:confirmation,
        bookingId:bookingId
        })
      
       return "invoice created successfully"
         
        
    } catch (err) {
      return {
        msg:"Error createInvoice(invoiceController.js)",
        error: err,
      };
    }
  };


  module.exports={getInvoices,getInvoice,createInvoice}