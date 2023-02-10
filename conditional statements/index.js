function conditionalPractice(event) {
    event.preventDefault();
    var number = document.getElementById("a");
    var result = document.getElementById("result");
    if (Number(number.value) > 5) {
        result.innerText = "The number is greater than 5"
    } else if (Number(number.value) == 5) {
        result.innerText = "The number is equal to 5"
    } else if (Number(number.value) < 5) {
        result.innerText = "The number is smaller than 5"
    } else {
        result.innerText = "The input is not a number"
    }
}
// syntax
// if (condition) {
//     // do something
// } else if (condition) {
//     // execute else-if block of code
// } else {
//     // execute else block if all above conditions return false
// }

function loopExample() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
    console.log("loop finished");
}

// syntax
for (initialization; condition; increment) {
    // loop execute this code
}
// code


var a = addTwoNumbers(1, 2)
console.log(a);

function addTwoNumbers(1, 2) {
    return 3;
}