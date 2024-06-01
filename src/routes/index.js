const newsRouter =  require('./news')
const siteRouter = require('./site')
const course = require('./course')
const meCourse=require('./me')
function routes (app) {

    app.use('/news',newsRouter)
    app.use('/me',meCourse)
    app.use('/courses', course)
    app.use('/', siteRouter)
    // app.get('/search', (req,res) =>{
    //     res.render('search')
    // })
}

module.exports = routes