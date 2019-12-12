const {Schema, model} = require('mongoose')
const bcrypt =  require('bcryptjs')

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
  },
  admin: {
    type: Boolean,
    default: false
  }
}, 
{
  timestamps: true
})

userSchema.methods.encryptPassword = async(password) =>{
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
}

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model("User", userSchema);