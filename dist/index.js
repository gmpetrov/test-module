'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = printModuleName;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pjsonPath = _path2.default.resolve('./package.json');
var pjson = require(pjsonPath);

function printModuleName() {
    console.log("this is test-module v42");
    console.log('package.json version = ' + pjson.version);
}

printModuleName();