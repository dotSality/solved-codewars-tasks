function checkExam(array1, array2) {
    let result = 0;
    for (i = 0; i<array2.length; i++) {
        console.log(array1[i], array2[i])
        if (array2[i] === array1[i]) {
            result += 4;
        } else if (array2[i] == '') {
            result += 0;
        } else {
            result -= 1;
        }

    }
    return result >= 0 ? result : 0;
}