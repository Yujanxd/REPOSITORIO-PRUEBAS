const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor web iniciado en http://localhost:3000');
});

en que estas?