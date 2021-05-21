const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(morgan('combined'));

app.get('/hello', (req,res) => { res.end(`
<html>
<body>
<h1> Aulinha Feliz de Cloud da Fiec </h1>
<img src="https://proffillipesilva.s3.us-east-2.amazonaws.com/foto_da_turma.png" />
</body>
</html>
`); });

app.listen(3000, () => console.log('Servidor ligado'));
