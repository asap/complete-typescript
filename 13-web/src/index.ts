import { User } from './models/User';

const user = User.buildUser({ id: 123, name: 'Alex', age: 92 });

user.on('change', () => {
  console.log('user changed', user);
});

user.fetch();

console.log('user is', user);
