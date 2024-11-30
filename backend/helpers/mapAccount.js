module.exports = (account) => {
  return {
    id: account.id,
    name: account.name,
    amount: account.amount,
    user: account.user.login,
    comment: account.comment,
    createdAt: account.createdAt,
  };
};
