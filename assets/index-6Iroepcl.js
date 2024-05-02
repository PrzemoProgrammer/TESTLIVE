var qe = Object.defineProperty;
var Qe = (o, e, t) =>
  e in o
    ? qe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (o[e] = t);
var x = (o, e, t) => (Qe(o, typeof e != "symbol" ? e + "" : e, t), t);
import { r, j as i, R as B } from "./react-CWbZ82Fp.js";
import { c as Ze } from "./react-dom-1bg23oq7.js";
import {
  S as et,
  M as tt,
  b as st,
  c as K,
  T as it,
  e as nt,
  f as at,
  G as ot,
  g as Se,
} from "./@pixi-cAsFVl3M.js";
import "./pixi.js-UbLQVW1G.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { l as rt } from "./socket.io-client-DFi9RC7o.js";
import { d as A } from "./mini-signals-DMh6wOcT.js";
import { g as w } from "./gsap-ZORhgBxb.js";
import { h as ct } from "./howler-BozPm2lL.js";
import { Q as ke, B as de } from "./react-toastify-DdhT_1Lx.js";
import { a as pe } from "./js-cookie-Cz0CWeBA.js";
import "./call-bind-CkPzBTRv.js";
import "./get-intrinsic-B1Ut8WxJ.js";
import "./es-errors-DzOT6E3C.js";
import "./has-symbols-eVqrYdw7.js";
import "./has-proto-JnoBQRdH.js";
import "./function-bind-B8G-TZ45.js";
import "./hasown-B9bXSDSU.js";
import "./set-function-length-Ct5B6P4y.js";
import "./define-data-property-CUxyvwXF.js";
import "./es-define-property-28jGrh5V.js";
import "./gopd-O61WwtTx.js";
import "./has-property-descriptors-Cvfij9iw.js";
import "./scheduler-CzFDRTuY.js";
import "./ismobilejs-CHLuctl-.js";
import "./qs-WFKaZsx0.js";
import "./side-channel-CzTPmnEc.js";
import "./object-inspect-CJVVCa5F.js";
import "./engine.io-client-DBBxzneW.js";
import "./engine.io-parser-BiEtp6m2.js";
import "./@socket.io-Dkula2eQ.js";
import "./socket.io-parser-BBkuslX-.js";
import "./clsx-B-dksMZM.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const c of a.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = t(n);
    fetch(n.href, a);
  }
})();
const lt = {
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundAlpha: 0,
    resolution: window.devicePixelRatio,
    antialias: !0,
    scaleMode: et.LINEAR,
    legacy: !1,
    transparent: !1,
    clearBeforeRender: !0,
    preserveDrawingBuffer: !1,
    forceCanvas: !1,
    cullable: !1,
    autoDensity: !0,
    MIPMAP_TEXTURES: tt.POW2,
  },
  dt = (o) => new st({ ...lt, parent: o }),
  ht = r.forwardRef(function ({ currentActiveScene: e }, t) {
    const s = r.useRef(),
      n = r.useRef(null);
    return (
      r.useLayoutEffect(() => {
        s.current === void 0 &&
          ((s.current = dt("game-container")),
          (globalThis.__PHASER_GAME__ = s.current),
          t !== null &&
            ((t.current = s.current), n.current.appendChild(s.current.view)));
      }, [t]),
      i.jsx("div", { id: "game-container", ref: n })
    );
  });
class ye {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
x(ye, "_app", null);
class re {
  static get app() {
    return ye.app;
  }
  static addChild(e) {
    this.app.stage.addChild(e);
  }
  static removeChild(e) {
    this.app.stage.removeChild(e);
  }
  static addToTicker(e) {
    this.app.ticker.add(e);
  }
}
class U {
  static addScene(e) {
    const t = e.sceneKey;
    this._scenes.set(t, e);
  }
  static getScene(e) {
    return this._scenes.get(e);
  }
  static get scenes() {
    return this._scenes;
  }
  static deleteScene(e) {
    this._scenes.delete(e);
  }
}
x(U, "_scenes", new Map());
class j {
  static addScene(e) {
    e.forEach((t) => {
      U.addScene(t), re.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = U.scenes,
      t = Array.from(e.keys()),
      s = t.length > 0 ? t[0] : void 0;
    s && this.startScene(s);
  }
  static startScene(e, t) {
    const s = this.getScene(e);
    re.addChild(s), s.init(t);
  }
  static removeScene(e) {
    const t = this.getScene(e);
    t == null || t.removeListeners(), re.removeChild(t);
  }
  static getScene(e) {
    return U.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), U.deleteScene(e);
  }
  static setVisible(e, t) {
    const s = this.getScene(e);
    s.visible = t;
  }
}
const ut = 8081,
  gt = 8081;
let Be = `${location.protocol}//${location.hostname}`,
  Ie = `ws://${location.hostname}:${gt}`;
location.protocol == "http:"
  ? (Be += `:${ut}`)
  : (Ie = location.origin.replace(/^http/, "ws")); //! ///////////////////////////////////////////////////
//! ///////////////////////////////////////////////////
class h {}
x(h, "onPlayerJoinRoom", new A.MiniSignal()),
  x(h, "onGetPlayers", new A.MiniSignal()),
  x(h, "onAllPlayerJoined", new A.MiniSignal()),
  x(h, "onChangePlayerTurn", new A.MiniSignal()),
  x(h, "onInitNextRound", new A.MiniSignal()),
  x(h, "onPlayerLeave", new A.MiniSignal()),
  x(h, "onUpdatePlayerTurnAction", new A.MiniSignal()),
  x(h, "onGameResult", new A.MiniSignal()),
  x(h, "onRoomsState", new A.MiniSignal()),
  x(h, "onGameState", new A.MiniSignal()),
  x(h, "onResetGame", new A.MiniSignal()),
  x(h, "onAnnouncement", new A.MiniSignal()),
  x(h, "onBackButtonClick", new A.MiniSignal()),
  x(h, "onPlayerAndGameProfileInformation", new A.MiniSignal()),
  x(h, "onKick", new A.MiniSignal()),
  x(h, "getPlayerAndGameProfileInformation", new A.MiniSignal()),
  x(h, "playerTurnAction", new A.MiniSignal()),
  x(h, "joinGame", new A.MiniSignal()),
  x(h, "getRoomsState", new A.MiniSignal());
class pt {
  constructor() {
    (this.client = null), (this.myId = ""), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await rt(`${Ie}`).on("connect", () => {
      this.myId = this.client.id;
    });
  }
  getUserState(e) {
    this.client.emit("getUserState", e);
  }
  isMyId(e) {
    return this.myId === e;
  }
  get getMyId() {
    return this.myId;
  }
  setupServerListeners() {
    this.client.on("roomsState", (e) => {
      h.onRoomsState.dispatch(e);
    }),
      this.client.on("roomState", (e) => {
        h.onGameState.dispatch(e);
      }),
      this.client.on("playerAndGameProfileInformation", (e) => {
        h.onPlayerAndGameProfileInformation.dispatch(e);
      }),
      this.client.on("getPlayers", (e) => {
        h.onGetPlayers.dispatch(e);
      }),
      this.client.on("playerJoinRoom", (e) => {
        h.onPlayerJoinRoom.dispatch(e);
      }),
      this.client.on("initPreflopRound", (e) => {
        h.onAllPlayerJoined.dispatch(e);
      }),
      this.client.on("updateGameTurn", (e) => {
        h.onChangePlayerTurn.dispatch(e);
      }),
      this.client.on("initNextRound", (e) => {
        h.onInitNextRound.dispatch(e);
      }),
      this.client.on("playerLeaveGame", (e) => {
        h.onPlayerLeave.dispatch(e);
      }),
      this.client.on("updatePlayerTurnAction", (e) => {
        h.onUpdatePlayerTurnAction.dispatch(e);
      }),
      this.client.on("kick", () => {
        h.onKick.dispatch();
      }),
      this.client.on("gameResult", (e) => {
        h.onGameResult.dispatch(e);
      }),
      this.client.on("resetGame", (e) => {
        h.onResetGame.dispatch(e);
      }),
      this.client.on("announcement", (e) => {
        h.onAnnouncement.dispatch(e);
      });
  }
  playerTurnAction(e) {
    this.client.emit("playerTurnAction", e);
  }
  joinGame(e) {
    this.client.emit("playerJoinGame", e);
  }
  playerLeaveRoom() {
    this.client.emit("leaveRoom");
  }
  getPlayerAndGameProfileInformation(e) {
    this.client.emit("getPlayerAndGameProfileInformation", e);
  }
  bindSignals() {
    h.playerTurnAction.add((e) => this.playerTurnAction(e)),
      h.joinGame.add((e) => this.joinGame(e)),
      h.onBackButtonClick.add(() => this.playerLeaveRoom()),
      h.getPlayerAndGameProfileInformation.add((e) =>
        this.getPlayerAndGameProfileInformation(e)
      );
  }
}
const G = new pt();
class fe extends K {
  constructor(e) {
    super(), (this.sceneKey = e), (this.isActive = !1);
  }
  init(e) {
    this.isActive = !0;
  }
}
class se extends it {
  constructor(e) {
    const {
      message: t,
      x: s = 0,
      y: n = 0,
      anchorX: a = 0,
      anchorY: c = 0,
      visible: d = !0,
      isStatic: l = !1,
      scaleX: u = 1,
      scaleY: f = 1,
      textConfig: {
        fontFamily: m = "Arial",
        fontSize: p = 55,
        fill: y = 0,
      } = {},
    } = e;
    super(t, { fontFamily: m, fontSize: p, fill: y }),
      this.anchor.set(a, c),
      this.position.set(s, n),
      (this.visible = d),
      (this.scale.x = u),
      (this.scale.y = f),
      (this.cacheAsBitmap = l),
      this.updateMessage(t);
  }
  updateMessage(e) {
    this.text = e;
  }
  get getTextInNumber() {
    return parseInt(this.text);
  }
}
class F extends K {
  constructor() {
    super();
  }
}
class he {
  static addImage(e, t) {
    this.images.set(e, t);
  }
  static getImage(e) {
    return this.images.get(e);
  }
}
x(he, "images", new Map());
class Q {
  static addImage(e, t) {
    he.addImage(e, t);
  }
  static getImage(e) {
    return he.getImage(e);
  }
}
class T extends nt {
  constructor(e) {
    const {
        textureKey: t,
        x: s = 0,
        y: n = 0,
        anchorX: a = 0.5,
        anchorY: c = 0.5,
        visible: d = !0,
        scaleX: l = 1,
        scaleY: u = 1,
        angle: f = 0,
        tint: m = 16777215,
        isStatic: p = !0,
        interactive: y = !1,
        eventMode: g = "none",
      } = e,
      S = Q.getImage(t);
    super(S),
      this.anchor.set(a, c),
      this.position.set(s, n),
      (this.scale.x = l),
      (this.scale.y = u),
      (this.angle = f),
      (this.tint = m),
      (this.visible = d),
      (this.filters = null),
      (this.eventMode = g),
      (this.interactiveChildren = y),
      (this.cacheAsBitmap = p);
  }
  changeTexture(e) {
    const t = Q.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  changeTextureURL(e) {
    const t = at.from(e);
    (this.texture = t), (this.width = 39), (this.height = 39);
  }
  setVisible(e) {
    this.visible = e;
  }
}
function N(o) {
  return parseInt(o).toLocaleString("en", { useGrouping: !0 });
}
class ue extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visibleOnInit = this.config.visible),
      (this.image = this.createBetImage()),
      (this.text = this.createBetsCountText()),
      this.setVisible(this.visibleOnInit);
  }
  createBetImage() {
    const e = this.config.image,
      t = new T(e);
    return t && this.addChild(t), t;
  }
  createBetsCountText() {
    const e = this.config.text,
      t = new se(e);
    return this.addChild(t), t;
  }
  setVisible(e) {
    this.visible = e;
  }
  updateText(e) {
    this.text.updateMessage(N(e));
  }
  reset() {
    (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visible = !1),
      this.text.updateMessage(0);
  }
}
const yt = 1e3,
  Z = { deal: "deal_card", slide: "slide_card", turn: "turn_card" },
  ft = {
    nextAnimDelay: 200,
    nextCardDeal: 100,
    cardScale: { owner: 1, other: 1 },
  },
  mt = { duration: 0.1, ease: "none", yoyo: !0, repeat: 1 },
  bt = { duration: 0.5, ease: "circ.out", angle: 360, scaleOnStart: 0.5 },
  xt = { duration: 0.3, ease: "none" },
  Pt = { duration: 0.3, ease: "none", scale: 1.5 };
