// function checkString(string) {
//     let changedArray = [];
//     let newString = string.split(' ');
//     for (let i = 0; i < newString.length; i++) {
//         if (newString[i].length >= 5) {
//             let splittedWord = newString[i].split('').reverse().join('');
//             changedArray.push(splittedWord);
//         } else {
//             changedArray.push(newString[i]);
//         }
//     }
//     return changedArray.join(' ');
// }
// noinspection JSAnnotator

// function  ifPalindrome(string) {
//     return string == string.split('').reverse().join('');
// }

//1. create a string
//2. create an array with string.length-1 from 0 to length-1
//3.

// function lastSurvivor(str) {
//     let arr = [];
//     for (let i = str.length; i > 0; i--) {
//         arr.length = str.length-1;
//         for (let j = 0; j < arr.length; j++) {
//             arr[j] = j;
//         }
//         console.log('str: ' + str + ', arr: ' + arr);
//         if (arr.length == 0) {
//             return str;
//         }
//         str = str.substring(1);
//     }
// }


// function lastSurvivor(str, arr) {
//     if (str != '' || str.length === (arr.length - 1)) {
//         while (str.length > 0) {
//             console.log('str: ' + str + ', arr: ' + arr);
//             if (arr.length == 0) {
//                 return str;
//             }
//             let shifted = arr.shift();
//             str = str.substring(shifted);
//         }
//     }
// }


// function lastSurvivor(str, arr) {
//     if (str != '' || str.length === (arr.length - 1)) {
//         while (str.length > 0) {
//             console.log('str: ' + str + ', arr: ' + arr);
//             if (arr.length == 0) {
//                 return str;
//             }
//             str = str.split('');
//             i = arr[0];
//             str[i] = '';
//             str = str.join('');
//         }
//     }
// }
//
// function lastSurvivor(str, arr) {
//     if (str != '' || str.length === (arr.length - 1)) {
//         str = str.split('');
//         for (i = 0; i < arr.length; i++) {
//             console.log('str: ' + str + ', arr: ' + arr);
//             str.splice(arr[i], 1);
//         }
//         return str.join('');
//     }
// }

// *****************************************************************

// function squareDigits(number) {
//     number = String(number).split('');
//     for (let i = 0; i < number.length; i++) {
//         number[i] *= number[i];
//     }
//     return Number(number.join(''));
// }

function lastDigit(n, d) {
    let result = [];
    n = n.toString().split('');
    if (d <= 0) {
        return result;
    } else if (d > n.length) {
        n = n.map(Number);
        result = n;
    } else {
        for (let i = d; i > 0; i--) {
            result.unshift(Number(n.pop()));
        }
        n.push(...result);
    }
    return result;
}