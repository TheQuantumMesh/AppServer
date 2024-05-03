import jwt from "jsonwebtoken";
import { User } from "../model/user.js";

export const isAuthenicated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "Login to access this resource" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
