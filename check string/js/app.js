function checkString(string) {
    let changedArray = [];
    let newString = string.split(' ');
    for (let i = 0; i < newString.length; i++) {
        if (newString[i].length >= 5) {
            let splittedWord = newString[i].split('').reverse().join('');
            changedArray.push(splittedWord);
        } else {
            changedArray.push(newString[i]);
        }
    }
    return changedArray.join(' ');
}