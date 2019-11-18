import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(models: User, itemParent: Element) {
    new UserShow(itemParent, models).render();
  }
}
