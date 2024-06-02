const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongose')
class meController{
    stored (req , res , next ){
      Promise.all([ Course.find({}), Course.countDocumentsDeleted({})])
      .then( ([course, coutDelete]) => res.render('me/storedCourse',{
        coutDelete,
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