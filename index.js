const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    host: "aula-fiec-2021.cmykxbpkdfjz.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Fiec2021",
    database: "fiec"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cors());
app.use(morgan('combined'));

app.get('/hello', (req, res) => { res.end(`
<html>
<body>
<h1> Aulinha Feliz de Cloud da Fiec </h1>
<img src="https://proffillipesilva.s3.us-east-2.amazonaws.com/foto_da_turma.png" />
</body>
</html>
`); });

app.get('/alunos/:rm/:nome/:username', async(req, res) => {
    const rm = parseInt(req.params.rm);
    const nome = req.params.nome;
    const email = req.params.username.toLowerCase() + '@gmail.com';
    var sql = `INSERT INTO T_ALUNOS (rm, nome, email) VALUES (${rm},"${nome}","${email}")`;
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.json('ok');
    });
})

app.get('/list-alunos', async(req, res) => {

    con.query("SELECT * FROM T_ALUNOS", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });

})

app.listen(3000, () => console.log('Servidor ligado'));