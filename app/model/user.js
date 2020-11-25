'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, UUID, UUIDV4 } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    user_name: STRING,
  });
  return User;
};
