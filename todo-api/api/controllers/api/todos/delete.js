module.exports = {


  friendlyName: 'Delete',


  description: 'Delete todos.',


  inputs: {
    id: {
      type: 'number',
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
    const updatedTodo = await Todos.updateOne({ id: inputs.id })
    .set({
      isActive: false,
    });

    if (!updatedTodo) {
      return exits.invalid({
        message: 'invalid',
      });
    }
    return exits.success({
      message: 'Todo has been deleted successfully.',
      data: updatedTodo,
    });
  },


};
