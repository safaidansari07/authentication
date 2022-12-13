const express = require('express');
const router = express.Router();
const passport = require('passport');
const { route } = require('..');
const userController = require('../controllers/userController');

router.post('/signup',userController.signUp);
router.post('/login',userController.login); 
router.get('/AllUserWithoutToken',userController.getAllUser)
router.get(
    "/welcome",
    passport.authenticate("jwt", { session: false }),
    userController.welcomeUser
  );
router.get('/AllUser',passport.authenticate("jwt",{session:false}),userController.getAllUser); 


module.exports  = router;
