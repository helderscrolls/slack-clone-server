const Sequelize = require('sequelize');

// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];

// let sequelize;
// console.log('tata', config.use_env_variable);
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config,
//   );
// }

const sequelize = new Sequelize('slack_app_db', 'slack_app_user', 'password', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
