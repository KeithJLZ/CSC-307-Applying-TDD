class Portfolio {
    constructor() {
        this.stocks = {};
    }

    isEmpty() {
        return Object.keys(this.stocks).length === 0;
    }

    uniqueStocks() {
        return Object.keys(this.stocks).length;
    }

    buy(stock, amount) {
        if (this.stocks[stock] === undefined) {
            this.stocks[stock] = amount;
        } else {
            this.stocks[stock] += amount;
        }
    }

    sell(stock, amount) {
        if (amount > this.stocks[stock]) {
            throw new ShareSaleException();
        }
        else if (amount === this.stocks[stock]) {
            delete this.stocks[stock];
        }
        else {
            this.stocks[stock] -= amount;
        }
    }

    symbolShares(stock) {
        return this.stocks[stock];
    }
}

export default Portfolio;
