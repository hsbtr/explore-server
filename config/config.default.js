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
  // csrf 验证
  config.security = {
    csrf: {
      headerName: 'x-csrf-token',
    },
  };
  // 开发 mysql数据源
  config.sequelize = {
    // host
    host: 'localhost',
    // 端口号
    port: 3306,
    // 用户名
    username: 'root',
    // 密码
    password: 'hsbtr894',
    // 支持何种数据库
    dialect: 'mysql',
    // 数据库名
    database: 'explore',
  };

  // Redis 配置
  config.redis = {
    client: {
      port: 6379, // 端口
      host: '127.0.0.1', // 地址
      password: '',
      db: 0,
    },
  };
  // socket.io 配置
  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [ 'packet' ],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
      auth_pass: '',
      db: 1,
    },
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
