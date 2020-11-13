'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const baseRouter = router.namespace('/base');
  baseRouter.get('/', controller.base.init);
  baseRouter.get('/tabBar', controller.base.tabBar);

};
