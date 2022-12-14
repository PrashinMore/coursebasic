function add(event) {
    event.preventDefault()
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    var myVariable = 2;
    const additionResult = document.getElementById("additionResult");
    var sum = Number(a.value) + Number(b.value)
    console.log(sum);
    additionResult.innerHTML = "Summation of " + a.value + " and " + b.value + " = " + sum
}


function modulo(event) {
    event.preventDefault()
    const c = document.getElementById("c");
    const d = document.getElementById("d");
    if (Number(c.value) > Number(d.value)) {
        const remainderResult = document.getElementById("remainderResult");
        var remainder = Number(c.value) % Number(d.value)
        console.log(remainder);
        remainderResult.innerText = "Remainder of " + c.value + " and " + d.value + " = " + remainder   
    } else {
        alert("Number to divide should be bigger")
    }
}