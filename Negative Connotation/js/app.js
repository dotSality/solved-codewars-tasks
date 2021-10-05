function connotation(str) {
    let pos = 0;
    let neg = 0;
    str = str.split(/\s+/);
    for (let i = 0; i < str.length; i++) {
        if (str[i][0].match(/[a-m]/i)) {
            pos++;
        } else {
            neg++;
        }
    }
    return pos >= neg ? true : false;
}