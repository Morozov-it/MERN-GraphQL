const PORT = process.env.PORT || 5000
const express = require('express')
require('dotenv').config()
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const sequelize = require('./db');

const app = express()
//создание корс-запросов для работы с браузером
app.use(cors())
//для работы с json форматом
app.use(express.json())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

const start = async () => {
    try {
        //запуск авторизации к бд
        await sequelize.authenticate();
        //сверка состояния данных со схема для базы данных
        await sequelize.sync()
        //запуск приложения
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}
start()