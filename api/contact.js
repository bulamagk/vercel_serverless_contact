const sendMail = require("../utils/sendMail");

module.exports = async (req, res) => {
  const formdata = req.body;

  switch (req.method) {
    case "POST":
      const result = await sendMail(formdata);
      if (result.success) {
        res.send(result);
      } else {
        res.send(result);
      }
      break;

    default:
      res.send("Invalid method");
  }
};
