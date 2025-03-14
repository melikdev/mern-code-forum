import Post from '../models/post.model.js';
import User from '../models/user.model.js';

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const posts = await Post.find()
    .populate('user', 'username')
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;

  res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    'user',
    'username'
  );
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const user = await User.findOne({ clerkUserId });
  if (!user) {
    res.status(404).json({
      message: 'Not authenticated!',
    });
  }

  let slug = req.body.question.replace(/ /g, '-').toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  res.status(200).json(post);
};

export const likePost = async (req, res) => {
  const likedPost = await Post.findOneAndUpdate(
    { _id: req.body.id },
    { $inc: { likeCount: 1 } }
  );

  res.status(200).json(likedPost);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }
  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res.status(403).json('You can only delete your own posts!');
  }

  res.status(200).json('Post has been deleted successfully');
};
