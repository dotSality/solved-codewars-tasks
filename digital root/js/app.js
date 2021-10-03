function digital_root(n) {
    if (n == 0) {return n};
    let sum;
    let arr = Math.abs(n).toString().split('');
    while (arr.length > 1) {
        sum = 0;
        for (i = 0 ; i < arr.length ; i++) {
            sum += parseInt(arr[i]);
        }
        arr = sum.toString().split('');
    }
    return Number(sum);
}