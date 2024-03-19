module.exports = (req, res) => {
  if (req.method == "GET") {
    res.status(200).json({ message: "Welcome to my serverless api" });
  }
};
