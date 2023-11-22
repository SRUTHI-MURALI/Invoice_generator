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
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
});

export default model('user', userSchema);