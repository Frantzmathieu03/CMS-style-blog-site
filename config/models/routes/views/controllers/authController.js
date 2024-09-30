const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.userId = user.id;
    res.redirect('/dashboard');
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (user && await user.checkPassword(req.body.password)) {
    req.session.userId = user.id;
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
