const express = require('express') //loads express module
const app = express() //Creates a new instnce of express on our server

//tells the server where to point
app.get('/', function (req, res) {
  //when a request comes in at localhost:3000, it will respond
  res.send(`<img style="border-radius: 10%" src='http://www.placecage.com/c/200/300'>`)
  console.log(req)
})

app.get('/cage', function (req, res) {
  res.send(`<h1 style="color: tomato">That was Crazy Cage</h1>`)
})

app.get('/math/add', function (req, res) {
  res.send(`${parseInt(req.query.num1)}` + `${parseInt(req.query.num2)}`)
})

app.get('/favorite/:noun', function (req, res) {
  res.send(`<h2 style="text-align:center;font-size:8vw;color:tomato">I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}</h2>`)
})

app.get('/:name', function (req, res) {
  console.log(req.params)
  console.log(req.route)
  console.log(req.query)
  res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`)
})

app.get('/:food', function (req, res) {
  res.send(`<h1 style="color:tomato;text-align:center;text-decoration:underline;">I really love to eat ${req.params.food}!!</h1>`)
})

const port = process.env.PORT || 3000

//where express is listening from
app.listen(port, function () {
  console.log(`Hello-express is listing on port ${port}`)
})