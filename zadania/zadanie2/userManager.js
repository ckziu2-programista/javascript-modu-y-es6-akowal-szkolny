export function addUser(users, user){
    users.push(user);
}
export function removeUser(users, id){
    let i = users.findIndex((v) => v.id == id);
    users.splice(i,i);
}
export function findUser(users, id){
    return users.find((v) => v.id == id);
}