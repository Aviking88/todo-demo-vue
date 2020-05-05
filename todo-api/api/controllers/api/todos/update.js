module.exports = {


  friendlyName: 'Update',


  description: 'Update todos.',


  inputs: {
    id: {
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
      description: 'id is required.',
    },
  },


  async fn(inputs, exits) {
    // All done.
    const data = {
      id: inputs.id,
      isCompleted: inputs.isCompleted,
      message: inputs.message,
    };
    const updatedTodo = await Todos.updateOne({ id: inputs.id })
    .set({
      ...data,
    });

    if (!updatedTodo) {
      return exits.invalid({
        message: 'invalid',
      });
    }
    return exits.success({
      message: 'Todo has been updated successfully.',
      data: updatedTodo,
    });
  },


};
