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

test("calculateShopping should return the correct total cost", () => {
  expect(calculateShopping(WISHES)).toBe(227005);
});
