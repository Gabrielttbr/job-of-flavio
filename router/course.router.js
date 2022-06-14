const express = require('express');
const router = express.Router();
const controllerCourse = require('../controller/course.controller');

router.get('/', controllerCourse.getCourse);
router.post('/', controllerCourse.postCourse);
router.patch('/:id', controllerCourse.patchCourse);
router.delete('/', controllerCourse.deleteCourse);

module.exports = router;