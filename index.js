const { createServer } = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;
const http = createServer(app);

http.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

