// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) return {};
    let pennies = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let exchangeResult = {};
    Object.keys(pennies).forEach(function(item){
        if (currency >= pennies[item]) {
            let divisionResult = Math.floor(currency / pennies[item]);
            exchangeResult[item] = divisionResult;
            currency -= pennies[item] * divisionResult;
        }
    });
    return exchangeResult;
}
