function lastSurvivor(str) {
    let arr = [];
    for (let i = str.length; i > 0; i--) {
        arr.length = str.length-1;
        for (let j = 0; j < arr.length; j++) {
            arr[j] = j;
        }
        console.log('str: ' + str + ', arr: ' + arr);
        if (arr.length == 0) {
            return str;
        }
        str = str.substring(1);
    }
}