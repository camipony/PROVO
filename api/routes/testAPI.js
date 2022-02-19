var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

const {
  getUser}
= require('../controllers/TaskControllers');


/* app.listen(9000, () => {
    console.log("server has started on port 9000");
  }); */

module.exports = router;    