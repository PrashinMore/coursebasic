function onSubmit(e) {
    e.preventDefault()
    var userName = document.getElementById('userName')
    var result = document.getElementById('result')
    result.innerText = "User name is: " + userName.value
}

function clickedObjectBtn() {
    var objectVariable = {
        name: "Prashin",
        age: 22,
        education: "graduate",
        value: ""
    }
    var objectDiv = document.getElementById('results2')
    objectDiv.innerText = `My name is: ${objectVariable.name}\n and my age is: ${objectVariable.age}.\n I am a ${objectVariable.education}`
}