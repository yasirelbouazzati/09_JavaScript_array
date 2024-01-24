/**
 * Given 'WISHES' array, define function 'calculateShopping' to return how much it would cost to just buy everything at once.
 *
 * expected: 227005
 */

const WISHES = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function calculateShopping(wishes) {
  const totalCost = wishes.reduce((acc, item) => acc + item.price, 0);
  return totalCost;
}

const totalPrice = calculateShopping(WISHES);

console.log(totalPrice);

export default calculateShopping;
