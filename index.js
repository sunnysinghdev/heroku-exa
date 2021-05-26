const http = require('http');
const dbModule = require('./db');
let DbContext = dbModule.DbContext;
//import { DbContext } from 'db';

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World' + process.env.DATABASE_URL);

});

const db = new DbContext(process.env.DATABASE_URL);
db.execute();
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
