/*!
 * 
 * 	elfsight.com
 * 	https://elfsight.com/
 * 	Copyright (c) 2023 Elfsight, LLC. ALL RIGHTS RESERVED
 * 
 */
!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports; var o = n[i] = {
            exports: {}, id: i, loaded: !1
        }; return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    } var n = {}; return t.m = e, t.c = n, t.p = "/dev/", t(0)
  }([function (e, t, n) {
    n(1), n(2)(window), n(64)
  }, function (e, t, n) {
    e.exports = n.p + "index.html"
  }, function (e, t, n) {
    function i(e) {
        if (!e.eapps) {
            var t = {}, n = new r, i = new o(e, e.document.body, n), s = new a; t.platform = i.facade(), t.apps = n.facade(), t.analytics = s.facade(), e.eapps = t
        }
    } n(3); var o = n(52), r = n(59), a = n(62); e.exports = i
  }, function (e, t, n) {
    n(4), n(42), n(49)
  }, function (e, t, n) {
    var i = n(5); i(i.S + i.F, "Object", {
        assign: n(26)
    })
  }, function (e, t, n) {
    var i = n(6), o = n(7), r = n(8), a = n(18), s = n(24), c = "prototype", l = function e(t, n, l) {
        var p, u, f, d, g = t & e.F, h = t & e.G, v = t & e.S, b = t & e.P, w = t & e.B, m = h ? i : v ? i[n] || (i[n] = {}) : (i[n] || {})[c], y = h ? o : o[n] || (o[n] = {}), x = y[c] || (y[c] = {}); h && (l = n); for (p in l) u = !g && m && void 0 !== m[p], f = (u ? m : l)[p], d = w && u ? s(f, i) : b && "function" == typeof f ? s(Function.call, f) : f, m && a(m, p, f, t & e.U), y[p] != f && r(y, p, d), b && x[p] != f && (x[p] = f)
    }; i.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
  }, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n)
  }, function (e, t) {
    var n = e.exports = {
        version: "2.6.5"
    }; "number" == typeof __e && (__e = n)
  }, function (e, t, n) {
    var i = n(9), o = n(17); e.exports = n(13) ? function (e, t, n) {
        return i.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
  }, function (e, t, n) {
    var i = n(10), o = n(12), r = n(16), a = Object.defineProperty; t.f = n(13) ? Object.defineProperty : function (e, t, n) {
        if (i(e), t = r(t, !0), i(n), o) try {
            return a(e, t, n)
        } catch (e) {
  
        } if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e
    }
  }, function (e, t, n) {
    var i = n(11); e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!"); return e
    }
  }, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    } e.exports = function (e) {
        return "object" === n(e) ? null !== e : "function" == typeof e
    }
  }, function (e, t, n) {
    e.exports = !n(13) && !n(14)(function () {
        return 7 != Object.defineProperty(n(15)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
  }, function (e, t, n) {
    e.exports = !n(14)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
  }, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
  }, function (e, t, n) {
    var i = n(11), o = n(6).document, r = i(o) && i(o.createElement); e.exports = function (e) {
        return r ? o.createElement(e) : {}
    }
  }, function (e, t, n) {
    var i = n(11); e.exports = function (e, t) {
        if (!i(e)) return e; var n, o; if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o; if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o; if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o; throw TypeError("Can't convert object to primitive value")
    }
  }, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t
        }
    }
  }, function (e, t, n) {
    var i = n(6), o = n(8), r = n(19), a = n(20)("src"), s = n(21), c = "toString", l = ("" + s).split(c); n(7).inspectSource = function (e) {
        return s.call(e)
    }, (e.exports = function (e, t, n, s) {
        var c = "function" == typeof n; c && (r(n, "name") || o(n, "name", t)), e[t] !== n && (c && (r(n, a) || o(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : s ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
    })(Function.prototype, c, function () {
        return "function" == typeof this && this[a] || s.call(this)
    })
  }, function (e, t) {
    var n = {}.hasOwnProperty; e.exports = function (e, t) {
        return n.call(e, t)
    }
  }, function (e, t) {
    var n = 0, i = Math.random(); e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
  }, function (e, t, n) {
    e.exports = n(22)("native-function-to-string", Function.toString)
  }, function (e, t, n) {
    var i = n(7), o = n(6), r = "__core-js_shared__", a = o[r] || (o[r] = {}); (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version, mode: n(23) ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (e, t) {
    e.exports = !1
  }, function (e, t, n) {
    var i = n(25); e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e; switch (n) {
            case 1: return function (n) {
                return e.call(t, n)
            }; case 2: return function (n, i) {
                return e.call(t, n, i)
            }; case 3: return function (n, i, o) {
                return e.call(t, n, i, o)
            }
        }return function () {
            return e.apply(t, arguments)
        }
    }
  }, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e
    }
  }, function (e, t, n) {
    "use strict"; var i = n(27), o = n(39), r = n(40), a = n(41), s = n(30), c = Object.assign; e.exports = !c || n(14)(function () {
        var e = {}, t = {}, n = Symbol(), i = "abcdefghijklmnopqrst"; return e[n] = 7, i.split("").forEach(function (e) {
            t[e] = e
        }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != i
    }) ? function (e, t) {
        for (var n = a(e), c = arguments.length, l = 1, p = o.f, u = r.f; c > l;)for (var f, d = s(arguments[l++]), g = p ? i(d).concat(p(d)) : i(d), h = g.length, v = 0; h > v;)u.call(d, f = g[v++]) && (n[f] = d[f]); return n
    } : c
  }, function (e, t, n) {
    var i = n(28), o = n(38); e.exports = Object.keys || function (e) {
        return i(e, o)
    }
  }, function (e, t, n) {
    var i = n(19), o = n(29), r = n(33)(!1), a = n(37)("IE_PROTO"); e.exports = function (e, t) {
        var n, s = o(e), c = 0, l = []; for (n in s) n != a && i(s, n) && l.push(n); for (; t.length > c;)i(s, n = t[c++]) && (~r(l, n) || l.push(n)); return l
    }
  }, function (e, t, n) {
    var i = n(30), o = n(32); e.exports = function (e) {
        return i(o(e))
    }
  }, function (e, t, n) {
    var i = n(31); e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
  }, function (e, t) {
    var n = {}.toString; e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
  }, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e); return e
    }
  }, function (e, t, n) {
    var i = n(29), o = n(34), r = n(36); e.exports = function (e) {
        return function (t, n, a) {
            var s, c = i(t), l = o(c.length), p = r(a, l); if (e && n != n) {
                for (; l > p;)if (s = c[p++], s != s) return !0
            } else for (; l > p; p++)if ((e || p in c) && c[p] === n) return e || p || 0; return !e && -1
        }
    }
  }, function (e, t, n) {
    var i = n(35), o = Math.min; e.exports = function (e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
    }
  }, function (e, t) {
    var n = Math.ceil, i = Math.floor; e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
  }, function (e, t, n) {
    var i = n(35), o = Math.max, r = Math.min; e.exports = function (e, t) {
        return e = i(e), e < 0 ? o(e + t, 0) : r(e, t)
    }
  }, function (e, t, n) {
    var i = n(22)("keys"), o = n(20); e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable
  }, function (e, t, n) {
    var i = n(32); e.exports = function (e) {
        return Object(i(e))
    }
  }, function (e, t, n) {
    "use strict"; var i = n(5), o = n(43)(2); i(i.P + i.F * !n(48)([].filter, !0), "Array", {
        filter: function (e) {
            return o(this, e, arguments[1])
        }
    })
  }, function (e, t, n) {
    var i = n(24), o = n(30), r = n(41), a = n(34), s = n(44); e.exports = function (e, t) {
        var n = 1 == e, c = 2 == e, l = 3 == e, p = 4 == e, u = 6 == e, f = 5 == e || u, d = t || s; return function (t, s, g) {
            for (var h, v, b = r(t), w = o(b), m = i(s, g, 3), y = a(w.length), x = 0, C = n ? d(t, y) : c ? d(t, 0) : void 0; y > x; x++)if ((f || x in w) && (h = w[x], v = m(h, x, b), e)) if (n) C[x] = v; else if (v) switch (e) {
                case 3: return !0; case 5: return h; case 6: return x; case 2: C.push(h)
            } else if (p) return !1; return u ? -1 : l || p ? p : C
        }
    }
  }, function (e, t, n) {
    var i = n(45); e.exports = function (e, t) {
        return new (i(e))(t)
    }
  }, function (e, t, n) {
    var i = n(11), o = n(46), r = n(47)("species"); e.exports = function (e) {
        var t; return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), i(t) && (t = t[r], null === t && (t = void 0))), void 0 === t ? Array : t
    }
  }, function (e, t, n) {
    var i = n(31); e.exports = Array.isArray || function (e) {
        return "Array" == i(e)
    }
  }, function (e, t, n) {
    var i = n(22)("wks"), o = n(20), r = n(6).Symbol, a = "function" == typeof r, s = e.exports = function (e) {
        return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e))
    }; s.store = i
  }, function (e, t, n) {
    "use strict"; var i = n(14); e.exports = function (e, t) {
        return !!e && i(function () {
            t ? e.call(null, function () {
  
            }, 1) : e.call(null)
        })
    }
  }, function (e, t, n) {
    var i = n(5); i(i.P, "Function", {
        bind: n(50)
    })
  }, function (e, t, n) {
    "use strict"; var i = n(25), o = n(11), r = n(51), a = [].slice, s = {}, c = function (e, t, n) {
        if (!(t in s)) {
            for (var i = [], o = 0; o < t; o++)i[o] = "a[" + o + "]"; s[t] = Function("F,a", "return new F(" + i.join(",") + ")")
        } return s[t](e, n)
    }; e.exports = Function.bind || function (e) {
        var t = i(this), n = a.call(arguments, 1), s = function i() {
            var o = n.concat(a.call(arguments)); return this instanceof i ? c(t, o.length, o) : r(t, o, e)
        }; return o(t.prototype) && (s.prototype = t.prototype), s
    }
  }, function (e, t) {
    e.exports = function (e, t, n) {
        var i = void 0 === n; switch (t.length) {
            case 0: return i ? e() : e.call(n); case 1: return i ? e(t[0]) : e.call(n, t[0]); case 2: return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]); case 3: return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]); case 4: return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }return e.apply(n, t)
    }
  }, function (e, t, n) {
    var i = n(53), o = n(54), r = n(57), a = n(58), s = "eapps.Platform", c = "disabled", l = "enabled", p = "first-activity", u = "in-viewport", f = [c, l, p, u], d = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, g = "https://apps.elfsight.com", h = "https://core.service.elfsight.com", v = function (e, t, n) {
        var v, b, w = this, m = {}, y = [], x = [], C = [], k = []; w.initialize = function () {
            w.logError = r.withModule(s), i(function () {
                t = t || e.document.body, w.establishPreconnections(), w.observe(), w.collectWidgets(t), w.boot(), w.watchWidgetReset()
            })
        }, w.establishPreconnections = function () {
        }, w.preconnect = function (e) {
//            var t = document.createElement("link"); t.href = e, t.rel = "preconnect", t.crossOrigin = "", document.head.appendChild(t)
        }, w.facade = function () {
            return new a(w)
        }, w.requireWidget = function (e) {
            "string" != typeof e && w.logError("Widget Public ID required and should be a string", {
                pid: e
            }), ~y.indexOf(e) || y.push(e)
        }, w.addPlaceholder = function (e) {
            ~x.indexOf(e) || x.push(e)
        }, w.getEappsClass = function (e) {
            var t = e.className.split(" "); return 1 === t.length ? e.className : t.length > 1 ? (t.filter(function (e) {
                return /elfsight-app-[\S]+/.test(e)
            }), t[0]) : void 0
        }, w.getWidgetIdByElement = function (e) {
            return "div" === e.tagName.toLowerCase() ? w.getEappsClass(e).replace("elfsight-app-", "") : e.getAttribute("data-id")
        }, w.getLazyMode = function (e) {
            var t = e.getAttribute("data-elfsight-app-lazy"); return "" === t ? l : null !== t && f.includes(t) ? t : c
        }, w.getWidgetsElements = function (e) {
            if (e = e || t, !e || "function" != typeof e.getElementsByTagName || "function" != typeof e.querySelectorAll) return []; var n = Array.prototype.slice.call(e.getElementsByTagName("elfsight-app")), i = Array.prototype.slice.call(e.querySelectorAll('*[class^="elfsight-app"]')), o = i.concat(n); return e instanceof HTMLElement && ~e.className.indexOf("elfsight-app") && o.push(e), o
        }, w.collectWidgets = function (e) {
            w.getWidgetsElements(e).forEach(function (e) {
                var t = w.getWidgetIdByElement(e); if (t) {
                    var n = w.getLazyMode(e); n === c ? w.requireWidget(t) : w.bootWidgetDeferredly(e, t, n), w.addPlaceholder(e)
                }
            })
        }, w.bootWidgetDeferredly = function (e, t, n) {
            function i() {
                s.splice(0, s.length).forEach(function (e) {
                    e()
                })
            } function o() {
                i(), w.requireWidget(t), w.revise()
            } function r() {
                var e = ["scroll", "mousemove", "touchstart", "keydown", "click"], t = {
                    capture: !0, passive: !0
                }; return e.forEach(function (e) {
                    window.addEventListener(e, o, t)
                }), function () {
                    e.forEach(function (e) {
                        window.removeEventListener(e, o, t)
                    })
                }
            } function a() {
                if ("undefined" == typeof window.IntersectionObserver) return function () {
  
                }; var t = new IntersectionObserver(function (e) {
                    for (var t = 0; t < e.length; ++t)if (e[t].isIntersecting) {
                        o(); break
                    }
                }); return t.observe(e), function () {
                    t.disconnect()
                }
            } var s = [], c = [l, u].includes(n); c && s.push(a()); var f = [l, p].includes(n); f && s.push(r())
        }, w.watchWidgetReset = function () {
            window.addEventListener("message", function (e) {
                var t = e.data; t.action && "EappsPlatform.widgetReset" === t.action && w.resetWidget(t.widgetId)
            })
        }, w.resetWidget = function (e) {
            var t = function e(t) {
                var e = document.createElement("div"); return e.className = "elfsight-app-" + t, e
            }; w.getWidgetsElements().forEach(function (n) {
                w.getWidgetIdByElement(n) === e && (delete m[e], n.parentNode.replaceChild(t(e), n))
            })
        }, w.initWidget = function (e) {
            var t = w.getWidgetIdByElement(e), i = m[t]; if (i) {
                if (!i.status || !i.data) return void w.logError('Widget "' + t + '" can`t be initialized because ' + i.reason, e); i.data.id = t, i.data.platform = !0, i.data.usingLegacyPlatform = b; var o = i.user || i.data.user; o && (i.data.isOwner = o.owner), n.initWidget(e, i.data)
            }
        }, w.boot = function (e, t) {
            var n = t || y, i = []; if (n.forEach(function (e) {
                k.includes(e) || (k.push(e), i.push(e))
            }), i.length) {
                var r = new XMLHttpRequest, a = w.getPlatformUrl(); a += "/p/boot/"; var s = o.stringify({
                    w: i.join(","), page: w.getPage()
                }); r.open("get", a + "?" + s), r.withCredentials = !0, r.onload = function () {
                    b = r.responseURL.includes(g); var t = JSON.parse(r.response); t.status || w.logError("Boot failed because " + t.reason, t.data), m = Object.assign({}, m, t.data.widgets), w.loadAssets(t.data.assets), x.forEach(w.initWidget.bind(w)), k = k.filter(function (e) {
                        return !i.includes(e)
                    }), e && e()
                }, r.send()
            }
        }, w.getPage = function () {
            try {
                var e = document.location.href; if (d.test(e)) return new URL(e).toString()
            } catch (e) {
  
            }
        }, w.getPlatformUrl = function () {
            return e.eappsCustomPlatformUrl ? e.eappsCustomPlatformUrl : w.useServiceCore() ? h : g
        }, w.useServiceCore = function () {
            return !!document.querySelector("script[data-use-service-core]")
        }, w.revise = function () {
            var e = y.filter(function (e) {
                return !(e in m)
            }); e.length > 0 ? w.boot(null, e) : x.forEach(w.initWidget.bind(w))
        }, w.loadAssets = function (t) {
            t && t.length && t.filter(function (e) {
                return C.indexOf(e) === -1
            }).forEach(function (t) {
                var n = e.document.createElement("script"); n.src = t, n.setAttribute("defer", "defer"), n.setAttribute("charset", "UTF-8"), e.document.head.appendChild(n), C.push(t)
            })
        }, w.observe = function () {
            if (e.MutationObserver && !v) {
                var t = {
                    childList: !0, subtree: !0, characterData: !0
                }, n = null; v = new MutationObserver(function (e) {
                    var t = function (e) {
                        w.requireWidget(w.getWidgetIdByElement(e)), w.addPlaceholder(e)
                    }; e.forEach(function (e) {
                        var i = function (e) {
                            var i = w.getWidgetsElements(e); i.forEach(t), i.length > 0 && (n && clearTimeout(n), n = setTimeout(function () {
                                w.revise()
                            }, 1e3))
                        }; Array.prototype.forEach.call(e.addedNodes, i)
                    })
                }), v.observe(e.document, t)
            }
        }, w.initialize()
    }; e.exports = v
  }, function (e, t, n) {/*!
    * domready (c) Dustin Diaz 2014 - License MIT
    */
    !function (t, n) {
        e.exports = n()
    }("domready", function () {
        var e, t = [], n = document, i = n.documentElement.doScroll, o = "DOMContentLoaded", r = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState); return r || n.addEventListener(o, e = function () {
            for (n.removeEventListener(o, e), r = 1; e = t.shift();)e()
        }), function (e) {
            r ? setTimeout(e, 0) : t.push(e)
        }
    })
  }, function (e, t, n) {
    "use strict"; function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    } function o(e) {
        switch (e.arrayFormat) {
            case "index": return function (t, n, i) {
                return null === n ? [a(t, e), "[", i, "]"].join("") : [a(t, e), "[", a(i, e), "]=", a(n, e)].join("")
            }; case "bracket": return function (t, n) {
                return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("")
            }; default: return function (t, n) {
                return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("")
            }
        }
    } function r(e) {
        var t; switch (e.arrayFormat) {
            case "index": return function (e, n, i) {
                return t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === i[e] && (i[e] = {}), void (i[e][t[1]] = n)) : void (i[e] = n)
            }; case "bracket": return function (e, n, i) {
                return t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 === i[e] ? void (i[e] = [n]) : void (i[e] = [].concat(i[e], n)) : void (i[e] = n)
            }; default: return function (e, t, n) {
                return void 0 === n[e] ? void (n[e] = t) : void (n[e] = [].concat(n[e], t))
            }
        }
    } function a(e, t) {
        return t.encode ? t.strict ? c(e) : encodeURIComponent(e) : e
    } function s(e) {
        return Array.isArray(e) ? e.sort() : "object" === i(e) ? s(Object.keys(e)).sort(function (e, t) {
            return Number(e) - Number(t)
        }).map(function (t) {
            return e[t]
        }) : e
    } var c = n(55), l = n(56); t.extract = function (e) {
        return e.split("?")[1] || ""
    }, t.parse = function (e, t) {
        t = l({
            arrayFormat: "none"
        }, t); var n = r(t), o = Object.create(null); return "string" != typeof e ? o : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function (e) {
            var t = e.replace(/\+/g, " ").split("="), i = t.shift(), r = t.length > 0 ? t.join("=") : void 0; r = void 0 === r ? null : decodeURIComponent(r), n(decodeURIComponent(i), r, o)
        }), Object.keys(o).sort().reduce(function (e, t) {
            var n = o[t]; return Boolean(n) && "object" === i(n) && !Array.isArray(n) ? e[t] = s(n) : e[t] = n, e
        }, Object.create(null))) : o
    }, t.stringify = function (e, t) {
        var n = {
            encode: !0, strict: !0, arrayFormat: "none"
        }; t = l(n, t); var i = o(t); return e ? Object.keys(e).sort().map(function (n) {
            var o = e[n]; if (void 0 === o) return ""; if (null === o) return a(n, t); if (Array.isArray(o)) {
                var r = []; return o.slice().forEach(function (e) {
                    void 0 !== e && r.push(i(n, e, r.length))
                }), r.join("&")
            } return a(n, t) + "=" + a(o, t)
        }).filter(function (e) {
            return e.length > 0
        }).join("&") : ""
    }
  }, function (e, t) {
    "use strict"; e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
  }, function (e, t) {/*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
    "use strict"; function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e)
    } function i() {
        try {
            if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++)t["_" + String.fromCharCode(n)] = n; var i = Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            }); if ("0123456789" !== i.join("")) return !1; var o = {}; return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                o[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (e) {
            return !1
        }
    } var o = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable; e.exports = i() ? Object.assign : function (e, t) {
        for (var i, s, c = n(e), l = 1; l < arguments.length; l++) {
            i = Object(arguments[l]); for (var p in i) r.call(i, p) && (c[p] = i[p]); if (o) {
                s = o(i); for (var u = 0; u < s.length; u++)a.call(i, s[u]) && (c[s[u]] = i[s[u]])
            }
        } return c
    }
  }, function (e, t) {
    function n(e, t, n) {
        var i = [n + ' throws: "' + e + '"']; t && (i.push("with \n\t ->"), i.push(t)), console.error.apply(console, i)
    } n.withModule = function (e) {
        return function (t, i) {
            return n(t, i, e)
        }
    }, e.exports = n
  }, function (e, t) {
    var n = function (e) {
        var t = this; t.initialize = function () {
  
        }, t.requireWidget = function (t) {
            return e.requireWidget(t)
        }, t.resetWidget = function (t) {
            return e.resetWidget(t)
        }, t.initialize()
    }; e.exports = n
  }, function (e, t, n) {
    var i = n(57), o = n(60), r = n(61), a = "eapps.AppsManager", s = function () {
        var e = this, t = {}, n = [], s = []; e.initialize = function () {
            e.logError = i.withModule(a)
        }, e.facade = function () {
            return new o(e)
        }, e.register = function (n, i) {
            if (t.name) return void e.logError('Application "' + n + '" is already registered'); var o = new i; t[n] = new r(o), e.initWidgetsFromBuffer(n)
        }, e.app = function (e) {
            return t[e]
        }, e.initWidget = function (t, i) {
            var o = e.app(i.app); if (o) {
                if (s.indexOf(t) !== -1) return; s.push(t), o.initWidget(t, i), e.sendExtensionPostMessage(t, i)
            } else n.push({
                element: t, config: i, initialized: !1
            })
        }, e.initWidgetsFromBuffer = function (t) {
            n && n.length && n.forEach(function (n) {
                t !== n.config.app || n.initialized || (n.initialized = !0, e.initWidget(n.element, n.config))
            })
        }, e.sendExtensionPostMessage = function (e, t) {
            window.postMessage({
                method: "postMessagePlatformWidget", data: {
                    settings: t.settings, app_slug: t.app, public_id: t.id, platform: t.usingLegacyPlatform ? "eapps" : "core"
                }
            }, "*")
        }, e.initialize()
    }; e.exports = s
  }, function (e, t) {
    var n = function (e) {
        var t = this; t.initialize = function () {
  
        }, t.register = function (t, n) {
            return e.register(t, n)
        }, t.initialize()
    }; e.exports = n
  }, function (e, t) {
    var n = "https://apps.elfsight.com", i = "https://dash.elfsight.com", o = function (e) {
        var t = this, o = !1, r = []; t.initialize = function () {
            e.whenReady(t.ready.bind(t))
        }, t.ready = function () {
            o = !0, t.initWidgetsFromBuffer()
        }, t.initWidget = function (n, i) {
            if (o) {
                i.websiteUrl = window.location.host || "undefined"; var a = {}, s = t.getAttributeSettings(n); i.settings = [i.settings, a, s].reduce(function (e, t) {
                    return Object.keys(t).forEach(function (n) {
                        e[n] = t[n]
                    }), e
                }, {}), e.initWidget(n, i.settings, i), i.isOwner && setTimeout(function () {
                    t.initToolbar(n, i)
                }, 500)
            } else r.push({
                element: n, config: i, initialized: !1
            })
        }, t.initToolbar = function (e, t) {
            t.usageStatus = function () {
                var e = "green"; return t.percentage >= 100 && (e = "red"), t.percentage >= 90 && t.percentage < 100 && (e = "orange"), e
            };
        }, t.initWidgetsFromBuffer = function () {
            r && r.length && r.forEach(function (e) {
                e.initialized || (e.initialized = !0, t.initWidget(e.element, e.config))
            })
        }, t.initialize(), t.getAttributeSettings = function (e) {
            var t = {}, n = "elfsightApp"; for (var i in e.dataset) if (i.startsWith(n)) {
                var o = "attribute".concat(i.replace(n, "")); t[o] = e.dataset[i]
            } return t
        }
    }; e.exports = o
  }, function (e, t, n) {
    var i = n(63), o = function () {
        var e = this; e.timeout = null, e.buffer = [], e.steps = [], e.facade = function () {
            return new i(e)
        }, e.send = function () {
            e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                if (e.buffer && e.buffer.length) {
                    e.buffer.forEach(function (t) {
                        if (e.steps && !e.steps.length) e.steps.push({
                            app: t.app, widgetId: t.widgetId, event: t.event, count: t.count
                        }); else {
                            var n = !1; e.steps.forEach(function (i, o) {
                                i.app == t.app && i.widgetId == t.widgetId && i.event == t.event && (e.steps[o].count += t.count, n = !0)
                            }), n || e.steps.push({
                                app: t.app, widgetId: t.widgetId, event: t.event, count: t.count
                            })
                        }
                    }), e.dataToSend = [], e.steps.forEach(function (t) {
                        e.dataToSend.push({
                            a: t.app, w: t.widgetId, e: t.event, c: t.count
                        })
                    }); var t = new XMLHttpRequest; t.open("POST", "https://eapps-analytics.elfsight.com/store", !0), t.setRequestHeader("Content-Type", "text/plain; charset=UTF-8"), t.send(btoa(JSON.stringify(e.dataToSend))), e.dataToSend = [], e.buffer = [], e.steps = []
                }
            }, 2500)
        }, e.store = function (e) {
  
        }
    }; e.exports = o
  }, function (e, t) {
    var n = function (e) {
        var t = this; t.store = function (e) {
  
        }
    }; e.exports = n
  }, function (e, t, n) {
    var i = n(65); "string" == typeof i && (i = [[e.id, i, ""]]); n(67)(i, {}); i.locals && (e.exports = i.locals)
  }, function (e, t) {
    e.exports = function () {
        var e = []; return e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t]; n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            } return e.join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]); for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0]; "number" == typeof r && (i[r] = !0)
            } for (o = 0; o < t.length; o++) {
                var a = t[o]; "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
  }, function (e, t, n) {
    function i(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n], o = d[i.id]; if (o) {
                o.refs++; for (var r = 0; r < o.parts.length; r++)o.parts[r](i.parts[r]); for (; r < i.parts.length; r++)o.parts.push(l(i.parts[r], t))
            } else {
                for (var a = [], r = 0; r < i.parts.length; r++)a.push(l(i.parts[r], t)); d[i.id] = {
                    id: i.id, refs: 1, parts: a
                }
            }
        }
    } function o(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i], r = o[0], a = o[1], s = o[2], c = o[3], l = {
                css: a, media: s, sourceMap: c
            }; n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                id: r, parts: [l]
            })
        } return t
    } function r(e, t) {
        var n = v(), i = m[m.length - 1]; if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), m.push(t); else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."); n.appendChild(t)
        }
    }  function l(e, t) {
        var n, i, o; if (t.singleton) {
            var r = w++; n = b || (b = s(t)), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), i = f.bind(null, n), o = function () {
            a(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), i = u.bind(null, n), o = function () {
            a(n)
        }); return i(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; i(e = t)
            } else o()
        }
    } function p(e, t, n, i) {
        var o = n ? "" : i.css; if (e.styleSheet) e.styleSheet.cssText = y(t, o); else {
            var r = document.createTextNode(o), a = e.childNodes; a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
        }
    } function u(e, t) {
        var n = t.css, i = t.media; if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(n))
        }
    } function f(e, t) {
        var n = t.css, i = t.sourceMap; i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"); var o = new Blob([n], {
            type: "text/css"
        }), r = e.href; e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
    } var d = {}, g = function (e) {
        var t; return function () {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t
        }
    }, h = g(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
  
    }), v = g(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), b = null, w = 0, m = []; e.exports = function (e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = h()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom"); var n = o(e); return i(n, t), function (e) {
            for (var r = [], a = 0; a < n.length; a++) {
                var s = n[a], c = d[s.id]; c.refs--, r.push(c)
            } if (e) {
                var l = o(e); i(l, t)
            } for (var a = 0; a < r.length; a++) {
                var c = r[a]; if (0 === c.refs) {
                    for (var p = 0; p < c.parts.length; p++)c.parts[p](); delete d[c.id]
                }
            }
        }
    }; var y = function () {
        var e = []; return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
  }]);
  