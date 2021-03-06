'use strict';

const BaseNode = require('../../../lib/base.node');

module.exports = (RED) => {
  class LanBrowserNode extends BaseNode {
    constructor(config) {
      super(config, RED, { url: '/lan/browser/pub', withPayload: false });
    }
  }

  RED.nodes.registerType('lan-browser', LanBrowserNode);
};
