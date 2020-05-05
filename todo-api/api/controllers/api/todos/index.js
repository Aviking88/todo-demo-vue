module.exports = {


  friendlyName: 'Index',


  description: 'Index todos.',


  inputs: {
    userId: {
      type: 'number',
      required: true,
    },
  },


  exits: {

  },


  async fn(inputs, exits) {
    const allUsers = await Todos.find({
      where: { userId: inputs.userId },
    });
    return allUsers;
  },


};
