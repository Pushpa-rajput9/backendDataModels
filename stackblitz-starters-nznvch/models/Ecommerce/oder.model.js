import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchema],
      //************or******* */
      // type:{[
      //   {
      //     productid: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'Product',
      //     },
      //     quantity: {
      //       type: Number,
      //       required: true,
      //     },
      //   }
      // ]}
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
