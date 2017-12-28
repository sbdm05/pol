/* eslint-disable no-param-reassign */
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function onCreateUser(email, password) {
  console.log(user)
  return user;
});

Accounts.findUserByEmail(email){
  console.log(userId)
  return userId;
};


Accounts.sendResetPasswordEmail(function sendResetPasswordEmail(userId, email){
  return userId;
});
