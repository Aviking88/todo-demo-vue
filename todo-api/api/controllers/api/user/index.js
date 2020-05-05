module.exports = {
  friendlyName: 'Index',


  description: 'Index user.',


  inputs: {

  },


  exits: {

  },


  async fn(inputs) {
    const allUsers = await User.find({});
    return allUsers;
  },
};
