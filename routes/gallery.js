const express = require('express')
const router = express.Router()
const fs = require('fs');

let pictures = {}

/*
const dir = fs.opendirSync('./public/gallery', (err, dir) => {
    if (err){
        console.log("Error:", err); 
    }
    else { 
        console.log("Path of the directory:", dir.path); 

        const img = dir.read()
        
        console.log("Closing the directory"); 
        dir.closeSync();
    }
    })

console.log("dir.read.name")
*/


router.get('/', (req, res) => {
    filenames = fs.readdirSync("./public/gallery"); 
    filenames.forEach(element => {
    console.log(element)
    });
    res.render("pages/gallery", {filenames})
})

module.exports = router