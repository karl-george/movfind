import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    movie_id: {
      type: String,
      required: true,
    },
    movie_title: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Comment =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);
