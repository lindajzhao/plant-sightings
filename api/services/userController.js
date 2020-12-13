// I copied and pasted this entire file directly from a codealong, so no need to look closely :P

const User = require('../models//userModel');

const createUser = async ({ email, password, firstName, lastName }) => {
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    const user = await newUser.save();
    return user;
  } catch (ex) {
    throw ex;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (ex) {
    throw ex;
  }
}

const findUserByID = async (id) => {
  try {
    const user = await User.findById(id);
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  } catch (ex) {
    throw ex;
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByID
}