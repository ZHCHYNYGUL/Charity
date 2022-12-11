const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

class UsersServices {
    async registration(userData) {
        const visitor = await User.findOne({
            email: userData.email
        })
        if (visitor) {
            throw new Error('Пользователь с таким email уже существует')
        }
        const hashedPassword = await bcrypt.hash(userData.password, 8)
        const newUser = await new User({
            ...userData,
            password: hashedPassword
        }).save()

        return {
            email: newUser.email,
            name: newUser.name,
            surname: newUser.surname
        }
    }

    async login(userData) {
        const visitor = await User.findOne({
            email: userData.email
        })
        if (!visitor) {
            throw new Error('Пользователя с таким email не существует')

        }
        const isCorrectPassword = await bcrypt.compare(userData.password, visitor.password)
        if (!isCorrectPassword) {
            throw new Error("Неверный пароль")
        }
        return {
            email: visitor.email,
            name: visitor.name,
            surname: visitor.surname
        }
    }

}

module.exports = new UsersServices()