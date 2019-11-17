import { User } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
  console.log('changeed', collection);
});

collection.fetch();
