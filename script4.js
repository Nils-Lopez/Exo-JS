const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
var septante = [];
var age = [];
var lastName = [];
entrepreneurs.forEach(findby70);
function findby70(item) {
  if (item.year < 1980 && item.year > 1969) {
    septante.push(item.first + " " + item.last);
  }

  let name = item.first + " " + item.last
  let agee = 2020 - item.year + " ans"
  age.push({nom: name, age: agee});

  lastName.push(item.last);
  lastName.sort();
}
var alphaOrder = [];
lastName.forEach(myFunction);
function myFunction(item) {
  let ent = entrepreneurs.find(element => element.last == item);
  alphaOrder.push(ent);
}
console.log("===================");
console.log("Voici les entrepeneurs nés dans les années 70 :");
console.log(septante);
console.log("===================");
console.log("Voici les ages des entrepreneurs :");
console.log(age);
console.log("===================");
console.log("Voici les entrepeneurs dans l'ordre alphabétique :");
console.log(alphaOrder);
console.log("===================");


