import ProductSchema from "../Model/productModel.js";

// get all products

const productList = async (req, res) => {
  try {
    const allProducts = await ProductSchema.find();

    if (allProducts) {
      res.status(201).json({
        allProducts,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

// add products
const addProduct = async (req, res) => {
  try {
    const newProduct = await ProductSchema.create({
      name: req.body.name,
      price: req.body.price,
      photo: req.body.image,
    });

    if (newProduct) {
      res.status(201).json({
        _id: newProduct._id,
        name: newProduct.name,
        price: newProduct.price,
        photo: newProduct.photo,
      });
    }
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { productList, addProduct };
