const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


"use strict";

// async..await is not allowed in global scope, must use a wrapper
async function main({senderEmail, message}) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: {senderEmail}, // sender address
    to: "varisharashid01@gmail.com", // list of receivers
    subject: {subject}, // Subject line
    text: {message}, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


router.post("/", (req, res) => {
    // const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
        from: email,
        subject: "Contact Form Submission",
        html: `
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    };
    main({email,message}).catch(console.error);
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ error: "ERROR" });
      } else {
        res.json({ status: "ok" });
      }
    });
  });