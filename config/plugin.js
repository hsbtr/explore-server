'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 开启mysql插件
  sequelize: {
    enable: true, // 开启插件
    package: 'egg-sequelize', // 插件来源
  },
  // 路由模块化
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};
