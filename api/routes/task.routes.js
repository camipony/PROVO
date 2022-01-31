/**
 * Rutas del proyecto
 */
 const { Router } = require('express');

 const {getAllTask,
        getUser, 
        register}
  = require('../controllers/task.controller');

  
 const router = Router();

router.get('/login/:id', getAllTask)
router.get('/login/:email/:pass', getAllTask)
// router.get('/login', getAllTask)

router.post('/register', register);

 module.exports = router;
 