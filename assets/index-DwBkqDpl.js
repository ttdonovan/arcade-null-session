const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CJvpjUwQ.js","assets/v4-CcdklTb9.js","assets/index-JK_s47DD.js"])))=>i.map(i=>d[i]);
let EventEmitter, PublicKey, SolanaSignAndSendTransaction, Transaction, VersionedTransaction, SolanaSignTransaction, SolanaSignMessage, getDefaultExportFromCjs;
let __tla = (async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);
        new MutationObserver((s)=>{
            for (const o of s)if (o.type === "childList") for (const l of o.addedNodes)l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(s) {
            const o = {};
            return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function r(s) {
            if (s.ep) return;
            s.ep = !0;
            const o = n(s);
            fetch(s.href, o);
        }
    })();
    getDefaultExportFromCjs = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    function getAugmentedNamespace(e) {
        if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
        var t = e.default;
        if (typeof t == "function") {
            var n = function r() {
                return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
            };
            n.prototype = t.prototype;
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var s = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return e[r];
                }
            });
        }), n;
    }
    var eventemitter3 = {
        exports: {}
    }, hasRequiredEventemitter3;
    function requireEventemitter3() {
        return hasRequiredEventemitter3 || (hasRequiredEventemitter3 = 1, (function(e) {
            var t = Object.prototype.hasOwnProperty, n = "~";
            function r() {}
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));
            function s(p, v, B) {
                this.fn = p, this.context = v, this.once = B || !1;
            }
            function o(p, v, B, T, A) {
                if (typeof B != "function") throw new TypeError("The listener must be a function");
                var L = new s(B, T || p, A), N = n ? n + v : v;
                return p._events[N] ? p._events[N].fn ? p._events[N] = [
                    p._events[N],
                    L
                ] : p._events[N].push(L) : (p._events[N] = L, p._eventsCount++), p;
            }
            function l(p, v) {
                --p._eventsCount === 0 ? p._events = new r : delete p._events[v];
            }
            function _() {
                this._events = new r, this._eventsCount = 0;
            }
            _.prototype.eventNames = function() {
                var v = [], B, T;
                if (this._eventsCount === 0) return v;
                for(T in B = this._events)t.call(B, T) && v.push(n ? T.slice(1) : T);
                return Object.getOwnPropertySymbols ? v.concat(Object.getOwnPropertySymbols(B)) : v;
            }, _.prototype.listeners = function(v) {
                var B = n ? n + v : v, T = this._events[B];
                if (!T) return [];
                if (T.fn) return [
                    T.fn
                ];
                for(var A = 0, L = T.length, N = new Array(L); A < L; A++)N[A] = T[A].fn;
                return N;
            }, _.prototype.listenerCount = function(v) {
                var B = n ? n + v : v, T = this._events[B];
                return T ? T.fn ? 1 : T.length : 0;
            }, _.prototype.emit = function(v, B, T, A, L, N) {
                var R = n ? n + v : v;
                if (!this._events[R]) return !1;
                var U = this._events[R], z = arguments.length, G, H;
                if (U.fn) {
                    switch(U.once && this.removeListener(v, U.fn, void 0, !0), z){
                        case 1:
                            return U.fn.call(U.context), !0;
                        case 2:
                            return U.fn.call(U.context, B), !0;
                        case 3:
                            return U.fn.call(U.context, B, T), !0;
                        case 4:
                            return U.fn.call(U.context, B, T, A), !0;
                        case 5:
                            return U.fn.call(U.context, B, T, A, L), !0;
                        case 6:
                            return U.fn.call(U.context, B, T, A, L, N), !0;
                    }
                    for(H = 1, G = new Array(z - 1); H < z; H++)G[H - 1] = arguments[H];
                    U.fn.apply(U.context, G);
                } else {
                    var Y = U.length, $;
                    for(H = 0; H < Y; H++)switch(U[H].once && this.removeListener(v, U[H].fn, void 0, !0), z){
                        case 1:
                            U[H].fn.call(U[H].context);
                            break;
                        case 2:
                            U[H].fn.call(U[H].context, B);
                            break;
                        case 3:
                            U[H].fn.call(U[H].context, B, T);
                            break;
                        case 4:
                            U[H].fn.call(U[H].context, B, T, A);
                            break;
                        default:
                            if (!G) for($ = 1, G = new Array(z - 1); $ < z; $++)G[$ - 1] = arguments[$];
                            U[H].fn.apply(U[H].context, G);
                    }
                }
                return !0;
            }, _.prototype.on = function(v, B, T) {
                return o(this, v, B, T, !1);
            }, _.prototype.once = function(v, B, T) {
                return o(this, v, B, T, !0);
            }, _.prototype.removeListener = function(v, B, T, A) {
                var L = n ? n + v : v;
                if (!this._events[L]) return this;
                if (!B) return l(this, L), this;
                var N = this._events[L];
                if (N.fn) N.fn === B && (!A || N.once) && (!T || N.context === T) && l(this, L);
                else {
                    for(var R = 0, U = [], z = N.length; R < z; R++)(N[R].fn !== B || A && !N[R].once || T && N[R].context !== T) && U.push(N[R]);
                    U.length ? this._events[L] = U.length === 1 ? U[0] : U : l(this, L);
                }
                return this;
            }, _.prototype.removeAllListeners = function(v) {
                var B;
                return v ? (B = n ? n + v : v, this._events[B] && l(this, B)) : (this._events = new r, this._eventsCount = 0), this;
            }, _.prototype.off = _.prototype.removeListener, _.prototype.addListener = _.prototype.on, _.prefixed = n, _.EventEmitter = _, e.exports = _;
        })(eventemitter3)), eventemitter3.exports;
    }
    var eventemitter3Exports = requireEventemitter3();
    EventEmitter = getDefaultExportFromCjs(eventemitter3Exports);
    class WalletError extends Error {
        constructor(t, n){
            super(t), this.error = n;
        }
    }
    class WalletNotReadyError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletNotReadyError";
        }
    }
    class WalletLoadError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletLoadError";
        }
    }
    class WalletConfigError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletConfigError";
        }
    }
    class WalletConnectionError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletConnectionError";
        }
    }
    class WalletDisconnectedError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletDisconnectedError";
        }
    }
    class WalletDisconnectionError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletDisconnectionError";
        }
    }
    class WalletAccountError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletAccountError";
        }
    }
    class WalletPublicKeyError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletPublicKeyError";
        }
    }
    class WalletNotConnectedError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletNotConnectedError";
        }
    }
    class WalletSendTransactionError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletSendTransactionError";
        }
    }
    class WalletSignTransactionError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletSignTransactionError";
        }
    }
    class WalletSignMessageError extends WalletError {
        constructor(){
            super(...arguments), this.name = "WalletSignMessageError";
        }
    }
    var WalletReadyState;
    (function(e) {
        e.Installed = "Installed", e.NotDetected = "NotDetected", e.Loadable = "Loadable", e.Unsupported = "Unsupported";
    })(WalletReadyState || (WalletReadyState = {}));
    class BaseWalletAdapter extends EventEmitter {
        get connected() {
            return !!this.publicKey;
        }
        async autoConnect() {
            await this.connect();
        }
        async prepareTransaction(t, n, r = {}) {
            const s = this.publicKey;
            if (!s) throw new WalletNotConnectedError;
            return t.feePayer = t.feePayer || s, t.recentBlockhash = t.recentBlockhash || (await n.getLatestBlockhash({
                commitment: r.preflightCommitment,
                minContextSlot: r.minContextSlot
            })).blockhash, t;
        }
    }
    function scopePollingDetectionStrategy(e) {
        if (typeof window > "u" || typeof document > "u") return;
        const t = [];
        function n() {
            if (e()) for (const o of t)o();
        }
        const r = setInterval(n, 1e3);
        t.push(()=>clearInterval(r)), document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", n, {
            once: !0
        }), t.push(()=>document.removeEventListener("DOMContentLoaded", n))), document.readyState !== "complete" && (window.addEventListener("load", n, {
            once: !0
        }), t.push(()=>window.removeEventListener("load", n))), n();
    }
    function isIosAndRedirectable() {
        if (!navigator) return !1;
        const e = navigator.userAgent.toLowerCase(), t = e.includes("iphone") || e.includes("ipad"), n = e.includes("safari");
        return t && n;
    }
    function isVersionedTransaction(e) {
        return "version" in e;
    }
    class BaseSignerWalletAdapter extends BaseWalletAdapter {
        async sendTransaction(t, n, r = {}) {
            let s = !0;
            try {
                if (isVersionedTransaction(t)) {
                    if (!this.supportedTransactionVersions) throw new WalletSendTransactionError("Sending versioned transactions isn't supported by this wallet");
                    if (!this.supportedTransactionVersions.has(t.version)) throw new WalletSendTransactionError(`Sending transaction version ${t.version} isn't supported by this wallet`);
                    try {
                        t = await this.signTransaction(t);
                        const o = t.serialize();
                        return await n.sendRawTransaction(o, r);
                    } catch (o) {
                        throw o instanceof WalletSignTransactionError ? (s = !1, o) : new WalletSendTransactionError(o?.message, o);
                    }
                } else try {
                    const { signers: o, ...l } = r;
                    t = await this.prepareTransaction(t, n, l), o?.length && t.partialSign(...o), t = await this.signTransaction(t);
                    const _ = t.serialize();
                    return await n.sendRawTransaction(_, l);
                } catch (o) {
                    throw o instanceof WalletSignTransactionError ? (s = !1, o) : new WalletSendTransactionError(o?.message, o);
                }
            } catch (o) {
                throw s && this.emit("error", o), o;
            }
        }
        async signAllTransactions(t) {
            for (const r of t)if (isVersionedTransaction(r)) {
                if (!this.supportedTransactionVersions) throw new WalletSignTransactionError("Signing versioned transactions isn't supported by this wallet");
                if (!this.supportedTransactionVersions.has(r.version)) throw new WalletSignTransactionError(`Signing transaction version ${r.version} isn't supported by this wallet`);
            }
            const n = [];
            for (const r of t)n.push(await this.signTransaction(r));
            return n;
        }
    }
    class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
    }
    let StandardConnect, StandardDisconnect, StandardEvents;
    SolanaSignAndSendTransaction = "solana:signAndSendTransaction";
    SolanaSignMessage = "solana:signMessage";
    SolanaSignTransaction = "solana:signTransaction";
    StandardConnect = "standard:connect";
    StandardDisconnect = "standard:disconnect";
    StandardEvents = "standard:events";
    var buffer = {}, base64Js = {}, hasRequiredBase64Js;
    function requireBase64Js() {
        if (hasRequiredBase64Js) return base64Js;
        hasRequiredBase64Js = 1, base64Js.byteLength = _, base64Js.toByteArray = v, base64Js.fromByteArray = A;
        for(var e = [], t = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, o = r.length; s < o; ++s)e[s] = r[s], t[r.charCodeAt(s)] = s;
        t[45] = 62, t[95] = 63;
        function l(L) {
            var N = L.length;
            if (N % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var R = L.indexOf("=");
            R === -1 && (R = N);
            var U = R === N ? 0 : 4 - R % 4;
            return [
                R,
                U
            ];
        }
        function _(L) {
            var N = l(L), R = N[0], U = N[1];
            return (R + U) * 3 / 4 - U;
        }
        function p(L, N, R) {
            return (N + R) * 3 / 4 - R;
        }
        function v(L) {
            var N, R = l(L), U = R[0], z = R[1], G = new n(p(L, U, z)), H = 0, Y = z > 0 ? U - 4 : U, $;
            for($ = 0; $ < Y; $ += 4)N = t[L.charCodeAt($)] << 18 | t[L.charCodeAt($ + 1)] << 12 | t[L.charCodeAt($ + 2)] << 6 | t[L.charCodeAt($ + 3)], G[H++] = N >> 16 & 255, G[H++] = N >> 8 & 255, G[H++] = N & 255;
            return z === 2 && (N = t[L.charCodeAt($)] << 2 | t[L.charCodeAt($ + 1)] >> 4, G[H++] = N & 255), z === 1 && (N = t[L.charCodeAt($)] << 10 | t[L.charCodeAt($ + 1)] << 4 | t[L.charCodeAt($ + 2)] >> 2, G[H++] = N >> 8 & 255, G[H++] = N & 255), G;
        }
        function B(L) {
            return e[L >> 18 & 63] + e[L >> 12 & 63] + e[L >> 6 & 63] + e[L & 63];
        }
        function T(L, N, R) {
            for(var U, z = [], G = N; G < R; G += 3)U = (L[G] << 16 & 16711680) + (L[G + 1] << 8 & 65280) + (L[G + 2] & 255), z.push(B(U));
            return z.join("");
        }
        function A(L) {
            for(var N, R = L.length, U = R % 3, z = [], G = 16383, H = 0, Y = R - U; H < Y; H += G)z.push(T(L, H, H + G > Y ? Y : H + G));
            return U === 1 ? (N = L[R - 1], z.push(e[N >> 2] + e[N << 4 & 63] + "==")) : U === 2 && (N = (L[R - 2] << 8) + L[R - 1], z.push(e[N >> 10] + e[N >> 4 & 63] + e[N << 2 & 63] + "=")), z.join("");
        }
        return base64Js;
    }
    var ieee754 = {};
    var hasRequiredIeee754;
    function requireIeee754() {
        return hasRequiredIeee754 || (hasRequiredIeee754 = 1, ieee754.read = function(e, t, n, r, s) {
            var o, l, _ = s * 8 - r - 1, p = (1 << _) - 1, v = p >> 1, B = -7, T = n ? s - 1 : 0, A = n ? -1 : 1, L = e[t + T];
            for(T += A, o = L & (1 << -B) - 1, L >>= -B, B += _; B > 0; o = o * 256 + e[t + T], T += A, B -= 8);
            for(l = o & (1 << -B) - 1, o >>= -B, B += r; B > 0; l = l * 256 + e[t + T], T += A, B -= 8);
            if (o === 0) o = 1 - v;
            else {
                if (o === p) return l ? NaN : (L ? -1 : 1) * (1 / 0);
                l = l + Math.pow(2, r), o = o - v;
            }
            return (L ? -1 : 1) * l * Math.pow(2, o - r);
        }, ieee754.write = function(e, t, n, r, s, o) {
            var l, _, p, v = o * 8 - s - 1, B = (1 << v) - 1, T = B >> 1, A = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, L = r ? 0 : o - 1, N = r ? 1 : -1, R = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
            for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (_ = isNaN(t) ? 1 : 0, l = B) : (l = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -l)) < 1 && (l--, p *= 2), l + T >= 1 ? t += A / p : t += A * Math.pow(2, 1 - T), t * p >= 2 && (l++, p /= 2), l + T >= B ? (_ = 0, l = B) : l + T >= 1 ? (_ = (t * p - 1) * Math.pow(2, s), l = l + T) : (_ = t * Math.pow(2, T - 1) * Math.pow(2, s), l = 0)); s >= 8; e[n + L] = _ & 255, L += N, _ /= 256, s -= 8);
            for(l = l << s | _, v += s; v > 0; e[n + L] = l & 255, L += N, l /= 256, v -= 8);
            e[n + L - N] |= R * 128;
        }), ieee754;
    }
    var hasRequiredBuffer;
    function requireBuffer() {
        return hasRequiredBuffer || (hasRequiredBuffer = 1, (function(e) {
            const t = requireBase64Js(), n = requireIeee754(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.Buffer = _, e.SlowBuffer = G, e.INSPECT_MAX_BYTES = 50;
            const s = 2147483647;
            e.kMaxLength = s, _.TYPED_ARRAY_SUPPORT = o(), !_.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function o() {
                try {
                    const m = new Uint8Array(1), d = {
                        foo: function() {
                            return 42;
                        }
                    };
                    return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(m, d), m.foo() === 42;
                } catch  {
                    return !1;
                }
            }
            Object.defineProperty(_.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (_.isBuffer(this)) return this.buffer;
                }
            }), Object.defineProperty(_.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (_.isBuffer(this)) return this.byteOffset;
                }
            });
            function l(m) {
                if (m > s) throw new RangeError('The value "' + m + '" is invalid for option "size"');
                const d = new Uint8Array(m);
                return Object.setPrototypeOf(d, _.prototype), d;
            }
            function _(m, d, g) {
                if (typeof m == "number") {
                    if (typeof d == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return T(m);
                }
                return p(m, d, g);
            }
            _.poolSize = 8192;
            function p(m, d, g) {
                if (typeof m == "string") return A(m, d);
                if (ArrayBuffer.isView(m)) return N(m);
                if (m == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m);
                if (ke(m, ArrayBuffer) || m && ke(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ke(m, SharedArrayBuffer) || m && ke(m.buffer, SharedArrayBuffer))) return R(m, d, g);
                if (typeof m == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const M = m.valueOf && m.valueOf();
                if (M != null && M !== m) return _.from(M, d, g);
                const C = U(m);
                if (C) return C;
                if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function") return _.from(m[Symbol.toPrimitive]("string"), d, g);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m);
            }
            _.from = function(m, d, g) {
                return p(m, d, g);
            }, Object.setPrototypeOf(_.prototype, Uint8Array.prototype), Object.setPrototypeOf(_, Uint8Array);
            function v(m) {
                if (typeof m != "number") throw new TypeError('"size" argument must be of type number');
                if (m < 0) throw new RangeError('The value "' + m + '" is invalid for option "size"');
            }
            function B(m, d, g) {
                return v(m), m <= 0 ? l(m) : d !== void 0 ? typeof g == "string" ? l(m).fill(d, g) : l(m).fill(d) : l(m);
            }
            _.alloc = function(m, d, g) {
                return B(m, d, g);
            };
            function T(m) {
                return v(m), l(m < 0 ? 0 : z(m) | 0);
            }
            _.allocUnsafe = function(m) {
                return T(m);
            }, _.allocUnsafeSlow = function(m) {
                return T(m);
            };
            function A(m, d) {
                if ((typeof d != "string" || d === "") && (d = "utf8"), !_.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
                const g = H(m, d) | 0;
                let M = l(g);
                const C = M.write(m, d);
                return C !== g && (M = M.slice(0, C)), M;
            }
            function L(m) {
                const d = m.length < 0 ? 0 : z(m.length) | 0, g = l(d);
                for(let M = 0; M < d; M += 1)g[M] = m[M] & 255;
                return g;
            }
            function N(m) {
                if (ke(m, Uint8Array)) {
                    const d = new Uint8Array(m);
                    return R(d.buffer, d.byteOffset, d.byteLength);
                }
                return L(m);
            }
            function R(m, d, g) {
                if (d < 0 || m.byteLength < d) throw new RangeError('"offset" is outside of buffer bounds');
                if (m.byteLength < d + (g || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let M;
                return d === void 0 && g === void 0 ? M = new Uint8Array(m) : g === void 0 ? M = new Uint8Array(m, d) : M = new Uint8Array(m, d, g), Object.setPrototypeOf(M, _.prototype), M;
            }
            function U(m) {
                if (_.isBuffer(m)) {
                    const d = z(m.length) | 0, g = l(d);
                    return g.length === 0 || m.copy(g, 0, 0, d), g;
                }
                if (m.length !== void 0) return typeof m.length != "number" || de(m.length) ? l(0) : L(m);
                if (m.type === "Buffer" && Array.isArray(m.data)) return L(m.data);
            }
            function z(m) {
                if (m >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return m | 0;
            }
            function G(m) {
                return +m != m && (m = 0), _.alloc(+m);
            }
            _.isBuffer = function(d) {
                return d != null && d._isBuffer === !0 && d !== _.prototype;
            }, _.compare = function(d, g) {
                if (ke(d, Uint8Array) && (d = _.from(d, d.offset, d.byteLength)), ke(g, Uint8Array) && (g = _.from(g, g.offset, g.byteLength)), !_.isBuffer(d) || !_.isBuffer(g)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (d === g) return 0;
                let M = d.length, C = g.length;
                for(let W = 0, V = Math.min(M, C); W < V; ++W)if (d[W] !== g[W]) {
                    M = d[W], C = g[W];
                    break;
                }
                return M < C ? -1 : C < M ? 1 : 0;
            }, _.isEncoding = function(d) {
                switch(String(d).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1;
                }
            }, _.concat = function(d, g) {
                if (!Array.isArray(d)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (d.length === 0) return _.alloc(0);
                let M;
                if (g === void 0) for(g = 0, M = 0; M < d.length; ++M)g += d[M].length;
                const C = _.allocUnsafe(g);
                let W = 0;
                for(M = 0; M < d.length; ++M){
                    let V = d[M];
                    if (ke(V, Uint8Array)) W + V.length > C.length ? (_.isBuffer(V) || (V = _.from(V)), V.copy(C, W)) : Uint8Array.prototype.set.call(C, V, W);
                    else if (_.isBuffer(V)) V.copy(C, W);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    W += V.length;
                }
                return C;
            };
            function H(m, d) {
                if (_.isBuffer(m)) return m.length;
                if (ArrayBuffer.isView(m) || ke(m, ArrayBuffer)) return m.byteLength;
                if (typeof m != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m);
                const g = m.length, M = arguments.length > 2 && arguments[2] === !0;
                if (!M && g === 0) return 0;
                let C = !1;
                for(;;)switch(d){
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return g;
                    case "utf8":
                    case "utf-8":
                        return le(m).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return g * 2;
                    case "hex":
                        return g >>> 1;
                    case "base64":
                        return he(m).length;
                    default:
                        if (C) return M ? -1 : le(m).length;
                        d = ("" + d).toLowerCase(), C = !0;
                }
            }
            _.byteLength = H;
            function Y(m, d, g) {
                let M = !1;
                if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, d >>>= 0, g <= d)) return "";
                for(m || (m = "utf8");;)switch(m){
                    case "hex":
                        return j(this, d, g);
                    case "utf8":
                    case "utf-8":
                        return a(this, d, g);
                    case "ascii":
                        return E(this, d, g);
                    case "latin1":
                    case "binary":
                        return S(this, d, g);
                    case "base64":
                        return y(this, d, g);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, d, g);
                    default:
                        if (M) throw new TypeError("Unknown encoding: " + m);
                        m = (m + "").toLowerCase(), M = !0;
                }
            }
            _.prototype._isBuffer = !0;
            function $(m, d, g) {
                const M = m[d];
                m[d] = m[g], m[g] = M;
            }
            _.prototype.swap16 = function() {
                const d = this.length;
                if (d % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for(let g = 0; g < d; g += 2)$(this, g, g + 1);
                return this;
            }, _.prototype.swap32 = function() {
                const d = this.length;
                if (d % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for(let g = 0; g < d; g += 4)$(this, g, g + 3), $(this, g + 1, g + 2);
                return this;
            }, _.prototype.swap64 = function() {
                const d = this.length;
                if (d % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for(let g = 0; g < d; g += 8)$(this, g, g + 7), $(this, g + 1, g + 6), $(this, g + 2, g + 5), $(this, g + 3, g + 4);
                return this;
            }, _.prototype.toString = function() {
                const d = this.length;
                return d === 0 ? "" : arguments.length === 0 ? a(this, 0, d) : Y.apply(this, arguments);
            }, _.prototype.toLocaleString = _.prototype.toString, _.prototype.equals = function(d) {
                if (!_.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
                return this === d ? !0 : _.compare(this, d) === 0;
            }, _.prototype.inspect = function() {
                let d = "";
                const g = e.INSPECT_MAX_BYTES;
                return d = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (d += " ... "), "<Buffer " + d + ">";
            }, r && (_.prototype[r] = _.prototype.inspect), _.prototype.compare = function(d, g, M, C, W) {
                if (ke(d, Uint8Array) && (d = _.from(d, d.offset, d.byteLength)), !_.isBuffer(d)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d);
                if (g === void 0 && (g = 0), M === void 0 && (M = d ? d.length : 0), C === void 0 && (C = 0), W === void 0 && (W = this.length), g < 0 || M > d.length || C < 0 || W > this.length) throw new RangeError("out of range index");
                if (C >= W && g >= M) return 0;
                if (C >= W) return -1;
                if (g >= M) return 1;
                if (g >>>= 0, M >>>= 0, C >>>= 0, W >>>= 0, this === d) return 0;
                let V = W - C, oe = M - g;
                const re = Math.min(V, oe), ne = this.slice(C, W), fe = d.slice(g, M);
                for(let ee = 0; ee < re; ++ee)if (ne[ee] !== fe[ee]) {
                    V = ne[ee], oe = fe[ee];
                    break;
                }
                return V < oe ? -1 : oe < V ? 1 : 0;
            };
            function X(m, d, g, M, C) {
                if (m.length === 0) return -1;
                if (typeof g == "string" ? (M = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, de(g) && (g = C ? 0 : m.length - 1), g < 0 && (g = m.length + g), g >= m.length) {
                    if (C) return -1;
                    g = m.length - 1;
                } else if (g < 0) if (C) g = 0;
                else return -1;
                if (typeof d == "string" && (d = _.from(d, M)), _.isBuffer(d)) return d.length === 0 ? -1 : te(m, d, g, M, C);
                if (typeof d == "number") return d = d & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(m, d, g) : Uint8Array.prototype.lastIndexOf.call(m, d, g) : te(m, [
                    d
                ], g, M, C);
                throw new TypeError("val must be string, number or Buffer");
            }
            function te(m, d, g, M, C) {
                let W = 1, V = m.length, oe = d.length;
                if (M !== void 0 && (M = String(M).toLowerCase(), M === "ucs2" || M === "ucs-2" || M === "utf16le" || M === "utf-16le")) {
                    if (m.length < 2 || d.length < 2) return -1;
                    W = 2, V /= 2, oe /= 2, g /= 2;
                }
                function re(fe, ee) {
                    return W === 1 ? fe[ee] : fe.readUInt16BE(ee * W);
                }
                let ne;
                if (C) {
                    let fe = -1;
                    for(ne = g; ne < V; ne++)if (re(m, ne) === re(d, fe === -1 ? 0 : ne - fe)) {
                        if (fe === -1 && (fe = ne), ne - fe + 1 === oe) return fe * W;
                    } else fe !== -1 && (ne -= ne - fe), fe = -1;
                } else for(g + oe > V && (g = V - oe), ne = g; ne >= 0; ne--){
                    let fe = !0;
                    for(let ee = 0; ee < oe; ee++)if (re(m, ne + ee) !== re(d, ee)) {
                        fe = !1;
                        break;
                    }
                    if (fe) return ne;
                }
                return -1;
            }
            _.prototype.includes = function(d, g, M) {
                return this.indexOf(d, g, M) !== -1;
            }, _.prototype.indexOf = function(d, g, M) {
                return X(this, d, g, M, !0);
            }, _.prototype.lastIndexOf = function(d, g, M) {
                return X(this, d, g, M, !1);
            };
            function J(m, d, g, M) {
                g = Number(g) || 0;
                const C = m.length - g;
                M ? (M = Number(M), M > C && (M = C)) : M = C;
                const W = d.length;
                M > W / 2 && (M = W / 2);
                let V;
                for(V = 0; V < M; ++V){
                    const oe = parseInt(d.substr(V * 2, 2), 16);
                    if (de(oe)) return V;
                    m[g + V] = oe;
                }
                return V;
            }
            function k(m, d, g, M) {
                return ue(le(d, m.length - g), m, g, M);
            }
            function D(m, d, g, M) {
                return ue(_e(d), m, g, M);
            }
            function P(m, d, g, M) {
                return ue(he(d), m, g, M);
            }
            function K(m, d, g, M) {
                return ue(Ue(d, m.length - g), m, g, M);
            }
            _.prototype.write = function(d, g, M, C) {
                if (g === void 0) C = "utf8", M = this.length, g = 0;
                else if (M === void 0 && typeof g == "string") C = g, M = this.length, g = 0;
                else if (isFinite(g)) g = g >>> 0, isFinite(M) ? (M = M >>> 0, C === void 0 && (C = "utf8")) : (C = M, M = void 0);
                else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const W = this.length - g;
                if ((M === void 0 || M > W) && (M = W), d.length > 0 && (M < 0 || g < 0) || g > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                C || (C = "utf8");
                let V = !1;
                for(;;)switch(C){
                    case "hex":
                        return J(this, d, g, M);
                    case "utf8":
                    case "utf-8":
                        return k(this, d, g, M);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return D(this, d, g, M);
                    case "base64":
                        return P(this, d, g, M);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return K(this, d, g, M);
                    default:
                        if (V) throw new TypeError("Unknown encoding: " + C);
                        C = ("" + C).toLowerCase(), V = !0;
                }
            }, _.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function y(m, d, g) {
                return d === 0 && g === m.length ? t.fromByteArray(m) : t.fromByteArray(m.slice(d, g));
            }
            function a(m, d, g) {
                g = Math.min(m.length, g);
                const M = [];
                let C = d;
                for(; C < g;){
                    const W = m[C];
                    let V = null, oe = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
                    if (C + oe <= g) {
                        let re, ne, fe, ee;
                        switch(oe){
                            case 1:
                                W < 128 && (V = W);
                                break;
                            case 2:
                                re = m[C + 1], (re & 192) === 128 && (ee = (W & 31) << 6 | re & 63, ee > 127 && (V = ee));
                                break;
                            case 3:
                                re = m[C + 1], ne = m[C + 2], (re & 192) === 128 && (ne & 192) === 128 && (ee = (W & 15) << 12 | (re & 63) << 6 | ne & 63, ee > 2047 && (ee < 55296 || ee > 57343) && (V = ee));
                                break;
                            case 4:
                                re = m[C + 1], ne = m[C + 2], fe = m[C + 3], (re & 192) === 128 && (ne & 192) === 128 && (fe & 192) === 128 && (ee = (W & 15) << 18 | (re & 63) << 12 | (ne & 63) << 6 | fe & 63, ee > 65535 && ee < 1114112 && (V = ee));
                        }
                    }
                    V === null ? (V = 65533, oe = 1) : V > 65535 && (V -= 65536, M.push(V >>> 10 & 1023 | 55296), V = 56320 | V & 1023), M.push(V), C += oe;
                }
                return b(M);
            }
            const h = 4096;
            function b(m) {
                const d = m.length;
                if (d <= h) return String.fromCharCode.apply(String, m);
                let g = "", M = 0;
                for(; M < d;)g += String.fromCharCode.apply(String, m.slice(M, M += h));
                return g;
            }
            function E(m, d, g) {
                let M = "";
                g = Math.min(m.length, g);
                for(let C = d; C < g; ++C)M += String.fromCharCode(m[C] & 127);
                return M;
            }
            function S(m, d, g) {
                let M = "";
                g = Math.min(m.length, g);
                for(let C = d; C < g; ++C)M += String.fromCharCode(m[C]);
                return M;
            }
            function j(m, d, g) {
                const M = m.length;
                (!d || d < 0) && (d = 0), (!g || g < 0 || g > M) && (g = M);
                let C = "";
                for(let W = d; W < g; ++W)C += be[m[W]];
                return C;
            }
            function I(m, d, g) {
                const M = m.slice(d, g);
                let C = "";
                for(let W = 0; W < M.length - 1; W += 2)C += String.fromCharCode(M[W] + M[W + 1] * 256);
                return C;
            }
            _.prototype.slice = function(d, g) {
                const M = this.length;
                d = ~~d, g = g === void 0 ? M : ~~g, d < 0 ? (d += M, d < 0 && (d = 0)) : d > M && (d = M), g < 0 ? (g += M, g < 0 && (g = 0)) : g > M && (g = M), g < d && (g = d);
                const C = this.subarray(d, g);
                return Object.setPrototypeOf(C, _.prototype), C;
            };
            function x(m, d, g) {
                if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
                if (m + d > g) throw new RangeError("Trying to access beyond buffer length");
            }
            _.prototype.readUintLE = _.prototype.readUIntLE = function(d, g, M) {
                d = d >>> 0, g = g >>> 0, M || x(d, g, this.length);
                let C = this[d], W = 1, V = 0;
                for(; ++V < g && (W *= 256);)C += this[d + V] * W;
                return C;
            }, _.prototype.readUintBE = _.prototype.readUIntBE = function(d, g, M) {
                d = d >>> 0, g = g >>> 0, M || x(d, g, this.length);
                let C = this[d + --g], W = 1;
                for(; g > 0 && (W *= 256);)C += this[d + --g] * W;
                return C;
            }, _.prototype.readUint8 = _.prototype.readUInt8 = function(d, g) {
                return d = d >>> 0, g || x(d, 1, this.length), this[d];
            }, _.prototype.readUint16LE = _.prototype.readUInt16LE = function(d, g) {
                return d = d >>> 0, g || x(d, 2, this.length), this[d] | this[d + 1] << 8;
            }, _.prototype.readUint16BE = _.prototype.readUInt16BE = function(d, g) {
                return d = d >>> 0, g || x(d, 2, this.length), this[d] << 8 | this[d + 1];
            }, _.prototype.readUint32LE = _.prototype.readUInt32LE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216;
            }, _.prototype.readUint32BE = _.prototype.readUInt32BE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]);
            }, _.prototype.readBigUInt64LE = De(function(d) {
                d = d >>> 0, Ce(d, "offset");
                const g = this[d], M = this[d + 7];
                (g === void 0 || M === void 0) && ce(d, this.length - 8);
                const C = g + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24, W = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + M * 2 ** 24;
                return BigInt(C) + (BigInt(W) << BigInt(32));
            }), _.prototype.readBigUInt64BE = De(function(d) {
                d = d >>> 0, Ce(d, "offset");
                const g = this[d], M = this[d + 7];
                (g === void 0 || M === void 0) && ce(d, this.length - 8);
                const C = g * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d], W = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + M;
                return (BigInt(C) << BigInt(32)) + BigInt(W);
            }), _.prototype.readIntLE = function(d, g, M) {
                d = d >>> 0, g = g >>> 0, M || x(d, g, this.length);
                let C = this[d], W = 1, V = 0;
                for(; ++V < g && (W *= 256);)C += this[d + V] * W;
                return W *= 128, C >= W && (C -= Math.pow(2, 8 * g)), C;
            }, _.prototype.readIntBE = function(d, g, M) {
                d = d >>> 0, g = g >>> 0, M || x(d, g, this.length);
                let C = g, W = 1, V = this[d + --C];
                for(; C > 0 && (W *= 256);)V += this[d + --C] * W;
                return W *= 128, V >= W && (V -= Math.pow(2, 8 * g)), V;
            }, _.prototype.readInt8 = function(d, g) {
                return d = d >>> 0, g || x(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
            }, _.prototype.readInt16LE = function(d, g) {
                d = d >>> 0, g || x(d, 2, this.length);
                const M = this[d] | this[d + 1] << 8;
                return M & 32768 ? M | 4294901760 : M;
            }, _.prototype.readInt16BE = function(d, g) {
                d = d >>> 0, g || x(d, 2, this.length);
                const M = this[d + 1] | this[d] << 8;
                return M & 32768 ? M | 4294901760 : M;
            }, _.prototype.readInt32LE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24;
            }, _.prototype.readInt32BE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3];
            }, _.prototype.readBigInt64LE = De(function(d) {
                d = d >>> 0, Ce(d, "offset");
                const g = this[d], M = this[d + 7];
                (g === void 0 || M === void 0) && ce(d, this.length - 8);
                const C = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (M << 24);
                return (BigInt(C) << BigInt(32)) + BigInt(g + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24);
            }), _.prototype.readBigInt64BE = De(function(d) {
                d = d >>> 0, Ce(d, "offset");
                const g = this[d], M = this[d + 7];
                (g === void 0 || M === void 0) && ce(d, this.length - 8);
                const C = (g << 24) + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
                return (BigInt(C) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + M);
            }), _.prototype.readFloatLE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), n.read(this, d, !0, 23, 4);
            }, _.prototype.readFloatBE = function(d, g) {
                return d = d >>> 0, g || x(d, 4, this.length), n.read(this, d, !1, 23, 4);
            }, _.prototype.readDoubleLE = function(d, g) {
                return d = d >>> 0, g || x(d, 8, this.length), n.read(this, d, !0, 52, 8);
            }, _.prototype.readDoubleBE = function(d, g) {
                return d = d >>> 0, g || x(d, 8, this.length), n.read(this, d, !1, 52, 8);
            };
            function c(m, d, g, M, C, W) {
                if (!_.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (d > C || d < W) throw new RangeError('"value" argument is out of bounds');
                if (g + M > m.length) throw new RangeError("Index out of range");
            }
            _.prototype.writeUintLE = _.prototype.writeUIntLE = function(d, g, M, C) {
                if (d = +d, g = g >>> 0, M = M >>> 0, !C) {
                    const oe = Math.pow(2, 8 * M) - 1;
                    c(this, d, g, M, oe, 0);
                }
                let W = 1, V = 0;
                for(this[g] = d & 255; ++V < M && (W *= 256);)this[g + V] = d / W & 255;
                return g + M;
            }, _.prototype.writeUintBE = _.prototype.writeUIntBE = function(d, g, M, C) {
                if (d = +d, g = g >>> 0, M = M >>> 0, !C) {
                    const oe = Math.pow(2, 8 * M) - 1;
                    c(this, d, g, M, oe, 0);
                }
                let W = M - 1, V = 1;
                for(this[g + W] = d & 255; --W >= 0 && (V *= 256);)this[g + W] = d / V & 255;
                return g + M;
            }, _.prototype.writeUint8 = _.prototype.writeUInt8 = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 1, 255, 0), this[g] = d & 255, g + 1;
            }, _.prototype.writeUint16LE = _.prototype.writeUInt16LE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 2, 65535, 0), this[g] = d & 255, this[g + 1] = d >>> 8, g + 2;
            }, _.prototype.writeUint16BE = _.prototype.writeUInt16BE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 2, 65535, 0), this[g] = d >>> 8, this[g + 1] = d & 255, g + 2;
            }, _.prototype.writeUint32LE = _.prototype.writeUInt32LE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 4, 4294967295, 0), this[g + 3] = d >>> 24, this[g + 2] = d >>> 16, this[g + 1] = d >>> 8, this[g] = d & 255, g + 4;
            }, _.prototype.writeUint32BE = _.prototype.writeUInt32BE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 4, 4294967295, 0), this[g] = d >>> 24, this[g + 1] = d >>> 16, this[g + 2] = d >>> 8, this[g + 3] = d & 255, g + 4;
            };
            function u(m, d, g, M, C) {
                ae(d, M, C, m, g, 7);
                let W = Number(d & BigInt(4294967295));
                m[g++] = W, W = W >> 8, m[g++] = W, W = W >> 8, m[g++] = W, W = W >> 8, m[g++] = W;
                let V = Number(d >> BigInt(32) & BigInt(4294967295));
                return m[g++] = V, V = V >> 8, m[g++] = V, V = V >> 8, m[g++] = V, V = V >> 8, m[g++] = V, g;
            }
            function w(m, d, g, M, C) {
                ae(d, M, C, m, g, 7);
                let W = Number(d & BigInt(4294967295));
                m[g + 7] = W, W = W >> 8, m[g + 6] = W, W = W >> 8, m[g + 5] = W, W = W >> 8, m[g + 4] = W;
                let V = Number(d >> BigInt(32) & BigInt(4294967295));
                return m[g + 3] = V, V = V >> 8, m[g + 2] = V, V = V >> 8, m[g + 1] = V, V = V >> 8, m[g] = V, g + 8;
            }
            _.prototype.writeBigUInt64LE = De(function(d, g = 0) {
                return u(this, d, g, BigInt(0), BigInt("0xffffffffffffffff"));
            }), _.prototype.writeBigUInt64BE = De(function(d, g = 0) {
                return w(this, d, g, BigInt(0), BigInt("0xffffffffffffffff"));
            }), _.prototype.writeIntLE = function(d, g, M, C) {
                if (d = +d, g = g >>> 0, !C) {
                    const re = Math.pow(2, 8 * M - 1);
                    c(this, d, g, M, re - 1, -re);
                }
                let W = 0, V = 1, oe = 0;
                for(this[g] = d & 255; ++W < M && (V *= 256);)d < 0 && oe === 0 && this[g + W - 1] !== 0 && (oe = 1), this[g + W] = (d / V >> 0) - oe & 255;
                return g + M;
            }, _.prototype.writeIntBE = function(d, g, M, C) {
                if (d = +d, g = g >>> 0, !C) {
                    const re = Math.pow(2, 8 * M - 1);
                    c(this, d, g, M, re - 1, -re);
                }
                let W = M - 1, V = 1, oe = 0;
                for(this[g + W] = d & 255; --W >= 0 && (V *= 256);)d < 0 && oe === 0 && this[g + W + 1] !== 0 && (oe = 1), this[g + W] = (d / V >> 0) - oe & 255;
                return g + M;
            }, _.prototype.writeInt8 = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[g] = d & 255, g + 1;
            }, _.prototype.writeInt16LE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 2, 32767, -32768), this[g] = d & 255, this[g + 1] = d >>> 8, g + 2;
            }, _.prototype.writeInt16BE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 2, 32767, -32768), this[g] = d >>> 8, this[g + 1] = d & 255, g + 2;
            }, _.prototype.writeInt32LE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 4, 2147483647, -2147483648), this[g] = d & 255, this[g + 1] = d >>> 8, this[g + 2] = d >>> 16, this[g + 3] = d >>> 24, g + 4;
            }, _.prototype.writeInt32BE = function(d, g, M) {
                return d = +d, g = g >>> 0, M || c(this, d, g, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[g] = d >>> 24, this[g + 1] = d >>> 16, this[g + 2] = d >>> 8, this[g + 3] = d & 255, g + 4;
            }, _.prototype.writeBigInt64LE = De(function(d, g = 0) {
                return u(this, d, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }), _.prototype.writeBigInt64BE = De(function(d, g = 0) {
                return w(this, d, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            });
            function O(m, d, g, M, C, W) {
                if (g + M > m.length) throw new RangeError("Index out of range");
                if (g < 0) throw new RangeError("Index out of range");
            }
            function F(m, d, g, M, C) {
                return d = +d, g = g >>> 0, C || O(m, d, g, 4), n.write(m, d, g, M, 23, 4), g + 4;
            }
            _.prototype.writeFloatLE = function(d, g, M) {
                return F(this, d, g, !0, M);
            }, _.prototype.writeFloatBE = function(d, g, M) {
                return F(this, d, g, !1, M);
            };
            function q(m, d, g, M, C) {
                return d = +d, g = g >>> 0, C || O(m, d, g, 8), n.write(m, d, g, M, 52, 8), g + 8;
            }
            _.prototype.writeDoubleLE = function(d, g, M) {
                return q(this, d, g, !0, M);
            }, _.prototype.writeDoubleBE = function(d, g, M) {
                return q(this, d, g, !1, M);
            }, _.prototype.copy = function(d, g, M, C) {
                if (!_.isBuffer(d)) throw new TypeError("argument should be a Buffer");
                if (M || (M = 0), !C && C !== 0 && (C = this.length), g >= d.length && (g = d.length), g || (g = 0), C > 0 && C < M && (C = M), C === M || d.length === 0 || this.length === 0) return 0;
                if (g < 0) throw new RangeError("targetStart out of bounds");
                if (M < 0 || M >= this.length) throw new RangeError("Index out of range");
                if (C < 0) throw new RangeError("sourceEnd out of bounds");
                C > this.length && (C = this.length), d.length - g < C - M && (C = d.length - g + M);
                const W = C - M;
                return this === d && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(g, M, C) : Uint8Array.prototype.set.call(d, this.subarray(M, C), g), W;
            }, _.prototype.fill = function(d, g, M, C) {
                if (typeof d == "string") {
                    if (typeof g == "string" ? (C = g, g = 0, M = this.length) : typeof M == "string" && (C = M, M = this.length), C !== void 0 && typeof C != "string") throw new TypeError("encoding must be a string");
                    if (typeof C == "string" && !_.isEncoding(C)) throw new TypeError("Unknown encoding: " + C);
                    if (d.length === 1) {
                        const V = d.charCodeAt(0);
                        (C === "utf8" && V < 128 || C === "latin1") && (d = V);
                    }
                } else typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
                if (g < 0 || this.length < g || this.length < M) throw new RangeError("Out of range index");
                if (M <= g) return this;
                g = g >>> 0, M = M === void 0 ? this.length : M >>> 0, d || (d = 0);
                let W;
                if (typeof d == "number") for(W = g; W < M; ++W)this[W] = d;
                else {
                    const V = _.isBuffer(d) ? d : _.from(d, C), oe = V.length;
                    if (oe === 0) throw new TypeError('The value "' + d + '" is invalid for argument "value"');
                    for(W = 0; W < M - g; ++W)this[W + g] = V[W % oe];
                }
                return this;
            };
            const Z = {};
            function Q(m, d, g) {
                Z[m] = class extends g {
                    constructor(){
                        super(), Object.defineProperty(this, "message", {
                            value: d.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
                    }
                    get code() {
                        return m;
                    }
                    set code(C) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: C,
                            writable: !0
                        });
                    }
                    toString() {
                        return `${this.name} [${m}]: ${this.message}`;
                    }
                };
            }
            Q("ERR_BUFFER_OUT_OF_BOUNDS", function(m) {
                return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
            }, RangeError), Q("ERR_INVALID_ARG_TYPE", function(m, d) {
                return `The "${m}" argument must be of type number. Received type ${typeof d}`;
            }, TypeError), Q("ERR_OUT_OF_RANGE", function(m, d, g) {
                let M = `The value of "${m}" is out of range.`, C = g;
                return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? C = ie(String(g)) : typeof g == "bigint" && (C = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (C = ie(C)), C += "n"), M += ` It must be ${d}. Received ${C}`, M;
            }, RangeError);
            function ie(m) {
                let d = "", g = m.length;
                const M = m[0] === "-" ? 1 : 0;
                for(; g >= M + 4; g -= 3)d = `_${m.slice(g - 3, g)}${d}`;
                return `${m.slice(0, g)}${d}`;
            }
            function se(m, d, g) {
                Ce(d, "offset"), (m[d] === void 0 || m[d + g] === void 0) && ce(d, m.length - (g + 1));
            }
            function ae(m, d, g, M, C, W) {
                if (m > g || m < d) {
                    const V = typeof d == "bigint" ? "n" : "";
                    let oe;
                    throw d === 0 || d === BigInt(0) ? oe = `>= 0${V} and < 2${V} ** ${(W + 1) * 8}${V}` : oe = `>= -(2${V} ** ${(W + 1) * 8 - 1}${V}) and < 2 ** ${(W + 1) * 8 - 1}${V}`, new Z.ERR_OUT_OF_RANGE("value", oe, m);
                }
                se(M, C, W);
            }
            function Ce(m, d) {
                if (typeof m != "number") throw new Z.ERR_INVALID_ARG_TYPE(d, "number", m);
            }
            function ce(m, d, g) {
                throw Math.floor(m) !== m ? (Ce(m, g), new Z.ERR_OUT_OF_RANGE("offset", "an integer", m)) : d < 0 ? new Z.ERR_BUFFER_OUT_OF_BOUNDS : new Z.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${d}`, m);
            }
            const ge = /[^+/0-9A-Za-z-_]/g;
            function Fe(m) {
                if (m = m.split("=")[0], m = m.trim().replace(ge, ""), m.length < 2) return "";
                for(; m.length % 4 !== 0;)m = m + "=";
                return m;
            }
            function le(m, d) {
                d = d || 1 / 0;
                let g;
                const M = m.length;
                let C = null;
                const W = [];
                for(let V = 0; V < M; ++V){
                    if (g = m.charCodeAt(V), g > 55295 && g < 57344) {
                        if (!C) {
                            if (g > 56319) {
                                (d -= 3) > -1 && W.push(239, 191, 189);
                                continue;
                            } else if (V + 1 === M) {
                                (d -= 3) > -1 && W.push(239, 191, 189);
                                continue;
                            }
                            C = g;
                            continue;
                        }
                        if (g < 56320) {
                            (d -= 3) > -1 && W.push(239, 191, 189), C = g;
                            continue;
                        }
                        g = (C - 55296 << 10 | g - 56320) + 65536;
                    } else C && (d -= 3) > -1 && W.push(239, 191, 189);
                    if (C = null, g < 128) {
                        if ((d -= 1) < 0) break;
                        W.push(g);
                    } else if (g < 2048) {
                        if ((d -= 2) < 0) break;
                        W.push(g >> 6 | 192, g & 63 | 128);
                    } else if (g < 65536) {
                        if ((d -= 3) < 0) break;
                        W.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128);
                    } else if (g < 1114112) {
                        if ((d -= 4) < 0) break;
                        W.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return W;
            }
            function _e(m) {
                const d = [];
                for(let g = 0; g < m.length; ++g)d.push(m.charCodeAt(g) & 255);
                return d;
            }
            function Ue(m, d) {
                let g, M, C;
                const W = [];
                for(let V = 0; V < m.length && !((d -= 2) < 0); ++V)g = m.charCodeAt(V), M = g >> 8, C = g % 256, W.push(C), W.push(M);
                return W;
            }
            function he(m) {
                return t.toByteArray(Fe(m));
            }
            function ue(m, d, g, M) {
                let C;
                for(C = 0; C < M && !(C + g >= d.length || C >= m.length); ++C)d[C + g] = m[C];
                return C;
            }
            function ke(m, d) {
                return m instanceof d || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === d.name;
            }
            function de(m) {
                return m !== m;
            }
            const be = (function() {
                const m = "0123456789abcdef", d = new Array(256);
                for(let g = 0; g < 16; ++g){
                    const M = g * 16;
                    for(let C = 0; C < 16; ++C)d[M + C] = m[g] + m[C];
                }
                return d;
            })();
            function De(m) {
                return typeof BigInt > "u" ? pe : m;
            }
            function pe() {
                throw new Error("BigInt not supported");
            }
        })(buffer)), buffer;
    }
    var bufferExports = requireBuffer();
    const crypto$1 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
    function isBytes(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
    }
    function anumber(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
    }
    function abytes(e, ...t) {
        if (!isBytes(e)) throw new Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
    }
    function ahash(e) {
        if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
        anumber(e.outputLen), anumber(e.blockLen);
    }
    function aexists(e, t = !0) {
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished) throw new Error("Hash#digest() has already been called");
    }
    function aoutput(e, t) {
        abytes(e);
        const n = t.outputLen;
        if (e.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
    }
    function clean(...e) {
        for(let t = 0; t < e.length; t++)e[t].fill(0);
    }
    function createView(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function rotr(e, t) {
        return e << 32 - t | e >>> t;
    }
    const hasHexBuiltin = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", hexes = Array.from({
        length: 256
    }, (e, t)=>t.toString(16).padStart(2, "0"));
    function bytesToHex(e) {
        if (abytes(e), hasHexBuiltin) return e.toHex();
        let t = "";
        for(let n = 0; n < e.length; n++)t += hexes[e[n]];
        return t;
    }
    const asciis = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
    };
    function asciiToBase16(e) {
        if (e >= asciis._0 && e <= asciis._9) return e - asciis._0;
        if (e >= asciis.A && e <= asciis.F) return e - (asciis.A - 10);
        if (e >= asciis.a && e <= asciis.f) return e - (asciis.a - 10);
    }
    function hexToBytes(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        if (hasHexBuiltin) return Uint8Array.fromHex(e);
        const t = e.length, n = t / 2;
        if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
        const r = new Uint8Array(n);
        for(let s = 0, o = 0; s < n; s++, o += 2){
            const l = asciiToBase16(e.charCodeAt(o)), _ = asciiToBase16(e.charCodeAt(o + 1));
            if (l === void 0 || _ === void 0) {
                const p = e[o] + e[o + 1];
                throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + o);
            }
            r[s] = l * 16 + _;
        }
        return r;
    }
    function utf8ToBytes(e) {
        if (typeof e != "string") throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(e));
    }
    function toBytes(e) {
        return typeof e == "string" && (e = utf8ToBytes(e)), abytes(e), e;
    }
    function concatBytes(...e) {
        let t = 0;
        for(let r = 0; r < e.length; r++){
            const s = e[r];
            abytes(s), t += s.length;
        }
        const n = new Uint8Array(t);
        for(let r = 0, s = 0; r < e.length; r++){
            const o = e[r];
            n.set(o, s), s += o.length;
        }
        return n;
    }
    class Hash {
    }
    function createHasher(e) {
        const t = (r)=>e().update(toBytes(r)).digest(), n = e();
        return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = ()=>e(), t;
    }
    function randomBytes(e = 32) {
        if (crypto$1 && typeof crypto$1.getRandomValues == "function") return crypto$1.getRandomValues(new Uint8Array(e));
        if (crypto$1 && typeof crypto$1.randomBytes == "function") return Uint8Array.from(crypto$1.randomBytes(e));
        throw new Error("crypto.getRandomValues must be defined");
    }
    function setBigUint64(e, t, n, r) {
        if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
        const s = BigInt(32), o = BigInt(4294967295), l = Number(n >> s & o), _ = Number(n & o), p = r ? 4 : 0, v = r ? 0 : 4;
        e.setUint32(t + p, l, r), e.setUint32(t + v, _, r);
    }
    function Chi(e, t, n) {
        return e & t ^ ~e & n;
    }
    function Maj(e, t, n) {
        return e & t ^ e & n ^ t & n;
    }
    class HashMD extends Hash {
        constructor(t, n, r, s){
            super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.buffer = new Uint8Array(t), this.view = createView(this.buffer);
        }
        update(t) {
            aexists(this), t = toBytes(t), abytes(t);
            const { view: n, buffer: r, blockLen: s } = this, o = t.length;
            for(let l = 0; l < o;){
                const _ = Math.min(s - this.pos, o - l);
                if (_ === s) {
                    const p = createView(t);
                    for(; s <= o - l; l += s)this.process(p, l);
                    continue;
                }
                r.set(t.subarray(l, l + _), this.pos), this.pos += _, l += _, this.pos === s && (this.process(n, 0), this.pos = 0);
            }
            return this.length += t.length, this.roundClean(), this;
        }
        digestInto(t) {
            aexists(this), aoutput(t, this), this.finished = !0;
            const { buffer: n, view: r, blockLen: s, isLE: o } = this;
            let { pos: l } = this;
            n[l++] = 128, clean(this.buffer.subarray(l)), this.padOffset > s - l && (this.process(r, 0), l = 0);
            for(let T = l; T < s; T++)n[T] = 0;
            setBigUint64(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
            const _ = createView(t), p = this.outputLen;
            if (p % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
            const v = p / 4, B = this.get();
            if (v > B.length) throw new Error("_sha2: outputLen bigger than state");
            for(let T = 0; T < v; T++)_.setUint32(4 * T, B[T], o);
        }
        digest() {
            const { buffer: t, outputLen: n } = this;
            this.digestInto(t);
            const r = t.slice(0, n);
            return this.destroy(), r;
        }
        _cloneInto(t) {
            t || (t = new this.constructor), t.set(...this.get());
            const { blockLen: n, buffer: r, length: s, finished: o, destroyed: l, pos: _ } = this;
            return t.destroyed = l, t.finished = o, t.length = s, t.pos = _, s % n && t.buffer.set(r), t;
        }
        clone() {
            return this._cloneInto();
        }
    }
    const SHA256_IV = Uint32Array.from([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
    ]), SHA512_IV = Uint32Array.from([
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
    ]), U32_MASK64 = BigInt(2 ** 32 - 1), _32n = BigInt(32);
    function fromBig(e, t = !1) {
        return t ? {
            h: Number(e & U32_MASK64),
            l: Number(e >> _32n & U32_MASK64)
        } : {
            h: Number(e >> _32n & U32_MASK64) | 0,
            l: Number(e & U32_MASK64) | 0
        };
    }
    function split(e, t = !1) {
        const n = e.length;
        let r = new Uint32Array(n), s = new Uint32Array(n);
        for(let o = 0; o < n; o++){
            const { h: l, l: _ } = fromBig(e[o], t);
            [r[o], s[o]] = [
                l,
                _
            ];
        }
        return [
            r,
            s
        ];
    }
    const shrSH = (e, t, n)=>e >>> n, shrSL = (e, t, n)=>e << 32 - n | t >>> n, rotrSH = (e, t, n)=>e >>> n | t << 32 - n, rotrSL = (e, t, n)=>e << 32 - n | t >>> n, rotrBH = (e, t, n)=>e << 64 - n | t >>> n - 32, rotrBL = (e, t, n)=>e >>> n - 32 | t << 64 - n;
    function add(e, t, n, r) {
        const s = (t >>> 0) + (r >>> 0);
        return {
            h: e + n + (s / 2 ** 32 | 0) | 0,
            l: s | 0
        };
    }
    const add3L = (e, t, n)=>(e >>> 0) + (t >>> 0) + (n >>> 0), add3H = (e, t, n, r)=>t + n + r + (e / 2 ** 32 | 0) | 0, add4L = (e, t, n, r)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), add4H = (e, t, n, r, s)=>t + n + r + s + (e / 2 ** 32 | 0) | 0, add5L = (e, t, n, r, s)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0), add5H = (e, t, n, r, s, o)=>t + n + r + s + o + (e / 2 ** 32 | 0) | 0, SHA256_K = Uint32Array.from([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ]), SHA256_W = new Uint32Array(64);
    class SHA256 extends HashMD {
        constructor(t = 32){
            super(64, t, 8, !1), this.A = SHA256_IV[0] | 0, this.B = SHA256_IV[1] | 0, this.C = SHA256_IV[2] | 0, this.D = SHA256_IV[3] | 0, this.E = SHA256_IV[4] | 0, this.F = SHA256_IV[5] | 0, this.G = SHA256_IV[6] | 0, this.H = SHA256_IV[7] | 0;
        }
        get() {
            const { A: t, B: n, C: r, D: s, E: o, F: l, G: _, H: p } = this;
            return [
                t,
                n,
                r,
                s,
                o,
                l,
                _,
                p
            ];
        }
        set(t, n, r, s, o, l, _, p) {
            this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = l | 0, this.G = _ | 0, this.H = p | 0;
        }
        process(t, n) {
            for(let T = 0; T < 16; T++, n += 4)SHA256_W[T] = t.getUint32(n, !1);
            for(let T = 16; T < 64; T++){
                const A = SHA256_W[T - 15], L = SHA256_W[T - 2], N = rotr(A, 7) ^ rotr(A, 18) ^ A >>> 3, R = rotr(L, 17) ^ rotr(L, 19) ^ L >>> 10;
                SHA256_W[T] = R + SHA256_W[T - 7] + N + SHA256_W[T - 16] | 0;
            }
            let { A: r, B: s, C: o, D: l, E: _, F: p, G: v, H: B } = this;
            for(let T = 0; T < 64; T++){
                const A = rotr(_, 6) ^ rotr(_, 11) ^ rotr(_, 25), L = B + A + Chi(_, p, v) + SHA256_K[T] + SHA256_W[T] | 0, R = (rotr(r, 2) ^ rotr(r, 13) ^ rotr(r, 22)) + Maj(r, s, o) | 0;
                B = v, v = p, p = _, _ = l + L | 0, l = o, o = s, s = r, r = L + R | 0;
            }
            r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, l = l + this.D | 0, _ = _ + this.E | 0, p = p + this.F | 0, v = v + this.G | 0, B = B + this.H | 0, this.set(r, s, o, l, _, p, v, B);
        }
        roundClean() {
            clean(SHA256_W);
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), clean(this.buffer);
        }
    }
    const K512 = split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
    ].map((e)=>BigInt(e))), SHA512_Kh = K512[0], SHA512_Kl = K512[1], SHA512_W_H = new Uint32Array(80), SHA512_W_L = new Uint32Array(80);
    class SHA512 extends HashMD {
        constructor(t = 64){
            super(128, t, 16, !1), this.Ah = SHA512_IV[0] | 0, this.Al = SHA512_IV[1] | 0, this.Bh = SHA512_IV[2] | 0, this.Bl = SHA512_IV[3] | 0, this.Ch = SHA512_IV[4] | 0, this.Cl = SHA512_IV[5] | 0, this.Dh = SHA512_IV[6] | 0, this.Dl = SHA512_IV[7] | 0, this.Eh = SHA512_IV[8] | 0, this.El = SHA512_IV[9] | 0, this.Fh = SHA512_IV[10] | 0, this.Fl = SHA512_IV[11] | 0, this.Gh = SHA512_IV[12] | 0, this.Gl = SHA512_IV[13] | 0, this.Hh = SHA512_IV[14] | 0, this.Hl = SHA512_IV[15] | 0;
        }
        get() {
            const { Ah: t, Al: n, Bh: r, Bl: s, Ch: o, Cl: l, Dh: _, Dl: p, Eh: v, El: B, Fh: T, Fl: A, Gh: L, Gl: N, Hh: R, Hl: U } = this;
            return [
                t,
                n,
                r,
                s,
                o,
                l,
                _,
                p,
                v,
                B,
                T,
                A,
                L,
                N,
                R,
                U
            ];
        }
        set(t, n, r, s, o, l, _, p, v, B, T, A, L, N, R, U) {
            this.Ah = t | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = s | 0, this.Ch = o | 0, this.Cl = l | 0, this.Dh = _ | 0, this.Dl = p | 0, this.Eh = v | 0, this.El = B | 0, this.Fh = T | 0, this.Fl = A | 0, this.Gh = L | 0, this.Gl = N | 0, this.Hh = R | 0, this.Hl = U | 0;
        }
        process(t, n) {
            for(let H = 0; H < 16; H++, n += 4)SHA512_W_H[H] = t.getUint32(n), SHA512_W_L[H] = t.getUint32(n += 4);
            for(let H = 16; H < 80; H++){
                const Y = SHA512_W_H[H - 15] | 0, $ = SHA512_W_L[H - 15] | 0, X = rotrSH(Y, $, 1) ^ rotrSH(Y, $, 8) ^ shrSH(Y, $, 7), te = rotrSL(Y, $, 1) ^ rotrSL(Y, $, 8) ^ shrSL(Y, $, 7), J = SHA512_W_H[H - 2] | 0, k = SHA512_W_L[H - 2] | 0, D = rotrSH(J, k, 19) ^ rotrBH(J, k, 61) ^ shrSH(J, k, 6), P = rotrSL(J, k, 19) ^ rotrBL(J, k, 61) ^ shrSL(J, k, 6), K = add4L(te, P, SHA512_W_L[H - 7], SHA512_W_L[H - 16]), y = add4H(K, X, D, SHA512_W_H[H - 7], SHA512_W_H[H - 16]);
                SHA512_W_H[H] = y | 0, SHA512_W_L[H] = K | 0;
            }
            let { Ah: r, Al: s, Bh: o, Bl: l, Ch: _, Cl: p, Dh: v, Dl: B, Eh: T, El: A, Fh: L, Fl: N, Gh: R, Gl: U, Hh: z, Hl: G } = this;
            for(let H = 0; H < 80; H++){
                const Y = rotrSH(T, A, 14) ^ rotrSH(T, A, 18) ^ rotrBH(T, A, 41), $ = rotrSL(T, A, 14) ^ rotrSL(T, A, 18) ^ rotrBL(T, A, 41), X = T & L ^ ~T & R, te = A & N ^ ~A & U, J = add5L(G, $, te, SHA512_Kl[H], SHA512_W_L[H]), k = add5H(J, z, Y, X, SHA512_Kh[H], SHA512_W_H[H]), D = J | 0, P = rotrSH(r, s, 28) ^ rotrBH(r, s, 34) ^ rotrBH(r, s, 39), K = rotrSL(r, s, 28) ^ rotrBL(r, s, 34) ^ rotrBL(r, s, 39), y = r & o ^ r & _ ^ o & _, a = s & l ^ s & p ^ l & p;
                z = R | 0, G = U | 0, R = L | 0, U = N | 0, L = T | 0, N = A | 0, { h: T, l: A } = add(v | 0, B | 0, k | 0, D | 0), v = _ | 0, B = p | 0, _ = o | 0, p = l | 0, o = r | 0, l = s | 0;
                const h = add3L(D, K, a);
                r = add3H(h, k, P, y), s = h | 0;
            }
            ({ h: r, l: s } = add(this.Ah | 0, this.Al | 0, r | 0, s | 0)), { h: o, l } = add(this.Bh | 0, this.Bl | 0, o | 0, l | 0), { h: _, l: p } = add(this.Ch | 0, this.Cl | 0, _ | 0, p | 0), { h: v, l: B } = add(this.Dh | 0, this.Dl | 0, v | 0, B | 0), { h: T, l: A } = add(this.Eh | 0, this.El | 0, T | 0, A | 0), { h: L, l: N } = add(this.Fh | 0, this.Fl | 0, L | 0, N | 0), { h: R, l: U } = add(this.Gh | 0, this.Gl | 0, R | 0, U | 0), { h: z, l: G } = add(this.Hh | 0, this.Hl | 0, z | 0, G | 0), this.set(r, s, o, l, _, p, v, B, T, A, L, N, R, U, z, G);
        }
        roundClean() {
            clean(SHA512_W_H, SHA512_W_L);
        }
        destroy() {
            clean(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
    }
    const sha256$1 = createHasher(()=>new SHA256), sha512 = createHasher(()=>new SHA512);
    const _0n$4 = BigInt(0), _1n$5 = BigInt(1);
    function _abool2(e, t = "") {
        if (typeof e != "boolean") {
            const n = t && `"${t}"`;
            throw new Error(n + "expected boolean, got type=" + typeof e);
        }
        return e;
    }
    function _abytes2(e, t, n = "") {
        const r = isBytes(e), s = e?.length, o = t !== void 0;
        if (!r || o && s !== t) {
            const l = n && `"${n}" `, _ = o ? ` of length ${t}` : "", p = r ? `length=${s}` : `type=${typeof e}`;
            throw new Error(l + "expected Uint8Array" + _ + ", got " + p);
        }
        return e;
    }
    function numberToHexUnpadded(e) {
        const t = e.toString(16);
        return t.length & 1 ? "0" + t : t;
    }
    function hexToNumber(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        return e === "" ? _0n$4 : BigInt("0x" + e);
    }
    function bytesToNumberBE(e) {
        return hexToNumber(bytesToHex(e));
    }
    function bytesToNumberLE(e) {
        return abytes(e), hexToNumber(bytesToHex(Uint8Array.from(e).reverse()));
    }
    function numberToBytesBE(e, t) {
        return hexToBytes(e.toString(16).padStart(t * 2, "0"));
    }
    function numberToBytesLE(e, t) {
        return numberToBytesBE(e, t).reverse();
    }
    function ensureBytes(e, t, n) {
        let r;
        if (typeof t == "string") try {
            r = hexToBytes(t);
        } catch (o) {
            throw new Error(e + " must be hex string or Uint8Array, cause: " + o);
        }
        else if (isBytes(t)) r = Uint8Array.from(t);
        else throw new Error(e + " must be hex string or Uint8Array");
        const s = r.length;
        if (typeof n == "number" && s !== n) throw new Error(e + " of length " + n + " expected, got " + s);
        return r;
    }
    function copyBytes(e) {
        return Uint8Array.from(e);
    }
    const isPosBig = (e)=>typeof e == "bigint" && _0n$4 <= e;
    function inRange$1(e, t, n) {
        return isPosBig(e) && isPosBig(t) && isPosBig(n) && t <= e && e < n;
    }
    function aInRange(e, t, n, r) {
        if (!inRange$1(t, n, r)) throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t);
    }
    function bitLen(e) {
        let t;
        for(t = 0; e > _0n$4; e >>= _1n$5, t += 1);
        return t;
    }
    const bitMask = (e)=>(_1n$5 << BigInt(e)) - _1n$5;
    function createHmacDrbg(e, t, n) {
        if (typeof e != "number" || e < 2) throw new Error("hashLen must be a number");
        if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
        if (typeof n != "function") throw new Error("hmacFn must be a function");
        const r = (L)=>new Uint8Array(L), s = (L)=>Uint8Array.of(L);
        let o = r(e), l = r(e), _ = 0;
        const p = ()=>{
            o.fill(1), l.fill(0), _ = 0;
        }, v = (...L)=>n(l, o, ...L), B = (L = r(0))=>{
            l = v(s(0), L), o = v(), L.length !== 0 && (l = v(s(1), L), o = v());
        }, T = ()=>{
            if (_++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let L = 0;
            const N = [];
            for(; L < t;){
                o = v();
                const R = o.slice();
                N.push(R), L += o.length;
            }
            return concatBytes(...N);
        };
        return (L, N)=>{
            p(), B(L);
            let R;
            for(; !(R = N(T()));)B();
            return p(), R;
        };
    }
    function _validateObject(e, t, n = {}) {
        if (!e || typeof e != "object") throw new Error("expected valid options object");
        function r(s, o, l) {
            const _ = e[s];
            if (l && _ === void 0) return;
            const p = typeof _;
            if (p !== o || _ === null) throw new Error(`param "${s}" is invalid: expected ${o}, got ${p}`);
        }
        Object.entries(t).forEach(([s, o])=>r(s, o, !1)), Object.entries(n).forEach(([s, o])=>r(s, o, !0));
    }
    function memoized(e) {
        const t = new WeakMap;
        return (n, ...r)=>{
            const s = t.get(n);
            if (s !== void 0) return s;
            const o = e(n, ...r);
            return t.set(n, o), o;
        };
    }
    const _0n$3 = BigInt(0), _1n$4 = BigInt(1), _2n$4 = BigInt(2), _3n$1 = BigInt(3), _4n$1 = BigInt(4), _5n$1 = BigInt(5), _7n = BigInt(7), _8n$2 = BigInt(8), _9n = BigInt(9), _16n = BigInt(16);
    function mod(e, t) {
        const n = e % t;
        return n >= _0n$3 ? n : t + n;
    }
    function pow2(e, t, n) {
        let r = e;
        for(; t-- > _0n$3;)r *= r, r %= n;
        return r;
    }
    function invert(e, t) {
        if (e === _0n$3) throw new Error("invert: expected non-zero number");
        if (t <= _0n$3) throw new Error("invert: expected positive modulus, got " + t);
        let n = mod(e, t), r = t, s = _0n$3, o = _1n$4;
        for(; n !== _0n$3;){
            const _ = r / n, p = r % n, v = s - o * _;
            r = n, n = p, s = o, o = v;
        }
        if (r !== _1n$4) throw new Error("invert: does not exist");
        return mod(s, t);
    }
    function assertIsSquare(e, t, n) {
        if (!e.eql(e.sqr(t), n)) throw new Error("Cannot find square root");
    }
    function sqrt3mod4(e, t) {
        const n = (e.ORDER + _1n$4) / _4n$1, r = e.pow(t, n);
        return assertIsSquare(e, r, t), r;
    }
    function sqrt5mod8(e, t) {
        const n = (e.ORDER - _5n$1) / _8n$2, r = e.mul(t, _2n$4), s = e.pow(r, n), o = e.mul(t, s), l = e.mul(e.mul(o, _2n$4), s), _ = e.mul(o, e.sub(l, e.ONE));
        return assertIsSquare(e, _, t), _;
    }
    function sqrt9mod16(e) {
        const t = Field(e), n = tonelliShanks(e), r = n(t, t.neg(t.ONE)), s = n(t, r), o = n(t, t.neg(r)), l = (e + _7n) / _16n;
        return (_, p)=>{
            let v = _.pow(p, l), B = _.mul(v, r);
            const T = _.mul(v, s), A = _.mul(v, o), L = _.eql(_.sqr(B), p), N = _.eql(_.sqr(T), p);
            v = _.cmov(v, B, L), B = _.cmov(A, T, N);
            const R = _.eql(_.sqr(B), p), U = _.cmov(v, B, R);
            return assertIsSquare(_, U, p), U;
        };
    }
    function tonelliShanks(e) {
        if (e < _3n$1) throw new Error("sqrt is not defined for small field");
        let t = e - _1n$4, n = 0;
        for(; t % _2n$4 === _0n$3;)t /= _2n$4, n++;
        let r = _2n$4;
        const s = Field(e);
        for(; FpLegendre(s, r) === 1;)if (r++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
        if (n === 1) return sqrt3mod4;
        let o = s.pow(r, t);
        const l = (t + _1n$4) / _2n$4;
        return function(p, v) {
            if (p.is0(v)) return v;
            if (FpLegendre(p, v) !== 1) throw new Error("Cannot find square root");
            let B = n, T = p.mul(p.ONE, o), A = p.pow(v, t), L = p.pow(v, l);
            for(; !p.eql(A, p.ONE);){
                if (p.is0(A)) return p.ZERO;
                let N = 1, R = p.sqr(A);
                for(; !p.eql(R, p.ONE);)if (N++, R = p.sqr(R), N === B) throw new Error("Cannot find square root");
                const U = _1n$4 << BigInt(B - N - 1), z = p.pow(T, U);
                B = N, T = p.sqr(z), A = p.mul(A, T), L = p.mul(L, z);
            }
            return L;
        };
    }
    function FpSqrt(e) {
        return e % _4n$1 === _3n$1 ? sqrt3mod4 : e % _8n$2 === _5n$1 ? sqrt5mod8 : e % _16n === _9n ? sqrt9mod16(e) : tonelliShanks(e);
    }
    const isNegativeLE = (e, t)=>(mod(e, t) & _1n$4) === _1n$4, FIELD_FIELDS = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN"
    ];
    function validateField(e) {
        const t = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number"
        }, n = FIELD_FIELDS.reduce((r, s)=>(r[s] = "function", r), t);
        return _validateObject(e, n), e;
    }
    function FpPow(e, t, n) {
        if (n < _0n$3) throw new Error("invalid exponent, negatives unsupported");
        if (n === _0n$3) return e.ONE;
        if (n === _1n$4) return t;
        let r = e.ONE, s = t;
        for(; n > _0n$3;)n & _1n$4 && (r = e.mul(r, s)), s = e.sqr(s), n >>= _1n$4;
        return r;
    }
    function FpInvertBatch(e, t, n = !1) {
        const r = new Array(t.length).fill(n ? e.ZERO : void 0), s = t.reduce((l, _, p)=>e.is0(_) ? l : (r[p] = l, e.mul(l, _)), e.ONE), o = e.inv(s);
        return t.reduceRight((l, _, p)=>e.is0(_) ? l : (r[p] = e.mul(l, r[p]), e.mul(l, _)), o), r;
    }
    function FpLegendre(e, t) {
        const n = (e.ORDER - _1n$4) / _2n$4, r = e.pow(t, n), s = e.eql(r, e.ONE), o = e.eql(r, e.ZERO), l = e.eql(r, e.neg(e.ONE));
        if (!s && !o && !l) throw new Error("invalid Legendre symbol result");
        return s ? 1 : o ? 0 : -1;
    }
    function nLength(e, t) {
        t !== void 0 && anumber(t);
        const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
        return {
            nBitLength: n,
            nByteLength: r
        };
    }
    function Field(e, t, n = !1, r = {}) {
        if (e <= _0n$3) throw new Error("invalid field: expected ORDER > 0, got " + e);
        let s, o, l = !1, _;
        if (typeof t == "object" && t != null) {
            if (r.sqrt || n) throw new Error("cannot specify opts in two arguments");
            const A = t;
            A.BITS && (s = A.BITS), A.sqrt && (o = A.sqrt), typeof A.isLE == "boolean" && (n = A.isLE), typeof A.modFromBytes == "boolean" && (l = A.modFromBytes), _ = A.allowedLengths;
        } else typeof t == "number" && (s = t), r.sqrt && (o = r.sqrt);
        const { nBitLength: p, nByteLength: v } = nLength(e, s);
        if (v > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let B;
        const T = Object.freeze({
            ORDER: e,
            isLE: n,
            BITS: p,
            BYTES: v,
            MASK: bitMask(p),
            ZERO: _0n$3,
            ONE: _1n$4,
            allowedLengths: _,
            create: (A)=>mod(A, e),
            isValid: (A)=>{
                if (typeof A != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof A);
                return _0n$3 <= A && A < e;
            },
            is0: (A)=>A === _0n$3,
            isValidNot0: (A)=>!T.is0(A) && T.isValid(A),
            isOdd: (A)=>(A & _1n$4) === _1n$4,
            neg: (A)=>mod(-A, e),
            eql: (A, L)=>A === L,
            sqr: (A)=>mod(A * A, e),
            add: (A, L)=>mod(A + L, e),
            sub: (A, L)=>mod(A - L, e),
            mul: (A, L)=>mod(A * L, e),
            pow: (A, L)=>FpPow(T, A, L),
            div: (A, L)=>mod(A * invert(L, e), e),
            sqrN: (A)=>A * A,
            addN: (A, L)=>A + L,
            subN: (A, L)=>A - L,
            mulN: (A, L)=>A * L,
            inv: (A)=>invert(A, e),
            sqrt: o || ((A)=>(B || (B = FpSqrt(e)), B(T, A))),
            toBytes: (A)=>n ? numberToBytesLE(A, v) : numberToBytesBE(A, v),
            fromBytes: (A, L = !0)=>{
                if (_) {
                    if (!_.includes(A.length) || A.length > v) throw new Error("Field.fromBytes: expected " + _ + " bytes, got " + A.length);
                    const R = new Uint8Array(v);
                    R.set(A, n ? 0 : R.length - A.length), A = R;
                }
                if (A.length !== v) throw new Error("Field.fromBytes: expected " + v + " bytes, got " + A.length);
                let N = n ? bytesToNumberLE(A) : bytesToNumberBE(A);
                if (l && (N = mod(N, e)), !L && !T.isValid(N)) throw new Error("invalid field element: outside of range 0..ORDER");
                return N;
            },
            invertBatch: (A)=>FpInvertBatch(T, A),
            cmov: (A, L, N)=>N ? L : A
        });
        return Object.freeze(T);
    }
    function getFieldBytesLength(e) {
        if (typeof e != "bigint") throw new Error("field order must be bigint");
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
    }
    function getMinHashLength(e) {
        const t = getFieldBytesLength(e);
        return t + Math.ceil(t / 2);
    }
    function mapHashToField(e, t, n = !1) {
        const r = e.length, s = getFieldBytesLength(t), o = getMinHashLength(t);
        if (r < 16 || r < o || r > 1024) throw new Error("expected " + o + "-1024 bytes of input, got " + r);
        const l = n ? bytesToNumberLE(e) : bytesToNumberBE(e), _ = mod(l, t - _1n$4) + _1n$4;
        return n ? numberToBytesLE(_, s) : numberToBytesBE(_, s);
    }
    const _0n$2 = BigInt(0), _1n$3 = BigInt(1);
    function negateCt(e, t) {
        const n = t.negate();
        return e ? n : t;
    }
    function normalizeZ(e, t) {
        const n = FpInvertBatch(e.Fp, t.map((r)=>r.Z));
        return t.map((r, s)=>e.fromAffine(r.toAffine(n[s])));
    }
    function validateW(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw new Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function calcWOpts(e, t) {
        validateW(e, t);
        const n = Math.ceil(t / e) + 1, r = 2 ** (e - 1), s = 2 ** e, o = bitMask(e), l = BigInt(e);
        return {
            windows: n,
            windowSize: r,
            mask: o,
            maxNumber: s,
            shiftBy: l
        };
    }
    function calcOffsets(e, t, n) {
        const { windowSize: r, mask: s, maxNumber: o, shiftBy: l } = n;
        let _ = Number(e & s), p = e >> l;
        _ > r && (_ -= o, p += _1n$3);
        const v = t * r, B = v + Math.abs(_) - 1, T = _ === 0, A = _ < 0, L = t % 2 !== 0;
        return {
            nextN: p,
            offset: B,
            isZero: T,
            isNeg: A,
            isNegF: L,
            offsetF: v
        };
    }
    function validateMSMPoints(e, t) {
        if (!Array.isArray(e)) throw new Error("array expected");
        e.forEach((n, r)=>{
            if (!(n instanceof t)) throw new Error("invalid point at index " + r);
        });
    }
    function validateMSMScalars(e, t) {
        if (!Array.isArray(e)) throw new Error("array of scalars expected");
        e.forEach((n, r)=>{
            if (!t.isValid(n)) throw new Error("invalid scalar at index " + r);
        });
    }
    const pointPrecomputes = new WeakMap, pointWindowSizes = new WeakMap;
    function getW(e) {
        return pointWindowSizes.get(e) || 1;
    }
    function assert0(e) {
        if (e !== _0n$2) throw new Error("invalid wNAF");
    }
    class wNAF {
        constructor(t, n){
            this.BASE = t.BASE, this.ZERO = t.ZERO, this.Fn = t.Fn, this.bits = n;
        }
        _unsafeLadder(t, n, r = this.ZERO) {
            let s = t;
            for(; n > _0n$2;)n & _1n$3 && (r = r.add(s)), s = s.double(), n >>= _1n$3;
            return r;
        }
        precomputeWindow(t, n) {
            const { windows: r, windowSize: s } = calcWOpts(n, this.bits), o = [];
            let l = t, _ = l;
            for(let p = 0; p < r; p++){
                _ = l, o.push(_);
                for(let v = 1; v < s; v++)_ = _.add(l), o.push(_);
                l = _.double();
            }
            return o;
        }
        wNAF(t, n, r) {
            if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
            let s = this.ZERO, o = this.BASE;
            const l = calcWOpts(t, this.bits);
            for(let _ = 0; _ < l.windows; _++){
                const { nextN: p, offset: v, isZero: B, isNeg: T, isNegF: A, offsetF: L } = calcOffsets(r, _, l);
                r = p, B ? o = o.add(negateCt(A, n[L])) : s = s.add(negateCt(T, n[v]));
            }
            return assert0(r), {
                p: s,
                f: o
            };
        }
        wNAFUnsafe(t, n, r, s = this.ZERO) {
            const o = calcWOpts(t, this.bits);
            for(let l = 0; l < o.windows && r !== _0n$2; l++){
                const { nextN: _, offset: p, isZero: v, isNeg: B } = calcOffsets(r, l, o);
                if (r = _, !v) {
                    const T = n[p];
                    s = s.add(B ? T.negate() : T);
                }
            }
            return assert0(r), s;
        }
        getPrecomputes(t, n, r) {
            let s = pointPrecomputes.get(n);
            return s || (s = this.precomputeWindow(n, t), t !== 1 && (typeof r == "function" && (s = r(s)), pointPrecomputes.set(n, s))), s;
        }
        cached(t, n, r) {
            const s = getW(t);
            return this.wNAF(s, this.getPrecomputes(s, t, r), n);
        }
        unsafe(t, n, r, s) {
            const o = getW(t);
            return o === 1 ? this._unsafeLadder(t, n, s) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, r), n, s);
        }
        createCache(t, n) {
            validateW(n, this.bits), pointWindowSizes.set(t, n), pointPrecomputes.delete(t);
        }
        hasCache(t) {
            return getW(t) !== 1;
        }
    }
    function mulEndoUnsafe(e, t, n, r) {
        let s = t, o = e.ZERO, l = e.ZERO;
        for(; n > _0n$2 || r > _0n$2;)n & _1n$3 && (o = o.add(s)), r & _1n$3 && (l = l.add(s)), s = s.double(), n >>= _1n$3, r >>= _1n$3;
        return {
            p1: o,
            p2: l
        };
    }
    function pippenger(e, t, n, r) {
        validateMSMPoints(n, e), validateMSMScalars(r, t);
        const s = n.length, o = r.length;
        if (s !== o) throw new Error("arrays of points and scalars must have equal length");
        const l = e.ZERO, _ = bitLen(BigInt(s));
        let p = 1;
        _ > 12 ? p = _ - 3 : _ > 4 ? p = _ - 2 : _ > 0 && (p = 2);
        const v = bitMask(p), B = new Array(Number(v) + 1).fill(l), T = Math.floor((t.BITS - 1) / p) * p;
        let A = l;
        for(let L = T; L >= 0; L -= p){
            B.fill(l);
            for(let R = 0; R < o; R++){
                const U = r[R], z = Number(U >> BigInt(L) & v);
                B[z] = B[z].add(n[R]);
            }
            let N = l;
            for(let R = B.length - 1, U = l; R > 0; R--)U = U.add(B[R]), N = N.add(U);
            if (A = A.add(N), L !== 0) for(let R = 0; R < p; R++)A = A.double();
        }
        return A;
    }
    function createField(e, t, n) {
        if (t) {
            if (t.ORDER !== e) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
            return validateField(t), t;
        } else return Field(e, {
            isLE: n
        });
    }
    function _createCurveFields(e, t, n = {}, r) {
        if (r === void 0 && (r = e === "edwards"), !t || typeof t != "object") throw new Error(`expected valid ${e} CURVE object`);
        for (const p of [
            "p",
            "n",
            "h"
        ]){
            const v = t[p];
            if (!(typeof v == "bigint" && v > _0n$2)) throw new Error(`CURVE.${p} must be positive bigint`);
        }
        const s = createField(t.p, n.Fp, r), o = createField(t.n, n.Fn, r), _ = [
            "Gx",
            "Gy",
            "a",
            e === "weierstrass" ? "b" : "d"
        ];
        for (const p of _)if (!s.isValid(t[p])) throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
        return t = Object.freeze(Object.assign({}, t)), {
            CURVE: t,
            Fp: s,
            Fn: o
        };
    }
    const _0n$1 = BigInt(0), _1n$2 = BigInt(1), _2n$3 = BigInt(2), _8n$1 = BigInt(8);
    function isEdValidXY(e, t, n, r) {
        const s = e.sqr(n), o = e.sqr(r), l = e.add(e.mul(t.a, s), o), _ = e.add(e.ONE, e.mul(t.d, e.mul(s, o)));
        return e.eql(l, _);
    }
    function edwards(e, t = {}) {
        const n = _createCurveFields("edwards", e, t, t.FpFnLE), { Fp: r, Fn: s } = n;
        let o = n.CURVE;
        const { h: l } = o;
        _validateObject(t, {}, {
            uvRatio: "function"
        });
        const _ = _2n$3 << BigInt(s.BYTES * 8) - _1n$2, p = (U)=>r.create(U), v = t.uvRatio || ((U, z)=>{
            try {
                return {
                    isValid: !0,
                    value: r.sqrt(r.div(U, z))
                };
            } catch  {
                return {
                    isValid: !1,
                    value: _0n$1
                };
            }
        });
        if (!isEdValidXY(r, o, o.Gx, o.Gy)) throw new Error("bad curve params: generator point");
        function B(U, z, G = !1) {
            const H = G ? _1n$2 : _0n$1;
            return aInRange("coordinate " + U, z, H, _), z;
        }
        function T(U) {
            if (!(U instanceof N)) throw new Error("ExtendedPoint expected");
        }
        const A = memoized((U, z)=>{
            const { X: G, Y: H, Z: Y } = U, $ = U.is0();
            z == null && (z = $ ? _8n$1 : r.inv(Y));
            const X = p(G * z), te = p(H * z), J = r.mul(Y, z);
            if ($) return {
                x: _0n$1,
                y: _1n$2
            };
            if (J !== _1n$2) throw new Error("invZ was invalid");
            return {
                x: X,
                y: te
            };
        }), L = memoized((U)=>{
            const { a: z, d: G } = o;
            if (U.is0()) throw new Error("bad point: ZERO");
            const { X: H, Y, Z: $, T: X } = U, te = p(H * H), J = p(Y * Y), k = p($ * $), D = p(k * k), P = p(te * z), K = p(k * p(P + J)), y = p(D + p(G * p(te * J)));
            if (K !== y) throw new Error("bad point: equation left != right (1)");
            const a = p(H * Y), h = p($ * X);
            if (a !== h) throw new Error("bad point: equation left != right (2)");
            return !0;
        });
        class N {
            constructor(z, G, H, Y){
                this.X = B("x", z), this.Y = B("y", G), this.Z = B("z", H, !0), this.T = B("t", Y), Object.freeze(this);
            }
            static CURVE() {
                return o;
            }
            static fromAffine(z) {
                if (z instanceof N) throw new Error("extended point not allowed");
                const { x: G, y: H } = z || {};
                return B("x", G), B("y", H), new N(G, H, _1n$2, p(G * H));
            }
            static fromBytes(z, G = !1) {
                const H = r.BYTES, { a: Y, d: $ } = o;
                z = copyBytes(_abytes2(z, H, "point")), _abool2(G, "zip215");
                const X = copyBytes(z), te = z[H - 1];
                X[H - 1] = te & -129;
                const J = bytesToNumberLE(X), k = G ? _ : r.ORDER;
                aInRange("point.y", J, _0n$1, k);
                const D = p(J * J), P = p(D - _1n$2), K = p($ * D - Y);
                let { isValid: y, value: a } = v(P, K);
                if (!y) throw new Error("bad point: invalid y coordinate");
                const h = (a & _1n$2) === _1n$2, b = (te & 128) !== 0;
                if (!G && a === _0n$1 && b) throw new Error("bad point: x=0 and x_0=1");
                return b !== h && (a = p(-a)), N.fromAffine({
                    x: a,
                    y: J
                });
            }
            static fromHex(z, G = !1) {
                return N.fromBytes(ensureBytes("point", z), G);
            }
            get x() {
                return this.toAffine().x;
            }
            get y() {
                return this.toAffine().y;
            }
            precompute(z = 8, G = !0) {
                return R.createCache(this, z), G || this.multiply(_2n$3), this;
            }
            assertValidity() {
                L(this);
            }
            equals(z) {
                T(z);
                const { X: G, Y: H, Z: Y } = this, { X: $, Y: X, Z: te } = z, J = p(G * te), k = p($ * Y), D = p(H * te), P = p(X * Y);
                return J === k && D === P;
            }
            is0() {
                return this.equals(N.ZERO);
            }
            negate() {
                return new N(p(-this.X), this.Y, this.Z, p(-this.T));
            }
            double() {
                const { a: z } = o, { X: G, Y: H, Z: Y } = this, $ = p(G * G), X = p(H * H), te = p(_2n$3 * p(Y * Y)), J = p(z * $), k = G + H, D = p(p(k * k) - $ - X), P = J + X, K = P - te, y = J - X, a = p(D * K), h = p(P * y), b = p(D * y), E = p(K * P);
                return new N(a, h, E, b);
            }
            add(z) {
                T(z);
                const { a: G, d: H } = o, { X: Y, Y: $, Z: X, T: te } = this, { X: J, Y: k, Z: D, T: P } = z, K = p(Y * J), y = p($ * k), a = p(te * H * P), h = p(X * D), b = p((Y + $) * (J + k) - K - y), E = h - a, S = h + a, j = p(y - G * K), I = p(b * E), x = p(S * j), c = p(b * j), u = p(E * S);
                return new N(I, x, u, c);
            }
            subtract(z) {
                return this.add(z.negate());
            }
            multiply(z) {
                if (!s.isValidNot0(z)) throw new Error("invalid scalar: expected 1 <= sc < curve.n");
                const { p: G, f: H } = R.cached(this, z, (Y)=>normalizeZ(N, Y));
                return normalizeZ(N, [
                    G,
                    H
                ])[0];
            }
            multiplyUnsafe(z, G = N.ZERO) {
                if (!s.isValid(z)) throw new Error("invalid scalar: expected 0 <= sc < curve.n");
                return z === _0n$1 ? N.ZERO : this.is0() || z === _1n$2 ? this : R.unsafe(this, z, (H)=>normalizeZ(N, H), G);
            }
            isSmallOrder() {
                return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
                return R.unsafe(this, o.n).is0();
            }
            toAffine(z) {
                return A(this, z);
            }
            clearCofactor() {
                return l === _1n$2 ? this : this.multiplyUnsafe(l);
            }
            toBytes() {
                const { x: z, y: G } = this.toAffine(), H = r.toBytes(G);
                return H[H.length - 1] |= z & _1n$2 ? 128 : 0, H;
            }
            toHex() {
                return bytesToHex(this.toBytes());
            }
            toString() {
                return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
            }
            get ex() {
                return this.X;
            }
            get ey() {
                return this.Y;
            }
            get ez() {
                return this.Z;
            }
            get et() {
                return this.T;
            }
            static normalizeZ(z) {
                return normalizeZ(N, z);
            }
            static msm(z, G) {
                return pippenger(N, s, z, G);
            }
            _setWindowSize(z) {
                this.precompute(z);
            }
            toRawBytes() {
                return this.toBytes();
            }
        }
        N.BASE = new N(o.Gx, o.Gy, _1n$2, p(o.Gx * o.Gy)), N.ZERO = new N(_0n$1, _1n$2, _1n$2, _0n$1), N.Fp = r, N.Fn = s;
        const R = new wNAF(N, s.BITS);
        return N.BASE.precompute(8), N;
    }
    function eddsa(e, t, n = {}) {
        if (typeof t != "function") throw new Error('"hash" function param is required');
        _validateObject(n, {}, {
            adjustScalarBytes: "function",
            randomBytes: "function",
            domain: "function",
            prehash: "function",
            mapToCurve: "function"
        });
        const { prehash: r } = n, { BASE: s, Fp: o, Fn: l } = e, _ = n.randomBytes || randomBytes, p = n.adjustScalarBytes || ((k)=>k), v = n.domain || ((k, D, P)=>{
            if (_abool2(P, "phflag"), D.length || P) throw new Error("Contexts/pre-hash are not supported");
            return k;
        });
        function B(k) {
            return l.create(bytesToNumberLE(k));
        }
        function T(k) {
            const D = H.secretKey;
            k = ensureBytes("private key", k, D);
            const P = ensureBytes("hashed private key", t(k), 2 * D), K = p(P.slice(0, D)), y = P.slice(D, 2 * D), a = B(K);
            return {
                head: K,
                prefix: y,
                scalar: a
            };
        }
        function A(k) {
            const { head: D, prefix: P, scalar: K } = T(k), y = s.multiply(K), a = y.toBytes();
            return {
                head: D,
                prefix: P,
                scalar: K,
                point: y,
                pointBytes: a
            };
        }
        function L(k) {
            return A(k).pointBytes;
        }
        function N(k = Uint8Array.of(), ...D) {
            const P = concatBytes(...D);
            return B(t(v(P, ensureBytes("context", k), !!r)));
        }
        function R(k, D, P = {}) {
            k = ensureBytes("message", k), r && (k = r(k));
            const { prefix: K, scalar: y, pointBytes: a } = A(D), h = N(P.context, K, k), b = s.multiply(h).toBytes(), E = N(P.context, b, a, k), S = l.create(h + E * y);
            if (!l.isValid(S)) throw new Error("sign failed: invalid s");
            const j = concatBytes(b, l.toBytes(S));
            return _abytes2(j, H.signature, "result");
        }
        const U = {
            zip215: !0
        };
        function z(k, D, P, K = U) {
            const { context: y, zip215: a } = K, h = H.signature;
            k = ensureBytes("signature", k, h), D = ensureBytes("message", D), P = ensureBytes("publicKey", P, H.publicKey), a !== void 0 && _abool2(a, "zip215"), r && (D = r(D));
            const b = h / 2, E = k.subarray(0, b), S = bytesToNumberLE(k.subarray(b, h));
            let j, I, x;
            try {
                j = e.fromBytes(P, a), I = e.fromBytes(E, a), x = s.multiplyUnsafe(S);
            } catch  {
                return !1;
            }
            if (!a && j.isSmallOrder()) return !1;
            const c = N(y, I.toBytes(), j.toBytes(), D);
            return I.add(j.multiplyUnsafe(c)).subtract(x).clearCofactor().is0();
        }
        const G = o.BYTES, H = {
            secretKey: G,
            publicKey: G,
            signature: 2 * G,
            seed: G
        };
        function Y(k = _(H.seed)) {
            return _abytes2(k, H.seed, "seed");
        }
        function $(k) {
            const D = J.randomSecretKey(k);
            return {
                secretKey: D,
                publicKey: L(D)
            };
        }
        function X(k) {
            return isBytes(k) && k.length === l.BYTES;
        }
        function te(k, D) {
            try {
                return !!e.fromBytes(k, D);
            } catch  {
                return !1;
            }
        }
        const J = {
            getExtendedPublicKey: A,
            randomSecretKey: Y,
            isValidSecretKey: X,
            isValidPublicKey: te,
            toMontgomery (k) {
                const { y: D } = e.fromBytes(k), P = H.publicKey, K = P === 32;
                if (!K && P !== 57) throw new Error("only defined for 25519 and 448");
                const y = K ? o.div(_1n$2 + D, _1n$2 - D) : o.div(D - _1n$2, D + _1n$2);
                return o.toBytes(y);
            },
            toMontgomerySecret (k) {
                const D = H.secretKey;
                _abytes2(k, D);
                const P = t(k.subarray(0, D));
                return p(P).subarray(0, D);
            },
            randomPrivateKey: Y,
            precompute (k = 8, D = e.BASE) {
                return D.precompute(k, !1);
            }
        };
        return Object.freeze({
            keygen: $,
            getPublicKey: L,
            sign: R,
            verify: z,
            utils: J,
            Point: e,
            lengths: H
        });
    }
    function _eddsa_legacy_opts_to_new(e) {
        const t = {
            a: e.a,
            d: e.d,
            p: e.Fp.ORDER,
            n: e.n,
            h: e.h,
            Gx: e.Gx,
            Gy: e.Gy
        }, n = e.Fp, r = Field(t.n, e.nBitLength, !0), s = {
            Fp: n,
            Fn: r,
            uvRatio: e.uvRatio
        }, o = {
            randomBytes: e.randomBytes,
            adjustScalarBytes: e.adjustScalarBytes,
            domain: e.domain,
            prehash: e.prehash,
            mapToCurve: e.mapToCurve
        };
        return {
            CURVE: t,
            curveOpts: s,
            hash: e.hash,
            eddsaOpts: o
        };
    }
    function _eddsa_new_output_to_legacy(e, t) {
        const n = t.Point;
        return Object.assign({}, t, {
            ExtendedPoint: n,
            CURVE: e,
            nBitLength: n.Fn.BITS,
            nByteLength: n.Fn.BYTES
        });
    }
    function twistedEdwards(e) {
        const { CURVE: t, curveOpts: n, hash: r, eddsaOpts: s } = _eddsa_legacy_opts_to_new(e), o = edwards(t, n), l = eddsa(o, r, s);
        return _eddsa_new_output_to_legacy(e, l);
    }
    const _1n$1 = BigInt(1), _2n$2 = BigInt(2);
    BigInt(3);
    const _5n = BigInt(5), _8n = BigInt(8), ed25519_CURVE_p = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), ed25519_CURVE = {
        p: ed25519_CURVE_p,
        n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
        h: _8n,
        a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
        d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
        Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
        Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
    };
    function ed25519_pow_2_252_3(e) {
        const t = BigInt(10), n = BigInt(20), r = BigInt(40), s = BigInt(80), o = ed25519_CURVE_p, _ = e * e % o * e % o, p = pow2(_, _2n$2, o) * _ % o, v = pow2(p, _1n$1, o) * e % o, B = pow2(v, _5n, o) * v % o, T = pow2(B, t, o) * B % o, A = pow2(T, n, o) * T % o, L = pow2(A, r, o) * A % o, N = pow2(L, s, o) * L % o, R = pow2(N, s, o) * L % o, U = pow2(R, t, o) * B % o;
        return {
            pow_p_5_8: pow2(U, _2n$2, o) * e % o,
            b2: _
        };
    }
    function adjustScalarBytes(e) {
        return e[0] &= 248, e[31] &= 127, e[31] |= 64, e;
    }
    const ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    function uvRatio(e, t) {
        const n = ed25519_CURVE_p, r = mod(t * t * t, n), s = mod(r * r * t, n), o = ed25519_pow_2_252_3(e * s).pow_p_5_8;
        let l = mod(e * r * o, n);
        const _ = mod(t * l * l, n), p = l, v = mod(l * ED25519_SQRT_M1, n), B = _ === e, T = _ === mod(-e, n), A = _ === mod(-e * ED25519_SQRT_M1, n);
        return B && (l = p), (T || A) && (l = v), isNegativeLE(l, n) && (l = mod(-l, n)), {
            isValid: B || T,
            value: l
        };
    }
    const Fp = Field(ed25519_CURVE.p, {
        isLE: !0
    }), ed25519Defaults = {
        ...ed25519_CURVE,
        Fp,
        hash: sha512,
        adjustScalarBytes,
        uvRatio
    }, ed25519 = twistedEdwards(ed25519Defaults);
    var bn$1 = {
        exports: {}
    };
    const __viteBrowserExternal = {}, __viteBrowserExternal$1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: __viteBrowserExternal
    }, Symbol.toStringTag, {
        value: "Module"
    })), require$$0$1 = getAugmentedNamespace(__viteBrowserExternal$1);
    var bn = bn$1.exports, hasRequiredBn;
    function requireBn() {
        return hasRequiredBn || (hasRequiredBn = 1, (function(e) {
            (function(t, n) {
                function r(y, a) {
                    if (!y) throw new Error(a || "Assertion failed");
                }
                function s(y, a) {
                    y.super_ = a;
                    var h = function() {};
                    h.prototype = a.prototype, y.prototype = new h, y.prototype.constructor = y;
                }
                function o(y, a, h) {
                    if (o.isBN(y)) return y;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((a === "le" || a === "be") && (h = a, a = 10), this._init(y || 0, a || 10, h || "be"));
                }
                typeof t == "object" ? t.exports = o : n.BN = o, o.BN = o, o.wordSize = 26;
                var l;
                try {
                    typeof window < "u" && typeof window.Buffer < "u" ? l = window.Buffer : l = require$$0$1.Buffer;
                } catch  {}
                o.isBN = function(a) {
                    return a instanceof o ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === o.wordSize && Array.isArray(a.words);
                }, o.max = function(a, h) {
                    return a.cmp(h) > 0 ? a : h;
                }, o.min = function(a, h) {
                    return a.cmp(h) < 0 ? a : h;
                }, o.prototype._init = function(a, h, b) {
                    if (typeof a == "number") return this._initNumber(a, h, b);
                    if (typeof a == "object") return this._initArray(a, h, b);
                    h === "hex" && (h = 16), r(h === (h | 0) && h >= 2 && h <= 36), a = a.toString().replace(/\s+/g, "");
                    var E = 0;
                    a[0] === "-" && (E++, this.negative = 1), E < a.length && (h === 16 ? this._parseHex(a, E, b) : (this._parseBase(a, h, E), b === "le" && this._initArray(this.toArray(), h, b)));
                }, o.prototype._initNumber = function(a, h, b) {
                    a < 0 && (this.negative = 1, a = -a), a < 67108864 ? (this.words = [
                        a & 67108863
                    ], this.length = 1) : a < 4503599627370496 ? (this.words = [
                        a & 67108863,
                        a / 67108864 & 67108863
                    ], this.length = 2) : (r(a < 9007199254740992), this.words = [
                        a & 67108863,
                        a / 67108864 & 67108863,
                        1
                    ], this.length = 3), b === "le" && this._initArray(this.toArray(), h, b);
                }, o.prototype._initArray = function(a, h, b) {
                    if (r(typeof a.length == "number"), a.length <= 0) return this.words = [
                        0
                    ], this.length = 1, this;
                    this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
                    for(var E = 0; E < this.length; E++)this.words[E] = 0;
                    var S, j, I = 0;
                    if (b === "be") for(E = a.length - 1, S = 0; E >= 0; E -= 3)j = a[E] | a[E - 1] << 8 | a[E - 2] << 16, this.words[S] |= j << I & 67108863, this.words[S + 1] = j >>> 26 - I & 67108863, I += 24, I >= 26 && (I -= 26, S++);
                    else if (b === "le") for(E = 0, S = 0; E < a.length; E += 3)j = a[E] | a[E + 1] << 8 | a[E + 2] << 16, this.words[S] |= j << I & 67108863, this.words[S + 1] = j >>> 26 - I & 67108863, I += 24, I >= 26 && (I -= 26, S++);
                    return this._strip();
                };
                function _(y, a) {
                    var h = y.charCodeAt(a);
                    if (h >= 48 && h <= 57) return h - 48;
                    if (h >= 65 && h <= 70) return h - 55;
                    if (h >= 97 && h <= 102) return h - 87;
                    r(!1, "Invalid character in " + y);
                }
                function p(y, a, h) {
                    var b = _(y, h);
                    return h - 1 >= a && (b |= _(y, h - 1) << 4), b;
                }
                o.prototype._parseHex = function(a, h, b) {
                    this.length = Math.ceil((a.length - h) / 6), this.words = new Array(this.length);
                    for(var E = 0; E < this.length; E++)this.words[E] = 0;
                    var S = 0, j = 0, I;
                    if (b === "be") for(E = a.length - 1; E >= h; E -= 2)I = p(a, h, E) << S, this.words[j] |= I & 67108863, S >= 18 ? (S -= 18, j += 1, this.words[j] |= I >>> 26) : S += 8;
                    else {
                        var x = a.length - h;
                        for(E = x % 2 === 0 ? h + 1 : h; E < a.length; E += 2)I = p(a, h, E) << S, this.words[j] |= I & 67108863, S >= 18 ? (S -= 18, j += 1, this.words[j] |= I >>> 26) : S += 8;
                    }
                    this._strip();
                };
                function v(y, a, h, b) {
                    for(var E = 0, S = 0, j = Math.min(y.length, h), I = a; I < j; I++){
                        var x = y.charCodeAt(I) - 48;
                        E *= b, x >= 49 ? S = x - 49 + 10 : x >= 17 ? S = x - 17 + 10 : S = x, r(x >= 0 && S < b, "Invalid character"), E += S;
                    }
                    return E;
                }
                o.prototype._parseBase = function(a, h, b) {
                    this.words = [
                        0
                    ], this.length = 1;
                    for(var E = 0, S = 1; S <= 67108863; S *= h)E++;
                    E--, S = S / h | 0;
                    for(var j = a.length - b, I = j % E, x = Math.min(j, j - I) + b, c = 0, u = b; u < x; u += E)c = v(a, u, u + E, h), this.imuln(S), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (I !== 0) {
                        var w = 1;
                        for(c = v(a, u, a.length, h), u = 0; u < I; u++)w *= h;
                        this.imuln(w), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    }
                    this._strip();
                }, o.prototype.copy = function(a) {
                    a.words = new Array(this.length);
                    for(var h = 0; h < this.length; h++)a.words[h] = this.words[h];
                    a.length = this.length, a.negative = this.negative, a.red = this.red;
                };
                function B(y, a) {
                    y.words = a.words, y.length = a.length, y.negative = a.negative, y.red = a.red;
                }
                if (o.prototype._move = function(a) {
                    B(a, this);
                }, o.prototype.clone = function() {
                    var a = new o(null);
                    return this.copy(a), a;
                }, o.prototype._expand = function(a) {
                    for(; this.length < a;)this.words[this.length++] = 0;
                    return this;
                }, o.prototype._strip = function() {
                    for(; this.length > 1 && this.words[this.length - 1] === 0;)this.length--;
                    return this._normSign();
                }, o.prototype._normSign = function() {
                    return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
                }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = T;
                } catch  {
                    o.prototype.inspect = T;
                }
                else o.prototype.inspect = T;
                function T() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                }
                var A = [
                    "",
                    "0",
                    "00",
                    "000",
                    "0000",
                    "00000",
                    "000000",
                    "0000000",
                    "00000000",
                    "000000000",
                    "0000000000",
                    "00000000000",
                    "000000000000",
                    "0000000000000",
                    "00000000000000",
                    "000000000000000",
                    "0000000000000000",
                    "00000000000000000",
                    "000000000000000000",
                    "0000000000000000000",
                    "00000000000000000000",
                    "000000000000000000000",
                    "0000000000000000000000",
                    "00000000000000000000000",
                    "000000000000000000000000",
                    "0000000000000000000000000"
                ], L = [
                    0,
                    0,
                    25,
                    16,
                    12,
                    11,
                    10,
                    9,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ], N = [
                    0,
                    0,
                    33554432,
                    43046721,
                    16777216,
                    48828125,
                    60466176,
                    40353607,
                    16777216,
                    43046721,
                    1e7,
                    19487171,
                    35831808,
                    62748517,
                    7529536,
                    11390625,
                    16777216,
                    24137569,
                    34012224,
                    47045881,
                    64e6,
                    4084101,
                    5153632,
                    6436343,
                    7962624,
                    9765625,
                    11881376,
                    14348907,
                    17210368,
                    20511149,
                    243e5,
                    28629151,
                    33554432,
                    39135393,
                    45435424,
                    52521875,
                    60466176
                ];
                o.prototype.toString = function(a, h) {
                    a = a || 10, h = h | 0 || 1;
                    var b;
                    if (a === 16 || a === "hex") {
                        b = "";
                        for(var E = 0, S = 0, j = 0; j < this.length; j++){
                            var I = this.words[j], x = ((I << E | S) & 16777215).toString(16);
                            S = I >>> 24 - E & 16777215, E += 2, E >= 26 && (E -= 26, j--), S !== 0 || j !== this.length - 1 ? b = A[6 - x.length] + x + b : b = x + b;
                        }
                        for(S !== 0 && (b = S.toString(16) + b); b.length % h !== 0;)b = "0" + b;
                        return this.negative !== 0 && (b = "-" + b), b;
                    }
                    if (a === (a | 0) && a >= 2 && a <= 36) {
                        var c = L[a], u = N[a];
                        b = "";
                        var w = this.clone();
                        for(w.negative = 0; !w.isZero();){
                            var O = w.modrn(u).toString(a);
                            w = w.idivn(u), w.isZero() ? b = O + b : b = A[c - O.length] + O + b;
                        }
                        for(this.isZero() && (b = "0" + b); b.length % h !== 0;)b = "0" + b;
                        return this.negative !== 0 && (b = "-" + b), b;
                    }
                    r(!1, "Base should be between 2 and 36");
                }, o.prototype.toNumber = function() {
                    var a = this.words[0];
                    return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -a : a;
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2);
                }, l && (o.prototype.toBuffer = function(a, h) {
                    return this.toArrayLike(l, a, h);
                }), o.prototype.toArray = function(a, h) {
                    return this.toArrayLike(Array, a, h);
                };
                var R = function(a, h) {
                    return a.allocUnsafe ? a.allocUnsafe(h) : new a(h);
                };
                o.prototype.toArrayLike = function(a, h, b) {
                    this._strip();
                    var E = this.byteLength(), S = b || Math.max(1, E);
                    r(E <= S, "byte array longer than desired length"), r(S > 0, "Requested array length <= 0");
                    var j = R(a, S), I = h === "le" ? "LE" : "BE";
                    return this["_toArrayLike" + I](j, E), j;
                }, o.prototype._toArrayLikeLE = function(a, h) {
                    for(var b = 0, E = 0, S = 0, j = 0; S < this.length; S++){
                        var I = this.words[S] << j | E;
                        a[b++] = I & 255, b < a.length && (a[b++] = I >> 8 & 255), b < a.length && (a[b++] = I >> 16 & 255), j === 6 ? (b < a.length && (a[b++] = I >> 24 & 255), E = 0, j = 0) : (E = I >>> 24, j += 2);
                    }
                    if (b < a.length) for(a[b++] = E; b < a.length;)a[b++] = 0;
                }, o.prototype._toArrayLikeBE = function(a, h) {
                    for(var b = a.length - 1, E = 0, S = 0, j = 0; S < this.length; S++){
                        var I = this.words[S] << j | E;
                        a[b--] = I & 255, b >= 0 && (a[b--] = I >> 8 & 255), b >= 0 && (a[b--] = I >> 16 & 255), j === 6 ? (b >= 0 && (a[b--] = I >> 24 & 255), E = 0, j = 0) : (E = I >>> 24, j += 2);
                    }
                    if (b >= 0) for(a[b--] = E; b >= 0;)a[b--] = 0;
                }, Math.clz32 ? o.prototype._countBits = function(a) {
                    return 32 - Math.clz32(a);
                } : o.prototype._countBits = function(a) {
                    var h = a, b = 0;
                    return h >= 4096 && (b += 13, h >>>= 13), h >= 64 && (b += 7, h >>>= 7), h >= 8 && (b += 4, h >>>= 4), h >= 2 && (b += 2, h >>>= 2), b + h;
                }, o.prototype._zeroBits = function(a) {
                    if (a === 0) return 26;
                    var h = a, b = 0;
                    return (h & 8191) === 0 && (b += 13, h >>>= 13), (h & 127) === 0 && (b += 7, h >>>= 7), (h & 15) === 0 && (b += 4, h >>>= 4), (h & 3) === 0 && (b += 2, h >>>= 2), (h & 1) === 0 && b++, b;
                }, o.prototype.bitLength = function() {
                    var a = this.words[this.length - 1], h = this._countBits(a);
                    return (this.length - 1) * 26 + h;
                };
                function U(y) {
                    for(var a = new Array(y.bitLength()), h = 0; h < a.length; h++){
                        var b = h / 26 | 0, E = h % 26;
                        a[h] = y.words[b] >>> E & 1;
                    }
                    return a;
                }
                o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for(var a = 0, h = 0; h < this.length; h++){
                        var b = this._zeroBits(this.words[h]);
                        if (a += b, b !== 26) break;
                    }
                    return a;
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8);
                }, o.prototype.toTwos = function(a) {
                    return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone();
                }, o.prototype.fromTwos = function(a) {
                    return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
                }, o.prototype.isNeg = function() {
                    return this.negative !== 0;
                }, o.prototype.neg = function() {
                    return this.clone().ineg();
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this;
                }, o.prototype.iuor = function(a) {
                    for(; this.length < a.length;)this.words[this.length++] = 0;
                    for(var h = 0; h < a.length; h++)this.words[h] = this.words[h] | a.words[h];
                    return this._strip();
                }, o.prototype.ior = function(a) {
                    return r((this.negative | a.negative) === 0), this.iuor(a);
                }, o.prototype.or = function(a) {
                    return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this);
                }, o.prototype.uor = function(a) {
                    return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this);
                }, o.prototype.iuand = function(a) {
                    var h;
                    this.length > a.length ? h = a : h = this;
                    for(var b = 0; b < h.length; b++)this.words[b] = this.words[b] & a.words[b];
                    return this.length = h.length, this._strip();
                }, o.prototype.iand = function(a) {
                    return r((this.negative | a.negative) === 0), this.iuand(a);
                }, o.prototype.and = function(a) {
                    return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this);
                }, o.prototype.uand = function(a) {
                    return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this);
                }, o.prototype.iuxor = function(a) {
                    var h, b;
                    this.length > a.length ? (h = this, b = a) : (h = a, b = this);
                    for(var E = 0; E < b.length; E++)this.words[E] = h.words[E] ^ b.words[E];
                    if (this !== h) for(; E < h.length; E++)this.words[E] = h.words[E];
                    return this.length = h.length, this._strip();
                }, o.prototype.ixor = function(a) {
                    return r((this.negative | a.negative) === 0), this.iuxor(a);
                }, o.prototype.xor = function(a) {
                    return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this);
                }, o.prototype.uxor = function(a) {
                    return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this);
                }, o.prototype.inotn = function(a) {
                    r(typeof a == "number" && a >= 0);
                    var h = Math.ceil(a / 26) | 0, b = a % 26;
                    this._expand(h), b > 0 && h--;
                    for(var E = 0; E < h; E++)this.words[E] = ~this.words[E] & 67108863;
                    return b > 0 && (this.words[E] = ~this.words[E] & 67108863 >> 26 - b), this._strip();
                }, o.prototype.notn = function(a) {
                    return this.clone().inotn(a);
                }, o.prototype.setn = function(a, h) {
                    r(typeof a == "number" && a >= 0);
                    var b = a / 26 | 0, E = a % 26;
                    return this._expand(b + 1), h ? this.words[b] = this.words[b] | 1 << E : this.words[b] = this.words[b] & ~(1 << E), this._strip();
                }, o.prototype.iadd = function(a) {
                    var h;
                    if (this.negative !== 0 && a.negative === 0) return this.negative = 0, h = this.isub(a), this.negative ^= 1, this._normSign();
                    if (this.negative === 0 && a.negative !== 0) return a.negative = 0, h = this.isub(a), a.negative = 1, h._normSign();
                    var b, E;
                    this.length > a.length ? (b = this, E = a) : (b = a, E = this);
                    for(var S = 0, j = 0; j < E.length; j++)h = (b.words[j] | 0) + (E.words[j] | 0) + S, this.words[j] = h & 67108863, S = h >>> 26;
                    for(; S !== 0 && j < b.length; j++)h = (b.words[j] | 0) + S, this.words[j] = h & 67108863, S = h >>> 26;
                    if (this.length = b.length, S !== 0) this.words[this.length] = S, this.length++;
                    else if (b !== this) for(; j < b.length; j++)this.words[j] = b.words[j];
                    return this;
                }, o.prototype.add = function(a) {
                    var h;
                    return a.negative !== 0 && this.negative === 0 ? (a.negative = 0, h = this.sub(a), a.negative ^= 1, h) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = a.sub(this), this.negative = 1, h) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this);
                }, o.prototype.isub = function(a) {
                    if (a.negative !== 0) {
                        a.negative = 0;
                        var h = this.iadd(a);
                        return a.negative = 1, h._normSign();
                    } else if (this.negative !== 0) return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
                    var b = this.cmp(a);
                    if (b === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    var E, S;
                    b > 0 ? (E = this, S = a) : (E = a, S = this);
                    for(var j = 0, I = 0; I < S.length; I++)h = (E.words[I] | 0) - (S.words[I] | 0) + j, j = h >> 26, this.words[I] = h & 67108863;
                    for(; j !== 0 && I < E.length; I++)h = (E.words[I] | 0) + j, j = h >> 26, this.words[I] = h & 67108863;
                    if (j === 0 && I < E.length && E !== this) for(; I < E.length; I++)this.words[I] = E.words[I];
                    return this.length = Math.max(this.length, I), E !== this && (this.negative = 1), this._strip();
                }, o.prototype.sub = function(a) {
                    return this.clone().isub(a);
                };
                function z(y, a, h) {
                    h.negative = a.negative ^ y.negative;
                    var b = y.length + a.length | 0;
                    h.length = b, b = b - 1 | 0;
                    var E = y.words[0] | 0, S = a.words[0] | 0, j = E * S, I = j & 67108863, x = j / 67108864 | 0;
                    h.words[0] = I;
                    for(var c = 1; c < b; c++){
                        for(var u = x >>> 26, w = x & 67108863, O = Math.min(c, a.length - 1), F = Math.max(0, c - y.length + 1); F <= O; F++){
                            var q = c - F | 0;
                            E = y.words[q] | 0, S = a.words[F] | 0, j = E * S + w, u += j / 67108864 | 0, w = j & 67108863;
                        }
                        h.words[c] = w | 0, x = u | 0;
                    }
                    return x !== 0 ? h.words[c] = x | 0 : h.length--, h._strip();
                }
                var G = function(a, h, b) {
                    var E = a.words, S = h.words, j = b.words, I = 0, x, c, u, w = E[0] | 0, O = w & 8191, F = w >>> 13, q = E[1] | 0, Z = q & 8191, Q = q >>> 13, ie = E[2] | 0, se = ie & 8191, ae = ie >>> 13, Ce = E[3] | 0, ce = Ce & 8191, ge = Ce >>> 13, Fe = E[4] | 0, le = Fe & 8191, _e = Fe >>> 13, Ue = E[5] | 0, he = Ue & 8191, ue = Ue >>> 13, ke = E[6] | 0, de = ke & 8191, be = ke >>> 13, De = E[7] | 0, pe = De & 8191, m = De >>> 13, d = E[8] | 0, g = d & 8191, M = d >>> 13, C = E[9] | 0, W = C & 8191, V = C >>> 13, oe = S[0] | 0, re = oe & 8191, ne = oe >>> 13, fe = S[1] | 0, ee = fe & 8191, ye = fe >>> 13, it = S[2] | 0, me = it & 8191, we = it >>> 13, st = S[3] | 0, xe = st & 8191, Ee = st >>> 13, at = S[4] | 0, Me = at & 8191, Se = at >>> 13, ct = S[5] | 0, Oe = ct & 8191, ve = ct >>> 13, ut = S[6] | 0, je = ut & 8191, Le = ut >>> 13, ft = S[7] | 0, Ae = ft & 8191, Ie = ft >>> 13, lt = S[8] | 0, Be = lt & 8191, Te = lt >>> 13, dt = S[9] | 0, Re = dt & 8191, Ne = dt >>> 13;
                    b.negative = a.negative ^ h.negative, b.length = 19, x = Math.imul(O, re), c = Math.imul(O, ne), c = c + Math.imul(F, re) | 0, u = Math.imul(F, ne);
                    var We = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, x = Math.imul(Z, re), c = Math.imul(Z, ne), c = c + Math.imul(Q, re) | 0, u = Math.imul(Q, ne), x = x + Math.imul(O, ee) | 0, c = c + Math.imul(O, ye) | 0, c = c + Math.imul(F, ee) | 0, u = u + Math.imul(F, ye) | 0;
                    var ze = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, x = Math.imul(se, re), c = Math.imul(se, ne), c = c + Math.imul(ae, re) | 0, u = Math.imul(ae, ne), x = x + Math.imul(Z, ee) | 0, c = c + Math.imul(Z, ye) | 0, c = c + Math.imul(Q, ee) | 0, u = u + Math.imul(Q, ye) | 0, x = x + Math.imul(O, me) | 0, c = c + Math.imul(O, we) | 0, c = c + Math.imul(F, me) | 0, u = u + Math.imul(F, we) | 0;
                    var Pe = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, x = Math.imul(ce, re), c = Math.imul(ce, ne), c = c + Math.imul(ge, re) | 0, u = Math.imul(ge, ne), x = x + Math.imul(se, ee) | 0, c = c + Math.imul(se, ye) | 0, c = c + Math.imul(ae, ee) | 0, u = u + Math.imul(ae, ye) | 0, x = x + Math.imul(Z, me) | 0, c = c + Math.imul(Z, we) | 0, c = c + Math.imul(Q, me) | 0, u = u + Math.imul(Q, we) | 0, x = x + Math.imul(O, xe) | 0, c = c + Math.imul(O, Ee) | 0, c = c + Math.imul(F, xe) | 0, u = u + Math.imul(F, Ee) | 0;
                    var He = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, x = Math.imul(le, re), c = Math.imul(le, ne), c = c + Math.imul(_e, re) | 0, u = Math.imul(_e, ne), x = x + Math.imul(ce, ee) | 0, c = c + Math.imul(ce, ye) | 0, c = c + Math.imul(ge, ee) | 0, u = u + Math.imul(ge, ye) | 0, x = x + Math.imul(se, me) | 0, c = c + Math.imul(se, we) | 0, c = c + Math.imul(ae, me) | 0, u = u + Math.imul(ae, we) | 0, x = x + Math.imul(Z, xe) | 0, c = c + Math.imul(Z, Ee) | 0, c = c + Math.imul(Q, xe) | 0, u = u + Math.imul(Q, Ee) | 0, x = x + Math.imul(O, Me) | 0, c = c + Math.imul(O, Se) | 0, c = c + Math.imul(F, Me) | 0, u = u + Math.imul(F, Se) | 0;
                    var Ke = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, x = Math.imul(he, re), c = Math.imul(he, ne), c = c + Math.imul(ue, re) | 0, u = Math.imul(ue, ne), x = x + Math.imul(le, ee) | 0, c = c + Math.imul(le, ye) | 0, c = c + Math.imul(_e, ee) | 0, u = u + Math.imul(_e, ye) | 0, x = x + Math.imul(ce, me) | 0, c = c + Math.imul(ce, we) | 0, c = c + Math.imul(ge, me) | 0, u = u + Math.imul(ge, we) | 0, x = x + Math.imul(se, xe) | 0, c = c + Math.imul(se, Ee) | 0, c = c + Math.imul(ae, xe) | 0, u = u + Math.imul(ae, Ee) | 0, x = x + Math.imul(Z, Me) | 0, c = c + Math.imul(Z, Se) | 0, c = c + Math.imul(Q, Me) | 0, u = u + Math.imul(Q, Se) | 0, x = x + Math.imul(O, Oe) | 0, c = c + Math.imul(O, ve) | 0, c = c + Math.imul(F, Oe) | 0, u = u + Math.imul(F, ve) | 0;
                    var Ve = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, x = Math.imul(de, re), c = Math.imul(de, ne), c = c + Math.imul(be, re) | 0, u = Math.imul(be, ne), x = x + Math.imul(he, ee) | 0, c = c + Math.imul(he, ye) | 0, c = c + Math.imul(ue, ee) | 0, u = u + Math.imul(ue, ye) | 0, x = x + Math.imul(le, me) | 0, c = c + Math.imul(le, we) | 0, c = c + Math.imul(_e, me) | 0, u = u + Math.imul(_e, we) | 0, x = x + Math.imul(ce, xe) | 0, c = c + Math.imul(ce, Ee) | 0, c = c + Math.imul(ge, xe) | 0, u = u + Math.imul(ge, Ee) | 0, x = x + Math.imul(se, Me) | 0, c = c + Math.imul(se, Se) | 0, c = c + Math.imul(ae, Me) | 0, u = u + Math.imul(ae, Se) | 0, x = x + Math.imul(Z, Oe) | 0, c = c + Math.imul(Z, ve) | 0, c = c + Math.imul(Q, Oe) | 0, u = u + Math.imul(Q, ve) | 0, x = x + Math.imul(O, je) | 0, c = c + Math.imul(O, Le) | 0, c = c + Math.imul(F, je) | 0, u = u + Math.imul(F, Le) | 0;
                    var qe = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, x = Math.imul(pe, re), c = Math.imul(pe, ne), c = c + Math.imul(m, re) | 0, u = Math.imul(m, ne), x = x + Math.imul(de, ee) | 0, c = c + Math.imul(de, ye) | 0, c = c + Math.imul(be, ee) | 0, u = u + Math.imul(be, ye) | 0, x = x + Math.imul(he, me) | 0, c = c + Math.imul(he, we) | 0, c = c + Math.imul(ue, me) | 0, u = u + Math.imul(ue, we) | 0, x = x + Math.imul(le, xe) | 0, c = c + Math.imul(le, Ee) | 0, c = c + Math.imul(_e, xe) | 0, u = u + Math.imul(_e, Ee) | 0, x = x + Math.imul(ce, Me) | 0, c = c + Math.imul(ce, Se) | 0, c = c + Math.imul(ge, Me) | 0, u = u + Math.imul(ge, Se) | 0, x = x + Math.imul(se, Oe) | 0, c = c + Math.imul(se, ve) | 0, c = c + Math.imul(ae, Oe) | 0, u = u + Math.imul(ae, ve) | 0, x = x + Math.imul(Z, je) | 0, c = c + Math.imul(Z, Le) | 0, c = c + Math.imul(Q, je) | 0, u = u + Math.imul(Q, Le) | 0, x = x + Math.imul(O, Ae) | 0, c = c + Math.imul(O, Ie) | 0, c = c + Math.imul(F, Ae) | 0, u = u + Math.imul(F, Ie) | 0;
                    var Ge = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, x = Math.imul(g, re), c = Math.imul(g, ne), c = c + Math.imul(M, re) | 0, u = Math.imul(M, ne), x = x + Math.imul(pe, ee) | 0, c = c + Math.imul(pe, ye) | 0, c = c + Math.imul(m, ee) | 0, u = u + Math.imul(m, ye) | 0, x = x + Math.imul(de, me) | 0, c = c + Math.imul(de, we) | 0, c = c + Math.imul(be, me) | 0, u = u + Math.imul(be, we) | 0, x = x + Math.imul(he, xe) | 0, c = c + Math.imul(he, Ee) | 0, c = c + Math.imul(ue, xe) | 0, u = u + Math.imul(ue, Ee) | 0, x = x + Math.imul(le, Me) | 0, c = c + Math.imul(le, Se) | 0, c = c + Math.imul(_e, Me) | 0, u = u + Math.imul(_e, Se) | 0, x = x + Math.imul(ce, Oe) | 0, c = c + Math.imul(ce, ve) | 0, c = c + Math.imul(ge, Oe) | 0, u = u + Math.imul(ge, ve) | 0, x = x + Math.imul(se, je) | 0, c = c + Math.imul(se, Le) | 0, c = c + Math.imul(ae, je) | 0, u = u + Math.imul(ae, Le) | 0, x = x + Math.imul(Z, Ae) | 0, c = c + Math.imul(Z, Ie) | 0, c = c + Math.imul(Q, Ae) | 0, u = u + Math.imul(Q, Ie) | 0, x = x + Math.imul(O, Be) | 0, c = c + Math.imul(O, Te) | 0, c = c + Math.imul(F, Be) | 0, u = u + Math.imul(F, Te) | 0;
                    var $e = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, x = Math.imul(W, re), c = Math.imul(W, ne), c = c + Math.imul(V, re) | 0, u = Math.imul(V, ne), x = x + Math.imul(g, ee) | 0, c = c + Math.imul(g, ye) | 0, c = c + Math.imul(M, ee) | 0, u = u + Math.imul(M, ye) | 0, x = x + Math.imul(pe, me) | 0, c = c + Math.imul(pe, we) | 0, c = c + Math.imul(m, me) | 0, u = u + Math.imul(m, we) | 0, x = x + Math.imul(de, xe) | 0, c = c + Math.imul(de, Ee) | 0, c = c + Math.imul(be, xe) | 0, u = u + Math.imul(be, Ee) | 0, x = x + Math.imul(he, Me) | 0, c = c + Math.imul(he, Se) | 0, c = c + Math.imul(ue, Me) | 0, u = u + Math.imul(ue, Se) | 0, x = x + Math.imul(le, Oe) | 0, c = c + Math.imul(le, ve) | 0, c = c + Math.imul(_e, Oe) | 0, u = u + Math.imul(_e, ve) | 0, x = x + Math.imul(ce, je) | 0, c = c + Math.imul(ce, Le) | 0, c = c + Math.imul(ge, je) | 0, u = u + Math.imul(ge, Le) | 0, x = x + Math.imul(se, Ae) | 0, c = c + Math.imul(se, Ie) | 0, c = c + Math.imul(ae, Ae) | 0, u = u + Math.imul(ae, Ie) | 0, x = x + Math.imul(Z, Be) | 0, c = c + Math.imul(Z, Te) | 0, c = c + Math.imul(Q, Be) | 0, u = u + Math.imul(Q, Te) | 0, x = x + Math.imul(O, Re) | 0, c = c + Math.imul(O, Ne) | 0, c = c + Math.imul(F, Re) | 0, u = u + Math.imul(F, Ne) | 0;
                    var Ze = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, x = Math.imul(W, ee), c = Math.imul(W, ye), c = c + Math.imul(V, ee) | 0, u = Math.imul(V, ye), x = x + Math.imul(g, me) | 0, c = c + Math.imul(g, we) | 0, c = c + Math.imul(M, me) | 0, u = u + Math.imul(M, we) | 0, x = x + Math.imul(pe, xe) | 0, c = c + Math.imul(pe, Ee) | 0, c = c + Math.imul(m, xe) | 0, u = u + Math.imul(m, Ee) | 0, x = x + Math.imul(de, Me) | 0, c = c + Math.imul(de, Se) | 0, c = c + Math.imul(be, Me) | 0, u = u + Math.imul(be, Se) | 0, x = x + Math.imul(he, Oe) | 0, c = c + Math.imul(he, ve) | 0, c = c + Math.imul(ue, Oe) | 0, u = u + Math.imul(ue, ve) | 0, x = x + Math.imul(le, je) | 0, c = c + Math.imul(le, Le) | 0, c = c + Math.imul(_e, je) | 0, u = u + Math.imul(_e, Le) | 0, x = x + Math.imul(ce, Ae) | 0, c = c + Math.imul(ce, Ie) | 0, c = c + Math.imul(ge, Ae) | 0, u = u + Math.imul(ge, Ie) | 0, x = x + Math.imul(se, Be) | 0, c = c + Math.imul(se, Te) | 0, c = c + Math.imul(ae, Be) | 0, u = u + Math.imul(ae, Te) | 0, x = x + Math.imul(Z, Re) | 0, c = c + Math.imul(Z, Ne) | 0, c = c + Math.imul(Q, Re) | 0, u = u + Math.imul(Q, Ne) | 0;
                    var Ye = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, x = Math.imul(W, me), c = Math.imul(W, we), c = c + Math.imul(V, me) | 0, u = Math.imul(V, we), x = x + Math.imul(g, xe) | 0, c = c + Math.imul(g, Ee) | 0, c = c + Math.imul(M, xe) | 0, u = u + Math.imul(M, Ee) | 0, x = x + Math.imul(pe, Me) | 0, c = c + Math.imul(pe, Se) | 0, c = c + Math.imul(m, Me) | 0, u = u + Math.imul(m, Se) | 0, x = x + Math.imul(de, Oe) | 0, c = c + Math.imul(de, ve) | 0, c = c + Math.imul(be, Oe) | 0, u = u + Math.imul(be, ve) | 0, x = x + Math.imul(he, je) | 0, c = c + Math.imul(he, Le) | 0, c = c + Math.imul(ue, je) | 0, u = u + Math.imul(ue, Le) | 0, x = x + Math.imul(le, Ae) | 0, c = c + Math.imul(le, Ie) | 0, c = c + Math.imul(_e, Ae) | 0, u = u + Math.imul(_e, Ie) | 0, x = x + Math.imul(ce, Be) | 0, c = c + Math.imul(ce, Te) | 0, c = c + Math.imul(ge, Be) | 0, u = u + Math.imul(ge, Te) | 0, x = x + Math.imul(se, Re) | 0, c = c + Math.imul(se, Ne) | 0, c = c + Math.imul(ae, Re) | 0, u = u + Math.imul(ae, Ne) | 0;
                    var Qe = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, x = Math.imul(W, xe), c = Math.imul(W, Ee), c = c + Math.imul(V, xe) | 0, u = Math.imul(V, Ee), x = x + Math.imul(g, Me) | 0, c = c + Math.imul(g, Se) | 0, c = c + Math.imul(M, Me) | 0, u = u + Math.imul(M, Se) | 0, x = x + Math.imul(pe, Oe) | 0, c = c + Math.imul(pe, ve) | 0, c = c + Math.imul(m, Oe) | 0, u = u + Math.imul(m, ve) | 0, x = x + Math.imul(de, je) | 0, c = c + Math.imul(de, Le) | 0, c = c + Math.imul(be, je) | 0, u = u + Math.imul(be, Le) | 0, x = x + Math.imul(he, Ae) | 0, c = c + Math.imul(he, Ie) | 0, c = c + Math.imul(ue, Ae) | 0, u = u + Math.imul(ue, Ie) | 0, x = x + Math.imul(le, Be) | 0, c = c + Math.imul(le, Te) | 0, c = c + Math.imul(_e, Be) | 0, u = u + Math.imul(_e, Te) | 0, x = x + Math.imul(ce, Re) | 0, c = c + Math.imul(ce, Ne) | 0, c = c + Math.imul(ge, Re) | 0, u = u + Math.imul(ge, Ne) | 0;
                    var Xe = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, x = Math.imul(W, Me), c = Math.imul(W, Se), c = c + Math.imul(V, Me) | 0, u = Math.imul(V, Se), x = x + Math.imul(g, Oe) | 0, c = c + Math.imul(g, ve) | 0, c = c + Math.imul(M, Oe) | 0, u = u + Math.imul(M, ve) | 0, x = x + Math.imul(pe, je) | 0, c = c + Math.imul(pe, Le) | 0, c = c + Math.imul(m, je) | 0, u = u + Math.imul(m, Le) | 0, x = x + Math.imul(de, Ae) | 0, c = c + Math.imul(de, Ie) | 0, c = c + Math.imul(be, Ae) | 0, u = u + Math.imul(be, Ie) | 0, x = x + Math.imul(he, Be) | 0, c = c + Math.imul(he, Te) | 0, c = c + Math.imul(ue, Be) | 0, u = u + Math.imul(ue, Te) | 0, x = x + Math.imul(le, Re) | 0, c = c + Math.imul(le, Ne) | 0, c = c + Math.imul(_e, Re) | 0, u = u + Math.imul(_e, Ne) | 0;
                    var Je = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, x = Math.imul(W, Oe), c = Math.imul(W, ve), c = c + Math.imul(V, Oe) | 0, u = Math.imul(V, ve), x = x + Math.imul(g, je) | 0, c = c + Math.imul(g, Le) | 0, c = c + Math.imul(M, je) | 0, u = u + Math.imul(M, Le) | 0, x = x + Math.imul(pe, Ae) | 0, c = c + Math.imul(pe, Ie) | 0, c = c + Math.imul(m, Ae) | 0, u = u + Math.imul(m, Ie) | 0, x = x + Math.imul(de, Be) | 0, c = c + Math.imul(de, Te) | 0, c = c + Math.imul(be, Be) | 0, u = u + Math.imul(be, Te) | 0, x = x + Math.imul(he, Re) | 0, c = c + Math.imul(he, Ne) | 0, c = c + Math.imul(ue, Re) | 0, u = u + Math.imul(ue, Ne) | 0;
                    var et = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, x = Math.imul(W, je), c = Math.imul(W, Le), c = c + Math.imul(V, je) | 0, u = Math.imul(V, Le), x = x + Math.imul(g, Ae) | 0, c = c + Math.imul(g, Ie) | 0, c = c + Math.imul(M, Ae) | 0, u = u + Math.imul(M, Ie) | 0, x = x + Math.imul(pe, Be) | 0, c = c + Math.imul(pe, Te) | 0, c = c + Math.imul(m, Be) | 0, u = u + Math.imul(m, Te) | 0, x = x + Math.imul(de, Re) | 0, c = c + Math.imul(de, Ne) | 0, c = c + Math.imul(be, Re) | 0, u = u + Math.imul(be, Ne) | 0;
                    var tt = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, x = Math.imul(W, Ae), c = Math.imul(W, Ie), c = c + Math.imul(V, Ae) | 0, u = Math.imul(V, Ie), x = x + Math.imul(g, Be) | 0, c = c + Math.imul(g, Te) | 0, c = c + Math.imul(M, Be) | 0, u = u + Math.imul(M, Te) | 0, x = x + Math.imul(pe, Re) | 0, c = c + Math.imul(pe, Ne) | 0, c = c + Math.imul(m, Re) | 0, u = u + Math.imul(m, Ne) | 0;
                    var nt = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (nt >>> 26) | 0, nt &= 67108863, x = Math.imul(W, Be), c = Math.imul(W, Te), c = c + Math.imul(V, Be) | 0, u = Math.imul(V, Te), x = x + Math.imul(g, Re) | 0, c = c + Math.imul(g, Ne) | 0, c = c + Math.imul(M, Re) | 0, u = u + Math.imul(M, Ne) | 0;
                    var rt = (I + x | 0) + ((c & 8191) << 13) | 0;
                    I = (u + (c >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, x = Math.imul(W, Re), c = Math.imul(W, Ne), c = c + Math.imul(V, Re) | 0, u = Math.imul(V, Ne);
                    var ot = (I + x | 0) + ((c & 8191) << 13) | 0;
                    return I = (u + (c >>> 13) | 0) + (ot >>> 26) | 0, ot &= 67108863, j[0] = We, j[1] = ze, j[2] = Pe, j[3] = He, j[4] = Ke, j[5] = Ve, j[6] = qe, j[7] = Ge, j[8] = $e, j[9] = Ze, j[10] = Ye, j[11] = Qe, j[12] = Xe, j[13] = Je, j[14] = et, j[15] = tt, j[16] = nt, j[17] = rt, j[18] = ot, I !== 0 && (j[19] = I, b.length++), b;
                };
                Math.imul || (G = z);
                function H(y, a, h) {
                    h.negative = a.negative ^ y.negative, h.length = y.length + a.length;
                    for(var b = 0, E = 0, S = 0; S < h.length - 1; S++){
                        var j = E;
                        E = 0;
                        for(var I = b & 67108863, x = Math.min(S, a.length - 1), c = Math.max(0, S - y.length + 1); c <= x; c++){
                            var u = S - c, w = y.words[u] | 0, O = a.words[c] | 0, F = w * O, q = F & 67108863;
                            j = j + (F / 67108864 | 0) | 0, q = q + I | 0, I = q & 67108863, j = j + (q >>> 26) | 0, E += j >>> 26, j &= 67108863;
                        }
                        h.words[S] = I, b = j, j = E;
                    }
                    return b !== 0 ? h.words[S] = b : h.length--, h._strip();
                }
                function Y(y, a, h) {
                    return H(y, a, h);
                }
                o.prototype.mulTo = function(a, h) {
                    var b, E = this.length + a.length;
                    return this.length === 10 && a.length === 10 ? b = G(this, a, h) : E < 63 ? b = z(this, a, h) : E < 1024 ? b = H(this, a, h) : b = Y(this, a, h), b;
                }, o.prototype.mul = function(a) {
                    var h = new o(null);
                    return h.words = new Array(this.length + a.length), this.mulTo(a, h);
                }, o.prototype.mulf = function(a) {
                    var h = new o(null);
                    return h.words = new Array(this.length + a.length), Y(this, a, h);
                }, o.prototype.imul = function(a) {
                    return this.clone().mulTo(a, this);
                }, o.prototype.imuln = function(a) {
                    var h = a < 0;
                    h && (a = -a), r(typeof a == "number"), r(a < 67108864);
                    for(var b = 0, E = 0; E < this.length; E++){
                        var S = (this.words[E] | 0) * a, j = (S & 67108863) + (b & 67108863);
                        b >>= 26, b += S / 67108864 | 0, b += j >>> 26, this.words[E] = j & 67108863;
                    }
                    return b !== 0 && (this.words[E] = b, this.length++), this.length = a === 0 ? 1 : this.length, h ? this.ineg() : this;
                }, o.prototype.muln = function(a) {
                    return this.clone().imuln(a);
                }, o.prototype.sqr = function() {
                    return this.mul(this);
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone());
                }, o.prototype.pow = function(a) {
                    var h = U(a);
                    if (h.length === 0) return new o(1);
                    for(var b = this, E = 0; E < h.length && h[E] === 0; E++, b = b.sqr());
                    if (++E < h.length) for(var S = b.sqr(); E < h.length; E++, S = S.sqr())h[E] !== 0 && (b = b.mul(S));
                    return b;
                }, o.prototype.iushln = function(a) {
                    r(typeof a == "number" && a >= 0);
                    var h = a % 26, b = (a - h) / 26, E = 67108863 >>> 26 - h << 26 - h, S;
                    if (h !== 0) {
                        var j = 0;
                        for(S = 0; S < this.length; S++){
                            var I = this.words[S] & E, x = (this.words[S] | 0) - I << h;
                            this.words[S] = x | j, j = I >>> 26 - h;
                        }
                        j && (this.words[S] = j, this.length++);
                    }
                    if (b !== 0) {
                        for(S = this.length - 1; S >= 0; S--)this.words[S + b] = this.words[S];
                        for(S = 0; S < b; S++)this.words[S] = 0;
                        this.length += b;
                    }
                    return this._strip();
                }, o.prototype.ishln = function(a) {
                    return r(this.negative === 0), this.iushln(a);
                }, o.prototype.iushrn = function(a, h, b) {
                    r(typeof a == "number" && a >= 0);
                    var E;
                    h ? E = (h - h % 26) / 26 : E = 0;
                    var S = a % 26, j = Math.min((a - S) / 26, this.length), I = 67108863 ^ 67108863 >>> S << S, x = b;
                    if (E -= j, E = Math.max(0, E), x) {
                        for(var c = 0; c < j; c++)x.words[c] = this.words[c];
                        x.length = j;
                    }
                    if (j !== 0) if (this.length > j) for(this.length -= j, c = 0; c < this.length; c++)this.words[c] = this.words[c + j];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for(c = this.length - 1; c >= 0 && (u !== 0 || c >= E); c--){
                        var w = this.words[c] | 0;
                        this.words[c] = u << 26 - S | w >>> S, u = w & I;
                    }
                    return x && u !== 0 && (x.words[x.length++] = u), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
                }, o.prototype.ishrn = function(a, h, b) {
                    return r(this.negative === 0), this.iushrn(a, h, b);
                }, o.prototype.shln = function(a) {
                    return this.clone().ishln(a);
                }, o.prototype.ushln = function(a) {
                    return this.clone().iushln(a);
                }, o.prototype.shrn = function(a) {
                    return this.clone().ishrn(a);
                }, o.prototype.ushrn = function(a) {
                    return this.clone().iushrn(a);
                }, o.prototype.testn = function(a) {
                    r(typeof a == "number" && a >= 0);
                    var h = a % 26, b = (a - h) / 26, E = 1 << h;
                    if (this.length <= b) return !1;
                    var S = this.words[b];
                    return !!(S & E);
                }, o.prototype.imaskn = function(a) {
                    r(typeof a == "number" && a >= 0);
                    var h = a % 26, b = (a - h) / 26;
                    if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= b) return this;
                    if (h !== 0 && b++, this.length = Math.min(b, this.length), h !== 0) {
                        var E = 67108863 ^ 67108863 >>> h << h;
                        this.words[this.length - 1] &= E;
                    }
                    return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
                }, o.prototype.maskn = function(a) {
                    return this.clone().imaskn(a);
                }, o.prototype.iaddn = function(a) {
                    return r(typeof a == "number"), r(a < 67108864), a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= a ? (this.words[0] = a - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a);
                }, o.prototype._iaddn = function(a) {
                    this.words[0] += a;
                    for(var h = 0; h < this.length && this.words[h] >= 67108864; h++)this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
                    return this.length = Math.max(this.length, h + 1), this;
                }, o.prototype.isubn = function(a) {
                    if (r(typeof a == "number"), r(a < 67108864), a < 0) return this.iaddn(-a);
                    if (this.negative !== 0) return this.negative = 0, this.iaddn(a), this.negative = 1, this;
                    if (this.words[0] -= a, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else for(var h = 0; h < this.length && this.words[h] < 0; h++)this.words[h] += 67108864, this.words[h + 1] -= 1;
                    return this._strip();
                }, o.prototype.addn = function(a) {
                    return this.clone().iaddn(a);
                }, o.prototype.subn = function(a) {
                    return this.clone().isubn(a);
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this;
                }, o.prototype.abs = function() {
                    return this.clone().iabs();
                }, o.prototype._ishlnsubmul = function(a, h, b) {
                    var E = a.length + b, S;
                    this._expand(E);
                    var j, I = 0;
                    for(S = 0; S < a.length; S++){
                        j = (this.words[S + b] | 0) + I;
                        var x = (a.words[S] | 0) * h;
                        j -= x & 67108863, I = (j >> 26) - (x / 67108864 | 0), this.words[S + b] = j & 67108863;
                    }
                    for(; S < this.length - b; S++)j = (this.words[S + b] | 0) + I, I = j >> 26, this.words[S + b] = j & 67108863;
                    if (I === 0) return this._strip();
                    for(r(I === -1), I = 0, S = 0; S < this.length; S++)j = -(this.words[S] | 0) + I, I = j >> 26, this.words[S] = j & 67108863;
                    return this.negative = 1, this._strip();
                }, o.prototype._wordDiv = function(a, h) {
                    var b = this.length - a.length, E = this.clone(), S = a, j = S.words[S.length - 1] | 0, I = this._countBits(j);
                    b = 26 - I, b !== 0 && (S = S.ushln(b), E.iushln(b), j = S.words[S.length - 1] | 0);
                    var x = E.length - S.length, c;
                    if (h !== "mod") {
                        c = new o(null), c.length = x + 1, c.words = new Array(c.length);
                        for(var u = 0; u < c.length; u++)c.words[u] = 0;
                    }
                    var w = E.clone()._ishlnsubmul(S, 1, x);
                    w.negative === 0 && (E = w, c && (c.words[x] = 1));
                    for(var O = x - 1; O >= 0; O--){
                        var F = (E.words[S.length + O] | 0) * 67108864 + (E.words[S.length + O - 1] | 0);
                        for(F = Math.min(F / j | 0, 67108863), E._ishlnsubmul(S, F, O); E.negative !== 0;)F--, E.negative = 0, E._ishlnsubmul(S, 1, O), E.isZero() || (E.negative ^= 1);
                        c && (c.words[O] = F);
                    }
                    return c && c._strip(), E._strip(), h !== "div" && b !== 0 && E.iushrn(b), {
                        div: c || null,
                        mod: E
                    };
                }, o.prototype.divmod = function(a, h, b) {
                    if (r(!a.isZero()), this.isZero()) return {
                        div: new o(0),
                        mod: new o(0)
                    };
                    var E, S, j;
                    return this.negative !== 0 && a.negative === 0 ? (j = this.neg().divmod(a, h), h !== "mod" && (E = j.div.neg()), h !== "div" && (S = j.mod.neg(), b && S.negative !== 0 && S.iadd(a)), {
                        div: E,
                        mod: S
                    }) : this.negative === 0 && a.negative !== 0 ? (j = this.divmod(a.neg(), h), h !== "mod" && (E = j.div.neg()), {
                        div: E,
                        mod: j.mod
                    }) : (this.negative & a.negative) !== 0 ? (j = this.neg().divmod(a.neg(), h), h !== "div" && (S = j.mod.neg(), b && S.negative !== 0 && S.isub(a)), {
                        div: j.div,
                        mod: S
                    }) : a.length > this.length || this.cmp(a) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : a.length === 1 ? h === "div" ? {
                        div: this.divn(a.words[0]),
                        mod: null
                    } : h === "mod" ? {
                        div: null,
                        mod: new o(this.modrn(a.words[0]))
                    } : {
                        div: this.divn(a.words[0]),
                        mod: new o(this.modrn(a.words[0]))
                    } : this._wordDiv(a, h);
                }, o.prototype.div = function(a) {
                    return this.divmod(a, "div", !1).div;
                }, o.prototype.mod = function(a) {
                    return this.divmod(a, "mod", !1).mod;
                }, o.prototype.umod = function(a) {
                    return this.divmod(a, "mod", !0).mod;
                }, o.prototype.divRound = function(a) {
                    var h = this.divmod(a);
                    if (h.mod.isZero()) return h.div;
                    var b = h.div.negative !== 0 ? h.mod.isub(a) : h.mod, E = a.ushrn(1), S = a.andln(1), j = b.cmp(E);
                    return j < 0 || S === 1 && j === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1);
                }, o.prototype.modrn = function(a) {
                    var h = a < 0;
                    h && (a = -a), r(a <= 67108863);
                    for(var b = (1 << 26) % a, E = 0, S = this.length - 1; S >= 0; S--)E = (b * E + (this.words[S] | 0)) % a;
                    return h ? -E : E;
                }, o.prototype.modn = function(a) {
                    return this.modrn(a);
                }, o.prototype.idivn = function(a) {
                    var h = a < 0;
                    h && (a = -a), r(a <= 67108863);
                    for(var b = 0, E = this.length - 1; E >= 0; E--){
                        var S = (this.words[E] | 0) + b * 67108864;
                        this.words[E] = S / a | 0, b = S % a;
                    }
                    return this._strip(), h ? this.ineg() : this;
                }, o.prototype.divn = function(a) {
                    return this.clone().idivn(a);
                }, o.prototype.egcd = function(a) {
                    r(a.negative === 0), r(!a.isZero());
                    var h = this, b = a.clone();
                    h.negative !== 0 ? h = h.umod(a) : h = h.clone();
                    for(var E = new o(1), S = new o(0), j = new o(0), I = new o(1), x = 0; h.isEven() && b.isEven();)h.iushrn(1), b.iushrn(1), ++x;
                    for(var c = b.clone(), u = h.clone(); !h.isZero();){
                        for(var w = 0, O = 1; (h.words[0] & O) === 0 && w < 26; ++w, O <<= 1);
                        if (w > 0) for(h.iushrn(w); w-- > 0;)(E.isOdd() || S.isOdd()) && (E.iadd(c), S.isub(u)), E.iushrn(1), S.iushrn(1);
                        for(var F = 0, q = 1; (b.words[0] & q) === 0 && F < 26; ++F, q <<= 1);
                        if (F > 0) for(b.iushrn(F); F-- > 0;)(j.isOdd() || I.isOdd()) && (j.iadd(c), I.isub(u)), j.iushrn(1), I.iushrn(1);
                        h.cmp(b) >= 0 ? (h.isub(b), E.isub(j), S.isub(I)) : (b.isub(h), j.isub(E), I.isub(S));
                    }
                    return {
                        a: j,
                        b: I,
                        gcd: b.iushln(x)
                    };
                }, o.prototype._invmp = function(a) {
                    r(a.negative === 0), r(!a.isZero());
                    var h = this, b = a.clone();
                    h.negative !== 0 ? h = h.umod(a) : h = h.clone();
                    for(var E = new o(1), S = new o(0), j = b.clone(); h.cmpn(1) > 0 && b.cmpn(1) > 0;){
                        for(var I = 0, x = 1; (h.words[0] & x) === 0 && I < 26; ++I, x <<= 1);
                        if (I > 0) for(h.iushrn(I); I-- > 0;)E.isOdd() && E.iadd(j), E.iushrn(1);
                        for(var c = 0, u = 1; (b.words[0] & u) === 0 && c < 26; ++c, u <<= 1);
                        if (c > 0) for(b.iushrn(c); c-- > 0;)S.isOdd() && S.iadd(j), S.iushrn(1);
                        h.cmp(b) >= 0 ? (h.isub(b), E.isub(S)) : (b.isub(h), S.isub(E));
                    }
                    var w;
                    return h.cmpn(1) === 0 ? w = E : w = S, w.cmpn(0) < 0 && w.iadd(a), w;
                }, o.prototype.gcd = function(a) {
                    if (this.isZero()) return a.abs();
                    if (a.isZero()) return this.abs();
                    var h = this.clone(), b = a.clone();
                    h.negative = 0, b.negative = 0;
                    for(var E = 0; h.isEven() && b.isEven(); E++)h.iushrn(1), b.iushrn(1);
                    do {
                        for(; h.isEven();)h.iushrn(1);
                        for(; b.isEven();)b.iushrn(1);
                        var S = h.cmp(b);
                        if (S < 0) {
                            var j = h;
                            h = b, b = j;
                        } else if (S === 0 || b.cmpn(1) === 0) break;
                        h.isub(b);
                    }while (!0);
                    return b.iushln(E);
                }, o.prototype.invm = function(a) {
                    return this.egcd(a).a.umod(a);
                }, o.prototype.isEven = function() {
                    return (this.words[0] & 1) === 0;
                }, o.prototype.isOdd = function() {
                    return (this.words[0] & 1) === 1;
                }, o.prototype.andln = function(a) {
                    return this.words[0] & a;
                }, o.prototype.bincn = function(a) {
                    r(typeof a == "number");
                    var h = a % 26, b = (a - h) / 26, E = 1 << h;
                    if (this.length <= b) return this._expand(b + 1), this.words[b] |= E, this;
                    for(var S = E, j = b; S !== 0 && j < this.length; j++){
                        var I = this.words[j] | 0;
                        I += S, S = I >>> 26, I &= 67108863, this.words[j] = I;
                    }
                    return S !== 0 && (this.words[j] = S, this.length++), this;
                }, o.prototype.isZero = function() {
                    return this.length === 1 && this.words[0] === 0;
                }, o.prototype.cmpn = function(a) {
                    var h = a < 0;
                    if (this.negative !== 0 && !h) return -1;
                    if (this.negative === 0 && h) return 1;
                    this._strip();
                    var b;
                    if (this.length > 1) b = 1;
                    else {
                        h && (a = -a), r(a <= 67108863, "Number is too big");
                        var E = this.words[0] | 0;
                        b = E === a ? 0 : E < a ? -1 : 1;
                    }
                    return this.negative !== 0 ? -b | 0 : b;
                }, o.prototype.cmp = function(a) {
                    if (this.negative !== 0 && a.negative === 0) return -1;
                    if (this.negative === 0 && a.negative !== 0) return 1;
                    var h = this.ucmp(a);
                    return this.negative !== 0 ? -h | 0 : h;
                }, o.prototype.ucmp = function(a) {
                    if (this.length > a.length) return 1;
                    if (this.length < a.length) return -1;
                    for(var h = 0, b = this.length - 1; b >= 0; b--){
                        var E = this.words[b] | 0, S = a.words[b] | 0;
                        if (E !== S) {
                            E < S ? h = -1 : E > S && (h = 1);
                            break;
                        }
                    }
                    return h;
                }, o.prototype.gtn = function(a) {
                    return this.cmpn(a) === 1;
                }, o.prototype.gt = function(a) {
                    return this.cmp(a) === 1;
                }, o.prototype.gten = function(a) {
                    return this.cmpn(a) >= 0;
                }, o.prototype.gte = function(a) {
                    return this.cmp(a) >= 0;
                }, o.prototype.ltn = function(a) {
                    return this.cmpn(a) === -1;
                }, o.prototype.lt = function(a) {
                    return this.cmp(a) === -1;
                }, o.prototype.lten = function(a) {
                    return this.cmpn(a) <= 0;
                }, o.prototype.lte = function(a) {
                    return this.cmp(a) <= 0;
                }, o.prototype.eqn = function(a) {
                    return this.cmpn(a) === 0;
                }, o.prototype.eq = function(a) {
                    return this.cmp(a) === 0;
                }, o.red = function(a) {
                    return new P(a);
                }, o.prototype.toRed = function(a) {
                    return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), a.convertTo(this)._forceRed(a);
                }, o.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
                }, o.prototype._forceRed = function(a) {
                    return this.red = a, this;
                }, o.prototype.forceRed = function(a) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(a);
                }, o.prototype.redAdd = function(a) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, a);
                }, o.prototype.redIAdd = function(a) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a);
                }, o.prototype.redSub = function(a) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, a);
                }, o.prototype.redISub = function(a) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, a);
                }, o.prototype.redShl = function(a) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, a);
                }, o.prototype.redMul = function(a) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a);
                }, o.prototype.redIMul = function(a) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a);
                }, o.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
                }, o.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
                }, o.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
                }, o.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
                }, o.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
                }, o.prototype.redPow = function(a) {
                    return r(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a);
                };
                var $ = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function X(y, a) {
                    this.name = y, this.p = new o(a, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
                }
                X.prototype._tmp = function() {
                    var a = new o(null);
                    return a.words = new Array(Math.ceil(this.n / 13)), a;
                }, X.prototype.ireduce = function(a) {
                    var h = a, b;
                    do this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), b = h.bitLength();
                    while (b > this.n);
                    var E = b < this.n ? -1 : h.ucmp(this.p);
                    return E === 0 ? (h.words[0] = 0, h.length = 1) : E > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(), h;
                }, X.prototype.split = function(a, h) {
                    a.iushrn(this.n, 0, h);
                }, X.prototype.imulK = function(a) {
                    return a.imul(this.k);
                };
                function te() {
                    X.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                }
                s(te, X), te.prototype.split = function(a, h) {
                    for(var b = 4194303, E = Math.min(a.length, 9), S = 0; S < E; S++)h.words[S] = a.words[S];
                    if (h.length = E, a.length <= 9) {
                        a.words[0] = 0, a.length = 1;
                        return;
                    }
                    var j = a.words[9];
                    for(h.words[h.length++] = j & b, S = 10; S < a.length; S++){
                        var I = a.words[S] | 0;
                        a.words[S - 10] = (I & b) << 4 | j >>> 22, j = I;
                    }
                    j >>>= 22, a.words[S - 10] = j, j === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9;
                }, te.prototype.imulK = function(a) {
                    a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
                    for(var h = 0, b = 0; b < a.length; b++){
                        var E = a.words[b] | 0;
                        h += E * 977, a.words[b] = h & 67108863, h = E * 64 + (h / 67108864 | 0);
                    }
                    return a.words[a.length - 1] === 0 && (a.length--, a.words[a.length - 1] === 0 && a.length--), a;
                };
                function J() {
                    X.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                }
                s(J, X);
                function k() {
                    X.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                }
                s(k, X);
                function D() {
                    X.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                }
                s(D, X), D.prototype.imulK = function(a) {
                    for(var h = 0, b = 0; b < a.length; b++){
                        var E = (a.words[b] | 0) * 19 + h, S = E & 67108863;
                        E >>>= 26, a.words[b] = S, h = E;
                    }
                    return h !== 0 && (a.words[a.length++] = h), a;
                }, o._prime = function(a) {
                    if ($[a]) return $[a];
                    var h;
                    if (a === "k256") h = new te;
                    else if (a === "p224") h = new J;
                    else if (a === "p192") h = new k;
                    else if (a === "p25519") h = new D;
                    else throw new Error("Unknown prime " + a);
                    return $[a] = h, h;
                };
                function P(y) {
                    if (typeof y == "string") {
                        var a = o._prime(y);
                        this.m = a.p, this.prime = a;
                    } else r(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null;
                }
                P.prototype._verify1 = function(a) {
                    r(a.negative === 0, "red works only with positives"), r(a.red, "red works only with red numbers");
                }, P.prototype._verify2 = function(a, h) {
                    r((a.negative | h.negative) === 0, "red works only with positives"), r(a.red && a.red === h.red, "red works only with red numbers");
                }, P.prototype.imod = function(a) {
                    return this.prime ? this.prime.ireduce(a)._forceRed(this) : (B(a, a.umod(this.m)._forceRed(this)), a);
                }, P.prototype.neg = function(a) {
                    return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
                }, P.prototype.add = function(a, h) {
                    this._verify2(a, h);
                    var b = a.add(h);
                    return b.cmp(this.m) >= 0 && b.isub(this.m), b._forceRed(this);
                }, P.prototype.iadd = function(a, h) {
                    this._verify2(a, h);
                    var b = a.iadd(h);
                    return b.cmp(this.m) >= 0 && b.isub(this.m), b;
                }, P.prototype.sub = function(a, h) {
                    this._verify2(a, h);
                    var b = a.sub(h);
                    return b.cmpn(0) < 0 && b.iadd(this.m), b._forceRed(this);
                }, P.prototype.isub = function(a, h) {
                    this._verify2(a, h);
                    var b = a.isub(h);
                    return b.cmpn(0) < 0 && b.iadd(this.m), b;
                }, P.prototype.shl = function(a, h) {
                    return this._verify1(a), this.imod(a.ushln(h));
                }, P.prototype.imul = function(a, h) {
                    return this._verify2(a, h), this.imod(a.imul(h));
                }, P.prototype.mul = function(a, h) {
                    return this._verify2(a, h), this.imod(a.mul(h));
                }, P.prototype.isqr = function(a) {
                    return this.imul(a, a.clone());
                }, P.prototype.sqr = function(a) {
                    return this.mul(a, a);
                }, P.prototype.sqrt = function(a) {
                    if (a.isZero()) return a.clone();
                    var h = this.m.andln(3);
                    if (r(h % 2 === 1), h === 3) {
                        var b = this.m.add(new o(1)).iushrn(2);
                        return this.pow(a, b);
                    }
                    for(var E = this.m.subn(1), S = 0; !E.isZero() && E.andln(1) === 0;)S++, E.iushrn(1);
                    r(!E.isZero());
                    var j = new o(1).toRed(this), I = j.redNeg(), x = this.m.subn(1).iushrn(1), c = this.m.bitLength();
                    for(c = new o(2 * c * c).toRed(this); this.pow(c, x).cmp(I) !== 0;)c.redIAdd(I);
                    for(var u = this.pow(c, E), w = this.pow(a, E.addn(1).iushrn(1)), O = this.pow(a, E), F = S; O.cmp(j) !== 0;){
                        for(var q = O, Z = 0; q.cmp(j) !== 0; Z++)q = q.redSqr();
                        r(Z < F);
                        var Q = this.pow(u, new o(1).iushln(F - Z - 1));
                        w = w.redMul(Q), u = Q.redSqr(), O = O.redMul(u), F = Z;
                    }
                    return w;
                }, P.prototype.invm = function(a) {
                    var h = a._invmp(this.m);
                    return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
                }, P.prototype.pow = function(a, h) {
                    if (h.isZero()) return new o(1).toRed(this);
                    if (h.cmpn(1) === 0) return a.clone();
                    var b = 4, E = new Array(1 << b);
                    E[0] = new o(1).toRed(this), E[1] = a;
                    for(var S = 2; S < E.length; S++)E[S] = this.mul(E[S - 1], a);
                    var j = E[0], I = 0, x = 0, c = h.bitLength() % 26;
                    for(c === 0 && (c = 26), S = h.length - 1; S >= 0; S--){
                        for(var u = h.words[S], w = c - 1; w >= 0; w--){
                            var O = u >> w & 1;
                            if (j !== E[0] && (j = this.sqr(j)), O === 0 && I === 0) {
                                x = 0;
                                continue;
                            }
                            I <<= 1, I |= O, x++, !(x !== b && (S !== 0 || w !== 0)) && (j = this.mul(j, E[I]), x = 0, I = 0);
                        }
                        c = 26;
                    }
                    return j;
                }, P.prototype.convertTo = function(a) {
                    var h = a.umod(this.m);
                    return h === a ? h.clone() : h;
                }, P.prototype.convertFrom = function(a) {
                    var h = a.clone();
                    return h.red = null, h;
                }, o.mont = function(a) {
                    return new K(a);
                };
                function K(y) {
                    P.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
                }
                s(K, P), K.prototype.convertTo = function(a) {
                    return this.imod(a.ushln(this.shift));
                }, K.prototype.convertFrom = function(a) {
                    var h = this.imod(a.mul(this.rinv));
                    return h.red = null, h;
                }, K.prototype.imul = function(a, h) {
                    if (a.isZero() || h.isZero()) return a.words[0] = 0, a.length = 1, a;
                    var b = a.imul(h), E = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), S = b.isub(E).iushrn(this.shift), j = S;
                    return S.cmp(this.m) >= 0 ? j = S.isub(this.m) : S.cmpn(0) < 0 && (j = S.iadd(this.m)), j._forceRed(this);
                }, K.prototype.mul = function(a, h) {
                    if (a.isZero() || h.isZero()) return new o(0)._forceRed(this);
                    var b = a.mul(h), E = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), S = b.isub(E).iushrn(this.shift), j = S;
                    return S.cmp(this.m) >= 0 ? j = S.isub(this.m) : S.cmpn(0) < 0 && (j = S.iadd(this.m)), j._forceRed(this);
                }, K.prototype.invm = function(a) {
                    var h = this.imod(a._invmp(this.m).mul(this.r2));
                    return h._forceRed(this);
                };
            })(e, bn);
        })(bn$1)), bn$1.exports;
    }
    var bnExports = requireBn();
    const BN = getDefaultExportFromCjs(bnExports);
    var safeBuffer = {
        exports: {}
    };
    var hasRequiredSafeBuffer;
    function requireSafeBuffer() {
        return hasRequiredSafeBuffer || (hasRequiredSafeBuffer = 1, (function(e, t) {
            var n = requireBuffer(), r = n.Buffer;
            function s(l, _) {
                for(var p in l)_[p] = l[p];
            }
            r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = o);
            function o(l, _, p) {
                return r(l, _, p);
            }
            o.prototype = Object.create(r.prototype), s(r, o), o.from = function(l, _, p) {
                if (typeof l == "number") throw new TypeError("Argument must not be a number");
                return r(l, _, p);
            }, o.alloc = function(l, _, p) {
                if (typeof l != "number") throw new TypeError("Argument must be a number");
                var v = r(l);
                return _ !== void 0 ? typeof p == "string" ? v.fill(_, p) : v.fill(_) : v.fill(0), v;
            }, o.allocUnsafe = function(l) {
                if (typeof l != "number") throw new TypeError("Argument must be a number");
                return r(l);
            }, o.allocUnsafeSlow = function(l) {
                if (typeof l != "number") throw new TypeError("Argument must be a number");
                return n.SlowBuffer(l);
            };
        })(safeBuffer, safeBuffer.exports)), safeBuffer.exports;
    }
    var src, hasRequiredSrc;
    function requireSrc() {
        if (hasRequiredSrc) return src;
        hasRequiredSrc = 1;
        var e = requireSafeBuffer().Buffer;
        function t(n) {
            if (n.length >= 255) throw new TypeError("Alphabet too long");
            for(var r = new Uint8Array(256), s = 0; s < r.length; s++)r[s] = 255;
            for(var o = 0; o < n.length; o++){
                var l = n.charAt(o), _ = l.charCodeAt(0);
                if (r[_] !== 255) throw new TypeError(l + " is ambiguous");
                r[_] = o;
            }
            var p = n.length, v = n.charAt(0), B = Math.log(p) / Math.log(256), T = Math.log(256) / Math.log(p);
            function A(R) {
                if ((Array.isArray(R) || R instanceof Uint8Array) && (R = e.from(R)), !e.isBuffer(R)) throw new TypeError("Expected Buffer");
                if (R.length === 0) return "";
                for(var U = 0, z = 0, G = 0, H = R.length; G !== H && R[G] === 0;)G++, U++;
                for(var Y = (H - G) * T + 1 >>> 0, $ = new Uint8Array(Y); G !== H;){
                    for(var X = R[G], te = 0, J = Y - 1; (X !== 0 || te < z) && J !== -1; J--, te++)X += 256 * $[J] >>> 0, $[J] = X % p >>> 0, X = X / p >>> 0;
                    if (X !== 0) throw new Error("Non-zero carry");
                    z = te, G++;
                }
                for(var k = Y - z; k !== Y && $[k] === 0;)k++;
                for(var D = v.repeat(U); k < Y; ++k)D += n.charAt($[k]);
                return D;
            }
            function L(R) {
                if (typeof R != "string") throw new TypeError("Expected String");
                if (R.length === 0) return e.alloc(0);
                for(var U = 0, z = 0, G = 0; R[U] === v;)z++, U++;
                for(var H = (R.length - U) * B + 1 >>> 0, Y = new Uint8Array(H); U < R.length;){
                    var $ = R.charCodeAt(U);
                    if ($ > 255) return;
                    var X = r[$];
                    if (X === 255) return;
                    for(var te = 0, J = H - 1; (X !== 0 || te < G) && J !== -1; J--, te++)X += p * Y[J] >>> 0, Y[J] = X % 256 >>> 0, X = X / 256 >>> 0;
                    if (X !== 0) throw new Error("Non-zero carry");
                    G = te, U++;
                }
                for(var k = H - G; k !== H && Y[k] === 0;)k++;
                var D = e.allocUnsafe(z + (H - k));
                D.fill(0, 0, z);
                for(var P = z; k !== H;)D[P++] = Y[k++];
                return D;
            }
            function N(R) {
                var U = L(R);
                if (U) return U;
                throw new Error("Non-base" + p + " character");
            }
            return {
                encode: A,
                decodeUnsafe: L,
                decode: N
            };
        }
        return src = t, src;
    }
    var bs58$1, hasRequiredBs58;
    function requireBs58() {
        if (hasRequiredBs58) return bs58$1;
        hasRequiredBs58 = 1;
        var e = requireSrc(), t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        return bs58$1 = e(t), bs58$1;
    }
    var bs58Exports = requireBs58();
    const bs58 = getDefaultExportFromCjs(bs58Exports), sha256 = sha256$1;
    var lib = {};
    function inRange(e, t, n) {
        return t <= e && e <= n;
    }
    function ToDictionary(e) {
        if (e === void 0) return {};
        if (e === Object(e)) return e;
        throw TypeError("Could not convert argument to dictionary");
    }
    function stringToCodePoints(e) {
        for(var t = String(e), n = t.length, r = 0, s = []; r < n;){
            var o = t.charCodeAt(r);
            if (o < 55296 || o > 57343) s.push(o);
            else if (56320 <= o && o <= 57343) s.push(65533);
            else if (55296 <= o && o <= 56319) if (r === n - 1) s.push(65533);
            else {
                var l = e.charCodeAt(r + 1);
                if (56320 <= l && l <= 57343) {
                    var _ = o & 1023, p = l & 1023;
                    s.push(65536 + (_ << 10) + p), r += 1;
                } else s.push(65533);
            }
            r += 1;
        }
        return s;
    }
    function codePointsToString(e) {
        for(var t = "", n = 0; n < e.length; ++n){
            var r = e[n];
            r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320));
        }
        return t;
    }
    var end_of_stream = -1;
    function Stream(e) {
        this.tokens = [].slice.call(e);
    }
    Stream.prototype = {
        endOfStream: function() {
            return !this.tokens.length;
        },
        read: function() {
            return this.tokens.length ? this.tokens.shift() : end_of_stream;
        },
        prepend: function(e) {
            if (Array.isArray(e)) for(var t = e; t.length;)this.tokens.unshift(t.pop());
            else this.tokens.unshift(e);
        },
        push: function(e) {
            if (Array.isArray(e)) for(var t = e; t.length;)this.tokens.push(t.shift());
            else this.tokens.push(e);
        }
    };
    var finished = -1;
    function decoderError(e, t) {
        if (e) throw TypeError("Decoder error");
        return t || 65533;
    }
    var DEFAULT_ENCODING = "utf-8";
    function TextDecoder$1(e, t) {
        if (!(this instanceof TextDecoder$1)) return new TextDecoder$1(e, t);
        if (e = e !== void 0 ? String(e).toLowerCase() : DEFAULT_ENCODING, e !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
        t = ToDictionary(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", {
            value: "utf-8"
        }), Object.defineProperty(this, "fatal", {
            value: this._fatal
        }), Object.defineProperty(this, "ignoreBOM", {
            value: this._ignoreBOM
        });
    }
    TextDecoder$1.prototype = {
        decode: function(t, n) {
            var r;
            typeof t == "object" && t instanceof ArrayBuffer ? r = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : r = new Uint8Array(0), n = ToDictionary(n), this._streaming || (this._decoder = new UTF8Decoder({
                fatal: this._fatal
            }), this._BOMseen = !1), this._streaming = !!n.stream;
            for(var s = new Stream(r), o = [], l; !s.endOfStream() && (l = this._decoder.handler(s, s.read()), l !== finished);)l !== null && (Array.isArray(l) ? o.push.apply(o, l) : o.push(l));
            if (!this._streaming) {
                do {
                    if (l = this._decoder.handler(s, s.read()), l === finished) break;
                    l !== null && (Array.isArray(l) ? o.push.apply(o, l) : o.push(l));
                }while (!s.endOfStream());
                this._decoder = null;
            }
            return o.length && [
                "utf-8"
            ].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0), codePointsToString(o);
        }
    };
    function TextEncoder$1(e, t) {
        if (!(this instanceof TextEncoder$1)) return new TextEncoder$1(e, t);
        if (e = e !== void 0 ? String(e).toLowerCase() : DEFAULT_ENCODING, e !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
        t = ToDictionary(t), this._streaming = !1, this._encoder = null, this._options = {
            fatal: !!t.fatal
        }, Object.defineProperty(this, "encoding", {
            value: "utf-8"
        });
    }
    TextEncoder$1.prototype = {
        encode: function(t, n) {
            t = t ? String(t) : "", n = ToDictionary(n), this._streaming || (this._encoder = new UTF8Encoder(this._options)), this._streaming = !!n.stream;
            for(var r = [], s = new Stream(stringToCodePoints(t)), o; !s.endOfStream() && (o = this._encoder.handler(s, s.read()), o !== finished);)Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
            if (!this._streaming) {
                for(; o = this._encoder.handler(s, s.read()), o !== finished;)Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
                this._encoder = null;
            }
            return new Uint8Array(r);
        }
    };
    function UTF8Decoder(e) {
        var t = e.fatal, n = 0, r = 0, s = 0, o = 128, l = 191;
        this.handler = function(_, p) {
            if (p === end_of_stream && s !== 0) return s = 0, decoderError(t);
            if (p === end_of_stream) return finished;
            if (s === 0) {
                if (inRange(p, 0, 127)) return p;
                if (inRange(p, 194, 223)) s = 1, n = p - 192;
                else if (inRange(p, 224, 239)) p === 224 && (o = 160), p === 237 && (l = 159), s = 2, n = p - 224;
                else if (inRange(p, 240, 244)) p === 240 && (o = 144), p === 244 && (l = 143), s = 3, n = p - 240;
                else return decoderError(t);
                return n = n << 6 * s, null;
            }
            if (!inRange(p, o, l)) return n = s = r = 0, o = 128, l = 191, _.prepend(p), decoderError(t);
            if (o = 128, l = 191, r += 1, n += p - 128 << 6 * (s - r), r !== s) return null;
            var v = n;
            return n = s = r = 0, v;
        };
    }
    function UTF8Encoder(e) {
        e.fatal, this.handler = function(t, n) {
            if (n === end_of_stream) return finished;
            if (inRange(n, 0, 127)) return n;
            var r, s;
            inRange(n, 128, 2047) ? (r = 1, s = 192) : inRange(n, 2048, 65535) ? (r = 2, s = 224) : inRange(n, 65536, 1114111) && (r = 3, s = 240);
            for(var o = [
                (n >> 6 * r) + s
            ]; r > 0;){
                var l = n >> 6 * (r - 1);
                o.push(128 | l & 63), r -= 1;
            }
            return o;
        };
    }
    const encoding = Object.freeze(Object.defineProperty({
        __proto__: null,
        TextDecoder: TextDecoder$1,
        TextEncoder: TextEncoder$1
    }, Symbol.toStringTag, {
        value: "Module"
    })), require$$2 = getAugmentedNamespace(encoding);
    var hasRequiredLib;
    function requireLib() {
        if (hasRequiredLib) return lib;
        hasRequiredLib = 1;
        var e = lib && lib.__createBinding || (Object.create ? (function(k, D, P, K) {
            K === void 0 && (K = P), Object.defineProperty(k, K, {
                enumerable: !0,
                get: function() {
                    return D[P];
                }
            });
        }) : (function(k, D, P, K) {
            K === void 0 && (K = P), k[K] = D[P];
        })), t = lib && lib.__setModuleDefault || (Object.create ? (function(k, D) {
            Object.defineProperty(k, "default", {
                enumerable: !0,
                value: D
            });
        }) : function(k, D) {
            k.default = D;
        }), n = lib && lib.__decorate || function(k, D, P, K) {
            var y = arguments.length, a = y < 3 ? D : K === null ? K = Object.getOwnPropertyDescriptor(D, P) : K, h;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(k, D, P, K);
            else for(var b = k.length - 1; b >= 0; b--)(h = k[b]) && (a = (y < 3 ? h(a) : y > 3 ? h(D, P, a) : h(D, P)) || a);
            return y > 3 && a && Object.defineProperty(D, P, a), a;
        }, r = lib && lib.__importStar || function(k) {
            if (k && k.__esModule) return k;
            var D = {};
            if (k != null) for(var P in k)P !== "default" && Object.hasOwnProperty.call(k, P) && e(D, k, P);
            return t(D, k), D;
        }, s = lib && lib.__importDefault || function(k) {
            return k && k.__esModule ? k : {
                default: k
            };
        };
        Object.defineProperty(lib, "__esModule", {
            value: !0
        }), lib.deserializeUnchecked = lib.deserialize = lib.serialize = lib.BinaryReader = lib.BinaryWriter = lib.BorshError = lib.baseDecode = lib.baseEncode = void 0;
        const o = s(requireBn()), l = s(requireBs58()), _ = r(require$$2), p = typeof TextDecoder != "function" ? _.TextDecoder : TextDecoder, v = new p("utf-8", {
            fatal: !0
        });
        function B(k) {
            return typeof k == "string" && (k = Buffer.from(k, "utf8")), l.default.encode(Buffer.from(k));
        }
        lib.baseEncode = B;
        function T(k) {
            return Buffer.from(l.default.decode(k));
        }
        lib.baseDecode = T;
        const A = 1024;
        class L extends Error {
            constructor(D){
                super(D), this.fieldPath = [], this.originalMessage = D;
            }
            addToFieldPath(D) {
                this.fieldPath.splice(0, 0, D), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
            }
        }
        lib.BorshError = L;
        class N {
            constructor(){
                this.buf = Buffer.alloc(A), this.length = 0;
            }
            maybeResize() {
                this.buf.length < 16 + this.length && (this.buf = Buffer.concat([
                    this.buf,
                    Buffer.alloc(A)
                ]));
            }
            writeU8(D) {
                this.maybeResize(), this.buf.writeUInt8(D, this.length), this.length += 1;
            }
            writeU16(D) {
                this.maybeResize(), this.buf.writeUInt16LE(D, this.length), this.length += 2;
            }
            writeU32(D) {
                this.maybeResize(), this.buf.writeUInt32LE(D, this.length), this.length += 4;
            }
            writeU64(D) {
                this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(D).toArray("le", 8)));
            }
            writeU128(D) {
                this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(D).toArray("le", 16)));
            }
            writeU256(D) {
                this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(D).toArray("le", 32)));
            }
            writeU512(D) {
                this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(D).toArray("le", 64)));
            }
            writeBuffer(D) {
                this.buf = Buffer.concat([
                    Buffer.from(this.buf.subarray(0, this.length)),
                    D,
                    Buffer.alloc(A)
                ]), this.length += D.length;
            }
            writeString(D) {
                this.maybeResize();
                const P = Buffer.from(D, "utf8");
                this.writeU32(P.length), this.writeBuffer(P);
            }
            writeFixedArray(D) {
                this.writeBuffer(Buffer.from(D));
            }
            writeArray(D, P) {
                this.maybeResize(), this.writeU32(D.length);
                for (const K of D)this.maybeResize(), P(K);
            }
            toArray() {
                return this.buf.subarray(0, this.length);
            }
        }
        lib.BinaryWriter = N;
        function R(k, D, P) {
            const K = P.value;
            P.value = function(...y) {
                try {
                    return K.apply(this, y);
                } catch (a) {
                    if (a instanceof RangeError) {
                        const h = a.code;
                        if ([
                            "ERR_BUFFER_OUT_OF_BOUNDS",
                            "ERR_OUT_OF_RANGE"
                        ].indexOf(h) >= 0) throw new L("Reached the end of buffer when deserializing");
                    }
                    throw a;
                }
            };
        }
        class U {
            constructor(D){
                this.buf = D, this.offset = 0;
            }
            readU8() {
                const D = this.buf.readUInt8(this.offset);
                return this.offset += 1, D;
            }
            readU16() {
                const D = this.buf.readUInt16LE(this.offset);
                return this.offset += 2, D;
            }
            readU32() {
                const D = this.buf.readUInt32LE(this.offset);
                return this.offset += 4, D;
            }
            readU64() {
                const D = this.readBuffer(8);
                return new o.default(D, "le");
            }
            readU128() {
                const D = this.readBuffer(16);
                return new o.default(D, "le");
            }
            readU256() {
                const D = this.readBuffer(32);
                return new o.default(D, "le");
            }
            readU512() {
                const D = this.readBuffer(64);
                return new o.default(D, "le");
            }
            readBuffer(D) {
                if (this.offset + D > this.buf.length) throw new L(`Expected buffer length ${D} isn't within bounds`);
                const P = this.buf.slice(this.offset, this.offset + D);
                return this.offset += D, P;
            }
            readString() {
                const D = this.readU32(), P = this.readBuffer(D);
                try {
                    return v.decode(P);
                } catch (K) {
                    throw new L(`Error decoding UTF-8 string: ${K}`);
                }
            }
            readFixedArray(D) {
                return new Uint8Array(this.readBuffer(D));
            }
            readArray(D) {
                const P = this.readU32(), K = Array();
                for(let y = 0; y < P; ++y)K.push(D());
                return K;
            }
        }
        n([
            R
        ], U.prototype, "readU8", null), n([
            R
        ], U.prototype, "readU16", null), n([
            R
        ], U.prototype, "readU32", null), n([
            R
        ], U.prototype, "readU64", null), n([
            R
        ], U.prototype, "readU128", null), n([
            R
        ], U.prototype, "readU256", null), n([
            R
        ], U.prototype, "readU512", null), n([
            R
        ], U.prototype, "readString", null), n([
            R
        ], U.prototype, "readFixedArray", null), n([
            R
        ], U.prototype, "readArray", null), lib.BinaryReader = U;
        function z(k) {
            return k.charAt(0).toUpperCase() + k.slice(1);
        }
        function G(k, D, P, K, y) {
            try {
                if (typeof K == "string") y[`write${z(K)}`](P);
                else if (K instanceof Array) if (typeof K[0] == "number") {
                    if (P.length !== K[0]) throw new L(`Expecting byte array of length ${K[0]}, but got ${P.length} bytes`);
                    y.writeFixedArray(P);
                } else if (K.length === 2 && typeof K[1] == "number") {
                    if (P.length !== K[1]) throw new L(`Expecting byte array of length ${K[1]}, but got ${P.length} bytes`);
                    for(let a = 0; a < K[1]; a++)G(k, null, P[a], K[0], y);
                } else y.writeArray(P, (a)=>{
                    G(k, D, a, K[0], y);
                });
                else if (K.kind !== void 0) switch(K.kind){
                    case "option":
                        {
                            P == null ? y.writeU8(0) : (y.writeU8(1), G(k, D, P, K.type, y));
                            break;
                        }
                    case "map":
                        {
                            y.writeU32(P.size), P.forEach((a, h)=>{
                                G(k, D, h, K.key, y), G(k, D, a, K.value, y);
                            });
                            break;
                        }
                    default:
                        throw new L(`FieldType ${K} unrecognized`);
                }
                else H(k, P, y);
            } catch (a) {
                throw a instanceof L && a.addToFieldPath(D), a;
            }
        }
        function H(k, D, P) {
            if (typeof D.borshSerialize == "function") {
                D.borshSerialize(P);
                return;
            }
            const K = k.get(D.constructor);
            if (!K) throw new L(`Class ${D.constructor.name} is missing in schema`);
            if (K.kind === "struct") K.fields.map(([y, a])=>{
                G(k, y, D[y], a, P);
            });
            else if (K.kind === "enum") {
                const y = D[K.field];
                for(let a = 0; a < K.values.length; ++a){
                    const [h, b] = K.values[a];
                    if (h === y) {
                        P.writeU8(a), G(k, h, D[h], b, P);
                        break;
                    }
                }
            } else throw new L(`Unexpected schema kind: ${K.kind} for ${D.constructor.name}`);
        }
        function Y(k, D, P = N) {
            const K = new P;
            return H(k, D, K), K.toArray();
        }
        lib.serialize = Y;
        function $(k, D, P, K) {
            try {
                if (typeof P == "string") return K[`read${z(P)}`]();
                if (P instanceof Array) {
                    if (typeof P[0] == "number") return K.readFixedArray(P[0]);
                    if (typeof P[1] == "number") {
                        const y = [];
                        for(let a = 0; a < P[1]; a++)y.push($(k, null, P[0], K));
                        return y;
                    } else return K.readArray(()=>$(k, D, P[0], K));
                }
                if (P.kind === "option") return K.readU8() ? $(k, D, P.type, K) : void 0;
                if (P.kind === "map") {
                    let y = new Map;
                    const a = K.readU32();
                    for(let h = 0; h < a; h++){
                        const b = $(k, D, P.key, K), E = $(k, D, P.value, K);
                        y.set(b, E);
                    }
                    return y;
                }
                return X(k, P, K);
            } catch (y) {
                throw y instanceof L && y.addToFieldPath(D), y;
            }
        }
        function X(k, D, P) {
            if (typeof D.borshDeserialize == "function") return D.borshDeserialize(P);
            const K = k.get(D);
            if (!K) throw new L(`Class ${D.name} is missing in schema`);
            if (K.kind === "struct") {
                const y = {};
                for (const [a, h] of k.get(D).fields)y[a] = $(k, a, h, P);
                return new D(y);
            }
            if (K.kind === "enum") {
                const y = P.readU8();
                if (y >= K.values.length) throw new L(`Enum index: ${y} is out of range`);
                const [a, h] = K.values[y], b = $(k, a, h, P);
                return new D({
                    [a]: b
                });
            }
            throw new L(`Unexpected schema kind: ${K.kind} for ${D.constructor.name}`);
        }
        function te(k, D, P, K = U) {
            const y = new K(P), a = X(k, D, y);
            if (y.offset < P.length) throw new L(`Unexpected ${P.length - y.offset} bytes after deserialized data`);
            return a;
        }
        lib.deserialize = te;
        function J(k, D, P, K = U) {
            const y = new K(P);
            return X(k, D, y);
        }
        return lib.deserializeUnchecked = J, lib;
    }
    var libExports = requireLib(), Layout = {}, hasRequiredLayout;
    function requireLayout() {
        if (hasRequiredLayout) return Layout;
        hasRequiredLayout = 1, Object.defineProperty(Layout, "__esModule", {
            value: !0
        }), Layout.s16 = Layout.s8 = Layout.nu64be = Layout.u48be = Layout.u40be = Layout.u32be = Layout.u24be = Layout.u16be = Layout.nu64 = Layout.u48 = Layout.u40 = Layout.u32 = Layout.u24 = Layout.u16 = Layout.u8 = Layout.offset = Layout.greedy = Layout.Constant = Layout.UTF8 = Layout.CString = Layout.Blob = Layout.Boolean = Layout.BitField = Layout.BitStructure = Layout.VariantLayout = Layout.Union = Layout.UnionLayoutDiscriminator = Layout.UnionDiscriminator = Layout.Structure = Layout.Sequence = Layout.DoubleBE = Layout.Double = Layout.FloatBE = Layout.Float = Layout.NearInt64BE = Layout.NearInt64 = Layout.NearUInt64BE = Layout.NearUInt64 = Layout.IntBE = Layout.Int = Layout.UIntBE = Layout.UInt = Layout.OffsetLayout = Layout.GreedyCount = Layout.ExternalLayout = Layout.bindConstructorLayout = Layout.nameWithProperty = Layout.Layout = Layout.uint8ArrayToBuffer = Layout.checkUint8Array = void 0, Layout.constant = Layout.utf8 = Layout.cstr = Layout.blob = Layout.unionLayoutDiscriminator = Layout.union = Layout.seq = Layout.bits = Layout.struct = Layout.f64be = Layout.f64 = Layout.f32be = Layout.f32 = Layout.ns64be = Layout.s48be = Layout.s40be = Layout.s32be = Layout.s24be = Layout.s16be = Layout.ns64 = Layout.s48 = Layout.s40 = Layout.s32 = Layout.s24 = void 0;
        const e = requireBuffer();
        function t(c) {
            if (!(c instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array");
        }
        Layout.checkUint8Array = t;
        function n(c) {
            return t(c), e.Buffer.from(c.buffer, c.byteOffset, c.length);
        }
        Layout.uint8ArrayToBuffer = n;
        let r = class {
            constructor(u, w){
                if (!Number.isInteger(u)) throw new TypeError("span must be an integer");
                this.span = u, this.property = w;
            }
            makeDestinationObject() {
                return {};
            }
            getSpan(u, w) {
                if (0 > this.span) throw new RangeError("indeterminate span");
                return this.span;
            }
            replicate(u) {
                const w = Object.create(this.constructor.prototype);
                return Object.assign(w, this), w.property = u, w;
            }
            fromArray(u) {}
        };
        Layout.Layout = r;
        function s(c, u) {
            return u.property ? c + "[" + u.property + "]" : c;
        }
        Layout.nameWithProperty = s;
        function o(c, u) {
            if (typeof c != "function") throw new TypeError("Class must be constructor");
            if (Object.prototype.hasOwnProperty.call(c, "layout_")) throw new Error("Class is already bound to a layout");
            if (!(u && u instanceof r)) throw new TypeError("layout must be a Layout");
            if (Object.prototype.hasOwnProperty.call(u, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
            c.layout_ = u, u.boundConstructor_ = c, u.makeDestinationObject = (()=>new c), Object.defineProperty(c.prototype, "encode", {
                value (w, O) {
                    return u.encode(this, w, O);
                },
                writable: !0
            }), Object.defineProperty(c, "decode", {
                value (w, O) {
                    return u.decode(w, O);
                },
                writable: !0
            });
        }
        Layout.bindConstructorLayout = o;
        class l extends r {
            isCount() {
                throw new Error("ExternalLayout is abstract");
            }
        }
        Layout.ExternalLayout = l;
        class _ extends l {
            constructor(u = 1, w){
                if (!Number.isInteger(u) || 0 >= u) throw new TypeError("elementSpan must be a (positive) integer");
                super(-1, w), this.elementSpan = u;
            }
            isCount() {
                return !0;
            }
            decode(u, w = 0) {
                t(u);
                const O = u.length - w;
                return Math.floor(O / this.elementSpan);
            }
            encode(u, w, O) {
                return 0;
            }
        }
        Layout.GreedyCount = _;
        class p extends l {
            constructor(u, w = 0, O){
                if (!(u instanceof r)) throw new TypeError("layout must be a Layout");
                if (!Number.isInteger(w)) throw new TypeError("offset must be integer or undefined");
                super(u.span, O || u.property), this.layout = u, this.offset = w;
            }
            isCount() {
                return this.layout instanceof v || this.layout instanceof B;
            }
            decode(u, w = 0) {
                return this.layout.decode(u, w + this.offset);
            }
            encode(u, w, O = 0) {
                return this.layout.encode(u, w, O + this.offset);
            }
        }
        Layout.OffsetLayout = p;
        class v extends r {
            constructor(u, w){
                if (super(u, w), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(u, w = 0) {
                return n(u).readUIntLE(w, this.span);
            }
            encode(u, w, O = 0) {
                return n(w).writeUIntLE(u, O, this.span), this.span;
            }
        }
        Layout.UInt = v;
        class B extends r {
            constructor(u, w){
                if (super(u, w), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(u, w = 0) {
                return n(u).readUIntBE(w, this.span);
            }
            encode(u, w, O = 0) {
                return n(w).writeUIntBE(u, O, this.span), this.span;
            }
        }
        Layout.UIntBE = B;
        class T extends r {
            constructor(u, w){
                if (super(u, w), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(u, w = 0) {
                return n(u).readIntLE(w, this.span);
            }
            encode(u, w, O = 0) {
                return n(w).writeIntLE(u, O, this.span), this.span;
            }
        }
        Layout.Int = T;
        class A extends r {
            constructor(u, w){
                if (super(u, w), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(u, w = 0) {
                return n(u).readIntBE(w, this.span);
            }
            encode(u, w, O = 0) {
                return n(w).writeIntBE(u, O, this.span), this.span;
            }
        }
        Layout.IntBE = A;
        const L = Math.pow(2, 32);
        function N(c) {
            const u = Math.floor(c / L), w = c - u * L;
            return {
                hi32: u,
                lo32: w
            };
        }
        function R(c, u) {
            return c * L + u;
        }
        class U extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                const O = n(u), F = O.readUInt32LE(w), q = O.readUInt32LE(w + 4);
                return R(q, F);
            }
            encode(u, w, O = 0) {
                const F = N(u), q = n(w);
                return q.writeUInt32LE(F.lo32, O), q.writeUInt32LE(F.hi32, O + 4), 8;
            }
        }
        Layout.NearUInt64 = U;
        class z extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                const O = n(u), F = O.readUInt32BE(w), q = O.readUInt32BE(w + 4);
                return R(F, q);
            }
            encode(u, w, O = 0) {
                const F = N(u), q = n(w);
                return q.writeUInt32BE(F.hi32, O), q.writeUInt32BE(F.lo32, O + 4), 8;
            }
        }
        Layout.NearUInt64BE = z;
        class G extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                const O = n(u), F = O.readUInt32LE(w), q = O.readInt32LE(w + 4);
                return R(q, F);
            }
            encode(u, w, O = 0) {
                const F = N(u), q = n(w);
                return q.writeUInt32LE(F.lo32, O), q.writeInt32LE(F.hi32, O + 4), 8;
            }
        }
        Layout.NearInt64 = G;
        class H extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                const O = n(u), F = O.readInt32BE(w), q = O.readUInt32BE(w + 4);
                return R(F, q);
            }
            encode(u, w, O = 0) {
                const F = N(u), q = n(w);
                return q.writeInt32BE(F.hi32, O), q.writeUInt32BE(F.lo32, O + 4), 8;
            }
        }
        Layout.NearInt64BE = H;
        class Y extends r {
            constructor(u){
                super(4, u);
            }
            decode(u, w = 0) {
                return n(u).readFloatLE(w);
            }
            encode(u, w, O = 0) {
                return n(w).writeFloatLE(u, O), 4;
            }
        }
        Layout.Float = Y;
        class $ extends r {
            constructor(u){
                super(4, u);
            }
            decode(u, w = 0) {
                return n(u).readFloatBE(w);
            }
            encode(u, w, O = 0) {
                return n(w).writeFloatBE(u, O), 4;
            }
        }
        Layout.FloatBE = $;
        class X extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                return n(u).readDoubleLE(w);
            }
            encode(u, w, O = 0) {
                return n(w).writeDoubleLE(u, O), 8;
            }
        }
        Layout.Double = X;
        class te extends r {
            constructor(u){
                super(8, u);
            }
            decode(u, w = 0) {
                return n(u).readDoubleBE(w);
            }
            encode(u, w, O = 0) {
                return n(w).writeDoubleBE(u, O), 8;
            }
        }
        Layout.DoubleBE = te;
        class J extends r {
            constructor(u, w, O){
                if (!(u instanceof r)) throw new TypeError("elementLayout must be a Layout");
                if (!(w instanceof l && w.isCount() || Number.isInteger(w) && 0 <= w)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                let F = -1;
                !(w instanceof l) && 0 < u.span && (F = w * u.span), super(F, O), this.elementLayout = u, this.count = w;
            }
            getSpan(u, w = 0) {
                if (0 <= this.span) return this.span;
                let O = 0, F = this.count;
                if (F instanceof l && (F = F.decode(u, w)), 0 < this.elementLayout.span) O = F * this.elementLayout.span;
                else {
                    let q = 0;
                    for(; q < F;)O += this.elementLayout.getSpan(u, w + O), ++q;
                }
                return O;
            }
            decode(u, w = 0) {
                const O = [];
                let F = 0, q = this.count;
                for(q instanceof l && (q = q.decode(u, w)); F < q;)O.push(this.elementLayout.decode(u, w)), w += this.elementLayout.getSpan(u, w), F += 1;
                return O;
            }
            encode(u, w, O = 0) {
                const F = this.elementLayout, q = u.reduce((Z, Q)=>Z + F.encode(Q, w, O + Z), 0);
                return this.count instanceof l && this.count.encode(u.length, w, O), q;
            }
        }
        Layout.Sequence = J;
        class k extends r {
            constructor(u, w, O){
                if (!(Array.isArray(u) && u.reduce((q, Z)=>q && Z instanceof r, !0))) throw new TypeError("fields must be array of Layout instances");
                typeof w == "boolean" && O === void 0 && (O = w, w = void 0);
                for (const q of u)if (0 > q.span && q.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
                let F = -1;
                try {
                    F = u.reduce((q, Z)=>q + Z.getSpan(), 0);
                } catch  {}
                super(F, w), this.fields = u, this.decodePrefixes = !!O;
            }
            getSpan(u, w = 0) {
                if (0 <= this.span) return this.span;
                let O = 0;
                try {
                    O = this.fields.reduce((F, q)=>{
                        const Z = q.getSpan(u, w);
                        return w += Z, F + Z;
                    }, 0);
                } catch  {
                    throw new RangeError("indeterminate span");
                }
                return O;
            }
            decode(u, w = 0) {
                t(u);
                const O = this.makeDestinationObject();
                for (const F of this.fields)if (F.property !== void 0 && (O[F.property] = F.decode(u, w)), w += F.getSpan(u, w), this.decodePrefixes && u.length === w) break;
                return O;
            }
            encode(u, w, O = 0) {
                const F = O;
                let q = 0, Z = 0;
                for (const Q of this.fields){
                    let ie = Q.span;
                    if (Z = 0 < ie ? ie : 0, Q.property !== void 0) {
                        const se = u[Q.property];
                        se !== void 0 && (Z = Q.encode(se, w, O), 0 > ie && (ie = Q.getSpan(w, O)));
                    }
                    q = O, O += ie;
                }
                return q + Z - F;
            }
            fromArray(u) {
                const w = this.makeDestinationObject();
                for (const O of this.fields)O.property !== void 0 && 0 < u.length && (w[O.property] = u.shift());
                return w;
            }
            layoutFor(u) {
                if (typeof u != "string") throw new TypeError("property must be string");
                for (const w of this.fields)if (w.property === u) return w;
            }
            offsetOf(u) {
                if (typeof u != "string") throw new TypeError("property must be string");
                let w = 0;
                for (const O of this.fields){
                    if (O.property === u) return w;
                    0 > O.span ? w = -1 : 0 <= w && (w += O.span);
                }
            }
        }
        Layout.Structure = k;
        class D {
            constructor(u){
                this.property = u;
            }
            decode(u, w) {
                throw new Error("UnionDiscriminator is abstract");
            }
            encode(u, w, O) {
                throw new Error("UnionDiscriminator is abstract");
            }
        }
        Layout.UnionDiscriminator = D;
        class P extends D {
            constructor(u, w){
                if (!(u instanceof l && u.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                super(w || u.property || "variant"), this.layout = u;
            }
            decode(u, w) {
                return this.layout.decode(u, w);
            }
            encode(u, w, O) {
                return this.layout.encode(u, w, O);
            }
        }
        Layout.UnionLayoutDiscriminator = P;
        class K extends r {
            constructor(u, w, O){
                let F;
                if (u instanceof v || u instanceof B) F = new P(new p(u));
                else if (u instanceof l && u.isCount()) F = new P(u);
                else if (u instanceof D) F = u;
                else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                if (w === void 0 && (w = null), !(w === null || w instanceof r)) throw new TypeError("defaultLayout must be null or a Layout");
                if (w !== null) {
                    if (0 > w.span) throw new Error("defaultLayout must have constant span");
                    w.property === void 0 && (w = w.replicate("content"));
                }
                let q = -1;
                w && (q = w.span, 0 <= q && (u instanceof v || u instanceof B) && (q += F.layout.span)), super(q, O), this.discriminator = F, this.usesPrefixDiscriminator = u instanceof v || u instanceof B, this.defaultLayout = w, this.registry = {};
                let Z = this.defaultGetSourceVariant.bind(this);
                this.getSourceVariant = function(Q) {
                    return Z(Q);
                }, this.configGetSourceVariant = function(Q) {
                    Z = Q.bind(this);
                };
            }
            getSpan(u, w = 0) {
                if (0 <= this.span) return this.span;
                const O = this.getVariant(u, w);
                if (!O) throw new Error("unable to determine span for unrecognized variant");
                return O.getSpan(u, w);
            }
            defaultGetSourceVariant(u) {
                if (Object.prototype.hasOwnProperty.call(u, this.discriminator.property)) {
                    if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(u, this.defaultLayout.property)) return;
                    const w = this.registry[u[this.discriminator.property]];
                    if (w && (!w.layout || w.property && Object.prototype.hasOwnProperty.call(u, w.property))) return w;
                } else for(const w in this.registry){
                    const O = this.registry[w];
                    if (O.property && Object.prototype.hasOwnProperty.call(u, O.property)) return O;
                }
                throw new Error("unable to infer src variant");
            }
            decode(u, w = 0) {
                let O;
                const F = this.discriminator, q = F.decode(u, w), Z = this.registry[q];
                if (Z === void 0) {
                    const Q = this.defaultLayout;
                    let ie = 0;
                    this.usesPrefixDiscriminator && (ie = F.layout.span), O = this.makeDestinationObject(), O[F.property] = q, O[Q.property] = Q.decode(u, w + ie);
                } else O = Z.decode(u, w);
                return O;
            }
            encode(u, w, O = 0) {
                const F = this.getSourceVariant(u);
                if (F === void 0) {
                    const q = this.discriminator, Z = this.defaultLayout;
                    let Q = 0;
                    return this.usesPrefixDiscriminator && (Q = q.layout.span), q.encode(u[q.property], w, O), Q + Z.encode(u[Z.property], w, O + Q);
                }
                return F.encode(u, w, O);
            }
            addVariant(u, w, O) {
                const F = new y(this, u, w, O);
                return this.registry[u] = F, F;
            }
            getVariant(u, w = 0) {
                let O;
                return u instanceof Uint8Array ? O = this.discriminator.decode(u, w) : O = u, this.registry[O];
            }
        }
        Layout.Union = K;
        class y extends r {
            constructor(u, w, O, F){
                if (!(u instanceof K)) throw new TypeError("union must be a Union");
                if (!Number.isInteger(w) || 0 > w) throw new TypeError("variant must be a (non-negative) integer");
                if (typeof O == "string" && F === void 0 && (F = O, O = null), O) {
                    if (!(O instanceof r)) throw new TypeError("layout must be a Layout");
                    if (u.defaultLayout !== null && 0 <= O.span && O.span > u.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                    if (typeof F != "string") throw new TypeError("variant must have a String property");
                }
                let q = u.span;
                0 > u.span && (q = O ? O.span : 0, 0 <= q && u.usesPrefixDiscriminator && (q += u.discriminator.layout.span)), super(q, F), this.union = u, this.variant = w, this.layout = O || null;
            }
            getSpan(u, w = 0) {
                if (0 <= this.span) return this.span;
                let O = 0;
                this.union.usesPrefixDiscriminator && (O = this.union.discriminator.layout.span);
                let F = 0;
                return this.layout && (F = this.layout.getSpan(u, w + O)), O + F;
            }
            decode(u, w = 0) {
                const O = this.makeDestinationObject();
                if (this !== this.union.getVariant(u, w)) throw new Error("variant mismatch");
                let F = 0;
                return this.union.usesPrefixDiscriminator && (F = this.union.discriminator.layout.span), this.layout ? O[this.property] = this.layout.decode(u, w + F) : this.property ? O[this.property] = !0 : this.union.usesPrefixDiscriminator && (O[this.union.discriminator.property] = this.variant), O;
            }
            encode(u, w, O = 0) {
                let F = 0;
                if (this.union.usesPrefixDiscriminator && (F = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(u, this.property)) throw new TypeError("variant lacks property " + this.property);
                this.union.discriminator.encode(this.variant, w, O);
                let q = F;
                if (this.layout && (this.layout.encode(u[this.property], w, O + F), q += this.layout.getSpan(w, O + F), 0 <= this.union.span && q > this.union.span)) throw new Error("encoded variant overruns containing union");
                return q;
            }
            fromArray(u) {
                if (this.layout) return this.layout.fromArray(u);
            }
        }
        Layout.VariantLayout = y;
        function a(c) {
            return 0 > c && (c += 4294967296), c;
        }
        class h extends r {
            constructor(u, w, O){
                if (!(u instanceof v || u instanceof B)) throw new TypeError("word must be a UInt or UIntBE layout");
                if (typeof w == "string" && O === void 0 && (O = w, w = !1), 4 < u.span) throw new RangeError("word cannot exceed 32 bits");
                super(u.span, O), this.word = u, this.msb = !!w, this.fields = [];
                let F = 0;
                this._packedSetValue = function(q) {
                    return F = a(q), this;
                }, this._packedGetValue = function() {
                    return F;
                };
            }
            decode(u, w = 0) {
                const O = this.makeDestinationObject(), F = this.word.decode(u, w);
                this._packedSetValue(F);
                for (const q of this.fields)q.property !== void 0 && (O[q.property] = q.decode(u));
                return O;
            }
            encode(u, w, O = 0) {
                const F = this.word.decode(w, O);
                this._packedSetValue(F);
                for (const q of this.fields)if (q.property !== void 0) {
                    const Z = u[q.property];
                    Z !== void 0 && q.encode(Z);
                }
                return this.word.encode(this._packedGetValue(), w, O);
            }
            addField(u, w) {
                const O = new b(this, u, w);
                return this.fields.push(O), O;
            }
            addBoolean(u) {
                const w = new E(this, u);
                return this.fields.push(w), w;
            }
            fieldFor(u) {
                if (typeof u != "string") throw new TypeError("property must be string");
                for (const w of this.fields)if (w.property === u) return w;
            }
        }
        Layout.BitStructure = h;
        class b {
            constructor(u, w, O){
                if (!(u instanceof h)) throw new TypeError("container must be a BitStructure");
                if (!Number.isInteger(w) || 0 >= w) throw new TypeError("bits must be positive integer");
                const F = 8 * u.span, q = u.fields.reduce((Z, Q)=>Z + Q.bits, 0);
                if (w + q > F) throw new Error("bits too long for span remainder (" + (F - q) + " of " + F + " remain)");
                this.container = u, this.bits = w, this.valueMask = (1 << w) - 1, w === 32 && (this.valueMask = 4294967295), this.start = q, this.container.msb && (this.start = F - q - w), this.wordMask = a(this.valueMask << this.start), this.property = O;
            }
            decode(u, w) {
                const O = this.container._packedGetValue();
                return a(O & this.wordMask) >>> this.start;
            }
            encode(u) {
                if (typeof u != "number" || !Number.isInteger(u) || u !== a(u & this.valueMask)) throw new TypeError(s("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                const w = this.container._packedGetValue(), O = a(u << this.start);
                this.container._packedSetValue(a(w & ~this.wordMask) | O);
            }
        }
        Layout.BitField = b;
        class E extends b {
            constructor(u, w){
                super(u, 1, w);
            }
            decode(u, w) {
                return !!super.decode(u, w);
            }
            encode(u) {
                typeof u == "boolean" && (u = +u), super.encode(u);
            }
        }
        Layout.Boolean = E;
        class S extends r {
            constructor(u, w){
                if (!(u instanceof l && u.isCount() || Number.isInteger(u) && 0 <= u)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                let O = -1;
                u instanceof l || (O = u), super(O, w), this.length = u;
            }
            getSpan(u, w) {
                let O = this.span;
                return 0 > O && (O = this.length.decode(u, w)), O;
            }
            decode(u, w = 0) {
                let O = this.span;
                return 0 > O && (O = this.length.decode(u, w)), n(u).slice(w, w + O);
            }
            encode(u, w, O) {
                let F = this.length;
                if (this.length instanceof l && (F = u.length), !(u instanceof Uint8Array && F === u.length)) throw new TypeError(s("Blob.encode", this) + " requires (length " + F + ") Uint8Array as src");
                if (O + F > w.length) throw new RangeError("encoding overruns Uint8Array");
                const q = n(u);
                return n(w).write(q.toString("hex"), O, F, "hex"), this.length instanceof l && this.length.encode(F, w, O), F;
            }
        }
        Layout.Blob = S;
        class j extends r {
            constructor(u){
                super(-1, u);
            }
            getSpan(u, w = 0) {
                t(u);
                let O = w;
                for(; O < u.length && u[O] !== 0;)O += 1;
                return 1 + O - w;
            }
            decode(u, w = 0) {
                const O = this.getSpan(u, w);
                return n(u).slice(w, w + O - 1).toString("utf-8");
            }
            encode(u, w, O = 0) {
                typeof u != "string" && (u = String(u));
                const F = e.Buffer.from(u, "utf8"), q = F.length;
                if (O + q > w.length) throw new RangeError("encoding overruns Buffer");
                const Z = n(w);
                return F.copy(Z, O), Z[O + q] = 0, q + 1;
            }
        }
        Layout.CString = j;
        class I extends r {
            constructor(u, w){
                if (typeof u == "string" && w === void 0 && (w = u, u = void 0), u === void 0) u = -1;
                else if (!Number.isInteger(u)) throw new TypeError("maxSpan must be an integer");
                super(-1, w), this.maxSpan = u;
            }
            getSpan(u, w = 0) {
                return t(u), u.length - w;
            }
            decode(u, w = 0) {
                const O = this.getSpan(u, w);
                if (0 <= this.maxSpan && this.maxSpan < O) throw new RangeError("text length exceeds maxSpan");
                return n(u).slice(w, w + O).toString("utf-8");
            }
            encode(u, w, O = 0) {
                typeof u != "string" && (u = String(u));
                const F = e.Buffer.from(u, "utf8"), q = F.length;
                if (0 <= this.maxSpan && this.maxSpan < q) throw new RangeError("text length exceeds maxSpan");
                if (O + q > w.length) throw new RangeError("encoding overruns Buffer");
                return F.copy(n(w), O), q;
            }
        }
        Layout.UTF8 = I;
        class x extends r {
            constructor(u, w){
                super(0, w), this.value = u;
            }
            decode(u, w) {
                return this.value;
            }
            encode(u, w, O) {
                return 0;
            }
        }
        return Layout.Constant = x, Layout.greedy = ((c, u)=>new _(c, u)), Layout.offset = ((c, u, w)=>new p(c, u, w)), Layout.u8 = ((c)=>new v(1, c)), Layout.u16 = ((c)=>new v(2, c)), Layout.u24 = ((c)=>new v(3, c)), Layout.u32 = ((c)=>new v(4, c)), Layout.u40 = ((c)=>new v(5, c)), Layout.u48 = ((c)=>new v(6, c)), Layout.nu64 = ((c)=>new U(c)), Layout.u16be = ((c)=>new B(2, c)), Layout.u24be = ((c)=>new B(3, c)), Layout.u32be = ((c)=>new B(4, c)), Layout.u40be = ((c)=>new B(5, c)), Layout.u48be = ((c)=>new B(6, c)), Layout.nu64be = ((c)=>new z(c)), Layout.s8 = ((c)=>new T(1, c)), Layout.s16 = ((c)=>new T(2, c)), Layout.s24 = ((c)=>new T(3, c)), Layout.s32 = ((c)=>new T(4, c)), Layout.s40 = ((c)=>new T(5, c)), Layout.s48 = ((c)=>new T(6, c)), Layout.ns64 = ((c)=>new G(c)), Layout.s16be = ((c)=>new A(2, c)), Layout.s24be = ((c)=>new A(3, c)), Layout.s32be = ((c)=>new A(4, c)), Layout.s40be = ((c)=>new A(5, c)), Layout.s48be = ((c)=>new A(6, c)), Layout.ns64be = ((c)=>new H(c)), Layout.f32 = ((c)=>new Y(c)), Layout.f32be = ((c)=>new $(c)), Layout.f64 = ((c)=>new X(c)), Layout.f64be = ((c)=>new te(c)), Layout.struct = ((c, u, w)=>new k(c, u, w)), Layout.bits = ((c, u, w)=>new h(c, u, w)), Layout.seq = ((c, u, w)=>new J(c, u, w)), Layout.union = ((c, u, w)=>new K(c, u, w)), Layout.unionLayoutDiscriminator = ((c, u)=>new P(c, u)), Layout.blob = ((c, u)=>new S(c, u)), Layout.cstr = ((c)=>new j(c)), Layout.utf8 = ((c, u)=>new I(c, u)), Layout.constant = ((c, u)=>new x(c, u)), Layout;
    }
    var LayoutExports = requireLayout(), SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078e3, SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001, SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004, SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005, SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006, SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
    function encodeValue(e) {
        return Array.isArray(e) ? "%5B" + e.map(encodeValue).join("%2C%20") + "%5D" : typeof e == "bigint" ? `${e}n` : encodeURIComponent(String(e != null && Object.getPrototypeOf(e) === null ? {
            ...e
        } : e));
    }
    function encodeObjectContextEntry([e, t]) {
        return `${e}=${encodeValue(t)}`;
    }
    function encodeContextObject(e) {
        const t = Object.entries(e).map(encodeObjectContextEntry).join("&");
        return btoa(t);
    }
    function getErrorMessage(e, t = {}) {
        {
            let n = `Solana error #${e}; Decode this error by running \`npx @solana/errors decode -- ${e}`;
            return Object.keys(t).length && (n += ` '${encodeContextObject(t)}'`), `${n}\``;
        }
    }
    var SolanaError = class extends Error {
        cause = this.cause;
        context;
        constructor(...[e, t]){
            let n, r;
            if (t) {
                const { cause: o, ...l } = t;
                o && (r = {
                    cause: o
                }), Object.keys(l).length > 0 && (n = l);
            }
            const s = getErrorMessage(e, n);
            super(s, r), this.context = {
                __code: e,
                ...n
            }, this.name = "SolanaError";
        }
    };
    function getEncodedSize(e, t) {
        return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(e);
    }
    function createEncoder(e) {
        return Object.freeze({
            ...e,
            encode: (t)=>{
                const n = new Uint8Array(getEncodedSize(t, e));
                return e.write(t, n, 0), n;
            }
        });
    }
    function createDecoder(e) {
        return Object.freeze({
            ...e,
            decode: (t, n = 0)=>e.read(t, n)[0]
        });
    }
    function isFixedSize(e) {
        return "fixedSize" in e && typeof e.fixedSize == "number";
    }
    function combineCodec(e, t) {
        if (isFixedSize(e) !== isFixedSize(t)) throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH);
        if (isFixedSize(e) && isFixedSize(t) && e.fixedSize !== t.fixedSize) throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH, {
            decoderFixedSize: t.fixedSize,
            encoderFixedSize: e.fixedSize
        });
        if (!isFixedSize(e) && !isFixedSize(t) && e.maxSize !== t.maxSize) throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH, {
            decoderMaxSize: t.maxSize,
            encoderMaxSize: e.maxSize
        });
        return {
            ...t,
            ...e,
            decode: t.decode,
            encode: e.encode,
            read: t.read,
            write: e.write
        };
    }
    function assertByteArrayIsNotEmptyForCodec(e, t, n = 0) {
        if (t.length - n <= 0) throw new SolanaError(SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY, {
            codecDescription: e
        });
    }
    function assertByteArrayHasEnoughBytesForCodec(e, t, n, r = 0) {
        const s = n.length - r;
        if (s < t) throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
            bytesLength: s,
            codecDescription: e,
            expected: t
        });
    }
    function assertNumberIsBetweenForCodec(e, t, n, r) {
        if (r < t || r > n) throw new SolanaError(SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
            codecDescription: e,
            max: n,
            min: t,
            value: r
        });
    }
    function isLittleEndian(e) {
        return e?.endian !== 1;
    }
    function numberEncoderFactory(e) {
        return createEncoder({
            fixedSize: e.size,
            write (t, n, r) {
                e.range && assertNumberIsBetweenForCodec(e.name, e.range[0], e.range[1], t);
                const s = new ArrayBuffer(e.size);
                return e.set(new DataView(s), t, isLittleEndian(e.config)), n.set(new Uint8Array(s), r), r + e.size;
            }
        });
    }
    function numberDecoderFactory(e) {
        return createDecoder({
            fixedSize: e.size,
            read (t, n = 0) {
                assertByteArrayIsNotEmptyForCodec(e.name, t, n), assertByteArrayHasEnoughBytesForCodec(e.name, e.size, t, n);
                const r = new DataView(toArrayBuffer(t, n, e.size));
                return [
                    e.get(r, isLittleEndian(e.config)),
                    n + e.size
                ];
            }
        });
    }
    function toArrayBuffer(e, t, n) {
        const r = e.byteOffset + (t ?? 0), s = n ?? e.byteLength;
        return e.buffer.slice(r, r + s);
    }
    var getU64Encoder = (e = {})=>numberEncoderFactory({
            config: e,
            name: "u64",
            range: [
                0n,
                BigInt("0xffffffffffffffff")
            ],
            set: (t, n, r)=>t.setBigUint64(0, BigInt(n), r),
            size: 8
        }), getU64Decoder = (e = {})=>numberDecoderFactory({
            config: e,
            get: (t, n)=>t.getBigUint64(0, n),
            name: "u64",
            size: 8
        }), getU64Codec = (e = {})=>combineCodec(getU64Encoder(e), getU64Decoder(e));
    class StructError extends TypeError {
        constructor(t, n){
            let r;
            const { message: s, explanation: o, ...l } = t, { path: _ } = t, p = _.length === 0 ? s : `At path: ${_.join(".")} -- ${s}`;
            super(o ?? p), o != null && (this.cause = p), Object.assign(this, l), this.name = this.constructor.name, this.failures = ()=>r ?? (r = [
                    t,
                    ...n()
                ]);
        }
    }
    function isIterable(e) {
        return isObject(e) && typeof e[Symbol.iterator] == "function";
    }
    function isObject(e) {
        return typeof e == "object" && e != null;
    }
    function isNonArrayObject(e) {
        return isObject(e) && !Array.isArray(e);
    }
    function print(e) {
        return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`;
    }
    function shiftIterator(e) {
        const { done: t, value: n } = e.next();
        return t ? void 0 : n;
    }
    function toFailure(e, t, n, r) {
        if (e === !0) return;
        e === !1 ? e = {} : typeof e == "string" && (e = {
            message: e
        });
        const { path: s, branch: o } = t, { type: l } = n, { refinement: _, message: p = `Expected a value of type \`${l}\`${_ ? ` with refinement \`${_}\`` : ""}, but received: \`${print(r)}\`` } = e;
        return {
            value: r,
            type: l,
            refinement: _,
            key: s[s.length - 1],
            path: s,
            branch: o,
            ...e,
            message: p
        };
    }
    function* toFailures(e, t, n, r) {
        isIterable(e) || (e = [
            e
        ]);
        for (const s of e){
            const o = toFailure(s, t, n, r);
            o && (yield o);
        }
    }
    function* run(e, t, n = {}) {
        const { path: r = [], branch: s = [
            e
        ], coerce: o = !1, mask: l = !1 } = n, _ = {
            path: r,
            branch: s,
            mask: l
        };
        o && (e = t.coercer(e, _));
        let p = "valid";
        for (const v of t.validator(e, _))v.explanation = n.message, p = "not_valid", yield [
            v,
            void 0
        ];
        for (let [v, B, T] of t.entries(e, _)){
            const A = run(B, T, {
                path: v === void 0 ? r : [
                    ...r,
                    v
                ],
                branch: v === void 0 ? s : [
                    ...s,
                    B
                ],
                coerce: o,
                mask: l,
                message: n.message
            });
            for (const L of A)L[0] ? (p = L[0].refinement != null ? "not_refined" : "not_valid", yield [
                L[0],
                void 0
            ]) : o && (B = L[1], v === void 0 ? e = B : e instanceof Map ? e.set(v, B) : e instanceof Set ? e.add(B) : isObject(e) && (B !== void 0 || v in e) && (e[v] = B));
        }
        if (p !== "not_valid") for (const v of t.refiner(e, _))v.explanation = n.message, p = "not_refined", yield [
            v,
            void 0
        ];
        p === "valid" && (yield [
            void 0,
            e
        ]);
    }
    let Struct$1 = class {
        constructor(t){
            const { type: n, schema: r, validator: s, refiner: o, coercer: l = (p)=>p, entries: _ = function*() {} } = t;
            this.type = n, this.schema = r, this.entries = _, this.coercer = l, s ? this.validator = (p, v)=>{
                const B = s(p, v);
                return toFailures(B, v, this, p);
            } : this.validator = ()=>[], o ? this.refiner = (p, v)=>{
                const B = o(p, v);
                return toFailures(B, v, this, p);
            } : this.refiner = ()=>[];
        }
        assert(t, n) {
            return assert$1(t, this, n);
        }
        create(t, n) {
            return create(t, this, n);
        }
        is(t) {
            return is(t, this);
        }
        mask(t, n) {
            return mask(t, this, n);
        }
        validate(t, n = {}) {
            return validate$1(t, this, n);
        }
    };
    function assert$1(e, t, n) {
        const r = validate$1(e, t, {
            message: n
        });
        if (r[0]) throw r[0];
    }
    function create(e, t, n) {
        const r = validate$1(e, t, {
            coerce: !0,
            message: n
        });
        if (r[0]) throw r[0];
        return r[1];
    }
    function mask(e, t, n) {
        const r = validate$1(e, t, {
            coerce: !0,
            mask: !0,
            message: n
        });
        if (r[0]) throw r[0];
        return r[1];
    }
    function is(e, t) {
        return !validate$1(e, t)[0];
    }
    function validate$1(e, t, n = {}) {
        const r = run(e, t, n), s = shiftIterator(r);
        return s[0] ? [
            new StructError(s[0], function*() {
                for (const l of r)l[0] && (yield l[0]);
            }),
            void 0
        ] : [
            void 0,
            s[1]
        ];
    }
    function define(e, t) {
        return new Struct$1({
            type: e,
            schema: null,
            validator: t
        });
    }
    function any() {
        return define("any", ()=>!0);
    }
    function array(e) {
        return new Struct$1({
            type: "array",
            schema: e,
            *entries (t) {
                if (e && Array.isArray(t)) for (const [n, r] of t.entries())yield [
                    n,
                    r,
                    e
                ];
            },
            coercer (t) {
                return Array.isArray(t) ? t.slice() : t;
            },
            validator (t) {
                return Array.isArray(t) || `Expected an array value, but received: ${print(t)}`;
            }
        });
    }
    function boolean() {
        return define("boolean", (e)=>typeof e == "boolean");
    }
    function instance(e) {
        return define("instance", (t)=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${print(t)}`);
    }
    function literal(e) {
        const t = print(e), n = typeof e;
        return new Struct$1({
            type: "literal",
            schema: n === "string" || n === "number" || n === "boolean" ? e : null,
            validator (r) {
                return r === e || `Expected the literal \`${t}\`, but received: ${print(r)}`;
            }
        });
    }
    function never() {
        return define("never", ()=>!1);
    }
    function nullable(e) {
        return new Struct$1({
            ...e,
            validator: (t, n)=>t === null || e.validator(t, n),
            refiner: (t, n)=>t === null || e.refiner(t, n)
        });
    }
    function number() {
        return define("number", (e)=>typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${print(e)}`);
    }
    function optional(e) {
        return new Struct$1({
            ...e,
            validator: (t, n)=>t === void 0 || e.validator(t, n),
            refiner: (t, n)=>t === void 0 || e.refiner(t, n)
        });
    }
    function record(e, t) {
        return new Struct$1({
            type: "record",
            schema: null,
            *entries (n) {
                if (isObject(n)) for(const r in n){
                    const s = n[r];
                    yield [
                        r,
                        r,
                        e
                    ], yield [
                        r,
                        s,
                        t
                    ];
                }
            },
            validator (n) {
                return isNonArrayObject(n) || `Expected an object, but received: ${print(n)}`;
            },
            coercer (n) {
                return isNonArrayObject(n) ? {
                    ...n
                } : n;
            }
        });
    }
    function string() {
        return define("string", (e)=>typeof e == "string" || `Expected a string, but received: ${print(e)}`);
    }
    function tuple(e) {
        const t = never();
        return new Struct$1({
            type: "tuple",
            schema: null,
            *entries (n) {
                if (Array.isArray(n)) {
                    const r = Math.max(e.length, n.length);
                    for(let s = 0; s < r; s++)yield [
                        s,
                        n[s],
                        e[s] || t
                    ];
                }
            },
            validator (n) {
                return Array.isArray(n) || `Expected an array, but received: ${print(n)}`;
            },
            coercer (n) {
                return Array.isArray(n) ? n.slice() : n;
            }
        });
    }
    function type(e) {
        const t = Object.keys(e);
        return new Struct$1({
            type: "type",
            schema: e,
            *entries (n) {
                if (isObject(n)) for (const r of t)yield [
                    r,
                    n[r],
                    e[r]
                ];
            },
            validator (n) {
                return isNonArrayObject(n) || `Expected an object, but received: ${print(n)}`;
            },
            coercer (n) {
                return isNonArrayObject(n) ? {
                    ...n
                } : n;
            }
        });
    }
    function union(e) {
        const t = e.map((n)=>n.type).join(" | ");
        return new Struct$1({
            type: "union",
            schema: null,
            coercer (n, r) {
                for (const s of e){
                    const [o, l] = s.validate(n, {
                        coerce: !0,
                        mask: r.mask
                    });
                    if (!o) return l;
                }
                return n;
            },
            validator (n, r) {
                const s = [];
                for (const o of e){
                    const [...l] = run(n, o, r), [_] = l;
                    if (_[0]) for (const [p] of l)p && s.push(p);
                    else return [];
                }
                return [
                    `Expected the value to satisfy a union of \`${t}\`, but received: ${print(n)}`,
                    ...s
                ];
            }
        });
    }
    function unknown() {
        return define("unknown", ()=>!0);
    }
    function coerce(e, t, n) {
        return new Struct$1({
            ...e,
            coercer: (r, s)=>is(r, t) ? e.coercer(n(r, s), s) : e.coercer(r, s)
        });
    }
    var getRandomValues, rnds8 = new Uint8Array(16);
    function rng() {
        if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !getRandomValues)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return getRandomValues(rnds8);
    }
    const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    function validate(e) {
        return typeof e == "string" && REGEX.test(e);
    }
    var byteToHex = [];
    for(var i = 0; i < 256; ++i)byteToHex.push((i + 256).toString(16).substr(1));
    function stringify(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (byteToHex[e[t + 0]] + byteToHex[e[t + 1]] + byteToHex[e[t + 2]] + byteToHex[e[t + 3]] + "-" + byteToHex[e[t + 4]] + byteToHex[e[t + 5]] + "-" + byteToHex[e[t + 6]] + byteToHex[e[t + 7]] + "-" + byteToHex[e[t + 8]] + byteToHex[e[t + 9]] + "-" + byteToHex[e[t + 10]] + byteToHex[e[t + 11]] + byteToHex[e[t + 12]] + byteToHex[e[t + 13]] + byteToHex[e[t + 14]] + byteToHex[e[t + 15]]).toLowerCase();
        if (!validate(n)) throw TypeError("Stringified UUID is invalid");
        return n;
    }
    var _nodeId, _clockseq, _lastMSecs = 0, _lastNSecs = 0;
    function v1(e, t, n) {
        var r = t && n || 0, s = t || new Array(16);
        e = e || {};
        var o = e.node || _nodeId, l = e.clockseq !== void 0 ? e.clockseq : _clockseq;
        if (o == null || l == null) {
            var _ = e.random || (e.rng || rng)();
            o == null && (o = _nodeId = [
                _[0] | 1,
                _[1],
                _[2],
                _[3],
                _[4],
                _[5]
            ]), l == null && (l = _clockseq = (_[6] << 8 | _[7]) & 16383);
        }
        var p = e.msecs !== void 0 ? e.msecs : Date.now(), v = e.nsecs !== void 0 ? e.nsecs : _lastNSecs + 1, B = p - _lastMSecs + (v - _lastNSecs) / 1e4;
        if (B < 0 && e.clockseq === void 0 && (l = l + 1 & 16383), (B < 0 || p > _lastMSecs) && e.nsecs === void 0 && (v = 0), v >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        _lastMSecs = p, _lastNSecs = v, _clockseq = l, p += 122192928e5;
        var T = ((p & 268435455) * 1e4 + v) % 4294967296;
        s[r++] = T >>> 24 & 255, s[r++] = T >>> 16 & 255, s[r++] = T >>> 8 & 255, s[r++] = T & 255;
        var A = p / 4294967296 * 1e4 & 268435455;
        s[r++] = A >>> 8 & 255, s[r++] = A & 255, s[r++] = A >>> 24 & 15 | 16, s[r++] = A >>> 16 & 255, s[r++] = l >>> 8 | 128, s[r++] = l & 255;
        for(var L = 0; L < 6; ++L)s[r + L] = o[L];
        return t || stringify(s);
    }
    function parse(e) {
        if (!validate(e)) throw TypeError("Invalid UUID");
        var t, n = new Uint8Array(16);
        return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = t & 255, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = t & 255, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = t & 255, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = t & 255, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = t & 255, n;
    }
    function stringToBytes(e) {
        e = unescape(encodeURIComponent(e));
        for(var t = [], n = 0; n < e.length; ++n)t.push(e.charCodeAt(n));
        return t;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", URL$1 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function v35(e, t, n) {
        function r(s, o, l, _) {
            if (typeof s == "string" && (s = stringToBytes(s)), typeof o == "string" && (o = parse(o)), o.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            var p = new Uint8Array(16 + s.length);
            if (p.set(o), p.set(s, o.length), p = n(p), p[6] = p[6] & 15 | t, p[8] = p[8] & 63 | 128, l) {
                _ = _ || 0;
                for(var v = 0; v < 16; ++v)l[_ + v] = p[v];
                return l;
            }
            return stringify(p);
        }
        try {
            r.name = e;
        } catch  {}
        return r.DNS = DNS, r.URL = URL$1, r;
    }
    function md5(e) {
        if (typeof e == "string") {
            var t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for(var n = 0; n < t.length; ++n)e[n] = t.charCodeAt(n);
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(e), e.length * 8));
    }
    function md5ToHexEncodedArray(e) {
        for(var t = [], n = e.length * 32, r = "0123456789abcdef", s = 0; s < n; s += 8){
            var o = e[s >> 5] >>> s % 32 & 255, l = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(o & 15), 16);
            t.push(l);
        }
        return t;
    }
    function getOutputLength(e) {
        return (e + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(e, t) {
        e[t >> 5] |= 128 << t % 32, e[getOutputLength(t) - 1] = t;
        for(var n = 1732584193, r = -271733879, s = -1732584194, o = 271733878, l = 0; l < e.length; l += 16){
            var _ = n, p = r, v = s, B = o;
            n = md5ff(n, r, s, o, e[l], 7, -680876936), o = md5ff(o, n, r, s, e[l + 1], 12, -389564586), s = md5ff(s, o, n, r, e[l + 2], 17, 606105819), r = md5ff(r, s, o, n, e[l + 3], 22, -1044525330), n = md5ff(n, r, s, o, e[l + 4], 7, -176418897), o = md5ff(o, n, r, s, e[l + 5], 12, 1200080426), s = md5ff(s, o, n, r, e[l + 6], 17, -1473231341), r = md5ff(r, s, o, n, e[l + 7], 22, -45705983), n = md5ff(n, r, s, o, e[l + 8], 7, 1770035416), o = md5ff(o, n, r, s, e[l + 9], 12, -1958414417), s = md5ff(s, o, n, r, e[l + 10], 17, -42063), r = md5ff(r, s, o, n, e[l + 11], 22, -1990404162), n = md5ff(n, r, s, o, e[l + 12], 7, 1804603682), o = md5ff(o, n, r, s, e[l + 13], 12, -40341101), s = md5ff(s, o, n, r, e[l + 14], 17, -1502002290), r = md5ff(r, s, o, n, e[l + 15], 22, 1236535329), n = md5gg(n, r, s, o, e[l + 1], 5, -165796510), o = md5gg(o, n, r, s, e[l + 6], 9, -1069501632), s = md5gg(s, o, n, r, e[l + 11], 14, 643717713), r = md5gg(r, s, o, n, e[l], 20, -373897302), n = md5gg(n, r, s, o, e[l + 5], 5, -701558691), o = md5gg(o, n, r, s, e[l + 10], 9, 38016083), s = md5gg(s, o, n, r, e[l + 15], 14, -660478335), r = md5gg(r, s, o, n, e[l + 4], 20, -405537848), n = md5gg(n, r, s, o, e[l + 9], 5, 568446438), o = md5gg(o, n, r, s, e[l + 14], 9, -1019803690), s = md5gg(s, o, n, r, e[l + 3], 14, -187363961), r = md5gg(r, s, o, n, e[l + 8], 20, 1163531501), n = md5gg(n, r, s, o, e[l + 13], 5, -1444681467), o = md5gg(o, n, r, s, e[l + 2], 9, -51403784), s = md5gg(s, o, n, r, e[l + 7], 14, 1735328473), r = md5gg(r, s, o, n, e[l + 12], 20, -1926607734), n = md5hh(n, r, s, o, e[l + 5], 4, -378558), o = md5hh(o, n, r, s, e[l + 8], 11, -2022574463), s = md5hh(s, o, n, r, e[l + 11], 16, 1839030562), r = md5hh(r, s, o, n, e[l + 14], 23, -35309556), n = md5hh(n, r, s, o, e[l + 1], 4, -1530992060), o = md5hh(o, n, r, s, e[l + 4], 11, 1272893353), s = md5hh(s, o, n, r, e[l + 7], 16, -155497632), r = md5hh(r, s, o, n, e[l + 10], 23, -1094730640), n = md5hh(n, r, s, o, e[l + 13], 4, 681279174), o = md5hh(o, n, r, s, e[l], 11, -358537222), s = md5hh(s, o, n, r, e[l + 3], 16, -722521979), r = md5hh(r, s, o, n, e[l + 6], 23, 76029189), n = md5hh(n, r, s, o, e[l + 9], 4, -640364487), o = md5hh(o, n, r, s, e[l + 12], 11, -421815835), s = md5hh(s, o, n, r, e[l + 15], 16, 530742520), r = md5hh(r, s, o, n, e[l + 2], 23, -995338651), n = md5ii(n, r, s, o, e[l], 6, -198630844), o = md5ii(o, n, r, s, e[l + 7], 10, 1126891415), s = md5ii(s, o, n, r, e[l + 14], 15, -1416354905), r = md5ii(r, s, o, n, e[l + 5], 21, -57434055), n = md5ii(n, r, s, o, e[l + 12], 6, 1700485571), o = md5ii(o, n, r, s, e[l + 3], 10, -1894986606), s = md5ii(s, o, n, r, e[l + 10], 15, -1051523), r = md5ii(r, s, o, n, e[l + 1], 21, -2054922799), n = md5ii(n, r, s, o, e[l + 8], 6, 1873313359), o = md5ii(o, n, r, s, e[l + 15], 10, -30611744), s = md5ii(s, o, n, r, e[l + 6], 15, -1560198380), r = md5ii(r, s, o, n, e[l + 13], 21, 1309151649), n = md5ii(n, r, s, o, e[l + 4], 6, -145523070), o = md5ii(o, n, r, s, e[l + 11], 10, -1120210379), s = md5ii(s, o, n, r, e[l + 2], 15, 718787259), r = md5ii(r, s, o, n, e[l + 9], 21, -343485551), n = safeAdd(n, _), r = safeAdd(r, p), s = safeAdd(s, v), o = safeAdd(o, B);
        }
        return [
            n,
            r,
            s,
            o
        ];
    }
    function bytesToWords(e) {
        if (e.length === 0) return [];
        for(var t = e.length * 8, n = new Uint32Array(getOutputLength(t)), r = 0; r < t; r += 8)n[r >> 5] |= (e[r / 8] & 255) << r % 32;
        return n;
    }
    function safeAdd(e, t) {
        var n = (e & 65535) + (t & 65535), r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535;
    }
    function bitRotateLeft(e, t) {
        return e << t | e >>> 32 - t;
    }
    function md5cmn(e, t, n, r, s, o) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(t, e), safeAdd(r, o)), s), n);
    }
    function md5ff(e, t, n, r, s, o, l) {
        return md5cmn(t & n | ~t & r, e, t, s, o, l);
    }
    function md5gg(e, t, n, r, s, o, l) {
        return md5cmn(t & r | n & ~r, e, t, s, o, l);
    }
    function md5hh(e, t, n, r, s, o, l) {
        return md5cmn(t ^ n ^ r, e, t, s, o, l);
    }
    function md5ii(e, t, n, r, s, o, l) {
        return md5cmn(n ^ (t | ~r), e, t, s, o, l);
    }
    var v3 = v35("v3", 48, md5);
    function v4(e, t, n) {
        e = e || {};
        var r = e.random || (e.rng || rng)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
            n = n || 0;
            for(var s = 0; s < 16; ++s)t[n + s] = r[s];
            return t;
        }
        return stringify(r);
    }
    function f(e, t, n, r) {
        switch(e){
            case 0:
                return t & n ^ ~t & r;
            case 1:
                return t ^ n ^ r;
            case 2:
                return t & n ^ t & r ^ n & r;
            case 3:
                return t ^ n ^ r;
        }
    }
    function ROTL(e, t) {
        return e << t | e >>> 32 - t;
    }
    function sha1(e) {
        var t = [
            1518500249,
            1859775393,
            2400959708,
            3395469782
        ], n = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ];
        if (typeof e == "string") {
            var r = unescape(encodeURIComponent(e));
            e = [];
            for(var s = 0; s < r.length; ++s)e.push(r.charCodeAt(s));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for(var o = e.length / 4 + 2, l = Math.ceil(o / 16), _ = new Array(l), p = 0; p < l; ++p){
            for(var v = new Uint32Array(16), B = 0; B < 16; ++B)v[B] = e[p * 64 + B * 4] << 24 | e[p * 64 + B * 4 + 1] << 16 | e[p * 64 + B * 4 + 2] << 8 | e[p * 64 + B * 4 + 3];
            _[p] = v;
        }
        _[l - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), _[l - 1][14] = Math.floor(_[l - 1][14]), _[l - 1][15] = (e.length - 1) * 8 & 4294967295;
        for(var T = 0; T < l; ++T){
            for(var A = new Uint32Array(80), L = 0; L < 16; ++L)A[L] = _[T][L];
            for(var N = 16; N < 80; ++N)A[N] = ROTL(A[N - 3] ^ A[N - 8] ^ A[N - 14] ^ A[N - 16], 1);
            for(var R = n[0], U = n[1], z = n[2], G = n[3], H = n[4], Y = 0; Y < 80; ++Y){
                var $ = Math.floor(Y / 20), X = ROTL(R, 5) + f($, U, z, G) + H + t[$] + A[Y] >>> 0;
                H = G, G = z, z = ROTL(U, 30) >>> 0, U = R, R = X;
            }
            n[0] = n[0] + R >>> 0, n[1] = n[1] + U >>> 0, n[2] = n[2] + z >>> 0, n[3] = n[3] + G >>> 0, n[4] = n[4] + H >>> 0;
        }
        return [
            n[0] >> 24 & 255,
            n[0] >> 16 & 255,
            n[0] >> 8 & 255,
            n[0] & 255,
            n[1] >> 24 & 255,
            n[1] >> 16 & 255,
            n[1] >> 8 & 255,
            n[1] & 255,
            n[2] >> 24 & 255,
            n[2] >> 16 & 255,
            n[2] >> 8 & 255,
            n[2] & 255,
            n[3] >> 24 & 255,
            n[3] >> 16 & 255,
            n[3] >> 8 & 255,
            n[3] & 255,
            n[4] >> 24 & 255,
            n[4] >> 16 & 255,
            n[4] >> 8 & 255,
            n[4] & 255
        ];
    }
    var v5 = v35("v5", 80, sha1);
    const nil = "00000000-0000-0000-0000-000000000000";
    function version(e) {
        if (!validate(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
    }
    const esmBrowser = Object.freeze(Object.defineProperty({
        __proto__: null,
        NIL: nil,
        parse,
        stringify,
        v1,
        v3,
        v4,
        v5,
        validate,
        version
    }, Symbol.toStringTag, {
        value: "Module"
    })), require$$0 = getAugmentedNamespace(esmBrowser);
    var generateRequest_1, hasRequiredGenerateRequest;
    function requireGenerateRequest() {
        if (hasRequiredGenerateRequest) return generateRequest_1;
        hasRequiredGenerateRequest = 1;
        const e = require$$0.v4;
        return generateRequest_1 = function(n, r, s, o) {
            if (typeof n != "string") throw new TypeError(n + " must be a string");
            o = o || {};
            const l = typeof o.version == "number" ? o.version : 2;
            if (l !== 1 && l !== 2) throw new TypeError(l + " must be 1 or 2");
            const _ = {
                method: n
            };
            if (l === 2 && (_.jsonrpc = "2.0"), r) {
                if (typeof r != "object" && !Array.isArray(r)) throw new TypeError(r + " must be an object, array or omitted");
                _.params = r;
            }
            if (typeof s > "u") {
                const p = typeof o.generator == "function" ? o.generator : function() {
                    return e();
                };
                _.id = p(_, o);
            } else l === 2 && s === null ? o.notificationIdNull && (_.id = null) : _.id = s;
            return _;
        }, generateRequest_1;
    }
    var browser, hasRequiredBrowser;
    function requireBrowser() {
        if (hasRequiredBrowser) return browser;
        hasRequiredBrowser = 1;
        const e = require$$0.v4, t = requireGenerateRequest(), n = function(r, s) {
            if (!(this instanceof n)) return new n(r, s);
            s || (s = {}), this.options = {
                reviver: typeof s.reviver < "u" ? s.reviver : null,
                replacer: typeof s.replacer < "u" ? s.replacer : null,
                generator: typeof s.generator < "u" ? s.generator : function() {
                    return e();
                },
                version: typeof s.version < "u" ? s.version : 2,
                notificationIdNull: typeof s.notificationIdNull == "boolean" ? s.notificationIdNull : !1
            }, this.callServer = r;
        };
        return browser = n, n.prototype.request = function(r, s, o, l) {
            const _ = this;
            let p = null;
            const v = Array.isArray(r) && typeof s == "function";
            if (this.options.version === 1 && v) throw new TypeError("JSON-RPC 1.0 does not support batching");
            if (v || !v && r && typeof r == "object" && typeof s == "function") l = s, p = r;
            else {
                typeof o == "function" && (l = o, o = void 0);
                const A = typeof l == "function";
                try {
                    p = t(r, s, o, {
                        generator: this.options.generator,
                        version: this.options.version,
                        notificationIdNull: this.options.notificationIdNull
                    });
                } catch (L) {
                    if (A) {
                        l(L);
                        return;
                    }
                    throw L;
                }
                if (!A) return p;
            }
            let T;
            try {
                T = JSON.stringify(p, this.options.replacer);
            } catch (A) {
                l(A);
                return;
            }
            return this.callServer(T, function(A, L) {
                _._parseResponse(A, L, l);
            }), p;
        }, n.prototype._parseResponse = function(r, s, o) {
            if (r) {
                o(r);
                return;
            }
            if (!s) {
                o();
                return;
            }
            let l;
            try {
                l = JSON.parse(s, this.options.reviver);
            } catch (_) {
                o(_);
                return;
            }
            if (o.length === 3) if (Array.isArray(l)) {
                const _ = function(v) {
                    return typeof v.error < "u";
                }, p = function(v) {
                    return !_(v);
                };
                o(null, l.filter(_), l.filter(p));
                return;
            } else {
                o(null, l.error, l.result);
                return;
            }
            o(null, l);
        }, browser;
    }
    requireBrowser();
    class HMAC extends Hash {
        constructor(t, n){
            super(), this.finished = !1, this.destroyed = !1, ahash(t);
            const r = toBytes(n);
            if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
            const s = this.blockLen, o = new Uint8Array(s);
            o.set(r.length > s ? t.create().update(r).digest() : r);
            for(let l = 0; l < o.length; l++)o[l] ^= 54;
            this.iHash.update(o), this.oHash = t.create();
            for(let l = 0; l < o.length; l++)o[l] ^= 106;
            this.oHash.update(o), clean(o);
        }
        update(t) {
            return aexists(this), this.iHash.update(t), this;
        }
        digestInto(t) {
            aexists(this), abytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
        }
        digest() {
            const t = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(t), t;
        }
        _cloneInto(t) {
            t || (t = Object.create(Object.getPrototypeOf(this), {}));
            const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: l, outputLen: _ } = this;
            return t = t, t.finished = s, t.destroyed = o, t.blockLen = l, t.outputLen = _, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
        }
        clone() {
            return this._cloneInto();
        }
        destroy() {
            this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
        }
    }
    const hmac = (e, t, n)=>new HMAC(e, t).update(n).digest();
    hmac.create = (e, t)=>new HMAC(e, t);
    const divNearest = (e, t)=>(e + (e >= 0 ? t : -t) / _2n$1) / t;
    function _splitEndoScalar(e, t, n) {
        const [[r, s], [o, l]] = t, _ = divNearest(l * e, n), p = divNearest(-s * e, n);
        let v = e - _ * r - p * o, B = -_ * s - p * l;
        const T = v < _0n, A = B < _0n;
        T && (v = -v), A && (B = -B);
        const L = bitMask(Math.ceil(bitLen(n) / 2)) + _1n;
        if (v < _0n || v >= L || B < _0n || B >= L) throw new Error("splitScalar (endomorphism): failed, k=" + e);
        return {
            k1neg: T,
            k1: v,
            k2neg: A,
            k2: B
        };
    }
    function validateSigFormat(e) {
        if (![
            "compact",
            "recovered",
            "der"
        ].includes(e)) throw new Error('Signature format must be "compact", "recovered", or "der"');
        return e;
    }
    function validateSigOpts(e, t) {
        const n = {};
        for (let r of Object.keys(t))n[r] = e[r] === void 0 ? t[r] : e[r];
        return _abool2(n.lowS, "lowS"), _abool2(n.prehash, "prehash"), n.format !== void 0 && validateSigFormat(n.format), n;
    }
    class DERErr extends Error {
        constructor(t = ""){
            super(t);
        }
    }
    const DER = {
        Err: DERErr,
        _tlv: {
            encode: (e, t)=>{
                const { Err: n } = DER;
                if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
                if (t.length & 1) throw new n("tlv.encode: unpadded data");
                const r = t.length / 2, s = numberToHexUnpadded(r);
                if (s.length / 2 & 128) throw new n("tlv.encode: long form length too big");
                const o = r > 127 ? numberToHexUnpadded(s.length / 2 | 128) : "";
                return numberToHexUnpadded(e) + o + s + t;
            },
            decode (e, t) {
                const { Err: n } = DER;
                let r = 0;
                if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
                if (t.length < 2 || t[r++] !== e) throw new n("tlv.decode: wrong tlv");
                const s = t[r++], o = !!(s & 128);
                let l = 0;
                if (!o) l = s;
                else {
                    const p = s & 127;
                    if (!p) throw new n("tlv.decode(long): indefinite length not supported");
                    if (p > 4) throw new n("tlv.decode(long): byte length is too big");
                    const v = t.subarray(r, r + p);
                    if (v.length !== p) throw new n("tlv.decode: length bytes not complete");
                    if (v[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
                    for (const B of v)l = l << 8 | B;
                    if (r += p, l < 128) throw new n("tlv.decode(long): not minimal encoding");
                }
                const _ = t.subarray(r, r + l);
                if (_.length !== l) throw new n("tlv.decode: wrong value length");
                return {
                    v: _,
                    l: t.subarray(r + l)
                };
            }
        },
        _int: {
            encode (e) {
                const { Err: t } = DER;
                if (e < _0n) throw new t("integer: negative integers are not allowed");
                let n = numberToHexUnpadded(e);
                if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new t("unexpected DER parsing assertion: unpadded hex");
                return n;
            },
            decode (e) {
                const { Err: t } = DER;
                if (e[0] & 128) throw new t("invalid signature integer: negative");
                if (e[0] === 0 && !(e[1] & 128)) throw new t("invalid signature integer: unnecessary leading zero");
                return bytesToNumberBE(e);
            }
        },
        toSig (e) {
            const { Err: t, _int: n, _tlv: r } = DER, s = ensureBytes("signature", e), { v: o, l } = r.decode(48, s);
            if (l.length) throw new t("invalid signature: left bytes after parsing");
            const { v: _, l: p } = r.decode(2, o), { v, l: B } = r.decode(2, p);
            if (B.length) throw new t("invalid signature: left bytes after parsing");
            return {
                r: n.decode(_),
                s: n.decode(v)
            };
        },
        hexFromSig (e) {
            const { _tlv: t, _int: n } = DER, r = t.encode(2, n.encode(e.r)), s = t.encode(2, n.encode(e.s)), o = r + s;
            return t.encode(48, o);
        }
    }, _0n = BigInt(0), _1n = BigInt(1), _2n$1 = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
    function _normFnElement(e, t) {
        const { BYTES: n } = e;
        let r;
        if (typeof t == "bigint") r = t;
        else {
            let s = ensureBytes("private key", t);
            try {
                r = e.fromBytes(s);
            } catch  {
                throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof t}`);
            }
        }
        if (!e.isValidNot0(r)) throw new Error("invalid private key: out of range [1..N-1]");
        return r;
    }
    function weierstrassN(e, t = {}) {
        const n = _createCurveFields("weierstrass", e, t), { Fp: r, Fn: s } = n;
        let o = n.CURVE;
        const { h: l, n: _ } = o;
        _validateObject(t, {}, {
            allowInfinityPoint: "boolean",
            clearCofactor: "function",
            isTorsionFree: "function",
            fromBytes: "function",
            toBytes: "function",
            endo: "object",
            wrapPrivateKey: "boolean"
        });
        const { endo: p } = t;
        if (p && (!r.is0(o.a) || typeof p.beta != "bigint" || !Array.isArray(p.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
        const v = getWLengths(r, s);
        function B() {
            if (!r.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
        }
        function T(K, y, a) {
            const { x: h, y: b } = y.toAffine(), E = r.toBytes(h);
            if (_abool2(a, "isCompressed"), a) {
                B();
                const S = !r.isOdd(b);
                return concatBytes(pprefix(S), E);
            } else return concatBytes(Uint8Array.of(4), E, r.toBytes(b));
        }
        function A(K) {
            _abytes2(K, void 0, "Point");
            const { publicKey: y, publicKeyUncompressed: a } = v, h = K.length, b = K[0], E = K.subarray(1);
            if (h === y && (b === 2 || b === 3)) {
                const S = r.fromBytes(E);
                if (!r.isValid(S)) throw new Error("bad point: is not on curve, wrong x");
                const j = R(S);
                let I;
                try {
                    I = r.sqrt(j);
                } catch (u) {
                    const w = u instanceof Error ? ": " + u.message : "";
                    throw new Error("bad point: is not on curve, sqrt error" + w);
                }
                B();
                const x = r.isOdd(I);
                return (b & 1) === 1 !== x && (I = r.neg(I)), {
                    x: S,
                    y: I
                };
            } else if (h === a && b === 4) {
                const S = r.BYTES, j = r.fromBytes(E.subarray(0, S)), I = r.fromBytes(E.subarray(S, S * 2));
                if (!U(j, I)) throw new Error("bad point: is not on curve");
                return {
                    x: j,
                    y: I
                };
            } else throw new Error(`bad point: got length ${h}, expected compressed=${y} or uncompressed=${a}`);
        }
        const L = t.toBytes || T, N = t.fromBytes || A;
        function R(K) {
            const y = r.sqr(K), a = r.mul(y, K);
            return r.add(r.add(a, r.mul(K, o.a)), o.b);
        }
        function U(K, y) {
            const a = r.sqr(y), h = R(K);
            return r.eql(a, h);
        }
        if (!U(o.Gx, o.Gy)) throw new Error("bad curve params: generator point");
        const z = r.mul(r.pow(o.a, _3n), _4n), G = r.mul(r.sqr(o.b), BigInt(27));
        if (r.is0(r.add(z, G))) throw new Error("bad curve params: a or b");
        function H(K, y, a = !1) {
            if (!r.isValid(y) || a && r.is0(y)) throw new Error(`bad point coordinate ${K}`);
            return y;
        }
        function Y(K) {
            if (!(K instanceof k)) throw new Error("ProjectivePoint expected");
        }
        function $(K) {
            if (!p || !p.basises) throw new Error("no endo");
            return _splitEndoScalar(K, p.basises, s.ORDER);
        }
        const X = memoized((K, y)=>{
            const { X: a, Y: h, Z: b } = K;
            if (r.eql(b, r.ONE)) return {
                x: a,
                y: h
            };
            const E = K.is0();
            y == null && (y = E ? r.ONE : r.inv(b));
            const S = r.mul(a, y), j = r.mul(h, y), I = r.mul(b, y);
            if (E) return {
                x: r.ZERO,
                y: r.ZERO
            };
            if (!r.eql(I, r.ONE)) throw new Error("invZ was invalid");
            return {
                x: S,
                y: j
            };
        }), te = memoized((K)=>{
            if (K.is0()) {
                if (t.allowInfinityPoint && !r.is0(K.Y)) return;
                throw new Error("bad point: ZERO");
            }
            const { x: y, y: a } = K.toAffine();
            if (!r.isValid(y) || !r.isValid(a)) throw new Error("bad point: x or y not field elements");
            if (!U(y, a)) throw new Error("bad point: equation left != right");
            if (!K.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
            return !0;
        });
        function J(K, y, a, h, b) {
            return a = new k(r.mul(a.X, K), a.Y, a.Z), y = negateCt(h, y), a = negateCt(b, a), y.add(a);
        }
        class k {
            constructor(y, a, h){
                this.X = H("x", y), this.Y = H("y", a, !0), this.Z = H("z", h), Object.freeze(this);
            }
            static CURVE() {
                return o;
            }
            static fromAffine(y) {
                const { x: a, y: h } = y || {};
                if (!y || !r.isValid(a) || !r.isValid(h)) throw new Error("invalid affine point");
                if (y instanceof k) throw new Error("projective point not allowed");
                return r.is0(a) && r.is0(h) ? k.ZERO : new k(a, h, r.ONE);
            }
            static fromBytes(y) {
                const a = k.fromAffine(N(_abytes2(y, void 0, "point")));
                return a.assertValidity(), a;
            }
            static fromHex(y) {
                return k.fromBytes(ensureBytes("pointHex", y));
            }
            get x() {
                return this.toAffine().x;
            }
            get y() {
                return this.toAffine().y;
            }
            precompute(y = 8, a = !0) {
                return P.createCache(this, y), a || this.multiply(_3n), this;
            }
            assertValidity() {
                te(this);
            }
            hasEvenY() {
                const { y } = this.toAffine();
                if (!r.isOdd) throw new Error("Field doesn't support isOdd");
                return !r.isOdd(y);
            }
            equals(y) {
                Y(y);
                const { X: a, Y: h, Z: b } = this, { X: E, Y: S, Z: j } = y, I = r.eql(r.mul(a, j), r.mul(E, b)), x = r.eql(r.mul(h, j), r.mul(S, b));
                return I && x;
            }
            negate() {
                return new k(this.X, r.neg(this.Y), this.Z);
            }
            double() {
                const { a: y, b: a } = o, h = r.mul(a, _3n), { X: b, Y: E, Z: S } = this;
                let j = r.ZERO, I = r.ZERO, x = r.ZERO, c = r.mul(b, b), u = r.mul(E, E), w = r.mul(S, S), O = r.mul(b, E);
                return O = r.add(O, O), x = r.mul(b, S), x = r.add(x, x), j = r.mul(y, x), I = r.mul(h, w), I = r.add(j, I), j = r.sub(u, I), I = r.add(u, I), I = r.mul(j, I), j = r.mul(O, j), x = r.mul(h, x), w = r.mul(y, w), O = r.sub(c, w), O = r.mul(y, O), O = r.add(O, x), x = r.add(c, c), c = r.add(x, c), c = r.add(c, w), c = r.mul(c, O), I = r.add(I, c), w = r.mul(E, S), w = r.add(w, w), c = r.mul(w, O), j = r.sub(j, c), x = r.mul(w, u), x = r.add(x, x), x = r.add(x, x), new k(j, I, x);
            }
            add(y) {
                Y(y);
                const { X: a, Y: h, Z: b } = this, { X: E, Y: S, Z: j } = y;
                let I = r.ZERO, x = r.ZERO, c = r.ZERO;
                const u = o.a, w = r.mul(o.b, _3n);
                let O = r.mul(a, E), F = r.mul(h, S), q = r.mul(b, j), Z = r.add(a, h), Q = r.add(E, S);
                Z = r.mul(Z, Q), Q = r.add(O, F), Z = r.sub(Z, Q), Q = r.add(a, b);
                let ie = r.add(E, j);
                return Q = r.mul(Q, ie), ie = r.add(O, q), Q = r.sub(Q, ie), ie = r.add(h, b), I = r.add(S, j), ie = r.mul(ie, I), I = r.add(F, q), ie = r.sub(ie, I), c = r.mul(u, Q), I = r.mul(w, q), c = r.add(I, c), I = r.sub(F, c), c = r.add(F, c), x = r.mul(I, c), F = r.add(O, O), F = r.add(F, O), q = r.mul(u, q), Q = r.mul(w, Q), F = r.add(F, q), q = r.sub(O, q), q = r.mul(u, q), Q = r.add(Q, q), O = r.mul(F, Q), x = r.add(x, O), O = r.mul(ie, Q), I = r.mul(Z, I), I = r.sub(I, O), O = r.mul(Z, F), c = r.mul(ie, c), c = r.add(c, O), new k(I, x, c);
            }
            subtract(y) {
                return this.add(y.negate());
            }
            is0() {
                return this.equals(k.ZERO);
            }
            multiply(y) {
                const { endo: a } = t;
                if (!s.isValidNot0(y)) throw new Error("invalid scalar: out of range");
                let h, b;
                const E = (S)=>P.cached(this, S, (j)=>normalizeZ(k, j));
                if (a) {
                    const { k1neg: S, k1: j, k2neg: I, k2: x } = $(y), { p: c, f: u } = E(j), { p: w, f: O } = E(x);
                    b = u.add(O), h = J(a.beta, c, w, S, I);
                } else {
                    const { p: S, f: j } = E(y);
                    h = S, b = j;
                }
                return normalizeZ(k, [
                    h,
                    b
                ])[0];
            }
            multiplyUnsafe(y) {
                const { endo: a } = t, h = this;
                if (!s.isValid(y)) throw new Error("invalid scalar: out of range");
                if (y === _0n || h.is0()) return k.ZERO;
                if (y === _1n) return h;
                if (P.hasCache(this)) return this.multiply(y);
                if (a) {
                    const { k1neg: b, k1: E, k2neg: S, k2: j } = $(y), { p1: I, p2: x } = mulEndoUnsafe(k, h, E, j);
                    return J(a.beta, I, x, b, S);
                } else return P.unsafe(h, y);
            }
            multiplyAndAddUnsafe(y, a, h) {
                const b = this.multiplyUnsafe(a).add(y.multiplyUnsafe(h));
                return b.is0() ? void 0 : b;
            }
            toAffine(y) {
                return X(this, y);
            }
            isTorsionFree() {
                const { isTorsionFree: y } = t;
                return l === _1n ? !0 : y ? y(k, this) : P.unsafe(this, _).is0();
            }
            clearCofactor() {
                const { clearCofactor: y } = t;
                return l === _1n ? this : y ? y(k, this) : this.multiplyUnsafe(l);
            }
            isSmallOrder() {
                return this.multiplyUnsafe(l).is0();
            }
            toBytes(y = !0) {
                return _abool2(y, "isCompressed"), this.assertValidity(), L(k, this, y);
            }
            toHex(y = !0) {
                return bytesToHex(this.toBytes(y));
            }
            toString() {
                return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
            }
            get px() {
                return this.X;
            }
            get py() {
                return this.X;
            }
            get pz() {
                return this.Z;
            }
            toRawBytes(y = !0) {
                return this.toBytes(y);
            }
            _setWindowSize(y) {
                this.precompute(y);
            }
            static normalizeZ(y) {
                return normalizeZ(k, y);
            }
            static msm(y, a) {
                return pippenger(k, s, y, a);
            }
            static fromPrivateKey(y) {
                return k.BASE.multiply(_normFnElement(s, y));
            }
        }
        k.BASE = new k(o.Gx, o.Gy, r.ONE), k.ZERO = new k(r.ZERO, r.ONE, r.ZERO), k.Fp = r, k.Fn = s;
        const D = s.BITS, P = new wNAF(k, t.endo ? Math.ceil(D / 2) : D);
        return k.BASE.precompute(8), k;
    }
    function pprefix(e) {
        return Uint8Array.of(e ? 2 : 3);
    }
    function getWLengths(e, t) {
        return {
            secretKey: t.BYTES,
            publicKey: 1 + e.BYTES,
            publicKeyUncompressed: 1 + 2 * e.BYTES,
            publicKeyHasPrefix: !0,
            signature: 2 * t.BYTES
        };
    }
    function ecdh(e, t = {}) {
        const { Fn: n } = e, r = t.randomBytes || randomBytes, s = Object.assign(getWLengths(e.Fp, n), {
            seed: getMinHashLength(n.ORDER)
        });
        function o(L) {
            try {
                return !!_normFnElement(n, L);
            } catch  {
                return !1;
            }
        }
        function l(L, N) {
            const { publicKey: R, publicKeyUncompressed: U } = s;
            try {
                const z = L.length;
                return N === !0 && z !== R || N === !1 && z !== U ? !1 : !!e.fromBytes(L);
            } catch  {
                return !1;
            }
        }
        function _(L = r(s.seed)) {
            return mapHashToField(_abytes2(L, s.seed, "seed"), n.ORDER);
        }
        function p(L, N = !0) {
            return e.BASE.multiply(_normFnElement(n, L)).toBytes(N);
        }
        function v(L) {
            const N = _(L);
            return {
                secretKey: N,
                publicKey: p(N)
            };
        }
        function B(L) {
            if (typeof L == "bigint") return !1;
            if (L instanceof e) return !0;
            const { secretKey: N, publicKey: R, publicKeyUncompressed: U } = s;
            if (n.allowedLengths || N === R) return;
            const z = ensureBytes("key", L).length;
            return z === R || z === U;
        }
        function T(L, N, R = !0) {
            if (B(L) === !0) throw new Error("first arg must be private key");
            if (B(N) === !1) throw new Error("second arg must be public key");
            const U = _normFnElement(n, L);
            return e.fromHex(N).multiply(U).toBytes(R);
        }
        return Object.freeze({
            getPublicKey: p,
            getSharedSecret: T,
            keygen: v,
            Point: e,
            utils: {
                isValidSecretKey: o,
                isValidPublicKey: l,
                randomSecretKey: _,
                isValidPrivateKey: o,
                randomPrivateKey: _,
                normPrivateKeyToScalar: (L)=>_normFnElement(n, L),
                precompute (L = 8, N = e.BASE) {
                    return N.precompute(L, !1);
                }
            },
            lengths: s
        });
    }
    function ecdsa(e, t, n = {}) {
        ahash(t), _validateObject(n, {}, {
            hmac: "function",
            lowS: "boolean",
            randomBytes: "function",
            bits2int: "function",
            bits2int_modN: "function"
        });
        const r = n.randomBytes || randomBytes, s = n.hmac || ((a, ...h)=>hmac(t, a, concatBytes(...h))), { Fp: o, Fn: l } = e, { ORDER: _, BITS: p } = l, { keygen: v, getPublicKey: B, getSharedSecret: T, utils: A, lengths: L } = ecdh(e, n), N = {
            prehash: !1,
            lowS: typeof n.lowS == "boolean" ? n.lowS : !1,
            format: void 0,
            extraEntropy: !1
        }, R = "compact";
        function U(a) {
            const h = _ >> _1n;
            return a > h;
        }
        function z(a, h) {
            if (!l.isValidNot0(h)) throw new Error(`invalid signature ${a}: out of range 1..Point.Fn.ORDER`);
            return h;
        }
        function G(a, h) {
            validateSigFormat(h);
            const b = L.signature, E = h === "compact" ? b : h === "recovered" ? b + 1 : void 0;
            return _abytes2(a, E, `${h} signature`);
        }
        class H {
            constructor(h, b, E){
                this.r = z("r", h), this.s = z("s", b), E != null && (this.recovery = E), Object.freeze(this);
            }
            static fromBytes(h, b = R) {
                G(h, b);
                let E;
                if (b === "der") {
                    const { r: x, s: c } = DER.toSig(_abytes2(h));
                    return new H(x, c);
                }
                b === "recovered" && (E = h[0], b = "compact", h = h.subarray(1));
                const S = l.BYTES, j = h.subarray(0, S), I = h.subarray(S, S * 2);
                return new H(l.fromBytes(j), l.fromBytes(I), E);
            }
            static fromHex(h, b) {
                return this.fromBytes(hexToBytes(h), b);
            }
            addRecoveryBit(h) {
                return new H(this.r, this.s, h);
            }
            recoverPublicKey(h) {
                const b = o.ORDER, { r: E, s: S, recovery: j } = this;
                if (j == null || ![
                    0,
                    1,
                    2,
                    3
                ].includes(j)) throw new Error("recovery id invalid");
                if (_ * _2n$1 < b && j > 1) throw new Error("recovery id is ambiguous for h>1 curve");
                const x = j === 2 || j === 3 ? E + _ : E;
                if (!o.isValid(x)) throw new Error("recovery id 2 or 3 invalid");
                const c = o.toBytes(x), u = e.fromBytes(concatBytes(pprefix((j & 1) === 0), c)), w = l.inv(x), O = $(ensureBytes("msgHash", h)), F = l.create(-O * w), q = l.create(S * w), Z = e.BASE.multiplyUnsafe(F).add(u.multiplyUnsafe(q));
                if (Z.is0()) throw new Error("point at infinify");
                return Z.assertValidity(), Z;
            }
            hasHighS() {
                return U(this.s);
            }
            toBytes(h = R) {
                if (validateSigFormat(h), h === "der") return hexToBytes(DER.hexFromSig(this));
                const b = l.toBytes(this.r), E = l.toBytes(this.s);
                if (h === "recovered") {
                    if (this.recovery == null) throw new Error("recovery bit must be present");
                    return concatBytes(Uint8Array.of(this.recovery), b, E);
                }
                return concatBytes(b, E);
            }
            toHex(h) {
                return bytesToHex(this.toBytes(h));
            }
            assertValidity() {}
            static fromCompact(h) {
                return H.fromBytes(ensureBytes("sig", h), "compact");
            }
            static fromDER(h) {
                return H.fromBytes(ensureBytes("sig", h), "der");
            }
            normalizeS() {
                return this.hasHighS() ? new H(this.r, l.neg(this.s), this.recovery) : this;
            }
            toDERRawBytes() {
                return this.toBytes("der");
            }
            toDERHex() {
                return bytesToHex(this.toBytes("der"));
            }
            toCompactRawBytes() {
                return this.toBytes("compact");
            }
            toCompactHex() {
                return bytesToHex(this.toBytes("compact"));
            }
        }
        const Y = n.bits2int || function(h) {
            if (h.length > 8192) throw new Error("input is too large");
            const b = bytesToNumberBE(h), E = h.length * 8 - p;
            return E > 0 ? b >> BigInt(E) : b;
        }, $ = n.bits2int_modN || function(h) {
            return l.create(Y(h));
        }, X = bitMask(p);
        function te(a) {
            return aInRange("num < 2^" + p, a, _0n, X), l.toBytes(a);
        }
        function J(a, h) {
            return _abytes2(a, void 0, "message"), h ? _abytes2(t(a), void 0, "prehashed message") : a;
        }
        function k(a, h, b) {
            if ([
                "recovered",
                "canonical"
            ].some((F)=>F in b)) throw new Error("sign() legacy options not supported");
            const { lowS: E, prehash: S, extraEntropy: j } = validateSigOpts(b, N);
            a = J(a, S);
            const I = $(a), x = _normFnElement(l, h), c = [
                te(x),
                te(I)
            ];
            if (j != null && j !== !1) {
                const F = j === !0 ? r(L.secretKey) : j;
                c.push(ensureBytes("extraEntropy", F));
            }
            const u = concatBytes(...c), w = I;
            function O(F) {
                const q = Y(F);
                if (!l.isValidNot0(q)) return;
                const Z = l.inv(q), Q = e.BASE.multiply(q).toAffine(), ie = l.create(Q.x);
                if (ie === _0n) return;
                const se = l.create(Z * l.create(w + ie * x));
                if (se === _0n) return;
                let ae = (Q.x === ie ? 0 : 2) | Number(Q.y & _1n), Ce = se;
                return E && U(se) && (Ce = l.neg(se), ae ^= 1), new H(ie, Ce, ae);
            }
            return {
                seed: u,
                k2sig: O
            };
        }
        function D(a, h, b = {}) {
            a = ensureBytes("message", a);
            const { seed: E, k2sig: S } = k(a, h, b);
            return createHmacDrbg(t.outputLen, l.BYTES, s)(E, S);
        }
        function P(a) {
            let h;
            const b = typeof a == "string" || isBytes(a), E = !b && a !== null && typeof a == "object" && typeof a.r == "bigint" && typeof a.s == "bigint";
            if (!b && !E) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
            if (E) h = new H(a.r, a.s);
            else if (b) {
                try {
                    h = H.fromBytes(ensureBytes("sig", a), "der");
                } catch (S) {
                    if (!(S instanceof DER.Err)) throw S;
                }
                if (!h) try {
                    h = H.fromBytes(ensureBytes("sig", a), "compact");
                } catch  {
                    return !1;
                }
            }
            return h || !1;
        }
        function K(a, h, b, E = {}) {
            const { lowS: S, prehash: j, format: I } = validateSigOpts(E, N);
            if (b = ensureBytes("publicKey", b), h = J(ensureBytes("message", h), j), "strict" in E) throw new Error("options.strict was renamed to lowS");
            const x = I === void 0 ? P(a) : H.fromBytes(ensureBytes("sig", a), I);
            if (x === !1) return !1;
            try {
                const c = e.fromBytes(b);
                if (S && x.hasHighS()) return !1;
                const { r: u, s: w } = x, O = $(h), F = l.inv(w), q = l.create(O * F), Z = l.create(u * F), Q = e.BASE.multiplyUnsafe(q).add(c.multiplyUnsafe(Z));
                return Q.is0() ? !1 : l.create(Q.x) === u;
            } catch  {
                return !1;
            }
        }
        function y(a, h, b = {}) {
            const { prehash: E } = validateSigOpts(b, N);
            return h = J(h, E), H.fromBytes(a, "recovered").recoverPublicKey(h).toBytes();
        }
        return Object.freeze({
            keygen: v,
            getPublicKey: B,
            getSharedSecret: T,
            utils: A,
            lengths: L,
            Point: e,
            sign: D,
            verify: K,
            recoverPublicKey: y,
            Signature: H,
            hash: t
        });
    }
    function _weierstrass_legacy_opts_to_new(e) {
        const t = {
            a: e.a,
            b: e.b,
            p: e.Fp.ORDER,
            n: e.n,
            h: e.h,
            Gx: e.Gx,
            Gy: e.Gy
        }, n = e.Fp;
        let r = e.allowedPrivateKeyLengths ? Array.from(new Set(e.allowedPrivateKeyLengths.map((l)=>Math.ceil(l / 2)))) : void 0;
        const s = Field(t.n, {
            BITS: e.nBitLength,
            allowedLengths: r,
            modFromBytes: e.wrapPrivateKey
        }), o = {
            Fp: n,
            Fn: s,
            allowInfinityPoint: e.allowInfinityPoint,
            endo: e.endo,
            isTorsionFree: e.isTorsionFree,
            clearCofactor: e.clearCofactor,
            fromBytes: e.fromBytes,
            toBytes: e.toBytes
        };
        return {
            CURVE: t,
            curveOpts: o
        };
    }
    function _ecdsa_legacy_opts_to_new(e) {
        const { CURVE: t, curveOpts: n } = _weierstrass_legacy_opts_to_new(e), r = {
            hmac: e.hmac,
            randomBytes: e.randomBytes,
            lowS: e.lowS,
            bits2int: e.bits2int,
            bits2int_modN: e.bits2int_modN
        };
        return {
            CURVE: t,
            curveOpts: n,
            hash: e.hash,
            ecdsaOpts: r
        };
    }
    function _ecdsa_new_output_to_legacy(e, t) {
        const n = t.Point;
        return Object.assign({}, t, {
            ProjectivePoint: n,
            CURVE: Object.assign({}, e, nLength(n.Fn.ORDER, n.Fn.BITS))
        });
    }
    function weierstrass(e) {
        const { CURVE: t, curveOpts: n, hash: r, ecdsaOpts: s } = _ecdsa_legacy_opts_to_new(e), o = weierstrassN(t, n), l = ecdsa(o, r, s);
        return _ecdsa_new_output_to_legacy(e, l);
    }
    function createCurve(e, t) {
        const n = (r)=>weierstrass({
                ...e,
                hash: r
            });
        return {
            ...n(t),
            create: n
        };
    }
    const secp256k1_CURVE = {
        p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
        n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
        Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
    }, secp256k1_ENDO = {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        basises: [
            [
                BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
            ],
            [
                BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                BigInt("0x3086d221a7d46bcde86c90e49284eb15")
            ]
        ]
    }, _2n = BigInt(2);
    function sqrtMod(e) {
        const t = secp256k1_CURVE.p, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), l = BigInt(23), _ = BigInt(44), p = BigInt(88), v = e * e * e % t, B = v * v * e % t, T = pow2(B, n, t) * B % t, A = pow2(T, n, t) * B % t, L = pow2(A, _2n, t) * v % t, N = pow2(L, s, t) * L % t, R = pow2(N, o, t) * N % t, U = pow2(R, _, t) * R % t, z = pow2(U, p, t) * U % t, G = pow2(z, _, t) * R % t, H = pow2(G, n, t) * B % t, Y = pow2(H, l, t) * N % t, $ = pow2(Y, r, t) * v % t, X = pow2($, _2n, t);
        if (!Fpk1.eql(Fpk1.sqr(X), e)) throw new Error("Cannot find square root");
        return X;
    }
    const Fpk1 = Field(secp256k1_CURVE.p, {
        sqrt: sqrtMod
    }), secp256k1 = createCurve({
        ...secp256k1_CURVE,
        Fp: Fpk1,
        lowS: !0,
        endo: secp256k1_ENDO
    }, sha256$1);
    ed25519.utils.randomPrivateKey;
    ed25519.getPublicKey;
    function isOnCurve(e) {
        try {
            return ed25519.ExtendedPoint.fromHex(e), !0;
        } catch  {
            return !1;
        }
    }
    const sign = (e, t)=>ed25519.sign(e, t.slice(0, 32)), verify = ed25519.verify, toBuffer = (e)=>bufferExports.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? bufferExports.Buffer.from(e.buffer, e.byteOffset, e.byteLength) : bufferExports.Buffer.from(e);
    class Struct {
        constructor(t){
            Object.assign(this, t);
        }
        encode() {
            return bufferExports.Buffer.from(libExports.serialize(SOLANA_SCHEMA, this));
        }
        static decode(t) {
            return libExports.deserialize(SOLANA_SCHEMA, this, t);
        }
        static decodeUnchecked(t) {
            return libExports.deserializeUnchecked(SOLANA_SCHEMA, this, t);
        }
    }
    const SOLANA_SCHEMA = new Map;
    var _PublicKey;
    const MAX_SEED_LENGTH = 32, PUBLIC_KEY_LENGTH = 32;
    function isPublicKeyData(e) {
        return e._bn !== void 0;
    }
    let uniquePublicKeyCounter = 1;
    PublicKey = class extends Struct {
        constructor(t){
            if (super({}), this._bn = void 0, isPublicKeyData(t)) this._bn = t._bn;
            else {
                if (typeof t == "string") {
                    const n = bs58.decode(t);
                    if (n.length != PUBLIC_KEY_LENGTH) throw new Error("Invalid public key input");
                    this._bn = new BN(n);
                } else this._bn = new BN(t);
                if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) throw new Error("Invalid public key input");
            }
        }
        static unique() {
            const t = new PublicKey(uniquePublicKeyCounter);
            return uniquePublicKeyCounter += 1, new PublicKey(t.toBuffer());
        }
        equals(t) {
            return this._bn.eq(t._bn);
        }
        toBase58() {
            return bs58.encode(this.toBytes());
        }
        toJSON() {
            return this.toBase58();
        }
        toBytes() {
            const t = this.toBuffer();
            return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        }
        toBuffer() {
            const t = this._bn.toArrayLike(bufferExports.Buffer);
            if (t.length === PUBLIC_KEY_LENGTH) return t;
            const n = bufferExports.Buffer.alloc(32);
            return t.copy(n, 32 - t.length), n;
        }
        get [Symbol.toStringTag]() {
            return `PublicKey(${this.toString()})`;
        }
        toString() {
            return this.toBase58();
        }
        static async createWithSeed(t, n, r) {
            const s = bufferExports.Buffer.concat([
                t.toBuffer(),
                bufferExports.Buffer.from(n),
                r.toBuffer()
            ]), o = sha256(s);
            return new PublicKey(o);
        }
        static createProgramAddressSync(t, n) {
            let r = bufferExports.Buffer.alloc(0);
            t.forEach(function(o) {
                if (o.length > MAX_SEED_LENGTH) throw new TypeError("Max seed length exceeded");
                r = bufferExports.Buffer.concat([
                    r,
                    toBuffer(o)
                ]);
            }), r = bufferExports.Buffer.concat([
                r,
                n.toBuffer(),
                bufferExports.Buffer.from("ProgramDerivedAddress")
            ]);
            const s = sha256(r);
            if (isOnCurve(s)) throw new Error("Invalid seeds, address must fall off the curve");
            return new PublicKey(s);
        }
        static async createProgramAddress(t, n) {
            return this.createProgramAddressSync(t, n);
        }
        static findProgramAddressSync(t, n) {
            let r = 255, s;
            for(; r != 0;){
                try {
                    const o = t.concat(bufferExports.Buffer.from([
                        r
                    ]));
                    s = this.createProgramAddressSync(o, n);
                } catch (o) {
                    if (o instanceof TypeError) throw o;
                    r--;
                    continue;
                }
                return [
                    s,
                    r
                ];
            }
            throw new Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(t, n) {
            return this.findProgramAddressSync(t, n);
        }
        static isOnCurve(t) {
            const n = new PublicKey(t);
            return isOnCurve(n.toBytes());
        }
    };
    _PublicKey = PublicKey;
    PublicKey.default = new _PublicKey("11111111111111111111111111111111");
    SOLANA_SCHEMA.set(PublicKey, {
        kind: "struct",
        fields: [
            [
                "_bn",
                "u256"
            ]
        ]
    });
    new PublicKey("BPFLoader1111111111111111111111111111111111");
    const PACKET_DATA_SIZE = 1232, VERSION_PREFIX_MASK = 127, SIGNATURE_LENGTH_IN_BYTES = 64;
    class MessageAccountKeys {
        constructor(t, n){
            this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = n;
        }
        keySegments() {
            const t = [
                this.staticAccountKeys
            ];
            return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t;
        }
        get(t) {
            for (const n of this.keySegments()){
                if (t < n.length) return n[t];
                t -= n.length;
            }
        }
        get length() {
            return this.keySegments().flat().length;
        }
        compileInstructions(t) {
            if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
            const r = new Map;
            this.keySegments().flat().forEach((o, l)=>{
                r.set(o.toBase58(), l);
            });
            const s = (o)=>{
                const l = r.get(o.toBase58());
                if (l === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
                return l;
            };
            return t.map((o)=>({
                    programIdIndex: s(o.programId),
                    accountKeyIndexes: o.keys.map((l)=>s(l.pubkey)),
                    data: o.data
                }));
        }
    }
    const publicKey = (e = "publicKey")=>LayoutExports.blob(32, e), signature = (e = "signature")=>LayoutExports.blob(64, e), rustString = (e = "string")=>{
        const t = LayoutExports.struct([
            LayoutExports.u32("length"),
            LayoutExports.u32("lengthPadding"),
            LayoutExports.blob(LayoutExports.offset(LayoutExports.u32(), -8), "chars")
        ], e), n = t.decode.bind(t), r = t.encode.bind(t), s = t;
        return s.decode = (o, l)=>n(o, l).chars.toString(), s.encode = (o, l, _)=>{
            const p = {
                chars: bufferExports.Buffer.from(o, "utf8")
            };
            return r(p, l, _);
        }, s.alloc = (o)=>LayoutExports.u32().span + LayoutExports.u32().span + bufferExports.Buffer.from(o, "utf8").length, s;
    }, authorized = (e = "authorized")=>LayoutExports.struct([
            publicKey("staker"),
            publicKey("withdrawer")
        ], e), lockup = (e = "lockup")=>LayoutExports.struct([
            LayoutExports.ns64("unixTimestamp"),
            LayoutExports.ns64("epoch"),
            publicKey("custodian")
        ], e), voteInit = (e = "voteInit")=>LayoutExports.struct([
            publicKey("nodePubkey"),
            publicKey("authorizedVoter"),
            publicKey("authorizedWithdrawer"),
            LayoutExports.u8("commission")
        ], e), voteAuthorizeWithSeedArgs = (e = "voteAuthorizeWithSeedArgs")=>LayoutExports.struct([
            LayoutExports.u32("voteAuthorizationType"),
            publicKey("currentAuthorityDerivedKeyOwnerPubkey"),
            rustString("currentAuthorityDerivedKeySeed"),
            publicKey("newAuthorized")
        ], e);
    function decodeLength(e) {
        let t = 0, n = 0;
        for(;;){
            let r = e.shift();
            if (t |= (r & 127) << n * 7, n += 1, (r & 128) === 0) break;
        }
        return t;
    }
    function encodeLength(e, t) {
        let n = t;
        for(;;){
            let r = n & 127;
            if (n >>= 7, n == 0) {
                e.push(r);
                break;
            } else r |= 128, e.push(r);
        }
    }
    function assert(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
    }
    class CompiledKeys {
        constructor(t, n){
            this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = n;
        }
        static compile(t, n) {
            const r = new Map, s = (l)=>{
                const _ = l.toBase58();
                let p = r.get(_);
                return p === void 0 && (p = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                }, r.set(_, p)), p;
            }, o = s(n);
            o.isSigner = !0, o.isWritable = !0;
            for (const l of t){
                s(l.programId).isInvoked = !0;
                for (const _ of l.keys){
                    const p = s(_.pubkey);
                    p.isSigner ||= _.isSigner, p.isWritable ||= _.isWritable;
                }
            }
            return new CompiledKeys(n, r);
        }
        getMessageComponents() {
            const t = [
                ...this.keyMetaMap.entries()
            ];
            assert(t.length <= 256, "Max static account keys length exceeded");
            const n = t.filter(([, p])=>p.isSigner && p.isWritable), r = t.filter(([, p])=>p.isSigner && !p.isWritable), s = t.filter(([, p])=>!p.isSigner && p.isWritable), o = t.filter(([, p])=>!p.isSigner && !p.isWritable), l = {
                numRequiredSignatures: n.length + r.length,
                numReadonlySignedAccounts: r.length,
                numReadonlyUnsignedAccounts: o.length
            };
            {
                assert(n.length > 0, "Expected at least one writable signer key");
                const [p] = n[0];
                assert(p === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
            }
            const _ = [
                ...n.map(([p])=>new PublicKey(p)),
                ...r.map(([p])=>new PublicKey(p)),
                ...s.map(([p])=>new PublicKey(p)),
                ...o.map(([p])=>new PublicKey(p))
            ];
            return [
                l,
                _
            ];
        }
        extractTableLookup(t) {
            const [n, r] = this.drainKeysFoundInLookupTable(t.state.addresses, (l)=>!l.isSigner && !l.isInvoked && l.isWritable), [s, o] = this.drainKeysFoundInLookupTable(t.state.addresses, (l)=>!l.isSigner && !l.isInvoked && !l.isWritable);
            if (!(n.length === 0 && s.length === 0)) return [
                {
                    accountKey: t.key,
                    writableIndexes: n,
                    readonlyIndexes: s
                },
                {
                    writable: r,
                    readonly: o
                }
            ];
        }
        drainKeysFoundInLookupTable(t, n) {
            const r = new Array, s = new Array;
            for (const [o, l] of this.keyMetaMap.entries())if (n(l)) {
                const _ = new PublicKey(o), p = t.findIndex((v)=>v.equals(_));
                p >= 0 && (assert(p < 256, "Max lookup table index exceeded"), r.push(p), s.push(_), this.keyMetaMap.delete(o));
            }
            return [
                r,
                s
            ];
        }
    }
    const END_OF_BUFFER_ERROR_MESSAGE = "Reached end of buffer unexpectedly";
    function guardedShift(e) {
        if (e.length === 0) throw new Error(END_OF_BUFFER_ERROR_MESSAGE);
        return e.shift();
    }
    function guardedSplice(e, ...t) {
        const [n] = t;
        if (t.length === 2 ? n + (t[1] ?? 0) > e.length : n >= e.length) throw new Error(END_OF_BUFFER_ERROR_MESSAGE);
        return e.splice(...t);
    }
    class Message {
        constructor(t){
            this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map((n)=>new PublicKey(n)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((n)=>this.indexToProgramIds.set(n.programIdIndex, this.accountKeys[n.programIdIndex]));
        }
        get version() {
            return "legacy";
        }
        get staticAccountKeys() {
            return this.accountKeys;
        }
        get compiledInstructions() {
            return this.instructions.map((t)=>({
                    programIdIndex: t.programIdIndex,
                    accountKeyIndexes: t.accounts,
                    data: bs58.decode(t.data)
                }));
        }
        get addressTableLookups() {
            return [];
        }
        getAccountKeys() {
            return new MessageAccountKeys(this.staticAccountKeys);
        }
        static compile(t) {
            const n = CompiledKeys.compile(t.instructions, t.payerKey), [r, s] = n.getMessageComponents(), l = new MessageAccountKeys(s).compileInstructions(t.instructions).map((_)=>({
                    programIdIndex: _.programIdIndex,
                    accounts: _.accountKeyIndexes,
                    data: bs58.encode(_.data)
                }));
            return new Message({
                header: r,
                accountKeys: s,
                recentBlockhash: t.recentBlockhash,
                instructions: l
            });
        }
        isAccountSigner(t) {
            return t < this.header.numRequiredSignatures;
        }
        isAccountWritable(t) {
            const n = this.header.numRequiredSignatures;
            if (t >= this.header.numRequiredSignatures) {
                const r = t - n, o = this.accountKeys.length - n - this.header.numReadonlyUnsignedAccounts;
                return r < o;
            } else {
                const r = n - this.header.numReadonlySignedAccounts;
                return t < r;
            }
        }
        isProgramId(t) {
            return this.indexToProgramIds.has(t);
        }
        programIds() {
            return [
                ...this.indexToProgramIds.values()
            ];
        }
        nonProgramIds() {
            return this.accountKeys.filter((t, n)=>!this.isProgramId(n));
        }
        serialize() {
            const t = this.accountKeys.length;
            let n = [];
            encodeLength(n, t);
            const r = this.instructions.map((T)=>{
                const { accounts: A, programIdIndex: L } = T, N = Array.from(bs58.decode(T.data));
                let R = [];
                encodeLength(R, A.length);
                let U = [];
                return encodeLength(U, N.length), {
                    programIdIndex: L,
                    keyIndicesCount: bufferExports.Buffer.from(R),
                    keyIndices: A,
                    dataLength: bufferExports.Buffer.from(U),
                    data: N
                };
            });
            let s = [];
            encodeLength(s, r.length);
            let o = bufferExports.Buffer.alloc(PACKET_DATA_SIZE);
            bufferExports.Buffer.from(s).copy(o);
            let l = s.length;
            r.forEach((T)=>{
                const L = LayoutExports.struct([
                    LayoutExports.u8("programIdIndex"),
                    LayoutExports.blob(T.keyIndicesCount.length, "keyIndicesCount"),
                    LayoutExports.seq(LayoutExports.u8("keyIndex"), T.keyIndices.length, "keyIndices"),
                    LayoutExports.blob(T.dataLength.length, "dataLength"),
                    LayoutExports.seq(LayoutExports.u8("userdatum"), T.data.length, "data")
                ]).encode(T, o, l);
                l += L;
            }), o = o.slice(0, l);
            const _ = LayoutExports.struct([
                LayoutExports.blob(1, "numRequiredSignatures"),
                LayoutExports.blob(1, "numReadonlySignedAccounts"),
                LayoutExports.blob(1, "numReadonlyUnsignedAccounts"),
                LayoutExports.blob(n.length, "keyCount"),
                LayoutExports.seq(publicKey("key"), t, "keys"),
                publicKey("recentBlockhash")
            ]), p = {
                numRequiredSignatures: bufferExports.Buffer.from([
                    this.header.numRequiredSignatures
                ]),
                numReadonlySignedAccounts: bufferExports.Buffer.from([
                    this.header.numReadonlySignedAccounts
                ]),
                numReadonlyUnsignedAccounts: bufferExports.Buffer.from([
                    this.header.numReadonlyUnsignedAccounts
                ]),
                keyCount: bufferExports.Buffer.from(n),
                keys: this.accountKeys.map((T)=>toBuffer(T.toBytes())),
                recentBlockhash: bs58.decode(this.recentBlockhash)
            };
            let v = bufferExports.Buffer.alloc(2048);
            const B = _.encode(p, v);
            return o.copy(v, B), v.slice(0, B + o.length);
        }
        static from(t) {
            let n = [
                ...t
            ];
            const r = guardedShift(n);
            if (r !== (r & VERSION_PREFIX_MASK)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
            const s = guardedShift(n), o = guardedShift(n), l = decodeLength(n);
            let _ = [];
            for(let A = 0; A < l; A++){
                const L = guardedSplice(n, 0, PUBLIC_KEY_LENGTH);
                _.push(new PublicKey(bufferExports.Buffer.from(L)));
            }
            const p = guardedSplice(n, 0, PUBLIC_KEY_LENGTH), v = decodeLength(n);
            let B = [];
            for(let A = 0; A < v; A++){
                const L = guardedShift(n), N = decodeLength(n), R = guardedSplice(n, 0, N), U = decodeLength(n), z = guardedSplice(n, 0, U), G = bs58.encode(bufferExports.Buffer.from(z));
                B.push({
                    programIdIndex: L,
                    accounts: R,
                    data: G
                });
            }
            const T = {
                header: {
                    numRequiredSignatures: r,
                    numReadonlySignedAccounts: s,
                    numReadonlyUnsignedAccounts: o
                },
                recentBlockhash: bs58.encode(bufferExports.Buffer.from(p)),
                accountKeys: _,
                instructions: B
            };
            return new Message(T);
        }
    }
    class MessageV0 {
        constructor(t){
            this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups;
        }
        get version() {
            return 0;
        }
        get numAccountKeysFromLookups() {
            let t = 0;
            for (const n of this.addressTableLookups)t += n.readonlyIndexes.length + n.writableIndexes.length;
            return t;
        }
        getAccountKeys(t) {
            let n;
            if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
                if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                n = t.accountKeysFromLookups;
            } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts) n = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
            else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
            return new MessageAccountKeys(this.staticAccountKeys, n);
        }
        isAccountSigner(t) {
            return t < this.header.numRequiredSignatures;
        }
        isAccountWritable(t) {
            const n = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
            if (t >= r) {
                const s = t - r, o = this.addressTableLookups.reduce((l, _)=>l + _.writableIndexes.length, 0);
                return s < o;
            } else if (t >= this.header.numRequiredSignatures) {
                const s = t - n, l = r - n - this.header.numReadonlyUnsignedAccounts;
                return s < l;
            } else {
                const s = n - this.header.numReadonlySignedAccounts;
                return t < s;
            }
        }
        resolveAddressTableLookups(t) {
            const n = {
                writable: [],
                readonly: []
            };
            for (const r of this.addressTableLookups){
                const s = t.find((o)=>o.key.equals(r.accountKey));
                if (!s) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
                for (const o of r.writableIndexes)if (o < s.state.addresses.length) n.writable.push(s.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
                for (const o of r.readonlyIndexes)if (o < s.state.addresses.length) n.readonly.push(s.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
            }
            return n;
        }
        static compile(t) {
            const n = CompiledKeys.compile(t.instructions, t.payerKey), r = new Array, s = {
                writable: new Array,
                readonly: new Array
            }, o = t.addressLookupTableAccounts || [];
            for (const B of o){
                const T = n.extractTableLookup(B);
                if (T !== void 0) {
                    const [A, { writable: L, readonly: N }] = T;
                    r.push(A), s.writable.push(...L), s.readonly.push(...N);
                }
            }
            const [l, _] = n.getMessageComponents(), v = new MessageAccountKeys(_, s).compileInstructions(t.instructions);
            return new MessageV0({
                header: l,
                staticAccountKeys: _,
                recentBlockhash: t.recentBlockhash,
                compiledInstructions: v,
                addressTableLookups: r
            });
        }
        serialize() {
            const t = Array();
            encodeLength(t, this.staticAccountKeys.length);
            const n = this.serializeInstructions(), r = Array();
            encodeLength(r, this.compiledInstructions.length);
            const s = this.serializeAddressTableLookups(), o = Array();
            encodeLength(o, this.addressTableLookups.length);
            const l = LayoutExports.struct([
                LayoutExports.u8("prefix"),
                LayoutExports.struct([
                    LayoutExports.u8("numRequiredSignatures"),
                    LayoutExports.u8("numReadonlySignedAccounts"),
                    LayoutExports.u8("numReadonlyUnsignedAccounts")
                ], "header"),
                LayoutExports.blob(t.length, "staticAccountKeysLength"),
                LayoutExports.seq(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"),
                publicKey("recentBlockhash"),
                LayoutExports.blob(r.length, "instructionsLength"),
                LayoutExports.blob(n.length, "serializedInstructions"),
                LayoutExports.blob(o.length, "addressTableLookupsLength"),
                LayoutExports.blob(s.length, "serializedAddressTableLookups")
            ]), _ = new Uint8Array(PACKET_DATA_SIZE), v = l.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(t),
                staticAccountKeys: this.staticAccountKeys.map((B)=>B.toBytes()),
                recentBlockhash: bs58.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: n,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: s
            }, _);
            return _.slice(0, v);
        }
        serializeInstructions() {
            let t = 0;
            const n = new Uint8Array(PACKET_DATA_SIZE);
            for (const r of this.compiledInstructions){
                const s = Array();
                encodeLength(s, r.accountKeyIndexes.length);
                const o = Array();
                encodeLength(o, r.data.length);
                const l = LayoutExports.struct([
                    LayoutExports.u8("programIdIndex"),
                    LayoutExports.blob(s.length, "encodedAccountKeyIndexesLength"),
                    LayoutExports.seq(LayoutExports.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
                    LayoutExports.blob(o.length, "encodedDataLength"),
                    LayoutExports.blob(r.data.length, "data")
                ]);
                t += l.encode({
                    programIdIndex: r.programIdIndex,
                    encodedAccountKeyIndexesLength: new Uint8Array(s),
                    accountKeyIndexes: r.accountKeyIndexes,
                    encodedDataLength: new Uint8Array(o),
                    data: r.data
                }, n, t);
            }
            return n.slice(0, t);
        }
        serializeAddressTableLookups() {
            let t = 0;
            const n = new Uint8Array(PACKET_DATA_SIZE);
            for (const r of this.addressTableLookups){
                const s = Array();
                encodeLength(s, r.writableIndexes.length);
                const o = Array();
                encodeLength(o, r.readonlyIndexes.length);
                const l = LayoutExports.struct([
                    publicKey("accountKey"),
                    LayoutExports.blob(s.length, "encodedWritableIndexesLength"),
                    LayoutExports.seq(LayoutExports.u8(), r.writableIndexes.length, "writableIndexes"),
                    LayoutExports.blob(o.length, "encodedReadonlyIndexesLength"),
                    LayoutExports.seq(LayoutExports.u8(), r.readonlyIndexes.length, "readonlyIndexes")
                ]);
                t += l.encode({
                    accountKey: r.accountKey.toBytes(),
                    encodedWritableIndexesLength: new Uint8Array(s),
                    writableIndexes: r.writableIndexes,
                    encodedReadonlyIndexesLength: new Uint8Array(o),
                    readonlyIndexes: r.readonlyIndexes
                }, n, t);
            }
            return n.slice(0, t);
        }
        static deserialize(t) {
            let n = [
                ...t
            ];
            const r = guardedShift(n), s = r & VERSION_PREFIX_MASK;
            assert(r !== s, "Expected versioned message but received legacy message");
            const o = s;
            assert(o === 0, `Expected versioned message with version 0 but found version ${o}`);
            const l = {
                numRequiredSignatures: guardedShift(n),
                numReadonlySignedAccounts: guardedShift(n),
                numReadonlyUnsignedAccounts: guardedShift(n)
            }, _ = [], p = decodeLength(n);
            for(let N = 0; N < p; N++)_.push(new PublicKey(guardedSplice(n, 0, PUBLIC_KEY_LENGTH)));
            const v = bs58.encode(guardedSplice(n, 0, PUBLIC_KEY_LENGTH)), B = decodeLength(n), T = [];
            for(let N = 0; N < B; N++){
                const R = guardedShift(n), U = decodeLength(n), z = guardedSplice(n, 0, U), G = decodeLength(n), H = new Uint8Array(guardedSplice(n, 0, G));
                T.push({
                    programIdIndex: R,
                    accountKeyIndexes: z,
                    data: H
                });
            }
            const A = decodeLength(n), L = [];
            for(let N = 0; N < A; N++){
                const R = new PublicKey(guardedSplice(n, 0, PUBLIC_KEY_LENGTH)), U = decodeLength(n), z = guardedSplice(n, 0, U), G = decodeLength(n), H = guardedSplice(n, 0, G);
                L.push({
                    accountKey: R,
                    writableIndexes: z,
                    readonlyIndexes: H
                });
            }
            return new MessageV0({
                header: l,
                staticAccountKeys: _,
                recentBlockhash: v,
                compiledInstructions: T,
                addressTableLookups: L
            });
        }
    }
    const VersionedMessage = {
        deserializeMessageVersion (e) {
            const t = e[0], n = t & VERSION_PREFIX_MASK;
            return n === t ? "legacy" : n;
        },
        deserialize: (e)=>{
            const t = VersionedMessage.deserializeMessageVersion(e);
            if (t === "legacy") return Message.from(e);
            if (t === 0) return MessageV0.deserialize(e);
            throw new Error(`Transaction message version ${t} deserialization is not supported`);
        }
    }, DEFAULT_SIGNATURE = bufferExports.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
    class TransactionInstruction {
        constructor(t){
            this.keys = void 0, this.programId = void 0, this.data = bufferExports.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
        }
        toJSON() {
            return {
                keys: this.keys.map(({ pubkey: t, isSigner: n, isWritable: r })=>({
                        pubkey: t.toJSON(),
                        isSigner: n,
                        isWritable: r
                    })),
                programId: this.programId.toJSON(),
                data: [
                    ...this.data
                ]
            };
        }
    }
    Transaction = class {
        get signature() {
            return this.signatures.length > 0 ? this.signatures[0].signature : null;
        }
        constructor(t){
            if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t) if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
                const { minContextSlot: n, nonceInfo: r } = t;
                this.minNonceContextSlot = n, this.nonceInfo = r;
            } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
                const { blockhash: n, lastValidBlockHeight: r } = t;
                this.recentBlockhash = n, this.lastValidBlockHeight = r;
            } else {
                const { recentBlockhash: n, nonceInfo: r } = t;
                r && (this.nonceInfo = r), this.recentBlockhash = n;
            }
        }
        toJSON() {
            return {
                recentBlockhash: this.recentBlockhash || null,
                feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                nonceInfo: this.nonceInfo ? {
                    nonce: this.nonceInfo.nonce,
                    nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                } : null,
                instructions: this.instructions.map((t)=>t.toJSON()),
                signers: this.signatures.map(({ publicKey: t })=>t.toJSON())
            };
        }
        add(...t) {
            if (t.length === 0) throw new Error("No instructions");
            return t.forEach((n)=>{
                "instructions" in n ? this.instructions = this.instructions.concat(n.instructions) : "data" in n && "programId" in n && "keys" in n ? this.instructions.push(n) : this.instructions.push(new TransactionInstruction(n));
            }), this;
        }
        compileMessage() {
            if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
            let t, n;
            if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? n = [
                this.nonceInfo.nonceInstruction,
                ...this.instructions
            ] : n = this.instructions) : (t = this.recentBlockhash, n = this.instructions), !t) throw new Error("Transaction recentBlockhash required");
            n.length < 1 && console.warn("No instructions provided");
            let r;
            if (this.feePayer) r = this.feePayer;
            else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
            else throw new Error("Transaction fee payer required");
            for(let R = 0; R < n.length; R++)if (n[R].programId === void 0) throw new Error(`Transaction instruction index ${R} has undefined program id`);
            const s = [], o = [];
            n.forEach((R)=>{
                R.keys.forEach((z)=>{
                    o.push({
                        ...z
                    });
                });
                const U = R.programId.toString();
                s.includes(U) || s.push(U);
            }), s.forEach((R)=>{
                o.push({
                    pubkey: new PublicKey(R),
                    isSigner: !1,
                    isWritable: !1
                });
            });
            const l = [];
            o.forEach((R)=>{
                const U = R.pubkey.toString(), z = l.findIndex((G)=>G.pubkey.toString() === U);
                z > -1 ? (l[z].isWritable = l[z].isWritable || R.isWritable, l[z].isSigner = l[z].isSigner || R.isSigner) : l.push(R);
            }), l.sort(function(R, U) {
                if (R.isSigner !== U.isSigner) return R.isSigner ? -1 : 1;
                if (R.isWritable !== U.isWritable) return R.isWritable ? -1 : 1;
                const z = {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower"
                };
                return R.pubkey.toBase58().localeCompare(U.pubkey.toBase58(), "en", z);
            });
            const _ = l.findIndex((R)=>R.pubkey.equals(r));
            if (_ > -1) {
                const [R] = l.splice(_, 1);
                R.isSigner = !0, R.isWritable = !0, l.unshift(R);
            } else l.unshift({
                pubkey: r,
                isSigner: !0,
                isWritable: !0
            });
            for (const R of this.signatures){
                const U = l.findIndex((z)=>z.pubkey.equals(R.publicKey));
                if (U > -1) l[U].isSigner || (l[U].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                else throw new Error(`unknown signer: ${R.publicKey.toString()}`);
            }
            let p = 0, v = 0, B = 0;
            const T = [], A = [];
            l.forEach(({ pubkey: R, isSigner: U, isWritable: z })=>{
                U ? (T.push(R.toString()), p += 1, z || (v += 1)) : (A.push(R.toString()), z || (B += 1));
            });
            const L = T.concat(A), N = n.map((R)=>{
                const { data: U, programId: z } = R;
                return {
                    programIdIndex: L.indexOf(z.toString()),
                    accounts: R.keys.map((G)=>L.indexOf(G.pubkey.toString())),
                    data: bs58.encode(U)
                };
            });
            return N.forEach((R)=>{
                assert(R.programIdIndex >= 0), R.accounts.forEach((U)=>assert(U >= 0));
            }), new Message({
                header: {
                    numRequiredSignatures: p,
                    numReadonlySignedAccounts: v,
                    numReadonlyUnsignedAccounts: B
                },
                accountKeys: L,
                recentBlockhash: t,
                instructions: N
            });
        }
        _compile() {
            const t = this.compileMessage(), n = t.accountKeys.slice(0, t.header.numRequiredSignatures);
            return this.signatures.length === n.length && this.signatures.every((s, o)=>n[o].equals(s.publicKey)) || (this.signatures = n.map((r)=>({
                    signature: null,
                    publicKey: r
                }))), t;
        }
        serializeMessage() {
            return this._compile().serialize();
        }
        async getEstimatedFee(t) {
            return (await t.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners(...t) {
            if (t.length === 0) throw new Error("No signers");
            const n = new Set;
            this.signatures = t.filter((r)=>{
                const s = r.toString();
                return n.has(s) ? !1 : (n.add(s), !0);
            }).map((r)=>({
                    signature: null,
                    publicKey: r
                }));
        }
        sign(...t) {
            if (t.length === 0) throw new Error("No signers");
            const n = new Set, r = [];
            for (const o of t){
                const l = o.publicKey.toString();
                n.has(l) || (n.add(l), r.push(o));
            }
            this.signatures = r.map((o)=>({
                    signature: null,
                    publicKey: o.publicKey
                }));
            const s = this._compile();
            this._partialSign(s, ...r);
        }
        partialSign(...t) {
            if (t.length === 0) throw new Error("No signers");
            const n = new Set, r = [];
            for (const o of t){
                const l = o.publicKey.toString();
                n.has(l) || (n.add(l), r.push(o));
            }
            const s = this._compile();
            this._partialSign(s, ...r);
        }
        _partialSign(t, ...n) {
            const r = t.serialize();
            n.forEach((s)=>{
                const o = sign(r, s.secretKey);
                this._addSignature(s.publicKey, toBuffer(o));
            });
        }
        addSignature(t, n) {
            this._compile(), this._addSignature(t, n);
        }
        _addSignature(t, n) {
            assert(n.length === 64);
            const r = this.signatures.findIndex((s)=>t.equals(s.publicKey));
            if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
            this.signatures[r].signature = bufferExports.Buffer.from(n);
        }
        verifySignatures(t = !0) {
            return !this._getMessageSignednessErrors(this.serializeMessage(), t);
        }
        _getMessageSignednessErrors(t, n) {
            const r = {};
            for (const { signature: s, publicKey: o } of this.signatures)s === null ? n && (r.missing ||= []).push(o) : verify(s, t, o.toBytes()) || (r.invalid ||= []).push(o);
            return r.invalid || r.missing ? r : void 0;
        }
        serialize(t) {
            const { requireAllSignatures: n, verifySignatures: r } = Object.assign({
                requireAllSignatures: !0,
                verifySignatures: !0
            }, t), s = this.serializeMessage();
            if (r) {
                const o = this._getMessageSignednessErrors(s, n);
                if (o) {
                    let l = "Signature verification failed.";
                    throw o.invalid && (l += `
Invalid signature for public key${o.invalid.length === 1 ? "" : "(s)"} [\`${o.invalid.map((_)=>_.toBase58()).join("`, `")}\`].`), o.missing && (l += `
Missing signature for public key${o.missing.length === 1 ? "" : "(s)"} [\`${o.missing.map((_)=>_.toBase58()).join("`, `")}\`].`), new Error(l);
                }
            }
            return this._serialize(s);
        }
        _serialize(t) {
            const { signatures: n } = this, r = [];
            encodeLength(r, n.length);
            const s = r.length + n.length * 64 + t.length, o = bufferExports.Buffer.alloc(s);
            return assert(n.length < 256), bufferExports.Buffer.from(r).copy(o, 0), n.forEach(({ signature: l }, _)=>{
                l !== null && (assert(l.length === 64, "signature has invalid length"), bufferExports.Buffer.from(l).copy(o, r.length + _ * 64));
            }), t.copy(o, r.length + n.length * 64), assert(o.length <= PACKET_DATA_SIZE, `Transaction too large: ${o.length} > ${PACKET_DATA_SIZE}`), o;
        }
        get keys() {
            return assert(this.instructions.length === 1), this.instructions[0].keys.map((t)=>t.pubkey);
        }
        get programId() {
            return assert(this.instructions.length === 1), this.instructions[0].programId;
        }
        get data() {
            return assert(this.instructions.length === 1), this.instructions[0].data;
        }
        static from(t) {
            let n = [
                ...t
            ];
            const r = decodeLength(n);
            let s = [];
            for(let o = 0; o < r; o++){
                const l = guardedSplice(n, 0, SIGNATURE_LENGTH_IN_BYTES);
                s.push(bs58.encode(bufferExports.Buffer.from(l)));
            }
            return Transaction.populate(Message.from(n), s);
        }
        static populate(t, n = []) {
            const r = new Transaction;
            return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), n.forEach((s, o)=>{
                const l = {
                    signature: s == bs58.encode(DEFAULT_SIGNATURE) ? null : bs58.decode(s),
                    publicKey: t.accountKeys[o]
                };
                r.signatures.push(l);
            }), t.instructions.forEach((s)=>{
                const o = s.accounts.map((l)=>{
                    const _ = t.accountKeys[l];
                    return {
                        pubkey: _,
                        isSigner: r.signatures.some((p)=>p.publicKey.toString() === _.toString()) || t.isAccountSigner(l),
                        isWritable: t.isAccountWritable(l)
                    };
                });
                r.instructions.push(new TransactionInstruction({
                    keys: o,
                    programId: t.accountKeys[s.programIdIndex],
                    data: bs58.decode(s.data)
                }));
            }), r._message = t, r._json = r.toJSON(), r;
        }
    };
    VersionedTransaction = class {
        get version() {
            return this.message.version;
        }
        constructor(t, n){
            if (this.signatures = void 0, this.message = void 0, n !== void 0) assert(n.length === t.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = n;
            else {
                const r = [];
                for(let s = 0; s < t.header.numRequiredSignatures; s++)r.push(new Uint8Array(SIGNATURE_LENGTH_IN_BYTES));
                this.signatures = r;
            }
            this.message = t;
        }
        serialize() {
            const t = this.message.serialize(), n = Array();
            encodeLength(n, this.signatures.length);
            const r = LayoutExports.struct([
                LayoutExports.blob(n.length, "encodedSignaturesLength"),
                LayoutExports.seq(signature(), this.signatures.length, "signatures"),
                LayoutExports.blob(t.length, "serializedMessage")
            ]), s = new Uint8Array(2048), o = r.encode({
                encodedSignaturesLength: new Uint8Array(n),
                signatures: this.signatures,
                serializedMessage: t
            }, s);
            return s.slice(0, o);
        }
        static deserialize(t) {
            let n = [
                ...t
            ];
            const r = [], s = decodeLength(n);
            for(let l = 0; l < s; l++)r.push(new Uint8Array(guardedSplice(n, 0, SIGNATURE_LENGTH_IN_BYTES)));
            const o = VersionedMessage.deserialize(new Uint8Array(n));
            return new VersionedTransaction(o, r);
        }
        sign(t) {
            const n = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
            for (const s of t){
                const o = r.findIndex((l)=>l.equals(s.publicKey));
                assert(o >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`), this.signatures[o] = sign(n, s.secretKey);
            }
        }
        addSignature(t, n) {
            assert(n.byteLength === 64, "Signature must be 64 bytes long");
            const s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((o)=>o.equals(t));
            assert(s >= 0, `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`), this.signatures[s] = n;
        }
    };
    new PublicKey("SysvarC1ock11111111111111111111111111111111");
    new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
    new PublicKey("Sysvar1nstructions1111111111111111111111111");
    new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
    new PublicKey("SysvarRent111111111111111111111111111111111");
    new PublicKey("SysvarRewards111111111111111111111111111111");
    new PublicKey("SysvarS1otHashes111111111111111111111111111");
    new PublicKey("SysvarS1otHistory11111111111111111111111111");
    new PublicKey("SysvarStakeHistory1111111111111111111111111");
    const FeeCalculatorLayout = LayoutExports.nu64("lamportsPerSignature"), NonceAccountLayout = LayoutExports.struct([
        LayoutExports.u32("version"),
        LayoutExports.u32("state"),
        publicKey("authorizedPubkey"),
        publicKey("nonce"),
        LayoutExports.struct([
            FeeCalculatorLayout
        ], "feeCalculator")
    ]);
    NonceAccountLayout.span;
    function u64(e) {
        const t = LayoutExports.blob(8, e), n = t.decode.bind(t), r = t.encode.bind(t), s = t, o = getU64Codec();
        return s.decode = (l, _)=>{
            const p = n(l, _);
            return o.decode(p);
        }, s.encode = (l, _, p)=>{
            const v = o.encode(l);
            return r(v, _, p);
        }, s;
    }
    Object.freeze({
        Create: {
            index: 0,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("lamports"),
                LayoutExports.ns64("space"),
                publicKey("programId")
            ])
        },
        Assign: {
            index: 1,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("programId")
            ])
        },
        Transfer: {
            index: 2,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                u64("lamports")
            ])
        },
        CreateWithSeed: {
            index: 3,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("base"),
                rustString("seed"),
                LayoutExports.ns64("lamports"),
                LayoutExports.ns64("space"),
                publicKey("programId")
            ])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("lamports")
            ])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("authorized")
            ])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("authorized")
            ])
        },
        Allocate: {
            index: 8,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("space")
            ])
        },
        AllocateWithSeed: {
            index: 9,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("base"),
                rustString("seed"),
                LayoutExports.ns64("space"),
                publicKey("programId")
            ])
        },
        AssignWithSeed: {
            index: 10,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("base"),
                rustString("seed"),
                publicKey("programId")
            ])
        },
        TransferWithSeed: {
            index: 11,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                u64("lamports"),
                rustString("seed"),
                publicKey("programId")
            ])
        },
        UpgradeNonceAccount: {
            index: 12,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        }
    });
    new PublicKey("11111111111111111111111111111111");
    new PublicKey("BPFLoader2111111111111111111111111111111111");
    LayoutExports.struct([
        LayoutExports.u32("typeIndex"),
        u64("deactivationSlot"),
        LayoutExports.nu64("lastExtendedSlot"),
        LayoutExports.u8("lastExtendedStartIndex"),
        LayoutExports.u8(),
        LayoutExports.seq(publicKey(), LayoutExports.offset(LayoutExports.u8(), -1), "authority")
    ]);
    const PublicKeyFromString = coerce(instance(PublicKey), string(), (e)=>new PublicKey(e)), RawAccountDataResult = tuple([
        string(),
        literal("base64")
    ]), BufferFromRawAccountData = coerce(instance(bufferExports.Buffer), RawAccountDataResult, (e)=>bufferExports.Buffer.from(e[0], "base64"));
    function createRpcResult(e) {
        return union([
            type({
                jsonrpc: literal("2.0"),
                id: string(),
                result: e
            }),
            type({
                jsonrpc: literal("2.0"),
                id: string(),
                error: type({
                    code: unknown(),
                    message: string(),
                    data: optional(any())
                })
            })
        ]);
    }
    const UnknownRpcResult = createRpcResult(unknown());
    function jsonRpcResult(e) {
        return coerce(createRpcResult(e), UnknownRpcResult, (t)=>"error" in t ? t : {
                ...t,
                result: create(t.result, e)
            });
    }
    function jsonRpcResultAndContext(e) {
        return jsonRpcResult(type({
            context: type({
                slot: number()
            }),
            value: e
        }));
    }
    function notificationResultAndContext(e) {
        return type({
            context: type({
                slot: number()
            }),
            value: e
        });
    }
    const GetInflationGovernorResult = type({
        foundation: number(),
        foundationTerm: number(),
        initial: number(),
        taper: number(),
        terminal: number()
    });
    jsonRpcResult(array(nullable(type({
        epoch: number(),
        effectiveSlot: number(),
        amount: number(),
        postBalance: number(),
        commission: optional(nullable(number()))
    }))));
    const GetRecentPrioritizationFeesResult = array(type({
        slot: number(),
        prioritizationFee: number()
    })), GetInflationRateResult = type({
        total: number(),
        validator: number(),
        foundation: number(),
        epoch: number()
    }), GetEpochInfoResult = type({
        epoch: number(),
        slotIndex: number(),
        slotsInEpoch: number(),
        absoluteSlot: number(),
        blockHeight: optional(number()),
        transactionCount: optional(number())
    }), GetEpochScheduleResult = type({
        slotsPerEpoch: number(),
        leaderScheduleSlotOffset: number(),
        warmup: boolean(),
        firstNormalEpoch: number(),
        firstNormalSlot: number()
    }), GetLeaderScheduleResult = record(string(), array(number())), TransactionErrorResult = nullable(union([
        type({}),
        string()
    ])), SignatureStatusResult = type({
        err: TransactionErrorResult
    }), SignatureReceivedResult = literal("receivedSignature");
    type({
        "solana-core": string(),
        "feature-set": optional(number())
    });
    const ParsedInstructionStruct = type({
        program: string(),
        programId: PublicKeyFromString,
        parsed: unknown()
    }), PartiallyDecodedInstructionStruct = type({
        programId: PublicKeyFromString,
        accounts: array(PublicKeyFromString),
        data: string()
    });
    jsonRpcResultAndContext(type({
        err: nullable(union([
            type({}),
            string()
        ])),
        logs: nullable(array(string())),
        accounts: optional(nullable(array(nullable(type({
            executable: boolean(),
            owner: string(),
            lamports: number(),
            data: array(string()),
            rentEpoch: optional(number())
        }))))),
        unitsConsumed: optional(number()),
        returnData: optional(nullable(type({
            programId: string(),
            data: tuple([
                string(),
                literal("base64")
            ])
        }))),
        innerInstructions: optional(nullable(array(type({
            index: number(),
            instructions: array(union([
                ParsedInstructionStruct,
                PartiallyDecodedInstructionStruct
            ]))
        }))))
    }));
    jsonRpcResultAndContext(type({
        byIdentity: record(string(), array(number())),
        range: type({
            firstSlot: number(),
            lastSlot: number()
        })
    }));
    jsonRpcResult(GetInflationGovernorResult);
    jsonRpcResult(GetInflationRateResult);
    jsonRpcResult(GetRecentPrioritizationFeesResult);
    jsonRpcResult(GetEpochInfoResult);
    jsonRpcResult(GetEpochScheduleResult);
    jsonRpcResult(GetLeaderScheduleResult);
    jsonRpcResult(number());
    jsonRpcResultAndContext(type({
        total: number(),
        circulating: number(),
        nonCirculating: number(),
        nonCirculatingAccounts: array(PublicKeyFromString)
    }));
    const TokenAmountResult = type({
        amount: string(),
        uiAmount: nullable(number()),
        decimals: number(),
        uiAmountString: optional(string())
    });
    jsonRpcResultAndContext(array(type({
        address: PublicKeyFromString,
        amount: string(),
        uiAmount: nullable(number()),
        decimals: number(),
        uiAmountString: optional(string())
    })));
    jsonRpcResultAndContext(array(type({
        pubkey: PublicKeyFromString,
        account: type({
            executable: boolean(),
            owner: PublicKeyFromString,
            lamports: number(),
            data: BufferFromRawAccountData,
            rentEpoch: number()
        })
    })));
    const ParsedAccountDataResult = type({
        program: string(),
        parsed: unknown(),
        space: number()
    });
    jsonRpcResultAndContext(array(type({
        pubkey: PublicKeyFromString,
        account: type({
            executable: boolean(),
            owner: PublicKeyFromString,
            lamports: number(),
            data: ParsedAccountDataResult,
            rentEpoch: number()
        })
    })));
    jsonRpcResultAndContext(array(type({
        lamports: number(),
        address: PublicKeyFromString
    })));
    const AccountInfoResult = type({
        executable: boolean(),
        owner: PublicKeyFromString,
        lamports: number(),
        data: BufferFromRawAccountData,
        rentEpoch: number()
    });
    type({
        pubkey: PublicKeyFromString,
        account: AccountInfoResult
    });
    const ParsedOrRawAccountData = coerce(union([
        instance(bufferExports.Buffer),
        ParsedAccountDataResult
    ]), union([
        RawAccountDataResult,
        ParsedAccountDataResult
    ]), (e)=>Array.isArray(e) ? create(e, BufferFromRawAccountData) : e), ParsedAccountInfoResult = type({
        executable: boolean(),
        owner: PublicKeyFromString,
        lamports: number(),
        data: ParsedOrRawAccountData,
        rentEpoch: number()
    });
    type({
        pubkey: PublicKeyFromString,
        account: ParsedAccountInfoResult
    });
    type({
        state: union([
            literal("active"),
            literal("inactive"),
            literal("activating"),
            literal("deactivating")
        ]),
        active: number(),
        inactive: number()
    });
    jsonRpcResult(array(type({
        signature: string(),
        slot: number(),
        err: TransactionErrorResult,
        memo: nullable(string()),
        blockTime: optional(nullable(number()))
    })));
    jsonRpcResult(array(type({
        signature: string(),
        slot: number(),
        err: TransactionErrorResult,
        memo: nullable(string()),
        blockTime: optional(nullable(number()))
    })));
    type({
        subscription: number(),
        result: notificationResultAndContext(AccountInfoResult)
    });
    const ProgramAccountInfoResult = type({
        pubkey: PublicKeyFromString,
        account: AccountInfoResult
    });
    type({
        subscription: number(),
        result: notificationResultAndContext(ProgramAccountInfoResult)
    });
    const SlotInfoResult = type({
        parent: number(),
        slot: number(),
        root: number()
    });
    type({
        subscription: number(),
        result: SlotInfoResult
    });
    const SlotUpdateResult = union([
        type({
            type: union([
                literal("firstShredReceived"),
                literal("completed"),
                literal("optimisticConfirmation"),
                literal("root")
            ]),
            slot: number(),
            timestamp: number()
        }),
        type({
            type: literal("createdBank"),
            parent: number(),
            slot: number(),
            timestamp: number()
        }),
        type({
            type: literal("frozen"),
            slot: number(),
            timestamp: number(),
            stats: type({
                numTransactionEntries: number(),
                numSuccessfulTransactions: number(),
                numFailedTransactions: number(),
                maxTransactionsPerEntry: number()
            })
        }),
        type({
            type: literal("dead"),
            slot: number(),
            timestamp: number(),
            err: string()
        })
    ]);
    type({
        subscription: number(),
        result: SlotUpdateResult
    });
    type({
        subscription: number(),
        result: notificationResultAndContext(union([
            SignatureStatusResult,
            SignatureReceivedResult
        ]))
    });
    type({
        subscription: number(),
        result: number()
    });
    type({
        pubkey: string(),
        gossip: nullable(string()),
        tpu: nullable(string()),
        rpc: nullable(string()),
        version: nullable(string())
    });
    const VoteAccountInfoResult = type({
        votePubkey: string(),
        nodePubkey: string(),
        activatedStake: number(),
        epochVoteAccount: boolean(),
        epochCredits: array(tuple([
            number(),
            number(),
            number()
        ])),
        commission: number(),
        lastVote: number(),
        rootSlot: nullable(number())
    });
    jsonRpcResult(type({
        current: array(VoteAccountInfoResult),
        delinquent: array(VoteAccountInfoResult)
    }));
    const ConfirmationStatus = union([
        literal("processed"),
        literal("confirmed"),
        literal("finalized")
    ]), SignatureStatusResponse = type({
        slot: number(),
        confirmations: nullable(number()),
        err: TransactionErrorResult,
        confirmationStatus: optional(ConfirmationStatus)
    });
    jsonRpcResultAndContext(array(nullable(SignatureStatusResponse)));
    jsonRpcResult(number());
    const AddressTableLookupStruct = type({
        accountKey: PublicKeyFromString,
        writableIndexes: array(number()),
        readonlyIndexes: array(number())
    }), ConfirmedTransactionResult = type({
        signatures: array(string()),
        message: type({
            accountKeys: array(string()),
            header: type({
                numRequiredSignatures: number(),
                numReadonlySignedAccounts: number(),
                numReadonlyUnsignedAccounts: number()
            }),
            instructions: array(type({
                accounts: array(number()),
                data: string(),
                programIdIndex: number()
            })),
            recentBlockhash: string(),
            addressTableLookups: optional(array(AddressTableLookupStruct))
        })
    }), AnnotatedAccountKey = type({
        pubkey: PublicKeyFromString,
        signer: boolean(),
        writable: boolean(),
        source: optional(union([
            literal("transaction"),
            literal("lookupTable")
        ]))
    }), ConfirmedTransactionAccountsModeResult = type({
        accountKeys: array(AnnotatedAccountKey),
        signatures: array(string())
    }), ParsedInstructionResult = type({
        parsed: unknown(),
        program: string(),
        programId: PublicKeyFromString
    }), RawInstructionResult = type({
        accounts: array(PublicKeyFromString),
        data: string(),
        programId: PublicKeyFromString
    }), InstructionResult = union([
        RawInstructionResult,
        ParsedInstructionResult
    ]), UnknownInstructionResult = union([
        type({
            parsed: unknown(),
            program: string(),
            programId: string()
        }),
        type({
            accounts: array(string()),
            data: string(),
            programId: string()
        })
    ]), ParsedOrRawInstruction = coerce(InstructionResult, UnknownInstructionResult, (e)=>"accounts" in e ? create(e, RawInstructionResult) : create(e, ParsedInstructionResult)), ParsedConfirmedTransactionResult = type({
        signatures: array(string()),
        message: type({
            accountKeys: array(AnnotatedAccountKey),
            instructions: array(ParsedOrRawInstruction),
            recentBlockhash: string(),
            addressTableLookups: optional(nullable(array(AddressTableLookupStruct)))
        })
    }), TokenBalanceResult = type({
        accountIndex: number(),
        mint: string(),
        owner: optional(string()),
        programId: optional(string()),
        uiTokenAmount: TokenAmountResult
    }), LoadedAddressesResult = type({
        writable: array(PublicKeyFromString),
        readonly: array(PublicKeyFromString)
    }), ConfirmedTransactionMetaResult = type({
        err: TransactionErrorResult,
        fee: number(),
        innerInstructions: optional(nullable(array(type({
            index: number(),
            instructions: array(type({
                accounts: array(number()),
                data: string(),
                programIdIndex: number()
            }))
        })))),
        preBalances: array(number()),
        postBalances: array(number()),
        logMessages: optional(nullable(array(string()))),
        preTokenBalances: optional(nullable(array(TokenBalanceResult))),
        postTokenBalances: optional(nullable(array(TokenBalanceResult))),
        loadedAddresses: optional(LoadedAddressesResult),
        computeUnitsConsumed: optional(number()),
        costUnits: optional(number())
    }), ParsedConfirmedTransactionMetaResult = type({
        err: TransactionErrorResult,
        fee: number(),
        innerInstructions: optional(nullable(array(type({
            index: number(),
            instructions: array(ParsedOrRawInstruction)
        })))),
        preBalances: array(number()),
        postBalances: array(number()),
        logMessages: optional(nullable(array(string()))),
        preTokenBalances: optional(nullable(array(TokenBalanceResult))),
        postTokenBalances: optional(nullable(array(TokenBalanceResult))),
        loadedAddresses: optional(LoadedAddressesResult),
        computeUnitsConsumed: optional(number()),
        costUnits: optional(number())
    }), TransactionVersionStruct = union([
        literal(0),
        literal("legacy")
    ]), RewardsResult = type({
        pubkey: string(),
        lamports: number(),
        postBalance: nullable(number()),
        rewardType: nullable(string()),
        commission: optional(nullable(number()))
    });
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        transactions: array(type({
            transaction: ConfirmedTransactionResult,
            meta: nullable(ConfirmedTransactionMetaResult),
            version: optional(TransactionVersionStruct)
        })),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        transactions: array(type({
            transaction: ConfirmedTransactionAccountsModeResult,
            meta: nullable(ConfirmedTransactionMetaResult),
            version: optional(TransactionVersionStruct)
        })),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        transactions: array(type({
            transaction: ParsedConfirmedTransactionResult,
            meta: nullable(ParsedConfirmedTransactionMetaResult),
            version: optional(TransactionVersionStruct)
        })),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        transactions: array(type({
            transaction: ConfirmedTransactionAccountsModeResult,
            meta: nullable(ParsedConfirmedTransactionMetaResult),
            version: optional(TransactionVersionStruct)
        })),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number()),
        blockHeight: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        transactions: array(type({
            transaction: ConfirmedTransactionResult,
            meta: nullable(ConfirmedTransactionMetaResult)
        })),
        rewards: optional(array(RewardsResult)),
        blockTime: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        blockhash: string(),
        previousBlockhash: string(),
        parentSlot: number(),
        signatures: array(string()),
        blockTime: nullable(number())
    })));
    jsonRpcResult(nullable(type({
        slot: number(),
        meta: nullable(ConfirmedTransactionMetaResult),
        blockTime: optional(nullable(number())),
        transaction: ConfirmedTransactionResult,
        version: optional(TransactionVersionStruct)
    })));
    jsonRpcResult(nullable(type({
        slot: number(),
        transaction: ParsedConfirmedTransactionResult,
        meta: nullable(ParsedConfirmedTransactionMetaResult),
        blockTime: optional(nullable(number())),
        version: optional(TransactionVersionStruct)
    })));
    jsonRpcResultAndContext(type({
        blockhash: string(),
        lastValidBlockHeight: number()
    }));
    jsonRpcResultAndContext(boolean());
    const PerfSampleResult = type({
        slot: number(),
        numTransactions: number(),
        numSlots: number(),
        samplePeriodSecs: number()
    });
    jsonRpcResult(array(PerfSampleResult));
    jsonRpcResultAndContext(nullable(type({
        feeCalculator: type({
            lamportsPerSignature: number()
        })
    })));
    jsonRpcResult(string());
    jsonRpcResult(string());
    const LogsResult = type({
        err: TransactionErrorResult,
        logs: array(string()),
        signature: string()
    });
    type({
        result: notificationResultAndContext(LogsResult),
        subscription: number()
    });
    Object.freeze({
        CreateLookupTable: {
            index: 0,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                u64("recentSlot"),
                LayoutExports.u8("bumpSeed")
            ])
        },
        FreezeLookupTable: {
            index: 1,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        ExtendLookupTable: {
            index: 2,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                u64(),
                LayoutExports.seq(publicKey(), LayoutExports.offset(LayoutExports.u32(), -8), "addresses")
            ])
        },
        DeactivateLookupTable: {
            index: 3,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        CloseLookupTable: {
            index: 4,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        }
    });
    new PublicKey("AddressLookupTab1e1111111111111111111111111");
    Object.freeze({
        RequestUnits: {
            index: 0,
            layout: LayoutExports.struct([
                LayoutExports.u8("instruction"),
                LayoutExports.u32("units"),
                LayoutExports.u32("additionalFee")
            ])
        },
        RequestHeapFrame: {
            index: 1,
            layout: LayoutExports.struct([
                LayoutExports.u8("instruction"),
                LayoutExports.u32("bytes")
            ])
        },
        SetComputeUnitLimit: {
            index: 2,
            layout: LayoutExports.struct([
                LayoutExports.u8("instruction"),
                LayoutExports.u32("units")
            ])
        },
        SetComputeUnitPrice: {
            index: 3,
            layout: LayoutExports.struct([
                LayoutExports.u8("instruction"),
                u64("microLamports")
            ])
        }
    });
    new PublicKey("ComputeBudget111111111111111111111111111111");
    LayoutExports.struct([
        LayoutExports.u8("numSignatures"),
        LayoutExports.u8("padding"),
        LayoutExports.u16("signatureOffset"),
        LayoutExports.u16("signatureInstructionIndex"),
        LayoutExports.u16("publicKeyOffset"),
        LayoutExports.u16("publicKeyInstructionIndex"),
        LayoutExports.u16("messageDataOffset"),
        LayoutExports.u16("messageDataSize"),
        LayoutExports.u16("messageInstructionIndex")
    ]);
    new PublicKey("Ed25519SigVerify111111111111111111111111111");
    secp256k1.utils.isValidPrivateKey;
    LayoutExports.struct([
        LayoutExports.u8("numSignatures"),
        LayoutExports.u16("signatureOffset"),
        LayoutExports.u8("signatureInstructionIndex"),
        LayoutExports.u16("ethAddressOffset"),
        LayoutExports.u8("ethAddressInstructionIndex"),
        LayoutExports.u16("messageDataOffset"),
        LayoutExports.u16("messageDataSize"),
        LayoutExports.u8("messageInstructionIndex"),
        LayoutExports.blob(20, "ethAddress"),
        LayoutExports.blob(64, "signature"),
        LayoutExports.u8("recoveryId")
    ]);
    new PublicKey("KeccakSecp256k11111111111111111111111111111");
    var _Lockup;
    new PublicKey("StakeConfig11111111111111111111111111111111");
    class Lockup {
        constructor(t, n, r){
            this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = n, this.custodian = r;
        }
    }
    _Lockup = Lockup;
    Lockup.default = new _Lockup(0, 0, PublicKey.default);
    Object.freeze({
        Initialize: {
            index: 0,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                authorized(),
                lockup()
            ])
        },
        Authorize: {
            index: 1,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("newAuthorized"),
                LayoutExports.u32("stakeAuthorizationType")
            ])
        },
        Delegate: {
            index: 2,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        Split: {
            index: 3,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("lamports")
            ])
        },
        Withdraw: {
            index: 4,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("lamports")
            ])
        },
        Deactivate: {
            index: 5,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        Merge: {
            index: 7,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("newAuthorized"),
                LayoutExports.u32("stakeAuthorizationType"),
                rustString("authoritySeed"),
                publicKey("authorityOwner")
            ])
        }
    });
    new PublicKey("Stake11111111111111111111111111111111111111");
    Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                voteInit()
            ])
        },
        Authorize: {
            index: 1,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                publicKey("newAuthorized"),
                LayoutExports.u32("voteAuthorizationType")
            ])
        },
        Withdraw: {
            index: 3,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                LayoutExports.ns64("lamports")
            ])
        },
        UpdateValidatorIdentity: {
            index: 4,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction")
            ])
        },
        AuthorizeWithSeed: {
            index: 10,
            layout: LayoutExports.struct([
                LayoutExports.u32("instruction"),
                voteAuthorizeWithSeedArgs()
            ])
        }
    });
    new PublicKey("Vote111111111111111111111111111111111111111");
    new PublicKey("Va1idator1nfo111111111111111111111111111111");
    type({
        name: string(),
        website: optional(string()),
        details: optional(string()),
        iconUrl: optional(string()),
        keybaseUsername: optional(string())
    });
    new PublicKey("Vote111111111111111111111111111111111111111");
    LayoutExports.struct([
        publicKey("nodePubkey"),
        publicKey("authorizedWithdrawer"),
        LayoutExports.u8("commission"),
        LayoutExports.nu64(),
        LayoutExports.seq(LayoutExports.struct([
            LayoutExports.nu64("slot"),
            LayoutExports.u32("confirmationCount")
        ]), LayoutExports.offset(LayoutExports.u32(), -8), "votes"),
        LayoutExports.u8("rootSlotValid"),
        LayoutExports.nu64("rootSlot"),
        LayoutExports.nu64(),
        LayoutExports.seq(LayoutExports.struct([
            LayoutExports.nu64("epoch"),
            publicKey("authorizedVoter")
        ]), LayoutExports.offset(LayoutExports.u32(), -8), "authorizedVoters"),
        LayoutExports.struct([
            LayoutExports.seq(LayoutExports.struct([
                publicKey("authorizedPubkey"),
                LayoutExports.nu64("epochOfLastAuthorizedSwitch"),
                LayoutExports.nu64("targetEpoch")
            ]), 32, "buf"),
            LayoutExports.nu64("idx"),
            LayoutExports.u8("isEmpty")
        ], "priorVoters"),
        LayoutExports.nu64(),
        LayoutExports.seq(LayoutExports.struct([
            LayoutExports.nu64("epoch"),
            LayoutExports.nu64("credits"),
            LayoutExports.nu64("prevCredits")
        ]), LayoutExports.offset(LayoutExports.u32(), -8), "epochCredits"),
        LayoutExports.struct([
            LayoutExports.nu64("slot"),
            LayoutExports.nu64("timestamp")
        ], "lastTimestamp")
    ]);
    const PhantomWalletName = "Phantom";
    class PhantomWalletAdapter extends BaseMessageSignerWalletAdapter {
        constructor(t = {}){
            super(), this.name = PhantomWalletName, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==", this.supportedTransactionVersions = new Set([
                "legacy",
                0
            ]), this._readyState = typeof window > "u" || typeof document > "u" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected, this._disconnected = ()=>{
                const n = this._wallet;
                n && (n.off("disconnect", this._disconnected), n.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new WalletDisconnectedError), this.emit("disconnect"));
            }, this._accountChanged = (n)=>{
                const r = this._publicKey;
                if (r) {
                    try {
                        n = new PublicKey(n.toBytes());
                    } catch (s) {
                        this.emit("error", new WalletPublicKeyError(s?.message, s));
                        return;
                    }
                    r.equals(n) || (this._publicKey = n, this.emit("connect", n));
                }
            }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== WalletReadyState.Unsupported && (isIosAndRedirectable() ? (this._readyState = WalletReadyState.Loadable, this.emit("readyStateChange", this._readyState)) : scopePollingDetectionStrategy(()=>window.phantom?.solana?.isPhantom || window.solana?.isPhantom ? (this._readyState = WalletReadyState.Installed, this.emit("readyStateChange", this._readyState), !0) : !1));
        }
        get publicKey() {
            return this._publicKey;
        }
        get connecting() {
            return this._connecting;
        }
        get readyState() {
            return this._readyState;
        }
        async autoConnect() {
            this.readyState === WalletReadyState.Installed && await this.connect();
        }
        async connect() {
            try {
                if (this.connected || this.connecting) return;
                if (this.readyState === WalletReadyState.Loadable) {
                    const r = encodeURIComponent(window.location.href), s = encodeURIComponent(window.location.origin);
                    window.location.href = `https://phantom.app/ul/browse/${r}?ref=${s}`;
                    return;
                }
                if (this.readyState !== WalletReadyState.Installed) throw new WalletNotReadyError;
                this._connecting = !0;
                const t = window.phantom?.solana || window.solana;
                if (!t.isConnected) try {
                    await t.connect();
                } catch (r) {
                    throw new WalletConnectionError(r?.message, r);
                }
                if (!t.publicKey) throw new WalletAccountError;
                let n;
                try {
                    n = new PublicKey(t.publicKey.toBytes());
                } catch (r) {
                    throw new WalletPublicKeyError(r?.message, r);
                }
                t.on("disconnect", this._disconnected), t.on("accountChanged", this._accountChanged), this._wallet = t, this._publicKey = n, this.emit("connect", n);
            } catch (t) {
                throw this.emit("error", t), t;
            } finally{
                this._connecting = !1;
            }
        }
        async disconnect() {
            const t = this._wallet;
            if (t) {
                t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                try {
                    await t.disconnect();
                } catch (n) {
                    this.emit("error", new WalletDisconnectionError(n?.message, n));
                }
            }
            this.emit("disconnect");
        }
        async sendTransaction(t, n, r = {}) {
            try {
                const s = this._wallet;
                if (!s) throw new WalletNotConnectedError;
                try {
                    const { signers: o, ...l } = r;
                    isVersionedTransaction(t) ? o?.length && t.sign(o) : (t = await this.prepareTransaction(t, n, l), o?.length && t.partialSign(...o)), l.preflightCommitment = l.preflightCommitment || n.commitment;
                    const { signature: _ } = await s.signAndSendTransaction(t, l);
                    return _;
                } catch (o) {
                    throw o instanceof WalletError ? o : new WalletSendTransactionError(o?.message, o);
                }
            } catch (s) {
                throw this.emit("error", s), s;
            }
        }
        async signTransaction(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signTransaction(t) || t;
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signAllTransactions(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signAllTransactions(t) || t;
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signMessage(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    const { signature: r } = await n.signMessage(t);
                    return r;
                } catch (r) {
                    throw new WalletSignMessageError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
    }
    const scriptRel = "modulepreload", assetsURL = function(e) {
        return "/arcade-null-session/" + e;
    }, seen = {}, __vitePreload = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            let l = function(v) {
                return Promise.all(v.map((B)=>Promise.resolve(B).then((T)=>({
                            status: "fulfilled",
                            value: T
                        }), (T)=>({
                            status: "rejected",
                            reason: T
                        }))));
            };
            document.getElementsByTagName("link");
            const _ = document.querySelector("meta[property=csp-nonce]"), p = _?.nonce || _?.getAttribute("nonce");
            s = l(n.map((v)=>{
                if (v = assetsURL(v), v in seen) return;
                seen[v] = !0;
                const B = v.endsWith(".css"), T = B ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${v}"]${T}`)) return;
                const A = document.createElement("link");
                if (A.rel = B ? "stylesheet" : scriptRel, B || (A.as = "script"), A.crossOrigin = "", A.href = v, p && A.setAttribute("nonce", p), document.head.appendChild(A), B) return new Promise((L, N)=>{
                    A.addEventListener("load", L), A.addEventListener("error", ()=>N(new Error(`Unable to preload CSS for ${v}`)));
                });
            }));
        }
        function o(l) {
            const _ = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (_.payload = l, window.dispatchEvent(_), !_.defaultPrevented) throw l;
        }
        return s.then((l)=>{
            for (const _ of l || [])_.status === "rejected" && o(_.reason);
            return t().catch(o);
        });
    };
    var __classPrivateFieldGet$1 = function(e, t, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    }, __classPrivateFieldSet$1 = function(e, t, n, r, s) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return r === "a" ? s.call(e, n) : s ? s.value = n : t.set(e, n), n;
    }, _RegisterWalletEvent_detail;
    function registerWallet(e) {
        const t = ({ register: n })=>n(e);
        try {
            window.dispatchEvent(new RegisterWalletEvent(t));
        } catch (n) {
            console.error(`wallet-standard:register-wallet event could not be dispatched
`, n);
        }
        try {
            window.addEventListener("wallet-standard:app-ready", ({ detail: n })=>t(n));
        } catch (n) {
            console.error(`wallet-standard:app-ready event listener could not be added
`, n);
        }
    }
    class RegisterWalletEvent extends Event {
        get detail() {
            return __classPrivateFieldGet$1(this, _RegisterWalletEvent_detail, "f");
        }
        get type() {
            return "wallet-standard:register-wallet";
        }
        constructor(t){
            super("wallet-standard:register-wallet", {
                bubbles: !1,
                cancelable: !1,
                composed: !1
            }), _RegisterWalletEvent_detail.set(this, void 0), __classPrivateFieldSet$1(this, _RegisterWalletEvent_detail, t, "f");
        }
        preventDefault() {
            throw new Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
            throw new Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
            throw new Error("stopPropagation cannot be called");
        }
    }
    _RegisterWalletEvent_detail = new WeakMap;
    const SOLANA_MAINNET_CHAIN = "solana:mainnet", SOLANA_DEVNET_CHAIN = "solana:devnet", SOLANA_TESTNET_CHAIN = "solana:testnet", icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=";
    var __classPrivateFieldGet = function(e, t, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
    }, __classPrivateFieldSet = function(e, t, n, r, s) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return r === "a" ? s.call(e, n) : s ? s.value = n : t.set(e, n), n;
    }, _SolflareMetaMaskWallet_instances, _SolflareMetaMaskWallet_listeners, _SolflareMetaMaskWallet_version, _SolflareMetaMaskWallet_name, _SolflareMetaMaskWallet_icon, _SolflareMetaMaskWallet_solflareMetaMask, _SolflareMetaMaskWallet_on, _SolflareMetaMaskWallet_emit, _SolflareMetaMaskWallet_off, _SolflareMetaMaskWallet_connect, _SolflareMetaMaskWallet_disconnect, _SolflareMetaMaskWallet_signAndSendTransaction, _SolflareMetaMaskWallet_signTransaction, _SolflareMetaMaskWallet_signMessage;
    class SolflareMetaMaskWallet {
        constructor(){
            _SolflareMetaMaskWallet_instances.add(this), _SolflareMetaMaskWallet_listeners.set(this, {}), _SolflareMetaMaskWallet_version.set(this, "1.0.0"), _SolflareMetaMaskWallet_name.set(this, "MetaMask"), _SolflareMetaMaskWallet_icon.set(this, icon), _SolflareMetaMaskWallet_solflareMetaMask.set(this, null), _SolflareMetaMaskWallet_on.set(this, (t, n)=>(__classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[t]?.push(n) || (__classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[t] = [
                    n
                ]), ()=>__classPrivateFieldGet(this, _SolflareMetaMaskWallet_instances, "m", _SolflareMetaMaskWallet_off).call(this, t, n))), _SolflareMetaMaskWallet_connect.set(this, async ()=>{
                if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f")) {
                    let t;
                    try {
                        t = (await __vitePreload(async ()=>{
                            const { default: n } = await import("./index-CJvpjUwQ.js");
                            return {
                                default: n
                            };
                        }, __vite__mapDeps([0,1]))).default;
                    } catch  {
                        throw new Error("Unable to load Solflare MetaMask SDK");
                    }
                    __classPrivateFieldSet(this, _SolflareMetaMaskWallet_solflareMetaMask, new t, "f"), __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").on("standard_change", (n)=>__classPrivateFieldGet(this, _SolflareMetaMaskWallet_instances, "m", _SolflareMetaMaskWallet_emit).call(this, "change", n));
                }
                return this.accounts.length || await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").connect(), {
                    accounts: this.accounts
                };
            }), _SolflareMetaMaskWallet_disconnect.set(this, async ()=>{
                __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f") && await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").disconnect();
            }), _SolflareMetaMaskWallet_signAndSendTransaction.set(this, async (...t)=>{
                if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f")) throw new WalletNotConnectedError;
                return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignAndSendTransaction(...t);
            }), _SolflareMetaMaskWallet_signTransaction.set(this, async (...t)=>{
                if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f")) throw new WalletNotConnectedError;
                return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignTransaction(...t);
            }), _SolflareMetaMaskWallet_signMessage.set(this, async (...t)=>{
                if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f")) throw new WalletNotConnectedError;
                return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignMessage(...t);
            });
        }
        get version() {
            return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_version, "f");
        }
        get name() {
            return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_name, "f");
        }
        get icon() {
            return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_icon, "f");
        }
        get chains() {
            return [
                SOLANA_MAINNET_CHAIN,
                SOLANA_DEVNET_CHAIN,
                SOLANA_TESTNET_CHAIN
            ];
        }
        get features() {
            return {
                [StandardConnect]: {
                    version: "1.0.0",
                    connect: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_connect, "f")
                },
                [StandardDisconnect]: {
                    version: "1.0.0",
                    disconnect: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_disconnect, "f")
                },
                [StandardEvents]: {
                    version: "1.0.0",
                    on: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_on, "f")
                },
                [SolanaSignAndSendTransaction]: {
                    version: "1.0.0",
                    supportedTransactionVersions: [
                        "legacy",
                        0
                    ],
                    signAndSendTransaction: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signAndSendTransaction, "f")
                },
                [SolanaSignTransaction]: {
                    version: "1.0.0",
                    supportedTransactionVersions: [
                        "legacy",
                        0
                    ],
                    signTransaction: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signTransaction, "f")
                },
                [SolanaSignMessage]: {
                    version: "1.0.0",
                    signMessage: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signMessage, "f")
                }
            };
        }
        get accounts() {
            return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f") ? __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardAccounts : [];
        }
    }
    _SolflareMetaMaskWallet_listeners = new WeakMap, _SolflareMetaMaskWallet_version = new WeakMap, _SolflareMetaMaskWallet_name = new WeakMap, _SolflareMetaMaskWallet_icon = new WeakMap, _SolflareMetaMaskWallet_solflareMetaMask = new WeakMap, _SolflareMetaMaskWallet_on = new WeakMap, _SolflareMetaMaskWallet_connect = new WeakMap, _SolflareMetaMaskWallet_disconnect = new WeakMap, _SolflareMetaMaskWallet_signAndSendTransaction = new WeakMap, _SolflareMetaMaskWallet_signTransaction = new WeakMap, _SolflareMetaMaskWallet_signMessage = new WeakMap, _SolflareMetaMaskWallet_instances = new WeakSet, _SolflareMetaMaskWallet_emit = function(t, ...n) {
        __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[t]?.forEach((r)=>r.apply(null, n));
    }, _SolflareMetaMaskWallet_off = function(t, n) {
        __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[t] = __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[t]?.filter((r)=>n !== r);
    };
    let registered = !1;
    function register() {
        registered || (registerWallet(new SolflareMetaMaskWallet), registered = !0);
    }
    async function detectAndRegisterSolflareMetaMaskWallet() {
        const e = "solflare-detect-metamask";
        function t() {
            window.postMessage({
                target: "metamask-contentscript",
                data: {
                    name: "metamask-provider",
                    data: {
                        id: e,
                        jsonrpc: "2.0",
                        method: "wallet_getSnaps"
                    }
                }
            }, window.location.origin);
        }
        function n(r) {
            const s = r.data;
            s?.target === "metamask-inpage" && s.data?.name === "metamask-provider" && (s.data.data?.id === e ? (window.removeEventListener("message", n), s.data.data.error || register()) : t());
        }
        window.addEventListener("message", n), window.setTimeout(()=>window.removeEventListener("message", n), 5e3), t();
    }
    const SolflareWalletName = "Solflare";
    class SolflareWalletAdapter extends BaseMessageSignerWalletAdapter {
        constructor(t = {}){
            super(), this.name = SolflareWalletName, this.url = "https://solflare.com", this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJTIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMjA1MGE7c3Ryb2tlOiNmZmVmNDY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOi41cHg7fS5jbHMtMntmaWxsOiNmZmVmNDY7fTwvc3R5bGU+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iMTIiIHJ5PSIxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjIzLDI2LjQybDIuNDYtMi4zOCw0LjU5LDEuNWMzLjAxLDEsNC41MSwyLjg0LDQuNTEsNS40MywwLDEuOTYtLjc1LDMuMjYtMi4yNSw0LjkzbC0uNDYuNS4xNy0xLjE3Yy42Ny00LjI2LS41OC02LjA5LTQuNzItNy40M2wtNC4zLTEuMzhoMFpNMTguMDUsMTEuODVsMTIuNTIsNC4xNy0yLjcxLDIuNTktNi41MS0yLjE3Yy0yLjI1LS43NS0zLjAxLTEuOTYtMy4zLTQuNTF2LS4wOGgwWk0xNy4zLDMzLjA2bDIuODQtMi43MSw1LjM0LDEuNzVjMi44LjkyLDMuNzYsMi4xMywzLjQ2LDUuMThsLTExLjY1LTQuMjJoMFpNMTMuNzEsMjAuOTVjMC0uNzkuNDItMS41NCwxLjEzLTIuMTcuNzUsMS4wOSwyLjA1LDIuMDUsNC4wOSwyLjcxbDQuNDIsMS40Ni0yLjQ2LDIuMzgtNC4zNC0xLjQyYy0yLS42Ny0yLjg0LTEuNjctMi44NC0yLjk2TTI2LjgyLDQyLjg3YzkuMTgtNi4wOSwxNC4xMS0xMC4yMywxNC4xMS0xNS4zMiwwLTMuMzgtMi01LjI2LTYuNDMtNi43MmwtMy4zNC0xLjEzLDkuMTQtOC43Ny0xLjg0LTEuOTYtMi43MSwyLjM4LTEyLjgxLTQuMjJjLTMuOTcsMS4yOS04Ljk3LDUuMDktOC45Nyw4Ljg5LDAsLjQyLjA0LjgzLjE3LDEuMjktMy4zLDEuODgtNC42MywzLjYzLTQuNjMsNS44LDAsMi4wNSwxLjA5LDQuMDksNC41NSw1LjIybDIuNzUuOTItOS41Miw5LjE0LDEuODQsMS45NiwyLjk2LTIuNzEsMTQuNzMsNS4yMmgwWiIvPjwvc3ZnPg==", this.supportedTransactionVersions = new Set([
                "legacy",
                0
            ]), this._readyState = typeof window > "u" || typeof document > "u" ? WalletReadyState.Unsupported : WalletReadyState.Loadable, this._disconnected = ()=>{
                const n = this._wallet;
                n && (n.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new WalletDisconnectedError), this.emit("disconnect"));
            }, this._accountChanged = (n)=>{
                if (!n) return;
                const r = this._publicKey;
                if (r) {
                    try {
                        n = new PublicKey(n.toBytes());
                    } catch (s) {
                        this.emit("error", new WalletPublicKeyError(s?.message, s));
                        return;
                    }
                    r.equals(n) || (this._publicKey = n, this.emit("connect", n));
                }
            }, this._connecting = !1, this._publicKey = null, this._wallet = null, this._config = t, this._readyState !== WalletReadyState.Unsupported && (scopePollingDetectionStrategy(()=>window.solflare?.isSolflare || window.SolflareApp ? (this._readyState = WalletReadyState.Installed, this.emit("readyStateChange", this._readyState), !0) : !1), detectAndRegisterSolflareMetaMaskWallet());
        }
        get publicKey() {
            return this._publicKey;
        }
        get connecting() {
            return this._connecting;
        }
        get connected() {
            return !!this._wallet?.connected;
        }
        get readyState() {
            return this._readyState;
        }
        async autoConnect() {
            this.readyState === WalletReadyState.Loadable && isIosAndRedirectable() || await this.connect();
        }
        async connect() {
            try {
                if (this.connected || this.connecting) return;
                if (this._readyState !== WalletReadyState.Loadable && this._readyState !== WalletReadyState.Installed) throw new WalletNotReadyError;
                if (this.readyState === WalletReadyState.Loadable && isIosAndRedirectable()) {
                    const s = encodeURIComponent(window.location.href), o = encodeURIComponent(window.location.origin);
                    window.location.href = `https://solflare.com/ul/v1/browse/${s}?ref=${o}`;
                    return;
                }
                let t;
                try {
                    t = (await __vitePreload(async ()=>{
                        const { default: s } = await import("./index-JK_s47DD.js");
                        return {
                            default: s
                        };
                    }, __vite__mapDeps([2,1]))).default;
                } catch (s) {
                    throw new WalletLoadError(s?.message, s);
                }
                let n;
                try {
                    n = new t({
                        network: this._config.network
                    });
                } catch (s) {
                    throw new WalletConfigError(s?.message, s);
                }
                if (this._connecting = !0, !n.connected) try {
                    await n.connect();
                } catch (s) {
                    throw new WalletConnectionError(s?.message, s);
                }
                if (!n.publicKey) throw new WalletConnectionError;
                let r;
                try {
                    r = new PublicKey(n.publicKey.toBytes());
                } catch (s) {
                    throw new WalletPublicKeyError(s?.message, s);
                }
                n.on("disconnect", this._disconnected), n.on("accountChanged", this._accountChanged), this._wallet = n, this._publicKey = r, this.emit("connect", r);
            } catch (t) {
                throw this.emit("error", t), t;
            } finally{
                this._connecting = !1;
            }
        }
        async disconnect() {
            const t = this._wallet;
            if (t) {
                t.off("disconnect", this._disconnected), t.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
                try {
                    await t.disconnect();
                } catch (n) {
                    this.emit("error", new WalletDisconnectionError(n?.message, n));
                }
            }
            this.emit("disconnect");
        }
        async sendTransaction(t, n, r = {}) {
            try {
                const s = this._wallet;
                if (!s) throw new WalletNotConnectedError;
                try {
                    const { signers: o, ...l } = r;
                    return isVersionedTransaction(t) ? o?.length && t.sign(o) : (t = await this.prepareTransaction(t, n, l), o?.length && t.partialSign(...o)), l.preflightCommitment = l.preflightCommitment || n.commitment, await s.signAndSendTransaction(t, l);
                } catch (o) {
                    throw o instanceof WalletError ? o : new WalletSendTransactionError(o?.message, o);
                }
            } catch (s) {
                throw this.emit("error", s), s;
            }
        }
        async signTransaction(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signTransaction(t) || t;
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signAllTransactions(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signAllTransactions(t) || t;
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signMessage(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signMessage(t, "utf8");
                } catch (r) {
                    throw new WalletSignMessageError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
    }
    const BackpackWalletName = "Backpack";
    class BackpackWalletAdapter extends BaseMessageSignerWalletAdapter {
        constructor(t = {}){
            super(), this.name = BackpackWalletName, this.url = "https://backpack.app", this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbvSURBVHgB7Z1dUtxGEMf/LZH3fU0V4PUJQg4QVj5BnBOAT2BzAsMJAicwPoHJCRDrAxifgLVxVV73ObDqdEtsjKn4C8+0NDv9e7AxprRC85uvnp4RYYW5qKpxCVTcYKsgfiDfGjMwIsZIvh7d/lkmzAiYy5fzhultyZhdlagf1vU5VhjCiiGFXq01zYSJdqWgx/hB5AHN5I/6iuilyFBjxVgZAdqCZ34ORoVIqAzSOhxsvq6PsSIkL4A281LwL2IW/F1UhLKgRz/X9QyJUyBhuuae31gWviLjiPF1wxeX29vPkTjJtgAftrd3GHSMnmHw4eZ0uodESVKAoRT+kpQlSE6Ats/XZv/ONK5vZHC49+B1fYjESG4MUDKfYmCFr0ic4fmHqtpCYiQlgA66QsztIzFi5j+RGMl0AXebfgn0aOTuvGG8owIarZsXOj3ronlRuEYnn84CJLo4Lgi/QL/H/LHmy/RwI6GA0RoS4acFHi8kGieFXS/QhmijFfQXmH3uPy5lSkoLbIkYlfyzhuM4juM4juM4juMMj6TzATQ4JH9tlRqFk8BM2aV9RWHB9K5kzK/KLui0KqliSQmgBa4BIS54cpMD0OeawFye3jk19JdKkWq62OAFkEIfrTXNUxBV1okf38Ot3MGjlFqHwQrQZvQ22Cfw7xjg6t8XkZaBGzpKIXdwcAJojZeCP5SC30HipJBEOigBZLn3qdzSPlKr8V9hyEmkgxCgj8zefuD9jen0AAOidwE0i6ZhfjXgRI+gDK016DUjqE3ubPhNLoWvaDLJouHToaSP9SbA0DJ7LekyiviNPgP0TC9dQM6FfxeZ7eyuT6cv0RPmAmjTx11uXx/MiegEDd425cfcwWV+H4O3+uiO+pTAVIA2uMN8av6QiWr5TQ++JVlTc/tEiF3jOMScZGC43kME0VSA95PJhWXhM+Gt1Phn98nStZa1r9mB2SDQPqefjhayfnDfFG2J5882z84eynVM5u3thlONhRhj0gLc5PRfwAw62JjW+wjE5Xa1L0VkshO4kXt/EPDev4ZJCyBRvlcwggjHG4EfYHc9OoIBBWy3mEUX4H1V7Ur7ZvILaT8qy7FRduleF9jXc4RggOUWs/gtANs0nYquvMXaMaTXlQHlE1ggayLvf5OKY0DUMYDWfmpsBjZa+9enOmiLy+VkcmqxaNW2ZgX9GnsLXNQWoGj4KYzQ2g8LyG5WUDR4hshEE6CN+AFmg5lFiRMYcI0uKRQGyIAwegWKJkBjYO8tzq12C7efQ7CK2I00MomIxOsCiCcwQhaW3sEQ6W7sPi/yIDqKAHp8m2nIF7COoc9ghQw4NU8SkYgiQCmLKXCCUSziPc84XYBh83/DSiWR3qUo2tT4ONdGYDTub73cSzD/PNt0rojdQHAByoXxw0E7XfoFhsjnRduD+DnWIkkXXACJl1cwRoMmf3cbRaOjLRzDXnKZVj9GBIILUJBtbVzyj9HAU19AgR6I9VzDtwCgMXpAo2Yxp0v/Ybi49ennJtIFEPMY/TCKHTvv+aTSUQzBgwrQ92YHbQVi3UN3GAVZhrf/jzECE1SAq/7n4yOJ074KPSBcJoii598vxgwrqAByg70HZJZbr0JJ0G5XZz5Z1e1rYccA5TAicqEk0O5ECl/3LvYys7mLTLHHCEzS7wz6Esv3+nyYTF58rwha63XAl8PG1aCnhesWq6EdOcKM3WvmXRHh+Gvv/tNVTJlJPC4a3RVEK72+sCSZ4+J/FBVhTUS43J7gJqFjrnl33A3sxtCa3nAWhX6bbAT4hJugCsNZ2TGA8224AJnjAmSOC5A5LkDmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnjAmSOC5A5LkDmuACZ4wJkjguQOWEFYJvz85xwBBWgKM1P68oKKsI/36ACdC9nsDlWPTsIJ5t1Hfw01OBjgI1p/YwLegIibw0CwESz9gUYZ2d/wHEcx3Ecx3Ecx3Ecx3HuS5QjfdrXxTHv3JzEkd2xKwHR9xPNuKGjzdf1MSIQXAA9XUsuuw8nKPpK3PWzs+AvrgwqgP1LojOjoEf3fRv6Zy+JgBSLOGfaOx1NE/6o+rCrgeT9fWp4SljmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnjAmSOC5A5LkDmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnj5wRmTlABqHQBohKhggUVYAEEP8fO+UiMgziDCvCwrnU3aw0nOATMQu8LVIIPAq+JdAerdwWBaQ/fjEBwAaQVmMnN7sEJCB3EqP3tlRGJy6qqmPkFMcZw7sucmfZiHQ6hRBNgSXdaCHbA7KeFfBvz9pxlxtl1gcN2XBWRfwHK959XFRG6AgAAAABJRU5ErkJggg==", this.supportedTransactionVersions = null, this._readyState = typeof window > "u" || typeof document > "u" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected, this._disconnected = ()=>{
                const n = this._wallet;
                n && (n.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null, this.emit("error", new WalletDisconnectedError), this.emit("disconnect"));
            }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== WalletReadyState.Unsupported && scopePollingDetectionStrategy(()=>window.backpack?.isBackpack ? (this._readyState = WalletReadyState.Installed, this.emit("readyStateChange", this._readyState), !0) : !1);
        }
        get publicKey() {
            return this._publicKey;
        }
        get connecting() {
            return this._connecting;
        }
        get connected() {
            return !!this._wallet?.isConnected;
        }
        get readyState() {
            return this._readyState;
        }
        async connect() {
            try {
                if (this.connected || this.connecting) return;
                if (this._readyState !== WalletReadyState.Installed) throw new WalletNotReadyError;
                this._connecting = !0;
                const t = window.backpack;
                try {
                    await t.connect();
                } catch (r) {
                    throw new WalletConnectionError(r?.message, r);
                }
                if (!t.publicKey) throw new WalletAccountError;
                let n;
                try {
                    n = new PublicKey(t.publicKey.toBytes());
                } catch (r) {
                    throw new WalletPublicKeyError(r?.message, r);
                }
                t.on("disconnect", this._disconnected), this._wallet = t, this._publicKey = n, this.emit("connect", n);
            } catch (t) {
                throw this.emit("error", t), t;
            } finally{
                this._connecting = !1;
            }
        }
        async disconnect() {
            const t = this._wallet;
            if (t) {
                t.off("disconnect", this._disconnected), this._wallet = null, this._publicKey = null;
                try {
                    await t.disconnect();
                } catch (n) {
                    this.emit("error", new WalletDisconnectionError(n?.message, n));
                }
            }
            this.emit("disconnect");
        }
        async sendTransaction(t, n, r = {}) {
            try {
                const s = this._wallet;
                if (!s) throw new WalletNotConnectedError;
                const { signers: o, ...l } = r;
                try {
                    return await s.send(t, o, l, n, this.publicKey);
                } catch (_) {
                    throw new WalletSendTransactionError(_?.message, _);
                }
            } catch (s) {
                throw this.emit("error", s), s;
            }
        }
        async signTransaction(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signTransaction(t, this.publicKey);
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signAllTransactions(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signAllTransactions(t, this.publicKey);
                } catch (r) {
                    throw new WalletSignTransactionError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
        async signMessage(t) {
            try {
                const n = this._wallet;
                if (!n) throw new WalletNotConnectedError;
                try {
                    return await n.signMessage(t, this.publicKey);
                } catch (r) {
                    throw new WalletSignMessageError(r?.message, r);
                }
            } catch (n) {
                throw this.emit("error", n), n;
            }
        }
    }
    const adapters = {
        phantom: ()=>new PhantomWalletAdapter,
        solflare: ()=>new SolflareWalletAdapter,
        backpack: ()=>new BackpackWalletAdapter
    };
    let currentWallet = null;
    function getAvailableWallets() {
        return Object.keys(adapters);
    }
    async function connect(e) {
        const t = adapters[e.toLowerCase()];
        if (!t) return console.error("[wallet-bridge] Unknown wallet:", e), null;
        try {
            currentWallet && await currentWallet.disconnect();
            const n = t();
            if (await n.connect(), n.publicKey) {
                currentWallet = n;
                const r = n.publicKey.toBase58();
                return console.log("[wallet-bridge] Connected:", e, r), r;
            }
            return console.error("[wallet-bridge] No public key after connect"), null;
        } catch (n) {
            return console.error("[wallet-bridge] Connection error:", n), null;
        }
    }
    async function disconnect() {
        if (currentWallet) {
            try {
                await currentWallet.disconnect();
            } catch (e) {
                console.error("[wallet-bridge] Disconnect error:", e);
            }
            currentWallet = null;
        }
    }
    function getAddress() {
        return currentWallet?.publicKey?.toBase58() ?? null;
    }
    function isConnected() {
        return currentWallet !== null && currentWallet.connected;
    }
    function getWalletName() {
        return currentWallet?.name ?? null;
    }
    window.walletBridge = {
        getAvailableWallets,
        connect,
        disconnect,
        getAddress,
        isConnected,
        getWalletName
    };
    console.log("[wallet-bridge] Bridge initialized");
    function start_app() {
        wasm.start_app();
    }
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Window_151fb4790d4514b5: function(e) {
                const t = getObject(e).Window;
                return addHeapObject(t);
            },
            __wbg_Window_526d55e318507264: function(e) {
                const t = getObject(e).Window;
                return addHeapObject(t);
            },
            __wbg_Window_e0df001eddf1d3fa: function(e) {
                const t = getObject(e).Window;
                return addHeapObject(t);
            },
            __wbg_WorkerGlobalScope_d731e9136c6c49a0: function(e) {
                const t = getObject(e).WorkerGlobalScope;
                return addHeapObject(t);
            },
            __wbg_WorkerGlobalScope_eb408faae4074815: function(e) {
                const t = getObject(e).WorkerGlobalScope;
                return addHeapObject(t);
            },
            __wbg___wbindgen_boolean_get_18c4ed9422296fff: function(e) {
                const t = getObject(e), n = typeof t == "boolean" ? t : void 0;
                return isLikeNone(n) ? 16777215 : n ? 1 : 0;
            },
            __wbg___wbindgen_debug_string_ddde1867f49c2442: function(e, t) {
                const n = debugString(getObject(t)), r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg___wbindgen_is_function_d633e708baf0d146: function(e) {
                return typeof getObject(e) == "function";
            },
            __wbg___wbindgen_is_null_a2a19127c13e7126: function(e) {
                return getObject(e) === null;
            },
            __wbg___wbindgen_is_object_4b3de556756ee8a8: function(e) {
                const t = getObject(e);
                return typeof t == "object" && t !== null;
            },
            __wbg___wbindgen_is_undefined_c18285b9fc34cb7d: function(e) {
                return getObject(e) === void 0;
            },
            __wbg___wbindgen_number_get_5854912275df1894: function(e, t) {
                const n = getObject(t), r = typeof n == "number" ? n : void 0;
                getDataViewMemory0().setFloat64(e + 8, isLikeNone(r) ? 0 : r, !0), getDataViewMemory0().setInt32(e + 0, !isLikeNone(r), !0);
            },
            __wbg___wbindgen_string_get_3e5751597f39a112: function(e, t) {
                const n = getObject(t), r = typeof n == "string" ? n : void 0;
                var s = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_export, wasm.__wbindgen_export2), o = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, o, !0), getDataViewMemory0().setInt32(e + 0, s, !0);
            },
            __wbg___wbindgen_throw_39bc967c0e5a9b58: function(e, t) {
                throw new Error(getStringFromWasm0(e, t));
            },
            __wbg__wbg_cb_unref_b6d832240a919168: function(e) {
                getObject(e)._wbg_cb_unref();
            },
            __wbg_abort_695597a7a37354a1: function(e) {
                getObject(e).abort();
            },
            __wbg_activeElement_31e766ce04adbe5e: function(e) {
                const t = getObject(e).activeElement;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_addEventListener_c4f780106c414839: function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).addEventListener(getStringFromWasm0(t, n), getObject(r));
                }, arguments);
            },
            __wbg_addListener_323ee0c530e5b071: function() {
                return handleError(function(e, t) {
                    getObject(e).addListener(getObject(t));
                }, arguments);
            },
            __wbg_altKey_6f89a54e91c24976: function(e) {
                return getObject(e).altKey;
            },
            __wbg_altKey_dd23e9838cbfcfc8: function(e) {
                return getObject(e).altKey;
            },
            __wbg_animate_dd29cb0a1b9ac656: function(e, t, n) {
                const r = getObject(e).animate(getObject(t), getObject(n));
                return addHeapObject(r);
            },
            __wbg_appendChild_f8784f6270d097cd: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).appendChild(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_arrayBuffer_8fd4b7df096647f9: function() {
                return handleError(function(e) {
                    const t = getObject(e).arrayBuffer();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_axes_0df9ef003c0aa52e: function(e) {
                const t = getObject(e).axes;
                return addHeapObject(t);
            },
            __wbg_beginComputePass_d7b46482cf2ed824: function(e, t) {
                const n = getObject(e).beginComputePass(getObject(t));
                return addHeapObject(n);
            },
            __wbg_beginRenderPass_373f34636d157c43: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).beginRenderPass(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_blockSize_8d4d3e3ebf6496bd: function(e) {
                return getObject(e).blockSize;
            },
            __wbg_body_4eb4906314b12ac0: function(e) {
                const t = getObject(e).body;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_brand_ff4576e5daaea097: function(e, t) {
                const n = getObject(t).brand, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_brands_f1ec4bbb90271ed4: function(e) {
                const t = getObject(e).brands;
                return addHeapObject(t);
            },
            __wbg_buffer_b47db24bb1e1d5fd: function(e) {
                const t = getObject(e).buffer;
                return addHeapObject(t);
            },
            __wbg_button_048e9cbb8b27af8e: function(e) {
                return getObject(e).button;
            },
            __wbg_buttons_2df7c6eb5e774f8d: function(e) {
                const t = getObject(e).buttons;
                return addHeapObject(t);
            },
            __wbg_buttons_f526cd661f0be0ad: function(e) {
                return getObject(e).buttons;
            },
            __wbg_cancelAnimationFrame_e9e0714e1db5b8f4: function() {
                return handleError(function(e, t) {
                    getObject(e).cancelAnimationFrame(t);
                }, arguments);
            },
            __wbg_cancelIdleCallback_61b99ce89b13beed: function(e, t) {
                getObject(e).cancelIdleCallback(t >>> 0);
            },
            __wbg_cancel_9dd6952543ef11cd: function(e) {
                getObject(e).cancel();
            },
            __wbg_catch_1d2bbf5e86156d97: function(e, t) {
                const n = getObject(e).catch(getObject(t));
                return addHeapObject(n);
            },
            __wbg_clearTimeout_68c8c5d789b449c5: function(e, t) {
                getObject(e).clearTimeout(t);
            },
            __wbg_close_25c8043c7d77797f: function() {
                return handleError(function(e) {
                    const t = getObject(e).close();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_close_25fab4104ca40d22: function(e) {
                getObject(e).close();
            },
            __wbg_code_e52b6e1a7e0b57d3: function(e, t) {
                const n = getObject(t).code, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_configure_b39d6ec9527208fd: function() {
                return handleError(function(e, t) {
                    getObject(e).configure(getObject(t));
                }, arguments);
            },
            __wbg_connect_955012c5a4e1843b: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).connect(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_connect_ab70f151b2387f79: function() {
                return handleError(function(e, t) {
                    const n = walletBridge.connect(getStringFromWasm0(e, t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_connected_98aa1e3c0f4f20f7: function(e) {
                return getObject(e).connected;
            },
            __wbg_contains_1aff2f5c5c761d06: function(e, t) {
                return getObject(e).contains(getObject(t));
            },
            __wbg_contentRect_b2c72b468836067d: function(e) {
                const t = getObject(e).contentRect;
                return addHeapObject(t);
            },
            __wbg_copyBufferToBuffer_293ca0a0d09a2280: function() {
                return handleError(function(e, t, n, r, s) {
                    getObject(e).copyBufferToBuffer(getObject(t), n, getObject(r), s);
                }, arguments);
            },
            __wbg_copyBufferToBuffer_321eb0198eb9c268: function() {
                return handleError(function(e, t, n, r, s, o) {
                    getObject(e).copyBufferToBuffer(getObject(t), n, getObject(r), s, o);
                }, arguments);
            },
            __wbg_copyTextureToBuffer_f5501895b13306e1: function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).copyTextureToBuffer(getObject(t), getObject(n), getObject(r));
                }, arguments);
            },
            __wbg_copyTextureToTexture_facf8ecdb9559cb0: function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).copyTextureToTexture(getObject(t), getObject(n), getObject(r));
                }, arguments);
            },
            __wbg_copyToChannel_25672cbeb89f9027: function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).copyToChannel(getArrayF32FromWasm0(t, n), r);
                }, arguments);
            },
            __wbg_createBindGroupLayout_f5bb5a31b2ac11bf: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createBindGroupLayout(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_createBindGroup_2290306cfa413c74: function(e, t) {
                const n = getObject(e).createBindGroup(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createBufferSource_7a8a481961bd2689: function() {
                return handleError(function(e) {
                    const t = getObject(e).createBufferSource();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_createBuffer_b648c64d09ee9a71: function() {
                return handleError(function(e, t, n, r) {
                    const s = getObject(e).createBuffer(t >>> 0, n >>> 0, r);
                    return addHeapObject(s);
                }, arguments);
            },
            __wbg_createBuffer_e2b25dd1471f92f7: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createBuffer(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_createCommandEncoder_80578730e7314357: function(e, t) {
                const n = getObject(e).createCommandEncoder(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createComputePipeline_78a3fff4e7d451a8: function(e, t) {
                const n = getObject(e).createComputePipeline(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createElement_c28be812ac2ffe84: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).createElement(getStringFromWasm0(t, n));
                    return addHeapObject(r);
                }, arguments);
            },
            __wbg_createObjectURL_5d73c8f8b9442674: function() {
                return handleError(function(e, t) {
                    const n = URL.createObjectURL(getObject(t)), r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
                }, arguments);
            },
            __wbg_createPipelineLayout_0ef251301bed0c34: function(e, t) {
                const n = getObject(e).createPipelineLayout(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createQuerySet_9ae406d6d86026f6: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createQuerySet(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_createRenderPipeline_f9f8aa23f50f8a9c: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createRenderPipeline(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_createSampler_27c37a8245da51a4: function(e, t) {
                const n = getObject(e).createSampler(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createShaderModule_eb21a131dfb0d4dc: function(e, t) {
                const n = getObject(e).createShaderModule(getObject(t));
                return addHeapObject(n);
            },
            __wbg_createTexture_284160f981e0075f: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createTexture(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_createView_b09749798973b0f5: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).createView(getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_ctrlKey_c66665e9d705f967: function(e) {
                return getObject(e).ctrlKey;
            },
            __wbg_ctrlKey_ff524c2e8a33ea2a: function(e) {
                return getObject(e).ctrlKey;
            },
            __wbg_currentTime_8beb60205e57af35: function(e) {
                return getObject(e).currentTime;
            },
            __wbg_debug_e69ad32e6af73f94: function(e) {
                console.debug(getObject(e));
            },
            __wbg_decodeURIComponent_1fbbd3d4e73ff82e: function() {
                return handleError(function(e, t) {
                    const n = decodeURIComponent(getStringFromWasm0(e, t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_deltaMode_ba6d094b7940d738: function(e) {
                return getObject(e).deltaMode;
            },
            __wbg_deltaX_c0b6729a7e4606dd: function(e) {
                return getObject(e).deltaX;
            },
            __wbg_deltaY_8c99bdb9344f3932: function(e) {
                return getObject(e).deltaY;
            },
            __wbg_destination_5ec29b18a0d7c932: function(e) {
                const t = getObject(e).destination;
                return addHeapObject(t);
            },
            __wbg_devicePixelContentBoxSize_567b1d0782eba230: function(e) {
                const t = getObject(e).devicePixelContentBoxSize;
                return addHeapObject(t);
            },
            __wbg_devicePixelRatio_48fab2b0d76ee308: function(e) {
                return getObject(e).devicePixelRatio;
            },
            __wbg_disconnect_b7859f9ad4fd1f13: function(e) {
                getObject(e).disconnect();
            },
            __wbg_disconnect_be838b47ecbe793a: function(e) {
                getObject(e).disconnect();
            },
            __wbg_dispatchWorkgroups_88dfc3f2209b9d74: function(e, t, n, r) {
                getObject(e).dispatchWorkgroups(t >>> 0, n >>> 0, r >>> 0);
            },
            __wbg_document_0b7613236d782ccc: function(e) {
                const t = getObject(e).document;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_drawIndexed_a60a41b2b0ffdadf: function(e, t, n, r, s, o) {
                getObject(e).drawIndexed(t >>> 0, n >>> 0, r >>> 0, s, o >>> 0);
            },
            __wbg_draw_bcc050d6677121b5: function(e, t, n, r, s) {
                getObject(e).draw(t >>> 0, n >>> 0, r >>> 0, s >>> 0);
            },
            __wbg_end_05c67c1822b40952: function(e) {
                getObject(e).end();
            },
            __wbg_end_c269ebd826210ed1: function(e) {
                getObject(e).end();
            },
            __wbg_error_a6fa202b58aa1cd3: function(e, t) {
                let n, r;
                try {
                    n = e, r = t, console.error(getStringFromWasm0(e, t));
                } finally{
                    wasm.__wbindgen_export4(n, r, 1);
                }
            },
            __wbg_error_ad28debb48b5c6bb: function(e) {
                console.error(getObject(e));
            },
            __wbg_error_b8445866f700df1c: function(e, t) {
                console.error(getObject(e), getObject(t));
            },
            __wbg_eval_0a245a99b46bad8e: function() {
                return handleError(function(arg0, arg1) {
                    const ret = eval(getStringFromWasm0(arg0, arg1));
                    return addHeapObject(ret);
                }, arguments);
            },
            __wbg_exec_ac48b0d32948e083: function(e, t, n) {
                const r = getObject(e).exec(getStringFromWasm0(t, n));
                return isLikeNone(r) ? 0 : addHeapObject(r);
            },
            __wbg_exitFullscreen_bf5c8b56c0e8e590: function(e) {
                getObject(e).exitFullscreen();
            },
            __wbg_exitPointerLock_bc94ad1473375455: function(e) {
                getObject(e).exitPointerLock();
            },
            __wbg_features_a239101d9dc0c094: function(e) {
                const t = getObject(e).features;
                return addHeapObject(t);
            },
            __wbg_features_cb4af4c41720c5e5: function(e) {
                const t = getObject(e).features;
                return addHeapObject(t);
            },
            __wbg_fetch_6c4573e6649a93bc: function(e, t, n) {
                const r = getObject(e).fetch(getStringFromWasm0(t, n));
                return addHeapObject(r);
            },
            __wbg_fetch_7cfcb2ac1f7faf08: function(e, t, n) {
                const r = getObject(e).fetch(getStringFromWasm0(t, n));
                return addHeapObject(r);
            },
            __wbg_fetch_8d9b732df7467c44: function(e) {
                const t = fetch(getObject(e));
                return addHeapObject(t);
            },
            __wbg_finish_073e2bc456a4b625: function(e) {
                const t = getObject(e).finish();
                return addHeapObject(t);
            },
            __wbg_finish_e43b1b48427f2db0: function(e, t) {
                const n = getObject(e).finish(getObject(t));
                return addHeapObject(n);
            },
            __wbg_focus_a5756e69ecf69851: function() {
                return handleError(function(e) {
                    getObject(e).focus();
                }, arguments);
            },
            __wbg_fullscreenElement_057e168440bc5450: function(e) {
                const t = getObject(e).fullscreenElement;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_getAddress_11debd48bb29112d: function(e) {
                const t = walletBridge.getAddress();
                var n = isLikeNone(t) ? 0 : passStringToWasm0(t, wasm.__wbindgen_export, wasm.__wbindgen_export2), r = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, r, !0), getDataViewMemory0().setInt32(e + 0, n, !0);
            },
            __wbg_getBoundingClientRect_881837f23b7e503b: function(e) {
                const t = getObject(e).getBoundingClientRect();
                return addHeapObject(t);
            },
            __wbg_getCoalescedEvents_dcdec0f70f7cb0a4: function(e) {
                const t = getObject(e).getCoalescedEvents;
                return addHeapObject(t);
            },
            __wbg_getCoalescedEvents_ee131b00b517af38: function(e) {
                const t = getObject(e).getCoalescedEvents();
                return addHeapObject(t);
            },
            __wbg_getComputedStyle_e94bad8b9bf17baf: function() {
                return handleError(function(e, t) {
                    const n = getObject(e).getComputedStyle(getObject(t));
                    return isLikeNone(n) ? 0 : addHeapObject(n);
                }, arguments);
            },
            __wbg_getContext_04fd91bf79400077: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).getContext(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r);
                }, arguments);
            },
            __wbg_getContext_f63e0cc3b9d1dc24: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).getContext(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r);
                }, arguments);
            },
            __wbg_getCurrentTexture_7edbea16b438c9fc: function() {
                return handleError(function(e) {
                    const t = getObject(e).getCurrentTexture();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_getGamepads_289db729457f6f06: function() {
                return handleError(function(e) {
                    const t = getObject(e).getGamepads();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_getMappedRange_191c0084744858f0: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).getMappedRange(t, n);
                    return addHeapObject(r);
                }, arguments);
            },
            __wbg_getOwnPropertyDescriptor_c908d9a4adc1614d: function(e, t) {
                const n = Object.getOwnPropertyDescriptor(getObject(e), getObject(t));
                return addHeapObject(n);
            },
            __wbg_getPreferredCanvasFormat_56e30944cc798353: function(e) {
                const t = getObject(e).getPreferredCanvasFormat();
                return (__wbindgen_enum_GpuTextureFormat.indexOf(t) + 1 || 96) - 1;
            },
            __wbg_getPropertyValue_08a611fc5d42f15d: function() {
                return handleError(function(e, t, n, r) {
                    const s = getObject(t).getPropertyValue(getStringFromWasm0(n, r)), o = passStringToWasm0(s, wasm.__wbindgen_export, wasm.__wbindgen_export2), l = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(e + 4, l, !0), getDataViewMemory0().setInt32(e + 0, o, !0);
                }, arguments);
            },
            __wbg_get_01b80713f61639c9: function(e, t) {
                const n = getObject(e)[t >>> 0];
                return isLikeNone(n) ? 0 : addHeapObject(n);
            },
            __wbg_get_f09c3a16f8848381: function(e, t) {
                const n = getObject(e)[t >>> 0];
                return addHeapObject(n);
            },
            __wbg_get_unchecked_3d0f4b91c8eca4f0: function(e, t) {
                const n = getObject(e)[t >>> 0];
                return addHeapObject(n);
            },
            __wbg_gpu_7c0927abcc96dd45: function(e) {
                const t = getObject(e).gpu;
                return addHeapObject(t);
            },
            __wbg_has_14f08fae2dc367dc: function() {
                return handleError(function(e, t) {
                    return Reflect.has(getObject(e), getObject(t));
                }, arguments);
            },
            __wbg_has_abf74d2b4f3e578e: function(e, t, n) {
                return getObject(e).has(getStringFromWasm0(t, n));
            },
            __wbg_height_28939e1616041ee0: function(e) {
                return getObject(e).height;
            },
            __wbg_id_549f7be0552bfd9b: function(e, t) {
                const n = getObject(t).id, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_index_b466a1e81d0246d0: function(e) {
                return getObject(e).index;
            },
            __wbg_info_72e7e65fa3fc8b25: function(e) {
                console.info(getObject(e));
            },
            __wbg_inlineSize_2ac8eb21e19ddffc: function(e) {
                return getObject(e).inlineSize;
            },
            __wbg_instanceof_DomException_806735173e4b5cc2: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof DOMException;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Error_61cba3f831918ada: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof Error;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_GpuAdapter_5e451ad6596e2784: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof GPUAdapter;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_GpuCanvasContext_f70ee27f49f4f884: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof GPUCanvasContext;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_GpuOutOfMemoryError_d312fd1714771dbd: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof GPUOutOfMemoryError;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_GpuValidationError_eb3c494ad7b55611: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof GPUValidationError;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_HtmlCanvasElement_d8fa699a8663ca1b: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof HTMLCanvasElement;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Object_813a194d6e249bee: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof Object;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Response_8ec0057b1e5c71bf: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof Response;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Window_4aba49e4d1a12365: function(e) {
                let t;
                try {
                    t = getObject(e) instanceof Window;
                } catch  {
                    t = !1;
                }
                return t;
            },
            __wbg_isConnected_9816eb1e22c921b2: function() {
                return walletBridge.isConnected();
            },
            __wbg_isIntersecting_44d6218f4b714fcf: function(e) {
                return getObject(e).isIntersecting;
            },
            __wbg_isSecureContext_1dac27b103968653: function(e) {
                return getObject(e).isSecureContext;
            },
            __wbg_is_1ad0660d6042ae31: function(e, t) {
                return Object.is(getObject(e), getObject(t));
            },
            __wbg_key_659f8d2f3a028e75: function(e, t) {
                const n = getObject(t).key, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_label_0abc44bf8d3a3e99: function(e, t) {
                const n = getObject(t).label, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_length_5855c1f289dfffc1: function(e) {
                return getObject(e).length;
            },
            __wbg_length_a31e05262e09b7f8: function(e) {
                return getObject(e).length;
            },
            __wbg_limits_764638d29dec49d4: function(e) {
                const t = getObject(e).limits;
                return addHeapObject(t);
            },
            __wbg_limits_ea7aa423b3575ea6: function(e) {
                const t = getObject(e).limits;
                return addHeapObject(t);
            },
            __wbg_location_657bc521c1a39b6c: function(e) {
                return getObject(e).location;
            },
            __wbg_log_0c201ade58bb55e1: function(e, t, n, r, s, o, l, _) {
                let p, v;
                try {
                    p = e, v = t, console.log(getStringFromWasm0(e, t), getStringFromWasm0(n, r), getStringFromWasm0(s, o), getStringFromWasm0(l, _));
                } finally{
                    wasm.__wbindgen_export4(p, v, 1);
                }
            },
            __wbg_log_3c5e4b64af29e724: function(e) {
                console.log(getObject(e));
            },
            __wbg_log_ce2c4456b290c5e7: function(e, t) {
                let n, r;
                try {
                    n = e, r = t, console.log(getStringFromWasm0(e, t));
                } finally{
                    wasm.__wbindgen_export4(n, r, 1);
                }
            },
            __wbg_mapAsync_1be2f9e8f464f69e: function(e, t, n, r) {
                const s = getObject(e).mapAsync(t >>> 0, n, r);
                return addHeapObject(s);
            },
            __wbg_mapping_6a9df6c8a0ba5861: function(e) {
                const t = getObject(e).mapping;
                return (__wbindgen_enum_GamepadMappingType.indexOf(t) + 1 || 3) - 1;
            },
            __wbg_mark_b4d943f3bc2d2404: function(e, t) {
                performance.mark(getStringFromWasm0(e, t));
            },
            __wbg_matchMedia_060878840a0816a7: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).matchMedia(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r);
                }, arguments);
            },
            __wbg_matches_eff69dc4a8d9ddf8: function(e) {
                return getObject(e).matches;
            },
            __wbg_maxBindGroups_c439abd1498fc924: function(e) {
                return getObject(e).maxBindGroups;
            },
            __wbg_maxBindingsPerBindGroup_186292f383c7b982: function(e) {
                return getObject(e).maxBindingsPerBindGroup;
            },
            __wbg_maxBufferSize_87b76aa2842d0e8e: function(e) {
                return getObject(e).maxBufferSize;
            },
            __wbg_maxChannelCount_ae6f0ca7e5d29d54: function(e) {
                return getObject(e).maxChannelCount;
            },
            __wbg_maxColorAttachmentBytesPerSample_2ba81ae1e2742413: function(e) {
                return getObject(e).maxColorAttachmentBytesPerSample;
            },
            __wbg_maxColorAttachments_1ec5191521ef0d22: function(e) {
                return getObject(e).maxColorAttachments;
            },
            __wbg_maxComputeInvocationsPerWorkgroup_ee67a82206d412d2: function(e) {
                return getObject(e).maxComputeInvocationsPerWorkgroup;
            },
            __wbg_maxComputeWorkgroupSizeX_0b2b16b802f85a14: function(e) {
                return getObject(e).maxComputeWorkgroupSizeX;
            },
            __wbg_maxComputeWorkgroupSizeY_00d8aeba9472fdb2: function(e) {
                return getObject(e).maxComputeWorkgroupSizeY;
            },
            __wbg_maxComputeWorkgroupSizeZ_351fd9dab4c07321: function(e) {
                return getObject(e).maxComputeWorkgroupSizeZ;
            },
            __wbg_maxComputeWorkgroupStorageSize_881d2b675868eb68: function(e) {
                return getObject(e).maxComputeWorkgroupStorageSize;
            },
            __wbg_maxComputeWorkgroupsPerDimension_21c223eca6bd6d6b: function(e) {
                return getObject(e).maxComputeWorkgroupsPerDimension;
            },
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_7155d3f7a514a157: function(e) {
                return getObject(e).maxDynamicStorageBuffersPerPipelineLayout;
            },
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_76dee9028eaa5322: function(e) {
                return getObject(e).maxDynamicUniformBuffersPerPipelineLayout;
            },
            __wbg_maxSampledTexturesPerShaderStage_78d018dcd0b999c8: function(e) {
                return getObject(e).maxSampledTexturesPerShaderStage;
            },
            __wbg_maxSamplersPerShaderStage_0e3ad4d70194a7c2: function(e) {
                return getObject(e).maxSamplersPerShaderStage;
            },
            __wbg_maxStorageBufferBindingSize_30a1e5c0b8fcd992: function(e) {
                return getObject(e).maxStorageBufferBindingSize;
            },
            __wbg_maxStorageBuffersPerShaderStage_d77703e9a0d5960e: function(e) {
                return getObject(e).maxStorageBuffersPerShaderStage;
            },
            __wbg_maxStorageTexturesPerShaderStage_c09e7daf1141067e: function(e) {
                return getObject(e).maxStorageTexturesPerShaderStage;
            },
            __wbg_maxTextureArrayLayers_44d8badedb4e5245: function(e) {
                return getObject(e).maxTextureArrayLayers;
            },
            __wbg_maxTextureDimension1D_6d1ff8e56b9cf824: function(e) {
                return getObject(e).maxTextureDimension1D;
            },
            __wbg_maxTextureDimension2D_5ef5830837d92b7c: function(e) {
                return getObject(e).maxTextureDimension2D;
            },
            __wbg_maxTextureDimension3D_cfdebbf2b20068cd: function(e) {
                return getObject(e).maxTextureDimension3D;
            },
            __wbg_maxUniformBufferBindingSize_63dc0c714d2fcebe: function(e) {
                return getObject(e).maxUniformBufferBindingSize;
            },
            __wbg_maxUniformBuffersPerShaderStage_a52382f8a7dfc816: function(e) {
                return getObject(e).maxUniformBuffersPerShaderStage;
            },
            __wbg_maxVertexAttributes_4c83ac8c1d442e1c: function(e) {
                return getObject(e).maxVertexAttributes;
            },
            __wbg_maxVertexBufferArrayStride_955879053ec672f8: function(e) {
                return getObject(e).maxVertexBufferArrayStride;
            },
            __wbg_maxVertexBuffers_0bb014e62f100c6c: function(e) {
                return getObject(e).maxVertexBuffers;
            },
            __wbg_measure_84362959e621a2c1: function() {
                return handleError(function(e, t, n, r) {
                    let s, o, l, _;
                    try {
                        s = e, o = t, l = n, _ = r, performance.measure(getStringFromWasm0(e, t), getStringFromWasm0(n, r));
                    } finally{
                        wasm.__wbindgen_export4(s, o, 1), wasm.__wbindgen_export4(l, _, 1);
                    }
                }, arguments);
            },
            __wbg_media_8cb89977ed6ff597: function(e, t) {
                const n = getObject(t).media, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_message_206e22ac85ff4937: function(e, t) {
                const n = getObject(t).message, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_message_33208c54b5eda995: function(e, t) {
                const n = getObject(t).message, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_message_86efd2a76a910bdb: function(e) {
                const t = getObject(e).message;
                return addHeapObject(t);
            },
            __wbg_metaKey_3159d9a0a1070899: function(e) {
                return getObject(e).metaKey;
            },
            __wbg_metaKey_665ebd3312e5ed58: function(e) {
                return getObject(e).metaKey;
            },
            __wbg_minStorageBufferOffsetAlignment_6ed09762e603ac3a: function(e) {
                return getObject(e).minStorageBufferOffsetAlignment;
            },
            __wbg_minUniformBufferOffsetAlignment_02579f79815cf83c: function(e) {
                return getObject(e).minUniformBufferOffsetAlignment;
            },
            __wbg_movementX_ae8bbb9242a87fba: function(e) {
                return getObject(e).movementX;
            },
            __wbg_movementY_5e735719ddb7c50f: function(e) {
                return getObject(e).movementY;
            },
            __wbg_name_57350e01645fc792: function(e) {
                const t = getObject(e).name;
                return addHeapObject(t);
            },
            __wbg_navigator_bb9bf52d5003ebaa: function(e) {
                const t = getObject(e).navigator;
                return addHeapObject(t);
            },
            __wbg_navigator_c088813b66e0b67c: function(e) {
                const t = getObject(e).navigator;
                return addHeapObject(t);
            },
            __wbg_new_0765f05b3e3b4625: function() {
                return handleError(function() {
                    const e = new Headers;
                    return addHeapObject(e);
                }, arguments);
            },
            __wbg_new_09959f7b4c92c246: function(e) {
                const t = new Uint8Array(getObject(e));
                return addHeapObject(t);
            },
            __wbg_new_227d7c05414eb861: function() {
                const e = new Error;
                return addHeapObject(e);
            },
            __wbg_new_2497fb12a7d01841: function() {
                return handleError(function(e, t) {
                    const n = new URL(getStringFromWasm0(e, t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_new_2f79084d4c1a6fc4: function() {
                return handleError(function(e) {
                    const t = new ResizeObserver(getObject(e));
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_new_34e46b604fef2b8b: function() {
                return handleError(function() {
                    const e = new MessageChannel;
                    return addHeapObject(e);
                }, arguments);
            },
            __wbg_new_68d46e0bd2654beb: function() {
                return handleError(function(e) {
                    const t = new IntersectionObserver(getObject(e));
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_new_6eed8f87fc95618e: function() {
                return handleError(function(e, t) {
                    const n = new Worker(getStringFromWasm0(e, t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_new_ad7de8e21b22f47e: function() {
                return handleError(function() {
                    const e = new URLSearchParams;
                    return addHeapObject(e);
                }, arguments);
            },
            __wbg_new_ed69e637b553a997: function() {
                const e = new Object;
                return addHeapObject(e);
            },
            __wbg_new_f36f23f20fc3c218: function(e, t, n, r) {
                const s = new RegExp(getStringFromWasm0(e, t), getStringFromWasm0(n, r));
                return addHeapObject(s);
            },
            __wbg_new_fe53f8c71bd1e95b: function() {
                return handleError(function() {
                    const e = new AbortController;
                    return addHeapObject(e);
                }, arguments);
            },
            __wbg_new_from_slice_d7e202fdbee3c396: function(e, t) {
                const n = new Uint8Array(getArrayU8FromWasm0(e, t));
                return addHeapObject(n);
            },
            __wbg_new_typed_e8cd930b75161ad3: function() {
                const e = new Array;
                return addHeapObject(e);
            },
            __wbg_new_with_byte_offset_and_length_3e6cc05444a2f3c5: function(e, t, n) {
                const r = new Uint8Array(getObject(e), t >>> 0, n >>> 0);
                return addHeapObject(r);
            },
            __wbg_new_with_context_options_213b3ae8747ec93d: function() {
                return handleError(function(e) {
                    const t = new lAudioContext(getObject(e));
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_new_with_str_7fb72717a7c71344: function() {
                return handleError(function(e, t) {
                    const n = new Request(getStringFromWasm0(e, t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_new_with_str_and_init_5fdb105df3907de1: function() {
                return handleError(function(e, t, n) {
                    const r = new Request(getStringFromWasm0(e, t), getObject(n));
                    return addHeapObject(r);
                }, arguments);
            },
            __wbg_new_with_str_sequence_and_options_9cb2ac4601afacae: function() {
                return handleError(function(e, t) {
                    const n = new Blob(getObject(e), getObject(t));
                    return addHeapObject(n);
                }, arguments);
            },
            __wbg_now_e7c6795a7f81e10f: function(e) {
                return getObject(e).now();
            },
            __wbg_now_edd718b3004d8631: function() {
                return Date.now();
            },
            __wbg_observe_432b8a8326ccea0b: function(e, t, n) {
                getObject(e).observe(getObject(t), getObject(n));
            },
            __wbg_observe_8881f35a808185a4: function(e, t) {
                getObject(e).observe(getObject(t));
            },
            __wbg_observe_fda349af76cecfcb: function(e, t) {
                getObject(e).observe(getObject(t));
            },
            __wbg_of_25a3bcb86f9d51ab: function(e) {
                const t = Array.of(getObject(e));
                return addHeapObject(t);
            },
            __wbg_of_d3b315af6d5ecc2a: function(e, t) {
                const n = Array.of(getObject(e), getObject(t));
                return addHeapObject(n);
            },
            __wbg_offsetX_a33f46283f149787: function(e) {
                return getObject(e).offsetX;
            },
            __wbg_offsetY_b3edd8b8c0835ba9: function(e) {
                return getObject(e).offsetY;
            },
            __wbg_ok_7d15591f9c7b18db: function(e) {
                return getObject(e).ok;
            },
            __wbg_onSubmittedWorkDone_7d532ba1f20a64b3: function(e) {
                const t = getObject(e).onSubmittedWorkDone();
                return addHeapObject(t);
            },
            __wbg_performance_3fcf6e32a7e1ed0a: function(e) {
                const t = getObject(e).performance;
                return addHeapObject(t);
            },
            __wbg_persisted_33ff1f72106f2a13: function(e) {
                return getObject(e).persisted;
            },
            __wbg_play_46c9edbbd00fe4f4: function(e) {
                getObject(e).play();
            },
            __wbg_pointerId_96b9ca3cf529c8d7: function(e) {
                return getObject(e).pointerId;
            },
            __wbg_pointerType_a5ece5b9c957d8b9: function(e, t) {
                const n = getObject(t).pointerType, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_popErrorScope_560bfe3f43f543e7: function(e) {
                const t = getObject(e).popErrorScope();
                return addHeapObject(t);
            },
            __wbg_port1_6b10c5d07b52a3ae: function(e) {
                const t = getObject(e).port1;
                return addHeapObject(t);
            },
            __wbg_port2_a87dae4d942fa29e: function(e) {
                const t = getObject(e).port2;
                return addHeapObject(t);
            },
            __wbg_postMessage_167c7475b55d513e: function() {
                return handleError(function(e, t, n) {
                    getObject(e).postMessage(getObject(t), getObject(n));
                }, arguments);
            },
            __wbg_postMessage_c3e5d53b78b53e16: function() {
                return handleError(function(e, t) {
                    getObject(e).postMessage(getObject(t));
                }, arguments);
            },
            __wbg_postTask_eab6113f4fddf8ac: function(e, t, n) {
                const r = getObject(e).postTask(getObject(t), getObject(n));
                return addHeapObject(r);
            },
            __wbg_pressed_1d9f9d4c8da24822: function(e) {
                return getObject(e).pressed;
            },
            __wbg_pressure_222546872180b987: function(e) {
                return getObject(e).pressure;
            },
            __wbg_preventDefault_d8dbb4013b32560a: function(e) {
                getObject(e).preventDefault();
            },
            __wbg_prototype_8931eb0577f98164: function() {
                const e = ResizeObserverEntry.prototype;
                return addHeapObject(e);
            },
            __wbg_prototypesetcall_f034d444741426c3: function(e, t, n) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(e, t), getObject(n));
            },
            __wbg_pushErrorScope_9c7f2c66d0393f31: function(e, t) {
                getObject(e).pushErrorScope(__wbindgen_enum_GpuErrorFilter[t]);
            },
            __wbg_push_a6f9488ffd3fae3b: function(e, t) {
                return getObject(e).push(getObject(t));
            },
            __wbg_querySelectorAll_0553d7ba7491befc: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).querySelectorAll(getStringFromWasm0(t, n));
                    return addHeapObject(r);
                }, arguments);
            },
            __wbg_querySelector_5a9cd5c59506cf7a: function() {
                return handleError(function(e, t, n) {
                    const r = getObject(e).querySelector(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r);
                }, arguments);
            },
            __wbg_queueMicrotask_2c8dfd1056f24fdc: function(e) {
                const t = getObject(e).queueMicrotask;
                return addHeapObject(t);
            },
            __wbg_queueMicrotask_66b1233f5fbae72d: function(e, t) {
                getObject(e).queueMicrotask(getObject(t));
            },
            __wbg_queueMicrotask_8985ad63815852e7: function(e) {
                queueMicrotask(getObject(e));
            },
            __wbg_queue_5eda23116e5d3adb: function(e) {
                const t = getObject(e).queue;
                return addHeapObject(t);
            },
            __wbg_removeEventListener_357b0bf9803ecae1: function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).removeEventListener(getStringFromWasm0(t, n), getObject(r));
                }, arguments);
            },
            __wbg_removeListener_8b2e2ef64a23d61f: function() {
                return handleError(function(e, t) {
                    getObject(e).removeListener(getObject(t));
                }, arguments);
            },
            __wbg_removeProperty_a7bebd7c17b166b2: function() {
                return handleError(function(e, t, n, r) {
                    const s = getObject(t).removeProperty(getStringFromWasm0(n, r)), o = passStringToWasm0(s, wasm.__wbindgen_export, wasm.__wbindgen_export2), l = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(e + 4, l, !0), getDataViewMemory0().setInt32(e + 0, o, !0);
                }, arguments);
            },
            __wbg_repeat_e80941262ebc98fd: function(e) {
                return getObject(e).repeat;
            },
            __wbg_requestAdapter_8efca1b953fd13aa: function(e, t) {
                const n = getObject(e).requestAdapter(getObject(t));
                return addHeapObject(n);
            },
            __wbg_requestAnimationFrame_a3d50e525d8e209e: function() {
                return handleError(function(e, t) {
                    return getObject(e).requestAnimationFrame(getObject(t));
                }, arguments);
            },
            __wbg_requestDevice_290c73161fe959d5: function(e, t) {
                const n = getObject(e).requestDevice(getObject(t));
                return addHeapObject(n);
            },
            __wbg_requestFullscreen_1a5a761851df0375: function(e) {
                const t = getObject(e).requestFullscreen();
                return addHeapObject(t);
            },
            __wbg_requestFullscreen_fe29684097a9af2d: function(e) {
                const t = getObject(e).requestFullscreen;
                return addHeapObject(t);
            },
            __wbg_requestIdleCallback_99c09c33f24578b0: function() {
                return handleError(function(e, t) {
                    return getObject(e).requestIdleCallback(getObject(t));
                }, arguments);
            },
            __wbg_requestIdleCallback_a188cf0d8f576b3b: function(e) {
                const t = getObject(e).requestIdleCallback;
                return addHeapObject(t);
            },
            __wbg_requestPointerLock_88c7ef345cbe0f1d: function(e) {
                getObject(e).requestPointerLock();
            },
            __wbg_resolveQuerySet_ee2438e6a23d55f6: function(e, t, n, r, s, o) {
                getObject(e).resolveQuerySet(getObject(t), n >>> 0, r >>> 0, getObject(s), o >>> 0);
            },
            __wbg_resolve_5d61e0d10c14730a: function(e) {
                const t = Promise.resolve(getObject(e));
                return addHeapObject(t);
            },
            __wbg_resume_4da86cca9d650a95: function() {
                return handleError(function(e) {
                    const t = getObject(e).resume();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_revokeObjectURL_a1d0e19a2a752132: function() {
                return handleError(function(e, t) {
                    URL.revokeObjectURL(getStringFromWasm0(e, t));
                }, arguments);
            },
            __wbg_scheduler_265d2e42615c9392: function(e) {
                const t = getObject(e).scheduler;
                return addHeapObject(t);
            },
            __wbg_scheduler_98b012447b67ee9f: function(e) {
                const t = getObject(e).scheduler;
                return addHeapObject(t);
            },
            __wbg_search_ad51fc9d99fe60f7: function(e, t) {
                const n = getObject(t).search, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_setAttribute_52376c4b548b7c58: function() {
                return handleError(function(e, t, n, r, s) {
                    getObject(e).setAttribute(getStringFromWasm0(t, n), getStringFromWasm0(r, s));
                }, arguments);
            },
            __wbg_setBindGroup_1c8c11d4dd6528cf: function(e, t, n) {
                getObject(e).setBindGroup(t >>> 0, getObject(n));
            },
            __wbg_setBindGroup_29f4a44dff76f1a4: function(e, t, n) {
                getObject(e).setBindGroup(t >>> 0, getObject(n));
            },
            __wbg_setBindGroup_35a4830ac2c27742: function() {
                return handleError(function(e, t, n, r, s, o, l) {
                    getObject(e).setBindGroup(t >>> 0, getObject(n), getArrayU32FromWasm0(r, s), o, l >>> 0);
                }, arguments);
            },
            __wbg_setBindGroup_abde98bc542a4ae2: function() {
                return handleError(function(e, t, n, r, s, o, l) {
                    getObject(e).setBindGroup(t >>> 0, getObject(n), getArrayU32FromWasm0(r, s), o, l >>> 0);
                }, arguments);
            },
            __wbg_setIndexBuffer_924197dc97dbb679: function(e, t, n, r, s) {
                getObject(e).setIndexBuffer(getObject(t), __wbindgen_enum_GpuIndexFormat[n], r, s);
            },
            __wbg_setPipeline_c91e0c8670443991: function(e, t) {
                getObject(e).setPipeline(getObject(t));
            },
            __wbg_setPipeline_e6ea6756d71b19a7: function(e, t) {
                getObject(e).setPipeline(getObject(t));
            },
            __wbg_setPointerCapture_67124f7ff96cbfcc: function() {
                return handleError(function(e, t) {
                    getObject(e).setPointerCapture(t);
                }, arguments);
            },
            __wbg_setProperty_bdfc1b57fadc046e: function() {
                return handleError(function(e, t, n, r, s) {
                    getObject(e).setProperty(getStringFromWasm0(t, n), getStringFromWasm0(r, s));
                }, arguments);
            },
            __wbg_setScissorRect_eeb4f61d4b860d7a: function(e, t, n, r, s) {
                getObject(e).setScissorRect(t >>> 0, n >>> 0, r >>> 0, s >>> 0);
            },
            __wbg_setTimeout_4a2848786837d752: function() {
                return handleError(function(e, t) {
                    return getObject(e).setTimeout(getObject(t));
                }, arguments);
            },
            __wbg_setTimeout_67bc3096eef9fc6b: function() {
                return handleError(function(e, t, n) {
                    return getObject(e).setTimeout(getObject(t), n);
                }, arguments);
            },
            __wbg_setVertexBuffer_7aa508f017477005: function(e, t, n, r, s) {
                getObject(e).setVertexBuffer(t >>> 0, getObject(n), r, s);
            },
            __wbg_setViewport_014b4c4d1101ba6b: function(e, t, n, r, s, o, l) {
                getObject(e).setViewport(t, n, r, s, o, l);
            },
            __wbg_set_410caa03fd65d0ba: function(e, t, n) {
                getObject(e).set(getObject(t), n >>> 0);
            },
            __wbg_set_77cf5fbc40154bdb: function() {
                return handleError(function(e, t, n, r, s) {
                    getObject(e).set(getStringFromWasm0(t, n), getStringFromWasm0(r, s));
                }, arguments);
            },
            __wbg_set_a_6f1653ca7319cdcf: function(e, t) {
                getObject(e).a = t;
            },
            __wbg_set_access_cbee993a36feed10: function(e, t) {
                getObject(e).access = __wbindgen_enum_GpuStorageTextureAccess[t];
            },
            __wbg_set_address_mode_u_38e255cd89ce1977: function(e, t) {
                getObject(e).addressModeU = __wbindgen_enum_GpuAddressMode[t];
            },
            __wbg_set_address_mode_v_513f843d6e3c9dbd: function(e, t) {
                getObject(e).addressModeV = __wbindgen_enum_GpuAddressMode[t];
            },
            __wbg_set_address_mode_w_801f70901a90ed5a: function(e, t) {
                getObject(e).addressModeW = __wbindgen_enum_GpuAddressMode[t];
            },
            __wbg_set_alpha_0a28ffc800461787: function(e, t) {
                getObject(e).alpha = getObject(t);
            },
            __wbg_set_alpha_mode_55b4f33e93691fe8: function(e, t) {
                getObject(e).alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[t];
            },
            __wbg_set_alpha_to_coverage_enabled_ec44695cc0d0e961: function(e, t) {
                getObject(e).alphaToCoverageEnabled = t !== 0;
            },
            __wbg_set_array_layer_count_e774b6d4a5334e63: function(e, t) {
                getObject(e).arrayLayerCount = t >>> 0;
            },
            __wbg_set_array_stride_11c840b41b728354: function(e, t) {
                getObject(e).arrayStride = t;
            },
            __wbg_set_aspect_2503cdfcdcc17373: function(e, t) {
                getObject(e).aspect = __wbindgen_enum_GpuTextureAspect[t];
            },
            __wbg_set_attributes_ac1030b589bf253a: function(e, t) {
                getObject(e).attributes = getObject(t);
            },
            __wbg_set_b_d5b23064b0492744: function(e, t) {
                getObject(e).b = t;
            },
            __wbg_set_bad5c505cc70b5f8: function() {
                return handleError(function(e, t, n) {
                    return Reflect.set(getObject(e), getObject(t), getObject(n));
                }, arguments);
            },
            __wbg_set_base_array_layer_f64cdadf250d1a9b: function(e, t) {
                getObject(e).baseArrayLayer = t >>> 0;
            },
            __wbg_set_base_mip_level_74fc97c2aaf8fc33: function(e, t) {
                getObject(e).baseMipLevel = t >>> 0;
            },
            __wbg_set_beginning_of_pass_write_index_348e7f2f53a86db0: function(e, t) {
                getObject(e).beginningOfPassWriteIndex = t >>> 0;
            },
            __wbg_set_beginning_of_pass_write_index_880bdf30cfb151c3: function(e, t) {
                getObject(e).beginningOfPassWriteIndex = t >>> 0;
            },
            __wbg_set_bind_group_layouts_6f13eb021a550053: function(e, t) {
                getObject(e).bindGroupLayouts = getObject(t);
            },
            __wbg_set_binding_2240d98479c0c256: function(e, t) {
                getObject(e).binding = t >>> 0;
            },
            __wbg_set_binding_5296904f2a4c7e25: function(e, t) {
                getObject(e).binding = t >>> 0;
            },
            __wbg_set_blend_4aea897cd7d3c0f8: function(e, t) {
                getObject(e).blend = getObject(t);
            },
            __wbg_set_body_cced363f7703790d: function(e, t) {
                getObject(e).body = getObject(t);
            },
            __wbg_set_box_1d483522c055116a: function(e, t) {
                getObject(e).box = __wbindgen_enum_ResizeObserverBoxOptions[t];
            },
            __wbg_set_buffer_170e7cc927ced063: function(e, t) {
                getObject(e).buffer = getObject(t);
            },
            __wbg_set_buffer_2e7d1f7814caf92b: function(e, t) {
                getObject(e).buffer = getObject(t);
            },
            __wbg_set_buffer_ba8ed06078d347f7: function(e, t) {
                getObject(e).buffer = getObject(t);
            },
            __wbg_set_buffer_fc9285180932669f: function(e, t) {
                getObject(e).buffer = getObject(t);
            },
            __wbg_set_buffers_72754529595d4bc0: function(e, t) {
                getObject(e).buffers = getObject(t);
            },
            __wbg_set_bytes_per_row_5fedf5a2d44b8482: function(e, t) {
                getObject(e).bytesPerRow = t >>> 0;
            },
            __wbg_set_bytes_per_row_9425e8d6a11b52dc: function(e, t) {
                getObject(e).bytesPerRow = t >>> 0;
            },
            __wbg_set_channelCount_7df1fd2ef926a299: function(e, t) {
                getObject(e).channelCount = t >>> 0;
            },
            __wbg_set_clear_value_1171de96edbc21fe: function(e, t) {
                getObject(e).clearValue = getObject(t);
            },
            __wbg_set_code_27a25a855d3fbc6d: function(e, t, n) {
                getObject(e).code = getStringFromWasm0(t, n);
            },
            __wbg_set_color_attachments_4516b6dfb4ad987b: function(e, t) {
                getObject(e).colorAttachments = getObject(t);
            },
            __wbg_set_color_f2ac28bdc576c010: function(e, t) {
                getObject(e).color = getObject(t);
            },
            __wbg_set_compare_2c8ee8ccaa2b6b5d: function(e, t) {
                getObject(e).compare = __wbindgen_enum_GpuCompareFunction[t];
            },
            __wbg_set_compare_cbf49b43d3211833: function(e, t) {
                getObject(e).compare = __wbindgen_enum_GpuCompareFunction[t];
            },
            __wbg_set_compute_e8ed640c578ae016: function(e, t) {
                getObject(e).compute = getObject(t);
            },
            __wbg_set_count_53854513da5c0e04: function(e, t) {
                getObject(e).count = t >>> 0;
            },
            __wbg_set_count_b424874e36f62c59: function(e, t) {
                getObject(e).count = t >>> 0;
            },
            __wbg_set_cull_mode_3852dd4cff56dd90: function(e, t) {
                getObject(e).cullMode = __wbindgen_enum_GpuCullMode[t];
            },
            __wbg_set_depth_bias_c20861a58fc2b8d9: function(e, t) {
                getObject(e).depthBias = t;
            },
            __wbg_set_depth_bias_clamp_eecc04d702f9402e: function(e, t) {
                getObject(e).depthBiasClamp = t;
            },
            __wbg_set_depth_bias_slope_scale_b2a251d3d4c65018: function(e, t) {
                getObject(e).depthBiasSlopeScale = t;
            },
            __wbg_set_depth_clear_value_fca9e379a0cdff8f: function(e, t) {
                getObject(e).depthClearValue = t;
            },
            __wbg_set_depth_compare_7883e52aad39b925: function(e, t) {
                getObject(e).depthCompare = __wbindgen_enum_GpuCompareFunction[t];
            },
            __wbg_set_depth_fail_op_1d11c8e03d061484: function(e, t) {
                getObject(e).depthFailOp = __wbindgen_enum_GpuStencilOperation[t];
            },
            __wbg_set_depth_load_op_7e95e67c69e09c5e: function(e, t) {
                getObject(e).depthLoadOp = __wbindgen_enum_GpuLoadOp[t];
            },
            __wbg_set_depth_or_array_layers_36ef1df107b6b651: function(e, t) {
                getObject(e).depthOrArrayLayers = t >>> 0;
            },
            __wbg_set_depth_read_only_0c5e726b56520b08: function(e, t) {
                getObject(e).depthReadOnly = t !== 0;
            },
            __wbg_set_depth_stencil_17e2d1710f4e07ae: function(e, t) {
                getObject(e).depthStencil = getObject(t);
            },
            __wbg_set_depth_stencil_attachment_a7b5eca74b7ddcfb: function(e, t) {
                getObject(e).depthStencilAttachment = getObject(t);
            },
            __wbg_set_depth_store_op_1b4cc257f121a4e7: function(e, t) {
                getObject(e).depthStoreOp = __wbindgen_enum_GpuStoreOp[t];
            },
            __wbg_set_depth_write_enabled_1551f99ae66d959e: function(e, t) {
                getObject(e).depthWriteEnabled = t !== 0;
            },
            __wbg_set_device_846227515bb0301a: function(e, t) {
                getObject(e).device = getObject(t);
            },
            __wbg_set_dimension_7454baa9c745cf06: function(e, t) {
                getObject(e).dimension = __wbindgen_enum_GpuTextureDimension[t];
            },
            __wbg_set_dimension_9d314669636abc65: function(e, t) {
                getObject(e).dimension = __wbindgen_enum_GpuTextureViewDimension[t];
            },
            __wbg_set_dst_factor_8397030245674624: function(e, t) {
                getObject(e).dstFactor = __wbindgen_enum_GpuBlendFactor[t];
            },
            __wbg_set_end_of_pass_write_index_4600a261d0317ecb: function(e, t) {
                getObject(e).endOfPassWriteIndex = t >>> 0;
            },
            __wbg_set_end_of_pass_write_index_9fec09fcc7da1609: function(e, t) {
                getObject(e).endOfPassWriteIndex = t >>> 0;
            },
            __wbg_set_entries_4d13c932343146c3: function(e, t) {
                getObject(e).entries = getObject(t);
            },
            __wbg_set_entries_7e6b569918b11bf4: function(e, t) {
                getObject(e).entries = getObject(t);
            },
            __wbg_set_entry_point_7248ed25fb9070c7: function(e, t, n) {
                getObject(e).entryPoint = getStringFromWasm0(t, n);
            },
            __wbg_set_entry_point_b01eb3970a1dcb95: function(e, t, n) {
                getObject(e).entryPoint = getStringFromWasm0(t, n);
            },
            __wbg_set_entry_point_c8f041069c527ff6: function(e, t, n) {
                getObject(e).entryPoint = getStringFromWasm0(t, n);
            },
            __wbg_set_external_texture_cf6cf39036321145: function(e, t) {
                getObject(e).externalTexture = getObject(t);
            },
            __wbg_set_fail_op_ac8f2b4c077715b1: function(e, t) {
                getObject(e).failOp = __wbindgen_enum_GpuStencilOperation[t];
            },
            __wbg_set_format_12bcbdd3428cd4b5: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_format_1fc8a436841b29c8: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_format_2a42ed14de233ae5: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuVertexFormat[t];
            },
            __wbg_set_format_3759d043ddc658d4: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_format_b08e529cc1612d7b: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_format_e0cf5a237864edb6: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_format_ffa0a97f114a945a: function(e, t) {
                getObject(e).format = __wbindgen_enum_GpuTextureFormat[t];
            },
            __wbg_set_fragment_703ddd6f5db6e4af: function(e, t) {
                getObject(e).fragment = getObject(t);
            },
            __wbg_set_front_face_17a3723085696d9a: function(e, t) {
                getObject(e).frontFace = __wbindgen_enum_GpuFrontFace[t];
            },
            __wbg_set_g_4cc3b3e3231ca6f8: function(e, t) {
                getObject(e).g = t;
            },
            __wbg_set_has_dynamic_offset_dc25aba64b9bd3ff: function(e, t) {
                getObject(e).hasDynamicOffset = t !== 0;
            },
            __wbg_set_headers_9144e2163352af57: function(e, t) {
                getObject(e).headers = getObject(t);
            },
            __wbg_set_height_ac705ece3aa08c95: function(e, t) {
                getObject(e).height = t >>> 0;
            },
            __wbg_set_height_b3ad521fb0d982ea: function(e, t) {
                getObject(e).height = t >>> 0;
            },
            __wbg_set_height_ed13c7b896d93a3b: function(e, t) {
                getObject(e).height = t >>> 0;
            },
            __wbg_set_label_10bd19b972ff1ba6: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_16cff4ff3c381368: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_343ceab4761679d7: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_403725ced930414e: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_62b82f9361718fb9: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_6afa181067c4da56: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_7d448e8a777d0d37: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_900e563567315063: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_98bef61fcbcecdde: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_9d2ce197e447a967: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_a19e77f79a88d021: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_b5d7ff5f8e4fbaac: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_ba288fbac1259847: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_e135ef1842fb45f8: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_e1bd2437f39d21f3: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_label_e4debe6dc9ea319b: function(e, t, n) {
                getObject(e).label = getStringFromWasm0(t, n);
            },
            __wbg_set_layout_53be3643dc5dbbbe: function(e, t) {
                getObject(e).layout = getObject(t);
            },
            __wbg_set_layout_bb56309555eaa472: function(e, t) {
                getObject(e).layout = getObject(t);
            },
            __wbg_set_layout_ca5f863d331bb6b4: function(e, t) {
                getObject(e).layout = getObject(t);
            },
            __wbg_set_load_op_91d2cbf2912c96fd: function(e, t) {
                getObject(e).loadOp = __wbindgen_enum_GpuLoadOp[t];
            },
            __wbg_set_lod_max_clamp_01800ff5df00cc8e: function(e, t) {
                getObject(e).lodMaxClamp = t;
            },
            __wbg_set_lod_min_clamp_fe71be084b04bd97: function(e, t) {
                getObject(e).lodMinClamp = t;
            },
            __wbg_set_mag_filter_a6df09d1943d5caa: function(e, t) {
                getObject(e).magFilter = __wbindgen_enum_GpuFilterMode[t];
            },
            __wbg_set_mapped_at_creation_eb954cf5fdb9bc25: function(e, t) {
                getObject(e).mappedAtCreation = t !== 0;
            },
            __wbg_set_mask_47a41aae6631771f: function(e, t) {
                getObject(e).mask = t >>> 0;
            },
            __wbg_set_max_anisotropy_418bd200a56097a0: function(e, t) {
                getObject(e).maxAnisotropy = t;
            },
            __wbg_set_method_c1be4686b152fe29: function(e, t, n) {
                getObject(e).method = getStringFromWasm0(t, n);
            },
            __wbg_set_min_binding_size_d0315b751370234c: function(e, t) {
                getObject(e).minBindingSize = t;
            },
            __wbg_set_min_filter_5b27a7eb3f5ea88a: function(e, t) {
                getObject(e).minFilter = __wbindgen_enum_GpuFilterMode[t];
            },
            __wbg_set_mip_level_b50dccbd04935c98: function(e, t) {
                getObject(e).mipLevel = t >>> 0;
            },
            __wbg_set_mip_level_count_307eb64d9d29e3a6: function(e, t) {
                getObject(e).mipLevelCount = t >>> 0;
            },
            __wbg_set_mip_level_count_fe7f73daa6021aaa: function(e, t) {
                getObject(e).mipLevelCount = t >>> 0;
            },
            __wbg_set_mipmap_filter_e1543204e8199db0: function(e, t) {
                getObject(e).mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[t];
            },
            __wbg_set_module_46b766d7fbe021b2: function(e, t) {
                getObject(e).module = getObject(t);
            },
            __wbg_set_module_9afd1b80ff72cee9: function(e, t) {
                getObject(e).module = getObject(t);
            },
            __wbg_set_module_ffe8f8e909e9fdcf: function(e, t) {
                getObject(e).module = getObject(t);
            },
            __wbg_set_multisample_957afdd96685c6f5: function(e, t) {
                getObject(e).multisample = getObject(t);
            },
            __wbg_set_multisampled_84e304d3a68838ea: function(e, t) {
                getObject(e).multisampled = t !== 0;
            },
            __wbg_set_offset_157c6bc4fd6ec4b1: function(e, t) {
                getObject(e).offset = t;
            },
            __wbg_set_offset_3e78f3e530cf8049: function(e, t) {
                getObject(e).offset = t;
            },
            __wbg_set_offset_616ad7dfa51d50e0: function(e, t) {
                getObject(e).offset = t;
            },
            __wbg_set_offset_bea112c360dc7f2b: function(e, t) {
                getObject(e).offset = t;
            },
            __wbg_set_onended_f0a11bc32f5288d4: function(e, t) {
                getObject(e).onended = getObject(t);
            },
            __wbg_set_onmessage_d7e46f0acbaa9b02: function(e, t) {
                getObject(e).onmessage = getObject(t);
            },
            __wbg_set_operation_6c5fd88df90bc7b2: function(e, t) {
                getObject(e).operation = __wbindgen_enum_GpuBlendOperation[t];
            },
            __wbg_set_origin_dec4f4c36f9f79f6: function(e, t) {
                getObject(e).origin = getObject(t);
            },
            __wbg_set_pass_op_461dabd5ee4ea1b7: function(e, t) {
                getObject(e).passOp = __wbindgen_enum_GpuStencilOperation[t];
            },
            __wbg_set_power_preference_a4ce891b22ea2b05: function(e, t) {
                getObject(e).powerPreference = __wbindgen_enum_GpuPowerPreference[t];
            },
            __wbg_set_primitive_eb8abbc5e7f278a4: function(e, t) {
                getObject(e).primitive = getObject(t);
            },
            __wbg_set_query_set_849fb32875f137d7: function(e, t) {
                getObject(e).querySet = getObject(t);
            },
            __wbg_set_query_set_c65a8f4d74f562f6: function(e, t) {
                getObject(e).querySet = getObject(t);
            },
            __wbg_set_r_5fa0f548248c394c: function(e, t) {
                getObject(e).r = t;
            },
            __wbg_set_required_features_98a83c7003fd73d5: function(e, t) {
                getObject(e).requiredFeatures = getObject(t);
            },
            __wbg_set_resolve_target_1ff405e060e2d32e: function(e, t) {
                getObject(e).resolveTarget = getObject(t);
            },
            __wbg_set_resource_1409c14d4d6b5a50: function(e, t) {
                getObject(e).resource = getObject(t);
            },
            __wbg_set_rows_per_image_8104dfe1b042a530: function(e, t) {
                getObject(e).rowsPerImage = t >>> 0;
            },
            __wbg_set_rows_per_image_9cfda8920e669db0: function(e, t) {
                getObject(e).rowsPerImage = t >>> 0;
            },
            __wbg_set_sample_count_95a9892a60894677: function(e, t) {
                getObject(e).sampleCount = t >>> 0;
            },
            __wbg_set_sample_rate_f3e27cef55cdd4dc: function(e, t) {
                getObject(e).sampleRate = t;
            },
            __wbg_set_sample_type_f8f7b39d62e7b29c: function(e, t) {
                getObject(e).sampleType = __wbindgen_enum_GpuTextureSampleType[t];
            },
            __wbg_set_sampler_a2277e90dfe7395f: function(e, t) {
                getObject(e).sampler = getObject(t);
            },
            __wbg_set_search_2f965fa2e45fd445: function(e, t, n) {
                getObject(e).search = getStringFromWasm0(t, n);
            },
            __wbg_set_shader_location_cdbcf5cf84a6cbcb: function(e, t) {
                getObject(e).shaderLocation = t >>> 0;
            },
            __wbg_set_size_6f271c4c28c18e1b: function(e, t) {
                getObject(e).size = getObject(t);
            },
            __wbg_set_size_7ec162511b3bad1f: function(e, t) {
                getObject(e).size = t;
            },
            __wbg_set_size_ca765d983baccefd: function(e, t) {
                getObject(e).size = t;
            },
            __wbg_set_src_factor_e96f05a25f8383ed: function(e, t) {
                getObject(e).srcFactor = __wbindgen_enum_GpuBlendFactor[t];
            },
            __wbg_set_stencil_back_5c8971274cbcddcf: function(e, t) {
                getObject(e).stencilBack = getObject(t);
            },
            __wbg_set_stencil_clear_value_89ba97b367fa1385: function(e, t) {
                getObject(e).stencilClearValue = t >>> 0;
            },
            __wbg_set_stencil_front_69f85bf4a6f02cb2: function(e, t) {
                getObject(e).stencilFront = getObject(t);
            },
            __wbg_set_stencil_load_op_a3e2c3a6f20d4da5: function(e, t) {
                getObject(e).stencilLoadOp = __wbindgen_enum_GpuLoadOp[t];
            },
            __wbg_set_stencil_read_mask_86a08afb2665c29b: function(e, t) {
                getObject(e).stencilReadMask = t >>> 0;
            },
            __wbg_set_stencil_read_only_dd058fe8c6a1f6ae: function(e, t) {
                getObject(e).stencilReadOnly = t !== 0;
            },
            __wbg_set_stencil_store_op_87c97415636844c9: function(e, t) {
                getObject(e).stencilStoreOp = __wbindgen_enum_GpuStoreOp[t];
            },
            __wbg_set_stencil_write_mask_7844d8a057a87a58: function(e, t) {
                getObject(e).stencilWriteMask = t >>> 0;
            },
            __wbg_set_step_mode_285f2e428148f3b4: function(e, t) {
                getObject(e).stepMode = __wbindgen_enum_GpuVertexStepMode[t];
            },
            __wbg_set_storage_texture_373b9fc0e534dd33: function(e, t) {
                getObject(e).storageTexture = getObject(t);
            },
            __wbg_set_store_op_94575f47253d270d: function(e, t) {
                getObject(e).storeOp = __wbindgen_enum_GpuStoreOp[t];
            },
            __wbg_set_strip_index_format_aeb7aa0e95e6285d: function(e, t) {
                getObject(e).stripIndexFormat = __wbindgen_enum_GpuIndexFormat[t];
            },
            __wbg_set_targets_93553735385af349: function(e, t) {
                getObject(e).targets = getObject(t);
            },
            __wbg_set_texture_6003a9e79918bf8a: function(e, t) {
                getObject(e).texture = getObject(t);
            },
            __wbg_set_texture_c5a457625c071b25: function(e, t) {
                getObject(e).texture = getObject(t);
            },
            __wbg_set_timestamp_writes_0603b32a31ee6205: function(e, t) {
                getObject(e).timestampWrites = getObject(t);
            },
            __wbg_set_timestamp_writes_f0a806787f57efc4: function(e, t) {
                getObject(e).timestampWrites = getObject(t);
            },
            __wbg_set_topology_5e4eb809635ea291: function(e, t) {
                getObject(e).topology = __wbindgen_enum_GpuPrimitiveTopology[t];
            },
            __wbg_set_type_0e707d4c06fc2b7b: function(e, t) {
                getObject(e).type = __wbindgen_enum_GpuSamplerBindingType[t];
            },
            __wbg_set_type_1631880f22765d5c: function(e, t, n) {
                getObject(e).type = getStringFromWasm0(t, n);
            },
            __wbg_set_type_6fe4c5f460401ee0: function(e, t) {
                getObject(e).type = __wbindgen_enum_GpuBufferBindingType[t];
            },
            __wbg_set_type_d6425b2efca08597: function(e, t) {
                getObject(e).type = __wbindgen_enum_GpuQueryType[t];
            },
            __wbg_set_unclipped_depth_e9a2451e4fa0277a: function(e, t) {
                getObject(e).unclippedDepth = t !== 0;
            },
            __wbg_set_usage_5abd566becc087bb: function(e, t) {
                getObject(e).usage = t >>> 0;
            },
            __wbg_set_usage_61967f166fba5e13: function(e, t) {
                getObject(e).usage = t >>> 0;
            },
            __wbg_set_usage_d0a75d4429098a06: function(e, t) {
                getObject(e).usage = t >>> 0;
            },
            __wbg_set_usage_f0bb325677668e77: function(e, t) {
                getObject(e).usage = t >>> 0;
            },
            __wbg_set_vertex_2525cfcd959b2add: function(e, t) {
                getObject(e).vertex = getObject(t);
            },
            __wbg_set_view_57d232eea19739c3: function(e, t) {
                getObject(e).view = getObject(t);
            },
            __wbg_set_view_dimension_49cfda500f1dea55: function(e, t) {
                getObject(e).viewDimension = __wbindgen_enum_GpuTextureViewDimension[t];
            },
            __wbg_set_view_dimension_a669c29ec3b0813a: function(e, t) {
                getObject(e).viewDimension = __wbindgen_enum_GpuTextureViewDimension[t];
            },
            __wbg_set_view_ffadd767d5e9b839: function(e, t) {
                getObject(e).view = getObject(t);
            },
            __wbg_set_view_formats_70a1fcabcd34282a: function(e, t) {
                getObject(e).viewFormats = getObject(t);
            },
            __wbg_set_view_formats_83865b9cdfda5cb6: function(e, t) {
                getObject(e).viewFormats = getObject(t);
            },
            __wbg_set_visibility_088046ee77c33b1d: function(e, t) {
                getObject(e).visibility = t >>> 0;
            },
            __wbg_set_width_7f65ced2ffeee343: function(e, t) {
                getObject(e).width = t >>> 0;
            },
            __wbg_set_width_ae28c0c10381c919: function(e, t) {
                getObject(e).width = t >>> 0;
            },
            __wbg_set_width_e96e07f8255ad913: function(e, t) {
                getObject(e).width = t >>> 0;
            },
            __wbg_set_write_mask_76041c03688571cd: function(e, t) {
                getObject(e).writeMask = t >>> 0;
            },
            __wbg_set_x_fdd6aca9a2390926: function(e, t) {
                getObject(e).x = t >>> 0;
            },
            __wbg_set_y_410a18c5811abf4c: function(e, t) {
                getObject(e).y = t >>> 0;
            },
            __wbg_set_z_f7f1ae8afd3a9308: function(e, t) {
                getObject(e).z = t >>> 0;
            },
            __wbg_shiftKey_a05e8e0faf05efa4: function(e) {
                return getObject(e).shiftKey;
            },
            __wbg_shiftKey_f1de6c442d6b6562: function(e) {
                return getObject(e).shiftKey;
            },
            __wbg_signal_147ce1e013d09714: function(e) {
                const t = getObject(e).signal;
                return addHeapObject(t);
            },
            __wbg_size_09f35345b4742a87: function(e) {
                return getObject(e).size;
            },
            __wbg_stack_3b0d974bbf31e44f: function(e, t) {
                const n = getObject(t).stack, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_start_4a91c8fa8c677b30: function(e) {
                getObject(e).start();
            },
            __wbg_start_cdaf2919e4402cd3: function() {
                return handleError(function(e, t) {
                    getObject(e).start(t);
                }, arguments);
            },
            __wbg_static_accessor_GLOBAL_THIS_14325d8cca34bb77: function() {
                const e = typeof globalThis > "u" ? null : globalThis;
                return isLikeNone(e) ? 0 : addHeapObject(e);
            },
            __wbg_static_accessor_GLOBAL_f3a1e69f9c5a7e8e: function() {
                const e = typeof global > "u" ? null : global;
                return isLikeNone(e) ? 0 : addHeapObject(e);
            },
            __wbg_static_accessor_SELF_50cdb5b517789aca: function() {
                const e = typeof self > "u" ? null : self;
                return isLikeNone(e) ? 0 : addHeapObject(e);
            },
            __wbg_static_accessor_WINDOW_d6c4126e4c244380: function() {
                const e = typeof window > "u" ? null : window;
                return isLikeNone(e) ? 0 : addHeapObject(e);
            },
            __wbg_statusText_aa4035d260abf7d3: function(e, t) {
                const n = getObject(t).statusText, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_status_acf2080bc55aa324: function(e) {
                return getObject(e).status;
            },
            __wbg_stringify_86f4ab954f88f382: function() {
                return handleError(function(e) {
                    const t = JSON.stringify(getObject(e));
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_style_40817c2a3eeee400: function(e) {
                const t = getObject(e).style;
                return addHeapObject(t);
            },
            __wbg_submit_21302eebe551e30d: function(e, t) {
                getObject(e).submit(getObject(t));
            },
            __wbg_text_b1b162595ee5251d: function() {
                return handleError(function(e) {
                    const t = getObject(e).text();
                    return addHeapObject(t);
                }, arguments);
            },
            __wbg_then_a5a891fa8b478d8d: function(e, t, n) {
                const r = getObject(e).then(getObject(t), getObject(n));
                return addHeapObject(r);
            },
            __wbg_then_d4163530723f56f4: function(e, t, n) {
                const r = getObject(e).then(getObject(t), getObject(n));
                return addHeapObject(r);
            },
            __wbg_then_f1c954fe00733701: function(e, t) {
                const n = getObject(e).then(getObject(t));
                return addHeapObject(n);
            },
            __wbg_toString_7e063c91ac1babf5: function(e) {
                const t = getObject(e).toString();
                return addHeapObject(t);
            },
            __wbg_toString_f237861f7bd022fa: function(e) {
                const t = getObject(e).toString();
                return addHeapObject(t);
            },
            __wbg_unmap_b819b8b402db13cc: function(e) {
                getObject(e).unmap();
            },
            __wbg_unobserve_3d305b3bc952c611: function(e, t) {
                getObject(e).unobserve(getObject(t));
            },
            __wbg_url_b93aabdeacf9fb5f: function(e, t) {
                const n = getObject(t).url, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
            },
            __wbg_usage_34a9bc47ff4a3feb: function(e) {
                return getObject(e).usage;
            },
            __wbg_userAgentData_56b99bbb26031a15: function(e) {
                const t = getObject(e).userAgentData;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_userAgent_b04cea25c65e3f22: function() {
                return handleError(function(e, t) {
                    const n = getObject(t).userAgent, r = passStringToWasm0(n, wasm.__wbindgen_export, wasm.__wbindgen_export2), s = WASM_VECTOR_LEN;
                    getDataViewMemory0().setInt32(e + 4, s, !0), getDataViewMemory0().setInt32(e + 0, r, !0);
                }, arguments);
            },
            __wbg_value_964f2913e4b5b35f: function(e) {
                return getObject(e).value;
            },
            __wbg_visibilityState_0a87747a77012875: function(e) {
                const t = getObject(e).visibilityState;
                return (__wbindgen_enum_VisibilityState.indexOf(t) + 1 || 3) - 1;
            },
            __wbg_warn_3310c7343993c074: function(e) {
                console.warn(getObject(e));
            },
            __wbg_webkitExitFullscreen_6c672a20ba7496d1: function(e) {
                getObject(e).webkitExitFullscreen();
            },
            __wbg_webkitFullscreenElement_5c4a4bf1f0112068: function(e) {
                const t = getObject(e).webkitFullscreenElement;
                return isLikeNone(t) ? 0 : addHeapObject(t);
            },
            __wbg_webkitRequestFullscreen_2f78ba10ef110a8c: function(e) {
                getObject(e).webkitRequestFullscreen();
            },
            __wbg_width_d93904c25e940752: function(e) {
                return getObject(e).width;
            },
            __wbg_writeBuffer_c6919ed0c4aaeef5: function() {
                return handleError(function(e, t, n, r, s, o) {
                    getObject(e).writeBuffer(getObject(t), n, getObject(r), s, o);
                }, arguments);
            },
            __wbg_writeTexture_340cfbecd9544755: function() {
                return handleError(function(e, t, n, r, s) {
                    getObject(e).writeTexture(getObject(t), getObject(n), getObject(r), getObject(s));
                }, arguments);
            },
            __wbg_x_7b2aa2bd09387eb0: function(e) {
                return getObject(e).x;
            },
            __wbg_y_f721c65554bf9652: function(e) {
                return getObject(e).y;
            },
            __wbindgen_cast_0000000000000001: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_42755, __wasm_bindgen_func_elem_42756);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000002: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000003: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6884);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000004: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_3);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000005: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_4);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000006: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_5);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000007: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_6);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000008: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_7);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000009: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_8);
                return addHeapObject(n);
            },
            __wbindgen_cast_000000000000000a: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6882_9);
                return addHeapObject(n);
            },
            __wbindgen_cast_000000000000000b: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_6881, __wasm_bindgen_func_elem_6890);
                return addHeapObject(n);
            },
            __wbindgen_cast_000000000000000c: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_75022, __wasm_bindgen_func_elem_75023);
                return addHeapObject(n);
            },
            __wbindgen_cast_000000000000000d: function(e, t) {
                const n = makeMutClosure(e, t, wasm.__wasm_bindgen_func_elem_99787, __wasm_bindgen_func_elem_99788);
                return addHeapObject(n);
            },
            __wbindgen_cast_000000000000000e: function(e) {
                return addHeapObject(e);
            },
            __wbindgen_cast_000000000000000f: function(e, t) {
                const n = getArrayU8FromWasm0(e, t);
                return addHeapObject(n);
            },
            __wbindgen_cast_0000000000000010: function(e, t) {
                const n = getStringFromWasm0(e, t);
                return addHeapObject(n);
            },
            __wbindgen_object_clone_ref: function(e) {
                const t = getObject(e);
                return addHeapObject(t);
            },
            __wbindgen_object_drop_ref: function(e) {
                takeObject(e);
            }
        };
        return {
            __proto__: null,
            "./game_bg.js": import0
        };
    }
    const lAudioContext = typeof AudioContext < "u" ? AudioContext : typeof webkitAudioContext < "u" ? webkitAudioContext : void 0;
    function __wasm_bindgen_func_elem_6890(e, t) {
        wasm.__wasm_bindgen_func_elem_6890(e, t);
    }
    function __wasm_bindgen_func_elem_75023(e, t) {
        wasm.__wasm_bindgen_func_elem_75023(e, t);
    }
    function __wasm_bindgen_func_elem_42756(e, t, n) {
        wasm.__wasm_bindgen_func_elem_42756(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_3(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_3(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_4(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_4(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_5(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_5(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_6(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_6(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_7(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_7(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_8(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_8(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6882_9(e, t, n) {
        wasm.__wasm_bindgen_func_elem_6882_9(e, t, addHeapObject(n));
    }
    function __wasm_bindgen_func_elem_6884(e, t, n, r) {
        wasm.__wasm_bindgen_func_elem_6884(e, t, addHeapObject(n), addHeapObject(r));
    }
    function __wasm_bindgen_func_elem_99788(e, t, n) {
        try {
            const o = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_99788(o, e, t, addHeapObject(n));
            var r = getDataViewMemory0().getInt32(o + 0, !0), s = getDataViewMemory0().getInt32(o + 4, !0);
            if (s) throw takeObject(r);
        } finally{
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    const __wbindgen_enum_GamepadMappingType = [
        "",
        "standard"
    ], __wbindgen_enum_GpuAddressMode = [
        "clamp-to-edge",
        "repeat",
        "mirror-repeat"
    ], __wbindgen_enum_GpuBlendFactor = [
        "zero",
        "one",
        "src",
        "one-minus-src",
        "src-alpha",
        "one-minus-src-alpha",
        "dst",
        "one-minus-dst",
        "dst-alpha",
        "one-minus-dst-alpha",
        "src-alpha-saturated",
        "constant",
        "one-minus-constant",
        "src1",
        "one-minus-src1",
        "src1-alpha",
        "one-minus-src1-alpha"
    ], __wbindgen_enum_GpuBlendOperation = [
        "add",
        "subtract",
        "reverse-subtract",
        "min",
        "max"
    ], __wbindgen_enum_GpuBufferBindingType = [
        "uniform",
        "storage",
        "read-only-storage"
    ], __wbindgen_enum_GpuCanvasAlphaMode = [
        "opaque",
        "premultiplied"
    ], __wbindgen_enum_GpuCompareFunction = [
        "never",
        "less",
        "equal",
        "less-equal",
        "greater",
        "not-equal",
        "greater-equal",
        "always"
    ], __wbindgen_enum_GpuCullMode = [
        "none",
        "front",
        "back"
    ], __wbindgen_enum_GpuErrorFilter = [
        "validation",
        "out-of-memory",
        "internal"
    ], __wbindgen_enum_GpuFilterMode = [
        "nearest",
        "linear"
    ], __wbindgen_enum_GpuFrontFace = [
        "ccw",
        "cw"
    ], __wbindgen_enum_GpuIndexFormat = [
        "uint16",
        "uint32"
    ], __wbindgen_enum_GpuLoadOp = [
        "load",
        "clear"
    ], __wbindgen_enum_GpuMipmapFilterMode = [
        "nearest",
        "linear"
    ], __wbindgen_enum_GpuPowerPreference = [
        "low-power",
        "high-performance"
    ], __wbindgen_enum_GpuPrimitiveTopology = [
        "point-list",
        "line-list",
        "line-strip",
        "triangle-list",
        "triangle-strip"
    ], __wbindgen_enum_GpuQueryType = [
        "occlusion",
        "timestamp"
    ], __wbindgen_enum_GpuSamplerBindingType = [
        "filtering",
        "non-filtering",
        "comparison"
    ], __wbindgen_enum_GpuStencilOperation = [
        "keep",
        "zero",
        "replace",
        "invert",
        "increment-clamp",
        "decrement-clamp",
        "increment-wrap",
        "decrement-wrap"
    ], __wbindgen_enum_GpuStorageTextureAccess = [
        "write-only",
        "read-only",
        "read-write"
    ], __wbindgen_enum_GpuStoreOp = [
        "store",
        "discard"
    ], __wbindgen_enum_GpuTextureAspect = [
        "all",
        "stencil-only",
        "depth-only"
    ], __wbindgen_enum_GpuTextureDimension = [
        "1d",
        "2d",
        "3d"
    ], __wbindgen_enum_GpuTextureFormat = [
        "r8unorm",
        "r8snorm",
        "r8uint",
        "r8sint",
        "r16uint",
        "r16sint",
        "r16float",
        "rg8unorm",
        "rg8snorm",
        "rg8uint",
        "rg8sint",
        "r32uint",
        "r32sint",
        "r32float",
        "rg16uint",
        "rg16sint",
        "rg16float",
        "rgba8unorm",
        "rgba8unorm-srgb",
        "rgba8snorm",
        "rgba8uint",
        "rgba8sint",
        "bgra8unorm",
        "bgra8unorm-srgb",
        "rgb9e5ufloat",
        "rgb10a2uint",
        "rgb10a2unorm",
        "rg11b10ufloat",
        "rg32uint",
        "rg32sint",
        "rg32float",
        "rgba16uint",
        "rgba16sint",
        "rgba16float",
        "rgba32uint",
        "rgba32sint",
        "rgba32float",
        "stencil8",
        "depth16unorm",
        "depth24plus",
        "depth24plus-stencil8",
        "depth32float",
        "depth32float-stencil8",
        "bc1-rgba-unorm",
        "bc1-rgba-unorm-srgb",
        "bc2-rgba-unorm",
        "bc2-rgba-unorm-srgb",
        "bc3-rgba-unorm",
        "bc3-rgba-unorm-srgb",
        "bc4-r-unorm",
        "bc4-r-snorm",
        "bc5-rg-unorm",
        "bc5-rg-snorm",
        "bc6h-rgb-ufloat",
        "bc6h-rgb-float",
        "bc7-rgba-unorm",
        "bc7-rgba-unorm-srgb",
        "etc2-rgb8unorm",
        "etc2-rgb8unorm-srgb",
        "etc2-rgb8a1unorm",
        "etc2-rgb8a1unorm-srgb",
        "etc2-rgba8unorm",
        "etc2-rgba8unorm-srgb",
        "eac-r11unorm",
        "eac-r11snorm",
        "eac-rg11unorm",
        "eac-rg11snorm",
        "astc-4x4-unorm",
        "astc-4x4-unorm-srgb",
        "astc-5x4-unorm",
        "astc-5x4-unorm-srgb",
        "astc-5x5-unorm",
        "astc-5x5-unorm-srgb",
        "astc-6x5-unorm",
        "astc-6x5-unorm-srgb",
        "astc-6x6-unorm",
        "astc-6x6-unorm-srgb",
        "astc-8x5-unorm",
        "astc-8x5-unorm-srgb",
        "astc-8x6-unorm",
        "astc-8x6-unorm-srgb",
        "astc-8x8-unorm",
        "astc-8x8-unorm-srgb",
        "astc-10x5-unorm",
        "astc-10x5-unorm-srgb",
        "astc-10x6-unorm",
        "astc-10x6-unorm-srgb",
        "astc-10x8-unorm",
        "astc-10x8-unorm-srgb",
        "astc-10x10-unorm",
        "astc-10x10-unorm-srgb",
        "astc-12x10-unorm",
        "astc-12x10-unorm-srgb",
        "astc-12x12-unorm",
        "astc-12x12-unorm-srgb"
    ], __wbindgen_enum_GpuTextureSampleType = [
        "float",
        "unfilterable-float",
        "depth",
        "sint",
        "uint"
    ], __wbindgen_enum_GpuTextureViewDimension = [
        "1d",
        "2d",
        "2d-array",
        "cube",
        "cube-array",
        "3d"
    ], __wbindgen_enum_GpuVertexFormat = [
        "uint8",
        "uint8x2",
        "uint8x4",
        "sint8",
        "sint8x2",
        "sint8x4",
        "unorm8",
        "unorm8x2",
        "unorm8x4",
        "snorm8",
        "snorm8x2",
        "snorm8x4",
        "uint16",
        "uint16x2",
        "uint16x4",
        "sint16",
        "sint16x2",
        "sint16x4",
        "unorm16",
        "unorm16x2",
        "unorm16x4",
        "snorm16",
        "snorm16x2",
        "snorm16x4",
        "float16",
        "float16x2",
        "float16x4",
        "float32",
        "float32x2",
        "float32x3",
        "float32x4",
        "uint32",
        "uint32x2",
        "uint32x3",
        "uint32x4",
        "sint32",
        "sint32x2",
        "sint32x3",
        "sint32x4",
        "unorm10-10-10-2",
        "unorm8x4-bgra"
    ], __wbindgen_enum_GpuVertexStepMode = [
        "vertex",
        "instance"
    ], __wbindgen_enum_ResizeObserverBoxOptions = [
        "border-box",
        "content-box",
        "device-pixel-content-box"
    ], __wbindgen_enum_VisibilityState = [
        "hidden",
        "visible"
    ];
    function addHeapObject(e) {
        heap_next === heap.length && heap.push(heap.length + 1);
        const t = heap_next;
        return heap_next = heap[t], heap[t] = e, t;
    }
    const CLOSURE_DTORS = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function debugString(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
            const s = e.description;
            return s == null ? "Symbol" : `Symbol(${s})`;
        }
        if (t == "function") {
            const s = e.name;
            return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
        }
        if (Array.isArray(e)) {
            const s = e.length;
            let o = "[";
            s > 0 && (o += debugString(e[0]));
            for(let l = 1; l < s; l++)o += ", " + debugString(e[l]);
            return o += "]", o;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n && n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
    }
    function dropObject(e) {
        e < 1028 || (heap[e] = heap_next, heap_next = e);
    }
    function getArrayF32FromWasm0(e, t) {
        return e = e >>> 0, getFloat32ArrayMemory0().subarray(e / 4, e / 4 + t);
    }
    function getArrayU32FromWasm0(e, t) {
        return e = e >>> 0, getUint32ArrayMemory0().subarray(e / 4, e / 4 + t);
    }
    function getArrayU8FromWasm0(e, t) {
        return e = e >>> 0, getUint8ArrayMemory0().subarray(e / 1, e / 1 + t);
    }
    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        return (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === !0 || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) && (cachedDataViewMemory0 = new DataView(wasm.memory.buffer)), cachedDataViewMemory0;
    }
    let cachedFloat32ArrayMemory0 = null;
    function getFloat32ArrayMemory0() {
        return (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) && (cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer)), cachedFloat32ArrayMemory0;
    }
    function getStringFromWasm0(e, t) {
        return e = e >>> 0, decodeText(e, t);
    }
    let cachedUint32ArrayMemory0 = null;
    function getUint32ArrayMemory0() {
        return (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) && (cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer)), cachedUint32ArrayMemory0;
    }
    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        return (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) && (cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer)), cachedUint8ArrayMemory0;
    }
    function getObject(e) {
        return heap[e];
    }
    function handleError(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            wasm.__wbindgen_export3(addHeapObject(n));
        }
    }
    let heap = new Array(1024).fill(void 0);
    heap.push(void 0, null, !0, !1);
    let heap_next = heap.length;
    function isLikeNone(e) {
        return e == null;
    }
    function makeMutClosure(e, t, n, r) {
        const s = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
        }, o = (...l)=>{
            s.cnt++;
            const _ = s.a;
            s.a = 0;
            try {
                return r(_, s.b, ...l);
            } finally{
                s.a = _, o._wbg_cb_unref();
            }
        };
        return o._wbg_cb_unref = ()=>{
            --s.cnt === 0 && (s.dtor(s.a, s.b), s.a = 0, CLOSURE_DTORS.unregister(s));
        }, CLOSURE_DTORS.register(o, s, s), o;
    }
    function passStringToWasm0(e, t, n) {
        if (n === void 0) {
            const _ = cachedTextEncoder.encode(e), p = t(_.length, 1) >>> 0;
            return getUint8ArrayMemory0().subarray(p, p + _.length).set(_), WASM_VECTOR_LEN = _.length, p;
        }
        let r = e.length, s = t(r, 1) >>> 0;
        const o = getUint8ArrayMemory0();
        let l = 0;
        for(; l < r; l++){
            const _ = e.charCodeAt(l);
            if (_ > 127) break;
            o[s + l] = _;
        }
        if (l !== r) {
            l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
            const _ = getUint8ArrayMemory0().subarray(s + l, s + r), p = cachedTextEncoder.encodeInto(e, _);
            l += p.written, s = n(s, r, l, 1) >>> 0;
        }
        return WASM_VECTOR_LEN = l, s;
    }
    function takeObject(e) {
        const t = getObject(e);
        return dropObject(e), t;
    }
    let cachedTextDecoder = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    cachedTextDecoder.decode();
    const MAX_SAFARI_DECODE_BYTES = 2146435072;
    let numBytesDecoded = 0;
    function decodeText(e, t) {
        return numBytesDecoded += t, numBytesDecoded >= MAX_SAFARI_DECODE_BYTES && (cachedTextDecoder = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), cachedTextDecoder.decode(), numBytesDecoded = t), cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(e, e + t));
    }
    const cachedTextEncoder = new TextEncoder;
    "encodeInto" in cachedTextEncoder || (cachedTextEncoder.encodeInto = function(e, t) {
        const n = cachedTextEncoder.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    });
    let WASM_VECTOR_LEN = 0, wasm;
    function __wbg_finalize_init(e, t) {
        return wasm = e.exports, cachedDataViewMemory0 = null, cachedFloat32ArrayMemory0 = null, cachedUint32ArrayMemory0 = null, cachedUint8ArrayMemory0 = null, wasm;
    }
    async function __wbg_load(e, t) {
        if (typeof Response == "function" && e instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(e, t);
            } catch (s) {
                if (e.ok && n(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
                else throw s;
            }
            const r = await e.arrayBuffer();
            return await WebAssembly.instantiate(r, t);
        } else {
            const r = await WebAssembly.instantiate(e, t);
            return r instanceof WebAssembly.Instance ? {
                instance: r,
                module: e
            } : r;
        }
        function n(r) {
            switch(r){
                case "basic":
                case "cors":
                case "default":
                    return !0;
            }
            return !1;
        }
    }
    async function __wbg_init(e) {
        if (wasm !== void 0) return wasm;
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("/arcade-null-session/assets/game_bg-CJMQce_P.wasm", import.meta.url));
        const t = __wbg_get_imports();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: n, module: r } = await __wbg_load(await e, t);
        return __wbg_finalize_init(n);
    }
    async function main() {
        console.log("[null-session] Initializing...");
        try {
            await __wbg_init(), console.log("[null-session] WASM module loaded"), start_app(), console.log("[null-session] Bevy app started");
            const e = document.getElementById("loading-screen");
            e && (e.style.display = "none");
        } catch (e) {
            console.error("[null-session] Initialization failed:", e);
            const t = document.querySelector("#loading-screen .label");
            t && (t.textContent = "INITIALIZATION FAILED");
        }
    }
    main();
})();
export { EventEmitter as E, PublicKey as P, SolanaSignAndSendTransaction as S, Transaction as T, VersionedTransaction as V, SolanaSignTransaction as a, SolanaSignMessage as b, getDefaultExportFromCjs as g, __tla };
