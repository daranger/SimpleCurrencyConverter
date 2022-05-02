const input = require('sync-input');

console.log("Welcome to Currency Converter!");

let rates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

function choose() {

    while (true) {
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");
        let choose = input();
        if(choose==1){
            return;
        }
        if (choose == 2) {
            console.log("Have a nice day!");
            process.exit(1);
        }
        if (choose != 2 && choose != 1) {
            console.log("Unknown input");
        }
    }

}

function from() {
    while (true) {
        console.log("What do you want to convert?");
        let from = input("From: ").toLocaleUpperCase();
        if (!rates.hasOwnProperty(from)) {
            console.log("Unknown currency");
        } else {
            return from;
        }
    }
}

function to() {
    while (true) {
        let to = input("To: ").toLocaleUpperCase();
        if (!rates.hasOwnProperty(to)) {
            console.log("Unknown currency");
        } else {
            return to;
        }
    }
}

function amount() {
    while (true) {
        let amount = input("Amount: ");
        if (isNaN(amount)) {
            console.log("The amount has to be a number");
        }
        if (amount >= 1) {
            return amount;
        } else {
            console.log("The amount can not be less than 1");
        }
    }
}

function convert(from, to, amount) {
    let result = amount / rates[from] * rates[to];
    return console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`);
}

let equals = "1 USD equals  ";

for (let currency in rates) {
    console.log(equals + rates[currency] + ' ' + currency);
}

choose();
let firstCurrency = from();
let secondCurrency = to();
let amountConvert = amount();
convert(firstCurrency, secondCurrency, amountConvert);
choose();