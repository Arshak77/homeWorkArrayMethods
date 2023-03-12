function sum(...args) {
return args.reduce((sum, current) => sum + current);
};

console.log (sum(1, 5));

console.log (sum(1, 8, 3));