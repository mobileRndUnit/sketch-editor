try {
  var shell = require('shelljs');

  // copy SketchViewContainer.xib
  shell.cp('-R', process.cwd() + '/node_modules/sketch-editor/ios/SketchView/SketchViewContainer.xib', process.cwd() + '/ios/SketchViewContainer.xib');
  return;

} catch(err) {
  console.log(
    '\033[95msketch-editor\033[97m link \033[91mFAILED \033[97m\nCould not automatically link package :'+
    err.stack)
}
