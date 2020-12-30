(() => {
  var e,
    i,
    n,
    r,
    a,
    l,
    t = new ((n = (e = function e() {
      var n;
      !(function (e, i) {
        if (!(e instanceof i))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (n = i) &&
          Object.defineProperty(this, "PI", {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(this) : void 0,
          });
    }).prototype),
    "PI",
    (r = [
      function (e, i, n) {
        n.writable = !1;
      },
    ]),
    (a = {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function () {
        return 3.14;
      },
    }),
    (l = {}),
    Object.keys(a).forEach(function (e) {
      l[e] = a[e];
    }),
    (l.enumerable = !!l.enumerable),
    (l.configurable = !!l.configurable),
    ("value" in l || l.initializer) && (l.writable = !0),
    void 0 ===
      (l = r
        .slice()
        .reverse()
        .reduce(function (e, i) {
          return i(n, "PI", e) || e;
        }, l)).initializer && (Object.defineProperty(n, "PI", l), (l = null)),
    (i = l),
    e)();
  (t.PI = 3.15), console.log(t);
})();
