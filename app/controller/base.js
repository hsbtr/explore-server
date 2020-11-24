'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  // 获取底部菜单
  async tabBar() {
    const { ctx } = this;
    const tabBarList = await ctx.service.cache.getItem('tabBarList');
    const pr = {
      state: 200,
      result: null,
      mess: '查询成功',
    };
    if (!tabBarList) {
      const data = [
        {
          id: this.app.Sequelize.UUIDV4,
          text: '首页',
          defaultIcon: 'http://localhost:7001/public/img/home.png',
          selectIcon: 'http://localhost:7001/public/img/home1.png',
        },
        {
          id: this.app.Sequelize.UUIDV4,
          text: '发现',
          defaultIcon: 'http://localhost:7001/public/img/find.png',
          selectIcon: 'http://localhost:7001/public/img/find1.png',
        },
        {
          id: this.app.Sequelize.UUIDV4,
          text: '消息',
          defaultIcon: 'http://localhost:7001/public/img/mess.png',
          selectIcon: 'http://localhost:7001/public/img/mess1.png',
        },
        {
          id: this.app.Sequelize.UUIDV4,
          text: '我的',
          defaultIcon: 'http://localhost:7001/public/img/my.png',
          selectIcon: 'http://localhost:7001/public/img/my1.png',
        },
      ];
      await ctx.service.cache.setItem('tabBarList', data, 60 * 60);
      pr.result = data;
      ctx.status = 200;
      ctx.body = pr;
      return;
    }
    pr.result = tabBarList;
    ctx.status = 200;
    ctx.body = pr;
  }
  // 初始化
  async init() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = 'hi';
  }
}

module.exports = BaseController;
