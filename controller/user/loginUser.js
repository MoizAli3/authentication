import { User } from "../../models/user.js";

export const handleGetUsers = async (req, res) => {
  try {

    const existedUser = await User.find();

    return res.status(200).send({
      status: 200,
      message: "All Users Successfully!",
      data: existedUser,
    });

  } catch (error) {
     return res.status(500).send({ status: 500, message: error.message });
  }
};
