const Sequelize = require('sequelize')
const PersonnelModel = require('../models/Personnel')
const TaskModel = require('../models/Task')

// local database
const sequelize = new Sequelize('challenge', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Personnel = PersonnelModel(sequelize, Sequelize)
const Task = TaskModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Personnel,
  Task
}
