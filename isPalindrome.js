function checkPalindrome(x) {
    let convertedNumber = x.toString()
    let reverseString = convertedNumber.split("").reverse().join("")
    return reverseString === convertedNumber ? "Yes" : "No"
}


// Some Testcases...
let num = 12321;
console.log(checkPalindrome(num)); // Yes

let number = 456;
console.log(checkPalindrome(number)); // No
