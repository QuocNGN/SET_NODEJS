const getUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Get user');
};
const createUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Create user');
};

const updateUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Update user');
};

const deleteUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Delete user');
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
