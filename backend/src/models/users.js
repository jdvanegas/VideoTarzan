const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 255
  },
  email: {
    type: String,    
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    maxlength: 255
  }
}, 
{
  timestamps: true
})

module.exports = model("user", userSchema);