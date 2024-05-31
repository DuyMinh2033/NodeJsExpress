const Course = require('../models/Course.js');
const {mongooseToObject} = require('../../util/mongose.js')
class CourseController{
    show( req,res , next){
        Course.findOne({slug: req.params.slug})
        .then(courses => {
            res.render('courses/show',{courses : mongooseToObject(courses)})
        })
        .catch(next)
    }
    //get create
    create (req ,res ,next){
        res.render('courses/create')
    }
    //post du lieu store
    store(req, res, next) {
        const formdata = req.body;
        console.log("Received form data:", formdata); // Ghi log dữ liệu gửi từ form
        
        const course = new Course(formdata);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                console.error(error); // Ghi log lỗi nếu có
                next(error);
            })    
    }
    edit (req, res, next) {
        console.log(req.params.id)
        Course.findById(req.params.id)
        .then(coure => res.render('courses/edit',{
            courses: mongooseToObject(coure)
        }))
        .catch(next)       
    }
    update(req, res, next){
        console.log('update'+ req.params.id)
       Course.updateOne({_id: req.params.id},req.body)
       .then(() => res.redirect('/me/store/courses'))
       .catch(next)
    }
}

module.exports = new CourseController