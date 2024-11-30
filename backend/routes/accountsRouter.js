const express = require("express");
const authenticated = require("../middlewares/authenticated");
const {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
} = require("../controllers/accountController");
const accountMap = require("../helpers/mapAccount");

const router = express.Router({ mergeParams: true });

router.post("/", authenticated, async (req, res) => {
  try {
    const account = await createAccount({ ...req.body, user: req.user.id });

    res.send({ error: null, account: accountMap(account) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/", authenticated, async (req, res) => {
  try {
    const accounts = await getAccounts(req.user.id);

    res.send({ error: null, accounts: accounts.map(accountMap) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/:id", authenticated, async (req, res) => {
  try {
    const account = await getAccount(req.params.id);

    res.send({ error: null, account: accountMap(account) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.patch("/:id", authenticated, async (req, res) => {
  try {
    const account = await updateAccount(req.params.id, req.body);

    res.send({ error: null, account: accountMap(account) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.delete("/:id", authenticated, async (req, res) => {
  try {
    await deleteAccount(req.params.id);

    res.send({ error: null });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
