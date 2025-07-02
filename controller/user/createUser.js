import joi from "joi";
import { User } from "../../models/user.js";
import bcrypt from "bcrypt";
import transporter from "../../helpers/index.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
    

const userValidationSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  email: joi.string().required().email(),
  password: joi.string().required().min(6).max(15),
  phone: joi.number().optional().min(11),
});

export const handleCreateUser = async (req, res) => {
  const { username, email, password, phone } = req.body;

  try {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res
        .status(409)
        .send({ status: 409, message: "User Already Exits!" });
    }

    await userValidationSchema.validateAsync(req.body);

    const passwordHash = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      username: username,
      email: email,
      phone: phone,
      password: passwordHash,
    });

    transporter.sendMail({
      to: createUser.email,
      from: process.env.NODEMAILER_EMAIL,
      text: `Hi, ${createUser.username} 
        Welcome Your account is created successfully`,
      subject: "Email send testing",
    });

    const token = jwt.sign(
      { _id: createUser._id, email: createUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token);

    return res.status(200).send({
      status: 200,
      message: "User Created Successfully!",
      data: createUser,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
