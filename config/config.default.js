/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 用于cookie签名的密钥，应改为自己的，并保持安全
  config.keys = appInfo.name + '_3099_160344_745689312_hh';

  // 开发 mysql数据源
  config.sequelize = {
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
  // 在这里添加您的中间件配置
  config.middleware = [];

  // 在这里添加您的用户配置
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
