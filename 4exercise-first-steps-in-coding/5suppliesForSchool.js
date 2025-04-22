function sum(pens, markers, liters, discount) {
    const total = pens * 5.80 + markers * 7.20 + liters * 1.20;
    const discounted = total * (discount / 100);
    return total - discounted;
}


console.log(sum(2, 3, 4, 25));