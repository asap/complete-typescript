import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(ROOT_URL)
    );
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(ROOT_URL, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
