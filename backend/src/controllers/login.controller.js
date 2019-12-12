const loginCtrl = {}
const User = require('../models/users')
const jwt = require('jsonwebtoken')

loginCtrl.loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, async(err, user) => {
    if (err) {
      res.send(err)
    }
    if (!user) {
      res.status(401).send("this email adress doesn't exists")
    }
    else {

      const match = await user.matchPassword(password)
      if (!match) {
        res.status(401).send("the password is incorrect")
      }
      else {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET || "secret")
        res.status(200).json({ token, user: {username: user.username, email: user.email, admin: user.admin} })
      }

    }
  })


}

module.exports = loginCtrl;