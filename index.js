const express = require('express');
const path = require('path');
const app = express();
console.log("require is working");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
