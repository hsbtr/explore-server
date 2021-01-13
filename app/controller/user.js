'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller user
 */
class UsersController extends Controller {
  /**
   * @summary 注册
   * @router POST /user/sigIn
   * @consumes application/x-www-form-urlencoded
   * @request query integer types
   * @response 200 pr ok
   */
  async sigIn() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const prams = {};
    const pr = { mess: '参数传递错误', status: 0, result: null };
    if (!name || typeof name === 'undefined') {
      ctx.body = pr;
      ctx.status = 200;
      return;
    }
    prams.user_name = name;
    const result = await ctx.service.user.addUser(prams);
    if (result) {
      pr.mess = '添加成功';
      pr.status = 1;
      pr.result = result;
      ctx.body = pr;
      ctx.status = 200;
    }
  }
  // 上传
  async upLoad() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const prams = {};
    console.log(ctx.request.body);
  }
}

module.exports = UsersController;
