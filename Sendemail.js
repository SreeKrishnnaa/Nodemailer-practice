const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
    service:'gmail.com',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user:process.env.USER,
      pass: process.env.PASS,
    },
  });

  const info = {
    from: {
        name:"sree",
        address:process.env.USER
    }, // sender address
    to: "sreekrishnnaa2003@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
  const sendMail=async(transporter,info)=>{
    try{
await transporter.sendMail(info)
console.log("email sent!!");
    }
    catch(error){
console.error(error);
    }
  }

  sendMail(transporter,info);