function sumCubes(n) {
     let sum = 0;
     n = Math.abs(n);
     n = n.toString().split('');
     n.forEach(function(element, index, n) {
              sum += Math.pow(parseInt(element), 3);
         }
     )
     return sum;
}