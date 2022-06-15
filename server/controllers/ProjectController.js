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
}

module.exports = new ProjectController()