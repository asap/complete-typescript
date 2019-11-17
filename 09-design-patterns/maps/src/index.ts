import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

console.log('user', user);
console.log('company', company);
console.log('customMap', customMap);

customMap.addMarker(user);
customMap.addMarker(company);

console.log('customMap after markers', customMap);
