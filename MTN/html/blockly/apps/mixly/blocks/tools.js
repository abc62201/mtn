'use strict';

goog.provide('Blockly.Blocks.tools');
goog.require('Blockly.Blocks');
Blockly.Blocks.tools.HUE = "225";
Blockly.Blocks.factory_notes = {
  init: function() {
    this.setColour(Blockly.Blocks.tools.HUE);
    this.appendDummyInput("")
    .appendField('自定义内容')
    .appendField(new Blockly.FieldTextArea(''), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


