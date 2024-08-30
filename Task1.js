// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.


const iHaveMoney = 1000;
const oneKgOrangePrice = 150;
const oneKgApplePrice = 250;

const totalPayAmmount = oneKgOrangePrice + oneKgApplePrice;

const returnMoney = iHaveMoney - totalPayAmmount;

console.log(returnMoney);   // 600
