import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger('change');
    });
  }
}
