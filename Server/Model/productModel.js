import { model, Schema } from 'mongoose';

var productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  photo: [
    {
      type: String,

      required: true,
    },
  ],
  
});



export default model("product", productSchema);