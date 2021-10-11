function rowWeights(array){
    let newArray = []
    array.map(function(el, i, array) {
        return (i-1)%2 === 0 ? newArray[1] += el : newArray[0] += el
    })
    return newArray;
}