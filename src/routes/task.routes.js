/**
 * Rutas del proyecto
 */

 const { Router } = require('express');
 const {getAllTask, getUser, register} = require('../controllers/task.controller');
 const pool = require("../db");
 const router = Router();

router.get('/login', getAllTask)

router.post('/login', getUser);
 

router.post('/register', register);

 module.exports = router;
 