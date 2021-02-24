'use strict';

module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('connect', 'packet received!');
    console.log('packet:', ctx.packet);
    await next();
  };
};
