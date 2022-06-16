const { Project } = require('../models/models');

class ProjectController {
    async getOne(id) {
        try {
            return Project.findOne({ where: { id }})
        } catch (e) {
            return new Error(e.message)
        }
    }
    async getAll() {
        try {
            return Project.findAll()
        } catch (e) {
            return new Error(e.message)
        }
    }
    async create({ name, description, status, clientId }) {
        try {
            //проверка существующего проекта
            const candidate = await Project.findOne({ where: { name }})
            if (candidate) {
                return new Error("This project is already existed")
            }
            //создание проекта в бд
            return await Project.create({ name, description, status, clientId })
        } catch (e) {
            return new Error(e.message)
        }
    }
}

module.exports = new ProjectController()