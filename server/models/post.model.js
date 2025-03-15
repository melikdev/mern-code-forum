import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userImageUrl: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
    language: {
      type: String,
    },
    tag: {
      type: String,
      default: 'general',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visitNumber: {
      type: Number,
      default: 0,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
