webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(134);
	
	var _reactRedux = __webpack_require__(18);
	
	var _redux = __webpack_require__(61);
	
	var _reducers = __webpack_require__(114);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _componentsApp = __webpack_require__(99);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var store = (0, _redux.createStore)(_reducers2['default']);
	
	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_componentsApp2['default'], null)
	), document.getElementById('app'));

/***/ },

/***/ 22:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var nextTodoId = 0;
	var addTodo = function addTodo(text) {
	  return {
	    type: 'ADD_TODO',
	    id: nextTodoId++,
	    text: text
	  };
	};
	
	exports.addTodo = addTodo;
	var setVisibilityFilter = function setVisibilityFilter(filter) {
	  return {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	};
	exports.setVisibilityFilter = setVisibilityFilter;
	var clearCompleted = function clearCompleted() {
	  return {
	    type: 'REMOVE_COMPLETED_TODOS'
	  };
	};
	exports.clearCompleted = clearCompleted;
	var toggleAllTodos = function toggleAllTodos() {
	  return {
	    type: 'TOGGLE_ALL_TODOS'
	  };
	};
	
	exports.toggleAllTodos = toggleAllTodos;
	var toggleTodo = function toggleTodo(id) {
	  return {
	    type: 'TOGGLE_TODO',
	    id: id
	  };
	};
	exports.toggleTodo = toggleTodo;
	var toggleAllCompleted = function toggleAllCompleted() {
	  return {
	    type: 'TOGGLE_ALL_TODOS_COMPLETED'
	  };
	};
	exports.toggleAllCompleted = toggleAllCompleted;
	var toggleAllInProgress = function toggleAllInProgress() {
	  return {
	    type: 'TOGGLE_ALL_TODOS_IN_PROGRESS'
	  };
	};
	
	exports.toggleAllInProgress = toggleAllInProgress;
	var removeTodo = function removeTodo(id) {
	  return {
	    type: 'REMOVE_TODO',
	    id: id
	  };
	};
	exports.removeTodo = removeTodo;

/***/ },

