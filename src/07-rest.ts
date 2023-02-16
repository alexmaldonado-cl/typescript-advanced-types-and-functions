import { ROLES, User } from "./01-enums";


const currentUser: User = {
  username: 'alex',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  return currentUser.role === ROLES.ADMIN ? true : false;
}

export const checkRole = (...roles: string[]) => roles.includes(currentUser.role);


const result = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log({result});
