const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const userRoutes = require('./src/routes/user.routes');
const todoRoutes = require('./src/routes/todo.routes');
// using as middleware
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/todo', todoRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});