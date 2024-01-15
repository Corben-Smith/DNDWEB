const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})


//routes area
const smashRouter = require('./routes/smash')
const dndRouter = require('./routes/dnd')
const galleryRouter = require('./routes/gallery.js')

app.use('/smash', smashRouter)
app.use('/dnd', dndRouter)
app.use('/gallery', galleryRouter)


app.listen(3000)