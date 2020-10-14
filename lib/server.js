import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';

const compiler = webpack(config);
const PORT = 3000;
const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.send([
    {"id": 1, "firstName": "Bobby", "lastName":"Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName":"Northon", "email": "tammy@gmail.com"},
    {"id": 3, "firstName": "Tina", "lastName":"Lee", "email": "lee@gmail.com"},
  ])
})

/* eslint-disable no-console */

app.listen(PORT, function(err) {
  if (err) console.error(err);
  else open('http://localhost:' + PORT);
});
