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

/* eslint-disable no-console */

app.listen(PORT, function(err) {
  if (err) console.error(err);
  else open('http://localhost:' + PORT);
});
