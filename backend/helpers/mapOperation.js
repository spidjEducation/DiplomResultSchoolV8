module.exports = (operation) => {
  return {
    id: operation.id,
    amount: operation.amount,
    account: operation.account,
    category: operation.category,
    user: operation.user.login,
    comment: operation.comment,
    createdAt: operation.createdAt,
  };
};
