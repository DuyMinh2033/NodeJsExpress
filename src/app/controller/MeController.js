const { mutipleMongooseToObject } = require('../../util/mongose')
const Course = require('../models/Course')
class meController{
    store(req ,res , next ){
        Course.find({})
        .then(course => res.render('me/storedCourse',{
            courses: mutipleMongooseToObject(course)
        }))
        .catch(next)
    }
}

module.exports = new meController