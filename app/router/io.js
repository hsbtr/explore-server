'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { io } = app;
  // io.of('/').route('news', io.constructor.default.ping);
  io.of('/').route('news', io.controller.init.rt);
};
