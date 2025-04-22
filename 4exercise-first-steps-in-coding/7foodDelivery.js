function foodDelivery(chicken, fish, vegan) {

    const total = chicken * 10.35 + fish * 12.40 + vegan * 8.15;
    const sweet = total * 0.20;
    const final = total + sweet + 2.50

    console.log(final);
}



foodDelivery(2, 4, 3);