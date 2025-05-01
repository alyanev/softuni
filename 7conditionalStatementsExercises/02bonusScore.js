function bonusScore(number) {
    let bonusScores = 0;
    let totalScores = 0;

    if (number <= 100)
        bonusScores += 5;
    else if (number <= 1000)
        bonusScores = number * 0.20;
    else if (number > 1000)
        bonusScores = number * 0.10;

    if (number % 2 === 0)
        bonusScores += 1;
    else if (number % 5 === 0)
        bonusScores += 2;

    console.log(bonusScores);
    console.log(number + bonusScores);
}

bonusScore(20);