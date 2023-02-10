const express = require('express');
const app = express()
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.post('/', (req, res) => {
    res.render('index.ejs', {body: req.body})
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log('server started'))