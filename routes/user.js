const express = require("express");

const router = express.Router();


const {getAppointmentForm, postAppointmentForm, getAllUsers, deleteUser} = require("../controllers/user");

router.route('/form').get(getAppointmentForm);


router.route('/post-form').post(postAppointmentForm);

router.route('/getAllusers').get(getAllUsers);

router.route('/deleteUser/:id').delete(deleteUser);



module.exports = router;