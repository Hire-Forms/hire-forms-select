(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsSelect = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (f) {
	if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g = g.node_modules || (g.node_modules = {});g = g.binderequirebuildindex || (g.binderequirebuildindex = {});g.js = f();
	}
})(function () {
	var define, module, exports;return function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
			s(r[o]);
		}return s;
	}({ 1: [function (_dereq_, module, exports) {
			(function (f) {
				if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
					module.exports = f();
				} else if (typeof define === "function" && define.amd) {
					define([], f);
				} else {
					var g;if (typeof window !== "undefined") {
						g = window;
					} else if (typeof global !== "undefined") {
						g = global;
					} else if (typeof self !== "undefined") {
						g = self;
					} else {
						g = this;
					}g.HireFormsOptions = f();
				}
			})(function () {
				var define, module, exports;return function e(t, n, r) {
					function s(o, u) {
						if (!n[o]) {
							if (!t[o]) {
								var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
							}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
								var n = t[o][1][e];return s(n ? n : e);
							}, l, l.exports, e, t, n, r);
						}return n[o].exports;
					}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
						s(r[o]);
					}return s;
				}({ 1: [function (_dereq_, module, exports) {
						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { "default": obj };
						}

						var _react = _dereq_("react");

						var _react2 = _interopRequireDefault(_react);

						var keyValueMap = _react2["default"].PropTypes.shape({
							key: _react2["default"].PropTypes.string.isRequired,
							value: _react2["default"].PropTypes.string.isRequired
						});

						exports.keyValueMap = keyValueMap;
						// ARRAY OF

						var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

						exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
						var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

						exports.arrayOfStrings = arrayOfStrings;
						var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

						exports.arrayOfElements = arrayOfElements;
						// OR

						var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

						exports.stringOrArray = stringOrArray;
						var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

						exports.stringOrKeyValueMap = stringOrKeyValueMap;
						var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

						exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
						var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

						exports.elementOrArrayOfElement = elementOrArrayOfElement;
						var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

						exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
						var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
						exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
					}, { "react": "react" }] }, {}, [1])(1);
			});
		}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValue = castKeyValue;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return a key/value map.
    *
    * @param {Number|String|Boolean|Object} item
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValue(item) {
				return isKeyValueMap(item) ? item : {
					key: item,
					value: item
				};
			}

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array|Object} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(castKeyValue);
			}
		}, {}], 3: [function (_dereq_, module, exports) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _react = _dereq_('react');

			var _react2 = _interopRequireDefault(_react);

			var _classnames = _dereq_('classnames');

			var _classnames2 = _interopRequireDefault(_classnames);

			var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

			var _hireFormsUtils = _dereq_('hire-forms-utils');

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /*
     TODO move listitem to seperate component (so we don't have to store data-key
     and data-value as attributes)
     TODO Move util functions to seperate module
     */

			var hasKeyValue = function hasKeyValue(list, item) {
				return list.filter(function (li) {
					return li.key === item.key;
				}).length > 0;
			};

			/**
    * Options are rendered beneath the autocomplete and select components.
    *
    * @class
    * @extends React.Component
    */

			var Options = function (_React$Component) {
				_inherits(Options, _React$Component);

				function Options() {
					var _Object$getPrototypeO;

					var _temp, _this, _ret;

					_classCallCheck(this, Options);

					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Options)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (ev) {
						_this.props.onChange(_this.getOptionData(ev.currentTarget));
					}, _temp), _possibleConstructorReturn(_this, _ret);
				}

				_createClass(Options, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						var node = this.refs.options;

						if (node) {
							node.style.zIndex = 1000;
						}
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						var node = this.refs.options;
						if (node) {
							node.style.zIndex = 0;
						}
					}

					/**
      * Get the key (id) and value (display name) of an option DOM element.
      *
      * @param {Object} el - Option DOM element
      * @returns {Object}
      */

				}, {
					key: 'getOptionData',
					value: function getOptionData(el) {
						return {
							key: el.getAttribute('data-key'),
							value: el.getAttribute('data-value')
						};
					}
				}, {
					key: 'highlight',

					/*
      * highlight the currently highlighted option.
      *
      * @param {Object} target An HTMLElement or event object
      * @param {String} className Name of the highlight class
      */
					value: function highlight(target, className) {
						// Check if target is an event object.
						if (target.hasOwnProperty('currentTarget')) {
							target = target.currentTarget;
						}

						target.classList.add(className);
					}

					/**
      * Unhighlight the currently highlighted option.
      *
      * @param {String} className Name of the highlight class
      * @return {Object} The unhighlighted HTMLElement
      */

				}, {
					key: 'unhighlight',
					value: function unhighlight(className) {
						var el = void 0;
						var node = this.refs.options;

						if (node) {
							el = node.querySelector('li.' + className);

							if (el) {
								el.classList.remove(className);
							}
						}

						return el;
					}
				}, {
					key: 'highlightPrev',
					value: function highlightPrev() {
						var prev = void 0;
						var current = this.unhighlight(this.props.highlightClass);

						if (current) {
							prev = current.previousElementSibling;
						}

						// If current and prev aren't found, start at the top.
						// Current is not found if there is no list item highlighted.
						// Prev is not found if the first list item is highlighted.
						if (!prev) {
							prev = this.refs.options.lastChild;
						}

						this.highlight(prev, this.props.highlightClass);
					}
				}, {
					key: 'highlightNext',
					value: function highlightNext() {
						var next = void 0;
						var current = this.unhighlight(this.props.highlightClass);

						if (current) {
							next = current.nextElementSibling;
						}

						// If current and next aren't found, start at the top.
						// Current is not found if there is no list item highlighted.
						// Next is not found if the last list item is highlighted.
						if (!next) {
							next = this.refs.options.firstChild;
						}

						this.highlight(next, this.props.highlightClass);
					}
				}, {
					key: 'select',
					value: function select() {
						var current = this.unhighlight(this.props.highlightClass);

						if (current) {
							this.props.onChange(this.getOptionData(current));
						}
					}

					/**
      * Sort values on relevance. A result is more relevant when the search
      * query is more at the beginning of the string. In other words:
      * String.indexOf(props.query): lower is better.
      * @param {Array<Object>} value An array of key/value maps
      * @param {String} query A search query
      * @returns {Array<Object>} Sorted values on relevance
      */

				}, {
					key: 'sortRelevance',
					value: function sortRelevance(values, query) {
						return values.sort(function (a, b) {
							a = a.value.toLowerCase();
							b = b.value.toLowerCase();

							var indexA = a.indexOf(query);
							var indexB = b.indexOf(query);

							if (indexA > indexB) {
								return 1;
							}

							if (indexA < indexB) {
								return -1;
							}

							if (indexA === indexB) {
								if (a > b) {
									return 1;
								}

								if (a < b) {
									return -1;
								}
							}

							return 0;
						});
					}
				}, {
					key: 'render',
					value: function render() {
						var _this2 = this;

						if (this.props.values.length === 0 && this.props.children == null) {
							return null;
						}

						var values = this.props.sort || this.props.sortRelevance && this.props.query !== '' ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

						var listitems = values.map(function (data, index) {
							var displayValue = data.value;

							if (_this2.props.query.length) {
								var re = new RegExp(_this2.props.query, 'ig');
								displayValue = data.value.replace(re, '<span class="highlight">$&</span>');
							}

							return _react2.default.createElement('li', {
								className: (0, _classnames2.default)({
									'hire-forms-option': true,
									selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this2.props.value), data)
								}),
								dangerouslySetInnerHTML: { __html: displayValue },
								'data-key': data.key,
								'data-value': data.value,
								key: index,
								onClick: _this2.handleClick
							});
						});

						var children = this.props.children != null ? _react2.default.createElement('li', null, this.props.children) : null;

						return _react2.default.createElement('ul', {
							className: 'hire-options',
							ref: 'options'
						}, children, listitems);
					}
				}]);

				return Options;
			}(_react2.default.Component);

			Options.defaultProps = {
				highlightClass: 'highlight',
				query: '',
				sort: false,
				sortRelevance: true,
				value: { key: '', value: '' },
				values: []
			};

			Options.propTypes = {
				children: _react2.default.PropTypes.node,
				highlightClass: _react2.default.PropTypes.string,
				onChange: _react2.default.PropTypes.func.isRequired,
				query: _react2.default.PropTypes.string,
				querySelector: _react2.default.PropTypes.string,
				sort: _react2.default.PropTypes.bool,
				sortRelevance: _react2.default.PropTypes.bool,
				value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
				values: _hireFormsPropTypes.arrayOfKeyValueMaps
			};

			exports.default = Options;
		}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react" }] }, {}, [3])(3);
});

},{"classnames":"classnames","hire-forms-prop-types":2,"hire-forms-utils":3,"react":"react"}],2:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}]},{},[1])(1)
});
},{"react":"react"}],3:[function(_dereq_,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}],4:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}],5:[function(_dereq_,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = _dereq_('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsOptions = _dereq_('hire-forms-options');

var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

var _hireFormsUtils = _dereq_('hire-forms-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Select);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Select)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
			options: _this.props.options,
			visible: false
		}, _this.handleDocumentClick = function (ev) {
			if (_this.state.visible && !_this.refs.select.contains(ev.target)) {
				_this.setState({
					visible: false
				});
			}
		}, _this.handleInputClick = function () /* ev */{
			_this.setState({ visible: !_this.state.visible });
		}, _this.handleOptionsChange = function (value) {
			_this.setState({ visible: false });

			// If the options prop is an array of strings, return a string.
			if ((0, _hireFormsUtils.isListOfStrings)(_this.state.options)) {
				value = value.value;
			}

			_this.props.onChange(value);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Select, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			document.addEventListener('click', this.handleDocumentClick, false);

			if (this.props.async != null) {
				this.props.async(function (response) {
					_this2.setState({
						options: response
					});
				});
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var options = _ref.options;

			if (this.props.options !== options) {
				this.setState({ options: options });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('click', this.handleDocumentClick, false);
		}

		/**
   * @method
   * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
   */

	}, {
		key: 'hideOptions',
		value: function hideOptions() {
			this.setState({ visible: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var options = this.state.visible ? _react2.default.createElement(
				_hireFormsOptions2.default,
				{
					onChange: this.handleOptionsChange,
					sort: this.props.sort,
					sortRelevance: this.props.sortRelevance,
					value: (0, _hireFormsUtils.castKeyValue)(this.props.value),
					values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options)
				},
				this.props.children
			) : null;

			// If value prop is a key/value map, extract the value.
			var value = (0, _hireFormsUtils.isKeyValueMap)(this.props.value) ? this.props.value.value : this.props.value;

			// Create new var so we can check value in cx()
			var inputValue = value === '' ? this.props.placeholder : value;

			return _react2.default.createElement(
				'div',
				{ className: 'hire-select', ref: 'select' },
				_react2.default.createElement(
					'div',
					{
						className: 'input-container',
						onClick: this.handleInputClick
					},
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)({
								input: true,
								placeholder: value === ''
							})
						},
						inputValue
					),
					_react2.default.createElement(
						'button',
						null,
						'▾'
					)
				),
				options
			);
		}
	}]);

	return Select;
}(_react2.default.Component);

Select.defaultProps = {
	options: [],
	value: ''
};

Select.propTypes = {
	async: _react2.default.PropTypes.func,
	children: _react2.default.PropTypes.node,
	onChange: _react2.default.PropTypes.func.isRequired,
	options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
	placeholder: _react2.default.PropTypes.string,
	sort: _react2.default.PropTypes.bool,
	sortRelevance: _react2.default.PropTypes.bool,
	value: _hireFormsPropTypes.stringOrKeyValueMap
};

exports.default = Select;

},{"classnames":"classnames","hire-forms-options":1,"hire-forms-prop-types":4,"hire-forms-utils":5,"react":"react"}]},{},[6])(6)
});