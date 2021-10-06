function swap(str){
    let str2 = '';
    for (i = 0; i < str.length; i++) {
        (str[i] === str[i].toLowerCase()) ? str2 += str[i].toUpperCase() : str2 += str[i].toLowerCase();
    }
    return str2;
}