function H() {
  return window.innerWidth / window.innerHeight <= 1;
}
const we = { y: H() ? 426 : 520, duration: 0.2, ease: "none" };
class Le extends T {
  constructor(e) {
    super(e), (this.config = e), (this.isTurned = !1), (this.isSlideDown = !1);
  }
  async turnOverAnim(e) {
    const { duration: t, ease: s, yoyo: n, repeat: a } = mt;
    await w.to(this, {
      width: 0,
      duration: t,
      ease: s,
      yoyo: n,
      repeat: a,
      onRepeat: () => {
        this.changeTexture(e), (this.isTurned = !0);
      },
    });
  }
  dealAnim(e, t, s) {
    const { duration: n, ease: a, scaleOnStart: c, angle: d } = bt,
      l = { scale: this.scale.x * c, angle: this.angle, x: this.x, y: this.y };
    (this.visible = !0),
      w.to(l, {
        scale: s,
        angle: this.angle + d,
        x: e,
        y: t,
        duration: n,
        ease: a,
        onUpdate: () => {
          (this.angle = l.angle),
            this.setScale(l.scale),
            (this.x = l.x),
            (this.y = l.y);
        },
      });
  }
  spreadCardAnim(e) {
    const t = e * 35;
    w.to(this, { x: t, duration: 0.3, ease: "none" });
  }
  moveDownAnim() {
    const e = this.y + 9;
    w.to(this, { y: e, duration: 0.3, ease: "back.out" });
  }
  async slideFromTopAnim() {
    const { ease: e, duration: t, y: s } = we;
    (this.visible = !0),
      await w.to(this, {
        y: s,
        duration: t,
        ease: e,
        onComplete: () => {
          this.isSlideDown = !0;
        },
      });
  }
  async moveXAnim(e) {
    const { ease: t, duration: s } = xt;
    await w.to(this, { x: e, duration: s, ease: t });
  }
  setYPosition(e) {
    this.y = e;
  }
  setScale(e) {
    (this.scale.x = e), (this.scale.y = e);
  }
  setVisible(e) {
    this.visible = e;
  }
  get isPlacedOnTable() {
    return this.isTurned && this.isSlideDown;
  }
  turnOver(e) {
    this.changeTexture(e), (this.isTurned = !0);
  }
  putOnTable() {
    const { y: e } = we;
    (this.y = e), (this.isSlideDown = !0);
  }
  reset() {
    (this.isTurned = !1),
      (this.isSlideDown = !1),
      (this.visible = !1),
      this.changeTexture(this.config.textureKey),
      (this.y = this.config.y),
      (this.x = this.config.x),
      (this.scale.x = this.config.scaleX),
      (this.scale.y = this.config.scaleY);
  }
}
class ge {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
}
x(ge, "audio", new Map());
class v {
  static addAudio(e, t) {
    return new Promise((s) => {
      const n = new ct.Howl({ src: [t], html5: !1, onload: () => s(1) });
      ge.addAudio(e, n);
    });
  }
  static getAudio(e) {
    return ge.getAudio(e);
  }
  static playAudio(e) {
    this.getAudio(e).play();
  }
  static stopAudio(e) {
    const t = this.getAudio(e);
    t.fade(1, 0, 1e3),
      setTimeout(() => {
        t.stop(), t.fade(0, 1, 0);
      }, 1e3);
  }
  static offAudio(e) {
    this.getAudio(e).fade(1, 0, 1e3);
  }
  static onAudio(e) {
    this.getAudio(e).fade(0, 1, 1e3);
  }
}
class Ct extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.initCardCount = this.config.count),
      (this.cardsSpace = this.config.space),
      (this.cards = []),
      this.initCards();
  }
  initCards() {
    const e = this.config.count;
    for (let t = 0; t < e; t++) {
      const s = this.config.config,
        n = this.createCard(s);
      n && this.cards.push(n);
    }
  }
  async layOutFirstCards() {
    const e = this.cardsSpace,
      t = this.cards[0].x,
      s = [];
    for (let n = 1; n < this.cards.length; n++) {
      const a = this.getCard(n),
        c = t + n * e,
        d = a.moveXAnim(c);
      s.push(d);
    }
    await Promise.all(s);
  }
  async newCardsTurnOverAnim(e, t) {
    const s = e.length,
      n = t + s;
    for (let a = t; a < n; a++) {
      const c = e[a - t].name;
      await this.turnOverCardAnim(a, c);
    }
  }
  async newCardsSlideFromTopAnim(e, t) {
    const s = t + e;
    for (let n = t; n < s; n++) await this.slideCardFormTopAnim(n);
  }
  async slideCardFormTopAnim(e) {
    const t = Z.slide;
    v.playAudio(t), await this.getCard(e).slideFromTopAnim();
  }
  async turnOverCardAnim(e, t) {
    const s = Z.turn;
    v.playAudio(s), await this.getCard(e).turnOverAnim(t);
  }
  async dealCardsToTable(e) {
    const t = e.length,
      s = this.getTableLaidCardsLength;
    await this.newCardsSlideFromTopAnim(t, s),
      s === 0 && (await this.layOutFirstCards()),
      await this.newCardsTurnOverAnim(e, s);
  }
  dealCardsToTableNotAnim(e) {
    this.layOutFirstCards();
    for (let t = 0; t < e.length; t++) {
      const s = this.cards[t],
        n = e[t].name;
      s.turnOver(n), s.putOnTable(), (s.visible = !0);
    }
  }
  createCard(e) {
    const t = e,
      s = new Le(t);
    return s !== null && this.addChild(s), s;
  }
  getCard(e) {
    return this.cards[e];
  }
  get getTableLaidCardsLength() {
    return this.cards.filter((e) => e.isPlacedOnTable === !0).length;
  }
  reset() {
    this.cards.forEach((e) => {
      e.reset();
    });
  }
}
const St = {
    bet: {
      x: 956,
      y: 428,
      visible: !1,
      image: { textureKey: "player_chips_icon", x: 0, y: 0, isStatic: !1 },
      background: { textureKey: "bet_background", x: 0, y: 0, isStatic: !1 },
      text: {
        message: 0,
        x: 0,
        y: 23,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        visible: !0,
        textConfig: { fontFamily: "Arial", fontSize: 19, fill: 16777215 },
      },
    },
    card: {
      count: 5,
      space: 76,
      config: {
        textureKey: "card_hidden",
        x: 815,
        y: -400,
        isStatic: !1,
        scaleX: 0.9,
        scaleY: 0.9,
      },
    },
    cardSlots: {
      count: 5,
      offsetX: 76,
      x: 805,
      y: 510,
      spriteConfig: { textureKey: "card_slot", x: 0, y: 0, isStatic: !0 },
    },
    potSizeText: {
      message: "Pot size",
      x: 957,
      y: 407,
      scaleX: 0.5,
      scaleY: 0.5,
      anchorX: 0.5,
      anchorY: 0.5,
      textConfig: { fontFamily: "Arial", fontSize: 30, fill: 16777215 },
    },
  },
  wt = {
    bet: {
      x: 743,
      y: 335,
      visible: !1,
      image: { textureKey: "player_chips_icon", x: 0, y: 0, isStatic: !1 },
      background: { textureKey: "bet_background", x: 0, y: 0, isStatic: !1 },
      text: {
        message: 0,
        x: 0,
        y: 23,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        visible: !0,
        textConfig: { fontFamily: "Arial", fontSize: 19, fill: 16777215 },
      },
    },
    card: {
      count: 5,
      space: 76,
      config: {
        textureKey: "card_hidden",
        x: 600,
        y: -600,
        isStatic: !1,
        scaleX: 0.9,
        scaleY: 0.9,
      },
    },
    cardSlots: {
      count: 5,
      offsetX: 76,
      x: 592,
      y: 416,
      spriteConfig: { textureKey: "card_slot", x: 0, y: 0, isStatic: !0 },
    },
    potSizeText: {
      message: "Pot size",
      x: 744,
      y: 313,
      scaleX: 0.5,
      scaleY: 0.5,
      anchorX: 0.5,
      anchorY: 0.5,
      textConfig: { fontFamily: "Arial", fontSize: 30, fill: 16777215 },
    },
  },
  vt = H() ? wt : St,
  ce = 1920,
  le = 1080,
  ve = 1080,
  Ae = 1920;
