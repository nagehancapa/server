// import express
const express = require('express')

// create server
const app = express()

function render (message) {
  const document = `<html>
    <head>
      <title>Home</title> 
    </head>
    <body>
      <h1>${message}</h1>
    <body>
  </html>`
  return document
}

app.get(
  '/user/:name',
  (request, response) => {
    const message = 'Welcome ' + request.params.name
    const page = render(message)
    console.log(request.path)
    response.send(page)
  }
)

const port = 3000
// tell the app to listen on port 3000
app.listen(
  port,
  () => console.log(`Listening on: ${port}`)
)