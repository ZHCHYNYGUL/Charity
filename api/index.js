const express = require('express')
const cors=require('cors')
const app = express();
const usersRoutes = require('./routes/users.routes')
const postsRoutes=require('./routes/posts.routes')
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use('/users', usersRoutes)
app.use('/posts',postsRoutes)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('Server is working now on PORT ' + process.env.PORT)
        })
    } catch (err) {
        console.log(err);
    }
}

start()

