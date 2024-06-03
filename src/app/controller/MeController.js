const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongose')
const { json } = require('body-parser')
class meController{
    
    stored (req , res , next ){
      let courseQuery = Course.find({})
    
      if(req.query.hasOwnProperty('_sort')){
        courseQuery = courseQuery.sort({
          [req.query.column]: req.query.type
        })
      }


      Promise.all([ courseQuery, Course.countDocumentsDeleted({})])
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