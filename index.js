const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(morgan('combined'));

app.get('/hello', (req,res) => { res.end('Olá Aluninhos da Fiec - VIA GIT - 3mod 2021'); });

app.listen(3000, () => console.log('Servidor ligado'));
