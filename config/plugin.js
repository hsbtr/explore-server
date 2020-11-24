'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // sequelize 启用
  sequelize: {
    enable: true, // 开启插件
    package: 'egg-sequelize', // 插件来源
  },
  // router-plus 启用
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  // Redis 启用
  redis: {
    enable: true,
    package: 'egg-redis',
  },

};