class z {
  static resizeScreen(e, t) {
    this._isPortraitOrientation = H();
    const s = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, s), this.resizeGame(t, s);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / ce, window.innerHeight / le);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / Ae, window.innerWidth / ve);
  }
  static get isPortraitOrientation() {
    return this._isPortraitOrientation;
  }
  static resizeGame(e, t) {
    const s = (window.innerWidth - ce * t) / 2,
      n = (window.innerHeight - le * t) / 2;
    e.stage.position.set(s, n), e.stage.scale.set(t);
  }
  static resizeUI(e, t) {
    const s = this._isPortraitOrientation ? ve : ce,
      n = this._isPortraitOrientation ? Ae : le,
      a = (window.innerHeight - n * t) / 2,
      c = (window.innerWidth - s * t) / 2;
    e.resize({
      width: `${s}px`,
      height: `${n}px`,
      left: `${c}px`,
      top: `${a}px`,
      transform: `scale(${t})`,
    }),
      this.resizeUIElements(e, a, t);
  }
  static resizeUIElements(e, t, s) {
    const n = window.innerHeight / s;
    let a = 0,
      c = 0;
    this._isPortraitOrientation, (a = window.innerHeight * 0.03), (c = 50);
    const d = n - e.bottomBarHeight - t / s - a,
      l = -(t / s) + c;
    e.resizeBottomBar({ top: `${d}px` }), e.resizeTopBar({ top: `${l}px` });
  }
}
x(z, "_isPortraitOrientation", H());
class At extends K {
  constructor() {
    super(),
      (this.config = vt),
      (this.table = this.createTable()),
      (this.potSizeText = this.createPotSizeText()),
      (this.cardSlots = this.createCardSlots()),
      (this.cards = this.createCards()),
      (this.totalBets = this.createTotalBets()),
      (this.winnerBets = this.createWinnerBets());
  }
  createTable() {
    const e = {
        textureKey: "table",
        x: z.isPortraitOrientation ? 723 : 987,
        y: z.isPortraitOrientation ? 453 : 530,
        angle: z.isPortraitOrientation ? 90 : 0,
        isStatic: !0,
      },
      t = new T(e);
    return this.addChild(t), t;
  }
  createPotSizeText() {
    const e = new se(this.config.potSizeText);
    return this.addChild(e), e;
  }
  createCardSlots() {
    const {
        count: e,
        offsetX: t,
        x: s,
        y: n,
        spriteConfig: a,
      } = this.config.cardSlots,
      c = new K();
    for (let d = 0; d < e; d++) {
      let l = { ...a };
      l.x = d * t;
      const u = new T(l);
      c.addChild(u);
    }
    (c.x = s), (c.y = n), this.addChild(c);
  }
  createTotalBets() {
    const e = this.config.bet,
      t = new ue(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = this.config.card,
      t = new Ct(e);
    return this.addChild(t), t;
  }
  createWinnerBets() {
    const e = new K();
    for (let t = 0; t < 5; t++) {
      const s = this.config.bet,
        n = new ue(s);
      e.addChild(n);
    }
    return this.addChild(e), e;
  }
}
class Tt {
  constructor() {
    this.table = null;
  }
  createTable() {
    return (this.table = new At()), this.table;
  }
  get getCards() {
    return this.table.cards;
  }
  get getTotalBetsText() {
    return this.table.totalBets;
  }
  updateTotalBetsText(e) {
    this.table.totalBets.updateText(e);
  }
  setTotalBetsVisible(e) {
    this.table.totalBets.setVisible(e);
  }
  get winnerBets() {
    return this.table.winnerBets;
  }
  reset() {
    this.table.cards.reset(),
      this.table.totalBets.reset(),
      this.table.winnerBets.children.forEach((e) => {
        e.reset();
      });
  }
}
const _t = { duration: 1, ease: "circ.out" },
  ee = class ee {
    static initTable(e) {
      const t = this.tableAdapter.createTable();
      e.addChild(t), this.startCreateTableTween();
    }
    static async layOutCards(e, t = !0) {
      const s = this.tableAdapter.getCards;
      if (!t) {
        s.dealCardsToTableNotAnim(e);
        return;
      }
      await s.dealCardsToTable(e);
    }
    static updateTotalBetsTextAndMakeVisible(e) {
      this.setTotalBetsTextVisible(!0),
        this.tableAdapter.updateTotalBetsText(e);
    }
    static setTotalBetsTextVisible(e) {
      this.tableAdapter.setTotalBetsVisible(e);
    }
    static async moveBetsToWinnerAnim(e, t, s, n) {
      const { ease: a, duration: c } = _t,
        l = this.tableAdapter.winnerBets.children[n];
      l.updateText(s),
        l.setVisible(!0),
        await w.to(l, {
          y: t,
          x: e,
          duration: c,
          ease: a,
          onComplete: () => {
            l.setVisible(!1);
          },
        });
    }
    static getTableImage() {
      return this.tableAdapter.table.table;
    }
    static startCreateTableTween() {
      const e = this.getTableImage();
      e.scale.set(0.3),
        (this.createTableTween = w.to(e.scale, {
          x: 1,
          y: 1,
          duration: 0.3,
          ease: "back.out",
          onComplete: () => {
            this.createTableTween = null;
          },
        }));
    }
    static reset() {
      this.tableAdapter.reset(), (this.createTableTween = null);
    }
  };
(ee.tableAdapter = new Tt()), (ee.createTableTween = null);
let R = ee;
const me = class me {
  static addPlayer(e) {
    const t = e.id;
    this.players[t] = e;
  }
  static get getPlayers() {
    return this.players;
  }
  static getPlayer(e) {
    return this.players[e];
  }
  static deletePlayer(e) {
    delete this.players[e];
  }
};
me.players = {};
let W = me;
const kt = 2,
  je = ["fold", "check", "call", "raise", "bet"],
  Bt = {
    player1: {
      sitPosition: { x: 967, y: 792 },
      betPosition: { x: -6, y: -140 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 150, y: -500 },
          { x: 150, y: -500 },
        ],
        dealAnimEndPositions: [
          { x: -1, y: -60 },
          { x: -10, y: -51 },
        ],
      },
    },
    player2: {
      sitPosition: { x: 454, y: 504 },
      betPosition: { x: 172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 580, y: -290 },
          { x: 580, y: -290 },
        ],
        dealAnimEndPositions: [
          { x: 2, y: -57 },
          { x: -7, y: -48 },
        ],
      },
    },
    player3: {
      sitPosition: { x: 658, y: 232 },
      betPosition: { x: -11, y: 73 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 410, y: 50 },
          { x: 410, y: 50 },
        ],
        dealAnimEndPositions: [
          { x: 3, y: -54 },
          { x: -6, y: -47 },
        ],
      },
    },
    player4: {
      sitPosition: { x: 1282, y: 232 },
      betPosition: { x: -11, y: 73 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: -400, y: 50 },
          { x: -400, y: 50 },
        ],
        dealAnimEndPositions: [
          { x: 2, y: -56 },
          { x: -6, y: -47 },
        ],
      },
    },
    player5: {
      sitPosition: { x: 1455, y: 504 },
      betPosition: { x: -172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: -580, y: -290 },
          { x: -580, y: -290 },
        ],
        dealAnimEndPositions: [
          { x: 1, y: -58 },
          { x: -8, y: -49 },
        ],
      },
    },
  },
  It = {
    player1: {
      sitPosition: { x: 751, y: 930 },
      betPosition: { x: -6, y: -140 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 0, y: -958 },
          { x: 0, y: -958 },
        ],
        dealAnimEndPositions: [
          { x: -1, y: -60 },
          { x: -10, y: -51 },
        ],
      },
    },
    player2: {
      sitPosition: { x: 480, y: 650 },
      betPosition: { x: 172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 297, y: -705 },
          { x: 297, y: -705 },
        ],
        dealAnimEndPositions: [
          { x: 2, y: -57 },
          { x: -7, y: -48 },
        ],
      },
    },
    player3: {
      sitPosition: { x: 480, y: 154 },
      betPosition: { x: 172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: 260, y: -216 },
          { x: 260, y: -216 },
        ],
        dealAnimEndPositions: [
          { x: 3, y: -54 },
          { x: -6, y: -47 },
        ],
      },
    },
    player4: {
      sitPosition: { x: 1013, y: 154 },
      betPosition: { x: -172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: -260, y: -216 },
          { x: -260, y: -216 },
        ],
        dealAnimEndPositions: [
          { x: 2, y: -56 },
          { x: -6, y: -47 },
        ],
      },
    },
    player5: {
      sitPosition: { x: 1013, y: 650 },
      betPosition: { x: -172, y: -2 },
      cardsPositions: {
        dealAnimStartPositions: [
          { x: -297, y: -705 },
          { x: -297, y: -705 },
        ],
        dealAnimEndPositions: [
          { x: 1, y: -58 },
          { x: -8, y: -49 },
        ],
      },
    },
  },
  Lt = H() ? It : Bt;
class b {
  static addPlayer(e) {
    W.addPlayer(e);
  }
  static getPlayers() {
    return W.getPlayers;
  }
  static getPlayersCount() {
    const e = this.getPlayers();
    return Object.keys(e).length;
  }
  static getPlayer(e) {
    return W.getPlayer(e);
  }
  static updatePlayerMoneyText(e, t, s) {
    t[e].updateMoneyText(s);
  }
  static updatePlayerBet(e, t, s) {
    this.getPlayer(e) && (t[e].updateBets(s), s > 0 && t[e].setBetVisible(!0));
  }
  static updatePlayerPosition(e, t, s) {
    t[e].updateGamePosition(s);
  }
  static checkDisplayDealerSign(e, t, s) {
    s === "dealer" && t[e].setDealerSignVisible(!0);
  }
  static async playDealCardsForPlayersAnim() {
    const e = this.getPlayers(),
      {
        nextAnimDelay: t,
        nextCardDeal: s,
        cardScale: { owner: n, other: a },
      } = ft,
      c = (d) => new Promise((l) => setTimeout(l, d));
    for (let d = 0; d < kt; d++) {
      await c(s);
      for (const l in e)
        if (e.hasOwnProperty(l)) {
          await c(t);
          const u = G.isMyId(l) ? n : a;
          e[l].startDealCardsAnim(d, u);
        }
    }
  }
  static turnOverPlayersCardsAnim(e, t) {
    const s = this.getPlayers(),
      n = G.getMyId,
      a = (c) => {
        const d = e[c],
          l = s[c];
        l && !l.isInLobby && l.turnOverCards(d);
      };
    if (t) a(n);
    else for (const c in s) G.isMyId(c) || a(c);
  }
  static resetPlayersBets() {
    const e = this.getPlayers();
    for (const t in e) {
      const s = e[t];
      s && s.resetBet();
    }
  }
  static setPlayersCardsVisible() {
    const e = this.getPlayers();
    for (const t in e) {
      const s = e[t],
        n = s.getCards();
      if ((s.setCardsVisible(!0), s.isInLobby)) return;
      n.forEach((a) => {
        a.visible = !0;
      });
    }
  }
  static deletePlayers() {
    const e = this.getPlayers();
    for (const t in e) this.deletePlayer(t);
  }
  static deletePlayer(e) {
    const t = this.getPlayer(e);
    t && t.destroy(), W.deletePlayer(e);
  }
  static turnOffActiveRoundEffects() {
    const e = this.getPlayers();
    for (const t in e) {
      const s = e[t];
      if (!s) return;
      s.turnOffTimer(), s.handleBackgroundLightVisible(!1);
    }
  }
  static startWInAnim(e) {
    b.getPlayer(e).startShowWInImageAnim();
  }
  static setPlayerActionSignVisible(e, t) {
    const n = this.getPlayers()[e];
    n && n.setPlayerActionSignVisible(t);
  }
  static setPlayersSignsVisible(e) {
    const t = this.getPlayers();
    for (const s in t) this.setPlayerActionSignVisible(s, e);
  }
  static resetPlayersData() {
    const e = this.getPlayers();
    for (const t in e) {
      const s = e[t];
      if (!s) return;
      s.resetTweens(),
        s.handleBackgroundLightVisible(!1),
        s.setAlpha(1),
        s.setPlayerActionSignVisible(!1),
        s.resetBet(),
        s.setDealerSignVisible(!1),
        s.resetCards(),
        s.handleWinImageVisible(!1);
    }
  }
}
const te = class te {
  static convertConfigToArray() {
    return Object.values(Lt);
  }
  static setupConfigPositions(e) {
    for (let t = 0; t < e - 1; t++) {
      const s = this.positionsConfig.pop();
      s && this.positionsConfig.unshift(s);
    }
  }
  static getPositionsConfig(e) {
    return this.positionsConfig[e - 1];
  }
  static reset() {
    this.positionsConfig = this.convertConfigToArray();
  }
};
te.positionsConfig = te.convertConfigToArray();
let X = te;
const jt = ["check_sign", "call_sign", "raise_sign"],
  q = {
    playerTurnStart: "player_turn_start",
    playerTurnEnd: "player_turn_end",
    playerLeave: "player_leave",
  },
  Rt = {
    x: 0,
    y: 0,
    id: "1",
    sit: 1,
    inLobby: !1,
    position: "player",
    background: { textureKey: "avatar_background", x: 0, y: 0, isStatic: !1 },
    backgroundLight: {
      textureKey: "player_background_light",
      x: 0,
      y: 0,
      isStatic: !1,
      visible: !1,
    },
    avatar: { textureKey: "default_avatar", x: -92, y: 18, isStatic: !1 },
    avatarMask: { textureKey: "avatar_mask", x: -92, y: 18, isStatic: !1 },
    nickname: {
      message: "Guest",
      x: -60,
      y: 4,
      scaleX: 0.5,
      scaleY: 0.5,
      angle: 0,
      anchorX: 0,
      anchorY: 0.5,
      visible: !0,
      textConfig: { fontFamily: "Arial", fontSize: 28, fill: 12961479 },
    },
    moneyContainer: {
      x: -38,
      y: 26,
      money: {
        message: 0,
        x: 0,
        y: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        angle: 0,
        anchorX: 0,
        anchorY: 0.5,
        visible: !0,
        textConfig: { fontFamily: "Arial", fontSize: 28, fill: 16777215 },
      },
      moneyIcon: {
        offsetX: 15,
        image: { textureKey: "player_chips_icon", x: 0, y: 0, isStatic: !1 },
      },
    },
    bet: {
      x: 100,
      y: 100,
      visible: !1,
      image: { textureKey: "player_chips_icon", x: 0, y: 0, isStatic: !1 },
      background: { textureKey: "bet", x: 0, y: 0, isStatic: !1 },
      text: {
        message: 0,
        x: 0,
        y: 20,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        anchorX: 0.5,
        anchorY: 0.5,
        visible: !0,
        textConfig: { fontFamily: "Arial", fontSize: 15, fill: 16777215 },
      },
    },
    dealerSign: {
      textureKey: "dealer_sign",
      x: -82,
      y: -37,
      visible: !1,
      isStatic: !1,
    },
    actionSign: {
      textureKey: "check_sign",
      x: -101,
      y: -81,
      visible: !1,
      isStatic: !1,
    },
    winImage: {
      textureKey: "winner_sign",
      x: -10,
      y: 34,
      visible: !1,
      isStatic: !1,
    },
    cards: [
      {
        textureKey: "card_hidden",
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        visible: !1,
        isStatic: !1,
      },
      {
        textureKey: "card_hidden",
        x: 30,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        visible: !1,
        isStatic: !1,
      },
    ],
    cardsAnimPositions: {
      animStartPosition: [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
      ],
      animEndPosition: [
        { x: 100, y: 0 },
        { x: 100, y: 0 },
      ],
    },
    timer: {
      countdownSeconds: 15,
      fps: 60,
      progressBar: {
        x: -21,
        y: 55,
        background: {
          textureKey: "timer_bar_background",
          x: 13,
          y: 0,
          isStatic: !1,
        },
        container: {
          textureKey: "timer_bar_container",
          x: 0,
          y: 0,
          isStatic: !1,
        },
        bar: { textureKey: "timer_bar", x: 13, y: 0, isStatic: !1 },
        mask: { x: -101, y: -10, width: 227, height: 19 },
      },
    },
  };
