const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'its rainy !!!'})
})

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
// https://arcane-retreat-68635.herokuapp.com/ 
// https://git.heroku.com/arcane-retreat-68635.git