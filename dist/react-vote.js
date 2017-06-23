module.exports = function (t) {
  function e(o) {
    if (n[o])return n[o].exports;
    var r = n[o] = { i: o, l: !1, exports: {} };
    return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }

  var n = {};
  return e.m = t, e.c = n, e.d = function (t, n, o) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o })
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
  function o(t, e, n, o, a, i, s, u) {
    if (r(e), !t) {
      var l;
      if (void 0 === e) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
        var c = [n, o, a, i, s, u], p = 0;
        l = new Error(e.replace(/%s/g, function () {
          return c[p++]
        })), l.name = "Invariant Violation"
      }
      throw l.framesToPop = 1, l
    }
  }

  var r = function (t) {
  };
  t.exports = o
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return void 0 !== t.ref
  }

  function r(t) {
    return void 0 !== t.key
  }

  var a = n(2), i = n(10), s = (n(4), n(8), Object.prototype.hasOwnProperty), u = n(11),
    l = { key: !0, ref: !0, __self: !0, __source: !0 }, c = function (t, e, n, o, r, a, i) {
      var s = { $$typeof: u, type: t, key: e, ref: n, props: i, _owner: a };
      return s
    };
  c.createElement = function (t, e, n) {
    var a, u = {}, p = null, f = null;
    if (null != e) {
      o(e) && (f = e.ref), r(e) && (p = "" + e.key), void 0 === e.__self ? null : e.__self, void 0 === e.__source ? null : e.__source;
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
      o(e) && (d = e.ref, m = i.current), r(e) && (f = "" + e.key);
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
  function o(t) {
    if (null === t || void 0 === t)throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
  }

  /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
  var r = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  t.exports = function () {
    try {
      if (!Object.assign)return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0])return !1;
      for (var e = {}, n = 0; n < 10; n++)e["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
          return e[t]
        }).join(""))return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (t) {
        o[t] = t
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
    } catch (t) {
      return !1
    }
  }() ? Object.assign : function (t, e) {
    for (var n, s, u = o(t), l = 1; l < arguments.length; l++) {
      n = Object(arguments[l]);
      for (var c in n)a.call(n, c) && (u[c] = n[c]);
      if (r) {
        s = r(n);
        for (var p = 0; p < s.length; p++)i.call(n, s[p]) && (u[s[p]] = n[s[p]])
      }
    }
    return u
  }
}, function (t, e, n) {
  "use strict";
  function o(t) {
    for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, o = 0; o < e; o++)n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
    n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    var r = new Error(n);
    throw r.name = "Invariant Violation", r.framesToPop = 1, r
  }

  t.exports = o
}, function (t, e, n) {
  "use strict";
  var o = n(5), r = o;
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return function () {
      return t
    }
  }

  var r = function () {
  };
  r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function () {
    return this
  }, r.thatReturnsArgument = function (t) {
    return t
  }, t.exports = r
}, function (t, e, n) {
  "use strict";
  function o(t, e, n) {
    this.props = t, this.context = e, this.refs = l, this.updater = n || u
  }

  function r(t, e, n) {
    this.props = t, this.context = e, this.refs = l, this.updater = n || u
  }

  function a() {
  }

  var i = n(3), s = n(2), u = n(7), l = (n(8), n(9));
  n(0), n(16);
  o.prototype.isReactComponent = {}, o.prototype.setState = function (t, e) {
    "object" != typeof t && "function" != typeof t && null != t && i("85"), this.updater.enqueueSetState(this, t), e && this.updater.enqueueCallback(this, e, "setState")
  }, o.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this), t && this.updater.enqueueCallback(this, t, "forceUpdate")
  };
  a.prototype = o.prototype, r.prototype = new a, r.prototype.constructor = r, s(r.prototype, o.prototype), r.prototype.isPureReactComponent = !0, t.exports = {
    Component: o,
    PureComponent: r
  }
}, function (t, e, n) {
  "use strict";
  var o = (n(4), {
    isMounted: function (t) {
      return !1
    }, enqueueCallback: function (t, e) {
    }, enqueueForceUpdate: function (t) {
    }, enqueueReplaceState: function (t, e) {
    }, enqueueSetState: function (t, e) {
    }
  });
  t.exports = o
}, function (t, e, n) {
  "use strict";
  var o = !1;
  t.exports = o
}, function (t, e, n) {
  "use strict";
  var o = {};
  t.exports = o
}, function (t, e, n) {
  "use strict";
  var o = { current: null };
  t.exports = o
}, function (t, e, n) {
  "use strict";
  var o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  t.exports = o
}, function (t, e, n) {
  "use strict";
  t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return t && t.__esModule ? t : { default: t }
  }

  function r(t, e) {
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
        for (var o in n)Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
      }
      return t
    }, u = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    return function (e, n, o) {
      return n && t(e.prototype, n), o && t(e, o), e
    }
  }(), l = n(14), c = o(l), p = n(31), f = o(p), d = function (t) {
    function e() {
      var t, n, o, i;
      r(this, e);
      for (var u = arguments.length, l = Array(u), p = 0; p < u; p++)l[p] = arguments[p];
      return n = o = a(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(l))), o.state = {
        showResult: !1,
        items: o.props.data ? o.props.data.items : [],
        data: s({}, o.props.data, {
          title: o.props.data && o.props.data.title,
          items: o.props.data && o.props.data.items,
          voters: o.props.data && o.props.data.voters || [],
          closed: o.props.data && o.props.data.closed || !1
        }),
        isAdmin: o.props.isAdmin,
        total: o.props.total,
        expansion: o.props.expansion,
        voted: o.props.clientId && !o.props.multiple && o.props.data.voters && o.props.data.voters.indexOf(o.props.clientId) > -1 || !1,
        multiple: o.props.multiple,
        showMessage: !1,
        errorMessage: !1,
        autoClose: o.props.autoClose,
        voteTitle: "",
        addInput: "",
        autoCloseNumber: null,
        multipleCheck: !1,
        expansionCheck: !1,
        expansionInput: ""
      }, o.onVoteTitleChange = function (t) {
        var e = t.target.value.trim();
        o.setState(function () {
          return { voteTitle: e }
        })
      }, o.onAddInputChange = function (t) {
        var e = t.target.value.trim();
        o.setState(function () {
          return { addInput: e }
        })
      }, o.onMultipleCheckChange = function (t) {
        var e = t.target.checked;
        o.setState(function () {
          return { multipleCheck: e }
        })
      }, o.onExpansionCheckChange = function (t) {
        var e = t.target.checked;
        o.setState(function () {
          return { expansionCheck: e }
        })
      }, o.onAutoCloseChange = function (t) {
        var e = t.target.value.trim();
        o.setState(function () {
          return { autoCloseNumber: e }
        })
      }, o.onExpansionInputChange = function (t) {
        var e = t.target.value.trim();
        o.setState(function () {
          return { expansionInput: e }
        })
      }, o.addItem = function () {
        var t = o.state.addInput, e = o.state.items;
        t && (e.push({ title: t, count: 0, total: 0, voters: [] }), o.setState(function () {
          return { items: e, addInput: "" }
        }))
      }, o.removeItem = function (t) {
        var e = o.state.items;
        e = e.filter(function (e, n) {
          return n !== t
        }), o.setState(function () {
          return { items: e }
        })
      }, o.createVote = function () {
        var t = o.props, e = t.onCreate, n = t.errorMessage, r = n.noTitle, a = n.notEnoughItems, i = o.state.items,
          s = o.state.voteTitle, u = o.state.multipleCheck, l = o.state.expansionCheck,
          c = !!o.state.autoCloseNumber && parseInt(o.state.autoCloseNumber, 10),
          p = { title: s, items: i, multiple: u, expansion: l, closed: !1 };
        return c && !Number.isNaN(c) && (p.autoClose = c), s ? !p.expansion && p.items.length < 2 ? o.setState(function () {
          return { showMessage: !0, errorMessage: a }
        }) : (o.setState(function () {
          return { data: p, showMessage: !1, multiple: u, expansion: l, autoClose: c, items: i }
        }), !e || "function" != typeof e || e(p.title, p)) : o.setState(function () {
          return { showMessage: !0, errorMessage: r }
        })
      }, o.expandVote = function () {
        var t = o.props.onExpand, e = o.state.expansionInput;
        if (!e)return !1;
        var n = o.state.data,
          r = { title: e, count: 0, total: 0, voters: [], upvoters: [], downvoters: [], adder: o.props.clientId };
        return n.items.push(r), o.setState(function () {
          return { data: n, items: n.items, expansionInput: "" }
        }), !t || "function" != typeof t || t(n.title, r, n)
      }, o.toggleView = function () {
        o.setState(function (t) {
          return { showResult: !t.showResult }
        })
      }, o.closeVote = function () {
        var t = o.props.onClose, e = o.state.data;
        e.closed = !0, o.setState(function () {
          return { data: e }
        }), t && "function" == typeof t && t(e.title, e)
      }, o.resetVote = function () {
        var t = o.props.onReset, e = o.state.data;
        e.voters = [], e.items.forEach(function (t) {
          t.count = 0, t.total = 0, t.voters = [], t.upvoters = [], t.downvoters = [], t.voted = null
        }), console.log(e), o.setState(function () {
          return { data: e, voted: !1 }
        }), t && "function" == typeof t && t(e.title, e)
      }, o.upvote = function (t) {
        var e = o.state, n = e.items, r = e.data, a = e.autoClose, i = o.props.onUpvote, s = n.reduce(function (t, e) {
          return e.total || (e.total = e.count), t + e.total
        }, 0);
        n[t].count += 1, n[t].total += 1, n[t].voted = !0;
        var u = o.props.clientId;
        n[t].voters || (n[t].voters = [], n[t].downvoters = [], n[t].upvoters = []), n[t].voters.push(u), n[t].upvoters.push(u), r.items = n, r.voters ? -1 === r.voters.indexOf(u) && r.voters.push(u) : r.voters = [u];
        var l = { index: t, item: n[t], voter: u };
        if (o.setState(function () {
            return { voted: !0, items: n, data: r }
          }), i && "function" == typeof i && i(r.title, l, r), a) {
          if (s + 1 >= a)return o.closeVote()
        }
        return !0
      }, o.downvote = function (t) {
        var e = o.state, n = e.items, r = e.data, a = e.autoClose, i = o.props.onDownvote,
          s = n.reduce(function (t, e) {
            return e.total || (e.total = e.count), t + e.total
          }, 0);
        n[t].count -= 1, n[t].total += 1, n[t].voted = !0;
        var u = o.props.clientId;
        n[t].voters || (n[t].voters = [], n[t].downvoters = [], n[t].upvoters = []), n[t].voters.push(u), n[t].downvoters.push(u), r.items = n, r.voters ? -1 === r.voters.indexOf(u) && r.voters.push(u) : r.voters = [u];
        var l = { index: t, item: n[t], voter: u };
        if (o.setState(function () {
            return { voted: !0, items: n, data: r }
          }), i && "function" == typeof i && i(r.title, l, r), a) {
          if (s + 1 >= a)return o.closeVote()
        }
        return !0
      }, o.renderItems = function (t) {
        var n = o.props, r = n.clientId, a = n.downvote, i = Object.assign({}, e.defaultProps.styles, o.props.styles),
          s = Object.assign({}, e.defaultProps.text, o.props.text), u = o.state.multiple || !o.state.voted;
        return c.default.createElement("div", null, t.map(function (t, e) {
          var n = r && t.voters && t.voters.indexOf(r) > -1,
            l = t.voted || n ? c.default.createElement("span", { className: i.votedText }, s.votedText) : u && c.default.createElement("span", { className: i.voteButtons }, c.default.createElement("button", {
                onClick: function () {
                  return o.upvote(e)
                }, className: i.voteButton
              }, s.voteButtonText), a && c.default.createElement("button", {
                  onClick: function () {
                    return o.downvote(e)
                  }, className: i.downvoteButton
                }, s.downvoteButtonText)), p = "react-vote-item-" + e;
          return c.default.createElement("div", {
            key: p,
            className: i.itemWrapper
          }, c.default.createElement("div", {
            className: i.itemTitle,
            title: t.title
          }, t.title), o.state.data.title ? l : c.default.createElement("button", {
            onClick: function () {
              return o.removeItem(e)
            }, className: i.removeButton
          }, s.removeButtonText))
        }))
      }, o.renderResult = function (t) {
        var n = t.reduce(function (t, e) {
            return t + e.count
          }, 0), r = Object.assign({}, e.defaultProps.styles, o.props.styles),
          a = Object.assign({}, e.defaultProps.text, o.props.text), i = t.reduce(function (t, e) {
            return e.total || (e.total = e.count), t + e.total
          }, 0), s = n === i ? "" : "(" + i + ")";
        return c.default.createElement("div", null, c.default.createElement("div", { className: r.voteTitle }, o.state.data.title), c.default.createElement("div", null, t.map(function (t, e) {
          var o = 0 === n ? 0 : (t.count / n * 100).toFixed(2), a = "react-vote-result-" + e;
          return c.default.createElement("div", {
            key: a,
            className: r.itemWrapper
          }, c.default.createElement("div", {
            className: r.itemTitle,
            title: t.title
          }, t.title), c.default.createElement("div", { className: r.itemCount }, t.count + "(" + o + "%)"))
        }), o.state.total && c.default.createElement("div", { className: r.itemWrapper }, c.default.createElement("div", { className: r.itemTitle }, a.totalText), c.default.createElement("div", { className: r.itemCount }, n, s))), !o.state.data.closed && c.default.createElement("div", { className: r.buttonWrapper }, c.default.createElement("button", {
            className: r.goBackButton,
            onClick: o.toggleView
          }, a.goBackButtonText), o.state.isAdmin && c.default.createElement("button", {
              className: r.resetButton,
              onClick: o.resetVote
            }, a.resetButtonText), o.state.isAdmin && c.default.createElement("button", {
              className: r.closeButton,
              onClick: o.closeVote
            }, a.closeButtonText)))
      }, i = n, a(o, i)
    }

    return i(e, t), u(e, [{
      key: "componentWillReceiveProps", value: function (t) {
        t.data && this.setState(function () {
          return {
            data: t.data,
            items: t.data.items,
            isAdmin: t.isAdmin,
            autoClose: t.autoClose,
            multiple: t.multiple,
            expansion: t.expansion
          }
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
        var t = this.state.data.closed, n = this.state.data.title && (t || this.state.showResult),
          o = this.state.expansion && (!this.state.voted || this.state.multiple),
          r = Object.assign({}, e.defaultProps.text, this.props.text),
          a = Object.assign({}, e.defaultProps.styles, this.props.styles),
          i = n ? this.renderResult(this.state.items) : c.default.createElement("div", null, c.default.createElement("div", { className: a.voteTitle }, this.state.data.title), this.renderItems(this.state.items), o && c.default.createElement("div", { className: a.itemWrapper }, c.default.createElement("input", {
              className: a.expansionInput,
              value: this.state.expansionInput,
              onChange: this.onExpansionInputChange,
              placeholder: r.expansionPlaceholder
            }), c.default.createElement("button", {
              className: a.expansionButton,
              onClick: this.expandVote
            }, r.expansionButtonText)), c.default.createElement("div", { className: a.buttonWrapper }, c.default.createElement("button", {
            className: a.resultButton,
            onClick: this.toggleView
          }, r.resultButtonText), this.state.isAdmin && c.default.createElement("button", {
              className: a.resetButton,
              onClick: this.resetVote
            }, r.resetButtonText), this.state.isAdmin && c.default.createElement("button", {
              className: a.closeButton,
              onClick: this.closeVote
            }, r.closeButtonText)));
        return c.default.createElement("div", { className: a.voteWrapper }, this.state.data.title ? i : this.renderCreationView())
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
      closed: f.default.bool,
      autoClose: f.default.number
    }),
    downvote: f.default.bool,
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
      voteButtons: f.default.string,
      voteButton: f.default.string,
      downvoteButton: f.default.string,
      closeButton: f.default.string,
      resetButton: f.default.string,
      errorMessage: f.default.string,
      votedText: f.default.string,
      expansionButton: f.default.string,
      expansionInput: f.default.string
    }),
    onCreate: f.default.func,
    onUpvote: f.default.func,
    onDownvote: f.default.func,
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
      downvoteButtonText: f.default.string,
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
    downvote: !1,
    data: null,
    autoClose: null,
    onCreate: null,
    onUpvote: null,
    onDownvote: null,
    onExpand: null,
    onClose: null,
    onReset: null,
    text: {
      addButtonText: "Add",
      titleInputPlaceholder: "Title of this vote",
      addInputPlaceholder: "Title of a new option",
      removeButtonText: "×",
      closeButtonText: "Close vote",
      resetButtonText: "Reset vote",
      createButtonText: "Create",
      resultButtonText: "Show result",
      goBackButtonText: "Go back to vote",
      voteButtonText: "Upvote",
      downvoteButtonText: "Downvote",
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
  var o = n(2), r = n(6), a = n(17), i = n(22), s = n(1), u = n(23), l = n(27), c = n(28), p = n(30),
    f = s.createElement, d = s.createFactory, m = s.cloneElement, h = o, v = function (t) {
      return t
    }, y = {
      Children: { map: a.map, forEach: a.forEach, count: a.count, toArray: a.toArray, only: p },
      Component: r.Component,
      PureComponent: r.PureComponent,
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
  var o = function () {
  };
  t.exports = o
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return ("" + t).replace(x, "$&/")
  }

  function r(t, e) {
    this.func = t, this.context = e, this.count = 0
  }

  function a(t, e, n) {
    var o = t.func, r = t.context;
    o.call(r, e, t.count++)
  }

  function i(t, e, n) {
    if (null == t)return t;
    var o = r.getPooled(e, n);
    y(t, a, o), r.release(o)
  }

  function s(t, e, n, o) {
    this.result = t, this.keyPrefix = e, this.func = n, this.context = o, this.count = 0
  }

  function u(t, e, n) {
    var r = t.result, a = t.keyPrefix, i = t.func, s = t.context, u = i.call(s, e, t.count++);
    Array.isArray(u) ? l(u, r, n, v.thatReturnsArgument) : null != u && (h.isValidElement(u) && (u = h.cloneAndReplaceKey(u, a + (!u.key || e && e.key === u.key ? "" : o(u.key) + "/") + n)), r.push(u))
  }

  function l(t, e, n, r, a) {
    var i = "";
    null != n && (i = o(n) + "/");
    var l = s.getPooled(e, i, r, a);
    y(t, u, l), s.release(l)
  }

  function c(t, e, n) {
    if (null == t)return t;
    var o = [];
    return l(t, o, null, e, n), o
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
  r.prototype.destructor = function () {
    this.func = null, this.context = null, this.count = 0
  }, m.addPoolingTo(r, g), s.prototype.destructor = function () {
    this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
  }, m.addPoolingTo(s, b);
  var E = { forEach: i, map: c, mapIntoWithKeyPrefixInternal: l, count: f, toArray: d };
  t.exports = E
}, function (t, e, n) {
  "use strict";
  var o = n(3), r = (n(0), function (t) {
    var e = this;
    if (e.instancePool.length) {
      var n = e.instancePool.pop();
      return e.call(n, t), n
    }
    return new e(t)
  }), a = function (t, e) {
    var n = this;
    if (n.instancePool.length) {
      var o = n.instancePool.pop();
      return n.call(o, t, e), o
    }
    return new n(t, e)
  }, i = function (t, e, n) {
    var o = this;
    if (o.instancePool.length) {
      var r = o.instancePool.pop();
      return o.call(r, t, e, n), r
    }
    return new o(t, e, n)
  }, s = function (t, e, n, o) {
    var r = this;
    if (r.instancePool.length) {
      var a = r.instancePool.pop();
      return r.call(a, t, e, n, o), a
    }
    return new r(t, e, n, o)
  }, u = function (t) {
    var e = this;
    t instanceof e || o("25"), t.destructor(), e.instancePool.length < e.poolSize && e.instancePool.push(t)
  }, l = r, c = function (t, e) {
    var n = t;
    return n.instancePool = [], n.getPooled = e || l, n.poolSize || (n.poolSize = 10), n.release = u, n
  }, p = { addPoolingTo: c, oneArgumentPooler: r, twoArgumentPooler: a, threeArgumentPooler: i, fourArgumentPooler: s };
  t.exports = p
}, function (t, e, n) {
  "use strict";
  function o(t, e) {
    return t && "object" == typeof t && null != t.key ? l.escape(t.key) : e.toString(36)
  }

  function r(t, e, n, a) {
    var f = typeof t;
    if ("undefined" !== f && "boolean" !== f || (t = null), null === t || "string" === f || "number" === f || "object" === f && t.$$typeof === s)return n(a, t, "" === e ? c + o(t, 0) : e), 1;
    var d, m, h = 0, v = "" === e ? c : e + p;
    if (Array.isArray(t))for (var y = 0; y < t.length; y++)d = t[y], m = v + o(d, y), h += r(d, m, n, a); else {
      var g = u(t);
      if (g) {
        var b, x = g.call(t);
        if (g !== t.entries)for (var E = 0; !(b = x.next()).done;)d = b.value, m = v + o(d, E++), h += r(d, m, n, a); else for (; !(b = x.next()).done;) {
          var C = b.value;
          C && (d = C[1], m = v + l.escape(C[0]) + p + o(d, 0), h += r(d, m, n, a))
        }
      } else if ("object" === f) {
        var P = "", T = String(t);
        i("31", "[object Object]" === T ? "object with keys {" + Object.keys(t).join(", ") + "}" : T, P)
      }
    }
    return h
  }

  function a(t, e, n) {
    return null == t ? 0 : r(t, "", e, n)
  }

  var i = n(3), s = (n(10), n(11)), u = n(20), l = (n(0), n(21)), c = (n(4), "."), p = ":";
  t.exports = a
}, function (t, e, n) {
  "use strict";
  function o(t) {
    var e = t && (r && t[r] || t[a]);
    if ("function" == typeof e)return e
  }

  var r = "function" == typeof Symbol && Symbol.iterator, a = "@@iterator";
  t.exports = o
}, function (t, e, n) {
  "use strict";
  function o(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + ("" + t).replace(/[=:]/g, function (t) {
        return e[t]
      })
  }

  function r(t) {
    var e = /(=0|=2)/g, n = { "=0": "=", "=2": ":" };
    return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function (t) {
      return n[t]
    })
  }

  var a = { escape: o, unescape: r };
  t.exports = a
}, function (t, e, n) {
  "use strict";
  var o = n(1), r = o.createFactory, a = {
    a: r("a"),
    abbr: r("abbr"),
    address: r("address"),
    area: r("area"),
    article: r("article"),
    aside: r("aside"),
    audio: r("audio"),
    b: r("b"),
    base: r("base"),
    bdi: r("bdi"),
    bdo: r("bdo"),
    big: r("big"),
    blockquote: r("blockquote"),
    body: r("body"),
    br: r("br"),
    button: r("button"),
    canvas: r("canvas"),
    caption: r("caption"),
    cite: r("cite"),
    code: r("code"),
    col: r("col"),
    colgroup: r("colgroup"),
    data: r("data"),
    datalist: r("datalist"),
    dd: r("dd"),
    del: r("del"),
    details: r("details"),
    dfn: r("dfn"),
    dialog: r("dialog"),
    div: r("div"),
    dl: r("dl"),
    dt: r("dt"),
    em: r("em"),
    embed: r("embed"),
    fieldset: r("fieldset"),
    figcaption: r("figcaption"),
    figure: r("figure"),
    footer: r("footer"),
    form: r("form"),
    h1: r("h1"),
    h2: r("h2"),
    h3: r("h3"),
    h4: r("h4"),
    h5: r("h5"),
    h6: r("h6"),
    head: r("head"),
    header: r("header"),
    hgroup: r("hgroup"),
    hr: r("hr"),
    html: r("html"),
    i: r("i"),
    iframe: r("iframe"),
    img: r("img"),
    input: r("input"),
    ins: r("ins"),
    kbd: r("kbd"),
    keygen: r("keygen"),
    label: r("label"),
    legend: r("legend"),
    li: r("li"),
    link: r("link"),
    main: r("main"),
    map: r("map"),
    mark: r("mark"),
    menu: r("menu"),
    menuitem: r("menuitem"),
    meta: r("meta"),
    meter: r("meter"),
    nav: r("nav"),
    noscript: r("noscript"),
    object: r("object"),
    ol: r("ol"),
    optgroup: r("optgroup"),
    option: r("option"),
    output: r("output"),
    p: r("p"),
    param: r("param"),
    picture: r("picture"),
    pre: r("pre"),
    progress: r("progress"),
    q: r("q"),
    rp: r("rp"),
    rt: r("rt"),
    ruby: r("ruby"),
    s: r("s"),
    samp: r("samp"),
    script: r("script"),
    section: r("section"),
    select: r("select"),
    small: r("small"),
    source: r("source"),
    span: r("span"),
    strong: r("strong"),
    style: r("style"),
    sub: r("sub"),
    summary: r("summary"),
    sup: r("sup"),
    table: r("table"),
    tbody: r("tbody"),
    td: r("td"),
    textarea: r("textarea"),
    tfoot: r("tfoot"),
    th: r("th"),
    thead: r("thead"),
    time: r("time"),
    title: r("title"),
    tr: r("tr"),
    track: r("track"),
    u: r("u"),
    ul: r("ul"),
    var: r("var"),
    video: r("video"),
    wbr: r("wbr"),
    circle: r("circle"),
    clipPath: r("clipPath"),
    defs: r("defs"),
    ellipse: r("ellipse"),
    g: r("g"),
    image: r("image"),
    line: r("line"),
    linearGradient: r("linearGradient"),
    mask: r("mask"),
    path: r("path"),
    pattern: r("pattern"),
    polygon: r("polygon"),
    polyline: r("polyline"),
    radialGradient: r("radialGradient"),
    rect: r("rect"),
    stop: r("stop"),
    svg: r("svg"),
    text: r("text"),
    tspan: r("tspan")
  };
  t.exports = a
}, function (t, e, n) {
  "use strict";
  var o = n(1), r = o.isValidElement, a = n(24);
  t.exports = a(r)
}, function (t, e, n) {
  "use strict";
  var o = n(25);
  t.exports = function (t) {
    return o(t, !1)
  }
}, function (t, e, n) {
  "use strict";
  var o = n(5), r = n(0), a = n(4), i = n(12), s = n(26);
  t.exports = function (t, e) {
    function n(t) {
      var e = t && (T && t[T] || t[w]);
      if ("function" == typeof e)return e
    }

    function u(t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e
    }

    function l(t) {
      this.message = t, this.stack = ""
    }

    function c(t) {
      function n(n, o, a, s, u, c, p) {
        if (s = s || k, c = c || a, p !== i)if (e) r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else;
        return null == o[a] ? n ? new l(null === o[a] ? "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `null`." : "The " + u + " `" + c + "` is marked as required in `" + s + "`, but its value is `undefined`.") : null : t(o, a, s, u, c)
      }

      var o = n.bind(null, !1);
      return o.isRequired = n.bind(null, !0), o
    }

    function p(t) {
      function e(e, n, o, r, a, i) {
        var s = e[n];
        if (x(s) !== t)return new l("Invalid " + r + " `" + a + "` of type `" + E(s) + "` supplied to `" + o + "`, expected `" + t + "`.");
        return null
      }

      return c(e)
    }

    function f(t) {
      function e(e, n, o, r, a) {
        if ("function" != typeof t)return new l("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside arrayOf.");
        var s = e[n];
        if (!Array.isArray(s)) {
          return new l("Invalid " + r + " `" + a + "` of type `" + x(s) + "` supplied to `" + o + "`, expected an array.")
        }
        for (var u = 0; u < s.length; u++) {
          var c = t(s, u, o, r, a + "[" + u + "]", i);
          if (c instanceof Error)return c
        }
        return null
      }

      return c(e)
    }

    function d(t) {
      function e(e, n, o, r, a) {
        if (!(e[n] instanceof t)) {
          var i = t.name || k;
          return new l("Invalid " + r + " `" + a + "` of type `" + P(e[n]) + "` supplied to `" + o + "`, expected instance of `" + i + "`.")
        }
        return null
      }

      return c(e)
    }

    function m(t) {
      function e(e, n, o, r, a) {
        for (var i = e[n], s = 0; s < t.length; s++)if (u(i, t[s]))return null;
        return new l("Invalid " + r + " `" + a + "` of value `" + i + "` supplied to `" + o + "`, expected one of " + JSON.stringify(t) + ".")
      }

      return Array.isArray(t) ? c(e) : o.thatReturnsNull
    }

    function h(t) {
      function e(e, n, o, r, a) {
        if ("function" != typeof t)return new l("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside objectOf.");
        var s = e[n], u = x(s);
        if ("object" !== u)return new l("Invalid " + r + " `" + a + "` of type `" + u + "` supplied to `" + o + "`, expected an object.");
        for (var c in s)if (s.hasOwnProperty(c)) {
          var p = t(s, c, o, r, a + "." + c, i);
          if (p instanceof Error)return p
        }
        return null
      }

      return c(e)
    }

    function v(t) {
      function e(e, n, o, r, a) {
        for (var s = 0; s < t.length; s++) {
          if (null == (0, t[s])(e, n, o, r, a, i))return null
        }
        return new l("Invalid " + r + " `" + a + "` supplied to `" + o + "`.")
      }

      if (!Array.isArray(t))return o.thatReturnsNull;
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if ("function" != typeof r)return a(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", C(r), n), o.thatReturnsNull
      }
      return c(e)
    }

    function y(t) {
      function e(e, n, o, r, a) {
        var s = e[n], u = x(s);
        if ("object" !== u)return new l("Invalid " + r + " `" + a + "` of type `" + u + "` supplied to `" + o + "`, expected `object`.");
        for (var c in t) {
          var p = t[c];
          if (p) {
            var f = p(s, c, o, r, a + "." + c, i);
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
          var o = n(e);
          if (!o)return !1;
          var r, a = o.call(e);
          if (o !== e.entries) {
            for (; !(r = a.next()).done;)if (!g(r.value))return !1
          } else for (; !(r = a.next()).done;) {
            var i = r.value;
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
      return t.constructor && t.constructor.name ? t.constructor.name : k
    }

    var T = "function" == typeof Symbol && Symbol.iterator, w = "@@iterator", k = "<<anonymous>>", N = {
      array: p("array"),
      bool: p("boolean"),
      func: p("function"),
      number: p("number"),
      object: p("object"),
      string: p("string"),
      symbol: p("symbol"),
      any: function () {
        return c(o.thatReturnsNull)
      }(),
      arrayOf: f,
      element: function () {
        function e(e, n, o, r, a) {
          var i = e[n];
          if (!t(i)) {
            return new l("Invalid " + r + " `" + a + "` of type `" + x(i) + "` supplied to `" + o + "`, expected a single ReactElement.")
          }
          return null
        }

        return c(e)
      }(),
      instanceOf: d,
      node: function () {
        function t(t, e, n, o, r) {
          return g(t[e]) ? null : new l("Invalid " + o + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.")
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
  function o(t, e, n, o, r) {
  }

  t.exports = o
}, function (t, e, n) {
  "use strict";
  t.exports = "15.6.1"
}, function (t, e, n) {
  "use strict";
  var o = n(6), r = o.Component, a = n(1), i = a.isValidElement, s = n(7), u = n(29);
  t.exports = u(r, i, s)
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return t
  }

  function r(t, e, n) {
    function r(t, e) {
      var n = g.hasOwnProperty(e) ? g[e] : null;
      C.hasOwnProperty(e) && s("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e), t && s("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
    }

    function l(t, n) {
      if (n) {
        s("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), s(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
        var o = t.prototype, a = o.__reactAutoBindPairs;
        n.hasOwnProperty(u) && b.mixins(t, n.mixins);
        for (var i in n)if (n.hasOwnProperty(i) && i !== u) {
          var l = n[i], c = o.hasOwnProperty(i);
          if (r(c, i), b.hasOwnProperty(i)) b[i](t, l); else {
            var p = g.hasOwnProperty(i), m = "function" == typeof l, h = m && !p && !c && !1 !== n.autobind;
            if (h) a.push(i, l), o[i] = l; else if (c) {
              var v = g[i];
              s(p && ("DEFINE_MANY_MERGED" === v || "DEFINE_MANY" === v), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", v, i), "DEFINE_MANY_MERGED" === v ? o[i] = f(o[i], l) : "DEFINE_MANY" === v && (o[i] = d(o[i], l))
            } else o[i] = l
          }
        }
      } else;
    }

    function c(t, e) {
      if (e)for (var n in e) {
        var o = e[n];
        if (e.hasOwnProperty(n)) {
          var r = n in b;
          s(!r, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
          var a = n in t;
          s(!a, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), t[n] = o
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
        var n = t.apply(this, arguments), o = e.apply(this, arguments);
        if (null == n)return o;
        if (null == o)return n;
        var r = {};
        return p(r, n), p(r, o), r
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
        var o = e[n], r = e[n + 1];
        t[o] = m(t, r)
      }
    }

    function v(t) {
      var e = o(function (t, o, r) {
        this.__reactAutoBindPairs.length && h(this), this.props = t, this.context = o, this.refs = i, this.updater = r || n, this.state = null;
        var a = this.getInitialState ? this.getInitialState() : null;
        s("object" == typeof a && !Array.isArray(a), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"), this.state = a
      });
      e.prototype = new P, e.prototype.constructor = e, e.prototype.__reactAutoBindPairs = [], y.forEach(l.bind(null, e)), l(e, x), l(e, t), l(e, E), e.getDefaultProps && (e.defaultProps = e.getDefaultProps()), s(e.prototype.render, "createClass(...): Class specification must implement a `render` method.");
      for (var r in g)e.prototype[r] || (e.prototype[r] = null);
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
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function o(t) {
    return a.isValidElement(t) || r("143"), t
  }

  var r = n(3), a = n(1);
  n(0);
  t.exports = o
}, function (t, e, n) {
  t.exports = n(32)()
}, function (t, e, n) {
  "use strict";
  var o = n(5), r = n(0), a = n(12);
  t.exports = function () {
    function t(t, e, n, o, i, s) {
      s !== a && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
    return n.checkPropTypes = o, n.PropTypes = n, n
  }
}]);
//# sourceMappingURL=react-vote.js.map