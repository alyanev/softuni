// Exercise: Calculate if the toy shop can afford the trip

function toyShop(tripPrice, puzzles, talkingDolls, bears, minions, trucks) {
    let puzzlePrice = 2.60;
    let talkingDollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let salesSum = puzzlePrice * puzzles + talkingDollPrice * talkingDolls + bearPrice * bears + minionPrice * minions + truckPrice * trucks;
    let purchaseCount = puzzles + talkingDolls + bears + minions + trucks;
    let rentForShop = 0.10;

    if (purchaseCount >= 50) {
        salesSum *= 0.75;
    }

    let total = salesSum - salesSum * rentForShop;
    let balance = total - tripPrice;

    if (total >= tripPrice) {
        return `Yes! ${balance.toFixed(2)} lv left.`;
    } else {
        return `Not enough money! ${Math.abs(balance).toFixed(2)} lv needed.`
    }
}

console.log(toyShop(320,

    8,
    
    2,
    
    5,
    
    5,
    
    1));