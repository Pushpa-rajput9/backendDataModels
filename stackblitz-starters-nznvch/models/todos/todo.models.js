import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    Title: {
      type: string,
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
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ], //array of sub todos
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoSchema);
