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
    async create({ name, email, phone }) {
        try {
            //проверка существующего пользователя
            const candidate = await Client.findOne({ where: { name }})
            if (candidate) {
                return new Error("This user is already existed")
            }
            //создание пользователя в бд
            return await Client.create({ name, email, phone })
        } catch (e) {
            return new Error(e.message)
        }
    }
    async delete(id) {
        try {
            //проверка существующего пользователя
            const candidate = await Client.findOne({ where: { id }})
            if (!candidate) {
                return new Error("This user is not existed")
            }
            //запрос на удаление
            return await Client.destroy({ where: { id } })
        } catch (e) {
            return new Error(e.message)
        }
    }
}

module.exports = new ClientController()