const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = require('./models/user')
const path = require('path');

mongoose.connect("mongodb://localhost/sampleDB", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
const db = mongoose.connection
db.on('error', (error) => console.error(error))

const app = express()

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

const port = 8000 || process.env.port

app.post('/user', async (req, res) => {
    const user = new userSchema({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
      })
    
      try {
        const newUser = await user.save()
        res.status(201).json("User Created")
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

app.get('/user', async (req, res) => {
  let user = await userSchema.findOne({ email: req.query.email })
  res.status(200).json(user)
})

app.put('/update-username', async (req, res) => {
  let updatedUser = await userSchema.updateOne({ email: req.body.email }, { name: req.body.newName });
  res.status(200).json(updatedUser)
})

app.delete('/user', async (req, res) => {
  let deletedUser = await userSchema.findOneAndRemove({ email: req.body.email })
  res.status(200).json(deletedUser)
})

app.get('/sign-up', async (req, res) => {
  res.render("signup.ejs")
})

app.use('/', (req, res) => {
    res.send("success")
})

app.listen(port, () => console.log(`Server running on port ${port}`))
