const signupCtrl = {}
const User = require('../models/users')

signupCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users)
}

signupCtrl.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email: email })
  if(!username || !email || !password){
    return res.status(401).send("please fill out the fields")
  }

  if (user) {
    return res.status(401).send("this email already exists")
  }

  const newUser = new User({
    username,
    email,
    password
  })
  newUser.password = await newUser.encryptPassword(password)

  await newUser.save();
  res.status(200).send("user created")
}

module.exports = signupCtrl;