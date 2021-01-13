'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller home
 */
class HomeController extends Controller {
  /**
   * @summary 首页
   * @router GET /home/index
   * @request query integer types
   * @response 200 pr ok
   */
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
