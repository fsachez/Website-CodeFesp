const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.get("/", (req, res) =>
  res.render("index.ejs", { title: "Website with Node CodeFesp" })
);

router.get("/about", (req, res) =>
  res.render("about", { title: "About CodeFesp" })
);

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact CodeFesp" })
);

router.post("/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;

  contentHTML = `
    <h1>User Information</h1>
    <ul>
      <li>Username: ${name}</li>
      <li>Phone: ${phone}</li>
      <li>User Email: ${email}</li>
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

  res.render("success", {
    title: "Success CodeFesp",
  });
});

module.exports = router;
