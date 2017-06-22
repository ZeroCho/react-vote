module.exports = function (t) {
  function e(r) {
    if (n[r])return n[r].exports;
    var o = n[r] = { i: r, l: !1, exports: {} };
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
  }

  var n = {};
  return e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r })
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e(e.s = 13)
}([function (t, e, n) {
  "use strict";
  function r(t, e, n, r, a, i, s, u) {
    if (o(e), !t) {
      var l;
      if (void 0 === e) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
        var c = [n, r, a, i, s, u], p = 0;
        l = new Error(e.replace(/%s/g, function () {
          return c[p++]
        })), l.name = "Invariant Violation"
      }
      throw l.framesToPop = 1, l
    }
  }

  var o = function (t) {
  };
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return void 0 !== t.ref
  }

  function o(t) {
    return void 0 !== t.key
  }

  var a = n(2), i = n(10), s = (n(4), n(8), Object.prototype.hasOwnProperty), u = n(11),
    l = { key: !0, ref: !0, __self: !0, __source: !0 }, c = function (t, e, n, r, o, a, i) {
      var s = { $$typeof: u, type: t, key: e, ref: n, props: i, _owner: a };
      return s
    };
  c.createElement = function (t, e, n) {
    var a, u = {}, p = null, f = null;
    if (null != e) {
      r(e) && (f = e.ref), o(e) && (p = "" + e.key), void 0 === e.__self ? null : e.__self, void 0 === e.__source ? null : e.__source;
      for (a in e)s.call(e, a) && !l.hasOwnProperty(a) && (u[a] = e[a])
    }
    var d = arguments.length - 2;
    if (1 === d) u.children = n; else if (d > 1) {
      for (var m = Array(d), h = 0; h < d; h++)m[h] = arguments[h + 2];
      u.children = m
    }
    if (t && t.defaultProps) {
      var v = t.defaultProps;
      for (a in v)void 0 === u[a] && (u[a] = v[a])
    }
    return c(t, p, f, 0, 0, i.current, u)
  }, c.createFactory = function (t) {
    var e = c.createElement.bind(null, t);
    return e.type = t, e
  }, c.cloneAndReplaceKey = function (t, e) {
    return c(t.type, e, t.ref, t._self, t._source, t._owner, t.props)
  }, c.cloneElement = function (t, e, n) {
    var u, p = a({}, t.props), f = t.key, d = t.ref, m = (t._self, t._source, t._owner);
    if (null != e) {
      r(e) && (d = e.ref, m = i.current), o(e) && (f = "" + e.key);
      var h;
      t.type && t.type.defaultProps && (h = t.type.defaultProps);
      for (u in e)s.call(e, u) && !l.hasOwnProperty(u) && (void 0 === e[u] && void 0 !== h ? p[u] = h[u] : p[u] = e[u])
    }
    var v = arguments.length - 2;
    if (1 === v) p.children = n; else if (v > 1) {
      for (var y = Array(v), g = 0; g < v; g++)y[g] = arguments[g + 2];
      p.children = y
    }
    return c(t.type, f, d, 0, 0, m, p)
  }, c.isValidElement = function (t) {
    return "object" == typeof t && null !== t && t.$$typeof === u
  }, t.exports = c
}, function (t, e, n) {
  "use strict";
  function r(t) {
    if (null === t || void 0 === t)throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
  }

  /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
  var o = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  t.exports = function () {
    try {
      if (!Object.assign)return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0])return !1;
      for (var e = {}, n = 0; n < 10; n++)e["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
          return e[t]
        }).join(""))return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (t) {
        r[t] = t
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
    } catch (t) {
      return !1
    }
  }() ? Object.assign : function (t, e) {
    for (var n, s, u = r(t), l = 1; l < arguments.length; l++) {
      n = Object(arguments[l]);
      for (var c in n)a.call(n, c) && (u[c] = n[c]);
      if (o) {
        s = o(n);
        for (var p = 0; p < s.length; p++)i.call(n, s[p]) && (u[s[p]] = n[s[p]])
      }
    }
    return u
  }
}, function (t, e, n) {
  "use strict";
  function r(t) {
    for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++)n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
    n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    var o = new Error(n);
    throw o.name = "Invariant Violation", o.framesToPop = 1, o
  }

  t.exports = r
}, function (t, e, n) {
  "use strict";
  var r = n(5), o = r;
  t.exports = o
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return function () {
      return t
    }
  }

  var o = function () {
  };
  o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
    return this
  }, o.thatReturnsArgument = function (t) {
    return t
  }, t.exports = o
}, function (t, e, n) {
  "use strict";
  function r(t, e, n) {
    this.props = t, this.context = e, this.refs = l, this.updater = n || u
  }

  function o(t, e, n) {
    this.props = t, this.context = e, this.refs = l, this.updater = n || u
  }

  function a() {
  }

  var i = n(3), s = n(2), u = n(7), l = (n(8), n(9));
  n(0), n(16);
  r.prototype.isReactComponent = {}, r.prototype.setState = function (t, e) {
    "object" != typeof t && "function" != typeof t && null != t && i("85"), this.updater.enqueueSetState(this, t), e && this.updater.enqueueCallback(this, e, "setState")
  }, r.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this), t && this.updater.enqueueCallback(this, t, "forceUpdate")
  };
  a.prototype = r.prototype, o.prototype = new a, o.prototype.constructor = o, s(o.prototype, r.prototype), o.prototype.isPureReactComponent = !0, t.exports = {
    Component: r,
    PureComponent: o
  }
}, function (t, e, n) {
  "use strict";
  var r = (n(4), {
    isMounted: function (t) {
      return !1
    }, enqueueCallback: function (t, e) {
    }, enqueueForceUpdate: function (t) {
    }, enqueueReplaceState: function (t, e) {
    }, enqueueSetState: function (t, e) {
    }
  });
  t.exports = r
}, function (t, e, n) {
  "use strict";
  var r = !1;
  t.exports = r
}, function (t, e, n) {
  "use strict";
  var r = {};
  t.exports = r
}, function (t, e, n) {
  "use strict";
  var r = { current: null };
  t.exports = r
}, function (t, e, n) {
  "use strict";
  var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  t.exports = r
}, function (t, e, n) {
  "use strict";
  t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : { default: t }
  }

  function o(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
  }

  function a(t, e) {
    if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function i(t, e) {
    if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  Object.defineProperty(e, "__esModule", { value: !0 });
  var s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    }, u = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e
    }
  }(), l = n(14), c = r(l), p = n(31), f = r(p), d = function (t) {
    function e() {
      var t, n, r, i;
      o(this, e);
      for (var u = arguments.length, l = Array(u), p = 0; p < u; p++)l[p] = arguments[p];
      return n = r = a(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(l))), r.state = {
        showResult: !1,
        items: r.props.data ? r.props.data.items : [],
        data: s({}, r.props.data, {
          title: r.props.data && r.props.data.title,
          items: r.props.data && r.props.data.items,
          voters: r.props.data && r.props.data.voters || [],
          closed: r.props.data && r.props.data.closed || !1
        }),
        isAdmin: r.props.isAdmin,
        total: r.props.total,
        expansion: r.props.expansion,
        voted: r.props.clientId && !r.props.multiple && r.props.data.voters && r.props.data.voters.indexOf(r.props.clientId) > -1 || !1,
        multiple: r.props.multiple,
        showMessage: !1,
        errorMessage: !1,
        autoClose: r.props.autoClose,
        voteTitle: "",
        addInput: "",
        autoCloseNumber: null,
        multipleCheck: !1,
        expansionCheck: !1,
        expansionInput: ""
      }, r.onVoteTitleChange = function (t) {
        var e = t.target.value;
        r.setState(function () {
          return { voteTitle: e }
        })
      }, r.onAddInputChange = function (t) {
        var e = t.target.value;
        r.setState(function () {
          return { addInput: e }
        })
      }, r.onMultipleCheckChange = function (t) {
        var e = t.target.checked;
        r.setState(function () {
          return { multipleCheck: e }
        })
      }, r.onExpansionCheckChange = function (t) {
        var e = t.target.checked;
        r.setState(function () {
          return { expansionCheck: e }
        })
      }, r.onAutoCloseChange = function (t) {
        var e = t.target.value;
        r.setState(function () {
          return { autoCloseNumber: e }
        })
      }, r.onExpansionInputChange = function (t) {
        var e = t.target.value;
        r.setState(function () {
          return { expansionInput: e }
        })
      }, r.addItem = function () {
        var t = r.state.addInput, e = r.state.items;
        t && t.trim() && (e.push({ title: t, count: 0 }), r.setState(function () {
          return { items: e, addInput: "" }
        }))
      }, r.removeItem = function (t) {
        var e = r.state.items;
        e = e.filter(function (e, n) {
          return n !== t
        }), r.setState(function () {
          return { items: e }
        })
      }, r.createVote = function () {
        var t = r.props, e = t.onCreate, n = t.getData, o = t.errorMessage, a = o.noTitle, i = o.notEnoughItems,
          s = r.state.items, u = r.state.voteTitle, l = r.state.multipleCheck, c = r.state.expansionCheck,
          p = !!r.state.autoCloseNumber && parseInt(r.state.autoCloseNumber, 10),
          f = { title: u, items: s, multiple: l, expansion: c, closed: !1 };
        return p && !Number.isNaN(p) && (f.autoClose = p), u && u.trim() ? !f.expansion && f.items.length < 2 ? r.setState(function () {
          return { showMessage: !0, errorMessage: i }
        }) : (r.setState(function () {
          return { data: f, showMessage: !1, multiple: l, expansion: c, autoClose: p, items: s }
        }), n && "function" == typeof n && n(f), !e || "function" != typeof e || e(f.title, f)) : r.setState(function () {
          return { showMessage: !0, errorMessage: a }
        })
      }, r.expandVote = function () {
        var t = r.props, e = t.onExpand, n = t.getData, o = r.state.expansionInput;
        if (!o || !o.trim())return !1;
        var a = r.state.data, i = { title: o, count: 0, voters: [] };
        return a.items.push(i), r.setState(function () {
          return { data: a, items: a.items, expansionInput: "" }
        }), n && "function" == typeof n && n(a), !e || "function" != typeof e || e(a.title, i, a)
      }, r.showResult = function () {
        r.setState(function () {
          return { showResult: !0 }
        })
      }, r.showVoting = function () {
        r.setState(function () {
          return { showResult: !1 }
        })
      }, r.closeVote = function () {
        var t = r.props, e = t.getData, n = t.onClose, o = r.state.data;
        o.closed = !0, r.setState(function () {
          return { data: o }
        }), e && "function" == typeof e && e(o), n && "function" == typeof n && n(o.title, o)
      }, r.resetVote = function () {
        var t = r.props, e = t.getData, n = t.onReset, o = r.state.data;
        o.voters = [], o.items.forEach(function (t) {
          t.count = 0
        }), console.log(o), r.setState(function () {
          return { data: o }
        }), e && "function" == typeof e && e(o), n && "function" == typeof n && n(o.title, o)
      }, r.upvote = function (t) {
        var e = r.state, n = e.items, o = e.data, a = e.autoClose, i = r.props, s = i.getData, u = i.onUpvote,
          l = n.reduce(function (t, e) {
            return t + e.count
          }, 0);
        n[t].count += 1, n[t].voted = !0;
        var c = r.props.clientId;
        return n[t].voters || (n[t].voters = []), n[t].voters.push(c), o.items = n, o.voters ? -1 === o.voters.indexOf(c) && o.voters.push(c) : o.voters = [c], r.setState(function () {
          return { voted: !0, items: n, data: o }
        }), s && "function" == typeof s && s(o, n[t].title), u && "function" == typeof u && u(o.title, t, o), !(a && l + 1 >= a) || r.closeVote()
      }, r.renderItems = function (t) {
        var e = 0;
        return c.default.createElement("div", null, t.map(function (t) {
          var n = e, o = r.props, a = o.styles, i = o.text, s = o.clientId,
            u = s && t.voters && t.voters.indexOf(s) > -1,
            l = t.voted || u ? c.default.createElement("span", { className: a.votedText }, i.votedText) : (r.state.multiple || !r.state.voted) && c.default.createElement("button", {
                onClick: function () {
                  return r.upvote(n)
                }, className: a.voteButton
              }, i.voteButtonText), p = c.default.createElement("div", {
              key: "react-vote-item-" + n,
              className: a.itemWrapper
            }, c.default.createElement("div", {
              className: a.itemTitle,
              title: t.title
            }, t.title), r.state.data.title ? l : c.default.createElement("button", {
              onClick: function () {
                return r.removeItem(n)
              }, className: a.removeButton
            }, i.removeButtonText));
          return e += 1, p
        }))
      }, r.renderResult = function (t) {
        var n = 0, o = t.reduce(function (t, e) {
            return t + e.count
          }, 0), a = Object.assign({}, e.defaultProps.styles, r.props.styles),
          i = r.props.clientId && !r.state.multiple && r.state.data.voters.indexOf(r.props.clientId) > -1,
          s = Object.assign({}, e.defaultProps.text, r.props.text);
        return c.default.createElement("div", null, c.default.createElement("div", { className: a.voteTitle }, r.state.data.title), c.default.createElement("div", null, t.map(function (t) {
          var e = 0 === o ? 0 : (t.count / o * 100).toFixed(2), r = c.default.createElement("div", {
            key: "react-vote-result-" + n,
            className: a.itemWrapper
          }, c.default.createElement("div", {
            className: a.itemTitle,
            title: t.title
          }, t.title), c.default.createElement("div", { className: a.itemCount }, t.count + "(" + e + "%)"));
          return n += 1, r
        }), r.state.total && c.default.createElement("div", { className: a.itemWrapper }, c.default.createElement("div", { className: a.itemTitle }, s.totalText), c.default.createElement("div", { className: a.itemCount }, o))), !r.state.data.closed && !i && c.default.createElement("div", { className: a.buttonWrapper }, c.default.createElement("button", {
            className: a.goBackButton,
            onClick: r.showVoting
          }, s.goBackButtonText)))
      }, i = n, a(r, i)
    }

    return i(e, t), u(e, [{
      key: "componentWillMount", value: function () {
        this.props.getData && console.error("props getData is deprecated. Please use onCreate, onUpvote, onClose, onExpand instead. getData will be deleted next update and it will break your application")
      }
    }, {
      key: "componentWillReceiveProps", value: function (t) {
        t.data && this.setState(function () {
          return { data: t.data, items: t.data.items, isAdmin: t.isAdmin }
        })
      }
    }, {
      key: "renderCreationView", value: function () {
        var t = this.props, e = t.styles, n = t.text;
        return c.default.createElement("div", null, c.default.createElement("input", {
          className: e.titleInput,
          value: this.state.voteTitle,
          onChange: this.onVoteTitleChange,
          placeholder: n.titleInputPlaceholder
        }), c.default.createElement("div", { className: e.addWrapper }, this.renderItems(this.state.items), c.default.createElement("div", null, c.default.createElement("input", {
          className: e.addInput,
          value: this.state.addInput,
          onChange: this.onAddInputChange,
          placeholder: n.addInputPlaceholder
        }), c.default.createElement("button", {
          className: e.addButton,
          onClick: this.addItem
        }, n.addButtonText)), c.default.createElement("div", null, c.default.createElement("label", { htmlFor: "multiple" }, n.multipleCheckbox, c.default.createElement("input", {
          id: "multiple",
          type: "checkbox",
          checked: this.state.multipleCheck,
          onChange: this.onMultipleCheckChange
        })), " ", c.default.createElement("label", { htmlFor: "expansion" }, n.expansionCheckbox, c.default.createElement("input", {
          id: "expansion",
          type: "checkbox",
          checked: this.state.expansionCheck,
          onChange: this.onExpansionCheckChange
        })), " ", c.default.createElement("label", { htmlFor: "autoClose" }, n.autoCloseText, c.default.createElement("input", {
          id: "autoClose",
          value: this.state.autoClose,
          onChange: this.onAutoCloseChange,
          placeholder: n.autoClosePlaceholder
        })))), this.state.showMessage && c.default.createElement("div", { className: e.errorMessage }, this.state.errorMessage), c.default.createElement("div", { className: e.buttonWrapper }, c.default.createElement("button", {
          className: e.createButton,
          onClick: this.createVote
        }, n.createButtonText)))
      }
    }, {
      key: "render", value: function () {
        var t = this.props.clientId, n = t && !this.state.multiple && this.state.data.voters.indexOf(t) > -1,
          r = this.state.data.closed, o = this.state.data.title && (r || this.state.showResult || n),
          a = this.state.expansion && (!this.state.voted || this.state.multiple),
          i = Object.assign({}, e.defaultProps.text, this.props.text),
          s = Object.assign({}, e.defaultProps.styles, this.props.styles),
          u = o ? this.renderResult(this.state.items) : c.default.createElement("div", null, c.default.createElement("div", { className: s.voteTitle }, this.state.data.title), this.renderItems(this.state.items), a && c.default.createElement("div", { className: s.itemWrapper }, c.default.createElement("input", {
              className: s.expansionInput,
              value: this.state.expansionInput,
              onChange: this.onExpansionInputChange,
              placeholder: i.expansionPlaceholder
            }), c.default.createElement("button", {
              className: s.expansionButton,
              onClick: this.expandVote
            }, i.expansionButtonText)), c.default.createElement("div", { className: s.buttonWrapper }, c.default.createElement("button", {
            className: s.resultButton,
            onClick: this.showResult
          }, i.resultButtonText), this.state.isAdmin && c.default.createElement("button", {
              className: s.resetButton,
              onClick: this.resetVote
            }, i.resetButtonText), this.state.isAdmin && c.default.createElement("button", {
              className: s.closeButton,
              onClick: this.closeVote
            }, i.closeButtonText)));
        return c.default.createElement("div", { className: s.voteWrapper }, this.state.data.title ? u : this.renderCreationView())
      }
    }]), e
  }(l.Component);
  d.propTypes = {
    isAdmin: f.default.bool,
    total: f.default.bool,
    multiple: f.default.bool,
    clientId: f.default.oneOfType([f.default.string, f.default.number]),
    data: f.default.shape({
      title: f.default.string.isRequired,
      voters: f.default.arrayOf(f.default.oneOfType([f.default.string, f.default.number])),
      items: f.default.arrayOf(f.default.object).isRequired,
      closed: f.default.bool
    }),
    autoClose: f.default.number,
    expansion: f.default.bool,
    styles: f.default.shape({
      voteWrapper: f.default.string,
      voteTitle: f.default.string,
      titleInput: f.default.string,
      addWrapper: f.default.string,
      addInput: f.default.string,
      addButton: f.default.string,
      itemTitle: f.default.string,
      itemCount: f.default.string,
      itemWrapper: f.default.string,
      buttonWrapper: f.default.string,
      removeButton: f.default.string,
      createButton: f.default.string,
      resultButton: f.default.string,
      goBackButton: f.default.string,
      voteButton: f.default.string,
      closeButton: f.default.string,
      resetButton: f.default.string,
      errorMessage: f.default.string,
      votedText: f.default.string,
      expansionButton: f.default.string,
      expansionInput: f.default.string
    }),
    getData: f.default.func,
    onCreate: f.default.func,
    onUpvote: f.default.func,
    onExpand: f.default.func,
    onReset: f.default.func,
    onClose: f.default.func,
    text: f.default.shape({
      titleInputPlaceholder: f.default.string,
      addInputPlaceholder: f.default.string,
      addButtonText: f.default.string,
      removeButtonText: f.default.string,
      closeButtonText: f.default.string,
      resetButtonText: f.default.string,
      createButtonText: f.default.string,
      resultButtonText: f.default.string,
      goBackButtonText: f.default.string,
      voteButtonText: f.default.string,
      votedText: f.default.string,
      totalText: f.default.string,
      multipleCheckbox: f.default.string,
      expansionCheckbox: f.default.string,
      expansionPlaceholder: f.default.string,
      expansionButtonText: f.default.string,
      autoCloseText: f.default.string,
      autoClosePlaceholder: f.default.string
    }),
    errorMessage: f.default.shape({ notEnoughItems: f.default.string, noTitle: f.default.string })
  }, d.defaultProps = {
    isAdmin: !1,
    multiple: !1,
    total: !0,
    expansion: !1,
    voted: !1,
    clientId: null,
    data: null,
    autoClose: null,
    getData: null,
    onCreate: null,
    onUpvote: null,
    onExpand: null,
    onClose: null,
    onReset: null,
    text: {
      addButtonText: "Add",
      titleInputPlaceholder: "Title of this vote",
      addInputPlaceholder: "Type title of new option here",
      removeButtonText: "×",
      closeButtonText: "Close vote",
      resetButtonText: "Reset vote",
      createButtonText: "Create",
      resultButtonText: "Show result",
      goBackButtonText: "Go back to vote",
      voteButtonText: "Upvote",
      votedText: "Voted",
      totalText: "Total",
      multipleCheckbox: "Multiple choice?",
      expansionCheckbox: "Expandable?",
      expansionPlaceholder: "Add an option yourself",
      expansionButtonText: "Add",
      autoCloseText: "AutoClose number: ",
      autoClosePlaceholder: "type autoClose number"
    },
    errorMessage: { notEnoughItems: "Need at least 2 item!", noTitle: "Need a title!" },
    styles: {}
  }, e.default = d
}, function (t, e, n) {
  "use strict";
  t.exports = n(15)
}, function (t, e, n) {
  "use strict";
  var r = n(2), o = n(6), a = n(17), i = n(22), s = n(1), u = n(23), l = n(27), c = n(28), p = n(30),
    f = s.createElement, d = s.createFactory, m = s.cloneElement, h = r, v = function (t) {
      return t
    }, y = {
      Children: { map: a.map, forEach: a.forEach, count: a.count, toArray: a.toArray, only: p },
      Component: o.Component,
      PureComponent: o.PureComponent,
      createElement: f,
      cloneElement: m,
      isValidElement: s.isValidElement,
      PropTypes: u,
      createClass: c,
      createFactory: d,
      createMixin: v,
      DOM: i,
      version: l,
      __spread: h
    };
  t.exports = y
}, function (t, e, n) {
  "use strict";
  var r = function () {
  };
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return ("" + t).replace(x, "$&/")
  }

  function o(t, e) {
    this.func = t, this.context = e, this.count = 0
  }

  function a(t, e, n) {
    var r = t.func, o = t.context;
    r.call(o, e, t.count++)
  }

  function i(t, e, n) {
    if (null == t)return t;
    var r = o.getPooled(e, n);
    y(t, a, r), o.release(r)
  }

  function s(t, e, n, r) {
    this.result = t, this.keyPrefix = e, this.func = n, this.context = r, this.count = 0
  }

  function u(t, e, n) {
    var o = t.result, a = t.keyPrefix, i = t.func, s = t.context, u = i.call(s, e, t.count++);
    Array.isArray(u) ? l(u, o, n, v.thatReturnsArgument) : null != u && (h.isValidElement(u) && (u = h.cloneAndReplaceKey(u, a + (!u.key || e && e.key === u.key ? "" : r(u.key) + "/") + n)), o.push(u))
  }

  function l(t, e, n, o, a) {
    var i = "";
    null != n && (i = r(n) + "/");
    var l = s.getPooled(e, i, o, a);
    y(t, u, l), s.release(l)
  }

  function c(t, e, n) {
    if (null == t)return t;
    var r = [];
    return l(t, r, null, e, n), r
  }

  function p(t, e, n) {
    return null
  }

  function f(t, e) {
    return y(t, p, null)
  }

  function d(t) {
    var e = [];
    return l(t, e, null, v.thatReturnsArgument), e
  }

  var m = n(18), h = n(1), v = n(5), y = n(19), g = m.twoArgumentPooler, b = m.fourArgumentPooler, x = /\/+/g;
  o.prototype.destructor = function () {
    this.func = null, this.context = null, this.count = 0
  }, m.addPoolingTo(o, g), s.prototype.destructor = function () {
    this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
  }, m.addPoolingTo(s, b);
  var E = { forEach: i, map: c, mapIntoWithKeyPrefixInternal: l, count: f, toArray: d };
  t.exports = E
}, function (t, e, n) {
  "use strict";
  var r = n(3), o = (n(0), function (t) {
    var e = this;
    if (e.instancePool.length) {
      var n = e.instancePool.pop();
      return e.call(n, t), n
    }
    return new e(t)
  }), a = function (t, e) {
    var n = this;
    if (n.instancePool.length) {
      var r = n.instancePool.pop();
      return n.call(r, t, e), r
    }
    return new n(t, e)
  }, i = function (t, e, n) {
    var r = this;
    if (r.instancePool.length) {
      var o = r.instancePool.pop();
      return r.call(o, t, e, n), o
    }
    return new r(t, e, n)
  }, s = function (t, e, n, r) {
    var o = this;
    if (o.instancePool.length) {
      var a = o.instancePool.pop();
      return o.call(a, t, e, n, r), a
    }
    return new o(t, e, n, r)
  }, u = function (t) {
    var e = this;
    t instanceof e || r("25"), t.destructor(), e.instancePool.length < e.poolSize && e.instancePool.push(t)
  }, l = o, c = function (t, e) {
    var n = t;
    return n.instancePool = [], n.getPooled = e || l, n.poolSize || (n.poolSize = 10), n.release = u, n
  }, p = { addPoolingTo: c, oneArgumentPooler: o, twoArgumentPooler: a, threeArgumentPooler: i, fourArgumentPooler: s };
  t.exports = p
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    return t && "object" == typeof t && null != t.key ? l.escape(t.key) : e.toString(36)
  }

  function o(t, e, n, a) {
    var f = typeof t;
    if ("undefined" !== f && "boolean" !== f || (t = null), null === t || "string" === f || "number" === f || "object" === f && t.$$typeof === s)return n(a, t, "" === e ? c + r(t, 0) : e), 1;
    var d, m, h = 0, v = "" === e ? c : e + p;
    if (Array.isArray(t))for (var y = 0; y < t.length; y++)d = t[y], m = v + r(d, y), h += o(d, m, n, a); else {
      var g = u(t);
      if (g) {
        var b, x = g.call(t);
        if (g !== t.entries)for (var E = 0; !(b = x.next()).done;)d = b.value, m = v + r(d, E++), h += o(d, m, n, a); else for (; !(b = x.next()).done;) {
          var C = b.value;
          C && (d = C[1], m = v + l.escape(C[0]) + p + r(d, 0), h += o(d, m, n, a))
        }
      } else if ("object" === f) {
        var P = "", T = String(t);
        i("31", "[object Object]" === T ? "object with keys {" + Object.keys(t).join(", ") + "}" : T, P)
      }
    }
    return h
  }

  function a(t, e, n) {
    return null == t ? 0 : o(t, "", e, n)
  }

  var i = n(3), s = (n(10), n(11)), u = n(20), l = (n(0), n(21)), c = (n(4), "."), p = ":";
  t.exports = a
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = t && (o && t[o] || t[a]);
    if ("function" == typeof e)return e
  }

  var o = "function" == typeof Symbol && Symbol.iterator, a = "@@iterator";
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + ("" + t).replace(/[=:]/g, function (t) {
        return e[t]
      })
  }

  function o(t) {
    var e = /(=0|=2)/g, n = { "=0": "=", "=2": ":" };
    return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function (t) {
      return n[t]
    })
  }

  var a = { escape: r, unescape: o };
  t.exports = a
}, function (t, e, n) {
  "use strict";
  var r = n(1), o = r.createFactory, a = {
    a: o("a"),
    abbr: o("abbr"),
    address: o("address"),
    area: o("area"),
    article: o("article"),
    aside: o("aside"),
    audio: o("audio"),
    b: o("b"),
    base: o("base"),
    bdi: o("bdi"),
    bdo: o("bdo"),
    big: o("big"),
    blockquote: o("blockquote"),
    body: o("body"),
    br: o("br"),
    button: o("button"),
    canvas: o("canvas"),
    caption: o("caption"),
    cite: o("cite"),
    code: o("code"),
    col: o("col"),
    colgroup: o("colgroup"),
    data: o("data"),
    datalist: o("datalist"),
    dd: o("dd"),
    del: o("del"),
    details: o("details"),
    dfn: o("dfn"),
    dialog: o("dialog"),
    div: o("div"),
    dl: o("dl"),
    dt: o("dt"),
    em: o("em"),
    embed: o("embed"),
    fieldset: o("fieldset"),
    figcaption: o("figcaption"),
    figure: o("figure"),
    footer: o("footer"),
    form: o("form"),
    h1: o("h1"),
    h2: o("h2"),
    h3: o("h3"),
    h4: o("h4"),
    h5: o("h5"),
    h6: o("h6"),
    head: o("head"),
    header: o("header"),
    hgroup: o("hgroup"),
    hr: o("hr"),
    html: o("html"),
    i: o("i"),
    iframe: o("iframe"),
    img: o("img"),
    input: o("input"),
    ins: o("ins"),
    kbd: o("kbd"),
    keygen: o("keygen"),
    label: o("label"),
    legend: o("legend"),
    li: o("li"),
    link: o("link"),
    main: o("main"),
    map: o("map"),
    mark: o("mark"),
    menu: o("menu"),
    menuitem: o("menuitem"),
    meta: o("meta"),
    meter: o("meter"),
    nav: o("nav"),
    noscript: o("noscript"),
    object: o("object"),
    ol: o("ol"),
    optgroup: o("optgroup"),
    option: o("option"),
    output: o("output"),
    p: o("p"),
    param: o("param"),
    picture: o("picture"),
    pre: o("pre"),
    progress: o("progress"),
    q: o("q"),
    rp: o("rp"),
    rt: o("rt"),
    ruby: o("ruby"),
    s: o("s"),
    samp: o("samp"),
    script: o("script"),
    section: o("section"),
    select: o("select"),
    small: o("small"),
    source: o("source"),
    span: o("span"),
    strong: o("strong"),
    style: o("style"),
    sub: o("sub"),
    summary: o("summary"),
    sup: o("sup"),
    table: o("table"),
    tbody: o("tbody"),
    td: o("td"),
    textarea: o("textarea"),
    tfoot: o("tfoot"),
    th: o("th"),
    thead: o("thead"),
    time: o("time"),
    title: o("title"),
    tr: o("tr"),
    track: o("track"),
    u: o("u"),
    ul: o("ul"),
    var: o("var"),
    video: o("video"),
    wbr: o("wbr"),
    circle: o("circle"),
    clipPath: o("clipPath"),
    defs: o("defs"),
    ellipse: o("ellipse"),
    g: o("g"),
    image: o("image"),
    line: o("line"),
    linearGradient: o("linearGradient"),
    mask: o("mask"),
    path: o("path"),
    pattern: o("pattern"),
    polygon: o("polygon"),
    polyline: o("polyline"),
    radialGradient: o("radialGradient"),
    rect: o("rect"),
    stop: o("stop"),
    svg: o("svg"),
    text: o("text"),
    tspan: o("tspan")
  };
  t.exports = a
}, function (t, e, n) {
  "use strict";
  var r = n(1), o = r.isValidElement, a = n(24);
  t.exports = a(o)
}, function (t, e, n) {
  "use strict";
  var r = n(25);
  t.exports = function (t) {
    return r(t, !1)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(5), o = n(0), a = n(4), i = n(12), s = n(26);
  t.exports = function (t, e) {
    function n(t) {
      var e = t && (T && t[T] || t[k]);
      if ("function" == typeof e)return e
    }

    function u(t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e
    }

    function l(t) {
      this.message = t, this.stack = ""
    }

    function c(t) {
      function n(n, r, a, s, u, c, p) {
        if (s = s || I, c = c || a, p !== i)if (e) o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else;
        return null == r[a] ? n ? new l(null === r[a] ? "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `null`." : "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `undefined`.") : null : t(r, a, s, u, c)
      }

      var r = n.bind(null, !1);
      return r.isRequired = n.bind(null, !0), r
    }

    function p(t) {
      function e(e, n, r, o, a, i) {
        var s = e[n];
        if (x(s) !== t)return new l("Invalid " + o + " `" + a + "` of type `" + E(s) + "` supplied to `" + r + "`, expected `" + t + "`.");
        return null
      }

      return c(e)
    }

    function f(t) {
      function e(e, n, r, o, a) {
        if ("function" != typeof t)return new l("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
        var s = e[n];
        if (!Array.isArray(s)) {
          return new l("Invalid " + o + " `" + a + "` of type `" + x(s) + "` supplied to `" + r + "`, expected an array.")
        }
        for (var u = 0; u < s.length; u++) {
          var c = t(s, u, r, o, a + "[" + u + "]", i);
          if (c instanceof Error)return c
        }
        return null
      }

      return c(e)
    }

    function d(t) {
      function e(e, n, r, o, a) {
        if (!(e[n] instanceof t)) {
          var i = t.name || I;
          return new l("Invalid " + o + " `" + a + "` of type `" + P(e[n]) + "` supplied to `" + r + "`, expected instance of `" + i + "`.")
        }
        return null
      }

      return c(e)
    }

    function m(t) {
      function e(e, n, r, o, a) {
        for (var i = e[n], s = 0; s < t.length; s++)if (u(i, t[s]))return null;
        return new l("Invalid " + o + " `" + a + "` of value `" + i + "` supplied to `" + r + "`, expected one of " + JSON.stringify(t) + ".")
      }

      return Array.isArray(t) ? c(e) : r.thatReturnsNull
    }

    function h(t) {
      function e(e, n, r, o, a) {
        if ("function" != typeof t)return new l("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
        var s = e[n], u = x(s);
        if ("object" !== u)return new l("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + r + "`, expected an object.");
        for (var c in s)if (s.hasOwnProperty(c)) {
          var p = t(s, c, r, o, a + "." + c, i);
          if (p instanceof Error)return p
        }
        return null
      }

      return c(e)
    }

    function v(t) {
      function e(e, n, r, o, a) {
        for (var s = 0; s < t.length; s++) {
          if (null == (0, t[s])(e, n, r, o, a, i))return null
        }
        return new l("Invalid " + o + " `" + a + "` supplied to `" + r + "`.")
      }

      if (!Array.isArray(t))return r.thatReturnsNull;
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        if ("function" != typeof o)return a(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", C(o), n), r.thatReturnsNull
      }
      return c(e)
    }

    function y(t) {
      function e(e, n, r, o, a) {
        var s = e[n], u = x(s);
        if ("object" !== u)return new l("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + r + "`, expected `object`.");
        for (var c in t) {
          var p = t[c];
          if (p) {
            var f = p(s, c, r, o, a + "." + c, i);
            if (f)return f
          }
        }
        return null
      }

      return c(e)
    }

    function g(e) {
      switch (typeof e) {
        case"number":
        case"string":
        case"undefined":
          return !0;
        case"boolean":
          return !e;
        case"object":
          if (Array.isArray(e))return e.every(g);
          if (null === e || t(e))return !0;
          var r = n(e);
          if (!r)return !1;
          var o, a = r.call(e);
          if (r !== e.entries) {
            for (; !(o = a.next()).done;)if (!g(o.value))return !1
          } else for (; !(o = a.next()).done;) {
            var i = o.value;
            if (i && !g(i[1]))return !1
          }
          return !0;
        default:
          return !1
      }
    }

    function b(t, e) {
      return "symbol" === t || ("Symbol" === e["@@toStringTag"] || "function" == typeof Symbol && e instanceof Symbol)
    }

    function x(t) {
      var e = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : b(e, t) ? "symbol" : e
    }

    function E(t) {
      if (void 0 === t || null === t)return "" + t;
      var e = x(t);
      if ("object" === e) {
        if (t instanceof Date)return "date";
        if (t instanceof RegExp)return "regexp"
      }
      return e
    }

    function C(t) {
      var e = E(t);
      switch (e) {
        case"array":
        case"object":
          return "an " + e;
        case"boolean":
        case"date":
        case"regexp":
          return "a " + e;
        default:
          return e
      }
    }

    function P(t) {
      return t.constructor && t.constructor.name ? t.constructor.name : I
    }

    var T = "function" == typeof Symbol && Symbol.iterator, k = "@@iterator", I = "<<anonymous>>", N = {
      array: p("array"),
      bool: p("boolean"),
      func: p("function"),
      number: p("number"),
      object: p("object"),
      string: p("string"),
      symbol: p("symbol"),
      any: function () {
        return c(r.thatReturnsNull)
      }(),
      arrayOf: f,
      element: function () {
        function e(e, n, r, o, a) {
          var i = e[n];
          if (!t(i)) {
            return new l("Invalid " + o + " `" + a + "` of type `" + x(i) + "` supplied to `" + r + "`, expected a single ReactElement.")
          }
          return null
        }

        return c(e)
      }(),
      instanceOf: d,
      node: function () {
        function t(t, e, n, r, o) {
          return g(t[e]) ? null : new l("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.")
        }

        return c(t)
      }(),
      objectOf: h,
      oneOf: m,
      oneOfType: v,
      shape: y
    };
    return l.prototype = Error.prototype, N.checkPropTypes = s, N.PropTypes = N, N
  }
}, function (t, e, n) {
  "use strict";
  function r(t, e, n, r, o) {
  }

  t.exports = r
}, function (t, e, n) {
  "use strict";
  t.exports = "15.6.1"
}, function (t, e, n) {
  "use strict";
  var r = n(6), o = r.Component, a = n(1), i = a.isValidElement, s = n(7), u = n(29);
  t.exports = u(o, i, s)
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t
  }

  function o(t, e, n) {
    function o(t, e) {
      var n = g.hasOwnProperty(e) ? g[e] : null;
      C.hasOwnProperty(e) && s("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e), t && s("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
    }

    function l(t, n) {
      if (n) {
        s("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), s(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
        var r = t.prototype, a = r.__reactAutoBindPairs;
        n.hasOwnProperty(u) && b.mixins(t, n.mixins);
        for (var i in n)if (n.hasOwnProperty(i) && i !== u) {
          var l = n[i], c = r.hasOwnProperty(i);
          if (o(c, i), b.hasOwnProperty(i)) b[i](t, l); else {
            var p = g.hasOwnProperty(i), m = "function" == typeof l, h = m && !p && !c && !1 !== n.autobind;
            if (h) a.push(i, l), r[i] = l; else if (c) {
              var v = g[i];
              s(p && ("DEFINE_MANY_MERGED" === v || "DEFINE_MANY" === v), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", v, i), "DEFINE_MANY_MERGED" === v ? r[i] = f(r[i], l) : "DEFINE_MANY" === v && (r[i] = d(r[i], l))
            } else r[i] = l
          }
        }
      } else;
    }

    function c(t, e) {
      if (e)for (var n in e) {
        var r = e[n];
        if (e.hasOwnProperty(n)) {
          var o = n in b;
          s(!o, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
          var a = n in t;
          s(!a, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), t[n] = r
        }
      }
    }

    function p(t, e) {
      s(t && e && "object" == typeof t && "object" == typeof e, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
      for (var n in e)e.hasOwnProperty(n) && (s(void 0 === t[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), t[n] = e[n]);
      return t
    }

    function f(t, e) {
      return function () {
        var n = t.apply(this, arguments), r = e.apply(this, arguments);
        if (null == n)return r;
        if (null == r)return n;
        var o = {};
        return p(o, n), p(o, r), o
      }
    }

    function d(t, e) {
      return function () {
        t.apply(this, arguments), e.apply(this, arguments)
      }
    }

    function m(t, e) {
      var n = e.bind(t);
      return n
    }

    function h(t) {
      for (var e = t.__reactAutoBindPairs, n = 0; n < e.length; n += 2) {
        var r = e[n], o = e[n + 1];
        t[r] = m(t, o)
      }
    }

    function v(t) {
      var e = r(function (t, r, o) {
        this.__reactAutoBindPairs.length && h(this), this.props = t, this.context = r, this.refs = i, this.updater = o || n, this.state = null;
        var a = this.getInitialState ? this.getInitialState() : null;
        s("object" == typeof a && !Array.isArray(a), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"), this.state = a
      });
      e.prototype = new P, e.prototype.constructor = e, e.prototype.__reactAutoBindPairs = [], y.forEach(l.bind(null, e)), l(e, x), l(e, t), l(e, E), e.getDefaultProps && (e.defaultProps = e.getDefaultProps()), s(e.prototype.render, "createClass(...): Class specification must implement a `render` method.");
      for (var o in g)e.prototype[o] || (e.prototype[o] = null);
      return e
    }

    var y = [], g = {
      mixins: "DEFINE_MANY",
      statics: "DEFINE_MANY",
      propTypes: "DEFINE_MANY",
      contextTypes: "DEFINE_MANY",
      childContextTypes: "DEFINE_MANY",
      getDefaultProps: "DEFINE_MANY_MERGED",
      getInitialState: "DEFINE_MANY_MERGED",
      getChildContext: "DEFINE_MANY_MERGED",
      render: "DEFINE_ONCE",
      componentWillMount: "DEFINE_MANY",
      componentDidMount: "DEFINE_MANY",
      componentWillReceiveProps: "DEFINE_MANY",
      shouldComponentUpdate: "DEFINE_ONCE",
      componentWillUpdate: "DEFINE_MANY",
      componentDidUpdate: "DEFINE_MANY",
      componentWillUnmount: "DEFINE_MANY",
      updateComponent: "OVERRIDE_BASE"
    }, b = {
      displayName: function (t, e) {
        t.displayName = e
      }, mixins: function (t, e) {
        if (e)for (var n = 0; n < e.length; n++)l(t, e[n])
      }, childContextTypes: function (t, e) {
        t.childContextTypes = a({}, t.childContextTypes, e)
      }, contextTypes: function (t, e) {
        t.contextTypes = a({}, t.contextTypes, e)
      }, getDefaultProps: function (t, e) {
        t.getDefaultProps ? t.getDefaultProps = f(t.getDefaultProps, e) : t.getDefaultProps = e
      }, propTypes: function (t, e) {
        t.propTypes = a({}, t.propTypes, e)
      }, statics: function (t, e) {
        c(t, e)
      }, autobind: function () {
      }
    }, x = {
      componentDidMount: function () {
        this.__isMounted = !0
      }
    }, E = {
      componentWillUnmount: function () {
        this.__isMounted = !1
      }
    }, C = {
      replaceState: function (t, e) {
        this.updater.enqueueReplaceState(this, t, e)
      }, isMounted: function () {
        return !!this.__isMounted
      }
    }, P = function () {
    };
    return a(P.prototype, t.prototype, C), v
  }

  var a = n(2), i = n(9), s = n(0), u = "mixins";
  t.exports = o
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return a.isValidElement(t) || o("143"), t
  }

  var o = n(3), a = n(1);
  n(0);
  t.exports = r
}, function (t, e, n) {
  t.exports = n(32)()
}, function (t, e, n) {
  "use strict";
  var r = n(5), o = n(0), a = n(12);
  t.exports = function () {
    function t(t, e, n, r, i, s) {
      s !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
    }

    function e() {
      return t
    }

    t.isRequired = t;
    var n = {
      array: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: e,
      element: t,
      instanceOf: e,
      node: t,
      objectOf: e,
      oneOf: e,
      oneOfType: e,
      shape: e
    };
    return n.checkPropTypes = r, n.PropTypes = n, n
  }
}]);
//# sourceMappingURL=react-vote.js.map