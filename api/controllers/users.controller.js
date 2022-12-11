const usersServices = require("../services/users.services")

class UsersController {

    async registration(req, res) {
        const userData = req.body
        try {
            const response = await usersServices.registration(userData)
            return res.json(response)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    }

    async login(req, res) {
        const userData = req.body
        try {
            const response = await usersServices.login(userData)
            return res.json(response)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    }
}


module.exports = new UsersController()