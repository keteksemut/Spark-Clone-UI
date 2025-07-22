(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    6840: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(54381)
        }
        ])
    },
    29108: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ReadonlyURLSearchParams: function() {
                return l.ReadonlyURLSearchParams
            },
            RedirectType: function() {
                return l.RedirectType
            },
            ServerInsertedHTMLContext: function() {
                return u.ServerInsertedHTMLContext
            },
            notFound: function() {
                return l.notFound
            },
            permanentRedirect: function() {
                return l.permanentRedirect
            },
            redirect: function() {
                return l.redirect
            },
            useParams: function() {
                return h
            },
            usePathname: function() {
                return d
            },
            useRouter: function() {
                return f
            },
            useSearchParams: function() {
                return c
            },
            useSelectedLayoutSegment: function() {
                return _
            },
            useSelectedLayoutSegments: function() {
                return p
            },
            useServerInsertedHTML: function() {
                return u.useServerInsertedHTML
            }
        });
        let r = n(67294)
          , i = n(55716)
          , s = n(77353)
          , o = n(78575)
          , a = n(74565)
          , l = n(8670)
          , u = n(14439);
        function c() {
            let e = (0,
            r.useContext)(s.SearchParamsContext);
            return (0,
            r.useMemo)( () => e ? new l.ReadonlyURLSearchParams(e) : null, [e])
        }
        function d() {
            return (0,
            r.useContext)(s.PathnameContext)
        }
        function f() {
            let e = (0,
            r.useContext)(i.AppRouterContext);
            if (null === e)
                throw Error("invariant expected app router to be mounted");
            return e
        }
        function h() {
            return (0,
            r.useContext)(s.PathParamsContext)
        }
        function p(e) {
            void 0 === e && (e = "children");
            let t = (0,
            r.useContext)(i.LayoutRouterContext);
            return t ? function e(t, n, r, i) {
                let s;
                if (void 0 === r && (r = !0),
                void 0 === i && (i = []),
                r)
                    s = t[1][n];
                else {
                    var l;
                    let e = t[1];
                    s = null != (l = e.children) ? l : Object.values(e)[0]
                }
                if (!s)
                    return i;
                let u = s[0]
                  , c = (0,
                o.getSegmentValue)(u);
                return !c || c.startsWith(a.PAGE_SEGMENT_KEY) ? i : (i.push(c),
                e(s, n, !1, i))
            }(t.tree, e) : null
        }
        function _(e) {
            void 0 === e && (e = "children");
            let t = p(e);
            if (!t || 0 === t.length)
                return null;
            let n = "children" === e ? t[0] : t[t.length - 1];
            return n === a.DEFAULT_SEGMENT_KEY ? null : n
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8670: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ReadonlyURLSearchParams: function() {
                return o
            },
            RedirectType: function() {
                return r.RedirectType
            },
            notFound: function() {
                return i.notFound
            },
            permanentRedirect: function() {
                return r.permanentRedirect
            },
            redirect: function() {
                return r.redirect
            }
        });
        let r = n(58384)
          , i = n(15403);
        class s extends Error {
            constructor() {
                super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")
            }
        }
        class o extends URLSearchParams {
            append() {
                throw new s
            }
            delete() {
                throw new s
            }
            set() {
                throw new s
            }
            sort() {
                throw new s
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    15403: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            isNotFoundError: function() {
                return i
            },
            notFound: function() {
                return r
            }
        });
        let n = "NEXT_NOT_FOUND";
        function r() {
            let e = Error(n);
            throw e.digest = n,
            e
        }
        function i(e) {
            return "object" == typeof e && null !== e && "digest"in e && e.digest === n
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    80037: function(e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RedirectStatusCode", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        (r = n || (n = {}))[r.SeeOther = 303] = "SeeOther",
        r[r.TemporaryRedirect = 307] = "TemporaryRedirect",
        r[r.PermanentRedirect = 308] = "PermanentRedirect",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    58384: function(e, t, n) {
        "use strict";
        var r, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            RedirectType: function() {
                return r
            },
            getRedirectError: function() {
                return u
            },
            getRedirectStatusCodeFromError: function() {
                return _
            },
            getRedirectTypeFromError: function() {
                return p
            },
            getURLFromRedirectError: function() {
                return h
            },
            isRedirectError: function() {
                return f
            },
            permanentRedirect: function() {
                return d
            },
            redirect: function() {
                return c
            }
        });
        let s = n(95714)
          , o = n(1747)
          , a = n(80037)
          , l = "NEXT_REDIRECT";
        function u(e, t, n) {
            void 0 === n && (n = a.RedirectStatusCode.TemporaryRedirect);
            let r = Error(l);
            r.digest = l + ";" + t + ";" + e + ";" + n + ";";
            let i = s.requestAsyncStorage.getStore();
            return i && (r.mutableCookies = i.mutableCookies),
            r
        }
        function c(e, t) {
            void 0 === t && (t = "replace");
            let n = o.actionAsyncStorage.getStore();
            throw u(e, t, (null == n ? void 0 : n.isAction) ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.TemporaryRedirect)
        }
        function d(e, t) {
            void 0 === t && (t = "replace");
            let n = o.actionAsyncStorage.getStore();
            throw u(e, t, (null == n ? void 0 : n.isAction) ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.PermanentRedirect)
        }
        function f(e) {
            if ("object" != typeof e || null === e || !("digest"in e) || "string" != typeof e.digest)
                return !1;
            let[t,n,r,i] = e.digest.split(";", 4)
              , s = Number(i);
            return t === l && ("replace" === n || "push" === n) && "string" == typeof r && !isNaN(s) && s in a.RedirectStatusCode
        }
        function h(e) {
            return f(e) ? e.digest.split(";", 3)[2] : null
        }
        function p(e) {
            if (!f(e))
                throw Error("Not a redirect error");
            return e.digest.split(";", 2)[1]
        }
        function _(e) {
            if (!f(e))
                throw Error("Not a redirect error");
            return Number(e.digest.split(";", 4)[3])
        }
        (i = r || (r = {})).push = "push",
        i.replace = "replace",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    78575: function(e, t) {
        "use strict";
        function n(e) {
            return Array.isArray(e) ? e[1] : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getSegmentValue", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    56101: function(e, t) {
        "use strict";
        var n, r, i, s;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ACTION_FAST_REFRESH: function() {
                return d
            },
            ACTION_NAVIGATE: function() {
                return a
            },
            ACTION_PREFETCH: function() {
                return c
            },
            ACTION_REFRESH: function() {
                return o
            },
            ACTION_RESTORE: function() {
                return l
            },
            ACTION_SERVER_ACTION: function() {
                return f
            },
            ACTION_SERVER_PATCH: function() {
                return u
            },
            PrefetchCacheEntryStatus: function() {
                return r
            },
            PrefetchKind: function() {
                return n
            },
            isThenable: function() {
                return h
            }
        });
        let o = "refresh"
          , a = "navigate"
          , l = "restore"
          , u = "server-patch"
          , c = "prefetch"
          , d = "fast-refresh"
          , f = "server-action";
        function h(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        (i = n || (n = {})).AUTO = "auto",
        i.FULL = "full",
        i.TEMPORARY = "temporary",
        (s = r || (r = {})).fresh = "fresh",
        s.reusable = "reusable",
        s.expired = "expired",
        s.stale = "stale",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    27670: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(51297),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    26821: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = n(38754)
          , i = n(61757)
          , s = n(85893)
          , o = i._(n(67294))
          , a = r._(n(73935))
          , l = r._(n(37219))
          , u = n(21128)
          , c = n(76252)
          , d = n(29146);
        n(42723);
        let f = n(54494)
          , h = r._(n(95176))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function _(e, t, n, r, i, s, o) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && i(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , i = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => i,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                i = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            ))
        }
        function m(e) {
            return o.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let g = (0,
        o.forwardRef)( (e, t) => {
            let {src: n, srcSet: r, sizes: i, height: a, width: l, decoding: u, className: c, style: d, fetchPriority: f, placeholder: h, loading: p, unoptimized: g, fill: v, onLoadRef: b, onLoadingCompleteRef: y, setBlurComplete: w, setShowAltText: k, sizesInput: x, onLoad: j, onError: O, ...C} = e;
            return (0,
            s.jsx)("img", {
                ...C,
                ...m(f),
                loading: p,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": v ? "fill" : "1",
                className: c,
                style: d,
                sizes: i,
                srcSet: r,
                src: n,
                ref: (0,
                o.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (O && (e.src = e.src),
                    e.complete && _(e, h, b, y, w, g, x))
                }
                , [n, h, b, y, w, O, g, x, t]),
                onLoad: e => {
                    _(e.currentTarget, h, b, y, w, g, x)
                }
                ,
                onError: e => {
                    k(!0),
                    "empty" !== h && w(!0),
                    O && O(e)
                }
            })
        }
        );
        function v(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...m(n.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(n.src, r),
            null) : (0,
            s.jsx)(l.default, {
                children: (0,
                s.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }
        let b = (0,
        o.forwardRef)( (e, t) => {
            let n = (0,
            o.useContext)(f.RouterContext)
              , r = (0,
            o.useContext)(d.ImageConfigContext)
              , i = (0,
            o.useMemo)( () => {
                let e = p || r || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , n = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: a, onLoadingComplete: l} = e
              , _ = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                _.current = a
            }
            , [a]);
            let m = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                m.current = l
            }
            , [l]);
            let[b,y] = (0,
            o.useState)(!1)
              , [w,k] = (0,
            o.useState)(!1)
              , {props: x, meta: j} = (0,
            u.getImgProps)(e, {
                defaultLoader: h.default,
                imgConf: i,
                blurComplete: b,
                showAltText: w
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(g, {
                    ...x,
                    unoptimized: j.unoptimized,
                    placeholder: j.placeholder,
                    fill: j.fill,
                    onLoadRef: _,
                    onLoadingCompleteRef: m,
                    setBlurComplete: y,
                    setShowAltText: k,
                    sizesInput: e.sizes,
                    ref: t
                }), j.priority ? (0,
                s.jsx)(v, {
                    isAppRouter: !n,
                    imgAttributes: x
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    24116: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = n(38754)
          , i = n(85893)
          , s = r._(n(67294))
          , o = n(69975)
          , a = n(92712)
          , l = n(28547)
          , u = n(84350)
          , c = n(38109)
          , d = n(54494)
          , f = n(55716)
          , h = n(388)
          , p = n(27670)
          , _ = n(6220)
          , m = n(56101)
          , g = new Set;
        function v(e, t, n, r, i, s) {
            if (s || (0,
            a.isLocalURL)(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (g.has(i))
                        return;
                    g.add(i)
                }
                (async () => s ? e.prefetch(t, i) : e.prefetch(t, n, r))().catch(e => {}
                )
            }
        }
        function b(e) {
            return "string" == typeof e ? e : (0,
            l.formatUrl)(e)
        }
        let y = s.default.forwardRef(function(e, t) {
            let n, r;
            let {href: l, as: g, children: y, prefetch: w=null, passHref: k, replace: x, shallow: j, scroll: O, locale: C, onClick: S, onMouseEnter: P, onTouchStart: E, legacyBehavior: L=!1, ...M} = e;
            n = y,
            L && ("string" == typeof n || "number" == typeof n) && (n = (0,
            i.jsx)("a", {
                children: n
            }));
            let R = s.default.useContext(d.RouterContext)
              , I = s.default.useContext(f.AppRouterContext)
              , T = null != R ? R : I
              , A = !R
              , N = !1 !== w
              , D = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL
              , {href: F, as: q} = s.default.useMemo( () => {
                if (!R) {
                    let e = b(l);
                    return {
                        href: e,
                        as: g ? b(g) : e
                    }
                }
                let[e,t] = (0,
                o.resolveHref)(R, l, !0);
                return {
                    href: e,
                    as: g ? (0,
                    o.resolveHref)(R, g) : t || e
                }
            }
            , [R, l, g])
              , U = s.default.useRef(F)
              , z = s.default.useRef(q);
            L && (r = s.default.Children.only(n));
            let B = L ? r && "object" == typeof r && r.ref : t
              , [H,K,Z] = (0,
            h.useIntersection)({
                rootMargin: "200px"
            })
              , V = s.default.useCallback(e => {
                (z.current !== q || U.current !== F) && (Z(),
                z.current = q,
                U.current = F),
                H(e),
                B && ("function" == typeof B ? B(e) : "object" == typeof B && (B.current = e))
            }
            , [q, B, F, Z, H]);
            s.default.useEffect( () => {
                T && K && N && v(T, F, q, {
                    locale: C
                }, {
                    kind: D
                }, A)
            }
            , [q, F, K, C, N, null == R ? void 0 : R.locale, T, A, D]);
            let Q = {
                ref: V,
                onClick(e) {
                    L || "function" != typeof S || S(e),
                    L && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    T && !e.defaultPrevented && function(e, t, n, r, i, o, l, u, c) {
                        let {nodeName: d} = e.currentTarget;
                        if ("A" === d.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        a.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let f = () => {
                            let e = null == l || l;
                            "beforePopState"in t ? t[i ? "replace" : "push"](n, r, {
                                shallow: o,
                                locale: u,
                                scroll: e
                            }) : t[i ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        c ? s.default.startTransition(f) : f()
                    }(e, T, F, q, x, j, O, C, A)
                },
                onMouseEnter(e) {
                    L || "function" != typeof P || P(e),
                    L && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    T && (N || !A) && v(T, F, q, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: D
                    }, A)
                },
                onTouchStart: function(e) {
                    L || "function" != typeof E || E(e),
                    L && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    T && (N || !A) && v(T, F, q, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: D
                    }, A)
                }
            };
            if ((0,
            u.isAbsoluteUrl)(q))
                Q.href = q;
            else if (!L || k || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== C ? C : null == R ? void 0 : R.locale
                  , t = (null == R ? void 0 : R.isLocaleDomain) && (0,
                p.getDomainLocale)(q, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                Q.href = t || (0,
                _.addBasePath)((0,
                c.addLocale)(q, e, null == R ? void 0 : R.defaultLocale))
            }
            return L ? s.default.cloneElement(r, Q) : (0,
            i.jsx)("a", {
                ...M,
                ...Q,
                children: n
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    388: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(67294)
          , i = n(40460)
          , s = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        function l(e) {
            let {rootRef: t, rootMargin: n, disabled: l} = e
              , u = l || !s
              , [c,d] = (0,
            r.useState)(!1)
              , f = (0,
            r.useRef)(null)
              , h = (0,
            r.useCallback)(e => {
                f.current = e
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (s) {
                    if (u || c)
                        return;
                    let e = f.current;
                    if (e && e.tagName)
                        return function(e, t, n) {
                            let {id: r, observer: i, elements: s} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = a.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = o.get(r)))
                                    return t;
                                let i = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = i.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: i
                                },
                                a.push(n),
                                o.set(n, t),
                                t
                            }(n);
                            return s.set(e, t),
                            i.observe(e),
                            function() {
                                if (s.delete(e),
                                i.unobserve(e),
                                0 === s.size) {
                                    i.disconnect(),
                                    o.delete(r);
                                    let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let e = (0,
                    i.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    i.cancelIdleCallback)(e)
                }
            }
            , [u, n, t, c, f.current]),
            [h, c, (0,
            r.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    21128: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        n(42723);
        let r = n(32685)
          , i = n(76252);
        function s(e) {
            return void 0 !== e.default
        }
        function o(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var n;
            let a, l, u, {src: c, sizes: d, unoptimized: f=!1, priority: h=!1, loading: p, className: _, quality: m, width: g, height: v, fill: b=!1, style: y, overrideSrc: w, onLoad: k, onLoadingComplete: x, placeholder: j="empty", blurDataURL: O, fetchPriority: C, layout: S, objectFit: P, objectPosition: E, lazyBoundary: L, lazyRoot: M, ...R} = e, {imgConf: I, showAltText: T, blurComplete: A, defaultLoader: N} = t, D = I || i.imageConfigDefault;
            if ("allSizes"in D)
                a = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
                  , t = D.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === N)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let F = R.loader || N;
            delete R.loader,
            delete R.srcSet;
            let q = "__next_img_default"in F;
            if (q) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = F;
                F = t => {
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (S) {
                "fill" === S && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[S];
                e && (y = {
                    ...y,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[S];
                t && !d && (d = t)
            }
            let U = ""
              , z = o(g)
              , B = o(v);
            if ("object" == typeof (n = c) && (s(n) || void 0 !== n.src)) {
                let e = s(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                u = e.blurHeight,
                O = O || e.blurDataURL,
                U = e.src,
                !b) {
                    if (z || B) {
                        if (z && !B) {
                            let t = z / e.width;
                            B = Math.round(e.height * t)
                        } else if (!z && B) {
                            let t = B / e.height;
                            z = Math.round(e.width * t)
                        }
                    } else
                        z = e.width,
                        B = e.height
                }
            }
            let H = !h && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : U) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0,
            H = !1),
            a.unoptimized && (f = !0),
            q && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
            h && (C = "high");
            let K = o(m)
              , Z = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: E
            } : {}, T ? {} : {
                color: "transparent"
            }, y)
              , V = A || "empty" === j ? null : "blur" === j ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: z,
                heightInt: B,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: O || "",
                objectFit: Z.objectFit
            }) + '")' : 'url("' + j + '")'
              , Q = V ? {
                backgroundSize: Z.objectFit || "cover",
                backgroundPosition: Z.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V
            } : {}
              , G = function(e) {
                let {config: t, src: n, unoptimized: r, width: i, quality: s, sizes: o, loader: a} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: i} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, i, o)
                  , c = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (e, r) => a({
                        config: t,
                        src: n,
                        quality: s,
                        width: e
                    }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                    src: a({
                        config: t,
                        src: n,
                        quality: s,
                        width: l[c]
                    })
                }
            }({
                config: a,
                src: c,
                unoptimized: f,
                width: z,
                quality: K,
                sizes: d,
                loader: F
            });
            return {
                props: {
                    ...R,
                    loading: H ? "lazy" : p,
                    fetchPriority: C,
                    width: z,
                    height: B,
                    decoding: "async",
                    className: _,
                    style: {
                        ...Z,
                        ...Q
                    },
                    sizes: G.sizes,
                    srcSet: G.srcSet,
                    src: w || G.src
                },
                meta: {
                    unoptimized: f,
                    priority: h,
                    placeholder: j,
                    fill: b
                }
            }
        }
    },
    32685: function(e, t) {
        "use strict";
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: s, objectFit: o} = e
              , a = r ? 40 * r : t
              , l = i ? 40 * i : n
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    7e4: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let r = n(38754)
          , i = n(21128)
          , s = n(26821)
          , o = r._(n(95176));
        function a(e) {
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
        let l = s.Image
    },
    95176: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: i} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75) + "&dpl=dpl_AtnMz5fWkydfHXEFwPwbrFo3besH"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    14439: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ServerInsertedHTMLContext: function() {
                return i
            },
            useServerInsertedHTML: function() {
                return s
            }
        });
        let r = n(61757)._(n(67294))
          , i = r.default.createContext(null);
        function s(e) {
            let t = (0,
            r.useContext)(i);
            t && t(e)
        }
    },
    54381: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return ew
            }
        });
        var r = n(85893)
          , i = JSON.parse('{"link":"https://app.spark.fi/spk/airdrop","linkLabel":"<strong>The Spark Ignition Airdrop is Live!</strong> Claim your SPK now <here>","date":"06.16.2025"}')
          , s = JSON.parse('{"title":"Open the app and start growing right now!","link":"https://app.spark.fi/","linkLabel":"Launch app","navigation":[{"navTitle":"Spark","navItems":[{"link":"/savings","linkLabel":"Savings"},{"link":"/borrow","linkLabel":"SparkLend"},{"link":"/spk","linkLabel":"SPK"}]},{"navTitle":"Learn","navItems":[{"link":"https://immunefi.com/bug-bounty/sparklend/information/","linkLabel":"Bug bounty"},{"link":"https://devs.spark.fi/security/security-and-audits","linkLabel":"Audits"},{"link":"https://docs.spark.fi/faq","linkLabel":"FAQ"},{"link":"https://docs.spark.fi/","linkLabel":"Docs"},{"link":"https://docs.spark.fi/brand","linkLabel":"Brand"}]},{"navTitle":"Socials","navItems":[{"link":"https://x.com/sparkdotfi","linkLabel":"X"},{"link":"https://discord.gg/sparkdotfi","linkLabel":"Discord"},{"link":"https://blog.spark.fi","linkLabel":"Blog"},{"link":"https://t.me/sparkdotfi_chat","linkLabel":"Telegram"},{"link":"https://www.youtube.com/@sparkdotfi","linkLabel":"Youtube"}]}],"additionalLinks":[{"link":"/privacy-policy","linkLabel":"Privacy policy"},{"link":"/terms-of-use","linkLabel":"Terms of use"},{"link":"https://docs.spark.fi/mica","linkLabel":"MiCA"}]}')
          , o = JSON.parse('{"G":[{"_type":"navigationItem","href":"/savings","title":"Savings"},{"_type":"navigationItem","href":"/borrow","title":"SparkLend"},{"_type":"navigationItem","href":"/spk","title":"SPK"}],"UY":[{"title":"Socials","childItems":[{"_type":"navigationItem","href":"https://x.com/sparkdotfi","title":"X"},{"_type":"navigationItem","href":"https://discord.gg/sparkdotfi","title":"Discord"},{"_type":"navigationItem","href":"https://blog.spark.fi","title":"Blog"},{"_type":"navigationItem","href":"https://t.me/sparkdotfi_chat","title":"Telegram"},{"_type":"navigationItem","href":"https://www.youtube.com/@sparkdotfi","title":"Youtube"},{"_type":"navigationItem","title":"GitHub","href":"https://github.com/sparkdotfi"},{"_type":"navigationItem","title":"Forum","href":"https://forum.sky.money/c/spark-subdao/84"}]},{"_type":"navigationItem","title":"GitHub ","href":"https://github.com/sparkdotfi"},{"_type":"navigationItem","title":"Forum ","href":"https://forum.sky.money/c/spark-subdao/84"}],"nf":[{"_type":"navigationItem","childItems":[{"_type":"navigationItem","href":"https://docs.spark.fi/faq","title":"FAQ","hasIcon":true},{"_type":"navigationItem","href":"https://docs.spark.fi/","title":"Docs","hasIcon":true},{"_type":"navigationItem","href":"https://devs.spark.fi/security/security-and-audits","title":"Audits","hasIcon":true}],"title":"Learn"}],"$o":[{"_type":"navigationItem","childItems":[{"_type":"navigationItem","href":"https://app.spark.fi/borrow","title":"Borrow USDS at ${value}","sparkInfoId":"sparklendUsdsBorrowRate"},{"_type":"navigationItem","href":"https://app.spark.fi/savings","title":"Earn ${value} with Savings","sparkInfoId":"ssr"}],"title":"Open Spark"}]}')
          , a = n(78256)
          , l = n(67294)
          , u = n(16970)
          , c = n(71166)
          , d = n(19789)
          , f = n(11870)
          , h = n(25675)
          , p = n.n(h)
          , _ = n(41664)
          , m = n.n(_)
          , g = n(58953)
          , v = n(52867)
          , b = n.n(v);
        let y = e => {
            let {content: t} = e
              , {title: n, link: i, linkLabel: s, navigation: o, additionalLinks: a} = t
              , {width: l} = (0,
            f.a)()
              , h = l >= g.U.HD;
            return (0,
            r.jsx)("footer", {
                className: b().footer,
                children: (0,
                r.jsxs)(u.W, {
                    className: b().footer__container,
                    children: [(0,
                    r.jsx)(m(), {
                        href: "/",
                        className: b().footer__link,
                        children: (0,
                        r.jsx)(p(), {
                            src: "./logo.svg",
                            alt: "logo",
                            width: h ? 207 : 155,
                            height: h ? 64 : 48,
                            className: b().logo,
                            priority: !0
                        })
                    }), (0,
                    r.jsx)(c.X, {
                        level: "6",
                        tagName: "p",
                        className: b().footer__title,
                        children: n
                    }), (0,
                    r.jsx)(d.r, {
                        href: i,
                        size: "large",
                        hasIcon: !0,
                        className: b().footer__appLink,
                        children: s
                    }), (0,
                    r.jsx)("ul", {
                        className: b().footer__navigation,
                        children: o.map( (e, t) => (0,
                        r.jsxs)("li", {
                            className: b().footer__navItem,
                            children: [(0,
                            r.jsx)("p", {
                                children: e.navTitle
                            }), (0,
                            r.jsx)("ul", {
                                children: e.navItems.map( (e, t) => (0,
                                r.jsx)("li", {
                                    children: (0,
                                    r.jsx)(d.r, {
                                        href: e.link,
                                        size: "medium",
                                        children: e.linkLabel
                                    })
                                }, t))
                            })]
                        }, t))
                    }), (0,
                    r.jsxs)("div", {
                        className: b().footer__bottomContainer,
                        children: [(0,
                        r.jsx)("p", {
                            children: "Powered by Sky"
                        }), (0,
                        r.jsx)("ul", {
                            children: a.map( (e, t) => (0,
                            r.jsx)("li", {
                                children: (0,
                                r.jsx)(m(), {
                                    href: e.link,
                                    target: e.link.startsWith("http") ? "_blank" : void 0,
                                    children: e.linkLabel
                                })
                            }, t))
                        })]
                    })]
                })
            })
        }
          , w = (0,
        l.createContext)({
            theme: "transparent",
            changeHeaderTheme: () => {}
        })
          , k = e => {
            let {children: t} = e
              , [n,i] = (0,
            l.useState)("transparent");
            return (0,
            r.jsx)(w.Provider, {
                value: {
                    theme: n,
                    changeHeaderTheme: e => {
                        let {theme: t} = e;
                        i(t)
                    }
                },
                children: t
            })
        }
        ;
        var x = n(2548);
        let j = []
          , O = e => {
            (0,
            l.useEffect)( () => (e && -1 === j.indexOf(e) && j.push(e),
            () => {
                j = j.filter(t => t !== e)
            }
            ), [e]);
            let t = (0,
            l.useCallback)( () => j, []);
            return (0,
            l.useMemo)( () => ({
                getRefs: t
            }), [t])
        }
        ;
        var C = n(93967)
          , S = n.n(C)
          , P = n(95961);
        let E = e => (0,
        r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...e,
            children: (0,
            r.jsx)("path", {
                stroke: "#fff",
                d: "M2 7.5h20m-20 8h20m-20-4h20"
            })
        });
        var L = n(11359)
          , M = n(31887)
          , R = n(13423)
          , I = n.n(R);
        let T = e => {
            var t;
            let {className: n} = e
              , i = (0,
            l.useRef)(null)
              , s = null === (t = (0,
            P.dd)(M.Z.MENU)) || void 0 === t ? void 0 : t.isOpen;
            O(i);
            let o = (0,
            l.useCallback)( () => {
                P.Fy.toggle(M.Z.MENU)
            }
            , []);
            return (0,
            r.jsx)("button", {
                ref: i,
                onClick: o,
                className: S()(I().button, s && I().button_active, n),
                "aria-haspopup": "true",
                "aria-expanded": s,
                "aria-label": "Menu",
                children: (0,
                r.jsxs)("div", {
                    className: I().inner,
                    "aria-hidden": "true",
                    role: "presentation",
                    children: [(0,
                    r.jsx)(E, {
                        className: S()(I().icon, I().iconBurger, s && I().iconBurger_hidden)
                    }), (0,
                    r.jsx)(L.T, {
                        className: S()(I().icon, I().iconClose, s && I().iconClose_visible)
                    })]
                })
            })
        }
        ;
        var A = n(39332)
          , N = n(44346)
          , D = n(67789)
          , F = n.n(D)
          , q = n(98783);
        let U = e => {
            let {ref: t} = e
              , [n,r] = (0,
            l.useState)(!1)
              , i = (0,
            l.useRef)(!1)
              , s = (0,
            l.useRef)(0)
              , o = (0,
            l.useRef)(!1)
              , a = (0,
            l.useRef)([])
              , u = (0,
            l.useRef)()
              , c = O()
              , d = (0,
            l.useCallback)(e => {
                if (!o.current)
                    return;
                let t = 0;
                if ("Tab" === e.key) {
                    if (e.shiftKey)
                        for (s.current--,
                        a.current[s.current] || (s.current = a.current.length - 1); t < 1e3; ) {
                            t++;
                            let e = a.current[s.current].tabIndex
                              , n = a.current[s.current].hasAttribute("disabled");
                            if (e < 0 || n)
                                s.current--,
                                s.current < 0 && (s.current = a.current.length - 1);
                            else
                                break
                        }
                    else
                        for (s.current++,
                        a.current[s.current] || (s.current = 0); t < 1e3; ) {
                            t++;
                            let e = a.current[s.current].tabIndex
                              , n = a.current[s.current].hasAttribute("disabled");
                            if (e < 0 || n)
                                s.current++,
                                s.current > a.current.length - 1 && (s.current = 0);
                            else
                                break
                        }
                    setTimeout( () => {
                        a.current[s.current].focus({
                            preventScroll: !0
                        })
                    }
                    , 0)
                }
            }
            , [])
              , f = (0,
            l.useCallback)( () => {
                if (!i.current) {
                    if (u.current = document.activeElement,
                    s.current = 1,
                    a.current = c.getRefs().map(e => e.current).filter(e => null !== e).map(e => e).concat((null == t ? void 0 : t.current) ? (0,
                    q.F)(t.current, !0) : []).sort( (e, n) => {
                        let r = Math.max(0, e.tabIndex || 0)
                          , i = Math.max(0, n.tabIndex || 0);
                        return (null == t ? void 0 : t.current) === document.activeElement ? -2 : 0 === r && ("input" === e.tagName.toLowerCase() || "textarea" === e.tagName.toLowerCase()) && "input" !== n.tagName.toLowerCase() && "textarea" !== n.tagName.toLowerCase() ? -1 : r - i
                    }
                    ),
                    (null == t ? void 0 : t.current) && a.current.unshift(t.current),
                    a.current.length) {
                        var e;
                        null === (e = a.current[0]) || void 0 === e || e.focus({
                            preventScroll: !0
                        }),
                        s.current = 0
                    }
                    o.current = !0,
                    i.current = !0,
                    r(i.current)
                }
            }
            , [c, t])
              , h = (0,
            l.useCallback)( () => {
                i.current && (o.current = !1,
                i.current = !1,
                u.current && u.current.focus(),
                r(i.current))
            }
            , []);
            return (0,
            l.useEffect)( () => (document.addEventListener("keydown", d),
            () => {
                document.removeEventListener("keydown", d)
            }
            ), [d]),
            (0,
            l.useMemo)( () => ({
                lock: f,
                unlock: h,
                isLocked: n
            }), [n, f, h])
        }
        ;
        var z = n(78799)
          , B = n(10475)
          , H = n.n(B);
        let K = e => {
            let {navigation: t, socials: n, mainLinks: i, learn: s, sparkInfo: o, onClick: a} = e;
            return (0,
            r.jsxs)("nav", {
                className: H().nav,
                "aria-label": "primary",
                children: [(0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsxs)("ul", {
                        className: H().list,
                        children: [(0,
                        r.jsx)("p", {
                            children: "Spark"
                        }), null == t ? void 0 : t.map( (e, t) => {
                            if (!e)
                                return null;
                            let {id: n, title: i, href: s} = e;
                            return s ? (0,
                            r.jsx)(r.Fragment, {
                                children: (0,
                                r.jsx)("li", {
                                    className: H().listItem,
                                    children: (0,
                                    r.jsx)(m(), {
                                        className: S()(H().link, s.startsWith("/spk") && H().link_spk),
                                        href: s,
                                        onClick: a,
                                        children: i
                                    })
                                }, e.title)
                            }) : null
                        }
                        )]
                    }), (0,
                    r.jsxs)("ul", {
                        className: H().list,
                        children: [(0,
                        r.jsx)("p", {
                            children: "Learn"
                        }), null == s ? void 0 : s.map( (e, t) => {
                            if (!e)
                                return null;
                            let {childItems: n, id: i} = e;
                            return (0,
                            r.jsx)(r.Fragment, {
                                children: null == n ? void 0 : n.map( (e, t) => (0,
                                r.jsx)("li", {
                                    children: (0,
                                    r.jsx)(d.r, {
                                        href: e.href,
                                        onClick: a,
                                        children: e.title
                                    })
                                }, e.title))
                            })
                        }
                        )]
                    }), (0,
                    r.jsxs)("ul", {
                        className: H().list,
                        children: [(0,
                        r.jsx)("p", {
                            children: "Socials"
                        }), null == n ? void 0 : n.map( (e, t) => {
                            if (!e)
                                return null;
                            let {id: n, title: i, href: s, childItems: o} = e;
                            return s ? (0,
                            r.jsx)(r.Fragment, {
                                children: (0,
                                r.jsx)("li", {
                                    className: H().listItem,
                                    children: (0,
                                    r.jsx)(d.r, {
                                        href: e.href,
                                        onClick: a,
                                        children: e.title
                                    })
                                }, e.title)
                            }) : null
                        }
                        )]
                    })]
                }), (0,
                r.jsx)("ul", {
                    className: H().mainLinks,
                    children: null == i ? void 0 : i.map( (e, t) => {
                        let {childItems: n} = e;
                        return (0,
                        r.jsx)(r.Fragment, {
                            children: null == n ? void 0 : n.map( (e, t) => {
                                var n, i;
                                return (0,
                                r.jsx)("li", {
                                    children: e.sparkInfoId ? (0,
                                    r.jsx)(m(), {
                                        href: e.href,
                                        target: (null === (n = e.href) || void 0 === n ? void 0 : n.includes("http")) ? "_blank" : "_self",
                                        onClick: a,
                                        children: null == e ? void 0 : e.title.replace("${value}", (null == o ? void 0 : o[e.sparkInfoId]) || "")
                                    }) : (0,
                                    r.jsx)(m(), {
                                        href: e.href,
                                        target: (null === (i = e.href) || void 0 === i ? void 0 : i.includes("http")) ? "_blank" : "_self",
                                        onClick: a,
                                        children: e.title
                                    })
                                }, t)
                            }
                            )
                        })
                    }
                    )
                })]
            })
        }
        ;
        var Z = n(56550)
          , V = n.n(Z);
        let Q = e => {
            var t;
            let {id: n, navigation: i, socials: s, banner: o, buttons: a, mainLinks: c, learn: d, sparkInfo: h} = e
              , {width: p} = (0,
            f.a)()
              , _ = p >= g.U.LAPTOP
              , m = (0,
            l.useRef)(null)
              , v = null === (t = (0,
            P.dd)(n)) || void 0 === t ? void 0 : t.isOpen
              , b = (0,
            z.Pr)()
              , y = U({
                ref: m
            });
            return (0,
            l.useEffect)( () => {
                v ? (P.Fy.closeAllExcept(n),
                b.lockScroll(n),
                y.lock()) : (b.unlockScroll(n),
                y.unlock())
            }
            ),
            (0,
            l.useEffect)( () => {
                _ && v && P.Fy.close(n)
            }
            ),
            (0,
            r.jsx)(P.u_, {
                id: n,
                className: V().menu,
                classNameActive: V().menu_active,
                children: (0,
                r.jsx)("div", {
                    ref: m,
                    className: V().overflow,
                    children: (0,
                    r.jsx)(u.W, {
                        className: V().container,
                        style: {
                            paddingRight: b.offset
                        },
                        children: (0,
                        r.jsx)(K, {
                            navigation: i,
                            learn: d,
                            socials: s,
                            mainLinks: c,
                            banner: void 0,
                            buttons: null,
                            sparkInfo: h,
                            onClick: P.Fy.closeAll
                        })
                    })
                })
            })
        }
        ;
        var G = n(31583)
          , W = n.n(G);
        let Y = e => {
            let {href: t, title: n, childItems: i, isActive: s, id: o="", isCta: a, isSocials: l, sparkInfo: u, isDropdownVisible: c} = e
              , {isOpen: f} = (0,
            x.x)(o) || {};
            return (null == i ? void 0 : i.length) ? (0,
            r.jsx)(x.L, {
                id: o,
                closeOnOutsideClick: !0,
                children: (0,
                r.jsxs)("div", {
                    className: W().dropdownContainer,
                    children: [(0,
                    r.jsx)(x.L.Button, {
                        className: S()(W().root, s && W().root_active),
                        children: n
                    }), (0,
                    r.jsx)(x.L.Collapse, {
                        className: S()(W().dropdownCollapse, a && W().dropdownCollapse_cta, l && W().dropdownCollapse_socials, f && W().dropdownCollapse_open, c && W().dropdownCollapse_visible),
                        animation: {
                            openDuration: .3,
                            closeDuration: .25,
                            openEaseCSS: "easeInOutExpo",
                            closeEaseCSS: "easeInOutExpo"
                        },
                        children: (0,
                        r.jsx)("ul", {
                            className: W().dropdownLinks,
                            children: i.map( (e, t) => {
                                if (!e.href || !e.title)
                                    return null;
                                let {href: n, title: i, sparkInfoId: s, hasIcon: o} = e;
                                return s ? (0,
                                r.jsx)("li", {
                                    children: (0,
                                    r.jsx)(d.r, {
                                        href: n,
                                        size: "submenu",
                                        hasIcon: o,
                                        children: i.replace("${value}", (null == u ? void 0 : u[s]) || "")
                                    })
                                }, t) : (0,
                                r.jsx)("li", {
                                    children: (0,
                                    r.jsx)(d.r, {
                                        href: n,
                                        size: "submenu",
                                        hasIcon: o,
                                        children: i
                                    })
                                }, t)
                            }
                            )
                        })
                    })]
                })
            }) : (0,
            r.jsx)(e => {
                let {href: t, title: n, isActive: i, hasIcon: s} = e;
                return t ? (0,
                r.jsx)(d.r, {
                    className: S()(W().root, W().root_link, i && W().root_active, t.startsWith("/spk") && W().root_linkSpk),
                    href: t,
                    "aria-current": i ? "page" : void 0,
                    size: "medium",
                    theme: "transparent",
                    children: n
                }) : null
            }
            , {
                href: t,
                isActive: s,
                title: n
            })
        }
        ;
        var X = n(29906)
          , J = n(23974);
        let $ = e => {
            let {thr: t=0, axis: n, scrollUp: r="y" === n ? "up" : "left", scrollDown: i="y" === n ? "down" : "right"} = e
              , [s,o] = (0,
            l.useState)("down");
            return (0,
            l.useEffect)( () => {
                let e;
                let s = t > 0 ? t : 0
                  , a = !1;
                e = "y" === n ? window.pageYOffset : window.pageXOffset;
                let l = () => {
                    let t;
                    if (t = "y" === n ? window.pageYOffset : window.pageXOffset,
                    e && Math.abs(t - e) < s) {
                        a = !1;
                        return
                    }
                    o(e && t > e ? i : r),
                    e = t > 0 ? scrollY : 0,
                    a = !1
                }
                  , u = () => {
                    a || (window.requestAnimationFrame(l),
                    a = !0)
                }
                ;
                return window.addEventListener("scroll", u),
                () => window.removeEventListener("scroll", u)
            }
            , [s, n, i, r, t]),
            [s]
        }
          , ee = e => {
            let t = (0,
            l.useRef)(0);
            (0,
            l.useEffect)( () => {
                var n;
                t.current = (null === (n = e.current) || void 0 === n ? void 0 : n.clientHeight) || 0
            }
            , [e]);
            let[n] = $({
                axis: "y",
                thr: 20
            })
              , r = (0,
            l.useCallback)( () => {
                e.current && (e.current.style.transitionDuration = "500ms",
                e.current.style.transitionTimingFunction = "ease-in-out")
            }
            , [e])
              , i = (0,
            l.useCallback)( () => {
                e.current && (e.current.style.position = "fixed",
                e.current.style.transitionProperty = "transform",
                e.current.style.transform = "translateY(0%)")
            }
            , [e])
              , s = (0,
            l.useCallback)( () => {
                e.current && (e.current.style.transitionProperty = "none",
                e.current.style.transform = "none")
            }
            , [e])
              , o = (0,
            l.useCallback)( () => {
                var r;
                null === (r = e.current) || void 0 === r || r.style.transform,
                X.Z2.closeHeaderDropdowns();
                let {top: o} = J.Z.get();
                if (e.current) {
                    if (o <= 0) {
                        s();
                        return
                    }
                    switch (n) {
                    case "up":
                        o <= t.current && "fixed" === e.current.style.position ? s() : i();
                        return;
                    case "down":
                        o <= t.current ? "absolute" === e.current.style.position ? s() : i() : (e.current.style.position = "fixed",
                        e.current.style.transform = "translateY(-200%)");
                        return;
                    default:
                        return
                    }
                }
            }
            , [n, s, i]);
            (0,
            l.useEffect)( () => (r(),
            o(),
            J.Z.subscribe(o),
            () => {
                J.Z.unsubscribe(o)
            }
            ), [o])
        }
          , et = "header-dropdown"
          , en = e => {
            var t, n;
            let {navigation: i, socials: s, mainLinks: o, learn: a, sparkInfo: c={}, sparkInfoId: d, banner: h} = e
              , _ = (0,
            l.useRef)(null)
              , [v,b] = (0,
            l.useState)(!1)
              , [y,w] = (0,
            l.useState)(!1)
              , [k,j] = (0,
            l.useState)(!0)
              , [O,C] = (0,
            l.useState)(!1)
              , [E,L] = (0,
            l.useState)("transparent")
              , {width: R} = (0,
            f.a)()
              , I = R >= g.U.TABLET
              , {globalState: D} = (0,
            x.x)() || {};
            (0,
            l.useEffect)( () => {
                L((null == D ? void 0 : D.some(e => (null == e ? void 0 : e.isOpen) && (null == e ? void 0 : e.id.includes(et)))) ? "white" : "transparent")
            }
            , [D]);
            let q = (0,
            A.usePathname)();
            ee(_);
            let U = (0,
            A.usePathname)()
              , z = null === (t = (0,
            P.dd)(M.Z.MENU)) || void 0 === t ? void 0 : t.isOpen
              , [B,H] = (0,
            l.useState)(0)
              , [K,Z] = (0,
            l.useState)(0)
              , V = () => {
                if (O) {
                    let e = window.scrollY;
                    H(-Math.min(40, e)),
                    Z(Math.max(0, 40 - e))
                }
            }
            ;
            return (0,
            l.useEffect)( () => {
                if (O)
                    return window.addEventListener("scroll", V),
                    V(),
                    () => {
                        window.removeEventListener("scroll", V)
                    }
                    ;
                Z(0)
            }
            , [O, q]),
            (0,
            l.useEffect)( () => {
                k && b(!0)
            }
            , [k]),
            (0,
            l.useEffect)( () => {
                setTimeout( () => {
                    w(!0)
                }
                , 1e3)
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = localStorage.getItem("bannerDismissed")
                  , t = e ? JSON.parse(e) : {};
                (null == h ? void 0 : h.date) && (null == t ? void 0 : t.date) !== h.date ? C(!0) : C(!(null == t ? void 0 : t.dismissed))
            }
            , [h]),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("header", {
                    ref: _,
                    className: F().root,
                    children: [O && (null == h ? void 0 : h.link) && !z && (0,
                    r.jsx)("div", {
                        className: F().banner,
                        children: (0,
                        r.jsx)(m(), {
                            href: null !== (n = null == h ? void 0 : h.link) && void 0 !== n ? n : "",
                            target: (null == h ? void 0 : h.link.startsWith("http")) ? "_blank" : void 0,
                            className: F().banner__link,
                            children: (0,
                            r.jsxs)(u.W, {
                                className: F().banner__container,
                                children: [I && (0,
                                r.jsx)("div", {}), (0,
                                r.jsxs)("div", {
                                    className: F().banner__innerContainer,
                                    children: [(0,
                                    r.jsx)("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: (null == h ? void 0 : h.linkLabel.replace("${value}", (null == c ? void 0 : c.ssr) || "")) || ""
                                        }
                                    }), (0,
                                    r.jsx)(N.o, {
                                        className: F().banner__icon
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: F().banner__buttonContainer,
                                    children: (0,
                                    r.jsx)("button", {
                                        onClick: e => {
                                            e.preventDefault(),
                                            e.stopPropagation(),
                                            localStorage.setItem("bannerDismissed", JSON.stringify({
                                                dismissed: !0,
                                                date: null == h ? void 0 : h.date
                                            })),
                                            C(!1)
                                        }
                                        ,
                                        className: F().banner__button,
                                        children: (0,
                                        r.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            r.jsx)("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M12.996 3.441 3.46 13l-.457-.44 9.538-9.558.456.44Z",
                                                fill: "#fff"
                                            }), (0,
                                            r.jsx)("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M12.541 13 3 3.442 3.459 3 13 12.558l-.459.442Z",
                                                fill: "#fff"
                                            }), (0,
                                            r.jsx)("path", {
                                                "clip-rule": "evenodd",
                                                d: "M12.996 3.441 3.46 13l-.457-.44 9.538-9.558.456.44Z",
                                                stroke: "#fff"
                                            }), (0,
                                            r.jsx)("path", {
                                                "clip-rule": "evenodd",
                                                d: "M12.541 13 3 3.442 3.459 3 13 12.558l-.459.442Z",
                                                stroke: "#fff"
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: S()(F().theme, F()["theme_".concat(E)], (z || "white" === E) && F().theme_borderBottom),
                        children: (0,
                        r.jsx)(u.W, {
                            className: F().container,
                            children: (0,
                            r.jsxs)("div", {
                                className: F().inner,
                                children: [(0,
                                r.jsxs)("nav", {
                                    "aria-label": "primary",
                                    className: F().nav,
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: F().listItem,
                                        children: (0,
                                        r.jsx)(m(), {
                                            href: "/",
                                            "aria-label": "Home page",
                                            className: S()(F().logo, v && F().logo_triggered),
                                            children: (0,
                                            r.jsx)(p(), {
                                                src: "./logo.svg",
                                                alt: "logo",
                                                width: 105,
                                                height: 32,
                                                onLoad: () => {
                                                    j(!0)
                                                }
                                                ,
                                                priority: !0
                                            })
                                        })
                                    }), (0,
                                    r.jsxs)("ul", {
                                        className: F().list,
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: F().navLeft,
                                            children: [null == i ? void 0 : i.map( (e, t) => {
                                                if (!e)
                                                    return null;
                                                let {title: n, href: i, childItems: s} = e
                                                  , o = "/".concat(i) === U || (null == s ? void 0 : s.some(e => "/".concat(e.href) === U));
                                                return (0,
                                                r.jsx)("li", {
                                                    className: S()(F().listItem, v && F().listItem_triggered),
                                                    style: {
                                                        transitionDelay: "".concat(30 * (t + 1), "ms")
                                                    },
                                                    children: (0,
                                                    r.jsx)(Y, {
                                                        href: i,
                                                        isActive: o,
                                                        childItems: s,
                                                        title: n,
                                                        id: "".concat(et, "-navigation-").concat(t),
                                                        sparkInfo: c,
                                                        sparkInfoId: c
                                                    })
                                                }, e.title)
                                            }
                                            ), null == a ? void 0 : a.map( (e, t) => {
                                                if (!e)
                                                    return null;
                                                let {title: n, href: i, childItems: s} = e
                                                  , o = "/".concat(i) === U || (null == s ? void 0 : s.some(e => "/".concat(e.href) === U));
                                                return (0,
                                                r.jsx)("li", {
                                                    className: S()(F().listItem, v && F().listItem_triggered),
                                                    style: {
                                                        transitionDelay: "".concat(150 * (t + 1), "ms")
                                                    },
                                                    children: (0,
                                                    r.jsx)(Y, {
                                                        href: i,
                                                        isActive: o,
                                                        childItems: s,
                                                        title: n,
                                                        id: "".concat(et, "-learn-").concat(t),
                                                        sparkInfo: c,
                                                        hasIcon: !0,
                                                        isDropdownVisible: y
                                                    })
                                                }, e.title)
                                            }
                                            )]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: F().navRight,
                                            children: [null == s ? void 0 : s.map( (e, t) => {
                                                if (!e)
                                                    return null;
                                                let {title: n, href: i, childItems: s} = e
                                                  , o = "/".concat(i) === U || (null == s ? void 0 : s.some(e => "/".concat(e.href) === U))
                                                  , a = null == s ? void 0 : s.filter(e => "GitHub" !== e.title && "Forum" !== e.title);
                                                return (0,
                                                r.jsx)("li", {
                                                    className: S()(F().listItem, v && F().listItem_triggered),
                                                    style: {
                                                        transitionDelay: "".concat(30 * (t + 1), "ms")
                                                    },
                                                    children: (0,
                                                    r.jsx)(Y, {
                                                        href: i,
                                                        isActive: o,
                                                        childItems: a,
                                                        title: n,
                                                        id: "".concat(et, "-socials-").concat(t),
                                                        sparkInfo: c,
                                                        isSocials: !0,
                                                        isDropdownVisible: y
                                                    })
                                                }, e.title)
                                            }
                                            ), null == o ? void 0 : o.map( (e, t) => {
                                                if (!e)
                                                    return null;
                                                let {title: n, href: i, childItems: s} = e
                                                  , a = "/".concat(i) === U || (null == s ? void 0 : s.some(e => "/".concat(e.href) === U));
                                                return (0,
                                                r.jsx)("li", {
                                                    className: S()(F().listItem, v && F().listItem_triggered),
                                                    style: {
                                                        transitionDelay: "".concat(240 * (t + 1), "ms")
                                                    },
                                                    children: (0,
                                                    r.jsx)(Y, {
                                                        href: i,
                                                        isActive: a,
                                                        childItems: s,
                                                        title: n,
                                                        id: "".concat(et, "-main-").concat(t),
                                                        isCta: o.length - 1 === t,
                                                        sparkInfo: c,
                                                        isDropdownVisible: y
                                                    })
                                                }, e.title)
                                            }
                                            )]
                                        })]
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: F().logoLink_mobile,
                                    children: (0,
                                    r.jsx)(m(), {
                                        href: "/",
                                        "aria-label": "Home page",
                                        className: S()(F().logo, v && F().logo_triggered),
                                        children: (0,
                                        r.jsx)(p(), {
                                            src: "./logo.svg",
                                            alt: "logo",
                                            width: 105,
                                            height: 32
                                        })
                                    })
                                }), (0,
                                r.jsx)(T, {
                                    className: S()(F().menuToggler, !z && F()["menuToggler_".concat(E)])
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsx)(Q, {
                    socials: s[0].childItems,
                    navigation: i,
                    mainLinks: o,
                    id: "MENU",
                    buttons: null,
                    banner: h,
                    learn: a,
                    sparkInfo: c
                })]
            })
        }
          , er = e => {
            let {children: t, sparkInfo: n} = e
              , [u,c] = (0,
            l.useState)(!0)
              , [d,f] = (0,
            l.useState)(null != n ? n : null);
            return (0,
            l.useEffect)( () => {
                document.getElementById("not-found") && c(!1)
            }
            , [u]),
            (0,
            l.useEffect)( () => {
                let e = async () => {
                    f(await (0,
                    a.h)())
                }
                ;
                n || setTimeout( () => {
                    e()
                }
                , 100)
            }
            , [n]),
            (0,
            r.jsxs)(k, {
                children: [(0,
                r.jsx)(en, {
                    navigation: o.G,
                    socials: o.UY,
                    mainLinks: o.$o,
                    banner: i,
                    learn: o.nf,
                    id: "header",
                    buttons: null,
                    sparkInfo: d
                }), (0,
                r.jsx)("main", {
                    children: t
                }), u && (0,
                r.jsx)(y, {
                    content: s
                })]
            })
        }
        ;
        var ei = n(13380)
          , es = n(24139)
          , eo = n(56888)
          , ea = n(27037)
          , el = n(7506)
          , eu = class extends el.l {
            constructor(e={}) {
                super(),
                this.config = e,
                this.#e = new Map
            }
            #e;
            build(e, t, n) {
                let r = t.queryKey
                  , i = t.queryHash ?? (0,
                es.Rm)(r, t)
                  , s = this.get(i);
                return s || (s = new eo.A({
                    cache: this,
                    queryKey: r,
                    queryHash: i,
                    options: e.defaultQueryOptions(t),
                    state: n,
                    defaultOptions: e.getQueryDefaults(r)
                }),
                this.add(s)),
                s
            }
            add(e) {
                this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e),
                this.notify({
                    type: "added",
                    query: e
                }))
            }
            remove(e) {
                let t = this.#e.get(e.queryHash);
                t && (e.destroy(),
                t === e && this.#e.delete(e.queryHash),
                this.notify({
                    type: "removed",
                    query: e
                }))
            }
            clear() {
                ea.V.batch( () => {
                    this.getAll().forEach(e => {
                        this.remove(e)
                    }
                    )
                }
                )
            }
            get(e) {
                return this.#e.get(e)
            }
            getAll() {
                return [...this.#e.values()]
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0,
                es._x)(t, e))
            }
            findAll(e={}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0,
                es._x)(e, t)) : t
            }
            notify(e) {
                ea.V.batch( () => {
                    this.listeners.forEach(t => {
                        t(e)
                    }
                    )
                }
                )
            }
            onFocus() {
                ea.V.batch( () => {
                    this.getAll().forEach(e => {
                        e.onFocus()
                    }
                    )
                }
                )
            }
            onOnline() {
                ea.V.batch( () => {
                    this.getAll().forEach(e => {
                        e.onOnline()
                    }
                    )
                }
                )
            }
        }
          , ec = n(48907)
          , ed = n(72008)
          , ef = class extends ec.F {
            #t;
            #n;
            #r;
            constructor(e) {
                super(),
                this.mutationId = e.mutationId,
                this.#n = e.mutationCache,
                this.#t = [],
                this.state = e.state || {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                },
                this.setOptions(e.options),
                this.scheduleGc()
            }
            setOptions(e) {
                this.options = e,
                this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(e) {
                this.#t.includes(e) || (this.#t.push(e),
                this.clearGcTimeout(),
                this.#n.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#t = this.#t.filter(t => t !== e),
                this.scheduleGc(),
                this.#n.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#n.remove(this))
            }
            continue() {
                return this.#r?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                this.#r = (0,
                ed.Mz)({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e, t) => {
                        this.#i({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    }
                    ,
                    onPause: () => {
                        this.#i({
                            type: "pause"
                        })
                    }
                    ,
                    onContinue: () => {
                        this.#i({
                            type: "continue"
                        })
                    }
                    ,
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#n.canRun(this)
                });
                let t = "pending" === this.state.status
                  , n = !this.#r.canStart();
                try {
                    if (!t) {
                        this.#i({
                            type: "pending",
                            variables: e,
                            isPaused: n
                        }),
                        await this.#n.config.onMutate?.(e, this);
                        let t = await this.options.onMutate?.(e);
                        t !== this.state.context && this.#i({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: n
                        })
                    }
                    let r = await this.#r.start();
                    return await this.#n.config.onSuccess?.(r, e, this.state.context, this),
                    await this.options.onSuccess?.(r, e, this.state.context),
                    await this.#n.config.onSettled?.(r, null, this.state.variables, this.state.context, this),
                    await this.options.onSettled?.(r, null, e, this.state.context),
                    this.#i({
                        type: "success",
                        data: r
                    }),
                    r
                } catch (t) {
                    try {
                        throw await this.#n.config.onError?.(t, e, this.state.context, this),
                        await this.options.onError?.(t, e, this.state.context),
                        await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
                        await this.options.onSettled?.(void 0, t, e, this.state.context),
                        t
                    } finally {
                        this.#i({
                            type: "error",
                            error: t
                        })
                    }
                } finally {
                    this.#n.runNext(this)
                }
            }
            #i(e) {
                this.state = (t => {
                    switch (e.type) {
                    case "failed":
                        return {
                            ...t,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...t,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...t,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...t,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...t,
                            data: void 0,
                            error: e.error,
                            failureCount: t.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                    }
                }
                )(this.state),
                ea.V.batch( () => {
                    this.#t.forEach(t => {
                        t.onMutationUpdate(e)
                    }
                    ),
                    this.#n.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                }
                )
            }
        }
          , eh = class extends el.l {
            constructor(e={}) {
                super(),
                this.config = e,
                this.#s = new Map,
                this.#o = Date.now()
            }
            #s;
            #o;
            build(e, t, n) {
                let r = new ef({
                    mutationCache: this,
                    mutationId: ++this.#o,
                    options: e.defaultMutationOptions(t),
                    state: n
                });
                return this.add(r),
                r
            }
            add(e) {
                let t = ep(e)
                  , n = this.#s.get(t) ?? [];
                n.push(e),
                this.#s.set(t, n),
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                let t = ep(e);
                if (this.#s.has(t)) {
                    let n = this.#s.get(t)?.filter(t => t !== e);
                    n && (0 === n.length ? this.#s.delete(t) : this.#s.set(t, n))
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = this.#s.get(ep(e))?.find(e => "pending" === e.state.status);
                return !t || t === e
            }
            runNext(e) {
                let t = this.#s.get(ep(e))?.find(t => t !== e && t.state.isPaused);
                return t?.continue() ?? Promise.resolve()
            }
            clear() {
                ea.V.batch( () => {
                    this.getAll().forEach(e => {
                        this.remove(e)
                    }
                    )
                }
                )
            }
            getAll() {
                return [...this.#s.values()].flat()
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0,
                es.X7)(t, e))
            }
            findAll(e={}) {
                return this.getAll().filter(t => (0,
                es.X7)(e, t))
            }
            notify(e) {
                ea.V.batch( () => {
                    this.listeners.forEach(t => {
                        t(e)
                    }
                    )
                }
                )
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e => e.state.isPaused);
                return ea.V.batch( () => Promise.all(e.map(e => e.continue().catch(es.ZT))))
            }
        }
        ;
        function ep(e) {
            return e.options.scope?.id ?? String(e.mutationId)
        }
        var e_ = n(66474)
          , em = n(14304);
        function eg(e) {
            return {
                onFetch: (t, n) => {
                    let r = t.options
                      , i = t.fetchOptions?.meta?.fetchMore?.direction
                      , s = t.state.data?.pages || []
                      , o = t.state.data?.pageParams || []
                      , a = {
                        pages: [],
                        pageParams: []
                    }
                      , l = 0
                      , u = async () => {
                        let n = !1
                          , u = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => (t.signal.aborted ? n = !0 : t.signal.addEventListener("abort", () => {
                                    n = !0
                                }
                                ),
                                t.signal)
                            })
                        }
                          , c = (0,
                        es.cG)(t.options, t.fetchOptions)
                          , d = async (e, r, i) => {
                            if (n)
                                return Promise.reject();
                            if (null == r && e.pages.length)
                                return Promise.resolve(e);
                            let s = {
                                queryKey: t.queryKey,
                                pageParam: r,
                                direction: i ? "backward" : "forward",
                                meta: t.options.meta
                            };
                            u(s);
                            let o = await c(s)
                              , {maxPages: a} = t.options
                              , l = i ? es.Ht : es.VX;
                            return {
                                pages: l(e.pages, o, a),
                                pageParams: l(e.pageParams, r, a)
                            }
                        }
                        ;
                        if (i && s.length) {
                            let e = "backward" === i
                              , t = {
                                pages: s,
                                pageParams: o
                            }
                              , n = (e ? function(e, {pages: t, pageParams: n}) {
                                return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0
                            }
                            : ev)(r, t);
                            a = await d(t, n, e)
                        } else {
                            let t = e ?? s.length;
                            do {
                                let e = 0 === l ? o[0] ?? r.initialPageParam : ev(r, a);
                                if (l > 0 && null == e)
                                    break;
                                a = await d(a, e),
                                l++
                            } while (l < t)
                        }
                        return a
                    }
                    ;
                    t.options.persister ? t.fetchFn = () => t.options.persister?.(u, {
                        queryKey: t.queryKey,
                        meta: t.options.meta,
                        signal: t.signal
                    }, n) : t.fetchFn = u
                }
            }
        }
        function ev(e, {pages: t, pageParams: n}) {
            let r = t.length - 1;
            return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
        }
        var eb = class {
            #a;
            #n;
            #l;
            #u;
            #c;
            #d;
            #f;
            #h;
            constructor(e={}) {
                this.#a = e.queryCache || new eu,
                this.#n = e.mutationCache || new eh,
                this.#l = e.defaultOptions || {},
                this.#u = new Map,
                this.#c = new Map,
                this.#d = 0
            }
            mount() {
                this.#d++,
                1 === this.#d && (this.#f = e_.j.subscribe(async e => {
                    e && (await this.resumePausedMutations(),
                    this.#a.onFocus())
                }
                ),
                this.#h = em.N.subscribe(async e => {
                    e && (await this.resumePausedMutations(),
                    this.#a.onOnline())
                }
                ))
            }
            unmount() {
                this.#d--,
                0 === this.#d && (this.#f?.(),
                this.#f = void 0,
                this.#h?.(),
                this.#h = void 0)
            }
            isFetching(e) {
                return this.#a.findAll({
                    ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#n.findAll({
                    ...e,
                    status: "pending"
                }).length
            }
            getQueryData(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#a.get(t.queryHash)?.state.data
            }
            ensureQueryData(e) {
                let t = this.getQueryData(e.queryKey);
                if (void 0 === t)
                    return this.fetchQuery(e);
                {
                    let n = this.defaultQueryOptions(e)
                      , r = this.#a.build(this, n);
                    return e.revalidateIfStale && r.isStaleByTime((0,
                    es.KC)(n.staleTime, r)) && this.prefetchQuery(n),
                    Promise.resolve(t)
                }
            }
            getQueriesData(e) {
                return this.#a.findAll(e).map( ({queryKey: e, state: t}) => [e, t.data])
            }
            setQueryData(e, t, n) {
                let r = this.defaultQueryOptions({
                    queryKey: e
                })
                  , i = this.#a.get(r.queryHash)
                  , s = i?.state.data
                  , o = (0,
                es.SE)(t, s);
                if (void 0 !== o)
                    return this.#a.build(this, r).setData(o, {
                        ...n,
                        manual: !0
                    })
            }
            setQueriesData(e, t, n) {
                return ea.V.batch( () => this.#a.findAll(e).map( ({queryKey: e}) => [e, this.setQueryData(e, t, n)]))
            }
            getQueryState(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#a.get(t.queryHash)?.state
            }
            removeQueries(e) {
                let t = this.#a;
                ea.V.batch( () => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    }
                    )
                }
                )
            }
            resetQueries(e, t) {
                let n = this.#a
                  , r = {
                    type: "active",
                    ...e
                };
                return ea.V.batch( () => (n.findAll(e).forEach(e => {
                    e.reset()
                }
                ),
                this.refetchQueries(r, t)))
            }
            cancelQueries(e={}, t={}) {
                let n = {
                    revert: !0,
                    ...t
                };
                return Promise.all(ea.V.batch( () => this.#a.findAll(e).map(e => e.cancel(n)))).then(es.ZT).catch(es.ZT)
            }
            invalidateQueries(e={}, t={}) {
                return ea.V.batch( () => {
                    if (this.#a.findAll(e).forEach(e => {
                        e.invalidate()
                    }
                    ),
                    "none" === e.refetchType)
                        return Promise.resolve();
                    let n = {
                        ...e,
                        type: e.refetchType ?? e.type ?? "active"
                    };
                    return this.refetchQueries(n, t)
                }
                )
            }
            refetchQueries(e={}, t) {
                let n = {
                    ...t,
                    cancelRefetch: t?.cancelRefetch ?? !0
                };
                return Promise.all(ea.V.batch( () => this.#a.findAll(e).filter(e => !e.isDisabled()).map(e => {
                    let t = e.fetch(void 0, n);
                    return n.throwOnError || (t = t.catch(es.ZT)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }
                ))).then(es.ZT)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let n = this.#a.build(this, t);
                return n.isStaleByTime((0,
                es.KC)(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(es.ZT).catch(es.ZT)
            }
            fetchInfiniteQuery(e) {
                return e.behavior = eg(e.pages),
                this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(es.ZT).catch(es.ZT)
            }
            ensureInfiniteQueryData(e) {
                return e.behavior = eg(e.pages),
                this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return em.N.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#a
            }
            getMutationCache() {
                return this.#n
            }
            getDefaultOptions() {
                return this.#l
            }
            setDefaultOptions(e) {
                this.#l = e
            }
            setQueryDefaults(e, t) {
                this.#u.set((0,
                es.Ym)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#u.values()]
                  , n = {};
                return t.forEach(t => {
                    (0,
                    es.to)(e, t.queryKey) && (n = {
                        ...n,
                        ...t.defaultOptions
                    })
                }
                ),
                n
            }
            setMutationDefaults(e, t) {
                this.#c.set((0,
                es.Ym)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#c.values()]
                  , n = {};
                return t.forEach(t => {
                    (0,
                    es.to)(e, t.mutationKey) && (n = {
                        ...n,
                        ...t.defaultOptions
                    })
                }
                ),
                n
            }
            defaultQueryOptions(e) {
                if (e._defaulted)
                    return e;
                let t = {
                    ...this.#l.queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0,
                es.Rm)(t.queryKey, t)),
                void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
                void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
                !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                !0 !== t.enabled && t.queryFn === es.CN && (t.enabled = !1),
                t
            }
            defaultMutationOptions(e) {
                return e?._defaulted ? e : {
                    ...this.#l.mutations,
                    ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                    ...e,
                    _defaulted: !0
                }
            }
            clear() {
                this.#a.clear(),
                this.#n.clear()
            }
        }
          , ey = n(30202);
        function ew(e) {
            let {Component: t, pageProps: n} = e
              , i = new eb;
            return (0,
            r.jsx)(ey.aH, {
                client: i,
                children: (0,
                r.jsx)(ei.aM, {
                    children: (0,
                    r.jsx)(er, {
                        children: (0,
                        r.jsx)(t, {
                            ...n
                        })
                    })
                })
            })
        }
        n(9008)
    },
    78256: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return r
            }
        });
        let r = async () => {
            try {
                var e;
                let t = await fetch("https://info-sky.blockanalitica.com/api/v1/spark-info/", {
                    method: "GET"
                });
                if (!t.ok)
                    return console.error("SPARK API Error: ".concat(t.status, " ").concat(t.statusText)),
                    null;
                return e = await t.json() || {},
                {
                    sparkRevenue: i(e.spark_revenue),
                    sparklendTvl: i(e.sparklend_tvl),
                    sparklendTvlGnosis: i(e.sparklend_tvl_gnosis),
                    sparklendTvlTotal: e.sparklend_tvl && e.sparklend_tvl_gnosis ? i((parseFloat(e.sparklend_tvl) + parseFloat(e.sparklend_tvl_gnosis)).toString()) : null,
                    sparklendUsdsBorrowRate: i(e.sparklend_usds_borrow_rate),
                    sparklendUsdsBorrowRateChange: i(e.sparklend_usds_borrow_rate_change),
                    sparklendAvailableLiquidity: i(e.sparklend_available_liquidity),
                    liquidityLayer: i(e.liquidity_layer),
                    savingsTvl: i(e.savings_tvl),
                    morpho: i(e.morpho),
                    aave: i(e.aave),
                    ssr: i(e.ssr),
                    ssr1yearAvg: i(e.ssr_1year_avg),
                    totalDebt: i(e.total_debt),
                    revenue: i(e.revenue),
                    sparklendTreasury: i(e.sparklend_treasury),
                    makerRevenue: i(e.maker_revenue),
                    baseRate: i(e.base_rate),
                    litepsmReserve: i(e.litepsm_reserve),
                    ssr30DaysAvg: i(e.ssr_30d_avg)
                }
            } catch (e) {
                return console.error("SPARK API Error loading data:", e),
                null
            }
        }
        ;
        function i(e) {
            if (!e || !e || "0E-18" === e)
                return "";
            let t = parseFloat(e);
            if (isNaN(t))
                return "";
            if (t >= 1e9) {
                let e = parseFloat((Math.round(t / 1e9 * 100) / 100).toString()).toFixed(2);
                return "$".concat(e, "B")
            }
            if (t >= 1e6) {
                let e = parseFloat((Math.round(t / 1e6 * 100) / 100).toString());
                return "$".concat(e, "M")
            }
            if (t <= 1) {
                let e = (100 * t).toFixed(2).replace(/\.?0+$/, "").toString();
                return .01 > parseFloat(e) ? null : "".concat(e, "%")
            }
            let n = Math.round(100 * t) / 100;
            return n % 1 == 0 ? n.toFixed(1) : parseFloat(n.toFixed(2)).toString()
        }
    },
    79807: function(e, t, n) {
        "use strict";
        n.d(t, {
            tQ: function() {
                return u
            },
            Gx: function() {
                return l
            }
        });
        var r = "function" == typeof Float32Array;
        function i(e, t, n) {
            return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
        }
        function s(e, t, n) {
            return 3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t
        }
        var o = function(e, t, n, o) {
            if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
                throw Error("bezier x values must be in [0, 1] range");
            var a = r ? new Float32Array(11) : Array(11);
            if (e !== t || n !== o)
                for (var l = 0; l < 11; ++l)
                    a[l] = i(.1 * l, e, n);
            return function(r) {
                return e === t && n === o ? r : 0 === r ? 0 : 1 === r ? 1 : i(function(t) {
                    for (var r = 0, o = 1; 10 !== o && a[o] <= t; ++o)
                        r += .1;
                    var l = r + (t - a[--o]) / (a[o + 1] - a[o]) * .1
                      , u = s(l, e, n);
                    return u >= .001 ? function(e, t, n, r) {
                        for (var o = 0; o < 4; ++o) {
                            var a = s(t, n, r);
                            if (0 === a)
                                break;
                            var l = i(t, n, r) - e;
                            t -= l / a
                        }
                        return t
                    }(t, l, e, n) : 0 === u ? l : function(e, t, n, r, s) {
                        var o, a, l = 0;
                        do
                            (o = i(a = t + (n - t) / 2, r, s) - e) > 0 ? n = a : t = a;
                        while (Math.abs(o) > 1e-7 && ++l < 10);
                        return a
                    }(t, r, r + .1, e, n)
                }(r), t, o)
            }
        };
        let a = {
            default: "default",
            ease: "ease",
            easeIn: "easeIn",
            easeInOut: "easeInOut",
            easeInOutExpo: "easeInOutExpo",
            easeInPower2: "easeInPower2",
            easeInPower3: "easeInPower3",
            easeOut: "easeOut",
            easeOutPower2: "easeOutPower2",
            easeOutPower3: "easeOutPower3",
            easePower2: "easePower2",
            easePower3: "easePower3",
            easePower4: "easePower4",
            easeService: "easeService",
            easeSine: "easeSine",
            linear: "linear"
        }
          , l = e => -1 !== Object.values(a).indexOf(e);
        o(.25, .1, .25, 1),
        o(1, 0, 0, 1),
        o(.95, .05, .795, .035),
        o(.42, 0, .58, 1),
        o(.16, 1, .3, 1),
        o(.55, .055, .675, .19),
        o(.55, .085, .68, .53),
        o(.16, 1, .3, 1),
        o(.25, .46, .45, .94),
        o(.215, .61, .355, 1),
        o(.77, 0, .175, 1),
        o(.645, .045, .355, 1),
        o(.86, 0, .07, 1),
        o(.14, 0, .15, .89),
        o(.445, .05, .55, .95),
        o(0, 0, 1, 1);
        let u = {
            default: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            ease: "cubic-bezier(1, 0, 0, 1)",
            easeIn: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeInOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
            easeInPower2: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            easeInPower3: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
            easeOut: "cubic-bezier(0.19, 1, 0.22, 1)",
            easeOutPower2: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            easeOutPower3: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            easePower2: "cubic-bezier(0.77, 0, 0.175, 1)",
            easePower3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            easePower4: "cubic-bezier(0.86, 0, 0.07, 1)",
            easeService: "cubic-bezier(0.14, 0, 0.15, 0.89)s",
            easeSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
            linear: "linear"
        }
    },
    58953: function(e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
            U: function() {
                return r
            }
        }),
        (i = r || (r = {}))[i.MOBILE = 320] = "MOBILE",
        i[i.MOBILEL = 576] = "MOBILEL",
        i[i.TABLET = 768] = "TABLET",
        i[i.LAPTOP = 1024] = "LAPTOP",
        i[i.DESKTOP = 1440] = "DESKTOP",
        i[i.HD = 1920] = "HD"
    },
    31887: function(e, t, n) {
        "use strict";
        var r, i, s;
        n.d(t, {
            Z: function() {
                return r
            }
        }),
        (s = r || (r = {})).MENU = "MENU",
        s.PRIVACY_POLICY_NAV = "PRIVACY_POLICY_NAV",
        s.TERMS_OF_USE_NAV = "TERMS_OF_USE_NAV",
        (i || (i = {})).MENU = "menu-additional-links"
    },
    13380: function(e, t, n) {
        "use strict";
        n.d(t, {
            $Y: function() {
                return l
            },
            aM: function() {
                return a
            }
        });
        var r = n(85893)
          , i = n(67294);
        let s = {
            isBackgroundAnimation: !0,
            setBackgroundAnimation: () => {}
        }
          , o = (0,
        i.createContext)(s)
          , a = e => {
            let {children: t} = e
              , [n,a] = (0,
            i.useState)(s.isBackgroundAnimation);
            return (0,
            r.jsx)(o.Provider, {
                value: {
                    isBackgroundAnimation: n,
                    setBackgroundAnimation: a
                },
                children: t
            })
        }
          , l = () => (0,
        i.useContext)(o)
    },
    16970: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return l
            }
        });
        var r = n(85893)
          , i = n(93967)
          , s = n.n(i)
          , o = n(97562)
          , a = n.n(o);
        let l = e => {
            let {children: t, className: n, style: i, containerRef: o} = e;
            return (0,
            r.jsx)("div", {
                className: s()(a().container, n),
                style: i,
                ref: o,
                children: t
            })
        }
    },
    29906: function(e, t, n) {
        "use strict";
        n.d(t, {
            BE: function() {
                return o
            },
            HJ: function() {
                return a
            },
            Z2: function() {
                return l
            }
        });
        let r = new (n(83162)).v
          , i = []
          , s = e => i.find(t => t.id === e) || null
          , o = e => {
            if (i.find(t => e.id === t.id))
                throw Error("Dropdown with id ".concat(e.id, " already exists in the global state"));
            i.push(e)
        }
          , a = e => {
            if (!s(e))
                throw Error("Dropdown with id ".concat(e, " doesnt exist in the global state"));
            i = i.filter(t => t.id !== e)
        }
          , l = {
            open: e => {
                let t = s(e);
                t && !t.isOpen && (t.isOpen = !0,
                r.dispatch({
                    type: "dropdown-open",
                    payload: {
                        id: e
                    }
                }))
            }
            ,
            close: e => {
                let t = s(e);
                t && t.isOpen && (t.isOpen = !1,
                r.dispatch({
                    type: "dropdown-close",
                    payload: {
                        id: e
                    }
                }))
            }
            ,
            closeAll: () => {
                i.forEach(e => {
                    e.isOpen && (e.isOpen = !1,
                    r.dispatch({
                        type: "dropdown-close",
                        payload: {
                            id: e.id
                        }
                    }))
                }
                )
            }
            ,
            toggle: e => {
                let t = s(e);
                t && (t.isOpen = !t.isOpen,
                t.isOpen ? r.dispatch({
                    type: "dropdown-open",
                    payload: {
                        id: e
                    }
                }) : r.dispatch({
                    type: "dropdown-close",
                    payload: {
                        id: e
                    }
                }))
            }
            ,
            closeHeaderDropdowns: () => {
                i.forEach(e => {
                    e.isOpen && e.id.includes("header") && l.close(e.id)
                }
                )
            }
            ,
            getById: e => s(e),
            getState: () => i,
            subscribe: e => {
                r.subscribe(e)
            }
            ,
            unsubscribe: e => {
                r.unsubscribe(e)
            }
        }
    },
    2548: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return k
            },
            x: function() {
                return y
            }
        });
        var r = n(85893)
          , i = n(75605)
          , s = n(93967)
          , o = n.n(s)
          , a = n(39332)
          , l = n(67294);
        let u = e => (0,
        r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...e,
            children: (0,
            r.jsx)("path", {
                fill: "#101014",
                d: "M9.772 7.453v1h-4v-1h4Z"
            })
        })
          , c = e => (0,
        r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "none",
            ...e,
            children: (0,
            r.jsx)("path", {
                fill: "#101014",
                d: "M7.49 11V5h1.02v6H7.49ZM5 8.51V7.49h6v1.02H5Z"
            })
        })
          , d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let r = (0,
            l.useRef)(null);
            return t.forEach(e => {
                e && ("function" == typeof e ? e(r.current) : e.current = r.current)
            }
            ),
            r
        };
        var f = n(38367)
          , h = n(42080)
          , p = n(19594)
          , _ = n.n(p);
        let m = (0,
        l.forwardRef)( (e, t) => {
            let {open: n=!1, minHeight: i=0, maxHeight: s=1 / 0, displayScrollbarOnOpen: a=!0, dispatchResize: u=!0, className: c, children: p, animation: m, id: g} = e
              , v = (0,
            l.useRef)(!1)
              , b = d(t)
              , y = (0,
            l.useRef)(null)
              , w = (0,
            l.useRef)(0)
              , [k,x] = (0,
            l.useState)(n || !1)
              , j = (0,
            l.useCallback)( () => {
                if (!y.current || !b.current)
                    return;
                clearTimeout(w.current),
                y.current.removeAttribute("inert");
                let e = (null == m ? void 0 : m.openDuration) || .6;
                (0,
                h.eR)(b.current, e, {
                    height: Math.min(s, y.current.clientHeight) + "px"
                }, {
                    ease: (null == m ? void 0 : m.openEaseCSS) || "default"
                }),
                w.current = window.setTimeout( () => {
                    y.current && b.current && (s < y.current.clientHeight ? a && (b.current.style.overflow = "auto") : b.current.style.height = "auto",
                    u && f.U.onResize())
                }
                , 1e3 * e)
            }
            , [])
              , O = (0,
            l.useCallback)( () => {
                if (!y.current || !b.current)
                    return;
                clearTimeout(w.current),
                y.current.setAttribute("inert", "");
                let e = (null == m ? void 0 : m.closeDuration) || .6
                  , t = Math.min(s, y.current.clientHeight);
                a && (b.current.style.overflow = "hidden"),
                (0,
                h.eR)(b.current, 0, {
                    height: t + "px"
                }),
                e > 0 && window.setTimeout( () => {
                    b.current && ((0,
                    h.eR)(b.current, e, {
                        height: i
                    }, {
                        ease: (null == m ? void 0 : m.closeEaseCSS) || "default"
                    }),
                    w.current = window.setTimeout( () => {
                        b.current && u && f.U.onResize()
                    }
                    , 1e3 * e))
                }
                , 20)
            }
            , []);
            return (0,
            l.useEffect)( () => {
                n ? (j(),
                x(!0)) : (O(),
                x(!1)),
                v.current = !0
            }
            , [n]),
            (0,
            r.jsx)("div", {
                className: o()(_().collapse, c),
                ref: b,
                id: g,
                "aria-hidden": !k,
                children: (0,
                r.jsx)("div", {
                    ref: y,
                    children: p
                })
            })
        }
        );
        var g = n(29906)
          , v = n(14849)
          , b = n.n(v);
        let y = e => {
            let[t,n] = (0,
            l.useState)(e ? g.Z2.getById(e) : {
                id: e || "",
                isOpen: !1
            })
              , [r,i] = (0,
            l.useState)(e ? g.Z2.getState() : null)
              , s = (0,
            l.useCallback)( () => {
                let r = e ? g.Z2.getById(e) : null
                  , s = g.Z2.getState();
                s ? i(s) : i(null),
                r ? t && r.isOpen === t.isOpen || n({
                    id: e || "",
                    isOpen: r.isOpen
                }) : n(null)
            }
            , [e, t]);
            return (0,
            l.useEffect)( () => (g.Z2.subscribe(s),
            () => {
                g.Z2.unsubscribe(s)
            }
            ), [s]),
            {
                id: (null == t ? void 0 : t.id) || e || "",
                isOpen: (null == t ? void 0 : t.isOpen) || !1,
                globalState: r
            }
        }
          , w = (0,
        l.createContext)({
            id: "",
            showOnHover: !1
        })
          , k = e => {
            let {id: t, open: n, children: s, showOnHover: u, closeOnOutsideClick: c, className: d} = e
              , f = (0,
            a.usePathname)()
              , h = (0,
            l.useRef)(null)
              , [p,_] = (0,
            l.useState)(n || !1);
            (0,
            l.useEffect)( () => g.Z2[n ? "open" : "close"](t), [n, t]),
            (0,
            l.useEffect)( () => g.Z2.close(t), [f, t]),
            (0,
            l.useEffect)( () => ((0,
            g.BE)({
                id: t,
                isOpen: p
            }),
            () => {
                (0,
                g.HJ)(t)
            }
            ), [t, p]);
            let m = (0,
            l.useCallback)( () => {
                let e = g.Z2.getById(t);
                e && _(e.isOpen)
            }
            , [t]);
            (0,
            l.useEffect)( () => (g.Z2.subscribe(m),
            () => {
                g.Z2.unsubscribe(m)
            }
            ), [m]);
            let v = (0,
            l.useCallback)( () => {
                if (u) {
                    var e;
                    g.Z2[(null == h ? void 0 : null === (e = h.current) || void 0 === e ? void 0 : e.contains(document.activeElement)) ? "open" : "close"](t)
                }
            }
            , [t, u]);
            return (0,
            l.useEffect)( () => (document.addEventListener("focus", v, !0),
            () => {
                document.removeEventListener("focus", v, !0)
            }
            ), [v]),
            (0,
            i.O)({
                ref: h,
                handler: () => c && g.Z2.close(t)
            }),
            (0,
            r.jsx)(w.Provider, {
                value: {
                    id: t,
                    showOnHover: u
                },
                children: (0,
                r.jsx)("div", {
                    ref: h,
                    className: o()(b().root, d),
                    onMouseEnter: () => u && g.Z2.open(t),
                    onMouseLeave: () => u && g.Z2.close(t),
                    children: s
                })
            })
        }
        ;
        k.displayName = "Dropdown",
        k.Popover = e => {
            let {children: t, className: n} = e
              , {id: i, showOnHover: s} = (0,
            l.useContext)(w)
              , {isOpen: a} = y(i) || {}
              , u = (0,
            l.useRef)(null);
            return (0,
            l.useEffect)( () => {
                u.current && !s && u.current.querySelectorAll("a, button, input, textarea, select, details").forEach(e => {
                    e.tabIndex = a ? 0 : -1
                }
                )
            }
            , [a, s]),
            (0,
            l.useEffect)( () => {
                let e = e => {
                    a && ("Escape" === e.key || "Esc" === e.key) && g.Z2.close(i)
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , [a, i]),
            (0,
            r.jsx)("div", {
                className: o()(b().popover, a && b().popover_open, n),
                id: i,
                "aria-hidden": !a,
                ref: u,
                children: t
            })
        }
        ,
        k.Collapse = e => {
            let {id: t} = (0,
            l.useContext)(w)
              , {isOpen: n=!1} = y(t) || {};
            return (0,
            r.jsx)(m, {
                id: t,
                open: n,
                ...e
            })
        }
        ,
        k.Button = e => {
            let {children: t, className: n, hasIcon: i=!0} = e
              , {id: s, showOnHover: a} = (0,
            l.useContext)(w)
              , {isOpen: d} = y(s) || {};
            return (0,
            r.jsx)("button", {
                className: o()(b().button, n),
                onClick: () => {
                    a || g.Z2.toggle(s)
                }
                ,
                "aria-controls": s,
                "aria-expanded": d,
                children: (0,
                r.jsxs)("span", {
                    className: b().label,
                    children: [t, i && (0,
                    r.jsxs)("span", {
                        className: b().iconContainer,
                        children: [(0,
                        r.jsx)(u, {
                            className: o()(b().iconMinus, d && b().iconMinus_expanded)
                        }), (0,
                        r.jsx)(c, {
                            className: o()(b().iconPlus, d && b().iconPlus_expanded)
                        })]
                    })]
                })
            })
        }
    },
    71166: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return c
            }
        });
        var r = n(85893)
          , i = n(93967)
          , s = n.n(i)
          , o = n(67294)
          , a = n(37167)
          , l = n.n(a);
        let u = (e, t) => {
            if (t)
                return t;
            switch (e) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
                return "h".concat(e);
            case "extra":
                return "h3";
            default:
                return "h6"
            }
        }
          , c = e => {
            let {children: t, id: n, className: i, level: a, tagName: c, isTriggered: d, animationType: f, animationDelay: h, headingRef: p, style: _, ...m} = e
              , g = (0,
            o.useRef)(null)
              , v = u(a, c);
            return (0,
            r.jsx)(v, {
                className: s()(l().heading, l()["heading_".concat(a)], f && "line-by-line" !== f && l()["heading_animation--".concat(f)], d && !!f && "line-by-line" !== f && l().heading_triggered, i),
                style: {
                    transitionDelay: "".concat(h ? "calc(".concat(h, "ms + var(--menu-follow-delay))") : void 0, "ms")
                },
                ref: g || p,
                ...m,
                children: t
            })
        }
    },
    19789: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return d
            }
        });
        var r = n(85893)
          , i = n(44346)
          , s = n(93967)
          , o = n.n(s)
          , a = n(41664)
          , l = n.n(a)
          , u = n(54617)
          , c = n.n(u);
        let d = e => {
            let {children: t, href: n, className: s, theme: a, size: u, hasIcon: d, onClick: f, style: h, forwardedRef: p, ..._} = e
              , m = () => {
                let e = {
                    small: c().Link__text_small,
                    medium: {
                        black: c().Link__text_mediumBlack,
                        white: c().Link__text_mediumWhite,
                        "white-med": c().Link__text_mediumWhiteMed,
                        transparent: c().Link__text_mediumTransparent
                    },
                    large: c().Link__text_large,
                    submenu: c().Link__text_submenu
                };
                return "medium" === u ? e.medium[a] || "" : e[u]
            }
              , g = {
                className: ( () => {
                    let e = c().Link
                      , t = {
                        small: c().Link__small,
                        medium: {
                            black: c().Link__mediumBlack,
                            white: c().Link__mediumWhite,
                            "white-med": c().Link__mediumWhiteMed,
                            transparent: c().Link__mediumTransparent
                        },
                        large: c().Link__large,
                        submenu: c().Link__submenu
                    }
                      , n = "medium" === u ? t.medium[a] : "";
                    return o()(e, t[u], n, s)
                }
                )(),
                onClick: f,
                style: h,
                ref: p,
                ..._
            };
            return n ? (0,
            r.jsx)(l(), {
                href: n || "",
                ...g,
                target: n.includes("http") ? "_blank" : "_self",
                children: (0,
                r.jsxs)("span", {
                    className: c().Link__container,
                    children: [("black" === a || "white-med" === a) && "medium" === u ? (0,
                    r.jsxs)("span", {
                        className: c().textContainer,
                        children: [(0,
                        r.jsx)("span", {
                            className: o()(m(), c().text1),
                            children: t
                        }), (0,
                        r.jsx)("span", {
                            className: o()(m(), c().text2),
                            children: t
                        })]
                    }) : (0,
                    r.jsx)("span", {
                        className: m(),
                        children: t
                    }), d && (0,
                    r.jsxs)("span", {
                        className: c().Link__iconContainer,
                        children: [(0,
                        r.jsx)(i.o, {
                            className: o()(c().Link__icon, c().Link__icon1)
                        }), (0,
                        r.jsx)(i.o, {
                            className: o()(c().Link__icon, c().Link__icon2)
                        })]
                    })]
                })
            }) : (0,
            r.jsx)("button", {
                type: "button",
                className: c().Button,
                style: h,
                children: t
            })
        }
    },
    44346: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return i
            }
        });
        var r = n(85893);
        let i = e => (0,
        r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            ...e,
            children: (0,
            r.jsx)("path", {
                stroke: "#101014",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M4 20 19 5M4.5 4.5h15v15"
            })
        })
    },
    11359: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            }
        });
        var r = n(85893);
        let i = e => (0,
        r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...e,
            children: [(0,
            r.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M19.701 4.706 5 20l-.704-.704L18.998 4.003l.703.703Z",
                clipRule: "evenodd"
            }), (0,
            r.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M19 20 4.293 4.707 5 4l14.707 15.293L19 20Z",
                clipRule: "evenodd"
            })]
        })
    },
    75605: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return i
            }
        });
        var r = n(67294);
        function i(e) {
            let {ref: t, handler: n} = e
              , i = (0,
            r.useRef)({
                isMouseDown: !1
            }).current
              , o = (0,
            r.useCallback)(e => {
                s(e, t) || (i.isMouseDown = !0)
            }
            , [])
              , a = (0,
            r.useCallback)(e => {
                i.isMouseDown && n && !s(e, t) && (i.isMouseDown = !1,
                n(e))
            }
            , []);
            (0,
            r.useEffect)( () => (document.addEventListener("mousedown", o),
            document.addEventListener("mouseup", a),
            () => {
                document.removeEventListener("mousedown", o),
                document.removeEventListener("mouseup", a)
            }
            ), [t, n])
        }
        function s(e, t) {
            var n;
            let r = e.target;
            return null === (n = t.current) || void 0 === n ? void 0 : n.contains(r)
        }
    },
    78799: function(e, t, n) {
        "use strict";
        n.d(t, {
            Pr: function() {
                return c
            },
            qr: function() {
                return u
            }
        });
        var r = n(67294)
          , i = n(23974);
        let s = new (n(83162)).v
          , o = {
            bodyLocked: !1,
            bodyMargin: 0
        }
          , a = []
          , l = 0
          , u = {
            lock: e => {
                if (a.includes(e) || a.push(e),
                a.length > 0 && !o.bodyLocked) {
                    o.bodyLocked = !0;
                    let t = document.body
                      , n = t.clientWidth;
                    t.style.position = "fixed",
                    t.style.overflow = "hidden",
                    t.style.left = "0px",
                    t.style.right = "0px";
                    let r = i.Z.get().top;
                    l = r,
                    t.style.top = -r + "px",
                    i.Z.setContainer({
                        element: window,
                        locked: !0
                    }),
                    window.scrollTo(0, 0),
                    document.body.style.right = "0px",
                    o.bodyMargin = t.clientWidth - n,
                    t.style.right = "".concat(Math.max(0, o.bodyMargin), "px"),
                    s.dispatch({
                        type: "scroll:lock",
                        payload: {
                            key: e
                        }
                    })
                }
            }
            ,
            unlock: e => {
                if (a.includes(e) && (a = a.filter(t => t !== e)),
                0 === a.length && o.bodyLocked) {
                    o.bodyLocked = !1;
                    let t = document.body;
                    t.style.position = "",
                    t.style.overflow = "",
                    t.style.left = "",
                    t.style.right = "",
                    t.style.top = "",
                    o.bodyMargin = 0,
                    window.scrollTo(0, l),
                    i.Z.setContainer({
                        element: window,
                        locked: !1
                    }),
                    s.dispatch({
                        type: "scroll:unlock",
                        payload: {
                            key: e
                        }
                    })
                }
            }
        }
          , c = () => {
            let[e,t] = (0,
            r.useState)(!1)
              , n = (0,
            r.useRef)(!1)
              , i = (0,
            r.useCallback)(e => {
                u.lock(e)
            }
            , [])
              , a = (0,
            r.useCallback)(e => {
                u.unlock(e)
            }
            , [])
              , l = (0,
            r.useCallback)( () => {
                o.bodyLocked && !n.current ? n.current = !0 : !o.bodyLocked && n.current && (n.current = !1),
                t(o.bodyLocked)
            }
            , []);
            return (0,
            r.useEffect)( () => (s.subscribe(l),
            () => {
                s.unsubscribe(l)
            }
            ), []),
            (0,
            r.useMemo)( () => ({
                lockScroll: i,
                unlockScroll: a,
                locked: e,
                offset: o.bodyMargin
            }), [i, a, o.bodyMargin, e])
        }
    },
    95961: function(e, t, n) {
        "use strict";
        n.d(t, {
            u_: function() {
                return p
            },
            Fy: function() {
                return h
            },
            dd: function() {
                return _
            }
        });
        var r = n(85893)
          , i = n(93967)
          , s = n.n(i)
          , o = n(67294)
          , a = n(39332);
        let l = new (n(83162)).v
          , u = []
          , c = e => u.find(t => t.id === e) || null
          , d = e => {
            if (u.find(t => e.id === t.id))
                throw Error("Modal with id ".concat(e.id, " already exists in the global state"));
            u.push(e)
        }
          , f = e => {
            if (!c(e))
                throw Error("Modal with id ".concat(e, " doesnt exist in the global state"));
            u = u.filter(t => t.id !== e)
        }
          , h = {
            open: e => {
                let t = c(e);
                t && (t.isOpen || (t.isOpen = !0,
                l.dispatch({
                    type: "modal-open",
                    payload: {
                        id: e
                    }
                })))
            }
            ,
            close: e => {
                let t = c(e);
                t && t.isOpen && (t.isOpen = !1,
                l.dispatch({
                    type: "modal-close",
                    payload: {
                        id: e
                    }
                }))
            }
            ,
            closeAll: () => {
                u.forEach(e => {
                    e.isOpen && (e.isOpen = !1,
                    l.dispatch({
                        type: "modal-close",
                        payload: {
                            id: e.id
                        }
                    }))
                }
                )
            }
            ,
            closeAllExcept: e => {
                u.forEach(t => {
                    t.isOpen && t.id !== e && (t.isOpen = !1,
                    l.dispatch({
                        type: "modal-close",
                        payload: {
                            id: t.id
                        }
                    }))
                }
                )
            }
            ,
            toggle: e => {
                let t = c(e);
                t && (t.isOpen = !t.isOpen,
                t.isOpen ? l.dispatch({
                    type: "modal-open",
                    payload: {
                        id: e
                    }
                }) : l.dispatch({
                    type: "modal-close",
                    payload: {
                        id: e
                    }
                }))
            }
            ,
            getById: e => c(e),
            getState: () => u,
            subscribe: e => {
                l.subscribe(e)
            }
            ,
            unsubscribe: e => {
                l.unsubscribe(e)
            }
        }
          , p = e => {
            let {id: t, className: n, classNameActive: i, style: l, ariaLabel: u, children: c} = e
              , [p,_] = (0,
            o.useState)(e.isOpen || !1)
              , m = (0,
            o.useRef)(null)
              , g = (0,
            a.usePathname)();
            (0,
            o.useEffect)( () => (d({
                id: t,
                isOpen: p
            }),
            () => {
                f(t)
            }
            ), []),
            (0,
            o.useEffect)( () => {
                _(e.isOpen || !1)
            }
            , [e.isOpen]);
            let v = (0,
            o.useCallback)( () => {
                let e = h.getById(t);
                e && _(e.isOpen)
            }
            , []);
            return (0,
            o.useEffect)( () => {
                m.current && (p ? m.current.removeAttribute("inert") : m.current.setAttribute("inert", "true"))
            }
            , [p]),
            (0,
            o.useEffect)( () => (h.subscribe(v),
            () => {
                h.unsubscribe(v)
            }
            ), [v]),
            (0,
            o.useEffect)( () => {
                p && _(!1)
            }
            , [g]),
            (0,
            o.useEffect)( () => h.close(t), [g, t]),
            (0,
            r.jsx)("div", {
                role: "dialog",
                "aria-hidden": !p,
                "aria-label": u,
                "aria-modal": !0,
                ref: m,
                style: l,
                className: s()(n, p && i),
                children: c
            })
        }
          , _ = e => {
            let[t,n] = (0,
            o.useState)(e ? h.getById(e) : null)
              , r = (0,
            o.useCallback)( () => {
                let r = h.getById(e);
                r ? t && r.isOpen === t.isOpen || n({
                    id: e,
                    isOpen: r.isOpen
                }) : n(null)
            }
            , [e, t]);
            return (0,
            o.useEffect)( () => (h.subscribe(r),
            () => {
                h.unsubscribe(r)
            }
            ), [r]),
            (0,
            o.useEffect)( () => {}
            , [e, null == t ? void 0 : t.isOpen]),
            t
        }
    },
    38367: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return s
            }
        });
        var r = n(83162);
        class i {
            constructor() {
                this.eventEmitter = new r.v,
                this.width = 0,
                this.height = 0,
                this.onResize = () => {
                    this.width = window.innerWidth,
                    this.height = window.innerHeight,
                    this.eventEmitter.dispatch({
                        type: "resize"
                    })
                }
                ,
                this.get = () => ({
                    width: this.width,
                    height: this.height
                }),
                this.subscribe = e => this.eventEmitter.subscribe(e),
                this.unsubscribe = e => this.eventEmitter.unsubscribe(e),
                window.addEventListener("resize", this.onResize, {
                    passive: !0
                }),
                window.addEventListener("orientationchange", this.onResize, {
                    passive: !0
                }),
                window.addEventListener("load", this.onResize, {
                    passive: !0
                }),
                this.onResize()
            }
        }
        let s = new i
    },
    11870: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return o
            }
        });
        var r = n(67294)
          , i = n(58953)
          , s = n(38367);
        let o = () => {
            let e = r.useLayoutEffect
              , [t,n] = (0,
            r.useState)({
                width: 0,
                height: 0
            })
              , [o,a] = (0,
            r.useState)({
                isMobileS: !1,
                isMobile: !1,
                isTablet: !1,
                isLaptop: !1,
                isDesktop: !1,
                isDesktopHD: !1,
                isTouchScreen: !1
            })
              , l = (0,
            r.useRef)(!1)
              , u = (0,
            r.useCallback)( () => {
                let e = s.U.get();
                l.current = "ontouchstart"in window || navigator.maxTouchPoints > 0,
                n({
                    width: e.width,
                    height: e.width
                }),
                a({
                    isMobileS: e.width < i.U.MOBILEL,
                    isMobile: e.width < i.U.TABLET,
                    isTablet: e.width >= i.U.TABLET,
                    isLaptop: e.width >= i.U.LAPTOP,
                    isDesktop: e.width >= i.U.DESKTOP,
                    isDesktopHD: e.width >= i.U.HD,
                    isTouchScreen: l.current
                })
            }
            , []);
            return e( () => {
                l.current = "ontouchstart"in window || navigator.maxTouchPoints > 0
            }
            , []),
            (0,
            r.useEffect)( () => (s.U.subscribe(u),
            u(),
            () => {
                s.U.unsubscribe(u)
            }
            ), [u]),
            (0,
            r.useMemo)( () => ({
                width: t.width,
                height: t.height,
                isMobileS: o.isMobileS,
                isMobile: o.isMobile,
                isTablet: o.isTablet,
                isLaptop: o.isLaptop,
                isDesktop: o.isDesktop,
                isDesktopHD: o.isDesktopHD,
                isTouchScreen: o.isTouchScreen
            }), [t.width, t.height])
        }
    },
    23974: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(83162);
        let i = e => !!e && "number" == typeof e.top && "number" == typeof e.left;
        class s {
            constructor() {
                var e = this;
                this.eventEmitter = new r.v,
                this.containers = [],
                this.addContainer = e => {
                    let {mode: t="normal", element: n} = e;
                    if (this.containers.find(e => e.element === n))
                        throw Error("Container already exists");
                    let r = {
                        element: n,
                        mode: t,
                        locked: !1,
                        synthetic: !1,
                        rawPosition: {
                            top: 0,
                            left: 0
                        },
                        scrollPosition: {
                            top: 0,
                            left: 0
                        },
                        handler: () => {}
                    };
                    r.scrollPosition = this.getScrollPosition(r, !0),
                    r.rawPosition = this.getRawPosition(r, !0),
                    r.handler = () => {
                        this.onScroll(r)
                    }
                    ,
                    this.containers.push(r),
                    n.addEventListener("scroll", r.handler, {
                        passive: !1
                    })
                }
                ,
                this.setContainer = e => {
                    let {mode: t, synthetic: n, locked: r, element: i} = e
                      , s = this.containers.find(e => e.element === i);
                    if (s)
                        void 0 !== t && (s.mode = t,
                        "smooth" === t ? s.element.removeEventListener("scroll", s.handler) : "normal" === t && s.element.addEventListener("scroll", s.handler, {
                            passive: !1
                        })),
                        void 0 !== n && (s.synthetic = n),
                        void 0 !== r && (s.locked = r);
                    else
                        throw Error("Container doesn't exists")
                }
                ,
                this.setSynthetic = e => {
                    let {element: t, synthetic: n} = e
                      , r = this.containers.find(e => e.element === (t || window));
                    if (r)
                        r.synthetic = n;
                    else
                        throw Error("Container doesn't exists")
                }
                ,
                this.onScroll = (e, t) => {
                    let n = Object.assign({}, e.scrollPosition)
                      , r = Object.assign({}, e.rawPosition);
                    t && "smooth" === e.mode && i(t.detail) ? (e.scrollPosition.top = t.detail.top,
                    e.scrollPosition.left = t.detail.left) : e.scrollPosition = this.getScrollPosition(e),
                    e.rawPosition = this.getRawPosition(e),
                    (Math.abs(e.scrollPosition.left - n.left) >= .01 || Math.abs(e.scrollPosition.top - n.top) >= .01 || Math.abs(e.rawPosition.left - r.left) >= .01 || Math.abs(e.rawPosition.top - r.top) >= .01) && this.eventEmitter.dispatch({
                        type: "scroll"
                    })
                }
                ,
                this.getRawPosition = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t ? {
                        top: e.element.scrollTop || 0,
                        left: e.element.scrollLeft || 0
                    } : e.locked && e.element === window ? e.rawPosition : e.element === window ? {
                        top: e.element.scrollY || 0,
                        left: e.element.scrollX || 0
                    } : {
                        top: e.element.scrollTop || 0,
                        left: e.element.scrollLeft || 0
                    }
                }
                ,
                this.getScrollPosition = function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return n ? e.getRawPosition(t, n) : t.locked && t.element === window ? t.scrollPosition : e.getRawPosition(t, n)
                }
                ,
                this.get = () => ({
                    locked: this.containers[0].locked,
                    synthetic: this.containers[0].synthetic,
                    mode: this.containers[0].mode,
                    left: this.containers[0].scrollPosition.left,
                    top: this.containers[0].scrollPosition.top,
                    rawLeft: this.containers[0].rawPosition.left,
                    rawTop: this.containers[0].rawPosition.top
                }),
                this.getContainer = e => {
                    let t = this.containers.find(t => t.element === e);
                    if (!t)
                        throw Error("Container doesn't exist");
                    return t
                }
                ,
                this.subscribe = e => this.eventEmitter.subscribe(e),
                this.unsubscribe = e => this.eventEmitter.unsubscribe(e),
                this.addContainer({
                    mode: "normal",
                    element: window
                })
            }
        }
        let o = new s
    },
    83162: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return r
            }
        });
        class r {
            constructor() {
                this.handlers = [],
                this.pendingHandlers = [],
                this.frozen = 0,
                this.dispatch = e => {
                    Object.freeze(Event),
                    this.frozen++,
                    this.handlers.forEach(t => t(e)),
                    this.frozen--,
                    this.frozen || (this.pendingHandlers.forEach(e => {
                        "add" === e.pending ? this.subscribe(e.handler) : "remove" === e.pending && this.unsubscribe(e.handler)
                    }
                    ),
                    this.pendingHandlers = [])
                }
                ,
                this.subscribe = e => {
                    if (this.frozen) {
                        this.pendingHandlers.push({
                            pending: "add",
                            handler: e
                        });
                        return
                    }
                    if (-1 === this.handlers.indexOf(e))
                        this.handlers.push(e);
                    else
                        throw console.log(e),
                        Error("handler was already subscribed")
                }
                ,
                this.unsubscribe = e => {
                    if (this.frozen) {
                        this.pendingHandlers.push({
                            pending: "remove",
                            handler: e
                        });
                        return
                    }
                    if (-1 === this.handlers.indexOf(e))
                        throw console.log(e),
                        Error("handler was never subscribed");
                    this.handlers = this.handlers.filter(t => t !== e)
                }
            }
        }
    },
    42080: function(e, t, n) {
        "use strict";
        n.d(t, {
            eR: function() {
                return u
            }
        });
        let r = 60
          , i = 0
          , s = [60, 120, 144, 160]
          , o = []
          , a = function() {
            let e = window.performance.now();
            if (i) {
                let t = e - i;
                o.push(1e3 / t)
            }
            o.length > 0 && (r = o.reduce( (e, t) => e + t / o.length, 0),
            r = s.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e)),
            o.length > 300 && o.shift(),
            i = e,
            requestAnimationFrame(a)
        };
        a();
        var l = n(79807);
        let u = (e, t, n, r) => {
            let i = e => Object.keys(e).join(", ")
              , s = (e, t, n) => {
                let r = "";
                t = t || "",
                Array.isArray(e) || (e = [e]);
                for (let t = e.length - 1; t < n; t++)
                    e[t] = e[e.length - 1];
                for (let i = 0; i < n; i++)
                    0 !== i && (r += ", "),
                    r += e[i] + t;
                return r
            }
              , o = e => {
                if ((0,
                l.Gx)(e))
                    return l.tQ[e];
                if (0 !== e.indexOf("cubic-bezier"))
                    throw Error("Invalid easing value");
                return e
            }
              , a = Array.isArray((r = {
                delay: 0,
                ease: "ease",
                ...r
            }).ease) ? r.ease.map(o) : [o(r.ease ? r.ease : "default")]
              , u = Array.isArray(r.delay) ? r.delay : r.delay ? [r.delay] : [0]
              , c = i(n).split(" ").length
              , d = () => {
                HTMLCollection.prototype.isPrototypeOf(e) ? e = Array.prototype.slice.call(e) : Array.isArray(e) || (e = [e]),
                e.forEach(function(e) {
                    for (let r in e.style.transitionProperty = i(n),
                    e.style.transitionDuration = s(t, "s", c),
                    e.style.transitionDelay = s(u, "s", c),
                    e.style.transitionTimingFunction = s(a, "", c),
                    n)
                        if (r in e.style)
                            "transform" === r ? e.style.transform = "".concat(n.transform) : e.style[r] = "".concat(n[r]);
                        else
                            throw Error("style ".concat(r, " is not a valid CSS property"))
                })
            }
            ;
            r.skipFrame ? setTimeout( () => {
                d()
            }
            , 1e3 / 60) : d()
        }
    },
    98783: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return r
            }
        });
        let r = (e, t) => {
            e || (e = document.documentElement);
            let n = e.querySelectorAll("a, button, input, textarea, select, details, [tabindex]");
            return Array.prototype.slice.call(n).filter(e => {
                if (!t) {
                    let t = e.getAttribute("tabindex");
                    if (t && 0 > parseInt(t))
                        return !1
                }
                return !e.hasAttribute("disabled")
            }
            )
        }
    },
    52867: function(e) {
        e.exports = {
            footer: "footer_footer__xw7vO",
            footer__link: "footer_footer__link__M0T9M",
            footer__container: "footer_footer__container__dYGx_",
            footer__title: "footer_footer__title__gvgta",
            footer__appLink: "footer_footer__appLink___mXda",
            footer__navigation: "footer_footer__navigation__JxW5s",
            footer__navItem: "footer_footer__navItem__53KdR",
            footer__bottomContainer: "footer_footer__bottomContainer__u2rB_",
            logo: "footer_logo__qe0OJ"
        }
    },
    67789: function(e) {
        e.exports = {
            root: "header_root__s94Fn",
            banner: "header_banner__fg5GU",
            banner__link: "header_banner__link__zl_n4",
            banner__container: "header_banner__container__nKcQC",
            banner__buttonContainer: "header_banner__buttonContainer__DheMW",
            banner__button: "header_banner__button__rAk_c",
            banner__innerContainer: "header_banner__innerContainer__Bm1_P",
            banner__icon: "header_banner__icon__ZYqOv",
            theme: "header_theme__Ep10q",
            theme_white: "header_theme_white__tdKxN",
            theme_borderBottom: "header_theme_borderBottom__SLj37",
            container: "header_container__X_i2q",
            inner: "header_inner__w_3v8",
            logo: "header_logo__EYAB7",
            logo_triggered: "header_logo_triggered__Py7xP",
            nav: "header_nav__63IEx",
            navLeft: "header_navLeft__gXerU",
            navRight: "header_navRight__8I0jo",
            listItem: "header_listItem__cqSOE",
            listItem_triggered: "header_listItem_triggered__7WM_o",
            logoLink_mobile: "header_logoLink_mobile__FJCFf",
            menuToggler: "header_menuToggler__JrKns",
            list: "header_list__UuoWH"
        }
    },
    56550: function(e) {
        e.exports = {
            menu: "menu_menu__JB38u",
            menu_active: "menu_menu_active__7bfIa",
            overflow: "menu_overflow__Kk6MD",
            container: "menu_container__JJojG"
        }
    },
    10475: function(e) {
        e.exports = {
            nav: "navigation-nested_nav__Az3LN",
            list: "navigation-nested_list__9jS7K",
            mainLinks: "navigation-nested_mainLinks__X_se1",
            link: "navigation-nested_link__uv9jP",
            link_spk: "navigation-nested_link_spk__9cp2M",
            dropdownCollapse: "navigation-nested_dropdownCollapse__OYTBz",
            dropdownLink: "navigation-nested_dropdownLink__FCd7h",
            label: "navigation-nested_label__n_n3B",
            label_active: "navigation-nested_label_active__w34VL",
            buttonGroup: "navigation-nested_buttonGroup___gyAi",
            button: "navigation-nested_button__DuSAV"
        }
    },
    31583: function(e) {
        e.exports = {
            root: "navigation-item_root__uyvhi",
            root_linkSpk: "navigation-item_root_linkSpk__ChTSb",
            root_dark: "navigation-item_root_dark__h2n_a",
            root_light: "navigation-item_root_light__OHro6",
            root_button: "navigation-item_root_button__D8ZhD",
            root_active: "navigation-item_root_active__gcOWX",
            root_link: "navigation-item_root_link__AY12q",
            label: "navigation-item_label__pFNyq",
            icon: "navigation-item_icon__I0R_A",
            dropdownContainer: "navigation-item_dropdownContainer__NX2DU",
            dropdownCollapse: "navigation-item_dropdownCollapse__ir6SM",
            dropdownCollapse_visible: "navigation-item_dropdownCollapse_visible__tRI1f",
            dropdownCollapse_socials: "navigation-item_dropdownCollapse_socials__R7VB_",
            dropdownCollapse_cta: "navigation-item_dropdownCollapse_cta__7ZQUP",
            dropdownLinks: "navigation-item_dropdownLinks__372jO",
            dropdown: "navigation-item_dropdown__IXbLu"
        }
    },
    19594: function(e) {
        e.exports = {
            collapse: "collapse_collapse__z_Wbn"
        }
    },
    97562: function(e) {
        e.exports = {
            container: "container_container__If2my"
        }
    },
    14849: function(e) {
        e.exports = {
            popover: "dropdown_popover__AXug7",
            popover_open: "dropdown_popover_open__8FZUB",
            button: "dropdown_button__UBFy3",
            label: "dropdown_label___ND6z",
            iconMinus: "dropdown_iconMinus__FT139",
            iconMinus_expanded: "dropdown_iconMinus_expanded__if1gt",
            iconContainer: "dropdown_iconContainer__b7gT5",
            iconPlus: "dropdown_iconPlus__NTEcH",
            iconPlus_expanded: "dropdown_iconPlus_expanded__tukHd"
        }
    },
    37167: function(e) {
        e.exports = {
            heading: "heading_heading__WezJk",
            heading_default: "heading_heading_default__YGvdw",
            heading_1: "heading_heading_1__lXil_",
            heading_2: "heading_heading_2__AvEHP",
            heading_3: "heading_heading_3__yY_Sq",
            heading_4: "heading_heading_4__aVda4",
            heading_5: "heading_heading_5__c1OTD",
            heading_6: "heading_heading_6__w5ARE",
            heading_extra: "heading_heading_extra__obw63",
            "heading_animation--fade-position": "heading_heading_animation--fade-position__1Bb2H",
            heading_triggered: "heading_heading_triggered___z2QK"
        }
    },
    54617: function(e) {
        e.exports = {
            Link: "link_Link__A86H7",
            Link__icon1: "link_Link__icon1__UeyGx",
            Link__icon2: "link_Link__icon2__Z1voM",
            Link__container: "link_Link__container__gursv",
            Link__iconContainer: "link_Link__iconContainer__8TUVb",
            "icon-from-bottom": "link_icon-from-bottom__w95il",
            "icon-to-top": "link_icon-to-top__o658Q",
            Link__large: "link_Link__large__rZ_Dg",
            Link__mediumBlack: "link_Link__mediumBlack__94_af",
            text1: "link_text1__iqzDP",
            "text-to-top": "link_text-to-top__i6t1R",
            text2: "link_text2__hi0YU",
            "text-from-bottom": "link_text-from-bottom__xZCtQ",
            Link__mediumWhiteMed: "link_Link__mediumWhiteMed__bH_sG",
            Link__mediumTransparent: "link_Link__mediumTransparent__gmVdA",
            Link__mediumWhite: "link_Link__mediumWhite__EjHRw",
            Link__container_white: "link_Link__container_white__uKBFA",
            Link__small: "link_Link__small__MXhGD",
            Link__submenu: "link_Link__submenu__V0k7D",
            Link__text: "link_Link__text__apKO6",
            Link__text_large: "link_Link__text_large__Wh_c7",
            Link__text_small: "link_Link__text_small__difwW",
            Link__text_submenu: "link_Link__text_submenu__FdB1M",
            Link__icon: "link_Link__icon__CF7DR",
            textContainer: "link_textContainer__Ndyv0",
            Button: "link_Button__FV1mV"
        }
    },
    13423: function(e) {
        e.exports = {
            button: "toggle-burger_button__VxRRp",
            inner: "toggle-burger_inner__Bt6Vh",
            icon: "toggle-burger_icon__3n8gB",
            iconBurger: "toggle-burger_iconBurger__8cGR2",
            iconBurger_hidden: "toggle-burger_iconBurger_hidden__JsKTu",
            iconClose: "toggle-burger_iconClose__N5SNz",
            iconClose_visible: "toggle-burger_iconClose_visible__E9API"
        }
    },
    9008: function() {},
    25675: function(e, t, n) {
        e.exports = n(7e4)
    },
    41664: function(e, t, n) {
        e.exports = n(24116)
    },
    39332: function(e, t, n) {
        e.exports = n(29108)
    },
    8293: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "actionAsyncStorage", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = (0,
        n(66713).createAsyncLocalStorage)();
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1747: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "actionAsyncStorage", {
            enumerable: !0,
            get: function() {
                return r.actionAsyncStorage
            }
        });
        let r = n(8293);
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    66713: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
        class r {
            disable() {
                throw n
            }
            getStore() {}
            run() {
                throw n
            }
            exit() {
                throw n
            }
            enterWith() {
                throw n
            }
        }
        let i = globalThis.AsyncLocalStorage;
        function s() {
            return i ? new i : new r
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    70038: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "requestAsyncStorage", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = (0,
        n(66713).createAsyncLocalStorage)();
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    95714: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            getExpectedRequestStore: function() {
                return i
            },
            requestAsyncStorage: function() {
                return r.requestAsyncStorage
            }
        });
        let r = n(70038);
        function i(e) {
            let t = r.requestAsyncStorage.getStore();
            if (t)
                return t;
            throw Error("`" + e + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    93967: function(e, t) {
        var n;
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function i() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    n && (e = s(e, function(e) {
                        if ("string" == typeof e || "number" == typeof e)
                            return e;
                        if ("object" != typeof e)
                            return "";
                        if (Array.isArray(e))
                            return i.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                            return e.toString();
                        var t = "";
                        for (var n in e)
                            r.call(e, n) && e[n] && (t = s(t, n));
                        return t
                    }(n)))
                }
                return e
            }
            function s(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (i.default = i,
            e.exports = i) : void 0 !== (n = (function() {
                return i
            }
            ).apply(t, [])) && (e.exports = n)
        }()
    },
    66474: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return s
            }
        });
        var r = n(7506)
          , i = n(24139)
          , s = new class extends r.l {
            #p;
            #_;
            #m;
            constructor() {
                super(),
                this.#m = e => {
                    if (!i.sk && window.addEventListener) {
                        let t = () => e();
                        return window.addEventListener("visibilitychange", t, !1),
                        () => {
                            window.removeEventListener("visibilitychange", t)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#_ || this.setEventListener(this.#m)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#_?.(),
                this.#_ = void 0)
            }
            setEventListener(e) {
                this.#m = e,
                this.#_?.(),
                this.#_ = e(e => {
                    "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                }
                )
            }
            setFocused(e) {
                this.#p !== e && (this.#p = e,
                this.onFocus())
            }
            onFocus() {
                let e = this.isFocused();
                this.listeners.forEach(t => {
                    t(e)
                }
                )
            }
            isFocused() {
                return "boolean" == typeof this.#p ? this.#p : globalThis.document?.visibilityState !== "hidden"
            }
        }
    },
    27037: function(e, t, n) {
        "use strict";
        n.d(t, {
            V: function() {
                return r
            }
        });
        var r = function() {
            let e = []
              , t = 0
              , n = e => {
                e()
            }
              , r = e => {
                e()
            }
              , i = e => setTimeout(e, 0)
              , s = r => {
                t ? e.push(r) : i( () => {
                    n(r)
                }
                )
            }
              , o = () => {
                let t = e;
                e = [],
                t.length && i( () => {
                    r( () => {
                        t.forEach(e => {
                            n(e)
                        }
                        )
                    }
                    )
                }
                )
            }
            ;
            return {
                batch: e => {
                    let n;
                    t++;
                    try {
                        n = e()
                    } finally {
                        --t || o()
                    }
                    return n
                }
                ,
                batchCalls: e => (...t) => {
                    s( () => {
                        e(...t)
                    }
                    )
                }
                ,
                schedule: s,
                setNotifyFunction: e => {
                    n = e
                }
                ,
                setBatchNotifyFunction: e => {
                    r = e
                }
                ,
                setScheduler: e => {
                    i = e
                }
            }
        }()
    },
    14304: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return s
            }
        });
        var r = n(7506)
          , i = n(24139)
          , s = new class extends r.l {
            #g = !0;
            #_;
            #m;
            constructor() {
                super(),
                this.#m = e => {
                    if (!i.sk && window.addEventListener) {
                        let t = () => e(!0)
                          , n = () => e(!1);
                        return window.addEventListener("online", t, !1),
                        window.addEventListener("offline", n, !1),
                        () => {
                            window.removeEventListener("online", t),
                            window.removeEventListener("offline", n)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#_ || this.setEventListener(this.#m)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#_?.(),
                this.#_ = void 0)
            }
            setEventListener(e) {
                this.#m = e,
                this.#_?.(),
                this.#_ = e(this.setOnline.bind(this))
            }
            setOnline(e) {
                this.#g !== e && (this.#g = e,
                this.listeners.forEach(t => {
                    t(e)
                }
                ))
            }
            isOnline() {
                return this.#g
            }
        }
    },
    56888: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return a
            },
            z: function() {
                return l
            }
        });
        var r = n(24139)
          , i = n(27037)
          , s = n(72008)
          , o = n(48907)
          , a = class extends o.F {
            #v;
            #b;
            #y;
            #r;
            #l;
            #w;
            constructor(e) {
                super(),
                this.#w = !1,
                this.#l = e.defaultOptions,
                this.setOptions(e.options),
                this.observers = [],
                this.#y = e.cache,
                this.queryKey = e.queryKey,
                this.queryHash = e.queryHash,
                this.#v = function(e) {
                    let t = "function" == typeof e.initialData ? e.initialData() : e.initialData
                      , n = void 0 !== t
                      , r = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                    return {
                        data: t,
                        dataUpdateCount: 0,
                        dataUpdatedAt: n ? r ?? Date.now() : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: n ? "success" : "pending",
                        fetchStatus: "idle"
                    }
                }(this.options),
                this.state = e.state ?? this.#v,
                this.scheduleGc()
            }
            get meta() {
                return this.options.meta
            }
            get promise() {
                return this.#r?.promise
            }
            setOptions(e) {
                this.options = {
                    ...this.#l,
                    ...e
                },
                this.updateGcTime(this.options.gcTime)
            }
            optionalRemove() {
                this.observers.length || "idle" !== this.state.fetchStatus || this.#y.remove(this)
            }
            setData(e, t) {
                let n = (0,
                r.oE)(this.state.data, e, this.options);
                return this.#i({
                    data: n,
                    type: "success",
                    dataUpdatedAt: t?.updatedAt,
                    manual: t?.manual
                }),
                n
            }
            setState(e, t) {
                this.#i({
                    type: "setState",
                    state: e,
                    setStateOptions: t
                })
            }
            cancel(e) {
                let t = this.#r?.promise;
                return this.#r?.cancel(e),
                t ? t.then(r.ZT).catch(r.ZT) : Promise.resolve()
            }
            destroy() {
                super.destroy(),
                this.cancel({
                    silent: !0
                })
            }
            reset() {
                this.destroy(),
                this.setState(this.#v)
            }
            isActive() {
                return this.observers.some(e => !1 !== (0,
                r.Nc)(e.options.enabled, this))
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === r.CN || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            }
            isStale() {
                return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data)
            }
            isStaleByTime(e=0) {
                return this.state.isInvalidated || void 0 === this.state.data || !(0,
                r.Kp)(this.state.dataUpdatedAt, e)
            }
            onFocus() {
                let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
                e?.refetch({
                    cancelRefetch: !1
                }),
                this.#r?.continue()
            }
            onOnline() {
                let e = this.observers.find(e => e.shouldFetchOnReconnect());
                e?.refetch({
                    cancelRefetch: !1
                }),
                this.#r?.continue()
            }
            addObserver(e) {
                this.observers.includes(e) || (this.observers.push(e),
                this.clearGcTimeout(),
                this.#y.notify({
                    type: "observerAdded",
                    query: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e),
                this.observers.length || (this.#r && (this.#w ? this.#r.cancel({
                    revert: !0
                }) : this.#r.cancelRetry()),
                this.scheduleGc()),
                this.#y.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: e
                }))
            }
            getObserversCount() {
                return this.observers.length
            }
            invalidate() {
                this.state.isInvalidated || this.#i({
                    type: "invalidate"
                })
            }
            fetch(e, t) {
                if ("idle" !== this.state.fetchStatus) {
                    if (void 0 !== this.state.data && t?.cancelRefetch)
                        this.cancel({
                            silent: !0
                        });
                    else if (this.#r)
                        return this.#r.continueRetry(),
                        this.#r.promise
                }
                if (e && this.setOptions(e),
                !this.options.queryFn) {
                    let e = this.observers.find(e => e.options.queryFn);
                    e && this.setOptions(e.options)
                }
                let n = new AbortController
                  , i = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#w = !0,
                        n.signal)
                    })
                }
                  , o = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: () => {
                        let e = (0,
                        r.cG)(this.options, t)
                          , n = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return (i(n),
                        this.#w = !1,
                        this.options.persister) ? this.options.persister(e, n, this) : e(n)
                    }
                };
                i(o),
                this.options.behavior?.onFetch(o, this),
                this.#b = this.state,
                ("idle" === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) && this.#i({
                    type: "fetch",
                    meta: o.fetchOptions?.meta
                });
                let a = e => {
                    (0,
                    s.DV)(e) && e.silent || this.#i({
                        type: "error",
                        error: e
                    }),
                    (0,
                    s.DV)(e) || (this.#y.config.onError?.(e, this),
                    this.#y.config.onSettled?.(this.state.data, e, this)),
                    this.scheduleGc()
                }
                ;
                return this.#r = (0,
                s.Mz)({
                    initialPromise: t?.initialPromise,
                    fn: o.fetchFn,
                    abort: n.abort.bind(n),
                    onSuccess: e => {
                        if (void 0 === e) {
                            a(Error(`${this.queryHash} data is undefined`));
                            return
                        }
                        try {
                            this.setData(e)
                        } catch (e) {
                            a(e);
                            return
                        }
                        this.#y.config.onSuccess?.(e, this),
                        this.#y.config.onSettled?.(e, this.state.error, this),
                        this.scheduleGc()
                    }
                    ,
                    onError: a,
                    onFail: (e, t) => {
                        this.#i({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    }
                    ,
                    onPause: () => {
                        this.#i({
                            type: "pause"
                        })
                    }
                    ,
                    onContinue: () => {
                        this.#i({
                            type: "continue"
                        })
                    }
                    ,
                    retry: o.options.retry,
                    retryDelay: o.options.retryDelay,
                    networkMode: o.options.networkMode,
                    canRun: () => !0
                }),
                this.#r.start()
            }
            #i(e) {
                this.state = (t => {
                    switch (e.type) {
                    case "failed":
                        return {
                            ...t,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...t,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...t,
                            ...l(t.data, this.options),
                            fetchMeta: e.meta ?? null
                        };
                    case "success":
                        return {
                            ...t,
                            data: e.data,
                            dataUpdateCount: t.dataUpdateCount + 1,
                            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        let n = e.error;
                        if ((0,
                        s.DV)(n) && n.revert && this.#b)
                            return {
                                ...this.#b,
                                fetchStatus: "idle"
                            };
                        return {
                            ...t,
                            error: n,
                            errorUpdateCount: t.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: t.fetchFailureCount + 1,
                            fetchFailureReason: n,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...t,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...t,
                            ...e.state
                        }
                    }
                }
                )(this.state),
                i.V.batch( () => {
                    this.observers.forEach(e => {
                        e.onQueryUpdate()
                    }
                    ),
                    this.#y.notify({
                        query: this,
                        type: "updated",
                        action: e
                    })
                }
                )
            }
        }
        ;
        function l(e, t) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0,
                s.Kw)(t.networkMode) ? "fetching" : "paused",
                ...void 0 === e && {
                    error: null,
                    status: "pending"
                }
            }
        }
    },
    48907: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return i
            }
        });
        var r = n(24139)
          , i = class {
            #k;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(),
                (0,
                r.PN)(this.gcTime) && (this.#k = setTimeout( () => {
                    this.optionalRemove()
                }
                , this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (r.sk ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                this.#k && (clearTimeout(this.#k),
                this.#k = void 0)
            }
        }
    },
    72008: function(e, t, n) {
        "use strict";
        n.d(t, {
            DV: function() {
                return c
            },
            Kw: function() {
                return l
            },
            Mz: function() {
                return d
            }
        });
        var r = n(66474)
          , i = n(14304)
          , s = n(13820)
          , o = n(24139);
        function a(e) {
            return Math.min(1e3 * 2 ** e, 3e4)
        }
        function l(e) {
            return (e ?? "online") !== "online" || i.N.isOnline()
        }
        var u = class extends Error {
            constructor(e) {
                super("CancelledError"),
                this.revert = e?.revert,
                this.silent = e?.silent
            }
        }
        ;
        function c(e) {
            return e instanceof u
        }
        function d(e) {
            let t, n = !1, c = 0, d = !1, f = (0,
            s.O)(), h = () => r.j.isFocused() && ("always" === e.networkMode || i.N.isOnline()) && e.canRun(), p = () => l(e.networkMode) && e.canRun(), _ = n => {
                d || (d = !0,
                e.onSuccess?.(n),
                t?.(),
                f.resolve(n))
            }
            , m = n => {
                d || (d = !0,
                e.onError?.(n),
                t?.(),
                f.reject(n))
            }
            , g = () => new Promise(n => {
                t = e => {
                    (d || h()) && n(e)
                }
                ,
                e.onPause?.()
            }
            ).then( () => {
                t = void 0,
                d || e.onContinue?.()
            }
            ), v = () => {
                let t;
                if (d)
                    return;
                let r = 0 === c ? e.initialPromise : void 0;
                try {
                    t = r ?? e.fn()
                } catch (e) {
                    t = Promise.reject(e)
                }
                Promise.resolve(t).then(_).catch(t => {
                    if (d)
                        return;
                    let r = e.retry ?? (o.sk ? 0 : 3)
                      , i = e.retryDelay ?? a
                      , s = "function" == typeof i ? i(c, t) : i
                      , l = !0 === r || "number" == typeof r && c < r || "function" == typeof r && r(c, t);
                    if (n || !l) {
                        m(t);
                        return
                    }
                    c++,
                    e.onFail?.(c, t),
                    (0,
                    o._v)(s).then( () => h() ? void 0 : g()).then( () => {
                        n ? m(t) : v()
                    }
                    )
                }
                )
            }
            ;
            return {
                promise: f,
                cancel: t => {
                    d || (m(new u(t)),
                    e.abort?.())
                }
                ,
                continue: () => (t?.(),
                f),
                cancelRetry: () => {
                    n = !0
                }
                ,
                continueRetry: () => {
                    n = !1
                }
                ,
                canStart: p,
                start: () => (p() ? v() : g().then(v),
                f)
            }
        }
    },
    7506: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return r
            }
        });
        var r = class {
            constructor() {
                this.listeners = new Set,
                this.subscribe = this.subscribe.bind(this)
            }
            subscribe(e) {
                return this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e),
                    this.onUnsubscribe()
                }
            }
            hasListeners() {
                return this.listeners.size > 0
            }
            onSubscribe() {}
            onUnsubscribe() {}
        }
    },
    13820: function(e, t, n) {
        "use strict";
        function r() {
            let e, t;
            let n = new Promise( (n, r) => {
                e = n,
                t = r
            }
            );
            function r(e) {
                Object.assign(n, e),
                delete n.resolve,
                delete n.reject
            }
            return n.status = "pending",
            n.catch( () => {}
            ),
            n.resolve = t => {
                r({
                    status: "fulfilled",
                    value: t
                }),
                e(t)
            }
            ,
            n.reject = e => {
                r({
                    status: "rejected",
                    reason: e
                }),
                t(e)
            }
            ,
            n
        }
        n.d(t, {
            O: function() {
                return r
            }
        })
    },
    24139: function(e, t, n) {
        "use strict";
        n.d(t, {
            CN: function() {
                return x
            },
            Ht: function() {
                return k
            },
            KC: function() {
                return l
            },
            Kp: function() {
                return a
            },
            Nc: function() {
                return u
            },
            PN: function() {
                return o
            },
            Rm: function() {
                return f
            },
            SE: function() {
                return s
            },
            VS: function() {
                return _
            },
            VX: function() {
                return w
            },
            X7: function() {
                return d
            },
            Ym: function() {
                return h
            },
            ZT: function() {
                return i
            },
            _v: function() {
                return b
            },
            _x: function() {
                return c
            },
            cG: function() {
                return j
            },
            oE: function() {
                return y
            },
            sk: function() {
                return r
            },
            to: function() {
                return p
            }
        });
        var r = "undefined" == typeof window || "Deno"in globalThis;
        function i() {}
        function s(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function o(e) {
            return "number" == typeof e && e >= 0 && e !== 1 / 0
        }
        function a(e, t) {
            return Math.max(e + (t || 0) - Date.now(), 0)
        }
        function l(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function u(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function c(e, t) {
            let {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
            if (o) {
                if (r) {
                    if (t.queryHash !== f(o, t.options))
                        return !1
                } else if (!p(t.queryKey, o))
                    return !1
            }
            if ("all" !== n) {
                let e = t.isActive();
                if ("active" === n && !e || "inactive" === n && e)
                    return !1
            }
            return ("boolean" != typeof a || t.isStale() === a) && (!i || i === t.state.fetchStatus) && (!s || !!s(t))
        }
        function d(e, t) {
            let {exact: n, status: r, predicate: i, mutationKey: s} = e;
            if (s) {
                if (!t.options.mutationKey)
                    return !1;
                if (n) {
                    if (h(t.options.mutationKey) !== h(s))
                        return !1
                } else if (!p(t.options.mutationKey, s))
                    return !1
            }
            return (!r || t.state.status === r) && (!i || !!i(t))
        }
        function f(e, t) {
            return (t?.queryKeyHashFn || h)(e)
        }
        function h(e) {
            return JSON.stringify(e, (e, t) => g(t) ? Object.keys(t).sort().reduce( (e, n) => (e[n] = t[n],
            e), {}) : t)
        }
        function p(e, t) {
            return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(n => !p(e[n], t[n]))
        }
        function _(e, t) {
            if (!t || Object.keys(e).length !== Object.keys(t).length)
                return !1;
            for (let n in e)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function m(e) {
            return Array.isArray(e) && e.length === Object.keys(e).length
        }
        function g(e) {
            if (!v(e))
                return !1;
            let t = e.constructor;
            if (void 0 === t)
                return !0;
            let n = t.prototype;
            return !!(v(n) && n.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(e) === Object.prototype
        }
        function v(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
        function b(e) {
            return new Promise(t => {
                setTimeout(t, e)
            }
            )
        }
        function y(e, t, n) {
            return "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? function e(t, n) {
                if (t === n)
                    return t;
                let r = m(t) && m(n);
                if (r || g(t) && g(n)) {
                    let i = r ? t : Object.keys(t)
                      , s = i.length
                      , o = r ? n : Object.keys(n)
                      , a = o.length
                      , l = r ? [] : {}
                      , u = 0;
                    for (let s = 0; s < a; s++) {
                        let a = r ? s : o[s];
                        (!r && i.includes(a) || r) && void 0 === t[a] && void 0 === n[a] ? (l[a] = void 0,
                        u++) : (l[a] = e(t[a], n[a]),
                        l[a] === t[a] && void 0 !== t[a] && u++)
                    }
                    return s === a && u === s ? t : l
                }
                return n
            }(e, t) : t
        }
        function w(e, t, n=0) {
            let r = [...e, t];
            return n && r.length > n ? r.slice(1) : r
        }
        function k(e, t, n=0) {
            let r = [t, ...e];
            return n && r.length > n ? r.slice(0, -1) : r
        }
        var x = Symbol();
        function j(e, t) {
            return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== x ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
        }
    },
    30202: function(e, t, n) {
        "use strict";
        n.d(t, {
            NL: function() {
                return o
            },
            aH: function() {
                return a
            }
        });
        var r = n(67294)
          , i = n(85893)
          , s = r.createContext(void 0)
          , o = e => {
            let t = r.useContext(s);
            if (e)
                return e;
            if (!t)
                throw Error("No QueryClient set, use QueryClientProvider to set one");
            return t
        }
          , a = ({client: e, children: t}) => (r.useEffect( () => (e.mount(),
        () => {
            e.unmount()
        }
        ), [e]),
        (0,
        i.jsx)(s.Provider, {
            value: e,
            children: t
        }))
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(6840),
        t(26036)
    }),
    _N_E = e.O()
}
]);

