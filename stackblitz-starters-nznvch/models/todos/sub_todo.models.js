import mongoose from 'mongoose';
const subtodoScheme = new mongoose.Schema(
  {
    content: {
      //title
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Subtodo = mongoose.model('Subtodo', subtodoScheme);