class Mt extends F {
  constructor() {
    super(),
      (this.dealAnimStartPositions = []),
      (this.dealAnimEndPositions = []),
      (this.cards = []);
  }
  createCard(e) {
    const t = e,
      s = new Le(t);
    return s !== null && this.addChild(s), s;
  }
  dealAnim(e, t, s, n) {
    const a = Z.deal;
    v.playAudio(a), e.dealAnim(t, s, n);
  }
  resetCardsAnimPositions(e) {
    (this.cards[e].x = this.dealAnimStartPositions[e].x),
      (this.cards[e].y = this.dealAnimStartPositions[e].y);
  }
  addCard(e) {
    const t = this.createCard(e);
    t !== null && this.cards.push(t);
  }
  addCards(e) {
    for (let t = 0; t < e.length; t++) {
      const s = e[t];
      this.addCard(s);
    }
  }
  startDealAnim(e, t) {
    const s = this.dealAnimEndPositions[e].x,
      n = this.dealAnimEndPositions[e].y,
      a = this.cards[e];
    a.setVisible(!0),
      this.resetCardsAnimPositions(e),
      this.dealAnim(a, s, n, t);
  }
  getCards() {
    return this.cards;
  }
  turnOverCardsAnim(e) {
    for (let t = 0; t < this.cards.length; t++) {
      const s = this.cards[t];
      let n = 0;
      const a = e[t].name;
      s.turnOverAnim(a),
        t === 0 && ((n = 1), s.moveDownAnim()),
        t === 1 && (n = -1),
        s.spreadCardAnim(n);
    }
  }
  setAnimStartPosition(e) {
    this.dealAnimStartPositions = e;
  }
  setAnimEndPosition(e) {
    this.dealAnimEndPositions = e;
  }
  async startScaleUpCardsAnim() {
    const { duration: e, ease: t, scale: s } = Pt,
      n = { scale: this.scale.x };
    await w.to(n, {
      scale: s,
      duration: e,
      ease: t,
      onUpdate: () => {
        this.setScale(n.scale);
      },
    });
  }
  setScale(e) {
    (this.scale.x = e), (this.scale.y = e);
  }
  reset() {
    this.cards.forEach((e) => {
      this.setScale(1), e.reset();
    });
  }
}
class Ot extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.x = this.config.x),
      (this.y = this.config.y),
      (this.maskWidth = this.config.mask.width),
      (this.bar = this.createBar()),
      (this.barMask = this.createBarMask(this.maskWidth)),
      (this.bar.mask = this.barMask);
  }
  createBackground() {
    const e = this.config.background,
      t = new T(e);
    return t && this.addChild(t), t;
  }
  createContainer() {
    const e = this.config.container,
      t = new T(e);
    return t && this.addChild(t), t;
  }
  createBar() {
    const e = this.config.bar,
      t = new T(e);
    return t && this.addChild(t), t;
  }
  createBarMask(e) {
    const { x: t, y: s, height: n } = this.config.mask,
      a = new ot();
    return (
      a.beginFill(16711680),
      a.drawRect(t, s, e, n),
      a.endFill(),
      this.addChild(a),
      a
    );
  }
  updateBar(e) {
    this.barMask.clear(),
      (this.barMask = this.createBarMask(e)),
      (this.bar.mask = this.barMask);
  }
  get getBarMaskWidth() {
    return this.barMask.width;
  }
  resetMaskWidth() {
    this.updateBar(this.maskWidth);
  }
}
class Vt extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.fps = this.config.fps),
      (this.countdownInterval = null),
      (this.progressBar = this.createProgressBar());
  }
  createProgressBar() {
    const e = this.config.progressBar,
      t = new Ot(e);
    return t && this.addChild(t), t;
  }
  startCountdown(e, t) {
    const s = this.calculatePlayerTurnTime(e, t);
    this.setVisible(!0);
    const a = this.progressBar.getBarMaskWidth / (s * this.fps);
    this.countdownInterval = setInterval(() => {
      const c = this.progressBar.getBarMaskWidth;
      if (c > 1) {
        let d = c - a;
        this.progressBar.updateBar(d);
      } else this.resetTimer();
    }, 1e3 / this.fps);
  }
  stopCountdown() {
    this.countdownInterval && clearInterval(this.countdownInterval);
  }
  setVisible(e) {
    this.visible = e;
  }
  resetTimer() {
    this.setVisible(!1),
      this.stopCountdown(),
      this.progressBar.resetMaskWidth();
  }
  get getActualTime() {
    return new Date().getTime();
  }
  calculatePlayerTurnTime(e, t) {
    return t - Math.floor((this.getActualTime - e) / 1e3);
  }
}
class Et extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.x = this.config.x),
      (this.y = this.config.y),
      (this.money = this.createMoney()),
      (this.moneyIcon = this.createMoneyIcon()),
      this.updateIconPosition();
  }
  createMoney() {
    const e = this.config.money,
      t = new se(e);
    return t.updateMessage(N(e.message)), this.addChild(t), t;
  }
  createMoneyIcon() {
    const e = this.config.moneyIcon,
      t = new T(e.image);
    return this.addChild(t), t;
  }
  updateMoneyText(e) {
    this.money.updateMessage(N(e)), this.updateIconPosition();
  }
  updateIconPosition() {
    this.moneyIcon.x = this.money.x - this.config.moneyIcon.offsetX;
  }
}
class Gt extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.x = this.config.x),
      (this.y = this.config.y),
      (this.id = this.config.id),
      (this.gamePosition = this.config.position),
      (this.background = this.createBackground()),
      (this.backgroundLight = this.createBackgroundLight()),
      (this.avatarSprite = this.createAvatar()),
      (this.avatarSpriteMask = this.createAvatarMask()),
      (this.nickname = this.createNickname()),
      (this.money = this.createMoney()),
      (this.dealerSign = this.createDealerSign()),
      (this.bet = this.createBet()),
      (this.timer = this.createTimer()),
      (this.actionSign = this.createActionSign()),
      (this.winImage = this.createWinSprite()),
      (this.cards = this.createCards()),
      (this.avatarSprite.mask = this.avatarSpriteMask),
      e.inLobby && (this.alpha = 0.5);
  }
  createBackground() {
    const e = this.config.background,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createBackgroundLight() {
    const e = this.config.backgroundLight,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatar() {
    const e = this.config.avatar,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatarMask() {
    const e = this.config.avatarMask,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createNickname() {
    const e = this.config.nickname,
      t = new se(e);
    return this.addChild(t), t;
  }
  createMoney() {
    const e = this.config,
      t = new Et(e.moneyContainer);
    return this.addChild(t), t;
  }
  createBet() {
    const e = this.config.bet,
      t = new ue(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = new Mt();
    return (
      e.addCards(this.config.cards),
      e.setAnimStartPosition(this.config.cardsAnimPositions.animStartPosition),
      e.setAnimEndPosition(this.config.cardsAnimPositions.animEndPosition),
      this.addChild(e),
      e
    );
  }
  createTimer() {
    const e = this.config.timer,
      t = new Vt(e);
    return t.setVisible(!1), this.addChild(t), t;
  }
  createDealerSign() {
    const e = this.config.dealerSign,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createActionSign() {
    const e = this.config.actionSign,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
  createWinSprite() {
    const e = this.config.winImage,
      t = new T(e);
    return t !== null && this.addChild(t), t;
  }
}
class Dt {
  constructor(e) {
    (this.playerComponents = new Gt(e)),
      (this.config = e),
      (this.id = this.config.id),
      (this.isInLobby = this.config.inLobby),
      (this.gamePosition = this.config.position),
      (this.createPlayerTween = null),
      (this.showWinImageTween = null),
      this.startScaleTween();
  }
  get getPlayerComponents() {
    return this.playerComponents;
  }
  updateMoneyText(e) {
    this.playerComponents.money.updateMoneyText(e);
  }
  updateGamePosition(e) {
    this.playerComponents.gamePosition = e;
  }
  startDealCardsAnim(e, t) {
    this.playerComponents.cards.startDealAnim(e, t);
  }
  async startScaleUpCardsAnim() {
    await this.playerComponents.cards.startScaleUpCardsAnim();
  }
  updateBets(e) {
    this.playerComponents.bet.text.updateMessage(N(e));
  }
  setBetVisible(e) {
    this.playerComponents.bet.setVisible(e);
  }
  getCards() {
    return this.playerComponents.cards.getCards();
  }
  turnOverCards(e) {
    this.playerComponents.cards.turnOverCardsAnim(e);
  }
  startTimer(e, t) {
    this.playerComponents.timer.startCountdown(e, t);
  }
  resetBet() {
    this.playerComponents.bet.setVisible(!1),
      this.playerComponents.bet.updateText(0);
  }
  setDealerSignVisible(e) {
    var t;
    (t = this.playerComponents.dealerSign) == null || t.setVisible(e);
  }
  turnOffTimer() {
    this.playerComponents.timer.resetTimer();
  }
  destroy() {
    this.playerComponents.destroy();
  }
  setPlayerActionSignVisible(e) {
    var t;
    (t = this.playerComponents.actionSign) == null || t.setVisible(e);
  }
  setPlayerSignTexture(e) {
    var t;
    (t = this.playerComponents.actionSign) == null || t.changeTexture(e);
  }
  setActionSignAndTextureVisible(e, t) {
    this.setPlayerSignTexture(e), this.setPlayerActionSignVisible(t);
  }
  get getPosition() {
    const { x: e, y: t } = this.playerComponents;
    return { x: e, y: t };
  }
  resetCards() {
    this.playerComponents.cards.reset();
  }
  setAlpha(e) {
    this.playerComponents.alpha = e;
  }
  setCardsVisible(e) {
    this.playerComponents.cards.visible = e;
  }
  handleBackgroundLightVisible(e) {
    this.playerComponents.backgroundLight.visible = e;
  }
  resetTweens() {
    (this.createPlayerTween = null), (this.showWinImageTween = null);
  }
  handleWinImageVisible(e) {
    this.playerComponents.winImage.visible = e;
  }
  changeAvatarSprite(e) {
    this.playerComponents.avatarSprite.changeTextureURL(e);
  }
  startScaleTween() {
    (this.playerComponents.scale.x = 0), (this.playerComponents.scale.y = 0);
    const e = { scale: 0 };
    this.createPlayerTween = w.to(e, {
      scale: 1,
      duration: 0.5,
      ease: "back.out",
      onUpdate: () => {
        (this.playerComponents.scale.x = e.scale),
          (this.playerComponents.scale.y = e.scale);
      },
      onComplete: () => {
        this.resetTweens();
      },
    });
  }
  startShowWInImageAnim() {
    const e = this.playerComponents.winImage;
    (e.scale.x = 0.1),
      (e.scale.y = 0.1),
      (e.visible = !0),
      (this.showWinImageTween = w.to(e.scale, {
        x: 1,
        y: 1,
        duration: 0.5,
        ease: "back.out",
        onComplete: () => {
          this.resetTweens();
        },
      }));
  }
}
class Nt {
  constructor() {
    x(this, "handleLoadingGameVisible", (e) => {
      this.pages.handleLoadingGameVisible(e);
    });
    x(this, "handleLobbyPageVisible", (e) => {
      this.pages.handleLobbyPageVisible(e);
    });
    x(this, "handleRoomsPageVisible", (e) => {
      this.pages.handleRoomsPageVisible(e);
    });
    this.pages = null;
  }
  create(e) {
    this.pages = e;
  }
  handleLoadingPageVisible(e) {
    this.pages.handleLoadingPageVisible(e);
  }
  handleLoginPageVisible(e) {
    this.pages.handleLoginPageVisible(e);
  }
}
const _ = new Nt();
class Ft extends fe {
  constructor() {
    super("Game");
  }
  init(e) {
    (this.y = this.y - 40),
      (this.scale.x = H() ? 1.3 : 1),
      (this.scale.y = H() ? 1.3 : 1),
      (this.isActive = !0),
      this.createTable(),
      (this.playersContainer = this.createPlayersContainer()),
      this.addPlayersToGame(e);
  }
  createTable() {
    R.initTable(this);
  }
  createPlayersContainer() {
    const e = new F();
    return this.addChild(e), e;
  }
  addPlayersToGame(e) {
    console.log(e), this.setupGamePositionsConfig(e);
    for (const t in e) {
      const s = e[t];
      this.createPlayerAndAddToGame(s);
    }
    _.handleLoadingPageVisible(!1);
  }
  createPlayerAndAddToGame(e) {
    const t = this.createPlayer(e);
    v.playAudio("player_join"),
      t !== null && this.playersContainer.addChild(t.getPlayerComponents);
  }
  async onAllPlayerJoined(e) {
    const t = b.getPlayers(),
      {
        drawCards: s,
        playersBets: n,
        playersChips: a,
        playersGamePositions: c,
      } = e.players;
    for (const d in t) {
      const l = t[d];
      l.setAlpha(1),
        (l.isInLobby = !1),
        l.setCardsVisible(!0),
        this.updatePlayerMoney(d, t, a),
        this.updatePlayerBet(d, t, n),
        this.updatePlayerPosition(d, t, c);
    }
    await b.playDealCardsForPlayersAnim(),
      await new Promise((d) => {
        setTimeout(() => {
          b.turnOverPlayersCardsAnim(s, !0), d();
        }, yt);
      }),
      this.updatePlayerTurn(e.game.playerTurnData);
  }
  updatePlayerMoney(e, t, s) {
    const n = s[e].chips;
    b.updatePlayerMoneyText(e, t, n);
  }
  updatePlayerBet(e, t, s) {
    const n = s[e].bet;
    s[e] !== void 0 && b.updatePlayerBet(e, t, n);
  }
  updatePlayerPosition(e, t, s) {
    const n = s[e].position;
    b.updatePlayerPosition(e, t, n), b.checkDisplayDealerSign(e, t, n);
  }
  updatePlayerTurn(e) {
    const { playerIdGameTurn: t, serverTime: s, turnRespondTime: n } = e,
      a = q.playerTurnStart;
    v.playAudio(a),
      b.turnOffActiveRoundEffects(),
      b.setPlayerActionSignVisible(t, !1);
    const c = b.getPlayer(t);
    c && (c.startTimer(s, n), c.handleBackgroundLightVisible(!0));
  }
  createPlayer(e) {
    const {
        id: t,
        money: s,
        chips: n,
        nick: a,
        sit: c,
        bet: d,
        position: l,
        inLobby: u,
        profileImage: f,
      } = e,
      {
        sitPosition: m,
        betPosition: p,
        cardsPositions: y,
      } = X.getPositionsConfig(c),
      g = { ...Rt };
    (g.x = m.x),
      (g.y = m.y),
      (g.bet.x = p.x),
      (g.bet.y = p.y),
      (g.id = t),
      (g.sit = c),
      (g.inLobby = u),
      (g.bet.text.message = d),
      (g.position = l),
      (g.nickname.message = a),
      (g.moneyContainer.money.message = n),
      (g.cardsAnimPositions.animStartPosition = y.dealAnimStartPositions),
      (g.cardsAnimPositions.animEndPosition = y.dealAnimEndPositions);
    for (let C = 0; C < y.dealAnimEndPositions.length; C++)
      (g.cards[C].x = y.dealAnimEndPositions[C].x),
        (g.cards[C].y = y.dealAnimEndPositions[C].y);
    const S = new Dt(g);
    return S.changeAvatarSprite(f), b.addPlayer(S), S;
  }
  initGameState(e) {
    const {
        tableCards: t,
        tableBets: s,
        playersBets: n,
        playerTurnID: a,
        serverTime: c,
        turnRespondTime: d,
      } = e,
      l = b.getPlayers();
    R.layOutCards(t, !1),
      R.updateTotalBetsTextAndMakeVisible(s),
      b.setPlayersCardsVisible();
    const u = b.getPlayer(a);
    u.startTimer(c, d), u.handleBackgroundLightVisible(!0);
    for (const f in n) {
      const m = n[f];
      b.updatePlayerBet(f, l, m);
    }
  }
  async initNextRound(e) {
    const { tableCards: t, tableBets: s } = e.game;
    await R.layOutCards(t),
      R.updateTotalBetsTextAndMakeVisible(s),
      b.resetPlayersBets(),
      b.setPlayersSignsVisible(!1);
  }
  deletePlayer(e) {
    const t = q.playerLeave;
    v.playAudio(t), b.deletePlayer(e);
  }
  updatePlayerTurnAction(e) {
    const [t, s, n] = jt,
      [a, c, d, l, u] = je,
      { playerId: f, type: m, bet: p, chips: y } = e,
      g = b.getPlayer(f),
      S = q.playerTurnEnd;
    if ((v.playAudio(S), m === c)) {
      const C = t;
      g.setActionSignAndTextureVisible(C, !0);
    } else if (m === u || m === l) this.updatePlayerMoneyAndBetText(f, p, y);
    else if (m === d) {
      const C = s;
      g.setActionSignAndTextureVisible(C, !0),
        this.updatePlayerMoneyAndBetText(f, p, y);
    } else
      m === a && ((g.isInLobby = !0), g.setAlpha(0.5), g.setCardsVisible(!1));
  }
  updatePlayerMoneyAndBetText(e, t, s) {
    const n = b.getPlayers();
    b.updatePlayerBet(e, n, t), b.updatePlayerMoneyText(e, n, s);
  }
  updateUiMoneyAndBetText(e, t) {}
  setupGamePositionsConfig(e) {
    const t = G.getMyId,
      s = e[t].sit;
    X.setupConfigPositions(s);
  }
  async initGameResult(e) {
    const {
      players: { playersCards: t },
      game: {
        winnersPlayerId: s,
        winningPlayerChips: n,
        tableBets: a,
        winningsPerPlayer: c,
      },
    } = e;
    for (let d = 0; d < s.length; d++) {
      const l = s[d],
        u = b.getPlayer(l),
        { x: f, y: m } = u.getPosition;
      u.startShowWInImageAnim();
      const p = b.getPlayers(),
        y = n[l];
      b.updatePlayerMoneyText(l, p, y), R.moveBetsToWinnerAnim(f, m, c, d);
    }
    R.setTotalBetsTextVisible(!1),
      b.setPlayersSignsVisible(!1),
      b.turnOverPlayersCardsAnim(t, !1),
      b.turnOffActiveRoundEffects(),
      b.resetPlayersBets(); //! ///////////////////////////////////
  }
  resetGame() {
    b.turnOffActiveRoundEffects(), X.reset(), b.resetPlayersData(), R.reset();
  }
  refreshGameData(e) {
    b.deletePlayers(), this.addPlayersToGame(e), R.startCreateTableTween();
  }
  handleSounds(e) {
    const { deal: t, slide: s, turn: n } = Z,
      { playerTurnStart: a, playerTurnEnd: c, playerLeave: d } = q;
    e === !0
      ? (v.offAudio(n),
        v.offAudio(s),
        v.offAudio(t),
        v.offAudio(a),
        v.offAudio(c),
        v.offAudio(d))
      : (v.onAudio(n),
        v.onAudio(s),
        v.onAudio(t),
        v.onAudio(a),
        v.onAudio(c),
        v.onAudio(d));
  }
}
const Ht = new Ft();
class M {
  static add(e, t) {
    this._refs.set(e, t);
  }
  static get(e) {
    return this._refs.get(e).current;
  }
  static delete(e) {
    this._refs.delete(e);
  }
}
x(M, "_refs", new Map());
class Wt {
  constructor() {
    this.UI = null;
  }
  create(e) {
    this.UI = e;
  }
  handleVisible(e) {
    this.UI.handleVisible(e);
  }
  closeBuyInWindow() {
    M.get("lobbyScreen").handleBuyInWindowVisible(!1);
  }
  update(e) {
    M.get("bottomBar").update(e);
  }
  updateTopBar(e) {
    M.get("topBar").update(e);
  }
  updateBottomBarButtons(e) {
    M.get("bottomBar").updateBettingPanel(e);
  }
  changeChannel(e) {
    M.get("channels").changeChannel(e);
  }
}
const E = new Wt(),
  be = class be {
    static startGame(e) {
      const t = j.getScene("Game"),
        s = j.getScene("Background");
      if (!(t != null && t.isActive)) {
        j.startScene("Game", e),
          (this.game = j.getScene("Game")),
          this.bindSignals(),
          s.startGameBackground();
        return;
      }
      j.setVisible("Game", !0),
        this.game.refreshGameData(e),
        s.startGameBackground();
    }
    static afterLoadGameCallback() {
      _.handleLoadingGameVisible(!1),
        _.handleLoginPageVisible(!0),
        this.startBackground();
    }
    static startBackground() {
      j.startScene("Background");
    }
    static resetAndHide() {
      const e = j.getScene("Game"),
        t = j.getScene("Background");
      e.resetGame(), j.setVisible("Game", !1), t.startLobbyBackground();
    }
    static bindSignals() {
      h.onPlayerJoinRoom.add((e) => this.addPlayerToGame(e)),
        h.onAllPlayerJoined.add((e) => this.onAllPlayerJoined(e)),
        h.onChangePlayerTurn.add((e) => this.changePlayerTurn(e)),
        h.onGameState.add((e) => this.initGameState(e)),
        h.onInitNextRound.add((e) => this.initNextRound(e)),
        h.onPlayerLeave.add((e) => this.deletePlayerFromGame(e)),
        h.onUpdatePlayerTurnAction.add((e) => this.updatePlayerTurnAction(e)),
        h.onGameResult.add((e) => this.initGameResult(e)),
        h.onResetGame.add((e) => this.resetGame(e)),
        h.onKick.add(() => this.kickPlayer());
    }
    static addPlayerToGame(e) {
      console.log(e), !G.isMyId(e.id) && this.game.createPlayerAndAddToGame(e);
    }
    static onAllPlayerJoined(e) {
      this.game.onAllPlayerJoined(e),
        E.updateBottomBarButtons(e.game.playerTurnData);
    }
    static changePlayerTurn(e) {
      this.game.updatePlayerTurn(e),
        G.isMyId(e.playerIdGameTurn) && E.updateBottomBarButtons(e);
    }
    static async initNextRound(e) {
      this.game.initNextRound(e);
    }
    static deletePlayerFromGame(e) {
      if (G.isMyId(e)) {
        this.resetAndHide(),
          E.handleVisible(!1),
          _.handleLobbyPageVisible(!0),
          _.handleLoadingPageVisible(!1);
        return;
      }
      this.game.deletePlayer(e);
    }
    static updatePlayerTurnAction(e) {
      this.game.updatePlayerTurnAction(e);
    }
    static initGameResult(e) {
      this.game.initGameResult(e);
    }
    static initGameState(e) {
      this.game.initGameState(e);
    }
    static kickPlayer() {
      this.resetAndHide(), E.handleVisible(!1), _.handleLobbyPageVisible(!0);
    }
    static resetGame(e) {
      this.game.resetGame();
    }
    static handleSounds(e) {
      this.game.handleSounds(e);
    }
    static removeListeners() {
      h.onPlayerJoinRoom.detachAll(),
        h.onGameState.detachAll(),
        h.onAllPlayerJoined.detachAll(),
        h.onInitNextRound.detachAll(),
        h.onPlayerLeave.detachAll(),
        h.onGameResult.detachAll(),
        h.onResetGame.detachAll(),
        h.onKick.detachAll(),
        h.onChangePlayerTurn.detachAll(),
        h.onUpdatePlayerTurnAction.detachAll();
    }
  };
be.game = null;
let Y = be;
const zt = { path: "card", key: "deal_card" },
  Ut = { path: "player", key: "player_leave" },
  Kt = { path: "player", key: "player_turn_end" },
  Xt = { path: "player", key: "player_turn_start" },
  Yt = { path: "player", key: "player_join" },
  $t = { path: "card", key: "slide_card" },
  Jt = { path: "button", key: "swipe_button" },
  qt = { path: "card", key: "turn_card" },
  Qt = {
    dealCard: zt,
    playerLeave: Ut,
    playerTurnEnd: Kt,
    playerTurnStart: Xt,
    playerWin: Yt,
    slideCard: $t,
    swipeButton: Jt,
    turnCard: qt,
  },
  Zt = { path: "game/backgrounds", key: "background" },
  es = { path: "game/backgrounds", key: "bet_background" },
  ts = { path: "game/avatar", key: "default_avatar" },
  ss = { path: "game/avatar", key: "avatar_background" },
  is = { path: "game/chips", key: "bet" },
  ns = { path: "game/croupier", key: "croupier" },
  as = { path: "game/signs", key: "check_sign" },
  os = { path: "game/signs", key: "dealer_sign" },
  rs = { path: "game/signs", key: "call_sign" },
  cs = { path: "game/signs", key: "winner_sign" },
  ls = { path: "game/tables", key: "table" },
  ds = { path: "game/timer", key: "timer_bar_background" },
  hs = { path: "game/timer", key: "timer_bar_container" },
  us = { path: "game/timer", key: "timer_bar" },
  gs = {
    gameBackground: Zt,
    betBackground: es,
    defaultPlayerAvatar: ts,
    avatarBackground: ss,
    betChip: is,
    croupier: ns,
    playerCheckSign: as,
    playerDealerSign: os,
    playerCallSign: rs,
    playerWinnerSign: cs,
    gameTable: ls,
    timerBackground: ds,
    timerContainer: hs,
    timerBar: us,
  },
  ps = { path: "interface/buttons", key: "bet_button_push" },
  ys = { path: "interface/buttons", key: "bet_button" },
  fs = { path: "interface/buttons", key: "betting_hide_button" },
  ms = { path: "interface/buttons", key: "betting_show_button" },
  bs = { path: "interface/buttons", key: "call_button_push" },
  xs = { path: "interface/buttons", key: "call_button" },
  Ps = { path: "interface/buttons", key: "check_button_push" },
  Cs = { path: "interface/buttons", key: "check_button" },
  Ss = { path: "interface/buttons", key: "fold_button_push" },
  ws = { path: "interface/buttons", key: "fold_button" },
  vs = { path: "interface/buttons", key: "raise_button_push" },
  As = { path: "interface/buttons", key: "raise_button" },
  Ts = { path: "interface", key: "batting_arrow" },
  _s = { path: "interface", key: "betting_background" },
  ks = { path: "interface", key: "betting_text_field" },
  Bs = { path: "interface", key: "bottom_bar" },
  Is = {
    betButtonPush: ps,
    betButton: ys,
    bettingHideButton: fs,
    bettingShowButton: ms,
    callButtonPush: bs,
    callButton: xs,
    checkButtonPush: Ps,
    checkButton: Cs,
    foldButtonPush: Ss,
    foldButton: ws,
    raiseButtonPush: vs,
    raiseButton: As,
    battingArrow: Ts,
    bettingBackground: _s,
    bettingTextField: ks,
    bottomBar: Bs,
  },
  Ls = { path: "loginScreen/background", key: "login_screen_background" },
  js = { path: "loginScreen/buttons", key: "login_button" },
  Rs = { path: "loginScreen/buttons", key: "login_button_push" },
  Ms = { loginScreenBackground: Ls, loginButton: js, loginButtonPush: Rs },
  Os = { path: "registerScreen/background", key: "register_screen_background" },
  Vs = { path: "registerScreen/buttons", key: "register_button" },
  Es = { path: "registerScreen/buttons", key: "register_button_push" },
  Gs = { path: "registerScreen/buttons", key: "back_button" },
  Ds = { path: "registerScreen/buttons", key: "back_button_push" },
  Ns = {
    registerScreenBackground: Os,
    registerButton: Vs,
    registerButtonPush: Es,
    backButton: Gs,
    backButtonPush: Ds,
  },
  Fs = [gs, Is, Ms, Ns],
  Hs = {
    path: "game/cards",
    number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    color: ["d", "c", "h", "s"],
  },
  Ws = { key: "card_hidden" },
  Te = { cards: Hs, hiddenCard: Ws },
  _e = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class zs extends fe {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadAllAudio(),
      await this.loadImages(),
      await this.loadAllImages(),
      await this.loadCardImages(),
      Y.afterLoadGameCallback();
  }
  async loadImages() {
    const e = [
      "room_icon",
      "game_background",
      "player_background_light",
      "background_first_layer",
      "player_chips_icon",
      "background_second_layer",
      "avatar_mask",
      "card_slot",
    ];
    let t = e.length;
    for (let s = 0; s < t; s++) {
      let n = e[s],
        a = await Se.load(`assets/images/${n}.png`);
      Q.addImage(n, a);
    }
  }
  loadAllImages() {
    Fs.forEach((e) => {
      Object.entries(e).forEach(([t, s]) => {
        this.loadImage(s);
      });
    });
  }
  async loadCardImages() {
    const { path: e, number: t, color: s } = Te.cards,
      n = Te.hiddenCard.key,
      a = t,
      c = s;
    for (let l = 0; l < c.length; l++) {
      const u = c[l];
      for (let f = 0; f < a.length; f++) {
        const p = u + a[f];
        await this.loadImage({ path: e, key: p });
      }
    }
    const d = n;
    await this.loadImage({ path: e, key: d });
  }
  async loadImage({ path: e, key: t }) {
    const { _path: s, extension: n } = _e.images;
    let a = s + e + "/" + t + n,
      c = await Se.load(a);
    Q.addImage(t, c);
  }
  async loadAllAudio() {
    await Object.entries(Qt).forEach(async ([e, t]) => {
      await this.loadAudio(t);
    });
  }
  async loadAudio({ path: e, key: t }) {
    const { _path: s, extension: n } = _e.audio;
    let a = s + e + "/" + t + n;
    await v.addAudio(t, a);
  }
  handleStartNextScene() {}
}
const Us = new zs();
class Ks extends fe {
  constructor() {
    super("Background");
  }
  init() {
    (this.isActive = !0),
      (this.sprite = this.createSprite()),
      (this.secondLayer = this.createSecondLayer()),
      (this.firstLayer = this.createFirstLayer()),
      (this.firstLayerCreateTween = null),
      (this.firstLayerOutTween = null),
      (this.secondLayerCreateTween = null),
      (this.secondLayerOutTween = null),
      this.startFirstLayerCreateTween(),
      this.startSecondLayerCreateTween();
  }
  createSprite() {
    const e = { textureKey: "game_background", x: 960, y: 540, isStatic: !1 },
      t = new T(e);
    return this.addChild(t), t;
  }
  createFirstLayer() {
    const e = {
        textureKey: "background_first_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new T(e);
    return this.addChild(t), t;
  }
  createSecondLayer() {
    const e = {
        textureKey: "background_second_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new T(e);
    return this.addChild(t), t;
  }
  startLobbyBackground() {
    this.startFirstLayerCreateTween(), this.startSecondLayerCreateTween();
  }
  startGameBackground() {
    this.startFirstLayerOutTween(), this.startSecondLayerOutTween();
  }
  startFirstLayerCreateTween() {
    this.firstLayer.scale.set(3),
      (this.firstLayer.visible = !0),
      (this.firstLayerCreateTween = w.to(this.firstLayer.scale, {
        x: 1,
        y: 1,
        duration: 0.8,
        ease: "back.out",
        onComplete: () => {
          this.resetTweens();
        },
      }));
  }
  startFirstLayerOutTween() {
    this.firstLayerOutTween = w.to(this.firstLayer.scale, {
      x: 3,
      y: 3,
      duration: 0.5,
      ease: "back.in",
      onComplete: () => {
        (this.firstLayer.visible = !1),
          this.firstLayer.scale.set(1),
          this.resetTweens();
      },
    });
  }
  startSecondLayerCreateTween() {
    (this.secondLayer.alpha = 0),
      (this.secondLayerCreateTween = w.to(this.secondLayer, {
        alpha: 1,
        duration: 0.6,
        onComplete: () => {},
      }));
  }
  startSecondLayerOutTween() {
    this.secondLayerOutTween = w.to(this.secondLayer, {
      alpha: 0,
      duration: 0.5,
    });
  }
  resetTweens() {
    (this.firstLayerCreateTween = null),
      (this.firstLayerOutTween = null),
      (this.secondLayerCreateTween = null),
      (this.secondLayerOutTween = null);
  }
}
const Xs = new Ks(),
  Ys = (o) => {
    ye.add(o),
      j.addScene([Us, Xs, Ht]),
      j.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = o);
  },
  $s = B.forwardRef((o, e) => {
    const t = r.useRef(null);
    return i.jsx("div", {
      id: "loading-screen",
      ref: t,
      children: i.jsx("img", {
        id: "loading-icon",
        src: "\\TESTLIVE\\assets\\images\\loading_game_anim.svg",
        alt: "Loading_icon",
      }),
    });
  }),
  Js = { "Content-Type": "application/json", Accept: "application/json" },
  qs = (o, e) =>
    fetch(`${Be}/${e}`, {
      method: "post",
      headers: Js,
      body: JSON.stringify(o),
    }),
  Qs = (o) => qs(o, "authentication"),
  Zs = B.forwardRef((o, e) => {
    const [t, s] = r.useState(!1),
      n = r.useRef(null),
      a = () => {
        t || (s(!0), _.handleLoadingPageVisible(!0), c());
      },
      c = async () => {
        const { success: l, jwt: u } = await d();
        l
          ? (await G.connectWithServer(),
            de.success("Success !"),
            pe.set("authToken", u, { expires: 1 }),
            G.setupServerListeners(),
            _.handleLobbyPageVisible(!0),
            _.handleLoadingPageVisible(!1),
            _.handleLoginPageVisible(!1),
            s(!1))
          : (_.handleLoadingPageVisible(!1),
            de.error("Invalid login or password !"),
            s(!1));
      },
      d = async () => {
        const l = n.current.querySelector("#login").value,
          u = n.current.querySelector("#password").value,
          f = await (await Qs({ username: l, password: u })).json(),
          { success: m, jwt: p } = f;
        return { success: m, jwt: p };
      };
    return i.jsxs("div", {
      id: "login-container",
      children: [
        i.jsxs("div", {
          id: "login-form",
          ref: n,
          children: [
            i.jsx("input", { type: "text", id: "login", placeholder: "Login" }),
            i.jsx("input", {
              type: "password",
              id: "password",
              placeholder: "Password",
            }),
            i.jsx("button", { onClick: a, children: "Login" }),
          ],
        }),
        i.jsx(ke, {}),
      ],
    });
  }),
  ei = B.forwardRef((o, e) => {
    const t = r.useRef(null);
    return i.jsxs("div", {
      id: "loading-game",
      ref: t,
      children: [
        i.jsx("img", {
          id: "logo",
          src: "https://blockspingaming.com/img/blockspin-logo.7e3e1a95.webp",
          alt: "Loading_logo",
        }),
        i.jsx("img", {
          id: "loading-icon",
          src: "\\TESTLIVE\\assets\\images\\loading_game_anim.svg",
          alt: "Loading_icon",
        }),
      ],
    });
  }),
  V = B.forwardRef((o, e) => {
    const [t, s] = r.useState(!1),
      [n, a] = r.useState(!1),
      c = "\\TESTLIVE\\assets\\images\\UI\\buttons\\",
      d = c + o.default + ".png",
      l = c + o.hover + ".png",
      u = c + o.push + ".png",
      f = () => {
        s(!0);
      },
      m = () => {
        s(!1);
      },
      p = () => {
        o.onClick();
      },
      y = () => {
        a(!0);
      },
      g = () => {
        a(!1);
      },
      S = n ? u : t ? l : d;
    return i.jsx("div", {
      id: "texture-button",
      children: i.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: p,
        src: S,
        onMouseEnter: f,
        onMouseLeave: m,
        onMouseDown: y,
        onMouseUp: g,
        alt: "button",
      }),
    });
  }),
  ti = B.forwardRef((o, e) =>
    i.jsx("button", {
      id: "close-button",
      onClick: o.onClick,
      children: i.jsx("svg", {
        fill: "#D3D3D3",
        height: "20px",
        width: "20px",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1792 1792",
        children: i.jsx("path", {
          d: `M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4\r
	        c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1\r
	        c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z`,
        }),
      }),
    })
  ),
  si = B.forwardRef((o, e) => {
    const {
        bigBlindValue: t,
        buyInMaxValue: s,
        buyInMinValue: n,
        smallBlingValue: a,
      } = o.data,
      c = o.availableChips,
      [d, l] = r.useState("buyInMin"),
      [u, f] = r.useState(5e3),
      [m, p] = r.useState(!1),
      y = r.useRef(null);
    m || g(),
      r.useEffect(() => {
        O();
      }, []);
    function g() {
      p(!0), h.onGetPlayers.add((k) => S(k));
    }
    function S(k) {
      _.handleLobbyPageVisible(!1), C(), E.handleVisible(!0), Y.startGame(k);
    }
    const C = () => {
        h.onGetPlayers.detachAll();
      },
      I = () => {
        C(), E.closeBuyInWindow();
      },
      P = () => {
        _.handleLoadingPageVisible(!0);
        const k = pe.get("authToken");
        h.joinGame.dispatch({ authToken: k, buyInValue: u });
      },
      D = (k) => {
        l(k),
          k === "buyInMin" ? f(n) : k === "buyInMax" && f(s),
          console.log(s);
      },
      O = () => {
        w.fromTo(
          y.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      };
    return i.jsx("div", {
      id: "buy-in-window-container",
      ref: y,
      children: i.jsxs("div", {
        id: "buy-in-content",
        children: [
          i.jsx("div", {
            id: "title",
            children: i.jsx("h1", { children: "Select Buy In" }),
          }),
          i.jsx("div", {
            id: "close-button-container",
            children: i.jsx(ti, { onClick: I }),
          }),
          i.jsx("div", {
            id: "game-information-container",
            children: i.jsxs("div", {
              id: "game-information-wrapper",
              children: [
                i.jsxs("div", {
                  id: "available-chips-container",
                  children: [
                    i.jsx("h1", { children: "Available Chips" }),
                    i.jsxs("div", {
                      id: "value-container",
                      children: [
                        i.jsx("h1", { children: c.toLocaleString("en") }),
                        i.jsx("img", {
                          id: "profile-image",
                          src: "\\TESTLIVE\\assets\\images\\player_chips_icon.png",
                          alt: "home-button",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "blinds-container",
                  children: [
                    i.jsx("h1", { children: "Blinds (Small / Big) " }),
                    i.jsx("div", {
                      id: "value-container",
                      children: i.jsxs("h1", {
                        children: [
                          a.toLocaleString("en"),
                          " / ",
                          t.toLocaleString("en"),
                        ],
                      }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "buy-in-container",
                  children: [
                    i.jsx("h1", { children: "Buy In (Min / Max) " }),
                    i.jsx("div", {
                      id: "value-container",
                      children: i.jsxs("h1", {
                        children: [
                          n.toLocaleString("en"),
                          " / ",
                          s.toLocaleString("en"),
                        ],
                      }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "buy-buttons-container",
                  children: [
                    i.jsxs("button", {
                      id:
                        d === "buyInMin"
                          ? "chips-button-active"
                          : "chips-button",
                      onClick: () => D("buyInMin"),
                      children: [n.toLocaleString("en"), " Chips"],
                    }),
                    i.jsxs("button", {
                      id:
                        d === "buyInMax"
                          ? "chips-button-active"
                          : "chips-button",
                      onClick: () => D("buyInMax"),
                      children: [s.toLocaleString("en"), " Chips"],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "confirm-button-container",
                  children: [
                    i.jsxs("div", {
                      id: "checkbox-container",
                      className: "checkbox-container-1",
                      children: [
                        i.jsx("input", {
                          type: "checkbox",
                          id: "label1",
                          name: "vehicle1",
                          value: "true",
                        }),
                        i.jsx("label", { children: " Auto Topup" }),
                      ],
                    }),
                    i.jsxs("div", {
                      id: "checkbox-container",
                      children: [
                        i.jsx("input", {
                          type: "checkbox",
                          id: "label2",
                          name: "vehicle1",
                          value: "true",
                        }),
                        i.jsx("label", { children: " Pay Early Blinds" }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  id: "confirm-button-container",
                  children: i.jsx("button", {
                    id: "confirm-button",
                    onClick: P,
                    children: "Confirm",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  });
h.onAnnouncement.add((o) => {
  de.warning(o), _.handleLoadingPageVisible(!1);
});
const ii = B.forwardRef((o, e) => {
  const [t, s] = r.useState(!1),
    [n, a] = r.useState(!1),
    [c, d] = r.useState(!1),
    [l, u] = r.useState({
      nickname: localStorage.getItem("nickname") || "",
      money: localStorage.getItem("money") || 0,
      profileImage:
        localStorage.getItem("profileImage") ||
        "assetsimagesgameavatardefault_avatar.png",
    }),
    [f, m] = r.useState({
      bigBlindValue: 0,
      buyInMaxValue: 0,
      buyInMinValue: 0,
      smallBlingValue: 0,
    }),
    p = r.useRef(null),
    y = r.useRef(null),
    g = r.useRef(null),
    S = r.useRef(null),
    C = r.useRef(null),
    [I, P] = r.useState(!1),
    [D, O] = r.useState(!1),
    [k, xe] = r.useState(!1),
    [Re, Pe] = r.useState(!1),
    [Me, Ce] = r.useState(!1),
    Oe = "\\TESTLIVE\\assets\\images\\cash_games_label.png",
    Ve = "\\TESTLIVE\\assets\\images\\sit_n_go_label.png",
    Ee = "\\TESTLIVE\\assets\\images\\private_games_label.png",
    Ge = "\\TESTLIVE\\assets\\images\\shop_label.png",
    De = "\\TESTLIVE\\assets\\images\\rankings_label.png",
    ie = {
      default: "claim_chips_button",
      hover: "claim_chips_button_hover",
      push: "claim_chips_button_hover",
    },
    ne = {
      default: "sunday_reward_button",
      hover: "sunday_reward_button_hover",
      push: "sunday_reward_button_hover",
    },
    Ne = "\\TESTLIVE\\assets\\images\\cash_games_label_mobile.png",
    Fe = "\\TESTLIVE\\assets\\images\\sit_n_go_label_mobile.png",
    He = "\\TESTLIVE\\assets\\images\\private_games_label_mobile.png",
    We = "\\TESTLIVE\\assets\\images\\shop_label_mobile.png",
    ze = "\\TESTLIVE\\assets\\images\\rankings_label_mobile.png",
    ae = {
      default: "claim_chips_button_mobile",
      hover: "claim_chips_button_mobile",
      push: "claim_chips_button_mobile",
    },
    oe = {
      default: "sunday_reward_button_mobile",
      hover: "sunday_reward_button_mobile",
      push: "sunday_reward_button_mobile",
    };
  t || Ue(),
    r.useEffect(
      () => (
        window.addEventListener("resize", J),
        () => window.removeEventListener("resize", J)
      ),
      []
    ),
    r.useEffect(() => {
      const L = pe.get("authToken");
      h.getPlayerAndGameProfileInformation.dispatch(L), Je(), J();
    }, []);
  function Ue() {
    s(!0),
      h.onPlayerAndGameProfileInformation.add((L) => {
        u(L.playerInformation),
          m(L.gameInformation),
          E.update(L.playerInformation.money),
          localStorage.setItem("nickname", L.playerInformation.nickname),
          localStorage.setItem("money", L.playerInformation.money),
          localStorage.setItem(
            "profileImage",
            L.playerInformation.profileImage
          ),
          E.updateTopBar(L.playerInformation);
      });
  }
  const Ke = (L) => {
      d(L);
    },
    Xe = () => {
      d(!0);
    },
    Ye = () => {
      h.onPlayerAndGameProfileInformation.detachAll();
    },
    $ = () => {
      console.log("Claim CHips button CLicked");
    },
    $e = () => {
      console.log("Home button clicked");
    },
    J = () => {
      window.innerWidth < 680 ? a(!0) : a(!1);
    },
    Je = () => {
      w.fromTo(
        y.current,
        { scale: 0 },
        { scale: 1, ease: "back.out", duration: 0.6 }
      ),
        w.fromTo(
          g.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.5 }
        ),
        w.fromTo(
          C.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
    };
  return (
    r.useImperativeHandle(e, () => ({
      removeListeners: Ye,
      handleBuyInWindowVisible: Ke,
      onResize: J,
    })),
    i.jsxs("div", {
      id: "lobby-container",
      ref: p,
      children: [
        i.jsxs("div", {
          id: "lobby-container-wrapper",
          children: [
            i.jsxs("div", {
              id: "top-bar-container",
              ref: y,
              children: [
                i.jsx("div", {
                  id: "home-button-container",
                  children: i.jsx(V, {
                    onClick: $e,
                    default: "home_button",
                    hover: "home_button_hover",
                    push: "home_button_hover",
                  }),
                }),
                i.jsxs("div", {
                  id: "profile-container",
                  children: [
                    i.jsx("img", {
                      id: "profile-image",
                      src: l.profileImage,
                      alt: "home-button",
                    }),
                    i.jsxs("div", {
                      id: "player-information-container",
                      children: [
                        i.jsx("h2", { children: l.nickname }),
                        i.jsxs("div", {
                          id: "chips-container",
                          children: [
                            i.jsx("img", {
                              id: "chips-image",
                              src: "\\TESTLIVE\\assets\\images\\player_chips_icon.png",
                              alt: "home-button",
                            }),
                            i.jsx("h1", {
                              id: "chips",
                              children: l.money.toLocaleString("en"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              id: "cards-container",
              ref: g,
              children: [
                i.jsxs("div", {
                  id: I ? "first-card-container-hover" : "first-card-container",
                  onMouseEnter: () => P(!0),
                  onMouseLeave: () => P(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? Ne : Oe, alt: "card" }),
                    i.jsx("button", {
                      id: "second-button",
                      children: "Quick Play",
                    }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: Xe,
                      children: "Show Rooms",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: D
                    ? "second-card-container-hover"
                    : "second-card-container",
                  onMouseEnter: () => O(!0),
                  onMouseLeave: () => O(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? Fe : Ve, alt: "card" }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: $,
                      children: "Join Now",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: k
                    ? "second-card-container-hover"
                    : "second-card-container",
                  onMouseEnter: () => xe(!0),
                  onMouseLeave: () => xe(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? He : Ee, alt: "card" }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: $,
                      children: "Join Now",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "double-card-container",
                  children: [
                    i.jsxs("div", {
                      id: Re
                        ? "third-card-container-hover"
                        : "third-card-container",
                      onMouseEnter: () => Pe(!0),
                      onMouseLeave: () => Pe(!1),
                      children: [
                        i.jsx("img", {
                          id: "card",
                          src: n ? We : Ge,
                          alt: "card",
                        }),
                        i.jsx("button", {
                          id: "first-button",
                          onClick: $,
                          children: "Open",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "second-image",
                      id: Me
                        ? "third-card-container-hover"
                        : "third-card-container",
                      onMouseEnter: () => Ce(!0),
                      onMouseLeave: () => Ce(!1),
                      children: [
                        i.jsx("img", {
                          id: "card",
                          src: n ? ze : De,
                          alt: "card",
                        }),
                        i.jsx("button", {
                          id: "first-button",
                          onClick: $,
                          children: "Open",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              id: "bottom-line-container",
              children: i.jsx("div", { id: "bottom-line", ref: S }),
            }),
            i.jsxs("div", {
              id: "claim-chips-container",
              ref: C,
              children: [
                i.jsx(V, {
                  id: "claim-chips-button",
                  onClick: () => {},
                  default: n ? ae.default : ie.default,
                  hover: n ? ae.hover : ie.hover,
                  push: n ? ae.push : ie.push,
                }),
                i.jsx(V, {
                  id: "claim-chips-button",
                  onClick: () => {},
                  default: n ? oe.default : ne.default,
                  hover: n ? oe.hover : ne.hover,
                  push: n ? oe.push : ne.push,
                }),
              ],
            }),
          ],
        }),
        c && i.jsx(si, { data: f, availableChips: l.money }),
        i.jsx(ke, {}),
      ],
    })
  );
});
B.forwardRef((o, e) => {
  const t = r.useRef(null);
  return i.jsx("div", {
    id: "background-container",
    ref: t,
    children: i.jsx("img", {
      id: "background-image",
      src: "\\TESTLIVE\\assets\\images\\loading_background.png",
      alt: "Loading_icon",
    }),
  });
});
const ni = B.forwardRef((o, e) => {
  const [t, s] = r.useState(!1),
    [n, a] = r.useState(!1),
    [c, d] = r.useState(!0),
    [l, u] = r.useState(!1),
    f = r.useRef(null),
    m = r.useRef(null),
    p = r.useRef(null),
    y = r.useRef(null);
  M.add("lobbyScreen", y);
  const g = (P) => {
      s(P);
    },
    S = (P) => {
      a(P);
    },
    C = (P) => {
      d(P);
    },
    I = (P) => {
      P === !1 && y.current.removeListeners(), u(P);
    };
  return (
    r.useImperativeHandle(e, () => ({
      handleLoadingPageVisible: g,
      handleLoginPageVisible: S,
      handleLoadingGameVisible: C,
      handleLobbyPageVisible: I,
    })),
    i.jsxs("div", {
      id: "pages",
      ref: e,
      children: [
        c && i.jsx(ei, { ref: p }),
        n && i.jsx(Zs, { ref: m }),
        l && i.jsx(ii, { ref: y }),
        t && i.jsx($s, { ref: f }),
      ],
    })
  );
});
B.forwardRef((o, e) => {
  const t =
      o.path ||
      "M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z",
    s = o.fill || "#FFF",
    n = o.width || "40px",
    a = o.height || "40px";
  return i.jsx("div", {
    id: "ui-svg-button-container",
    children: i.jsx("button", {
      id: "d",
      onClick: o.onClick,
      children: i.jsx("svg", {
        fill: s,
        id: "icon",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: a,
        viewBox: "0 0 45.58 45.58",
        children: i.jsx("g", { children: i.jsx("path", { d: t }) }),
      }),
    }),
  });
});
function ai(o) {
  const e = parseFloat(o.replace(/,/g, ""));
  return parseFloat(e);
}
const oi = r.forwardRef((o, e) => {
    const [t, s] = r.useState(N(1e3));
    r.useState(N(1e3));
    const [n, a] = r.useState(!1),
      [c, d] = r.useState(0),
      l = (p) => {
        const [y, g, S, C, I] = je,
          P = { action: "", data: 0 };
        if (p === y) (P.action = y), h.playerTurnAction.dispatch(P);
        else if (p === S) (P.action = S), h.playerTurnAction.dispatch(P);
        else if (p === C) {
          //! BET
          (P.action = "bet"), (P.data = ai(t)), h.playerTurnAction.dispatch(P);
        } else p === g && ((P.action = g), h.playerTurnAction.dispatch(P));
      },
      u = (p) => {},
      f = (p) => {
        const y = N(p.target.value);
        s(y);
      },
      m = (p) => {
        const { isBetOnTable: y, playerBetDifference: g } = p;
        a(y), d(N(g));
      };
    return (
      r.useImperativeHandle(e, () => ({ update: m })),
      i.jsxs("div", {
        id: "betting-panel-container",
        children: [
          i.jsxs("div", {
            id: "left-panel-container",
            children: [
              i.jsxs("button", {
                id: "call-button",
                onClick: () => l("call"),
                children: [" ", n ? "Call " + c : "Check"],
              }),
              i.jsx("button", {
                id: "fold-button",
                onClick: () => l("fold"),
                children: "Fold",
              }),
            ],
          }),
          i.jsxs("div", {
            id: "right-panel-container",
            children: [
              i.jsxs("div", {
                id: "bet-values-container",
                children: [
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => u(),
                    children: "5BB",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => u(),
                    children: "35%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => u(),
                    children: "75%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => u(),
                    children: "110%",
                  }),
                ],
              }),
              i.jsxs("div", {
                id: "control-container",
                children: [
                  i.jsxs("div", {
                    id: "bet-slider-container",
                    children: [
                      i.jsx("input", {
                        id: "bet-slider",
                        type: "range",
                        onChange: f,
                        min: "1000",
                        max: "10000",
                        step: "1000",
                      }),
                      i.jsx("span", { id: "slider-value", children: t }),
                    ],
                  }),
                  i.jsx("div", {
                    id: "betting-buttons-container",
                    children: i.jsxs("button", {
                      id: "raise-button",
                      onClick: () => l("raise"),
                      children: [" ", n ? "Raise " + t : "Bet"],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }),
  ri = r.forwardRef((o, e) => {
    const [t, s] = r.useState("chat"),
      n = (a) => {
        s(a);
      };
    return i.jsxs("div", {
      id: "buttons-container",
      children: [
        i.jsx("div", {
          id: "button-container",
          children: i.jsx("button", {
            id: t === "chat" ? "label-button-active" : "label-button",
            onClick: () => n("chat"),
            children: i.jsx("span", { children: "CHAT" }),
          }),
        }),
        i.jsx("div", {
          id: "button-container",
          children: i.jsx("button", {
            id: t === "hands" ? "label-button-active" : "label-button",
            onClick: () => n("hands"),
            children: i.jsx("span", { children: "HANDS" }),
          }),
        }),
        i.jsx("div", {
          id: "button-container",
          children: i.jsx("button", {
            id: t === "table" ? "label-button-active" : "label-button",
            onClick: () => n("table"),
            children: i.jsx("span", { children: "TABLE" }),
          }),
        }),
      ],
    });
  }),
  ci = r.forwardRef((o, e) => {
    const t = (s) => {
      console.log(s);
    };
    return (
      r.useImperativeHandle(e, () => ({ changeChannel: t })),
      i.jsx("div", { id: "channels-container" })
    );
  }),
  li = B.forwardRef((o, e) => {
    const [t, s] = r.useState(0),
      [n, a] = r.useState(!1),
      [c, d] = r.useState(!1),
      [l, u] = r.useState({ bottom: "0px", height: 100 }),
      f = r.useRef(null),
      m = r.useRef(),
      p = r.useRef();
    M.add("channels", m);
    const y = (O) => {
        s(O); //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      g = (O) => {
        p.current.update(O);
      };
    r.useEffect(
      () => (
        window.addEventListener("resize", D),
        () => window.removeEventListener("resize", D)
      ),
      []
    ),
      r.useEffect(() => {
        D();
      }, []);
    const S = () => {
        d(!c);
      },
      C = (O) => {
        u((k) => ({ ...k, ...O }));
      },
      I = () => l.height,
      P = () => {
        w.fromTo(
          f.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      },
      D = () => {
        window.innerHeight < window.innerWidth
          ? (a(!0), d(!0))
          : (a(!1), d(!1));
      };
    return (
      r.useImperativeHandle(e, () => ({
        resize: C,
        getHeight: I,
        startOpenTween: P,
        update: y,
        updateBettingPanel: g,
      })),
      i.jsxs("div", {
        id: "bottom-bar",
        style: l,
        ref: f,
        children: [
          !n &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsx("div", {
                id: "chat_button-container",
                children: i.jsx(V, {
                  onClick: S,
                  default: "chat_button",
                  hover: "chat_button_hover",
                  push: "chat_button",
                }),
              }),
            }),
          c &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsxs("div", {
                id: "channels-container-wrapper",
                children: [
                  i.jsx(ri, {}),
                  i.jsx(ci, { ref: m }),
                  i.jsxs("div", {
                    id: "text-input-container",
                    children: [
                      i.jsx("input", {
                        type: "text",
                        id: "message-input",
                        placeholder: "Send a message...",
                      }),
                      i.jsx("div", {
                        id: "send-icon-container",
                        children: i.jsx("img", {
                          id: "loading-icon",
                          src: "\\TESTLIVE\\assets\\images\\send_icon.svg",
                          alt: "Loading_icon",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          i.jsx("div", {
            id: "separation-container",
            children: i.jsx(oi, { ref: p }),
          }),
          n &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsxs("div", {
                id: "balance-text-container",
                children: [
                  i.jsx("h2", { children: "Balance" }),
                  i.jsxs("h1", {
                    children: [t.toLocaleString("en"), " Chips"],
                  }),
                ],
              }),
            }),
        ],
      })
    );
  }),
  di = B.forwardRef((o, e) => {
    const [t, s] = r.useState(!1),
      [n, a] = r.useState(!1),
      [c, d] = r.useState({}),
      l = r.useRef(null),
      [u, f] = r.useState({
        nickname: localStorage.getItem("nickname") || "",
        money: localStorage.getItem("money") || 0,
        profileImage:
          localStorage.getItem("profileImage") ||
          "assetsimagesgameavatardefault_avatar.png",
      });
    r.useEffect(
      () => (
        window.addEventListener("resize", m),
        () => window.removeEventListener("resize", m)
      ),
      []
    ),
      r.useEffect(() => {
        m();
      }, []);
    const m = () => {
        window.innerHeight > window.innerWidth ? s(!0) : s(!1);
      },
      p = () => {
        h.onBackButtonClick.dispatch(), _.handleLoadingPageVisible(!0);
      },
      y = () => {
        a(!n), Y.handleSounds(n);
      },
      g = () => {
        w.fromTo(
          l.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      S = (I) => {
        d((P) => ({ ...P, ...I }));
      },
      C = (I) => {
        f(I);
      };
    return (
      r.useImperativeHandle(e, () => ({
        resize: S,
        startOpenTween: g,
        update: C,
      })),
      i.jsxs("div", {
        id: "top-bar",
        style: c,
        ref: l,
        children: [
          i.jsx("div", {
            id: "left-side-buttons-container",
            children: i.jsxs("div", {
              id: "left-side-buttons-wrapper",
              children: [
                i.jsx(V, {
                  onClick: p,
                  default: "quit_to_lobby_button",
                  hover: "quit_to_lobby_button_hover",
                  push: "quit_to_lobby_button_push",
                }),
                i.jsx(V, {
                  default: "stand_button",
                  hover: "stand_button_hover",
                  push: "stand_button_push",
                }),
              ],
            }),
          }),
          i.jsx("div", {
            id: "right-side-buttons-container",
            children: i.jsxs("div", {
              id: "right-side-buttons-wrapper",
              children: [
                i.jsx(V, {
                  default: "emoticons_button",
                  hover: "emoticons_button_hover",
                  push: "emoticons_button_push",
                }),
                i.jsx(V, {
                  default: "info_button",
                  hover: "info_button_hover",
                  push: "info_button_push",
                }),
                i.jsx(V, {
                  onClick: y,
                  default: n ? "sound_off_button" : "sound_on_button",
                  hover: n ? "sound_off_button_hover" : "sound_on_button_hover",
                  push: n ? "sound_off_button_push" : "sound_on_button_push",
                }),
              ],
            }),
          }),
          t &&
            i.jsxs("div", {
              id: "profile-container",
              children: [
                i.jsx("img", {
                  id: "profile-image",
                  src: u.profileImage,
                  alt: "home-button",
                }),
                i.jsxs("div", {
                  id: "player-information-container",
                  children: [
                    i.jsx("h2", { children: u.nickname }),
                    i.jsxs("div", {
                      id: "chips-container",
                      children: [
                        i.jsx("img", {
                          id: "chips-image",
                          src: "\\TESTLIVE\\assets\\images\\player_chips_icon.png",
                          alt: "home-button",
                        }),
                        i.jsx("h1", {
                          id: "chips",
                          children: u.money.toLocaleString("en"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  }),
  hi = r.forwardRef((o, e) => {
    r.useState(0);
    const t = r.useRef(),
      s = r.useRef();
    M.add("channels", t);
    const n = (c) => {
        //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      a = () => {
        w.fromTo(
          s.current,
          { scale: 0, x: "+=1000" },
          { scale: 1, x: "-=1000", ease: "back.out", duration: 0.8 }
        );
      };
    return (
      r.useImperativeHandle(e, () => ({
        update: n,
        contextContainerOpenTween: a,
      })),
      i.jsx("div", {
        id: "middle-bar",
        children: i.jsx("div", { id: "context-container", ref: s }),
      })
    );
  });
class ui extends r.Component {
  constructor(e) {
    super(e),
      (this.state = {
        width: "0px",
        height: "0px",
        left: "0px",
        top: "0px",
        transform: "none",
        display: "none",
      }),
      (this.topBarRef = r.createRef()),
      (this.bottomBarRef = r.createRef()),
      (this.middleBarRef = r.createRef()),
      M.add("bottomBar", this.bottomBarRef),
      M.add("topBar", this.topBarRef);
  }
  handleVisible(e) {
    e === !0
      ? this.setState({ display: "block" })
      : this.setState({ display: "none" }),
      this.middleBarRef.current.contextContainerOpenTween(),
      this.topBarRef.current.startOpenTween(),
      this.bottomBarRef.current.startOpenTween();
  }
  resize(e) {
    this.setState(e);
  }
  resizeBottomBar(e) {
    this.bottomBarRef.current.resize(e);
  }
  resizeTopBar(e) {
    this.topBarRef.current.resize(e);
  }
  get bottomBarHeight() {
    return this.bottomBarRef.current.getHeight();
  }
  render() {
    const {
        width: e,
        height: t,
        left: s,
        top: n,
        transform: a,
        display: c,
      } = this.state,
      d = { width: e, height: t, left: s, top: n, transform: a, display: c };
    return i.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: d,
      children: [
        i.jsx(di, { ref: this.topBarRef }),
        i.jsx(li, { ref: this.bottomBarRef }),
        i.jsx(hi, { ref: this.middleBarRef }),
      ],
    });
  }
}
const gi = B.forwardRef((o, e) => i.jsx(ui, { ref: e, ...o }));
function pi() {
  const o = r.useRef(),
    e = r.useRef(null),
    t = r.useRef(null);
  return (
    r.useEffect(() => {
      const s = o.current,
        n = e.current,
        a = t.current;
      Ys(s),
        E.create(n),
        _.create(a),
        z.resizeScreen(n, s),
        window.addEventListener("resize", () => z.resizeScreen(n, s));
    }, []),
    i.jsxs("div", {
      id: "app",
      children: [
        i.jsx(ht, { ref: o }),
        i.jsx(gi, { ref: e }),
        i.jsx(ni, { ref: t }),
      ],
    })
  );
}
Ze.createRoot(document.getElementById("root")).render(i.jsx(pi, {}));
