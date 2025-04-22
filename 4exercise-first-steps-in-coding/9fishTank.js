function tank(l, w, h, percent) {
    const volume = l * w * h;
    const total = (volume - volume * percent / 100) / 1000;

    console.log(total);
}

tank(85,

    75,

    47,

    17);