/***/ 37:
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _containersFooter = __webpack_require__(111);
	
	var _containersFooter2 = _interopRequireDefault(_containersFooter);
	
	var _Header = __webpack_require__(102);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Info = __webpack_require__(103);
	
	var _Info2 = _interopRequireDefault(_Info);
	
	var _containersVisibleTodoList = __webpack_require__(113);
	
	var _containersVisibleTodoList2 = _interopRequireDefault(_containersVisibleTodoList);
	
	var App = function App() {
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'section',
	      { className: 'todoapp' },
	      _react2['default'].createElement(_Header2['default'], null),
	      _react2['default'].createElement(_containersVisibleTodoList2['default'], null),
	      _react2['default'].createElement(_containersFooter2['default'], null)
	    ),
	    _react2['default'].createElement(_Info2['default'], null)
	  );
	};
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ClearCompleted = function ClearCompleted(_ref) {
	  var onClearCompleted = _ref.onClearCompleted;
	  var hasCompletedTodos = _ref.hasCompletedTodos;
	
	  if (!hasCompletedTodos) {
	    return _react2['default'].createElement('button', { className: 'clear-completed' });
	  }
	
	  return _react2['default'].createElement(
	    'button',
	    { onClick: onClearCompleted, className: 'clear-completed' },
	    'Clear Completed'
	  );
	};
	
	ClearCompleted.propTypes = {
	  onClearCompleted: _react.PropTypes.func.isRequired
	};
	
	exports['default'] = ClearCompleted;
	module.exports = exports['default'];

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _containersFilterLink = __webpack_require__(110);
	
	var _containersFilterLink2 = _interopRequireDefault(_containersFilterLink);
	
	var _containersTodoCount = __webpack_require__(112);
	
	var _containersTodoCount2 = _interopRequireDefault(_containersTodoCount);
	
	var _containersClearCompleted = __webpack_require__(109);
	
	var _containersClearCompleted2 = _interopRequireDefault(_containersClearCompleted);
	
	var Footer = function Footer(_ref) {
	  var onClearCompleted = _ref.onClearCompleted;
	  var hasTodos = _ref.hasTodos;
	
	  if (!hasTodos) {
	    return _react2['default'].createElement('div', null);
	  }
	  return _react2['default'].createElement(
	    'footer',
	    { className: 'footer' },
	    _react2['default'].createElement(_containersTodoCount2['default'], null),
	    _react2['default'].createElement(
	      'ul',
	      { className: 'filters' },
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          _containersFilterLink2['default'],
	          { filter: 'SHOW_ALL' },
	          'All'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          _containersFilterLink2['default'],
	          { filter: 'SHOW_ACTIVE' },
	          'Active'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          _containersFilterLink2['default'],
	          { filter: 'SHOW_COMPLETED' },
	          'Completed'
	        )
	      )
	    ),
	    _react2['default'].createElement(_containersClearCompleted2['default'], null)
	  );
	};
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _containersAddTodo = __webpack_require__(108);
	
	var _containersAddTodo2 = _interopRequireDefault(_containersAddTodo);
	
	var Header = function Header() {
	  return _react2['default'].createElement(
	    'header',
	    { className: 'header' },
	    _react2['default'].createElement(
	      'h1',
	      null,
	      'todos'
	    ),
	    _react2['default'].createElement(_containersAddTodo2['default'], null)
	  );
	};
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Header = function Header() {
	  return _react2['default'].createElement(
	    'footer',
	    { className: 'info' },
	    _react2['default'].createElement(
	      'p',
	      null,
	      'Double-click to edit a todo'
	    ),
	    _react2['default'].createElement(
	      'p',
	      null,
	      'Created by ',
	      _react2['default'].createElement(
	        'a',
	        { href: 'http://github.com/petehunt/' },
	        'petehunt'
	      )
	    ),
	    _react2['default'].createElement(
	      'p',
	      null,
	      'Part of ',
	      _react2['default'].createElement(
	        'a',
	        { href: 'http://todomvc.com' },
	        'TodoMVC'
	      )
	    )
	  );
	};
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Link = function Link(_ref) {
	  var active = _ref.active;
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	
	  return _react2['default'].createElement(
	    'a',
	    {
	      className: active ? 'selected' : '',
	      href: '#',
	      onClick: function (e) {
	        e.preventDefault();
	        onClick();
	      }
	    },
	    children
	  );
	};
	
	Link.propTypes = {
	  active: _react.PropTypes.bool.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};
	
	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Todo = function Todo(_ref) {
	  var onToggle = _ref.onToggle;
	  var onDestroy = _ref.onDestroy;
	  var completed = _ref.completed;
	  var text = _ref.text;
	  return _react2['default'].createElement(
	    'li',
	    { className: completed ? 'completed' : '' },
	    _react2['default'].createElement('input', { checked: completed, type: 'checkbox', className: 'toggle', onClick: onToggle }),
	    _react2['default'].createElement(
	      'label',
	      null,
	      text
	    ),
	    _react2['default'].createElement('button', { onClick: onDestroy, className: 'destroy' })
	  );
	};
	
	Todo.propTypes = {
	  onDestroy: _react.PropTypes.func.isRequired,
	  onToggle: _react.PropTypes.func.isRequired,
	  completed: _react.PropTypes.bool.isRequired,
	  text: _react.PropTypes.string.isRequired
	};
	
	exports['default'] = Todo;
	module.exports = exports['default'];

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoCount = function TodoCount(_ref) {
	  var count = _ref.count;
	  return _react2['default'].createElement(
	    'span',
	    { className: 'todo-count' },
	    count,
	    ' item',
	    count !== 1 ? 's' : '',
	    ' left'
	  );
	};
	
	TodoCount.propTypes = {
	  count: _react.PropTypes.number.isRequired
	};
	
	exports['default'] = TodoCount;
	module.exports = exports['default'];

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(105);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var TodoList = function TodoList(_ref) {
	  var todos = _ref.todos;
	  var onTodoClick = _ref.onTodoClick;
	  var onTodoDestroy = _ref.onTodoDestroy;
	  var onToggleAllCompleted = _ref.onToggleAllCompleted;
	  var onToggleAllInProgress = _ref.onToggleAllInProgress;
	
	  if (!todos.length) {
	    return _react2['default'].createElement('section', { className: 'main' });
	  }
	  var allTodosCompleted = todos.every(function (_ref2) {
	    var completed = _ref2.completed;
	    return completed;
	  });
	  var onChange = allTodosCompleted ? onToggleAllInProgress : onToggleAllCompleted;
	  return _react2['default'].createElement(
	    'section',
	    { className: 'main' },
	    _react2['default'].createElement('input', { type: 'checkbox', checked: allTodosCompleted, onChange: onChange, className: 'toggle-all' }),
	    _react2['default'].createElement(
	      'ul',
	      { className: 'todo-list' },
	      todos.map(function (todo) {
	        return _react2['default'].createElement(_Todo2['default'], _extends({
	          key: todo.id
	        }, todo, {
	          onToggle: function () {
	            return onTodoClick(todo.id);
	          },
	          onDestroy: function () {
	            return onTodoDestroy(todo.id);
	          }
	        }));
	      })
	    )
	  );
	};
	
	TodoList.propTypes = {
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    id: _react.PropTypes.number.isRequired,
	    completed: _react.PropTypes.bool.isRequired,
	    text: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	  onTodoClick: _react.PropTypes.func.isRequired,
	  onTodoDestroy: _react.PropTypes.func.isRequired,
	  onToggleAllCompleted: _react.PropTypes.func.isRequired,
	  onToggleAllInProgress: _react.PropTypes.func.isRequired
	};
	
	exports['default'] = TodoList;
	module.exports = exports['default'];

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(22);
	
	var AddTodo = function AddTodo(_ref) {
	  var dispatch = _ref.dispatch;
	
	  var input = undefined;
	
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'form',
	      { onSubmit: function (e) {
	          e.preventDefault();
	          if (!input.value.trim()) {
	            return;
	          }
	          dispatch((0, _actions.addTodo)(input.value));
	          input.value = '';
	        } },
	      _react2['default'].createElement('input', { className: 'new-todo', placeholder: 'What needs to be done?', ref: function (node) {
	          input = node;
	        } })
	    )
	  );
	};
	AddTodo = (0, _reactRedux.connect)()(AddTodo);
	
	exports['default'] = AddTodo;
	module.exports = exports['default'];

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(22);
	
	var _componentsClearCompleted = __webpack_require__(100);
	
	var _componentsClearCompleted2 = _interopRequireDefault(_componentsClearCompleted);
	
	var mapStateToProps = function mapStateToProps(_ref) {
	  var todos = _ref.todos;
	
	  return {
	    hasCompletedTodos: todos.some(function (_ref2) {
	      var completed = _ref2.completed;
	      return completed;
	    })
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onClearCompleted: function onClearCompleted() {
	      dispatch((0, _actions.clearCompleted)());
	    }
	  };
	};
	
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsClearCompleted2['default']);
	module.exports = exports['default'];

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(22);
	
	var _componentsLink = __webpack_require__(104);
	
	var _componentsLink2 = _interopRequireDefault(_componentsLink);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
	    }
	  };
	};
	
	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsLink2['default']);
	
	exports['default'] = FilterLink;
	module.exports = exports['default'];

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(22);
	
	var _componentsFooter = __webpack_require__(101);
	
	var _componentsFooter2 = _interopRequireDefault(_componentsFooter);
	
	var mapStateToProps = function mapStateToProps(_ref) {
	  var todos = _ref.todos;
	
	  return {
	    hasTodos: todos.length > 0
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onClearCompleted: function onClearCompleted() {
	      dispatch((0, _actions.clearCompleted)());
	    }
	  };
	};
	
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsFooter2['default']);
	module.exports = exports['default'];

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRedux = __webpack_require__(18);
	
	var _componentsTodoCount = __webpack_require__(106);
	
	var _componentsTodoCount2 = _interopRequireDefault(_componentsTodoCount);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    count: state.todos.reduce(function (total, todo) {
	      if (!todo.completed) {
	        return total + 1;
	      }
	      return total;
	    }, 0)
	  };
	};
	
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(_componentsTodoCount2['default']);
	module.exports = exports['default'];

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRedux = __webpack_require__(18);
	
	var _actions = __webpack_require__(22);
	
	var _componentsTodoList = __webpack_require__(107);
	
	var _componentsTodoList2 = _interopRequireDefault(_componentsTodoList);
	
	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	  switch (filter) {
	    case 'SHOW_ALL':
	      return todos;
	    case 'SHOW_COMPLETED':
	      return todos.filter(function (t) {
	        return t.completed;
	      });
	    case 'SHOW_ACTIVE':
	      return todos.filter(function (t) {
	        return !t.completed;
	      });
	    default:
	      return todos;
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    todos: getVisibleTodos(state.todos, state.visibilityFilter)
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch((0, _actions.toggleTodo)(id));
	    },
	    onTodoDestroy: function onTodoDestroy(id) {
	      dispatch((0, _actions.removeTodo)(id));
	    },
	    onToggleAllCompleted: function onToggleAllCompleted(id) {
	      dispatch((0, _actions.toggleAllCompleted)());
	    },
	    onToggleAllInProgress: function onToggleAllInProgress(id) {
	      dispatch((0, _actions.toggleAllInProgress)());
	    }
	
	  };
	};
	
	var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsTodoList2['default']);
	
	exports['default'] = VisibleTodoList;
	module.exports = exports['default'];

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(61);
	
	var _todos = __webpack_require__(115);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	var _visibilityFilter = __webpack_require__(116);
	
	var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);
	
	var todoApp = (0, _redux.combineReducers)({
	  todos: _todos2['default'],
	  visibilityFilter: _visibilityFilter2['default']
	});
	
	exports['default'] = todoApp;
	module.exports = exports['default'];

