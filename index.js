const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// // root route
app.get('/', (req, res) => {
  res.send("Go to /api/v1");
});

// Require employee routes
const personRoutes = require('./src/routes/person.routes');
// using as middleware
app.use('/api/v1/person', personRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});