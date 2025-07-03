import jwt from "jsonwebtoken";
import "dotenv/config";
const handleVerifyCodeMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(403).send({ status: 403, message: "Unauthorized User" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (tokenDecode) {
      req.user = { id: tokenDecode._id || tokenDecode.id }; // safer than modifying req.body
      next();
    } else {
      return res
        .status(403)
        .send({ status: 403, message: "Unauthorized User" });
    }
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export default handleVerifyCodeMiddleware;
