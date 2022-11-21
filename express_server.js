const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('public'));

let list = [];

list.push( { todo: '음악 듣기', done: true } );
list.push( { todo: '책 읽기', done: false } );
list.push( { todo: '글쓰기', done: false } );

app.get('/todo', (req, res) => {
    res.send(list);
});

http.createServer(app).listen(7337, function () {
    console.log("접속 완료: http://localhost:7337");
});

