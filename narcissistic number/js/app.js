function narcissistic(value) {
    if (value <= 10) { return true};
    let result = 0;
    value = value.toString().split('');
    value.forEach(function(element, index, array) {
        result += (Math.pow(parseInt(element), value.length));
    })
    return result === parseInt(value.join(''));
}

