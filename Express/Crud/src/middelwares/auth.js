import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    const data = jwt.verify(token, "key");
    next();
  } catch (error) {}
};

export default auth;
