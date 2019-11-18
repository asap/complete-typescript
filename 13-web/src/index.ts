import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Jim', age: 42 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log('user edit', userEdit);
} else {
  throw new Error('Root Element not found');
}
