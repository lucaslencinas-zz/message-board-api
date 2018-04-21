module.exports = function errorMiddleware(err, req, res) {
  const responseError = {
    name: err.name,
    status: err.status,
    message: err.message
  };
  console.log(`${err.status} ${err.name} : ${err.message}`);
  console.log(err.stack);

  return res.status(err.status).json(responseError);
};
