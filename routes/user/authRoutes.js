const express = require("express");
const { userLogin, loadUser, forgotPassword, updateUserPassword, logout, registerUser } = require("../../controller/user/userController");
const { isAuthenticatedUser } = require("../../middleware/auth");
const router = express.Router();


router.post("/login", userLogin);
router.post("/register", registerUser);
router.get("/logout", logout);
router.post("/password-reset", forgotPassword);
router.post("/password-update", updateUserPassword);
router.get("/loaduser",isAuthenticatedUser, loadUser);
module.exports = router;