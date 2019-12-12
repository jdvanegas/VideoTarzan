const User = require('../users')
const mongoose = require('mongoose')

URI = "mongodb://localhost/videotarzan";

mongoose.connect("mongodb://localhost/videotarzan", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
)
newUser = async()=> {
  const password = "7851202v"

  const newAdmin = new User({
    username: "admin",
    email: "vanegas.victor2001@gmail.com",
    password: password,
    admin: true
  })

  newAdmin.password = await newAdmin.encryptPassword(password)

  newAdmin.save().then(()=> {
    mongoose.disconnect();
  });

}

newUser();

