// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowLet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

var uppLet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
]

var nums = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
]

var special = [
    "!", "@", "#", "$", "%", "&", "*", "?", "~", "=", "+", ":", ";", "(", ")", ",", "-", "_", "^", "{", "}", "[", "]", "'", '"', ".", "/", "|", "<", ">", "`", 
]

var passLength = parseInt(prompt("How many characters long would you like your password to be? (8-128)"))
var useUppLet = confirm("Click OK if you would like your password to use uppercase letters. Click cancel if not.")
var useNums = confirm("Click OK if you would like your password to use numbers. Click cancel if not.")
var useSpecial = confirm("Click OK if you would like your password to use special characters (!@#$%^&*()_+?). Click cancel if not.")

console.log(passLength)
console.log(useUppLet)
console.log(useNums)
console.log(useSpecial)

var passCriteria = [lowLet]


if (useUppLet) {
    passCriteria.push(uppLet)
}

if (useNums) {
    passCriteria.push(nums)
}

if (useSpecial) {
    passCriteria.push(special)
}

console.log(passCriteria)

// Write password to the #password input
function writePassword() {
    for (var i = 0; i < passLength; i++) {
        var randomCharArray = passCriteria[Math.floor(Math.random() * passCriteria.length)]
    
        var randomChar = randomCharArray[Math.floor(Math.random() * randomCharArray.length)]
    
        console.log(randomChar)
        var passwordText = document.querySelector("#password");
        passwordText.value = randomChar;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




