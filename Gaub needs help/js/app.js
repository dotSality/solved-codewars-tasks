function f(n){
    console.log(n)
    let sum = 0;
    if (Number.isInteger(n) && n > 0) {
        for (i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    } else {
        return false;
    }
};