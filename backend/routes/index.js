const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./authRouter"));
router.use("/users", require("./usersRouter"));
router.use("/accounts", require("./accountsRouter"));
router.use("/categories", require("./categoriesRouter"));
router.use("/operations", require("./operationsRouter"));

module.exports = router;
