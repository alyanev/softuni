function greening(sqMeters) {

    const oneSqMPrice = 7.61;
    const price = sqMeters * oneSqMPrice;
    const discount = price * 0.18;
    const total = price - discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}