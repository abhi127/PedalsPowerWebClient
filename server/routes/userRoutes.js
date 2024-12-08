const express = require("express");
const { getAllUsers, createUser,getAddress,saveAddress } = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/", createUser);
router.get("/userAddress",verifyToken, getAddress);
router.put("/saveUserAddress",verifyToken,saveAddress);

module.exports = router;
