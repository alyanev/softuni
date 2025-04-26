function area(figure, a, b) {
    if (figure === 'square')
        return a * a;
    else if (figure === 'rectangle')
        return (a * b).toFixed(3);
    else if ( figure === 'circle')
        return ((a * a) * Math.PI).toFixed(3);
    else if (figure === 'triangle')
        return ((a * b) / 2).toFixed(3);
}


console.log(area('triangle', 4.5, 20));