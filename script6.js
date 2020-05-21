var params = prompt("Veuillez entrer le code ARN :");
var arn = params.match(/.{3}/g);
var translated = [];
arn.forEach(arnToAcid);
function arnToAcid(item) {
	if(item == "UCU" || item == "UCC" || item == "UCA" || item == "UCG" || item == "AGU" || item == "AGC") {
		translated.push("Sérine");
	}
	else if(item == "CCU" || item == "CCC" || item == "CCA" || item == "CCG") {
		translated.push("Proline");
	}
	else if(item == "UUA" || item == "UUG") {
		translated.push("Leucine");
	}
	else if(item == "UUU" || item == "UUC") {
		translated.push("Phénylalanine");
	}
	else if(item == "CGU" || item == "CGC" || item == "CGA" || item == "CGG" || item == "AGA" || item == "AGG") {
		translated.push("Arginine");
	}
	else if(item == "UAU" || item == "UAC") {
		translated.push("Tyrosine");
	}
}
console.log("===============");
console.log("Le code ARN : " + arn.join("-"));
console.log("Nous donne :");
console.log(translated.join("-"));
console.log("===============");
