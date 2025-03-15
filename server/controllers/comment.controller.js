import Comment from '../models/comment.model.js';
import User from '../models/user.model.js';

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate('user', 'username img')
    .sort({ createdAt: -1 });

  res.json(comments);
};

export const addComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  const newComment = new Comment({
    ...req.body,
    user: user._id,
    post: postId,
  });

  const savedComment = await newComment.save();

  res.status(201).json(savedComment);
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.id;

  if (!clerkUserId) {
    res.status(401).json({
      message: 'Not authenticated!',
    });
  }

  const user = await User.findOne({ clerkUserId });

  const deleteComment = await Comment.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deleteComment) {
    res.status(403).json({
      message: 'You can only delete your own comments!',
    });
  }

  res.status(200).json('Comment has been deleted successfully');
};
