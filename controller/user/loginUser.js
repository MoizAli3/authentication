import { User } from "../../models/user.js";
import bcrypt from "bcrypt";

export const handleGetUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existedUser = await User.findOne({ email }).then((res) =>
      res.toObject()
    );
    
    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "Credentials are incorrect!",
      });
    }

    const match = await bcrypt.compare(password, existedUser.password);

    if (!match) {
      return res.status(403).send({
        status: 403,
        message: "Credentials are incorrect!",
      });
    }

    const userData = existedUser.toObject();
    delete userData.password;

    return res.status(200).send({
      status: 200,
      message: "Login successful",
      data: userData,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
