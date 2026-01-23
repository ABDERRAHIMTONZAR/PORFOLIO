require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

/* ======================
   CONFIG EXPRESS
====================== */
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

/* ======================
   CONFIG MAIL (GMAIL)
====================== */
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

if (!MAIL_USER || !MAIL_PASS) {
  console.warn("⚠️ MAIL_USER / MAIL_PASS non configurés");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS, 
  },
  connectionTimeout: 10000,
  socketTimeout: 20000,
});



app.get("/", (req, res) => {
  res.send("📧 Mailer API OK");
});

app.post("/send-mail", async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({
      error: "to, subject et message sont requis",
    });
  }

  if (!MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({
      error: "Email non configuré (MAIL_USER / MAIL_PASS)",
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Express Mailer" <${MAIL_USER}>`,
      to,
      subject,
     html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:30px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="
          background-color:#ffffff;
          border-radius:12px;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
          overflow:hidden;
        ">

          <!-- Header -->
          <tr>
            <td style="
              background:linear-gradient(135deg,#ef4444,#dc2626);
              padding:24px;
              color:#ffffff;
              text-align:center;
            ">
              <h1 style="margin:0;font-size:24px;">📩 Nouveau message</h1>
              <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
                Formulaire de contact
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px; color:#333333;">

              <h2 style="margin-top:0;color:#111827;">${subject}</h2>

              <div style="
                background:#f9fafb;
                border-left:4px solid #ef4444;
                padding:16px;
                margin:20px 0;
                border-radius:6px;
                line-height:1.6;
              ">
                ${message}
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background:#f3f4f6;
              padding:16px;
              text-align:center;
              font-size:12px;
              color:#6b7280;
            ">
              © ${new Date().getFullYear()} • Portfolio Abderrahim Tonzar  
              <br/>
              Message envoyé depuis le formulaire de contact
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,

    });

    console.log("✅ Email envoyé :", info.messageId);

    res.json({
      success: true,
      message: "Email envoyé avec succès",
    });
  } catch (err) {
    console.error("❌ Erreur email :", err.message);
    res.status(500).json({ error: "Erreur d'envoi email" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server mail lancé sur http://localhost:${PORT}`);
});
