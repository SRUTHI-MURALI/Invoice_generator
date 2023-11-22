import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      count: {
        type: Number,
        default: 1,
      },
    },
  ],
});

export default model('user', userSchema);