const sequelize = require('../db')
const { DataTypes, Sequelize } = require('sequelize')

//создание модели пользователя
const Client = sequelize.define('client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING, unique: true },
});

const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    description: { type: DataTypes.STRING },
    status: { type: Sequelize.ENUM, values: ['not started', 'in progress', 'completed'] },
});

//один ко многим:
Client.hasMany(Project)//пользователь делает много проектов
Project.belongsTo(Client)//проект принадлежит одному пользователю

module.exports = {
    Client,
    Project,
}