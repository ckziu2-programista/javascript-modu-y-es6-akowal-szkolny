import { addUser, removeUser, findUser } from './userManager.js';

let users = [];

addUser(users, {id:2,name:"Johny"});
addUser(users, {id:1,name:"sdsdy"});
addUser(users, {id:5,name:"sdsddzsvfgdsy"});
console.log(users);

console.log(findUser(users, 1));

removeUser(users,1);
console.log(users);
