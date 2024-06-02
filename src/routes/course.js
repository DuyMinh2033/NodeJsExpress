
const express =require('express')
const router =express.Router()

const courseController = require('../app/controller/CourseController');
router.get('/create',courseController.create)
router.post('/store',courseController.store)

// submit action
router.post('/handle-submit-action',courseController.handleSubmitAction)
// edit
router.get('/:id/edit',courseController.edit)
router.put('/:id',courseController.update)
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/forever', courseController.forever )
router.delete('/:id',courseController.destroy)



router.get('/:slug',courseController.show)

module.exports = router