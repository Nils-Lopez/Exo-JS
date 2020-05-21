n = Number(prompt("Salut bienvenue dans ma pyramide, tu veux combien d'étages ?"));
var etage = "#";
for(let count = 1; count <= n; count++) {
	str = " ".repeat(n - count) + etage.repeat(count)
	console.log(str);
}