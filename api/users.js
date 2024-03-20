module.exports = async function (req, res) {
  if (req.method == "POST") {
    res
      .status(201)
      .json({ success: true, message: "User created!", user: req.body });
  } else if (req.method == "GET") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(400).json({ message: "Invalid Method" });
  }
};
