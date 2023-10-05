// opdracht 1
function greet() {
    console.log("Hallo wereld");
}
greet();

// opdracht 2

function welkom() {
    console.log("Welkom bij ROC Mondriaan");
}
welkom();

// opdracht 3

function calculateSum() {
    console.log(3+4);
}
calculateSum();

// opdracht 4

function calculateDivision() {
    console.log( 8 / 2 );
}
calculateDivision();

// opdracht 5

function showArrayOfNumbers() {
    const number = [2, 3, 5, 7, 11]
    console.log(number);
}
showArrayOfNumbers();

// opdracht 6

function showArrayOfBrands() {
    const number2 = ["Mercedes", "Volkswagen", "Peugeot", "Tesla", "Toyota"]
    console.log(number2[0]);
    console.log(number2[1]);
    console.log(number2[2]);
    console.log(number2[3]);
    console.log(number2[4]);
}
showArrayOfBrands();

// opdracht 7

let computer = 7;
let user = 5;


function Deez() {
    console.log(computer);
    let bid = prompt("hoger of lager");
    console.log(user);
}
Deez();

// opdracht 8

function showMessage(bericht) {
    console.log(bericht);
    
}
showMessage("Deeznuts");

// opdracht 9
function  showNumbers(bericht1 , bericht2) {
    console.log(bericht1 +" "+ bericht2);
}
showNumbers("Hello", "Wereld");

// opddracht 10
function  showSum(p1, p2) {
    console.log(p1 + p2);
}
showSum(5, 10);

// opdracht 11
function  showSum(p1, p2) {
    console.log(p1 + p2);
}
showSum(10000, 57);

// opdracht 12
function concatenateStrings(p1, p2) {
    console.log(p1 +" "+  p2);
}
concatenateStrings("Mike", "Veer")

// opdracht 13
oneArray = ["Mike", "Veer", "mi", "Nuts"]
function  showArray(oneArray) {
    console.log(oneArray[0]);
    console.log(oneArray[1]);
    console.log(oneArray[2]);
    console.log(oneArray[3]);
}
showArray(oneArray);

// opdracht 15{deel3}
function getSum(p1, p2) {
    return p1 + p2;
}
console.log(getSum(1, 3));

// opdracht 16
function getProductMilk(p1, p2) {
    return p1 * p2;
}
console.log(getProductMilk(2, 3));

// opdracht 17
function getDivision(p1, p2) {
    return p1 / p2 + " "+ "and beyond";
}
console.log(getDivision(1, 0 ));

// opdracht 18
function getConcatenatedStrings(p1, p2) {
    return p1 / p2 + " "+ "and beyond";
}
console.log(getConcatenatedStrings(1, 0));

// opdracht 19

const numbers = [1, 3, 5, 7, 11]
function getSumOfArray(list) {
     return list[0] + list[1] + list[2] + list[3] + list[4]
}
console.log(getSumOfArray(numbers));