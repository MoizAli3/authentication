import { User } from "../../models/user.js";
import transporter from "../../helpers/index.js";
import joi from "joi";

// const userValidationSchema = joi.object({
//   id: joi.string().required(),
// });

export const handleSentVerifactionCode = async (req, res) => {
  try {
    const _id = req.user.id;

    const existedUser = await User.findOne({ _id });

    // await userValidationSchema.validateAsync(req.body);

    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "Email not Exits!",
      });
    }

    if (existedUser.accountverification === "verified") {
      return res.send({
        success:false,
        message: "Account Already Verified",
      });
    }

    const otp = Math.floor(1000 * Math.random() * 1000);

    transporter.sendMail({
      to: existedUser.email,
      from: process.env.NODEMAILER_EMAIL,
      text: `Dear ${existedUser.username},
        Your OTP is ${otp} Please enter this code to verify your identity. This code is valid for 10 minutes.
        If you did not request this, please ignore this email or contact support.
        Thank you,`,
      subject: "Your One-Time Password (OTP) for Verification",
    });

    existedUser.otp = otp;
    existedUser.verifytime = String(Date.now() + 10 * 60 * 1000);
    existedUser.accountverification = "pending";
    existedUser.save();

    return res.status(200).send({
      status: 200,
      message: "OTP Successfully Sent on Your Email",
      status: existedUser.accountverification,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
