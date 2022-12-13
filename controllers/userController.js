const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



module.exports.signUp = async (req, res) => {
    try {
      // Get user input
      const { name, email, password, confirm_password } = req.body;
  
      // Validate user input
      if (!(name && email && password, confirm_password)) {
        res
          .status(400)
          .json({ massage: "All input is required", success: false });
      }
  
      if (password !== confirm_password) {
        res.status(403).json({
          message: "password and confirm password does not match ",
          success: false,
        });
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res
          .status(409)
          .json("User Already Exist On This Phone Number . Please Login ");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        email,
        password: encryptedPassword,
      });
      // Create token
      const token = jwt.sign(user.toJSON(), process.env.SecretKey, {
        expiresIn: "2h",
      });
      user.token = token;
      user.save();
      // return new user
      res.status(201).json({ user, success: true });
    } catch (err) {
      console.log(err);
    }
  };


module.exports.login =  async (req,res)=>{

    try {
        
        const {email,password} = req.body;
  if(!(email,password)){
    res.status(400).json({
        message:'All Input is required '
    })
  } 

  const user = await User.findOne({email});

  if(user &&   bcrypt.compare(password,user.password)){
    
    // create token 

    const token = jwt.sign(user.toJSON(), process.env.SecretKey,{
        expiresIn:'2h'
    })
     
    user.token = token;

    
    return res.status(200).json({
        user,
        success:true
    }) 

    
  }
  return res.status(400).json({
    message:'Invalid Credential'
  })
    } catch (error) {
        
        console.log(error);
    }
 
}  

module.exports.welcomeUser = (req,res)=>{
    res.status(200).json({
        message:"Hey Welcome Dear "
    })
}


module.exports.getAllUser = async (req,res)=>{

    const user = await User.find({});

    if(!user){
        res.status(404).json({
            message:"User Not Found "
        })
    } 

    res.status(200).json(user);


}



