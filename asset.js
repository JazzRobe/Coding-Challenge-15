export let assets = [
    {id: 1, name: "cash", type: "cash", price: 2200, quantity: 1},
    {id: 2, name: "appleStock", type: "stock", price: 500, quantity: 1},
    {id: 3, name: "businessLoan", type: "loan", price: 1500, quantity: 2}
]; //define assets array

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
} //function to return asset details when given id #