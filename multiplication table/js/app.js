function multiTable(number) {
    let str = ''
    for (i = 1; i <= 10; i++) {
        str += `${i} * ${number} = ${i*number}\n`
    }
    return str.substring(0, str.length-1)
}