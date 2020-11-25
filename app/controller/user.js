'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 注册
  async sigIn() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const prams = {};
    console.log(ctx.request.body);
    const pr = { mess: '参数传递错误', status: 0, data: null };
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
      pr.data = result;
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
