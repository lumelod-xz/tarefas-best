// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [];

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    if (!user.name || !user.email) {
        return res.status(400).send('Name and email are required');
    }
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
