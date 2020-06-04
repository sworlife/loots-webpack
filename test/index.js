const merge = require('webpack-merge');
const _ = require('lodash');
const { parseES6, parseReact } = require('../lib/webpack.base');
console.log(merge({
  customizeArray(a, b, key) {
    if (key === 'module.rules') {
      return _.uniq();
    }
    // Fall back to default merging
    return undefined;
  },
  customizeObject(a, b, key) {
    // Fall back to default merging
    return undefined;
  }
})(parseES6, parseReact).module.rules)