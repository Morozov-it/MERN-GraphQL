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
            const existedProject = await Project.findOne({ where: { name }})
            if (existedProject) {
                return new Error("This project is already existed")
            }
            //создание проекта в бд
            return await Project.create({ name, description, status, clientId })
        } catch (e) {
            return new Error(e.message)
        }
    }
    async delete(id) {
        try {
            //проверка существующего проекта
            const existedProject = await Project.findOne({ where: { id }})
            if (!existedProject) {
                return new Error("This project is not existed")
            }
            //запрос на удаление
            return await Project.destroy({ where: { id } })
        } catch (e) {
            return new Error(e.message)
        }
    }
    async update(project) {
        try {
            //проверка существующего проекта
            const currentProject = await Project.findOne({ where: { id: project.id }})
            if (!currentProject) {
                return new Error("This project is not existed")
            }
            //обновление проекта в бд
            return await currentProject.update(project)
        } catch (e) {
            return new Error(e.message)
        }
    }
}

module.exports = new ProjectController()