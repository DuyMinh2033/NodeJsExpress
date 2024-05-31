class NewsController{
    index(req ,res ){
        res.render('news')
    }
    show( req,res){
        res.send('new data')
    }
}

module.exports = new NewsController