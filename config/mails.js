const nodemailer = require("nodemailer");

const mails = async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NodeMail_ID,
        pass: process.env.NodeMailPassword,
      },
    });

    const mailOption = {
      form: process.env.NodeMail_ID,
      to: "ammarliaquat1234@gmail.com",
      subject: "Welcome",
      text: "Hi Hope you are doing well",
    };
    transport.sendMail(mailOption);
    res.status(200).json({
      message: "Email Send Succesfully",
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      code: 500,
      error: error.message,
    });
  }
};

module.exports = mails;
