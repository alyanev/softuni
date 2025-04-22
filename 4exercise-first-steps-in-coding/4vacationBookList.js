function vacation(bookPages, pagesReadPerHour, daysForRead) {
    const hoursRead = bookPages / pagesReadPerHour;
    const result = hoursRead / daysForRead;

    console.log(result);
}

vacation(212, 20, 2);