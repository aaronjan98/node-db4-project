const server = require('./routes/server.js');

const PORT = process.env.PORT || 5004;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});