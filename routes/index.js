const express = require('express');
const router = express.Router();
const userController = require('../controller');


router.get('/userlist', userController.getAllUserData)
router.post('/createuser',userController.createUserData)
router.put('/updateuser/:_id',userController.userUpdate)
router.delete('/deleteuser/:_id',userController.deleteUser)
router.get('/userlistbyid/:_id',userController.getUseryId)
module.exports=router