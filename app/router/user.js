'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const userRouter = router.namespace('/user');
  userRouter.post('/sigIn', controller.users.sigIn);
};
