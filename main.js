import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio";
import { Transaction } from "./transaction.js";
//import from different files/modules

console.log(`Value of all assets: $${calculatePortfolioValue()}`);
console.log(getPortfolioAllocation());
//display values and percentages in the console

const asset1 = new Transaction(4, "buy", 1);
const asset2 = new Transaction(2, "sell", 2);
const asset3 = new Transaction(3, "sell", 1);
//create new instances

asset1.buyAsset(4, 1);
asset2.sellAsset(2, 2);
asset3.sellAsset(3, 1);
//testing the transactions with new assets