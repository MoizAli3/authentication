export const handleLogoutUsers = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      samesite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.status(200).send({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
