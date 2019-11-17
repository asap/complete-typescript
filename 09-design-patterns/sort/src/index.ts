import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

const numbers = new NumbersCollection([10, 3, -5, 0]);
const characters = new CharactersCollection('Bacon');
const linkedList = new LinkedListCollection();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numbers.sort();
numbers.print();

characters.sort();
characters.print();

linkedList.sort();
linkedList.print();
