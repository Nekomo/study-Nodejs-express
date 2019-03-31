/**
 * モジュール・ロード
 */
let express = require('express');
let ejs = require('ejs');

let app = express();

//レンダリングエンジンの設定。今回はejsを用いる
app.engine('ejs', ejs.renderFile);

app.get("/", (req, res) => {
        //index.ejsのレンダリング
        res.render('index.ejs', {
                title: 'Index',
                content: 'This is Express app Top page!'
        });
});
let server = app.listen(3000, () => {
        console.log('Start server port:3000')
})