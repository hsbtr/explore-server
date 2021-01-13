'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async getTabBar() {
    const { ctx } = this;
    const data = [
      {
        id: ctx.app.Sequelize.UUIDV4,
        text: '首页',
        name: 'home',
        sort: 1,
        defaultIcon: 'http://localhost:7001/public/img/home.png',
        selectIcon: 'http://localhost:7001/public/img/home1.png',
      },
      {
        id: ctx.app.Sequelize.UUIDV4,
        text: '发现',
        name: 'find',
        sort: 2,
        defaultIcon: 'http://localhost:7001/public/img/find.png',
        selectIcon: 'http://localhost:7001/public/img/find1.png',
      },
      {
        id: ctx.app.Sequelize.UUIDV4,
        text: '消息',
        name: 'mess',
        sort: 3,
        defaultIcon: 'http://localhost:7001/public/img/mess.png',
        selectIcon: 'http://localhost:7001/public/img/mess1.png',
      },
      {
        id: ctx.app.Sequelize.UUIDV4,
        text: '我的',
        name: 'my',
        sort: 4,
        defaultIcon: 'http://localhost:7001/public/img/my.png',
        selectIcon: 'http://localhost:7001/public/img/my1.png',
      },
    ];
    return data;
  }
}

module.exports = BaseService;
