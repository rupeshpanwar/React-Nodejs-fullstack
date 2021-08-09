const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'how !!!'})
})

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
// https://git.heroku.com/frozen-scrubland-28418.git
// https://frozen-scrubland-28418.herokuapp.com/ deployed to Heroku