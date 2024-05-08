const express = require("express");
const userRouter = require("../routes/user");
const accountRouter = require("../routes/accounts");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;