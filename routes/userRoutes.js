// router.js
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
} = require('../controllers/userController');

const router = (req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    getUser(req, res);
  } else if (req.url === '/api/users' && req.method === 'POST') {
    createUser(req, res);
  } else if (req.url === '/api/users' && req.method === 'PUT') {
    updateUser(req, res);
  } else if (req.url === '/api/users' && req.method === 'DELETE') {
    deleteUser(req, res);
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
