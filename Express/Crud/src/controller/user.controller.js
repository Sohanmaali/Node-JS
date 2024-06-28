import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const data = await user.create(req.body);
    if (!data) res.status(400).json({ massage: "user not save" });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error ", error);
    res.status(400).json({ massage: "signup fail" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await user.find();
    if (!data) res.status(404).json({ massage: "something want wrong" });
    res.status(200).json(data);
  } catch (error) {
    console.log("ERROR  ", error);
  }
};

const getUserById = async (req, res) => {
  try {
    const data = await user.findById(req.params.id);
    if (!data) res.status(404).json({ massage: "something want wrong" });
    res.status(200).json(data);
  } catch (error) {
    console.log("ERROR  ", error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await user.findOne({ email });

    if (!userExist) res.status(404).json({ massage: "something want wrong" });

    if (await bcrypt.compare(password, userExist.password)) {
      const token = generatetoken(userExist.email);

      console.log("TOKEN   ", token);

      if (token) return res.status(200).json({ userExist, token });
    }
    res.status(400).json({ massage: "unathou" });
  } catch (error) {
    console.log("ERROR  ", error);
    res.status(400).json({ massage: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name } = req.body;

    const data = await user.findByIdAndUpdate(req.params.id, { name });

    if (!data) res.status(404).json({ massage: "something want wrong" });

    res.status(200).json(data);
  } catch (error) {
    console.log("ERROR  ", error);
  }
};

function generatetoken(payload) {
  return jwt.sign({ payload }, "key");
}

export { signup, getAllUser, getUserById, updateUser, login };
