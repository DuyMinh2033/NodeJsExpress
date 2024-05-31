const newsRouter =  require('./news')
const siteRouter = require('./site')
const course = require('./course')
const meCoure =require('./me')
function routes (app) {

    app.use('/news',newsRouter)
    app.use('/me',meCoure)
    app.use('/courses', course)
    app.use('/', siteRouter)
    // app.get('/search', (req,res) =>{
    //     res.render('search')
    // })
}

module.exports = routes