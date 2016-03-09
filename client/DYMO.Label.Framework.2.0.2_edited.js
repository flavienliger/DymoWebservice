// DEOBFUSCATION BY http://www.jsnice.org/

(function() {
  var URL = 'http://dymo-server/dymo.php?';
  
  /**
   * @return {undefined}
   */
  function noop() {
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function typeOf(value) {
    /** @type {string} */
    var type = typeof value;
    if ("object" == type) {
      if (value) {
        if (value instanceof Array) {
          return "array";
        }
        if (value instanceof Object) {
          return type;
        }
        /** @type {string} */
        var isFunction = Object.prototype.toString.call(value);
        if ("[object Window]" == isFunction) {
          return "object";
        }
        if ("[object Array]" == isFunction || "number" == typeof value.length && ("undefined" != typeof value.splice && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")))) {
          return "array";
        }
        if ("[object Function]" == isFunction || "undefined" != typeof value.call && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call"))) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == type && "undefined" == typeof value.call) {
        return "object";
      }
    }
    return type;
  }
  /**
   * @param {string} actual
   * @return {?}
   */
  function isArray(actual) {
    return "array" == typeOf(actual);
  }
  /**
   * @param {string} arg
   * @return {?}
   */
  function append(arg) {
    var type = typeOf(arg);
    return "array" == type || "object" == type && "number" == typeof arg.length;
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function expect(val) {
    return "string" == typeof val;
  }
  /**
   * @param {Object} value
   * @return {?}
   */
  function is(value) {
    return "number" == typeof value;
  }
  /**
   * @param {Object} item
   * @return {?}
   */
  function isFunction(item) {
    return "function" == typeOf(item);
  }
  /**
   * @param {Function} fn
   * @param {Function} context
   * @param {boolean} recurring
   * @return {?}
   */
  function program(fn, context, recurring) {
    return fn.call.apply(fn.bind, arguments);
  }
  /**
   * @param {Function} fn
   * @param {Function} obj
   * @param {boolean} recurring
   * @return {?}
   */
  function $goog$bindJs_$(fn, obj, recurring) {
    if (!fn) {
      throw Error();
    }
    if (2 < arguments.length) {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments, 2);
      return function() {
        /** @type {Array.<?>} */
        var newArgs = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(newArgs, args);
        return fn.apply(obj, newArgs);
      };
    }
    return function() {
      return fn.apply(obj, arguments);
    };
  }
  /**
   * @param {Function} fn
   * @param {Function} op
   * @param {boolean} recurring
   * @return {?}
   */
  function bind(fn, op, recurring) {
    /** @type {function (Function, Function, boolean): ?} */
    bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? program : $goog$bindJs_$;
    return bind.apply(null, arguments);
  }
  /**
   * @param {Function} fn
   * @param {number} var_args
   * @return {?}
   */
  function partial(fn, var_args) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      /** @type {Array.<?>} */
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  }
  /**
   * @param {string} param
   * @param {Function} name
   * @return {undefined}
   */
  function run(param, name) {
    var parts = param.split(".");
    var cur = global;
    if (!(parts[0] in cur)) {
      if (!!cur.execScript) {
        cur.execScript("var " + parts[0]);
      }
    }
    var part;
    for (;parts.length && (part = parts.shift());) {
      if (parts.length || void 0 === name) {
        if (cur[part]) {
          cur = cur[part];
        } else {
          cur = cur[part] = {};
        }
      } else {
        /** @type {Function} */
        cur[part] = name;
      }
    }
  }
  /**
   * @param {Function} obj
   * @param {Function} type
   * @return {undefined}
   */
  function isString(obj, type) {
    /**
     * @return {undefined}
     */
    function F() {
    }
    F.prototype = type.prototype;
    obj.ca = type.prototype;
    obj.prototype = new F;
    /** @type {Function} */
    obj.prototype.constructor = obj;
    /**
     * @param {?} opt_context
     * @param {?} method
     * @param {?} dataAndEvents
     * @return {?}
     */
    obj.Ba = function(opt_context, method, dataAndEvents) {
      /** @type {Array} */
      var args = Array(arguments.length - 2);
      /** @type {number} */
      var i = 2;
      for (;i < arguments.length;i++) {
        args[i - 2] = arguments[i];
      }
      return type.prototype[method].apply(opt_context, args);
    };
  }
  /**
   * @param {?} message
   * @return {undefined}
   */
  function assert(message) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, assert);
    } else {
      /** @type {string} */
      var stack = Error().stack;
      if (stack) {
        /** @type {string} */
        this.stack = stack;
      }
    }
    if (message) {
      /** @type {string} */
      this.message = String(message);
    }
  }
  /**
   * @param {string} src
   * @param {?} srcFile
   * @return {?}
   */
  function handle(src, srcFile) {
    var namespaces = src.split("%s");
    /** @type {string} */
    var optsData = "";
    /** @type {Array.<?>} */
    var resolveValues = Array.prototype.slice.call(arguments, 1);
    for (;resolveValues.length && 1 < namespaces.length;) {
      optsData += namespaces.shift() + resolveValues.shift();
    }
    return optsData + namespaces.join("%s");
  }
  /**
   * @param {string} obj
   * @param {string} str
   * @return {?}
   */
  function isType(obj, str) {
    return-1 != obj.indexOf(str);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function objectToString(obj) {
    return Array.prototype.join.call(arguments, "");
  }
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  function cmp(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  /**
   * @param {?} opts
   * @param {Array} data
   * @return {undefined}
   */
  function d(opts, data) {
    data.unshift(opts);
    assert.call(this, handle.apply(null, data));
    data.shift();
  }
  /**
   * @param {boolean} details
   * @param {?} failing_message
   * @return {?}
   */
  function report(details, failing_message) {
    throw new d("Failure" + (details ? ": " + details : ""), Array.prototype.slice.call(arguments, 1));
  }
  /**
   * @param {string} arr
   * @return {?}
   */
  function insert(arr) {
    var f;
    a: {
      /** @type {function (Object): ?} */
      f = isEmpty;
      var e = arr.length;
      var arr2 = expect(arr) ? arr.split("") : arr;
      /** @type {number} */
      var i = 0;
      for (;i < e;i++) {
        if (i in arr2 && f.call(void 0, arr2[i], i, arr)) {
          /** @type {number} */
          f = i;
          break a;
        }
      }
      /** @type {number} */
      f = -1;
    }
    return 0 > f ? null : expect(arr) ? arr.charAt(f) : arr[f];
  }
  /**
   * @param {Array} arr
   * @param {string} item
   * @return {?}
   */
  function splice(arr, item) {
    var idx = indexOf(arr, item);
    var result;
    if (result = 0 <= idx) {
      ArrayProto.splice.call(arr, idx, 1);
    }
    return result;
  }
  /**
   * @param {Array} arrs
   * @return {?}
   */
  function union(arrs) {
    return ArrayProto.concat.apply(ArrayProto, arguments);
  }
  /**
   * @param {Object} obj
   * @param {Function} f
   * @return {undefined}
   */
  function HOP(obj, f) {
    var key;
    for (key in obj) {
      f.call(void 0, obj[key], key, obj);
    }
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function eval(data) {
    /** @type {Array} */
    var res = [];
    /** @type {number} */
    var resLength = 0;
    var key;
    for (key in data) {
      res[resLength++] = data[key];
    }
    return res;
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function _each(data) {
    /** @type {Array} */
    var object = [];
    /** @type {number} */
    var i = 0;
    var val;
    for (val in data) {
      /** @type {string} */
      object[i++] = val;
    }
    return object;
  }
  /**
   * @param {Object} a
   * @param {?} callback
   * @return {undefined}
   */
  function require(a, callback) {
    var prop;
    var b;
    /** @type {number} */
    var c = 1;
    for (;c < arguments.length;c++) {
      b = arguments[c];
      for (prop in b) {
        a[prop] = b[prop];
      }
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        /** @type {string} */
        prop = codeSegments[i];
        if (Object.prototype.hasOwnProperty.call(b, prop)) {
          a[prop] = b[prop];
        }
      }
    }
  }
  /**
   * @param {Array} dataObj
   * @return {?}
   */
  function func(dataObj) {
    /** @type {number} */
    var argLength = arguments.length;
    if (1 == argLength && isArray(arguments[0])) {
      return func.apply(null, arguments[0]);
    }
    var target = {};
    /** @type {number} */
    var i = 0;
    for (;i < argLength;i++) {
      /** @type {boolean} */
      target[arguments[i]] = true;
    }
    return target;
  }
  /**
   * @return {?}
   */
  function replace() {
    return isType(arg, "Edge") || (isType(arg, "Trident") || isType(arg, "MSIE"));
  }
  /**
   * @return {?}
   */
  function isArguments() {
    return isType(arg, "Edge");
  }
  /**
   * @return {?}
   */
  function valueAccessor() {
    var fn = arg;
    if (message) {
      return/rv\:([^\);]+)(\)|;)/.exec(fn);
    }
    if (isIE && isArguments()) {
      return/Edge\/([\d\.]+)/.exec(fn);
    }
    if (isIE) {
      return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fn);
    }
    if (YY_START) {
      return/WebKit\/(\S+)/.exec(fn);
    }
  }
  /**
   * @return {?}
   */
  function iframeCssFixes() {
    var doc = global.document;
    return doc ? doc.documentMode : void 0;
  }
  /**
   * @param {string} src
   * @return {?}
   */
  function init(src) {
    var myqueue;
    if (!(myqueue = interactives[src])) {
      /** @type {number} */
      myqueue = 0;
      var v1Subs = filter(String(cDigit)).split(".");
      var v2Subs = filter(String(src)).split(".");
      /** @type {number} */
      var subCount = Math.max(v1Subs.length, v2Subs.length);
      /** @type {number} */
      var subIdx = 0;
      for (;0 == myqueue && subIdx < subCount;subIdx++) {
        var value = v1Subs[subIdx] || "";
        var v2Sub = v2Subs[subIdx] || "";
        /** @type {RegExp} */
        var re = RegExp("(\\d*)(\\D*)", "g");
        /** @type {RegExp} */
        var regex = RegExp("(\\d*)(\\D*)", "g");
        do {
          /** @type {Array} */
          var a = re.exec(value) || ["", "", ""];
          /** @type {Array} */
          var b = regex.exec(v2Sub) || ["", "", ""];
          if (0 == a[0].length && 0 == b[0].length) {
            break;
          }
          myqueue = cmp(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == b[1].length ? 0 : parseInt(b[1], 10)) || (cmp(0 == a[2].length, 0 == b[2].length) || cmp(a[2], b[2]));
        } while (0 == myqueue);
      }
      /** @type {boolean} */
      myqueue = interactives[src] = 0 <= myqueue;
    }
    return myqueue;
  }
  /**
   * @return {undefined}
   */
  function SAXParser() {
    /** @type {string} */
    this.c = "";
    /** @type {null} */
    this.f = null;
  }
  /**
   * @param {string} item
   * @return {undefined}
   */
  function escape(item) {
    var state = new SAXParser;
    /** @type {string} */
    state.c = item;
    /** @type {number} */
    state.f = 0;
  }
  /**
   * @param {Element} elem
   * @param {Object} walkers
   * @return {undefined}
   */
  function setNodeAttributes(elem, walkers) {
    HOP(walkers, function(value, name) {
      if ("style" == name) {
        elem.style.cssText = value;
      } else {
        if ("class" == name) {
          elem.className = value;
        } else {
          if ("for" == name) {
            elem.htmlFor = value;
          } else {
            if (name in props) {
              elem.setAttribute(props[name], value);
            } else {
              if (0 == name.lastIndexOf("aria-", 0) || 0 == name.lastIndexOf("data-", 0)) {
                elem.setAttribute(name, value);
              } else {
                elem[name] = value;
              }
            }
          }
        }
      }
    });
  }
  /**
   * @param {Element} element
   * @param {?} doc
   * @return {?}
   */
  function attach(element, doc) {
    /** @type {Array} */
    var output = [];
    parseNode(element, doc, output, false);
    return output;
  }
  /**
   * @param {Element} element
   * @param {?} state
   * @param {Array} output
   * @param {boolean} emptyGet
   * @return {?}
   */
  function parseNode(element, state, output, emptyGet) {
    if (null != element) {
      element = element.firstChild;
      for (;element;) {
        if (state(element) && (output.push(element), emptyGet) || parseNode(element, state, output, emptyGet)) {
          return true;
        }
        element = element.nextSibling;
      }
    }
    return false;
  }
  /**
   * @param {Object} node
   * @param {Array} nodes
   * @param {boolean} emptyGet
   * @return {undefined}
   */
  function walk(node, nodes, emptyGet) {
    if (!(node.nodeName in blockLikeTags)) {
      if (3 == node.nodeType) {
        if (emptyGet) {
          nodes.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
        } else {
          nodes.push(node.nodeValue);
        }
      } else {
        if (node.nodeName in obj) {
          nodes.push(obj[node.nodeName]);
        } else {
          node = node.firstChild;
          for (;node;) {
            walk(node, nodes, emptyGet);
            node = node.nextSibling;
          }
        }
      }
    }
  }
  /**
   * @param {Function} ctor
   * @return {undefined}
   */
  function isKind(ctor) {
    ctor.prototype.then = ctor.prototype.then;
    /** @type {boolean} */
    ctor.prototype.$goog_Thenable = true;
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function hasKey(object) {
    if (!object) {
      return false;
    }
    try {
      return!!object.$goog_Thenable;
    } catch (b) {
      return false;
    }
  }
  /**
   * @param {?} value
   * @param {Blob} i
   * @return {undefined}
   */
  function action(value, i) {
    this.h = value;
    /** @type {Blob} */
    this.i = i;
    /** @type {number} */
    this.f = 0;
    /** @type {null} */
    this.c = null;
  }
  /**
   * @param {Object} item
   * @return {?}
   */
  function m(item) {
    var row;
    if (0 < item.f) {
      item.f--;
      row = item.c;
      item.c = row.next;
      /** @type {null} */
      row.next = null;
    } else {
      row = item.h();
    }
    return row;
  }
  /**
   * @param {Object} item
   * @param {number} isXML
   * @return {undefined}
   */
  function notify(item, isXML) {
    item.i(isXML);
    if (100 > item.f) {
      item.f++;
      isXML.next = item.c;
      /** @type {number} */
      item.c = isXML;
    }
  }
  /**
   * @return {?}
   */
  function setState() {
    var node = target;
    /** @type {null} */
    var cb = null;
    if (node.c) {
      cb = node.c;
      node.c = node.c.next;
      if (!node.c) {
        /** @type {null} */
        node.f = null;
      }
      /** @type {null} */
      cb.next = null;
    }
    return cb;
  }
  /**
   * @return {undefined}
   */
  function Test() {
    /** @type {null} */
    this.next = this.f = this.c = null;
  }
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function requestAnimationFrame(callback) {
    global.setTimeout(function() {
      throw callback;
    }, 0);
  }
  /**
   * @return {?}
   */
  function create() {
    var Channel = global.MessageChannel;
    if ("undefined" === typeof Channel) {
      if ("undefined" !== typeof window) {
        if (window.postMessage) {
          if (window.addEventListener) {
            if (!isType(arg, "Presto")) {
              /**
               * @return {undefined}
               */
              Channel = function() {
                /** @type {Element} */
                var f = document.createElement("IFRAME");
                /** @type {string} */
                f.style.display = "none";
                /** @type {string} */
                f.src = "";
                document.documentElement.appendChild(f);
                var win = f.contentWindow;
                f = win.document;
                f.open();
                f.write("");
                f.close();
                /** @type {string} */
                var messageName = "callImmediate" + Math.random();
                /** @type {string} */
                var url = "file:" == win.location.protocol ? "*" : win.location.protocol + "//" + win.location.host;
                f = bind(function(event) {
                  if (("*" == url || event.origin == url) && event.data == messageName) {
                    this.port1.onmessage();
                  }
                }, this);
                win.addEventListener("message", f, false);
                this.port1 = {};
                this.port2 = {
                  /**
                   * @return {undefined}
                   */
                  postMessage : function() {
                    win.postMessage(messageName, url);
                  }
                };
              };
            }
          }
        }
      }
    }
    if ("undefined" !== typeof Channel && !replace()) {
      var channel = new Channel;
      var context = {};
      var current = context;
      /**
       * @return {undefined}
       */
      channel.port1.onmessage = function() {
        if (void 0 !== context.next) {
          context = context.next;
          var j = context.ea;
          /** @type {null} */
          context.ea = null;
          j();
        }
      };
      return function(dataAndEvents) {
        current.next = {
          ea : dataAndEvents
        };
        current = current.next;
        channel.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(fetchOnlyFunction) {
      /** @type {Element} */
      var script = document.createElement("SCRIPT");
      /**
       * @return {undefined}
       */
      script.onreadystatechange = function() {
        /** @type {null} */
        script.onreadystatechange = null;
        script.parentNode.removeChild(script);
        /** @type {null} */
        script = null;
        fetchOnlyFunction();
        /** @type {null} */
        fetchOnlyFunction = null;
      };
      document.documentElement.appendChild(script);
    } : function(funcToCall) {
      global.setTimeout(funcToCall, 0);
    };
  }
  /**
   * @param {Function} node
   * @param {Function} x
   * @return {undefined}
   */
  function detach(node, x) {
    if (!cb) {
      resolvePromise();
    }
    if (!qb) {
      cb();
      /** @type {boolean} */
      qb = true;
    }
    var item = target;
    var el = m(def);
    /** @type {Function} */
    el.c = node;
    /** @type {Function} */
    el.f = x;
    /** @type {null} */
    el.next = null;
    if (item.f) {
      item.f.next = el;
    } else {
      item.c = el;
    }
    item.f = el;
  }
  /**
   * @return {undefined}
   */
  function resolvePromise() {
    if (global.Promise && global.Promise.resolve) {
      var win = global.Promise.resolve();
      /**
       * @return {undefined}
       */
      cb = function() {
        win.then(resume);
      };
    } else {
      /**
       * @return {undefined}
       */
      cb = function() {
        /** @type {function (): undefined} */
        var fn = resume;
        if (!isFunction(global.setImmediate) || global.Window && (global.Window.prototype && global.Window.prototype.setImmediate == global.setImmediate)) {
          if (!setImmediate) {
            setImmediate = create();
          }
          setImmediate(fn);
        } else {
          global.setImmediate(fn);
        }
      };
    }
  }
  /**
   * @return {undefined}
   */
  function resume() {
    /** @type {null} */
    var item = null;
    for (;item = setState();) {
      try {
        item.c.call(item.f);
      } catch (restoreScript) {
        requestAnimationFrame(restoreScript);
      }
      notify(def, item);
    }
    /** @type {boolean} */
    qb = false;
  }
  /**
   * @param {Function} callback
   * @param {Object} value
   * @return {undefined}
   */
  function val(callback, value) {
    /** @type {number} */
    this.c = SELECT;
    this.o = void 0;
    /** @type {null} */
    this.i = this.f = this.h = null;
    /** @type {boolean} */
    this.l = this.m = false;
    if (callback == successful) {
      isObject(this, failuresLink, value);
    } else {
      try {
        var suiteView = this;
        callback.call(value, function(isXML) {
          isObject(suiteView, failuresLink, isXML);
        }, function(value) {
          if (!(value instanceof type)) {
            try {
              if (value instanceof Error) {
                throw value;
              }
              throw Error("Promise rejected.");
            } catch (b) {
            }
          }
          isObject(suiteView, parent, value);
        });
      } catch (udataCur) {
        isObject(this, parent, udataCur);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function Rect() {
    /** @type {null} */
    this.next = this.h = this.f = this.i = this.c = null;
    /** @type {boolean} */
    this.l = false;
  }
  /**
   * @param {?} x
   * @param {Function} e
   * @param {string} height
   * @return {?}
   */
  function center(x, e, height) {
    var t = m(msg);
    t.i = x;
    /** @type {Function} */
    t.f = e;
    /** @type {string} */
    t.h = height;
    return t;
  }
  /**
   * @return {undefined}
   */
  function successful() {
  }
  /**
   * @param {Array} values
   * @return {?}
   */
  function build(values) {
    return new val(function(jQuery, cb) {
      var valuesLen = values.length;
      /** @type {Array} */
      var option = [];
      if (valuesLen) {
        /**
         * @param {number} name
         * @param {?} value
         * @return {undefined}
         */
        var addClass = function(name, value) {
          valuesLen--;
          option[name] = value;
          if (0 == valuesLen) {
            jQuery(option);
          }
        };
        /**
         * @param {?} er
         * @return {undefined}
         */
        var CB = function(er) {
          cb(er);
        };
        /** @type {number} */
        var name = 0;
        var value;
        for (;value = values[name];name++) {
          register(value, partial(addClass, name), CB);
        }
      } else {
        jQuery(option);
      }
    });
  }
  /**
   * @param {?} target
   * @param {Function} callback
   * @param {string} cb
   * @param {string} context
   * @return {undefined}
   */
  function register(target, callback, cb, context) {
    if (target instanceof val) {
      getNext(target, center(callback || noop, cb || null, context));
    } else {
      target.then(callback, cb, context);
    }
  }
  /**
   * @param {Object} target
   * @param {Object} name
   * @return {undefined}
   */
  function post(target, name) {
    if (target.c == SELECT) {
      if (target.h) {
        var t = target.h;
        if (t.f) {
          /** @type {number} */
          var current = 0;
          /** @type {null} */
          var prev = null;
          /** @type {null} */
          var group = null;
          var p = t.f;
          for (;p && (p.l || (current++, p.c == target && (prev = p), !(prev && 1 < current)));p = p.next) {
            if (!prev) {
              group = p;
            }
          }
          if (prev) {
            if (t.c == SELECT && 1 == current) {
              post(t, name);
            } else {
              if (group) {
                current = group;
                if (current.next == t.i) {
                  t.i = current;
                }
                current.next = current.next.next;
              } else {
                addItem(t);
              }
              push(t, prev, parent, name);
            }
          }
        }
        /** @type {null} */
        target.h = null;
      } else {
        isObject(target, parent, name);
      }
    }
  }
  /**
   * @param {Object} current
   * @param {?} node
   * @return {undefined}
   */
  function getNext(current, node) {
    if (!current.f) {
      if (!(current.c != failuresLink && current.c != parent)) {
        addClass(current);
      }
    }
    if (current.i) {
      current.i.next = node;
    } else {
      current.f = node;
    }
    current.i = node;
  }
  /**
   * @param {Function} current
   * @param {boolean} callback
   * @param {boolean} func
   * @param {?} obj
   * @return {?}
   */
  function i(current, callback, func, obj) {
    var node = center(null, null, null);
    node.c = new val(function(i, f) {
      node.i = callback ? function(value) {
        try {
          var pdataOld = callback.call(obj, value);
          i(pdataOld);
        } catch (udataCur) {
          f(udataCur);
        }
      } : i;
      node.f = func ? function(value) {
        try {
          var udataCur = func.call(obj, value);
          if (void 0 === udataCur && value instanceof type) {
            f(value);
          } else {
            i(udataCur);
          }
        } catch (pdataOld) {
          f(pdataOld);
        }
      } : f;
    });
    /** @type {Function} */
    node.c.h = current;
    getNext(current, node);
    return node.c;
  }
  /**
   * @param {Object} obj
   * @param {number} el
   * @param {Object} value
   * @return {undefined}
   */
  function isObject(obj, el, value) {
    if (obj.c == SELECT) {
      if (obj == value) {
        /** @type {number} */
        el = parent;
        /** @type {TypeError} */
        value = new TypeError("Promise cannot resolve to itself");
      } else {
        if (hasKey(value)) {
          /** @type {number} */
          obj.c = 1;
          register(value, obj.ka, obj.la, obj);
          return;
        }
        /** @type {string} */
        var $s = typeof value;
        if ("object" == $s && null != value || "function" == $s) {
          try {
            var target = value.then;
            if (isFunction(target)) {
              forOwn(obj, value, target);
              return;
            }
          } catch (config) {
            /** @type {number} */
            el = parent;
            value = config;
          }
        }
      }
      /** @type {Object} */
      obj.o = value;
      /** @type {number} */
      obj.c = el;
      /** @type {null} */
      obj.h = null;
      addClass(obj);
      if (!(el != parent)) {
        if (!(value instanceof type)) {
          group(obj, value);
        }
      }
    }
  }
  /**
   * @param {Object} obj
   * @param {Object} object
   * @param {Function} callback
   * @return {undefined}
   */
  function forOwn(obj, object, callback) {
    /**
     * @param {?} target
     * @return {undefined}
     */
    function i(target) {
      if (!g) {
        /** @type {boolean} */
        g = true;
        obj.la(target);
      }
    }
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function kValue(deepDataAndEvents) {
      if (!g) {
        /** @type {boolean} */
        g = true;
        obj.ka(deepDataAndEvents);
      }
    }
    /** @type {number} */
    obj.c = 1;
    /** @type {boolean} */
    var g = false;
    try {
      callback.call(object, kValue, i);
    } catch (key) {
      i(key);
    }
  }
  /**
   * @param {Object} value
   * @return {undefined}
   */
  function addClass(value) {
    if (!value.m) {
      /** @type {boolean} */
      value.m = true;
      detach(value.ya, value);
    }
  }
  /**
   * @param {Object} item
   * @return {?}
   */
  function addItem(item) {
    /** @type {null} */
    var result = null;
    if (item.f) {
      result = item.f;
      item.f = result.next;
      /** @type {null} */
      result.next = null;
    }
    if (!item.f) {
      /** @type {null} */
      item.i = null;
    }
    return result;
  }
  /**
   * @param {Object} view
   * @param {Object} item
   * @param {(Object|string)} node
   * @param {Object} error
   * @return {undefined}
   */
  function push(view, item, node, error) {
    if (node == parent && (item.f && !item.l)) {
      for (;view && view.l;view = view.h) {
        /** @type {boolean} */
        view.l = false;
      }
    }
    if (item.c) {
      /** @type {null} */
      item.c.h = null;
      clone(item, node, error);
    } else {
      try {
        if (item.l) {
          item.i.call(item.h);
        } else {
          clone(item, node, error);
        }
      } catch (prevTag) {
        __indexOf.call(null, prevTag);
      }
    }
    notify(msg, item);
  }
  /**
   * @param {Object} object
   * @param {number} dataAndEvents
   * @param {Object} events
   * @return {undefined}
   */
  function clone(object, dataAndEvents, events) {
    if (dataAndEvents == failuresLink) {
      object.i.call(object.h, events);
    } else {
      if (object.f) {
        object.f.call(object.h, events);
      }
    }
  }
  /**
   * @param {Object} context
   * @param {Object} name
   * @return {undefined}
   */
  function group(context, name) {
    /** @type {boolean} */
    context.l = true;
    detach(function() {
      if (context.l) {
        __indexOf.call(null, name);
      }
    });
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function type(obj) {
    assert.call(this, obj);
  }
  /**
   * @return {undefined}
   */
  function t() {
    if (0 != Mb) {
      expectations[this[k] || (this[k] = ++rindex)] = this;
    }
    this.l = this.l;
    this.A = this.A;
  }
  /**
   * @param {Object} message
   * @return {undefined}
   */
  function equal(message) {
    if (!message.l) {
      /** @type {boolean} */
      message.l = true;
      message.K();
      if (0 != Mb) {
        message = message[k] || (message[k] = ++rindex);
        delete expectations[message];
      }
    }
  }
  /**
   * @param {?} type
   * @param {Object} base
   * @return {undefined}
   */
  function block(type, base) {
    this.type = type;
    this.c = this.target = base;
    /** @type {boolean} */
    this.ha = true;
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function defineProperties(object) {
    defineProperties[" "](object);
    return object;
  }
  /**
   * @param {Object} event
   * @param {?} compiler
   * @return {undefined}
   */
  function constructor(event, compiler) {
    block.call(this, event ? event.type : "");
    /** @type {null} */
    this.h = this.state = this.c = this.target = null;
    if (event) {
      this.type = event.type;
      this.target = event.target || event.srcElement;
      this.c = compiler;
      var parent = event.relatedTarget;
      if (parent && message) {
        try {
          defineProperties(parent.nodeName);
        } catch (e) {
        }
      }
      this.state = event.state;
      /** @type {Object} */
      this.h = event;
      if (event.defaultPrevented) {
        this.f();
      }
    }
  }
  /**
   * @param {Function} listener
   * @param {?} src
   * @param {?} eventType
   * @param {?} opt_capt
   * @param {?} opt_eventHandler
   * @return {undefined}
   */
  function listen(listener, src, eventType, opt_capt, opt_eventHandler) {
    /** @type {Function} */
    this.listener = listener;
    /** @type {null} */
    this.c = null;
    this.src = src;
    this.type = eventType;
    /** @type {boolean} */
    this.aa = !!opt_capt;
    this.ba = opt_eventHandler;
    ++Vb;
    /** @type {boolean} */
    this.N = this.$ = false;
  }
  /**
   * @param {Object} listener
   * @return {undefined}
   */
  function removeListener(listener) {
    /** @type {boolean} */
    listener.N = true;
    /** @type {null} */
    listener.listener = null;
    /** @type {null} */
    listener.c = null;
    /** @type {null} */
    listener.src = null;
    /** @type {null} */
    listener.ba = null;
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function _(obj) {
    this.src = obj;
    this.c = {};
    /** @type {number} */
    this.f = 0;
  }
  /**
   * @param {Object} el
   * @param {Object} type
   * @param {string} fn
   * @param {boolean} recurring
   * @param {Object} listener
   * @param {?} opt_attributes
   * @return {?}
   */
  function on(el, type, fn, recurring, listener, opt_attributes) {
    var j = type.toString();
    type = el.c[j];
    if (!type) {
      /** @type {Array} */
      type = el.c[j] = [];
      el.f++;
    }
    var key = Event(type, fn, listener, opt_attributes);
    if (-1 < key) {
      el = type[key];
      if (!recurring) {
        /** @type {boolean} */
        el.$ = false;
      }
    } else {
      el = new listen(fn, el.src, j, !!listener, opt_attributes);
      /** @type {boolean} */
      el.$ = recurring;
      type.push(el);
    }
    return el;
  }
  /**
   * @param {Object} options
   * @param {Object} listener
   * @return {undefined}
   */
  function remove(options, listener) {
    var key = listener.type;
    if (key in options.c) {
      if (splice(options.c[key], listener)) {
        removeListener(listener);
        if (0 == options.c[key].length) {
          delete options.c[key];
          options.f--;
        }
      }
    }
  }
  /**
   * @param {Object} type
   * @param {(number|string)} listener
   * @param {boolean} deepDataAndEvents
   * @param {?} attributes
   * @return {?}
   */
  function Event(type, listener, deepDataAndEvents, attributes) {
    /** @type {number} */
    var i = 0;
    for (;i < type.length;++i) {
      var listenerObj = type[i];
      if (!listenerObj.N && (listenerObj.listener == listener && (listenerObj.aa == !!deepDataAndEvents && listenerObj.ba == attributes))) {
        return i;
      }
    }
    return-1;
  }
  /**
   * @param {Object} obj
   * @param {Object} type
   * @param {Object} callback
   * @param {Object} f
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function addEvent(obj, type, callback, f, deepDataAndEvents) {
    if (isArray(type)) {
      /** @type {number} */
      var i = 0;
      for (;i < type.length;i++) {
        addEvent(obj, type[i], callback, f, deepDataAndEvents);
      }
    } else {
      if (callback = makeIterator(callback), obj && obj[prop]) {
        on(obj.D, String(type), callback, false, f, deepDataAndEvents);
      } else {
        if (!type) {
          throw Error("Invalid event type");
        }
        /** @type {boolean} */
        i = !!f;
        var ret = $(obj);
        if (!ret) {
          obj[key] = ret = new _(obj);
        }
        callback = on(ret, type, callback, false, f, deepDataAndEvents);
        if (!callback.c) {
          f = after();
          /** @type {Object} */
          callback.c = f;
          /** @type {Object} */
          f.src = obj;
          /** @type {Object} */
          f.listener = callback;
          if (obj.addEventListener) {
            obj.addEventListener(type.toString(), f, i);
          } else {
            if (obj.attachEvent) {
              obj.attachEvent(detachEvent(type.toString()), f);
            } else {
              throw Error("addEventListener and attachEvent are unavailable.");
            }
          }
          dc++;
        }
      }
    }
  }
  /**
   * @return {?}
   */
  function after() {
    /** @type {function (Object, Array): ?} */
    var self = process;
    /** @type {function (?): ?} */
    var e = forward ? function(a2) {
      return self.call(e.src, e.listener, a2);
    } : function(ret) {
      ret = self.call(e.src, e.listener, ret);
      if (!ret) {
        return ret;
      }
    };
    return e;
  }
  /**
   * @param {Object} e
   * @param {string} i
   * @param {number} callback
   * @param {boolean} deepDataAndEvents
   * @param {?} options
   * @return {undefined}
   */
  function cycle(e, i, callback, deepDataAndEvents, options) {
    if (isArray(i)) {
      /** @type {number} */
      var type = 0;
      for (;type < i.length;type++) {
        cycle(e, i[type], callback, deepDataAndEvents, options);
      }
    } else {
      if (callback = makeIterator(callback), e && e[prop]) {
        e = e.D;
        /** @type {string} */
        i = String(i).toString();
        if (i in e.c) {
          type = e.c[i];
          callback = Event(type, callback, deepDataAndEvents, options);
          if (-1 < callback) {
            removeListener(type[callback]);
            ArrayProto.splice.call(type, callback, 1);
            if (0 == type.length) {
              delete e.c[i];
              e.f--;
            }
          }
        }
      } else {
        if (e) {
          if (e = $(e)) {
            i = e.c[i.toString()];
            /** @type {number} */
            e = -1;
            if (i) {
              e = Event(i, callback, !!deepDataAndEvents, options);
            }
            if (callback = -1 < e ? i[e] : null) {
              unbind(callback);
            }
          }
        }
      }
    }
  }
  /**
   * @param {Object} listener
   * @return {undefined}
   */
  function unbind(listener) {
    if (!is(listener) && (listener && !listener.N)) {
      var src = listener.src;
      if (src && src[prop]) {
        remove(src.D, listener);
      } else {
        var type = listener.type;
        var proxy = listener.c;
        if (src.removeEventListener) {
          src.removeEventListener(type, proxy, listener.aa);
        } else {
          if (src.detachEvent) {
            src.detachEvent(detachEvent(type), proxy);
          }
        }
        dc--;
        if (type = $(src)) {
          remove(type, listener);
          if (0 == type.f) {
            /** @type {null} */
            type.src = null;
            /** @type {null} */
            src[key] = null;
          }
        } else {
          removeListener(listener);
        }
      }
    }
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function detachEvent(name) {
    return name in args ? args[name] : args[name] = "on" + name;
  }
  /**
   * @param {number} pos
   * @param {Object} array
   * @param {boolean} recurring
   * @param {?} args
   * @return {?}
   */
  function match(pos, array, recurring, args) {
    /** @type {boolean} */
    var ret = true;
    if (pos = $(pos)) {
      if (array = pos.c[array.toString()]) {
        array = array.concat();
        /** @type {number} */
        pos = 0;
        for (;pos < array.length;pos++) {
          var value = array[pos];
          if (value) {
            if (value.aa == recurring) {
              if (!value.N) {
                value = listener(value, args);
                /** @type {boolean} */
                ret = ret && false !== value;
              }
            }
          }
        }
      }
    }
    return ret;
  }
  /**
   * @param {Object} data
   * @param {?} evt
   * @return {?}
   */
  function listener(data, evt) {
    var listener = data.listener;
    var self = data.ba || data.src;
    if (data.$) {
      unbind(data);
    }
    return listener.call(self, evt);
  }
  /**
   * @param {Object} info
   * @param {Array} entry
   * @return {?}
   */
  function process(info, entry) {
    if (info.N) {
      return true;
    }
    if (!forward) {
      var data;
      if (!(data = entry)) {
        a: {
          /** @type {Array} */
          data = ["window", "event"];
          var root = global;
          var options;
          for (;options = data.shift();) {
            if (null != root[options]) {
              root = root[options];
            } else {
              /** @type {null} */
              data = null;
              break a;
            }
          }
          data = root;
        }
      }
      options = data;
      data = new constructor(options, this);
      /** @type {boolean} */
      root = true;
      if (!(0 > options.keyCode || void 0 != options.returnValue)) {
        a: {
          /** @type {boolean} */
          var target = false;
          if (0 == options.keyCode) {
            try {
              /** @type {number} */
              options.keyCode = -1;
              break a;
            } catch (h) {
              /** @type {boolean} */
              target = true;
            }
          }
          if (target || void 0 == options.returnValue) {
            /** @type {boolean} */
            options.returnValue = true;
          }
        }
        /** @type {Array} */
        options = [];
        target = data.c;
        for (;target;target = target.parentNode) {
          options.push(target);
        }
        target = info.type;
        /** @type {number} */
        var i = options.length - 1;
        for (;0 <= i;i--) {
          data.c = options[i];
          var result = match(options[i], target, true, data);
          root = root && result;
        }
        /** @type {number} */
        i = 0;
        for (;i < options.length;i++) {
          data.c = options[i];
          result = match(options[i], target, false, data);
          root = root && result;
        }
      }
      return root;
    }
    return listener(info, new constructor(entry, this));
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function $(obj) {
    obj = obj[key];
    return obj instanceof _ ? obj : null;
  }
  /**
   * @param {Object} callback
   * @return {?}
   */
  function makeIterator(callback) {
    if (isFunction(callback)) {
      return callback;
    }
    if (!callback[CALL]) {
      /**
       * @param {?} e
       * @return {?}
       */
      callback[CALL] = function(e) {
        return callback.handleEvent(e);
      };
    }
    return callback[CALL];
  }
  /**
   * @return {undefined}
   */
  function s() {
    t.call(this);
    this.D = new _(this);
    this.na = this;
    /** @type {null} */
    this.R = null;
  }
  /**
   * @param {Object} ev
   * @param {string} type
   * @return {undefined}
   */
  function callback(ev, type) {
    var codeSegments;
    var item = ev.R;
    if (item) {
      /** @type {Array} */
      codeSegments = [];
      for (;item;item = item.R) {
        codeSegments.push(item);
      }
    }
    item = ev.na;
    /** @type {string} */
    var event = type;
    var originalEvent = event.type || event;
    if (expect(event)) {
      event = new block(event, item);
    } else {
      if (event instanceof block) {
        event.target = event.target || item;
      } else {
        var restoreScript = event;
        event = new block(originalEvent, item);
        require(event, restoreScript);
      }
    }
    /** @type {boolean} */
    restoreScript = true;
    var suiteView;
    if (codeSegments) {
      /** @type {number} */
      var i = codeSegments.length - 1;
      for (;0 <= i;i--) {
        suiteView = event.c = codeSegments[i];
        restoreScript = add(suiteView, originalEvent, true, event) && restoreScript;
      }
    }
    suiteView = event.c = item;
    restoreScript = add(suiteView, originalEvent, true, event) && restoreScript;
    restoreScript = add(suiteView, originalEvent, false, event) && restoreScript;
    if (codeSegments) {
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        suiteView = event.c = codeSegments[i];
        restoreScript = add(suiteView, originalEvent, false, event) && restoreScript;
      }
    }
  }
  /**
   * @param {Date} obj
   * @param {Array} params
   * @param {boolean} recurring
   * @param {?} e
   * @return {?}
   */
  function add(obj, params, recurring, e) {
    params = obj.D.c[String(params)];
    if (!params) {
      return true;
    }
    params = params.concat();
    /** @type {boolean} */
    var rv = true;
    /** @type {number} */
    var i = 0;
    for (;i < params.length;++i) {
      var listener = params[i];
      if (listener && (!listener.N && listener.aa == recurring)) {
        var listenerFn = listener.listener;
        var listenerHandler = listener.ba || listener.src;
        if (listener.$) {
          remove(obj.D, listener);
        }
        /** @type {boolean} */
        rv = false !== listenerFn.call(listenerHandler, e) && rv;
      }
    }
    return rv && 0 != e.ha;
  }
  /**
   * @param {Function} fn
   * @param {number} wait
   * @param {Function} obj
   * @return {?}
   */
  function defer(fn, wait, obj) {
    if (isFunction(fn)) {
      if (obj) {
        fn = bind(fn, obj);
      }
    } else {
      if (fn && "function" == typeof fn.handleEvent) {
        fn = bind(fn.handleEvent, fn);
      } else {
        throw Error("Invalid listener argument");
      }
    }
    return 2147483647 < wait ? -1 : global.setTimeout(fn, wait || 0);
  }
  /**
   * @param {Function} object
   * @return {?}
   */
  function toString(object) {
    /** @type {Array} */
    var values = [];
    parse(new GameState, object, values);
    return values.join("");
  }
  /**
   * @return {undefined}
   */
  function GameState() {
  }
  /**
   * @param {?} parts
   * @param {Function} value
   * @param {Array} values
   * @return {undefined}
   */
  function parse(parts, value, values) {
    if (null == value) {
      values.push("null");
    } else {
      if ("object" == typeof value) {
        if (isArray(value)) {
          /** @type {Function} */
          var i = value;
          value = i.length;
          values.push("[");
          /** @type {string} */
          var part = "";
          /** @type {number} */
          var k = 0;
          for (;k < value;k++) {
            values.push(part);
            parse(parts, i[k], values);
            /** @type {string} */
            part = ",";
          }
          values.push("]");
          return;
        }
        if (value instanceof String || (value instanceof Number || value instanceof Boolean)) {
          /** @type {*} */
          value = value.valueOf();
        } else {
          values.push("{");
          /** @type {string} */
          part = "";
          for (i in value) {
            if (Object.prototype.hasOwnProperty.call(value, i)) {
              k = value[i];
              if ("function" != typeof k) {
                values.push(part);
                quote(i, values);
                values.push(":");
                parse(parts, k, values);
                /** @type {string} */
                part = ",";
              }
            }
          }
          values.push("}");
          return;
        }
      }
      switch(typeof value) {
        case "string":
          quote(value, values);
          break;
        case "number":
          values.push(isFinite(value) && !isNaN(value) ? value : "null");
          break;
        case "boolean":
          values.push(value);
          break;
        case "function":
          break;
        default:
          throw Error("Unknown type: " + typeof value);;
      }
    }
  }
  /**
   * @param {string} s
   * @param {Array} string
   * @return {undefined}
   */
  function quote(s, string) {
    string.push('"', s.replace(rSlash, function(a) {
      var v = array[a];
      if (!v) {
        /** @type {string} */
        v = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1);
        /** @type {string} */
        array[a] = v;
      }
      return v;
    }), '"');
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function validate(str) {
    if ("function" == typeof str.J) {
      return str.J();
    }
    if (expect(str)) {
      return str.split("");
    }
    if (append(str)) {
      /** @type {Array} */
      var result = [];
      var len = str.length;
      /** @type {number} */
      var startIndex = 0;
      for (;startIndex < len;startIndex++) {
        result.push(str[startIndex]);
      }
      return result;
    }
    return(0,eval)(str);
  }
  /**
   * @param {Object} data
   * @param {Function} fn
   * @return {undefined}
   */
  function _send(data, fn) {
    if ("function" == typeof data.forEach) {
      data.forEach(fn, void 0);
    } else {
      if (append(data) || expect(data)) {
        forEach(data, fn, void 0);
      } else {
        var cache;
        if ("function" == typeof data.I) {
          cache = data.I();
        } else {
          if ("function" != typeof data.J) {
            if (append(data) || expect(data)) {
              /** @type {Array} */
              cache = [];
              var items = data.length;
              /** @type {number} */
              var i = 0;
              for (;i < items;i++) {
                cache.push(i);
              }
            } else {
              cache = _each(data);
            }
          } else {
            cache = void 0;
          }
        }
        items = validate(data);
        i = items.length;
        /** @type {number} */
        var k = 0;
        for (;k < i;k++) {
          fn.call(void 0, items[k], cache && cache[k], data);
        }
      }
    }
  }
  /**
   * @param {Object} data
   * @param {?} m44
   * @return {undefined}
   */
  function Matrix(data, m44) {
    this.f = {};
    /** @type {Array} */
    this.c = [];
    /** @type {number} */
    this.i = this.h = 0;
    /** @type {number} */
    var n = arguments.length;
    if (1 < n) {
      if (n % 2) {
        throw Error("Uneven number of arguments");
      }
      /** @type {number} */
      var j = 0;
      for (;j < n;j += 2) {
        wrap(this, arguments[j], arguments[j + 1]);
      }
    } else {
      if (data) {
        if (data instanceof Matrix) {
          n = data.I();
          j = data.J();
        } else {
          n = _each(data);
          j = (0,eval)(data);
        }
        /** @type {number} */
        var i = 0;
        for (;i < n.length;i++) {
          wrap(this, n[i], j[i]);
        }
      }
    }
  }
  /**
   * @param {Object} x
   * @return {undefined}
   */
  function call(x) {
    if (x.h != x.c.length) {
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var len = 0;
      for (;i < x.c.length;) {
        var alias = x.c[i];
        if (hasOwnProperty(x.f, alias)) {
          x.c[len++] = alias;
        }
        i++;
      }
      /** @type {number} */
      x.c.length = len;
    }
    if (x.h != x.c.length) {
      var result = {};
      /** @type {number} */
      len = i = 0;
      for (;i < x.c.length;) {
        alias = x.c[i];
        if (!hasOwnProperty(result, alias)) {
          x.c[len++] = alias;
          /** @type {number} */
          result[alias] = 1;
        }
        i++;
      }
      /** @type {number} */
      x.c.length = len;
    }
  }
  /**
   * @param {?} object
   * @param {string} key
   * @return {?}
   */
  function keys(object, key) {
    return hasOwnProperty(object.f, key) ? object.f[key] : void 0;
  }
  /**
   * @param {Object} item
   * @param {string} k
   * @param {?} value
   * @return {undefined}
   */
  function wrap(item, k, value) {
    if (!hasOwnProperty(item.f, k)) {
      item.h++;
      item.c.push(k);
      item.i++;
    }
    item.f[k] = value;
  }
  /**
   * @param {?} object
   * @param {string} prop
   * @return {?}
   */
  function hasOwnProperty(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
  }
  /**
   * @param {?} key
   * @param {Function} msg
   * @param {?} deepDataAndEvents
   * @param {?} walkers
   * @param {?} next
   * @return {undefined}
   */
  function b(key, msg, deepDataAndEvents, walkers, next) {
    this.reset(key, msg, deepDataAndEvents, walkers, next);
  }
  /**
   * @param {?} i
   * @return {undefined}
   */
  function Buffer(i) {
    this.i = i;
    /** @type {null} */
    this.h = this.c = this.f = null;
  }
  /**
   * @param {string} name
   * @param {?} val
   * @return {undefined}
   */
  function self(name, val) {
    /** @type {string} */
    this.name = name;
    this.value = val;
  }
  /**
   * @param {Object} fn
   * @return {?}
   */
  function has(fn) {
    if (fn.c) {
      return fn.c;
    }
    if (fn.f) {
      return has(fn.f);
    }
    report("Root logger has no level set.");
    return null;
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function decode(key) {
    if (!source) {
      source = new Buffer("");
      object[""] = source;
      source.c = err;
    }
    var value;
    if (!(value = object[key])) {
      value = new Buffer(key);
      var s = key.lastIndexOf(".");
      var name = key.substr(s + 1);
      s = decode(key.substr(0, s));
      if (!s.h) {
        s.h = {};
      }
      s.h[name] = value;
      value.f = s;
      object[key] = value;
    }
    return value;
  }
  /**
   * @param {?} args
   * @param {?} context
   * @return {undefined}
   */
  function each(args, context) {
    if (args) {
      args.log(event, context, void 0);
    }
  }
  /**
   * @return {undefined}
   */
  function recordType() {
  }
  /**
   * @param {Object} result
   * @return {?}
   */
  function successCallback(result) {
    var context;
    if (!(context = result.c)) {
      context = {};
      if (emit(result)) {
        /** @type {boolean} */
        context[0] = true;
        /** @type {boolean} */
        context[1] = true;
      }
      context = result.c = context;
    }
    return context;
  }
  /**
   * @return {undefined}
   */
  function suiteView() {
  }
  /**
   * @param {string} result
   * @return {?}
   */
  function request(result) {
    return(result = emit(result)) ? new ActiveXObject(result) : new XMLHttpRequest;
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function emit(obj) {
    if (!obj.f && ("undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject)) {
      /** @type {Array} */
      var codeSegments = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var id = codeSegments[i];
        try {
          return new ActiveXObject(id), obj.f = id;
        } catch (f) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return obj.f;
  }
  /**
   * @param {string} options
   * @return {?}
   */
  function redirect(options) {
    if (YYSTATE) {
      /** @type {boolean} */
      YYSTATE = false;
      var location = global.location;
      if (location) {
        var url = location.href;
        if (url && ((url = (url = redirect(url)[3] || null) ? decodeURI(url) : url) && url != location.hostname)) {
          throw YYSTATE = true, Error();
        }
      }
    }
    return options.match(core_rnotwhite);
  }
  /**
   * @param {string} qs
   * @param {Function} toString
   * @return {undefined}
   */
  function parseQuery(qs, toString) {
    var matches = qs.split("&");
    /** @type {number} */
    var i = 0;
    for (;i < matches.length;i++) {
      var indexOfEquals = matches[i].indexOf("=");
      /** @type {null} */
      var name = null;
      /** @type {null} */
      var param = null;
      if (0 <= indexOfEquals) {
        name = matches[i].substring(0, indexOfEquals);
        param = matches[i].substring(indexOfEquals + 1);
      } else {
        name = matches[i];
      }
      toString(name, param ? decodeURIComponent(param.replace(/\+/g, " ")) : "");
    }
  }
  /**
   * @param {string} haystack
   * @return {?}
   */
  function endsWith(haystack) {
    /** @type {string} */
    var baseName = "getPrinters";
    if (0 <= haystack.indexOf("#") || 0 <= haystack.indexOf("?")) {
      throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + haystack + "]");
    }
    /** @type {number} */
    var pos = haystack.length - 1;
    if (0 <= pos) {
      if (haystack.indexOf("/", pos) == pos) {
        haystack = haystack.substr(0, haystack.length - 1);
      }
    }
    if (0 == baseName.lastIndexOf("/", 0)) {
      /** @type {string} */
      baseName = baseName.substr(1);
    }
    return objectToString(haystack, "/", baseName);
  }
  /**
   * @param {string} formatString
   * @return {undefined}
   */
  function format(formatString) {
    s.call(this);
    this.qa = new Matrix;
    this.M = formatString || null;
    /** @type {boolean} */
    this.f = false;
    /** @type {null} */
    this.H = this.c = null;
    /** @type {string} */
    this.m = this.Z = this.o = "";
    /** @type {boolean} */
    this.h = this.P = this.s = this.O = false;
    /** @type {number} */
    this.i = 0;
    /** @type {null} */
    this.G = null;
    /** @type {string} */
    this.F = tab;
    /** @type {boolean} */
    this.B = this.ra = false;
  }
  /**
   * @param {string} value
   * @param {Function} selector
   * @param {string} data
   * @param {string} query
   * @return {undefined}
   */
  function execute(value, selector, data, query) {
    var r = new format;
    list.push(r);
    if (selector) {
      on(r.D, "complete", selector, false, void 0, void 0);
    }
    on(r.D, "ready", r.wa, true, void 0, void 0);
    /** @type {number} */
    r.i = Math.max(0, 3E3);
    r.send(value, data, query, void 0);
  }
  /**
   * @param {?} options
   * @return {?}
   */
  function ajax(options) {
    return isIE && (init(9) && (is(options.timeout) && void 0 !== options.ontimeout));
  }
  /**
   * @param {Object} str
   * @return {?}
   */
  function isEmpty(str) {
    return "content-type" == str.toLowerCase();
  }
  /**
   * @param {Object} e
   * @param {?} data
   * @return {undefined}
   */
  function completed(e, data) {
    /** @type {boolean} */
    e.f = false;
    if (e.c) {
      /** @type {boolean} */
      e.h = true;
      e.c.abort();
      /** @type {boolean} */
      e.h = false;
    }
    e.m = data;
    onload(e);
    ready(e);
  }
  /**
   * @param {Object} error
   * @return {undefined}
   */
  function onload(error) {
    if (!error.O) {
      /** @type {boolean} */
      error.O = true;
      callback(error, "complete");
      callback(error, "error");
    }
  }
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function done(e) {
    if (e.f && "undefined" != typeof io) {
      if (e.H[1] && (4 == posFromMouse(e) && 2 == e.w())) {
        each(e.v, join(e, "Local request error detected and ignored"));
      } else {
        if (e.s && 4 == posFromMouse(e)) {
          defer(e.ga, 0, e);
        } else {
          if (callback(e, "readystatechange"), 4 == posFromMouse(e)) {
            each(e.v, join(e, "Request complete"));
            /** @type {boolean} */
            e.f = false;
            try {
              if (getTarget(e)) {
                callback(e, "complete");
                callback(e, "success");
              } else {
                var expires;
                try {
                  expires = 2 < posFromMouse(e) ? e.c.statusText : "";
                } catch (ex) {
                  each(e.v, "Can not get status: " + ex.message);
                  /** @type {string} */
                  expires = "";
                }
                /** @type {string} */
                e.m = expires + " [" + e.w() + "]";
                onload(e);
              }
            } finally {
              ready(e);
            }
          }
        }
      }
    }
  }
  /**
   * @param {Object} options
   * @param {boolean} wait
   * @return {undefined}
   */
  function ready(options, wait) {
    if (options.c) {
      req(options);
      var transport = options.c;
      /** @type {(function (): undefined|null)} */
      var logError = options.H[0] ? noop : null;
      /** @type {null} */
      options.c = null;
      /** @type {null} */
      options.H = null;
      if (!wait) {
        callback(options, "ready");
      }
      try {
        /** @type {(function (): undefined|null)} */
        transport.onreadystatechange = logError;
      } catch (ex) {
        if (transport = options.v) {
          transport.log(level, "Problem encountered resetting onreadystatechange: " + ex.message, void 0);
        }
      }
    }
  }
  /**
   * @param {Object} options
   * @return {undefined}
   */
  function req(options) {
    if (options.c) {
      if (options.B) {
        /** @type {null} */
        options.c.ontimeout = null;
      }
    }
    if (is(options.G)) {
      global.clearTimeout(options.G);
      /** @type {null} */
      options.G = null;
    }
  }
  /**
   * @param {string} v
   * @return {?}
   */
  function getTarget(v) {
    var mat = v.w();
    var dest;
    a: {
      switch(mat) {
        case 200:
        ;
        case 201:
        ;
        case 202:
        ;
        case 204:
        ;
        case 206:
        ;
        case 304:
        ;
        case 1223:
          /** @type {boolean} */
          dest = true;
          break a;
        default:
          /** @type {boolean} */
          dest = false;
      }
    }
    if (!dest) {
      if (mat = 0 === mat) {
        v = redirect(String(v.o))[1] || null;
        if (!v) {
          if (self.location) {
            /** @type {string} */
            v = self.location.protocol;
            /** @type {string} */
            v = v.substr(0, v.length - 1);
          }
        }
        /** @type {boolean} */
        mat = !rchecked.test(v ? v.toLowerCase() : "");
      }
      /** @type {boolean} */
      dest = mat;
    }
    return dest;
  }
  /**
   * @param {Object} e
   * @return {?}
   */
  function posFromMouse(e) {
    return e.c ? e.c.readyState : 0;
  }
  /**
   * @param {Object} e
   * @return {?}
   */
  function get(e) {
    try {
      if (!e.c) {
        return null;
      }
      if ("response" in e.c) {
        return e.c.response;
      }
      switch(e.F) {
        case tab:
        ;
        case "text":
          return e.c.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in e.c) {
            return e.c.mozResponseArrayBuffer;
          }
        ;
      }
      var that = e.v;
      if (that) {
        that.log(level, "Response type " + e.F + " is not supported on this browser", void 0);
      }
      return null;
    } catch (ex) {
      return each(e.v, "Can not get response: " + ex.message), null;
    }
  }
  /**
   * @param {Object} pos
   * @param {string} separator2
   * @return {?}
   */
  function join(pos, separator2) {
    return separator2 + " [" + pos.Z + " " + pos.o + " " + pos.w() + "]";
  }
  /**
   * @param {Object} data
   * @param {Object} map
   * @return {undefined}
   */
  function Node(data, map) {
    /** @type {string} */
    this.c = this.o = this.i = "";
    /** @type {null} */
    this.s = null;
    /** @type {string} */
    this.l = this.f = "";
    /** @type {boolean} */
    this.m = false;
    var segmentMatch;
    if (data instanceof Node) {
      this.m = void 0 !== map ? map : data.m;
      reset(this, data.i);
      this.o = data.o;
      this.c = data.c;
      parseColor(this, data.s);
      this.f = data.f;
      setData(this, data.h.clone());
      this.l = data.l;
    } else {
      if (data && (segmentMatch = redirect(String(data)))) {
        /** @type {boolean} */
        this.m = !!map;
        reset(this, segmentMatch[1] || "", true);
        this.o = parseUri(segmentMatch[2] || "");
        this.c = parseUri(segmentMatch[3] || "", true);
        parseColor(this, segmentMatch[4]);
        this.f = parseUri(segmentMatch[5] || "", true);
        setData(this, segmentMatch[6] || "", true);
        this.l = parseUri(segmentMatch[7] || "");
      } else {
        /** @type {boolean} */
        this.m = !!map;
        this.h = new Element(null, 0, this.m);
      }
    }
  }
  /**
   * @param {?} input
   * @param {Object} name
   * @param {boolean} value
   * @return {undefined}
   */
  function reset(input, name, value) {
    input.i = value ? parseUri(name, true) : name;
    if (input.i) {
      input.i = input.i.replace(/:$/, "");
    }
  }
  /**
   * @param {?} dataAndEvents
   * @param {number} g
   * @return {undefined}
   */
  function parseColor(dataAndEvents, g) {
    if (g) {
      /** @type {number} */
      g = Number(g);
      if (isNaN(g) || 0 > g) {
        throw Error("Bad port number " + g);
      }
      /** @type {number} */
      dataAndEvents.s = g;
    } else {
      /** @type {null} */
      dataAndEvents.s = null;
    }
  }
  /**
   * @param {Object} o
   * @param {Object} name
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  function setData(o, name, dataAndEvents) {
    if (name instanceof Element) {
      /** @type {Object} */
      o.h = name;
      one(o.h, o.m);
    } else {
      if (!dataAndEvents) {
        name = escapeHTML(name, rreturn);
      }
      o.h = new Element(name, 0, o.m);
    }
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function number(obj) {
    return obj instanceof Node ? obj.clone() : new Node(obj, void 0);
  }
  /**
   * @param {Object} v
   * @param {Object} a
   * @return {?}
   */
  function fn(v, a) {
    if (!(v instanceof Node)) {
      v = number(v);
    }
    if (!(a instanceof Node)) {
      a = number(a);
    }
    /** @type {Object} */
    var value = v;
    /** @type {Object} */
    var data = a;
    var node = value.clone();
    /** @type {boolean} */
    var webm = !!data.i;
    if (webm) {
      reset(node, data.i);
    } else {
      /** @type {boolean} */
      webm = !!data.o;
    }
    if (webm) {
      node.o = data.o;
    } else {
      /** @type {boolean} */
      webm = !!data.c;
    }
    if (webm) {
      node.c = data.c;
    } else {
      /** @type {boolean} */
      webm = null != data.s;
    }
    var s = data.f;
    if (webm) {
      parseColor(node, data.s);
    } else {
      if (webm = !!data.f) {
        if ("/" != s.charAt(0) && (value.c && !value.f ? s = "/" + s : (value = node.f.lastIndexOf("/"), -1 != value && (s = node.f.substr(0, value + 1) + s))), value = s, ".." == value || "." == value) {
          /** @type {string} */
          s = "";
        } else {
          if (isType(value, "./") || isType(value, "/.")) {
            /** @type {boolean} */
            s = 0 == value.lastIndexOf("/", 0);
            value = value.split("/");
            /** @type {Array} */
            var out = [];
            /** @type {number} */
            var pos = 0;
            for (;pos < value.length;) {
              var copies = value[pos++];
              if ("." == copies) {
                if (s) {
                  if (pos == value.length) {
                    out.push("");
                  }
                }
              } else {
                if (".." == copies) {
                  if (1 < out.length || 1 == out.length && "" != out[0]) {
                    out.pop();
                  }
                  if (s) {
                    if (pos == value.length) {
                      out.push("");
                    }
                  }
                } else {
                  out.push(copies);
                  /** @type {boolean} */
                  s = true;
                }
              }
            }
            /** @type {string} */
            s = out.join("/");
          } else {
            s = value;
          }
        }
      }
    }
    if (webm) {
      node.f = s;
    } else {
      /** @type {boolean} */
      webm = "" !== data.h.toString();
    }
    if (webm) {
      setData(node, parseUri(data.h.toString()));
    } else {
      /** @type {boolean} */
      webm = !!data.l;
    }
    if (webm) {
      node.l = data.l;
    }
    return node;
  }
  /**
   * @param {boolean} str
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function parseUri(str, dataAndEvents) {
    return str ? dataAndEvents ? decodeURI(str.replace(/%25/g, "%2525")) : decodeURIComponent(str) : "";
  }
  /**
   * @param {string} str
   * @param {RegExp} regex
   * @param {Object} dataAndEvents
   * @return {?}
   */
  function escapeHTML(str, regex, dataAndEvents) {
    return expect(str) ? (str = encodeURI(str).replace(regex, _char), dataAndEvents && (str = str.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), str) : null;
  }
  /**
   * @param {string} n
   * @return {?}
   */
  function _char(n) {
    n = n.charCodeAt(0);
    return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
  }
  /**
   * @param {Node} index
   * @param {?} value
   * @param {?} elementName
   * @return {undefined}
   */
  function Element(index, value, elementName) {
    /** @type {null} */
    this.h = this.c = null;
    this.f = index || null;
    /** @type {boolean} */
    this.i = !!elementName;
  }
  /**
   * @param {Object} x
   * @return {undefined}
   */
  function next(x) {
    if (!x.c) {
      x.c = new Matrix;
      /** @type {number} */
      x.h = 0;
      if (x.f) {
        parseQuery(x.f, function(messageFormat, prop) {
          /** @type {string} */
          var key = decodeURIComponent(messageFormat.replace(/\+/g, " "));
          next(x);
          /** @type {null} */
          x.f = null;
          key = iterator(x, key);
          var props = keys(x.c, key);
          if (!props) {
            wrap(x.c, key, props = []);
          }
          props.push(prop);
          x.h++;
        });
      }
    }
  }
  /**
   * @param {Object} a
   * @param {string} i
   * @return {undefined}
   */
  function iter(a, i) {
    next(a);
    i = iterator(a, i);
    if (hasOwnProperty(a.c.f, i)) {
      /** @type {null} */
      a.f = null;
      a.h -= keys(a.c, i).length;
      var c = a.c;
      if (hasOwnProperty(c.f, i)) {
        delete c.f[i];
        c.h--;
        c.i++;
        if (c.c.length > 2 * c.h) {
          call(c);
        }
      }
    }
  }
  /**
   * @param {Object} obj
   * @param {string} value
   * @param {?} b
   * @return {undefined}
   */
  function invoke(obj, value, b) {
    iter(obj, value);
    if (0 < b.length) {
      /** @type {null} */
      obj.f = null;
      var c = obj.c;
      value = iterator(obj, value);
      var pdataOld;
      pdataOld = b.length;
      if (0 < pdataOld) {
        /** @type {Array} */
        var a = Array(pdataOld);
        /** @type {number} */
        var key = 0;
        for (;key < pdataOld;key++) {
          a[key] = b[key];
        }
        /** @type {Array} */
        pdataOld = a;
      } else {
        /** @type {Array} */
        pdataOld = [];
      }
      wrap(c, value, pdataOld);
      obj.h += b.length;
    }
  }
  /**
   * @param {Object} obj
   * @param {string} value
   * @return {?}
   */
  function iterator(obj, value) {
    /** @type {string} */
    var str = String(value);
    if (obj.i) {
      /** @type {string} */
      str = str.toLowerCase();
    }
    return str;
  }
  /**
   * @param {Object} e
   * @param {?} idx
   * @return {undefined}
   */
  function one(e, idx) {
    if (idx) {
      if (!e.i) {
        next(e);
        /** @type {null} */
        e.f = null;
        e.c.forEach(function(_super, classNames) {
          var udataCur = classNames.toLowerCase();
          if (classNames != udataCur) {
            iter(this, classNames);
            invoke(this, udataCur, _super);
          }
        }, e);
      }
    }
    e.i = idx;
  }
  /**
   * @return {?}
   */
  function writer() {
    setCookie("testCookie", "test", 1);
    return "test" == fnReadCookie("testCookie");
  }
  /**
   * @param {string} name
   * @param {string} value
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  function setCookie(name, value, expectedNumberOfNonCommentArgs) {
    /** @type {Date} */
    var expires = new Date;
    expires.setTime(expires.getTime() + 864E5 * expectedNumberOfNonCommentArgs);
    /** @type {string} */
    document.cookie = name + "=" + value + "; " + ("expires=" + expires.toUTCString());
  }
  /**
   * @param {string} delimiter
   * @return {?}
   */
  function fnReadCookie(delimiter) {
    /** @type {string} */
    delimiter = delimiter + "=";
    /** @type {Array.<string>} */
    var codeSegments = document.cookie.split(";");
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {string} */
      var cookie = codeSegments[i];
      for (;" " == cookie.charAt(0);) {
        /** @type {string} */
        cookie = cookie.substring(1);
      }
      if (0 == cookie.indexOf(delimiter)) {
        return cookie.substring(delimiter.length, cookie.length);
      }
    }
    return "";
  }
  /**
   * @param {(Array|string)} data
   * @return {undefined}
   */
  function changeState(data) {
    if (window.localStorage) {
      if (data) {
        /** @type {(Array|string)} */
        window.localStorage.ServicePort = data;
      } else {
        try {
          delete window.localStorage.ServicePort;
        } catch (b) {
        }
      }
    } else {
      if (writer()) {
        if (data) {
          setCookie("ServicePort", data, 100);
        } else {
          setCookie("ServicePort", "", 100);
        }
      } else {
        /** @type {(Array|string)} */
        window.c = data;
      }
    }
  }
  /**
   * @return {?}
   */
  function write() {
    return window.localStorage ? window.localStorage.ServicePort : writer() ? fnReadCookie("ServicePort") : window.c;
  }
  /**
   * @param {string} url
   * @param {Object} params
   * @param {string} method
   * @return {?}
   */
  function send(url, params, method) {
    var req;
    if ("undefined" !== typeof XMLHttpRequest) {
      /** @type {XMLHttpRequest} */
      req = new XMLHttpRequest;
    } else {
      /** @type {Array.<string>} */
      req = "MSXML2.XmlHttp.6.0 MSXML2.XmlHttp.5.0 MSXML2.XmlHttp.4.0 MSXML2.XmlHttp.3.0 MSXML2.XmlHttp.2.0 Microsoft.XmlHttp".split(" ");
      var ret;
      /** @type {number} */
      var i = 0;
      for (;i < req.length;i++) {
        try {
          ret = new ActiveXObject(req[i]);
          break;
        } catch (h) {
        }
      }
      req = ret;
    }
    /** @type {Array} */
    ret = [];
    /** @type {null} */
    i = null;
    var key;
    for (key in params) {
      ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
    if ("POST" == method) {
      /** @type {string} */
      i = ret.length ? ret.join("&") : "";
    } else {
      url += ret.length ? "?" + ret.join("&") : "";
    }
    req.open(method || "GET", url, false);
    if ("POST" == method) {
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    req.send(i);
    if (200 != req.status) {
      throw Error("Failed to execute webservice command: " + req.status + ": " + req.statusText);
    }
    return req.responseText;
  }
  /**
   * @param {Function} callback
   * @param {Function} func
   * @return {undefined}
   */
  function poll(callback, func) {
    var err = write();
    log("checkEnvironment > cachedWebPort : " + err);
    log("checkEnvironment > trying async service discovery");
    if (err) {
      execute(URL + "/DYMO/DLS/Printing/StatusConnected", function(e) {
        if (getTarget(e.target)) {
          callback();
        } else {
          changeState(null);
          initialize(callback, func);
        }
      }, "GET", void 0);
    } else {
      initialize(callback, func);
    }
  }
  /**
   * @param {Function} callback
   * @param {Function} request
   * @return {undefined}
   */
  function close(callback, request) {
    var data = write();
    log("checkEnvironment > cachedWebPort : " + data);
    log("checkEnvironment > trying synchronous service discovery");
    data = data || 41951;
    var value;
    try {
      /** @type {boolean} */
      value = "true" === send(URL + "/DYMO/DLS/Printing/StatusConnected", {}, "GET");
    } catch (f) {
      /** @type {boolean} */
      value = false;
    }
    if (value) {
      log("checkEnvironment > web service found at port :" + data);
      changeState(data);
      callback();
      if (!Vd) {
        error.c();
      }
    } else {
      changeState(null);
      request();
    }
  }
  /**
   * @param {Function} callback
   * @param {Function} test
   * @return {undefined}
   */
  function initialize(callback, test) {
    
    /** @type {Array} */
    var paths = [];
    /** @type {number} */
    var after = 41951;
    for (;41960 >= after;++after) {
      paths.push(template(after));
    }
    build(paths).then(function() {
      test();
    }).ja(function(data) {
      if (is(data)) {
        changeState(data);
        callback();
      } else {
        test();
      }
    });
  }
  /**
   * @param {number} text
   * @return {?}
   */
  function template(text) {
    /** @type {string} */
    var udataCur = URL + "/DYMO/DLS/Printing/StatusConnected";
    return new val(function(print, success) {
      execute(udataCur, function(e) {
        if (getTarget(e.target)) {
          success(text);
        } else {
          print(text);
        }
      }, "GET", void 0);
    });
  }
  /**
   * @param {string} method
   * @param {string} tElement
   * @param {?} opt_attributes
   * @return {?}
   */
  function compile(method, tElement, opt_attributes) {
    /** @type {string} */
    var udataCur = URL + "/DYMO/DLS/Printing/" + tElement;
    return new val(function(behavior, callback) {
      /** @type {Array} */
      var attrList = [];
      /** @type {null} */
      var params = null;
      var key;
      for (key in opt_attributes) {
        attrList.push(encodeURIComponent(key) + "=" + encodeURIComponent(opt_attributes[key]));
      }
      if ("POST" == method) {
        /** @type {string} */
        params = attrList.length ? attrList.join("&") : "";
      } else {
        udataCur += attrList.length ? "?" + attrList.join("&") : "";
      }
      execute(udataCur, function(result) {
        var value = result.target;
        /** @type {null} */
        result = null;
        if (getTarget(value)) {
          value = get(value);
          try {
            /** @type {*} */
            result = window.JSON.parse(value);
          } catch (e) {
            result = value;
          }
          behavior(result);
        } else {
          result = "Failed to execute webservice command: " + tElement + ". Error: " + value.w();
          log("invokeWsCommandAsync > " + result);
          callback(Error(result));
        }
      }, method || "GET", params);
    });
  }
  /**
   * @param {string} data
   * @param {string} name
   * @param {?} opt_attributes
   * @return {?}
   */
  function _data(data, name, opt_attributes) {
    var newsdp = write();
    data = send(URL + "/DYMO/DLS/Printing/" + name, opt_attributes, data);
    try {
      return window.JSON.parse(data);
    } catch (f) {
      return data;
    }
  }
  /**
   * @return {undefined}
   */
  function X() {
    /**
     * @return {?}
     */
    this.getPrinters = function() {
      return _data("GET", "GetPrinters", {});
    };
    /**
     * @param {number} types
     * @return {?}
     */
    this.openLabelFile = function(types) {
      return _data("GET", "OpenLabelFile", {
        fileName : types
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @param {string} v23
     * @return {?}
     */
    this.printLabel = function(types, m, object, v23) {
      return _data("POST", "PrintLabel", {
        printerName : types,
        printParamsXml : m,
        labelXml : object,
        labelSetXml : v23
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @param {string} v23
     * @return {?}
     */
    this.printLabel2 = function(types, m, object, v23) {
      return _data("POST", "PrintLabel2", {
        printerName : types,
        printParamsXml : m,
        labelXml : object,
        labelSetXml : v23
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @return {?}
     */
    this.renderLabel = function(types, m, object) {
      return _data("POST", "RenderLabel", {
        labelXml : types,
        renderParamsXml : m,
        printerName : object
      });
    };
    /**
     * @param {number} types
     * @return {?}
     */
    this.loadImageAsPngBase64 = function(types) {
      return _data("GET", "LoadImageAsPngBase64", {
        imageUri : types
      });
    };
    /**
     * @return {?}
     */
    this.T = function() {
      return compile("GET", "GetPrinters", {});
    };
    /**
     * @param {number} types
     * @return {?}
     */
    this.V = function(types) {
      return compile("GET", "OpenLabelFile", {
        fileName : types
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @param {string} v23
     * @return {?}
     */
    this.X = function(types, m, object, v23) {
      return compile("POST", "PrintLabel", {
        printerName : types,
        printParamsXml : m,
        labelXml : object,
        labelSetXml : v23
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @param {string} v23
     * @return {?}
     */
    this.W = function(types, m, object, v23) {
      return compile("POST", "PrintLabel2", {
        printerName : types,
        printParamsXml : m,
        labelXml : object,
        labelSetXml : v23
      });
    };
    /**
     * @param {number} types
     * @param {string} m
     * @param {string} object
     * @return {?}
     */
    this.Y = function(types, m, object) {
      return compile("POST", "RenderLabel", {
        labelXml : types,
        renderParamsXml : m,
        printerName : object
      });
    };
    /**
     * @param {number} types
     * @return {?}
     */
    this.U = function(types) {
      return compile("GET", "LoadImageAsPngBase64", {
        imageUri : types
      });
    };
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function parseXML(data) {
    if ("undefined" != typeof DOMParser) {
      return(new DOMParser).parseFromString(data, "application/xml");
    }
    if ("undefined" != typeof ActiveXObject) {
      var doc = new ActiveXObject("MSXML2.DOMDocument");
      if (doc) {
        /** @type {boolean} */
        doc.resolveExternals = false;
        /** @type {boolean} */
        doc.validateOnParse = false;
        try {
          doc.setProperty("ProhibitDTD", true);
          doc.setProperty("MaxXMLSize", 2048);
          doc.setProperty("MaxElementDepth", 256);
        } catch (d) {
        }
      }
      doc.loadXML(data);
      return doc;
    }
    throw Error("Your browser does not support loading xml documents");
  }
  /**
   * @param {?} data
   * @return {?}
   */
  function parseString(data) {
    if ("undefined" != typeof XMLSerializer) {
      return(new XMLSerializer).serializeToString(data);
    }
    if (data = data.xml) {
      return data;
    }
    throw Error("Your browser does not support serializing XML documents");
  }
  /**
   * @param {Node} element
   * @param {Node} n
   * @param {?} node
   * @param {Object} inAttrs
   * @return {undefined}
   */
  function numberLines(element, n, node, inAttrs) {
    n = element.ownerDocument.createElement(n);
    if (node) {
      n.appendChild(element.ownerDocument.createTextNode(node));
    }
    if (inAttrs) {
      var i;
      for (i in inAttrs) {
        n.setAttribute(i, inAttrs[i]);
      }
    }
    element.appendChild(n);
  }
  /**
   * @param {(Function|string)} obj
   * @return {?}
   */
  function stringify(obj) {
    if (obj) {
      /** @type {Array} */
      var parent = [];
      walk(obj, parent, false);
      /** @type {string} */
      obj = parent.join("");
    } else {
      /** @type {string} */
      obj = "";
    }
    return obj;
  }
  /**
   * @param {Object} obj
   * @param {string} name
   * @return {?}
   */
  function createElement(obj, name) {
    var array = obj.getElementsByTagName(name);
    if (0 < array.length) {
      return array[0];
    }
  }
  /**
   * @param {Node} el
   * @param {?} text
   * @return {undefined}
   */
  function merge(el, text) {
    for (;el.firstChild;) {
      el.removeChild(el.firstChild);
    }
    el.appendChild(el.ownerDocument.createTextNode(text));
  }
  /**
   * @return {undefined}
   */
  function res() {
    /** @type {Array} */
    this.c = [];
  }
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  function render(codeSegments) {
    var xml = parseXML("<LabelSet/>");
    var doc = xml.documentElement;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var types = codeSegments[i];
      var tt = xml.createElement("LabelRecord");
      var type;
      for (type in types) {
        var data = types[type];
        if ("function" != typeof data) {
          data = data.toString();
          var node = xml.createElement("ObjectData");
          node.setAttribute("Name", type);
          if (0 == data.indexOf("<TextMarkup>")) {
            data = parseXML(data);
            node.appendChild(data.documentElement.cloneNode(true));
          } else {
            node.appendChild(xml.createTextNode(data));
          }
          tt.appendChild(node);
        }
      }
      doc.appendChild(tt);
    }
    return parseString(xml);
  }
  /**
   * @return {undefined}
   */
  function options() {
  }
  /**
   * @param {string} xml
   * @return {undefined}
   */
  function item(xml) {
    this.f = parseXML(xml);
  }
  /**
   * @param {Object} fn
   * @param {Array} param
   * @return {?}
   */
  function apply(fn, param) {
    var ret = param || common;
    return attach(fn.f.documentElement, function(node) {
      return 1 == node.nodeType && 0 <= indexOf(ret, node.tagName);
    });
  }
  /**
   * @param {Object} name
   * @param {number} $conditional
   * @return {?}
   */
  function mixin(name, $conditional) {
    return apply(name, ["AddressObject"])[$conditional];
  }
  /**
   * @param {Object} value
   * @param {string} d
   * @return {?}
   */
  function convert(value, d) {
    var codeSegments = apply(value);
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var key = codeSegments[i];
      if (stringify(createElement(key, "Name")) == d) {
        return key;
      }
    }
    throw Error("getObjectByNameElement(): no object with name '" + d + "' was found");
  }
  /**
   * @param {Object} element
   * @return {?}
   */
  function contains(element) {
    return some(createElement(element, "StyledText").getElementsByTagName("String"), function(prefix, actual) {
      return prefix + stringify(actual);
    }, "");
  }
  /**
   * @param {?} now
   * @param {Array} a
   * @param {string} events
   * @return {?}
   */
  function set(now, a, events) {
    var el = createElement(a, "StyledText");
    /** @type {Array} */
    var codeSegments = [];
    var element;
    element = el.getElementsByTagName("Element");
    /** @type {boolean} */
    var html = true;
    /** @type {number} */
    var i = 0;
    for (;i < element.length;i++) {
      var node = element[i];
      var value = stringify(createElement(node, "String"));
      if (value && value.length) {
        value = value.split("\n");
        var o = value.length;
        if (1 != o || html) {
          /** @type {number} */
          var e = 0;
          if (!html) {
            /** @type {number} */
            e = 1;
          }
          html = createElement(node, "Attributes");
          for (;e < o - 1;e++) {
            codeSegments.push(html);
          }
          if (0 < value[o - 1].length) {
            codeSegments.push(html);
            /** @type {boolean} */
            html = false;
          } else {
            /** @type {boolean} */
            html = true;
          }
        }
      }
    }
    element = createElement(a, "LineFonts");
    /** @type {Array} */
    a = [];
    if (element) {
      a = element.getElementsByTagName("Font");
    }
    var data;
    if (0 == a.length) {
      data = parseXML('<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />').documentElement;
    }
    element = parseXML('<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />').documentElement;
    for (;el.firstChild;) {
      el.removeChild(el.firstChild);
    }
    events = events.split("\n");
    /** @type {number} */
    i = 0;
    for (;i < events.length;i++) {
      e = events[i].replace("\r", "");
      if (i < events.length - 1) {
        e += "\n";
      }
      html = data;
      if (0 < a.length) {
        html = i < a.length ? a[i] : a[a.length - 1];
      } else {
        if (0 < codeSegments.length) {
          html = i < codeSegments.length ? createElement(codeSegments[i], "Font") : createElement(codeSegments[codeSegments.length - 1], "Font");
        }
      }
      node = element;
      if (i < codeSegments.length) {
        node = createElement(codeSegments[i], "ForeColor");
      }
      value = el.ownerDocument.createElement("Element");
      o = el.ownerDocument.createElement("String");
      merge(o, e);
      e = el.ownerDocument.createElement("Attributes");
      e.appendChild(html.cloneNode(true));
      e.appendChild(node.cloneNode(true));
      value.appendChild(o);
      value.appendChild(e);
      el.appendChild(value);
    }
    return now;
  }
  /**
   * @param {Function} opt_start
   * @param {string} date
   * @return {undefined}
   */
  function strictParse(opt_start, date) {
    /** @type {Array} */
    this.l = [];
    /** @type {Function} */
    this.B = opt_start;
    this.G = date || null;
    /** @type {boolean} */
    this.i = this.c = false;
    this.h = void 0;
    /** @type {boolean} */
    this.A = this.H = this.o = false;
    /** @type {number} */
    this.m = 0;
    /** @type {null} */
    this.f = null;
    /** @type {number} */
    this.s = 0;
  }
  /**
   * @param {Object} obj
   * @param {boolean} recurring
   * @param {Array} value
   * @return {undefined}
   */
  function reject(obj, recurring, value) {
    /** @type {boolean} */
    obj.c = true;
    /** @type {Array} */
    obj.h = value;
    /** @type {boolean} */
    obj.i = !recurring;
    proxy(obj);
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function trigger(obj) {
    if (obj.c) {
      if (!obj.A) {
        throw new e;
      }
      /** @type {boolean} */
      obj.A = false;
    }
  }
  /**
   * @param {Object} s
   * @param {Array} value
   * @param {boolean} msg
   * @param {?} description
   * @return {undefined}
   */
  function ok(s, value, msg, description) {
    s.l.push([value, msg, description]);
    if (s.c) {
      proxy(s);
    }
  }
  /**
   * @param {Object} r
   * @return {?}
   */
  function getter(r) {
    return comparePoints(r.l, function(item) {
      return isFunction(item[1]);
    });
  }
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function proxy(data) {
    if (data.m && (data.c && getter(data))) {
      var node = data.m;
      var self = blockElementsMap[node];
      if (self) {
        global.clearTimeout(self.u);
        delete blockElementsMap[node];
      }
      /** @type {number} */
      data.m = 0;
    }
    if (data.f) {
      data.f.s--;
      delete data.f;
    }
    node = data.h;
    /** @type {boolean} */
    var cb = self = false;
    for (;data.l.length && !data.o;) {
      var scope = data.l.shift();
      var callback = scope[0];
      var i = scope[1];
      scope = scope[2];
      if (callback = data.i ? i : callback) {
        try {
          var value = callback.call(scope || data.G, node);
          if (void 0 !== value) {
            data.i = data.i && (value == node || value instanceof Error);
            data.h = node = value;
          }
          if (hasKey(node) || "function" === typeof global.Promise && node instanceof global.Promise) {
            /** @type {boolean} */
            cb = true;
            /** @type {boolean} */
            data.o = true;
          }
        } catch (fragment) {
          node = fragment;
          /** @type {boolean} */
          data.i = true;
          if (!getter(data)) {
            /** @type {boolean} */
            self = true;
          }
        }
      }
    }
    data.h = node;
    if (cb) {
      value = bind(data.F, data, true);
      cb = bind(data.F, data, false);
      if (node instanceof strictParse) {
        ok(node, value, cb);
        /** @type {boolean} */
        node.H = true;
      } else {
        node.then(value, cb);
      }
    }
    if (self) {
      node = new a(node);
      blockElementsMap[node.u] = node;
      data.m = node.u;
    }
  }
  /**
   * @return {undefined}
   */
  function e() {
    assert.call(this);
  }
  /**
   * @return {undefined}
   */
  function result() {
    assert.call(this);
  }
  /**
   * @param {?} code
   * @return {undefined}
   */
  function a(code) {
    this.u = global.setTimeout(bind(this.f, this), 0);
    this.c = code;
  }
  /**
   * @param {string} uri
   * @param {Object} options
   * @return {?}
   */
  function loadScript(uri, options) {
    var opts = options || {};
    var doc = opts.document || document;
    /** @type {Element} */
    var script = document.createElement("SCRIPT");
    var node = {
      ia : script,
      L : void 0
    };
    var suiteView = new strictParse(C, node);
    /** @type {null} */
    var classNames = null;
    var quietMillis = null != opts.timeout ? opts.timeout : 5E3;
    if (0 < quietMillis) {
      /** @type {number} */
      classNames = window.setTimeout(function() {
        cleanUp(script, true);
        var udataCur = new html(length, "Timeout reached for loading script " + uri);
        trigger(suiteView);
        reject(suiteView, false, udataCur);
      }, quietMillis);
      /** @type {number} */
      node.L = classNames;
    }
    /** @type {function (): undefined} */
    script.onload = script.onreadystatechange = function() {
      if (!(script.readyState && ("loaded" != script.readyState && "complete" != script.readyState))) {
        cleanUp(script, opts.xa || false, classNames);
        trigger(suiteView);
        reject(suiteView, true, null);
      }
    };
    /**
     * @return {undefined}
     */
    script.onerror = function() {
      cleanUp(script, true, classNames);
      var udataCur = new html(exp, "Error while loading script " + uri);
      trigger(suiteView);
      reject(suiteView, false, udataCur);
    };
    setNodeAttributes(script, {
      type : "text/javascript",
      charset : "UTF-8",
      src : uri
    });
    select(doc).appendChild(script);
    return suiteView;
  }
  /**
   * @param {Node} doc
   * @return {?}
   */
  function select(doc) {
    var bodies = doc.getElementsByTagName("HEAD");
    return bodies && 0 != bodies.length ? bodies[0] : doc.documentElement;
  }
  /**
   * @return {undefined}
   */
  function C() {
    if (this && this.ia) {
      var elem = this.ia;
      if (elem) {
        if ("SCRIPT" == elem.tagName) {
          cleanUp(elem, true, this.L);
        }
      }
    }
  }
  /**
   * @param {Node} elem
   * @param {boolean} dataAndEvents
   * @param {string} i
   * @return {undefined}
   */
  function cleanUp(elem, dataAndEvents, i) {
    if (null != i) {
      global.clearTimeout(i);
    }
    /** @type {function (): undefined} */
    elem.onload = noop;
    /** @type {function (): undefined} */
    elem.onerror = noop;
    /** @type {function (): undefined} */
    elem.onreadystatechange = noop;
    if (dataAndEvents) {
      window.setTimeout(function() {
        if (elem) {
          if (elem.parentNode) {
            elem.parentNode.removeChild(elem);
          }
        }
      }, 0);
    }
  }
  /**
   * @param {string} useIcons
   * @param {string} value
   * @return {undefined}
   */
  function html(useIcons, value) {
    /** @type {string} */
    var rule = "Jsloader error (code #" + useIcons + ")";
    if (value) {
      rule += ": " + value;
    }
    assert.call(this, rule);
  }
  /**
   * @param {?} name
   * @param {string} c
   * @return {undefined}
   */
  function module(name, c) {
    this.f = new Node(name);
    this.c = c ? c : "callback";
    /** @type {number} */
    this.L = 5E3;
  }
  /**
   * @param {string} node
   * @param {Object} hash
   * @param {Function} cb
   * @return {?}
   */
  function end(node, hash, cb) {
    return function() {
      getAll(node, false);
      if (cb) {
        cb(hash);
      }
    };
  }
  /**
   * @param {string} node
   * @param {Function} matcherFunction
   * @return {?}
   */
  function part(node, matcherFunction) {
    return function(dataAndEvents) {
      getAll(node, true);
      matcherFunction.apply(void 0, arguments);
    };
  }
  /**
   * @param {string} name
   * @param {boolean} recurring
   * @return {undefined}
   */
  function getAll(name, recurring) {
    if (global._callbacks_[name]) {
      if (recurring) {
        delete global._callbacks_[name];
      } else {
        /** @type {function (): undefined} */
        global._callbacks_[name] = noop;
      }
    }
  }
  /**
   * @param {?} children
   * @param {string} opt_attributes
   * @param {?} el
   * @return {undefined}
   */
  function setup(children, opt_attributes, el) {
    t.call(this);
    this.c = children;
    this.m = opt_attributes || 0;
    this.f = el;
    this.h = bind(this.i, this);
  }
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function onSuccess(data) {
    if (0 != data.u) {
      global.clearTimeout(data.u);
    }
    /** @type {number} */
    data.u = 0;
    data.u = defer(data.h, data.m);
  }
  /**
   * @param {?} data
   * @param {?} jobId
   * @param {number} status
   * @param {number} methods
   * @return {undefined}
   */
  function Job(data, jobId, status, methods) {
    this.printerName = data;
    this.jobId = jobId;
    /** @type {number} */
    this.status = status;
    /** @type {number} */
    this.statusMessage = methods;
  }
  /**
   * @param {string} args
   * @return {?}
   */
  function getText(args) {
    var data = {};
    args = args.split(" ");
    if (1 <= args.length) {
      /** @type {number} */
      data.status = parseInt(args[0], 10);
    }
    data.statusMessage = args.slice(1).join(" ");
    return data;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function isBinary(type) {
    /** @type {number} */
    var i = 0;
    for (;i < navigator.plugins.length;++i) {
      var context = navigator.plugins[i];
      /** @type {number} */
      var c = 0;
      for (;c < context.length;++c) {
        if (context[c].type == type) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * @return {?}
   */
  function start() {
    if (!document.getElementById("_DymoLabelFrameworkJslSafariPlugin")) {
      /** @type {Element} */
      var node = document.createElement("embed");
      /** @type {string} */
      node.type = "application/x-dymolabel";
      /** @type {string} */
      node.id = "_DymoLabelFrameworkJslSafariPlugin";
      /** @type {number} */
      node.width = 1;
      /** @type {number} */
      node.height = 1;
      /** @type {boolean} */
      node.hidden = true;
      document.body.appendChild(node);
    }
    return window._DymoLabelFrameworkJslSafariPlugin;
  }
  /**
   * @param {boolean} recurring
   * @return {?}
   */
  function _createMovie(recurring) {
    if (!document.getElementById("_DymoLabelFrameworkJslPlugin")) {
      /** @type {Element} */
      var node = document.createElement("embed");
      /** @type {string} */
      node.type = "application/x-dymolabel";
      /** @type {string} */
      node.id = "_DymoLabelFrameworkJslPlugin";
      if (recurring) {
        /** @type {number} */
        node.width = 1;
        /** @type {number} */
        node.height = 1;
        /** @type {boolean} */
        node.hidden = true;
      } else {
        /** @type {number} */
        node.width = 0;
        /** @type {number} */
        node.height = 0;
        /** @type {boolean} */
        node.hidden = false;
      }
      document.body.appendChild(node);
    }
    return document.getElementById("_DymoLabelFrameworkJslPlugin");
  }
  /**
   * @return {?}
   */
  function w() {
    var childEl = _createMovie(true);
    if (!childEl.getPrinters) {
      document.body.removeChild(childEl);
      childEl = _createMovie(false);
    }
    return childEl;
  }
  /**
   * @param {boolean} recurring
   * @return {?}
   */
  function update(recurring) {
    if (!document.getElementById("_DymoLabelFrameworkJslPlugin")) {
      /** @type {Element} */
      var node = document.createElement("embed");
      /** @type {string} */
      node.type = "application/x-npapi-dymolabel";
      /** @type {string} */
      node.id = "_DymoLabelFrameworkJslPlugin";
      if (recurring) {
        /** @type {number} */
        node.width = 1;
        /** @type {number} */
        node.height = 1;
        /** @type {boolean} */
        node.hidden = true;
      } else {
        /** @type {number} */
        node.width = 0;
        /** @type {number} */
        node.height = 0;
        /** @type {boolean} */
        node.hidden = false;
      }
      document.body.appendChild(node);
      if (!node.getPrinters) {
        /** @type {number} */
        node.width = 1;
        /** @type {number} */
        node.height = 1;
        /** @type {boolean} */
        node.hidden = false;
      }
    }
    return document.getElementById("_DymoLabelFrameworkJslPlugin");
  }
  /**
   * @return {?}
   */
  function removeChild() {
    var childEl = update(true);
    if (!childEl.getPrinters) {
      document.body.removeChild(childEl);
      childEl = update(false);
    }
    return childEl;
  }
  /**
   * @return {?}
   */
  function factory() {
    var obj = new ActiveXObject("DYMOLabelFrameworkIEPlugin.Plugin");
    if ("object" != typeof obj) {
      throw Error("createFramework(): unable to create DYMO.Label.Framework object. Check DYMO Label Framework is installed");
    }
    return obj;
  }
  /**
   * @param {Object} a
   * @return {?}
   */
  function setFillAndStroke(a) {
    /**
     * @param {Function} fn
     * @return {?}
     */
    function del(fn) {
      return function() {
        /** @type {Arguments} */
        var newArgs = arguments;
        return new val(function($sanitize) {
          $sanitize(fn.apply(null, newArgs));
        });
      };
    }
    if ("" != a.errorDetails) {
      throw Error(a.errorDetails);
    }
    if (a.isWebServicePresent) {
      log("chooseEnvironment > WebServicePresent");
      var db = new X;
      if (db) {
        a = {
          /**
           * @return {?}
           */
          getPrinters : function() {
            return db.getPrinters();
          },
          /**
           * @param {number} type
           * @return {?}
           */
          openLabelFile : function(type) {
            return db.openLabelFile(type);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @param {string} d
           * @return {undefined}
           */
          printLabel : function(type, mode, object, d) {
            db.printLabel(type, mode, object, d);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @param {string} d
           * @return {undefined}
           */
          printLabel2 : function(type, mode, object, d) {
            db.printLabel2(type, mode, object, d);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @return {?}
           */
          renderLabel : function(type, mode, object) {
            return db.renderLabel(type, mode, object);
          },
          /**
           * @param {number} type
           * @return {?}
           */
          loadImageAsPngBase64 : function(type) {
            return db.loadImageAsPngBase64(type);
          },
          /**
           * @param {number} type
           * @param {string} m
           * @return {?}
           */
          getJobStatus : function(type, m) {
            var data;
            if (isFunction(db.getJobStatus)) {
              data = getText(db.getJobStatus(type, parseInt(m, 10)));
            } else {
              data = {
                status : o.S,
                statusMessage : "not implemented"
              };
            }
            return new Job(type, m, data.status, data.statusMessage);
          },
          /**
           * @return {?}
           */
          T : function() {
            return db.T();
          },
          /**
           * @param {number} type
           * @return {?}
           */
          V : function(type) {
            return db.V(type);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @param {string} d
           * @return {?}
           */
          X : function(type, mode, object, d) {
            return db.X(type, mode, object, d);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @param {string} d
           * @return {?}
           */
          W : function(type, mode, object, d) {
            return db.W(type, mode, object, d);
          },
          /**
           * @param {number} type
           * @param {string} mode
           * @param {string} object
           * @return {?}
           */
          Y : function(type, mode, object) {
            return db.Y(type, mode, object);
          },
          /**
           * @param {number} type
           * @return {?}
           */
          U : function(type) {
            return db.U(type);
          }
        };
      } else {
        throw Error("Cannot establish connection to the web service. Is DYMO Label Framework installed?");
      }
      return a;
    }
    if ("ActiveXObject" in window) {
      log("chooseEnvironment > ActiveXObject");
      a = {};
      var dojo = factory();
      /**
       * @return {?}
       */
      a.getPrinters = function() {
        return dojo.GetPrinters();
      };
      /**
       * @param {number} types
       * @return {?}
       */
      a.openLabelFile = function(types) {
        return dojo.OpenLabelFile(types);
      };
      /**
       * @param {number} types
       * @param {string} m
       * @param {string} object
       * @param {string} v23
       * @return {undefined}
       */
      a.printLabel = function(types, m, object, v23) {
        dojo.PrintLabel(types, m, object, v23);
      };
      /**
       * @param {number} types
       * @param {string} m
       * @param {string} object
       * @return {?}
       */
      a.renderLabel = function(types, m, object) {
        return dojo.RenderLabel(types, m, object);
      };
      /**
       * @param {number} types
       * @return {?}
       */
      a.loadImageAsPngBase64 = function(types) {
        return dojo.LoadImageAsPngBase64(types);
      };
      /**
       * @param {number} types
       * @param {string} m
       * @param {string} object
       * @param {string} v23
       * @return {?}
       */
      a.printLabel2 = function(types, m, object, v23) {
        if (isFunction(dojo.PrintLabel2)) {
          return dojo.PrintLabel2(types, m, object, v23).toString();
        }
        dojo.PrintLabel(types, m, object, v23);
      };
      /**
       * @param {number} types
       * @param {string} m
       * @return {?}
       */
      a.getJobStatus = function(types, m) {
        var data;
        if (isFunction(dojo.GetJobStatus)) {
          data = getText(dojo.GetJobStatus(types, parseInt(m, 10)));
        } else {
          data = {
            status : o.S,
            statusMessage : "not implemented"
          };
        }
        return new Job(types, m, data.status, data.statusMessage);
      };
    } else {
      if (-1 != navigator.platform.indexOf("Win")) {
        log("chooseEnvironment > WIN");
        var self = w();
        if (self) {
          a = {
            /**
             * @return {?}
             */
            getPrinters : function() {
              return self.getPrinters();
            },
            /**
             * @param {number} type
             * @return {?}
             */
            openLabelFile : function(type) {
              return self.openLabelFile(type);
            },
            /**
             * @param {number} type
             * @param {string} mode
             * @param {string} object
             * @param {string} d
             * @return {undefined}
             */
            printLabel : function(type, mode, object, d) {
              self.printLabel(type, mode, object, d);
            },
            /**
             * @param {number} type
             * @param {string} mode
             * @param {string} object
             * @return {?}
             */
            renderLabel : function(type, mode, object) {
              return self.renderLabel(type, mode, object);
            },
            /**
             * @param {number} type
             * @return {?}
             */
            loadImageAsPngBase64 : function(type) {
              return self.loadImageAsPngBase64(type);
            },
            /**
             * @param {number} type
             * @param {string} mode
             * @param {string} object
             * @param {string} d
             * @return {?}
             */
            printLabel2 : function(type, mode, object, d) {
              if (isFunction(self.printLabel2)) {
                return self.printLabel2(type, mode, object, d).toString();
              }
              self.printLabel(type, mode, object, d);
            },
            /**
             * @param {number} type
             * @param {string} m
             * @return {?}
             */
            getJobStatus : function(type, m) {
              var data;
              if (isFunction(self.getJobStatus)) {
                data = getText(self.getJobStatus(type, parseInt(m, 10)));
              } else {
                data = {
                  status : o.S,
                  statusMessage : "not implemented"
                };
              }
              return new Job(type, m, data.status, data.statusMessage);
            }
          };
        } else {
          throw Error("DYMO Label Framework is not installed");
        }
      } else {
        log("chooseEnvironment > not WIN");
        var console;
        if (isBinary("application/x-dymolabel")) {
          log("chooseEnvironment > _createSafariPlugin");
          console = start();
        } else {
          log("chooseEnvironment > _createMacNsapiPlugin");
          console = removeChild();
        }
        log("chooseEnvironment > safariPlugin : " + !!console);
        if (console) {
          a = {
            /**
             * @return {?}
             */
            getPrinters : function() {
              return console.getPrinters();
            },
            /**
             * @param {number} type
             * @return {?}
             */
            openLabelFile : function(type) {
              var charset = console.openLabelFile(type);
              if (!charset) {
                throw Error("Unable to open label file '" + type + "'");
              }
              return charset;
            },
            /**
             * @param {(number|string)} mode
             * @param {string} m
             * @param {number} type
             * @param {string} d
             * @return {undefined}
             */
            printLabel : function(mode, m, type, d) {
              console.printLabel(type, mode, m, d);
            },
            /**
             * @param {number} type
             * @param {string} mode
             * @param {string} object
             * @return {?}
             */
            renderLabel : function(type, mode, object) {
              return console.renderLabel(type, mode, object);
            },
            /**
             * @param {number} type
             * @return {?}
             */
            loadImageAsPngBase64 : function(type) {
              var charset = console.loadImageAsPngBase64(type);
              if (!charset) {
                throw Error("Unable to load image from uri '" + type + "'");
              }
              return charset;
            },
            /**
             * @param {(number|string)} mode
             * @param {string} m
             * @param {number} type
             * @param {string} d
             * @return {?}
             */
            printLabel2 : function(mode, m, type, d) {
              if (isFunction(console.printLabel2)) {
                return console.printLabel2(type, mode, m, d).toString();
              }
              console.printLabel(type, mode, m, d);
            },
            /**
             * @param {number} type
             * @param {string} m
             * @return {?}
             */
            getJobStatus : function(type, m) {
              var data;
              if (isFunction(console.getJobStatus)) {
                data = getText(console.getJobStatus(type, parseInt(m, 10)));
              } else {
                data = {
                  status : o.S,
                  statusMessage : "not implemented"
                };
              }
              return new Job(type, m, data.status, data.statusMessage);
            }
          };
        } else {
          throw Error("DYMO Label Framework is not installed");
        }
      }
    }
    a.T = del(a.getPrinters);
    a.V = del(a.openLabelFile);
    a.X = del(a.printLabel);
    a.W = del(a.printLabel2);
    a.Y = del(a.renderLabel);
    a.U = del(a.loadImageAsPngBase64);
    return a;
  }
  /**
   * @param {string} fmt
   * @return {undefined}
   */
  function log(fmt) {
    if (window.dymo.label.framework.trace) {
      if (window.console) {
        if (window.console.log) {
          console.log(fmt);
        }
      }
    }
  }
  /**
   * @param {(Error|string)} scope
   * @return {?}
   */
  function link(scope) {
    /**
     * @return {?}
     */
    function y() {
      throw me;
    }
    var me = scope || Error("DYMO Label Framework Plugin or WebService are not installed");
    return{
      /** @type {function (): ?} */
      getPrinters : y,
      /** @type {function (): ?} */
      openLabelFile : y,
      /** @type {function (): ?} */
      printLabel : y,
      /** @type {function (): ?} */
      printLabel2 : y,
      /** @type {function (): ?} */
      renderLabel : y,
      /** @type {function (): ?} */
      loadImageAsPngBase64 : y,
      /** @type {function (): ?} */
      getJobStatus : y,
      /** @type {function (): ?} */
      T : y,
      /** @type {function (): ?} */
      V : y,
      /** @type {function (): ?} */
      X : y,
      /** @type {function (): ?} */
      W : y,
      /** @type {function (): ?} */
      Y : y,
      /** @type {function (): ?} */
      U : y
    };
  }
  /**
   * @param {?} var_args
   * @param {string} name
   * @param {string} b
   * @param {?} merge
   * @param {?} a
   * @return {undefined}
   */
  function extend(var_args, name, b, merge, a) {
    this.printerType = var_args;
    /** @type {string} */
    this.name = name;
    /** @type {string} */
    this.modelName = b;
    this.isConnected = merge;
    this.isLocal = a;
    /** @type {string} */
    this.c = this.C = "";
  }
  /**
   * @param {?} data
   * @param {?} capture
   * @param {?} callback
   * @param {?} mapId
   * @param {?} var_args
   * @return {undefined}
   */
  function Map(data, capture, callback, mapId, var_args) {
    extend.call(this, "LabelWriterPrinter", data, capture, callback, mapId);
    this.isTwinTurbo = var_args;
  }
  /**
   * @param {?} opt_wrapper
   * @param {?} list
   * @param {?} callback
   * @param {?} styles
   * @param {?} serialisedGroup
   * @return {undefined}
   */
  function Group(opt_wrapper, list, callback, styles, serialisedGroup) {
    extend.call(this, "TapePrinter", opt_wrapper, list, callback, styles);
    this.isAutoCutSupported = serialisedGroup;
  }
  /**
   * @param {?} opts
   * @param {?} object
   * @param {?} a
   * @param {?} defs
   * @param {?} croak
   * @return {undefined}
   */
  function defaults(opts, object, a, defs, croak) {
    extend.call(this, "DZPrinter", opts, object, a, defs);
    this.isAutoCutSupported = croak;
  }
  /**
   * @param {?} context
   * @param {?} f
   * @return {undefined}
   */
  function r(context, f) {
    this.c = context;
    this.f = f;
  }
  /**
   * @param {Object} scope
   * @param {Function} callback
   * @return {undefined}
   */
  function handler(scope, callback) {
    var options = scope.h();
    var data = scope.f;
    var elements = scope.c.C;
    (new module(fn(elements, "getPrintJobStatus"), "callback")).send({
      jobId : data,
      printerName : scope.c.c
    }, function($scope) {
      callback(new Job(options, data, $scope.status, $scope.statusMessage));
    }, function() {
      callback(new Job(options, data, o.da, 'Error processing getPrintJobStatus(): Unable to contact "' + elements + '"'));
    });
  }
  /**
   * @param {Object} cb
   * @param {boolean} options
   * @return {?}
   */
  function readFile(cb, options) {
    /**
     * @return {undefined}
     */
    function parse() {
      log("checkLegacyPlugins");
      /** @type {boolean} */
      er.isWebServicePresent = false;
      /** @type {string} */
      var ua = window.navigator.platform;
      if (-1 != ua.indexOf("Win")) {
        if (log("checkLegacyPlugins > WIN platform "), "ActiveXObject" in window) {
          log("checkLegacyPlugins > ActiveXObject");
          /** @type {boolean} */
          er.isBrowserSupported = true;
          try {
            if ("object" != typeof new ActiveXObject("DYMOLabelFrameworkIEPlugin.Plugin")) {
              /** @type {string} */
              er.errorDetails = "Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed";
            } else {
              /** @type {boolean} */
              er.isFrameworkInstalled = true;
            }
          } catch (errorDetails) {
            /** @type {string} */
            er.errorDetails = "Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed. Exception details: " + errorDetails;
          }
        } else {
          log("checkLegacyPlugins > non-IE");
          /** @type {boolean} */
          er.isBrowserSupported = true;
          if (isBinary("application/x-dymolabel")) {
            log("checkLegacyPlugins > 'application/x-dymolabel'");
            /** @type {boolean} */
            er.isFrameworkInstalled = true;
          } else {
            /** @type {string} */
            er.errorDetails = "DYMO Label Framework Plugin is not installed";
          }
        }
      } else {
        if (-1 != ua.indexOf("Mac")) {
          log("checkLegacyPlugins > Mac platform");
          /** @type {boolean} */
          er.isBrowserSupported = true;
          if (isBinary("application/x-dymolabel")) {
            log("checkLegacyPlugins > safariPluginFound");
            ua = start();
            if ("2.0" <= ua.GetAPIVersion()) {
              /** @type {boolean} */
              er.isFrameworkInstalled = true;
            } else {
              /** @type {string} */
              er.errorDetails = "DYMO Label Safari Plugin is installed but outdated. Install the latest version.";
            }
          } else {
            if (isBinary("application/x-npapi-dymolabel")) {
              log("checkLegacyPlugins > 'application/x-npapi-dymolabel'");
              if ((ua = removeChild()) && ua.getPrinters) {
                /** @type {boolean} */
                er.isFrameworkInstalled = true;
              } else {
                /** @type {string} */
                er.errorDetails = 'DYMO NSAPI plugin is loaded but no callable functions found. If running Safari, then run it in 64-bit mode (MacOS X >= 10.7) or set "Open using Rosetta" option';
              }
            } else {
              /** @type {string} */
              er.errorDetails = "DYMO Label Plugin is not installed.";
            }
          }
        } else {
          /** @type {string} */
          er.errorDetails = "The operating system is not supported.";
        }
      }
      if (cb) {
        cb(er);
      }
    }
    /**
     * @return {undefined}
     */
    function read() {
      /** @type {boolean} */
      er.isBrowserSupported = true;
      /** @type {boolean} */
      er.isFrameworkInstalled = true;
      /** @type {boolean} */
      er.isWebServicePresent = true;
      if (cb) {
        cb(er);
      }
    }
    var er = {
      isBrowserSupported : false,
      isFrameworkInstalled : false,
      isWebServicePresent : false,
      errorDetails : ""
    };
    if (Vd) {
      return log("checkEnvironment > return existing instance of framework"), 2 == Vd ? read() : (er.isBrowserSupported = true, er.isFrameworkInstalled = true, er.isWebServicePresent = false, cb && cb(er)), er;
    }
    if (options) {
      poll(read, parse);
    } else {
      close(read, parse);
    }
    return er;
  }
  /**
   * @param {?} compiler
   * @param {?} f
   * @param {?} y
   * @return {undefined}
   */
  function Item(compiler, f, y) {
    this.c = compiler;
    this.f = f;
    this.h = y;
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function load(data) {
    /**
     * @param {Object} key
     * @param {string} options
     * @return {?}
     */
    function compile(key, options) {
      return stringify(createElement(key, options));
    }
    var out = parseXML(data);
    /** @type {Array} */
    data = [];
    var p = createElement(out, "Printers");
    out = p.getElementsByTagName("LabelWriterPrinter");
    /** @type {number} */
    var i = 0;
    for (;i < out.length;i++) {
      var element = compile(out[i], "Name");
      var compiled = compile(out[i], "ModelName");
      /** @type {boolean} */
      var code = "True" == compile(out[i], "IsConnected");
      /** @type {boolean} */
      var key = "True" == compile(out[i], "IsLocal");
      /** @type {boolean} */
      var codeSegments = "True" == compile(out[i], "IsTwinTurbo");
      element = new Map(element, compiled, code, key, codeSegments);
      data[i] = element;
      data[element.name] = element;
    }
    codeSegments = p.getElementsByTagName("TapePrinter");
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      element = compile(codeSegments[i], "Name");
      compiled = compile(codeSegments[i], "ModelName");
      /** @type {boolean} */
      code = "True" == compile(codeSegments[i], "IsConnected");
      /** @type {boolean} */
      key = "True" == compile(codeSegments[i], "IsLocal");
      /** @type {boolean} */
      var True = "True" == compile(codeSegments[i], "IsAutoCutSupported");
      element = new Group(element, compiled, code, key, True);
      data[i + out.length] = element;
      data[element.name] = element;
    }
    p = p.getElementsByTagName("DZPrinter");
    /** @type {number} */
    i = 0;
    for (;i < p.length;i++) {
      element = compile(p[i], "Name");
      compiled = compile(p[i], "ModelName");
      /** @type {boolean} */
      code = "True" == compile(p[i], "IsConnected");
      /** @type {boolean} */
      key = "True" == compile(p[i], "IsLocal");
      /** @type {boolean} */
      True = "True" == compile(p[i], "IsAutoCutSupported");
      element = new defaults(element, compiled, code, key, True);
      data[i + out.length] = element;
      data[element.name] = element;
    }
    return data;
  }
  /**
   * @return {?}
   */
  function check() {
    /** @type {Array} */
    var results = [];
    try {
      var resultItems = error().getPrinters();
      results = load(resultItems);
    } catch (d) {
    }
    var letter;
    for (letter in map) {
      resultItems = map[letter].getPrinters();
      /** @type {number} */
      var i = 0;
      for (;i < resultItems.length;++i) {
        var result = resultItems[i];
        results.push(result);
        results[result.name] = result;
      }
    }
    return results;
  }
  /**
   * @return {?}
   */
  function test() {
    return error().T().then(function(data) {
      /** @type {Array} */
      var results = [];
      try {
        results = load(data);
      } catch (d) {
      }
      var letter;
      for (letter in map) {
        data = map[letter].getPrinters();
        /** @type {number} */
        var i = 0;
        for (;i < data.length;++i) {
          var result = data[i];
          results.push(result);
          results[result.name] = result;
        }
      }
      return results;
    });
  }
  /**
   * @param {string} from_instance
   * @return {?}
   */
  function copy(from_instance) {
    /** @type {Array} */
    var out = [];
    var codeSegments = check();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var copies = codeSegments[i];
      if (copies.printerType) {
        if (copies.printerType == from_instance) {
          out.push(copies);
        }
      }
    }
    return out;
  }
  /**
   * @param {string} tag
   * @return {?}
   */
  function all(tag) {
    return test().then(function(codeSegments) {
      /** @type {Array} */
      var eventPath = [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var cur = codeSegments[i];
        if (cur.printerType) {
          if (cur.printerType == tag) {
            eventPath.push(cur);
          }
        }
      }
      return eventPath;
    });
  }
  /**
   * @param {number} a
   * @param {string} mode
   * @param {(number|string)} which
   * @param {string} d
   * @return {undefined}
   */
  function f(a, mode, which, d) {
    mode = mode || "";
    d = d || "";
    if ("string" != typeof d) {
      d = d.toString();
    }
    if ("undefined" == typeof which) {
      throw Error("printLabel(): labelXml parameter should be specified");
    }
    if ("string" != typeof which) {
      which = which.toString();
    }
    var parent = check()[a];
    if (null != parent) {
      if ("" != parent.C) {
        expand(parent, mode, which, d);
      } else {
        error().printLabel(parent.name, mode, which, d);
      }
    } else {
      throw Error("printLabel(): unknown printer '" + a + "'");
    }
  }
  /**
   * @param {string} token
   * @param {string} mode
   * @param {(number|string)} which
   * @param {string} d
   * @return {?}
   */
  function success(token, mode, which, d) {
    mode = mode || "";
    d = d || "";
    if ("string" != typeof d) {
      d = d.toString();
    }
    if ("undefined" == typeof which) {
      throw Error("printLabelAsync(): labelXml parameter should be specified");
    }
    if ("string" != typeof which) {
      which = which.toString();
    }
    return test().then(function(parent) {
      parent = parent[token];
      if (null != parent) {
        return "" != parent.C ? expand(parent, mode, which, d) : error().X(parent.name, mode, which, d);
      }
      throw Error("printLabelAsync(): unknown printer '" + token + "'");
    });
  }
  /**
   * @param {number} ready
   * @param {string} mode
   * @param {(number|string)} which
   * @param {string} d
   * @return {?}
   */
  function value(ready, mode, which, d) {
    mode = mode || "";
    d = d || "";
    if ("string" != typeof d) {
      d = d.toString();
    }
    if ("undefined" == typeof which) {
      throw Error("printLabel2(): labelXml parameter should be specified");
    }
    if ("string" != typeof which) {
      which = which.toString();
    }
    var parent = check()[ready];
    if (null != parent) {
      return "" != parent.C ? expand(parent, mode, which, d) : new r(parent, error().printLabel2(ready, mode, which, d));
    }
    throw Error("printLabel(): unknown printer '" + ready + "'");
  }
  /**
   * @param {number} ready
   * @param {string} mode
   * @param {(number|string)} which
   * @param {string} d
   * @return {?}
   */
  function resolve(ready, mode, which, d) {
    mode = mode || "";
    d = d || "";
    if ("string" != typeof d) {
      d = d.toString();
    }
    if ("undefined" == typeof which) {
      throw Error("printLabel2Async(): labelXml parameter should be specified");
    }
    if ("string" != typeof which) {
      which = which.toString();
    }
    return test().then(function(args) {
      var parent = args[ready];
      if (null != parent) {
        return "" != parent.C ? expand(parent, mode, which, d) : error().W(ready, mode, which, d).then(function(dataAndEvents) {
          return new r(parent, dataAndEvents);
        });
      }
      throw Error("printLabel2Async(): unknown printer '" + ready + "'");
    });
  }
  /**
   * @param {Object} node
   * @param {Object} m
   * @param {string} callback
   * @param {string} v23
   * @return {?}
   */
  function expand(node, m, callback, v23) {
    /**
     * @param {number} er
     * @param {number} recurring
     * @return {undefined}
     */
    function next(er, recurring) {
      /** @type {number} */
      var consumed = 4E3 * er;
      /** @type {string} */
      var rest = "";
      if (consumed >= text.length) {
        /** @type {number} */
        er = -1;
      } else {
        rest = text.substr(consumed, 4E3);
      }
      (new module(options, "c")).send({
        j : result,
        cid : er,
        pl : rest
      }, function(response) {
        var status = response.status;
        var target = new Buffer("dymo.label.framework");
        target.c = context;
        if (0 == status) {
          if (-1 != er) {
            next(++er, 0);
          } else {
            target.log(context, "Finished sending job payload for " + result, void 0);
          }
        } else {
          if (-5 == status) {
            if (10 > recurring) {
              next(++response.lastAckChunkId, ++recurring);
            } else {
              target.log(elem, 'Unable to send print job data for "' + result + '": STATUS_INVALID_CHUNK_ID: Max retry count reached', void 0);
            }
          } else {
            if (10 > recurring) {
              next(er, ++recurring);
            } else {
              target.log(elem, 'Unable to send print job data for "' + result + '": Max retry count reached', void 0);
            }
          }
        }
      }, function() {
        var target = new Buffer("dymo.label.framework");
        target.c = context;
        if (10 > recurring) {
          next(er, ++recurring);
        } else {
          target.log(elem, 'Unable to send print job data for "' + result + '": error: Max retry count reached', void 0);
        }
      });
    }
    var result = not();
    m = {
      printerName : node.c,
      labelXml : callback,
      printParamsXml : m,
      labelSetXml : v23
    };
    var options = fn(node.C, "pl");
    var text = toString(m);
    next(0, 0);
    return new r(node, result);
  }
  /**
   * @param {number} element
   * @param {string} attr
   * @param {(number|string)} i
   * @param {string} duration
   * @param {?} test
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function p(element, attr, i, duration, test, deepDataAndEvents) {
    /**
     * @param {?} done
     * @return {undefined}
     */
    function classNames(done) {
      if (test(val, done)) {
        var json = new setup(function() {
          val.w(classNames);
          equal(json);
        }, deepDataAndEvents);
        onSuccess(json);
      }
    }
    var val = value(element, attr, i, duration);
    val.w(classNames);
    return val;
  }
  /**
   * @param {number} input
   * @param {string} dir
   * @param {(number|string)} value
   * @param {string} data
   * @param {?} callback
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  function tick(input, dir, value, data, callback, deepDataAndEvents) {
    return resolve(input, dir, value, data).then(function(e) {
      /**
       * @param {?} feed
       * @return {undefined}
       */
      function success(feed) {
        if (callback(e, feed)) {
          var json = new setup(function() {
            e.w(success);
            equal(json);
          }, deepDataAndEvents);
          onSuccess(json);
        }
      }
      e.w(success);
      return e;
    });
  }
  /**
   * @param {number} ready
   * @param {string} mode
   * @param {string} which
   * @return {?}
   */
  function find(ready, mode, which) {
    if ("undefined" == typeof ready) {
      throw Error("renderLabel(): labelXml parameter should be specified");
    }
    if ("string" != typeof ready) {
      ready = ready.toString();
    }
    mode = mode || "";
    which = which || "";
    return error().renderLabel(ready, mode, which);
  }
  /**
   * @param {number} ready
   * @param {string} mode
   * @param {string} which
   * @return {?}
   */
  function show(ready, mode, which) {
    if ("undefined" == typeof ready) {
      throw Error("renderLabelAsync(): labelXml parameter should be specified");
    }
    if ("string" != typeof ready) {
      ready = ready.toString();
    }
    mode = mode || "";
    which = which || "";
    return error().Y(ready, mode, which);
  }
  var c;
  var io = io || {};
  var global = this;
  /** @type {boolean} */
  global.Aa = true;
  /** @type {string} */
  var k = "closure_uid_" + (1E9 * Math.random() >>> 0);
  /** @type {number} */
  var rindex = 0;
  /** @type {function (): number} */
  var publish = Date.now || function() {
    return+new Date;
  };
  isString(assert, Error);
  /** @type {string} */
  assert.prototype.name = "CustomError";
  /** @type {function (string): ?} */
  var filter = String.prototype.trim ? function(buf) {
    return buf.trim();
  } : function(lastLine) {
    return lastLine.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  };
  isString(d, assert);
  /** @type {string} */
  d.prototype.name = "AssertionError";
  var ArrayProto = Array.prototype;
  /** @type {function (Array, string, ?): ?} */
  var indexOf = ArrayProto.indexOf ? function(arr, methodName, graphics) {
    return ArrayProto.indexOf.call(arr, methodName, graphics);
  } : function(arr, item, fromIndex) {
    fromIndex = null == fromIndex ? 0 : 0 > fromIndex ? Math.max(0, arr.length + fromIndex) : fromIndex;
    if (expect(arr)) {
      return expect(item) && 1 == item.length ? arr.indexOf(item, fromIndex) : -1;
    }
    for (;fromIndex < arr.length;fromIndex++) {
      if (fromIndex in arr && arr[fromIndex] === item) {
        return fromIndex;
      }
    }
    return-1;
  };
  /** @type {function (string, Function, ?): undefined} */
  var forEach = ArrayProto.forEach ? function(bind, program, wrapper) {
    ArrayProto.forEach.call(bind, program, wrapper);
  } : function(arr, f, o) {
    var e = arr.length;
    var arr2 = expect(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        f.call(o, arr2[i], i, arr);
      }
    }
  };
  /** @type {function (?, Function, string, Function): ?} */
  var some = ArrayProto.reduce ? function(next_scope, handler, end, value) {
    if (value) {
      handler = bind(handler, value);
    }
    return ArrayProto.reduce.call(next_scope, handler, end);
  } : function(list, iterator, childrenVarArgs, context) {
    /** @type {string} */
    var memo = childrenVarArgs;
    forEach(list, function(value, index) {
      memo = iterator.call(context, memo, value, index, list);
    });
    return memo;
  };
  /** @type {function (?, Function, ?): ?} */
  var comparePoints = ArrayProto.some ? function(next_scope, mapper, graphics) {
    return ArrayProto.some.call(next_scope, mapper, graphics);
  } : function(arr, f, opt_obj) {
    var e = arr.length;
    var arr2 = expect(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  var arg;
  a: {
    var nav = global.navigator;
    if (nav) {
      var userAgent = nav.userAgent;
      if (userAgent) {
        arg = userAgent;
        break a;
      }
    }
    /** @type {string} */
    arg = "";
  }
  /** @type {Array.<string>} */
  var codeSegments = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var afterBR = isType(arg, "Opera") || isType(arg, "OPR");
  var isIE = replace();
  var message = isType(arg, "Gecko") && (!(isType(arg.toLowerCase(), "webkit") && !isArguments()) && (!(isType(arg, "Trident") || isType(arg, "MSIE")) && !isArguments()));
  var YY_START = isType(arg.toLowerCase(), "webkit") && !isArguments();
  var cDigit = function() {
    if (afterBR && global.opera) {
      var def = global.opera.version;
      return isFunction(def) ? def() : def;
    }
    /** @type {string} */
    def = "";
    var value = valueAccessor();
    if (value) {
      def = value ? value[1] : "";
    }
    return isIE && (!isArguments() && (value = iframeCssFixes(), value > parseFloat(def))) ? String(value) : def;
  }();
  var interactives = {};
  var doc = global.document;
  var supportsArgsClass = iframeCssFixes();
  var Sa = !doc || (!isIE || !supportsArgsClass && isArguments()) ? void 0 : supportsArgsClass || ("CSS1Compat" == doc.compatMode ? parseInt(cDigit, 10) : 5);
  if (!(!message && !isIE)) {
    if (!(isIE && (isIE && (isArguments() || 9 <= Sa)))) {
      if (message) {
        init("1.9.1");
      }
    }
  }
  if (isIE) {
    init("9");
  }
  func("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
  /**
   * @return {?}
   */
  SAXParser.prototype.toString = function() {
    return "SafeHtml{" + this.c + "}";
  };
  escape("<!DOCTYPE html>");
  escape("");
  var props = {
    cellpadding : "cellPadding",
    cellspacing : "cellSpacing",
    colspan : "colSpan",
    frameborder : "frameBorder",
    height : "height",
    maxlength : "maxLength",
    role : "role",
    rowspan : "rowSpan",
    type : "type",
    usemap : "useMap",
    valign : "vAlign",
    width : "width"
  };
  var blockLikeTags = {
    SCRIPT : 1,
    STYLE : 1,
    HEAD : 1,
    IFRAME : 1,
    OBJECT : 1
  };
  var obj = {
    IMG : " ",
    BR : "\n"
  };
  var def = new action(function() {
    return new Test;
  }, function(record) {
    record.reset();
  });
  /**
   * @return {undefined}
   */
  Test.prototype.reset = function() {
    /** @type {null} */
    this.next = this.f = this.c = null;
  };
  var setImmediate;
  var cb;
  /** @type {boolean} */
  var qb = false;
  var target = new function() {
    /** @type {null} */
    this.f = this.c = null;
  };
  /** @type {number} */
  var SELECT = 0;
  /** @type {number} */
  var failuresLink = 2;
  /** @type {number} */
  var parent = 3;
  /**
   * @return {undefined}
   */
  Rect.prototype.reset = function() {
    /** @type {null} */
    this.h = this.f = this.i = this.c = null;
    /** @type {boolean} */
    this.l = false;
  };
  var msg = new action(function() {
    return new Rect;
  }, function(record) {
    record.reset();
  });
  /**
   * @param {Function} callback
   * @param {string} next
   * @param {string} selector
   * @return {?}
   */
  val.prototype.then = function(callback, next, selector) {
    return i(this, isFunction(callback) ? callback : null, isFunction(next) ? next : null, selector);
  };
  isKind(val);
  c = val.prototype;
  /**
   * @param {Object} a
   * @param {?} walkers
   * @return {?}
   */
  c.ja = function(a, walkers) {
    return i(this, null, a, walkers);
  };
  /**
   * @param {Array} val
   * @return {undefined}
   */
  c.cancel = function(val) {
    if (this.c == SELECT) {
      detach(function() {
        var name = new type(val);
        post(this, name);
      }, this);
    }
  };
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  c.ka = function(deepDataAndEvents) {
    /** @type {number} */
    this.c = SELECT;
    isObject(this, failuresLink, deepDataAndEvents);
  };
  /**
   * @param {?} isXML
   * @return {undefined}
   */
  c.la = function(isXML) {
    /** @type {number} */
    this.c = SELECT;
    isObject(this, parent, isXML);
  };
  /**
   * @return {undefined}
   */
  c.ya = function() {
    /** @type {null} */
    var item = null;
    for (;item = addItem(this);) {
      push(this, item, this.c, this.o);
    }
    /** @type {boolean} */
    this.m = false;
  };
  /** @type {function (?): undefined} */
  var __indexOf = requestAnimationFrame;
  isString(type, assert);
  /** @type {string} */
  type.prototype.name = "cancel";
  /** @type {number} */
  var Mb = 0;
  var expectations = {};
  /** @type {boolean} */
  t.prototype.l = false;
  /**
   * @return {undefined}
   */
  t.prototype.K = function() {
    if (this.A) {
      for (;this.A.length;) {
        this.A.shift()();
      }
    }
  };
  var forward = !isIE || isIE && (isArguments() || 9 <= Sa);
  var isIE7orLower = isIE && !init("9");
  if (!!YY_START) {
    init("528");
  }
  if (!(message && init("1.9b"))) {
    if (!(isIE && init("8"))) {
      if (!(afterBR && init("9.5"))) {
        if (YY_START) {
          init("528");
        }
      }
    }
  }
  if (!(message && !init("8"))) {
    if (isIE) {
      init("9");
    }
  }
  /**
   * @return {undefined}
   */
  block.prototype.f = function() {
    /** @type {boolean} */
    this.ha = false;
  };
  /** @type {function (): undefined} */
  defineProperties[" "] = noop;
  isString(constructor, block);
  /**
   * @return {undefined}
   */
  constructor.prototype.f = function() {
    constructor.ca.f.call(this);
    var ev = this.h;
    if (ev.preventDefault) {
      ev.preventDefault();
    } else {
      if (ev.returnValue = false, isIE7orLower) {
        try {
          if (ev.ctrlKey || 112 <= ev.keyCode && 123 >= ev.keyCode) {
            /** @type {number} */
            ev.keyCode = -1;
          }
        } catch (b) {
        }
      }
    }
  };
  /** @type {string} */
  var prop = "closure_listenable_" + (1E6 * Math.random() | 0);
  /** @type {number} */
  var Vb = 0;
  /** @type {string} */
  var key = "closure_lm_" + (1E6 * Math.random() | 0);
  var args = {};
  /** @type {number} */
  var dc = 0;
  /** @type {string} */
  var CALL = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  isString(s, t);
  /** @type {boolean} */
  s.prototype[prop] = true;
  /**
   * @param {string} eventType
   * @param {?} handler
   * @param {Object} f
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  s.prototype.addEventListener = function(eventType, handler, f, deepDataAndEvents) {
    addEvent(this, eventType, handler, f, deepDataAndEvents);
  };
  /**
   * @param {string} classNames
   * @param {number} callback
   * @param {boolean} deepDataAndEvents
   * @param {?} action
   * @return {undefined}
   */
  s.prototype.removeEventListener = function(classNames, callback, deepDataAndEvents, action) {
    cycle(this, classNames, callback, deepDataAndEvents, action);
  };
  /**
   * @return {undefined}
   */
  s.prototype.K = function() {
    s.ca.K.call(this);
    if (this.D) {
      var fn = this.D;
      /** @type {number} */
      var b = 0;
      var key;
      for (key in fn.c) {
        var codeSegments = fn.c[key];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          ++b;
          removeListener(codeSegments[i]);
        }
        delete fn.c[key];
        fn.f--;
      }
    }
    /** @type {null} */
    this.R = null;
  };
  var array = {
    '"' : '\\"',
    "\\" : "\\\\",
    "/" : "\\/",
    "\b" : "\\b",
    "\f" : "\\f",
    "\n" : "\\n",
    "\r" : "\\r",
    "\t" : "\\t",
    "\x0B" : "\\u000b"
  };
  /** @type {RegExp} */
  var rSlash = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  c = Matrix.prototype;
  /**
   * @return {?}
   */
  c.J = function() {
    call(this);
    /** @type {Array} */
    var eventPath = [];
    /** @type {number} */
    var n = 0;
    for (;n < this.c.length;n++) {
      eventPath.push(this.f[this.c[n]]);
    }
    return eventPath;
  };
  /**
   * @return {?}
   */
  c.I = function() {
    call(this);
    return this.c.concat();
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    this.f = {};
    /** @type {number} */
    this.i = this.h = this.c.length = 0;
  };
  /**
   * @param {Function} callback
   * @param {Object} obj
   * @return {undefined}
   */
  c.forEach = function(callback, obj) {
    var resultItems = this.I();
    /** @type {number} */
    var i = 0;
    for (;i < resultItems.length;i++) {
      var result = resultItems[i];
      callback.call(obj, keys(this, result), result, this);
    }
  };
  /**
   * @return {?}
   */
  c.clone = function() {
    return new Matrix(this);
  };
  /** @type {null} */
  b.prototype.c = null;
  /** @type {number} */
  var Fc = 0;
  /**
   * @param {?} keepData
   * @param {Function} el
   * @param {?} deepDataAndEvents
   * @param {?} obj
   * @param {?} index
   * @return {undefined}
   */
  b.prototype.reset = function(keepData, el, deepDataAndEvents, obj, index) {
    if (!("number" == typeof index)) {
      Fc++;
    }
    if (!obj) {
      publish();
    }
    /** @type {Function} */
    this.f = el;
    delete this.c;
  };
  /**
   * @return {?}
   */
  self.prototype.toString = function() {
    return this.name;
  };
  var level = new self("SEVERE", 1E3);
  var elem = new self("WARNING", 900);
  var context = new self("INFO", 800);
  var err = new self("CONFIG", 700);
  var event = new self("FINE", 500);
  /**
   * @param {Object} x
   * @param {string} text
   * @param {(Function|string)} opt_attributes
   * @return {undefined}
   */
  Buffer.prototype.log = function(x, text, opt_attributes) {
    if (x.value >= has(this).value) {
      if (isFunction(text)) {
        text = text();
      }
      x = new b(x, String(text), this.i);
      if (opt_attributes) {
        /** @type {(Function|string)} */
        x.c = opt_attributes;
      }
      /** @type {string} */
      opt_attributes = "log:" + x.f;
      if (global.console) {
        if (global.console.timeStamp) {
          global.console.timeStamp(opt_attributes);
        } else {
          if (global.console.markTimeline) {
            global.console.markTimeline(opt_attributes);
          }
        }
      }
      if (global.msWriteProfilerMark) {
        global.msWriteProfilerMark(opt_attributes);
      }
      opt_attributes = this;
      for (;opt_attributes;) {
        opt_attributes = opt_attributes.f;
      }
    }
  };
  var object = {};
  /** @type {null} */
  var source = null;
  /** @type {null} */
  recordType.prototype.c = null;
  var expectationResult;
  isString(suiteView, recordType);
  expectationResult = new suiteView;
  /** @type {RegExp} */
  var core_rnotwhite = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
  var YYSTATE = YY_START;
  isString(format, s);
  /** @type {string} */
  var tab = "";
  var pt = format.prototype;
  var y = decode("goog.net.XhrIo");
  pt.v = y;
  /** @type {RegExp} */
  var rchecked = /^https?$/i;
  /** @type {Array} */
  var pair = ["POST", "PUT"];
  /** @type {Array} */
  var list = [];
  c = format.prototype;
  /**
   * @return {undefined}
   */
  c.wa = function() {
    equal(this);
    splice(list, this);
  };
  /**
   * @param {string} data
   * @param {string} method
   * @param {string} obj
   * @param {Error} message
   * @return {undefined}
   */
  c.send = function(data, method, obj, message) {
    if (this.c) {
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.o + "; newUri=" + data);
    }
    method = method ? method.toUpperCase() : "GET";
    /** @type {string} */
    this.o = data;
    /** @type {string} */
    this.m = "";
    /** @type {string} */
    this.Z = method;
    /** @type {boolean} */
    this.O = false;
    /** @type {boolean} */
    this.f = true;
    this.c = this.M ? request(this.M) : request(expectationResult);
    this.H = this.M ? successCallback(this.M) : successCallback(expectationResult);
    this.c.onreadystatechange = bind(this.ga, this);
    try {
      each(this.v, join(this, "Opening Xhr"));
      /** @type {boolean} */
      this.P = true;
      this.c.open(method, String(data), true);
      /** @type {boolean} */
      this.P = false;
    } catch (udataCur) {
      each(this.v, join(this, "Error opening Xhr: " + udataCur.message));
      completed(this, udataCur);
      return;
    }
    data = obj || "";
    var i = this.qa.clone();
    if (message) {
      _send(message, function(isXML, cacheKey) {
        wrap(i, cacheKey, isXML);
      });
    }
    message = insert(i.I());
    obj = global.FormData && data instanceof global.FormData;
    if (!!(0 <= indexOf(pair, method))) {
      if (!message) {
        if (!obj) {
          wrap(i, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        }
      }
    }
    i.forEach(function(sValue, result) {
      this.c.setRequestHeader(result, sValue);
    }, this);
    if (this.F) {
      this.c.responseType = this.F;
    }
    if ("withCredentials" in this.c) {
      this.c.withCredentials = this.ra;
    }
    try {
      req(this);
      if (0 < this.i) {
        this.B = ajax(this.c);
        each(this.v, join(this, "Will abort after " + this.i + "ms if incomplete, xhr2 " + this.B));
        if (this.B) {
          this.c.timeout = this.i;
          this.c.ontimeout = bind(this.L, this);
        } else {
          this.G = defer(this.L, this.i, this);
        }
      }
      each(this.v, join(this, "Sending request"));
      /** @type {boolean} */
      this.s = true;
      this.c.send(data);
      /** @type {boolean} */
      this.s = false;
    } catch (pdataCur) {
      each(this.v, join(this, "Send error: " + pdataCur.message));
      completed(this, pdataCur);
    }
  };
  /**
   * @return {undefined}
   */
  c.L = function() {
    if ("undefined" != typeof io) {
      if (this.c) {
        /** @type {string} */
        this.m = "Timed out after " + this.i + "ms, aborting";
        each(this.v, join(this, this.m));
        callback(this, "timeout");
        if (this.c) {
          if (this.f) {
            each(this.v, join(this, "Aborting"));
            /** @type {boolean} */
            this.f = false;
            /** @type {boolean} */
            this.h = true;
            this.c.abort();
            /** @type {boolean} */
            this.h = false;
            callback(this, "complete");
            callback(this, "abort");
            ready(this);
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.K = function() {
    if (this.c) {
      if (this.f) {
        /** @type {boolean} */
        this.f = false;
        /** @type {boolean} */
        this.h = true;
        this.c.abort();
        /** @type {boolean} */
        this.h = false;
      }
      ready(this, true);
    }
    format.ca.K.call(this);
  };
  /**
   * @return {undefined}
   */
  c.ga = function() {
    if (!this.l) {
      if (this.P || (this.s || this.h)) {
        done(this);
      } else {
        this.za();
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.za = function() {
    done(this);
  };
  /**
   * @return {?}
   */
  c.w = function() {
    try {
      return 2 < posFromMouse(this) ? this.c.status : -1;
    } catch (a) {
      return-1;
    }
  };
  /**
   * @return {?}
   */
  Node.prototype.toString = function() {
    /** @type {Array} */
    var html = [];
    var i = this.i;
    if (i) {
      html.push(escapeHTML(i, badChars, true), ":");
    }
    if (i = this.c) {
      html.push("//");
      var text = this.o;
      if (text) {
        html.push(escapeHTML(text, badChars, true), "@");
      }
      html.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
      i = this.s;
      if (null != i) {
        html.push(":", String(i));
      }
    }
    if (i = this.f) {
      if (this.c) {
        if ("/" != i.charAt(0)) {
          html.push("/");
        }
      }
      html.push(escapeHTML(i, "/" == i.charAt(0) ? rclass : newlineRe, true));
    }
    if (i = this.h.toString()) {
      html.push("?", i);
    }
    if (i = this.l) {
      html.push("#", escapeHTML(i, r20));
    }
    return html.join("");
  };
  /**
   * @return {?}
   */
  Node.prototype.clone = function() {
    return new Node(this);
  };
  /** @type {RegExp} */
  var badChars = /[#\/\?@]/g;
  /** @type {RegExp} */
  var newlineRe = /[\#\?:]/g;
  /** @type {RegExp} */
  var rclass = /[\#\?]/g;
  /** @type {RegExp} */
  var rreturn = /[\#\?@]/g;
  /** @type {RegExp} */
  var r20 = /#/g;
  c = Element.prototype;
  /**
   * @return {undefined}
   */
  c.clear = function() {
    /** @type {null} */
    this.c = this.f = null;
    /** @type {number} */
    this.h = 0;
  };
  /**
   * @return {?}
   */
  c.I = function() {
    next(this);
    var segs = this.c.J();
    var codeSegments = this.c.I();
    /** @type {Array} */
    var arrayOfArgs = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var seg = segs[i];
      /** @type {number} */
      var k = 0;
      for (;k < seg.length;k++) {
        arrayOfArgs.push(codeSegments[i]);
      }
    }
    return arrayOfArgs;
  };
  /**
   * @param {(Object|string)} x
   * @return {?}
   */
  c.J = function(x) {
    next(this);
    /** @type {Array} */
    var mappedLoc = [];
    if (expect(x)) {
      /** @type {(Object|string)} */
      var i = x;
      next(this);
      i = iterator(this, i);
      if (hasOwnProperty(this.c.f, i)) {
        mappedLoc = union(mappedLoc, keys(this.c, iterator(this, x)));
      }
    } else {
      x = this.c.J();
      /** @type {number} */
      i = 0;
      for (;i < x.length;i++) {
        mappedLoc = union(mappedLoc, x[i]);
      }
    }
    return mappedLoc;
  };
  /**
   * @return {?}
   */
  c.toString = function() {
    if (this.f) {
      return this.f;
    }
    if (!this.c) {
      return "";
    }
    /** @type {Array} */
    var assigns = [];
    var coverage = this.c.I();
    /** @type {number} */
    var line = 0;
    for (;line < coverage.length;line++) {
      var value = coverage[line];
      /** @type {string} */
      var redirect_uri = encodeURIComponent(String(value));
      value = this.J(value);
      /** @type {number} */
      var i = 0;
      for (;i < value.length;i++) {
        /** @type {string} */
        var vvar = redirect_uri;
        if ("" !== value[i]) {
          vvar += "=" + encodeURIComponent(String(value[i]));
        }
        assigns.push(vvar);
      }
    }
    return this.f = assigns.join("&");
  };
  /**
   * @return {?}
   */
  c.clone = function() {
    var p = new Element;
    p.f = this.f;
    if (this.c) {
      p.c = this.c.clone();
      p.h = this.h;
    }
    return p;
  };
  /** @type {function (Object, ?): ?} */
  val.prototype.thenCatch = val.prototype.ja;
  var rvar = {};
  run("dymo.label.framework.FlowDirection", rvar);
  /** @type {string} */
  rvar.LeftToRight = "LeftToRight";
  /** @type {string} */
  rvar.RightToLeft = "RightToLeft";
  var J = {};
  run("dymo.label.framework.LabelWriterPrintQuality", J);
  /** @type {string} */
  J.Auto = "Auto";
  /** @type {string} */
  J.Text = "Text";
  /** @type {string} */
  J.BarcodeAndGraphics = "BarcodeAndGraphics";
  var MouseButton = {};
  run("dymo.label.framework.TwinTurboRoll", MouseButton);
  /** @type {string} */
  MouseButton.Auto = "Auto";
  /** @type {string} */
  MouseButton.Left = "Left";
  /** @type {string} */
  MouseButton.Right = "Right";
  var modId = {};
  run("dymo.label.framework.TapeAlignment", modId);
  /** @type {string} */
  modId.Center = "Center";
  /** @type {string} */
  modId.Left = "Left";
  /** @type {string} */
  modId.Right = "Right";
  var parentName = {};
  run("dymo.label.framework.TapeCutMode", parentName);
  /** @type {string} */
  parentName.AutoCut = "AutoCut";
  /** @type {string} */
  parentName.ChainMarks = "ChainMarks";
  var copies = {};
  run("dymo.label.framework.AddressBarcodePosition", copies);
  /** @type {string} */
  copies.AboveAddress = "AboveAddress";
  /** @type {string} */
  copies.BelowAddress = "BelowAddress";
  /** @type {string} */
  copies.Suppress = "Suppress";
  var o = {};
  run("dymo.label.framework.PrintJobStatus", o);
  /** @type {number} */
  o.S = 0;
  /** @type {number} */
  o.Unknown = o.S;
  /** @type {number} */
  o.va = 1;
  /** @type {number} */
  o.Printing = o.va;
  /** @type {number} */
  o.ma = 2;
  /** @type {number} */
  o.Finished = o.ma;
  /** @type {number} */
  o.Error = 3;
  /** @type {number} */
  o.Error = o.Error;
  /** @type {number} */
  o.ta = 4;
  /** @type {number} */
  o.PaperOut = o.ta;
  /** @type {number} */
  o.oa = 5;
  /** @type {number} */
  o.InQueue = o.oa;
  /** @type {number} */
  o.da = -1;
  /** @type {number} */
  o.ProcessingError = o.da;
  /** @type {number} */
  o.ua = -2;
  /** @type {number} */
  o.PrinterBusy = o.ua;
  /** @type {number} */
  o.pa = -3;
  /** @type {number} */
  o.InvalidJobId = o.pa;
  /** @type {number} */
  o.sa = -4;
  /** @type {number} */
  o.NotSpooled = o.sa;
  run("dymo.label.framework.LabelSetBuilder", res);
  /**
   * @return {?}
   */
  res.prototype.h = function() {
    return this.c;
  };
  /** @type {function (): ?} */
  res.prototype.getRecords = res.prototype.h;
  /**
   * @return {?}
   */
  res.prototype.f = function() {
    var x = new options;
    this.c.push(x);
    return x;
  };
  /** @type {function (): ?} */
  res.prototype.addRecord = res.prototype.f;
  /** @type {function (Array): ?} */
  res.toXml = render;
  /**
   * @return {?}
   */
  res.prototype.toString = function() {
    return render(this.c);
  };
  /**
   * @param {number} value
   * @param {string} color
   * @return {?}
   */
  options.prototype.h = function(value, color) {
    color = color.toString();
    if (0 != color.indexOf("<TextMarkup>")) {
      /** @type {string} */
      color = "<TextMarkup>" + color + "</TextMarkup>";
    }
    /** @type {string} */
    this[value] = color;
    return this;
  };
  /** @type {function (number, string): ?} */
  options.prototype.setTextMarkup = options.prototype.h;
  /**
   * @param {number} value
   * @param {?} key
   * @return {?}
   */
  options.prototype.f = function(value, key) {
    this[value] = key;
    return this;
  };
  /** @type {function (number, ?): ?} */
  options.prototype.setText = options.prototype.f;
  /**
   * @param {number} value
   * @param {?} key
   * @return {?}
   */
  options.prototype.c = function(value, key) {
    this[value] = key;
    return this;
  };
  /** @type {function (number, ?): ?} */
  options.prototype.setBase64Image = options.prototype.c;
  /**
   * @return {?}
   */
  item.prototype.c = function() {
    return parseString(this.f);
  };
  /** @type {function (): ?} */
  item.prototype.getLabelXml = item.prototype.c;
  /**
   * @param {string} d
   * @param {string} key
   * @return {?}
   */
  item.prototype.M = function(d, key) {
    return find(this.c(), d, key);
  };
  /** @type {function (string, string): ?} */
  item.prototype.render = item.prototype.M;
  /**
   * @param {string} y
   * @param {string} which
   * @return {?}
   */
  item.prototype.O = function(y, which) {
    return show(this.c(), y, which);
  };
  /** @type {function (string, string): ?} */
  item.prototype.renderAsync = item.prototype.O;
  /**
   * @param {number} value
   * @param {string} y
   * @param {string} m
   * @return {undefined}
   */
  item.prototype.h = function(value, y, m) {
    f(value, y, this.c(), m);
  };
  /** @type {function (number, string, string): undefined} */
  item.prototype.print = item.prototype.h;
  /**
   * @param {string} d
   * @param {string} s
   * @param {string} date
   * @return {?}
   */
  item.prototype.H = function(d, s, date) {
    return success(d, s, this.c(), date);
  };
  /** @type {function (string, string, string): ?} */
  item.prototype.printAsync = item.prototype.H;
  /**
   * @param {number} el
   * @param {string} name
   * @param {string} d
   * @return {?}
   */
  item.prototype.A = function(el, name, d) {
    return value(el, name, this.c(), d);
  };
  /** @type {function (number, string, string): ?} */
  item.prototype.print2 = item.prototype.A;
  /**
   * @param {number} value
   * @param {string} i
   * @param {string} l
   * @return {?}
   */
  item.prototype.F = function(value, i, l) {
    return resolve(value, i, this.c(), l);
  };
  /** @type {function (number, string, string): ?} */
  item.prototype.print2Async = item.prototype.F;
  /**
   * @param {number} date
   * @param {string} n
   * @param {string} d
   * @param {?} x1
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  item.prototype.G = function(date, n, d, x1, deepDataAndEvents) {
    return p(date, n, this.c(), d, x1, deepDataAndEvents);
  };
  /** @type {function (number, string, string, ?, Object): ?} */
  item.prototype.printAndPollStatus = item.prototype.G;
  /**
   * @param {number} seconds
   * @param {string} d
   * @param {string} mod
   * @param {?} next_callback
   * @param {Object} deepDataAndEvents
   * @return {?}
   */
  item.prototype.B = function(seconds, d, mod, next_callback, deepDataAndEvents) {
    return tick(seconds, d, this.c(), mod, next_callback, deepDataAndEvents);
  };
  /** @type {function (number, string, string, ?, Object): ?} */
  item.prototype.printAndPollStatusAsync = item.prototype.B;
  /** @type {Array.<string>} */
  var common = "AddressObject TextObject BarcodeObject ShapeObject CounterObject ImageObject CircularTextObject DateTimeObject".split(" ");
  /**
   * @return {?}
   */
  item.prototype.o = function() {
    var codeSegments = apply(this);
    /** @type {Array} */
    var str = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      str.push(stringify(createElement(codeSegments[i], "Name")));
    }
    return str;
  };
  /** @type {function (): ?} */
  item.prototype.getObjectNames = item.prototype.o;
  /**
   * @return {?}
   */
  item.prototype.l = function() {
    return apply(this, ["AddressObject"]).length;
  };
  /** @type {function (): ?} */
  item.prototype.getAddressObjectCount = item.prototype.l;
  /**
   * @param {number} value
   * @return {?}
   */
  item.prototype.i = function(value) {
    return stringify(createElement(mixin(this, value), "BarcodePosition"));
  };
  /** @type {function (number): ?} */
  item.prototype.getAddressBarcodePosition = item.prototype.i;
  /**
   * @param {number} value
   * @param {string} el
   * @return {?}
   */
  item.prototype.P = function(value, el) {
    if ("AboveAddress" != el && ("BelowAddress" != el && "Suppress" != el)) {
      throw Error("verifyAddressBarcodePosition(): barcode position '" + el + "' is invalid value");
    }
    merge(createElement(mixin(this, value), "BarcodePosition"), el);
    return this;
  };
  /** @type {function (number, string): ?} */
  item.prototype.setAddressBarcodePosition = item.prototype.P;
  /**
   * @param {number} value
   * @return {?}
   */
  item.prototype.m = function(value) {
    return contains(mixin(this, value));
  };
  /** @type {function (number): ?} */
  item.prototype.getAddressText = item.prototype.m;
  /**
   * @param {number} value
   * @param {string} data
   * @return {?}
   */
  item.prototype.R = function(value, data) {
    return set(this, mixin(this, value), data);
  };
  /** @type {function (number, string): ?} */
  item.prototype.setAddressText = item.prototype.R;
  /**
   * @param {Object} value
   * @return {?}
   */
  item.prototype.s = function(value) {
    value = convert(this, value);
    switch(value.tagName) {
      case "AddressObject":
      ;
      case "TextObject":
        return contains(value);
      case "BarcodeObject":
        return stringify(createElement(value, "Text"));
      case "ImageObject":
        if (value = createElement(value, "Image")) {
          return stringify(value);
        }
        break;
      case "CircularTextObject":
        return stringify(createElement(value, "Text"));
    }
    return "";
  };
  /** @type {function (Object): ?} */
  item.prototype.getObjectText = item.prototype.s;
  /**
   * @param {string} d
   * @param {string} type
   * @return {?}
   */
  item.prototype.Z = function(d, type) {
    var x = convert(this, d);
    switch(x.tagName) {
      case "AddressObject":
        set(this, x, type);
        break;
      case "TextObject":
        set(this, x, type);
        break;
      case "BarcodeObject":
        merge(createElement(x, "Text"), type);
        break;
      case "ImageObject":
        var o = createElement(x, "Image");
        if (o) {
          merge(o, type);
        } else {
          var element = createElement(x, "ImageLocation");
          if (!element) {
            throw Error("setObjectText(): <ImageLocation> is expected but not found: " + parseString(o));
          }
          o = element.ownerDocument.createElement("Image");
          merge(o, type);
          x.replaceChild(o, element);
        }
        break;
      case "CircularTextObject":
        merge(createElement(x, "Text"), type);
        break;
      case "DateTimeObject":
        merge(createElement(x, "PreText"), type);
        break;
      case "CounterObject":
        merge(createElement(x, "PreText"), type);
    }
    return this;
  };
  /** @type {function (string, string): ?} */
  item.prototype.setObjectText = item.prototype.Z;
  /**
   * @return {?}
   */
  item.prototype.toString = function() {
    return this.c();
  };
  /**
   * @param {Array} event
   * @return {undefined}
   */
  strictParse.prototype.cancel = function(event) {
    if (this.c) {
      if (this.h instanceof strictParse) {
        this.h.cancel();
      }
    } else {
      if (this.f) {
        var item = this.f;
        delete this.f;
        if (event) {
          item.cancel(event);
        } else {
          item.s--;
          if (0 >= item.s) {
            item.cancel();
          }
        }
      }
      if (this.B) {
        this.B.call(this.G, this);
      } else {
        /** @type {boolean} */
        this.A = true;
      }
      if (!this.c) {
        event = new result;
        trigger(this);
        reject(this, false, event);
      }
    }
  };
  /**
   * @param {number} value
   * @param {Array} isXML
   * @return {undefined}
   */
  strictParse.prototype.F = function(value, isXML) {
    /** @type {boolean} */
    this.o = false;
    reject(this, value, isXML);
  };
  /**
   * @param {Function} handler
   * @param {string} next
   * @param {string} context
   * @return {?}
   */
  strictParse.prototype.then = function(handler, next, context) {
    var text;
    var cb;
    var _ = new val(function(textAlt, chunk) {
      text = textAlt;
      cb = chunk;
    });
    ok(this, text, function(outErr) {
      if (outErr instanceof result) {
        _.cancel();
      } else {
        cb(outErr);
      }
    });
    return _.then(handler, next, context);
  };
  isKind(strictParse);
  isString(e, assert);
  /** @type {string} */
  e.prototype.message = "Deferred has already fired";
  /** @type {string} */
  e.prototype.name = "AlreadyCalledError";
  isString(result, assert);
  /** @type {string} */
  result.prototype.message = "Deferred was canceled";
  /** @type {string} */
  result.prototype.name = "CanceledError";
  /**
   * @return {undefined}
   */
  a.prototype.f = function() {
    delete blockElementsMap[this.u];
    throw this.c;
  };
  var blockElementsMap = {};
  /** @type {number} */
  var exp = 0;
  /** @type {number} */
  var length = 1;
  isString(html, assert);
  /** @type {number} */
  var UID = 0;
  /**
   * @param {Object} hash
   * @param {Object} data
   * @param {Function} next
   * @param {string} s
   * @return {?}
   */
  module.prototype.send = function(hash, data, next, s) {
    hash = hash || null;
    s = s || "_" + (UID++).toString(36) + publish().toString(36);
    if (!global._callbacks_) {
      global._callbacks_ = {};
    }
    var input = this.f.clone();
    if (hash) {
      var a;
      for (a in hash) {
        if (!hash.hasOwnProperty || hash.hasOwnProperty(a)) {
          var result = input;
          /** @type {string} */
          var udataCur = a;
          var value = hash[a];
          if (!isArray(value)) {
            /** @type {Array} */
            value = [String(value)];
          }
          invoke(result.h, udataCur, value);
        }
      }
    }
    if (data) {
      global._callbacks_[s] = part(s, data);
      data = this.c;
      /** @type {string} */
      a = "_callbacks_." + s;
      if (!isArray(a)) {
        /** @type {Array} */
        a = [String(a)];
      }
      invoke(input.h, data, a);
    }
    data = loadScript(input.toString(), {
      timeout : this.L,
      xa : true
    });
    ok(data, null, end(s, hash, next), void 0);
    return{
      u : s,
      fa : data
    };
  };
  /**
   * @param {Array} el
   * @return {undefined}
   */
  module.prototype.cancel = function(el) {
    if (el) {
      if (el.fa) {
        el.fa.cancel();
      }
      if (el.u) {
        getAll(el.u, false);
      }
    }
  };
  isString(setup, t);
  /** @type {number} */
  setup.prototype.u = 0;
  /**
   * @return {undefined}
   */
  setup.prototype.K = function() {
    setup.ca.K.call(this);
    if (0 != this.u) {
      global.clearTimeout(this.u);
    }
    /** @type {number} */
    this.u = 0;
    delete this.c;
    delete this.f;
  };
  /**
   * @return {undefined}
   */
  setup.prototype.i = function() {
    /** @type {number} */
    this.u = 0;
    if (this.c) {
      this.c.call(this.f);
    }
  };
  var not = function() {
    /**
     * @param {Array} value
     * @return {?}
     */
    function extend(value) {
      /** @type {Array} */
      var result = computed;
      return result[value[0]] + result[value[1]] + result[value[2]] + result[value[3]] + "-" + result[value[4]] + result[value[5]] + "-" + result[value[6]] + result[value[7]] + "-" + result[value[8]] + result[value[9]] + "-" + result[value[10]] + result[value[11]] + result[value[12]] + result[value[13]] + result[value[14]] + result[value[15]];
    }
    /**
     * @param {string} chai
     * @param {number} binary
     * @param {number} includeAll
     * @return {?}
     */
    function exports(chai, binary, includeAll) {
      var pdataOld = "binary" != chai ? view : binary ? binary : new c(16);
      binary = binary && includeAll || 0;
      /** @type {number} */
      includeAll = 4294967296 * Math.random();
      /** @type {number} */
      pdataOld[binary++] = includeAll & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = includeAll >>> 8 & 255;
      /** @type {number} */
      includeAll = 4294967296 * Math.random();
      /** @type {number} */
      pdataOld[binary++] = includeAll & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 15 | 64;
      /** @type {number} */
      pdataOld[binary++] = includeAll >>> 8 & 255;
      /** @type {number} */
      includeAll = 4294967296 * Math.random();
      /** @type {number} */
      pdataOld[binary++] = includeAll & 63 | 128;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = includeAll >>> 8 & 255;
      /** @type {number} */
      includeAll = 4294967296 * Math.random();
      /** @type {number} */
      pdataOld[binary++] = includeAll & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = (includeAll >>>= 8) & 255;
      /** @type {number} */
      pdataOld[binary++] = includeAll >>> 8 & 255;
      return void 0 === chai ? extend(pdataOld) : pdataOld;
    }
    /** @type {function (new:Array, ...[*]): Array} */
    var c = Array;
    /** @type {Array} */
    var view = new c(16);
    /** @type {Array} */
    var computed = [];
    var _hexToByte = {};
    /** @type {number} */
    var i = 0;
    for (;256 > i;i++) {
      /** @type {string} */
      computed[i] = (i + 256).toString(16).substr(1).toUpperCase();
      /** @type {number} */
      _hexToByte[computed[i]] = i;
    }
    /**
     * @param {number} value
     * @return {?}
     */
    exports.f = function(value) {
      /** @type {Array} */
      var buf = new c(16);
      /** @type {number} */
      var offset = 0;
      value.toUpperCase().replace(/[0-9A-F][0-9A-F]/g, function(oct) {
        buf[offset++] = _hexToByte[oct];
      });
      return buf;
    };
    /** @type {function (Array): ?} */
    exports.h = extend;
    /** @type {function (new:Array, ...[*]): Array} */
    exports.c = c;
    return exports;
  }();
  run("dymo.label.framework.trace", false);
  /** @type {number} */
  var Vd = 0;
  var error = function() {
    /**
     * @param {Object} fn
     * @param {boolean} options
     * @return {?}
     */
    function compile(fn, options) {
      if (d) {
        throw log("_createFramework > Error service discovery is in progress. "), Error("DYMO Label Framework service discovery is in progress.");
      }
      return element ? (log("_createFramework > returning existing instance of _framework, has callBack: " + !!fn), fn && fn(), element) : this && this.constructor == compile ? (d = true, error.c = function() {
        /** @type {null} */
        element = null;
        /** @type {number} */
        Vd = 0;
      }, readFile(function(p) {
        log("onEnvironmentChecked > checkResult isBrowserSupported : " + p.isBrowserSupported + ", isFrameworkInstalled: " + p.isFrameworkInstalled + ", isWebServicePresent: " + p.isWebServicePresent + ", errorDetails: " + p.errorDetails);
        try {
          element = setFillAndStroke(p);
          /** @type {number} */
          Vd = p.isWebServicePresent ? 2 : 1;
        } catch (scope) {
          log("onEnvironmentChecked > exception e : " + (scope.description || (scope.message || scope)));
          if (!options) {
            throw scope;
          }
          element = link(scope);
          log("onEnvironmentChecked > fall back to createFaultyFramework");
        } finally {
          /** @type {boolean} */
          d = false;
        }
        if (fn) {
          fn();
        }
      }, options), log("_createFramework > return _framework : " + element + (options ? " (async)" : " (sync)")), element) : new compile(fn, options);
    }
    var element;
    /** @type {boolean} */
    var d = false;
    return compile;
  }();
  run("dymo.label.framework.init", function(src, callback) {
    if(typeof src == 'function'){
      callback = src;
    }
    else {
      URL = src;
    }
    error(callback, true);
  });
  isString(Map, extend);
  isString(Group, extend);
  isString(defaults, extend);
  /**
   * @return {?}
   */
  r.prototype.h = function() {
    return this.c.name;
  };
  /** @type {function (): ?} */
  r.prototype.getPrinterName = r.prototype.h;
  /**
   * @return {?}
   */
  r.prototype.i = function() {
    return this.f;
  };
  /** @type {function (): ?} */
  r.prototype.getJobId = r.prototype.i;
  /**
   * @param {Function} a
   * @return {undefined}
   */
  r.prototype.w = function(a) {
    if ("" != this.c.C) {
      handler(this, a);
    } else {
      var invoked;
      try {
        invoked = error().getJobStatus(this.c.name, this.f);
      } catch (exp) {
        invoked = new Job(this.h(), this.f, o.da, exp.message || exp);
      }
      a(invoked);
    }
  };
  /** @type {function (Function): undefined} */
  r.prototype.getStatus = r.prototype.w;
  run("dymo.label.framework.VERSION", "2.0.2");
  run("dymo.label.framework.checkEnvironment", readFile);
  var map = {};
  /**
   * @return {?}
   */
  Item.prototype.getPrinters = function() {
    var codeSegments = load(this.h);
    var i = new Node(this.c);
    var value = this.f;
    if ("" == value) {
      value = i.c;
    }
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;++i) {
      var node = codeSegments[i];
      var name = node.name;
      /** @type {string} */
      node.name = name + " @ " + value;
      node.C = this.c;
      node.location = value;
      node.c = name;
      node.printerUri = node.C;
      node.location = node.location;
      node.localName = node.c;
    }
    return codeSegments;
  };
  run("dymo.label.framework.addPrinterUri", function(template, query, done, toString) {
    var date = query || "";
    if (!expect(date)) {
      date = date.toString();
    }
    /** @type {null} */
    query = null;
    if (toString) {
      /**
       * @return {undefined}
       */
      query = function() {
        toString(template);
      };
    }
    var props = endsWith(template);
    (new module(props, "callback")).send(null, function(notCreate) {
      map[template] = new Item(template, date, notCreate);
      if (done) {
        done(template);
      }
    }, query);
  });
  run("dymo.label.framework.removePrinterUri", function(letter) {
    delete map[letter];
  });
  run("dymo.label.framework.removeAllPrinterUri", function() {
    map = {};
  });
  run("dymo.label.framework.getPrinters", check);
  run("dymo.label.framework.getPrintersAsync", test);
  run("dymo.label.framework.getLabelWriterPrinters", function() {
    return copy("LabelWriterPrinter");
  });
  run("dymo.label.framework.getTapePrinters", function() {
    return copy("TapePrinter");
  });
  run("dymo.label.framework.getDZPrinters", function() {
    return copy("DZPrinter");
  });
  run("dymo.label.framework.getLabelWriterPrintersAsync", function() {
    return all("LabelWriterPrinter");
  });
  run("dymo.label.framework.getTapePrintersAsync", function() {
    return all("TapePrinter");
  });
  run("dymo.label.framework.getDZPrintersAsync", function() {
    return all("DZPrinter");
  });
  run("dymo.label.framework.openLabelFile", function(ready) {
    return new item(error().openLabelFile(ready));
  });
  run("dymo.label.framework.openLabelFileAsync", function(ready) {
    return error().V(ready).then(function(dataAndEvents) {
      return new item(dataAndEvents);
    });
  });
  run("dymo.label.framework.openLabelXml", function(name) {
    var options = new Buffer("dymo.label.framework");
    options.c = context;
    options.log(context, name, void 0);
    return new item(name);
  });
  run("dymo.label.framework.printLabel", f);
  run("dymo.label.framework.printLabelAsync", success);
  run("dymo.label.framework.printLabel2", value);
  run("dymo.label.framework.printLabel2Async", resolve);
  run("dymo.label.framework.printLabelAndPollStatus", p);
  run("dymo.label.framework.printLabelAndPollStatusAsync", tick);
  run("dymo.label.framework.renderLabel", find);
  run("dymo.label.framework.renderLabelAsync", show);
  run("dymo.label.framework.loadImageAsPngBase64", function(ready) {
    return error().loadImageAsPngBase64(ready);
  });
  run("dymo.label.framework.loadImageAsPngBase64Async", function(ready) {
    return error().U(ready);
  });
  run("dymo.label.framework.createLabelWriterPrintParamsXml", function(obj) {
    if (!obj) {
      return "";
    }
    var xml = parseXML("<LabelWriterPrintParams/>");
    var container = xml.documentElement;
    if (obj.copies) {
      numberLines(container, "Copies", obj.copies.toString());
    }
    if (obj.jobTitle) {
      numberLines(container, "JobTitle", obj.jobTitle);
    }
    if (obj.flowDirection) {
      numberLines(container, "FlowDirection", obj.flowDirection);
    }
    if (obj.printQuality) {
      numberLines(container, "PrintQuality", obj.printQuality);
    }
    if (obj.twinTurboRoll) {
      numberLines(container, "TwinTurboRoll", obj.twinTurboRoll);
    }
    return parseString(xml);
  });
  run("dymo.label.framework.createTapePrintParamsXml", function(obj) {
    if (!obj) {
      return "";
    }
    var xml = parseXML("<TapePrintParams/>");
    var container = xml.documentElement;
    if (obj.copies) {
      numberLines(container, "Copies", obj.copies.toString());
    }
    if (obj.jobTitle) {
      numberLines(container, "JobTitle", obj.jobTitle);
    }
    if (obj.flowDirection) {
      numberLines(container, "FlowDirection", obj.flowDirection);
    }
    if (obj.alignment) {
      numberLines(container, "Alignment", obj.alignment);
    }
    if (obj.cutMode) {
      numberLines(container, "CutMode", obj.cutMode);
    }
    return parseString(xml);
  });
  run("dymo.label.framework.createDZPrintParamsXml", function(obj) {
    if (!obj) {
      return "";
    }
    var xml = parseXML("<DZPrintParams/>");
    var container = xml.documentElement;
    if (obj.copies) {
      numberLines(container, "Copies", obj.copies.toString());
    }
    if (obj.jobTitle) {
      numberLines(container, "JobTitle", obj.jobTitle);
    }
    if (obj.flowDirection) {
      numberLines(container, "FlowDirection", obj.flowDirection);
    }
    if (obj.alignment) {
      numberLines(container, "Alignment", obj.alignment);
    }
    if (obj.cutMode) {
      numberLines(container, "CutMode", obj.cutMode);
    }
    return parseString(xml);
  });
  run("dymo.label.framework.createLabelRenderParamsXml", function(opts) {
    /**
     * @param {string} sel
     * @param {string} color
     * @return {undefined}
     */
    function initialize(sel, color) {
      numberLines(container, sel, void 0, {
        Alpha : color.a || (color.alpha || 255),
        Red : color.r || (color.red || 0),
        Green : color.g || (color.green || 0),
        Blue : color.b || (color.blue || 0)
      });
    }
    if (!opts) {
      return "";
    }
    var xml = parseXML("<LabelRenderParams/>");
    var container = xml.documentElement;
    if (opts.labelColor) {
      initialize("LabelColor", opts.labelColor);
    }
    if (opts.shadowColor) {
      initialize("ShadowColor", opts.shadowColor);
    }
    if ("undefined" != typeof opts.shadowDepth) {
      numberLines(container, "ShadowDepth", opts.shadowDepth.toString());
    }
    if (opts.flowDirection) {
      numberLines(container, "FlowDirection", opts.flowDirection);
    }
    if ("undefined" != typeof opts.pngUseDisplayResolution) {
      numberLines(container, "PngUseDisplayResolution", opts.pngUseDisplayResolution ? "True" : "False");
    }
    return parseString(xml);
  });
})();
