'use strict';

const Service = require('egg').Service;

class CacheService extends Service {
  /**
   * redis   存储
   * @param {string} key 存储的名字
   * @param {string} value 存储的值
   * @param {number} seconds 缓存后的时间
   * */
  async setItem(key, value, seconds) {
    value = JSON.stringify(value);
    if (this.app.redis) {
      if (!seconds) {
        await this.app.redis.set(key, value);
      } else {
        await this.app.redis.set(key, value, 'EX', seconds);
      }
    }
  }
  /**
   * redis   获取
   * @param {string} key 存储时的名字
   * */
  async getItem(key) {
    if (this.app.redis) {
      const data = await this.app.redis.get(key);
      if (!data) return;
      return JSON.parse(data);
    }
  }
}

module.exports = CacheService;
