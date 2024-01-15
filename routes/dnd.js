const express = require('express')
const fs = require('fs');
let jsonData = fs.readFileSync('./public/posts.json');
let posts = JSON.parse(jsonData);
const router = express.Router()

router.get('/', (req, res) => {
    res.send("DND page")
})

router
    .route('/board/new')
    .get((req, res) =>{
        res.render('pages/create')
    })
    .post((req, res) =>{
        const postData = req.body;
        console.log(postData)
    })

router.get('/board', (req, res) => {
    res.render("pages/board", {posts})
})

router.get('/board/:boardID', (req, res) => {
    if(!isNaN(req.params.boardID)){
        res.render("pages/post", {post: posts[req.params.boardID], id: req.params.boardID})
    }
    else{
        res.send('Board not found ' + req.params.boardID)
    }
})

module.exports = router