import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    const data = jwt.verify(token, "key");
    console.log("data", data);
    console.log("data  token data", data.payload._id);
    next();
  } catch (error) {
    res.status(401).json({ massage: "anauthorization" });
    // next();
  }
};

export default auth;
