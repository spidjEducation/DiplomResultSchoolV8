const express = require("express");
const authenticated = require("../middlewares/authenticated");
const operationMap = require("../helpers/mapOperation");
const {
  createOperation,
  getOperations,
  getOperation,
  deleteOperation,
} = require("../controllers/operationController");

const createPagination = ({ query }) => {
  return {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || null,
  };
};

const createSearchOperations = ({ user, query }) => {
  const search = {};

  search.user = user.id;

  if (query.account) search.account = query.account;

  if (query.category) search.category = query.category;

  if (query.daterange) {
    const [startDate, endDate] = query.daterange.split(",");

    search.createdAt = {};

    if (startDate) search.createdAt.$gte = startDate;
    if (endDate) search.createdAt.$lte = endDate;
  }

  if (query.amountrange) {
    const [minAmount, maxAmount] = query.amountrange.split(",");

    search.amount = {};

    if (minAmount) search.amount.$gte = +minAmount;
    if (maxAmount) search.amount.$lte = +maxAmount;
  }

  return search;
};

const router = express.Router({ mergeParams: true });

router.post("/", authenticated, async (req, res) => {
  try {
    const operation = await createOperation(req.user.id, req.body);

    res.send({ error: null, operation: operationMap(operation) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/", authenticated, async (req, res) => {
  try {
    const pagination = createPagination(req);
    const search = createSearchOperations(req);

    const operationsPagination = await getOperations(search, pagination);

    res.send({
      error: null,
      pagingData: {
        ...operationsPagination,
        items: operationsPagination.items.map(operationMap),
      },
    });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/account/:accountId", authenticated, async (req, res) => {
  try {
    const pagination = createPagination(req);

    const search = {
      user: req.user.id,
      account: req.params.accountId,
    };

    const operationsPagination = await getOperations(search, pagination);

    res.send({
      error: null,
      pagingData: {
        ...operationsPagination,
        items: operationsPagination.items.map(operationMap),
      },
    });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/:id", authenticated, async (req, res) => {
  try {
    const operation = await getOperation(req.params.id);

    res.send({ error: null, operation: operationMap(operation) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.delete("/:id", authenticated, async (req, res) => {
  try {
    await deleteOperation(req.params.id);

    res.send({ error: null });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
