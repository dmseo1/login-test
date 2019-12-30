var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('html', require('ejs').renderFile);


var static = require('serve-static');

app.use(static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extends: false}));
app.use('/', require('./router/login'));

//body-parser를 이용해 application/x-www-form-urlencoded 파싱

// app.use((req, res) => {
//     var paramId = req.body.id || req.query.id;
//     var paramPw = req.body.pw || req.query.pw;
//     res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
//     res.write(`<h1>서버가 응답한 결과입니다.</h1>
//                 <div><p> ParamId : ${paramId}</p></div>
//                 <div><p> ParamPw : ${paramPw}</p></div>`);
//     res.end();  //app use 그만
// });
// //app.use(express.static(path.join(__dirname, 'public'))); 와 같은 역할을 하는 구문



var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});