function repainting(nylon, paint, antipaint, hours) {
    const nylonPrice = 1.5;
    const painPrice = 14.50;
    const antipaintPrice = 5;
    const additionalPaint = paint * 0.10;
    const additionalNylon = nylon + 2;
    const total = additionalNylon * nylonPrice + (additionalPaint + paint) * painPrice + antipaint * antipaintPrice + 0.4;
    const priceWork = hours * (total - total * 0.70);
    const final = total + priceWork;

    console.log(final);
}

repainting(10,

    11,

    4,

    8);