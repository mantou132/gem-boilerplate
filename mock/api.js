const path = require('path');
const fs = require('fs');

const { mock } = require('intermock');
const { delay } = require('roadhog-api-doc');

const readFiles = (files) => {
  return files.map((file) => {
    return [file, fs.readFileSync(path.resolve(__dirname, file), { encoding: 'utf8' })];
  });
};

const proxy = {
  '/api/posts': Array(100)
    .fill(null)
    .map(
      () =>
        mock({
          files: readFiles(['../src/service/api.ts']),
        })['Post'],
    ),
};

module.exports = delay(proxy, 1000);
