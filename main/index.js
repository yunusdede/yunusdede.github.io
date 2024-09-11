const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app running at http://yunusdede.github.io`)
})

//https://santrikoding.com/tutorial-expressjs-restful-api-1-membuat-project-expressjs
