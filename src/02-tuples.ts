const prices: number[] = [1, 2, 3, 4];
prices.push(3);
// prices.push('hola'); //! ERROR
console.log(prices);


let user: [string, number, boolean];

// user = ['alex', 22]; //! ERROR
// user = ['22', 22]; //! ERROR
// user = []; //! ERROR
// user = ['alex']; //! ERROR
// user = ['alex', 12]; //! ERROR

user = ['alex', 22, true]; //* CORRECT 🎉

const [username, age] = user;

console.log(username);
console.log(age);
