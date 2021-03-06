const platform = require('./platform');
const project = require('./project');
const npm = require('./npm');
const browser = require('./browser');
const git = require('./git');
const webpackUtils = require('./webpackUtils');
const webpackPlugins = require('./webpackPlugins');

module.exports = {
  ...platform,
  ...project,
  ...npm,
  ...browser,
  ...git,
  ...webpackUtils,
  ...webpackPlugins,
};
