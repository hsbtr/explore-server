'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, BOOLEAN, UUID, UUIDV4 } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
      comment: '主键',
    },
    user_name: {
      type: STRING,
      defaultValue: '',
      comment: '姓名',
    },
    sex: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: '性别:true男false女',
    },
    age: {
      type: INTEGER,
      comment: '年龄',
    },
    identity_card: {
      type: INTEGER,
      comment: '身份证',
    },
    phone: {
      type: INTEGER,
      comment: '手机号',
    },
    email: {
      type: STRING,
      defaultValue: '',
      comment: '邮箱',
    },
    nickname: {
      type: STRING,
      defaultValue: '',
      comment: '昵称',
    },
    photo: {
      type: STRING,
      defaultValue: '',
      comment: '头像',
    },
    account: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      comment: '账户',
    },
    passwords: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      comment: '账户密码',
    },
    address: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      comment: '住址',
    },
    intro: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      comment: '简介',
    },
    industry: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      comment: '行业',
    },
    created_at: {
      type: DATE,
      allowNull: false,
      comment: '创建时间',
    },
    updated_at: {
      type: DATE,
      allowNull: false,
      comment: '更新时间',
    },
  }, {
    freezeTableName: true,
  });
  return User;
};
