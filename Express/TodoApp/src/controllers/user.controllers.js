import user from "../models/user.model.js";

export const sinupcontroller = async (req, res, next) => {
  const email = await user.findOne({ email: req.body.email });
  if (email) res.status(201).json({ massage: "user alreday registerd" });
  const data = await user.create(req.body);
  res.status(201).json({ massage: "user registerd", data });
};

export const loginuser = async (req, res, next) => {
  const users = await user.findOne({
    $and: [{ email: req.body.email }, { password: req.body.password }],
  });
  if (!users) res.status(201).json({ massage: "user not found" });
  res.status(200).json({ massage: "user found" });
};
