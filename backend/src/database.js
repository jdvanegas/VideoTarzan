const mongoose = require('mongoose')

URI = "mongodb://localhost/videotarzan";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
  )
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err))

module.exports ;