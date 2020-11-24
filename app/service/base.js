'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async getTabBar() {
    const { ctx } = this;
    const data = [
      {
        id: this.app.Sequelize.UUIDV4,
        text: '首页',
        defaultIcon: '',
        selectIcon: '',
      },
      {
        id: this.app.Sequelize.UUIDV4,
        text: '发现',
        defaultIcon: '',
        selectIcon: '',
      },
      {
        id: this.app.Sequelize.UUIDV4,
        text: '消息',
        defaultIcon: '',
        selectIcon: '',
      },
      {
        id: this.app.Sequelize.UUIDV4,
        text: '我的',
        defaultIcon: '',
        selectIcon: '',
      },
    ];
    return data;
  }
}

module.exports = BaseService;
