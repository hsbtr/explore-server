'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addUser(bean) {
    const ctx = this.ctx;
    const { user_name } = bean;
    const user = await ctx.model.User.create({ user_name });
    console.log(user.toJSON());
    return user;
  }
}
module.exports = UserService;
