const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const respond = await axios.get(process.env.URL);
    res.json(await respond.data);
  } catch (error) {
    res.status(500).json({ status: `Server Error: ${error.message}` });
  }
};
