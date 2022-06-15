const { Client } = require('../models/models');

class ClientController {
    async getOne(id) {
        try {
            return Client.findOne({ where: { id }})
        } catch (e) {
            return new Error(e.message)
        }
    }
    async getAll() {
        try {
            return Client.findAll()
        } catch (e) {
            return new Error(e.message)
        }
    }
}

module.exports = new ClientController()