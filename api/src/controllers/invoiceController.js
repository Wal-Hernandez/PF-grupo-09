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
  
  const deleteInvoiceById = async (id) => {
  
    try {
        const invoice = await Invoice.destroy({
          where: { id: id },
        });
        if(invoice){
          return {
          msg: "The invoice has been removed successfully",
          valor:true,
        }
      }
        return {
         msg: "The invoice cannot be removed because the id does not exist",     
        }  
    } catch (err) {
      return{
        msg: "Error deleteInvoiceById(invoiceController.js)",
        error: err,
      }
    }
  };
  
  const updateInvoice = async (id,dateTime,confirmation,bookingId) => {
    try {
      const invoice = await Invoice.update(
        {
        dateTime: dateTime,
        confirmation:confirmation,
        bookingId:bookingId
        },
        { where: { id: id } }
      );
      if(booking[0])
      return {
        msg: "the invoice was updated successfully",
        valor:true,
      }
      return {
        msg: "the invoice to update was not found",
      }
  
    } catch (err) {
      return{
        msg: "Error updateInvoice(invoiceController.js)",
        error: err,
      }
    }
  };

  module.exports={getInvoices,getInvoice,createInvoice,deleteInvoiceById,updateInvoice}