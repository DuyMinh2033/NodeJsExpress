const Course = require('../models/Course.js');
const { mongooseToObject } = require('../../util/mongose.js')
class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(courses => {
                res.render('courses/show', { courses: mongooseToObject(courses) })
            })
            .catch(next)
    }
    //get create
    create(req, res, next) {
        res.render('courses/create')
    }
    //post du lieu store
    store(req, res, next) {
        const formdata = req.body;
        const course = new Course(formdata);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                console.error(error); // Ghi log lỗi nếu có
                next(error);
            })
    }
    edit(req, res, next) {
        console.log(req.params.id)
        Course.findById(req.params.id)
            .then(coure => res.render('courses/edit', {
                courses: mongooseToObject(coure)
            }))
            .catch(next)
    }
    update(req, res, next) {
        console.log('update' + req.params.id)
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //patch retore /courses/:id/retore
    restore = (req, res, next) => {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };
    forever(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    handleSubmitAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)

                break;
            default:
                res.json({ message: 'error' })
        };
    };
    handleRestoreAll(req, res, next) {
        switch (req.body.action) {
            case 'restoreAll':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
        }
    }
}

module.exports = new CourseController