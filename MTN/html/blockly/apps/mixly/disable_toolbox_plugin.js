Blockly.DisableToolboxPlugin = function(workspace) {
  this.workspace_ = workspace;
};

Blockly.DisableToolboxPlugin.prototype.preBlockSpaceDispose = function() {
  this.disableToolbox_();
};

Blockly.DisableToolboxPlugin.prototype.disableToolbox_ = function() {
  const toolbox = this.workspace_.getToolbox();
  if (toolbox) {
    toolbox.HtmlDiv.style.display = 'none';  // 隐藏工具箱HTML元素
    // 如有需要，添加额外步骤以禁用工具箱功能
  }
};

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_PLUGIN,
  'disableToolbox',
  Blockly.DisableToolboxPlugin
);