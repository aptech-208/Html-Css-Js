console.log("IF - ElseIf - Else | Statement");

//If - Else
let input = prompt("Your Current Age", "");
console.log(input);
if (input >= 18) {
    document.write("You are 18+ Verified");
}
else {
    document.write("You are 18- Verification Failed");
}

//If - ElseIf - Else
let inp = prompt("Your Current Age", "");
console.log(input);
if (inp > 17) {
    document.write("Proceed");
}
else if (inp = 18) {
    document.write("Verified-Proceed");
}
else {
    document.write("Cant-Proceed");
}