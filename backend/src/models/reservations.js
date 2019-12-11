const {Schema, model} = require('mongoose')

const reservationSchema = new Schema({
  userId: {
    type: String
  },
  movieId: {
    type: String,
  },
  state: {
    type: Boolean,
    default: false
  }
}, 
{
  timestamps: true
})

module.exports = model("Reservation", reservationSchema);