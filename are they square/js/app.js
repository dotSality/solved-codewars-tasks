const isSquare = function (arr) {
    if (arr === []) return undefined
    for (i = 0 ; i < arr.length ; i++) {
        if (Math.sqrt(arr[i]) % 1 !== 0) return false
    }
    return true
}