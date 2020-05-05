module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      required: true,
      unique: true,
      type: 'string',
    },
    password: {
      required: true,
      type: 'string',
      maxLength: 15,
      minLength: 6,
    },

  },


  exits: {
    invalid: {
      statusCode: 401,
      description: 'Invalid email or password',
    },
  },


  async fn(inputs, exits) {
    const userRecord = await User.find({
      where: { email: inputs.email },
    });

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid',
      });
    }

    // validate password
    if (userRecord[0] && userRecord[0].password === inputs.password) {
      return exits.success({
        message: 'User has been logged in successfully.',
        data: { id: userRecord[0].id },
      });
    }
    return exits.invalid({
      message: 'Invalid email or password',
    });
  },


};
