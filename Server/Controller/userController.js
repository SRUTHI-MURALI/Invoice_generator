import userSchema from '../model/userModel.js'
const Home = async (req,res)=>{
    res.send('hai user')
}


//register user
const registerUser= async (req,res)=>{
    console.log(req.body,'hjhjhh');
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
         email:newuser.email,
        });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }

  //user login



const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await userSchema.findOne({ email });
  
      if (user) {
        
        if (user.password === password) {
         
          res.status(201).json({ userEmail: user });
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
  
  
  
  
  
  // add item to list
  
  const itemAdded= async(req,res)=>{
  try {
      const {id} = req.params;
      const product= req.body.product
      const user= userSchema.findById({id})
      if(user){
          userSchema.items.push(product)
      }
  } catch (error) {
      res.status(400).json(error);
  }
  }
  
  
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
  
export {Home,itemAdded,userInvoice,registerUser,userLogin}