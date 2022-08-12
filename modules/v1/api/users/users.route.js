const express = require("express");
const router = express.Router();
const userController = require("./users.controller");

router.post("/add", userController.add);
router.get("/get", userController.get);
router.put("/update", userController.update);
router.get("/remove/:id", userController.remove);
router.get("/find/:id", userController.findById);
router.get("/paginate", userController.paginate);

module.exports = router;
