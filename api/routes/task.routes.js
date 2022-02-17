/**
 * Rutas del proyecto
 */
const { Router } = require('express');

const { getAllTask,
      getUser,
      register, getHome }
      = require('../controllers/task.controller');


const router = Router();

router.get('/login/:id', getAllTask)
router.get('/login/:email/:pass', getAllTask)

router.get('/login/:id', getHome)
router.get('/login/:email/:pass', getHome)


// router.get('/login', getAllTask)

router.post('/register', register);

module.exports = router;
