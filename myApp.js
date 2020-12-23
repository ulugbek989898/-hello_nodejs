const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1 style=' text-align: center; background:#0A566E; color:white'>Hello Node JS. It is my first App</h1>")
})
app.get('/about', (req, res) => {
    res.send("<p style=' text-align: center; color:white; background:#3BDBBB'> Isroilov Ulugbek <br/> mail:isroilov_9898@mail.ru</p>")
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})