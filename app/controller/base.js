'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async tabBar() {
    const { ctx } = this;
    console.log(ctx.query, 3);
    ctx.status = 200;
    ctx.body = 'hi, egg';
  }
  async init() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = 'hi';
  }
}

module.exports = BaseController;
