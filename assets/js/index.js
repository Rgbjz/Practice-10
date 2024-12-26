//Exercise #1
const SUMMAND1 = Number(prompt("Enter first number:"));
const SUMMAND2 = Number(prompt("Enter second number:"));
const SUMMA_OF_NUMBERS =
  (SUMMAND1 + SUMMAND2) % 5 === 0 ? "Сума кратна 5" : "Сума не кратна 5";
console.log(SUMMA_OF_NUMBERS);
//Exercise #2
/**
 * Returns Area of the square
 * @param {number} sideOfTheSquare
 * @returns {number} Returns multiplied sides of square
 */

function AreaOfTHeSquare(sideOfTheSquare) {
  return sideOfTheSquare * sideOfTheSquare;
}
let sideOfTheSquare = Number(prompt("Введіть сторону квадрата:"));
console.log("Площа квавдрата: ", AreaOfTHeSquare(sideOfTheSquare));
//Exercise #3
/**
 * Display menu of drinks
 */
function DrinksMenu() {
  let typeOfDrink = Number(
    prompt("Що ви бажаєте?\n1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода")
  );
  switch (typeOfDrink) {
    case 1:
      alert("Ви обрали чай");
      break;
    case 2:
      alert("Ви обрали каву");
      break;
    case 3:
      alert("Ви обрали сік");
      break;
    case 4:
      alert("Ви обрали воду");
      break;
    default:
      alert("Такого напою у нас немає");
  }
}
DrinksMenu();

//Exercise #4
let purchaseAmount = Number(prompt("Введіть суму покупки:"));
let discount = purchaseAmount >= 800 ? 0.05 : purchaseAmount >= 500 ? 0.03 : 0;
let discontAmount = purchaseAmount * discount;
console.log(
  "Остаточна сума покупки зі знижкою:",
  purchaseAmount - discontAmount
);
//Exercise #5
/**
 *  Calculates whether there is a remainder when dividing
 * @param {number} divident - Divident
 * @param {number} divider - Divider
 * @returns {boolean} Results of division
 */
function isItDivisibleWithoutRemainder(divident, divider) {
  let resultOfDivision = divident % divider === 0 ? true : false;
  return resultOfDivision;
}
let IsDivided = isItDivisibleWithoutRemainder(3, 2);
console.log(IsDivided);
//Exercise #6
/**
 * This function solves a quadratic equation and prints the result to the console
 * @param {number} a - first coefficient
 * @param {number} b - second coefficient
 * @param {number} c - third coefficient
 */
function quadraticEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let x1 = null;
  let x2 = null;
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Перший корінь:${x1}\nДругий корінь:${x2}`);
  } else if (discriminant === 0) {
    x1 = -b / (2 * a);
    console.log(`Корні дорівнюють:${x1}`);
  } else {
    console.log("Квадратне рівняння не має дійсних коренів.");
  }
}
quadraticEquation(1, -6, 9);
