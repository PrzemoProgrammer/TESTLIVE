import "./url-Czix6NCG.js";
import { E as qe } from "./eventemitter3-Bav5T-Ru.js";
import { e as Va } from "./earcut-DOWYkTK5.js";
import { i as xr } from "./ismobilejs-CHLuctl-.js";
var ge = ((s) => (
    (s[(s.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
    (s[(s.WEBGL = 1)] = "WEBGL"),
    (s[(s.WEBGL2 = 2)] = "WEBGL2"),
    s
  ))(ge || {}),
  yn = ((s) => (
    (s[(s.UNKNOWN = 0)] = "UNKNOWN"),
    (s[(s.WEBGL = 1)] = "WEBGL"),
    (s[(s.CANVAS = 2)] = "CANVAS"),
    s
  ))(yn || {}),
  As = ((s) => (
    (s[(s.COLOR = 16384)] = "COLOR"),
    (s[(s.DEPTH = 256)] = "DEPTH"),
    (s[(s.STENCIL = 1024)] = "STENCIL"),
    s
  ))(As || {}),
  L = ((s) => (
    (s[(s.NORMAL = 0)] = "NORMAL"),
    (s[(s.ADD = 1)] = "ADD"),
    (s[(s.MULTIPLY = 2)] = "MULTIPLY"),
    (s[(s.SCREEN = 3)] = "SCREEN"),
    (s[(s.OVERLAY = 4)] = "OVERLAY"),
    (s[(s.DARKEN = 5)] = "DARKEN"),
    (s[(s.LIGHTEN = 6)] = "LIGHTEN"),
    (s[(s.COLOR_DODGE = 7)] = "COLOR_DODGE"),
    (s[(s.COLOR_BURN = 8)] = "COLOR_BURN"),
    (s[(s.HARD_LIGHT = 9)] = "HARD_LIGHT"),
    (s[(s.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
    (s[(s.DIFFERENCE = 11)] = "DIFFERENCE"),
    (s[(s.EXCLUSION = 12)] = "EXCLUSION"),
    (s[(s.HUE = 13)] = "HUE"),
    (s[(s.SATURATION = 14)] = "SATURATION"),
    (s[(s.COLOR = 15)] = "COLOR"),
    (s[(s.LUMINOSITY = 16)] = "LUMINOSITY"),
    (s[(s.NORMAL_NPM = 17)] = "NORMAL_NPM"),
    (s[(s.ADD_NPM = 18)] = "ADD_NPM"),
    (s[(s.SCREEN_NPM = 19)] = "SCREEN_NPM"),
    (s[(s.NONE = 20)] = "NONE"),
    (s[(s.SRC_OVER = 0)] = "SRC_OVER"),
    (s[(s.SRC_IN = 21)] = "SRC_IN"),
    (s[(s.SRC_OUT = 22)] = "SRC_OUT"),
    (s[(s.SRC_ATOP = 23)] = "SRC_ATOP"),
    (s[(s.DST_OVER = 24)] = "DST_OVER"),
    (s[(s.DST_IN = 25)] = "DST_IN"),
    (s[(s.DST_OUT = 26)] = "DST_OUT"),
    (s[(s.DST_ATOP = 27)] = "DST_ATOP"),
    (s[(s.ERASE = 26)] = "ERASE"),
    (s[(s.SUBTRACT = 28)] = "SUBTRACT"),
    (s[(s.XOR = 29)] = "XOR"),
    s
  ))(L || {}),
  Pt = ((s) => (
    (s[(s.POINTS = 0)] = "POINTS"),
    (s[(s.LINES = 1)] = "LINES"),
    (s[(s.LINE_LOOP = 2)] = "LINE_LOOP"),
    (s[(s.LINE_STRIP = 3)] = "LINE_STRIP"),
    (s[(s.TRIANGLES = 4)] = "TRIANGLES"),
    (s[(s.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
    (s[(s.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"),
    s
  ))(Pt || {}),
  T = ((s) => (
    (s[(s.RGBA = 6408)] = "RGBA"),
    (s[(s.RGB = 6407)] = "RGB"),
    (s[(s.RG = 33319)] = "RG"),
    (s[(s.RED = 6403)] = "RED"),
    (s[(s.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
    (s[(s.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
    (s[(s.RG_INTEGER = 33320)] = "RG_INTEGER"),
    (s[(s.RED_INTEGER = 36244)] = "RED_INTEGER"),
    (s[(s.ALPHA = 6406)] = "ALPHA"),
    (s[(s.LUMINANCE = 6409)] = "LUMINANCE"),
    (s[(s.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
    (s[(s.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
    (s[(s.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"),
    s
  ))(T || {}),
  Ce = ((s) => (
    (s[(s.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
    (s[(s.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
    (s[(s.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
    (s[(s.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
      "TEXTURE_CUBE_MAP_POSITIVE_X"),
    (s[(s.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_X"),
    (s[(s.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Y"),
    (s[(s.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
    (s[(s.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Z"),
    (s[(s.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Z"),
    s
  ))(Ce || {}),
  D = ((s) => (
    (s[(s.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
    (s[(s.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
    (s[(s.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
    (s[(s.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
    (s[(s.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
    (s[(s.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
    (s[(s.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
      "UNSIGNED_INT_10F_11F_11F_REV"),
    (s[(s.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
      "UNSIGNED_INT_2_10_10_10_REV"),
    (s[(s.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
    (s[(s.UNSIGNED_INT_5_9_9_9_REV = 35902)] = "UNSIGNED_INT_5_9_9_9_REV"),
    (s[(s.BYTE = 5120)] = "BYTE"),
    (s[(s.SHORT = 5122)] = "SHORT"),
    (s[(s.INT = 5124)] = "INT"),
    (s[(s.FLOAT = 5126)] = "FLOAT"),
    (s[(s.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
      "FLOAT_32_UNSIGNED_INT_24_8_REV"),
    (s[(s.HALF_FLOAT = 36193)] = "HALF_FLOAT"),
    s
  ))(D || {}),
  C = ((s) => (
    (s[(s.FLOAT = 0)] = "FLOAT"),
    (s[(s.INT = 1)] = "INT"),
    (s[(s.UINT = 2)] = "UINT"),
    s
  ))(C || {}),
  Nt = ((s) => (
    (s[(s.NEAREST = 0)] = "NEAREST"), (s[(s.LINEAR = 1)] = "LINEAR"), s
  ))(Nt || {}),
  qt = ((s) => (
    (s[(s.CLAMP = 33071)] = "CLAMP"),
    (s[(s.REPEAT = 10497)] = "REPEAT"),
    (s[(s.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"),
    s
  ))(qt || {}),
  Dt = ((s) => (
    (s[(s.OFF = 0)] = "OFF"),
    (s[(s.POW2 = 1)] = "POW2"),
    (s[(s.ON = 2)] = "ON"),
    (s[(s.ON_MANUAL = 3)] = "ON_MANUAL"),
    s
  ))(Dt || {}),
  lt = ((s) => (
    (s[(s.NPM = 0)] = "NPM"),
    (s[(s.UNPACK = 1)] = "UNPACK"),
    (s[(s.PMA = 2)] = "PMA"),
    (s[(s.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
    (s[(s.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
    (s[(s.PREMULTIPLIED_ALPHA = 2)] = "PREMULTIPLIED_ALPHA"),
    s
  ))(lt || {}),
  Rt = ((s) => (
    (s[(s.NO = 0)] = "NO"),
    (s[(s.YES = 1)] = "YES"),
    (s[(s.AUTO = 2)] = "AUTO"),
    (s[(s.BLEND = 0)] = "BLEND"),
    (s[(s.CLEAR = 1)] = "CLEAR"),
    (s[(s.BLIT = 2)] = "BLIT"),
    s
  ))(Rt || {}),
  nr = ((s) => ((s[(s.AUTO = 0)] = "AUTO"), (s[(s.MANUAL = 1)] = "MANUAL"), s))(
    nr || {}
  ),
  pt = ((s) => (
    (s.LOW = "lowp"), (s.MEDIUM = "mediump"), (s.HIGH = "highp"), s
  ))(pt || {}),
  st = ((s) => (
    (s[(s.NONE = 0)] = "NONE"),
    (s[(s.SCISSOR = 1)] = "SCISSOR"),
    (s[(s.STENCIL = 2)] = "STENCIL"),
    (s[(s.SPRITE = 3)] = "SPRITE"),
    (s[(s.COLOR = 4)] = "COLOR"),
    s
  ))(st || {}),
  et = ((s) => (
    (s[(s.NONE = 0)] = "NONE"),
    (s[(s.LOW = 2)] = "LOW"),
    (s[(s.MEDIUM = 4)] = "MEDIUM"),
    (s[(s.HIGH = 8)] = "HIGH"),
    s
  ))(et || {}),
  Mt = ((s) => (
    (s[(s.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER"),
    (s[(s.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
    (s[(s.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"),
    s
  ))(Mt || {});
const za = {
    createCanvas: (s, t) => {
      const e = document.createElement("canvas");
      return (e.width = s), (e.height = t), e;
    },
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (s, t) => fetch(s, t),
    parseXML: (s) => new DOMParser().parseFromString(s, "text/xml"),
  },
  I = { ADAPTER: za, RESOLUTION: 1, CREATE_IMAGE_BITMAP: !1, ROUND_PIXELS: !1 },
  Wa = xr.default ?? xr,
  Ot = Wa(globalThis.navigator);
I.RETINA_PREFIX = /@([0-9\.]+)x/;
I.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
const yr = {};
function z(s, t, e = 3) {
  if (yr[t]) return;
  let i = new Error().stack;
  typeof i > "u"
    ? console.warn(
        "PixiJS Deprecation Warning: ",
        `${t}
Deprecated since v${s}`
      )
    : ((i = i
        .split(
          `
`
        )
        .splice(e).join(`
`)),
      console.groupCollapsed
        ? (console.groupCollapsed(
            "%cPixiJS Deprecation Warning: %c%s",
            "color:#614108;background:#fffbe6",
            "font-weight:normal;color:#614108;background:#fffbe6",
            `${t}
Deprecated since v${s}`
          ),
          console.warn(i),
          console.groupEnd())
        : (console.warn(
            "PixiJS Deprecation Warning: ",
            `${t}
Deprecated since v${s}`
          ),
          console.warn(i))),
    (yr[t] = !0);
}
function mt(s) {
  if (typeof s != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(s)}`);
}
function Ne(s) {
  return s.split("?")[0].split("#")[0];
}
function $a(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ja(s, t, e) {
  return s.replace(new RegExp($a(t), "g"), e);
}
function Ya(s, t) {
  let e = "",
    i = 0,
    r = -1,
    n = 0,
    a = -1;
  for (let o = 0; o <= s.length; ++o) {
    if (o < s.length) a = s.charCodeAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(r === o - 1 || n === 1))
        if (r !== o - 1 && n === 2) {
          if (
            e.length < 2 ||
            i !== 2 ||
            e.charCodeAt(e.length - 1) !== 46 ||
            e.charCodeAt(e.length - 2) !== 46
          ) {
            if (e.length > 2) {
              const h = e.lastIndexOf("/");
              if (h !== e.length - 1) {
                h === -1
                  ? ((e = ""), (i = 0))
                  : ((e = e.slice(0, h)),
                    (i = e.length - 1 - e.lastIndexOf("/"))),
                  (r = o),
                  (n = 0);
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              (e = ""), (i = 0), (r = o), (n = 0);
              continue;
            }
          }
          t && (e.length > 0 ? (e += "/..") : (e = ".."), (i = 2));
        } else
          e.length > 0
            ? (e += `/${s.slice(r + 1, o)}`)
            : (e = s.slice(r + 1, o)),
            (i = o - r - 1);
      (r = o), (n = 0);
    } else a === 46 && n !== -1 ? ++n : (n = -1);
  }
  return e;
}
const nt = {
  toPosix(s) {
    return ja(s, "\\", "/");
  },
  isUrl(s) {
    return /^https?:/.test(this.toPosix(s));
  },
  isDataUrl(s) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
      s
    );
  },
  isBlobUrl(s) {
    return s.startsWith("blob:");
  },
  hasProtocol(s) {
    return /^[^/:]+:/.test(this.toPosix(s));
  },
  getProtocol(s) {
    mt(s), (s = this.toPosix(s));
    const t = /^file:\/\/\//.exec(s);
    if (t) return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(s);
    return e ? e[0] : "";
  },
  toAbsolute(s, t, e) {
    if ((mt(s), this.isDataUrl(s) || this.isBlobUrl(s))) return s;
    const i = Ne(this.toPosix(t ?? I.ADAPTER.getBaseUrl())),
      r = Ne(this.toPosix(e ?? this.rootname(i)));
    return (
      (s = this.toPosix(s)),
      s.startsWith("/")
        ? nt.join(r, s.slice(1))
        : this.isAbsolute(s)
        ? s
        : this.join(i, s)
    );
  },
  normalize(s) {
    if ((mt(s), s.length === 0)) return ".";
    if (this.isDataUrl(s) || this.isBlobUrl(s)) return s;
    s = this.toPosix(s);
    let t = "";
    const e = s.startsWith("/");
    this.hasProtocol(s) && ((t = this.rootname(s)), (s = s.slice(t.length)));
    const i = s.endsWith("/");
    return (
      (s = Ya(s, !1)), s.length > 0 && i && (s += "/"), e ? `/${s}` : t + s
    );
  },
  isAbsolute(s) {
    return (
      mt(s), (s = this.toPosix(s)), this.hasProtocol(s) ? !0 : s.startsWith("/")
    );
  },
  join(...s) {
    if (s.length === 0) return ".";
    let t;
    for (let e = 0; e < s.length; ++e) {
      const i = s[e];
      if ((mt(i), i.length > 0))
        if (t === void 0) t = i;
        else {
          const r = s[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(r).toLowerCase())
            ? (t += `/../${i}`)
            : (t += `/${i}`);
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  dirname(s) {
    if ((mt(s), s.length === 0)) return ".";
    s = this.toPosix(s);
    let t = s.charCodeAt(0);
    const e = t === 47;
    let i = -1,
      r = !0;
    const n = this.getProtocol(s),
      a = s;
    s = s.slice(n.length);
    for (let o = s.length - 1; o >= 1; --o)
      if (((t = s.charCodeAt(o)), t === 47)) {
        if (!r) {
          i = o;
          break;
        }
      } else r = !1;
    return i === -1
      ? e
        ? "/"
        : this.isUrl(a)
        ? n + s
        : n
      : e && i === 1
      ? "//"
      : n + s.slice(0, i);
  },
  rootname(s) {
    mt(s), (s = this.toPosix(s));
    let t = "";
    if (
      (s.startsWith("/") ? (t = "/") : (t = this.getProtocol(s)), this.isUrl(s))
    ) {
      const e = s.indexOf("/", t.length);
      e !== -1 ? (t = s.slice(0, e)) : (t = s), t.endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(s, t) {
    mt(s), t && mt(t), (s = Ne(this.toPosix(s)));
    let e = 0,
      i = -1,
      r = !0,
      n;
    if (t !== void 0 && t.length > 0 && t.length <= s.length) {
      if (t.length === s.length && t === s) return "";
      let a = t.length - 1,
        o = -1;
      for (n = s.length - 1; n >= 0; --n) {
        const h = s.charCodeAt(n);
        if (h === 47) {
          if (!r) {
            e = n + 1;
            break;
          }
        } else
          o === -1 && ((r = !1), (o = n + 1)),
            a >= 0 &&
              (h === t.charCodeAt(a)
                ? --a === -1 && (i = n)
                : ((a = -1), (i = o)));
      }
      return e === i ? (i = o) : i === -1 && (i = s.length), s.slice(e, i);
    }
    for (n = s.length - 1; n >= 0; --n)
      if (s.charCodeAt(n) === 47) {
        if (!r) {
          e = n + 1;
          break;
        }
      } else i === -1 && ((r = !1), (i = n + 1));
    return i === -1 ? "" : s.slice(e, i);
  },
  extname(s) {
    mt(s), (s = Ne(this.toPosix(s)));
    let t = -1,
      e = 0,
      i = -1,
      r = !0,
      n = 0;
    for (let a = s.length - 1; a >= 0; --a) {
      const o = s.charCodeAt(a);
      if (o === 47) {
        if (!r) {
          e = a + 1;
          break;
        }
        continue;
      }
      i === -1 && ((r = !1), (i = a + 1)),
        o === 46
          ? t === -1
            ? (t = a)
            : n !== 1 && (n = 1)
          : t !== -1 && (n = -1);
    }
    return t === -1 ||
      i === -1 ||
      n === 0 ||
      (n === 1 && t === i - 1 && t === e + 1)
      ? ""
      : s.slice(t, i);
  },
  parse(s) {
    mt(s);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (s.length === 0) return t;
    s = Ne(this.toPosix(s));
    let e = s.charCodeAt(0);
    const i = this.isAbsolute(s);
    let r;
    (t.root = this.rootname(s)), i || this.hasProtocol(s) ? (r = 1) : (r = 0);
    let n = -1,
      a = 0,
      o = -1,
      h = !0,
      l = s.length - 1,
      d = 0;
    for (; l >= r; --l) {
      if (((e = s.charCodeAt(l)), e === 47)) {
        if (!h) {
          a = l + 1;
          break;
        }
        continue;
      }
      o === -1 && ((h = !1), (o = l + 1)),
        e === 46
          ? n === -1
            ? (n = l)
            : d !== 1 && (d = 1)
          : n !== -1 && (d = -1);
    }
    return (
      n === -1 || o === -1 || d === 0 || (d === 1 && n === o - 1 && n === a + 1)
        ? o !== -1 &&
          (a === 0 && i
            ? (t.base = t.name = s.slice(1, o))
            : (t.base = t.name = s.slice(a, o)))
        : (a === 0 && i
            ? ((t.name = s.slice(1, n)), (t.base = s.slice(1, o)))
            : ((t.name = s.slice(a, n)), (t.base = s.slice(a, o))),
          (t.ext = s.slice(n, o))),
      (t.dir = this.dirname(s)),
      t
    );
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"],
};
let Ji;
async function qa() {
  return (
    Ji ??
      (Ji = (async () => {
        var n;
        const s = document.createElement("canvas").getContext("webgl");
        if (!s) return lt.UNPACK;
        const t = await new Promise((a) => {
          const o = document.createElement("video");
          (o.onloadeddata = () => a(o)),
            (o.onerror = () => a(null)),
            (o.autoplay = !1),
            (o.crossOrigin = "anonymous"),
            (o.preload = "auto"),
            (o.src =
              "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM="),
            o.load();
        });
        if (!t) return lt.UNPACK;
        const e = s.createTexture();
        s.bindTexture(s.TEXTURE_2D, e);
        const i = s.createFramebuffer();
        s.bindFramebuffer(s.FRAMEBUFFER, i),
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_2D,
            e,
            0
          ),
          s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, s.NONE),
          s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, t);
        const r = new Uint8Array(4);
        return (
          s.readPixels(0, 0, 1, 1, s.RGBA, s.UNSIGNED_BYTE, r),
          s.deleteFramebuffer(i),
          s.deleteTexture(e),
          (n = s.getExtension("WEBGL_lose_context")) == null || n.loseContext(),
          r[0] <= r[3] ? lt.PMA : lt.UNPACK
        );
      })()),
    Ji
  );
}
let Qi;
function Ka() {
  return (
    typeof Qi > "u" &&
      (Qi = (function () {
        var t;
        const s = {
          stencil: !0,
          failIfMajorPerformanceCaveat: I.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
        };
        try {
          if (!I.ADAPTER.getWebGLRenderingContext()) return !1;
          const e = I.ADAPTER.createCanvas();
          let i =
            e.getContext("webgl", s) || e.getContext("experimental-webgl", s);
          const r = !!(
            (t = i == null ? void 0 : i.getContextAttributes()) != null &&
            t.stencil
          );
          if (i) {
            const n = i.getExtension("WEBGL_lose_context");
            n && n.loseContext();
          }
          return (i = null), r;
        } catch {
          return !1;
        }
      })()),
    Qi
  );
}
var Za = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  Lt = function (s) {
    return typeof s == "string" ? s.length > 0 : typeof s == "number";
  },
  rt = function (s, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = Math.pow(10, t)),
      Math.round(e * s) / e + 0
    );
  },
  ft = function (s, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = 1),
      s > e ? e : s > t ? s : t
    );
  },
  vn = function (s) {
    return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360;
  },
  vr = function (s) {
    return {
      r: ft(s.r, 0, 255),
      g: ft(s.g, 0, 255),
      b: ft(s.b, 0, 255),
      a: ft(s.a),
    };
  },
  ts = function (s) {
    return { r: rt(s.r), g: rt(s.g), b: rt(s.b), a: rt(s.a, 3) };
  },
  Ja = /^#([0-9a-f]{3,8})$/i,
  ii = function (s) {
    var t = s.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  bn = function (s) {
    var t = s.r,
      e = s.g,
      i = s.b,
      r = s.a,
      n = Math.max(t, e, i),
      a = n - Math.min(t, e, i),
      o = a
        ? n === t
          ? (e - i) / a
          : n === e
          ? 2 + (i - t) / a
          : 4 + (t - e) / a
        : 0;
    return {
      h: 60 * (o < 0 ? o + 6 : o),
      s: n ? (a / n) * 100 : 0,
      v: (n / 255) * 100,
      a: r,
    };
  },
  Tn = function (s) {
    var t = s.h,
      e = s.s,
      i = s.v,
      r = s.a;
    (t = (t / 360) * 6), (e /= 100), (i /= 100);
    var n = Math.floor(t),
      a = i * (1 - e),
      o = i * (1 - (t - n) * e),
      h = i * (1 - (1 - t + n) * e),
      l = n % 6;
    return {
      r: 255 * [i, o, a, a, h, i][l],
      g: 255 * [h, i, i, o, a, a][l],
      b: 255 * [a, a, h, i, i, o][l],
      a: r,
    };
  },
  br = function (s) {
    return { h: vn(s.h), s: ft(s.s, 0, 100), l: ft(s.l, 0, 100), a: ft(s.a) };
  },
  Tr = function (s) {
    return { h: rt(s.h), s: rt(s.s), l: rt(s.l), a: rt(s.a, 3) };
  },
  Er = function (s) {
    return Tn(
      ((e = (t = s).s),
      {
        h: t.h,
        s:
          (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0
            ? ((2 * e) / (i + e)) * 100
            : 0,
        v: i + e,
        a: t.a,
      })
    );
    var t, e, i;
  },
  je = function (s) {
    return {
      h: (t = bn(s)).h,
      s:
        (r = ((200 - (e = t.s)) * (i = t.v)) / 100) > 0 && r < 200
          ? ((e * i) / 100 / (r <= 100 ? r : 200 - r)) * 100
          : 0,
      l: r / 2,
      a: t.a,
    };
    var t, e, i, r;
  },
  Qa =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  to =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  eo =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  io =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  ws = {
    string: [
      [
        function (s) {
          var t = Ja.exec(s);
          return t
            ? (s = t[1]).length <= 4
              ? {
                  r: parseInt(s[0] + s[0], 16),
                  g: parseInt(s[1] + s[1], 16),
                  b: parseInt(s[2] + s[2], 16),
                  a:
                    s.length === 4 ? rt(parseInt(s[3] + s[3], 16) / 255, 2) : 1,
                }
              : s.length === 6 || s.length === 8
              ? {
                  r: parseInt(s.substr(0, 2), 16),
                  g: parseInt(s.substr(2, 2), 16),
                  b: parseInt(s.substr(4, 2), 16),
                  a:
                    s.length === 8
                      ? rt(parseInt(s.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null;
        },
        "hex",
      ],
      [
        function (s) {
          var t = eo.exec(s) || io.exec(s);
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : vr({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var t = Qa.exec(s) || to.exec(s);
          if (!t) return null;
          var e,
            i,
            r = br({
              h:
                ((e = t[1]),
                (i = t[2]),
                i === void 0 && (i = "deg"),
                Number(e) * (Za[i] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            });
          return Er(r);
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (s) {
          var t = s.r,
            e = s.g,
            i = s.b,
            r = s.a,
            n = r === void 0 ? 1 : r;
          return Lt(t) && Lt(e) && Lt(i)
            ? vr({ r: Number(t), g: Number(e), b: Number(i), a: Number(n) })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var t = s.h,
            e = s.s,
            i = s.l,
            r = s.a,
            n = r === void 0 ? 1 : r;
          if (!Lt(t) || !Lt(e) || !Lt(i)) return null;
          var a = br({
            h: Number(t),
            s: Number(e),
            l: Number(i),
            a: Number(n),
          });
          return Er(a);
        },
        "hsl",
      ],
      [
        function (s) {
          var t = s.h,
            e = s.s,
            i = s.v,
            r = s.a,
            n = r === void 0 ? 1 : r;
          if (!Lt(t) || !Lt(e) || !Lt(i)) return null;
          var a = (function (o) {
            return {
              h: vn(o.h),
              s: ft(o.s, 0, 100),
              v: ft(o.v, 0, 100),
              a: ft(o.a),
            };
          })({ h: Number(t), s: Number(e), v: Number(i), a: Number(n) });
          return Tn(a);
        },
        "hsv",
      ],
    ],
  },
  Ar = function (s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e][0](s);
      if (i) return [i, t[e][1]];
    }
    return [null, void 0];
  },
  so = function (s) {
    return typeof s == "string"
      ? Ar(s.trim(), ws.string)
      : typeof s == "object" && s !== null
      ? Ar(s, ws.object)
      : [null, void 0];
  },
  es = function (s, t) {
    var e = je(s);
    return { h: e.h, s: ft(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
  },
  is = function (s) {
    return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255;
  },
  wr = function (s, t) {
    var e = je(s);
    return { h: e.h, s: e.s, l: ft(e.l + 100 * t, 0, 100), a: e.a };
  },
  Ss = (function () {
    function s(t) {
      (this.parsed = so(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (s.prototype.isValid = function () {
        return this.parsed !== null;
      }),
      (s.prototype.brightness = function () {
        return rt(is(this.rgba), 2);
      }),
      (s.prototype.isDark = function () {
        return is(this.rgba) < 0.5;
      }),
      (s.prototype.isLight = function () {
        return is(this.rgba) >= 0.5;
      }),
      (s.prototype.toHex = function () {
        return (
          (t = ts(this.rgba)),
          (e = t.r),
          (i = t.g),
          (r = t.b),
          (a = (n = t.a) < 1 ? ii(rt(255 * n)) : ""),
          "#" + ii(e) + ii(i) + ii(r) + a
        );
        var t, e, i, r, n, a;
      }),
      (s.prototype.toRgb = function () {
        return ts(this.rgba);
      }),
      (s.prototype.toRgbString = function () {
        return (
          (t = ts(this.rgba)),
          (e = t.r),
          (i = t.g),
          (r = t.b),
          (n = t.a) < 1
            ? "rgba(" + e + ", " + i + ", " + r + ", " + n + ")"
            : "rgb(" + e + ", " + i + ", " + r + ")"
        );
        var t, e, i, r, n;
      }),
      (s.prototype.toHsl = function () {
        return Tr(je(this.rgba));
      }),
      (s.prototype.toHslString = function () {
        return (
          (t = Tr(je(this.rgba))),
          (e = t.h),
          (i = t.s),
          (r = t.l),
          (n = t.a) < 1
            ? "hsla(" + e + ", " + i + "%, " + r + "%, " + n + ")"
            : "hsl(" + e + ", " + i + "%, " + r + "%)"
        );
        var t, e, i, r, n;
      }),
      (s.prototype.toHsv = function () {
        return (
          (t = bn(this.rgba)),
          { h: rt(t.h), s: rt(t.s), v: rt(t.v), a: rt(t.a, 3) }
        );
        var t;
      }),
      (s.prototype.invert = function () {
        return At({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        });
        var t;
      }),
      (s.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), At(es(this.rgba, t));
      }),
      (s.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), At(es(this.rgba, -t));
      }),
      (s.prototype.grayscale = function () {
        return At(es(this.rgba, -1));
      }),
      (s.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), At(wr(this.rgba, t));
      }),
      (s.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), At(wr(this.rgba, -t));
      }),
      (s.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t);
      }),
      (s.prototype.alpha = function (t) {
        return typeof t == "number"
          ? At({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t })
          : rt(this.rgba.a, 3);
        var e;
      }),
      (s.prototype.hue = function (t) {
        var e = je(this.rgba);
        return typeof t == "number"
          ? At({ h: t, s: e.s, l: e.l, a: e.a })
          : rt(e.h);
      }),
      (s.prototype.isEqual = function (t) {
        return this.toHex() === At(t).toHex();
      }),
      s
    );
  })(),
  At = function (s) {
    return s instanceof Ss ? s : new Ss(s);
  },
  Sr = [],
  ro = function (s) {
    s.forEach(function (t) {
      Sr.indexOf(t) < 0 && (t(Ss, ws), Sr.push(t));
    });
  };
function no(s, t) {
  var e = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000",
    },
    i = {};
  for (var r in e) i[e[r]] = r;
  var n = {};
  (s.prototype.toName = function (a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var o,
      h,
      l = i[this.toHex()];
    if (l) return l;
    if (a != null && a.closest) {
      var d = this.toRgb(),
        c = 1 / 0,
        u = "black";
      if (!n.length) for (var p in e) n[p] = new s(e[p]).toRgb();
      for (var f in e) {
        var m =
          ((o = d),
          (h = n[f]),
          Math.pow(o.r - h.r, 2) +
            Math.pow(o.g - h.g, 2) +
            Math.pow(o.b - h.b, 2));
        m < c && ((c = m), (u = f));
      }
      return u;
    }
  }),
    t.string.push([
      function (a) {
        var o = a.toLowerCase(),
          h = o === "transparent" ? "#0000" : e[o];
        return h ? new s(h).toRgb() : null;
      },
      "name",
    ]);
}
ro([no]);
const ve = class bi {
  constructor(t = 16777215) {
    (this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = t);
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    return (this.value = t), this;
  }
  set value(t) {
    if (t instanceof bi)
      (this._value = this.cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components);
    else {
      if (t === null) throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, t)) &&
        (this.normalize(t), (this._value = this.cloneSource(t)));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(t) {
    return typeof t == "string" ||
      typeof t == "number" ||
      t instanceof Number ||
      t === null
      ? t
      : Array.isArray(t) || ArrayBuffer.isView(t)
      ? t.slice(0)
      : typeof t == "object" && t !== null
      ? { ...t }
      : t;
  }
  isSourceEqual(t, e) {
    const i = typeof t;
    if (i !== typeof e) return !1;
    if (i === "number" || i === "string" || t instanceof Number) return t === e;
    if (
      (Array.isArray(t) && Array.isArray(e)) ||
      (ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
    )
      return t.length !== e.length ? !1 : t.every((r, n) => r === e[n]);
    if (t !== null && e !== null) {
      const r = Object.keys(t),
        n = Object.keys(e);
      return r.length !== n.length ? !1 : r.every((a) => t[a] === e[a]);
    }
    return t === e;
  }
  toRgba() {
    const [t, e, i, r] = this._components;
    return { r: t, g: e, b: i, a: r };
  }
  toRgb() {
    const [t, e, i] = this._components;
    return { r: t, g: e, b: i };
  }
  toRgbaString() {
    const [t, e, i] = this.toUint8RgbArray();
    return `rgba(${t},${e},${i},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, i, r] = this._components;
    return (
      (t = t ?? []),
      (t[0] = Math.round(e * 255)),
      (t[1] = Math.round(i * 255)),
      (t[2] = Math.round(r * 255)),
      t
    );
  }
  toRgbArray(t) {
    t = t ?? [];
    const [e, i, r] = this._components;
    return (t[0] = e), (t[1] = i), (t[2] = r), t;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(t) {
    const [e, i, r, n] = bi.temp.setValue(t)._components;
    return (
      (this._components[0] *= e),
      (this._components[1] *= i),
      (this._components[2] *= r),
      (this._components[3] *= n),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  premultiply(t, e = !0) {
    return (
      e &&
        ((this._components[0] *= t),
        (this._components[1] *= t),
        (this._components[2] *= t)),
      (this._components[3] = t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toPremultiplied(t, e = !0) {
    if (t === 1) return (255 << 24) + this._int;
    if (t === 0) return e ? 0 : this._int;
    let i = (this._int >> 16) & 255,
      r = (this._int >> 8) & 255,
      n = this._int & 255;
    return (
      e &&
        ((i = (i * t + 0.5) | 0),
        (r = (r * t + 0.5) | 0),
        (n = (n * t + 0.5) | 0)),
      ((t * 255) << 24) + (i << 16) + (r << 8) + n
    );
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(t) {
    return (this._components[3] = this._clamp(t)), this;
  }
  round(t) {
    const [e, i, r] = this._components;
    return (
      (this._components[0] = Math.round(e * t) / t),
      (this._components[1] = Math.round(i * t) / t),
      (this._components[2] = Math.round(r * t) / t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toArray(t) {
    t = t ?? [];
    const [e, i, r, n] = this._components;
    return (t[0] = e), (t[1] = i), (t[2] = r), (t[3] = n), t;
  }
  normalize(t) {
    let e, i, r, n;
    if (
      (typeof t == "number" || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      const a = t;
      (e = ((a >> 16) & 255) / 255),
        (i = ((a >> 8) & 255) / 255),
        (r = (a & 255) / 255),
        (n = 1);
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([e, i, r, n = 1] = t);
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([e, i, r, n = 255] = t),
        (e /= 255),
        (i /= 255),
        (r /= 255),
        (n /= 255);
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = bi.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = At(t);
      a.isValid() &&
        (({ r: e, g: i, b: r, a: n } = a.rgba),
        (e /= 255),
        (i /= 255),
        (r /= 255));
    }
    if (e !== void 0)
      (this._components[0] = e),
        (this._components[1] = i),
        (this._components[2] = r),
        (this._components[3] = n),
        this.refreshInt();
    else throw new Error(`Unable to convert color ${t}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [t, e, i] = this._components;
    this._int = ((t * 255) << 16) + ((e * 255) << 8) + ((i * 255) | 0);
  }
  _clamp(t, e = 0, i = 1) {
    return typeof t == "number"
      ? Math.min(Math.max(t, e), i)
      : (t.forEach((r, n) => {
          t[n] = Math.min(Math.max(r, e), i);
        }),
        t);
  }
};
(ve.shared = new ve()),
  (ve.temp = new ve()),
  (ve.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i);
let q = ve;
function ao(s) {
  return (
    z("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
    q.shared.setValue(s).toHex()
  );
}
function oo(s) {
  return (
    z("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
    q.shared.setValue(s).toNumber()
  );
}
function ho() {
  const s = [],
    t = [];
  for (let i = 0; i < 32; i++) (s[i] = i), (t[i] = i);
  (s[L.NORMAL_NPM] = L.NORMAL),
    (s[L.ADD_NPM] = L.ADD),
    (s[L.SCREEN_NPM] = L.SCREEN),
    (t[L.NORMAL] = L.NORMAL_NPM),
    (t[L.ADD] = L.ADD_NPM),
    (t[L.SCREEN] = L.SCREEN_NPM);
  const e = [];
  return e.push(t), e.push(s), e;
}
const En = ho();
function An(s, t) {
  return En[t ? 1 : 0][s];
}
function lo(s, t = null) {
  const e = s * 6;
  if (((t = t || new Uint16Array(e)), t.length !== e))
    throw new Error(
      `Out buffer length is incorrect, got ${t.length} and expected ${e}`
    );
  for (let i = 0, r = 0; i < e; i += 6, r += 4)
    (t[i + 0] = r + 0),
      (t[i + 1] = r + 1),
      (t[i + 2] = r + 2),
      (t[i + 3] = r + 0),
      (t[i + 4] = r + 2),
      (t[i + 5] = r + 3);
  return t;
}
function wn(s) {
  if (s.BYTES_PER_ELEMENT === 4)
    return s instanceof Float32Array
      ? "Float32Array"
      : s instanceof Uint32Array
      ? "Uint32Array"
      : "Int32Array";
  if (s.BYTES_PER_ELEMENT === 2) {
    if (s instanceof Uint16Array) return "Uint16Array";
  } else if (s.BYTES_PER_ELEMENT === 1 && s instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
function Ri(s) {
  return (
    (s += s === 0 ? 1 : 0),
    --s,
    (s |= s >>> 1),
    (s |= s >>> 2),
    (s |= s >>> 4),
    (s |= s >>> 8),
    (s |= s >>> 16),
    s + 1
  );
}
function Cr(s) {
  return !(s & (s - 1)) && !!s;
}
function Ir(s) {
  let t = (s > 65535 ? 1 : 0) << 4;
  s >>>= t;
  let e = (s > 255 ? 1 : 0) << 3;
  return (
    (s >>>= e),
    (t |= e),
    (e = (s > 15 ? 1 : 0) << 2),
    (s >>>= e),
    (t |= e),
    (e = (s > 3 ? 1 : 0) << 1),
    (s >>>= e),
    (t |= e),
    t | (s >> 1)
  );
}
function Ie(s, t, e) {
  const i = s.length;
  let r;
  if (t >= i || e === 0) return;
  e = t + e > i ? i - t : e;
  const n = i - e;
  for (r = t; r < n; ++r) s[r] = s[r + e];
  s.length = n;
}
function jt(s) {
  return s === 0 ? 0 : s < 0 ? -1 : 1;
}
let co = 0;
function fe() {
  return ++co;
}
const Cs = class {
  constructor(s, t, e, i) {
    (this.left = s), (this.top = t), (this.right = e), (this.bottom = i);
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Cs.EMPTY = new Cs(0, 0, 0, 0);
let Rr = Cs;
const Pr = {},
  wt = Object.create(null),
  Xt = Object.create(null);
class uo {
  constructor(t, e, i) {
    (this._canvas = I.ADAPTER.createCanvas()),
      (this._context = this._canvas.getContext("2d")),
      (this.resolution = i || I.RESOLUTION),
      this.resize(t, e);
  }
  clear() {
    this._checkDestroyed(),
      this._context.setTransform(1, 0, 0, 1, 0, 0),
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(t, e) {
    this._checkDestroyed(),
      (this._canvas.width = Math.round(t * this.resolution)),
      (this._canvas.height = Math.round(e * this.resolution));
  }
  destroy() {
    (this._context = null), (this._canvas = null);
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed(), (this._canvas.width = Math.round(t));
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed(), (this._canvas.height = Math.round(t));
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null)
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function Mr(s, t, e) {
  for (let i = 0, r = 4 * e * t; i < t; ++i, r += 4)
    if (s[r + 3] !== 0) return !1;
  return !0;
}
function Br(s, t, e, i, r) {
  const n = 4 * t;
  for (let a = i, o = i * n + 4 * e; a <= r; ++a, o += n)
    if (s[o + 3] !== 0) return !1;
  return !0;
}
function po(s) {
  const { width: t, height: e } = s,
    i = s.getContext("2d", { willReadFrequently: !0 });
  if (i === null) throw new TypeError("Failed to get canvas 2D context");
  const r = i.getImageData(0, 0, t, e).data;
  let n = 0,
    a = 0,
    o = t - 1,
    h = e - 1;
  for (; a < e && Mr(r, t, a); ) ++a;
  if (a === e) return Rr.EMPTY;
  for (; Mr(r, t, h); ) --h;
  for (; Br(r, t, n, a, h); ) ++n;
  for (; Br(r, t, o, a, h); ) --o;
  return ++o, ++h, new Rr(n, a, o, h);
}
function fo(s) {
  const t = po(s),
    { width: e, height: i } = t;
  let r = null;
  if (!t.isEmpty()) {
    const n = s.getContext("2d");
    if (n === null) throw new TypeError("Failed to get canvas 2D context");
    r = n.getImageData(t.left, t.top, e, i);
  }
  return { width: e, height: i, data: r };
}
function mo(s, t = globalThis.location) {
  if (s.startsWith("data:")) return "";
  t = t || globalThis.location;
  const e = new URL(s, document.baseURI);
  return e.hostname !== t.hostname ||
    e.port !== t.port ||
    e.protocol !== t.protocol
    ? "anonymous"
    : "";
}
function Gt(s, t = 1) {
  var i;
  const e = (i = I.RETINA_PREFIX) == null ? void 0 : i.exec(s);
  return e ? parseFloat(e[1]) : t;
}
var A = ((s) => (
  (s.Renderer = "renderer"),
  (s.Application = "application"),
  (s.RendererSystem = "renderer-webgl-system"),
  (s.RendererPlugin = "renderer-webgl-plugin"),
  (s.CanvasRendererSystem = "renderer-canvas-system"),
  (s.CanvasRendererPlugin = "renderer-canvas-plugin"),
  (s.Asset = "asset"),
  (s.LoadParser = "load-parser"),
  (s.ResolveParser = "resolve-parser"),
  (s.CacheParser = "cache-parser"),
  (s.DetectionParser = "detection-parser"),
  s
))(A || {});
const Is = (s) => {
    if (typeof s == "function" || (typeof s == "object" && s.extension)) {
      if (!s.extension)
        throw new Error("Extension class must have an extension object");
      s = {
        ...(typeof s.extension != "object"
          ? { type: s.extension }
          : s.extension),
        ref: s,
      };
    }
    if (typeof s == "object") s = { ...s };
    else throw new Error("Invalid extension type");
    return typeof s.type == "string" && (s.type = [s.type]), s;
  },
  Dr = (s, t) => Is(s).priority ?? t,
  M = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...s) {
      return (
        s.map(Is).forEach((t) => {
          t.type.forEach((e) => {
            var i, r;
            return (r = (i = this._removeHandlers)[e]) == null
              ? void 0
              : r.call(i, t);
          });
        }),
        this
      );
    },
    add(...s) {
      return (
        s.map(Is).forEach((t) => {
          t.type.forEach((e) => {
            var n, a;
            const i = this._addHandlers,
              r = this._queue;
            i[e]
              ? (n = i[e]) == null || n.call(i, t)
              : ((r[e] = r[e] || []), (a = r[e]) == null || a.push(t));
          });
        }),
        this
      );
    },
    handle(s, t, e) {
      var a;
      const i = this._addHandlers,
        r = this._removeHandlers;
      if (i[s] || r[s])
        throw new Error(`Extension type ${s} already has a handler`);
      (i[s] = t), (r[s] = e);
      const n = this._queue;
      return (
        n[s] && ((a = n[s]) == null || a.forEach((o) => t(o)), delete n[s]),
        this
      );
    },
    handleByMap(s, t) {
      return this.handle(
        s,
        (e) => {
          e.name && (t[e.name] = e.ref);
        },
        (e) => {
          e.name && delete t[e.name];
        }
      );
    },
    handleByList(s, t, e = -1) {
      return this.handle(
        s,
        (i) => {
          t.includes(i.ref) ||
            (t.push(i.ref), t.sort((r, n) => Dr(n, e) - Dr(r, e)));
        },
        (i) => {
          const r = t.indexOf(i.ref);
          r !== -1 && t.splice(r, 1);
        }
      );
    },
  };
class Rs {
  constructor(t) {
    typeof t == "number"
      ? (this.rawBinaryData = new ArrayBuffer(t))
      : t instanceof Uint8Array
      ? (this.rawBinaryData = t.buffer)
      : (this.rawBinaryData = t),
      (this.uint32View = new Uint32Array(this.rawBinaryData)),
      (this.float32View = new Float32Array(this.rawBinaryData));
  }
  get int8View() {
    return (
      this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
      this._int8View
    );
  }
  get uint8View() {
    return (
      this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
      this._uint8View
    );
  }
  get int16View() {
    return (
      this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
      this._int16View
    );
  }
  get uint16View() {
    return (
      this._uint16View ||
        (this._uint16View = new Uint16Array(this.rawBinaryData)),
      this._uint16View
    );
  }
  get int32View() {
    return (
      this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
      this._int32View
    );
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    (this.rawBinaryData = null),
      (this._int8View = null),
      (this._uint8View = null),
      (this._int16View = null),
      (this._uint16View = null),
      (this._int32View = null),
      (this.uint32View = null),
      (this.float32View = null);
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const go = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}",
].join(`
`);
function _o(s) {
  let t = "";
  for (let e = 0; e < s; ++e)
    e > 0 &&
      (t += `
else `),
      e < s - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function xo(s, t) {
  if (s === 0)
    throw new Error(
      "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
    );
  const e = t.createShader(t.FRAGMENT_SHADER);
  for (;;) {
    const i = go.replace(/%forloop%/gi, _o(s));
    if (
      (t.shaderSource(e, i),
      t.compileShader(e),
      !t.getShaderParameter(e, t.COMPILE_STATUS))
    )
      s = (s / 2) | 0;
    else break;
  }
  return s;
}
const ss = 0,
  rs = 1,
  ns = 2,
  as = 3,
  os = 4,
  hs = 5;
class Ft {
  constructor() {
    (this.data = 0),
      (this.blendMode = L.NORMAL),
      (this.polygonOffset = 0),
      (this.blend = !0),
      (this.depthMask = !0);
  }
  get blend() {
    return !!(this.data & (1 << ss));
  }
  set blend(t) {
    !!(this.data & (1 << ss)) !== t && (this.data ^= 1 << ss);
  }
  get offsets() {
    return !!(this.data & (1 << rs));
  }
  set offsets(t) {
    !!(this.data & (1 << rs)) !== t && (this.data ^= 1 << rs);
  }
  get culling() {
    return !!(this.data & (1 << ns));
  }
  set culling(t) {
    !!(this.data & (1 << ns)) !== t && (this.data ^= 1 << ns);
  }
  get depthTest() {
    return !!(this.data & (1 << as));
  }
  set depthTest(t) {
    !!(this.data & (1 << as)) !== t && (this.data ^= 1 << as);
  }
  get depthMask() {
    return !!(this.data & (1 << hs));
  }
  set depthMask(t) {
    !!(this.data & (1 << hs)) !== t && (this.data ^= 1 << hs);
  }
  get clockwiseFrontFace() {
    return !!(this.data & (1 << os));
  }
  set clockwiseFrontFace(t) {
    !!(this.data & (1 << os)) !== t && (this.data ^= 1 << os);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    (this.blend = t !== L.NONE), (this._blendMode = t);
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    (this.offsets = !!t), (this._polygonOffset = t);
  }
  static for2d() {
    const t = new Ft();
    return (t.depthTest = !1), (t.blend = !0), t;
  }
}
Ft.prototype.toString = function () {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const Ps = [];
function Sn(s, t) {
  if (!s) return null;
  let e = "";
  if (typeof s == "string") {
    const i = /\.(\w{3,4})(?:$|\?|#)/i.exec(s);
    i && (e = i[1].toLowerCase());
  }
  for (let i = Ps.length - 1; i >= 0; --i) {
    const r = Ps[i];
    if (r.test && r.test(s, e)) return new r(s, t);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class vt {
  constructor(t) {
    (this.items = []), (this._name = t), (this._aliasCount = 0);
  }
  emit(t, e, i, r, n, a, o, h) {
    if (arguments.length > 8) throw new Error("max arguments reached");
    const { name: l, items: d } = this;
    this._aliasCount++;
    for (let c = 0, u = d.length; c < u; c++) d[c][l](t, e, i, r, n, a, o, h);
    return d === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 &&
      this.items.length > 1 &&
      ((this._aliasCount = 0), (this.items = this.items.slice(0)));
  }
  add(t) {
    return (
      t[this._name] &&
        (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)),
      this
    );
  }
  remove(t) {
    const e = this.items.indexOf(t);
    return (
      e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
    );
  }
  contains(t) {
    return this.items.includes(t);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), (this.items.length = 0), this;
  }
  destroy() {
    this.removeAll(), (this.items.length = 0), (this._name = "");
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(vt.prototype, {
  dispatch: { value: vt.prototype.emit },
  run: { value: vt.prototype.emit },
});
class Ye {
  constructor(t = 0, e = 0) {
    (this._width = t),
      (this._height = e),
      (this.destroyed = !1),
      (this.internal = !1),
      (this.onResize = new vt("setRealSize")),
      (this.onUpdate = new vt("update")),
      (this.onError = new vt("onError"));
  }
  bind(t) {
    this.onResize.add(t),
      this.onUpdate.add(t),
      this.onError.add(t),
      (this._width || this._height) &&
        this.onResize.emit(this._width, this._height);
  }
  unbind(t) {
    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
  }
  resize(t, e) {
    (t !== this._width || e !== this._height) &&
      ((this._width = t), (this._height = e), this.onResize.emit(t, e));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(t, e, i) {
    return !1;
  }
  dispose() {}
  destroy() {
    this.destroyed ||
      ((this.destroyed = !0),
      this.dispose(),
      this.onError.removeAll(),
      (this.onError = null),
      this.onResize.removeAll(),
      (this.onResize = null),
      this.onUpdate.removeAll(),
      (this.onUpdate = null));
  }
  static test(t, e) {
    return !1;
  }
}
class Vi extends Ye {
  constructor(t, e) {
    const { width: i, height: r } = e || {};
    if (!i || !r) throw new Error("BufferResource width or height invalid");
    super(i, r),
      (this.data = t),
      (this.unpackAlignment = e.unpackAlignment ?? 4);
  }
  upload(t, e, i) {
    const r = t.gl;
    r.pixelStorei(r.UNPACK_ALIGNMENT, this.unpackAlignment),
      r.pixelStorei(
        r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        e.alphaMode === lt.UNPACK
      );
    const n = e.realWidth,
      a = e.realHeight;
    return (
      i.width === n && i.height === a
        ? r.texSubImage2D(e.target, 0, 0, 0, n, a, e.format, i.type, this.data)
        : ((i.width = n),
          (i.height = a),
          r.texImage2D(
            e.target,
            0,
            i.internalFormat,
            n,
            a,
            0,
            e.format,
            i.type,
            this.data
          )),
      !0
    );
  }
  dispose() {
    this.data = null;
  }
  static test(t) {
    return (
      t === null ||
      t instanceof Int8Array ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Int16Array ||
      t instanceof Uint16Array ||
      t instanceof Int32Array ||
      t instanceof Uint32Array ||
      t instanceof Float32Array
    );
  }
}
const yo = { scaleMode: Nt.NEAREST, alphaMode: lt.NPM },
  Ms = class be extends qe {
    constructor(t = null, e = null) {
      super(), (e = Object.assign({}, be.defaultOptions, e));
      const {
        alphaMode: i,
        mipmap: r,
        anisotropicLevel: n,
        scaleMode: a,
        width: o,
        height: h,
        wrapMode: l,
        format: d,
        type: c,
        target: u,
        resolution: p,
        resourceOptions: f,
      } = e;
      t && !(t instanceof Ye) && ((t = Sn(t, f)), (t.internal = !0)),
        (this.resolution = p || I.RESOLUTION),
        (this.width = Math.round((o || 0) * this.resolution) / this.resolution),
        (this.height =
          Math.round((h || 0) * this.resolution) / this.resolution),
        (this._mipmap = r),
        (this.anisotropicLevel = n),
        (this._wrapMode = l),
        (this._scaleMode = a),
        (this.format = d),
        (this.type = c),
        (this.target = u),
        (this.alphaMode = i),
        (this.uid = fe()),
        (this.touched = 0),
        (this.isPowerOfTwo = !1),
        this._refreshPOT(),
        (this._glTextures = {}),
        (this.dirtyId = 0),
        (this.dirtyStyleId = 0),
        (this.cacheId = null),
        (this.valid = o > 0 && h > 0),
        (this.textureCacheIds = []),
        (this.destroyed = !1),
        (this.resource = null),
        (this._batchEnabled = 0),
        (this._batchLocation = 0),
        (this.parentTextureArray = null),
        this.setResource(t);
    }
    get realWidth() {
      return Math.round(this.width * this.resolution);
    }
    get realHeight() {
      return Math.round(this.height * this.resolution);
    }
    get mipmap() {
      return this._mipmap;
    }
    set mipmap(t) {
      this._mipmap !== t && ((this._mipmap = t), this.dirtyStyleId++);
    }
    get scaleMode() {
      return this._scaleMode;
    }
    set scaleMode(t) {
      this._scaleMode !== t && ((this._scaleMode = t), this.dirtyStyleId++);
    }
    get wrapMode() {
      return this._wrapMode;
    }
    set wrapMode(t) {
      this._wrapMode !== t && ((this._wrapMode = t), this.dirtyStyleId++);
    }
    setStyle(t, e) {
      let i;
      return (
        t !== void 0 &&
          t !== this.scaleMode &&
          ((this.scaleMode = t), (i = !0)),
        e !== void 0 && e !== this.mipmap && ((this.mipmap = e), (i = !0)),
        i && this.dirtyStyleId++,
        this
      );
    }
    setSize(t, e, i) {
      return (i = i || this.resolution), this.setRealSize(t * i, e * i, i);
    }
    setRealSize(t, e, i) {
      return (
        (this.resolution = i || this.resolution),
        (this.width = Math.round(t) / this.resolution),
        (this.height = Math.round(e) / this.resolution),
        this._refreshPOT(),
        this.update(),
        this
      );
    }
    _refreshPOT() {
      this.isPowerOfTwo = Cr(this.realWidth) && Cr(this.realHeight);
    }
    setResolution(t) {
      const e = this.resolution;
      return e === t
        ? this
        : ((this.resolution = t),
          this.valid &&
            ((this.width = Math.round(this.width * e) / t),
            (this.height = Math.round(this.height * e) / t),
            this.emit("update", this)),
          this._refreshPOT(),
          this);
    }
    setResource(t) {
      if (this.resource === t) return this;
      if (this.resource) throw new Error("Resource can be set only once");
      return t.bind(this), (this.resource = t), this;
    }
    update() {
      this.valid
        ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
        : this.width > 0 &&
          this.height > 0 &&
          ((this.valid = !0),
          this.emit("loaded", this),
          this.emit("update", this));
    }
    onError(t) {
      this.emit("error", this, t);
    }
    destroy() {
      this.resource &&
        (this.resource.unbind(this),
        this.resource.internal && this.resource.destroy(),
        (this.resource = null)),
        this.cacheId &&
          (delete Xt[this.cacheId],
          delete wt[this.cacheId],
          (this.cacheId = null)),
        (this.valid = !1),
        this.dispose(),
        be.removeFromCache(this),
        (this.textureCacheIds = null),
        (this.destroyed = !0),
        this.emit("destroyed", this),
        this.removeAllListeners();
    }
    dispose() {
      this.emit("dispose", this);
    }
    castToBaseTexture() {
      return this;
    }
    static from(t, e, i = I.STRICT_TEXTURE_CACHE) {
      const r = typeof t == "string";
      let n = null;
      if (r) n = t;
      else {
        if (!t._pixiId) {
          const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
          t._pixiId = `${o}_${fe()}`;
        }
        n = t._pixiId;
      }
      let a = Xt[n];
      if (r && i && !a)
        throw new Error(
          `The cacheId "${n}" does not exist in BaseTextureCache.`
        );
      return a || ((a = new be(t, e)), (a.cacheId = n), be.addToCache(a, n)), a;
    }
    static fromBuffer(t, e, i, r) {
      t = t || new Float32Array(e * i * 4);
      const n = new Vi(t, {
        width: e,
        height: i,
        ...(r == null ? void 0 : r.resourceOptions),
      });
      let a, o;
      return (
        t instanceof Float32Array
          ? ((a = T.RGBA), (o = D.FLOAT))
          : t instanceof Int32Array
          ? ((a = T.RGBA_INTEGER), (o = D.INT))
          : t instanceof Uint32Array
          ? ((a = T.RGBA_INTEGER), (o = D.UNSIGNED_INT))
          : t instanceof Int16Array
          ? ((a = T.RGBA_INTEGER), (o = D.SHORT))
          : t instanceof Uint16Array
          ? ((a = T.RGBA_INTEGER), (o = D.UNSIGNED_SHORT))
          : t instanceof Int8Array
          ? ((a = T.RGBA), (o = D.BYTE))
          : ((a = T.RGBA), (o = D.UNSIGNED_BYTE)),
        (n.internal = !0),
        new be(n, Object.assign({}, yo, { type: o, format: a }, r))
      );
    }
    static addToCache(t, e) {
      e &&
        (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
        Xt[e] &&
          Xt[e] !== t &&
          console.warn(
            `BaseTexture added to the cache with an id [${e}] that already had an entry`
          ),
        (Xt[e] = t));
    }
    static removeFromCache(t) {
      if (typeof t == "string") {
        const e = Xt[t];
        if (e) {
          const i = e.textureCacheIds.indexOf(t);
          return i > -1 && e.textureCacheIds.splice(i, 1), delete Xt[t], e;
        }
      } else if (t != null && t.textureCacheIds) {
        for (let e = 0; e < t.textureCacheIds.length; ++e)
          delete Xt[t.textureCacheIds[e]];
        return (t.textureCacheIds.length = 0), t;
      }
      return null;
    }
  };
(Ms.defaultOptions = {
  mipmap: Dt.POW2,
  anisotropicLevel: 0,
  scaleMode: Nt.LINEAR,
  wrapMode: qt.CLAMP,
  alphaMode: lt.UNPACK,
  target: Ce.TEXTURE_2D,
  format: T.RGBA,
  type: D.UNSIGNED_BYTE,
}),
  (Ms._globalBatch = 0);
let k = Ms;
class Bs {
  constructor() {
    (this.texArray = null),
      (this.blend = 0),
      (this.type = Pt.TRIANGLES),
      (this.start = 0),
      (this.size = 0),
      (this.data = null);
  }
}
let vo = 0;
class Q {
  constructor(t, e = !0, i = !1) {
    (this.data = t || new Float32Array(1)),
      (this._glBuffers = {}),
      (this._updateID = 0),
      (this.index = i),
      (this.static = e),
      (this.id = vo++),
      (this.disposeRunner = new vt("disposeBuffer"));
  }
  update(t) {
    t instanceof Array && (t = new Float32Array(t)),
      (this.data = t || this.data),
      this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), (this.data = null);
  }
  set index(t) {
    this.type = t ? Mt.ELEMENT_ARRAY_BUFFER : Mt.ARRAY_BUFFER;
  }
  get index() {
    return this.type === Mt.ELEMENT_ARRAY_BUFFER;
  }
  static from(t) {
    return t instanceof Array && (t = new Float32Array(t)), new Q(t);
  }
}
class Pi {
  constructor(t, e = 0, i = !1, r = D.FLOAT, n, a, o, h = 1) {
    (this.buffer = t),
      (this.size = e),
      (this.normalized = i),
      (this.type = r),
      (this.stride = n),
      (this.start = a),
      (this.instance = o),
      (this.divisor = h);
  }
  destroy() {
    this.buffer = null;
  }
  static from(t, e, i, r, n) {
    return new Pi(t, e, i, r, n);
  }
}
const bo = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function To(s, t) {
  let e = 0,
    i = 0;
  const r = {};
  for (let h = 0; h < s.length; h++) (i += t[h]), (e += s[h].length);
  const n = new ArrayBuffer(e * 4);
  let a = null,
    o = 0;
  for (let h = 0; h < s.length; h++) {
    const l = t[h],
      d = s[h],
      c = wn(d);
    r[c] || (r[c] = new bo[c](n)), (a = r[c]);
    for (let u = 0; u < d.length; u++) {
      const p = ((u / l) | 0) * i + o,
        f = u % l;
      a[p + f] = d[u];
    }
    o += l;
  }
  return new Float32Array(n);
}
const Fr = { 5126: 4, 5123: 2, 5121: 1 };
let Eo = 0;
const Ao = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };
class Kt {
  constructor(t = [], e = {}) {
    (this.buffers = t),
      (this.indexBuffer = null),
      (this.attributes = e),
      (this.glVertexArrayObjects = {}),
      (this.id = Eo++),
      (this.instanced = !1),
      (this.instanceCount = 1),
      (this.disposeRunner = new vt("disposeGeometry")),
      (this.refCount = 0);
  }
  addAttribute(t, e, i = 0, r = !1, n, a, o, h = !1) {
    if (!e)
      throw new Error("You must pass a buffer when creating an attribute");
    e instanceof Q ||
      (e instanceof Array && (e = new Float32Array(e)), (e = new Q(e)));
    const l = t.split("|");
    if (l.length > 1) {
      for (let c = 0; c < l.length; c++) this.addAttribute(l[c], e, i, r, n);
      return this;
    }
    let d = this.buffers.indexOf(e);
    return (
      d === -1 && (this.buffers.push(e), (d = this.buffers.length - 1)),
      (this.attributes[t] = new Pi(d, i, r, n, a, o, h)),
      (this.instanced = this.instanced || h),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  addIndex(t) {
    return (
      t instanceof Q ||
        (t instanceof Array && (t = new Uint16Array(t)), (t = new Q(t))),
      (t.type = Mt.ELEMENT_ARRAY_BUFFER),
      (this.indexBuffer = t),
      this.buffers.includes(t) || this.buffers.push(t),
      this
    );
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (
      this.buffers.length === 1 ||
      (this.buffers.length === 2 && this.indexBuffer)
    )
      return this;
    const t = [],
      e = [],
      i = new Q();
    let r;
    for (r in this.attributes) {
      const n = this.attributes[r],
        a = this.buffers[n.buffer];
      t.push(a.data), e.push((n.size * Fr[n.type]) / 4), (n.buffer = 0);
    }
    for (i.data = To(t, e), r = 0; r < this.buffers.length; r++)
      this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
    return (
      (this.buffers = [i]),
      this.indexBuffer && this.buffers.push(this.indexBuffer),
      this
    );
  }
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(),
      (this.buffers = null),
      (this.indexBuffer = null),
      (this.attributes = null);
  }
  clone() {
    const t = new Kt();
    for (let e = 0; e < this.buffers.length; e++)
      t.buffers[e] = new Q(this.buffers[e].data.slice(0));
    for (const e in this.attributes) {
      const i = this.attributes[e];
      t.attributes[e] = new Pi(
        i.buffer,
        i.size,
        i.normalized,
        i.type,
        i.stride,
        i.start,
        i.instance
      );
    }
    return (
      this.indexBuffer &&
        ((t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]),
        (t.indexBuffer.type = Mt.ELEMENT_ARRAY_BUFFER)),
      t
    );
  }
  static merge(t) {
    const e = new Kt(),
      i = [],
      r = [],
      n = [];
    let a;
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        (r[h] = r[h] || 0), (r[h] += a.buffers[h].data.length), (n[h] = 0);
    }
    for (let o = 0; o < a.buffers.length; o++)
      (i[o] = new Ao[wn(a.buffers[o].data)](r[o])),
        (e.buffers[o] = new Q(i[o]));
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        i[h].set(a.buffers[h].data, n[h]), (n[h] += a.buffers[h].data.length);
    }
    if (((e.attributes = a.attributes), a.indexBuffer)) {
      (e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)]),
        (e.indexBuffer.type = Mt.ELEMENT_ARRAY_BUFFER);
      let o = 0,
        h = 0,
        l = 0,
        d = 0;
      for (let c = 0; c < a.buffers.length; c++)
        if (a.buffers[c] !== a.indexBuffer) {
          d = c;
          break;
        }
      for (const c in a.attributes) {
        const u = a.attributes[c];
        (u.buffer | 0) === d && (h += (u.size * Fr[u.type]) / 4);
      }
      for (let c = 0; c < t.length; c++) {
        const u = t[c].indexBuffer.data;
        for (let p = 0; p < u.length; p++) e.indexBuffer.data[p + l] += o;
        (o += t[c].buffers[d].data.length / h), (l += u.length);
      }
    }
    return e;
  }
}
class Cn extends Kt {
  constructor(t = !1) {
    super(),
      (this._buffer = new Q(null, t, !1)),
      (this._indexBuffer = new Q(null, t, !0)),
      this.addAttribute("aVertexPosition", this._buffer, 2, !1, D.FLOAT)
        .addAttribute("aTextureCoord", this._buffer, 2, !1, D.FLOAT)
        .addAttribute("aColor", this._buffer, 4, !0, D.UNSIGNED_BYTE)
        .addAttribute("aTextureId", this._buffer, 1, !0, D.FLOAT)
        .addIndex(this._indexBuffer);
  }
}
const Mi = Math.PI * 2,
  wo = 180 / Math.PI,
  So = Math.PI / 180;
var ot = ((s) => (
  (s[(s.POLY = 0)] = "POLY"),
  (s[(s.RECT = 1)] = "RECT"),
  (s[(s.CIRC = 2)] = "CIRC"),
  (s[(s.ELIP = 3)] = "ELIP"),
  (s[(s.RREC = 4)] = "RREC"),
  s
))(ot || {});
class $ {
  constructor(t = 0, e = 0) {
    (this.x = 0), (this.y = 0), (this.x = t), (this.y = e);
  }
  clone() {
    return new $(this.x, this.y);
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, e = t) {
    return (this.x = t), (this.y = e), this;
  }
}
$.prototype.toString = function () {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const si = [new $(), new $(), new $(), new $()];
class H {
  constructor(t = 0, e = 0, i = 0, r = 0) {
    (this.x = Number(t)),
      (this.y = Number(e)),
      (this.width = Number(i)),
      (this.height = Number(r)),
      (this.type = ot.RECT);
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new H(0, 0, 0, 0);
  }
  clone() {
    return new H(this.x, this.y, this.width, this.height);
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    );
  }
  copyTo(t) {
    return (
      (t.x = this.x),
      (t.y = this.y),
      (t.width = this.width),
      (t.height = this.height),
      t
    );
  }
  contains(t, e) {
    return this.width <= 0 || this.height <= 0
      ? !1
      : t >= this.x &&
          t < this.x + this.width &&
          e >= this.y &&
          e < this.y + this.height;
  }
  intersects(t, e) {
    if (!e) {
      const w = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= w) return !1;
      const N = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > N;
    }
    const i = this.left,
      r = this.right,
      n = this.top,
      a = this.bottom;
    if (r <= i || a <= n) return !1;
    const o = si[0].set(t.left, t.top),
      h = si[1].set(t.left, t.bottom),
      l = si[2].set(t.right, t.top),
      d = si[3].set(t.right, t.bottom);
    if (l.x <= o.x || h.y <= o.y) return !1;
    const c = Math.sign(e.a * e.d - e.b * e.c);
    if (
      c === 0 ||
      (e.apply(o, o),
      e.apply(h, h),
      e.apply(l, l),
      e.apply(d, d),
      Math.max(o.x, h.x, l.x, d.x) <= i ||
        Math.min(o.x, h.x, l.x, d.x) >= r ||
        Math.max(o.y, h.y, l.y, d.y) <= n ||
        Math.min(o.y, h.y, l.y, d.y) >= a)
    )
      return !1;
    const u = c * (h.y - o.y),
      p = c * (o.x - h.x),
      f = u * i + p * n,
      m = u * r + p * n,
      g = u * i + p * a,
      _ = u * r + p * a;
    if (
      Math.max(f, m, g, _) <= u * o.x + p * o.y ||
      Math.min(f, m, g, _) >= u * d.x + p * d.y
    )
      return !1;
    const b = c * (o.y - l.y),
      x = c * (l.x - o.x),
      y = b * i + x * n,
      R = b * r + x * n,
      O = b * i + x * a,
      E = b * r + x * a;
    return !(
      Math.max(y, R, O, E) <= b * o.x + x * o.y ||
      Math.min(y, R, O, E) >= b * d.x + x * d.y
    );
  }
  pad(t = 0, e = t) {
    return (
      (this.x -= t),
      (this.y -= e),
      (this.width += t * 2),
      (this.height += e * 2),
      this
    );
  }
  fit(t) {
    const e = Math.max(this.x, t.x),
      i = Math.min(this.x + this.width, t.x + t.width),
      r = Math.max(this.y, t.y),
      n = Math.min(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = Math.max(i - e, 0)),
      (this.y = r),
      (this.height = Math.max(n - r, 0)),
      this
    );
  }
  ceil(t = 1, e = 0.001) {
    const i = Math.ceil((this.x + this.width - e) * t) / t,
      r = Math.ceil((this.y + this.height - e) * t) / t;
    return (
      (this.x = Math.floor((this.x + e) * t) / t),
      (this.y = Math.floor((this.y + e) * t) / t),
      (this.width = i - this.x),
      (this.height = r - this.y),
      this
    );
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x),
      i = Math.max(this.x + this.width, t.x + t.width),
      r = Math.min(this.y, t.y),
      n = Math.max(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = i - e),
      (this.y = r),
      (this.height = n - r),
      this
    );
  }
}
H.prototype.toString = function () {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class zi {
  constructor(t = 0, e = 0, i = 0) {
    (this.x = t), (this.y = e), (this.radius = i), (this.type = ot.CIRC);
  }
  clone() {
    return new zi(this.x, this.y, this.radius);
  }
  contains(t, e) {
    if (this.radius <= 0) return !1;
    const i = this.radius * this.radius;
    let r = this.x - t,
      n = this.y - e;
    return (r *= r), (n *= n), r + n <= i;
  }
  getBounds() {
    return new H(
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }
}
zi.prototype.toString = function () {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class Wi {
  constructor(t = 0, e = 0, i = 0, r = 0) {
    (this.x = t),
      (this.y = e),
      (this.width = i),
      (this.height = r),
      (this.type = ot.ELIP);
  }
  clone() {
    return new Wi(this.x, this.y, this.width, this.height);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    let i = (t - this.x) / this.width,
      r = (e - this.y) / this.height;
    return (i *= i), (r *= r), i + r <= 1;
  }
  getBounds() {
    return new H(
      this.x - this.width,
      this.y - this.height,
      this.width,
      this.height
    );
  }
}
Wi.prototype.toString = function () {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class ue {
  constructor(...t) {
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const i = [];
      for (let r = 0, n = e.length; r < n; r++) i.push(e[r].x, e[r].y);
      e = i;
    }
    (this.points = e), (this.type = ot.POLY), (this.closeStroke = !0);
  }
  clone() {
    const t = this.points.slice(),
      e = new ue(t);
    return (e.closeStroke = this.closeStroke), e;
  }
  contains(t, e) {
    let i = !1;
    const r = this.points.length / 2;
    for (let n = 0, a = r - 1; n < r; a = n++) {
      const o = this.points[n * 2],
        h = this.points[n * 2 + 1],
        l = this.points[a * 2],
        d = this.points[a * 2 + 1];
      h > e != d > e && t < (l - o) * ((e - h) / (d - h)) + o && (i = !i);
    }
    return i;
  }
}
ue.prototype.toString = function () {
  return `[@pixi/math:PolygoncloseStroke=${
    this.closeStroke
  }points=${this.points.reduce((s, t) => `${s}, ${t}`, "")}]`;
};
class $i {
  constructor(t = 0, e = 0, i = 0, r = 0, n = 20) {
    (this.x = t),
      (this.y = e),
      (this.width = i),
      (this.height = r),
      (this.radius = n),
      (this.type = ot.RREC);
  }
  clone() {
    return new $i(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    if (
      t >= this.x &&
      t <= this.x + this.width &&
      e >= this.y &&
      e <= this.y + this.height
    ) {
      const i = Math.max(
        0,
        Math.min(this.radius, Math.min(this.width, this.height) / 2)
      );
      if (
        (e >= this.y + i && e <= this.y + this.height - i) ||
        (t >= this.x + i && t <= this.x + this.width - i)
      )
        return !0;
      let r = t - (this.x + i),
        n = e - (this.y + i);
      const a = i * i;
      if (
        r * r + n * n <= a ||
        ((r = t - (this.x + this.width - i)), r * r + n * n <= a) ||
        ((n = e - (this.y + this.height - i)), r * r + n * n <= a) ||
        ((r = t - (this.x + i)), r * r + n * n <= a)
      )
        return !0;
    }
    return !1;
  }
}
$i.prototype.toString = function () {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class K {
  constructor(t = 1, e = 0, i = 0, r = 1, n = 0, a = 0) {
    (this.array = null),
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = r),
      (this.tx = n),
      (this.ty = a);
  }
  fromArray(t) {
    (this.a = t[0]),
      (this.b = t[1]),
      (this.c = t[3]),
      (this.d = t[4]),
      (this.tx = t[2]),
      (this.ty = t[5]);
  }
  set(t, e, i, r, n, a) {
    return (
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = r),
      (this.tx = n),
      (this.ty = a),
      this
    );
  }
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const i = e || this.array;
    return (
      t
        ? ((i[0] = this.a),
          (i[1] = this.b),
          (i[2] = 0),
          (i[3] = this.c),
          (i[4] = this.d),
          (i[5] = 0),
          (i[6] = this.tx),
          (i[7] = this.ty),
          (i[8] = 1))
        : ((i[0] = this.a),
          (i[1] = this.c),
          (i[2] = this.tx),
          (i[3] = this.b),
          (i[4] = this.d),
          (i[5] = this.ty),
          (i[6] = 0),
          (i[7] = 0),
          (i[8] = 1)),
      i
    );
  }
  apply(t, e) {
    e = e || new $();
    const i = t.x,
      r = t.y;
    return (
      (e.x = this.a * i + this.c * r + this.tx),
      (e.y = this.b * i + this.d * r + this.ty),
      e
    );
  }
  applyInverse(t, e) {
    e = e || new $();
    const i = 1 / (this.a * this.d + this.c * -this.b),
      r = t.x,
      n = t.y;
    return (
      (e.x =
        this.d * i * r +
        -this.c * i * n +
        (this.ty * this.c - this.tx * this.d) * i),
      (e.y =
        this.a * i * n +
        -this.b * i * r +
        (-this.ty * this.a + this.tx * this.b) * i),
      e
    );
  }
  translate(t, e) {
    return (this.tx += t), (this.ty += e), this;
  }
  scale(t, e) {
    return (
      (this.a *= t),
      (this.d *= e),
      (this.c *= t),
      (this.b *= e),
      (this.tx *= t),
      (this.ty *= e),
      this
    );
  }
  rotate(t) {
    const e = Math.cos(t),
      i = Math.sin(t),
      r = this.a,
      n = this.c,
      a = this.tx;
    return (
      (this.a = r * e - this.b * i),
      (this.b = r * i + this.b * e),
      (this.c = n * e - this.d * i),
      (this.d = n * i + this.d * e),
      (this.tx = a * e - this.ty * i),
      (this.ty = a * i + this.ty * e),
      this
    );
  }
  append(t) {
    const e = this.a,
      i = this.b,
      r = this.c,
      n = this.d;
    return (
      (this.a = t.a * e + t.b * r),
      (this.b = t.a * i + t.b * n),
      (this.c = t.c * e + t.d * r),
      (this.d = t.c * i + t.d * n),
      (this.tx = t.tx * e + t.ty * r + this.tx),
      (this.ty = t.tx * i + t.ty * n + this.ty),
      this
    );
  }
  setTransform(t, e, i, r, n, a, o, h, l) {
    return (
      (this.a = Math.cos(o + l) * n),
      (this.b = Math.sin(o + l) * n),
      (this.c = -Math.sin(o - h) * a),
      (this.d = Math.cos(o - h) * a),
      (this.tx = t - (i * this.a + r * this.c)),
      (this.ty = e - (i * this.b + r * this.d)),
      this
    );
  }
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const i = this.a,
        r = this.c;
      (this.a = i * t.a + this.b * t.c),
        (this.b = i * t.b + this.b * t.d),
        (this.c = r * t.a + this.d * t.c),
        (this.d = r * t.b + this.d * t.d);
    }
    return (
      (this.tx = e * t.a + this.ty * t.c + t.tx),
      (this.ty = e * t.b + this.ty * t.d + t.ty),
      this
    );
  }
  decompose(t) {
    const e = this.a,
      i = this.b,
      r = this.c,
      n = this.d,
      a = t.pivot,
      o = -Math.atan2(-r, n),
      h = Math.atan2(i, e),
      l = Math.abs(o + h);
    return (
      l < 1e-5 || Math.abs(Mi - l) < 1e-5
        ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
        : ((t.rotation = 0), (t.skew.x = o), (t.skew.y = h)),
      (t.scale.x = Math.sqrt(e * e + i * i)),
      (t.scale.y = Math.sqrt(r * r + n * n)),
      (t.position.x = this.tx + (a.x * e + a.y * r)),
      (t.position.y = this.ty + (a.x * i + a.y * n)),
      t
    );
  }
  invert() {
    const t = this.a,
      e = this.b,
      i = this.c,
      r = this.d,
      n = this.tx,
      a = t * r - e * i;
    return (
      (this.a = r / a),
      (this.b = -e / a),
      (this.c = -i / a),
      (this.d = t / a),
      (this.tx = (i * this.ty - r * n) / a),
      (this.ty = -(t * this.ty - e * n) / a),
      this
    );
  }
  identity() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.tx = 0),
      (this.ty = 0),
      this
    );
  }
  clone() {
    const t = new K();
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyTo(t) {
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyFrom(t) {
    return (
      (this.a = t.a),
      (this.b = t.b),
      (this.c = t.c),
      (this.d = t.d),
      (this.tx = t.tx),
      (this.ty = t.ty),
      this
    );
  }
  static get IDENTITY() {
    return new K();
  }
  static get TEMP_MATRIX() {
    return new K();
  }
}
K.prototype.toString = function () {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const ne = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  ae = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  oe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  he = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  Ds = [],
  In = [],
  ri = Math.sign;
function Co() {
  for (let s = 0; s < 16; s++) {
    const t = [];
    Ds.push(t);
    for (let e = 0; e < 16; e++) {
      const i = ri(ne[s] * ne[e] + oe[s] * ae[e]),
        r = ri(ae[s] * ne[e] + he[s] * ae[e]),
        n = ri(ne[s] * oe[e] + oe[s] * he[e]),
        a = ri(ae[s] * oe[e] + he[s] * he[e]);
      for (let o = 0; o < 16; o++)
        if (ne[o] === i && ae[o] === r && oe[o] === n && he[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let s = 0; s < 16; s++) {
    const t = new K();
    t.set(ne[s], ae[s], oe[s], he[s], 0, 0), In.push(t);
  }
}
Co();
const Z = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: (s) => ne[s],
  uY: (s) => ae[s],
  vX: (s) => oe[s],
  vY: (s) => he[s],
  inv: (s) => (s & 8 ? s & 15 : -s & 7),
  add: (s, t) => Ds[s][t],
  sub: (s, t) => Ds[s][Z.inv(t)],
  rotate180: (s) => s ^ 4,
  isVertical: (s) => (s & 3) === 2,
  byDirection: (s, t) =>
    Math.abs(s) * 2 <= Math.abs(t)
      ? t >= 0
        ? Z.S
        : Z.N
      : Math.abs(t) * 2 <= Math.abs(s)
      ? s > 0
        ? Z.E
        : Z.W
      : t > 0
      ? s > 0
        ? Z.SE
        : Z.SW
      : s > 0
      ? Z.NE
      : Z.NW,
  matrixAppendRotationInv: (s, t, e = 0, i = 0) => {
    const r = In[Z.inv(t)];
    (r.tx = e), (r.ty = i), s.append(r);
  },
};
class Ut {
  constructor(t, e, i = 0, r = 0) {
    (this._x = i), (this._y = r), (this.cb = t), (this.scope = e);
  }
  clone(t = this.cb, e = this.scope) {
    return new Ut(t, e, this._x, this._y);
  }
  set(t = 0, e = t) {
    return (
      (this._x !== t || this._y !== e) &&
        ((this._x = t), (this._y = e), this.cb.call(this.scope)),
      this
    );
  }
  copyFrom(t) {
    return (
      (this._x !== t.x || this._y !== t.y) &&
        ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
      this
    );
  }
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && ((this._x = t), this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && ((this._y = t), this.cb.call(this.scope));
  }
}
Ut.prototype.toString = function () {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const Fs = class {
  constructor() {
    (this.worldTransform = new K()),
      (this.localTransform = new K()),
      (this.position = new Ut(this.onChange, this, 0, 0)),
      (this.scale = new Ut(this.onChange, this, 1, 1)),
      (this.pivot = new Ut(this.onChange, this, 0, 0)),
      (this.skew = new Ut(this.updateSkew, this, 0, 0)),
      (this._rotation = 0),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1),
      (this._localID = 0),
      (this._currentLocalID = 0),
      (this._worldID = 0),
      (this._parentID = 0);
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    (this._cx = Math.cos(this._rotation + this.skew.y)),
      (this._sx = Math.sin(this._rotation + this.skew.y)),
      (this._cy = -Math.sin(this._rotation - this.skew.x)),
      (this._sy = Math.cos(this._rotation - this.skew.x)),
      this._localID++;
  }
  updateLocalTransform() {
    const s = this.localTransform;
    this._localID !== this._currentLocalID &&
      ((s.a = this._cx * this.scale.x),
      (s.b = this._sx * this.scale.x),
      (s.c = this._cy * this.scale.y),
      (s.d = this._sy * this.scale.y),
      (s.tx = this.position.x - (this.pivot.x * s.a + this.pivot.y * s.c)),
      (s.ty = this.position.y - (this.pivot.x * s.b + this.pivot.y * s.d)),
      (this._currentLocalID = this._localID),
      (this._parentID = -1));
  }
  updateTransform(s) {
    const t = this.localTransform;
    if (
      (this._localID !== this._currentLocalID &&
        ((t.a = this._cx * this.scale.x),
        (t.b = this._sx * this.scale.x),
        (t.c = this._cy * this.scale.y),
        (t.d = this._sy * this.scale.y),
        (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
        (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
        (this._currentLocalID = this._localID),
        (this._parentID = -1)),
      this._parentID !== s._worldID)
    ) {
      const e = s.worldTransform,
        i = this.worldTransform;
      (i.a = t.a * e.a + t.b * e.c),
        (i.b = t.a * e.b + t.b * e.d),
        (i.c = t.c * e.a + t.d * e.c),
        (i.d = t.c * e.b + t.d * e.d),
        (i.tx = t.tx * e.a + t.ty * e.c + e.tx),
        (i.ty = t.tx * e.b + t.ty * e.d + e.ty),
        (this._parentID = s._worldID),
        this._worldID++;
    }
  }
  setFromMatrix(s) {
    s.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(s) {
    this._rotation !== s && ((this._rotation = s), this.updateSkew());
  }
};
Fs.IDENTITY = new Fs();
let ar = Fs;
ar.prototype.toString = function () {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var Io = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
  Ro = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function Lr(s, t, e) {
  const i = s.createShader(t);
  return s.shaderSource(i, e), s.compileShader(i), i;
}
function ls(s) {
  const t = new Array(s);
  for (let e = 0; e < t.length; e++) t[e] = !1;
  return t;
}
function Rn(s, t) {
  switch (s) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return ls(2 * t);
    case "bvec3":
      return ls(3 * t);
    case "bvec4":
      return ls(4 * t);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const Re = [
    {
      test: (s) => s.type === "float" && s.size === 1 && !s.isArray,
      code: (s) => `
            if(uv["${s}"] !== ud["${s}"].value)
            {
                ud["${s}"].value = uv["${s}"]
                gl.uniform1f(ud["${s}"].location, uv["${s}"])
            }
            `,
    },
    {
      test: (s, t) =>
        (s.type === "sampler2D" ||
          s.type === "samplerCube" ||
          s.type === "sampler2DArray") &&
        s.size === 1 &&
        !s.isArray &&
        (t == null || t.castToBaseTexture !== void 0),
      code: (s) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${s}"], t);

            if(ud["${s}"].value !== t)
            {
                ud["${s}"].value = t;
                gl.uniform1i(ud["${s}"].location, t);
; // eslint-disable-line max-len
            }`,
    },
    {
      test: (s, t) =>
        s.type === "mat3" && s.size === 1 && !s.isArray && t.a !== void 0,
      code: (s) => `
            gl.uniformMatrix3fv(ud["${s}"].location, false, uv["${s}"].toArray(true));
            `,
      codeUbo: (s) => `
                var ${s}_matrix = uv.${s}.toArray(true);

                data[offset] = ${s}_matrix[0];
                data[offset+1] = ${s}_matrix[1];
                data[offset+2] = ${s}_matrix[2];
        
                data[offset + 4] = ${s}_matrix[3];
                data[offset + 5] = ${s}_matrix[4];
                data[offset + 6] = ${s}_matrix[5];
        
                data[offset + 8] = ${s}_matrix[6];
                data[offset + 9] = ${s}_matrix[7];
                data[offset + 10] = ${s}_matrix[8];
            `,
    },
    {
      test: (s, t) =>
        s.type === "vec2" && s.size === 1 && !s.isArray && t.x !== void 0,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${s}"].location, v.x, v.y);
                }`,
      codeUbo: (s) => `
                v = uv.${s};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
    },
    {
      test: (s) => s.type === "vec2" && s.size === 1 && !s.isArray,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${s}"].location, v[0], v[1]);
                }
            `,
    },
    {
      test: (s, t) =>
        s.type === "vec4" && s.size === 1 && !s.isArray && t.width !== void 0,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${s}"].location, v.x, v.y, v.width, v.height)
                }`,
      codeUbo: (s) => `
                    v = uv.${s};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
    },
    {
      test: (s, t) =>
        s.type === "vec4" && s.size === 1 && !s.isArray && t.red !== void 0,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${s}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
      codeUbo: (s) => `
                    v = uv.${s};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `,
    },
    {
      test: (s, t) =>
        s.type === "vec3" && s.size === 1 && !s.isArray && t.red !== void 0,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${s}"].location, v.red, v.green, v.blue)
                }`,
      codeUbo: (s) => `
                    v = uv.${s};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `,
    },
    {
      test: (s) => s.type === "vec4" && s.size === 1 && !s.isArray,
      code: (s) => `
                cv = ud["${s}"].value;
                v = uv["${s}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${s}"].location, v[0], v[1], v[2], v[3])
                }`,
    },
  ],
  Po = {
    float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
    vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
    int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
    uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
    uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
    uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
    bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
    bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  },
  Mo = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    uint: "gl.uniform1uiv(location, v)",
    uvec2: "gl.uniform2uiv(location, v)",
    uvec3: "gl.uniform3uiv(location, v)",
    uvec4: "gl.uniform4uiv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)",
  };
function Bo(s, t) {
  var i;
  const e = [
    `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
  ];
  for (const r in s.uniforms) {
    const n = t[r];
    if (!n) {
      ((i = s.uniforms[r]) == null ? void 0 : i.group) === !0 &&
        (s.uniforms[r].ubo
          ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `)
          : e.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
      continue;
    }
    const a = s.uniforms[r];
    let o = !1;
    for (let h = 0; h < Re.length; h++)
      if (Re[h].test(n, a)) {
        e.push(Re[h].code(r, a)), (o = !0);
        break;
      }
    if (!o) {
      const h = (n.size === 1 && !n.isArray ? Po : Mo)[n.type].replace(
        "location",
        `ud["${r}"].location`
      );
      e.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${h};`);
    }
  }
  return new Function(
    "ud",
    "uv",
    "renderer",
    "syncData",
    e.join(`
`)
  );
}
const Pn = {};
let xe = Pn;
function Do() {
  if (xe === Pn || (xe != null && xe.isContextLost())) {
    const s = I.ADAPTER.createCanvas();
    let t;
    I.PREFER_ENV >= ge.WEBGL2 && (t = s.getContext("webgl2", {})),
      t ||
        ((t =
          s.getContext("webgl", {}) || s.getContext("experimental-webgl", {})),
        t ? t.getExtension("WEBGL_draw_buffers") : (t = null)),
      (xe = t);
  }
  return xe;
}
let ni;
function Fo() {
  if (!ni) {
    ni = pt.MEDIUM;
    const s = Do();
    if (s && s.getShaderPrecisionFormat) {
      const t = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT);
      t && (ni = t.precision ? pt.HIGH : pt.MEDIUM);
    }
  }
  return ni;
}
function Nr(s, t) {
  const e = s
      .getShaderSource(t)
      .split(
        `
`
      )
      .map((l, d) => `${d}: ${l}`),
    i = s.getShaderInfoLog(t),
    r = i.split(`
`),
    n = {},
    a = r
      .map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")))
      .filter((l) => (l && !n[l] ? ((n[l] = !0), !0) : !1)),
    o = [""];
  a.forEach((l) => {
    (e[l - 1] = `%c${e[l - 1]}%c`),
      o.push(
        "background: #FF0000; color:#FFFFFF; font-size: 10px",
        "font-size: 10px"
      );
  });
  const h = e.join(`
`);
  (o[0] = h),
    console.error(i),
    console.groupCollapsed("click to view full shader code"),
    console.warn(...o),
    console.groupEnd();
}
function Lo(s, t, e, i) {
  s.getProgramParameter(t, s.LINK_STATUS) ||
    (s.getShaderParameter(e, s.COMPILE_STATUS) || Nr(s, e),
    s.getShaderParameter(i, s.COMPILE_STATUS) || Nr(s, i),
    console.error("PixiJS Error: Could not initialize shader."),
    s.getProgramInfoLog(t) !== "" &&
      console.warn(
        "PixiJS Warning: gl.getProgramInfoLog()",
        s.getProgramInfoLog(t)
      ));
}
const No = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1,
};
function Mn(s) {
  return No[s];
}
let ai = null;
const Or = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
};
function Bn(s, t) {
  if (!ai) {
    const e = Object.keys(Or);
    ai = {};
    for (let i = 0; i < e.length; ++i) {
      const r = e[i];
      ai[s[r]] = Or[r];
    }
  }
  return ai[t];
}
function Ur(s, t, e) {
  if (s.substring(0, 9) !== "precision") {
    let i = t;
    return (
      t === pt.HIGH && e !== pt.HIGH && (i = pt.MEDIUM),
      `precision ${i} float;
${s}`
    );
  } else if (e !== pt.HIGH && s.substring(0, 15) === "precision highp")
    return s.replace("precision highp", "precision mediump");
  return s;
}
let Oe;
function Oo() {
  if (typeof Oe == "boolean") return Oe;
  try {
    Oe =
      new Function(
        "param1",
        "param2",
        "param3",
        "return param1[param2] === param3;"
      )({ a: "b" }, "a", "b") === !0;
  } catch {
    Oe = !1;
  }
  return Oe;
}
let Uo = 0;
const oi = {},
  Ls = class Te {
    constructor(t, e, i = "pixi-shader", r = {}) {
      (this.extra = {}),
        (this.id = Uo++),
        (this.vertexSrc = t || Te.defaultVertexSrc),
        (this.fragmentSrc = e || Te.defaultFragmentSrc),
        (this.vertexSrc = this.vertexSrc.trim()),
        (this.fragmentSrc = this.fragmentSrc.trim()),
        (this.extra = r),
        this.vertexSrc.substring(0, 8) !== "#version" &&
          ((i = i.replace(/\s+/g, "-")),
          oi[i] ? (oi[i]++, (i += `-${oi[i]}`)) : (oi[i] = 1),
          (this.vertexSrc = `#define SHADER_NAME ${i}
${this.vertexSrc}`),
          (this.fragmentSrc = `#define SHADER_NAME ${i}
${this.fragmentSrc}`),
          (this.vertexSrc = Ur(
            this.vertexSrc,
            Te.defaultVertexPrecision,
            pt.HIGH
          )),
          (this.fragmentSrc = Ur(
            this.fragmentSrc,
            Te.defaultFragmentPrecision,
            Fo()
          ))),
        (this.glPrograms = {}),
        (this.syncUniforms = null);
    }
    static get defaultVertexSrc() {
      return Ro;
    }
    static get defaultFragmentSrc() {
      return Io;
    }
    static from(t, e, i) {
      const r = t + e;
      let n = Pr[r];
      return n || (Pr[r] = n = new Te(t, e, i)), n;
    }
  };
(Ls.defaultVertexPrecision = pt.HIGH),
  (Ls.defaultFragmentPrecision = Ot.apple.device ? pt.HIGH : pt.MEDIUM);
let kt = Ls,
  ko = 0;
class bt {
  constructor(t, e, i) {
    (this.group = !0),
      (this.syncUniforms = {}),
      (this.dirtyId = 0),
      (this.id = ko++),
      (this.static = !!e),
      (this.ubo = !!i),
      t instanceof Q
        ? ((this.buffer = t),
          (this.buffer.type = Mt.UNIFORM_BUFFER),
          (this.autoManage = !1),
          (this.ubo = !0))
        : ((this.uniforms = t),
          this.ubo &&
            ((this.buffer = new Q(new Float32Array(1))),
            (this.buffer.type = Mt.UNIFORM_BUFFER),
            (this.autoManage = !0)));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(t, e, i) {
    if (!this.ubo) this.uniforms[t] = new bt(e, i);
    else
      throw new Error(
        "[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them"
      );
  }
  static from(t, e, i) {
    return new bt(t, e, i);
  }
  static uboFrom(t, e) {
    return new bt(t, e ?? !0, !0);
  }
}
class Bt {
  constructor(t, e) {
    (this.uniformBindCount = 0),
      (this.program = t),
      e
        ? e instanceof bt
          ? (this.uniformGroup = e)
          : (this.uniformGroup = new bt(e))
        : (this.uniformGroup = new bt({})),
      (this.disposeRunner = new vt("disposeShader"));
  }
  checkUniformExists(t, e) {
    if (e.uniforms[t]) return !0;
    for (const i in e.uniforms) {
      const r = e.uniforms[i];
      if (r.group === !0 && this.checkUniformExists(t, r)) return !0;
    }
    return !1;
  }
  destroy() {
    (this.uniformGroup = null),
      this.disposeRunner.emit(this),
      this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(t, e, i) {
    const r = kt.from(t, e);
    return new Bt(r, i);
  }
}
class Go {
  constructor(t, e) {
    if (
      ((this.vertexSrc = t),
      (this.fragTemplate = e),
      (this.programCache = {}),
      (this.defaultGroupCache = {}),
      !e.includes("%count%"))
    )
      throw new Error('Fragment template must contain "%count%".');
    if (!e.includes("%forloop%"))
      throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const i = new Int32Array(t);
      for (let n = 0; n < t; n++) i[n] = n;
      this.defaultGroupCache[t] = bt.from({ uSamplers: i }, !0);
      let r = this.fragTemplate;
      (r = r.replace(/%count%/gi, `${t}`)),
        (r = r.replace(/%forloop%/gi, this.generateSampleSrc(t))),
        (this.programCache[t] = new kt(this.vertexSrc, r));
    }
    const e = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new K(),
      default: this.defaultGroupCache[t],
    };
    return new Bt(this.programCache[t], e);
  }
  generateSampleSrc(t) {
    let e = "";
    (e += `
`),
      (e += `
`);
    for (let i = 0; i < t; i++)
      i > 0 &&
        (e += `
else `),
        i < t - 1 && (e += `if(vTextureId < ${i}.5)`),
        (e += `
{`),
        (e += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`),
        (e += `
}`);
    return (
      (e += `
`),
      (e += `
`),
      e
    );
  }
}
class Ns {
  constructor() {
    (this.elements = []), (this.ids = []), (this.count = 0);
  }
  clear() {
    for (let t = 0; t < this.count; t++) this.elements[t] = null;
    this.count = 0;
  }
}
function Ho() {
  return !Ot.apple.device;
}
function Xo(s) {
  let t = !0;
  const e = I.ADAPTER.getNavigator();
  if (Ot.tablet || Ot.phone) {
    if (Ot.apple.device) {
      const i = e.userAgent.match(/OS (\d+)_(\d+)?/);
      i && parseInt(i[1], 10) < 11 && (t = !1);
    }
    if (Ot.android.device) {
      const i = e.userAgent.match(/Android\s([0-9.]*)/);
      i && parseInt(i[1], 10) < 7 && (t = !1);
    }
  }
  return t ? s : 4;
}
class ji {
  constructor(t) {
    this.renderer = t;
  }
  flush() {}
  destroy() {
    this.renderer = null;
  }
  start() {}
  stop() {
    this.flush();
  }
  render(t) {}
}
var Vo = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
  zo = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Ge = class _t extends ji {
  constructor(t) {
    super(t),
      this.setShaderGenerator(),
      (this.geometryClass = Cn),
      (this.vertexSize = 6),
      (this.state = Ft.for2d()),
      (this.size = _t.defaultBatchSize * 4),
      (this._vertexCount = 0),
      (this._indexCount = 0),
      (this._bufferedElements = []),
      (this._bufferedTextures = []),
      (this._bufferSize = 0),
      (this._shader = null),
      (this._packedGeometries = []),
      (this._packedGeometryPoolSize = 2),
      (this._flushId = 0),
      (this._aBuffers = {}),
      (this._iBuffers = {}),
      (this.maxTextures = 1),
      this.renderer.on("prerender", this.onPrerender, this),
      t.runners.contextChange.add(this),
      (this._dcIndex = 0),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      (this._tempBoundTextures = []);
  }
  static get defaultMaxTextures() {
    return (
      (this._defaultMaxTextures = this._defaultMaxTextures ?? Xo(32)),
      this._defaultMaxTextures
    );
  }
  static set defaultMaxTextures(t) {
    this._defaultMaxTextures = t;
  }
  static get canUploadSameBuffer() {
    return (
      (this._canUploadSameBuffer = this._canUploadSameBuffer ?? Ho()),
      this._canUploadSameBuffer
    );
  }
  static set canUploadSameBuffer(t) {
    this._canUploadSameBuffer = t;
  }
  get MAX_TEXTURES() {
    return (
      z(
        "7.1.0",
        "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"
      ),
      this.maxTextures
    );
  }
  static get defaultVertexSrc() {
    return zo;
  }
  static get defaultFragmentTemplate() {
    return Vo;
  }
  setShaderGenerator({
    vertex: t = _t.defaultVertexSrc,
    fragment: e = _t.defaultFragmentTemplate,
  } = {}) {
    this.shaderGenerator = new Go(t, e);
  }
  contextChange() {
    const t = this.renderer.gl;
    I.PREFER_ENV === ge.WEBGL_LEGACY
      ? (this.maxTextures = 1)
      : ((this.maxTextures = Math.min(
          t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
          _t.defaultMaxTextures
        )),
        (this.maxTextures = xo(this.maxTextures, t))),
      (this._shader = this.shaderGenerator.generateShader(this.maxTextures));
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const { _drawCallPool: t, _textureArrayPool: e } = _t,
      i = this.size / 4,
      r = Math.floor(i / this.maxTextures) + 1;
    for (; t.length < i; ) t.push(new Bs());
    for (; e.length < r; ) e.push(new Ns());
    for (let n = 0; n < this.maxTextures; n++)
      this._tempBoundTextures[n] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(t) {
    t._texture.valid &&
      (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(),
      (this._vertexCount += t.vertexData.length / 2),
      (this._indexCount += t.indices.length),
      (this._bufferedTextures[this._bufferSize] = t._texture.baseTexture),
      (this._bufferedElements[this._bufferSize++] = t));
  }
  buildTexturesAndDrawCalls() {
    const { _bufferedTextures: t, maxTextures: e } = this,
      i = _t._textureArrayPool,
      r = this.renderer.batch,
      n = this._tempBoundTextures,
      a = this.renderer.textureGC.count;
    let o = ++k._globalBatch,
      h = 0,
      l = i[0],
      d = 0;
    r.copyBoundTextures(n, e);
    for (let c = 0; c < this._bufferSize; ++c) {
      const u = t[c];
      (t[c] = null),
        u._batchEnabled !== o &&
          (l.count >= e &&
            (r.boundArray(l, n, o, e),
            this.buildDrawCalls(l, d, c),
            (d = c),
            (l = i[++h]),
            ++o),
          (u._batchEnabled = o),
          (u.touched = a),
          (l.elements[l.count++] = u));
    }
    l.count > 0 &&
      (r.boundArray(l, n, o, e),
      this.buildDrawCalls(l, d, this._bufferSize),
      ++h,
      ++o);
    for (let c = 0; c < n.length; c++) n[c] = null;
    k._globalBatch = o;
  }
  buildDrawCalls(t, e, i) {
    const {
        _bufferedElements: r,
        _attributeBuffer: n,
        _indexBuffer: a,
        vertexSize: o,
      } = this,
      h = _t._drawCallPool;
    let l = this._dcIndex,
      d = this._aIndex,
      c = this._iIndex,
      u = h[l];
    (u.start = this._iIndex), (u.texArray = t);
    for (let p = e; p < i; ++p) {
      const f = r[p],
        m = f._texture.baseTexture,
        g = En[m.alphaMode ? 1 : 0][f.blendMode];
      (r[p] = null),
        e < p &&
          u.blend !== g &&
          ((u.size = c - u.start),
          (e = p),
          (u = h[++l]),
          (u.texArray = t),
          (u.start = c)),
        this.packInterleavedGeometry(f, n, a, d, c),
        (d += (f.vertexData.length / 2) * o),
        (c += f.indices.length),
        (u.blend = g);
    }
    e < i && ((u.size = c - u.start), ++l),
      (this._dcIndex = l),
      (this._aIndex = d),
      (this._iIndex = c);
  }
  bindAndClearTexArray(t) {
    const e = this.renderer.texture;
    for (let i = 0; i < t.count; i++)
      e.bind(t.elements[i], t.ids[i]), (t.elements[i] = null);
    t.count = 0;
  }
  updateGeometry() {
    const { _packedGeometries: t, _attributeBuffer: e, _indexBuffer: i } = this;
    _t.canUploadSameBuffer
      ? (t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(i),
        this.renderer.geometry.updateBuffers())
      : (this._packedGeometryPoolSize <= this._flushId &&
          (this._packedGeometryPoolSize++,
          (t[this._flushId] = new this.geometryClass())),
        t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(i),
        this.renderer.geometry.bind(t[this._flushId]),
        this.renderer.geometry.updateBuffers(),
        this._flushId++);
  }
  drawBatches() {
    const t = this._dcIndex,
      { gl: e, state: i } = this.renderer,
      r = _t._drawCallPool;
    let n = null;
    for (let a = 0; a < t; a++) {
      const { texArray: o, type: h, size: l, start: d, blend: c } = r[a];
      n !== o && ((n = o), this.bindAndClearTexArray(o)),
        (this.state.blendMode = c),
        i.set(this.state),
        e.drawElements(h, l, e.UNSIGNED_SHORT, d * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 &&
      ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
      (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._dcIndex = 0),
      this.buildTexturesAndDrawCalls(),
      this.updateGeometry(),
      this.drawBatches(),
      (this._bufferSize = 0),
      (this._vertexCount = 0),
      (this._indexCount = 0));
  }
  start() {
    this.renderer.state.set(this.state),
      this.renderer.texture.ensureSamplerType(this.maxTextures),
      this.renderer.shader.bind(this._shader),
      _t.canUploadSameBuffer &&
        this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let t = 0; t < this._packedGeometryPoolSize; t++)
      this._packedGeometries[t] && this._packedGeometries[t].destroy();
    this.renderer.off("prerender", this.onPrerender, this),
      (this._aBuffers = null),
      (this._iBuffers = null),
      (this._packedGeometries = null),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      this._shader && (this._shader.destroy(), (this._shader = null)),
      super.destroy();
  }
  getAttributeBuffer(t) {
    const e = Ri(Math.ceil(t / 8)),
      i = Ir(e),
      r = e * 8;
    this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
    let n = this._aBuffers[r];
    return n || (this._aBuffers[r] = n = new Rs(r * this.vertexSize * 4)), n;
  }
  getIndexBuffer(t) {
    const e = Ri(Math.ceil(t / 12)),
      i = Ir(e),
      r = e * 12;
    this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
    let n = this._iBuffers[i];
    return n || (this._iBuffers[i] = n = new Uint16Array(r)), n;
  }
  packInterleavedGeometry(t, e, i, r, n) {
    const { uint32View: a, float32View: o } = e,
      h = r / this.vertexSize,
      l = t.uvs,
      d = t.indices,
      c = t.vertexData,
      u = t._texture.baseTexture._batchLocation,
      p = Math.min(t.worldAlpha, 1),
      f = q.shared
        .setValue(t._tintRGB)
        .toPremultiplied(p, t._texture.baseTexture.alphaMode > 0);
    for (let m = 0; m < c.length; m += 2)
      (o[r++] = c[m]),
        (o[r++] = c[m + 1]),
        (o[r++] = l[m]),
        (o[r++] = l[m + 1]),
        (a[r++] = f),
        (o[r++] = u);
    for (let m = 0; m < d.length; m++) i[n++] = h + d[m];
  }
};
(Ge.defaultBatchSize = 4096),
  (Ge.extension = { name: "batch", type: A.RendererPlugin }),
  (Ge._drawCallPool = []),
  (Ge._textureArrayPool = []);
let le = Ge;
M.add(le);
var Wo = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
  $o = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Os = class He extends Bt {
  constructor(t, e, i) {
    const r = kt.from(t || He.defaultVertexSrc, e || He.defaultFragmentSrc);
    super(r, i),
      (this.padding = 0),
      (this.resolution = He.defaultResolution),
      (this.multisample = He.defaultMultisample),
      (this.enabled = !0),
      (this.autoFit = !0),
      (this.state = new Ft());
  }
  apply(t, e, i, r, n) {
    t.applyFilter(this, e, i, r);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution = t;
  }
  static get defaultVertexSrc() {
    return $o;
  }
  static get defaultFragmentSrc() {
    return Wo;
  }
};
(Os.defaultResolution = 1), (Os.defaultMultisample = et.NONE);
let ht = Os;
class Bi {
  constructor() {
    (this.clearBeforeRender = !0),
      (this._backgroundColor = new q(0)),
      (this.alpha = 1);
  }
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender;
    const { backgroundColor: e, background: i, backgroundAlpha: r } = t,
      n = i ?? e;
    n !== void 0 && (this.color = n), (this.alpha = r);
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(t) {
    this._backgroundColor.setValue(t);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {}
}
(Bi.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: !0,
}),
  (Bi.extension = {
    type: [A.RendererSystem, A.CanvasRendererSystem],
    name: "background",
  });
M.add(Bi);
class Dn {
  constructor(t) {
    (this.renderer = t),
      (this.emptyRenderer = new ji(t)),
      (this.currentRenderer = this.emptyRenderer);
  }
  setObjectRenderer(t) {
    this.currentRenderer !== t &&
      (this.currentRenderer.stop(),
      (this.currentRenderer = t),
      this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(t, e) {
    const { boundTextures: i } = this.renderer.texture;
    for (let r = e - 1; r >= 0; --r)
      (t[r] = i[r] || null), t[r] && (t[r]._batchLocation = r);
  }
  boundArray(t, e, i, r) {
    const { elements: n, ids: a, count: o } = t;
    let h = 0;
    for (let l = 0; l < o; l++) {
      const d = n[l],
        c = d._batchLocation;
      if (c >= 0 && c < r && e[c] === d) {
        a[l] = c;
        continue;
      }
      for (; h < r; ) {
        const u = e[h];
        if (u && u._batchEnabled === i && u._batchLocation === h) {
          h++;
          continue;
        }
        (a[l] = h), (d._batchLocation = h), (e[h] = d);
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
Dn.extension = { type: A.RendererSystem, name: "batch" };
M.add(Dn);
let kr = 0;
class Di {
  constructor(t) {
    (this.renderer = t),
      (this.webGLVersion = 1),
      (this.extensions = {}),
      (this.supports = { uint32Indices: !1 }),
      (this.handleContextLost = this.handleContextLost.bind(this)),
      (this.handleContextRestored = this.handleContextRestored.bind(this));
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(t) {
    (this.gl = t), (this.renderer.gl = t), (this.renderer.CONTEXT_UID = kr++);
  }
  init(t) {
    if (t.context) this.initFromContext(t.context);
    else {
      const e = this.renderer.background.alpha < 1,
        i = t.premultipliedAlpha;
      (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
        (this.useContextAlpha = t.useContextAlpha),
        (this.powerPreference = t.powerPreference),
        this.initFromOptions({
          alpha: e,
          premultipliedAlpha: i,
          antialias: t.antialias,
          stencil: !0,
          preserveDrawingBuffer: t.preserveDrawingBuffer,
          powerPreference: t.powerPreference,
        });
    }
  }
  initFromContext(t) {
    (this.gl = t),
      this.validateContext(t),
      (this.renderer.gl = t),
      (this.renderer.CONTEXT_UID = kr++),
      this.renderer.runners.contextChange.emit(t);
    const e = this.renderer.view;
    e.addEventListener !== void 0 &&
      (e.addEventListener("webglcontextlost", this.handleContextLost, !1),
      e.addEventListener(
        "webglcontextrestored",
        this.handleContextRestored,
        !1
      ));
  }
  initFromOptions(t) {
    const e = this.createContext(this.renderer.view, t);
    this.initFromContext(e);
  }
  createContext(t, e) {
    let i;
    if ((I.PREFER_ENV >= ge.WEBGL2 && (i = t.getContext("webgl2", e)), i))
      this.webGLVersion = 2;
    else if (
      ((this.webGLVersion = 1),
      (i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)),
      !i)
    )
      throw new Error(
        "This browser does not support WebGL. Try using the canvas renderer"
      );
    return (this.gl = i), this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: t } = this,
      e = {
        loseContext: t.getExtension("WEBGL_lose_context"),
        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
        s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: t.getExtension("WEBGL_compressed_texture_etc"),
        etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc:
          t.getExtension("WEBGL_compressed_texture_pvrtc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: t.getExtension("WEBGL_compressed_texture_atc"),
        astc: t.getExtension("WEBGL_compressed_texture_astc"),
        bptc: t.getExtension("EXT_texture_compression_bptc"),
      };
    this.webGLVersion === 1
      ? Object.assign(this.extensions, e, {
          drawBuffers: t.getExtension("WEBGL_draw_buffers"),
          depthTexture: t.getExtension("WEBGL_depth_texture"),
          vertexArrayObject:
            t.getExtension("OES_vertex_array_object") ||
            t.getExtension("MOZ_OES_vertex_array_object") ||
            t.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: t.getExtension("OES_element_index_uint"),
          floatTexture: t.getExtension("OES_texture_float"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          textureHalfFloat: t.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: t.getExtension(
            "OES_texture_half_float_linear"
          ),
        })
      : this.webGLVersion === 2 &&
        Object.assign(this.extensions, e, {
          colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
        });
  }
  handleContextLost(t) {
    t.preventDefault(),
      setTimeout(() => {
        this.gl.isContextLost() &&
          this.extensions.loseContext &&
          this.extensions.loseContext.restoreContext();
      }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    (this.renderer = null),
      t.removeEventListener !== void 0 &&
        (t.removeEventListener("webglcontextlost", this.handleContextLost),
        t.removeEventListener(
          "webglcontextrestored",
          this.handleContextRestored
        )),
      this.gl.useProgram(null),
      this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(t) {
    const e = t.getContextAttributes(),
      i =
        "WebGL2RenderingContext" in globalThis &&
        t instanceof globalThis.WebGL2RenderingContext;
    i && (this.webGLVersion = 2),
      e &&
        !e.stencil &&
        console.warn(
          "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
        );
    const r = i || !!t.getExtension("OES_element_index_uint");
    (this.supports.uint32Indices = r),
      r ||
        console.warn(
          "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
        );
  }
}
(Di.defaultOptions = {
  context: null,
  antialias: !1,
  premultipliedAlpha: !0,
  preserveDrawingBuffer: !1,
  powerPreference: "default",
}),
  (Di.extension = { type: A.RendererSystem, name: "context" });
M.add(Di);
class Us {
  constructor(t, e) {
    if (
      ((this.width = Math.round(t)),
      (this.height = Math.round(e)),
      !this.width || !this.height)
    )
      throw new Error("Framebuffer width or height is zero");
    (this.stencil = !1),
      (this.depth = !1),
      (this.dirtyId = 0),
      (this.dirtyFormat = 0),
      (this.dirtySize = 0),
      (this.depthTexture = null),
      (this.colorTextures = []),
      (this.glFramebuffers = {}),
      (this.disposeRunner = new vt("disposeFramebuffer")),
      (this.multisample = et.NONE);
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(t = 0, e) {
    return (
      (this.colorTextures[t] =
        e ||
        new k(null, {
          scaleMode: Nt.NEAREST,
          resolution: 1,
          mipmap: Dt.OFF,
          width: this.width,
          height: this.height,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  addDepthTexture(t) {
    return (
      (this.depthTexture =
        t ||
        new k(null, {
          scaleMode: Nt.NEAREST,
          resolution: 1,
          width: this.width,
          height: this.height,
          mipmap: Dt.OFF,
          format: T.DEPTH_COMPONENT,
          type: D.UNSIGNED_SHORT,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  enableDepth() {
    return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(t, e) {
    if (((t = Math.round(t)), (e = Math.round(e)), !t || !e))
      throw new Error("Framebuffer width and height must not be zero");
    if (!(t === this.width && e === this.height)) {
      (this.width = t), (this.height = e), this.dirtyId++, this.dirtySize++;
      for (let i = 0; i < this.colorTextures.length; i++) {
        const r = this.colorTextures[i],
          n = r.resolution;
        r.setSize(t / n, e / n);
      }
      if (this.depthTexture) {
        const i = this.depthTexture.resolution;
        this.depthTexture.setSize(t / i, e / i);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroyDepthTexture() {
    this.depthTexture &&
      (this.depthTexture.destroy(),
      (this.depthTexture = null),
      ++this.dirtyId,
      ++this.dirtyFormat);
  }
}
class Fn extends k {
  constructor(t = {}) {
    if (typeof t == "number") {
      const e = arguments[0],
        i = arguments[1],
        r = arguments[2],
        n = arguments[3];
      t = { width: e, height: i, scaleMode: r, resolution: n };
    }
    (t.width = t.width ?? 100),
      (t.height = t.height ?? 100),
      t.multisample ?? (t.multisample = et.NONE),
      super(null, t),
      (this.mipmap = Dt.OFF),
      (this.valid = !0),
      (this._clear = new q([0, 0, 0, 0])),
      (this.framebuffer = new Us(
        this.realWidth,
        this.realHeight
      ).addColorTexture(0, this)),
      (this.framebuffer.multisample = t.multisample),
      (this.maskStack = []),
      (this.filterStack = [{}]);
  }
  set clearColor(t) {
    this._clear.setValue(t);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e) {
    this.framebuffer.resize(t * this.resolution, e * this.resolution),
      this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(),
      this.framebuffer.destroyDepthTexture(),
      (this.framebuffer = null);
  }
}
class Ht extends Ye {
  constructor(t) {
    const e = t,
      i = e.naturalWidth || e.videoWidth || e.displayWidth || e.width,
      r = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
    super(i, r), (this.source = t), (this.noSubImage = !1);
  }
  static crossOrigin(t, e, i) {
    i === void 0 && !e.startsWith("data:")
      ? (t.crossOrigin = mo(e))
      : i !== !1 && (t.crossOrigin = typeof i == "string" ? i : "anonymous");
  }
  upload(t, e, i, r) {
    const n = t.gl,
      a = e.realWidth,
      o = e.realHeight;
    if (
      ((r = r || this.source),
      typeof HTMLImageElement < "u" && r instanceof HTMLImageElement)
    ) {
      if (!r.complete || r.naturalWidth === 0) return !1;
    } else if (
      typeof HTMLVideoElement < "u" &&
      r instanceof HTMLVideoElement &&
      r.readyState <= 1
    )
      return !1;
    return (
      n.pixelStorei(
        n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        e.alphaMode === lt.UNPACK
      ),
      !this.noSubImage &&
      e.target === n.TEXTURE_2D &&
      i.width === a &&
      i.height === o
        ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, i.type, r)
        : ((i.width = a),
          (i.height = o),
          n.texImage2D(e.target, 0, i.internalFormat, e.format, i.type, r)),
      !0
    );
  }
  update() {
    if (this.destroyed) return;
    const t = this.source,
      e = t.naturalWidth || t.videoWidth || t.width,
      i = t.naturalHeight || t.videoHeight || t.height;
    this.resize(e, i), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class Ln extends Ht {
  constructor(t, e) {
    if (((e = e || {}), typeof t == "string")) {
      const i = new Image();
      Ht.crossOrigin(i, t, e.crossorigin), (i.src = t), (t = i);
    }
    super(t),
      !t.complete &&
        this._width &&
        this._height &&
        ((this._width = 0), (this._height = 0)),
      (this.url = t.src),
      (this._process = null),
      (this.preserveBitmap = !1),
      (this.createBitmap =
        (e.createBitmap ?? I.CREATE_IMAGE_BITMAP) &&
        !!globalThis.createImageBitmap),
      (this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null),
      (this.bitmap = null),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load(t) {
    return this._load
      ? this._load
      : (t !== void 0 && (this.createBitmap = t),
        (this._load = new Promise((e, i) => {
          const r = this.source;
          this.url = r.src;
          const n = () => {
            this.destroyed ||
              ((r.onload = null),
              (r.onerror = null),
              this.update(),
              (this._load = null),
              this.createBitmap ? e(this.process()) : e(this));
          };
          r.complete && r.src
            ? n()
            : ((r.onload = n),
              (r.onerror = (a) => {
                i(a), this.onError.emit(a);
              }));
        })),
        this._load);
  }
  process() {
    const t = this.source;
    if (this._process !== null) return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    const e = globalThis.createImageBitmap,
      i = !t.crossOrigin || t.crossOrigin === "anonymous";
    return (
      (this._process = fetch(t.src, { mode: i ? "cors" : "no-cors" })
        .then((r) => r.blob())
        .then((r) =>
          e(r, 0, 0, t.width, t.height, {
            premultiplyAlpha:
              this.alphaMode === null || this.alphaMode === lt.UNPACK
                ? "premultiply"
                : "none",
          })
        )
        .then((r) =>
          this.destroyed
            ? Promise.reject()
            : ((this.bitmap = r),
              this.update(),
              (this._process = null),
              Promise.resolve(this))
        )),
      this._process
    );
  }
  upload(t, e, i) {
    if (
      (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
      !this.createBitmap)
    )
      return super.upload(t, e, i);
    if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
    if ((super.upload(t, e, i, this.bitmap), !this.preserveBitmap)) {
      let r = !0;
      const n = e._glTextures;
      for (const a in n) {
        const o = n[a];
        if (o !== i && o.dirtyId !== e.dirtyId) {
          r = !1;
          break;
        }
      }
      r && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
    }
    return !0;
  }
  dispose() {
    (this.source.onload = null),
      (this.source.onerror = null),
      super.dispose(),
      this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
      (this._process = null),
      (this._load = null);
  }
  static test(t) {
    return (
      typeof HTMLImageElement < "u" &&
      (typeof t == "string" || t instanceof HTMLImageElement)
    );
  }
}
class or {
  constructor() {
    (this.x0 = 0),
      (this.y0 = 0),
      (this.x1 = 1),
      (this.y1 = 0),
      (this.x2 = 1),
      (this.y2 = 1),
      (this.x3 = 0),
      (this.y3 = 1),
      (this.uvsFloat32 = new Float32Array(8));
  }
  set(t, e, i) {
    const r = e.width,
      n = e.height;
    if (i) {
      const a = t.width / 2 / r,
        o = t.height / 2 / n,
        h = t.x / r + a,
        l = t.y / n + o;
      (i = Z.add(i, Z.NW)),
        (this.x0 = h + a * Z.uX(i)),
        (this.y0 = l + o * Z.uY(i)),
        (i = Z.add(i, 2)),
        (this.x1 = h + a * Z.uX(i)),
        (this.y1 = l + o * Z.uY(i)),
        (i = Z.add(i, 2)),
        (this.x2 = h + a * Z.uX(i)),
        (this.y2 = l + o * Z.uY(i)),
        (i = Z.add(i, 2)),
        (this.x3 = h + a * Z.uX(i)),
        (this.y3 = l + o * Z.uY(i));
    } else
      (this.x0 = t.x / r),
        (this.y0 = t.y / n),
        (this.x1 = (t.x + t.width) / r),
        (this.y1 = t.y / n),
        (this.x2 = (t.x + t.width) / r),
        (this.y2 = (t.y + t.height) / n),
        (this.x3 = t.x / r),
        (this.y3 = (t.y + t.height) / n);
    (this.uvsFloat32[0] = this.x0),
      (this.uvsFloat32[1] = this.y0),
      (this.uvsFloat32[2] = this.x1),
      (this.uvsFloat32[3] = this.y1),
      (this.uvsFloat32[4] = this.x2),
      (this.uvsFloat32[5] = this.y2),
      (this.uvsFloat32[6] = this.x3),
      (this.uvsFloat32[7] = this.y3);
  }
}
or.prototype.toString = function () {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const Gr = new or();
function hi(s) {
  (s.destroy = function () {}),
    (s.on = function () {}),
    (s.once = function () {}),
    (s.emit = function () {});
}
class P extends qe {
  constructor(t, e, i, r, n, a, o) {
    if (
      (super(),
      (this.noFrame = !1),
      e || ((this.noFrame = !0), (e = new H(0, 0, 1, 1))),
      t instanceof P && (t = t.baseTexture),
      (this.baseTexture = t),
      (this._frame = e),
      (this.trim = r),
      (this.valid = !1),
      (this.destroyed = !1),
      (this._uvs = Gr),
      (this.uvMatrix = null),
      (this.orig = i || e),
      (this._rotate = Number(n || 0)),
      n === !0)
    )
      this._rotate = 2;
    else if (this._rotate % 2 !== 0)
      throw new Error(
        "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
      );
    (this.defaultAnchor = a ? new $(a.x, a.y) : new $(0, 0)),
      (this.defaultBorders = o),
      (this._updateID = 0),
      (this.textureCacheIds = []),
      t.valid
        ? this.noFrame
          ? t.valid && this.onBaseTextureUpdated(t)
          : (this.frame = e)
        : t.once("loaded", this.onBaseTextureUpdated, this),
      this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) return;
      (this._frame.width = t.width),
        (this._frame.height = t.height),
        (this.valid = !0),
        this.updateUvs();
    } else this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const { resource: e } = this.baseTexture;
        e != null && e.url && wt[e.url] && P.removeFromCache(e.url),
          this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
        this.baseTexture.off("update", this.onBaseTextureUpdated, this),
        (this.baseTexture = null);
    }
    (this._frame = null),
      (this._uvs = null),
      (this.trim = null),
      (this.orig = null),
      (this.valid = !1),
      P.removeFromCache(this),
      (this.textureCacheIds = null),
      (this.destroyed = !0),
      this.emit("destroyed", this),
      this.removeAllListeners();
  }
  clone() {
    var r;
    const t = this._frame.clone(),
      e = this._frame === this.orig ? t : this.orig.clone(),
      i = new P(
        this.baseTexture,
        !this.noFrame && t,
        e,
        (r = this.trim) == null ? void 0 : r.clone(),
        this.rotate,
        this.defaultAnchor,
        this.defaultBorders
      );
    return this.noFrame && (i._frame = t), i;
  }
  updateUvs() {
    this._uvs === Gr && (this._uvs = new or()),
      this._uvs.set(this._frame, this.baseTexture, this.rotate),
      this._updateID++;
  }
  static from(t, e = {}, i = I.STRICT_TEXTURE_CACHE) {
    const r = typeof t == "string";
    let n = null;
    if (r) n = t;
    else if (t instanceof k) {
      if (!t.cacheId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        (t.cacheId = `${o}-${fe()}`), k.addToCache(t, t.cacheId);
      }
      n = t.cacheId;
    } else {
      if (!t._pixiId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${fe()}`;
      }
      n = t._pixiId;
    }
    let a = wt[n];
    if (r && i && !a)
      throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
    return (
      !a && !(t instanceof k)
        ? (e.resolution || (e.resolution = Gt(t)),
          (a = new P(new k(t, e))),
          (a.baseTexture.cacheId = n),
          k.addToCache(a.baseTexture, n),
          P.addToCache(a, n))
        : !a && t instanceof k && ((a = new P(t)), P.addToCache(a, n)),
      a
    );
  }
  static fromURL(t, e) {
    const i = Object.assign(
        { autoLoad: !1 },
        e == null ? void 0 : e.resourceOptions
      ),
      r = P.from(t, Object.assign({ resourceOptions: i }, e), !1),
      n = r.baseTexture.resource;
    return r.baseTexture.valid
      ? Promise.resolve(r)
      : n.load().then(() => Promise.resolve(r));
  }
  static fromBuffer(t, e, i, r) {
    return new P(k.fromBuffer(t, e, i, r));
  }
  static fromLoader(t, e, i, r) {
    const n = new k(
        t,
        Object.assign(
          { scaleMode: k.defaultOptions.scaleMode, resolution: Gt(e) },
          r
        )
      ),
      { resource: a } = n;
    a instanceof Ln && (a.url = e);
    const o = new P(n);
    return (
      i || (i = e),
      k.addToCache(o.baseTexture, i),
      P.addToCache(o, i),
      i !== e && (k.addToCache(o.baseTexture, e), P.addToCache(o, e)),
      o.baseTexture.valid
        ? Promise.resolve(o)
        : new Promise((h) => {
            o.baseTexture.once("loaded", () => h(o));
          })
    );
  }
  static addToCache(t, e) {
    e &&
      (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
      wt[e] &&
        wt[e] !== t &&
        console.warn(
          `Texture added to the cache with an id [${e}] that already had an entry`
        ),
      (wt[e] = t));
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = wt[t];
      if (e) {
        const i = e.textureCacheIds.indexOf(t);
        return i > -1 && e.textureCacheIds.splice(i, 1), delete wt[t], e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e)
        wt[t.textureCacheIds[e]] === t && delete wt[t.textureCacheIds[e]];
      return (t.textureCacheIds.length = 0), t;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(t) {
    (this._frame = t), (this.noFrame = !1);
    const { x: e, y: i, width: r, height: n } = t,
      a = e + r > this.baseTexture.width,
      o = i + n > this.baseTexture.height;
    if (a || o) {
      const h = a && o ? "and" : "or",
        l = `X: ${e} + ${r} = ${e + r} > ${this.baseTexture.width}`,
        d = `Y: ${i} + ${n} = ${i + n} > ${this.baseTexture.height}`;
      throw new Error(
        `Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${d}`
      );
    }
    (this.valid = r && n && this.baseTexture.valid),
      !this.trim && !this.rotate && (this.orig = t),
      this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    (this._rotate = t), this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return (
      P._EMPTY ||
        ((P._EMPTY = new P(new k())), hi(P._EMPTY), hi(P._EMPTY.baseTexture)),
      P._EMPTY
    );
  }
  static get WHITE() {
    if (!P._WHITE) {
      const t = I.ADAPTER.createCanvas(16, 16),
        e = t.getContext("2d");
      (t.width = 16),
        (t.height = 16),
        (e.fillStyle = "white"),
        e.fillRect(0, 0, 16, 16),
        (P._WHITE = new P(k.from(t))),
        hi(P._WHITE),
        hi(P._WHITE.baseTexture);
    }
    return P._WHITE;
  }
}
class _e extends P {
  constructor(t, e) {
    super(t, e),
      (this.valid = !0),
      (this.filterFrame = null),
      (this.filterPoolKey = null),
      this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e, i = !0) {
    const r = this.baseTexture.resolution,
      n = Math.round(t * r) / r,
      a = Math.round(e * r) / r;
    (this.valid = n > 0 && a > 0),
      (this._frame.width = this.orig.width = n),
      (this._frame.height = this.orig.height = a),
      i && this.baseTexture.resize(n, a),
      this.updateUvs();
  }
  setResolution(t) {
    const { baseTexture: e } = this;
    e.resolution !== t &&
      (e.setResolution(t), this.resize(e.width, e.height, !1));
  }
  static create(t) {
    return new _e(new Fn(t));
  }
}
class Nn {
  constructor(t) {
    (this.texturePool = {}),
      (this.textureOptions = t || {}),
      (this.enableFullScreen = !1),
      (this._pixelsWidth = 0),
      (this._pixelsHeight = 0);
  }
  createTexture(t, e, i = et.NONE) {
    const r = new Fn(
      Object.assign(
        { width: t, height: e, resolution: 1, multisample: i },
        this.textureOptions
      )
    );
    return new _e(r);
  }
  getOptimalTexture(t, e, i = 1, r = et.NONE) {
    let n;
    (t = Math.max(Math.ceil(t * i - 1e-6), 1)),
      (e = Math.max(Math.ceil(e * i - 1e-6), 1)),
      !this.enableFullScreen ||
      t !== this._pixelsWidth ||
      e !== this._pixelsHeight
        ? ((t = Ri(t)),
          (e = Ri(e)),
          (n = (((t & 65535) << 16) | (e & 65535)) >>> 0),
          r > 1 && (n += r * 4294967296))
        : (n = r > 1 ? -r : -1),
      this.texturePool[n] || (this.texturePool[n] = []);
    let a = this.texturePool[n].pop();
    return (
      a || (a = this.createTexture(t, e, r)),
      (a.filterPoolKey = n),
      a.setResolution(i),
      a
    );
  }
  getFilterTexture(t, e, i) {
    const r = this.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      i || et.NONE
    );
    return (r.filterFrame = t.filterFrame), r;
  }
  returnTexture(t) {
    const e = t.filterPoolKey;
    (t.filterFrame = null), this.texturePool[e].push(t);
  }
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  clear(t) {
    if (((t = t !== !1), t))
      for (const e in this.texturePool) {
        const i = this.texturePool[e];
        if (i) for (let r = 0; r < i.length; r++) i[r].destroy(!0);
      }
    this.texturePool = {};
  }
  setScreenSize(t) {
    if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const e in this.texturePool) {
        if (!(Number(e) < 0)) continue;
        const i = this.texturePool[e];
        if (i) for (let r = 0; r < i.length; r++) i[r].destroy(!0);
        this.texturePool[e] = [];
      }
      (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
    }
  }
}
Nn.SCREEN_KEY = -1;
class jo extends Kt {
  constructor() {
    super(),
      this.addAttribute(
        "aVertexPosition",
        new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      ).addIndex([0, 1, 3, 2]);
  }
}
class On extends Kt {
  constructor() {
    super(),
      (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
      (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
      (this.vertexBuffer = new Q(this.vertices)),
      (this.uvBuffer = new Q(this.uvs)),
      this.addAttribute("aVertexPosition", this.vertexBuffer)
        .addAttribute("aTextureCoord", this.uvBuffer)
        .addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(t, e) {
    let i = 0,
      r = 0;
    return (
      (this.uvs[0] = i),
      (this.uvs[1] = r),
      (this.uvs[2] = i + e.width / t.width),
      (this.uvs[3] = r),
      (this.uvs[4] = i + e.width / t.width),
      (this.uvs[5] = r + e.height / t.height),
      (this.uvs[6] = i),
      (this.uvs[7] = r + e.height / t.height),
      (i = e.x),
      (r = e.y),
      (this.vertices[0] = i),
      (this.vertices[1] = r),
      (this.vertices[2] = i + e.width),
      (this.vertices[3] = r),
      (this.vertices[4] = i + e.width),
      (this.vertices[5] = r + e.height),
      (this.vertices[6] = i),
      (this.vertices[7] = r + e.height),
      this.invalidate(),
      this
    );
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class Yo {
  constructor() {
    (this.renderTexture = null),
      (this.target = null),
      (this.legacy = !1),
      (this.resolution = 1),
      (this.multisample = et.NONE),
      (this.sourceFrame = new H()),
      (this.destinationFrame = new H()),
      (this.bindingSourceFrame = new H()),
      (this.bindingDestinationFrame = new H()),
      (this.filters = []),
      (this.transform = null);
  }
  clear() {
    (this.target = null), (this.filters = null), (this.renderTexture = null);
  }
}
const li = [new $(), new $(), new $(), new $()],
  ds = new K();
class Un {
  constructor(t) {
    (this.renderer = t),
      (this.defaultFilterStack = [{}]),
      (this.texturePool = new Nn()),
      (this.statePool = []),
      (this.quad = new jo()),
      (this.quadUv = new On()),
      (this.tempRect = new H()),
      (this.activeState = {}),
      (this.globalUniforms = new bt(
        {
          outputFrame: new H(),
          inputSize: new Float32Array(4),
          inputPixel: new Float32Array(4),
          inputClamp: new Float32Array(4),
          resolution: 1,
          filterArea: new Float32Array(4),
          filterClamp: new Float32Array(4),
        },
        !0
      )),
      (this.forceClear = !1),
      (this.useMaxPadding = !1);
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(t, e) {
    const i = this.renderer,
      r = this.defaultFilterStack,
      n = this.statePool.pop() || new Yo(),
      a = i.renderTexture;
    let o, h;
    if (a.current) {
      const g = a.current;
      (o = g.resolution), (h = g.multisample);
    } else (o = i.resolution), (h = i.multisample);
    let l = e[0].resolution || o,
      d = e[0].multisample ?? h,
      c = e[0].padding,
      u = e[0].autoFit,
      p = e[0].legacy ?? !0;
    for (let g = 1; g < e.length; g++) {
      const _ = e[g];
      (l = Math.min(l, _.resolution || o)),
        (d = Math.min(d, _.multisample ?? h)),
        (c = this.useMaxPadding ? Math.max(c, _.padding) : c + _.padding),
        (u = u && _.autoFit),
        (p = p || (_.legacy ?? !0));
    }
    r.length === 1 && (this.defaultFilterStack[0].renderTexture = a.current),
      r.push(n),
      (n.resolution = l),
      (n.multisample = d),
      (n.legacy = p),
      (n.target = t),
      n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
      n.sourceFrame.pad(c);
    const f = this.tempRect.copyFrom(a.sourceFrame);
    i.projection.transform &&
      this.transformAABB(ds.copyFrom(i.projection.transform).invert(), f),
      u
        ? (n.sourceFrame.fit(f),
          (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) &&
            ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)))
        : n.sourceFrame.intersects(f) ||
          ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)),
      this.roundFrame(
        n.sourceFrame,
        a.current ? a.current.resolution : i.resolution,
        a.sourceFrame,
        a.destinationFrame,
        i.projection.transform
      ),
      (n.renderTexture = this.getOptimalFilterTexture(
        n.sourceFrame.width,
        n.sourceFrame.height,
        l,
        d
      )),
      (n.filters = e),
      (n.destinationFrame.width = n.renderTexture.width),
      (n.destinationFrame.height = n.renderTexture.height);
    const m = this.tempRect;
    (m.x = 0),
      (m.y = 0),
      (m.width = n.sourceFrame.width),
      (m.height = n.sourceFrame.height),
      (n.renderTexture.filterFrame = n.sourceFrame),
      n.bindingSourceFrame.copyFrom(a.sourceFrame),
      n.bindingDestinationFrame.copyFrom(a.destinationFrame),
      (n.transform = i.projection.transform),
      (i.projection.transform = null),
      a.bind(n.renderTexture, n.sourceFrame, m),
      i.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const t = this.defaultFilterStack,
      e = t.pop(),
      i = e.filters;
    this.activeState = e;
    const r = this.globalUniforms.uniforms;
    (r.outputFrame = e.sourceFrame), (r.resolution = e.resolution);
    const n = r.inputSize,
      a = r.inputPixel,
      o = r.inputClamp;
    if (
      ((n[0] = e.destinationFrame.width),
      (n[1] = e.destinationFrame.height),
      (n[2] = 1 / n[0]),
      (n[3] = 1 / n[1]),
      (a[0] = Math.round(n[0] * e.resolution)),
      (a[1] = Math.round(n[1] * e.resolution)),
      (a[2] = 1 / a[0]),
      (a[3] = 1 / a[1]),
      (o[0] = 0.5 * a[2]),
      (o[1] = 0.5 * a[3]),
      (o[2] = e.sourceFrame.width * n[2] - 0.5 * a[2]),
      (o[3] = e.sourceFrame.height * n[3] - 0.5 * a[3]),
      e.legacy)
    ) {
      const l = r.filterArea;
      (l[0] = e.destinationFrame.width),
        (l[1] = e.destinationFrame.height),
        (l[2] = e.sourceFrame.x),
        (l[3] = e.sourceFrame.y),
        (r.filterClamp = r.inputClamp);
    }
    this.globalUniforms.update();
    const h = t[t.length - 1];
    if ((this.renderer.framebuffer.blit(), i.length === 1))
      i[0].apply(this, e.renderTexture, h.renderTexture, Rt.BLEND, e),
        this.returnFilterTexture(e.renderTexture);
    else {
      let l = e.renderTexture,
        d = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
      d.filterFrame = l.filterFrame;
      let c = 0;
      for (c = 0; c < i.length - 1; ++c) {
        c === 1 &&
          e.multisample > 1 &&
          ((d = this.getOptimalFilterTexture(l.width, l.height, e.resolution)),
          (d.filterFrame = l.filterFrame)),
          i[c].apply(this, l, d, Rt.CLEAR, e);
        const u = l;
        (l = d), (d = u);
      }
      i[c].apply(this, l, h.renderTexture, Rt.BLEND, e),
        c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture),
        this.returnFilterTexture(l),
        this.returnFilterTexture(d);
    }
    e.clear(), this.statePool.push(e);
  }
  bindAndClear(t, e = Rt.CLEAR) {
    const { renderTexture: i, state: r } = this.renderer;
    if (
      (t ===
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? (this.renderer.projection.transform = this.activeState.transform)
        : (this.renderer.projection.transform = null),
      t == null ? void 0 : t.filterFrame)
    ) {
      const a = this.tempRect;
      (a.x = 0),
        (a.y = 0),
        (a.width = t.filterFrame.width),
        (a.height = t.filterFrame.height),
        i.bind(t, t.filterFrame, a);
    } else
      t !==
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? i.bind(t)
        : this.renderer.renderTexture.bind(
            t,
            this.activeState.bindingSourceFrame,
            this.activeState.bindingDestinationFrame
          );
    const n = r.stateId & 1 || this.forceClear;
    (e === Rt.CLEAR || (e === Rt.BLIT && n)) &&
      this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(t, e, i, r) {
    const n = this.renderer;
    n.state.set(t.state),
      this.bindAndClear(i, r),
      (t.uniforms.uSampler = e),
      (t.uniforms.filterGlobals = this.globalUniforms),
      n.shader.bind(t),
      (t.legacy = !!t.program.attributeData.aTextureCoord),
      t.legacy
        ? (this.quadUv.map(e._frame, e.filterFrame),
          n.geometry.bind(this.quadUv),
          n.geometry.draw(Pt.TRIANGLES))
        : (n.geometry.bind(this.quad), n.geometry.draw(Pt.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(t, e) {
    const { sourceFrame: i, destinationFrame: r } = this.activeState,
      { orig: n } = e._texture,
      a = t.set(r.width, 0, 0, r.height, i.x, i.y),
      o = e.worldTransform.copyTo(K.TEMP_MATRIX);
    return (
      o.invert(),
      a.prepend(o),
      a.scale(1 / n.width, 1 / n.height),
      a.translate(e.anchor.x, e.anchor.y),
      a
    );
  }
  destroy() {
    (this.renderer = null), this.texturePool.clear(!1);
  }
  getOptimalFilterTexture(t, e, i = 1, r = et.NONE) {
    return this.texturePool.getOptimalTexture(t, e, i, r);
  }
  getFilterTexture(t, e, i) {
    if (typeof t == "number") {
      const n = t;
      (t = e), (e = n);
    }
    t = t || this.activeState.renderTexture;
    const r = this.texturePool.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      i || et.NONE
    );
    return (r.filterFrame = t.filterFrame), r;
  }
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  emptyPool() {
    this.texturePool.clear(!0);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(t, e) {
    const i = li[0],
      r = li[1],
      n = li[2],
      a = li[3];
    i.set(e.left, e.top),
      r.set(e.left, e.bottom),
      n.set(e.right, e.top),
      a.set(e.right, e.bottom),
      t.apply(i, i),
      t.apply(r, r),
      t.apply(n, n),
      t.apply(a, a);
    const o = Math.min(i.x, r.x, n.x, a.x),
      h = Math.min(i.y, r.y, n.y, a.y),
      l = Math.max(i.x, r.x, n.x, a.x),
      d = Math.max(i.y, r.y, n.y, a.y);
    (e.x = o), (e.y = h), (e.width = l - o), (e.height = d - h);
  }
  roundFrame(t, e, i, r, n) {
    if (!(t.width <= 0 || t.height <= 0 || i.width <= 0 || i.height <= 0)) {
      if (n) {
        const { a, b: o, c: h, d: l } = n;
        if (
          (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4) &&
          (Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4)
        )
          return;
      }
      (n = n ? ds.copyFrom(n) : ds.identity()),
        n
          .translate(-i.x, -i.y)
          .scale(r.width / i.width, r.height / i.height)
          .translate(r.x, r.y),
        this.transformAABB(n, t),
        t.ceil(e),
        this.transformAABB(n.invert(), t);
    }
  }
}
Un.extension = { type: A.RendererSystem, name: "filter" };
M.add(Un);
class qo {
  constructor(t) {
    (this.framebuffer = t),
      (this.stencil = null),
      (this.dirtyId = -1),
      (this.dirtyFormat = -1),
      (this.dirtySize = -1),
      (this.multisample = et.NONE),
      (this.msaaBuffer = null),
      (this.blitFramebuffer = null),
      (this.mipLevel = 0);
  }
}
const Ko = new H();
class kn {
  constructor(t) {
    (this.renderer = t),
      (this.managedFramebuffers = []),
      (this.unknownFramebuffer = new Us(10, 10)),
      (this.msaaSamples = null);
  }
  contextChange() {
    this.disposeAll(!0);
    const t = (this.gl = this.renderer.gl);
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.current = this.unknownFramebuffer),
      (this.viewport = new H()),
      (this.hasMRT = !0),
      (this.writeDepthTexture = !0),
      this.renderer.context.webGLVersion === 1)
    ) {
      let e = this.renderer.context.extensions.drawBuffers,
        i = this.renderer.context.extensions.depthTexture;
      I.PREFER_ENV === ge.WEBGL_LEGACY && ((e = null), (i = null)),
        e
          ? (t.drawBuffers = (r) => e.drawBuffersWEBGL(r))
          : ((this.hasMRT = !1), (t.drawBuffers = () => {})),
        i || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = t.getInternalformatParameter(
        t.RENDERBUFFER,
        t.RGBA8,
        t.SAMPLES
      );
  }
  bind(t, e, i = 0) {
    const { gl: r } = this;
    if (t) {
      const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      this.current !== t &&
        ((this.current = t), r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)),
        n.mipLevel !== i && (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = i)),
        n.dirtyId !== t.dirtyId &&
          ((n.dirtyId = t.dirtyId),
          n.dirtyFormat !== t.dirtyFormat
            ? ((n.dirtyFormat = t.dirtyFormat),
              (n.dirtySize = t.dirtySize),
              this.updateFramebuffer(t, i))
            : n.dirtySize !== t.dirtySize &&
              ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
      for (let a = 0; a < t.colorTextures.length; a++) {
        const o = t.colorTextures[a];
        this.renderer.texture.unbind(o.parentTextureArray || o);
      }
      if ((t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e)) {
        const a = e.width >> i,
          o = e.height >> i,
          h = a / e.width;
        this.setViewport(e.x * h, e.y * h, a, o);
      } else {
        const a = t.width >> i,
          o = t.height >> i;
        this.setViewport(0, 0, a, o);
      }
    } else
      this.current &&
        ((this.current = null), r.bindFramebuffer(r.FRAMEBUFFER, null)),
        e
          ? this.setViewport(e.x, e.y, e.width, e.height)
          : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(t, e, i, r) {
    const n = this.viewport;
    (t = Math.round(t)),
      (e = Math.round(e)),
      (i = Math.round(i)),
      (r = Math.round(r)),
      (n.width !== i || n.height !== r || n.x !== t || n.y !== e) &&
        ((n.x = t),
        (n.y = e),
        (n.width = i),
        (n.height = r),
        this.gl.viewport(t, e, i, r));
  }
  get size() {
    return this.current
      ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
      : {
          x: 0,
          y: 0,
          width: this.renderer.width,
          height: this.renderer.height,
        };
  }
  clear(t, e, i, r, n = As.COLOR | As.DEPTH) {
    const { gl: a } = this;
    a.clearColor(t, e, i, r), a.clear(n);
  }
  initFramebuffer(t) {
    const { gl: e } = this,
      i = new qo(e.createFramebuffer());
    return (
      (i.multisample = this.detectSamples(t.multisample)),
      (t.glFramebuffers[this.CONTEXT_UID] = i),
      this.managedFramebuffers.push(t),
      t.disposeRunner.add(this),
      i
    );
  }
  resizeFramebuffer(t) {
    const { gl: e } = this,
      i = t.glFramebuffers[this.CONTEXT_UID];
    if (i.stencil) {
      e.bindRenderbuffer(e.RENDERBUFFER, i.stencil);
      let a;
      this.renderer.context.webGLVersion === 1
        ? (a = e.DEPTH_STENCIL)
        : t.depth && t.stencil
        ? (a = e.DEPTH24_STENCIL8)
        : t.depth
        ? (a = e.DEPTH_COMPONENT24)
        : (a = e.STENCIL_INDEX8),
        i.msaaBuffer
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              i.multisample,
              a,
              t.width,
              t.height
            )
          : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height);
    }
    const r = t.colorTextures;
    let n = r.length;
    e.drawBuffers || (n = Math.min(n, 1));
    for (let a = 0; a < n; a++) {
      const o = r[a],
        h = o.parentTextureArray || o;
      this.renderer.texture.bind(h, 0),
        a === 0 &&
          i.msaaBuffer &&
          (e.bindRenderbuffer(e.RENDERBUFFER, i.msaaBuffer),
          e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            i.multisample,
            h._glTextures[this.CONTEXT_UID].internalFormat,
            t.width,
            t.height
          ));
    }
    t.depthTexture &&
      this.writeDepthTexture &&
      this.renderer.texture.bind(t.depthTexture, 0);
  }
  updateFramebuffer(t, e) {
    const { gl: i } = this,
      r = t.glFramebuffers[this.CONTEXT_UID],
      n = t.colorTextures;
    let a = n.length;
    i.drawBuffers || (a = Math.min(a, 1)),
      r.multisample > 1 && this.canMultisampleFramebuffer(t)
        ? (r.msaaBuffer = r.msaaBuffer || i.createRenderbuffer())
        : r.msaaBuffer &&
          (i.deleteRenderbuffer(r.msaaBuffer),
          (r.msaaBuffer = null),
          r.blitFramebuffer &&
            (r.blitFramebuffer.dispose(), (r.blitFramebuffer = null)));
    const o = [];
    for (let h = 0; h < a; h++) {
      const l = n[h],
        d = l.parentTextureArray || l;
      this.renderer.texture.bind(d, 0),
        h === 0 && r.msaaBuffer
          ? (i.bindRenderbuffer(i.RENDERBUFFER, r.msaaBuffer),
            i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              r.multisample,
              d._glTextures[this.CONTEXT_UID].internalFormat,
              t.width,
              t.height
            ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              r.msaaBuffer
            ))
          : (i.framebufferTexture2D(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + h,
              l.target,
              d._glTextures[this.CONTEXT_UID].texture,
              e
            ),
            o.push(i.COLOR_ATTACHMENT0 + h));
    }
    if (
      (o.length > 1 && i.drawBuffers(o),
      t.depthTexture && this.writeDepthTexture)
    ) {
      const h = t.depthTexture;
      this.renderer.texture.bind(h, 0),
        i.framebufferTexture2D(
          i.FRAMEBUFFER,
          i.DEPTH_ATTACHMENT,
          i.TEXTURE_2D,
          h._glTextures[this.CONTEXT_UID].texture,
          e
        );
    }
    if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
      r.stencil = r.stencil || i.createRenderbuffer();
      let h, l;
      this.renderer.context.webGLVersion === 1
        ? ((h = i.DEPTH_STENCIL_ATTACHMENT), (l = i.DEPTH_STENCIL))
        : t.depth && t.stencil
        ? ((h = i.DEPTH_STENCIL_ATTACHMENT), (l = i.DEPTH24_STENCIL8))
        : t.depth
        ? ((h = i.DEPTH_ATTACHMENT), (l = i.DEPTH_COMPONENT24))
        : ((h = i.STENCIL_ATTACHMENT), (l = i.STENCIL_INDEX8)),
        i.bindRenderbuffer(i.RENDERBUFFER, r.stencil),
        r.msaaBuffer
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              r.multisample,
              l,
              t.width,
              t.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, l, t.width, t.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, h, i.RENDERBUFFER, r.stencil);
    } else r.stencil && (i.deleteRenderbuffer(r.stencil), (r.stencil = null));
  }
  canMultisampleFramebuffer(t) {
    return (
      this.renderer.context.webGLVersion !== 1 &&
      t.colorTextures.length <= 1 &&
      !t.depthTexture
    );
  }
  detectSamples(t) {
    const { msaaSamples: e } = this;
    let i = et.NONE;
    if (t <= 1 || e === null) return i;
    for (let r = 0; r < e.length; r++)
      if (e[r] <= t) {
        i = e[r];
        break;
      }
    return i === 1 && (i = et.NONE), i;
  }
  blit(t, e, i) {
    const { current: r, renderer: n, gl: a, CONTEXT_UID: o } = this;
    if (n.context.webGLVersion !== 2 || !r) return;
    const h = r.glFramebuffers[o];
    if (!h) return;
    if (!t) {
      if (!h.msaaBuffer) return;
      const d = r.colorTextures[0];
      if (!d) return;
      h.blitFramebuffer ||
        ((h.blitFramebuffer = new Us(r.width, r.height)),
        h.blitFramebuffer.addColorTexture(0, d)),
        (t = h.blitFramebuffer),
        t.colorTextures[0] !== d &&
          ((t.colorTextures[0] = d), t.dirtyId++, t.dirtyFormat++),
        (t.width !== r.width || t.height !== r.height) &&
          ((t.width = r.width),
          (t.height = r.height),
          t.dirtyId++,
          t.dirtySize++);
    }
    e || ((e = Ko), (e.width = r.width), (e.height = r.height)), i || (i = e);
    const l = e.width === i.width && e.height === i.height;
    this.bind(t),
      a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer),
      a.blitFramebuffer(
        e.left,
        e.top,
        e.right,
        e.bottom,
        i.left,
        i.top,
        i.right,
        i.bottom,
        a.COLOR_BUFFER_BIT,
        l ? a.NEAREST : a.LINEAR
      ),
      a.bindFramebuffer(
        a.READ_FRAMEBUFFER,
        t.glFramebuffers[this.CONTEXT_UID].framebuffer
      );
  }
  disposeFramebuffer(t, e) {
    const i = t.glFramebuffers[this.CONTEXT_UID],
      r = this.gl;
    if (!i) return;
    delete t.glFramebuffers[this.CONTEXT_UID];
    const n = this.managedFramebuffers.indexOf(t);
    n >= 0 && this.managedFramebuffers.splice(n, 1),
      t.disposeRunner.remove(this),
      e ||
        (r.deleteFramebuffer(i.framebuffer),
        i.msaaBuffer && r.deleteRenderbuffer(i.msaaBuffer),
        i.stencil && r.deleteRenderbuffer(i.stencil)),
      i.blitFramebuffer && this.disposeFramebuffer(i.blitFramebuffer, e);
  }
  disposeAll(t) {
    const e = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let i = 0; i < e.length; i++) this.disposeFramebuffer(e[i], t);
  }
  forceStencil() {
    const t = this.current;
    if (!t) return;
    const e = t.glFramebuffers[this.CONTEXT_UID];
    if (!e || (e.stencil && t.stencil)) return;
    t.stencil = !0;
    const i = t.width,
      r = t.height,
      n = this.gl,
      a = (e.stencil = n.createRenderbuffer());
    n.bindRenderbuffer(n.RENDERBUFFER, a);
    let o, h;
    this.renderer.context.webGLVersion === 1
      ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH_STENCIL))
      : t.depth
      ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH24_STENCIL8))
      : ((o = n.STENCIL_ATTACHMENT), (h = n.STENCIL_INDEX8)),
      e.msaaBuffer
        ? n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            e.multisample,
            h,
            i,
            r
          )
        : n.renderbufferStorage(n.RENDERBUFFER, h, i, r),
      n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a);
  }
  reset() {
    (this.current = this.unknownFramebuffer), (this.viewport = new H());
  }
  destroy() {
    this.renderer = null;
  }
}
kn.extension = { type: A.RendererSystem, name: "framebuffer" };
M.add(kn);
const cs = { 5126: 4, 5123: 2, 5121: 1 };
class Gn {
  constructor(t) {
    (this.renderer = t),
      (this._activeGeometry = null),
      (this._activeVao = null),
      (this.hasVao = !0),
      (this.hasInstance = !0),
      (this.canUseUInt32ElementIndex = !1),
      (this.managedGeometries = {});
  }
  contextChange() {
    this.disposeAll(!0);
    const t = (this.gl = this.renderer.gl),
      e = this.renderer.context;
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID), e.webGLVersion !== 2)
    ) {
      let i = this.renderer.context.extensions.vertexArrayObject;
      I.PREFER_ENV === ge.WEBGL_LEGACY && (i = null),
        i
          ? ((t.createVertexArray = () => i.createVertexArrayOES()),
            (t.bindVertexArray = (r) => i.bindVertexArrayOES(r)),
            (t.deleteVertexArray = (r) => i.deleteVertexArrayOES(r)))
          : ((this.hasVao = !1),
            (t.createVertexArray = () => null),
            (t.bindVertexArray = () => null),
            (t.deleteVertexArray = () => null));
    }
    if (e.webGLVersion !== 2) {
      const i = t.getExtension("ANGLE_instanced_arrays");
      i
        ? ((t.vertexAttribDivisor = (r, n) => i.vertexAttribDivisorANGLE(r, n)),
          (t.drawElementsInstanced = (r, n, a, o, h) =>
            i.drawElementsInstancedANGLE(r, n, a, o, h)),
          (t.drawArraysInstanced = (r, n, a, o) =>
            i.drawArraysInstancedANGLE(r, n, a, o)))
        : (this.hasInstance = !1);
    }
    this.canUseUInt32ElementIndex =
      e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex;
  }
  bind(t, e) {
    e = e || this.renderer.shader.shader;
    const { gl: i } = this;
    let r = t.glVertexArrayObjects[this.CONTEXT_UID],
      n = !1;
    r ||
      ((this.managedGeometries[t.id] = t),
      t.disposeRunner.add(this),
      (t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}),
      (n = !0));
    const a = r[e.program.id] || this.initGeometryVao(t, e, n);
    (this._activeGeometry = t),
      this._activeVao !== a &&
        ((this._activeVao = a),
        this.hasVao ? i.bindVertexArray(a) : this.activateVao(t, e.program)),
      this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const t = this._activeGeometry,
      e = this.renderer.buffer;
    for (let i = 0; i < t.buffers.length; i++) {
      const r = t.buffers[i];
      e.update(r);
    }
  }
  checkCompatibility(t, e) {
    const i = t.attributes,
      r = e.attributeData;
    for (const n in r)
      if (!i[n])
        throw new Error(
          `shader and geometry incompatible, geometry missing the "${n}" attribute`
        );
  }
  getSignature(t, e) {
    const i = t.attributes,
      r = e.attributeData,
      n = ["g", t.id];
    for (const a in i) r[a] && n.push(a, r[a].location);
    return n.join("-");
  }
  initGeometryVao(t, e, i = !0) {
    const r = this.gl,
      n = this.CONTEXT_UID,
      a = this.renderer.buffer,
      o = e.program;
    o.glPrograms[n] || this.renderer.shader.generateProgram(e),
      this.checkCompatibility(t, o);
    const h = this.getSignature(t, o),
      l = t.glVertexArrayObjects[this.CONTEXT_UID];
    let d = l[h];
    if (d) return (l[o.id] = d), d;
    const c = t.buffers,
      u = t.attributes,
      p = {},
      f = {};
    for (const m in c) (p[m] = 0), (f[m] = 0);
    for (const m in u)
      !u[m].size && o.attributeData[m]
        ? (u[m].size = o.attributeData[m].size)
        : u[m].size ||
          console.warn(
            `PIXI Geometry attribute '${m}' size cannot be determined (likely the bound shader does not have the attribute)`
          ),
        (p[u[m].buffer] += u[m].size * cs[u[m].type]);
    for (const m in u) {
      const g = u[m],
        _ = g.size;
      g.stride === void 0 &&
        (p[g.buffer] === _ * cs[g.type]
          ? (g.stride = 0)
          : (g.stride = p[g.buffer])),
        g.start === void 0 &&
          ((g.start = f[g.buffer]), (f[g.buffer] += _ * cs[g.type]));
    }
    (d = r.createVertexArray()), r.bindVertexArray(d);
    for (let m = 0; m < c.length; m++) {
      const g = c[m];
      a.bind(g), i && g._glBuffers[n].refCount++;
    }
    return (
      this.activateVao(t, o),
      (l[o.id] = d),
      (l[h] = d),
      r.bindVertexArray(null),
      a.unbind(Mt.ARRAY_BUFFER),
      d
    );
  }
  disposeGeometry(t, e) {
    var o;
    if (!this.managedGeometries[t.id]) return;
    delete this.managedGeometries[t.id];
    const i = t.glVertexArrayObjects[this.CONTEXT_UID],
      r = this.gl,
      n = t.buffers,
      a = (o = this.renderer) == null ? void 0 : o.buffer;
    if ((t.disposeRunner.remove(this), !!i)) {
      if (a)
        for (let h = 0; h < n.length; h++) {
          const l = n[h]._glBuffers[this.CONTEXT_UID];
          l && (l.refCount--, l.refCount === 0 && !e && a.dispose(n[h], e));
        }
      if (!e) {
        for (const h in i)
          if (h[0] === "g") {
            const l = i[h];
            this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
          }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const e = Object.keys(this.managedGeometries);
    for (let i = 0; i < e.length; i++)
      this.disposeGeometry(this.managedGeometries[e[i]], t);
  }
  activateVao(t, e) {
    const i = this.gl,
      r = this.CONTEXT_UID,
      n = this.renderer.buffer,
      a = t.buffers,
      o = t.attributes;
    t.indexBuffer && n.bind(t.indexBuffer);
    let h = null;
    for (const l in o) {
      const d = o[l],
        c = a[d.buffer],
        u = c._glBuffers[r];
      if (e.attributeData[l]) {
        h !== u && (n.bind(c), (h = u));
        const p = e.attributeData[l].location;
        if (
          (i.enableVertexAttribArray(p),
          i.vertexAttribPointer(
            p,
            d.size,
            d.type || i.FLOAT,
            d.normalized,
            d.stride,
            d.start
          ),
          d.instance)
        )
          if (this.hasInstance) i.vertexAttribDivisor(p, d.divisor);
          else
            throw new Error(
              "geometry error, GPU Instancing is not supported on this device"
            );
      }
    }
  }
  draw(t, e, i, r) {
    const { gl: n } = this,
      a = this._activeGeometry;
    if (a.indexBuffer) {
      const o = a.indexBuffer.data.BYTES_PER_ELEMENT,
        h = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
      o === 2 || (o === 4 && this.canUseUInt32ElementIndex)
        ? a.instanced
          ? n.drawElementsInstanced(
              t,
              e || a.indexBuffer.data.length,
              h,
              (i || 0) * o,
              r || 1
            )
          : n.drawElements(t, e || a.indexBuffer.data.length, h, (i || 0) * o)
        : console.warn("unsupported index buffer type: uint32");
    } else
      a.instanced
        ? n.drawArraysInstanced(t, i, e || a.getSize(), r || 1)
        : n.drawArrays(t, i, e || a.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null),
      (this._activeVao = null),
      (this._activeGeometry = null);
  }
  destroy() {
    this.renderer = null;
  }
}
Gn.extension = { type: A.RendererSystem, name: "geometry" };
M.add(Gn);
const Hr = new K();
class Hn {
  constructor(t, e) {
    (this._texture = t),
      (this.mapCoord = new K()),
      (this.uClampFrame = new Float32Array(4)),
      (this.uClampOffset = new Float32Array(2)),
      (this._textureID = -1),
      (this._updateID = 0),
      (this.clampOffset = 0),
      (this.clampMargin = typeof e > "u" ? 0.5 : e),
      (this.isSimple = !1);
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    (this._texture = t), (this._textureID = -1);
  }
  multiplyUvs(t, e) {
    e === void 0 && (e = t);
    const i = this.mapCoord;
    for (let r = 0; r < t.length; r += 2) {
      const n = t[r],
        a = t[r + 1];
      (e[r] = n * i.a + a * i.c + i.tx), (e[r + 1] = n * i.b + a * i.d + i.ty);
    }
    return e;
  }
  update(t) {
    const e = this._texture;
    if (!e || !e.valid || (!t && this._textureID === e._updateID)) return !1;
    (this._textureID = e._updateID), this._updateID++;
    const i = e._uvs;
    this.mapCoord.set(
      i.x1 - i.x0,
      i.y1 - i.y0,
      i.x3 - i.x0,
      i.y3 - i.y0,
      i.x0,
      i.y0
    );
    const r = e.orig,
      n = e.trim;
    n &&
      (Hr.set(
        r.width / n.width,
        0,
        0,
        r.height / n.height,
        -n.x / n.width,
        -n.y / n.height
      ),
      this.mapCoord.append(Hr));
    const a = e.baseTexture,
      o = this.uClampFrame,
      h = this.clampMargin / a.resolution,
      l = this.clampOffset;
    return (
      (o[0] = (e._frame.x + h + l) / a.width),
      (o[1] = (e._frame.y + h + l) / a.height),
      (o[2] = (e._frame.x + e._frame.width - h + l) / a.width),
      (o[3] = (e._frame.y + e._frame.height - h + l) / a.height),
      (this.uClampOffset[0] = l / a.realWidth),
      (this.uClampOffset[1] = l / a.realHeight),
      (this.isSimple =
        e._frame.width === a.width &&
        e._frame.height === a.height &&
        e.rotate === 0),
      !0
    );
  }
}
var Zo = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
  Jo = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class Qo extends ht {
  constructor(t, e, i) {
    let r = null;
    typeof t != "string" &&
      e === void 0 &&
      i === void 0 &&
      ((r = t), (t = void 0), (e = void 0), (i = void 0)),
      super(t || Jo, e || Zo, i),
      (this.maskSprite = r),
      (this.maskMatrix = new K());
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    (this._maskSprite = t),
      this._maskSprite && (this._maskSprite.renderable = !1);
  }
  apply(t, e, i, r) {
    const n = this._maskSprite,
      a = n._texture;
    a.valid &&
      (a.uvMatrix || (a.uvMatrix = new Hn(a, 0)),
      a.uvMatrix.update(),
      (this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1),
      (this.uniforms.mask = a),
      (this.uniforms.otherMatrix = t
        .calculateSpriteMatrix(this.maskMatrix, n)
        .prepend(a.uvMatrix.mapCoord)),
      (this.uniforms.alpha = n.worldAlpha),
      (this.uniforms.maskClamp = a.uvMatrix.uClampFrame),
      t.applyFilter(this, e, i, r));
  }
}
class th {
  constructor(t = null) {
    (this.type = st.NONE),
      (this.autoDetect = !0),
      (this.maskObject = t || null),
      (this.pooled = !1),
      (this.isMaskData = !0),
      (this.resolution = null),
      (this.multisample = ht.defaultMultisample),
      (this.enabled = !0),
      (this.colorMask = 15),
      (this._filters = null),
      (this._stencilCounter = 0),
      (this._scissorCounter = 0),
      (this._scissorRect = null),
      (this._scissorRectLocal = null),
      (this._colorMask = 15),
      (this._target = null);
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(t) {
    t
      ? this._filters
        ? (this._filters[0] = t)
        : (this._filters = [t])
      : (this._filters = null);
  }
  reset() {
    this.pooled &&
      ((this.maskObject = null), (this.type = st.NONE), (this.autoDetect = !0)),
      (this._target = null),
      (this._scissorRectLocal = null);
  }
  copyCountersOrReset(t) {
    t
      ? ((this._stencilCounter = t._stencilCounter),
        (this._scissorCounter = t._scissorCounter),
        (this._scissorRect = t._scissorRect))
      : ((this._stencilCounter = 0),
        (this._scissorCounter = 0),
        (this._scissorRect = null));
  }
}
class Xn {
  constructor(t) {
    (this.renderer = t),
      (this.enableScissor = !0),
      (this.alphaMaskPool = []),
      (this.maskDataPool = []),
      (this.maskStack = []),
      (this.alphaMaskIndex = 0);
  }
  setMaskStack(t) {
    (this.maskStack = t),
      this.renderer.scissor.setMaskStack(t),
      this.renderer.stencil.setMaskStack(t);
  }
  push(t, e) {
    let i = e;
    if (!i.isMaskData) {
      const n = this.maskDataPool.pop() || new th();
      (n.pooled = !0), (n.maskObject = e), (i = n);
    }
    const r =
      this.maskStack.length !== 0
        ? this.maskStack[this.maskStack.length - 1]
        : null;
    if (
      (i.copyCountersOrReset(r),
      (i._colorMask = r ? r._colorMask : 15),
      i.autoDetect && this.detect(i),
      (i._target = t),
      i.type !== st.SPRITE && this.maskStack.push(i),
      i.enabled)
    )
      switch (i.type) {
        case st.SCISSOR:
          this.renderer.scissor.push(i);
          break;
        case st.STENCIL:
          this.renderer.stencil.push(i);
          break;
        case st.SPRITE:
          i.copyCountersOrReset(null), this.pushSpriteMask(i);
          break;
        case st.COLOR:
          this.pushColorMask(i);
          break;
      }
    i.type === st.SPRITE && this.maskStack.push(i);
  }
  pop(t) {
    const e = this.maskStack.pop();
    if (!(!e || e._target !== t)) {
      if (e.enabled)
        switch (e.type) {
          case st.SCISSOR:
            this.renderer.scissor.pop(e);
            break;
          case st.STENCIL:
            this.renderer.stencil.pop(e.maskObject);
            break;
          case st.SPRITE:
            this.popSpriteMask(e);
            break;
          case st.COLOR:
            this.popColorMask(e);
            break;
        }
      if (
        (e.reset(),
        e.pooled && this.maskDataPool.push(e),
        this.maskStack.length !== 0)
      ) {
        const i = this.maskStack[this.maskStack.length - 1];
        i.type === st.SPRITE &&
          i._filters &&
          (i._filters[0].maskSprite = i.maskObject);
      }
    }
  }
  detect(t) {
    const e = t.maskObject;
    e
      ? e.isSprite
        ? (t.type = st.SPRITE)
        : this.enableScissor && this.renderer.scissor.testScissor(t)
        ? (t.type = st.SCISSOR)
        : (t.type = st.STENCIL)
      : (t.type = st.COLOR);
  }
  pushSpriteMask(t) {
    const { maskObject: e } = t,
      i = t._target;
    let r = t._filters;
    r ||
      ((r = this.alphaMaskPool[this.alphaMaskIndex]),
      r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new Qo()])),
      (r[0].resolution = t.resolution),
      (r[0].multisample = t.multisample),
      (r[0].maskSprite = e);
    const n = i.filterArea;
    (i.filterArea = e.getBounds(!0)),
      this.renderer.filter.push(i, r),
      (i.filterArea = n),
      t._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(t) {
    this.renderer.filter.pop(),
      t._filters
        ? (t._filters[0].maskSprite = null)
        : (this.alphaMaskIndex--,
          (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
  }
  pushColorMask(t) {
    const e = t._colorMask,
      i = (t._colorMask = e & t.colorMask);
    i !== e &&
      this.renderer.gl.colorMask(
        (i & 1) !== 0,
        (i & 2) !== 0,
        (i & 4) !== 0,
        (i & 8) !== 0
      );
  }
  popColorMask(t) {
    const e = t._colorMask,
      i =
        this.maskStack.length > 0
          ? this.maskStack[this.maskStack.length - 1]._colorMask
          : 15;
    i !== e &&
      this.renderer.gl.colorMask(
        (i & 1) !== 0,
        (i & 2) !== 0,
        (i & 4) !== 0,
        (i & 8) !== 0
      );
  }
  destroy() {
    this.renderer = null;
  }
}
Xn.extension = { type: A.RendererSystem, name: "mask" };
M.add(Xn);
class Vn {
  constructor(t) {
    (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(t) {
    const { gl: e } = this.renderer,
      i = this.getStackLength();
    this.maskStack = t;
    const r = this.getStackLength();
    r !== i &&
      (r === 0
        ? e.disable(this.glConst)
        : (e.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {}
  destroy() {
    (this.renderer = null), (this.maskStack = null);
  }
}
const Xr = new K(),
  Vr = [],
  zn = class Ti extends Vn {
    constructor(t) {
      super(t),
        (this.glConst = I.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
    }
    getStackLength() {
      const t = this.maskStack[this.maskStack.length - 1];
      return t ? t._scissorCounter : 0;
    }
    calcScissorRect(t) {
      if (t._scissorRectLocal) return;
      const e = t._scissorRect,
        { maskObject: i } = t,
        { renderer: r } = this,
        n = r.renderTexture,
        a = i.getBounds(!0, Vr.pop() ?? new H());
      this.roundFrameToPixels(
        a,
        n.current ? n.current.resolution : r.resolution,
        n.sourceFrame,
        n.destinationFrame,
        r.projection.transform
      ),
        e && a.fit(e),
        (t._scissorRectLocal = a);
    }
    static isMatrixRotated(t) {
      if (!t) return !1;
      const { a: e, b: i, c: r, d: n } = t;
      return (
        (Math.abs(i) > 1e-4 || Math.abs(r) > 1e-4) &&
        (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
      );
    }
    testScissor(t) {
      const { maskObject: e } = t;
      if (
        !e.isFastRect ||
        !e.isFastRect() ||
        Ti.isMatrixRotated(e.worldTransform) ||
        Ti.isMatrixRotated(this.renderer.projection.transform)
      )
        return !1;
      this.calcScissorRect(t);
      const i = t._scissorRectLocal;
      return i.width > 0 && i.height > 0;
    }
    roundFrameToPixels(t, e, i, r, n) {
      Ti.isMatrixRotated(n) ||
        ((n = n ? Xr.copyFrom(n) : Xr.identity()),
        n
          .translate(-i.x, -i.y)
          .scale(r.width / i.width, r.height / i.height)
          .translate(r.x, r.y),
        this.renderer.filter.transformAABB(n, t),
        t.fit(r),
        (t.x = Math.round(t.x * e)),
        (t.y = Math.round(t.y * e)),
        (t.width = Math.round(t.width * e)),
        (t.height = Math.round(t.height * e)));
    }
    push(t) {
      t._scissorRectLocal || this.calcScissorRect(t);
      const { gl: e } = this.renderer;
      t._scissorRect || e.enable(e.SCISSOR_TEST),
        t._scissorCounter++,
        (t._scissorRect = t._scissorRectLocal),
        this._useCurrent();
    }
    pop(t) {
      const { gl: e } = this.renderer;
      t && Vr.push(t._scissorRectLocal),
        this.getStackLength() > 0
          ? this._useCurrent()
          : e.disable(e.SCISSOR_TEST);
    }
    _useCurrent() {
      const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
      let e;
      this.renderer.renderTexture.current
        ? (e = t.y)
        : (e = this.renderer.height - t.height - t.y),
        this.renderer.gl.scissor(t.x, e, t.width, t.height);
    }
  };
zn.extension = { type: A.RendererSystem, name: "scissor" };
let eh = zn;
M.add(eh);
class Wn extends Vn {
  constructor(t) {
    super(t),
      (this.glConst = I.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._stencilCounter : 0;
  }
  push(t) {
    const e = t.maskObject,
      { gl: i } = this.renderer,
      r = t._stencilCounter;
    r === 0 &&
      (this.renderer.framebuffer.forceStencil(),
      i.clearStencil(0),
      i.clear(i.STENCIL_BUFFER_BIT),
      i.enable(i.STENCIL_TEST)),
      t._stencilCounter++;
    const n = t._colorMask;
    n !== 0 && ((t._colorMask = 0), i.colorMask(!1, !1, !1, !1)),
      i.stencilFunc(i.EQUAL, r, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.INCR),
      (e.renderable = !0),
      e.render(this.renderer),
      this.renderer.batch.flush(),
      (e.renderable = !1),
      n !== 0 &&
        ((t._colorMask = n),
        i.colorMask(
          (n & 1) !== 0,
          (n & 2) !== 0,
          (n & 4) !== 0,
          (n & 8) !== 0
        )),
      this._useCurrent();
  }
  pop(t) {
    const e = this.renderer.gl;
    if (this.getStackLength() === 0) e.disable(e.STENCIL_TEST);
    else {
      const i =
          this.maskStack.length !== 0
            ? this.maskStack[this.maskStack.length - 1]
            : null,
        r = i ? i._colorMask : 15;
      r !== 0 && ((i._colorMask = 0), e.colorMask(!1, !1, !1, !1)),
        e.stencilOp(e.KEEP, e.KEEP, e.DECR),
        (t.renderable = !0),
        t.render(this.renderer),
        this.renderer.batch.flush(),
        (t.renderable = !1),
        r !== 0 &&
          ((i._colorMask = r),
          e.colorMask(
            (r & 1) !== 0,
            (r & 2) !== 0,
            (r & 4) !== 0,
            (r & 8) !== 0
          )),
        this._useCurrent();
    }
  }
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
      t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
Wn.extension = { type: A.RendererSystem, name: "stencil" };
M.add(Wn);
class $n {
  constructor(t) {
    (this.renderer = t),
      (this.plugins = {}),
      Object.defineProperties(this.plugins, {
        extract: {
          enumerable: !1,
          get() {
            return (
              z(
                "7.0.0",
                "renderer.plugins.extract has moved to renderer.extract"
              ),
              t.extract
            );
          },
        },
        prepare: {
          enumerable: !1,
          get() {
            return (
              z(
                "7.0.0",
                "renderer.plugins.prepare has moved to renderer.prepare"
              ),
              t.prepare
            );
          },
        },
        interaction: {
          enumerable: !1,
          get() {
            return (
              z(
                "7.0.0",
                "renderer.plugins.interaction has been deprecated, use renderer.events"
              ),
              t.events
            );
          },
        },
      });
  }
  init() {
    const t = this.rendererPlugins;
    for (const e in t) this.plugins[e] = new t[e](this.renderer);
  }
  destroy() {
    for (const t in this.plugins)
      this.plugins[t].destroy(), (this.plugins[t] = null);
  }
}
$n.extension = {
  type: [A.RendererSystem, A.CanvasRendererSystem],
  name: "_plugin",
};
M.add($n);
class jn {
  constructor(t) {
    (this.renderer = t),
      (this.destinationFrame = null),
      (this.sourceFrame = null),
      (this.defaultFrame = null),
      (this.projectionMatrix = new K()),
      (this.transform = null);
  }
  update(t, e, i, r) {
    (this.destinationFrame = t || this.destinationFrame || this.defaultFrame),
      (this.sourceFrame = e || this.sourceFrame || t),
      this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r),
      this.transform && this.projectionMatrix.append(this.transform);
    const n = this.renderer;
    (n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
      n.globalUniforms.update(),
      n.shader.shader &&
        n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
  }
  calculateProjection(t, e, i, r) {
    const n = this.projectionMatrix,
      a = r ? -1 : 1;
    n.identity(),
      (n.a = (1 / e.width) * 2),
      (n.d = a * ((1 / e.height) * 2)),
      (n.tx = -1 - e.x * n.a),
      (n.ty = -a - e.y * n.d);
  }
  setTransform(t) {}
  destroy() {
    this.renderer = null;
  }
}
jn.extension = { type: A.RendererSystem, name: "projection" };
M.add(jn);
const ih = new ar(),
  zr = new H();
class Yn {
  constructor(t) {
    (this.renderer = t), (this._tempMatrix = new K());
  }
  generateTexture(t, e) {
    const { region: i, ...r } = e || {},
      n = (i == null ? void 0 : i.copyTo(zr)) || t.getLocalBounds(zr, !0),
      a = r.resolution || this.renderer.resolution;
    (n.width = Math.max(n.width, 1 / a)),
      (n.height = Math.max(n.height, 1 / a)),
      (r.width = n.width),
      (r.height = n.height),
      (r.resolution = a),
      r.multisample ?? (r.multisample = this.renderer.multisample);
    const o = _e.create(r);
    (this._tempMatrix.tx = -n.x), (this._tempMatrix.ty = -n.y);
    const h = t.transform;
    return (
      (t.transform = ih),
      this.renderer.render(t, {
        renderTexture: o,
        transform: this._tempMatrix,
        skipUpdateTransform: !!t.parent,
        blit: !0,
      }),
      (t.transform = h),
      o
    );
  }
  destroy() {}
}
Yn.extension = {
  type: [A.RendererSystem, A.CanvasRendererSystem],
  name: "textureGenerator",
};
M.add(Yn);
const se = new H(),
  Ue = new H();
class qn {
  constructor(t) {
    (this.renderer = t),
      (this.defaultMaskStack = []),
      (this.current = null),
      (this.sourceFrame = new H()),
      (this.destinationFrame = new H()),
      (this.viewportFrame = new H());
  }
  contextChange() {
    var e;
    const t =
      (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha);
  }
  bind(t = null, e, i) {
    const r = this.renderer;
    this.current = t;
    let n, a, o;
    t
      ? ((n = t.baseTexture),
        (o = n.resolution),
        e ||
          ((se.width = t.frame.width), (se.height = t.frame.height), (e = se)),
        i ||
          ((Ue.x = t.frame.x),
          (Ue.y = t.frame.y),
          (Ue.width = e.width),
          (Ue.height = e.height),
          (i = Ue)),
        (a = n.framebuffer))
      : ((o = r.resolution),
        e ||
          ((se.width = r._view.screen.width),
          (se.height = r._view.screen.height),
          (e = se)),
        i || ((i = se), (i.width = e.width), (i.height = e.height)));
    const h = this.viewportFrame;
    (h.x = i.x * o),
      (h.y = i.y * o),
      (h.width = i.width * o),
      (h.height = i.height * o),
      t || (h.y = r.view.height - (h.y + h.height)),
      h.ceil(),
      this.renderer.framebuffer.bind(a, h),
      this.renderer.projection.update(i, e, o, !a),
      t
        ? this.renderer.mask.setMaskStack(n.maskStack)
        : this.renderer.mask.setMaskStack(this.defaultMaskStack),
      this.sourceFrame.copyFrom(e),
      this.destinationFrame.copyFrom(i);
  }
  clear(t, e) {
    const i = this.current
        ? this.current.baseTexture.clear
        : this.renderer.background.backgroundColor,
      r = q.shared.setValue(t || i);
    ((this.current && this.current.baseTexture.alphaMode > 0) ||
      (!this.current && this._rendererPremultipliedAlpha)) &&
      r.premultiply(r.alpha);
    const n = this.destinationFrame,
      a = this.current ? this.current.baseTexture : this.renderer._view.screen,
      o = n.width !== a.width || n.height !== a.height;
    if (o) {
      let { x: h, y: l, width: d, height: c } = this.viewportFrame;
      (h = Math.round(h)),
        (l = Math.round(l)),
        (d = Math.round(d)),
        (c = Math.round(c)),
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
        this.renderer.gl.scissor(h, l, d, c);
    }
    this.renderer.framebuffer.clear(r.red, r.green, r.blue, r.alpha, e),
      o && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
qn.extension = { type: A.RendererSystem, name: "renderTexture" };
M.add(qn);
class sh {
  constructor(t, e) {
    (this.program = t),
      (this.uniformData = e),
      (this.uniformGroups = {}),
      (this.uniformDirtyGroups = {}),
      (this.uniformBufferBindings = {});
  }
  destroy() {
    (this.uniformData = null),
      (this.uniformGroups = null),
      (this.uniformDirtyGroups = null),
      (this.uniformBufferBindings = null),
      (this.program = null);
  }
}
function rh(s, t) {
  const e = {},
    i = t.getProgramParameter(s, t.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveAttrib(s, r);
    if (n.name.startsWith("gl_")) continue;
    const a = Bn(t, n.type),
      o = {
        type: a,
        name: n.name,
        size: Mn(a),
        location: t.getAttribLocation(s, n.name),
      };
    e[n.name] = o;
  }
  return e;
}
function nh(s, t) {
  const e = {},
    i = t.getProgramParameter(s, t.ACTIVE_UNIFORMS);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveUniform(s, r),
      a = n.name.replace(/\[.*?\]$/, ""),
      o = !!n.name.match(/\[.*?\]$/),
      h = Bn(t, n.type);
    e[a] = {
      name: a,
      index: r,
      type: h,
      size: n.size,
      isArray: o,
      value: Rn(h, n.size),
    };
  }
  return e;
}
function ah(s, t) {
  var o;
  const e = Lr(s, s.VERTEX_SHADER, t.vertexSrc),
    i = Lr(s, s.FRAGMENT_SHADER, t.fragmentSrc),
    r = s.createProgram();
  s.attachShader(r, e), s.attachShader(r, i);
  const n = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
  if (
    (n &&
      (typeof s.transformFeedbackVaryings != "function"
        ? console.warn(
            "TransformFeedback is not supported but TransformFeedbackVaryings are given."
          )
        : s.transformFeedbackVaryings(
            r,
            n.names,
            n.bufferMode === "separate"
              ? s.SEPARATE_ATTRIBS
              : s.INTERLEAVED_ATTRIBS
          )),
    s.linkProgram(r),
    s.getProgramParameter(r, s.LINK_STATUS) || Lo(s, r, e, i),
    (t.attributeData = rh(r, s)),
    (t.uniformData = nh(r, s)),
    !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc))
  ) {
    const h = Object.keys(t.attributeData);
    h.sort((l, d) => (l > d ? 1 : -1));
    for (let l = 0; l < h.length; l++)
      (t.attributeData[h[l]].location = l), s.bindAttribLocation(r, l, h[l]);
    s.linkProgram(r);
  }
  s.deleteShader(e), s.deleteShader(i);
  const a = {};
  for (const h in t.uniformData) {
    const l = t.uniformData[h];
    a[h] = { location: s.getUniformLocation(r, h), value: Rn(l.type, l.size) };
  }
  return new sh(r, a);
}
function oh(s, t, e, i, r) {
  e.buffer.update(r);
}
const hh = {
    float: `
        data[offset] = v;
    `,
    vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
    vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
    vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
    mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
    mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
    mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
  },
  Kn = {
    float: 4,
    vec2: 8,
    vec3: 12,
    vec4: 16,
    int: 4,
    ivec2: 8,
    ivec3: 12,
    ivec4: 16,
    uint: 4,
    uvec2: 8,
    uvec3: 12,
    uvec4: 16,
    bool: 4,
    bvec2: 8,
    bvec3: 12,
    bvec4: 16,
    mat2: 16 * 2,
    mat3: 16 * 3,
    mat4: 16 * 4,
  };
function lh(s) {
  const t = s.map((n) => ({ data: n, offset: 0, dataLen: 0, dirty: 0 }));
  let e = 0,
    i = 0,
    r = 0;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (
      ((e = Kn[a.data.type]),
      a.data.size > 1 && (e = Math.max(e, 16) * a.data.size),
      (a.dataLen = e),
      i % e !== 0 && i < 16)
    ) {
      const o = (i % e) % 16;
      (i += o), (r += o);
    }
    i + e > 16
      ? ((r = Math.ceil(r / 16) * 16), (a.offset = r), (r += e), (i = e))
      : ((a.offset = r), (i += e), (r += e));
  }
  return (r = Math.ceil(r / 16) * 16), { uboElements: t, size: r };
}
function dh(s, t) {
  const e = [];
  for (const i in s) t[i] && e.push(t[i]);
  return e.sort((i, r) => i.index - r.index), e;
}
function ch(s, t) {
  if (!s.autoManage) return { size: 0, syncFunc: oh };
  const e = dh(s.uniforms, t),
    { uboElements: i, size: r } = lh(e),
    n = [
      `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
    ];
  for (let a = 0; a < i.length; a++) {
    const o = i[a],
      h = s.uniforms[o.data.name],
      l = o.data.name;
    let d = !1;
    for (let c = 0; c < Re.length; c++) {
      const u = Re[c];
      if (u.codeUbo && u.test(o.data, h)) {
        n.push(`offset = ${o.offset / 4};`, Re[c].codeUbo(o.data.name, h)),
          (d = !0);
        break;
      }
    }
    if (!d)
      if (o.data.size > 1) {
        const c = Mn(o.data.type),
          u = Math.max(Kn[o.data.type] / 16, 1),
          p = c / u,
          f = (4 - (p % 4)) % 4;
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * u}; i++)
                {
                    for(var j = 0; j < ${p}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${f};
                }

                `);
      } else {
        const c = hh[o.data.type];
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};
                ${c};
                `);
      }
  }
  return (
    n.push(`
       renderer.buffer.update(buffer);
    `),
    {
      size: r,
      syncFunc: new Function(
        "ud",
        "uv",
        "renderer",
        "syncData",
        "buffer",
        n.join(`
`)
      ),
    }
  );
}
let uh = 0;
const di = { textureCount: 0, uboCount: 0 };
class Zn {
  constructor(t) {
    (this.destroyed = !1),
      (this.renderer = t),
      this.systemCheck(),
      (this.gl = null),
      (this.shader = null),
      (this.program = null),
      (this.cache = {}),
      (this._uboCache = {}),
      (this.id = uh++);
  }
  systemCheck() {
    if (!Oo())
      throw new Error(
        "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
      );
  }
  contextChange(t) {
    (this.gl = t), this.reset();
  }
  bind(t, e) {
    t.disposeRunner.add(this),
      (t.uniforms.globals = this.renderer.globalUniforms);
    const i = t.program,
      r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    return (
      (this.shader = t),
      this.program !== i && ((this.program = i), this.gl.useProgram(r.program)),
      e ||
        ((di.textureCount = 0),
        (di.uboCount = 0),
        this.syncUniformGroup(t.uniformGroup, di)),
      r
    );
  }
  setUniforms(t) {
    const e = this.shader.program,
      i = e.glPrograms[this.renderer.CONTEXT_UID];
    e.syncUniforms(i.uniformData, t, this.renderer);
  }
  syncUniformGroup(t, e) {
    const i = this.getGlProgram();
    (!t.static || t.dirtyId !== i.uniformDirtyGroups[t.id]) &&
      ((i.uniformDirtyGroups[t.id] = t.dirtyId), this.syncUniforms(t, i, e));
  }
  syncUniforms(t, e, i) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(
      e.uniformData,
      t.uniforms,
      this.renderer,
      i
    );
  }
  createSyncGroups(t) {
    const e = this.getSignature(t, this.shader.program.uniformData, "u");
    return (
      this.cache[e] || (this.cache[e] = Bo(t, this.shader.program.uniformData)),
      (t.syncUniforms[this.shader.program.id] = this.cache[e]),
      t.syncUniforms[this.shader.program.id]
    );
  }
  syncUniformBufferGroup(t, e) {
    const i = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !i.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const r = i.uniformGroups[t.id] || this.createSyncBufferGroup(t, i, e);
      t.buffer.update(),
        r(i.uniformData, t.uniforms, this.renderer, di, t.buffer);
    }
    this.renderer.buffer.bindBufferBase(t.buffer, i.uniformBufferBindings[e]);
  }
  createSyncBufferGroup(t, e, i) {
    const { gl: r } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const n = this.gl.getUniformBlockIndex(e.program, i);
    (e.uniformBufferBindings[i] = this.shader.uniformBindCount),
      r.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
      this.shader.uniformBindCount++;
    const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let o = this._uboCache[a];
    if (
      (o || (o = this._uboCache[a] = ch(t, this.shader.program.uniformData)),
      t.autoManage)
    ) {
      const h = new Float32Array(o.size / 4);
      t.buffer.update(h);
    }
    return (e.uniformGroups[t.id] = o.syncFunc), e.uniformGroups[t.id];
  }
  getSignature(t, e, i) {
    const r = t.uniforms,
      n = [`${i}-`];
    for (const a in r) n.push(a), e[a] && n.push(e[a].type);
    return n.join("-");
  }
  getGlProgram() {
    return this.shader
      ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
      : null;
  }
  generateProgram(t) {
    const e = this.gl,
      i = t.program,
      r = ah(e, i);
    return (i.glPrograms[this.renderer.CONTEXT_UID] = r), r;
  }
  reset() {
    (this.program = null), (this.shader = null);
  }
  disposeShader(t) {
    this.shader === t && (this.shader = null);
  }
  destroy() {
    (this.renderer = null), (this.destroyed = !0);
  }
}
Zn.extension = { type: A.RendererSystem, name: "shader" };
M.add(Zn);
class Fi {
  constructor(t) {
    this.renderer = t;
  }
  run(t) {
    const { renderer: e } = this;
    e.runners.init.emit(e.options),
      t.hello &&
        console.log(`PixiJS 7.4.2 - ${e.rendererLogId} - https://pixijs.com`),
      e.resize(e.screen.width, e.screen.height);
  }
  destroy() {}
}
(Fi.defaultOptions = { hello: !1 }),
  (Fi.extension = {
    type: [A.RendererSystem, A.CanvasRendererSystem],
    name: "startup",
  });
M.add(Fi);
function ph(s, t = []) {
  return (
    (t[L.NORMAL] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.ADD] = [s.ONE, s.ONE]),
    (t[L.MULTIPLY] = [
      s.DST_COLOR,
      s.ONE_MINUS_SRC_ALPHA,
      s.ONE,
      s.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[L.SCREEN] = [
      s.ONE,
      s.ONE_MINUS_SRC_COLOR,
      s.ONE,
      s.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[L.OVERLAY] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.DARKEN] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.LIGHTEN] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.COLOR_DODGE] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.COLOR_BURN] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.HARD_LIGHT] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.SOFT_LIGHT] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.DIFFERENCE] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.EXCLUSION] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.HUE] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.SATURATION] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.COLOR] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.LUMINOSITY] = [s.ONE, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.NONE] = [0, 0]),
    (t[L.NORMAL_NPM] = [
      s.SRC_ALPHA,
      s.ONE_MINUS_SRC_ALPHA,
      s.ONE,
      s.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[L.ADD_NPM] = [s.SRC_ALPHA, s.ONE, s.ONE, s.ONE]),
    (t[L.SCREEN_NPM] = [
      s.SRC_ALPHA,
      s.ONE_MINUS_SRC_COLOR,
      s.ONE,
      s.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[L.SRC_IN] = [s.DST_ALPHA, s.ZERO]),
    (t[L.SRC_OUT] = [s.ONE_MINUS_DST_ALPHA, s.ZERO]),
    (t[L.SRC_ATOP] = [s.DST_ALPHA, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.DST_OVER] = [s.ONE_MINUS_DST_ALPHA, s.ONE]),
    (t[L.DST_IN] = [s.ZERO, s.SRC_ALPHA]),
    (t[L.DST_OUT] = [s.ZERO, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.DST_ATOP] = [s.ONE_MINUS_DST_ALPHA, s.SRC_ALPHA]),
    (t[L.XOR] = [s.ONE_MINUS_DST_ALPHA, s.ONE_MINUS_SRC_ALPHA]),
    (t[L.SUBTRACT] = [
      s.ONE,
      s.ONE,
      s.ONE,
      s.ONE,
      s.FUNC_REVERSE_SUBTRACT,
      s.FUNC_ADD,
    ]),
    t
  );
}
const fh = 0,
  mh = 1,
  gh = 2,
  _h = 3,
  xh = 4,
  yh = 5,
  Jn = class ks {
    constructor() {
      (this.gl = null),
        (this.stateId = 0),
        (this.polygonOffset = 0),
        (this.blendMode = L.NONE),
        (this._blendEq = !1),
        (this.map = []),
        (this.map[fh] = this.setBlend),
        (this.map[mh] = this.setOffset),
        (this.map[gh] = this.setCullFace),
        (this.map[_h] = this.setDepthTest),
        (this.map[xh] = this.setFrontFace),
        (this.map[yh] = this.setDepthMask),
        (this.checks = []),
        (this.defaultState = new Ft()),
        (this.defaultState.blend = !0);
    }
    contextChange(t) {
      (this.gl = t),
        (this.blendModes = ph(t)),
        this.set(this.defaultState),
        this.reset();
    }
    set(t) {
      if (((t = t || this.defaultState), this.stateId !== t.data)) {
        let e = this.stateId ^ t.data,
          i = 0;
        for (; e; )
          e & 1 && this.map[i].call(this, !!(t.data & (1 << i))),
            (e = e >> 1),
            i++;
        this.stateId = t.data;
      }
      for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
    }
    forceState(t) {
      t = t || this.defaultState;
      for (let e = 0; e < this.map.length; e++)
        this.map[e].call(this, !!(t.data & (1 << e)));
      for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
      this.stateId = t.data;
    }
    setBlend(t) {
      this.updateCheck(ks.checkBlendMode, t),
        this.gl[t ? "enable" : "disable"](this.gl.BLEND);
    }
    setOffset(t) {
      this.updateCheck(ks.checkPolygonOffset, t),
        this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    }
    setDepthTest(t) {
      this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
    }
    setDepthMask(t) {
      this.gl.depthMask(t);
    }
    setCullFace(t) {
      this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
    }
    setFrontFace(t) {
      this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
    }
    setBlendMode(t) {
      if (t === this.blendMode) return;
      this.blendMode = t;
      const e = this.blendModes[t],
        i = this.gl;
      e.length === 2
        ? i.blendFunc(e[0], e[1])
        : i.blendFuncSeparate(e[0], e[1], e[2], e[3]),
        e.length === 6
          ? ((this._blendEq = !0), i.blendEquationSeparate(e[4], e[5]))
          : this._blendEq &&
            ((this._blendEq = !1),
            i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD));
    }
    setPolygonOffset(t, e) {
      this.gl.polygonOffset(t, e);
    }
    reset() {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
        this.forceState(this.defaultState),
        (this._blendEq = !0),
        (this.blendMode = -1),
        this.setBlendMode(0);
    }
    updateCheck(t, e) {
      const i = this.checks.indexOf(t);
      e && i === -1
        ? this.checks.push(t)
        : !e && i !== -1 && this.checks.splice(i, 1);
    }
    static checkBlendMode(t, e) {
      t.setBlendMode(e.blendMode);
    }
    static checkPolygonOffset(t, e) {
      t.setPolygonOffset(1, e.polygonOffset);
    }
    destroy() {
      this.gl = null;
    }
  };
Jn.extension = { type: A.RendererSystem, name: "state" };
let vh = Jn;
M.add(vh);
class bh extends qe {
  constructor() {
    super(...arguments), (this.runners = {}), (this._systemsHash = {});
  }
  setup(t) {
    this.addRunners(...t.runners);
    const e = (t.priority ?? []).filter((r) => t.systems[r]),
      i = [...e, ...Object.keys(t.systems).filter((r) => !e.includes(r))];
    for (const r of i) this.addSystem(t.systems[r], r);
  }
  addRunners(...t) {
    t.forEach((e) => {
      this.runners[e] = new vt(e);
    });
  }
  addSystem(t, e) {
    const i = new t(this);
    if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
    (this[e] = i), (this._systemsHash[e] = i);
    for (const r in this.runners) this.runners[r].add(i);
    return this;
  }
  emitWithCustomOptions(t, e) {
    const i = Object.keys(this._systemsHash);
    t.items.forEach((r) => {
      const n = i.find((a) => this._systemsHash[a] === r);
      r[t.name](e[n]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((t) => {
      t.destroy();
    }),
      (this._systemsHash = {});
  }
}
const Xe = class Ei {
  constructor(t) {
    (this.renderer = t),
      (this.count = 0),
      (this.checkCount = 0),
      (this.maxIdle = Ei.defaultMaxIdle),
      (this.checkCountMax = Ei.defaultCheckCountMax),
      (this.mode = Ei.defaultMode);
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen &&
      (this.count++,
      this.mode !== nr.MANUAL &&
        (this.checkCount++,
        this.checkCount > this.checkCountMax &&
          ((this.checkCount = 0), this.run())));
  }
  run() {
    const t = this.renderer.texture,
      e = t.managedTextures;
    let i = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      n.resource &&
        this.count - n.touched > this.maxIdle &&
        (t.destroyTexture(n, !0), (e[r] = null), (i = !0));
    }
    if (i) {
      let r = 0;
      for (let n = 0; n < e.length; n++) e[n] !== null && (e[r++] = e[n]);
      e.length = r;
    }
  }
  unload(t) {
    const e = this.renderer.texture,
      i = t._texture;
    i && !i.framebuffer && e.destroyTexture(i);
    for (let r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r]);
  }
  destroy() {
    this.renderer = null;
  }
};
(Xe.defaultMode = nr.AUTO),
  (Xe.defaultMaxIdle = 60 * 60),
  (Xe.defaultCheckCountMax = 60 * 10),
  (Xe.extension = { type: A.RendererSystem, name: "textureGC" });
let de = Xe;
M.add(de);
class us {
  constructor(t) {
    (this.texture = t),
      (this.width = -1),
      (this.height = -1),
      (this.dirtyId = -1),
      (this.dirtyStyleId = -1),
      (this.mipmap = !1),
      (this.wrapMode = 33071),
      (this.type = D.UNSIGNED_BYTE),
      (this.internalFormat = T.RGBA),
      (this.samplerType = 0);
  }
}
function Th(s) {
  let t;
  return (
    "WebGL2RenderingContext" in globalThis &&
    s instanceof globalThis.WebGL2RenderingContext
      ? (t = {
          [s.RGB]: C.FLOAT,
          [s.RGBA]: C.FLOAT,
          [s.ALPHA]: C.FLOAT,
          [s.LUMINANCE]: C.FLOAT,
          [s.LUMINANCE_ALPHA]: C.FLOAT,
          [s.R8]: C.FLOAT,
          [s.R8_SNORM]: C.FLOAT,
          [s.RG8]: C.FLOAT,
          [s.RG8_SNORM]: C.FLOAT,
          [s.RGB8]: C.FLOAT,
          [s.RGB8_SNORM]: C.FLOAT,
          [s.RGB565]: C.FLOAT,
          [s.RGBA4]: C.FLOAT,
          [s.RGB5_A1]: C.FLOAT,
          [s.RGBA8]: C.FLOAT,
          [s.RGBA8_SNORM]: C.FLOAT,
          [s.RGB10_A2]: C.FLOAT,
          [s.RGB10_A2UI]: C.FLOAT,
          [s.SRGB8]: C.FLOAT,
          [s.SRGB8_ALPHA8]: C.FLOAT,
          [s.R16F]: C.FLOAT,
          [s.RG16F]: C.FLOAT,
          [s.RGB16F]: C.FLOAT,
          [s.RGBA16F]: C.FLOAT,
          [s.R32F]: C.FLOAT,
          [s.RG32F]: C.FLOAT,
          [s.RGB32F]: C.FLOAT,
          [s.RGBA32F]: C.FLOAT,
          [s.R11F_G11F_B10F]: C.FLOAT,
          [s.RGB9_E5]: C.FLOAT,
          [s.R8I]: C.INT,
          [s.R8UI]: C.UINT,
          [s.R16I]: C.INT,
          [s.R16UI]: C.UINT,
          [s.R32I]: C.INT,
          [s.R32UI]: C.UINT,
          [s.RG8I]: C.INT,
          [s.RG8UI]: C.UINT,
          [s.RG16I]: C.INT,
          [s.RG16UI]: C.UINT,
          [s.RG32I]: C.INT,
          [s.RG32UI]: C.UINT,
          [s.RGB8I]: C.INT,
          [s.RGB8UI]: C.UINT,
          [s.RGB16I]: C.INT,
          [s.RGB16UI]: C.UINT,
          [s.RGB32I]: C.INT,
          [s.RGB32UI]: C.UINT,
          [s.RGBA8I]: C.INT,
          [s.RGBA8UI]: C.UINT,
          [s.RGBA16I]: C.INT,
          [s.RGBA16UI]: C.UINT,
          [s.RGBA32I]: C.INT,
          [s.RGBA32UI]: C.UINT,
          [s.DEPTH_COMPONENT16]: C.FLOAT,
          [s.DEPTH_COMPONENT24]: C.FLOAT,
          [s.DEPTH_COMPONENT32F]: C.FLOAT,
          [s.DEPTH_STENCIL]: C.FLOAT,
          [s.DEPTH24_STENCIL8]: C.FLOAT,
          [s.DEPTH32F_STENCIL8]: C.FLOAT,
        })
      : (t = {
          [s.RGB]: C.FLOAT,
          [s.RGBA]: C.FLOAT,
          [s.ALPHA]: C.FLOAT,
          [s.LUMINANCE]: C.FLOAT,
          [s.LUMINANCE_ALPHA]: C.FLOAT,
          [s.DEPTH_STENCIL]: C.FLOAT,
        }),
    t
  );
}
function Eh(s) {
  let t;
  return (
    "WebGL2RenderingContext" in globalThis &&
    s instanceof globalThis.WebGL2RenderingContext
      ? (t = {
          [D.UNSIGNED_BYTE]: {
            [T.RGBA]: s.RGBA8,
            [T.RGB]: s.RGB8,
            [T.RG]: s.RG8,
            [T.RED]: s.R8,
            [T.RGBA_INTEGER]: s.RGBA8UI,
            [T.RGB_INTEGER]: s.RGB8UI,
            [T.RG_INTEGER]: s.RG8UI,
            [T.RED_INTEGER]: s.R8UI,
            [T.ALPHA]: s.ALPHA,
            [T.LUMINANCE]: s.LUMINANCE,
            [T.LUMINANCE_ALPHA]: s.LUMINANCE_ALPHA,
          },
          [D.BYTE]: {
            [T.RGBA]: s.RGBA8_SNORM,
            [T.RGB]: s.RGB8_SNORM,
            [T.RG]: s.RG8_SNORM,
            [T.RED]: s.R8_SNORM,
            [T.RGBA_INTEGER]: s.RGBA8I,
            [T.RGB_INTEGER]: s.RGB8I,
            [T.RG_INTEGER]: s.RG8I,
            [T.RED_INTEGER]: s.R8I,
          },
          [D.UNSIGNED_SHORT]: {
            [T.RGBA_INTEGER]: s.RGBA16UI,
            [T.RGB_INTEGER]: s.RGB16UI,
            [T.RG_INTEGER]: s.RG16UI,
            [T.RED_INTEGER]: s.R16UI,
            [T.DEPTH_COMPONENT]: s.DEPTH_COMPONENT16,
          },
          [D.SHORT]: {
            [T.RGBA_INTEGER]: s.RGBA16I,
            [T.RGB_INTEGER]: s.RGB16I,
            [T.RG_INTEGER]: s.RG16I,
            [T.RED_INTEGER]: s.R16I,
          },
          [D.UNSIGNED_INT]: {
            [T.RGBA_INTEGER]: s.RGBA32UI,
            [T.RGB_INTEGER]: s.RGB32UI,
            [T.RG_INTEGER]: s.RG32UI,
            [T.RED_INTEGER]: s.R32UI,
            [T.DEPTH_COMPONENT]: s.DEPTH_COMPONENT24,
          },
          [D.INT]: {
            [T.RGBA_INTEGER]: s.RGBA32I,
            [T.RGB_INTEGER]: s.RGB32I,
            [T.RG_INTEGER]: s.RG32I,
            [T.RED_INTEGER]: s.R32I,
          },
          [D.FLOAT]: {
            [T.RGBA]: s.RGBA32F,
            [T.RGB]: s.RGB32F,
            [T.RG]: s.RG32F,
            [T.RED]: s.R32F,
            [T.DEPTH_COMPONENT]: s.DEPTH_COMPONENT32F,
          },
          [D.HALF_FLOAT]: {
            [T.RGBA]: s.RGBA16F,
            [T.RGB]: s.RGB16F,
            [T.RG]: s.RG16F,
            [T.RED]: s.R16F,
          },
          [D.UNSIGNED_SHORT_5_6_5]: { [T.RGB]: s.RGB565 },
          [D.UNSIGNED_SHORT_4_4_4_4]: { [T.RGBA]: s.RGBA4 },
          [D.UNSIGNED_SHORT_5_5_5_1]: { [T.RGBA]: s.RGB5_A1 },
          [D.UNSIGNED_INT_2_10_10_10_REV]: {
            [T.RGBA]: s.RGB10_A2,
            [T.RGBA_INTEGER]: s.RGB10_A2UI,
          },
          [D.UNSIGNED_INT_10F_11F_11F_REV]: { [T.RGB]: s.R11F_G11F_B10F },
          [D.UNSIGNED_INT_5_9_9_9_REV]: { [T.RGB]: s.RGB9_E5 },
          [D.UNSIGNED_INT_24_8]: { [T.DEPTH_STENCIL]: s.DEPTH24_STENCIL8 },
          [D.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
            [T.DEPTH_STENCIL]: s.DEPTH32F_STENCIL8,
          },
        })
      : (t = {
          [D.UNSIGNED_BYTE]: {
            [T.RGBA]: s.RGBA,
            [T.RGB]: s.RGB,
            [T.ALPHA]: s.ALPHA,
            [T.LUMINANCE]: s.LUMINANCE,
            [T.LUMINANCE_ALPHA]: s.LUMINANCE_ALPHA,
          },
          [D.UNSIGNED_SHORT_5_6_5]: { [T.RGB]: s.RGB },
          [D.UNSIGNED_SHORT_4_4_4_4]: { [T.RGBA]: s.RGBA },
          [D.UNSIGNED_SHORT_5_5_5_1]: { [T.RGBA]: s.RGBA },
        }),
    t
  );
}
class Qn {
  constructor(t) {
    (this.renderer = t),
      (this.boundTextures = []),
      (this.currentLocation = -1),
      (this.managedTextures = []),
      (this._unknownBoundTextures = !1),
      (this.unknownTexture = new k()),
      (this.hasIntegerTextures = !1);
  }
  contextChange() {
    const t = (this.gl = this.renderer.gl);
    (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.webGLVersion = this.renderer.context.webGLVersion),
      (this.internalFormats = Eh(t)),
      (this.samplerTypes = Th(t));
    const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = e;
    for (let r = 0; r < e; r++) this.boundTextures[r] = null;
    this.emptyTextures = {};
    const i = new us(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, i.texture),
      t.texImage2D(
        t.TEXTURE_2D,
        0,
        t.RGBA,
        1,
        1,
        0,
        t.RGBA,
        t.UNSIGNED_BYTE,
        new Uint8Array(4)
      ),
      (this.emptyTextures[t.TEXTURE_2D] = i),
      (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new us(t.createTexture())),
      t.bindTexture(
        t.TEXTURE_CUBE_MAP,
        this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
      );
    for (let r = 0; r < 6; r++)
      t.texImage2D(
        t.TEXTURE_CUBE_MAP_POSITIVE_X + r,
        0,
        t.RGBA,
        1,
        1,
        0,
        t.RGBA,
        t.UNSIGNED_BYTE,
        null
      );
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
      t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let r = 0; r < this.boundTextures.length; r++) this.bind(null, r);
  }
  bind(t, e = 0) {
    const { gl: i } = this;
    if (
      ((t = t == null ? void 0 : t.castToBaseTexture()),
      (t == null ? void 0 : t.valid) && !t.parentTextureArray)
    ) {
      t.touched = this.renderer.textureGC.count;
      const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      this.boundTextures[e] !== t &&
        (this.currentLocation !== e &&
          ((this.currentLocation = e), i.activeTexture(i.TEXTURE0 + e)),
        i.bindTexture(t.target, r.texture)),
        r.dirtyId !== t.dirtyId
          ? (this.currentLocation !== e &&
              ((this.currentLocation = e), i.activeTexture(i.TEXTURE0 + e)),
            this.updateTexture(t))
          : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
        (this.boundTextures[e] = t);
    } else
      this.currentLocation !== e &&
        ((this.currentLocation = e), i.activeTexture(i.TEXTURE0 + e)),
        i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture),
        (this.boundTextures[e] = null);
  }
  reset() {
    (this._unknownBoundTextures = !0),
      (this.hasIntegerTextures = !1),
      (this.currentLocation = -1);
    for (let t = 0; t < this.boundTextures.length; t++)
      this.boundTextures[t] = this.unknownTexture;
  }
  unbind(t) {
    const { gl: e, boundTextures: i } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let r = 0; r < i.length; r++)
        i[r] === this.unknownTexture && this.bind(null, r);
    }
    for (let r = 0; r < i.length; r++)
      i[r] === t &&
        (this.currentLocation !== r &&
          (e.activeTexture(e.TEXTURE0 + r), (this.currentLocation = r)),
        e.bindTexture(t.target, this.emptyTextures[t.target].texture),
        (i[r] = null));
  }
  ensureSamplerType(t) {
    const { boundTextures: e, hasIntegerTextures: i, CONTEXT_UID: r } = this;
    if (i)
      for (let n = t - 1; n >= 0; --n) {
        const a = e[n];
        a &&
          a._glTextures[r].samplerType !== C.FLOAT &&
          this.renderer.texture.unbind(a);
      }
  }
  initTexture(t) {
    const e = new us(this.gl.createTexture());
    return (
      (e.dirtyId = -1),
      (t._glTextures[this.CONTEXT_UID] = e),
      this.managedTextures.push(t),
      t.on("dispose", this.destroyTexture, this),
      e
    );
  }
  initTextureType(t, e) {
    var i;
    (e.internalFormat =
      ((i = this.internalFormats[t.type]) == null ? void 0 : i[t.format]) ??
      t.format),
      (e.samplerType = this.samplerTypes[e.internalFormat] ?? C.FLOAT),
      this.webGLVersion === 2 && t.type === D.HALF_FLOAT
        ? (e.type = this.gl.HALF_FLOAT)
        : (e.type = t.type);
  }
  updateTexture(t) {
    var r;
    const e = t._glTextures[this.CONTEXT_UID];
    if (!e) return;
    const i = this.renderer;
    if (
      (this.initTextureType(t, e),
      (r = t.resource) == null ? void 0 : r.upload(i, t, e))
    )
      e.samplerType !== C.FLOAT && (this.hasIntegerTextures = !0);
    else {
      const n = t.realWidth,
        a = t.realHeight,
        o = i.gl;
      (e.width !== n || e.height !== a || e.dirtyId < 0) &&
        ((e.width = n),
        (e.height = a),
        o.texImage2D(
          t.target,
          0,
          e.internalFormat,
          n,
          a,
          0,
          t.format,
          e.type,
          null
        ));
    }
    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
      (e.dirtyId = t.dirtyId);
  }
  destroyTexture(t, e) {
    const { gl: i } = this;
    if (
      ((t = t.castToBaseTexture()),
      t._glTextures[this.CONTEXT_UID] &&
        (this.unbind(t),
        i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
        t.off("dispose", this.destroyTexture, this),
        delete t._glTextures[this.CONTEXT_UID],
        !e))
    ) {
      const r = this.managedTextures.indexOf(t);
      r !== -1 && Ie(this.managedTextures, r, 1);
    }
  }
  updateTextureStyle(t) {
    var i;
    const e = t._glTextures[this.CONTEXT_UID];
    e &&
      ((t.mipmap === Dt.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo
        ? (e.mipmap = !1)
        : (e.mipmap = t.mipmap >= 1),
      this.webGLVersion !== 2 && !t.isPowerOfTwo
        ? (e.wrapMode = qt.CLAMP)
        : (e.wrapMode = t.wrapMode),
      ((i = t.resource) != null && i.style(this.renderer, t, e)) ||
        this.setStyle(t, e),
      (e.dirtyStyleId = t.dirtyStyleId));
  }
  setStyle(t, e) {
    const i = this.gl;
    if (
      (e.mipmap && t.mipmap !== Dt.ON_MANUAL && i.generateMipmap(t.target),
      i.texParameteri(t.target, i.TEXTURE_WRAP_S, e.wrapMode),
      i.texParameteri(t.target, i.TEXTURE_WRAP_T, e.wrapMode),
      e.mipmap)
    ) {
      i.texParameteri(
        t.target,
        i.TEXTURE_MIN_FILTER,
        t.scaleMode === Nt.LINEAR
          ? i.LINEAR_MIPMAP_LINEAR
          : i.NEAREST_MIPMAP_NEAREST
      );
      const r = this.renderer.context.extensions.anisotropicFiltering;
      if (r && t.anisotropicLevel > 0 && t.scaleMode === Nt.LINEAR) {
        const n = Math.min(
          t.anisotropicLevel,
          i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        );
        i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
      }
    } else
      i.texParameteri(
        t.target,
        i.TEXTURE_MIN_FILTER,
        t.scaleMode === Nt.LINEAR ? i.LINEAR : i.NEAREST
      );
    i.texParameteri(
      t.target,
      i.TEXTURE_MAG_FILTER,
      t.scaleMode === Nt.LINEAR ? i.LINEAR : i.NEAREST
    );
  }
  destroy() {
    this.renderer = null;
  }
}
Qn.extension = { type: A.RendererSystem, name: "texture" };
M.add(Qn);
class ta {
  constructor(t) {
    this.renderer = t;
  }
  contextChange() {
    (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(t) {
    const { gl: e, CONTEXT_UID: i } = this,
      r = t._glTransformFeedbacks[i] || this.createGLTransformFeedback(t);
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, r);
  }
  unbind() {
    const { gl: t } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(t, e) {
    const { gl: i, renderer: r } = this;
    e && r.shader.bind(e), i.beginTransformFeedback(t);
  }
  endTransformFeedback() {
    const { gl: t } = this;
    t.endTransformFeedback();
  }
  createGLTransformFeedback(t) {
    const { gl: e, renderer: i, CONTEXT_UID: r } = this,
      n = e.createTransformFeedback();
    (t._glTransformFeedbacks[r] = n),
      e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
    for (let a = 0; a < t.buffers.length; a++) {
      const o = t.buffers[a];
      o &&
        (i.buffer.update(o),
        o._glBuffers[r].refCount++,
        e.bindBufferBase(
          e.TRANSFORM_FEEDBACK_BUFFER,
          a,
          o._glBuffers[r].buffer || null
        ));
    }
    return (
      e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null),
      t.disposeRunner.add(this),
      n
    );
  }
  disposeTransformFeedback(t, e) {
    const i = t._glTransformFeedbacks[this.CONTEXT_UID],
      r = this.gl;
    t.disposeRunner.remove(this);
    const n = this.renderer.buffer;
    if (n)
      for (let a = 0; a < t.buffers.length; a++) {
        const o = t.buffers[a];
        if (!o) continue;
        const h = o._glBuffers[this.CONTEXT_UID];
        h && (h.refCount--, h.refCount === 0 && !e && n.dispose(o, e));
      }
    i &&
      (e || r.deleteTransformFeedback(i),
      delete t._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
ta.extension = { type: A.RendererSystem, name: "transformFeedback" };
M.add(ta);
class Li {
  constructor(t) {
    this.renderer = t;
  }
  init(t) {
    (this.screen = new H(0, 0, t.width, t.height)),
      (this.element = t.view || I.ADAPTER.createCanvas()),
      (this.resolution = t.resolution || I.RESOLUTION),
      (this.autoDensity = !!t.autoDensity);
  }
  resizeView(t, e) {
    (this.element.width = Math.round(t * this.resolution)),
      (this.element.height = Math.round(e * this.resolution));
    const i = this.element.width / this.resolution,
      r = this.element.height / this.resolution;
    (this.screen.width = i),
      (this.screen.height = r),
      this.autoDensity &&
        ((this.element.style.width = `${i}px`),
        (this.element.style.height = `${r}px`)),
      this.renderer.emit("resize", i, r),
      this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(t) {
    var e;
    t && ((e = this.element.parentNode) == null || e.removeChild(this.element)),
      (this.renderer = null),
      (this.element = null),
      (this.screen = null);
  }
}
(Li.defaultOptions = {
  width: 800,
  height: 600,
  resolution: void 0,
  autoDensity: !1,
}),
  (Li.extension = {
    type: [A.RendererSystem, A.CanvasRendererSystem],
    name: "_view",
  });
M.add(Li);
I.PREFER_ENV = ge.WEBGL2;
I.STRICT_TEXTURE_CACHE = !1;
I.RENDER_OPTIONS = {
  ...Di.defaultOptions,
  ...Bi.defaultOptions,
  ...Li.defaultOptions,
  ...Fi.defaultOptions,
};
Object.defineProperties(I, {
  WRAP_MODE: {
    get() {
      return k.defaultOptions.wrapMode;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"
      ),
        (k.defaultOptions.wrapMode = s);
    },
  },
  SCALE_MODE: {
    get() {
      return k.defaultOptions.scaleMode;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"
      ),
        (k.defaultOptions.scaleMode = s);
    },
  },
  MIPMAP_TEXTURES: {
    get() {
      return k.defaultOptions.mipmap;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"
      ),
        (k.defaultOptions.mipmap = s);
    },
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return k.defaultOptions.anisotropicLevel;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"
      ),
        (k.defaultOptions.anisotropicLevel = s);
    },
  },
  FILTER_RESOLUTION: {
    get() {
      return (
        z(
          "7.1.0",
          "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"
        ),
        ht.defaultResolution
      );
    },
    set(s) {
      ht.defaultResolution = s;
    },
  },
  FILTER_MULTISAMPLE: {
    get() {
      return (
        z(
          "7.1.0",
          "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"
        ),
        ht.defaultMultisample
      );
    },
    set(s) {
      ht.defaultMultisample = s;
    },
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return le.defaultMaxTextures;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"
      ),
        (le.defaultMaxTextures = s);
    },
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return le.defaultBatchSize;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"
      ),
        (le.defaultBatchSize = s);
    },
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return le.canUploadSameBuffer;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"
      ),
        (le.canUploadSameBuffer = s);
    },
  },
  GC_MODE: {
    get() {
      return de.defaultMode;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"
      ),
        (de.defaultMode = s);
    },
  },
  GC_MAX_IDLE: {
    get() {
      return de.defaultMaxIdle;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"
      ),
        (de.defaultMaxIdle = s);
    },
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return de.defaultCheckCountMax;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"
      ),
        (de.defaultCheckCountMax = s);
    },
  },
  PRECISION_VERTEX: {
    get() {
      return kt.defaultVertexPrecision;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"
      ),
        (kt.defaultVertexPrecision = s);
    },
  },
  PRECISION_FRAGMENT: {
    get() {
      return kt.defaultFragmentPrecision;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"
      ),
        (kt.defaultFragmentPrecision = s);
    },
  },
});
var me = ((s) => (
  (s[(s.INTERACTION = 50)] = "INTERACTION"),
  (s[(s.HIGH = 25)] = "HIGH"),
  (s[(s.NORMAL = 0)] = "NORMAL"),
  (s[(s.LOW = -25)] = "LOW"),
  (s[(s.UTILITY = -50)] = "UTILITY"),
  s
))(me || {});
class ps {
  constructor(t, e = null, i = 0, r = !1) {
    (this.next = null),
      (this.previous = null),
      (this._destroyed = !1),
      (this.fn = t),
      (this.context = e),
      (this.priority = i),
      (this.once = r);
  }
  match(t, e = null) {
    return this.fn === t && this.context === e;
  }
  emit(t) {
    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
    const e = this.next;
    return (
      this.once && this.destroy(!0), this._destroyed && (this.next = null), e
    );
  }
  connect(t) {
    (this.previous = t),
      t.next && (t.next.previous = this),
      (this.next = t.next),
      (t.next = this);
  }
  destroy(t = !1) {
    (this._destroyed = !0),
      (this.fn = null),
      (this.context = null),
      this.previous && (this.previous.next = this.next),
      this.next && (this.next.previous = this.previous);
    const e = this.next;
    return (this.next = t ? null : e), (this.previous = null), e;
  }
}
const ea = class dt {
  constructor() {
    (this.autoStart = !1),
      (this.deltaTime = 1),
      (this.lastTime = -1),
      (this.speed = 1),
      (this.started = !1),
      (this._requestId = null),
      (this._maxElapsedMS = 100),
      (this._minElapsedMS = 0),
      (this._protected = !1),
      (this._lastFrame = -1),
      (this._head = new ps(null, null, 1 / 0)),
      (this.deltaMS = 1 / dt.targetFPMS),
      (this.elapsedMS = 1 / dt.targetFPMS),
      (this._tick = (t) => {
        (this._requestId = null),
          this.started &&
            (this.update(t),
            this.started &&
              this._requestId === null &&
              this._head.next &&
              (this._requestId = requestAnimationFrame(this._tick)));
      });
  }
  _requestIfNeeded() {
    this._requestId === null &&
      this._head.next &&
      ((this.lastTime = performance.now()),
      (this._lastFrame = this.lastTime),
      (this._requestId = requestAnimationFrame(this._tick)));
  }
  _cancelIfNeeded() {
    this._requestId !== null &&
      (cancelAnimationFrame(this._requestId), (this._requestId = null));
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(t, e, i = me.NORMAL) {
    return this._addListener(new ps(t, e, i));
  }
  addOnce(t, e, i = me.NORMAL) {
    return this._addListener(new ps(t, e, i, !0));
  }
  _addListener(t) {
    let e = this._head.next,
      i = this._head;
    if (!e) t.connect(i);
    else {
      for (; e; ) {
        if (t.priority > e.priority) {
          t.connect(i);
          break;
        }
        (i = e), (e = e.next);
      }
      t.previous || t.connect(i);
    }
    return this._startIfPossible(), this;
  }
  remove(t, e) {
    let i = this._head.next;
    for (; i; ) i.match(t, e) ? (i = i.destroy()) : (i = i.next);
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let t = 0,
      e = this._head;
    for (; (e = e.next); ) t++;
    return t;
  }
  start() {
    this.started || ((this.started = !0), this._requestIfNeeded());
  }
  stop() {
    this.started && ((this.started = !1), this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t; ) t = t.destroy(!0);
      this._head.destroy(), (this._head = null);
    }
  }
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      if (
        ((e = this.elapsedMS = t - this.lastTime),
        e > this._maxElapsedMS && (e = this._maxElapsedMS),
        (e *= this.speed),
        this._minElapsedMS)
      ) {
        const n = (t - this._lastFrame) | 0;
        if (n < this._minElapsedMS) return;
        this._lastFrame = t - (n % this._minElapsedMS);
      }
      (this.deltaMS = e), (this.deltaTime = this.deltaMS * dt.targetFPMS);
      const i = this._head;
      let r = i.next;
      for (; r; ) r = r.emit(this.deltaTime);
      i.next || this._cancelIfNeeded();
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t),
      i = Math.min(Math.max(0, e) / 1e3, dt.targetFPMS);
    this._maxElapsedMS = 1 / i;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(t) {
    if (t === 0) this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3);
    }
  }
  static get shared() {
    if (!dt._shared) {
      const t = (dt._shared = new dt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return dt._shared;
  }
  static get system() {
    if (!dt._system) {
      const t = (dt._system = new dt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return dt._system;
  }
};
ea.targetFPMS = 0.06;
let ct = ea;
Object.defineProperties(I, {
  TARGET_FPMS: {
    get() {
      return ct.targetFPMS;
    },
    set(s) {
      z("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),
        (ct.targetFPMS = s);
    },
  },
});
class ia {
  static init(t) {
    (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
      Object.defineProperty(this, "ticker", {
        set(e) {
          this._ticker && this._ticker.remove(this.render, this),
            (this._ticker = e),
            e && e.add(this.render, this, me.LOW);
        },
        get() {
          return this._ticker;
        },
      }),
      (this.stop = () => {
        this._ticker.stop();
      }),
      (this.start = () => {
        this._ticker.start();
      }),
      (this._ticker = null),
      (this.ticker = t.sharedTicker ? ct.shared : new ct()),
      t.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      (this.ticker = null), t.destroy();
    }
  }
}
ia.extension = A.Application;
M.add(ia);
const sa = [];
M.handleByList(A.Renderer, sa);
function Ah(s) {
  for (const t of sa) if (t.test(s)) return new t(s);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var wh = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
  Sh = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Ch = wh,
  ra = Sh;
class na {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let e;
    if (this.renderer.context.webGLVersion === 1) {
      const i = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null),
        (e = t.getParameter(t.SAMPLES)),
        t.bindFramebuffer(t.FRAMEBUFFER, i);
    } else {
      const i = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        (e = t.getParameter(t.SAMPLES)),
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, i);
    }
    e >= et.HIGH
      ? (this.multisample = et.HIGH)
      : e >= et.MEDIUM
      ? (this.multisample = et.MEDIUM)
      : e >= et.LOW
      ? (this.multisample = et.LOW)
      : (this.multisample = et.NONE);
  }
  destroy() {}
}
na.extension = { type: A.RendererSystem, name: "_multisample" };
M.add(na);
class Ih {
  constructor(t) {
    (this.buffer = t || null),
      (this.updateID = -1),
      (this.byteLength = -1),
      (this.refCount = 0);
  }
}
class aa {
  constructor(t) {
    (this.renderer = t),
      (this.managedBuffers = {}),
      (this.boundBufferBases = {});
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(!0),
      (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(t) {
    const { gl: e, CONTEXT_UID: i } = this,
      r = t._glBuffers[i] || this.createGLBuffer(t);
    e.bindBuffer(t.type, r.buffer);
  }
  unbind(t) {
    const { gl: e } = this;
    e.bindBuffer(t, null);
  }
  bindBufferBase(t, e) {
    const { gl: i, CONTEXT_UID: r } = this;
    if (this.boundBufferBases[e] !== t) {
      const n = t._glBuffers[r] || this.createGLBuffer(t);
      (this.boundBufferBases[e] = t),
        i.bindBufferBase(i.UNIFORM_BUFFER, e, n.buffer);
    }
  }
  bindBufferRange(t, e, i) {
    const { gl: r, CONTEXT_UID: n } = this;
    i = i || 0;
    const a = t._glBuffers[n] || this.createGLBuffer(t);
    r.bindBufferRange(r.UNIFORM_BUFFER, e || 0, a.buffer, i * 256, 256);
  }
  update(t) {
    const { gl: e, CONTEXT_UID: i } = this,
      r = t._glBuffers[i] || this.createGLBuffer(t);
    if (t._updateID !== r.updateID)
      if (
        ((r.updateID = t._updateID),
        e.bindBuffer(t.type, r.buffer),
        r.byteLength >= t.data.byteLength)
      )
        e.bufferSubData(t.type, 0, t.data);
      else {
        const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
        (r.byteLength = t.data.byteLength), e.bufferData(t.type, t.data, n);
      }
  }
  dispose(t, e) {
    if (!this.managedBuffers[t.id]) return;
    delete this.managedBuffers[t.id];
    const i = t._glBuffers[this.CONTEXT_UID],
      r = this.gl;
    t.disposeRunner.remove(this),
      i &&
        (e || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(t) {
    const e = Object.keys(this.managedBuffers);
    for (let i = 0; i < e.length; i++)
      this.dispose(this.managedBuffers[e[i]], t);
  }
  createGLBuffer(t) {
    const { CONTEXT_UID: e, gl: i } = this;
    return (
      (t._glBuffers[e] = new Ih(i.createBuffer())),
      (this.managedBuffers[t.id] = t),
      t.disposeRunner.add(this),
      t._glBuffers[e]
    );
  }
}
aa.extension = { type: A.RendererSystem, name: "buffer" };
M.add(aa);
class oa {
  constructor(t) {
    this.renderer = t;
  }
  render(t, e) {
    const i = this.renderer;
    let r, n, a, o;
    if (
      (e &&
        ((r = e.renderTexture),
        (n = e.clear),
        (a = e.transform),
        (o = e.skipUpdateTransform)),
      (this.renderingToScreen = !r),
      i.runners.prerender.emit(),
      i.emit("prerender"),
      (i.projection.transform = a),
      !i.context.isLost)
    ) {
      if ((r || (this.lastObjectRendered = t), !o)) {
        const h = t.enableTempParent();
        t.updateTransform(), t.disableTempParent(h);
      }
      i.renderTexture.bind(r),
        i.batch.currentRenderer.start(),
        (n ?? i.background.clearBeforeRender) && i.renderTexture.clear(),
        t.render(i),
        i.batch.currentRenderer.flush(),
        r && (e.blit && i.framebuffer.blit(), r.baseTexture.update()),
        i.runners.postrender.emit(),
        (i.projection.transform = null),
        i.emit("postrender");
    }
  }
  destroy() {
    (this.renderer = null), (this.lastObjectRendered = null);
  }
}
oa.extension = { type: A.RendererSystem, name: "objectRenderer" };
M.add(oa);
const Ai = class Gs extends bh {
  constructor(t) {
    super(),
      (this.type = yn.WEBGL),
      (t = Object.assign({}, I.RENDER_OPTIONS, t)),
      (this.gl = null),
      (this.CONTEXT_UID = 0),
      (this.globalUniforms = new bt({ projectionMatrix: new K() }, !0));
    const e = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize",
      ],
      systems: Gs.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample",
      ],
    };
    this.setup(e),
      "useContextAlpha" in t &&
        (z(
          "7.0.0",
          "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"
        ),
        (t.premultipliedAlpha =
          t.useContextAlpha && t.useContextAlpha !== "notMultiplied"),
        (t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha)),
      (this._plugin.rendererPlugins = Gs.__plugins),
      (this.options = t),
      this.startup.run(this.options);
  }
  static test(t) {
    return t != null && t.forceCanvas ? !1 : Ka();
  }
  render(t, e) {
    this.objectRenderer.render(t, e);
  }
  resize(t, e) {
    this._view.resizeView(t, e);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(t = !1) {
    this.runners.destroy.items.reverse(),
      this.emitWithCustomOptions(this.runners.destroy, { _view: t }),
      super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(t) {
    (this._view.resolution = t), this.runners.resolutionChange.emit(t);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return (
      z(
        "7.0.0",
        "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."
      ),
      this.background.clearBeforeRender
    );
  }
  get useContextAlpha() {
    return (
      z(
        "7.0.0",
        "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."
      ),
      this.context.useContextAlpha
    );
  }
  get preserveDrawingBuffer() {
    return (
      z(
        "7.0.0",
        "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"
      ),
      this.context.preserveDrawingBuffer
    );
  }
  get backgroundColor() {
    return (
      z(
        "7.0.0",
        "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
      ),
      this.background.color
    );
  }
  set backgroundColor(t) {
    z(
      "7.0.0",
      "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
    ),
      (this.background.color = t);
  }
  get backgroundAlpha() {
    return (
      z(
        "7.0.0",
        "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
      ),
      this.background.alpha
    );
  }
  set backgroundAlpha(t) {
    z(
      "7.0.0",
      "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
    ),
      (this.background.alpha = t);
  }
  get powerPreference() {
    return (
      z(
        "7.0.0",
        "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"
      ),
      this.context.powerPreference
    );
  }
  generateTexture(t, e) {
    return this.textureGenerator.generateTexture(t, e);
  }
};
(Ai.extension = { type: A.Renderer, priority: 1 }),
  (Ai.__plugins = {}),
  (Ai.__systems = {});
let hr = Ai;
M.handleByMap(A.RendererPlugin, hr.__plugins);
M.handleByMap(A.RendererSystem, hr.__systems);
M.add(hr);
class ha extends Ye {
  constructor(t, e) {
    const { width: i, height: r } = e || {};
    super(i, r), (this.items = []), (this.itemDirtyIds = []);
    for (let n = 0; n < t; n++) {
      const a = new k();
      this.items.push(a), this.itemDirtyIds.push(-2);
    }
    (this.length = t), (this._load = null), (this.baseTexture = null);
  }
  initFromArray(t, e) {
    for (let i = 0; i < this.length; i++)
      t[i] &&
        (t[i].castToBaseTexture
          ? this.addBaseTextureAt(t[i].castToBaseTexture(), i)
          : t[i] instanceof Ye
          ? this.addResourceAt(t[i], i)
          : this.addResourceAt(Sn(t[i], e), i));
  }
  dispose() {
    for (let t = 0, e = this.length; t < e; t++) this.items[t].destroy();
    (this.items = null), (this.itemDirtyIds = null), (this._load = null);
  }
  addResourceAt(t, e) {
    if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
    return (
      t.valid && !this.valid && this.resize(t.width, t.height),
      this.items[e].setResource(t),
      this
    );
  }
  bind(t) {
    if (this.baseTexture !== null)
      throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(t);
    for (let e = 0; e < this.length; e++)
      (this.items[e].parentTextureArray = t),
        this.items[e].on("update", t.update, t);
  }
  unbind(t) {
    super.unbind(t);
    for (let e = 0; e < this.length; e++)
      (this.items[e].parentTextureArray = null),
        this.items[e].off("update", t.update, t);
  }
  load() {
    if (this._load) return this._load;
    const t = this.items
      .map((e) => e.resource)
      .filter((e) => e)
      .map((e) => e.load());
    return (
      (this._load = Promise.all(t).then(() => {
        const { realWidth: e, realHeight: i } = this.items[0];
        return this.resize(e, i), this.update(), Promise.resolve(this);
      })),
      this._load
    );
  }
}
class Rh extends ha {
  constructor(t, e) {
    const { width: i, height: r } = e || {};
    let n, a;
    Array.isArray(t) ? ((n = t), (a = t.length)) : (a = t),
      super(a, { width: i, height: r }),
      n && this.initFromArray(n, e);
  }
  addBaseTextureAt(t, e) {
    if (t.resource) this.addResourceAt(t.resource, e);
    else throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(t) {
    super.bind(t), (t.target = Ce.TEXTURE_2D_ARRAY);
  }
  upload(t, e, i) {
    const { length: r, itemDirtyIds: n, items: a } = this,
      { gl: o } = t;
    i.dirtyId < 0 &&
      o.texImage3D(
        o.TEXTURE_2D_ARRAY,
        0,
        i.internalFormat,
        this._width,
        this._height,
        r,
        0,
        e.format,
        i.type,
        null
      );
    for (let h = 0; h < r; h++) {
      const l = a[h];
      n[h] < l.dirtyId &&
        ((n[h] = l.dirtyId),
        l.valid &&
          o.texSubImage3D(
            o.TEXTURE_2D_ARRAY,
            0,
            0,
            0,
            h,
            l.resource.width,
            l.resource.height,
            1,
            e.format,
            i.type,
            l.resource.source
          ));
    }
    return !0;
  }
}
class Ph extends Ht {
  constructor(t) {
    super(t);
  }
  static test(t) {
    const { OffscreenCanvas: e } = globalThis;
    return e && t instanceof e
      ? !0
      : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
  }
}
const la = class Ve extends ha {
  constructor(t, e) {
    const { width: i, height: r, autoLoad: n, linkBaseTexture: a } = e || {};
    if (t && t.length !== Ve.SIDES)
      throw new Error(`Invalid length. Got ${t.length}, expected 6`);
    super(6, { width: i, height: r });
    for (let o = 0; o < Ve.SIDES; o++)
      this.items[o].target = Ce.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    (this.linkBaseTexture = a !== !1),
      t && this.initFromArray(t, e),
      n !== !1 && this.load();
  }
  bind(t) {
    super.bind(t), (t.target = Ce.TEXTURE_CUBE_MAP);
  }
  addBaseTextureAt(t, e, i) {
    if ((i === void 0 && (i = this.linkBaseTexture), !this.items[e]))
      throw new Error(`Index ${e} is out of bounds`);
    if (
      !this.linkBaseTexture ||
      t.parentTextureArray ||
      Object.keys(t._glTextures).length > 0
    )
      if (t.resource) this.addResourceAt(t.resource, e);
      else
        throw new Error(
          "CubeResource does not support copying of renderTexture."
        );
    else
      (t.target = Ce.TEXTURE_CUBE_MAP_POSITIVE_X + e),
        (t.parentTextureArray = this.baseTexture),
        (this.items[e] = t);
    return (
      t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
      (this.items[e] = t),
      this
    );
  }
  upload(t, e, i) {
    const r = this.itemDirtyIds;
    for (let n = 0; n < Ve.SIDES; n++) {
      const a = this.items[n];
      (r[n] < a.dirtyId || i.dirtyId < e.dirtyId) &&
        (a.valid && a.resource
          ? (a.resource.upload(t, a, i), (r[n] = a.dirtyId))
          : r[n] < -1 &&
            (t.gl.texImage2D(
              a.target,
              0,
              i.internalFormat,
              e.realWidth,
              e.realHeight,
              0,
              e.format,
              i.type,
              null
            ),
            (r[n] = -1)));
    }
    return !0;
  }
  static test(t) {
    return Array.isArray(t) && t.length === Ve.SIDES;
  }
};
la.SIDES = 6;
let Mh = la;
class Se extends Ht {
  constructor(t, e) {
    e = e || {};
    let i, r, n;
    typeof t == "string"
      ? ((i = Se.EMPTY), (r = t), (n = !0))
      : ((i = t), (r = null), (n = !1)),
      super(i),
      (this.url = r),
      (this.crossOrigin = e.crossOrigin ?? !0),
      (this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null),
      (this.ownsImageBitmap = e.ownsImageBitmap ?? n),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load
      ? this._load
      : ((this._load = new Promise(async (t, e) => {
          if (this.url === null) {
            t(this);
            return;
          }
          try {
            const i = await I.ADAPTER.fetch(this.url, {
              mode: this.crossOrigin ? "cors" : "no-cors",
            });
            if (this.destroyed) return;
            const r = await i.blob();
            if (this.destroyed) return;
            const n = await createImageBitmap(r, {
              premultiplyAlpha:
                this.alphaMode === null || this.alphaMode === lt.UNPACK
                  ? "premultiply"
                  : "none",
            });
            if (this.destroyed) {
              n.close();
              return;
            }
            (this.source = n), this.update(), t(this);
          } catch (i) {
            if (this.destroyed) return;
            e(i), this.onError.emit(i);
          }
        })),
        this._load);
  }
  upload(t, e, i) {
    return this.source instanceof ImageBitmap
      ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
        super.upload(t, e, i))
      : (this.load(), !1);
  }
  dispose() {
    this.ownsImageBitmap &&
      this.source instanceof ImageBitmap &&
      this.source.close(),
      super.dispose(),
      (this._load = null);
  }
  static test(t) {
    return (
      !!globalThis.createImageBitmap &&
      typeof ImageBitmap < "u" &&
      (typeof t == "string" || t instanceof ImageBitmap)
    );
  }
  static get EMPTY() {
    return (Se._EMPTY = Se._EMPTY ?? I.ADAPTER.createCanvas(0, 0)), Se._EMPTY;
  }
}
const Hs = class wi extends Ht {
  constructor(t, e) {
    (e = e || {}),
      super(I.ADAPTER.createCanvas()),
      (this._width = 0),
      (this._height = 0),
      (this.svg = t),
      (this.scale = e.scale || 1),
      (this._overrideWidth = e.width),
      (this._overrideHeight = e.height),
      (this._resolve = null),
      (this._crossorigin = e.crossorigin),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load
      ? this._load
      : ((this._load = new Promise((t) => {
          if (
            ((this._resolve = () => {
              this.update(), t(this);
            }),
            wi.SVG_XML.test(this.svg.trim()))
          ) {
            if (!btoa)
              throw new Error(
                "Your browser doesn't support base64 conversions."
              );
            this.svg = `data:image/svg+xml;base64,${btoa(
              unescape(encodeURIComponent(this.svg))
            )}`;
          }
          this._loadSvg();
        })),
        this._load);
  }
  _loadSvg() {
    const t = new Image();
    Ht.crossOrigin(t, this.svg, this._crossorigin),
      (t.src = this.svg),
      (t.onerror = (e) => {
        this._resolve && ((t.onerror = null), this.onError.emit(e));
      }),
      (t.onload = () => {
        if (!this._resolve) return;
        const e = t.width,
          i = t.height;
        if (!e || !i)
          throw new Error(
            "The SVG image must have width and height defined (in pixels), canvas API needs them."
          );
        let r = e * this.scale,
          n = i * this.scale;
        (this._overrideWidth || this._overrideHeight) &&
          ((r = this._overrideWidth || (this._overrideHeight / i) * e),
          (n = this._overrideHeight || (this._overrideWidth / e) * i)),
          (r = Math.round(r)),
          (n = Math.round(n));
        const a = this.source;
        (a.width = r),
          (a.height = n),
          (a._pixiId = `canvas_${fe()}`),
          a.getContext("2d").drawImage(t, 0, 0, e, i, 0, 0, r, n),
          this._resolve(),
          (this._resolve = null);
      });
  }
  static getSize(t) {
    const e = wi.SVG_SIZE.exec(t),
      i = {};
    return (
      e &&
        ((i[e[1]] = Math.round(parseFloat(e[3]))),
        (i[e[5]] = Math.round(parseFloat(e[7])))),
      i
    );
  }
  dispose() {
    super.dispose(), (this._resolve = null), (this._crossorigin = null);
  }
  static test(t, e) {
    return (
      e === "svg" ||
      (typeof t == "string" && t.startsWith("data:image/svg+xml")) ||
      (typeof t == "string" && wi.SVG_XML.test(t))
    );
  }
};
(Hs.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
  (Hs.SVG_SIZE =
    /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
let Xs = Hs;
class Bh extends Ht {
  constructor(t) {
    super(t);
  }
  static test(t) {
    return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame;
  }
}
const Vs = class zs extends Ht {
  constructor(t, e) {
    if (((e = e || {}), !(t instanceof HTMLVideoElement))) {
      const i = document.createElement("video");
      e.autoLoad !== !1 && i.setAttribute("preload", "auto"),
        e.playsinline !== !1 &&
          (i.setAttribute("webkit-playsinline", ""),
          i.setAttribute("playsinline", "")),
        e.muted === !0 && (i.setAttribute("muted", ""), (i.muted = !0)),
        e.loop === !0 && i.setAttribute("loop", ""),
        e.autoPlay !== !1 && i.setAttribute("autoplay", ""),
        typeof t == "string" && (t = [t]);
      const r = t[0].src || t[0];
      Ht.crossOrigin(i, r, e.crossorigin);
      for (let n = 0; n < t.length; ++n) {
        const a = document.createElement("source");
        let { src: o, mime: h } = t[n];
        if (((o = o || t[n]), o.startsWith("data:")))
          h = o.slice(5, o.indexOf(";"));
        else if (!o.startsWith("blob:")) {
          const l = o.split("?").shift().toLowerCase(),
            d = l.slice(l.lastIndexOf(".") + 1);
          h = h || zs.MIME_TYPES[d] || `video/${d}`;
        }
        (a.src = o), h && (a.type = h), i.appendChild(a);
      }
      t = i;
    }
    super(t),
      (this.noSubImage = !0),
      (this._autoUpdate = !0),
      (this._isConnectedToTicker = !1),
      (this._updateFPS = e.updateFPS || 0),
      (this._msToNextUpdate = 0),
      (this.autoPlay = e.autoPlay !== !1),
      (this._videoFrameRequestCallback =
        this._videoFrameRequestCallback.bind(this)),
      (this._videoFrameRequestCallbackHandle = null),
      (this._load = null),
      (this._resolve = null),
      (this._reject = null),
      (this._onCanPlay = this._onCanPlay.bind(this)),
      (this._onError = this._onError.bind(this)),
      (this._onPlayStart = this._onPlayStart.bind(this)),
      (this._onPlayStop = this._onPlayStop.bind(this)),
      (this._onSeeked = this._onSeeked.bind(this)),
      e.autoLoad !== !1 && this.load();
  }
  update(t = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const e = ct.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) &&
        (super.update(),
        (this._msToNextUpdate = this._updateFPS
          ? Math.floor(1e3 / this._updateFPS)
          : 0));
    }
  }
  _videoFrameRequestCallback() {
    this.update(),
      this.destroyed
        ? (this._videoFrameRequestCallbackHandle = null)
        : (this._videoFrameRequestCallbackHandle =
            this.source.requestVideoFrameCallback(
              this._videoFrameRequestCallback
            ));
  }
  load() {
    if (this._load) return this._load;
    const t = this.source;
    return (
      (t.readyState === t.HAVE_ENOUGH_DATA ||
        t.readyState === t.HAVE_FUTURE_DATA) &&
        t.width &&
        t.height &&
        (t.complete = !0),
      t.addEventListener("play", this._onPlayStart),
      t.addEventListener("pause", this._onPlayStop),
      t.addEventListener("seeked", this._onSeeked),
      this._isSourceReady()
        ? this._onCanPlay()
        : (t.addEventListener("canplay", this._onCanPlay),
          t.addEventListener("canplaythrough", this._onCanPlay),
          t.addEventListener("error", this._onError, !0)),
      (this._load = new Promise((e, i) => {
        this.valid
          ? e(this)
          : ((this._resolve = e), (this._reject = i), t.load());
      })),
      this._load
    );
  }
  _onError(t) {
    this.source.removeEventListener("error", this._onError, !0),
      this.onError.emit(t),
      this._reject &&
        (this._reject(t), (this._reject = null), (this._resolve = null));
  }
  _isSourcePlaying() {
    const t = this.source;
    return !t.paused && !t.ended;
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    this._autoUpdate &&
      !this._isSourcePlaying() &&
      ((this._msToNextUpdate = 0), this.update(), (this._msToNextUpdate = 0));
  }
  _onCanPlay() {
    const t = this.source;
    t.removeEventListener("canplay", this._onCanPlay),
      t.removeEventListener("canplaythrough", this._onCanPlay);
    const e = this.valid;
    (this._msToNextUpdate = 0),
      this.update(),
      (this._msToNextUpdate = 0),
      !e &&
        this._resolve &&
        (this._resolve(this), (this._resolve = null), (this._reject = null)),
      this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
  }
  dispose() {
    this._configureAutoUpdate();
    const t = this.source;
    t &&
      (t.removeEventListener("play", this._onPlayStart),
      t.removeEventListener("pause", this._onPlayStop),
      t.removeEventListener("seeked", this._onSeeked),
      t.removeEventListener("canplay", this._onCanPlay),
      t.removeEventListener("canplaythrough", this._onCanPlay),
      t.removeEventListener("error", this._onError, !0),
      t.pause(),
      (t.src = ""),
      t.load()),
      super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate &&
      ((this._autoUpdate = t), this._configureAutoUpdate());
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    t !== this._updateFPS &&
      ((this._updateFPS = t), this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying()
      ? !this._updateFPS && this.source.requestVideoFrameCallback
        ? (this._isConnectedToTicker &&
            (ct.shared.remove(this.update, this),
            (this._isConnectedToTicker = !1),
            (this._msToNextUpdate = 0)),
          this._videoFrameRequestCallbackHandle === null &&
            (this._videoFrameRequestCallbackHandle =
              this.source.requestVideoFrameCallback(
                this._videoFrameRequestCallback
              )))
        : (this._videoFrameRequestCallbackHandle !== null &&
            (this.source.cancelVideoFrameCallback(
              this._videoFrameRequestCallbackHandle
            ),
            (this._videoFrameRequestCallbackHandle = null)),
          this._isConnectedToTicker ||
            (ct.shared.add(this.update, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (this._videoFrameRequestCallbackHandle !== null &&
          (this.source.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (ct.shared.remove(this.update, this),
          (this._isConnectedToTicker = !1),
          (this._msToNextUpdate = 0)));
  }
  static test(t, e) {
    return (
      (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
      zs.TYPES.includes(e)
    );
  }
};
(Vs.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]),
  (Vs.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4",
  });
let da = Vs;
Ps.push(Se, Ln, Ph, da, Bh, Xs, Vi, Mh, Rh);
class Ni {
  constructor() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.rect = null),
      (this.updateID = -1);
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0);
  }
  getRectangle(t) {
    return this.minX > this.maxX || this.minY > this.maxY
      ? H.EMPTY
      : ((t = t || new H(0, 0, 1, 1)),
        (t.x = this.minX),
        (t.y = this.minY),
        (t.width = this.maxX - this.minX),
        (t.height = this.maxY - this.minY),
        t);
  }
  addPoint(t) {
    (this.minX = Math.min(this.minX, t.x)),
      (this.maxX = Math.max(this.maxX, t.x)),
      (this.minY = Math.min(this.minY, t.y)),
      (this.maxY = Math.max(this.maxY, t.y));
  }
  addPointMatrix(t, e) {
    const { a: i, b: r, c: n, d: a, tx: o, ty: h } = t,
      l = i * e.x + n * e.y + o,
      d = r * e.x + a * e.y + h;
    (this.minX = Math.min(this.minX, l)),
      (this.maxX = Math.max(this.maxX, l)),
      (this.minY = Math.min(this.minY, d)),
      (this.maxY = Math.max(this.maxY, d));
  }
  addQuad(t) {
    let e = this.minX,
      i = this.minY,
      r = this.maxX,
      n = this.maxY,
      a = t[0],
      o = t[1];
    (e = a < e ? a : e),
      (i = o < i ? o : i),
      (r = a > r ? a : r),
      (n = o > n ? o : n),
      (a = t[2]),
      (o = t[3]),
      (e = a < e ? a : e),
      (i = o < i ? o : i),
      (r = a > r ? a : r),
      (n = o > n ? o : n),
      (a = t[4]),
      (o = t[5]),
      (e = a < e ? a : e),
      (i = o < i ? o : i),
      (r = a > r ? a : r),
      (n = o > n ? o : n),
      (a = t[6]),
      (o = t[7]),
      (e = a < e ? a : e),
      (i = o < i ? o : i),
      (r = a > r ? a : r),
      (n = o > n ? o : n),
      (this.minX = e),
      (this.minY = i),
      (this.maxX = r),
      (this.maxY = n);
  }
  addFrame(t, e, i, r, n) {
    this.addFrameMatrix(t.worldTransform, e, i, r, n);
  }
  addFrameMatrix(t, e, i, r, n) {
    const a = t.a,
      o = t.b,
      h = t.c,
      l = t.d,
      d = t.tx,
      c = t.ty;
    let u = this.minX,
      p = this.minY,
      f = this.maxX,
      m = this.maxY,
      g = a * e + h * i + d,
      _ = o * e + l * i + c;
    (u = g < u ? g : u),
      (p = _ < p ? _ : p),
      (f = g > f ? g : f),
      (m = _ > m ? _ : m),
      (g = a * r + h * i + d),
      (_ = o * r + l * i + c),
      (u = g < u ? g : u),
      (p = _ < p ? _ : p),
      (f = g > f ? g : f),
      (m = _ > m ? _ : m),
      (g = a * e + h * n + d),
      (_ = o * e + l * n + c),
      (u = g < u ? g : u),
      (p = _ < p ? _ : p),
      (f = g > f ? g : f),
      (m = _ > m ? _ : m),
      (g = a * r + h * n + d),
      (_ = o * r + l * n + c),
      (u = g < u ? g : u),
      (p = _ < p ? _ : p),
      (f = g > f ? g : f),
      (m = _ > m ? _ : m),
      (this.minX = u),
      (this.minY = p),
      (this.maxX = f),
      (this.maxY = m);
  }
  addVertexData(t, e, i) {
    let r = this.minX,
      n = this.minY,
      a = this.maxX,
      o = this.maxY;
    for (let h = e; h < i; h += 2) {
      const l = t[h],
        d = t[h + 1];
      (r = l < r ? l : r),
        (n = d < n ? d : n),
        (a = l > a ? l : a),
        (o = d > o ? d : o);
    }
    (this.minX = r), (this.minY = n), (this.maxX = a), (this.maxY = o);
  }
  addVertices(t, e, i, r) {
    this.addVerticesMatrix(t.worldTransform, e, i, r);
  }
  addVerticesMatrix(t, e, i, r, n = 0, a = n) {
    const o = t.a,
      h = t.b,
      l = t.c,
      d = t.d,
      c = t.tx,
      u = t.ty;
    let p = this.minX,
      f = this.minY,
      m = this.maxX,
      g = this.maxY;
    for (let _ = i; _ < r; _ += 2) {
      const b = e[_],
        x = e[_ + 1],
        y = o * b + l * x + c,
        R = d * x + h * b + u;
      (p = Math.min(p, y - n)),
        (m = Math.max(m, y + n)),
        (f = Math.min(f, R - a)),
        (g = Math.max(g, R + a));
    }
    (this.minX = p), (this.minY = f), (this.maxX = m), (this.maxY = g);
  }
  addBounds(t) {
    const e = this.minX,
      i = this.minY,
      r = this.maxX,
      n = this.maxY;
    (this.minX = t.minX < e ? t.minX : e),
      (this.minY = t.minY < i ? t.minY : i),
      (this.maxX = t.maxX > r ? t.maxX : r),
      (this.maxY = t.maxY > n ? t.maxY : n);
  }
  addBoundsMask(t, e) {
    const i = t.minX > e.minX ? t.minX : e.minX,
      r = t.minY > e.minY ? t.minY : e.minY,
      n = t.maxX < e.maxX ? t.maxX : e.maxX,
      a = t.maxY < e.maxY ? t.maxY : e.maxY;
    if (i <= n && r <= a) {
      const o = this.minX,
        h = this.minY,
        l = this.maxX,
        d = this.maxY;
      (this.minX = i < o ? i : o),
        (this.minY = r < h ? r : h),
        (this.maxX = n > l ? n : l),
        (this.maxY = a > d ? a : d);
    }
  }
  addBoundsMatrix(t, e) {
    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
  }
  addBoundsArea(t, e) {
    const i = t.minX > e.x ? t.minX : e.x,
      r = t.minY > e.y ? t.minY : e.y,
      n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
      a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
    if (i <= n && r <= a) {
      const o = this.minX,
        h = this.minY,
        l = this.maxX,
        d = this.maxY;
      (this.minX = i < o ? i : o),
        (this.minY = r < h ? r : h),
        (this.maxX = n > l ? n : l),
        (this.maxY = a > d ? a : d);
    }
  }
  pad(t = 0, e = t) {
    this.isEmpty() ||
      ((this.minX -= t), (this.maxX += t), (this.minY -= e), (this.maxY += e));
  }
  addFramePad(t, e, i, r, n, a) {
    (t -= n),
      (e -= a),
      (i += n),
      (r += a),
      (this.minX = this.minX < t ? this.minX : t),
      (this.maxX = this.maxX > i ? this.maxX : i),
      (this.minY = this.minY < e ? this.minY : e),
      (this.maxY = this.maxY > r ? this.maxY : r);
  }
}
class J extends qe {
  constructor() {
    super(),
      (this.tempDisplayObjectParent = null),
      (this.transform = new ar()),
      (this.alpha = 1),
      (this.visible = !0),
      (this.renderable = !0),
      (this.cullable = !1),
      (this.cullArea = null),
      (this.parent = null),
      (this.worldAlpha = 1),
      (this._lastSortedIndex = 0),
      (this._zIndex = 0),
      (this.filterArea = null),
      (this.filters = null),
      (this._enabledFilters = null),
      (this._bounds = new Ni()),
      (this._localBounds = null),
      (this._boundsID = 0),
      (this._boundsRect = null),
      (this._localBoundsRect = null),
      (this._mask = null),
      (this._maskRefCount = 0),
      (this._destroyed = !1),
      (this.isSprite = !1),
      (this.isMask = !1);
  }
  static mixin(t) {
    const e = Object.keys(t);
    for (let i = 0; i < e.length; ++i) {
      const r = e[i];
      Object.defineProperty(
        J.prototype,
        r,
        Object.getOwnPropertyDescriptor(t, r)
      );
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent
      ? (this.parent._recursivePostUpdateTransform(),
        this.transform.updateTransform(this.parent.transform))
      : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
  }
  getBounds(t, e) {
    return (
      t ||
        (this.parent
          ? (this._recursivePostUpdateTransform(), this.updateTransform())
          : ((this.parent = this._tempDisplayObjectParent),
            this.updateTransform(),
            (this.parent = null))),
      this._bounds.updateID !== this._boundsID &&
        (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
      e ||
        (this._boundsRect || (this._boundsRect = new H()),
        (e = this._boundsRect)),
      this._bounds.getRectangle(e)
    );
  }
  getLocalBounds(t) {
    t ||
      (this._localBoundsRect || (this._localBoundsRect = new H()),
      (t = this._localBoundsRect)),
      this._localBounds || (this._localBounds = new Ni());
    const e = this.transform,
      i = this.parent;
    (this.parent = null),
      (this._tempDisplayObjectParent.worldAlpha =
        (i == null ? void 0 : i.worldAlpha) ?? 1),
      (this.transform = this._tempDisplayObjectParent.transform);
    const r = this._bounds,
      n = this._boundsID;
    this._bounds = this._localBounds;
    const a = this.getBounds(!1, t);
    return (
      (this.parent = i),
      (this.transform = e),
      (this._bounds = r),
      (this._bounds.updateID += this._boundsID - n),
      a
    );
  }
  toGlobal(t, e, i = !1) {
    return (
      i ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.apply(t, e)
    );
  }
  toLocal(t, e, i, r) {
    return (
      e && (t = e.toGlobal(t, i, r)),
      r ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.applyInverse(t, i)
    );
  }
  setParent(t) {
    if (!t || !t.addChild)
      throw new Error("setParent: Argument must be a Container");
    return t.addChild(this), t;
  }
  removeFromParent() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  setTransform(t = 0, e = 0, i = 1, r = 1, n = 0, a = 0, o = 0, h = 0, l = 0) {
    return (
      (this.position.x = t),
      (this.position.y = e),
      (this.scale.x = i || 1),
      (this.scale.y = r || 1),
      (this.rotation = n),
      (this.skew.x = a),
      (this.skew.y = o),
      (this.pivot.x = h),
      (this.pivot.y = l),
      this
    );
  }
  destroy(t) {
    this.removeFromParent(),
      (this._destroyed = !0),
      (this.transform = null),
      (this.parent = null),
      (this._bounds = null),
      (this.mask = null),
      (this.cullArea = null),
      (this.filters = null),
      (this.filterArea = null),
      (this.hitArea = null),
      (this.eventMode = "auto"),
      (this.interactiveChildren = !1),
      this.emit("destroyed"),
      this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return (
      this.tempDisplayObjectParent === null &&
        (this.tempDisplayObjectParent = new Dh()),
      this.tempDisplayObjectParent
    );
  }
  enableTempParent() {
    const t = this.parent;
    return (this.parent = this._tempDisplayObjectParent), t;
  }
  disableTempParent(t) {
    this.parent = t;
  }
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  get angle() {
    return this.transform.rotation * wo;
  }
  set angle(t) {
    this.transform.rotation = t * So;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    this._zIndex !== t &&
      ((this._zIndex = t), this.parent && (this.parent.sortDirty = !0));
  }
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible) return !1;
      t = t.parent;
    } while (t);
    return !0;
  }
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (e._maskRefCount--,
          e._maskRefCount === 0 && ((e.renderable = !0), (e.isMask = !1)));
      }
      if (((this._mask = t), this._mask)) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (e._maskRefCount === 0 && ((e.renderable = !1), (e.isMask = !0)),
          e._maskRefCount++);
      }
    }
  }
}
class Dh extends J {
  constructor() {
    super(...arguments), (this.sortDirty = null);
  }
}
J.prototype.displayObjectUpdateTransform = J.prototype.updateTransform;
const Fh = new K();
function Lh(s, t) {
  return s.zIndex === t.zIndex
    ? s._lastSortedIndex - t._lastSortedIndex
    : s.zIndex - t.zIndex;
}
const ca = class Ws extends J {
  constructor() {
    super(),
      (this.children = []),
      (this.sortableChildren = Ws.defaultSortableChildren),
      (this.sortDirty = !1);
  }
  onChildrenChange(t) {}
  addChild(...t) {
    if (t.length > 1) for (let e = 0; e < t.length; e++) this.addChild(t[e]);
    else {
      const e = t[0];
      e.parent && e.parent.removeChild(e),
        (e.parent = this),
        (this.sortDirty = !0),
        (e.transform._parentID = -1),
        this.children.push(e),
        this._boundsID++,
        this.onChildrenChange(this.children.length - 1),
        this.emit("childAdded", e, this, this.children.length - 1),
        e.emit("added", this);
    }
    return t[0];
  }
  addChildAt(t, e) {
    if (e < 0 || e > this.children.length)
      throw new Error(
        `${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`
      );
    return (
      t.parent && t.parent.removeChild(t),
      (t.parent = this),
      (this.sortDirty = !0),
      (t.transform._parentID = -1),
      this.children.splice(e, 0, t),
      this._boundsID++,
      this.onChildrenChange(e),
      t.emit("added", this),
      this.emit("childAdded", t, this, e),
      t
    );
  }
  swapChildren(t, e) {
    if (t === e) return;
    const i = this.getChildIndex(t),
      r = this.getChildIndex(e);
    (this.children[i] = e),
      (this.children[r] = t),
      this.onChildrenChange(i < r ? i : r);
  }
  getChildIndex(t) {
    const e = this.children.indexOf(t);
    if (e === -1)
      throw new Error(
        "The supplied DisplayObject must be a child of the caller"
      );
    return e;
  }
  setChildIndex(t, e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(
        `The index ${e} supplied is out of bounds ${this.children.length}`
      );
    const i = this.getChildIndex(t);
    Ie(this.children, i, 1),
      this.children.splice(e, 0, t),
      this.onChildrenChange(e);
  }
  getChildAt(t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`getChildAt: Index (${t}) does not exist.`);
    return this.children[t];
  }
  removeChild(...t) {
    if (t.length > 1) for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
    else {
      const e = t[0],
        i = this.children.indexOf(e);
      if (i === -1) return null;
      (e.parent = null),
        (e.transform._parentID = -1),
        Ie(this.children, i, 1),
        this._boundsID++,
        this.onChildrenChange(i),
        e.emit("removed", this),
        this.emit("childRemoved", e, this, i);
    }
    return t[0];
  }
  removeChildAt(t) {
    const e = this.getChildAt(t);
    return (
      (e.parent = null),
      (e.transform._parentID = -1),
      Ie(this.children, t, 1),
      this._boundsID++,
      this.onChildrenChange(t),
      e.emit("removed", this),
      this.emit("childRemoved", e, this, t),
      e
    );
  }
  removeChildren(t = 0, e = this.children.length) {
    const i = t,
      r = e,
      n = r - i;
    let a;
    if (n > 0 && n <= r) {
      a = this.children.splice(i, n);
      for (let o = 0; o < a.length; ++o)
        (a[o].parent = null), a[o].transform && (a[o].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(t);
      for (let o = 0; o < a.length; ++o)
        a[o].emit("removed", this), this.emit("childRemoved", a[o], this, o);
      return a;
    } else if (n === 0 && this.children.length === 0) return [];
    throw new RangeError(
      "removeChildren: numeric values are outside the acceptable range."
    );
  }
  sortChildren() {
    let t = !1;
    for (let e = 0, i = this.children.length; e < i; ++e) {
      const r = this.children[e];
      (r._lastSortedIndex = e), !t && r.zIndex !== 0 && (t = !0);
    }
    t && this.children.length > 1 && this.children.sort(Lh),
      (this.sortDirty = !1);
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(),
      this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
    for (let t = 0, e = this.children.length; t < e; ++t) {
      const i = this.children[t];
      i.visible && i.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      if (!(!e.visible || !e.renderable))
        if ((e.calculateBounds(), e._mask)) {
          const i = e._mask.isMaskData ? e._mask.maskObject : e._mask;
          i
            ? (i.calculateBounds(),
              this._bounds.addBoundsMask(e._bounds, i._bounds))
            : this._bounds.addBounds(e._bounds);
        } else
          e.filterArea
            ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
            : this._bounds.addBounds(e._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(t, e = !1) {
    const i = super.getLocalBounds(t);
    if (!e)
      for (let r = 0, n = this.children.length; r < n; ++r) {
        const a = this.children[r];
        a.visible && a.updateTransform();
      }
    return i;
  }
  _calculateBounds() {}
  _renderWithCulling(t) {
    const e = t.renderTexture.sourceFrame;
    if (!(e.width > 0 && e.height > 0)) return;
    let i, r;
    this.cullArea
      ? ((i = this.cullArea), (r = this.worldTransform))
      : this._render !== Ws.prototype._render && (i = this.getBounds(!0));
    const n = t.projection.transform;
    if (
      (n && (r ? ((r = Fh.copyFrom(r)), r.prepend(n)) : (r = n)),
      i && e.intersects(i, r))
    )
      this._render(t);
    else if (this.cullArea) return;
    for (let a = 0, o = this.children.length; a < o; ++a) {
      const h = this.children[a],
        l = h.cullable;
      (h.cullable = l || !this.cullArea), h.render(t), (h.cullable = l);
    }
  }
  render(t) {
    var e;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
      if (this._mask || ((e = this.filters) != null && e.length))
        this.renderAdvanced(t);
      else if (this.cullable) this._renderWithCulling(t);
      else {
        this._render(t);
        for (let i = 0, r = this.children.length; i < r; ++i)
          this.children[i].render(t);
      }
  }
  renderAdvanced(t) {
    var n, a, o;
    const e = this.filters,
      i = this._mask;
    if (e) {
      this._enabledFilters || (this._enabledFilters = []),
        (this._enabledFilters.length = 0);
      for (let h = 0; h < e.length; h++)
        e[h].enabled && this._enabledFilters.push(e[h]);
    }
    const r =
      (e && ((n = this._enabledFilters) == null ? void 0 : n.length)) ||
      (i &&
        (!i.isMaskData || (i.enabled && (i.autoDetect || i.type !== st.NONE))));
    if (
      (r && t.batch.flush(),
      e &&
        (a = this._enabledFilters) != null &&
        a.length &&
        t.filter.push(this, this._enabledFilters),
      i && t.mask.push(this, this._mask),
      this.cullable)
    )
      this._renderWithCulling(t);
    else {
      this._render(t);
      for (let h = 0, l = this.children.length; h < l; ++h)
        this.children[h].render(t);
    }
    r && t.batch.flush(),
      i && t.mask.pop(this),
      e && (o = this._enabledFilters) != null && o.length && t.filter.pop();
  }
  _render(t) {}
  destroy(t) {
    super.destroy(), (this.sortDirty = !1);
    const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children,
      i = this.removeChildren(0, this.children.length);
    if (e) for (let r = 0; r < i.length; ++r) i[r].destroy(t);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    e !== 0 ? (this.scale.x = t / e) : (this.scale.x = 1), (this._width = t);
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    e !== 0 ? (this.scale.y = t / e) : (this.scale.y = 1), (this._height = t);
  }
};
ca.defaultSortableChildren = !1;
let Tt = ca;
Tt.prototype.containerUpdateTransform = Tt.prototype.updateTransform;
Object.defineProperties(I, {
  SORTABLE_CHILDREN: {
    get() {
      return Tt.defaultSortableChildren;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"
      ),
        (Tt.defaultSortableChildren = s);
    },
  },
});
const ke = new $(),
  Nh = new Uint16Array([0, 1, 2, 0, 2, 3]);
let Yi = class ua extends Tt {
  constructor(t) {
    super(),
      (this._anchor = new Ut(
        this._onAnchorUpdate,
        this,
        t ? t.defaultAnchor.x : 0,
        t ? t.defaultAnchor.y : 0
      )),
      (this._texture = null),
      (this._width = 0),
      (this._height = 0),
      (this._tintColor = new q(16777215)),
      (this._tintRGB = null),
      (this.tint = 16777215),
      (this.blendMode = L.NORMAL),
      (this._cachedTint = 16777215),
      (this.uvs = null),
      (this.texture = t || P.EMPTY),
      (this.vertexData = new Float32Array(8)),
      (this.vertexTrimmedData = null),
      (this._transformID = -1),
      (this._textureID = -1),
      (this._transformTrimmedID = -1),
      (this._textureTrimmedID = -1),
      (this.indices = Nh),
      (this.pluginName = "batch"),
      (this.isSprite = !0),
      (this._roundPixels = I.ROUND_PIXELS);
  }
  _onTextureUpdate() {
    (this._textureID = -1),
      (this._textureTrimmedID = -1),
      (this._cachedTint = 16777215),
      this._width &&
        (this.scale.x =
          (jt(this.scale.x) * this._width) / this._texture.orig.width),
      this._height &&
        (this.scale.y =
          (jt(this.scale.y) * this._height) / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    (this._transformID = -1), (this._transformTrimmedID = -1);
  }
  calculateVertices() {
    const t = this._texture;
    if (
      this._transformID === this.transform._worldID &&
      this._textureID === t._updateID
    )
      return;
    this._textureID !== t._updateID &&
      (this.uvs = this._texture._uvs.uvsFloat32),
      (this._transformID = this.transform._worldID),
      (this._textureID = t._updateID);
    const e = this.transform.worldTransform,
      i = e.a,
      r = e.b,
      n = e.c,
      a = e.d,
      o = e.tx,
      h = e.ty,
      l = this.vertexData,
      d = t.trim,
      c = t.orig,
      u = this._anchor;
    let p = 0,
      f = 0,
      m = 0,
      g = 0;
    if (
      (d
        ? ((f = d.x - u._x * c.width),
          (p = f + d.width),
          (g = d.y - u._y * c.height),
          (m = g + d.height))
        : ((f = -u._x * c.width),
          (p = f + c.width),
          (g = -u._y * c.height),
          (m = g + c.height)),
      (l[0] = i * f + n * g + o),
      (l[1] = a * g + r * f + h),
      (l[2] = i * p + n * g + o),
      (l[3] = a * g + r * p + h),
      (l[4] = i * p + n * m + o),
      (l[5] = a * m + r * p + h),
      (l[6] = i * f + n * m + o),
      (l[7] = a * m + r * f + h),
      this._roundPixels)
    ) {
      const _ = I.RESOLUTION;
      for (let b = 0; b < l.length; ++b) l[b] = Math.round(l[b] * _) / _;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
    else if (
      this._transformTrimmedID === this.transform._worldID &&
      this._textureTrimmedID === this._texture._updateID
    )
      return;
    (this._transformTrimmedID = this.transform._worldID),
      (this._textureTrimmedID = this._texture._updateID);
    const t = this._texture,
      e = this.vertexTrimmedData,
      i = t.orig,
      r = this._anchor,
      n = this.transform.worldTransform,
      a = n.a,
      o = n.b,
      h = n.c,
      l = n.d,
      d = n.tx,
      c = n.ty,
      u = -r._x * i.width,
      p = u + i.width,
      f = -r._y * i.height,
      m = f + i.height;
    if (
      ((e[0] = a * u + h * f + d),
      (e[1] = l * f + o * u + c),
      (e[2] = a * p + h * f + d),
      (e[3] = l * f + o * p + c),
      (e[4] = a * p + h * m + d),
      (e[5] = l * m + o * p + c),
      (e[6] = a * u + h * m + d),
      (e[7] = l * m + o * u + c),
      this._roundPixels)
    ) {
      const g = I.RESOLUTION;
      for (let _ = 0; _ < e.length; ++_) e[_] = Math.round(e[_] * g) / g;
    }
  }
  _render(t) {
    this.calculateVertices(),
      t.batch.setObjectRenderer(t.plugins[this.pluginName]),
      t.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const t = this._texture.trim,
      e = this._texture.orig;
    !t || (t.width === e.width && t.height === e.height)
      ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
      : (this.calculateTrimmedVertices(),
        this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(t) {
    return this.children.length === 0
      ? (this._localBounds || (this._localBounds = new Ni()),
        (this._localBounds.minX = this._texture.orig.width * -this._anchor._x),
        (this._localBounds.minY = this._texture.orig.height * -this._anchor._y),
        (this._localBounds.maxX =
          this._texture.orig.width * (1 - this._anchor._x)),
        (this._localBounds.maxY =
          this._texture.orig.height * (1 - this._anchor._y)),
        t ||
          (this._localBoundsRect || (this._localBoundsRect = new H()),
          (t = this._localBoundsRect)),
        this._localBounds.getRectangle(t))
      : super.getLocalBounds.call(this, t);
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, ke);
    const e = this._texture.orig.width,
      i = this._texture.orig.height,
      r = -e * this.anchor.x;
    let n = 0;
    return (
      ke.x >= r &&
      ke.x < r + e &&
      ((n = -i * this.anchor.y), ke.y >= n && ke.y < n + i)
    );
  }
  destroy(t) {
    if (
      (super.destroy(t),
      this._texture.off("update", this._onTextureUpdate, this),
      (this._anchor = null),
      typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
    ) {
      const e = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
      this._texture.destroy(!!e);
    }
    this._texture = null;
  }
  static from(t, e) {
    const i = t instanceof P ? t : P.from(t, e);
    return new ua(i);
  }
  set roundPixels(t) {
    this._roundPixels !== t &&
      ((this._transformID = -1), (this._transformTrimmedID = -1)),
      (this._roundPixels = t);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const e = jt(this.scale.x) || 1;
    (this.scale.x = (e * t) / this._texture.orig.width), (this._width = t);
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const e = jt(this.scale.y) || 1;
    (this.scale.y = (e * t) / this._texture.orig.height), (this._height = t);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t),
      (this._tintRGB = this._tintColor.toLittleEndianNumber());
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t &&
      (this._texture &&
        this._texture.off("update", this._onTextureUpdate, this),
      (this._texture = t || P.EMPTY),
      (this._cachedTint = 16777215),
      (this._textureID = -1),
      (this._textureTrimmedID = -1),
      t &&
        (t.baseTexture.valid
          ? this._onTextureUpdate()
          : t.once("update", this._onTextureUpdate, this)));
  }
};
const pa = new K();
J.prototype._cacheAsBitmap = !1;
J.prototype._cacheData = null;
J.prototype._cacheAsBitmapResolution = null;
J.prototype._cacheAsBitmapMultisample = null;
class Oh {
  constructor() {
    (this.textureCacheId = null),
      (this.originalRender = null),
      (this.originalRenderCanvas = null),
      (this.originalCalculateBounds = null),
      (this.originalGetLocalBounds = null),
      (this.originalUpdateTransform = null),
      (this.originalDestroy = null),
      (this.originalMask = null),
      (this.originalFilterArea = null),
      (this.originalContainsPoint = null),
      (this.sprite = null);
  }
}
Object.defineProperties(J.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(s) {
      s !== this._cacheAsBitmapResolution &&
        ((this._cacheAsBitmapResolution = s),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(s) {
      s !== this._cacheAsBitmapMultisample &&
        ((this._cacheAsBitmapMultisample = s),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(s) {
      if (this._cacheAsBitmap === s) return;
      this._cacheAsBitmap = s;
      let t;
      s
        ? (this._cacheData || (this._cacheData = new Oh()),
          (t = this._cacheData),
          (t.originalRender = this.render),
          (t.originalRenderCanvas = this.renderCanvas),
          (t.originalUpdateTransform = this.updateTransform),
          (t.originalCalculateBounds = this.calculateBounds),
          (t.originalGetLocalBounds = this.getLocalBounds),
          (t.originalDestroy = this.destroy),
          (t.originalContainsPoint = this.containsPoint),
          (t.originalMask = this._mask),
          (t.originalFilterArea = this.filterArea),
          (this.render = this._renderCached),
          (this.renderCanvas = this._renderCachedCanvas),
          (this.destroy = this._cacheAsBitmapDestroy))
        : ((t = this._cacheData),
          t.sprite && this._destroyCachedDisplayObject(),
          (this.render = t.originalRender),
          (this.renderCanvas = t.originalRenderCanvas),
          (this.calculateBounds = t.originalCalculateBounds),
          (this.getLocalBounds = t.originalGetLocalBounds),
          (this.destroy = t.originalDestroy),
          (this.updateTransform = t.originalUpdateTransform),
          (this.containsPoint = t.originalContainsPoint),
          (this._mask = t.originalMask),
          (this.filterArea = t.originalFilterArea));
    },
  },
});
J.prototype._renderCached = function (s) {
  !this.visible ||
    this.worldAlpha <= 0 ||
    !this.renderable ||
    (this._initCachedDisplayObject(s),
    (this._cacheData.sprite.transform._worldID = this.transform._worldID),
    (this._cacheData.sprite.worldAlpha = this.worldAlpha),
    this._cacheData.sprite._render(s));
};
J.prototype._initCachedDisplayObject = function (s) {
  var u, p;
  if ((u = this._cacheData) != null && u.sprite) return;
  const t = this.alpha;
  (this.alpha = 1), s.batch.flush();
  const e = this.getLocalBounds(new H(), !0);
  if ((p = this.filters) != null && p.length) {
    const f = this.filters[0].padding;
    e.pad(f);
  }
  const i = this.cacheAsBitmapResolution || s.resolution;
  e.ceil(i),
    (e.width = Math.max(e.width, 1 / i)),
    (e.height = Math.max(e.height, 1 / i));
  const r = s.renderTexture.current,
    n = s.renderTexture.sourceFrame.clone(),
    a = s.renderTexture.destinationFrame.clone(),
    o = s.projection.transform,
    h = _e.create({
      width: e.width,
      height: e.height,
      resolution: i,
      multisample: this.cacheAsBitmapMultisample ?? s.multisample,
    }),
    l = `cacheAsBitmap_${fe()}`;
  (this._cacheData.textureCacheId = l),
    k.addToCache(h.baseTexture, l),
    P.addToCache(h, l);
  const d = this.transform.localTransform
    .copyTo(pa)
    .invert()
    .translate(-e.x, -e.y);
  (this.render = this._cacheData.originalRender),
    s.render(this, {
      renderTexture: h,
      clear: !0,
      transform: d,
      skipUpdateTransform: !1,
    }),
    s.framebuffer.blit(),
    (s.projection.transform = o),
    s.renderTexture.bind(r, n, a),
    (this.render = this._renderCached),
    (this.updateTransform = this.displayObjectUpdateTransform),
    (this.calculateBounds = this._calculateCachedBounds),
    (this.getLocalBounds = this._getCachedLocalBounds),
    (this._mask = null),
    (this.filterArea = null),
    (this.alpha = t);
  const c = new Yi(h);
  (c.transform.worldTransform = this.transform.worldTransform),
    (c.anchor.x = -(e.x / e.width)),
    (c.anchor.y = -(e.y / e.height)),
    (c.alpha = t),
    (c._bounds = this._bounds),
    (this._cacheData.sprite = c),
    (this.transform._parentID = -1),
    this.parent
      ? this.updateTransform()
      : (this.enableTempParent(),
        this.updateTransform(),
        this.disableTempParent(null)),
    (this.containsPoint = c.containsPoint.bind(c));
};
J.prototype._renderCachedCanvas = function (s) {
  !this.visible ||
    this.worldAlpha <= 0 ||
    !this.renderable ||
    (this._initCachedDisplayObjectCanvas(s),
    (this._cacheData.sprite.worldAlpha = this.worldAlpha),
    this._cacheData.sprite._renderCanvas(s));
};
J.prototype._initCachedDisplayObjectCanvas = function (s) {
  var d;
  if ((d = this._cacheData) != null && d.sprite) return;
  const t = this.getLocalBounds(new H(), !0),
    e = this.alpha;
  this.alpha = 1;
  const i = s.canvasContext.activeContext,
    r = s._projTransform,
    n = this.cacheAsBitmapResolution || s.resolution;
  t.ceil(n),
    (t.width = Math.max(t.width, 1 / n)),
    (t.height = Math.max(t.height, 1 / n));
  const a = _e.create({ width: t.width, height: t.height, resolution: n }),
    o = `cacheAsBitmap_${fe()}`;
  (this._cacheData.textureCacheId = o),
    k.addToCache(a.baseTexture, o),
    P.addToCache(a, o);
  const h = pa;
  this.transform.localTransform.copyTo(h),
    h.invert(),
    (h.tx -= t.x),
    (h.ty -= t.y),
    (this.renderCanvas = this._cacheData.originalRenderCanvas),
    s.render(this, {
      renderTexture: a,
      clear: !0,
      transform: h,
      skipUpdateTransform: !1,
    }),
    (s.canvasContext.activeContext = i),
    (s._projTransform = r),
    (this.renderCanvas = this._renderCachedCanvas),
    (this.updateTransform = this.displayObjectUpdateTransform),
    (this.calculateBounds = this._calculateCachedBounds),
    (this.getLocalBounds = this._getCachedLocalBounds),
    (this._mask = null),
    (this.filterArea = null),
    (this.alpha = e);
  const l = new Yi(a);
  (l.transform.worldTransform = this.transform.worldTransform),
    (l.anchor.x = -(t.x / t.width)),
    (l.anchor.y = -(t.y / t.height)),
    (l.alpha = e),
    (l._bounds = this._bounds),
    (this._cacheData.sprite = l),
    (this.transform._parentID = -1),
    this.parent
      ? this.updateTransform()
      : ((this.parent = s._tempDisplayObjectParent),
        this.updateTransform(),
        (this.parent = null)),
    (this.containsPoint = l.containsPoint.bind(l));
};
J.prototype._calculateCachedBounds = function () {
  this._bounds.clear(),
    (this._cacheData.sprite.transform._worldID = this.transform._worldID),
    this._cacheData.sprite._calculateBounds(),
    (this._bounds.updateID = this._boundsID);
};
J.prototype._getCachedLocalBounds = function () {
  return this._cacheData.sprite.getLocalBounds(null);
};
J.prototype._destroyCachedDisplayObject = function () {
  this._cacheData.sprite._texture.destroy(!0),
    (this._cacheData.sprite = null),
    k.removeFromCache(this._cacheData.textureCacheId),
    P.removeFromCache(this._cacheData.textureCacheId),
    (this._cacheData.textureCacheId = null);
};
J.prototype._cacheAsBitmapDestroy = function (s) {
  (this.cacheAsBitmap = !1), this.destroy(s);
};
J.prototype.name = null;
Tt.prototype.getChildByName = function (s, t) {
  for (let e = 0, i = this.children.length; e < i; e++)
    if (this.children[e].name === s) return this.children[e];
  if (t)
    for (let e = 0, i = this.children.length; e < i; e++) {
      const r = this.children[e];
      if (!r.getChildByName) continue;
      const n = r.getChildByName(s, !0);
      if (n) return n;
    }
  return null;
};
J.prototype.getGlobalPosition = function (s = new $(), t = !1) {
  return (
    this.parent
      ? this.parent.toGlobal(this.position, s, t)
      : ((s.x = this.position.x), (s.y = this.position.y)),
    s
  );
};
var Uh = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class vc extends ht {
  constructor(t = 1) {
    super(Ch, Uh, { uAlpha: 1 }), (this.alpha = t);
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const kh = {
    5: [0.153388, 0.221461, 0.250301],
    7: [0.071303, 0.131514, 0.189879, 0.214607],
    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
    11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
    15: [
      489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
      0.197448,
    ],
  },
  Gh = [
    "varying vec2 vBlurTexCoords[%size%];",
    "uniform sampler2D uSampler;",
    "void main(void)",
    "{",
    "    gl_FragColor = vec4(0.0);",
    "    %blur%",
    "}",
  ].join(`
`);
function Hh(s) {
  const t = kh[s],
    e = t.length;
  let i = Gh,
    r = "";
  const n =
    "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < s; o++) {
    let h = n.replace("%index%", o.toString());
    (a = o),
      o >= e && (a = s - o - 1),
      (h = h.replace("%value%", t[a].toString())),
      (r += h),
      (r += `
`);
  }
  return (
    (i = i.replace("%blur%", r)), (i = i.replace("%size%", s.toString())), i
  );
}
const Xh = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function Vh(s, t) {
  const e = Math.ceil(s / 2);
  let i = Xh,
    r = "",
    n;
  t
    ? (n =
        "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);")
    : (n =
        "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);");
  for (let a = 0; a < s; a++) {
    let o = n.replace("%index%", a.toString());
    (o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`)),
      (r += o),
      (r += `
`);
  }
  return (
    (i = i.replace("%blur%", r)), (i = i.replace("%size%", s.toString())), i
  );
}
class Wr extends ht {
  constructor(t, e = 8, i = 4, r = ht.defaultResolution, n = 5) {
    const a = Vh(n, t),
      o = Hh(n);
    super(a, o),
      (this.horizontal = t),
      (this.resolution = r),
      (this._quality = 0),
      (this.quality = i),
      (this.blur = e);
  }
  apply(t, e, i, r) {
    if (
      (i
        ? this.horizontal
          ? (this.uniforms.strength = (1 / i.width) * (i.width / e.width))
          : (this.uniforms.strength = (1 / i.height) * (i.height / e.height))
        : this.horizontal
        ? (this.uniforms.strength =
            (1 / t.renderer.width) * (t.renderer.width / e.width))
        : (this.uniforms.strength =
            (1 / t.renderer.height) * (t.renderer.height / e.height)),
      (this.uniforms.strength *= this.strength),
      (this.uniforms.strength /= this.passes),
      this.passes === 1)
    )
      t.applyFilter(this, e, i, r);
    else {
      const n = t.getFilterTexture(),
        a = t.renderer;
      let o = e,
        h = n;
      (this.state.blend = !1), t.applyFilter(this, o, h, Rt.CLEAR);
      for (let l = 1; l < this.passes - 1; l++) {
        t.bindAndClear(o, Rt.BLIT), (this.uniforms.uSampler = h);
        const d = h;
        (h = o), (o = d), a.shader.bind(this), a.geometry.draw(5);
      }
      (this.state.blend = !0),
        t.applyFilter(this, h, i, r),
        t.returnFilterTexture(n);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(t) {
    (this.padding = 1 + Math.abs(t) * 2), (this.strength = t);
  }
  get quality() {
    return this._quality;
  }
  set quality(t) {
    (this._quality = t), (this.passes = t);
  }
}
class bc extends ht {
  constructor(t = 8, e = 4, i = ht.defaultResolution, r = 5) {
    super(),
      (this._repeatEdgePixels = !1),
      (this.blurXFilter = new Wr(!0, t, e, i, r)),
      (this.blurYFilter = new Wr(!1, t, e, i, r)),
      (this.resolution = i),
      (this.quality = e),
      (this.blur = t),
      (this.repeatEdgePixels = !1);
  }
  apply(t, e, i, r) {
    const n = Math.abs(this.blurXFilter.strength),
      a = Math.abs(this.blurYFilter.strength);
    if (n && a) {
      const o = t.getFilterTexture();
      this.blurXFilter.apply(t, e, o, Rt.CLEAR),
        this.blurYFilter.apply(t, o, i, r),
        t.returnFilterTexture(o);
    } else
      a
        ? this.blurYFilter.apply(t, e, i, r)
        : this.blurXFilter.apply(t, e, i, r);
  }
  updatePadding() {
    this._repeatEdgePixels
      ? (this.padding = 0)
      : (this.padding =
          Math.max(
            Math.abs(this.blurXFilter.strength),
            Math.abs(this.blurYFilter.strength)
          ) * 2);
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    (this.blurXFilter.blur = this.blurYFilter.blur = t), this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    (this.blurXFilter.blur = t), this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    (this.blurYFilter.blur = t), this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    (this._repeatEdgePixels = t), this.updatePadding();
  }
}
var zh = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class $r extends ht {
  constructor() {
    const t = {
      m: new Float32Array([
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
      ]),
      uAlpha: 1,
    };
    super(ra, zh, t), (this.alpha = 1);
  }
  _loadMatrix(t, e = !1) {
    let i = t;
    e && (this._multiply(i, this.uniforms.m, t), (i = this._colorMatrix(i))),
      (this.uniforms.m = i);
  }
  _multiply(t, e, i) {
    return (
      (t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15]),
      (t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16]),
      (t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17]),
      (t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18]),
      (t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4]),
      (t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15]),
      (t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16]),
      (t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17]),
      (t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18]),
      (t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9]),
      (t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15]),
      (t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16]),
      (t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17]),
      (t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18]),
      (t[14] =
        e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14]),
      (t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15]),
      (t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16]),
      (t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17]),
      (t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18]),
      (t[19] =
        e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19]),
      t
    );
  }
  _colorMatrix(t) {
    const e = new Float32Array(t);
    return (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e;
  }
  brightness(t, e) {
    const i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(i, e);
  }
  tint(t, e) {
    const [i, r, n] = q.shared.setValue(t).toArray(),
      a = [i, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(a, e);
  }
  greyscale(t, e) {
    const i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(i, e);
  }
  blackAndWhite(t) {
    const e = [
      0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  hue(t, e) {
    t = ((t || 0) / 180) * Math.PI;
    const i = Math.cos(t),
      r = Math.sin(t),
      n = Math.sqrt,
      a = 1 / 3,
      o = n(a),
      h = i + (1 - i) * a,
      l = a * (1 - i) - o * r,
      d = a * (1 - i) + o * r,
      c = a * (1 - i) + o * r,
      u = i + a * (1 - i),
      p = a * (1 - i) - o * r,
      f = a * (1 - i) - o * r,
      m = a * (1 - i) + o * r,
      g = i + a * (1 - i),
      _ = [h, l, d, 0, 0, c, u, p, 0, 0, f, m, g, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(_, e);
  }
  contrast(t, e) {
    const i = (t || 0) + 1,
      r = -0.5 * (i - 1),
      n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
    this._loadMatrix(n, e);
  }
  saturate(t = 0, e) {
    const i = (t * 2) / 3 + 1,
      r = (i - 1) * -0.5,
      n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, e);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(t) {
    const e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  sepia(t) {
    const e = [
      0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0,
      0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(e, t);
  }
  technicolor(t) {
    const e = [
      1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
      11.793603434377337, -0.3087833385928097, 1.7658908555458428,
      -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
      -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  polaroid(t) {
    const e = [
      1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016,
      1.483, 0, 0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(e, t);
  }
  toBGR(t) {
    const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  kodachrome(t) {
    const e = [
      1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
      63.72958762196502, -0.16404339962244616, 1.0835251566291304,
      -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
      -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  browni(t) {
    const e = [
      0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
      47.43192855600873, -0.037703249837783157, 0.8609577587992641,
      0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
      -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0,
      1, 0,
    ];
    this._loadMatrix(e, t);
  }
  vintage(t) {
    const e = [
      0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
      9.651285835294123, 0.02578397704808868, 0.6441188644374771,
      0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
      -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  colorTone(t, e, i, r, n) {
    (t = t || 0.2), (e = e || 0.15), (i = i || 16770432), (r = r || 3375104);
    const a = q.shared,
      [o, h, l] = a.setValue(i).toArray(),
      [d, c, u] = a.setValue(r).toArray(),
      p = [
        0.3,
        0.59,
        0.11,
        0,
        0,
        o,
        h,
        l,
        t,
        0,
        d,
        c,
        u,
        e,
        0,
        o - d,
        h - c,
        l - u,
        0,
        0,
      ];
    this._loadMatrix(p, n);
  }
  night(t, e) {
    t = t || 0.1;
    const i = [
      t * -2,
      -t,
      0,
      0,
      0,
      -t,
      0,
      t,
      0,
      0,
      0,
      t,
      t * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(i, e);
  }
  predator(t, e) {
    const i = [
      11.224130630493164 * t,
      -4.794486999511719 * t,
      -2.8746118545532227 * t,
      0 * t,
      0.40342438220977783 * t,
      -3.6330697536468506 * t,
      9.193157196044922 * t,
      -2.951810836791992 * t,
      0 * t,
      -1.316135048866272 * t,
      -3.2184197902679443 * t,
      -4.2375030517578125 * t,
      7.476448059082031 * t,
      0 * t,
      0.8044459223747253 * t,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(i, e);
  }
  lsd(t) {
    const e = [
      2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  reset() {
    const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, !1);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
$r.prototype.grayscale = $r.prototype.greyscale;
var Wh = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
  $h = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class Tc extends ht {
  constructor(t, e) {
    const i = new K();
    (t.renderable = !1),
      super($h, Wh, {
        mapSampler: t._texture,
        filterMatrix: i,
        scale: { x: 1, y: 1 },
        rotation: new Float32Array([1, 0, 0, 1]),
      }),
      (this.maskSprite = t),
      (this.maskMatrix = i),
      e == null && (e = 20),
      (this.scale = new $(e, e));
  }
  apply(t, e, i, r) {
    (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
      this.maskMatrix,
      this.maskSprite
    )),
      (this.uniforms.scale.x = this.scale.x),
      (this.uniforms.scale.y = this.scale.y);
    const n = this.maskSprite.worldTransform,
      a = Math.sqrt(n.a * n.a + n.b * n.b),
      o = Math.sqrt(n.c * n.c + n.d * n.d);
    a !== 0 &&
      o !== 0 &&
      ((this.uniforms.rotation[0] = n.a / a),
      (this.uniforms.rotation[1] = n.b / a),
      (this.uniforms.rotation[2] = n.c / o),
      (this.uniforms.rotation[3] = n.d / o)),
      t.applyFilter(this, e, i, r);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var jh = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
  Yh = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class Ec extends ht {
  constructor() {
    super(Yh, jh);
  }
}
var qh = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class Ac extends ht {
  constructor(t = 0.5, e = Math.random()) {
    super(ra, qh, { uNoise: 0, uSeed: 0 }), (this.noise = t), (this.seed = e);
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
class Kh {
  constructor() {
    (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  init(t) {
    this.removeTickerListener(),
      (this.events = t),
      (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(t) {
    this._pauseUpdate = t;
  }
  addTickerListener() {
    this.tickerAdded ||
      !this.domElement ||
      (ct.system.add(this.tickerUpdate, this, me.INTERACTION),
      (this.tickerAdded = !0));
  }
  removeTickerListener() {
    this.tickerAdded &&
      (ct.system.remove(this.tickerUpdate, this), (this.tickerAdded = !1));
  }
  pointerMoved() {
    this._didMove = !0;
  }
  update() {
    if (!this.domElement || this._pauseUpdate) return;
    if (this._didMove) {
      this._didMove = !1;
      return;
    }
    const t = this.events.rootPointerEvent;
    (this.events.supportsTouchEvents && t.pointerType === "touch") ||
      globalThis.document.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX: t.clientX,
          clientY: t.clientY,
        })
      );
  }
  tickerUpdate(t) {
    (this._deltaTime += t),
      !(this._deltaTime < this.interactionFrequency) &&
        ((this._deltaTime = 0), this.update());
  }
}
const $t = new Kh();
class Ke {
  constructor(t) {
    (this.bubbles = !0),
      (this.cancelBubble = !0),
      (this.cancelable = !1),
      (this.composed = !1),
      (this.defaultPrevented = !1),
      (this.eventPhase = Ke.prototype.NONE),
      (this.propagationStopped = !1),
      (this.propagationImmediatelyStopped = !1),
      (this.layer = new $()),
      (this.page = new $()),
      (this.NONE = 0),
      (this.CAPTURING_PHASE = 1),
      (this.AT_TARGET = 2),
      (this.BUBBLING_PHASE = 3),
      (this.manager = t);
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return (
      this.manager &&
        (!this.path || this.path[this.path.length - 1] !== this.target) &&
        (this.path = this.target
          ? this.manager.propagationPath(this.target)
          : []),
      this.path
    );
  }
  initEvent(t, e, i) {
    throw new Error(
      "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  initUIEvent(t, e, i, r, n) {
    throw new Error(
      "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  preventDefault() {
    this.nativeEvent instanceof Event &&
      this.nativeEvent.cancelable &&
      this.nativeEvent.preventDefault(),
      (this.defaultPrevented = !0);
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Oi extends Ke {
  constructor() {
    super(...arguments),
      (this.client = new $()),
      (this.movement = new $()),
      (this.offset = new $()),
      (this.global = new $()),
      (this.screen = new $());
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(t, e, i) {
    return t.worldTransform.applyInverse(i || this.global, e);
  }
  getModifierState(t) {
    return (
      "getModifierState" in this.nativeEvent &&
      this.nativeEvent.getModifierState(t)
    );
  }
  initMouseEvent(t, e, i, r, n, a, o, h, l, d, c, u, p, f, m) {
    throw new Error("Method not implemented.");
  }
}
class xt extends Oi {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.height = 0),
      (this.isPrimary = !1);
  }
  getCoalescedEvents() {
    return this.type === "pointermove" ||
      this.type === "mousemove" ||
      this.type === "touchmove"
      ? [this]
      : [];
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class Pe extends Oi {
  constructor() {
    super(...arguments),
      (this.DOM_DELTA_PIXEL = 0),
      (this.DOM_DELTA_LINE = 1),
      (this.DOM_DELTA_PAGE = 2);
  }
}
(Pe.DOM_DELTA_PIXEL = 0), (Pe.DOM_DELTA_LINE = 1), (Pe.DOM_DELTA_PAGE = 2);
const Zh = 2048,
  Jh = new $(),
  fs = new $();
class Qh {
  constructor(t) {
    (this.dispatch = new qe()),
      (this.moveOnAll = !1),
      (this.enableGlobalMoveEvents = !0),
      (this.mappingState = { trackingData: {} }),
      (this.eventPool = new Map()),
      (this._allInteractiveElements = []),
      (this._hitElements = []),
      (this._isPointerMoveEvent = !1),
      (this.rootTarget = t),
      (this.hitPruneFn = this.hitPruneFn.bind(this)),
      (this.hitTestFn = this.hitTestFn.bind(this)),
      (this.mapPointerDown = this.mapPointerDown.bind(this)),
      (this.mapPointerMove = this.mapPointerMove.bind(this)),
      (this.mapPointerOut = this.mapPointerOut.bind(this)),
      (this.mapPointerOver = this.mapPointerOver.bind(this)),
      (this.mapPointerUp = this.mapPointerUp.bind(this)),
      (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
      (this.mapWheel = this.mapWheel.bind(this)),
      (this.mappingTable = {}),
      this.addEventMapping("pointerdown", this.mapPointerDown),
      this.addEventMapping("pointermove", this.mapPointerMove),
      this.addEventMapping("pointerout", this.mapPointerOut),
      this.addEventMapping("pointerleave", this.mapPointerOut),
      this.addEventMapping("pointerover", this.mapPointerOver),
      this.addEventMapping("pointerup", this.mapPointerUp),
      this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
      this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(t, e) {
    this.mappingTable[t] || (this.mappingTable[t] = []),
      this.mappingTable[t].push({ fn: e, priority: 0 }),
      this.mappingTable[t].sort((i, r) => i.priority - r.priority);
  }
  dispatchEvent(t, e) {
    (t.propagationStopped = !1),
      (t.propagationImmediatelyStopped = !1),
      this.propagate(t, e),
      this.dispatch.emit(e || t.type, t);
  }
  mapEvent(t) {
    if (!this.rootTarget) return;
    const e = this.mappingTable[t.type];
    if (e) for (let i = 0, r = e.length; i < r; i++) e[i].fn(t);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
  }
  hitTest(t, e) {
    $t.pauseUpdate = !0;
    const i =
        this._isPointerMoveEvent && this.enableGlobalMoveEvents
          ? "hitTestMoveRecursive"
          : "hitTestRecursive",
      r = this[i](
        this.rootTarget,
        this.rootTarget.eventMode,
        Jh.set(t, e),
        this.hitTestFn,
        this.hitPruneFn
      );
    return r && r[0];
  }
  propagate(t, e) {
    if (!t.target) return;
    const i = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let r = 0, n = i.length - 1; r < n; r++)
      if (
        ((t.currentTarget = i[r]),
        this.notifyTarget(t, e),
        t.propagationStopped || t.propagationImmediatelyStopped)
      )
        return;
    if (
      ((t.eventPhase = t.AT_TARGET),
      (t.currentTarget = t.target),
      this.notifyTarget(t, e),
      !(t.propagationStopped || t.propagationImmediatelyStopped))
    ) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let r = i.length - 2; r >= 0; r--)
        if (
          ((t.currentTarget = i[r]),
          this.notifyTarget(t, e),
          t.propagationStopped || t.propagationImmediatelyStopped)
        )
          return;
    }
  }
  all(t, e, i = this._allInteractiveElements) {
    if (i.length === 0) return;
    t.eventPhase = t.BUBBLING_PHASE;
    const r = Array.isArray(e) ? e : [e];
    for (let n = i.length - 1; n >= 0; n--)
      r.forEach((a) => {
        (t.currentTarget = i[n]), this.notifyTarget(t, a);
      });
  }
  propagationPath(t) {
    const e = [t];
    for (let i = 0; i < Zh && t !== this.rootTarget; i++) {
      if (!t.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      e.push(t.parent), (t = t.parent);
    }
    return e.reverse(), e;
  }
  hitTestMoveRecursive(t, e, i, r, n, a = !1) {
    let o = !1;
    if (this._interactivePrune(t)) return null;
    if (
      ((t.eventMode === "dynamic" || e === "dynamic") && ($t.pauseUpdate = !1),
      t.interactiveChildren && t.children)
    ) {
      const d = t.children;
      for (let c = d.length - 1; c >= 0; c--) {
        const u = d[c],
          p = this.hitTestMoveRecursive(
            u,
            this._isInteractive(e) ? e : u.eventMode,
            i,
            r,
            n,
            a || n(t, i)
          );
        if (p) {
          if (p.length > 0 && !p[p.length - 1].parent) continue;
          const f = t.isInteractive();
          (p.length > 0 || f) &&
            (f && this._allInteractiveElements.push(t), p.push(t)),
            this._hitElements.length === 0 && (this._hitElements = p),
            (o = !0);
        }
      }
    }
    const h = this._isInteractive(e),
      l = t.isInteractive();
    return (
      h && l && this._allInteractiveElements.push(t),
      a || this._hitElements.length > 0
        ? null
        : o
        ? this._hitElements
        : h && !n(t, i) && r(t, i)
        ? l
          ? [t]
          : []
        : null
    );
  }
  hitTestRecursive(t, e, i, r, n) {
    if (this._interactivePrune(t) || n(t, i)) return null;
    if (
      ((t.eventMode === "dynamic" || e === "dynamic") && ($t.pauseUpdate = !1),
      t.interactiveChildren && t.children)
    ) {
      const h = t.children;
      for (let l = h.length - 1; l >= 0; l--) {
        const d = h[l],
          c = this.hitTestRecursive(
            d,
            this._isInteractive(e) ? e : d.eventMode,
            i,
            r,
            n
          );
        if (c) {
          if (c.length > 0 && !c[c.length - 1].parent) continue;
          const u = t.isInteractive();
          return (c.length > 0 || u) && c.push(t), c;
        }
      }
    }
    const a = this._isInteractive(e),
      o = t.isInteractive();
    return a && r(t, i) ? (o ? [t] : []) : null;
  }
  _isInteractive(t) {
    return t === "static" || t === "dynamic";
  }
  _interactivePrune(t) {
    return !!(
      !t ||
      t.isMask ||
      !t.visible ||
      !t.renderable ||
      t.eventMode === "none" ||
      (t.eventMode === "passive" && !t.interactiveChildren) ||
      t.isMask
    );
  }
  hitPruneFn(t, e) {
    var i;
    if (
      t.hitArea &&
      (t.worldTransform.applyInverse(e, fs), !t.hitArea.contains(fs.x, fs.y))
    )
      return !0;
    if (t._mask) {
      const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (r && !((i = r.containsPoint) != null && i.call(r, e))) return !0;
    }
    return !1;
  }
  hitTestFn(t, e) {
    return t.eventMode === "passive"
      ? !1
      : t.hitArea
      ? !0
      : t.containsPoint
      ? t.containsPoint(e)
      : !1;
  }
  notifyTarget(t, e) {
    var n, a;
    e = e ?? t.type;
    const i = `on${e}`;
    (a = (n = t.currentTarget)[i]) == null || a.call(n, t);
    const r =
      t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET
        ? `${e}capture`
        : e;
    this.notifyListeners(t, r),
      t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e);
  }
  mapPointerDown(t) {
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.createPointerEvent(t);
    if ((this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch"))
      this.dispatchEvent(e, "touchstart");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const r = e.button === 2;
      this.dispatchEvent(e, r ? "rightdown" : "mousedown");
    }
    const i = this.trackingData(t.pointerId);
    (i.pressTargetsByButton[t.button] = e.composedPath()), this.freeEvent(e);
  }
  mapPointerMove(t) {
    var h, l;
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (this._isPointerMoveEvent = !0);
    const e = this.createPointerEvent(t);
    this._isPointerMoveEvent = !1;
    const i = e.pointerType === "mouse" || e.pointerType === "pen",
      r = this.trackingData(t.pointerId),
      n = this.findMountedTarget(r.overTargets);
    if (
      ((h = r.overTargets) == null ? void 0 : h.length) > 0 &&
      n !== e.target
    ) {
      const d = t.type === "mousemove" ? "mouseout" : "pointerout",
        c = this.createPointerEvent(t, d, n);
      if (
        (this.dispatchEvent(c, "pointerout"),
        i && this.dispatchEvent(c, "mouseout"),
        !e.composedPath().includes(n))
      ) {
        const u = this.createPointerEvent(t, "pointerleave", n);
        for (
          u.eventPhase = u.AT_TARGET;
          u.target && !e.composedPath().includes(u.target);

        )
          (u.currentTarget = u.target),
            this.notifyTarget(u),
            i && this.notifyTarget(u, "mouseleave"),
            (u.target = u.target.parent);
        this.freeEvent(u);
      }
      this.freeEvent(c);
    }
    if (n !== e.target) {
      const d = t.type === "mousemove" ? "mouseover" : "pointerover",
        c = this.clonePointerEvent(e, d);
      this.dispatchEvent(c, "pointerover"),
        i && this.dispatchEvent(c, "mouseover");
      let u = n == null ? void 0 : n.parent;
      for (; u && u !== this.rootTarget.parent && u !== e.target; )
        u = u.parent;
      if (!u || u === this.rootTarget.parent) {
        const p = this.clonePointerEvent(e, "pointerenter");
        for (
          p.eventPhase = p.AT_TARGET;
          p.target && p.target !== n && p.target !== this.rootTarget.parent;

        )
          (p.currentTarget = p.target),
            this.notifyTarget(p),
            i && this.notifyTarget(p, "mouseenter"),
            (p.target = p.target.parent);
        this.freeEvent(p);
      }
      this.freeEvent(c);
    }
    const a = [],
      o = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll
      ? a.push("pointermove")
      : this.dispatchEvent(e, "pointermove"),
      o && a.push("globalpointermove"),
      e.pointerType === "touch" &&
        (this.moveOnAll
          ? a.splice(1, 0, "touchmove")
          : this.dispatchEvent(e, "touchmove"),
        o && a.push("globaltouchmove")),
      i &&
        (this.moveOnAll
          ? a.splice(1, 0, "mousemove")
          : this.dispatchEvent(e, "mousemove"),
        o && a.push("globalmousemove"),
        (this.cursor = (l = e.target) == null ? void 0 : l.cursor)),
      a.length > 0 && this.all(e, a),
      (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (r.overTargets = e.composedPath()),
      this.freeEvent(e);
  }
  mapPointerOver(t) {
    var a;
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId),
      i = this.createPointerEvent(t),
      r = i.pointerType === "mouse" || i.pointerType === "pen";
    this.dispatchEvent(i, "pointerover"),
      r && this.dispatchEvent(i, "mouseover"),
      i.pointerType === "mouse" &&
        (this.cursor = (a = i.target) == null ? void 0 : a.cursor);
    const n = this.clonePointerEvent(i, "pointerenter");
    for (
      n.eventPhase = n.AT_TARGET;
      n.target && n.target !== this.rootTarget.parent;

    )
      (n.currentTarget = n.target),
        this.notifyTarget(n),
        r && this.notifyTarget(n, "mouseenter"),
        (n.target = n.target.parent);
    (e.overTargets = i.composedPath()), this.freeEvent(i), this.freeEvent(n);
  }
  mapPointerOut(t) {
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId);
    if (e.overTargets) {
      const i = t.pointerType === "mouse" || t.pointerType === "pen",
        r = this.findMountedTarget(e.overTargets),
        n = this.createPointerEvent(t, "pointerout", r);
      this.dispatchEvent(n), i && this.dispatchEvent(n, "mouseout");
      const a = this.createPointerEvent(t, "pointerleave", r);
      for (
        a.eventPhase = a.AT_TARGET;
        a.target && a.target !== this.rootTarget.parent;

      )
        (a.currentTarget = a.target),
          this.notifyTarget(a),
          i && this.notifyTarget(a, "mouseleave"),
          (a.target = a.target.parent);
      (e.overTargets = null), this.freeEvent(n), this.freeEvent(a);
    }
    this.cursor = null;
  }
  mapPointerUp(t) {
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = performance.now(),
      i = this.createPointerEvent(t);
    if ((this.dispatchEvent(i, "pointerup"), i.pointerType === "touch"))
      this.dispatchEvent(i, "touchend");
    else if (i.pointerType === "mouse" || i.pointerType === "pen") {
      const o = i.button === 2;
      this.dispatchEvent(i, o ? "rightup" : "mouseup");
    }
    const r = this.trackingData(t.pointerId),
      n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
    let a = n;
    if (n && !i.composedPath().includes(n)) {
      let o = n;
      for (; o && !i.composedPath().includes(o); ) {
        if (
          ((i.currentTarget = o),
          this.notifyTarget(i, "pointerupoutside"),
          i.pointerType === "touch")
        )
          this.notifyTarget(i, "touchendoutside");
        else if (i.pointerType === "mouse" || i.pointerType === "pen") {
          const h = i.button === 2;
          this.notifyTarget(i, h ? "rightupoutside" : "mouseupoutside");
        }
        o = o.parent;
      }
      delete r.pressTargetsByButton[t.button], (a = o);
    }
    if (a) {
      const o = this.clonePointerEvent(i, "click");
      (o.target = a),
        (o.path = null),
        r.clicksByButton[t.button] ||
          (r.clicksByButton[t.button] = {
            clickCount: 0,
            target: o.target,
            timeStamp: e,
          });
      const h = r.clicksByButton[t.button];
      if (
        (h.target === o.target && e - h.timeStamp < 200
          ? ++h.clickCount
          : (h.clickCount = 1),
        (h.target = o.target),
        (h.timeStamp = e),
        (o.detail = h.clickCount),
        o.pointerType === "mouse")
      ) {
        const l = o.button === 2;
        this.dispatchEvent(o, l ? "rightclick" : "click");
      } else o.pointerType === "touch" && this.dispatchEvent(o, "tap");
      this.dispatchEvent(o, "pointertap"), this.freeEvent(o);
    }
    this.freeEvent(i);
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof xt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId),
      i = this.findMountedTarget(e.pressTargetsByButton[t.button]),
      r = this.createPointerEvent(t);
    if (i) {
      let n = i;
      for (; n; )
        (r.currentTarget = n),
          this.notifyTarget(r, "pointerupoutside"),
          r.pointerType === "touch"
            ? this.notifyTarget(r, "touchendoutside")
            : (r.pointerType === "mouse" || r.pointerType === "pen") &&
              this.notifyTarget(
                r,
                r.button === 2 ? "rightupoutside" : "mouseupoutside"
              ),
          (n = n.parent);
      delete e.pressTargetsByButton[t.button];
    }
    this.freeEvent(r);
  }
  mapWheel(t) {
    if (!(t instanceof Pe)) {
      console.warn(
        "EventBoundary cannot map a non-wheel event as a wheel event"
      );
      return;
    }
    const e = this.createWheelEvent(t);
    this.dispatchEvent(e), this.freeEvent(e);
  }
  findMountedTarget(t) {
    if (!t) return null;
    let e = t[0];
    for (let i = 1; i < t.length && t[i].parent === e; i++) e = t[i];
    return e;
  }
  createPointerEvent(t, e, i) {
    const r = this.allocateEvent(xt);
    return (
      this.copyPointerData(t, r),
      this.copyMouseData(t, r),
      this.copyData(t, r),
      (r.nativeEvent = t.nativeEvent),
      (r.originalEvent = t),
      (r.target =
        i ?? this.hitTest(r.global.x, r.global.y) ?? this._hitElements[0]),
      typeof e == "string" && (r.type = e),
      r
    );
  }
  createWheelEvent(t) {
    const e = this.allocateEvent(Pe);
    return (
      this.copyWheelData(t, e),
      this.copyMouseData(t, e),
      this.copyData(t, e),
      (e.nativeEvent = t.nativeEvent),
      (e.originalEvent = t),
      (e.target = this.hitTest(e.global.x, e.global.y)),
      e
    );
  }
  clonePointerEvent(t, e) {
    const i = this.allocateEvent(xt);
    return (
      (i.nativeEvent = t.nativeEvent),
      (i.originalEvent = t.originalEvent),
      this.copyPointerData(t, i),
      this.copyMouseData(t, i),
      this.copyData(t, i),
      (i.target = t.target),
      (i.path = t.composedPath().slice()),
      (i.type = e ?? i.type),
      i
    );
  }
  copyWheelData(t, e) {
    (e.deltaMode = t.deltaMode),
      (e.deltaX = t.deltaX),
      (e.deltaY = t.deltaY),
      (e.deltaZ = t.deltaZ);
  }
  copyPointerData(t, e) {
    t instanceof xt &&
      e instanceof xt &&
      ((e.pointerId = t.pointerId),
      (e.width = t.width),
      (e.height = t.height),
      (e.isPrimary = t.isPrimary),
      (e.pointerType = t.pointerType),
      (e.pressure = t.pressure),
      (e.tangentialPressure = t.tangentialPressure),
      (e.tiltX = t.tiltX),
      (e.tiltY = t.tiltY),
      (e.twist = t.twist));
  }
  copyMouseData(t, e) {
    t instanceof Oi &&
      e instanceof Oi &&
      ((e.altKey = t.altKey),
      (e.button = t.button),
      (e.buttons = t.buttons),
      e.client.copyFrom(t.client),
      (e.ctrlKey = t.ctrlKey),
      (e.metaKey = t.metaKey),
      e.movement.copyFrom(t.movement),
      e.screen.copyFrom(t.screen),
      (e.shiftKey = t.shiftKey),
      e.global.copyFrom(t.global));
  }
  copyData(t, e) {
    (e.isTrusted = t.isTrusted),
      (e.srcElement = t.srcElement),
      (e.timeStamp = performance.now()),
      (e.type = t.type),
      (e.detail = t.detail),
      (e.view = t.view),
      (e.which = t.which),
      e.layer.copyFrom(t.layer),
      e.page.copyFrom(t.page);
  }
  trackingData(t) {
    return (
      this.mappingState.trackingData[t] ||
        (this.mappingState.trackingData[t] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null,
        }),
      this.mappingState.trackingData[t]
    );
  }
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const e = this.eventPool.get(t).pop() || new t(this);
    return (
      (e.eventPhase = e.NONE),
      (e.currentTarget = null),
      (e.path = null),
      (e.target = null),
      e
    );
  }
  freeEvent(t) {
    if (t.manager !== this)
      throw new Error(
        "It is illegal to free an event not managed by this EventBoundary!"
      );
    const e = t.constructor;
    this.eventPool.has(e) || this.eventPool.set(e, []),
      this.eventPool.get(e).push(t);
  }
  notifyListeners(t, e) {
    const i = t.currentTarget._events[e];
    if (i && t.currentTarget.isInteractive())
      if ("fn" in i)
        i.once && t.currentTarget.removeListener(e, i.fn, void 0, !0),
          i.fn.call(i.context, t);
      else
        for (
          let r = 0, n = i.length;
          r < n && !t.propagationImmediatelyStopped;
          r++
        )
          i[r].once && t.currentTarget.removeListener(e, i[r].fn, void 0, !0),
            i[r].fn.call(i[r].context, t);
  }
}
const tl = 1,
  el = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel",
  },
  $s = class js {
    constructor(t) {
      (this.supportsTouchEvents = "ontouchstart" in globalThis),
        (this.supportsPointerEvents = !!globalThis.PointerEvent),
        (this.domElement = null),
        (this.resolution = 1),
        (this.renderer = t),
        (this.rootBoundary = new Qh(null)),
        $t.init(this),
        (this.autoPreventDefault = !0),
        (this.eventsAdded = !1),
        (this.rootPointerEvent = new xt(null)),
        (this.rootWheelEvent = new Pe(null)),
        (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
        (this.features = new Proxy(
          { ...js.defaultEventFeatures },
          {
            set: (e, i, r) => (
              i === "globalMove" &&
                (this.rootBoundary.enableGlobalMoveEvents = r),
              (e[i] = r),
              !0
            ),
          }
        )),
        (this.onPointerDown = this.onPointerDown.bind(this)),
        (this.onPointerMove = this.onPointerMove.bind(this)),
        (this.onPointerUp = this.onPointerUp.bind(this)),
        (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
        (this.onWheel = this.onWheel.bind(this));
    }
    static get defaultEventMode() {
      return this._defaultEventMode;
    }
    init(t) {
      const { view: e, resolution: i } = this.renderer;
      this.setTargetElement(e),
        (this.resolution = i),
        (js._defaultEventMode = t.eventMode ?? "auto"),
        Object.assign(this.features, t.eventFeatures ?? {}),
        (this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove);
    }
    resolutionChange(t) {
      this.resolution = t;
    }
    destroy() {
      this.setTargetElement(null), (this.renderer = null);
    }
    setCursor(t) {
      t = t || "default";
      let e = !0;
      if (
        (globalThis.OffscreenCanvas &&
          this.domElement instanceof OffscreenCanvas &&
          (e = !1),
        this.currentCursor === t)
      )
        return;
      this.currentCursor = t;
      const i = this.cursorStyles[t];
      if (i)
        switch (typeof i) {
          case "string":
            e && (this.domElement.style.cursor = i);
            break;
          case "function":
            i(t);
            break;
          case "object":
            e && Object.assign(this.domElement.style, i);
            break;
        }
      else
        e &&
          typeof t == "string" &&
          !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) &&
          (this.domElement.style.cursor = t);
    }
    get pointer() {
      return this.rootPointerEvent;
    }
    onPointerDown(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this.normalizeToPointerData(t);
      this.autoPreventDefault &&
        e[0].isNormalized &&
        (t.cancelable || !("cancelable" in t)) &&
        t.preventDefault();
      for (let i = 0, r = e.length; i < r; i++) {
        const n = e[i],
          a = this.bootstrapEvent(this.rootPointerEvent, n);
        this.rootBoundary.mapEvent(a);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerMove(t) {
      if (!this.features.move) return;
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        $t.pointerMoved();
      const e = this.normalizeToPointerData(t);
      for (let i = 0, r = e.length; i < r; i++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, e[i]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerUp(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let e = t.target;
      t.composedPath &&
        t.composedPath().length > 0 &&
        (e = t.composedPath()[0]);
      const i = e !== this.domElement ? "outside" : "",
        r = this.normalizeToPointerData(t);
      for (let n = 0, a = r.length; n < a; n++) {
        const o = this.bootstrapEvent(this.rootPointerEvent, r[n]);
        (o.type += i), this.rootBoundary.mapEvent(o);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerOverOut(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this.normalizeToPointerData(t);
      for (let i = 0, r = e.length; i < r; i++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, e[i]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onWheel(t) {
      if (!this.features.wheel) return;
      const e = this.normalizeWheelEvent(t);
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.rootBoundary.mapEvent(e);
    }
    setTargetElement(t) {
      this.removeEvents(),
        (this.domElement = t),
        ($t.domElement = t),
        this.addEvents();
    }
    addEvents() {
      if (this.eventsAdded || !this.domElement) return;
      $t.addTickerListener();
      const t = this.domElement.style;
      t &&
        (globalThis.navigator.msPointerEnabled
          ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
          : this.supportsPointerEvents && (t.touchAction = "none")),
        this.supportsPointerEvents
          ? (globalThis.document.addEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.addEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.addEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.addEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.addEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.addEventListener("wheel", this.onWheel, {
          passive: !0,
          capture: !0,
        }),
        (this.eventsAdded = !0);
    }
    removeEvents() {
      if (!this.eventsAdded || !this.domElement) return;
      $t.removeTickerListener();
      const t = this.domElement.style;
      globalThis.navigator.msPointerEnabled
        ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
        : this.supportsPointerEvents && (t.touchAction = ""),
        this.supportsPointerEvents
          ? (globalThis.document.removeEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.removeEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.removeEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.removeEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.removeEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.removeEventListener("wheel", this.onWheel, !0),
        (this.domElement = null),
        (this.eventsAdded = !1);
    }
    mapPositionToPoint(t, e, i) {
      const r = this.domElement.isConnected
          ? this.domElement.getBoundingClientRect()
          : {
              x: 0,
              y: 0,
              width: this.domElement.width,
              height: this.domElement.height,
              left: 0,
              top: 0,
            },
        n = 1 / this.resolution;
      (t.x = (e - r.left) * (this.domElement.width / r.width) * n),
        (t.y = (i - r.top) * (this.domElement.height / r.height) * n);
    }
    normalizeToPointerData(t) {
      const e = [];
      if (this.supportsTouchEvents && t instanceof TouchEvent)
        for (let i = 0, r = t.changedTouches.length; i < r; i++) {
          const n = t.changedTouches[i];
          typeof n.button > "u" && (n.button = 0),
            typeof n.buttons > "u" && (n.buttons = 1),
            typeof n.isPrimary > "u" &&
              (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"),
            typeof n.width > "u" && (n.width = n.radiusX || 1),
            typeof n.height > "u" && (n.height = n.radiusY || 1),
            typeof n.tiltX > "u" && (n.tiltX = 0),
            typeof n.tiltY > "u" && (n.tiltY = 0),
            typeof n.pointerType > "u" && (n.pointerType = "touch"),
            typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0),
            typeof n.pressure > "u" && (n.pressure = n.force || 0.5),
            typeof n.twist > "u" && (n.twist = 0),
            typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0),
            typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX),
            typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY),
            (n.isNormalized = !0),
            (n.type = t.type),
            e.push(n);
        }
      else if (
        !globalThis.MouseEvent ||
        (t instanceof MouseEvent &&
          (!this.supportsPointerEvents ||
            !(t instanceof globalThis.PointerEvent)))
      ) {
        const i = t;
        typeof i.isPrimary > "u" && (i.isPrimary = !0),
          typeof i.width > "u" && (i.width = 1),
          typeof i.height > "u" && (i.height = 1),
          typeof i.tiltX > "u" && (i.tiltX = 0),
          typeof i.tiltY > "u" && (i.tiltY = 0),
          typeof i.pointerType > "u" && (i.pointerType = "mouse"),
          typeof i.pointerId > "u" && (i.pointerId = tl),
          typeof i.pressure > "u" && (i.pressure = 0.5),
          typeof i.twist > "u" && (i.twist = 0),
          typeof i.tangentialPressure > "u" && (i.tangentialPressure = 0),
          (i.isNormalized = !0),
          e.push(i);
      } else e.push(t);
      return e;
    }
    normalizeWheelEvent(t) {
      const e = this.rootWheelEvent;
      return (
        this.transferMouseData(e, t),
        (e.deltaX = t.deltaX),
        (e.deltaY = t.deltaY),
        (e.deltaZ = t.deltaZ),
        (e.deltaMode = t.deltaMode),
        this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
        e.global.copyFrom(e.screen),
        e.offset.copyFrom(e.screen),
        (e.nativeEvent = t),
        (e.type = t.type),
        e
      );
    }
    bootstrapEvent(t, e) {
      return (
        (t.originalEvent = null),
        (t.nativeEvent = e),
        (t.pointerId = e.pointerId),
        (t.width = e.width),
        (t.height = e.height),
        (t.isPrimary = e.isPrimary),
        (t.pointerType = e.pointerType),
        (t.pressure = e.pressure),
        (t.tangentialPressure = e.tangentialPressure),
        (t.tiltX = e.tiltX),
        (t.tiltY = e.tiltY),
        (t.twist = e.twist),
        this.transferMouseData(t, e),
        this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
        t.global.copyFrom(t.screen),
        t.offset.copyFrom(t.screen),
        (t.isTrusted = e.isTrusted),
        t.type === "pointerleave" && (t.type = "pointerout"),
        t.type.startsWith("mouse") &&
          (t.type = t.type.replace("mouse", "pointer")),
        t.type.startsWith("touch") && (t.type = el[t.type] || t.type),
        t
      );
    }
    transferMouseData(t, e) {
      (t.isTrusted = e.isTrusted),
        (t.srcElement = e.srcElement),
        (t.timeStamp = performance.now()),
        (t.type = e.type),
        (t.altKey = e.altKey),
        (t.button = e.button),
        (t.buttons = e.buttons),
        (t.client.x = e.clientX),
        (t.client.y = e.clientY),
        (t.ctrlKey = e.ctrlKey),
        (t.metaKey = e.metaKey),
        (t.movement.x = e.movementX),
        (t.movement.y = e.movementY),
        (t.page.x = e.pageX),
        (t.page.y = e.pageY),
        (t.relatedTarget = null),
        (t.shiftKey = e.shiftKey);
    }
  };
($s.extension = {
  name: "events",
  type: [A.RendererSystem, A.CanvasRendererSystem],
}),
  ($s.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0,
  });
let Ys = $s;
M.add(Ys);
function jr(s) {
  return s === "dynamic" || s === "static";
}
const il = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  _internalInteractive: void 0,
  get interactive() {
    return this._internalInteractive ?? jr(Ys.defaultEventMode);
  },
  set interactive(s) {
    z(
      "7.2.0",
      "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
    ),
      (this._internalInteractive = s),
      (this.eventMode = s ? "static" : "auto");
  },
  _internalEventMode: void 0,
  get eventMode() {
    return this._internalEventMode ?? Ys.defaultEventMode;
  },
  set eventMode(s) {
    (this._internalInteractive = jr(s)), (this._internalEventMode = s);
  },
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  interactiveChildren: !0,
  hitArea: null,
  addEventListener(s, t, e) {
    const i =
        (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
      r = typeof e == "object" ? e.signal : void 0,
      n = typeof e == "object" ? e.once === !0 : !1,
      a = typeof t == "function" ? void 0 : t;
    s = i ? `${s}capture` : s;
    const o = typeof t == "function" ? t : t.handleEvent,
      h = this;
    r &&
      r.addEventListener("abort", () => {
        h.off(s, o, a);
      }),
      n ? h.once(s, o, a) : h.on(s, o, a);
  },
  removeEventListener(s, t, e) {
    const i =
        (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
      r = typeof t == "function" ? void 0 : t;
    (s = i ? `${s}capture` : s),
      (t = typeof t == "function" ? t : t.handleEvent),
      this.off(s, t, r);
  },
  dispatchEvent(s) {
    if (!(s instanceof Ke))
      throw new Error(
        "DisplayObject cannot propagate events outside of the Federated Events API"
      );
    return (
      (s.defaultPrevented = !1),
      (s.path = null),
      (s.target = this),
      s.manager.dispatchEvent(s),
      !s.defaultPrevented
    );
  },
};
J.mixin(il);
const sl = {
  accessible: !1,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: !1,
  _accessibleDiv: null,
  accessibleType: "button",
  accessiblePointerEvents: "auto",
  accessibleChildren: !0,
  renderId: -1,
};
J.mixin(sl);
const rl = 9,
  ci = 100,
  nl = 0,
  al = 0,
  Yr = 2,
  qr = 1,
  ol = -1e3,
  hl = -1e3,
  ll = 2;
class fa {
  constructor(t) {
    (this.debug = !1),
      (this._isActive = !1),
      (this._isMobileAccessibility = !1),
      (this.pool = []),
      (this.renderId = 0),
      (this.children = []),
      (this.androidUpdateCount = 0),
      (this.androidUpdateFrequency = 500),
      (this._hookDiv = null),
      (Ot.tablet || Ot.phone) && this.createTouchHook();
    const e = document.createElement("div");
    (e.style.width = `${ci}px`),
      (e.style.height = `${ci}px`),
      (e.style.position = "absolute"),
      (e.style.top = `${nl}px`),
      (e.style.left = `${al}px`),
      (e.style.zIndex = Yr.toString()),
      (this.div = e),
      (this.renderer = t),
      (this._onKeyDown = this._onKeyDown.bind(this)),
      (this._onMouseMove = this._onMouseMove.bind(this)),
      globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const t = document.createElement("button");
    (t.style.width = `${qr}px`),
      (t.style.height = `${qr}px`),
      (t.style.position = "absolute"),
      (t.style.top = `${ol}px`),
      (t.style.left = `${hl}px`),
      (t.style.zIndex = ll.toString()),
      (t.style.backgroundColor = "#FF0000"),
      (t.title = "select to enable accessibility for this content"),
      t.addEventListener("focus", () => {
        (this._isMobileAccessibility = !0),
          this.activate(),
          this.destroyTouchHook();
      }),
      document.body.appendChild(t),
      (this._hookDiv = t);
  }
  destroyTouchHook() {
    this._hookDiv &&
      (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
  }
  activate() {
    var t;
    this._isActive ||
      ((this._isActive = !0),
      globalThis.document.addEventListener("mousemove", this._onMouseMove, !0),
      globalThis.removeEventListener("keydown", this._onKeyDown, !1),
      this.renderer.on("postrender", this.update, this),
      (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
  }
  deactivate() {
    var t;
    !this._isActive ||
      this._isMobileAccessibility ||
      ((this._isActive = !1),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.addEventListener("keydown", this._onKeyDown, !1),
      this.renderer.off("postrender", this.update),
      (t = this.div.parentNode) == null || t.removeChild(this.div));
  }
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren) return;
    t.accessible &&
      t.isInteractive() &&
      (t._accessibleActive || this.addChild(t), (t.renderId = this.renderId));
    const e = t.children;
    if (e)
      for (let i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i]);
  }
  update() {
    const t = performance.now();
    if (
      (Ot.android.device && t < this.androidUpdateCount) ||
      ((this.androidUpdateCount = t + this.androidUpdateFrequency),
      !this.renderer.renderingToScreen)
    )
      return;
    this.renderer.lastObjectRendered &&
      this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const {
        x: e,
        y: i,
        width: r,
        height: n,
      } = this.renderer.view.getBoundingClientRect(),
      { width: a, height: o, resolution: h } = this.renderer,
      l = (r / a) * h,
      d = (n / o) * h;
    let c = this.div;
    (c.style.left = `${e}px`),
      (c.style.top = `${i}px`),
      (c.style.width = `${a}px`),
      (c.style.height = `${o}px`);
    for (let u = 0; u < this.children.length; u++) {
      const p = this.children[u];
      if (p.renderId !== this.renderId)
        (p._accessibleActive = !1),
          Ie(this.children, u, 1),
          this.div.removeChild(p._accessibleDiv),
          this.pool.push(p._accessibleDiv),
          (p._accessibleDiv = null),
          u--;
      else {
        c = p._accessibleDiv;
        let f = p.hitArea;
        const m = p.worldTransform;
        p.hitArea
          ? ((c.style.left = `${(m.tx + f.x * m.a) * l}px`),
            (c.style.top = `${(m.ty + f.y * m.d) * d}px`),
            (c.style.width = `${f.width * m.a * l}px`),
            (c.style.height = `${f.height * m.d * d}px`))
          : ((f = p.getBounds()),
            this.capHitArea(f),
            (c.style.left = `${f.x * l}px`),
            (c.style.top = `${f.y * d}px`),
            (c.style.width = `${f.width * l}px`),
            (c.style.height = `${f.height * d}px`),
            c.title !== p.accessibleTitle &&
              p.accessibleTitle !== null &&
              (c.title = p.accessibleTitle),
            c.getAttribute("aria-label") !== p.accessibleHint &&
              p.accessibleHint !== null &&
              c.setAttribute("aria-label", p.accessibleHint)),
          (p.accessibleTitle !== c.title || p.tabIndex !== c.tabIndex) &&
            ((c.title = p.accessibleTitle),
            (c.tabIndex = p.tabIndex),
            this.debug && this.updateDebugHTML(c));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  capHitArea(t) {
    t.x < 0 && ((t.width += t.x), (t.x = 0)),
      t.y < 0 && ((t.height += t.y), (t.y = 0));
    const { width: e, height: i } = this.renderer;
    t.x + t.width > e && (t.width = e - t.x),
      t.y + t.height > i && (t.height = i - t.y);
  }
  addChild(t) {
    let e = this.pool.pop();
    e ||
      ((e = document.createElement("button")),
      (e.style.width = `${ci}px`),
      (e.style.height = `${ci}px`),
      (e.style.backgroundColor = this.debug
        ? "rgba(255,255,255,0.5)"
        : "transparent"),
      (e.style.position = "absolute"),
      (e.style.zIndex = Yr.toString()),
      (e.style.borderStyle = "none"),
      navigator.userAgent.toLowerCase().includes("chrome")
        ? e.setAttribute("aria-live", "off")
        : e.setAttribute("aria-live", "polite"),
      navigator.userAgent.match(/rv:.*Gecko\//)
        ? e.setAttribute("aria-relevant", "additions")
        : e.setAttribute("aria-relevant", "text"),
      e.addEventListener("click", this._onClick.bind(this)),
      e.addEventListener("focus", this._onFocus.bind(this)),
      e.addEventListener("focusout", this._onFocusOut.bind(this))),
      (e.style.pointerEvents = t.accessiblePointerEvents),
      (e.type = t.accessibleType),
      t.accessibleTitle && t.accessibleTitle !== null
        ? (e.title = t.accessibleTitle)
        : (!t.accessibleHint || t.accessibleHint === null) &&
          (e.title = `displayObject ${t.tabIndex}`),
      t.accessibleHint &&
        t.accessibleHint !== null &&
        e.setAttribute("aria-label", t.accessibleHint),
      this.debug && this.updateDebugHTML(e),
      (t._accessibleActive = !0),
      (t._accessibleDiv = e),
      (e.displayObject = t),
      this.children.push(t),
      this.div.appendChild(t._accessibleDiv),
      (t._accessibleDiv.tabIndex = t.tabIndex);
  }
  _dispatchEvent(t, e) {
    const { displayObject: i } = t.target,
      r = this.renderer.events.rootBoundary,
      n = Object.assign(new Ke(r), { target: i });
    (r.rootTarget = this.renderer.lastObjectRendered),
      e.forEach((a) => r.dispatchEvent(n, a));
  }
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  _onFocus(t) {
    t.target.getAttribute("aria-live") ||
      t.target.setAttribute("aria-live", "assertive"),
      this._dispatchEvent(t, ["mouseover"]);
  }
  _onFocusOut(t) {
    t.target.getAttribute("aria-live") ||
      t.target.setAttribute("aria-live", "polite"),
      this._dispatchEvent(t, ["mouseout"]);
  }
  _onKeyDown(t) {
    t.keyCode === rl && this.activate();
  }
  _onMouseMove(t) {
    (t.movementX === 0 && t.movementY === 0) || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(),
      (this.div = null),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.removeEventListener("keydown", this._onKeyDown),
      (this.pool = null),
      (this.children = null),
      (this.renderer = null);
  }
}
fa.extension = {
  name: "accessibility",
  type: [A.RendererPlugin, A.CanvasRendererPlugin],
};
M.add(fa);
const ma = class qs {
  constructor(t) {
    (this.stage = new Tt()),
      (t = Object.assign({ forceCanvas: !1 }, t)),
      (this.renderer = Ah(t)),
      qs._plugins.forEach((e) => {
        e.init.call(this, t);
      });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.view;
  }
  get screen() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.screen;
  }
  destroy(t, e) {
    const i = qs._plugins.slice(0);
    i.reverse(),
      i.forEach((r) => {
        r.destroy.call(this);
      }),
      this.stage.destroy(e),
      (this.stage = null),
      this.renderer.destroy(t),
      (this.renderer = null);
  }
};
ma._plugins = [];
let dl = ma;
M.handleByList(A.Application, dl._plugins);
class ga {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(e) {
        globalThis.removeEventListener("resize", this.queueResize),
          (this._resizeTo = e),
          e &&
            (globalThis.addEventListener("resize", this.queueResize),
            this.resize());
      },
      get() {
        return this._resizeTo;
      },
    }),
      (this.queueResize = () => {
        this._resizeTo &&
          (this.cancelResize(),
          (this._resizeId = requestAnimationFrame(() => this.resize())));
      }),
      (this.cancelResize = () => {
        this._resizeId &&
          (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
      }),
      (this.resize = () => {
        if (!this._resizeTo) return;
        this.cancelResize();
        let e, i;
        if (this._resizeTo === globalThis.window)
          (e = globalThis.innerWidth), (i = globalThis.innerHeight);
        else {
          const { clientWidth: r, clientHeight: n } = this._resizeTo;
          (e = r), (i = n);
        }
        this.renderer.resize(e, i), this.render();
      }),
      (this._resizeId = null),
      (this._resizeTo = null),
      (this.resizeTo = t.resizeTo || null);
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize),
      this.cancelResize(),
      (this.cancelResize = null),
      (this.queueResize = null),
      (this.resizeTo = null),
      (this.resize = null);
  }
}
ga.extension = A.Application;
M.add(ga);
const Kr = {
  loader: A.LoadParser,
  resolver: A.ResolveParser,
  cache: A.CacheParser,
  detection: A.DetectionParser,
};
M.handle(
  A.Asset,
  (s) => {
    const t = s.ref;
    Object.entries(Kr)
      .filter(([e]) => !!t[e])
      .forEach(([e, i]) =>
        M.add(Object.assign(t[e], { extension: t[e].extension ?? i }))
      );
  },
  (s) => {
    const t = s.ref;
    Object.keys(Kr)
      .filter((e) => !!t[e])
      .forEach((e) => M.remove(t[e]));
  }
);
class cl {
  constructor(t, e = !1) {
    (this._loader = t),
      (this._assetList = []),
      (this._isLoading = !1),
      (this._maxConcurrent = 1),
      (this.verbose = e);
  }
  add(t) {
    t.forEach((e) => {
      this._assetList.push(e);
    }),
      this.verbose &&
        console.log("[BackgroundLoader] assets: ", this._assetList),
      this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [],
        e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < e; i++) t.push(this._assetList.pop());
      await this._loader.load(t), (this._isLoading = !1), this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t &&
      ((this._isActive = t), t && !this._isLoading && this._next());
  }
}
function Fe(s, t) {
  if (Array.isArray(t)) {
    for (const e of t) if (s.startsWith(`data:${e}`)) return !0;
    return !1;
  }
  return s.startsWith(`data:${t}`);
}
function Jt(s, t) {
  const e = s.split("?")[0],
    i = nt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const yt = (s, t, e = !1) => (
    Array.isArray(s) || (s = [s]),
    t ? s.map((i) => (typeof i == "string" || e ? t(i) : i)) : s
  ),
  Ks = (s, t) => {
    const e = t.split("?")[1];
    return e && (s += `?${e}`), s;
  };
function _a(s, t, e, i, r) {
  const n = t[e];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    e < t.length - 1
      ? _a(s.replace(i[e], o), t, e + 1, i, r)
      : r.push(s.replace(i[e], o));
  }
}
function ul(s) {
  const t = /\{(.*?)\}/g,
    e = s.match(t),
    i = [];
  if (e) {
    const r = [];
    e.forEach((n) => {
      const a = n.substring(1, n.length - 1).split(",");
      r.push(a);
    }),
      _a(s, r, 0, e, i);
  } else i.push(s);
  return i;
}
const Ui = (s) => !Array.isArray(s);
class pl {
  constructor() {
    (this._parsers = []),
      (this._cache = new Map()),
      (this._cacheMap = new Map());
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const e = this._cache.get(t);
    return (
      e || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), e
    );
  }
  set(t, e) {
    const i = yt(t);
    let r;
    for (let o = 0; o < this.parsers.length; o++) {
      const h = this.parsers[o];
      if (h.test(e)) {
        r = h.getCacheableAssets(i, e);
        break;
      }
    }
    r ||
      ((r = {}),
      i.forEach((o) => {
        r[o] = e;
      }));
    const n = Object.keys(r),
      a = { cacheKeys: n, keys: i };
    if (
      (i.forEach((o) => {
        this._cacheMap.set(o, a);
      }),
      n.forEach((o) => {
        this._cache.has(o) &&
          this._cache.get(o) !== e &&
          console.warn("[Cache] already has key:", o),
          this._cache.set(o, r[o]);
      }),
      e instanceof P)
    ) {
      const o = e;
      i.forEach((h) => {
        o.baseTexture !== P.EMPTY.baseTexture && k.addToCache(o.baseTexture, h),
          P.addToCache(o, h);
      });
    }
  }
  remove(t) {
    if (!this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((i) => {
      this._cache.delete(i);
    }),
      e.keys.forEach((i) => {
        this._cacheMap.delete(i);
      });
  }
  get parsers() {
    return this._parsers;
  }
}
const ce = new pl();
class fl {
  constructor() {
    (this._parsers = []),
      (this._parsersValidated = !1),
      (this.parsers = new Proxy(this._parsers, {
        set: (t, e, i) => ((this._parsersValidated = !1), (t[e] = i), !0),
      })),
      (this.promiseCache = {});
  }
  reset() {
    (this._parsersValidated = !1), (this.promiseCache = {});
  }
  _getLoadPromiseAndParser(t, e) {
    const i = { promise: null, parser: null };
    return (
      (i.promise = (async () => {
        var a, o;
        let r = null,
          n = null;
        if (
          (e.loadParser &&
            ((n = this._parserHash[e.loadParser]),
            n ||
              console.warn(
                `[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`
              )),
          !n)
        ) {
          for (let h = 0; h < this.parsers.length; h++) {
            const l = this.parsers[h];
            if (l.load && (a = l.test) != null && a.call(l, t, e, this)) {
              n = l;
              break;
            }
          }
          if (!n)
            return (
              console.warn(
                `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`
              ),
              null
            );
        }
        (r = await n.load(t, e, this)), (i.parser = n);
        for (let h = 0; h < this.parsers.length; h++) {
          const l = this.parsers[h];
          l.parse &&
            l.parse &&
            (await ((o = l.testParse) == null
              ? void 0
              : o.call(l, r, e, this))) &&
            ((r = (await l.parse(r, e, this)) || r), (i.parser = l));
        }
        return r;
      })()),
      i
    );
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    let i = 0;
    const r = {},
      n = Ui(t),
      a = yt(t, (l) => ({ alias: [l], src: l })),
      o = a.length,
      h = a.map(async (l) => {
        const d = nt.toAbsolute(l.src);
        if (!r[l.src])
          try {
            this.promiseCache[d] ||
              (this.promiseCache[d] = this._getLoadPromiseAndParser(d, l)),
              (r[l.src] = await this.promiseCache[d].promise),
              e && e(++i / o);
          } catch (c) {
            throw (
              (delete this.promiseCache[d],
              delete r[l.src],
              new Error(`[Loader.load] Failed to load ${d}.
${c}`))
            );
          }
      });
    return await Promise.all(h), n ? r[a[0].src] : r;
  }
  async unload(t) {
    const e = yt(t, (i) => ({ alias: [i], src: i })).map(async (i) => {
      var a, o;
      const r = nt.toAbsolute(i.src),
        n = this.promiseCache[r];
      if (n) {
        const h = await n.promise;
        delete this.promiseCache[r],
          (o = (a = n.parser) == null ? void 0 : a.unload) == null ||
            o.call(a, h, i, this);
      }
    });
    await Promise.all(e);
  }
  _validateParsers() {
    (this._parsersValidated = !0),
      (this._parserHash = this._parsers
        .filter((t) => t.name)
        .reduce(
          (t, e) => (
            t[e.name] &&
              console.warn(`[Assets] loadParser name conflict "${e.name}"`),
            { ...t, [e.name]: e }
          ),
          {}
        ));
  }
}
var Et = ((s) => (
  (s[(s.Low = 0)] = "Low"),
  (s[(s.Normal = 1)] = "Normal"),
  (s[(s.High = 2)] = "High"),
  s
))(Et || {});
const ml = ".json",
  gl = "application/json",
  _l = {
    extension: { type: A.LoadParser, priority: Et.Low },
    name: "loadJson",
    test(s) {
      return Fe(s, gl) || Jt(s, ml);
    },
    async load(s) {
      return await (await I.ADAPTER.fetch(s)).json();
    },
  };
M.add(_l);
const xl = ".txt",
  yl = "text/plain",
  vl = {
    name: "loadTxt",
    extension: { type: A.LoadParser, priority: Et.Low },
    test(s) {
      return Fe(s, yl) || Jt(s, xl);
    },
    async load(s) {
      return await (await I.ADAPTER.fetch(s)).text();
    },
  };
M.add(vl);
const bl = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  Tl = [".ttf", ".otf", ".woff", ".woff2"],
  El = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
  Al = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function wl(s) {
  const t = nt.extname(s),
    e = nt
      .basename(s, t)
      .replace(/(-|_)/g, " ")
      .toLowerCase()
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase() + n.slice(1));
  let i = e.length > 0;
  for (const n of e)
    if (!n.match(Al)) {
      i = !1;
      break;
    }
  let r = e.join(" ");
  return i || (r = `"${r.replace(/[\\"]/g, "\\$&")}"`), r;
}
const Sl = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function Cl(s) {
  return Sl.test(s) ? s : encodeURI(s);
}
const Il = {
  extension: { type: A.LoadParser, priority: Et.Low },
  name: "loadWebFont",
  test(s) {
    return Fe(s, El) || Jt(s, Tl);
  },
  async load(s, t) {
    var i, r, n;
    const e = I.ADAPTER.getFontFaceSet();
    if (e) {
      const a = [],
        o = ((i = t.data) == null ? void 0 : i.family) ?? wl(s),
        h = ((n = (r = t.data) == null ? void 0 : r.weights) == null
          ? void 0
          : n.filter((d) => bl.includes(d))) ?? ["normal"],
        l = t.data ?? {};
      for (let d = 0; d < h.length; d++) {
        const c = h[d],
          u = new FontFace(o, `url(${Cl(s)})`, { ...l, weight: c });
        await u.load(), e.add(u), a.push(u);
      }
      return a.length === 1 ? a[0] : a;
    }
    return (
      console.warn(
        "[loadWebFont] FontFace API is not supported. Skipping loading font"
      ),
      null
    );
  },
  unload(s) {
    (Array.isArray(s) ? s : [s]).forEach((t) =>
      I.ADAPTER.getFontFaceSet().delete(t)
    );
  },
};
M.add(Il);
const Rl = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let Me = null,
  Zs = class {
    constructor() {
      Me ||
        (Me = URL.createObjectURL(
          new Blob([Rl], { type: "application/javascript" })
        )),
        (this.worker = new Worker(Me));
    }
  };
Zs.revokeObjectURL = function () {
  Me && (URL.revokeObjectURL(Me), (Me = null));
};
const Pl = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let Be = null;
class xa {
  constructor() {
    Be ||
      (Be = URL.createObjectURL(
        new Blob([Pl], { type: "application/javascript" })
      )),
      (this.worker = new Worker(Be));
  }
}
xa.revokeObjectURL = function () {
  Be && (URL.revokeObjectURL(Be), (Be = null));
};
let Zr = 0,
  ms;
class Ml {
  constructor() {
    (this._initialized = !1),
      (this._createdWorkers = 0),
      (this.workerPool = []),
      (this.queue = []),
      (this.resolveHash = {});
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0
      ? this._isImageBitmapSupported
      : ((this._isImageBitmapSupported = new Promise((t) => {
          const { worker: e } = new Zs();
          e.addEventListener("message", (i) => {
            e.terminate(), Zs.revokeObjectURL(), t(i.data);
          });
        })),
        this._isImageBitmapSupported);
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  getWorker() {
    ms === void 0 && (ms = navigator.hardwareConcurrency || 4);
    let t = this.workerPool.pop();
    return (
      !t &&
        this._createdWorkers < ms &&
        (this._createdWorkers++,
        (t = new xa().worker),
        t.addEventListener("message", (e) => {
          this.complete(e.data), this.returnWorker(e.target), this.next();
        })),
      t
    );
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    t.error !== void 0
      ? this.resolveHash[t.uuid].reject(t.error)
      : this.resolveHash[t.uuid].resolve(t.data),
      (this.resolveHash[t.uuid] = null);
  }
  async _run(t, e) {
    await this._initWorkers();
    const i = new Promise((r, n) => {
      this.queue.push({ id: t, arguments: e, resolve: r, reject: n });
    });
    return this.next(), i;
  }
  next() {
    if (!this.queue.length) return;
    const t = this.getWorker();
    if (!t) return;
    const e = this.queue.pop(),
      i = e.id;
    (this.resolveHash[Zr] = { resolve: e.resolve, reject: e.reject }),
      t.postMessage({ data: e.arguments, uuid: Zr++, id: i });
  }
}
const Jr = new Ml();
function Ze(s, t, e) {
  s.resource.internal = !0;
  const i = new P(s),
    r = () => {
      delete t.promiseCache[e], ce.has(e) && ce.remove(e);
    };
  return (
    i.baseTexture.once("destroyed", () => {
      e in t.promiseCache &&
        (console.warn(
          "[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."
        ),
        r());
    }),
    i.once("destroyed", () => {
      s.destroyed ||
        (console.warn(
          "[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."
        ),
        r());
    }),
    i
  );
}
const Bl = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
  Dl = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function Fl(s) {
  const t = await I.ADAPTER.fetch(s);
  if (!t.ok)
    throw new Error(
      `[loadImageBitmap] Failed to fetch ${s}: ${t.status} ${t.statusText}`
    );
  const e = await t.blob();
  return await createImageBitmap(e);
}
const qi = {
  name: "loadTextures",
  extension: { type: A.LoadParser, priority: Et.High },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous",
  },
  test(s) {
    return Fe(s, Dl) || Jt(s, Bl);
  },
  async load(s, t, e) {
    var o;
    const i =
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    let r;
    i
      ? this.config.preferWorkers && (await Jr.isImageBitmapSupported())
        ? (r = await Jr.loadImageBitmap(s))
        : (r = await Fl(s))
      : (r = await new Promise((h, l) => {
          const d = new Image();
          (d.crossOrigin = this.config.crossOrigin),
            (d.src = s),
            d.complete
              ? h(d)
              : ((d.onload = () => h(d)), (d.onerror = (c) => l(c)));
        }));
    const n = { ...t.data };
    n.resolution ?? (n.resolution = Gt(s)),
      i &&
        ((o = n.resourceOptions) == null ? void 0 : o.ownsImageBitmap) ===
          void 0 &&
        ((n.resourceOptions = { ...n.resourceOptions }),
        (n.resourceOptions.ownsImageBitmap = !0));
    const a = new k(r, n);
    return (a.resource.src = s), Ze(a, e, s);
  },
  unload(s) {
    s.destroy(!0);
  },
};
M.add(qi);
const Ll = ".svg",
  Nl = "image/svg+xml",
  Ol = {
    extension: { type: A.LoadParser, priority: Et.High },
    name: "loadSVG",
    test(s) {
      return Fe(s, Nl) || Jt(s, Ll);
    },
    async testParse(s) {
      return Xs.test(s);
    },
    async parse(s, t, e) {
      var n;
      const i = new Xs(
        s,
        (n = t == null ? void 0 : t.data) == null ? void 0 : n.resourceOptions
      );
      await i.load();
      const r = new k(i, {
        resolution: Gt(s),
        ...(t == null ? void 0 : t.data),
      });
      return (r.resource.src = t.src), Ze(r, e, t.src);
    },
    async load(s, t) {
      return (await I.ADAPTER.fetch(s)).text();
    },
    unload: qi.unload,
  };
M.add(Ol);
const Ul = [".mp4", ".m4v", ".webm", ".ogv"],
  kl = ["video/mp4", "video/webm", "video/ogg"],
  Gl = {
    name: "loadVideo",
    extension: { type: A.LoadParser, priority: Et.High },
    config: {
      defaultAutoPlay: !0,
      defaultUpdateFPS: 0,
      defaultLoop: !1,
      defaultMuted: !1,
      defaultPlaysinline: !0,
    },
    test(s) {
      return Fe(s, kl) || Jt(s, Ul);
    },
    async load(s, t, e) {
      var a;
      let i;
      const r = await (await I.ADAPTER.fetch(s)).blob(),
        n = URL.createObjectURL(r);
      try {
        const o = {
            autoPlay: this.config.defaultAutoPlay,
            updateFPS: this.config.defaultUpdateFPS,
            loop: this.config.defaultLoop,
            muted: this.config.defaultMuted,
            playsinline: this.config.defaultPlaysinline,
            ...((a = t == null ? void 0 : t.data) == null
              ? void 0
              : a.resourceOptions),
            autoLoad: !0,
          },
          h = new da(n, o);
        await h.load();
        const l = new k(h, {
          alphaMode: await qa(),
          resolution: Gt(s),
          ...(t == null ? void 0 : t.data),
        });
        (l.resource.src = s),
          (i = Ze(l, e, s)),
          i.baseTexture.once("destroyed", () => {
            URL.revokeObjectURL(n);
          });
      } catch (o) {
        throw (URL.revokeObjectURL(n), o);
      }
      return i;
    },
    unload(s) {
      s.destroy(!0);
    },
  };
M.add(Gl);
class Hl {
  constructor() {
    (this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) =>
        e.replace(`${t}${this._bundleIdConnector}`, ""),
    }),
      (this._bundleIdConnector =
        this._defaultBundleIdentifierOptions.connector),
      (this._createBundleAssetId =
        this._defaultBundleIdentifierOptions.createBundleAssetId),
      (this._extractAssetIdFromBundle =
        this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._parsers = []),
      (this._resolverHash = {}),
      (this._bundles = {});
  }
  setBundleIdentifier(t) {
    if (
      ((this._bundleIdConnector = t.connector ?? this._bundleIdConnector),
      (this._createBundleAssetId =
        t.createBundleAssetId ?? this._createBundleAssetId),
      (this._extractAssetIdFromBundle =
        t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
      this._extractAssetIdFromBundle(
        "foo",
        this._createBundleAssetId("foo", "bar")
      ) !== "bar")
    )
      throw new Error(
        "[Resolver] GenerateBundleAssetId are not working correctly"
      );
  }
  prefer(...t) {
    t.forEach((e) => {
      this._preferredOrder.push(e),
        e.priority || (e.priority = Object.keys(e.params));
    }),
      (this._resolverHash = {});
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._resolverHash = {}),
      (this._rootPath = null),
      (this._basePath = null),
      (this._manifest = null),
      (this._bundles = {}),
      (this._defaultSearchParams = null);
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string") this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e)
        .map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`)
        .join("&");
    }
  }
  getAlias(t) {
    const { alias: e, name: i, src: r, srcs: n } = t;
    return yt(
      e || i || r || n,
      (a) =>
        typeof a == "string"
          ? a
          : Array.isArray(a)
          ? a.map(
              (o) =>
                (o == null ? void 0 : o.src) ??
                (o == null ? void 0 : o.srcs) ??
                o
            )
          : (a != null && a.src) || (a != null && a.srcs)
          ? a.src ?? a.srcs
          : a,
      !0
    );
  }
  addManifest(t) {
    this._manifest &&
      console.warn(
        "[Resolver] Manifest already exists, this will be overwritten"
      ),
      (this._manifest = t),
      t.bundles.forEach((e) => {
        this.addBundle(e.name, e.assets);
      });
  }
  addBundle(t, e) {
    const i = [];
    Array.isArray(e)
      ? e.forEach((r) => {
          const n = r.src ?? r.srcs,
            a = r.alias ?? r.name;
          let o;
          if (typeof a == "string") {
            const h = this._createBundleAssetId(t, a);
            i.push(h), (o = [a, h]);
          } else {
            const h = a.map((l) => this._createBundleAssetId(t, l));
            i.push(...h), (o = [...a, ...h]);
          }
          this.add({ ...r, alias: o, src: n });
        })
      : Object.keys(e).forEach((r) => {
          const n = [r, this._createBundleAssetId(t, r)];
          if (typeof e[r] == "string") this.add({ alias: n, src: e[r] });
          else if (Array.isArray(e[r])) this.add({ alias: n, src: e[r] });
          else {
            const a = e[r],
              o = a.src ?? a.srcs;
            this.add({ ...a, alias: n, src: Array.isArray(o) ? o : [o] });
          }
          i.push(...n);
        }),
      (this._bundles[t] = i);
  }
  add(t, e, i, r, n) {
    const a = [];
    typeof t == "string" || (Array.isArray(t) && typeof t[0] == "string")
      ? (z(
          "7.2.0",
          `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`
        ),
        a.push({ alias: t, src: e, data: i, format: r, loadParser: n }))
      : Array.isArray(t)
      ? a.push(...t)
      : a.push(t);
    let o;
    (o = (h) => {
      this.hasKey(h) &&
        console.warn(`[Resolver] already has key: ${h} overwriting`);
    }),
      yt(a).forEach((h) => {
        const { src: l, srcs: d } = h;
        let { data: c, format: u, loadParser: p } = h;
        const f = yt(l || d).map((_) =>
            typeof _ == "string" ? ul(_) : Array.isArray(_) ? _ : [_]
          ),
          m = this.getAlias(h);
        Array.isArray(m) ? m.forEach(o) : o(m);
        const g = [];
        f.forEach((_) => {
          _.forEach((b) => {
            let x = {};
            if (typeof b != "object") {
              x.src = b;
              for (let y = 0; y < this._parsers.length; y++) {
                const R = this._parsers[y];
                if (R.test(b)) {
                  x = R.parse(b);
                  break;
                }
              }
            } else
              (c = b.data ?? c),
                (u = b.format ?? u),
                (p = b.loadParser ?? p),
                (x = { ...x, ...b });
            if (!m)
              throw new Error(
                `[Resolver] alias is undefined for this asset: ${x.src}`
              );
            (x = this.buildResolvedAsset(x, {
              aliases: m,
              data: c,
              format: u,
              loadParser: p,
            })),
              g.push(x);
          });
        }),
          m.forEach((_) => {
            this._assetMap[_] = g;
          });
      });
  }
  resolveBundle(t) {
    const e = Ui(t);
    t = yt(t);
    const i = {};
    return (
      t.forEach((r) => {
        const n = this._bundles[r];
        if (n) {
          const a = this.resolve(n),
            o = {};
          for (const h in a) {
            const l = a[h];
            o[this._extractAssetIdFromBundle(r, h)] = l;
          }
          i[r] = o;
        }
      }),
      e ? i[t[0]] : i
    );
  }
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const i = {};
      for (const r in e) i[r] = e[r].src;
      return i;
    }
    return e.src;
  }
  resolve(t) {
    const e = Ui(t);
    t = yt(t);
    const i = {};
    return (
      t.forEach((r) => {
        if (!this._resolverHash[r])
          if (this._assetMap[r]) {
            let n = this._assetMap[r];
            const a = n[0],
              o = this._getPreferredOrder(n);
            o == null ||
              o.priority.forEach((h) => {
                o.params[h].forEach((l) => {
                  const d = n.filter((c) => (c[h] ? c[h] === l : !1));
                  d.length && (n = d);
                });
              }),
              (this._resolverHash[r] = n[0] ?? a);
          } else
            this._resolverHash[r] = this.buildResolvedAsset(
              { alias: [r], src: r },
              {}
            );
        i[r] = this._resolverHash[r];
      }),
      e ? i[t[0]] : i
    );
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const i = t[0],
        r = this._preferredOrder.find((n) =>
          n.params.format.includes(i.format)
        );
      if (r) return r;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams) return t;
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(t, e) {
    const { aliases: i, data: r, loadParser: n, format: a } = e;
    return (
      (this._basePath || this._rootPath) &&
        (t.src = nt.toAbsolute(t.src, this._basePath, this._rootPath)),
      (t.alias = i ?? t.alias ?? [t.src]),
      (t.src = this._appendDefaultSearchParams(t.src)),
      (t.data = { ...(r || {}), ...t.data }),
      (t.loadParser = n ?? t.loadParser),
      (t.format = a ?? t.format ?? nt.extname(t.src).slice(1)),
      (t.srcs = t.src),
      (t.name = t.alias),
      t
    );
  }
}
class Xl {
  constructor() {
    (this._detections = []),
      (this._initialized = !1),
      (this.resolver = new Hl()),
      (this.loader = new fl()),
      (this.cache = ce),
      (this._backgroundLoader = new cl(this.loader)),
      (this._backgroundLoader.active = !0),
      this.reset();
  }
  async init(t = {}) {
    var n, a;
    if (this._initialized) {
      console.warn(
        "[Assets]AssetManager already initialized, did you load before calling this Assets.init()?"
      );
      return;
    }
    if (
      ((this._initialized = !0),
      t.defaultSearchParams &&
        this.resolver.setDefaultSearchParams(t.defaultSearchParams),
      t.basePath && (this.resolver.basePath = t.basePath),
      t.bundleIdentifier &&
        this.resolver.setBundleIdentifier(t.bundleIdentifier),
      t.manifest)
    ) {
      let o = t.manifest;
      typeof o == "string" && (o = await this.load(o)),
        this.resolver.addManifest(o);
    }
    const e = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1,
      i = typeof e == "number" ? [e] : e,
      r = await this._detectFormats({
        preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
        skipDetections: t.skipDetections,
        detections: this._detections,
      });
    this.resolver.prefer({ params: { format: r, resolution: i } }),
      t.preferences && this.setPreferences(t.preferences);
  }
  add(t, e, i, r, n) {
    this.resolver.add(t, e, i, r, n);
  }
  async load(t, e) {
    this._initialized || (await this.init());
    const i = Ui(t),
      r = yt(t).map((o) => {
        if (typeof o != "string") {
          const h = this.resolver.getAlias(o);
          return (
            h.some((l) => !this.resolver.hasKey(l)) && this.add(o),
            Array.isArray(h) ? h[0] : h
          );
        }
        return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
      }),
      n = this.resolver.resolve(r),
      a = await this._mapLoadToResolve(n, e);
    return i ? a[r[0]] : a;
  }
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  async loadBundle(t, e) {
    this._initialized || (await this.init());
    let i = !1;
    typeof t == "string" && ((i = !0), (t = [t]));
    const r = this.resolver.resolveBundle(t),
      n = {},
      a = Object.keys(r);
    let o = 0,
      h = 0;
    const l = () => {
        e == null || e(++o / h);
      },
      d = a.map((c) => {
        const u = r[c];
        return (
          (h += Object.keys(u).length),
          this._mapLoadToResolve(u, l).then((p) => {
            n[c] = p;
          })
        );
      });
    return await Promise.all(d), i ? n[t[0]] : n;
  }
  async backgroundLoad(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  async backgroundLoadBundle(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach((i) => {
      this._backgroundLoader.add(Object.values(i));
    });
  }
  reset() {
    this.resolver.reset(),
      this.loader.reset(),
      this.cache.reset(),
      (this._initialized = !1);
  }
  get(t) {
    if (typeof t == "string") return ce.get(t);
    const e = {};
    for (let i = 0; i < t.length; i++) e[i] = ce.get(t[i]);
    return e;
  }
  async _mapLoadToResolve(t, e) {
    const i = Object.values(t),
      r = Object.keys(t);
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(i, e);
    this._backgroundLoader.active = !0;
    const a = {};
    return (
      i.forEach((o, h) => {
        const l = n[o.src],
          d = [o.src];
        o.alias && d.push(...o.alias), (a[r[h]] = l), ce.set(d, l);
      }),
      a
    );
  }
  async unload(t) {
    this._initialized || (await this.init());
    const e = yt(t).map((r) => (typeof r != "string" ? r.src : r)),
      i = this.resolver.resolve(e);
    await this._unloadFromResolved(i);
  }
  async unloadBundle(t) {
    this._initialized || (await this.init()), (t = yt(t));
    const e = this.resolver.resolveBundle(t),
      i = Object.keys(e).map((r) => this._unloadFromResolved(e[r]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((i) => {
      ce.remove(i.src);
    }),
      await this.loader.unload(e);
  }
  async _detectFormats(t) {
    let e = [];
    t.preferredFormats &&
      (e = Array.isArray(t.preferredFormats)
        ? t.preferredFormats
        : [t.preferredFormats]);
    for (const i of t.detections)
      t.skipDetections || (await i.test())
        ? (e = await i.add(e))
        : t.skipDetections || (e = await i.remove(e));
    return (e = e.filter((i, r) => e.indexOf(i) === r)), e;
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return qi.config.preferWorkers;
  }
  set preferWorkers(t) {
    z(
      "7.2.0",
      "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."
    ),
      this.setPreferences({ preferWorkers: t });
  }
  setPreferences(t) {
    this.loader.parsers.forEach((e) => {
      e.config &&
        Object.keys(e.config)
          .filter((i) => i in t)
          .forEach((i) => {
            e.config[i] = t[i];
          });
    });
  }
}
const ui = new Xl();
M.handleByList(A.LoadParser, ui.loader.parsers)
  .handleByList(A.ResolveParser, ui.resolver.parsers)
  .handleByList(A.CacheParser, ui.cache.parsers)
  .handleByList(A.DetectionParser, ui.detections);
const Vl = {
  extension: A.CacheParser,
  test: (s) => Array.isArray(s) && s.every((t) => t instanceof P),
  getCacheableAssets: (s, t) => {
    const e = {};
    return (
      s.forEach((i) => {
        t.forEach((r, n) => {
          e[i + (n === 0 ? "" : n + 1)] = r;
        });
      }),
      e
    );
  },
};
M.add(Vl);
async function ya(s) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      (e.onload = () => {
        t(!0);
      }),
        (e.onerror = () => {
          t(!1);
        }),
        (e.src = s);
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(s)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const zl = {
  extension: { type: A.DetectionParser, priority: 1 },
  test: async () =>
    ya(
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
    ),
  add: async (s) => [...s, "avif"],
  remove: async (s) => s.filter((t) => t !== "avif"),
};
M.add(zl);
const Wl = {
  extension: { type: A.DetectionParser, priority: 0 },
  test: async () =>
    ya(
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    ),
  add: async (s) => [...s, "webp"],
  remove: async (s) => s.filter((t) => t !== "webp"),
};
M.add(Wl);
const Qr = ["png", "jpg", "jpeg"],
  $l = {
    extension: { type: A.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (s) => [...s, ...Qr],
    remove: async (s) => s.filter((t) => !Qr.includes(t)),
  };
M.add($l);
const jl =
  "WorkerGlobalScope" in globalThis &&
  globalThis instanceof globalThis.WorkerGlobalScope;
function lr(s) {
  return jl ? !1 : document.createElement("video").canPlayType(s) !== "";
}
const Yl = {
  extension: { type: A.DetectionParser, priority: 0 },
  test: async () => lr("video/webm"),
  add: async (s) => [...s, "webm"],
  remove: async (s) => s.filter((t) => t !== "webm"),
};
M.add(Yl);
const ql = {
  extension: { type: A.DetectionParser, priority: 0 },
  test: async () => lr("video/mp4"),
  add: async (s) => [...s, "mp4", "m4v"],
  remove: async (s) => s.filter((t) => t !== "mp4" && t !== "m4v"),
};
M.add(ql);
const Kl = {
  extension: { type: A.DetectionParser, priority: 0 },
  test: async () => lr("video/ogg"),
  add: async (s) => [...s, "ogv"],
  remove: async (s) => s.filter((t) => t !== "ogv"),
};
M.add(Kl);
const Zl = {
  extension: A.ResolveParser,
  test: qi.test,
  parse: (s) => {
    var t;
    return {
      resolution: parseFloat(
        ((t = I.RETINA_PREFIX.exec(s)) == null ? void 0 : t[1]) ?? "1"
      ),
      format: nt.extname(s).slice(1),
      src: s,
    };
  },
};
M.add(Zl);
var at = ((s) => (
  (s[(s.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
    "COMPRESSED_RGB_S3TC_DXT1_EXT"),
  (s[(s.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
    "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
  (s[(s.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
    "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
  (s[(s.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
    "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
  (s[(s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
  (s[(s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
  (s[(s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
  (s[(s.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
    "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
  (s[(s.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
  (s[(s.COMPRESSED_SIGNED_R11_EAC = 37489)] = "COMPRESSED_SIGNED_R11_EAC"),
  (s[(s.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
  (s[(s.COMPRESSED_SIGNED_RG11_EAC = 37491)] = "COMPRESSED_SIGNED_RG11_EAC"),
  (s[(s.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
  (s[(s.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = "COMPRESSED_RGBA8_ETC2_EAC"),
  (s[(s.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
  (s[(s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
    "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
  (s[(s.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
    "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (s[(s.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
    "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (s[(s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
    "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
  (s[(s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
    "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
  (s[(s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
    "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
  (s[(s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
    "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
  (s[(s.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = "COMPRESSED_RGB_ETC1_WEBGL"),
  (s[(s.COMPRESSED_RGB_ATC_WEBGL = 35986)] = "COMPRESSED_RGB_ATC_WEBGL"),
  (s[(s.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987)] =
    "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
  (s[(s.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
    "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"),
  (s[(s.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
    "COMPRESSED_RGBA_ASTC_4x4_KHR"),
  (s[(s.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492)] =
    "COMPRESSED_RGBA_BPTC_UNORM_EXT"),
  (s[(s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493)] =
    "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"),
  (s[(s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494)] =
    "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT"),
  (s[(s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495)] =
    "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT"),
  s
))(at || {});
const ki = {
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  37495: 0.5,
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  36196: 0.5,
  35986: 0.5,
  35987: 1,
  34798: 1,
  37808: 1,
  36492: 1,
  36493: 1,
  36494: 1,
  36495: 1,
};
let St, Ee;
function tn() {
  Ee = {
    bptc: St.getExtension("EXT_texture_compression_bptc"),
    astc: St.getExtension("WEBGL_compressed_texture_astc"),
    etc: St.getExtension("WEBGL_compressed_texture_etc"),
    s3tc: St.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: St.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    pvrtc:
      St.getExtension("WEBGL_compressed_texture_pvrtc") ||
      St.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    etc1: St.getExtension("WEBGL_compressed_texture_etc1"),
    atc: St.getExtension("WEBGL_compressed_texture_atc"),
  };
}
const Jl = {
  extension: { type: A.DetectionParser, priority: 2 },
  test: async () => {
    const s = I.ADAPTER.createCanvas().getContext("webgl");
    return s
      ? ((St = s), !0)
      : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (s) => {
    Ee || tn();
    const t = [];
    for (const e in Ee) Ee[e] && t.push(e);
    return [...t, ...s];
  },
  remove: async (s) => (Ee || tn(), s.filter((t) => !(t in Ee))),
};
M.add(Jl);
class Ql extends Vi {
  constructor(t, e = { width: 1, height: 1, autoLoad: !0 }) {
    let i, r;
    typeof t == "string"
      ? ((i = t), (r = new Uint8Array()))
      : ((i = null), (r = t)),
      super(r, e),
      (this.origin = i),
      (this.buffer = r ? new Rs(r) : null),
      (this._load = null),
      (this.loaded = !1),
      this.origin !== null && e.autoLoad !== !1 && this.load(),
      this.origin === null &&
        this.buffer &&
        ((this._load = Promise.resolve(this)),
        (this.loaded = !0),
        this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(t) {}
  load() {
    return this._load
      ? this._load
      : ((this._load = fetch(this.origin)
          .then((t) => t.blob())
          .then((t) => t.arrayBuffer())
          .then(
            (t) => (
              (this.data = new Uint32Array(t)),
              (this.buffer = new Rs(t)),
              (this.loaded = !0),
              this.onBlobLoaded(t),
              this.update(),
              this
            )
          )),
        this._load);
  }
}
class pe extends Ql {
  constructor(t, e) {
    super(t, e),
      (this.format = e.format),
      (this.levels = e.levels || 1),
      (this._width = e.width),
      (this._height = e.height),
      (this._extension = pe._formatToExtension(this.format)),
      (e.levelBuffers || this.buffer) &&
        (this._levelBuffers =
          e.levelBuffers ||
          pe._createLevelBuffers(
            t instanceof Uint8Array ? t : this.buffer.uint8View,
            this.format,
            this.levels,
            4,
            4,
            this.width,
            this.height
          ));
  }
  upload(t, e, i) {
    const r = t.gl;
    if (!t.context.extensions[this._extension])
      throw new Error(
        `${this._extension} textures are not supported on the current machine`
      );
    if (!this._levelBuffers) return !1;
    r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
    for (let n = 0, a = this.levels; n < a; n++) {
      const {
        levelID: o,
        levelWidth: h,
        levelHeight: l,
        levelBuffer: d,
      } = this._levelBuffers[n];
      r.compressedTexImage2D(r.TEXTURE_2D, o, this.format, h, l, 0, d);
    }
    return !0;
  }
  onBlobLoaded() {
    this._levelBuffers = pe._createLevelBuffers(
      this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      this.width,
      this.height
    );
  }
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779) return "s3tc";
    if (t >= 35916 && t <= 35919) return "s3tc_sRGB";
    if (t >= 37488 && t <= 37497) return "etc";
    if (t >= 35840 && t <= 35843) return "pvrtc";
    if (t === 36196) return "etc1";
    if (t === 35986 || t === 35987 || t === 34798) return "atc";
    if (t >= 36492 && t <= 36495) return "bptc";
    if (t === 37808) return "astc";
    throw new Error(`Invalid (compressed) texture format given: ${t}`);
  }
  static _createLevelBuffers(t, e, i, r, n, a, o) {
    const h = new Array(i);
    let l = t.byteOffset,
      d = a,
      c = o,
      u = (d + r - 1) & ~(r - 1),
      p = (c + n - 1) & ~(n - 1),
      f = u * p * ki[e];
    for (let m = 0; m < i; m++)
      (h[m] = {
        levelID: m,
        levelWidth: i > 1 ? d : u,
        levelHeight: i > 1 ? c : p,
        levelBuffer: new Uint8Array(t.buffer, l, f),
      }),
        (l += f),
        (d = d >> 1 || 1),
        (c = c >> 1 || 1),
        (u = (d + r - 1) & ~(r - 1)),
        (p = (c + n - 1) & ~(n - 1)),
        (f = u * p * ki[e]);
    return h;
  }
}
const gs = 4,
  pi = 124,
  td = 32,
  en = 20,
  ed = 542327876,
  fi = {
    SIZE: 1,
    FLAGS: 2,
    HEIGHT: 3,
    WIDTH: 4,
    MIPMAP_COUNT: 7,
    PIXEL_FORMAT: 19,
  },
  id = {
    SIZE: 0,
    FLAGS: 1,
    FOURCC: 2,
    RGB_BITCOUNT: 3,
    R_BIT_MASK: 4,
    G_BIT_MASK: 5,
    B_BIT_MASK: 6,
    A_BIT_MASK: 7,
  },
  mi = {
    DXGI_FORMAT: 0,
    RESOURCE_DIMENSION: 1,
    MISC_FLAG: 2,
    ARRAY_SIZE: 3,
    MISC_FLAGS2: 4,
  },
  sd = 1,
  rd = 2,
  nd = 4,
  ad = 64,
  od = 512,
  hd = 131072,
  ld = 827611204,
  dd = 861165636,
  cd = 894720068,
  ud = 808540228,
  pd = 4,
  fd = {
    [ld]: at.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    [dd]: at.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    [cd]: at.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  },
  md = {
    70: at.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    71: at.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    73: at.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    74: at.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    76: at.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    77: at.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    72: at.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
    75: at.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
    78: at.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
    96: at.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
    95: at.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
    98: at.COMPRESSED_RGBA_BPTC_UNORM_EXT,
    99: at.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT,
  };
function gd(s) {
  const t = new Uint32Array(s);
  if (t[0] !== ed) throw new Error("Invalid DDS file magic word");
  const e = new Uint32Array(s, 0, pi / Uint32Array.BYTES_PER_ELEMENT),
    i = e[fi.HEIGHT],
    r = e[fi.WIDTH],
    n = e[fi.MIPMAP_COUNT],
    a = new Uint32Array(
      s,
      fi.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
      td / Uint32Array.BYTES_PER_ELEMENT
    ),
    o = a[sd];
  if (o & nd) {
    const h = a[id.FOURCC];
    if (h !== ud) {
      const b = fd[h],
        x = gs + pi,
        y = new Uint8Array(s, x);
      return [new pe(y, { format: b, width: r, height: i, levels: n })];
    }
    const l = gs + pi,
      d = new Uint32Array(t.buffer, l, en / Uint32Array.BYTES_PER_ELEMENT),
      c = d[mi.DXGI_FORMAT],
      u = d[mi.RESOURCE_DIMENSION],
      p = d[mi.MISC_FLAG],
      f = d[mi.ARRAY_SIZE],
      m = md[c];
    if (m === void 0)
      throw new Error(
        `DDSParser cannot parse texture data with DXGI format ${c}`
      );
    if (p === pd)
      throw new Error("DDSParser does not support cubemap textures");
    if (u === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const g = new Array(),
      _ = gs + pi + en;
    if (f === 1) g.push(new Uint8Array(s, _));
    else {
      const b = ki[m];
      let x = 0,
        y = r,
        R = i;
      for (let E = 0; E < n; E++) {
        const w = Math.max(1, (y + 3) & -4),
          N = Math.max(1, (R + 3) & -4),
          X = w * N * b;
        (x += X), (y = y >>> 1), (R = R >>> 1);
      }
      let O = _;
      for (let E = 0; E < f; E++) g.push(new Uint8Array(s, O, x)), (O += x);
    }
    return g.map(
      (b) => new pe(b, { format: m, width: r, height: i, levels: n })
    );
  }
  throw o & ad
    ? new Error("DDSParser does not support uncompressed texture data.")
    : o & od
    ? new Error("DDSParser does not supported YUV uncompressed texture data.")
    : o & hd
    ? new Error(
        "DDSParser does not support single-channel (lumninance) texture data!"
      )
    : o & rd
    ? new Error(
        "DDSParser does not support single-channel (alpha) texture data!"
      )
    : new Error(
        "DDSParser failed to load a texture file due to an unknown reason!"
      );
}
const sn = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
  _d = 67305985,
  gt = {
    FILE_IDENTIFIER: 0,
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_TYPE_SIZE: 20,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    GL_BASE_INTERNAL_FORMAT: 32,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60,
  },
  Js = 64,
  rn = {
    [D.UNSIGNED_BYTE]: 1,
    [D.UNSIGNED_SHORT]: 2,
    [D.INT]: 4,
    [D.UNSIGNED_INT]: 4,
    [D.FLOAT]: 4,
    [D.HALF_FLOAT]: 8,
  },
  xd = {
    [T.RGBA]: 4,
    [T.RGB]: 3,
    [T.RG]: 2,
    [T.RED]: 1,
    [T.LUMINANCE]: 1,
    [T.LUMINANCE_ALPHA]: 2,
    [T.ALPHA]: 1,
  },
  yd = {
    [D.UNSIGNED_SHORT_4_4_4_4]: 2,
    [D.UNSIGNED_SHORT_5_5_5_1]: 2,
    [D.UNSIGNED_SHORT_5_6_5]: 2,
  };
function vd(s, t, e = !1) {
  const i = new DataView(t);
  if (!bd(s, i)) return null;
  const r = i.getUint32(gt.ENDIANNESS, !0) === _d,
    n = i.getUint32(gt.GL_TYPE, r),
    a = i.getUint32(gt.GL_FORMAT, r),
    o = i.getUint32(gt.GL_INTERNAL_FORMAT, r),
    h = i.getUint32(gt.PIXEL_WIDTH, r),
    l = i.getUint32(gt.PIXEL_HEIGHT, r) || 1,
    d = i.getUint32(gt.PIXEL_DEPTH, r) || 1,
    c = i.getUint32(gt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1,
    u = i.getUint32(gt.NUMBER_OF_FACES, r),
    p = i.getUint32(gt.NUMBER_OF_MIPMAP_LEVELS, r),
    f = i.getUint32(gt.BYTES_OF_KEY_VALUE_DATA, r);
  if (l === 0 || d !== 1) throw new Error("Only 2D textures are supported");
  if (u !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (c !== 1) throw new Error("WebGL does not support array textures");
  const m = 4,
    g = 4,
    _ = (h + 3) & -4,
    b = (l + 3) & -4,
    x = new Array(c);
  let y = h * l;
  n === 0 && (y = _ * b);
  let R;
  if (
    (n !== 0 ? (rn[n] ? (R = rn[n] * xd[a]) : (R = yd[n])) : (R = ki[o]),
    R === void 0)
  )
    throw new Error(
      "Unable to resolve the pixel format stored in the *.ktx file!"
    );
  const O = e ? Ed(i, f, r) : null;
  let E = y * R,
    w = h,
    N = l,
    X = _,
    Y = b,
    F = Js + f;
  for (let v = 0; v < p; v++) {
    const S = i.getUint32(F, r);
    let G = F + 4;
    for (let j = 0; j < c; j++) {
      let U = x[j];
      U || (U = x[j] = new Array(p)),
        (U[v] = {
          levelID: v,
          levelWidth: p > 1 || n !== 0 ? w : X,
          levelHeight: p > 1 || n !== 0 ? N : Y,
          levelBuffer: new Uint8Array(t, G, E),
        }),
        (G += E);
    }
    (F += S + 4),
      (F = F % 4 !== 0 ? F + 4 - (F % 4) : F),
      (w = w >> 1 || 1),
      (N = N >> 1 || 1),
      (X = (w + m - 1) & ~(m - 1)),
      (Y = (N + g - 1) & ~(g - 1)),
      (E = X * Y * R);
  }
  return n !== 0
    ? {
        uncompressed: x.map((v) => {
          let S = v[0].levelBuffer,
            G = !1;
          return (
            n === D.FLOAT
              ? (S = new Float32Array(
                  v[0].levelBuffer.buffer,
                  v[0].levelBuffer.byteOffset,
                  v[0].levelBuffer.byteLength / 4
                ))
              : n === D.UNSIGNED_INT
              ? ((G = !0),
                (S = new Uint32Array(
                  v[0].levelBuffer.buffer,
                  v[0].levelBuffer.byteOffset,
                  v[0].levelBuffer.byteLength / 4
                )))
              : n === D.INT &&
                ((G = !0),
                (S = new Int32Array(
                  v[0].levelBuffer.buffer,
                  v[0].levelBuffer.byteOffset,
                  v[0].levelBuffer.byteLength / 4
                ))),
            {
              resource: new Vi(S, {
                width: v[0].levelWidth,
                height: v[0].levelHeight,
              }),
              type: n,
              format: G ? Td(a) : a,
            }
          );
        }),
        kvData: O,
      }
    : {
        compressed: x.map(
          (v) =>
            new pe(null, {
              format: o,
              width: h,
              height: l,
              levels: p,
              levelBuffers: v,
            })
        ),
        kvData: O,
      };
}
function bd(s, t) {
  for (let e = 0; e < sn.length; e++)
    if (t.getUint8(e) !== sn[e])
      return console.error(`${s} is not a valid *.ktx file!`), !1;
  return !0;
}
function Td(s) {
  switch (s) {
    case T.RGBA:
      return T.RGBA_INTEGER;
    case T.RGB:
      return T.RGB_INTEGER;
    case T.RG:
      return T.RG_INTEGER;
    case T.RED:
      return T.RED_INTEGER;
    default:
      return s;
  }
}
function Ed(s, t, e) {
  const i = new Map();
  let r = 0;
  for (; r < t; ) {
    const n = s.getUint32(Js + r, e),
      a = Js + r + 4,
      o = 3 - ((n + 3) % 4);
    if (n === 0 || n > t - r) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let h = 0;
    for (; h < n && s.getUint8(a + h) !== 0; h++);
    if (h === -1) {
      console.error(
        "KTXLoader: Failed to find null byte terminating kvData key"
      );
      break;
    }
    const l = new TextDecoder().decode(new Uint8Array(s.buffer, a, h)),
      d = new DataView(s.buffer, a + h + 1, n - h - 1);
    i.set(l, d), (r += 4 + n + o);
  }
  return i;
}
const Ad = {
  extension: { type: A.LoadParser, priority: Et.High },
  name: "loadDDS",
  test(s) {
    return Jt(s, ".dds");
  },
  async load(s, t, e) {
    const i = await (await I.ADAPTER.fetch(s)).arrayBuffer(),
      r = gd(i).map((n) => {
        const a = new k(n, {
          mipmap: Dt.OFF,
          alphaMode: lt.NO_PREMULTIPLIED_ALPHA,
          resolution: Gt(s),
          ...t.data,
        });
        return Ze(a, e, s);
      });
    return r.length === 1 ? r[0] : r;
  },
  unload(s) {
    Array.isArray(s) ? s.forEach((t) => t.destroy(!0)) : s.destroy(!0);
  },
};
M.add(Ad);
const wd = {
  extension: { type: A.LoadParser, priority: Et.High },
  name: "loadKTX",
  test(s) {
    return Jt(s, ".ktx");
  },
  async load(s, t, e) {
    const i = await (await I.ADAPTER.fetch(s)).arrayBuffer(),
      { compressed: r, uncompressed: n, kvData: a } = vd(s, i),
      o = r ?? n,
      h = {
        mipmap: Dt.OFF,
        alphaMode: lt.NO_PREMULTIPLIED_ALPHA,
        resolution: Gt(s),
        ...t.data,
      },
      l = o.map((d) => {
        o === n && Object.assign(h, { type: d.type, format: d.format });
        const c = d.resource ?? d,
          u = new k(c, h);
        return (u.ktxKeyValueData = a), Ze(u, e, s);
      });
    return l.length === 1 ? l[0] : l;
  },
  unload(s) {
    Array.isArray(s) ? s.forEach((t) => t.destroy(!0)) : s.destroy(!0);
  },
};
M.add(wd);
const Sd = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"],
  Cd = {
    extension: A.ResolveParser,
    test: (s) => {
      const t = nt.extname(s).slice(1);
      return ["basis", "ktx", "dds"].includes(t);
    },
    parse: (s) => {
      var i, r;
      const t = s.split("."),
        e = t.pop();
      if (["ktx", "dds"].includes(e)) {
        const n = t.pop();
        if (Sd.includes(n))
          return {
            resolution: parseFloat(
              ((i = I.RETINA_PREFIX.exec(s)) == null ? void 0 : i[1]) ?? "1"
            ),
            format: n,
            src: s,
          };
      }
      return {
        resolution: parseFloat(
          ((r = I.RETINA_PREFIX.exec(s)) == null ? void 0 : r[1]) ?? "1"
        ),
        format: e,
        src: s,
      };
    },
  };
M.add(Cd);
const gi = new H(),
  Id = 4,
  va = class ze {
    constructor(t) {
      (this.renderer = t), (this._rendererPremultipliedAlpha = !1);
    }
    contextChange() {
      var e;
      const t =
        (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
      this._rendererPremultipliedAlpha = !!(
        t &&
        t.alpha &&
        t.premultipliedAlpha
      );
    }
    async image(t, e, i, r) {
      const n = new Image();
      return (n.src = await this.base64(t, e, i, r)), n;
    }
    async base64(t, e, i, r) {
      const n = this.canvas(t, r);
      if (n.toBlob !== void 0)
        return new Promise((a, o) => {
          n.toBlob(
            (h) => {
              if (!h) {
                o(new Error("ICanvas.toBlob failed!"));
                return;
              }
              const l = new FileReader();
              (l.onload = () => a(l.result)),
                (l.onerror = o),
                l.readAsDataURL(h);
            },
            e,
            i
          );
        });
      if (n.toDataURL !== void 0) return n.toDataURL(e, i);
      if (n.convertToBlob !== void 0) {
        const a = await n.convertToBlob({ type: e, quality: i });
        return new Promise((o, h) => {
          const l = new FileReader();
          (l.onload = () => o(l.result)), (l.onerror = h), l.readAsDataURL(a);
        });
      }
      throw new Error(
        "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented"
      );
    }
    canvas(t, e) {
      const {
        pixels: i,
        width: r,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, e);
      a && ze._flipY(i, r, n), o && ze._unpremultiplyAlpha(i);
      const h = new uo(r, n, 1),
        l = new ImageData(new Uint8ClampedArray(i.buffer), r, n);
      return h.context.putImageData(l, 0, 0), h.canvas;
    }
    pixels(t, e) {
      const {
        pixels: i,
        width: r,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, e);
      return a && ze._flipY(i, r, n), o && ze._unpremultiplyAlpha(i), i;
    }
    _rawPixels(t, e) {
      const i = this.renderer;
      if (!i) throw new Error("The Extract has already been destroyed");
      let r,
        n = !1,
        a = !1,
        o,
        h = !1;
      t &&
        (t instanceof _e
          ? (o = t)
          : ((o = i.generateTexture(t, {
              region: e,
              resolution: i.resolution,
              multisample: i.multisample,
            })),
            (h = !0),
            e && ((gi.width = e.width), (gi.height = e.height), (e = gi))));
      const l = i.gl;
      if (o) {
        if (
          ((r = o.baseTexture.resolution),
          (e = e ?? o.frame),
          (n = !1),
          (a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === T.RGBA),
          !h)
        ) {
          i.renderTexture.bind(o);
          const p = o.framebuffer.glFramebuffers[i.CONTEXT_UID];
          p.blitFramebuffer && i.framebuffer.bind(p.blitFramebuffer);
        }
      } else
        (r = i.resolution),
          e || ((e = gi), (e.width = i.width / r), (e.height = i.height / r)),
          (n = !0),
          (a = this._rendererPremultipliedAlpha),
          i.renderTexture.bind();
      const d = Math.max(Math.round(e.width * r), 1),
        c = Math.max(Math.round(e.height * r), 1),
        u = new Uint8Array(Id * d * c);
      return (
        l.readPixels(
          Math.round(e.x * r),
          Math.round(e.y * r),
          d,
          c,
          l.RGBA,
          l.UNSIGNED_BYTE,
          u
        ),
        h && (o == null || o.destroy(!0)),
        { pixels: u, width: d, height: c, flipY: n, premultipliedAlpha: a }
      );
    }
    destroy() {
      this.renderer = null;
    }
    static _flipY(t, e, i) {
      const r = e << 2,
        n = i >> 1,
        a = new Uint8Array(r);
      for (let o = 0; o < n; o++) {
        const h = o * r,
          l = (i - o - 1) * r;
        a.set(t.subarray(h, h + r)), t.copyWithin(h, l, l + r), t.set(a, l);
      }
    }
    static _unpremultiplyAlpha(t) {
      t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
      const e = t.length;
      for (let i = 0; i < e; i += 4) {
        const r = t[i + 3];
        if (r !== 0) {
          const n = 255.001 / r;
          (t[i] = t[i] * n + 0.5),
            (t[i + 1] = t[i + 1] * n + 0.5),
            (t[i + 2] = t[i + 2] * n + 0.5);
        }
      }
    }
  };
va.extension = { name: "extract", type: A.RendererSystem };
let Rd = va;
M.add(Rd);
const Gi = {
  build(s) {
    const t = s.points;
    let e, i, r, n, a, o;
    if (s.type === ot.CIRC) {
      const f = s.shape;
      (e = f.x), (i = f.y), (a = o = f.radius), (r = n = 0);
    } else if (s.type === ot.ELIP) {
      const f = s.shape;
      (e = f.x), (i = f.y), (a = f.width), (o = f.height), (r = n = 0);
    } else {
      const f = s.shape,
        m = f.width / 2,
        g = f.height / 2;
      (e = f.x + m),
        (i = f.y + g),
        (a = o = Math.max(0, Math.min(f.radius, Math.min(m, g)))),
        (r = m - a),
        (n = g - o);
    }
    if (!(a >= 0 && o >= 0 && r >= 0 && n >= 0)) {
      t.length = 0;
      return;
    }
    const h = Math.ceil(2.3 * Math.sqrt(a + o)),
      l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
    if (((t.length = l), l === 0)) return;
    if (h === 0) {
      (t.length = 8),
        (t[0] = t[6] = e + r),
        (t[1] = t[3] = i + n),
        (t[2] = t[4] = e - r),
        (t[5] = t[7] = i - n);
      return;
    }
    let d = 0,
      c = h * 4 + (r ? 2 : 0) + 2,
      u = c,
      p = l;
    {
      const f = r + a,
        m = n,
        g = e + f,
        _ = e - f,
        b = i + m;
      if (((t[d++] = g), (t[d++] = b), (t[--c] = b), (t[--c] = _), n)) {
        const x = i - m;
        (t[u++] = _), (t[u++] = x), (t[--p] = x), (t[--p] = g);
      }
    }
    for (let f = 1; f < h; f++) {
      const m = (Math.PI / 2) * (f / h),
        g = r + Math.cos(m) * a,
        _ = n + Math.sin(m) * o,
        b = e + g,
        x = e - g,
        y = i + _,
        R = i - _;
      (t[d++] = b),
        (t[d++] = y),
        (t[--c] = y),
        (t[--c] = x),
        (t[u++] = x),
        (t[u++] = R),
        (t[--p] = R),
        (t[--p] = b);
    }
    {
      const f = r,
        m = n + o,
        g = e + f,
        _ = e - f,
        b = i + m,
        x = i - m;
      (t[d++] = g),
        (t[d++] = b),
        (t[--p] = x),
        (t[--p] = g),
        r && ((t[d++] = _), (t[d++] = b), (t[--p] = x), (t[--p] = _));
    }
  },
  triangulate(s, t) {
    const e = s.points,
      i = t.points,
      r = t.indices;
    if (e.length === 0) return;
    let n = i.length / 2;
    const a = n;
    let o, h;
    if (s.type !== ot.RREC) {
      const d = s.shape;
      (o = d.x), (h = d.y);
    } else {
      const d = s.shape;
      (o = d.x + d.width / 2), (h = d.y + d.height / 2);
    }
    const l = s.matrix;
    i.push(
      s.matrix ? l.a * o + l.c * h + l.tx : o,
      s.matrix ? l.b * o + l.d * h + l.ty : h
    ),
      n++,
      i.push(e[0], e[1]);
    for (let d = 2; d < e.length; d += 2)
      i.push(e[d], e[d + 1]), r.push(n++, a, n);
    r.push(a + 1, a, n);
  },
};
function nn(s, t = !1) {
  const e = s.length;
  if (e < 6) return;
  let i = 0;
  for (let r = 0, n = s[e - 2], a = s[e - 1]; r < e; r += 2) {
    const o = s[r],
      h = s[r + 1];
    (i += (o - n) * (h + a)), (n = o), (a = h);
  }
  if ((!t && i > 0) || (t && i <= 0)) {
    const r = e / 2;
    for (let n = r + (r % 2); n < e; n += 2) {
      const a = e - n - 2,
        o = e - n - 1,
        h = n,
        l = n + 1;
      ([s[a], s[h]] = [s[h], s[a]]), ([s[o], s[l]] = [s[l], s[o]]);
    }
  }
}
const ba = {
    build(s) {
      s.points = s.shape.points.slice();
    },
    triangulate(s, t) {
      let e = s.points;
      const i = s.holes,
        r = t.points,
        n = t.indices;
      if (e.length >= 6) {
        nn(e, !1);
        const a = [];
        for (let l = 0; l < i.length; l++) {
          const d = i[l];
          nn(d.points, !0), a.push(e.length / 2), (e = e.concat(d.points));
        }
        const o = Va(e, a, 2);
        if (!o) return;
        const h = r.length / 2;
        for (let l = 0; l < o.length; l += 3)
          n.push(o[l] + h), n.push(o[l + 1] + h), n.push(o[l + 2] + h);
        for (let l = 0; l < e.length; l++) r.push(e[l]);
      }
    },
  },
  Pd = {
    build(s) {
      const t = s.shape,
        e = t.x,
        i = t.y,
        r = t.width,
        n = t.height,
        a = s.points;
      (a.length = 0),
        r >= 0 && n >= 0 && a.push(e, i, e + r, i, e + r, i + n, e, i + n);
    },
    triangulate(s, t) {
      const e = s.points,
        i = t.points;
      if (e.length === 0) return;
      const r = i.length / 2;
      i.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]),
        t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3);
    },
  },
  Md = {
    build(s) {
      Gi.build(s);
    },
    triangulate(s, t) {
      Gi.triangulate(s, t);
    },
  };
var ut = ((s) => (
    (s.MITER = "miter"), (s.BEVEL = "bevel"), (s.ROUND = "round"), s
  ))(ut || {}),
  Yt = ((s) => (
    (s.BUTT = "butt"), (s.ROUND = "round"), (s.SQUARE = "square"), s
  ))(Yt || {});
const De = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(s, t = 20) {
    if (!this.adaptive || !s || isNaN(s)) return t;
    let e = Math.ceil(s / this.maxLength);
    return (
      e < this.minSegments
        ? (e = this.minSegments)
        : e > this.maxSegments && (e = this.maxSegments),
      e
    );
  },
};
class an {
  static curveTo(t, e, i, r, n, a) {
    const o = a[a.length - 2],
      h = a[a.length - 1] - e,
      l = o - t,
      d = r - e,
      c = i - t,
      u = Math.abs(h * c - l * d);
    if (u < 1e-8 || n === 0)
      return (
        (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e), null
      );
    const p = h * h + l * l,
      f = d * d + c * c,
      m = h * d + l * c,
      g = (n * Math.sqrt(p)) / u,
      _ = (n * Math.sqrt(f)) / u,
      b = (g * m) / p,
      x = (_ * m) / f,
      y = g * c + _ * l,
      R = g * d + _ * h,
      O = l * (_ + b),
      E = h * (_ + b),
      w = c * (g + x),
      N = d * (g + x),
      X = Math.atan2(E - R, O - y),
      Y = Math.atan2(N - R, w - y);
    return {
      cx: y + t,
      cy: R + e,
      radius: n,
      startAngle: X,
      endAngle: Y,
      anticlockwise: l * d > c * h,
    };
  }
  static arc(t, e, i, r, n, a, o, h, l) {
    const d = o - a,
      c = De._segmentsCount(Math.abs(d) * n, Math.ceil(Math.abs(d) / Mi) * 40),
      u = d / (c * 2),
      p = u * 2,
      f = Math.cos(u),
      m = Math.sin(u),
      g = c - 1,
      _ = (g % 1) / g;
    for (let b = 0; b <= g; ++b) {
      const x = b + _ * b,
        y = u + a + p * x,
        R = Math.cos(y),
        O = -Math.sin(y);
      l.push((f * R + m * O) * n + i, (f * -O + m * R) * n + r);
    }
  }
}
class Bd {
  constructor() {
    this.reset();
  }
  begin(t, e, i) {
    this.reset(), (this.style = t), (this.start = e), (this.attribStart = i);
  }
  end(t, e) {
    (this.attribSize = e - this.attribStart), (this.size = t - this.start);
  }
  reset() {
    (this.style = null),
      (this.size = 0),
      (this.start = 0),
      (this.attribStart = 0),
      (this.attribSize = 0);
  }
}
class dr {
  static curveLength(t, e, i, r, n, a, o, h) {
    let l = 0,
      d = 0,
      c = 0,
      u = 0,
      p = 0,
      f = 0,
      m = 0,
      g = 0,
      _ = 0,
      b = 0,
      x = 0,
      y = t,
      R = e;
    for (let O = 1; O <= 10; ++O)
      (d = O / 10),
        (c = d * d),
        (u = c * d),
        (p = 1 - d),
        (f = p * p),
        (m = f * p),
        (g = m * t + 3 * f * d * i + 3 * p * c * n + u * o),
        (_ = m * e + 3 * f * d * r + 3 * p * c * a + u * h),
        (b = y - g),
        (x = R - _),
        (y = g),
        (R = _),
        (l += Math.sqrt(b * b + x * x));
    return l;
  }
  static curveTo(t, e, i, r, n, a, o) {
    const h = o[o.length - 2],
      l = o[o.length - 1];
    o.length -= 2;
    const d = De._segmentsCount(dr.curveLength(h, l, t, e, i, r, n, a));
    let c = 0,
      u = 0,
      p = 0,
      f = 0,
      m = 0;
    o.push(h, l);
    for (let g = 1, _ = 0; g <= d; ++g)
      (_ = g / d),
        (c = 1 - _),
        (u = c * c),
        (p = u * c),
        (f = _ * _),
        (m = f * _),
        o.push(
          p * h + 3 * u * _ * t + 3 * c * f * i + m * n,
          p * l + 3 * u * _ * e + 3 * c * f * r + m * a
        );
  }
}
function on(s, t, e, i, r, n, a, o) {
  const h = s - e * r,
    l = t - i * r,
    d = s + e * n,
    c = t + i * n;
  let u, p;
  a ? ((u = i), (p = -e)) : ((u = -i), (p = e));
  const f = h + u,
    m = l + p,
    g = d + u,
    _ = c + p;
  return o.push(f, m, g, _), 2;
}
function re(s, t, e, i, r, n, a, o) {
  const h = e - s,
    l = i - t;
  let d = Math.atan2(h, l),
    c = Math.atan2(r - s, n - t);
  o && d < c ? (d += Math.PI * 2) : !o && d > c && (c += Math.PI * 2);
  let u = d;
  const p = c - d,
    f = Math.abs(p),
    m = Math.sqrt(h * h + l * l),
    g = (((15 * f * Math.sqrt(m)) / Math.PI) >> 0) + 1,
    _ = p / g;
  if (((u += _), o)) {
    a.push(s, t, e, i);
    for (let b = 1, x = u; b < g; b++, x += _)
      a.push(s, t, s + Math.sin(x) * m, t + Math.cos(x) * m);
    a.push(s, t, r, n);
  } else {
    a.push(e, i, s, t);
    for (let b = 1, x = u; b < g; b++, x += _)
      a.push(s + Math.sin(x) * m, t + Math.cos(x) * m, s, t);
    a.push(r, n, s, t);
  }
  return g * 2;
}
function Dd(s, t) {
  const e = s.shape;
  let i = s.points || e.points.slice();
  const r = t.closePointEps;
  if (i.length === 0) return;
  const n = s.lineStyle,
    a = new $(i[0], i[1]),
    o = new $(i[i.length - 2], i[i.length - 1]),
    h = e.type !== ot.POLY || e.closeStroke,
    l = Math.abs(a.x - o.x) < r && Math.abs(a.y - o.y) < r;
  if (h) {
    (i = i.slice()),
      l && (i.pop(), i.pop(), o.set(i[i.length - 2], i[i.length - 1]));
    const U = (a.x + o.x) * 0.5,
      V = (o.y + a.y) * 0.5;
    i.unshift(U, V), i.push(U, V);
  }
  const d = t.points,
    c = i.length / 2;
  let u = i.length;
  const p = d.length / 2,
    f = n.width / 2,
    m = f * f,
    g = n.miterLimit * n.miterLimit;
  let _ = i[0],
    b = i[1],
    x = i[2],
    y = i[3],
    R = 0,
    O = 0,
    E = -(b - y),
    w = _ - x,
    N = 0,
    X = 0,
    Y = Math.sqrt(E * E + w * w);
  (E /= Y), (w /= Y), (E *= f), (w *= f);
  const F = n.alignment,
    v = (1 - F) * 2,
    S = F * 2;
  h ||
    (n.cap === Yt.ROUND
      ? (u +=
          re(
            _ - E * (v - S) * 0.5,
            b - w * (v - S) * 0.5,
            _ - E * v,
            b - w * v,
            _ + E * S,
            b + w * S,
            d,
            !0
          ) + 2)
      : n.cap === Yt.SQUARE && (u += on(_, b, E, w, v, S, !0, d))),
    d.push(_ - E * v, b - w * v, _ + E * S, b + w * S);
  for (let U = 1; U < c - 1; ++U) {
    (_ = i[(U - 1) * 2]),
      (b = i[(U - 1) * 2 + 1]),
      (x = i[U * 2]),
      (y = i[U * 2 + 1]),
      (R = i[(U + 1) * 2]),
      (O = i[(U + 1) * 2 + 1]),
      (E = -(b - y)),
      (w = _ - x),
      (Y = Math.sqrt(E * E + w * w)),
      (E /= Y),
      (w /= Y),
      (E *= f),
      (w *= f),
      (N = -(y - O)),
      (X = x - R),
      (Y = Math.sqrt(N * N + X * X)),
      (N /= Y),
      (X /= Y),
      (N *= f),
      (X *= f);
    const V = x - _,
      it = b - y,
      tt = x - R,
      W = O - y,
      pr = V * tt + it * W,
      Je = it * tt - W * V,
      Le = Je < 0;
    if (Math.abs(Je) < 0.001 * Math.abs(pr)) {
      d.push(x - E * v, y - w * v, x + E * S, y + w * S),
        pr >= 0 &&
          (n.join === ut.ROUND
            ? (u +=
                re(x, y, x - E * v, y - w * v, x - N * v, y - X * v, d, !1) + 4)
            : (u += 2),
          d.push(x - N * S, y - X * S, x + N * v, y + X * v));
      continue;
    }
    const fr = (-E + _) * (-w + y) - (-E + x) * (-w + b),
      mr = (-N + R) * (-X + y) - (-N + x) * (-X + O),
      Qe = (V * mr - tt * fr) / Je,
      ti = (W * fr - it * mr) / Je,
      gr = (Qe - x) * (Qe - x) + (ti - y) * (ti - y),
      Qt = x + (Qe - x) * v,
      te = y + (ti - y) * v,
      ee = x - (Qe - x) * S,
      ie = y - (ti - y) * S,
      Ga = Math.min(V * V + it * it, tt * tt + W * W),
      _r = Le ? v : S,
      Ha = Ga + _r * _r * m,
      Xa = gr <= Ha;
    let ei = n.join;
    if ((ei === ut.MITER && gr / m > g && (ei = ut.BEVEL), Xa))
      switch (ei) {
        case ut.MITER: {
          d.push(Qt, te, ee, ie);
          break;
        }
        case ut.BEVEL: {
          Le
            ? d.push(Qt, te, x + E * S, y + w * S, Qt, te, x + N * S, y + X * S)
            : d.push(
                x - E * v,
                y - w * v,
                ee,
                ie,
                x - N * v,
                y - X * v,
                ee,
                ie
              ),
            (u += 2);
          break;
        }
        case ut.ROUND: {
          Le
            ? (d.push(Qt, te, x + E * S, y + w * S),
              (u +=
                re(x, y, x + E * S, y + w * S, x + N * S, y + X * S, d, !0) +
                4),
              d.push(Qt, te, x + N * S, y + X * S))
            : (d.push(x - E * v, y - w * v, ee, ie),
              (u +=
                re(x, y, x - E * v, y - w * v, x - N * v, y - X * v, d, !1) +
                4),
              d.push(x - N * v, y - X * v, ee, ie));
          break;
        }
      }
    else {
      switch ((d.push(x - E * v, y - w * v, x + E * S, y + w * S), ei)) {
        case ut.MITER: {
          Le ? d.push(ee, ie, ee, ie) : d.push(Qt, te, Qt, te), (u += 2);
          break;
        }
        case ut.ROUND: {
          Le
            ? (u +=
                re(x, y, x + E * S, y + w * S, x + N * S, y + X * S, d, !0) + 2)
            : (u +=
                re(x, y, x - E * v, y - w * v, x - N * v, y - X * v, d, !1) +
                2);
          break;
        }
      }
      d.push(x - N * v, y - X * v, x + N * S, y + X * S), (u += 2);
    }
  }
  (_ = i[(c - 2) * 2]),
    (b = i[(c - 2) * 2 + 1]),
    (x = i[(c - 1) * 2]),
    (y = i[(c - 1) * 2 + 1]),
    (E = -(b - y)),
    (w = _ - x),
    (Y = Math.sqrt(E * E + w * w)),
    (E /= Y),
    (w /= Y),
    (E *= f),
    (w *= f),
    d.push(x - E * v, y - w * v, x + E * S, y + w * S),
    h ||
      (n.cap === Yt.ROUND
        ? (u +=
            re(
              x - E * (v - S) * 0.5,
              y - w * (v - S) * 0.5,
              x - E * v,
              y - w * v,
              x + E * S,
              y + w * S,
              d,
              !1
            ) + 2)
        : n.cap === Yt.SQUARE && (u += on(x, y, E, w, v, S, !1, d)));
  const G = t.indices,
    j = De.epsilon * De.epsilon;
  for (let U = p; U < u + p - 2; ++U)
    (_ = d[U * 2]),
      (b = d[U * 2 + 1]),
      (x = d[(U + 1) * 2]),
      (y = d[(U + 1) * 2 + 1]),
      (R = d[(U + 2) * 2]),
      (O = d[(U + 2) * 2 + 1]),
      !(Math.abs(_ * (y - O) + x * (O - b) + R * (b - y)) < j) &&
        G.push(U, U + 1, U + 2);
}
function Fd(s, t) {
  let e = 0;
  const i = s.shape,
    r = s.points || i.points,
    n = i.type !== ot.POLY || i.closeStroke;
  if (r.length === 0) return;
  const a = t.points,
    o = t.indices,
    h = r.length / 2,
    l = a.length / 2;
  let d = l;
  for (a.push(r[0], r[1]), e = 1; e < h; e++)
    a.push(r[e * 2], r[e * 2 + 1]), o.push(d, d + 1), d++;
  n && o.push(d, l);
}
function hn(s, t) {
  s.lineStyle.native ? Fd(s, t) : Dd(s, t);
}
class cr {
  static curveLength(t, e, i, r, n, a) {
    const o = t - 2 * i + n,
      h = e - 2 * r + a,
      l = 2 * i - 2 * t,
      d = 2 * r - 2 * e,
      c = 4 * (o * o + h * h),
      u = 4 * (o * l + h * d),
      p = l * l + d * d,
      f = 2 * Math.sqrt(c + u + p),
      m = Math.sqrt(c),
      g = 2 * c * m,
      _ = 2 * Math.sqrt(p),
      b = u / m;
    return (
      (g * f +
        m * u * (f - _) +
        (4 * p * c - u * u) * Math.log((2 * m + b + f) / (b + _))) /
      (4 * g)
    );
  }
  static curveTo(t, e, i, r, n) {
    const a = n[n.length - 2],
      o = n[n.length - 1],
      h = De._segmentsCount(cr.curveLength(a, o, t, e, i, r));
    let l = 0,
      d = 0;
    for (let c = 1; c <= h; ++c) {
      const u = c / h;
      (l = a + (t - a) * u),
        (d = o + (e - o) * u),
        n.push(l + (t + (i - t) * u - l) * u, d + (e + (r - e) * u - d) * u);
    }
  }
}
const _s = {
    [ot.POLY]: ba,
    [ot.CIRC]: Gi,
    [ot.ELIP]: Gi,
    [ot.RECT]: Pd,
    [ot.RREC]: Md,
  },
  ln = [],
  _i = [];
class Hi {
  constructor(t, e = null, i = null, r = null) {
    (this.points = []),
      (this.holes = []),
      (this.shape = t),
      (this.lineStyle = i),
      (this.fillStyle = e),
      (this.matrix = r),
      (this.type = t.type);
  }
  clone() {
    return new Hi(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    (this.shape = null),
      (this.holes.length = 0),
      (this.holes = null),
      (this.points.length = 0),
      (this.points = null),
      (this.lineStyle = null),
      (this.fillStyle = null);
  }
}
const ye = new $(),
  Ta = class Ea extends Cn {
    constructor() {
      super(),
        (this.closePointEps = 1e-4),
        (this.boundsPadding = 0),
        (this.uvsFloat32 = null),
        (this.indicesUint16 = null),
        (this.batchable = !1),
        (this.points = []),
        (this.colors = []),
        (this.uvs = []),
        (this.indices = []),
        (this.textureIds = []),
        (this.graphicsData = []),
        (this.drawCalls = []),
        (this.batchDirty = -1),
        (this.batches = []),
        (this.dirty = 0),
        (this.cacheDirty = -1),
        (this.clearDirty = 0),
        (this.shapeIndex = 0),
        (this._bounds = new Ni()),
        (this.boundsDirty = -1);
    }
    get bounds() {
      return (
        this.updateBatches(),
        this.boundsDirty !== this.dirty &&
          ((this.boundsDirty = this.dirty), this.calculateBounds()),
        this._bounds
      );
    }
    invalidate() {
      (this.boundsDirty = -1),
        this.dirty++,
        this.batchDirty++,
        (this.shapeIndex = 0),
        (this.points.length = 0),
        (this.colors.length = 0),
        (this.uvs.length = 0),
        (this.indices.length = 0),
        (this.textureIds.length = 0);
      for (let t = 0; t < this.drawCalls.length; t++)
        this.drawCalls[t].texArray.clear(), _i.push(this.drawCalls[t]);
      this.drawCalls.length = 0;
      for (let t = 0; t < this.batches.length; t++) {
        const e = this.batches[t];
        e.reset(), ln.push(e);
      }
      this.batches.length = 0;
    }
    clear() {
      return (
        this.graphicsData.length > 0 &&
          (this.invalidate(),
          this.clearDirty++,
          (this.graphicsData.length = 0)),
        this
      );
    }
    drawShape(t, e = null, i = null, r = null) {
      const n = new Hi(t, e, i, r);
      return this.graphicsData.push(n), this.dirty++, this;
    }
    drawHole(t, e = null) {
      if (!this.graphicsData.length) return null;
      const i = new Hi(t, null, null, e),
        r = this.graphicsData[this.graphicsData.length - 1];
      return (i.lineStyle = r.lineStyle), r.holes.push(i), this.dirty++, this;
    }
    destroy() {
      super.destroy();
      for (let t = 0; t < this.graphicsData.length; ++t)
        this.graphicsData[t].destroy();
      (this.points.length = 0),
        (this.points = null),
        (this.colors.length = 0),
        (this.colors = null),
        (this.uvs.length = 0),
        (this.uvs = null),
        (this.indices.length = 0),
        (this.indices = null),
        this.indexBuffer.destroy(),
        (this.indexBuffer = null),
        (this.graphicsData.length = 0),
        (this.graphicsData = null),
        (this.drawCalls.length = 0),
        (this.drawCalls = null),
        (this.batches.length = 0),
        (this.batches = null),
        (this._bounds = null);
    }
    containsPoint(t) {
      const e = this.graphicsData;
      for (let i = 0; i < e.length; ++i) {
        const r = e[i];
        if (
          r.fillStyle.visible &&
          r.shape &&
          (r.matrix ? r.matrix.applyInverse(t, ye) : ye.copyFrom(t),
          r.shape.contains(ye.x, ye.y))
        ) {
          let n = !1;
          if (r.holes) {
            for (let a = 0; a < r.holes.length; a++)
              if (r.holes[a].shape.contains(ye.x, ye.y)) {
                n = !0;
                break;
              }
          }
          if (!n) return !0;
        }
      }
      return !1;
    }
    updateBatches() {
      if (!this.graphicsData.length) {
        this.batchable = !0;
        return;
      }
      if (!this.validateBatching()) return;
      this.cacheDirty = this.dirty;
      const t = this.uvs,
        e = this.graphicsData;
      let i = null,
        r = null;
      this.batches.length > 0 &&
        ((i = this.batches[this.batches.length - 1]), (r = i.style));
      for (let h = this.shapeIndex; h < e.length; h++) {
        this.shapeIndex++;
        const l = e[h],
          d = l.fillStyle,
          c = l.lineStyle;
        _s[l.type].build(l),
          l.matrix && this.transformPoints(l.points, l.matrix),
          (d.visible || c.visible) && this.processHoles(l.holes);
        for (let u = 0; u < 2; u++) {
          const p = u === 0 ? d : c;
          if (!p.visible) continue;
          const f = p.texture.baseTexture,
            m = this.indices.length,
            g = this.points.length / 2;
          (f.wrapMode = qt.REPEAT),
            u === 0 ? this.processFill(l) : this.processLine(l);
          const _ = this.points.length / 2 - g;
          _ !== 0 &&
            (i && !this._compareStyles(r, p) && (i.end(m, g), (i = null)),
            i ||
              ((i = ln.pop() || new Bd()),
              i.begin(p, m, g),
              this.batches.push(i),
              (r = p)),
            this.addUvs(this.points, t, p.texture, g, _, p.matrix));
        }
      }
      const n = this.indices.length,
        a = this.points.length / 2;
      if ((i && i.end(n, a), this.batches.length === 0)) {
        this.batchable = !0;
        return;
      }
      const o = a > 65535;
      this.indicesUint16 &&
      this.indices.length === this.indicesUint16.length &&
      o === this.indicesUint16.BYTES_PER_ELEMENT > 2
        ? this.indicesUint16.set(this.indices)
        : (this.indicesUint16 = o
            ? new Uint32Array(this.indices)
            : new Uint16Array(this.indices)),
        (this.batchable = this.isBatchable()),
        this.batchable ? this.packBatches() : this.buildDrawCalls();
    }
    _compareStyles(t, e) {
      return !(
        !t ||
        !e ||
        t.texture.baseTexture !== e.texture.baseTexture ||
        t.color + t.alpha !== e.color + e.alpha ||
        !!t.native != !!e.native
      );
    }
    validateBatching() {
      if (this.dirty === this.cacheDirty || !this.graphicsData.length)
        return !1;
      for (let t = 0, e = this.graphicsData.length; t < e; t++) {
        const i = this.graphicsData[t],
          r = i.fillStyle,
          n = i.lineStyle;
        if (
          (r && !r.texture.baseTexture.valid) ||
          (n && !n.texture.baseTexture.valid)
        )
          return !1;
      }
      return !0;
    }
    packBatches() {
      this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
      const t = this.batches;
      for (let e = 0, i = t.length; e < i; e++) {
        const r = t[e];
        for (let n = 0; n < r.size; n++) {
          const a = r.start + n;
          this.indicesUint16[a] = this.indicesUint16[a] - r.attribStart;
        }
      }
    }
    isBatchable() {
      if (this.points.length > 65535 * 2) return !1;
      const t = this.batches;
      for (let e = 0; e < t.length; e++) if (t[e].style.native) return !1;
      return this.points.length < Ea.BATCHABLE_SIZE * 2;
    }
    buildDrawCalls() {
      let t = ++k._globalBatch;
      for (let c = 0; c < this.drawCalls.length; c++)
        this.drawCalls[c].texArray.clear(), _i.push(this.drawCalls[c]);
      this.drawCalls.length = 0;
      const e = this.colors,
        i = this.textureIds;
      let r = _i.pop();
      r || ((r = new Bs()), (r.texArray = new Ns())),
        (r.texArray.count = 0),
        (r.start = 0),
        (r.size = 0),
        (r.type = Pt.TRIANGLES);
      let n = 0,
        a = null,
        o = 0,
        h = !1,
        l = Pt.TRIANGLES,
        d = 0;
      this.drawCalls.push(r);
      for (let c = 0; c < this.batches.length; c++) {
        const u = this.batches[c],
          p = 8,
          f = u.style,
          m = f.texture.baseTexture;
        h !== !!f.native &&
          ((h = !!f.native),
          (l = h ? Pt.LINES : Pt.TRIANGLES),
          (a = null),
          (n = p),
          t++),
          a !== m &&
            ((a = m),
            m._batchEnabled !== t &&
              (n === p &&
                (t++,
                (n = 0),
                r.size > 0 &&
                  ((r = _i.pop()),
                  r || ((r = new Bs()), (r.texArray = new Ns())),
                  this.drawCalls.push(r)),
                (r.start = d),
                (r.size = 0),
                (r.texArray.count = 0),
                (r.type = l)),
              (m.touched = 1),
              (m._batchEnabled = t),
              (m._batchLocation = n),
              (m.wrapMode = qt.REPEAT),
              (r.texArray.elements[r.texArray.count++] = m),
              n++)),
          (r.size += u.size),
          (d += u.size),
          (o = m._batchLocation),
          this.addColors(e, f.color, f.alpha, u.attribSize, u.attribStart),
          this.addTextureIds(i, o, u.attribSize, u.attribStart);
      }
      (k._globalBatch = t), this.packAttributes();
    }
    packAttributes() {
      const t = this.points,
        e = this.uvs,
        i = this.colors,
        r = this.textureIds,
        n = new ArrayBuffer(t.length * 3 * 4),
        a = new Float32Array(n),
        o = new Uint32Array(n);
      let h = 0;
      for (let l = 0; l < t.length / 2; l++)
        (a[h++] = t[l * 2]),
          (a[h++] = t[l * 2 + 1]),
          (a[h++] = e[l * 2]),
          (a[h++] = e[l * 2 + 1]),
          (o[h++] = i[l]),
          (a[h++] = r[l]);
      this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
    }
    processFill(t) {
      t.holes.length
        ? ba.triangulate(t, this)
        : _s[t.type].triangulate(t, this);
    }
    processLine(t) {
      hn(t, this);
      for (let e = 0; e < t.holes.length; e++) hn(t.holes[e], this);
    }
    processHoles(t) {
      for (let e = 0; e < t.length; e++) {
        const i = t[e];
        _s[i.type].build(i),
          i.matrix && this.transformPoints(i.points, i.matrix);
      }
    }
    calculateBounds() {
      const t = this._bounds;
      t.clear(),
        t.addVertexData(this.points, 0, this.points.length),
        t.pad(this.boundsPadding, this.boundsPadding);
    }
    transformPoints(t, e) {
      for (let i = 0; i < t.length / 2; i++) {
        const r = t[i * 2],
          n = t[i * 2 + 1];
        (t[i * 2] = e.a * r + e.c * n + e.tx),
          (t[i * 2 + 1] = e.b * r + e.d * n + e.ty);
      }
    }
    addColors(t, e, i, r, n = 0) {
      const a = q.shared.setValue(e).toLittleEndianNumber(),
        o = q.shared.setValue(a).toPremultiplied(i);
      t.length = Math.max(t.length, n + r);
      for (let h = 0; h < r; h++) t[n + h] = o;
    }
    addTextureIds(t, e, i, r = 0) {
      t.length = Math.max(t.length, r + i);
      for (let n = 0; n < i; n++) t[r + n] = e;
    }
    addUvs(t, e, i, r, n, a = null) {
      let o = 0;
      const h = e.length,
        l = i.frame;
      for (; o < n; ) {
        let c = t[(r + o) * 2],
          u = t[(r + o) * 2 + 1];
        if (a) {
          const p = a.a * c + a.c * u + a.tx;
          (u = a.b * c + a.d * u + a.ty), (c = p);
        }
        o++, e.push(c / l.width, u / l.height);
      }
      const d = i.baseTexture;
      (l.width < d.width || l.height < d.height) && this.adjustUvs(e, i, h, n);
    }
    adjustUvs(t, e, i, r) {
      const n = e.baseTexture,
        a = 1e-6,
        o = i + r * 2,
        h = e.frame,
        l = h.width / n.width,
        d = h.height / n.height;
      let c = h.x / h.width,
        u = h.y / h.height,
        p = Math.floor(t[i] + a),
        f = Math.floor(t[i + 1] + a);
      for (let m = i + 2; m < o; m += 2)
        (p = Math.min(p, Math.floor(t[m] + a))),
          (f = Math.min(f, Math.floor(t[m + 1] + a)));
      (c -= p), (u -= f);
      for (let m = i; m < o; m += 2)
        (t[m] = (t[m] + c) * l), (t[m + 1] = (t[m + 1] + u) * d);
    }
  };
Ta.BATCHABLE_SIZE = 100;
let Ld = Ta;
class Ki {
  constructor() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = P.WHITE),
      (this.matrix = null),
      (this.visible = !1),
      this.reset();
  }
  clone() {
    const t = new Ki();
    return (
      (t.color = this.color),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.matrix = this.matrix),
      (t.visible = this.visible),
      t
    );
  }
  reset() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = P.WHITE),
      (this.matrix = null),
      (this.visible = !1);
  }
  destroy() {
    (this.texture = null), (this.matrix = null);
  }
}
class ur extends Ki {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.alignment = 0.5),
      (this.native = !1),
      (this.cap = Yt.BUTT),
      (this.join = ut.MITER),
      (this.miterLimit = 10);
  }
  clone() {
    const t = new ur();
    return (
      (t.color = this.color),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.matrix = this.matrix),
      (t.visible = this.visible),
      (t.width = this.width),
      (t.alignment = this.alignment),
      (t.native = this.native),
      (t.cap = this.cap),
      (t.join = this.join),
      (t.miterLimit = this.miterLimit),
      t
    );
  }
  reset() {
    super.reset(),
      (this.color = 0),
      (this.alignment = 0.5),
      (this.width = 0),
      (this.native = !1),
      (this.cap = Yt.BUTT),
      (this.join = ut.MITER),
      (this.miterLimit = 10);
  }
}
const xs = {},
  Qs = class Si extends Tt {
    constructor(t = null) {
      super(),
        (this.shader = null),
        (this.pluginName = "batch"),
        (this.currentPath = null),
        (this.batches = []),
        (this.batchTint = -1),
        (this.batchDirty = -1),
        (this.vertexData = null),
        (this._fillStyle = new Ki()),
        (this._lineStyle = new ur()),
        (this._matrix = null),
        (this._holeMode = !1),
        (this.state = Ft.for2d()),
        (this._geometry = t || new Ld()),
        this._geometry.refCount++,
        (this._transformID = -1),
        (this._tintColor = new q(16777215)),
        (this.blendMode = L.NORMAL);
    }
    get geometry() {
      return this._geometry;
    }
    clone() {
      return this.finishPoly(), new Si(this._geometry);
    }
    set blendMode(t) {
      this.state.blendMode = t;
    }
    get blendMode() {
      return this.state.blendMode;
    }
    get tint() {
      return this._tintColor.value;
    }
    set tint(t) {
      this._tintColor.setValue(t);
    }
    get fill() {
      return this._fillStyle;
    }
    get line() {
      return this._lineStyle;
    }
    lineStyle(t = null, e = 0, i, r = 0.5, n = !1) {
      return (
        typeof t == "number" &&
          (t = { width: t, color: e, alpha: i, alignment: r, native: n }),
        this.lineTextureStyle(t)
      );
    }
    lineTextureStyle(t) {
      const e = {
        width: 0,
        texture: P.WHITE,
        color: t != null && t.texture ? 16777215 : 0,
        matrix: null,
        alignment: 0.5,
        native: !1,
        cap: Yt.BUTT,
        join: ut.MITER,
        miterLimit: 10,
      };
      (t = Object.assign(e, t)),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
      const i = t.width > 0 && t.alpha > 0;
      return (
        i
          ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
            Object.assign(this._lineStyle, { visible: i }, t))
          : this._lineStyle.reset(),
        this
      );
    }
    startPoly() {
      if (this.currentPath) {
        const t = this.currentPath.points,
          e = this.currentPath.points.length;
        e > 2 &&
          (this.drawShape(this.currentPath),
          (this.currentPath = new ue()),
          (this.currentPath.closeStroke = !1),
          this.currentPath.points.push(t[e - 2], t[e - 1]));
      } else (this.currentPath = new ue()), (this.currentPath.closeStroke = !1);
    }
    finishPoly() {
      this.currentPath &&
        (this.currentPath.points.length > 2
          ? (this.drawShape(this.currentPath), (this.currentPath = null))
          : (this.currentPath.points.length = 0));
    }
    moveTo(t, e) {
      return (
        this.startPoly(),
        (this.currentPath.points[0] = t),
        (this.currentPath.points[1] = e),
        this
      );
    }
    lineTo(t, e) {
      this.currentPath || this.moveTo(0, 0);
      const i = this.currentPath.points,
        r = i[i.length - 2],
        n = i[i.length - 1];
      return (r !== t || n !== e) && i.push(t, e), this;
    }
    _initCurve(t = 0, e = 0) {
      this.currentPath
        ? this.currentPath.points.length === 0 &&
          (this.currentPath.points = [t, e])
        : this.moveTo(t, e);
    }
    quadraticCurveTo(t, e, i, r) {
      this._initCurve();
      const n = this.currentPath.points;
      return (
        n.length === 0 && this.moveTo(0, 0), cr.curveTo(t, e, i, r, n), this
      );
    }
    bezierCurveTo(t, e, i, r, n, a) {
      return (
        this._initCurve(),
        dr.curveTo(t, e, i, r, n, a, this.currentPath.points),
        this
      );
    }
    arcTo(t, e, i, r, n) {
      this._initCurve(t, e);
      const a = this.currentPath.points,
        o = an.curveTo(t, e, i, r, n, a);
      if (o) {
        const {
          cx: h,
          cy: l,
          radius: d,
          startAngle: c,
          endAngle: u,
          anticlockwise: p,
        } = o;
        this.arc(h, l, d, c, u, p);
      }
      return this;
    }
    arc(t, e, i, r, n, a = !1) {
      if (r === n) return this;
      if ((!a && n <= r ? (n += Mi) : a && r <= n && (r += Mi), n - r === 0))
        return this;
      const o = t + Math.cos(r) * i,
        h = e + Math.sin(r) * i,
        l = this._geometry.closePointEps;
      let d = this.currentPath ? this.currentPath.points : null;
      if (d) {
        const c = Math.abs(d[d.length - 2] - o),
          u = Math.abs(d[d.length - 1] - h);
        (c < l && u < l) || d.push(o, h);
      } else this.moveTo(o, h), (d = this.currentPath.points);
      return an.arc(o, h, t, e, i, r, n, a, d), this;
    }
    beginFill(t = 0, e) {
      return this.beginTextureFill({ texture: P.WHITE, color: t, alpha: e });
    }
    normalizeColor(t) {
      const e = q.shared.setValue(t.color ?? 0);
      (t.color = e.toNumber()), t.alpha ?? (t.alpha = e.alpha);
    }
    beginTextureFill(t) {
      const e = { texture: P.WHITE, color: 16777215, matrix: null };
      (t = Object.assign(e, t)),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
      const i = t.alpha > 0;
      return (
        i
          ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
            Object.assign(this._fillStyle, { visible: i }, t))
          : this._fillStyle.reset(),
        this
      );
    }
    endFill() {
      return this.finishPoly(), this._fillStyle.reset(), this;
    }
    drawRect(t, e, i, r) {
      return this.drawShape(new H(t, e, i, r));
    }
    drawRoundedRect(t, e, i, r, n) {
      return this.drawShape(new $i(t, e, i, r, n));
    }
    drawCircle(t, e, i) {
      return this.drawShape(new zi(t, e, i));
    }
    drawEllipse(t, e, i, r) {
      return this.drawShape(new Wi(t, e, i, r));
    }
    drawPolygon(...t) {
      let e,
        i = !0;
      const r = t[0];
      r.points
        ? ((i = r.closeStroke), (e = r.points))
        : Array.isArray(t[0])
        ? (e = t[0])
        : (e = t);
      const n = new ue(e);
      return (n.closeStroke = i), this.drawShape(n), this;
    }
    drawShape(t) {
      return (
        this._holeMode
          ? this._geometry.drawHole(t, this._matrix)
          : this._geometry.drawShape(
              t,
              this._fillStyle.clone(),
              this._lineStyle.clone(),
              this._matrix
            ),
        this
      );
    }
    clear() {
      return (
        this._geometry.clear(),
        this._lineStyle.reset(),
        this._fillStyle.reset(),
        this._boundsID++,
        (this._matrix = null),
        (this._holeMode = !1),
        (this.currentPath = null),
        this
      );
    }
    isFastRect() {
      const t = this._geometry.graphicsData;
      return (
        t.length === 1 &&
        t[0].shape.type === ot.RECT &&
        !t[0].matrix &&
        !t[0].holes.length &&
        !(t[0].lineStyle.visible && t[0].lineStyle.width)
      );
    }
    _render(t) {
      this.finishPoly();
      const e = this._geometry;
      e.updateBatches(),
        e.batchable
          ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
            this._renderBatched(t))
          : (t.batch.flush(), this._renderDirect(t));
    }
    _populateBatches() {
      const t = this._geometry,
        e = this.blendMode,
        i = t.batches.length;
      (this.batchTint = -1),
        (this._transformID = -1),
        (this.batchDirty = t.batchDirty),
        (this.batches.length = i),
        (this.vertexData = new Float32Array(t.points));
      for (let r = 0; r < i; r++) {
        const n = t.batches[r],
          a = n.style.color,
          o = new Float32Array(
            this.vertexData.buffer,
            n.attribStart * 4 * 2,
            n.attribSize * 2
          ),
          h = new Float32Array(
            t.uvsFloat32.buffer,
            n.attribStart * 4 * 2,
            n.attribSize * 2
          ),
          l = new Uint16Array(t.indicesUint16.buffer, n.start * 2, n.size),
          d = {
            vertexData: o,
            blendMode: e,
            indices: l,
            uvs: h,
            _batchRGB: q.shared.setValue(a).toRgbArray(),
            _tintRGB: a,
            _texture: n.style.texture,
            alpha: n.style.alpha,
            worldAlpha: 1,
          };
        this.batches[r] = d;
      }
    }
    _renderBatched(t) {
      if (this.batches.length) {
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
          this.calculateVertices(),
          this.calculateTints();
        for (let e = 0, i = this.batches.length; e < i; e++) {
          const r = this.batches[e];
          (r.worldAlpha = this.worldAlpha * r.alpha),
            t.plugins[this.pluginName].render(r);
        }
      }
    }
    _renderDirect(t) {
      const e = this._resolveDirectShader(t),
        i = this._geometry,
        r = this.worldAlpha,
        n = e.uniforms,
        a = i.drawCalls;
      (n.translationMatrix = this.transform.worldTransform),
        q.shared.setValue(this._tintColor).premultiply(r).toArray(n.tint),
        t.shader.bind(e),
        t.geometry.bind(i, e),
        t.state.set(this.state);
      for (let o = 0, h = a.length; o < h; o++)
        this._renderDrawCallDirect(t, i.drawCalls[o]);
    }
    _renderDrawCallDirect(t, e) {
      const { texArray: i, type: r, size: n, start: a } = e,
        o = i.count;
      for (let h = 0; h < o; h++) t.texture.bind(i.elements[h], h);
      t.geometry.draw(r, n, a);
    }
    _resolveDirectShader(t) {
      let e = this.shader;
      const i = this.pluginName;
      if (!e) {
        if (!xs[i]) {
          const { maxTextures: r } = t.plugins[i],
            n = new Int32Array(r);
          for (let h = 0; h < r; h++) n[h] = h;
          const a = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new K(),
              default: bt.from({ uSamplers: n }, !0),
            },
            o = t.plugins[i]._shader.program;
          xs[i] = new Bt(o, a);
        }
        e = xs[i];
      }
      return e;
    }
    _calculateBounds() {
      this.finishPoly();
      const t = this._geometry;
      if (!t.graphicsData.length) return;
      const { minX: e, minY: i, maxX: r, maxY: n } = t.bounds;
      this._bounds.addFrame(this.transform, e, i, r, n);
    }
    containsPoint(t) {
      return (
        this.worldTransform.applyInverse(t, Si._TEMP_POINT),
        this._geometry.containsPoint(Si._TEMP_POINT)
      );
    }
    calculateTints() {
      if (this.batchTint !== this.tint) {
        this.batchTint = this._tintColor.toNumber();
        for (let t = 0; t < this.batches.length; t++) {
          const e = this.batches[t];
          e._tintRGB = q.shared
            .setValue(this._tintColor)
            .multiply(e._batchRGB)
            .toLittleEndianNumber();
        }
      }
    }
    calculateVertices() {
      const t = this.transform._worldID;
      if (this._transformID === t) return;
      this._transformID = t;
      const e = this.transform.worldTransform,
        i = e.a,
        r = e.b,
        n = e.c,
        a = e.d,
        o = e.tx,
        h = e.ty,
        l = this._geometry.points,
        d = this.vertexData;
      let c = 0;
      for (let u = 0; u < l.length; u += 2) {
        const p = l[u],
          f = l[u + 1];
        (d[c++] = i * p + n * f + o), (d[c++] = a * f + r * p + h);
      }
    }
    closePath() {
      const t = this.currentPath;
      return t && ((t.closeStroke = !0), this.finishPoly()), this;
    }
    setMatrix(t) {
      return (this._matrix = t), this;
    }
    beginHole() {
      return this.finishPoly(), (this._holeMode = !0), this;
    }
    endHole() {
      return this.finishPoly(), (this._holeMode = !1), this;
    }
    destroy(t) {
      this._geometry.refCount--,
        this._geometry.refCount === 0 && this._geometry.dispose(),
        (this._matrix = null),
        (this.currentPath = null),
        this._lineStyle.destroy(),
        (this._lineStyle = null),
        this._fillStyle.destroy(),
        (this._fillStyle = null),
        (this._geometry = null),
        (this.shader = null),
        (this.vertexData = null),
        (this.batches.length = 0),
        (this.batches = null),
        super.destroy(t);
    }
  };
(Qs.curves = De), (Qs._TEMP_POINT = new $());
let Aa = Qs;
class Nd {
  constructor(t, e) {
    (this.uvBuffer = t),
      (this.uvMatrix = e),
      (this.data = null),
      (this._bufferUpdateId = -1),
      (this._textureUpdateId = -1),
      (this._updateID = 0);
  }
  update(t) {
    if (
      !t &&
      this._bufferUpdateId === this.uvBuffer._updateID &&
      this._textureUpdateId === this.uvMatrix._updateID
    )
      return;
    (this._bufferUpdateId = this.uvBuffer._updateID),
      (this._textureUpdateId = this.uvMatrix._updateID);
    const e = this.uvBuffer.data;
    (!this.data || this.data.length !== e.length) &&
      (this.data = new Float32Array(e.length)),
      this.uvMatrix.multiplyUvs(e, this.data),
      this._updateID++;
  }
}
const ys = new $(),
  dn = new ue(),
  wa = class Sa extends Tt {
    constructor(t, e, i, r = Pt.TRIANGLES) {
      super(),
        (this.geometry = t),
        (this.shader = e),
        (this.state = i || Ft.for2d()),
        (this.drawMode = r),
        (this.start = 0),
        (this.size = 0),
        (this.uvs = null),
        (this.indices = null),
        (this.vertexData = new Float32Array(1)),
        (this.vertexDirty = -1),
        (this._transformID = -1),
        (this._roundPixels = I.ROUND_PIXELS),
        (this.batchUvs = null);
    }
    get geometry() {
      return this._geometry;
    }
    set geometry(t) {
      this._geometry !== t &&
        (this._geometry &&
          (this._geometry.refCount--,
          this._geometry.refCount === 0 && this._geometry.dispose()),
        (this._geometry = t),
        this._geometry && this._geometry.refCount++,
        (this.vertexDirty = -1));
    }
    get uvBuffer() {
      return this.geometry.buffers[1];
    }
    get verticesBuffer() {
      return this.geometry.buffers[0];
    }
    set material(t) {
      this.shader = t;
    }
    get material() {
      return this.shader;
    }
    set blendMode(t) {
      this.state.blendMode = t;
    }
    get blendMode() {
      return this.state.blendMode;
    }
    set roundPixels(t) {
      this._roundPixels !== t && (this._transformID = -1),
        (this._roundPixels = t);
    }
    get roundPixels() {
      return this._roundPixels;
    }
    get tint() {
      return "tint" in this.shader ? this.shader.tint : null;
    }
    set tint(t) {
      this.shader.tint = t;
    }
    get tintValue() {
      return this.shader.tintValue;
    }
    get texture() {
      return "texture" in this.shader ? this.shader.texture : null;
    }
    set texture(t) {
      this.shader.texture = t;
    }
    _render(t) {
      const e = this.geometry.buffers[0].data;
      this.shader.batchable &&
      this.drawMode === Pt.TRIANGLES &&
      e.length < Sa.BATCHABLE_SIZE * 2
        ? this._renderToBatch(t)
        : this._renderDefault(t);
    }
    _renderDefault(t) {
      const e = this.shader;
      (e.alpha = this.worldAlpha),
        e.update && e.update(),
        t.batch.flush(),
        (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(
          !0
        )),
        t.shader.bind(e),
        t.state.set(this.state),
        t.geometry.bind(this.geometry, e),
        t.geometry.draw(
          this.drawMode,
          this.size,
          this.start,
          this.geometry.instanceCount
        );
    }
    _renderToBatch(t) {
      const e = this.geometry,
        i = this.shader;
      i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()),
        this.calculateVertices(),
        (this.indices = e.indexBuffer.data),
        (this._tintRGB = i._tintRGB),
        (this._texture = i.texture);
      const r = this.material.pluginName;
      t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this);
    }
    calculateVertices() {
      const t = this.geometry.buffers[0],
        e = t.data,
        i = t._updateID;
      if (
        i === this.vertexDirty &&
        this._transformID === this.transform._worldID
      )
        return;
      (this._transformID = this.transform._worldID),
        this.vertexData.length !== e.length &&
          (this.vertexData = new Float32Array(e.length));
      const r = this.transform.worldTransform,
        n = r.a,
        a = r.b,
        o = r.c,
        h = r.d,
        l = r.tx,
        d = r.ty,
        c = this.vertexData;
      for (let u = 0; u < c.length / 2; u++) {
        const p = e[u * 2],
          f = e[u * 2 + 1];
        (c[u * 2] = n * p + o * f + l), (c[u * 2 + 1] = a * p + h * f + d);
      }
      if (this._roundPixels) {
        const u = I.RESOLUTION;
        for (let p = 0; p < c.length; ++p) c[p] = Math.round(c[p] * u) / u;
      }
      this.vertexDirty = i;
    }
    calculateUvs() {
      const t = this.geometry.buffers[1],
        e = this.shader;
      e.uvMatrix.isSimple
        ? (this.uvs = t.data)
        : (this.batchUvs || (this.batchUvs = new Nd(t, e.uvMatrix)),
          this.batchUvs.update(),
          (this.uvs = this.batchUvs.data));
    }
    _calculateBounds() {
      this.calculateVertices(),
        this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
    }
    containsPoint(t) {
      if (!this.getBounds().contains(t.x, t.y)) return !1;
      this.worldTransform.applyInverse(t, ys);
      const e = this.geometry.getBuffer("aVertexPosition").data,
        i = dn.points,
        r = this.geometry.getIndex().data,
        n = r.length,
        a = this.drawMode === 4 ? 3 : 1;
      for (let o = 0; o + 2 < n; o += a) {
        const h = r[o] * 2,
          l = r[o + 1] * 2,
          d = r[o + 2] * 2;
        if (
          ((i[0] = e[h]),
          (i[1] = e[h + 1]),
          (i[2] = e[l]),
          (i[3] = e[l + 1]),
          (i[4] = e[d]),
          (i[5] = e[d + 1]),
          dn.contains(ys.x, ys.y))
        )
          return !0;
      }
      return !1;
    }
    destroy(t) {
      super.destroy(t),
        this._cachedTexture &&
          (this._cachedTexture.destroy(), (this._cachedTexture = null)),
        (this.geometry = null),
        (this.shader = null),
        (this.state = null),
        (this.uvs = null),
        (this.indices = null),
        (this.vertexData = null);
    }
  };
wa.BATCHABLE_SIZE = 100;
let cn = wa;
class Od extends Kt {
  constructor(t, e, i) {
    super();
    const r = new Q(t),
      n = new Q(e, !0),
      a = new Q(i, !0, !0);
    this.addAttribute("aVertexPosition", r, 2, !1, D.FLOAT)
      .addAttribute("aTextureCoord", n, 2, !1, D.FLOAT)
      .addIndex(a),
      (this._updateId = -1);
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var Ud = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
  kd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class un extends Bt {
  constructor(t, e) {
    const i = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: K.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1]),
    };
    (e = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, e)),
      e.uniforms && Object.assign(i, e.uniforms),
      super(e.program || kt.from(kd, Ud), i),
      (this._colorDirty = !1),
      (this.uvMatrix = new Hn(t)),
      (this.batchable = e.program === void 0),
      (this.pluginName = e.pluginName),
      (this._tintColor = new q(e.tint)),
      (this._tintRGB = this._tintColor.toLittleEndianNumber()),
      (this._colorDirty = !0),
      (this.alpha = e.alpha);
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    this.uniforms.uSampler !== t &&
      (!this.uniforms.uSampler.baseTexture.alphaMode !=
        !t.baseTexture.alphaMode && (this._colorDirty = !0),
      (this.uniforms.uSampler = t),
      (this.uvMatrix.texture = t));
  }
  set alpha(t) {
    t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
  }
  get alpha() {
    return this._alpha;
  }
  set tint(t) {
    t !== this.tint &&
      (this._tintColor.setValue(t),
      (this._tintRGB = this._tintColor.toLittleEndianNumber()),
      (this._colorDirty = !0));
  }
  get tint() {
    return this._tintColor.value;
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = !1;
      const t = this.texture.baseTexture.alphaMode;
      q.shared
        .setValue(this._tintColor)
        .premultiply(this._alpha, t)
        .toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() &&
      (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class pn {
  constructor(t, e, i) {
    (this.geometry = new Kt()),
      (this.indexBuffer = null),
      (this.size = i),
      (this.dynamicProperties = []),
      (this.staticProperties = []);
    for (let r = 0; r < t.length; ++r) {
      let n = t[r];
      (n = {
        attributeName: n.attributeName,
        size: n.size,
        uploadFunction: n.uploadFunction,
        type: n.type || D.FLOAT,
        offset: n.offset,
      }),
        e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
    }
    (this.staticStride = 0),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      (this.dynamicStride = 0),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this._updateID = 0),
      this.initBuffers();
  }
  initBuffers() {
    const t = this.geometry;
    let e = 0;
    (this.indexBuffer = new Q(lo(this.size), !0, !0)),
      t.addIndex(this.indexBuffer),
      (this.dynamicStride = 0);
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      (o.offset = e), (e += o.size), (this.dynamicStride += o.size);
    }
    const i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    (this.dynamicData = new Float32Array(i)),
      (this.dynamicDataUint32 = new Uint32Array(i)),
      (this.dynamicBuffer = new Q(this.dynamicData, !1, !1));
    let r = 0;
    this.staticStride = 0;
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      (o.offset = r), (r += o.size), (this.staticStride += o.size);
    }
    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    (this.staticData = new Float32Array(n)),
      (this.staticDataUint32 = new Uint32Array(n)),
      (this.staticBuffer = new Q(this.staticData, !0, !1));
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      t.addAttribute(
        o.attributeName,
        this.dynamicBuffer,
        0,
        o.type === D.UNSIGNED_BYTE,
        o.type,
        this.dynamicStride * 4,
        o.offset * 4
      );
    }
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      t.addAttribute(
        o.attributeName,
        this.staticBuffer,
        0,
        o.type === D.UNSIGNED_BYTE,
        o.type,
        this.staticStride * 4,
        o.offset * 4
      );
    }
  }
  uploadDynamic(t, e, i) {
    for (let r = 0; r < this.dynamicProperties.length; r++) {
      const n = this.dynamicProperties[r];
      n.uploadFunction(
        t,
        e,
        i,
        n.type === D.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
        this.dynamicStride,
        n.offset
      );
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(t, e, i) {
    for (let r = 0; r < this.staticProperties.length; r++) {
      const n = this.staticProperties[r];
      n.uploadFunction(
        t,
        e,
        i,
        n.type === D.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
        this.staticStride,
        n.offset
      );
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    (this.indexBuffer = null),
      (this.dynamicProperties = null),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this.staticProperties = null),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      this.geometry.destroy();
  }
}
var Gd = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
  Hd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class Ca extends ji {
  constructor(t) {
    super(t),
      (this.shader = null),
      (this.properties = null),
      (this.tempMatrix = new K()),
      (this.properties = [
        {
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: this.uploadVertices,
          offset: 0,
        },
        {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: this.uploadPosition,
          offset: 0,
        },
        {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: this.uploadRotation,
          offset: 0,
        },
        {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: this.uploadUvs,
          offset: 0,
        },
        {
          attributeName: "aColor",
          size: 1,
          type: D.UNSIGNED_BYTE,
          uploadFunction: this.uploadTint,
          offset: 0,
        },
      ]),
      (this.shader = Bt.from(Hd, Gd, {})),
      (this.state = Ft.for2d());
  }
  render(t) {
    const e = t.children,
      i = t._maxSize,
      r = t._batchSize,
      n = this.renderer;
    let a = e.length;
    if (a === 0) return;
    a > i && !t.autoResize && (a = i);
    let o = t._buffers;
    o || (o = t._buffers = this.generateBuffers(t));
    const h = e[0]._texture.baseTexture,
      l = h.alphaMode > 0;
    (this.state.blendMode = An(t.blendMode, l)), n.state.set(this.state);
    const d = n.gl,
      c = t.worldTransform.copyTo(this.tempMatrix);
    c.prepend(n.globalUniforms.uniforms.projectionMatrix),
      (this.shader.uniforms.translationMatrix = c.toArray(!0)),
      (this.shader.uniforms.uColor = q.shared
        .setValue(t.tintRgb)
        .premultiply(t.worldAlpha, l)
        .toArray(this.shader.uniforms.uColor)),
      (this.shader.uniforms.uSampler = h),
      this.renderer.shader.bind(this.shader);
    let u = !1;
    for (let p = 0, f = 0; p < a; p += r, f += 1) {
      let m = a - p;
      m > r && (m = r), f >= o.length && o.push(this._generateOneMoreBuffer(t));
      const g = o[f];
      g.uploadDynamic(e, p, m);
      const _ = t._bufferUpdateIDs[f] || 0;
      (u = u || g._updateID < _),
        u && ((g._updateID = t._updateID), g.uploadStatic(e, p, m)),
        n.geometry.bind(g.geometry),
        d.drawElements(d.TRIANGLES, m * 6, d.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(t) {
    const e = [],
      i = t._maxSize,
      r = t._batchSize,
      n = t._properties;
    for (let a = 0; a < i; a += r) e.push(new pn(this.properties, n, r));
    return e;
  }
  _generateOneMoreBuffer(t) {
    const e = t._batchSize,
      i = t._properties;
    return new pn(this.properties, i, e);
  }
  uploadVertices(t, e, i, r, n, a) {
    let o = 0,
      h = 0,
      l = 0,
      d = 0;
    for (let c = 0; c < i; ++c) {
      const u = t[e + c],
        p = u._texture,
        f = u.scale.x,
        m = u.scale.y,
        g = p.trim,
        _ = p.orig;
      g
        ? ((h = g.x - u.anchor.x * _.width),
          (o = h + g.width),
          (d = g.y - u.anchor.y * _.height),
          (l = d + g.height))
        : ((o = _.width * (1 - u.anchor.x)),
          (h = _.width * -u.anchor.x),
          (l = _.height * (1 - u.anchor.y)),
          (d = _.height * -u.anchor.y)),
        (r[a] = h * f),
        (r[a + 1] = d * m),
        (r[a + n] = o * f),
        (r[a + n + 1] = d * m),
        (r[a + n * 2] = o * f),
        (r[a + n * 2 + 1] = l * m),
        (r[a + n * 3] = h * f),
        (r[a + n * 3 + 1] = l * m),
        (a += n * 4);
    }
  }
  uploadPosition(t, e, i, r, n, a) {
    for (let o = 0; o < i; o++) {
      const h = t[e + o].position;
      (r[a] = h.x),
        (r[a + 1] = h.y),
        (r[a + n] = h.x),
        (r[a + n + 1] = h.y),
        (r[a + n * 2] = h.x),
        (r[a + n * 2 + 1] = h.y),
        (r[a + n * 3] = h.x),
        (r[a + n * 3 + 1] = h.y),
        (a += n * 4);
    }
  }
  uploadRotation(t, e, i, r, n, a) {
    for (let o = 0; o < i; o++) {
      const h = t[e + o].rotation;
      (r[a] = h),
        (r[a + n] = h),
        (r[a + n * 2] = h),
        (r[a + n * 3] = h),
        (a += n * 4);
    }
  }
  uploadUvs(t, e, i, r, n, a) {
    for (let o = 0; o < i; ++o) {
      const h = t[e + o]._texture._uvs;
      h
        ? ((r[a] = h.x0),
          (r[a + 1] = h.y0),
          (r[a + n] = h.x1),
          (r[a + n + 1] = h.y1),
          (r[a + n * 2] = h.x2),
          (r[a + n * 2 + 1] = h.y2),
          (r[a + n * 3] = h.x3),
          (r[a + n * 3 + 1] = h.y3),
          (a += n * 4))
        : ((r[a] = 0),
          (r[a + 1] = 0),
          (r[a + n] = 0),
          (r[a + n + 1] = 0),
          (r[a + n * 2] = 0),
          (r[a + n * 2 + 1] = 0),
          (r[a + n * 3] = 0),
          (r[a + n * 3 + 1] = 0),
          (a += n * 4));
    }
  }
  uploadTint(t, e, i, r, n, a) {
    for (let o = 0; o < i; ++o) {
      const h = t[e + o],
        l = q.shared
          .setValue(h._tintRGB)
          .toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
      (r[a] = l),
        (r[a + n] = l),
        (r[a + n * 2] = l),
        (r[a + n * 3] = l),
        (a += n * 4);
    }
  }
  destroy() {
    super.destroy(),
      this.shader && (this.shader.destroy(), (this.shader = null)),
      (this.tempMatrix = null);
  }
}
Ca.extension = { name: "particle", type: A.RendererPlugin };
M.add(Ca);
var Zi = ((s) => (
  (s[(s.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
  (s[(s.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"),
  s
))(Zi || {});
const xi = { willReadFrequently: !0 },
  Ct = class B {
    static get experimentalLetterSpacingSupported() {
      let t = B._experimentalLetterSpacingSupported;
      if (t !== void 0) {
        const e = I.ADAPTER.getCanvasRenderingContext2D().prototype;
        t = B._experimentalLetterSpacingSupported =
          "letterSpacing" in e || "textLetterSpacing" in e;
      }
      return t;
    }
    constructor(t, e, i, r, n, a, o, h, l) {
      (this.text = t),
        (this.style = e),
        (this.width = i),
        (this.height = r),
        (this.lines = n),
        (this.lineWidths = a),
        (this.lineHeight = o),
        (this.maxLineWidth = h),
        (this.fontProperties = l);
    }
    static measureText(t, e, i, r = B._canvas) {
      i = i ?? e.wordWrap;
      const n = e.toFontString(),
        a = B.measureFont(n);
      a.fontSize === 0 && ((a.fontSize = e.fontSize), (a.ascent = e.fontSize));
      const o = r.getContext("2d", xi);
      o.font = n;
      const h = (i ? B.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/),
        l = new Array(h.length);
      let d = 0;
      for (let f = 0; f < h.length; f++) {
        const m = B._measureText(h[f], e.letterSpacing, o);
        (l[f] = m), (d = Math.max(d, m));
      }
      let c = d + e.strokeThickness;
      e.dropShadow && (c += e.dropShadowDistance);
      const u = e.lineHeight || a.fontSize + e.strokeThickness;
      let p =
        Math.max(u, a.fontSize + e.strokeThickness * 2) +
        e.leading +
        (h.length - 1) * (u + e.leading);
      return (
        e.dropShadow && (p += e.dropShadowDistance),
        new B(t, e, c, p, h, l, u + e.leading, d, a)
      );
    }
    static _measureText(t, e, i) {
      let r = !1;
      B.experimentalLetterSpacingSupported &&
        (B.experimentalLetterSpacing
          ? ((i.letterSpacing = `${e}px`),
            (i.textLetterSpacing = `${e}px`),
            (r = !0))
          : ((i.letterSpacing = "0px"), (i.textLetterSpacing = "0px")));
      let n = i.measureText(t).width;
      return (
        n > 0 &&
          (r ? (n -= e) : (n += (B.graphemeSegmenter(t).length - 1) * e)),
        n
      );
    }
    static wordWrap(t, e, i = B._canvas) {
      const r = i.getContext("2d", xi);
      let n = 0,
        a = "",
        o = "";
      const h = Object.create(null),
        { letterSpacing: l, whiteSpace: d } = e,
        c = B.collapseSpaces(d),
        u = B.collapseNewlines(d);
      let p = !c;
      const f = e.wordWrapWidth + l,
        m = B.tokenize(t);
      for (let g = 0; g < m.length; g++) {
        let _ = m[g];
        if (B.isNewline(_)) {
          if (!u) {
            (o += B.addLine(a)), (p = !c), (a = ""), (n = 0);
            continue;
          }
          _ = " ";
        }
        if (c) {
          const x = B.isBreakingSpace(_),
            y = B.isBreakingSpace(a[a.length - 1]);
          if (x && y) continue;
        }
        const b = B.getFromCache(_, l, h, r);
        if (b > f)
          if (
            (a !== "" && ((o += B.addLine(a)), (a = ""), (n = 0)),
            B.canBreakWords(_, e.breakWords))
          ) {
            const x = B.wordWrapSplit(_);
            for (let y = 0; y < x.length; y++) {
              let R = x[y],
                O = R,
                E = 1;
              for (; x[y + E]; ) {
                const N = x[y + E];
                if (!B.canBreakChars(O, N, _, y, e.breakWords)) R += N;
                else break;
                (O = N), E++;
              }
              y += E - 1;
              const w = B.getFromCache(R, l, h, r);
              w + n > f && ((o += B.addLine(a)), (p = !1), (a = ""), (n = 0)),
                (a += R),
                (n += w);
            }
          } else {
            a.length > 0 && ((o += B.addLine(a)), (a = ""), (n = 0));
            const x = g === m.length - 1;
            (o += B.addLine(_, !x)), (p = !1), (a = ""), (n = 0);
          }
        else
          b + n > f && ((p = !1), (o += B.addLine(a)), (a = ""), (n = 0)),
            (a.length > 0 || !B.isBreakingSpace(_) || p) &&
              ((a += _), (n += b));
      }
      return (o += B.addLine(a, !1)), o;
    }
    static addLine(t, e = !0) {
      return (
        (t = B.trimRight(t)),
        (t = e
          ? `${t}
`
          : t),
        t
      );
    }
    static getFromCache(t, e, i, r) {
      let n = i[t];
      return (
        typeof n != "number" && ((n = B._measureText(t, e, r) + e), (i[t] = n)),
        n
      );
    }
    static collapseSpaces(t) {
      return t === "normal" || t === "pre-line";
    }
    static collapseNewlines(t) {
      return t === "normal";
    }
    static trimRight(t) {
      if (typeof t != "string") return "";
      for (let e = t.length - 1; e >= 0; e--) {
        const i = t[e];
        if (!B.isBreakingSpace(i)) break;
        t = t.slice(0, -1);
      }
      return t;
    }
    static isNewline(t) {
      return typeof t != "string" ? !1 : B._newlines.includes(t.charCodeAt(0));
    }
    static isBreakingSpace(t, e) {
      return typeof t != "string"
        ? !1
        : B._breakingSpaces.includes(t.charCodeAt(0));
    }
    static tokenize(t) {
      const e = [];
      let i = "";
      if (typeof t != "string") return e;
      for (let r = 0; r < t.length; r++) {
        const n = t[r],
          a = t[r + 1];
        if (B.isBreakingSpace(n, a) || B.isNewline(n)) {
          i !== "" && (e.push(i), (i = "")), e.push(n);
          continue;
        }
        i += n;
      }
      return i !== "" && e.push(i), e;
    }
    static canBreakWords(t, e) {
      return e;
    }
    static canBreakChars(t, e, i, r, n) {
      return !0;
    }
    static wordWrapSplit(t) {
      return B.graphemeSegmenter(t);
    }
    static measureFont(t) {
      if (B._fonts[t]) return B._fonts[t];
      const e = { ascent: 0, descent: 0, fontSize: 0 },
        i = B._canvas,
        r = B._context;
      r.font = t;
      const n = B.METRICS_STRING + B.BASELINE_SYMBOL,
        a = Math.ceil(r.measureText(n).width);
      let o = Math.ceil(r.measureText(B.BASELINE_SYMBOL).width);
      const h = Math.ceil(B.HEIGHT_MULTIPLIER * o);
      if (((o = (o * B.BASELINE_MULTIPLIER) | 0), a === 0 || h === 0))
        return (B._fonts[t] = e), e;
      (i.width = a),
        (i.height = h),
        (r.fillStyle = "#f00"),
        r.fillRect(0, 0, a, h),
        (r.font = t),
        (r.textBaseline = "alphabetic"),
        (r.fillStyle = "#000"),
        r.fillText(n, 0, o);
      const l = r.getImageData(0, 0, a, h).data,
        d = l.length,
        c = a * 4;
      let u = 0,
        p = 0,
        f = !1;
      for (u = 0; u < o; ++u) {
        for (let m = 0; m < c; m += 4)
          if (l[p + m] !== 255) {
            f = !0;
            break;
          }
        if (!f) p += c;
        else break;
      }
      for (e.ascent = o - u, p = d - c, f = !1, u = h; u > o; --u) {
        for (let m = 0; m < c; m += 4)
          if (l[p + m] !== 255) {
            f = !0;
            break;
          }
        if (!f) p -= c;
        else break;
      }
      return (
        (e.descent = u - o),
        (e.fontSize = e.ascent + e.descent),
        (B._fonts[t] = e),
        e
      );
    }
    static clearMetrics(t = "") {
      t ? delete B._fonts[t] : (B._fonts = {});
    }
    static get _canvas() {
      var t;
      if (!B.__canvas) {
        let e;
        try {
          const i = new OffscreenCanvas(0, 0);
          if ((t = i.getContext("2d", xi)) != null && t.measureText)
            return (B.__canvas = i), i;
          e = I.ADAPTER.createCanvas();
        } catch {
          e = I.ADAPTER.createCanvas();
        }
        (e.width = e.height = 10), (B.__canvas = e);
      }
      return B.__canvas;
    }
    static get _context() {
      return (
        B.__context || (B.__context = B._canvas.getContext("2d", xi)),
        B.__context
      );
    }
  };
(Ct.METRICS_STRING = "|ÉqÅ"),
  (Ct.BASELINE_SYMBOL = "M"),
  (Ct.BASELINE_MULTIPLIER = 1.4),
  (Ct.HEIGHT_MULTIPLIER = 2),
  (Ct.graphemeSegmenter = (() => {
    if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
      const s = new Intl.Segmenter();
      return (t) => [...s.segment(t)].map((e) => e.segment);
    }
    return (s) => [...s];
  })()),
  (Ct.experimentalLetterSpacing = !1),
  (Ct._fonts = {}),
  (Ct._newlines = [10, 13]),
  (Ct._breakingSpaces = [
    9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
    12288,
  ]);
let Wt = Ct;
const Xd = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
  ],
  Ia = class We {
    constructor(t) {
      (this.styleID = 0), this.reset(), bs(this, t, t);
    }
    clone() {
      const t = {};
      return bs(t, this, We.defaultStyle), new We(t);
    }
    reset() {
      bs(this, We.defaultStyle, We.defaultStyle);
    }
    get align() {
      return this._align;
    }
    set align(t) {
      this._align !== t && ((this._align = t), this.styleID++);
    }
    get breakWords() {
      return this._breakWords;
    }
    set breakWords(t) {
      this._breakWords !== t && ((this._breakWords = t), this.styleID++);
    }
    get dropShadow() {
      return this._dropShadow;
    }
    set dropShadow(t) {
      this._dropShadow !== t && ((this._dropShadow = t), this.styleID++);
    }
    get dropShadowAlpha() {
      return this._dropShadowAlpha;
    }
    set dropShadowAlpha(t) {
      this._dropShadowAlpha !== t &&
        ((this._dropShadowAlpha = t), this.styleID++);
    }
    get dropShadowAngle() {
      return this._dropShadowAngle;
    }
    set dropShadowAngle(t) {
      this._dropShadowAngle !== t &&
        ((this._dropShadowAngle = t), this.styleID++);
    }
    get dropShadowBlur() {
      return this._dropShadowBlur;
    }
    set dropShadowBlur(t) {
      this._dropShadowBlur !== t &&
        ((this._dropShadowBlur = t), this.styleID++);
    }
    get dropShadowColor() {
      return this._dropShadowColor;
    }
    set dropShadowColor(t) {
      const e = vs(t);
      this._dropShadowColor !== e &&
        ((this._dropShadowColor = e), this.styleID++);
    }
    get dropShadowDistance() {
      return this._dropShadowDistance;
    }
    set dropShadowDistance(t) {
      this._dropShadowDistance !== t &&
        ((this._dropShadowDistance = t), this.styleID++);
    }
    get fill() {
      return this._fill;
    }
    set fill(t) {
      const e = vs(t);
      this._fill !== e && ((this._fill = e), this.styleID++);
    }
    get fillGradientType() {
      return this._fillGradientType;
    }
    set fillGradientType(t) {
      this._fillGradientType !== t &&
        ((this._fillGradientType = t), this.styleID++);
    }
    get fillGradientStops() {
      return this._fillGradientStops;
    }
    set fillGradientStops(t) {
      Vd(this._fillGradientStops, t) ||
        ((this._fillGradientStops = t), this.styleID++);
    }
    get fontFamily() {
      return this._fontFamily;
    }
    set fontFamily(t) {
      this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
    }
    get fontSize() {
      return this._fontSize;
    }
    set fontSize(t) {
      this._fontSize !== t && ((this._fontSize = t), this.styleID++);
    }
    get fontStyle() {
      return this._fontStyle;
    }
    set fontStyle(t) {
      this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
    }
    get fontVariant() {
      return this._fontVariant;
    }
    set fontVariant(t) {
      this._fontVariant !== t && ((this._fontVariant = t), this.styleID++);
    }
    get fontWeight() {
      return this._fontWeight;
    }
    set fontWeight(t) {
      this._fontWeight !== t && ((this._fontWeight = t), this.styleID++);
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(t) {
      this._letterSpacing !== t && ((this._letterSpacing = t), this.styleID++);
    }
    get lineHeight() {
      return this._lineHeight;
    }
    set lineHeight(t) {
      this._lineHeight !== t && ((this._lineHeight = t), this.styleID++);
    }
    get leading() {
      return this._leading;
    }
    set leading(t) {
      this._leading !== t && ((this._leading = t), this.styleID++);
    }
    get lineJoin() {
      return this._lineJoin;
    }
    set lineJoin(t) {
      this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
    }
    get miterLimit() {
      return this._miterLimit;
    }
    set miterLimit(t) {
      this._miterLimit !== t && ((this._miterLimit = t), this.styleID++);
    }
    get padding() {
      return this._padding;
    }
    set padding(t) {
      this._padding !== t && ((this._padding = t), this.styleID++);
    }
    get stroke() {
      return this._stroke;
    }
    set stroke(t) {
      const e = vs(t);
      this._stroke !== e && ((this._stroke = e), this.styleID++);
    }
    get strokeThickness() {
      return this._strokeThickness;
    }
    set strokeThickness(t) {
      this._strokeThickness !== t &&
        ((this._strokeThickness = t), this.styleID++);
    }
    get textBaseline() {
      return this._textBaseline;
    }
    set textBaseline(t) {
      this._textBaseline !== t && ((this._textBaseline = t), this.styleID++);
    }
    get trim() {
      return this._trim;
    }
    set trim(t) {
      this._trim !== t && ((this._trim = t), this.styleID++);
    }
    get whiteSpace() {
      return this._whiteSpace;
    }
    set whiteSpace(t) {
      this._whiteSpace !== t && ((this._whiteSpace = t), this.styleID++);
    }
    get wordWrap() {
      return this._wordWrap;
    }
    set wordWrap(t) {
      this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
    }
    get wordWrapWidth() {
      return this._wordWrapWidth;
    }
    set wordWrapWidth(t) {
      this._wordWrapWidth !== t && ((this._wordWrapWidth = t), this.styleID++);
    }
    toFontString() {
      const t =
        typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
      let e = this.fontFamily;
      Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
      for (let i = e.length - 1; i >= 0; i--) {
        let r = e[i].trim();
        !/([\"\'])[^\'\"]+\1/.test(r) && !Xd.includes(r) && (r = `"${r}"`),
          (e[i] = r);
      }
      return `${this.fontStyle} ${this.fontVariant} ${
        this.fontWeight
      } ${t} ${e.join(",")}`;
    }
  };
Ia.defaultStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: Zi.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100,
};
let Zt = Ia;
function vs(s) {
  const t = q.shared,
    e = (i) => {
      const r = t.setValue(i);
      return r.alpha === 1 ? r.toHex() : r.toRgbaString();
    };
  return Array.isArray(s) ? s.map(e) : e(s);
}
function Vd(s, t) {
  if (!Array.isArray(s) || !Array.isArray(t) || s.length !== t.length)
    return !1;
  for (let e = 0; e < s.length; ++e) if (s[e] !== t[e]) return !1;
  return !0;
}
function bs(s, t, e) {
  for (const i in e)
    Array.isArray(t[i]) ? (s[i] = t[i].slice()) : (s[i] = t[i]);
}
const zd = { texture: !0, children: !1, baseTexture: !0 },
  Ra = class tr extends Yi {
    constructor(t, e, i) {
      let r = !1;
      i || ((i = I.ADAPTER.createCanvas()), (r = !0)),
        (i.width = 3),
        (i.height = 3);
      const n = P.from(i);
      (n.orig = new H()),
        (n.trim = new H()),
        super(n),
        (this._ownCanvas = r),
        (this.canvas = i),
        (this.context = i.getContext("2d", { willReadFrequently: !0 })),
        (this._resolution = tr.defaultResolution ?? I.RESOLUTION),
        (this._autoResolution = tr.defaultAutoResolution),
        (this._text = null),
        (this._style = null),
        (this._styleListener = null),
        (this._font = ""),
        (this.text = t),
        (this.style = e),
        (this.localStyleID = -1);
    }
    static get experimentalLetterSpacing() {
      return Wt.experimentalLetterSpacing;
    }
    static set experimentalLetterSpacing(t) {
      z(
        "7.1.0",
        "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"
      ),
        (Wt.experimentalLetterSpacing = t);
    }
    updateText(t) {
      const e = this._style;
      if (
        (this.localStyleID !== e.styleID &&
          ((this.dirty = !0), (this.localStyleID = e.styleID)),
        !this.dirty && t)
      )
        return;
      this._font = this._style.toFontString();
      const i = this.context,
        r = Wt.measureText(
          this._text || " ",
          this._style,
          this._style.wordWrap,
          this.canvas
        ),
        n = r.width,
        a = r.height,
        o = r.lines,
        h = r.lineHeight,
        l = r.lineWidths,
        d = r.maxLineWidth,
        c = r.fontProperties;
      (this.canvas.width = Math.ceil(
        Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution
      )),
        (this.canvas.height = Math.ceil(
          Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution
        )),
        i.scale(this._resolution, this._resolution),
        i.clearRect(0, 0, this.canvas.width, this.canvas.height),
        (i.font = this._font),
        (i.lineWidth = e.strokeThickness),
        (i.textBaseline = e.textBaseline),
        (i.lineJoin = e.lineJoin),
        (i.miterLimit = e.miterLimit);
      let u, p;
      const f = e.dropShadow ? 2 : 1;
      for (let m = 0; m < f; ++m) {
        const g = e.dropShadow && m === 0,
          _ = g ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0,
          b = _ * this._resolution;
        if (g) {
          (i.fillStyle = "black"), (i.strokeStyle = "black");
          const y = e.dropShadowColor,
            R = e.dropShadowBlur * this._resolution,
            O = e.dropShadowDistance * this._resolution;
          (i.shadowColor = q.shared
            .setValue(y)
            .setAlpha(e.dropShadowAlpha)
            .toRgbaString()),
            (i.shadowBlur = R),
            (i.shadowOffsetX = Math.cos(e.dropShadowAngle) * O),
            (i.shadowOffsetY = Math.sin(e.dropShadowAngle) * O + b);
        } else
          (i.fillStyle = this._generateFillStyle(e, o, r)),
            (i.strokeStyle = e.stroke),
            (i.shadowColor = "black"),
            (i.shadowBlur = 0),
            (i.shadowOffsetX = 0),
            (i.shadowOffsetY = 0);
        let x = (h - c.fontSize) / 2;
        h - c.fontSize < 0 && (x = 0);
        for (let y = 0; y < o.length; y++)
          (u = e.strokeThickness / 2),
            (p = e.strokeThickness / 2 + y * h + c.ascent + x),
            e.align === "right"
              ? (u += d - l[y])
              : e.align === "center" && (u += (d - l[y]) / 2),
            e.stroke &&
              e.strokeThickness &&
              this.drawLetterSpacing(
                o[y],
                u + e.padding,
                p + e.padding - _,
                !0
              ),
            e.fill &&
              this.drawLetterSpacing(o[y], u + e.padding, p + e.padding - _);
      }
      this.updateTexture();
    }
    drawLetterSpacing(t, e, i, r = !1) {
      const n = this._style.letterSpacing;
      let a = !1;
      if (
        (Wt.experimentalLetterSpacingSupported &&
          (Wt.experimentalLetterSpacing
            ? ((this.context.letterSpacing = `${n}px`),
              (this.context.textLetterSpacing = `${n}px`),
              (a = !0))
            : ((this.context.letterSpacing = "0px"),
              (this.context.textLetterSpacing = "0px"))),
        n === 0 || a)
      ) {
        r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i);
        return;
      }
      let o = e;
      const h = Wt.graphemeSegmenter(t);
      let l = this.context.measureText(t).width,
        d = 0;
      for (let c = 0; c < h.length; ++c) {
        const u = h[c];
        r ? this.context.strokeText(u, o, i) : this.context.fillText(u, o, i);
        let p = "";
        for (let f = c + 1; f < h.length; ++f) p += h[f];
        (d = this.context.measureText(p).width), (o += l - d + n), (l = d);
      }
    }
    updateTexture() {
      const t = this.canvas;
      if (this._style.trim) {
        const a = fo(t);
        a.data &&
          ((t.width = a.width),
          (t.height = a.height),
          this.context.putImageData(a.data, 0, 0));
      }
      const e = this._texture,
        i = this._style,
        r = i.trim ? 0 : i.padding,
        n = e.baseTexture;
      (e.trim.width = e._frame.width = t.width / this._resolution),
        (e.trim.height = e._frame.height = t.height / this._resolution),
        (e.trim.x = -r),
        (e.trim.y = -r),
        (e.orig.width = e._frame.width - r * 2),
        (e.orig.height = e._frame.height - r * 2),
        this._onTextureUpdate(),
        n.setRealSize(t.width, t.height, this._resolution),
        e.updateUvs(),
        (this.dirty = !1);
    }
    _render(t) {
      this._autoResolution &&
        this._resolution !== t.resolution &&
        ((this._resolution = t.resolution), (this.dirty = !0)),
        this.updateText(!0),
        super._render(t);
    }
    updateTransform() {
      this.updateText(!0), super.updateTransform();
    }
    getBounds(t, e) {
      return (
        this.updateText(!0),
        this._textureID === -1 && (t = !1),
        super.getBounds(t, e)
      );
    }
    getLocalBounds(t) {
      return this.updateText(!0), super.getLocalBounds.call(this, t);
    }
    _calculateBounds() {
      this.calculateVertices(), this._bounds.addQuad(this.vertexData);
    }
    _generateFillStyle(t, e, i) {
      const r = t.fill;
      if (Array.isArray(r)) {
        if (r.length === 1) return r[0];
      } else return r;
      let n;
      const a = t.dropShadow ? t.dropShadowDistance : 0,
        o = t.padding || 0,
        h = this.canvas.width / this._resolution - a - o * 2,
        l = this.canvas.height / this._resolution - a - o * 2,
        d = r.slice(),
        c = t.fillGradientStops.slice();
      if (!c.length) {
        const u = d.length + 1;
        for (let p = 1; p < u; ++p) c.push(p / u);
      }
      if (
        (d.unshift(r[0]),
        c.unshift(0),
        d.push(r[r.length - 1]),
        c.push(1),
        t.fillGradientType === Zi.LINEAR_VERTICAL)
      ) {
        n = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
        const u = i.fontProperties.fontSize + t.strokeThickness;
        for (let p = 0; p < e.length; p++) {
          const f = i.lineHeight * (p - 1) + u,
            m = i.lineHeight * p;
          let g = m;
          p > 0 && f > m && (g = (m + f) / 2);
          const _ = m + u,
            b = i.lineHeight * (p + 1);
          let x = _;
          p + 1 < e.length && b < _ && (x = (_ + b) / 2);
          const y = (x - g) / l;
          for (let R = 0; R < d.length; R++) {
            let O = 0;
            typeof c[R] == "number" ? (O = c[R]) : (O = R / d.length);
            let E = Math.min(1, Math.max(0, g / l + O * y));
            (E = Number(E.toFixed(5))), n.addColorStop(E, d[R]);
          }
        }
      } else {
        n = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
        const u = d.length + 1;
        let p = 1;
        for (let f = 0; f < d.length; f++) {
          let m;
          typeof c[f] == "number" ? (m = c[f]) : (m = p / u),
            n.addColorStop(m, d[f]),
            p++;
        }
      }
      return n;
    }
    destroy(t) {
      typeof t == "boolean" && (t = { children: t }),
        (t = Object.assign({}, zd, t)),
        super.destroy(t),
        this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
        (this.context = null),
        (this.canvas = null),
        (this._style = null);
    }
    get width() {
      return (
        this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
      );
    }
    set width(t) {
      this.updateText(!0);
      const e = jt(this.scale.x) || 1;
      (this.scale.x = (e * t) / this._texture.orig.width), (this._width = t);
    }
    get height() {
      return (
        this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
      );
    }
    set height(t) {
      this.updateText(!0);
      const e = jt(this.scale.y) || 1;
      (this.scale.y = (e * t) / this._texture.orig.height), (this._height = t);
    }
    get style() {
      return this._style;
    }
    set style(t) {
      (t = t || {}),
        t instanceof Zt ? (this._style = t) : (this._style = new Zt(t)),
        (this.localStyleID = -1),
        (this.dirty = !0);
    }
    get text() {
      return this._text;
    }
    set text(t) {
      (t = String(t ?? "")),
        this._text !== t && ((this._text = t), (this.dirty = !0));
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      (this._autoResolution = !1),
        this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
    }
  };
Ra.defaultAutoResolution = !0;
let Pa = Ra;
class Wd {
  constructor(t) {
    (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function $d(s, t) {
  var i;
  let e = !1;
  if ((i = s == null ? void 0 : s._textures) != null && i.length) {
    for (let r = 0; r < s._textures.length; r++)
      if (s._textures[r] instanceof P) {
        const n = s._textures[r].baseTexture;
        t.includes(n) || (t.push(n), (e = !0));
      }
  }
  return e;
}
function jd(s, t) {
  if (s.baseTexture instanceof k) {
    const e = s.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function Yd(s, t) {
  if (s._texture && s._texture instanceof P) {
    const e = s._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function qd(s, t) {
  return t instanceof Pa ? (t.updateText(!0), !0) : !1;
}
function Kd(s, t) {
  if (t instanceof Zt) {
    const e = t.toFontString();
    return Wt.measureFont(e), !0;
  }
  return !1;
}
function Zd(s, t) {
  if (s instanceof Pa) {
    t.includes(s.style) || t.push(s.style), t.includes(s) || t.push(s);
    const e = s._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function Jd(s, t) {
  return s instanceof Zt ? (t.includes(s) || t.push(s), !0) : !1;
}
const Ma = class Ba {
  constructor(t) {
    (this.limiter = new Wd(Ba.uploadsPerFrame)),
      (this.renderer = t),
      (this.uploadHookHelper = null),
      (this.queue = []),
      (this.addHooks = []),
      (this.uploadHooks = []),
      (this.completes = []),
      (this.ticking = !1),
      (this.delayedTick = () => {
        this.queue && this.prepareItems();
      }),
      this.registerFindHook(Zd),
      this.registerFindHook(Jd),
      this.registerFindHook($d),
      this.registerFindHook(jd),
      this.registerFindHook(Yd),
      this.registerUploadHook(qd),
      this.registerUploadHook(Kd);
  }
  upload(t) {
    return new Promise((e) => {
      t && this.add(t),
        this.queue.length
          ? (this.completes.push(e),
            this.ticking ||
              ((this.ticking = !0),
              ct.system.addOnce(this.tick, this, me.UTILITY)))
          : e();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (
      this.limiter.beginFrame();
      this.queue.length && this.limiter.allowedToUpload();

    ) {
      const t = this.queue[0];
      let e = !1;
      if (t && !t._destroyed) {
        for (let i = 0, r = this.uploadHooks.length; i < r; i++)
          if (this.uploadHooks[i](this.uploadHookHelper, t)) {
            this.queue.shift(), (e = !0);
            break;
          }
      }
      e || this.queue.shift();
    }
    if (this.queue.length) ct.system.addOnce(this.tick, this, me.UTILITY);
    else {
      this.ticking = !1;
      const t = this.completes.slice(0);
      this.completes.length = 0;
      for (let e = 0, i = t.length; e < i; e++) t[e]();
    }
  }
  registerFindHook(t) {
    return t && this.addHooks.push(t), this;
  }
  registerUploadHook(t) {
    return t && this.uploadHooks.push(t), this;
  }
  add(t) {
    for (
      let e = 0, i = this.addHooks.length;
      e < i && !this.addHooks[e](t, this.queue);
      e++
    );
    if (t instanceof Tt)
      for (let e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
    return this;
  }
  destroy() {
    this.ticking && ct.system.remove(this.tick, this),
      (this.ticking = !1),
      (this.addHooks = null),
      (this.uploadHooks = null),
      (this.renderer = null),
      (this.completes = null),
      (this.queue = null),
      (this.limiter = null),
      (this.uploadHookHelper = null);
  }
};
Ma.uploadsPerFrame = 4;
let er = Ma;
Object.defineProperties(I, {
  UPLOADS_PER_FRAME: {
    get() {
      return er.uploadsPerFrame;
    },
    set(s) {
      z(
        "7.1.0",
        "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"
      ),
        (er.uploadsPerFrame = s);
    },
  },
});
function Da(s, t) {
  return t instanceof k
    ? (t._glTextures[s.CONTEXT_UID] || s.texture.bind(t), !0)
    : !1;
}
function Qd(s, t) {
  if (!(t instanceof Aa)) return !1;
  const { geometry: e } = t;
  t.finishPoly(), e.updateBatches();
  const { batches: i } = e;
  for (let r = 0; r < i.length; r++) {
    const { texture: n } = i[r].style;
    n && Da(s, n.baseTexture);
  }
  return e.batchable || s.geometry.bind(e, t._resolveDirectShader(s)), !0;
}
function tc(s, t) {
  return s instanceof Aa ? (t.push(s), !0) : !1;
}
class Fa extends er {
  constructor(t) {
    super(t),
      (this.uploadHookHelper = this.renderer),
      this.registerFindHook(tc),
      this.registerUploadHook(Da),
      this.registerUploadHook(Qd);
  }
}
Fa.extension = { name: "prepare", type: A.RendererSystem };
M.add(Fa);
var ec = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
  ic = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  sc = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
  fn = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  rc = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const yi = new K();
class La extends ji {
  constructor(t) {
    super(t),
      t.runners.contextChange.add(this),
      (this.quad = new On()),
      (this.state = Ft.for2d());
  }
  contextChange() {
    const t = this.renderer,
      e = { globals: t.globalUniforms };
    (this.simpleShader = Bt.from(fn, rc, e)),
      (this.shader =
        t.context.webGLVersion > 1 ? Bt.from(ic, ec, e) : Bt.from(fn, sc, e));
  }
  render(t) {
    const e = this.renderer,
      i = this.quad;
    let r = i.vertices;
    (r[0] = r[6] = t._width * -t.anchor.x),
      (r[1] = r[3] = t._height * -t.anchor.y),
      (r[2] = r[4] = t._width * (1 - t.anchor.x)),
      (r[5] = r[7] = t._height * (1 - t.anchor.y));
    const n = t.uvRespectAnchor ? t.anchor.x : 0,
      a = t.uvRespectAnchor ? t.anchor.y : 0;
    (r = i.uvs),
      (r[0] = r[6] = -n),
      (r[1] = r[3] = -a),
      (r[2] = r[4] = 1 - n),
      (r[5] = r[7] = 1 - a),
      i.invalidate();
    const o = t._texture,
      h = o.baseTexture,
      l = h.alphaMode > 0,
      d = t.tileTransform.localTransform,
      c = t.uvMatrix;
    let u =
      h.isPowerOfTwo &&
      o.frame.width === h.width &&
      o.frame.height === h.height;
    u &&
      (h._glTextures[e.CONTEXT_UID]
        ? (u = h.wrapMode !== qt.CLAMP)
        : h.wrapMode === qt.CLAMP && (h.wrapMode = qt.REPEAT));
    const p = u ? this.simpleShader : this.shader,
      f = o.width,
      m = o.height,
      g = t._width,
      _ = t._height;
    yi.set(
      (d.a * f) / g,
      (d.b * f) / _,
      (d.c * m) / g,
      (d.d * m) / _,
      d.tx / g,
      d.ty / _
    ),
      yi.invert(),
      u
        ? yi.prepend(c.mapCoord)
        : ((p.uniforms.uMapCoord = c.mapCoord.toArray(!0)),
          (p.uniforms.uClampFrame = c.uClampFrame),
          (p.uniforms.uClampOffset = c.uClampOffset)),
      (p.uniforms.uTransform = yi.toArray(!0)),
      (p.uniforms.uColor = q.shared
        .setValue(t.tint)
        .premultiply(t.worldAlpha, l)
        .toArray(p.uniforms.uColor)),
      (p.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0)),
      (p.uniforms.uSampler = o),
      e.shader.bind(p),
      e.geometry.bind(i),
      (this.state.blendMode = An(t.blendMode, l)),
      e.state.set(this.state),
      e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
La.extension = { name: "tilingSprite", type: A.RendererPlugin };
M.add(La);
const Na = class $e {
  constructor(t, e, i) {
    (this.linkedSheets = []),
      (t instanceof k || t instanceof P) &&
        (t = { texture: t, data: e, resolutionFilename: i });
    const {
      texture: r,
      data: n,
      resolutionFilename: a = null,
      cachePrefix: o = "",
    } = t;
    (this.cachePrefix = o),
      (this._texture = r instanceof P ? r : null),
      (this.baseTexture = r instanceof k ? r : this._texture.baseTexture),
      (this.textures = {}),
      (this.animations = {}),
      (this.data = n);
    const h = this.baseTexture.resource;
    (this.resolution = this._updateResolution(a || (h ? h.url : null))),
      (this._frames = this.data.frames),
      (this._frameKeys = Object.keys(this._frames)),
      (this._batchIndex = 0),
      (this._callback = null);
  }
  _updateResolution(t = null) {
    const { scale: e } = this.data.meta;
    let i = Gt(t, null);
    return (
      i === null && (i = typeof e == "number" ? e : parseFloat(e ?? "1")),
      i !== 1 && this.baseTexture.setResolution(i),
      i
    );
  }
  parse() {
    return new Promise((t) => {
      (this._callback = t),
        (this._batchIndex = 0),
        this._frameKeys.length <= $e.BATCH_SIZE
          ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete())
          : this._nextBatch();
    });
  }
  _processFrames(t) {
    let e = t;
    const i = $e.BATCH_SIZE;
    for (; e - t < i && e < this._frameKeys.length; ) {
      const r = this._frameKeys[e],
        n = this._frames[r],
        a = n.frame;
      if (a) {
        let o = null,
          h = null;
        const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame,
          d = new H(
            0,
            0,
            Math.floor(l.w) / this.resolution,
            Math.floor(l.h) / this.resolution
          );
        n.rotated
          ? (o = new H(
              Math.floor(a.x) / this.resolution,
              Math.floor(a.y) / this.resolution,
              Math.floor(a.h) / this.resolution,
              Math.floor(a.w) / this.resolution
            ))
          : (o = new H(
              Math.floor(a.x) / this.resolution,
              Math.floor(a.y) / this.resolution,
              Math.floor(a.w) / this.resolution,
              Math.floor(a.h) / this.resolution
            )),
          n.trimmed !== !1 &&
            n.spriteSourceSize &&
            (h = new H(
              Math.floor(n.spriteSourceSize.x) / this.resolution,
              Math.floor(n.spriteSourceSize.y) / this.resolution,
              Math.floor(a.w) / this.resolution,
              Math.floor(a.h) / this.resolution
            )),
          (this.textures[r] = new P(
            this.baseTexture,
            o,
            d,
            h,
            n.rotated ? 2 : 0,
            n.anchor,
            n.borders
          )),
          P.addToCache(this.textures[r], this.cachePrefix + r.toString());
      }
      e++;
    }
  }
  _processAnimations() {
    const t = this.data.animations || {};
    for (const e in t) {
      this.animations[e] = [];
      for (let i = 0; i < t[e].length; i++) {
        const r = t[e][i];
        this.animations[e].push(this.textures[r]);
      }
    }
  }
  _parseComplete() {
    const t = this._callback;
    (this._callback = null),
      (this._batchIndex = 0),
      t.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * $e.BATCH_SIZE),
      this._batchIndex++,
      setTimeout(() => {
        this._batchIndex * $e.BATCH_SIZE < this._frameKeys.length
          ? this._nextBatch()
          : (this._processAnimations(), this._parseComplete());
      }, 0);
  }
  destroy(t = !1) {
    var e;
    for (const i in this.textures) this.textures[i].destroy();
    (this._frames = null),
      (this._frameKeys = null),
      (this.data = null),
      (this.textures = null),
      t &&
        ((e = this._texture) == null || e.destroy(),
        this.baseTexture.destroy()),
      (this._texture = null),
      (this.baseTexture = null),
      (this.linkedSheets = []);
  }
};
Na.BATCH_SIZE = 1e3;
let mn = Na;
const nc = [
  "jpg",
  "png",
  "jpeg",
  "avif",
  "webp",
  "s3tc",
  "s3tc_sRGB",
  "etc",
  "etc1",
  "pvrtc",
  "atc",
  "astc",
  "bptc",
];
function Oa(s, t, e) {
  const i = {};
  if (
    (s.forEach((r) => {
      i[r] = t;
    }),
    Object.keys(t.textures).forEach((r) => {
      i[`${t.cachePrefix}${r}`] = t.textures[r];
    }),
    !e)
  ) {
    const r = nt.dirname(s[0]);
    t.linkedSheets.forEach((n, a) => {
      Object.assign(
        i,
        Oa([`${r}/${t.data.meta.related_multi_packs[a]}`], n, !0)
      );
    });
  }
  return i;
}
const ac = {
  extension: A.Asset,
  cache: {
    test: (s) => s instanceof mn,
    getCacheableAssets: (s, t) => Oa(s, t, !1),
  },
  resolver: {
    test: (s) => {
      const t = s.split("?")[0].split("."),
        e = t.pop(),
        i = t.pop();
      return e === "json" && nc.includes(i);
    },
    parse: (s) => {
      var e;
      const t = s.split(".");
      return {
        resolution: parseFloat(
          ((e = I.RETINA_PREFIX.exec(s)) == null ? void 0 : e[1]) ?? "1"
        ),
        format: t[t.length - 2],
        src: s,
      };
    },
  },
  loader: {
    name: "spritesheetLoader",
    extension: { type: A.LoadParser, priority: Et.Normal },
    async testParse(s, t) {
      return nt.extname(t.src).toLowerCase() === ".json" && !!s.frames;
    },
    async parse(s, t, e) {
      var d, c;
      const {
        texture: i,
        imageFilename: r,
        cachePrefix: n,
      } = (t == null ? void 0 : t.data) ?? {};
      let a = nt.dirname(t.src);
      a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
      let o;
      if (i && i.baseTexture) o = i;
      else {
        const u = Ks(a + (r ?? s.meta.image), t.src);
        o = (await e.load([u]))[u];
      }
      const h = new mn({
        texture: o.baseTexture,
        data: s,
        resolutionFilename: t.src,
        cachePrefix: n,
      });
      await h.parse();
      const l =
        (d = s == null ? void 0 : s.meta) == null
          ? void 0
          : d.related_multi_packs;
      if (Array.isArray(l)) {
        const u = [];
        for (const f of l) {
          if (typeof f != "string") continue;
          let m = a + f;
          ((c = t.data) != null && c.ignoreMultiPack) ||
            ((m = Ks(m, t.src)),
            u.push(e.load({ src: m, data: { ignoreMultiPack: !0 } })));
        }
        const p = await Promise.all(u);
        (h.linkedSheets = p),
          p.forEach((f) => {
            f.linkedSheets = [h].concat(h.linkedSheets.filter((m) => m !== f));
          });
      }
      return h;
    },
    unload(s) {
      s.destroy(!0);
    },
  },
};
M.add(ac);
class Xi {
  constructor() {
    (this.info = []),
      (this.common = []),
      (this.page = []),
      (this.char = []),
      (this.kerning = []),
      (this.distanceField = []);
  }
}
class Ci {
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  static parse(t) {
    const e = t.match(/^[a-z]+\s+.+$/gm),
      i = {
        info: [],
        common: [],
        page: [],
        char: [],
        chars: [],
        kerning: [],
        kernings: [],
        distanceField: [],
      };
    for (const n in e) {
      const a = e[n].match(/^[a-z]+/gm)[0],
        o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
        h = {};
      for (const l in o) {
        const d = o[l].split("="),
          c = d[0],
          u = d[1].replace(/"/gm, ""),
          p = parseFloat(u),
          f = isNaN(p) ? u : p;
        h[c] = f;
      }
      i[a].push(h);
    }
    const r = new Xi();
    return (
      i.info.forEach((n) =>
        r.info.push({ face: n.face, size: parseInt(n.size, 10) })
      ),
      i.common.forEach((n) =>
        r.common.push({ lineHeight: parseInt(n.lineHeight, 10) })
      ),
      i.page.forEach((n) =>
        r.page.push({ id: parseInt(n.id, 10), file: n.file })
      ),
      i.char.forEach((n) =>
        r.char.push({
          id: parseInt(n.id, 10),
          page: parseInt(n.page, 10),
          x: parseInt(n.x, 10),
          y: parseInt(n.y, 10),
          width: parseInt(n.width, 10),
          height: parseInt(n.height, 10),
          xoffset: parseInt(n.xoffset, 10),
          yoffset: parseInt(n.yoffset, 10),
          xadvance: parseInt(n.xadvance, 10),
        })
      ),
      i.kerning.forEach((n) =>
        r.kerning.push({
          first: parseInt(n.first, 10),
          second: parseInt(n.second, 10),
          amount: parseInt(n.amount, 10),
        })
      ),
      i.distanceField.forEach((n) =>
        r.distanceField.push({
          distanceRange: parseInt(n.distanceRange, 10),
          fieldType: n.fieldType,
        })
      ),
      r
    );
  }
}
class ir {
  static test(t) {
    const e = t;
    return (
      typeof t != "string" &&
      "getElementsByTagName" in t &&
      e.getElementsByTagName("page").length &&
      e.getElementsByTagName("info")[0].getAttribute("face") !== null
    );
  }
  static parse(t) {
    const e = new Xi(),
      i = t.getElementsByTagName("info"),
      r = t.getElementsByTagName("common"),
      n = t.getElementsByTagName("page"),
      a = t.getElementsByTagName("char"),
      o = t.getElementsByTagName("kerning"),
      h = t.getElementsByTagName("distanceField");
    for (let l = 0; l < i.length; l++)
      e.info.push({
        face: i[l].getAttribute("face"),
        size: parseInt(i[l].getAttribute("size"), 10),
      });
    for (let l = 0; l < r.length; l++)
      e.common.push({
        lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10),
      });
    for (let l = 0; l < n.length; l++)
      e.page.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file"),
      });
    for (let l = 0; l < a.length; l++) {
      const d = a[l];
      e.char.push({
        id: parseInt(d.getAttribute("id"), 10),
        page: parseInt(d.getAttribute("page"), 10) || 0,
        x: parseInt(d.getAttribute("x"), 10),
        y: parseInt(d.getAttribute("y"), 10),
        width: parseInt(d.getAttribute("width"), 10),
        height: parseInt(d.getAttribute("height"), 10),
        xoffset: parseInt(d.getAttribute("xoffset"), 10),
        yoffset: parseInt(d.getAttribute("yoffset"), 10),
        xadvance: parseInt(d.getAttribute("xadvance"), 10),
      });
    }
    for (let l = 0; l < o.length; l++)
      e.kerning.push({
        first: parseInt(o[l].getAttribute("first"), 10),
        second: parseInt(o[l].getAttribute("second"), 10),
        amount: parseInt(o[l].getAttribute("amount"), 10),
      });
    for (let l = 0; l < h.length; l++)
      e.distanceField.push({
        fieldType: h[l].getAttribute("fieldType"),
        distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10),
      });
    return e;
  }
}
class sr {
  static test(t) {
    return typeof t == "string" && t.includes("<font>")
      ? ir.test(I.ADAPTER.parseXML(t))
      : !1;
  }
  static parse(t) {
    return ir.parse(I.ADAPTER.parseXML(t));
  }
}
const Ts = [Ci, ir, sr];
function oc(s) {
  for (let t = 0; t < Ts.length; t++) if (Ts[t].test(s)) return Ts[t];
  return null;
}
function hc(s, t, e, i, r, n) {
  const a = e.fill;
  if (Array.isArray(a)) {
    if (a.length === 1) return a[0];
  } else return a;
  let o;
  const h = e.dropShadow ? e.dropShadowDistance : 0,
    l = e.padding || 0,
    d = s.width / i - h - l * 2,
    c = s.height / i - h - l * 2,
    u = a.slice(),
    p = e.fillGradientStops.slice();
  if (!p.length) {
    const f = u.length + 1;
    for (let m = 1; m < f; ++m) p.push(m / f);
  }
  if (
    (u.unshift(a[0]),
    p.unshift(0),
    u.push(a[a.length - 1]),
    p.push(1),
    e.fillGradientType === Zi.LINEAR_VERTICAL)
  ) {
    o = t.createLinearGradient(d / 2, l, d / 2, c + l);
    let f = 0;
    const m = (n.fontProperties.fontSize + e.strokeThickness) / c;
    for (let g = 0; g < r.length; g++) {
      const _ = n.lineHeight * g;
      for (let b = 0; b < u.length; b++) {
        let x = 0;
        typeof p[b] == "number" ? (x = p[b]) : (x = b / u.length);
        const y = _ / c + x * m;
        let R = Math.max(f, y);
        (R = Math.min(R, 1)), o.addColorStop(R, u[b]), (f = R);
      }
    }
  } else {
    o = t.createLinearGradient(l, c / 2, d + l, c / 2);
    const f = u.length + 1;
    let m = 1;
    for (let g = 0; g < u.length; g++) {
      let _;
      typeof p[g] == "number" ? (_ = p[g]) : (_ = m / f),
        o.addColorStop(_, u[g]),
        m++;
    }
  }
  return o;
}
function lc(s, t, e, i, r, n, a) {
  const o = e.text,
    h = e.fontProperties;
  t.translate(i, r), t.scale(n, n);
  const l = a.strokeThickness / 2,
    d = -(a.strokeThickness / 2);
  if (
    ((t.font = a.toFontString()),
    (t.lineWidth = a.strokeThickness),
    (t.textBaseline = a.textBaseline),
    (t.lineJoin = a.lineJoin),
    (t.miterLimit = a.miterLimit),
    (t.fillStyle = hc(s, t, a, n, [o], e)),
    (t.strokeStyle = a.stroke),
    a.dropShadow)
  ) {
    const c = a.dropShadowColor,
      u = a.dropShadowBlur * n,
      p = a.dropShadowDistance * n;
    (t.shadowColor = q.shared
      .setValue(c)
      .setAlpha(a.dropShadowAlpha)
      .toRgbaString()),
      (t.shadowBlur = u),
      (t.shadowOffsetX = Math.cos(a.dropShadowAngle) * p),
      (t.shadowOffsetY = Math.sin(a.dropShadowAngle) * p);
  } else
    (t.shadowColor = "black"),
      (t.shadowBlur = 0),
      (t.shadowOffsetX = 0),
      (t.shadowOffsetY = 0);
  a.stroke &&
    a.strokeThickness &&
    t.strokeText(o, l, d + e.lineHeight - h.descent),
    a.fill && t.fillText(o, l, d + e.lineHeight - h.descent),
    t.setTransform(1, 0, 0, 1, 0, 0),
    (t.fillStyle = "rgba(0, 0, 0, 0)");
}
function Ii(s) {
  return s.codePointAt ? s.codePointAt(0) : s.charCodeAt(0);
}
function Ua(s) {
  return Array.from ? Array.from(s) : s.split("");
}
function dc(s) {
  typeof s == "string" && (s = [s]);
  const t = [];
  for (let e = 0, i = s.length; e < i; e++) {
    const r = s[e];
    if (Array.isArray(r)) {
      if (r.length !== 2)
        throw new Error(
          `[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`
        );
      const n = r[0].charCodeAt(0),
        a = r[1].charCodeAt(0);
      if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = n, h = a; o <= h; o++) t.push(String.fromCharCode(o));
    } else t.push(...Ua(r));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const Vt = class It {
  constructor(t, e, i) {
    var d;
    const [r] = t.info,
      [n] = t.common,
      [a] = t.page,
      [o] = t.distanceField,
      h = Gt(a.file),
      l = {};
    (this._ownsTextures = i),
      (this.font = r.face),
      (this.size = r.size),
      (this.lineHeight = n.lineHeight / h),
      (this.chars = {}),
      (this.pageTextures = l);
    for (let c = 0; c < t.page.length; c++) {
      const { id: u, file: p } = t.page[c];
      (l[u] = e instanceof Array ? e[c] : e[p]),
        o != null &&
          o.fieldType &&
          o.fieldType !== "none" &&
          ((l[u].baseTexture.alphaMode = lt.NO_PREMULTIPLIED_ALPHA),
          (l[u].baseTexture.mipmap = Dt.OFF));
    }
    for (let c = 0; c < t.char.length; c++) {
      const { id: u, page: p } = t.char[c];
      let {
        x: f,
        y: m,
        width: g,
        height: _,
        xoffset: b,
        yoffset: x,
        xadvance: y,
      } = t.char[c];
      (f /= h), (m /= h), (g /= h), (_ /= h), (b /= h), (x /= h), (y /= h);
      const R = new H(f + l[p].frame.x / h, m + l[p].frame.y / h, g, _);
      this.chars[u] = {
        xOffset: b,
        yOffset: x,
        xAdvance: y,
        kerning: {},
        texture: new P(l[p].baseTexture, R),
        page: p,
      };
    }
    for (let c = 0; c < t.kerning.length; c++) {
      let { first: u, second: p, amount: f } = t.kerning[c];
      (u /= h),
        (p /= h),
        (f /= h),
        this.chars[p] && (this.chars[p].kerning[u] = f);
    }
    (this.distanceFieldRange = o == null ? void 0 : o.distanceRange),
      (this.distanceFieldType =
        ((d = o == null ? void 0 : o.fieldType) == null
          ? void 0
          : d.toLowerCase()) ?? "none");
  }
  destroy() {
    for (const t in this.chars)
      this.chars[t].texture.destroy(), (this.chars[t].texture = null);
    for (const t in this.pageTextures)
      this._ownsTextures && this.pageTextures[t].destroy(!0),
        (this.pageTextures[t] = null);
    (this.chars = null), (this.pageTextures = null);
  }
  static install(t, e, i) {
    let r;
    if (t instanceof Xi) r = t;
    else {
      const a = oc(t);
      if (!a) throw new Error("Unrecognized data format for font.");
      r = a.parse(t);
    }
    e instanceof P && (e = [e]);
    const n = new It(r, e, i);
    return (It.available[n.font] = n), n;
  }
  static uninstall(t) {
    const e = It.available[t];
    if (!e) throw new Error(`No font found named '${t}'`);
    e.destroy(), delete It.available[t];
  }
  static from(t, e, i) {
    if (!t) throw new Error("[BitmapFont] Property `name` is required.");
    const {
        chars: r,
        padding: n,
        resolution: a,
        textureWidth: o,
        textureHeight: h,
        ...l
      } = Object.assign({}, It.defaultOptions, i),
      d = dc(r),
      c = e instanceof Zt ? e : new Zt(e),
      u = o,
      p = new Xi();
    (p.info[0] = { face: c.fontFamily, size: c.fontSize }),
      (p.common[0] = { lineHeight: c.fontSize });
    let f = 0,
      m = 0,
      g,
      _,
      b,
      x = 0;
    const y = [];
    for (let O = 0; O < d.length; O++) {
      g ||
        ((g = I.ADAPTER.createCanvas()),
        (g.width = o),
        (g.height = h),
        (_ = g.getContext("2d")),
        (b = new k(g, { resolution: a, ...l })),
        y.push(new P(b)),
        p.page.push({ id: y.length - 1, file: "" }));
      const E = d[O],
        w = Wt.measureText(E, c, !1, g),
        N = w.width,
        X = Math.ceil(w.height),
        Y = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * N);
      if (m >= h - X * a) {
        if (m === 0)
          throw new Error(
            `[BitmapFont] textureHeight ${h}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`
          );
        --O, (g = null), (_ = null), (b = null), (m = 0), (f = 0), (x = 0);
        continue;
      }
      if (((x = Math.max(X + w.fontProperties.descent, x)), Y * a + f >= u)) {
        if (f === 0)
          throw new Error(
            `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`
          );
        --O, (m += x * a), (m = Math.ceil(m)), (f = 0), (x = 0);
        continue;
      }
      lc(g, _, w, f, m, a, c);
      const F = Ii(w.text);
      p.char.push({
        id: F,
        page: y.length - 1,
        x: f / a,
        y: m / a,
        width: Y,
        height: X,
        xoffset: 0,
        yoffset: 0,
        xadvance:
          N -
          (c.dropShadow ? c.dropShadowDistance : 0) -
          (c.stroke ? c.strokeThickness : 0),
      }),
        (f += (Y + 2 * n) * a),
        (f = Math.ceil(f));
    }
    if (!(i != null && i.skipKerning))
      for (let O = 0, E = d.length; O < E; O++) {
        const w = d[O];
        for (let N = 0; N < E; N++) {
          const X = d[N],
            Y = _.measureText(w).width,
            F = _.measureText(X).width,
            v = _.measureText(w + X).width - (Y + F);
          v && p.kerning.push({ first: Ii(w), second: Ii(X), amount: v });
        }
      }
    const R = new It(p, y, !0);
    return (
      It.available[t] !== void 0 && It.uninstall(t), (It.available[t] = R), R
    );
  }
};
(Vt.ALPHA = [["a", "z"], ["A", "Z"], " "]),
  (Vt.NUMERIC = [["0", "9"]]),
  (Vt.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
  (Vt.ASCII = [[" ", "~"]]),
  (Vt.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: Vt.ALPHANUMERIC,
  }),
  (Vt.available = {});
let zt = Vt;
var cc = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,
  uc = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const gn = [],
  _n = [],
  xn = [],
  pc = class ka extends Tt {
    constructor(t, e = {}) {
      super();
      const {
        align: i,
        tint: r,
        maxWidth: n,
        letterSpacing: a,
        fontName: o,
        fontSize: h,
      } = Object.assign({}, ka.styleDefaults, e);
      if (!zt.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
      (this._activePagesMeshData = []),
        (this._textWidth = 0),
        (this._textHeight = 0),
        (this._align = i),
        (this._tintColor = new q(r)),
        (this._font = void 0),
        (this._fontName = o),
        (this._fontSize = h),
        (this.text = t),
        (this._maxWidth = n),
        (this._maxLineHeight = 0),
        (this._letterSpacing = a),
        (this._anchor = new Ut(
          () => {
            this.dirty = !0;
          },
          this,
          0,
          0
        )),
        (this._roundPixels = I.ROUND_PIXELS),
        (this.dirty = !0),
        (this._resolution = I.RESOLUTION),
        (this._autoResolution = !0),
        (this._textureCache = {});
    }
    updateText() {
      var Y;
      const t = zt.available[this._fontName],
        e = this.fontSize,
        i = e / t.size,
        r = new $(),
        n = [],
        a = [],
        o = [],
        h =
          this._text.replace(
            /(?:\r\n|\r)/g,
            `
`
          ) || " ",
        l = Ua(h),
        d = (this._maxWidth * t.size) / e,
        c = t.distanceFieldType === "none" ? gn : _n;
      let u = null,
        p = 0,
        f = 0,
        m = 0,
        g = -1,
        _ = 0,
        b = 0,
        x = 0,
        y = 0;
      for (let F = 0; F < l.length; F++) {
        const v = l[F],
          S = Ii(v);
        if (
          (/(?:\s)/.test(v) && ((g = F), (_ = p), y++),
          v === "\r" ||
            v ===
              `
`)
        ) {
          a.push(p),
            o.push(-1),
            (f = Math.max(f, p)),
            ++m,
            ++b,
            (r.x = 0),
            (r.y += t.lineHeight),
            (u = null),
            (y = 0);
          continue;
        }
        const G = t.chars[S];
        if (!G) continue;
        u && G.kerning[u] && (r.x += G.kerning[u]);
        const j = xn.pop() || {
          texture: P.EMPTY,
          line: 0,
          charCode: 0,
          prevSpaces: 0,
          position: new $(),
        };
        (j.texture = G.texture),
          (j.line = m),
          (j.charCode = S),
          (j.position.x = Math.round(
            r.x + G.xOffset + this._letterSpacing / 2
          )),
          (j.position.y = Math.round(r.y + G.yOffset)),
          (j.prevSpaces = y),
          n.push(j),
          (p =
            j.position.x +
            Math.max(G.xAdvance - G.xOffset, G.texture.orig.width)),
          (r.x += G.xAdvance + this._letterSpacing),
          (x = Math.max(x, G.yOffset + G.texture.height)),
          (u = S),
          g !== -1 &&
            d > 0 &&
            r.x > d &&
            (++b,
            Ie(n, 1 + g - b, 1 + F - g),
            (F = g),
            (g = -1),
            a.push(_),
            o.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0),
            (f = Math.max(f, _)),
            m++,
            (r.x = 0),
            (r.y += t.lineHeight),
            (u = null),
            (y = 0));
      }
      const R = l[l.length - 1];
      R !== "\r" &&
        R !==
          `
` &&
        (/(?:\s)/.test(R) && (p = _),
        a.push(p),
        (f = Math.max(f, p)),
        o.push(-1));
      const O = [];
      for (let F = 0; F <= m; F++) {
        let v = 0;
        this._align === "right"
          ? (v = f - a[F])
          : this._align === "center"
          ? (v = (f - a[F]) / 2)
          : this._align === "justify" && (v = o[F] < 0 ? 0 : (f - a[F]) / o[F]),
          O.push(v);
      }
      const E = n.length,
        w = {},
        N = [],
        X = this._activePagesMeshData;
      c.push(...X);
      for (let F = 0; F < E; F++) {
        const v = n[F].texture,
          S = v.baseTexture.uid;
        if (!w[S]) {
          let G = c.pop();
          if (!G) {
            const U = new Od();
            let V, it;
            t.distanceFieldType === "none"
              ? ((V = new un(P.EMPTY)), (it = L.NORMAL))
              : ((V = new un(P.EMPTY, {
                  program: kt.from(uc, cc),
                  uniforms: { uFWidth: 0 },
                })),
                (it = L.NORMAL_NPM));
            const tt = new cn(U, V);
            (tt.blendMode = it),
              (G = {
                index: 0,
                indexCount: 0,
                vertexCount: 0,
                uvsCount: 0,
                total: 0,
                mesh: tt,
                vertices: null,
                uvs: null,
                indices: null,
              });
          }
          (G.index = 0),
            (G.indexCount = 0),
            (G.vertexCount = 0),
            (G.uvsCount = 0),
            (G.total = 0);
          const { _textureCache: j } = this;
          (j[S] = j[S] || new P(v.baseTexture)),
            (G.mesh.texture = j[S]),
            (G.mesh.tint = this._tintColor.value),
            N.push(G),
            (w[S] = G);
        }
        w[S].total++;
      }
      for (let F = 0; F < X.length; F++)
        N.includes(X[F]) || this.removeChild(X[F].mesh);
      for (let F = 0; F < N.length; F++)
        N[F].mesh.parent !== this && this.addChild(N[F].mesh);
      this._activePagesMeshData = N;
      for (const F in w) {
        const v = w[F],
          S = v.total;
        if (
          !(((Y = v.indices) == null ? void 0 : Y.length) > 6 * S) ||
          v.vertices.length < cn.BATCHABLE_SIZE * 2
        )
          (v.vertices = new Float32Array(4 * 2 * S)),
            (v.uvs = new Float32Array(4 * 2 * S)),
            (v.indices = new Uint16Array(6 * S));
        else {
          const G = v.total,
            j = v.vertices;
          for (let U = G * 4 * 2; U < j.length; U++) j[U] = 0;
        }
        v.mesh.size = 6 * S;
      }
      for (let F = 0; F < E; F++) {
        const v = n[F];
        let S =
          v.position.x +
          O[v.line] * (this._align === "justify" ? v.prevSpaces : 1);
        this._roundPixels && (S = Math.round(S));
        const G = S * i,
          j = v.position.y * i,
          U = v.texture,
          V = w[U.baseTexture.uid],
          it = U.frame,
          tt = U._uvs,
          W = V.index++;
        (V.indices[W * 6 + 0] = 0 + W * 4),
          (V.indices[W * 6 + 1] = 1 + W * 4),
          (V.indices[W * 6 + 2] = 2 + W * 4),
          (V.indices[W * 6 + 3] = 0 + W * 4),
          (V.indices[W * 6 + 4] = 2 + W * 4),
          (V.indices[W * 6 + 5] = 3 + W * 4),
          (V.vertices[W * 8 + 0] = G),
          (V.vertices[W * 8 + 1] = j),
          (V.vertices[W * 8 + 2] = G + it.width * i),
          (V.vertices[W * 8 + 3] = j),
          (V.vertices[W * 8 + 4] = G + it.width * i),
          (V.vertices[W * 8 + 5] = j + it.height * i),
          (V.vertices[W * 8 + 6] = G),
          (V.vertices[W * 8 + 7] = j + it.height * i),
          (V.uvs[W * 8 + 0] = tt.x0),
          (V.uvs[W * 8 + 1] = tt.y0),
          (V.uvs[W * 8 + 2] = tt.x1),
          (V.uvs[W * 8 + 3] = tt.y1),
          (V.uvs[W * 8 + 4] = tt.x2),
          (V.uvs[W * 8 + 5] = tt.y2),
          (V.uvs[W * 8 + 6] = tt.x3),
          (V.uvs[W * 8 + 7] = tt.y3);
      }
      (this._textWidth = f * i), (this._textHeight = (r.y + t.lineHeight) * i);
      for (const F in w) {
        const v = w[F];
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
          let U = 0;
          const V = this._textWidth * this.anchor.x,
            it = this._textHeight * this.anchor.y;
          for (let tt = 0; tt < v.total; tt++)
            (v.vertices[U++] -= V),
              (v.vertices[U++] -= it),
              (v.vertices[U++] -= V),
              (v.vertices[U++] -= it),
              (v.vertices[U++] -= V),
              (v.vertices[U++] -= it),
              (v.vertices[U++] -= V),
              (v.vertices[U++] -= it);
        }
        this._maxLineHeight = x * i;
        const S = v.mesh.geometry.getBuffer("aVertexPosition"),
          G = v.mesh.geometry.getBuffer("aTextureCoord"),
          j = v.mesh.geometry.getIndex();
        (S.data = v.vertices),
          (G.data = v.uvs),
          (j.data = v.indices),
          S.update(),
          G.update(),
          j.update();
      }
      for (let F = 0; F < n.length; F++) xn.push(n[F]);
      (this._font = t), (this.dirty = !1);
    }
    updateTransform() {
      this.validate(), this.containerUpdateTransform();
    }
    _render(t) {
      this._autoResolution &&
        this._resolution !== t.resolution &&
        ((this._resolution = t.resolution), (this.dirty = !0));
      const {
        distanceFieldRange: e,
        distanceFieldType: i,
        size: r,
      } = zt.available[this._fontName];
      if (i !== "none") {
        const { a: n, b: a, c: o, d: h } = this.worldTransform,
          l = Math.sqrt(n * n + a * a),
          d = Math.sqrt(o * o + h * h),
          c = (Math.abs(l) + Math.abs(d)) / 2,
          u = this.fontSize / r,
          p = t._view.resolution;
        for (const f of this._activePagesMeshData)
          f.mesh.shader.uniforms.uFWidth = c * e * u * p;
      }
      super._render(t);
    }
    getLocalBounds() {
      return this.validate(), super.getLocalBounds();
    }
    validate() {
      const t = zt.available[this._fontName];
      if (!t) throw new Error(`Missing BitmapFont "${this._fontName}"`);
      this._font !== t && (this.dirty = !0), this.dirty && this.updateText();
    }
    get tint() {
      return this._tintColor.value;
    }
    set tint(t) {
      if (this.tint !== t) {
        this._tintColor.setValue(t);
        for (let e = 0; e < this._activePagesMeshData.length; e++)
          this._activePagesMeshData[e].mesh.tint = t;
      }
    }
    get align() {
      return this._align;
    }
    set align(t) {
      this._align !== t && ((this._align = t), (this.dirty = !0));
    }
    get fontName() {
      return this._fontName;
    }
    set fontName(t) {
      if (!zt.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
      this._fontName !== t && ((this._fontName = t), (this.dirty = !0));
    }
    get fontSize() {
      return this._fontSize ?? zt.available[this._fontName].size;
    }
    set fontSize(t) {
      this._fontSize !== t && ((this._fontSize = t), (this.dirty = !0));
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(t) {
      typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
    }
    get text() {
      return this._text;
    }
    set text(t) {
      (t = String(t ?? "")),
        this._text !== t && ((this._text = t), (this.dirty = !0));
    }
    get maxWidth() {
      return this._maxWidth;
    }
    set maxWidth(t) {
      this._maxWidth !== t && ((this._maxWidth = t), (this.dirty = !0));
    }
    get maxLineHeight() {
      return this.validate(), this._maxLineHeight;
    }
    get textWidth() {
      return this.validate(), this._textWidth;
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(t) {
      this._letterSpacing !== t &&
        ((this._letterSpacing = t), (this.dirty = !0));
    }
    get roundPixels() {
      return this._roundPixels;
    }
    set roundPixels(t) {
      t !== this._roundPixels && ((this._roundPixels = t), (this.dirty = !0));
    }
    get textHeight() {
      return this.validate(), this._textHeight;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      (this._autoResolution = !1),
        this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
    }
    destroy(t) {
      const { _textureCache: e } = this,
        i = zt.available[this._fontName].distanceFieldType === "none" ? gn : _n;
      i.push(...this._activePagesMeshData);
      for (const r of this._activePagesMeshData) this.removeChild(r.mesh);
      (this._activePagesMeshData = []),
        i
          .filter((r) => e[r.mesh.texture.baseTexture.uid])
          .forEach((r) => {
            r.mesh.texture = P.EMPTY;
          });
      for (const r in e) e[r].destroy(), delete e[r];
      (this._font = null),
        (this._tintColor = null),
        (this._textureCache = null),
        super.destroy(t);
    }
  };
pc.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0,
};
const fc = [".xml", ".fnt"],
  mc = {
    extension: { type: A.LoadParser, priority: Et.Normal },
    name: "loadBitmapFont",
    test(s) {
      return fc.includes(nt.extname(s).toLowerCase());
    },
    async testParse(s) {
      return Ci.test(s) || sr.test(s);
    },
    async parse(s, t, e) {
      const i = Ci.test(s) ? Ci.parse(s) : sr.parse(s),
        { src: r } = t,
        { page: n } = i,
        a = [];
      for (let l = 0; l < n.length; ++l) {
        const d = n[l].file;
        let c = nt.join(nt.dirname(r), d);
        (c = Ks(c, r)), a.push(c);
      }
      const o = await e.load(a),
        h = a.map((l) => o[l]);
      return zt.install(i, h, !0);
    },
    async load(s, t) {
      return (await I.ADAPTER.fetch(s)).text();
    },
    unload(s) {
      s.destroy();
    },
  };
M.add(mc);
const rr = class Ae extends Zt {
  constructor() {
    super(...arguments),
      (this._fonts = []),
      (this._overrides = []),
      (this._stylesheet = ""),
      (this.fontsDirty = !1);
  }
  static from(t) {
    return new Ae(
      Object.keys(Ae.defaultOptions).reduce((e, i) => ({ ...e, [i]: t[i] }), {})
    );
  }
  cleanFonts() {
    this._fonts.length > 0 &&
      (this._fonts.forEach((t) => {
        URL.revokeObjectURL(t.src),
          t.refs--,
          t.refs === 0 &&
            (t.fontFace && document.fonts.delete(t.fontFace),
            delete Ae.availableFonts[t.originalUrl]);
      }),
      (this.fontFamily = "Arial"),
      (this._fonts.length = 0),
      this.styleID++,
      (this.fontsDirty = !0));
  }
  loadFont(t, e = {}) {
    const { availableFonts: i } = Ae;
    if (i[t]) {
      const r = i[t];
      return (
        this._fonts.push(r),
        r.refs++,
        this.styleID++,
        (this.fontsDirty = !0),
        Promise.resolve()
      );
    }
    return I.ADAPTER.fetch(t)
      .then((r) => r.blob())
      .then(
        async (r) =>
          new Promise((n, a) => {
            const o = URL.createObjectURL(r),
              h = new FileReader();
            (h.onload = () => n([o, h.result])),
              (h.onerror = a),
              h.readAsDataURL(r);
          })
      )
      .then(async ([r, n]) => {
        const a = Object.assign(
          {
            family: nt.basename(t, nt.extname(t)),
            weight: "normal",
            style: "normal",
            display: "auto",
            src: r,
            dataSrc: n,
            refs: 1,
            originalUrl: t,
            fontFace: null,
          },
          e
        );
        (i[t] = a), this._fonts.push(a), this.styleID++;
        const o = new FontFace(a.family, `url(${a.src})`, {
          weight: a.weight,
          style: a.style,
          display: a.display,
        });
        (a.fontFace = o),
          await o.load(),
          document.fonts.add(o),
          await document.fonts.ready,
          this.styleID++,
          (this.fontsDirty = !0);
      });
  }
  addOverride(...t) {
    const e = t.filter((i) => !this._overrides.includes(i));
    e.length > 0 && (this._overrides.push(...e), this.styleID++);
  }
  removeOverride(...t) {
    const e = t.filter((i) => this._overrides.includes(i));
    e.length > 0 &&
      ((this._overrides = this._overrides.filter((i) => !e.includes(i))),
      this.styleID++);
  }
  toCSS(t) {
    return [
      `transform: scale(${t})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []),
      ...(this.wordWrap
        ? [
            `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
            `max-width: ${this.wordWrapWidth}px`,
          ]
        : []),
      ...(this.strokeThickness
        ? [
            `-webkit-text-stroke-width: ${this.strokeThickness}px`,
            `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            `text-stroke-width: ${this.strokeThickness}px`,
            `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            "paint-order: stroke",
          ]
        : []),
      ...(this.dropShadow ? [this.dropShadowToCSS()] : []),
      ...this._overrides,
    ].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce(
      (t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`,
      this._stylesheet
    );
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(t) {
    this._stylesheet !== t && ((this._stylesheet = t), this.styleID++);
  }
  normalizeColor(t) {
    return Array.isArray(t) && (t = oo(t)), typeof t == "number" ? ao(t) : t;
  }
  dropShadowToCSS() {
    let t = this.normalizeColor(this.dropShadowColor);
    const e = this.dropShadowAlpha,
      i = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance),
      r = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    t.startsWith("#") &&
      e < 1 &&
      (t += ((e * 255) | 0).toString(16).padStart(2, "0"));
    const n = `${i}px ${r}px`;
    return this.dropShadowBlur > 0
      ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}`
      : `text-shadow: ${n} ${t}`;
  }
  reset() {
    Object.assign(this, Ae.defaultOptions);
  }
  onBeforeDraw() {
    const { fontsDirty: t } = this;
    return (
      (this.fontsDirty = !1),
      this.isSafari && this._fonts.length > 0 && t
        ? new Promise((e) => setTimeout(e, 100))
        : Promise.resolve()
    );
  }
  get isSafari() {
    const { userAgent: t } = I.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(t);
  }
  set fillGradientStops(t) {
    console.warn(
      "[HTMLTextStyle] fillGradientStops is not supported by HTMLText"
    );
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(t) {
    console.warn(
      "[HTMLTextStyle] fillGradientType is not supported by HTMLText"
    );
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(t) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(t) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(t) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(t) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(t) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
(rr.availableFonts = {}),
  (rr.defaultOptions = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    whiteSpace: "normal",
    wordWrap: !1,
    wordWrapWidth: 100,
  });
let Es = rr;
const vi = class we extends Yi {
  constructor(t = "", e = {}) {
    super(P.EMPTY),
      (this._text = null),
      (this._style = null),
      (this._autoResolution = !0),
      (this.localStyleID = -1),
      (this.dirty = !1),
      (this._updateID = 0),
      (this.ownsStyle = !1);
    const i = new Image(),
      r = P.from(i, {
        scaleMode: I.SCALE_MODE,
        resourceOptions: { autoLoad: !1 },
      });
    (r.orig = new H()), (r.trim = new H()), (this.texture = r);
    const n = "http://www.w3.org/2000/svg",
      a = "http://www.w3.org/1999/xhtml",
      o = document.createElementNS(n, "svg"),
      h = document.createElementNS(n, "foreignObject"),
      l = document.createElementNS(a, "div"),
      d = document.createElementNS(a, "style");
    h.setAttribute("width", "10000"),
      h.setAttribute("height", "10000"),
      (h.style.overflow = "hidden"),
      o.appendChild(h),
      (this.maxWidth = we.defaultMaxWidth),
      (this.maxHeight = we.defaultMaxHeight),
      (this._domElement = l),
      (this._styleElement = d),
      (this._svgRoot = o),
      (this._foreignObject = h),
      this._foreignObject.appendChild(d),
      this._foreignObject.appendChild(l),
      (this._image = i),
      (this._loadImage = new Image()),
      (this._autoResolution = we.defaultAutoResolution),
      (this._resolution = we.defaultResolution ?? I.RESOLUTION),
      (this.text = t),
      (this.style = e);
  }
  measureText(t) {
    var d, c;
    const {
      text: e,
      style: i,
      resolution: r,
    } = Object.assign(
      { text: this._text, style: this._style, resolution: this._resolution },
      t
    );
    Object.assign(this._domElement, { innerHTML: e, style: i.toCSS(r) }),
      (this._styleElement.textContent = i.toGlobalCSS()),
      document.body.appendChild(this._svgRoot);
    const n = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width: a, height: o } = n;
    (a > this.maxWidth || o > this.maxHeight) &&
      console.warn(
        "[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property."
      );
    const h = Math.min(this.maxWidth, Math.ceil(a)),
      l = Math.min(this.maxHeight, Math.ceil(o));
    return (
      this._svgRoot.setAttribute("width", h.toString()),
      this._svgRoot.setAttribute("height", l.toString()),
      e !== this._text && (this._domElement.innerHTML = this._text),
      i !== this._style &&
        (Object.assign(this._domElement, {
          style: (d = this._style) == null ? void 0 : d.toCSS(r),
        }),
        (this._styleElement.textContent =
          (c = this._style) == null ? void 0 : c.toGlobalCSS())),
      { width: h + i.padding * 2, height: l + i.padding * 2 }
    );
  }
  async updateText(t = !0) {
    const { style: e, _image: i, _loadImage: r } = this;
    if (
      (this.localStyleID !== e.styleID &&
        ((this.dirty = !0), (this.localStyleID = e.styleID)),
      !this.dirty && t)
    )
      return;
    const { width: n, height: a } = this.measureText();
    (i.width = r.width = Math.ceil(Math.max(1, n))),
      (i.height = r.height = Math.ceil(Math.max(1, a))),
      this._updateID++;
    const o = this._updateID;
    await new Promise((h) => {
      r.onload = async () => {
        if (o < this._updateID) {
          h();
          return;
        }
        await e.onBeforeDraw(),
          (i.src = r.src),
          (r.onload = null),
          (r.src = ""),
          this.updateTexture(),
          h();
      };
      const l = new XMLSerializer().serializeToString(this._svgRoot);
      r.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(l)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const { style: t, texture: e, _image: i, resolution: r } = this,
      { padding: n } = t,
      { baseTexture: a } = e;
    (e.trim.width = e._frame.width = i.width / r),
      (e.trim.height = e._frame.height = i.height / r),
      (e.trim.x = -n),
      (e.trim.y = -n),
      (e.orig.width = e._frame.width - n * 2),
      (e.orig.height = e._frame.height - n * 2),
      this._onTextureUpdate(),
      a.setRealSize(i.width, i.height, r),
      (this.dirty = !1);
  }
  _render(t) {
    this._autoResolution &&
      this._resolution !== t.resolution &&
      ((this._resolution = t.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._render(t);
  }
  _renderCanvas(t) {
    this._autoResolution &&
      this._resolution !== t.resolution &&
      ((this._resolution = t.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._renderCanvas(t);
  }
  getLocalBounds(t) {
    return this.updateText(!0), super.getLocalBounds(t);
  }
  _calculateBounds() {
    this.updateText(!0),
      this.calculateVertices(),
      this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = !0;
  }
  destroy(t) {
    var i, r, n, a, o;
    typeof t == "boolean" && (t = { children: t }),
      (t = Object.assign({}, we.defaultDestroyOptions, t)),
      super.destroy(t);
    const e = null;
    this.ownsStyle && ((i = this._style) == null || i.cleanFonts()),
      (this._style = e),
      (r = this._svgRoot) == null || r.remove(),
      (this._svgRoot = e),
      (n = this._domElement) == null || n.remove(),
      (this._domElement = e),
      (a = this._foreignObject) == null || a.remove(),
      (this._foreignObject = e),
      (o = this._styleElement) == null || o.remove(),
      (this._styleElement = e),
      (this._loadImage.src = ""),
      (this._loadImage.onload = null),
      (this._loadImage = e),
      (this._image.src = ""),
      (this._image = e);
  }
  get width() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.x) * this._image.width) / this.resolution
    );
  }
  set width(t) {
    this.updateText(!0);
    const e = jt(this.scale.x) || 1;
    (this.scale.x = (e * t) / this._image.width / this.resolution),
      (this._width = t);
  }
  get height() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.y) * this._image.height) / this.resolution
    );
  }
  set height(t) {
    this.updateText(!0);
    const e = jt(this.scale.y) || 1;
    (this.scale.y = (e * t) / this._image.height / this.resolution),
      (this._height = t);
  }
  get style() {
    return this._style;
  }
  set style(t) {
    this._style !== t &&
      ((t = t || {}),
      t instanceof Es
        ? ((this.ownsStyle = !1), (this._style = t))
        : t instanceof Zt
        ? (console.warn(
            "[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"
          ),
          (this.ownsStyle = !0),
          (this._style = Es.from(t)))
        : ((this.ownsStyle = !0), (this._style = new Es(t))),
      (this.localStyleID = -1),
      (this.dirty = !0));
  }
  get text() {
    return this._text;
  }
  set text(t) {
    (t = String(t === "" || t === null || t === void 0 ? " " : t)),
      (t = this.sanitiseText(t)),
      this._text !== t && ((this._text = t), (this.dirty = !0));
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    (this._autoResolution = !1),
      this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
  }
  sanitiseText(t) {
    return t
      .replace(/<br>/gi, "<br/>")
      .replace(/<hr>/gi, "<hr/>")
      .replace(/&nbsp;/gi, "&#160;");
  }
};
(vi.defaultDestroyOptions = { texture: !0, children: !1, baseTexture: !0 }),
  (vi.defaultMaxWidth = 2024),
  (vi.defaultMaxHeight = 2024),
  (vi.defaultAutoResolution = !0);
export {
  vc as A,
  bc as B,
  $r as C,
  Tc as D,
  Ec as F,
  Aa as G,
  Dt as M,
  Ac as N,
  Nt as S,
  Pa as T,
  Wr as a,
  dl as b,
  Tt as c,
  z as d,
  Yi as e,
  P as f,
  ui as g,
};
