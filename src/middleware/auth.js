const auth = (req, res, next) => {
  req.user = { _id: "65f000000000000000000001", role: "admin" };
  next();
};

export default auth;
