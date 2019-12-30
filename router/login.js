var router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {dataId:"", dataPw:""});
});



router.route('/process/login').post((req, res) => {
    console.log("/process/login 으로 처리함");
    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.pw || req.query.pw;

    res.render('login', {dataId:paramId, dataPw:paramPw});


    // res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
    // res.write(`<h1>서버가 응답한 결과입니다.</h1>
    //             <div><p> ParamId : ${paramId}</p></div>
    //             <div><p> ParamPw : ${paramPw}</p></div>`);
    // res.end();  //app use 그만
});

module.exports = router;