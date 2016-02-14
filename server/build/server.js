/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = undefined;

	var _store = __webpack_require__(1);

	var _store2 = _interopRequireDefault(_store);

	var _express = __webpack_require__(5);

	var _express2 = _interopRequireDefault(_express);

	var _http = __webpack_require__(6);

	var _http2 = _interopRequireDefault(_http);

	var _socket = __webpack_require__(7);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	var server = _http2.default.createServer(app);
	var io = new _socket2.default().attach(server);
	server.listen(process.env.PORT || 8000);

	var store = exports.store = (0, _store2.default)();

	store.subscribe(function () {
	    return io.emit('state', store.getState());
	});

	io.on('connection', function (socket) {
	    console.log('user connection');
	    socket.emit('state', store.getState());
	    socket.on('action', store.dispatch.bind(store));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = makeStore;

	var _redux = __webpack_require__(2);

	var _reducer = __webpack_require__(3);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStore() {
	    return (0, _redux.createStore)(_reducer2.default);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;

	var _core = __webpack_require__(4);

	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _core.INITIAL_STATE : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case "ADD_TODO":
	            return (0, _core.addTodo)(state, action.text);
	        case "TOGGLE_TODO":
	            return (0, _core.toggleTodo)(state, action.id);
	        default:
	            return state;
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.addTodo = addTodo;
	exports.toggleTodo = toggleTodo;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var index = 0;

	var INITIAL_STATE = exports.INITIAL_STATE = {
	    todos: [{
	        id: 0,
	        description: 'Eat food',
	        completed: true
	    }, {
	        id: 1,
	        description: 'Learn react',
	        completed: false
	    }, {
	        id: 2,
	        description: 'Go home',
	        completed: false
	    }]
	};

	function addTodo(state, description) {
	    console.log("Adding todo: ", description);
	    var lastTodo = state.todos[state.todos.length - 1] || { id: 0 };
	    return _extends({}, state, { todos: [].concat(_toConsumableArray(state.todos), [{
	            id: lastTodo.id + 1,
	            description: description,
	            completed: false
	        }]) });
	}

	function toggleTodo(state, todoId) {
	    console.log('Toggling todo', todoId);
	    return _extends({}, state, {
	        todos: state.todos.map(function (todo) {
	            if (todo.id !== todoId) {
	                return todo;
	            }
	            return _extends({}, todo, {
	                completed: !todo.completed
	            });
	        }) });
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);