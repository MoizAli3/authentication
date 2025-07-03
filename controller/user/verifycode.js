import { User } from "../../models/user.js";
import transporter from "../../helpers/index.js";
import joi from "joi";

const userValidationSchema = joi.object({
  otp: joi.number().required(),
});

export const handleVerifyVerifactionCode = async (req, res) => {
  try {
    const _id = req.user.id;

    const { otp } = req.body;

    const existedUser = await User.findOne({ _id });

    await userValidationSchema.validateAsync(req.body);

    if (!existedUser || !otp) {
      return res.status(403).send({
        status: 403,
        message: "Invalid OTP!",
      });
    }

    if (existedUser.verifytime < Date.now()) {
      return res.status(401).send({
        status: 401,
        message: "OTP Expired, Sent OTP again",
      });
    }

    if (existedUser.otp != otp) {
      return res.status(401).send({
        status: 401,
        message: "Wrong OTP!",
      });
    }

    existedUser.otp = "";
    existedUser.verifytime = "";
    existedUser.accountverification = "verified";
    existedUser.save();

    return res.status(200).send({
      status: 200,
      message: "Account Verfied Successfully!",
      status:existedUser.accountverification,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
