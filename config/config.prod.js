/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appinfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 配置mysql数据源
  config.mysql = {
    // host
    host: '127.0.0.1',
    // 端口号
    port: 3306,
    // 用户名
    username: 'root',
    // 密码
    password: '',
    // 支持何种数据库
    dialect: 'mysql',
    // 数据库名
    database: 'egg-sequelize-doc-default',
  };
  return {
    ...config,
  };
};
