function basket(total) {
    const kecove = total * 0.60;
    const ekip = kecove * 0.80;
    const ball = ekip * 0.25;
    const accsessories = ball * 0.2;

    const price = total + kecove + ekip + ball + accsessories;
    console.log(price);
}


basket(365);