module.exports = (user) => {
  return {
    id: user.id,
    login: user.login,
    firstname: user.firstname,
    lastname: user.lastname,
    registeredAt: user.createdAt,
  };
};
