import { assets } from "./asset.js"; //importing array

let portfolioValue = 0;

export function calculatePortfolioValue() {
    portfolioValue = 0;
    assets.forEach(asset => {
        portfolioValue += asset.price*asset.quantity;
    });
    return portfolioValue;
}; //function to calc value of ass assets, multiplying quanity by price then adding prices

export function getPortfolioAllocation() {
    let portfolioAllocation = assets.map(asset => {
        return {
            name: asset.name,
            allocation: ((asset.price * asset.quantity / portfolioValue) * 100).toFixed(2) + '%'
        };
    });
    return portfolioAllocation;
}; //function to calc percentage of total for each asset