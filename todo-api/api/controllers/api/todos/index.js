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
    console.log(inputs)
    const allUsers = await Todos.find({});
    console.log(allUsers)
    return allUsers;
  },


};
