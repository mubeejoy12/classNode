const auth = require("../model/auth");

const handleSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await auth.create({ name, email, password });
    res.status(200).json(response);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  handleSignUp,
};
