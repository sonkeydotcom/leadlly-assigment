const User = require('../models/userModel');

const signIn = async (req:any, res:any) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    } else {
        res.status(200).json(user);
    }
}

const signUp = async (req: any, res:any) => {
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});

    if (existingUser) {
        return res.status(401).json({message: 'Email already in use'});
    } 

  const newUser = new User({name, email, password});



  await newUser.save();
  res.status(201).json(newUser);
}

const editUser = async (req:any, res:any) => {
    const user = await User.findById(req.user_id);

    if (user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    }
}


const logOut = async (req:any, res:any) => {
    try {
        res.status(200).json({message: 'Successfully logged out'});
        
    } catch (error: Error | any) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    signIn,
    signUp,
    editUser
}
