import { User } from './models/User';

const user = new User({
  name: 'New Name',
  age: 9999
});

user.save();

console.log('user name', user.get('name'));
console.log('user age', user.get('age'));
