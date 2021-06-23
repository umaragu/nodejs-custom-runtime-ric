const path = require("path");

const SRC_DIR = path.resolve(__dirname, './')
const OUT_DIR = path.resolve(__dirname, 'build')

const config = {
    entry: {
        app: path.resolve(SRC_DIR, 'app.js'),
    },
    output: {
        path: OUT_DIR,
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'

    },
    target: 'node'
}

module.exports = config;