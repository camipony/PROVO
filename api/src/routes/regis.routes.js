const {Router} = require('express');

const {
    createUser
    } = require('../controllers/regis.controller');


const router = Router();

    
router.post('/signUp', createUser)


    module.exports = router;