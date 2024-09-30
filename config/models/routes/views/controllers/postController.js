const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.session.userId });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.render('post', { post });
};
