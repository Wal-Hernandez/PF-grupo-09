const { Invoice,Booking} = require("../db");


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
  const getInvoice= async (id) => {
    try {
      let invoice = await Invoice.findByPk(id,{
        include: {
          model: Booking,
       
        },
      });
      
      return invoice;
    } catch (err) {
      return {
       msg: "Error getInvoice(invoiceController.js)",
       error: err,
     };
    }
  };



  const createInvoice = async (bookingId,confirmation) => {
    try {
    
      const fecha=Date(Date.now());
     
      const invoice=await Invoice.create(
        {
        dateTime: fecha,
        confirmation:confirmation,
        bookingId:bookingId
        })
      console.log(invoice)
       return "invoice created successfully"
         
        
    } catch (err) {
      return {
        msg:"Error createInvoice(invoiceController.js)",
        error: err,
      };
    }
  };


  module.exports={getInvoices,getInvoice,createInvoice}