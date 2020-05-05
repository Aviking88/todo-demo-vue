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


  async fn(inputs) {
    const allUsers = await Todos.find({
      where: {
        userId: inputs.userId,
        isActive: true,
      },
    });
    return allUsers;
  },


};
