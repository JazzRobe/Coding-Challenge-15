import { assets, getAssetById } from "./asset.js"; //import array and function

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }

    buyAsset(assetId, buyQuantity) {
        this.quantity += buyQuantity;
        console.log(`Bought successfully. Currently own ${this.quantity}.`);
    }

    sellAsset(assetId, sellQuantity) {
        if (this.quantity > 0) {
        this.quantity -= sellQuantity;
        console.log(`Sold successfully. Currently own ${this.quantity}.`)
        return this.quantity;
        } else {
        console.log("Insufficient quantity to sell.");
    }
}} //class to create transactions