module.exports = {


  friendlyName: 'Create',


  description: 'Create todos.',


  inputs: {
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
  },


  exits: {
    invalid: {
      statusCode: 409,
      description: 'userId, isCompleted and message is required.',
    },
  },


  async fn(inputs, exits) {
    const userRecord = await Todos.create({
      userId: inputs.userId,
      isCompleted: inputs.isCompleted,
      message: inputs.message,
    }).fetch();
    if (!userRecord) {
      return exits.invalid({
        message: 'userId, isCompleted and message is required.',
      });
    }

    return exits.success({
      message: 'Todo has been created successfully.',
      data: userRecord,
    });
  },


};
