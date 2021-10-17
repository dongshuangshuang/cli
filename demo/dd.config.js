
const clean = require('./plugins/clean');
module.exports = {
  plugins: {
    commands: [clean('hello world')]
  }
}