import { User } from './models/User';

const user = new User({ id: 1 });

const newUser = new User({
  name: 'New User',
  age: 34
});

user.on('change', () => {
  console.log('user was changed', user);

  console.log('user id', user.get('id'));
  console.log('user name', user.get('name'));
  console.log('user age', user.get('age'));
});

newUser.on('save', () => {
  console.log('new user was changed', newUser);

  console.log('new user id', newUser.get('id'));
  console.log('new user name', newUser.get('name'));
  console.log('new user age', newUser.get('age'));
});

user.fetch();
newUser.save();
