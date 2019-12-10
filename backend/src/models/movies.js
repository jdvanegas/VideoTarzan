const {Schema, model} = require('mongoose')

const movieSchema = new Schema({
  title: {
    type: String,
    maxlength: 255
  },
  description: {
    type: String  
  }
},
{
  timestamps:true
})

module.exports = model("movie", movieSchema);