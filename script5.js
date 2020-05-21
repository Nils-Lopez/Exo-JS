const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
let a = 0;
let renteds = [];
books.forEach(myFunction);
function myFunction(item) {
  if(item.rented < 1) {
    a++;
  }

  renteds.push(item.rented);
  renteds.sort();

}
let ordered = [];
renteds.forEach(rentedOrder)
function rentedOrder(item) {
  book = books.find(element => element.rented == item);
  ordered.push(book);
}
if(a == 0) {
  console.log("=================");
  console.log("Il n'y a aucun livre jamais emprunté");
  console.log("=================");
}
else {
  console.log("=================");
  console.log("Il y a " + a + " livre(s) jamais emprunté(s)");
  console.log("=================");
}
console.log("=================");
console.log("Voici le livre le moins emprunté :");
console.log(ordered[0]);
console.log("=================");
console.log("=================");
console.log("Voici le livre le plus emprunté :");
console.log(ordered[ordered.length-1]);
console.log("=================");
console.log("=================");
console.log("Voici le livre avec l'id 873495 :");
console.log(books.find(element => element.id == 873495));
console.log("=================");

let booktodel = books.find(element => element.id == 133712);
books.splice(books.indexOf(booktodel), books.indexOf(booktodel) + 1);

ordered = [];
books.forEach(alphabet);
function alphabet(item) {
  ordered.push(item.title);
  ordered.sort();
}
joinOrdered = [];
ordered.forEach(joinAlpha);
function joinAlpha(item) {
  joinOrdered.push(books.find(element => element.title == item))
}
console.log("=================");
console.log("Voici les livres dans l'odre alphabétique :");
console.log(joinOrdered);
console.log("=================");