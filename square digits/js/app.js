function squareDigits(number) {
    number = String(number).split('');
    for (let i = 0; i < number.length; i++) {
        number[i] *= number[i];
    }
    return Number(number.join(''));
}