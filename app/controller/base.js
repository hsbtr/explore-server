'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller base
 */
class BaseController extends Controller {
  /**
   * @summary 获取底部菜单
   * @router GET /base/tabBar
   * @request query integer types
   * @response 200 pr ok
   */
  async tabBar() {
    const { ctx } = this;
    const { service } = ctx;
    const { types } = ctx.query;
    const tabBarList = await service.cache.getItem('tabBarList');
    const pr = {
      state: 200,
      result: null,
      mess: '查询成功',
    };
    console.log(this.app.Sequelize.UUIDV4);
    if (!tabBarList) {
      const data = await service.base.getTabBar();
      if (data) {
        await service.cache.setItem('tabBarList', data, 60 * 60);
        pr.result = data;
        ctx.status = 200;
        ctx.body = pr;
        return;
      }
      pr.state = 400;
      pr.mess = '查询为空';
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
