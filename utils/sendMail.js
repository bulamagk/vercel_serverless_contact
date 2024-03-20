const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async function sendMail(data) {
  const { firstname, lastname, email, phone, message } = data;

  if (!(firstname && lastname && email && phone && message)) {
    return { success: false, message: "All fields are required" };
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // Mail Options
  const from = process.env.USER;
  const to = "bulamagk@gmail.com";
  const subject = `New Message From ${firstname}`;

  const html = `
   <h2>You have a new message from: </h2>
    <p>Name: ${firstname} ${lastname} </p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phone}</p>
    <br>
    <h3>Message</h3>
    <p>${message}</p>
  `;
  const mailOptions = {
    from,
    to,
    subject,
    html,
  };

  // Send mail
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Your message is sent successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
