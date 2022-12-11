const router = require('express').Router()
const postsController = require('../controllers/posts.controller')


router.get('/getall', postsController.getAll)
router.post('/create', postsController.create)
module.exports = router