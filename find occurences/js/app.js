function findOccurs(word, letter) {
    let occure = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            occure++;
        }
    }
    console.log(occure);
}