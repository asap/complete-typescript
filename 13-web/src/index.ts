import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Jim', age: 42 });

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root Element not found');
}
