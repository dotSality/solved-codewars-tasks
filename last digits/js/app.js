function lastDigit(n, d) {
    let result = [];
    n = n.toString().split('');
    if (d <= 0) {
        return result;
    } else if (d > n.length) {
        n = n.map(Number);
        result = n;
    } else {
        for (let i = d; i > 0; i--) {
            result.unshift(Number(n.pop()));
        }
        n.push(...result);
    }
    return result;
}