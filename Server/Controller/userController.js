import userSchema from "../Model/userModel.js";
import productSchema from "../Model/productModel.js";

//register user
const registerUser = async (req, res) => {
  try {
    const newuser = await userSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (newuser) {
      res.status(201).json({
        _id: newuser._id,
        name: newuser.name,
        email: newuser.email,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

//user login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email });

    if (user) {
      if (user.password === password) {
        res.status(201).json({ user });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all products

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productSchema.find();

    if (allProducts) {
      res.status(201).json({
        allProducts,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

// add item to list

const itemAdded = async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;

    const user = await userSchema.findById(id);

    if (user) {
      const existingItem = user.items.find(
        (item) => item.product && item.product.equals(product)
      );

      if (existingItem) {
        existingItem.count = (existingItem.count || 0) + 1;
      } else {
        user.items.push({ product, count: 1 });
      }

      await user.save();

      return res.status(200).json({ message: "Item added successfully", user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all items added

const getAddedItems = async (req, res) => {
  try {
    const { id } = req.params;
    

    // Use findById to find a user by its _id
    const user = await userSchema.findById(id).populate("items.product");
    

    if (user) {
      res.status(201).json({
        user,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get Invoice

const userInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const allItems = await userSchema.findById(id).populate("items");
    res.status(201).json({
      allItems,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  itemAdded,
  userInvoice,
  registerUser,
  userLogin,
  getAllProducts,
  getAddedItems,
};
