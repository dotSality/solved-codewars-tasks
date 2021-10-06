function getDivisorsCnt(n){
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (n%i == 0 || n === 1) {
            count++;
        }
    }
    return count;
}