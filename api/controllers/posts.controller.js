const postsServices = require('../services/posts.services')
class PostsController {
    async create(req, res) {
        const postData = req.body
        try {
            const response = await postsServices.create(postData)
            return res.json(response)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    }
    async getAll(req, res) {
        try {
            const response = await postsServices.getAll()
            return res.json(response)
        }
        catch (err) {
            return res.status(500).send(err.message)
        }
    }
}
module.exports = new PostsController()