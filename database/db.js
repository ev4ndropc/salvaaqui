const Sequelize = require('sequelize');

const connection = new Sequelize('modainti_salvaaqui', 'modainti_evandro', 'evandro1993',{
  host: '108.179.253.183',
  dialect: 'mysql'
});

module.exports = connection;