/***/ },

/***/ 115:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var todo = function todo(state, action) {
	  if (state === undefined) state = {};
	
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        text: action.text,
	        completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) {
	        return state;
	      }
	
	      return Object.assign({}, state, {
	        completed: !state.completed
	      });
	
	    default:
	      return state;
	  }
	};
	
	var todos = function todos(state, action) {
	  if (state === undefined) state = [];
	
	  switch (action.type) {
	    case 'ADD_TODO':
	      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    case 'TOGGLE_ALL_TODOS':
	      var allCompleted = state.every(function (item) {
	        return item.completed;
	      });
	
	      return state.map(function (_ref) {
	        var id = _ref.id;
	        var text = _ref.text;
	
	        return { completed: !allCompleted, id: id, text: text };
	      });
	    case 'TOGGLE_ALL_TODOS_COMPLETED':
	      return state.map(function (_ref2) {
	        var id = _ref2.id;
	        var text = _ref2.text;
	
	        return { completed: true, id: id, text: text };
	      });
	    case 'TOGGLE_ALL_TODOS_IN_PROGRESS':
	      return state.map(function (_ref3) {
	        var id = _ref3.id;
	        var text = _ref3.text;
	
	        return { completed: false, id: id, text: text };
	      });
	    case 'REMOVE_COMPLETED_TODOS':
	      return state.filter(function (item) {
	        return !item.completed;
	      });
	    case 'REMOVE_TODO':
	      return state.filter(function (item) {
	        return item.id !== action.id;
	      });
	    default:
	      return state;
	  }
	};
	
	exports['default'] = todos;
	module.exports = exports['default'];

/***/ },

/***/ 116:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var visibilityFilter = function visibilityFilter(state, action) {
	  if (state === undefined) state = 'SHOW_ALL';
	
	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	    default:
	      return state;
	  }
	};
	
	exports['default'] = visibilityFilter;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=app.js.map