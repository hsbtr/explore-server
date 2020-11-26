'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, BOOLEAN, UUID } = Sequelize;
    const tran = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('user', {
        id: {
          type: UUID,
          allowNull: false,
          primaryKey: true,
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
      });
      await tran.commit();
    } catch (e) {
      await tran.rollback();
      throw e;
    }
  },
  down: async (queryInterface, Sequelize) => {
    const tran = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('user');
      await tran.commit();
    } catch (e) {
      await tran.rollback();
      throw e;
    }
  },
};
