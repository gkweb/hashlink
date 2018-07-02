const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'example/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'example'),
        filename: 'example.bundle.js'
    }
};