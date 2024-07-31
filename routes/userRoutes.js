// router.js
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = (req, res) => {
  const { url, method } = req;
  if (url === '/api/users') {
    switch (method) {
      case 'GET':
        getUser(req, res);
        break;
      case 'POST':
        createUser(req, res);
        break;
      case 'PUT':
        updateUser(req, res);
        break;
      case 'DELETE':
        deleteUser(req, res);
        break;
      default:
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            message: `Method ${method} not allowed on /api/users endpoint`,
          })
        );
        break;
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the api/users endpoint',
      })
    );
  }
};

module.exports = router;
