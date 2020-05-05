/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /api/v1/user': { action: 'api/user/index' },
  'POST /api/v1/user/create': { action: 'api/user/create' },
  'POST /api/v1/user/login': { action: 'api/user/login' },
  'GET /api/v1/todos': { action: 'api/todos/index' },
  'POST /api/v1/todos/create': { action: 'api/todos/create' },

};
