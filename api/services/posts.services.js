const Post = require('../models/post.model')
class PostsServices {
    async create(postData) {
        await new Post(postData).save()
        return "Ваш пост создан"
    }
    async getAll(){
        const posts=await Post.find()
        return posts
    }
}
module.exports = new PostsServices()