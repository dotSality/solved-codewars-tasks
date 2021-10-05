function lastSurvivor(str, arr) {
    if (str != '' || str.length === (arr.length - 1)) {
        str = str.split('');
        for (i = 0; i < arr.length; i++) {
            console.log('str: ' + str + ', arr: ' + arr);
            str.splice(arr[i], 1);
        }
        return str.join('');
    }
}