const express = require('express')
const path = require('path');
const app = express()
app.set('view engine', 'ejs');

const port = 8000 || process.env.port

// app.use('/', (req, res) => {
//     res.send("Hello World!")
// })

app.use('/login', function(request, response) {
    // log the user in, checked usrname and password
    response.send("You have logged in!")
})

app.use("/sign-up", (req, res) => {
    res.render("signup.ejs")
}) 

app.use('/', function(request, response) {
    // log the user in, checked usrname and password
    // response.sendFile(path.join(__dirname+'/index.html'))
    response.render("index.ejs")
})


function signUpUser(req, res) {
    res.send("Please fill your details")
}



app.listen(port, () => console.log(`Server running on port ${port}`))
