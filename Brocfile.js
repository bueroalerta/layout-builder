var babel = require('broccoli-babel-transpiler');
var react = require('broccoli-react');
var merge = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');

var tree = babel('src', {
  stage: 0,
  moduleIds: true,
  modules: 'amd'
});

tree = concat(tree, {
  inputFiles: ['**/*.js'],
  outputFile: '/layout-builder.js'
});

tree = react(tree, {extensions: ['js']});

var demo = funnel('src', {files: ['demo.html']});

module.exports = merge([demo, tree]);
