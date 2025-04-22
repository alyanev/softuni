function depositCalc(deposit, months, interest) {
    const interestAdded = deposit * interest / 100;
    const oneMonthInt = interestAdded / 12;
    const result = (deposit + oneMonthInt * months);
    return result;
}

console.log(depositCalc(200, 3, 5.7));