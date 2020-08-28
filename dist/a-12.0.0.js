'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var a = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "a", { enumerable: true, get: function () { return 1; } });
});
var a_1 = a.a;

exports.a = a_1;
exports.default = a;
