const signupCtrl = {}
const User = require('../models/users')

signupCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users)
}

signupCtrl.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  await User.findOne({email: email}, (err, user)=>{
    if (user) {
      return res.status(401).send("this email already exists")
    }
    if(err){
      return res.send(err)
    }
  })
  const newUser = new User({
    username,
    email,
    password
  })

  await newUser.save();
  res.status(200).send("user created")
}

module.exports = signupCtrl;