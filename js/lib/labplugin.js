var index_module = require('./index.js');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: '@robostack/jupyter-amphion',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: '@robostack/jupyter-amphion',
          version: index_module.version,
          exports: index_module
      });
  },
  autoStart: true
};

