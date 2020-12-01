
import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: 'Product',
        },
      },
    ],
    // shippingAddress: {
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
    shippingAddress: {
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: {
      type: String,
      required: false,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: false,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: false,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order