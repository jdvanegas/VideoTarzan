const mongoose = require('mongoose')

URI = "mongodb://localhost/videotarzan";

mongoose.connect(URI, {
   useNewUrlParser: true ,
   useUnifiedTopology: true
}
  )
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err))

module.exports ;