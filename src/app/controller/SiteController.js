const Course = require('../models/Course.js');

const {mutipleMongooseToObject} = require('../../util/mongose.js')
class SiteController{
    
   index(req, res, next) {
    Course.find({})
    .then(courses => {
      
      res.render('home',{
        courses: mutipleMongooseToObject(courses)

      })
    })
    .catch(next)
  }
    search( req,res){
        res.render('search')
    }
}

module.exports = new SiteController