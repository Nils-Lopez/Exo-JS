var dialog = prompt("Salut ! Que veux tu me dire ?");

while (dialog) {
	if(dialog[dialog.length - 1] == "?") {
		console.log("Ouais ouais..");
		break
	}
	else if(dialog == dialog.toUpperCase()) {
		console.log("Pwa calme toi !");
		break
	}
	else if(dialog.toUpperCase().includes("FORTNITE")) {
		console.log("On s'fait un partie ?"); 
		break
	}
	else {
		console.log("balek");
		break
	}
}
if (dialog) {

}
else {
	console.log("T'es en PLS ?!");
}
