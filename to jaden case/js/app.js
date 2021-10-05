String.prototype.toJadenCase = function (str) {
    str = str.split(' ');
    let newArr = [];
    str.forEach(function(word, index, str)  {
             word = word.split('');
             word[0] = word[0].toUpperCase();
             newArr.push(word.join(''))
    });
    return newArr.join(' ');
};