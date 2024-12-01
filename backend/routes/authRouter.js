const express = require("express");
const { register, login } = require("../controllers/userController");
const mapUser = require("../helpers/mapUser");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

router.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(req.body.login, req.body.password);

    res.cookie("token", token, { httpOnly: true });
    res.send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.login, req.body.password);

    res.cookie("token", token, { httpOnly: true });
    res.send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/logout", async (req, res) => {
  res.cookie("token", "");
  res.send({ error: null });
});

router.get("/me", authenticated, async (req, res) => {
  res.send({ error: null, user: mapUser(req.user) });
});

module.exports = router;
