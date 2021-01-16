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

  // swagger-doc 配置
  /*
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };
*/

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
