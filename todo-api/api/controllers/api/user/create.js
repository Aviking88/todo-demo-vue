module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    email: {
      required: true,
      unique: true,
      type: 'string',
      isEmail: true,
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
      statusCode: 409,
      description: 'firstname, lastname, email and password is required.',
    },
    redirect: {
      responseType: 'redirect',
    },
  },


  async fn(inputs, exits) {
    const userRecord = await User.create({
      email: inputs.email,
      //   password: await sails.helpers.passwords.hashPassword(inputs.password),
      password: inputs.password,
    })
      .intercept('E_UNIQUE', (err) => exits.invalid({
        message: 'invalid',
        err,
      }))
      .fetch();

    if (!userRecord) {
      return exits.invalid({
        message: 'invalid',
      });
    }

    return exits.success({
      message: 'User has been created successfully.',
      data: userRecord,
    });
  },

};
