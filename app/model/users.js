'use strict';
// const { Model } = require('sequelize');

module.exports = app => {
  const { STRING, DATE, INTEGER, UUID, UUIDV4 } = app.Sequelize;
  const Users = app.model.define('users', {
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    user_name: STRING,
  });
  return Users;
};
