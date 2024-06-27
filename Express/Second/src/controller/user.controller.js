export const userSignup = (req, res, next) => {
  console.log("controller call");
  res.status(200).json({ massage: "controller called" });
};
