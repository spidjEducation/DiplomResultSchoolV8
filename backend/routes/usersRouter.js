const express = require("express");
const {
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/userController");
const authenticated = require("../middlewares/authenticated");
const userMap = require("../helpers/mapUser");

const router = express.Router({ mergeParams: true });

router.get("/", async (_, res) => {
  try {
    const users = await getUsers();

    res.send({ error: null, users: users.map(userMap) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.patch("/:id", authenticated, async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);

    res.send({ error: null, user: userMap(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.delete("/:id", authenticated, async (req, res) => {
  try {
    await deleteUser(req.params.id);

    res.send({ error: null });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
