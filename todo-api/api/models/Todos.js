/**
 * Todos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userId: {
      type: 'number',
      required: true,
    },
    isCompleted: {
      type: 'boolean',
      required: true,
    },
    message: {
      type: 'string',
      required: true,
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true,
    },
  },
};
