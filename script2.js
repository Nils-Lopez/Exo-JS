n = prompt("Bonjour choisis un nombre dont tu veux le factorielle :");
n = Number(n);
var x = n
for(let count = 1; count < n; count++){
	x *= count;
}
console.log("===========");
console.log(x);
console.log("===========");