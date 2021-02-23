'use strict';

module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('init', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};

