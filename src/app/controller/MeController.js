const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongose')
class meController{
    stored (req , res , next ){
      Course.find({})
      .then( course => res.render('me/storedCourse',{
        courses: mutipleMongooseToObject(course)
      }))
    }
    trash(req , res , next){
      Course.findWithDeleted({deleted:true})
      .then( course => res.render('me/trashCourse',{
        courses: mutipleMongooseToObject(course)
      }))
      .catch(next)
    }
}

module.exports = new meController