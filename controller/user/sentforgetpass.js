import { User } from "../../models/user.js";
import transporter from "../../helpers/index.js";
import joi from "joi";

const userValidationSchema = joi.object({
  email: joi.string().required(),
});

export const handleSentOtpCodePass = async (req, res) => {
  try {
    const { email } = req.body;

    const existedUser = await User.findOne({ email });

    await userValidationSchema.validateAsync(req.body);

    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "Email not Exits!",
      });
    }

    const otp = Math.floor(1000 * Math.random() * 1000);

    transporter.sendMail({
      to: existedUser.email,
      from: process.env.NODEMAILER_EMAIL,
      text: `Dear ${existedUser.username},
        We received a request to reset your password. Please use the following One-Time Password (OTP) to proceed:
        ${otp}
        This code is valid for 10 minutes. Enter it on the password reset page to continue.
        Thank you,`,
      subject: "Password Reset OTP",
    });

    existedUser.otp = String(otp);
    existedUser.verifytime = String(Date.now() + 10 * 60 * 1000);
    existedUser.save();

    return res.status(200).send({
      status: 200,
      message: "OTP Successfully Sent on Your Email",
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
