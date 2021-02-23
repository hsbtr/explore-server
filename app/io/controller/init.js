'use strict';

const Controller = require('egg').Controller;

class InitController extends Controller {
  async rt() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    await nsp.emit('server', { age: 12 });
  }
}

module.exports = InitController;
