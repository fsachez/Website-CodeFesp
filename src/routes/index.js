const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  contentHTML = `
    <h1>User Information</h1>
    <ul>
      <li>Username: ${name}</li>
      <li>User Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>
  `;
  console.log(contentHTML);

  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: "fesanchez394@misena.edu.co",
      pass: "safJLWNQX3wGrOyt",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "'CodeFesp Server' <fesanchez394@misena.edu.co>",
    to: "sanchezfabianenrique@gmail.com",
    subject: "Website Contact Form",
    html: contentHTML,
    //text: "Aqui Toy :=>",
  });

  console.log("Message sent", info.messageId);

  res.redirect("/success.html");
});

module.exports = router;
