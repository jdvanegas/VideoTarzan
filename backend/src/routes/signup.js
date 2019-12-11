const { Router } = require('express')
const router = Router();

const { getUsers, createUser } = require('../controllers/signup.controller')

router.route("/")
  .get(getUsers)
  .post(createUser)

module.exports = router;