var $e = Object.defineProperty;
var Je = (o, e, t) =>
  e in o
    ? $e(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (o[e] = t);
var b = (o, e, t) => (Je(o, typeof e != "symbol" ? e + "" : e, t), t);
import { r as c, j as i, R as I } from "./react-CWbZ82Fp.js";
import { c as qe } from "./react-dom-1bg23oq7.js";
import {
  S as Qe,
  M as Ze,
  b as et,
  c as q,
  T as tt,
  e as st,
  f as it,
  G as nt,
  g as Ce,
} from "./@pixi-cAsFVl3M.js";
import "./pixi.js-UbLQVW1G.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { l as at } from "./socket.io-client-DFi9RC7o.js";
import { d as v } from "./mini-signals-DMh6wOcT.js";
import { g as C } from "./gsap-ZORhgBxb.js";
import { h as ot } from "./howler-BozPm2lL.js";
import { Q as _e, B as de } from "./react-toastify-DdhT_1Lx.js";
import { a as ge } from "./js-cookie-Cz0CWeBA.js";
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
        for (const r of a.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
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
const rt = {
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundAlpha: 0,
    resolution: 1,
    antialias: !0,
    scaleMode: Qe.LINEAR,
    legacy: !1,
    transparent: !1,
    clearBeforeRender: !0,
    preserveDrawingBuffer: !1,
    roundPixels: !1,
    forceCanvas: !1,
    cullable: !1,
    MIPMAP_TEXTURES: Ze.POW2,
  },
  ct = (o) => new et({ ...rt, parent: o }),
  lt = c.forwardRef(function ({ currentActiveScene: e }, t) {
    const s = c.useRef(),
      n = c.useRef(null);
    return (
      c.useLayoutEffect(() => {
        s.current === void 0 &&
          ((s.current = ct("game-container")),
          (globalThis.__PHASER_GAME__ = s.current),
          t !== null &&
            ((t.current = s.current), n.current.appendChild(s.current.view)));
      }, [t]),
      i.jsx("div", { id: "game-container", ref: n })
    );
  });
class pe {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
b(pe, "_app", null);
class re {
  static get app() {
    return pe.app;
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
class z {
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
b(z, "_scenes", new Map());
class j {
  static addScene(e) {
    e.forEach((t) => {
      z.addScene(t), re.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = z.scenes,
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
    return z.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), z.deleteScene(e);
  }
  static setVisible(e, t) {
    const s = this.getScene(e);
    s.visible = t;
  }
} //! ///////////////////////////////////////////////////
let dt = "https://backendpoker.blockspingaming.com",
  ht = "https://backendpoker.blockspingaming.com"; //! ///////////////////////////////////////////////////
class l {}
b(l, "onPlayerJoinRoom", new v.MiniSignal()),
  b(l, "onGetPlayers", new v.MiniSignal()),
  b(l, "onAllPlayerJoined", new v.MiniSignal()),
  b(l, "onChangePlayerTurn", new v.MiniSignal()),
  b(l, "onInitNextRound", new v.MiniSignal()),
  b(l, "onPlayerLeave", new v.MiniSignal()),
  b(l, "onUpdatePlayerTurnAction", new v.MiniSignal()),
  b(l, "onGameResult", new v.MiniSignal()),
  b(l, "onRoomsState", new v.MiniSignal()),
  b(l, "onGameState", new v.MiniSignal()),
  b(l, "onResetGame", new v.MiniSignal()),
  b(l, "onAnnouncement", new v.MiniSignal()),
  b(l, "onBackButtonClick", new v.MiniSignal()),
  b(l, "onPlayerAndGameProfileInformation", new v.MiniSignal()),
  b(l, "onKick", new v.MiniSignal()),
  b(l, "getPlayerAndGameProfileInformation", new v.MiniSignal()),
  b(l, "playerTurnAction", new v.MiniSignal()),
  b(l, "joinGame", new v.MiniSignal()),
  b(l, "getRoomsState", new v.MiniSignal());
class ut {
  constructor() {
    (this.client = null), (this.myId = ""), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await at(`${ht}`).on("connect", () => {
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
      l.onRoomsState.dispatch(e);
    }),
      this.client.on("roomState", (e) => {
        l.onGameState.dispatch(e);
      }),
      this.client.on("playerAndGameProfileInformation", (e) => {
        l.onPlayerAndGameProfileInformation.dispatch(e);
      }),
      this.client.on("getPlayers", (e) => {
        l.onGetPlayers.dispatch(e);
      }),
      this.client.on("playerJoinRoom", (e) => {
        l.onPlayerJoinRoom.dispatch(e);
      }),
      this.client.on("initPreflopRound", (e) => {
        l.onAllPlayerJoined.dispatch(e);
      }),
      this.client.on("updateGameTurn", (e) => {
        l.onChangePlayerTurn.dispatch(e);
      }),
      this.client.on("initNextRound", (e) => {
        l.onInitNextRound.dispatch(e);
      }),
      this.client.on("playerLeaveGame", (e) => {
        l.onPlayerLeave.dispatch(e);
      }),
      this.client.on("updatePlayerTurnAction", (e) => {
        l.onUpdatePlayerTurnAction.dispatch(e);
      }),
      this.client.on("kick", () => {
        l.onKick.dispatch();
      }),
      this.client.on("gameResult", (e) => {
        l.onGameResult.dispatch(e);
      }),
      this.client.on("resetGame", (e) => {
        l.onResetGame.dispatch(e);
      }),
      this.client.on("announcement", (e) => {
        l.onAnnouncement.dispatch(e);
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
    l.playerTurnAction.add((e) => this.playerTurnAction(e)),
      l.joinGame.add((e) => this.joinGame(e)),
      l.onBackButtonClick.add(() => this.playerLeaveRoom()),
      l.getPlayerAndGameProfileInformation.add((e) =>
        this.getPlayerAndGameProfileInformation(e)
      );
  }
}
const O = new ut();
class ye extends q {
  constructor(e) {
    super(), (this.sceneKey = e), (this.isActive = !1);
  }
  init(e) {
    this.isActive = !0;
  }
}
class se extends tt {
  constructor(e) {
    const {
      message: t,
      x: s = 0,
      y: n = 0,
      anchorX: a = 0,
      anchorY: r = 0,
      visible: h = !0,
      isStatic: d = !1,
      scaleX: g = 1,
      scaleY: p = 1,
      textConfig: {
        fontFamily: y = "Arial",
        fontSize: x = 55,
        fill: f = 0,
      } = {},
    } = e;
    super(t, { fontFamily: y, fontSize: x, fill: f }),
      this.anchor.set(a, r),
      this.position.set(s, n),
      (this.visible = h),
      (this.scale.x = g),
      (this.scale.y = p),
      (this.cacheAsBitmap = d),
      this.updateMessage(t);
  }
  updateMessage(e) {
    this.text = e;
  }
  get getTextInNumber() {
    return parseInt(this.text);
  }
}
class G extends q {
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
b(he, "images", new Map());
class Q {
  static addImage(e, t) {
    he.addImage(e, t);
  }
  static getImage(e) {
    return he.getImage(e);
  }
}
class T extends st {
  constructor(e) {
    const {
        textureKey: t,
        x: s = 0,
        y: n = 0,
        anchorX: a = 0.5,
        anchorY: r = 0.5,
        visible: h = !0,
        scaleX: d = 1,
        scaleY: g = 1,
        angle: p = 0,
        tint: y = 16777215,
        isStatic: x = !0,
        interactive: f = !1,
        eventMode: u = "none",
      } = e,
      w = Q.getImage(t);
    super(w),
      this.anchor.set(a, r),
      this.position.set(s, n),
      (this.scale.x = d),
      (this.scale.y = g),
      (this.angle = p),
      (this.tint = y),
      (this.visible = h),
      (this.filters = null),
      (this.eventMode = u),
      (this.interactiveChildren = f),
      (this.cacheAsBitmap = x);
  }
  changeTexture(e) {
    const t = Q.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  changeTextureURL(e) {
    const t = it.from(e);
    (this.texture = t), (this.width = 39), (this.height = 39);
  }
  setVisible(e) {
    this.visible = e;
  }
}
function D(o) {
  return parseInt(o).toLocaleString("en", { useGrouping: !0 });
}
class ke extends G {
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
    this.text.updateMessage(D(e));
  }
  reset() {
    (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visible = !1),
      this.text.updateMessage(0);
  }
}
const gt = 1e3,
  Z = { deal: "deal_card", slide: "slide_card", turn: "turn_card" },
  pt = {
    nextAnimDelay: 200,
    nextCardDeal: 100,
    cardScale: { owner: 1, other: 1 },
  },
  yt = { duration: 0.1, ease: "none", yoyo: !0, repeat: 1 },
  mt = { duration: 0.5, ease: "circ.out", angle: 360, scaleOnStart: 0.5 },
  ft = { duration: 0.3, ease: "none" },
  bt = { duration: 0.3, ease: "none", scale: 1.5 };
function N() {
  return window.innerWidth / window.innerHeight <= 1;
}
const Se = { y: N() ? 426 : 520, duration: 0.2, ease: "none" };
class Be extends T {
  constructor(e) {
    super(e), (this.config = e), (this.isTurned = !1), (this.isSlideDown = !1);
  }
  async turnOverAnim(e) {
    const { duration: t, ease: s, yoyo: n, repeat: a } = yt;
    await C.to(this, {
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
    const { duration: n, ease: a, scaleOnStart: r, angle: h } = mt,
      d = { scale: this.scale.x * r, angle: this.angle, x: this.x, y: this.y };
    (this.visible = !0),
      C.to(d, {
        scale: s,
        angle: this.angle + h,
        x: e,
        y: t,
        duration: n,
        ease: a,
        onUpdate: () => {
          (this.angle = d.angle),
            this.setScale(d.scale),
            (this.x = d.x),
            (this.y = d.y);
        },
      });
  }
  spreadCardAnim(e) {
    const t = e * 35;
    C.to(this, { x: t, duration: 0.3, ease: "none" });
  }
  moveDownAnim() {
    const e = this.y + 9;
    C.to(this, { y: e, duration: 0.3, ease: "back.out" });
  }
  async slideFromTopAnim() {
    const { ease: e, duration: t, y: s } = Se;
    (this.visible = !0),
      await C.to(this, {
        y: s,
        duration: t,
        ease: e,
        onComplete: () => {
          this.isSlideDown = !0;
        },
      });
  }
  async moveXAnim(e) {
    const { ease: t, duration: s } = ft;
    await C.to(this, { x: e, duration: s, ease: t });
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
    const { y: e } = Se;
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
class ue {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
}
b(ue, "audio", new Map());
class S {
  static addAudio(e, t) {
    return new Promise((s) => {
      const n = new ot.Howl({ src: [t], html5: !1, onload: () => s(1) });
      ue.addAudio(e, n);
    });
  }
  static getAudio(e) {
    return ue.getAudio(e);
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
class xt extends G {
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
        r = t + n * e,
        h = a.moveXAnim(r);
      s.push(h);
    }
    await Promise.all(s);
  }
  async newCardsTurnOverAnim(e, t) {
    const s = e.length,
      n = t + s;
    for (let a = t; a < n; a++) {
      const r = e[a - t].name;
      await this.turnOverCardAnim(a, r);
    }
  }
  async newCardsSlideFromTopAnim(e, t) {
    const s = t + e;
    for (let n = t; n < s; n++) await this.slideCardFormTopAnim(n);
  }
  async slideCardFormTopAnim(e) {
    const t = Z.slide;
    S.playAudio(t), await this.getCard(e).slideFromTopAnim();
  }
  async turnOverCardAnim(e, t) {
    const s = Z.turn;
    S.playAudio(s), await this.getCard(e).turnOverAnim(t);
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
      s = new Be(t);
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
const Pt = {
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
  Ct = {
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
  St = N() ? Ct : Pt,
  ce = 1920,
  le = 1080,
  we = 1080,
  Ae = 1920;
class W {
  static resizeScreen(e, t) {
    this._isPortraitOrientation = N();
    const s = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, s), this.resizeGame(t, s);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / ce, window.innerHeight / le);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / Ae, window.innerWidth / we);
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
    const s = this._isPortraitOrientation ? we : ce,
      n = this._isPortraitOrientation ? Ae : le,
      a = (window.innerHeight - n * t) / 2,
      r = (window.innerWidth - s * t) / 2;
    e.resize({
      width: `${s}px`,
      height: `${n}px`,
      left: `${r}px`,
      top: `${a}px`,
      transform: `scale(${t})`,
    }),
      this.resizeUIElements(e, a, t);
  }
  static resizeUIElements(e, t, s) {
    const n = window.innerHeight / s;
    let a = 0,
      r = 0;
    this._isPortraitOrientation, (a = window.innerHeight * 0.03), (r = 50);
    const h = n - e.bottomBarHeight - t / s - a,
      d = -(t / s) + r;
    e.resizeBottomBar({ top: `${h}px` }), e.resizeTopBar({ top: `${d}px` });
  }
}
b(W, "_isPortraitOrientation", N());
class wt extends q {
  constructor() {
    super(),
      (this.config = St),
      (this.table = this.createTable()),
      (this.potSizeText = this.createPotSizeText()),
      (this.cardSlots = this.createCardSlots()),
      (this.cards = this.createCards()),
      (this.totalBets = this.createTotalBets());
  }
  createTable() {
    const e = {
        textureKey: "table",
        x: W.isPortraitOrientation ? 723 : 987,
        y: W.isPortraitOrientation ? 453 : 530,
        angle: W.isPortraitOrientation ? 90 : 0,
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
      r = new q();
    for (let h = 0; h < e; h++) {
      let d = { ...a };
      d.x = h * t;
      const g = new T(d);
      r.addChild(g);
    }
    (r.x = s), (r.y = n), this.addChild(r);
  }
  createTotalBets() {
    const e = this.config.bet,
      t = new ke(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = this.config.card,
      t = new xt(e);
    return this.addChild(t), t;
  }
}
class At {
  constructor() {
    this.table = null;
  }
  createTable() {
    return (this.table = new wt()), this.table;
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
  reset() {
    this.table.cards.reset(), this.table.totalBets.reset();
  }
}
const vt = { duration: 1, ease: "circ.out" },
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
    static async moveBetsToWinnerAnim(e, t) {
      const { ease: s, duration: n } = vt,
        a = this.tableAdapter.getTotalBetsText;
      await C.to(a, { y: t, x: e, duration: n, ease: s });
    }
    static getTableImage() {
      return this.tableAdapter.table.table;
    }
    static startCreateTableTween() {
      const e = this.getTableImage();
      e.scale.set(0.3),
        (this.createTableTween = C.to(e.scale, {
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
(ee.tableAdapter = new At()), (ee.createTableTween = null);
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
let H = me;
const Tt = 2,
  Ie = ["fold", "check", "call", "raise", "bet"],
  _t = {
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
  kt = {
    player1: {
      sitPosition: { x: 751, y: 930 },
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
      sitPosition: { x: 480, y: 650 },
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
      sitPosition: { x: 480, y: 154 },
      betPosition: { x: 172, y: -2 },
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
      sitPosition: { x: 1013, y: 154 },
      betPosition: { x: -172, y: -2 },
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
      sitPosition: { x: 1013, y: 650 },
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
  Bt = N() ? kt : _t;
class m {
  static addPlayer(e) {
    H.addPlayer(e);
  }
  static getPlayers() {
    return H.getPlayers;
  }
  static getPlayersCount() {
    const e = this.getPlayers();
    return Object.keys(e).length;
  }
  static getPlayer(e) {
    return H.getPlayer(e);
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
      } = pt,
      r = (h) => new Promise((d) => setTimeout(d, h));
    for (let h = 0; h < Tt; h++) {
      await r(s);
      for (const d in e)
        if (e.hasOwnProperty(d)) {
          await r(t);
          const g = O.isMyId(d) ? n : a;
          e[d].startDealCardsAnim(h, g);
        }
    }
  }
  static turnOverPlayersCardsAnim(e, t) {
    const s = this.getPlayers(),
      n = O.getMyId,
      a = (r) => {
        const h = e[r],
          d = s[r];
        d && !d.isInLobby && d.turnOverCards(h);
      };
    if (t) a(n);
    else for (const r in s) O.isMyId(r) || a(r);
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
    t && t.destroy(), H.deletePlayer(e);
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
    m.getPlayer(e).startShowWInImageAnim();
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
    return Object.values(Bt);
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
let U = te;
const It = ["check_sign", "call_sign", "raise_sign"],
  J = {
    playerTurnStart: "player_turn_start",
    playerTurnEnd: "player_turn_end",
    playerLeave: "player_leave",
  },
  Lt = {
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
class jt extends G {
  constructor() {
    super(),
      (this.dealAnimStartPositions = []),
      (this.dealAnimEndPositions = []),
      (this.cards = []);
  }
  createCard(e) {
    const t = e,
      s = new Be(t);
    return s !== null && this.addChild(s), s;
  }
  dealAnim(e, t, s, n) {
    const a = Z.deal;
    S.playAudio(a), e.dealAnim(t, s, n);
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
    const { duration: e, ease: t, scale: s } = bt,
      n = { scale: this.scale.x };
    await C.to(n, {
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
class Rt extends G {
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
      a = new nt();
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
class Mt extends G {
  constructor(e) {
    super(),
      (this.config = e),
      (this.fps = this.config.fps),
      (this.countdownInterval = null),
      (this.progressBar = this.createProgressBar());
  }
  createProgressBar() {
    const e = this.config.progressBar,
      t = new Rt(e);
    return t && this.addChild(t), t;
  }
  startCountdown(e, t) {
    const s = this.calculatePlayerTurnTime(e, t);
    this.setVisible(!0);
    const a = this.progressBar.getBarMaskWidth / (s * this.fps);
    this.countdownInterval = setInterval(() => {
      const r = this.progressBar.getBarMaskWidth;
      if (r > 1) {
        let h = r - a;
        this.progressBar.updateBar(h);
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
class Vt extends G {
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
    return t.updateMessage(D(e.message)), this.addChild(t), t;
  }
  createMoneyIcon() {
    const e = this.config.moneyIcon,
      t = new T(e.image);
    return this.addChild(t), t;
  }
  updateMoneyText(e) {
    this.money.updateMessage(D(e)), this.updateIconPosition();
  }
  updateIconPosition() {
    this.moneyIcon.x = this.money.x - this.config.moneyIcon.offsetX;
  }
}
class Ot extends G {
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
      t = new Vt(e.moneyContainer);
    return this.addChild(t), t;
  }
  createBet() {
    const e = this.config.bet,
      t = new ke(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = new jt();
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
      t = new Mt(e);
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
class Et {
  constructor(e) {
    (this.playerComponents = new Ot(e)),
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
    this.playerComponents.bet.text.updateMessage(D(e));
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
    this.createPlayerTween = C.to(e, {
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
      (this.showWinImageTween = C.to(e.scale, {
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
class Gt {
  constructor() {
    b(this, "handleLoadingGameVisible", (e) => {
      this.pages.handleLoadingGameVisible(e);
    });
    b(this, "handleLobbyPageVisible", (e) => {
      this.pages.handleLobbyPageVisible(e);
    });
    b(this, "handleRoomsPageVisible", (e) => {
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
const _ = new Gt();
class Dt extends ye {
  constructor() {
    super("Game");
  }
  init(e) {
    (this.y = this.y - 40),
      (this.scale.x = N() ? 1.3 : 1),
      (this.scale.y = N() ? 1.3 : 1),
      (this.isActive = !0),
      this.createTable(),
      (this.playersContainer = this.createPlayersContainer()),
      this.addPlayersToGame(e);
  }
  createTable() {
    R.initTable(this);
  }
  createPlayersContainer() {
    const e = new G();
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
    S.playAudio("player_join"),
      t !== null && this.playersContainer.addChild(t.getPlayerComponents);
  }
  async onAllPlayerJoined(e) {
    const t = m.getPlayers(),
      {
        drawCards: s,
        playersBets: n,
        playersChips: a,
        playersGamePositions: r,
      } = e.players;
    for (const h in t) {
      const d = t[h];
      d.setAlpha(1),
        (d.isInLobby = !1),
        d.setCardsVisible(!0),
        this.updatePlayerMoney(h, t, a),
        this.updatePlayerBet(h, t, n),
        this.updatePlayerPosition(h, t, r);
    }
    await m.playDealCardsForPlayersAnim(),
      await new Promise((h) => {
        setTimeout(() => {
          m.turnOverPlayersCardsAnim(s, !0), h();
        }, gt);
      }),
      this.updatePlayerTurn(e.game.playerTurnData);
  }
  updatePlayerMoney(e, t, s) {
    const n = s[e].chips;
    m.updatePlayerMoneyText(e, t, n);
  }
  updatePlayerBet(e, t, s) {
    const n = s[e].bet;
    s[e] !== void 0 && m.updatePlayerBet(e, t, n);
  }
  updatePlayerPosition(e, t, s) {
    const n = s[e].position;
    m.updatePlayerPosition(e, t, n), m.checkDisplayDealerSign(e, t, n);
  }
  updatePlayerTurn(e) {
    const { playerIdGameTurn: t, serverTime: s, turnRespondTime: n } = e,
      a = J.playerTurnStart;
    S.playAudio(a),
      m.turnOffActiveRoundEffects(),
      m.setPlayerActionSignVisible(t, !1);
    const r = m.getPlayer(t);
    r && (r.startTimer(s, n), r.handleBackgroundLightVisible(!0));
  }
  createPlayer(e) {
    const {
        id: t,
        money: s,
        chips: n,
        nick: a,
        sit: r,
        bet: h,
        position: d,
        inLobby: g,
        profileImage: p,
      } = e,
      {
        sitPosition: y,
        betPosition: x,
        cardsPositions: f,
      } = U.getPositionsConfig(r),
      u = { ...Lt };
    (u.x = y.x),
      (u.y = y.y),
      (u.bet.x = x.x),
      (u.bet.y = x.y),
      (u.id = t),
      (u.sit = r),
      (u.inLobby = g),
      (u.bet.text.message = h),
      (u.position = d),
      (u.nickname.message = a),
      (u.moneyContainer.money.message = n),
      (u.cardsAnimPositions.animStartPosition = f.dealAnimStartPositions),
      (u.cardsAnimPositions.animEndPosition = f.dealAnimEndPositions);
    for (let P = 0; P < f.dealAnimEndPositions.length; P++)
      (u.cards[P].x = f.dealAnimEndPositions[P].x),
        (u.cards[P].y = f.dealAnimEndPositions[P].y);
    const w = new Et(u);
    return w.changeAvatarSprite(p), m.addPlayer(w), w;
  }
  initGameState(e) {
    const {
        tableCards: t,
        tableBets: s,
        playersBets: n,
        playerTurnID: a,
        serverTime: r,
        turnRespondTime: h,
      } = e,
      d = m.getPlayers();
    R.layOutCards(t, !1),
      R.updateTotalBetsTextAndMakeVisible(s),
      m.setPlayersCardsVisible();
    const g = m.getPlayer(a);
    g.startTimer(r, h), g.handleBackgroundLightVisible(!0);
    for (const p in n) {
      const y = n[p];
      m.updatePlayerBet(p, d, y);
    }
  }
  async initNextRound(e) {
    const { tableCards: t, tableBets: s } = e.game;
    await R.layOutCards(t),
      R.updateTotalBetsTextAndMakeVisible(s),
      m.resetPlayersBets(),
      m.setPlayersSignsVisible(!1);
  }
  deletePlayer(e) {
    const t = J.playerLeave;
    S.playAudio(t), m.deletePlayer(e);
  }
  updatePlayerTurnAction(e) {
    const [t, s, n] = It,
      [a, r, h, d, g] = Ie,
      { playerId: p, type: y, bet: x, chips: f } = e,
      u = m.getPlayer(p),
      w = J.playerTurnEnd;
    if ((S.playAudio(w), y === r)) {
      const P = t;
      u.setActionSignAndTextureVisible(P, !0);
    } else if (y === g) this.updatePlayerMoneyAndBetText(p, x, f);
    else if (y === h) {
      const P = s;
      u.setActionSignAndTextureVisible(P, !0),
        this.updatePlayerMoneyAndBetText(p, x, f);
    } else
      y === a && ((u.isInLobby = !0), u.setAlpha(0.5), u.setCardsVisible(!1));
  }
  updatePlayerMoneyAndBetText(e, t, s) {
    const n = m.getPlayers();
    m.updatePlayerBet(e, n, t), m.updatePlayerMoneyText(e, n, s);
  }
  updateUiMoneyAndBetText(e, t) {}
  setupGamePositionsConfig(e) {
    const t = O.getMyId,
      s = e[t].sit;
    U.setupConfigPositions(s);
  }
  async initGameResult(e) {
    const {
        players: { playersCards: t },
        game: { winnerPlayerId: s, winnerPlayerChips: n, tableBets: a },
      } = e,
      r = m.getPlayer(s),
      h = m.getPlayers(),
      { x: d, y: g } = r.getPosition;
    R.updateTotalBetsTextAndMakeVisible(a),
      m.setPlayersSignsVisible(!1),
      r.startShowWInImageAnim(),
      m.updatePlayerMoneyText(s, h, n),
      m.turnOverPlayersCardsAnim(t, !1),
      R.moveBetsToWinnerAnim(d, g),
      m.turnOffActiveRoundEffects(),
      m.resetPlayersBets();
  }
  resetGame() {
    m.turnOffActiveRoundEffects(), U.reset(), m.resetPlayersData(), R.reset();
  }
  refreshGameData(e) {
    m.deletePlayers(), this.addPlayersToGame(e), R.startCreateTableTween();
  }
  handleSounds(e) {
    const { deal: t, slide: s, turn: n } = Z,
      { playerTurnStart: a, playerTurnEnd: r, playerLeave: h } = J;
    e === !0
      ? (S.offAudio(n),
        S.offAudio(s),
        S.offAudio(t),
        S.offAudio(a),
        S.offAudio(r),
        S.offAudio(h))
      : (S.onAudio(n),
        S.onAudio(s),
        S.onAudio(t),
        S.onAudio(a),
        S.onAudio(r),
        S.onAudio(h));
  }
}
const Nt = new Dt();
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
b(M, "_refs", new Map());
class Ft {
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
  changeChannel(e) {
    console.log("DDDDDDD"),
      console.log(M.get("channels")),
      M.get("channels").changeChannel(e);
  }
}
const E = new Ft(),
  fe = class fe {
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
      l.onPlayerJoinRoom.add((e) => this.addPlayerToGame(e)),
        l.onAllPlayerJoined.add((e) => this.onAllPlayerJoined(e)),
        l.onChangePlayerTurn.add((e) => this.changePlayerTurn(e)),
        l.onGameState.add((e) => this.initGameState(e)),
        l.onInitNextRound.add((e) => this.initNextRound(e)),
        l.onPlayerLeave.add((e) => this.deletePlayerFromGame(e)),
        l.onUpdatePlayerTurnAction.add((e) => this.updatePlayerTurnAction(e)),
        l.onGameResult.add((e) => this.initGameResult(e)),
        l.onResetGame.add((e) => this.resetGame(e)),
        l.onKick.add(() => this.kickPlayer());
    }
    static addPlayerToGame(e) {
      console.log(e), !O.isMyId(e.id) && this.game.createPlayerAndAddToGame(e);
    }
    static onAllPlayerJoined(e) {
      this.game.onAllPlayerJoined(e);
    }
    static changePlayerTurn(e) {
      this.game.updatePlayerTurn(e);
    }
    static async initNextRound(e) {
      this.game.initNextRound(e);
    }
    static deletePlayerFromGame(e) {
      if (O.isMyId(e)) {
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
      l.onPlayerJoinRoom.detachAll(),
        l.onGameState.detachAll(),
        l.onAllPlayerJoined.detachAll(),
        l.onInitNextRound.detachAll(),
        l.onPlayerLeave.detachAll(),
        l.onGameResult.detachAll(),
        l.onResetGame.detachAll(),
        l.onKick.detachAll(),
        l.onChangePlayerTurn.detachAll(),
        l.onUpdatePlayerTurnAction.detachAll();
    }
  };
fe.game = null;
let K = fe;
const Ht = { path: "card", key: "deal_card" },
  Wt = { path: "player", key: "player_leave" },
  zt = { path: "player", key: "player_turn_end" },
  Ut = { path: "player", key: "player_turn_start" },
  Kt = { path: "player", key: "player_join" },
  Xt = { path: "card", key: "slide_card" },
  Yt = { path: "button", key: "swipe_button" },
  $t = { path: "card", key: "turn_card" },
  Jt = {
    dealCard: Ht,
    playerLeave: Wt,
    playerTurnEnd: zt,
    playerTurnStart: Ut,
    playerWin: Kt,
    slideCard: Xt,
    swipeButton: Yt,
    turnCard: $t,
  },
  qt = { path: "game/backgrounds", key: "background" },
  Qt = { path: "game/backgrounds", key: "bet_background" },
  Zt = { path: "game/avatar", key: "default_avatar" },
  es = { path: "game/avatar", key: "avatar_background" },
  ts = { path: "game/chips", key: "bet" },
  ss = { path: "game/croupier", key: "croupier" },
  is = { path: "game/signs", key: "check_sign" },
  ns = { path: "game/signs", key: "dealer_sign" },
  as = { path: "game/signs", key: "call_sign" },
  os = { path: "game/signs", key: "winner_sign" },
  rs = { path: "game/tables", key: "table" },
  cs = { path: "game/timer", key: "timer_bar_background" },
  ls = { path: "game/timer", key: "timer_bar_container" },
  ds = { path: "game/timer", key: "timer_bar" },
  hs = {
    gameBackground: qt,
    betBackground: Qt,
    defaultPlayerAvatar: Zt,
    avatarBackground: es,
    betChip: ts,
    croupier: ss,
    playerCheckSign: is,
    playerDealerSign: ns,
    playerCallSign: as,
    playerWinnerSign: os,
    gameTable: rs,
    timerBackground: cs,
    timerContainer: ls,
    timerBar: ds,
  },
  us = { path: "interface/buttons", key: "bet_button_push" },
  gs = { path: "interface/buttons", key: "bet_button" },
  ps = { path: "interface/buttons", key: "betting_hide_button" },
  ys = { path: "interface/buttons", key: "betting_show_button" },
  ms = { path: "interface/buttons", key: "call_button_push" },
  fs = { path: "interface/buttons", key: "call_button" },
  bs = { path: "interface/buttons", key: "check_button_push" },
  xs = { path: "interface/buttons", key: "check_button" },
  Ps = { path: "interface/buttons", key: "fold_button_push" },
  Cs = { path: "interface/buttons", key: "fold_button" },
  Ss = { path: "interface/buttons", key: "raise_button_push" },
  ws = { path: "interface/buttons", key: "raise_button" },
  As = { path: "interface", key: "batting_arrow" },
  vs = { path: "interface", key: "betting_background" },
  Ts = { path: "interface", key: "betting_text_field" },
  _s = { path: "interface", key: "bottom_bar" },
  ks = {
    betButtonPush: us,
    betButton: gs,
    bettingHideButton: ps,
    bettingShowButton: ys,
    callButtonPush: ms,
    callButton: fs,
    checkButtonPush: bs,
    checkButton: xs,
    foldButtonPush: Ps,
    foldButton: Cs,
    raiseButtonPush: Ss,
    raiseButton: ws,
    battingArrow: As,
    bettingBackground: vs,
    bettingTextField: Ts,
    bottomBar: _s,
  },
  Bs = { path: "loginScreen/background", key: "login_screen_background" },
  Is = { path: "loginScreen/buttons", key: "login_button" },
  Ls = { path: "loginScreen/buttons", key: "login_button_push" },
  js = { loginScreenBackground: Bs, loginButton: Is, loginButtonPush: Ls },
  Rs = { path: "registerScreen/background", key: "register_screen_background" },
  Ms = { path: "registerScreen/buttons", key: "register_button" },
  Vs = { path: "registerScreen/buttons", key: "register_button_push" },
  Os = { path: "registerScreen/buttons", key: "back_button" },
  Es = { path: "registerScreen/buttons", key: "back_button_push" },
  Gs = {
    registerScreenBackground: Rs,
    registerButton: Ms,
    registerButtonPush: Vs,
    backButton: Os,
    backButtonPush: Es,
  },
  Ds = [hs, ks, js, Gs],
  Ns = {
    path: "game/cards",
    number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    color: ["d", "c", "h", "s"],
  },
  Fs = { key: "card_hidden" },
  ve = { cards: Ns, hiddenCard: Fs },
  Te = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class Hs extends ye {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadAllAudio(),
      await this.loadImages(),
      await this.loadAllImages(),
      await this.loadCardImages(),
      K.afterLoadGameCallback();
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
        a = await Ce.load(`assets/images/${n}.png`);
      Q.addImage(n, a);
    }
  }
  loadAllImages() {
    Ds.forEach((e) => {
      Object.entries(e).forEach(([t, s]) => {
        this.loadImage(s);
      });
    });
  }
  async loadCardImages() {
    const { path: e, number: t, color: s } = ve.cards,
      n = ve.hiddenCard.key,
      a = t,
      r = s;
    for (let d = 0; d < r.length; d++) {
      const g = r[d];
      for (let p = 0; p < a.length; p++) {
        const x = g + a[p];
        await this.loadImage({ path: e, key: x });
      }
    }
    const h = n;
    await this.loadImage({ path: e, key: h });
  }
  async loadImage({ path: e, key: t }) {
    const { _path: s, extension: n } = Te.images;
    let a = s + e + "/" + t + n,
      r = await Ce.load(a);
    Q.addImage(t, r);
  }
  async loadAllAudio() {
    await Object.entries(Jt).forEach(async ([e, t]) => {
      await this.loadAudio(t);
    });
  }
  async loadAudio({ path: e, key: t }) {
    const { _path: s, extension: n } = Te.audio;
    let a = s + e + "/" + t + n;
    await S.addAudio(t, a);
  }
  handleStartNextScene() {}
}
const Ws = new Hs();
class zs extends ye {
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
      (this.firstLayerCreateTween = C.to(this.firstLayer.scale, {
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
    this.firstLayerOutTween = C.to(this.firstLayer.scale, {
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
      (this.secondLayerCreateTween = C.to(this.secondLayer, {
        alpha: 1,
        duration: 0.6,
        onComplete: () => {},
      }));
  }
  startSecondLayerOutTween() {
    this.secondLayerOutTween = C.to(this.secondLayer, {
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
const Us = new zs(),
  Ks = (o) => {
    pe.add(o),
      j.addScene([Ws, Us, Nt]),
      j.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = o);
  },
  Xs = I.forwardRef((o, e) => {
    const t = c.useRef(null);
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
  Ys = { "Content-Type": "application/json", Accept: "application/json" },
  $s = (o, e) =>
    fetch(`${dt}/${e}`, {
      method: "post",
      headers: Ys,
      body: JSON.stringify(o),
    }),
  Js = (o) => $s(o, "authentication"),
  qs = I.forwardRef((o, e) => {
    const [t, s] = c.useState(!1),
      n = c.useRef(null),
      a = () => {
        t || (s(!0), _.handleLoadingPageVisible(!0), r());
      },
      r = async () => {
        const { success: d, jwt: g } = await h();
        d
          ? (await O.connectWithServer(),
            de.success("Success !"),
            ge.set("authToken", g, { expires: 1 }),
            O.setupServerListeners(),
            _.handleLobbyPageVisible(!0),
            _.handleLoadingPageVisible(!1),
            _.handleLoginPageVisible(!1),
            s(!1))
          : (_.handleLoadingPageVisible(!1),
            de.error("Invalid login or password !"),
            s(!1));
      },
      h = async () => {
        const d = n.current.querySelector("#login").value,
          g = n.current.querySelector("#password").value,
          p = await (await Js({ username: d, password: g })).json(),
          { success: y, jwt: x } = p;
        return { success: y, jwt: x };
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
        i.jsx(_e, {}),
      ],
    });
  }),
  Qs = I.forwardRef((o, e) => {
    const t = c.useRef(null);
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
  V = I.forwardRef((o, e) => {
    const [t, s] = c.useState(!1),
      [n, a] = c.useState(!1),
      r = "\\TESTLIVE\\assets\\images\\UI\\buttons\\",
      h = r + o.default + ".png",
      d = r + o.hover + ".png",
      g = r + o.push + ".png",
      p = () => {
        s(!0);
      },
      y = () => {
        s(!1);
      },
      x = () => {
        o.onClick();
      },
      f = () => {
        a(!0);
      },
      u = () => {
        a(!1);
      },
      w = n ? g : t ? d : h;
    return i.jsx("div", {
      id: "texture-button",
      children: i.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: x,
        src: w,
        onMouseEnter: p,
        onMouseLeave: y,
        onMouseDown: f,
        onMouseUp: u,
        alt: "button",
      }),
    });
  }),
  Zs = I.forwardRef((o, e) =>
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
  ei = I.forwardRef((o, e) => {
    const {
        bigBlindValue: t,
        buyInMaxValue: s,
        buyInMinValue: n,
        smallBlingValue: a,
      } = o.data,
      r = o.availableChips,
      [h, d] = c.useState("buyInMin"),
      [g, p] = c.useState(5e3),
      [y, x] = c.useState(!1),
      f = c.useRef(null);
    y || u(),
      c.useEffect(() => {
        X();
      }, []);
    function u() {
      x(!0),
        l.onGetPlayers.add((B) => w(B)),
        l.onAnnouncement.add((B) => {
          de.warning(B), _.handleLoadingPageVisible(!1);
        });
    }
    function w(B) {
      _.handleLobbyPageVisible(!1), P(), E.handleVisible(!0), K.startGame(B);
    }
    const P = () => {
        l.onGetPlayers.detachAll(), l.onAnnouncement.detachAll();
      },
      k = () => {
        P(), E.closeBuyInWindow();
      },
      A = () => {
        _.handleLoadingPageVisible(!0);
        const B = ge.get("authToken");
        l.joinGame.dispatch({ authToken: B, buyInValue: g });
      },
      F = (B) => {
        d(B),
          B === "buyInMin" ? p(n) : B === "buyInMax" && p(s),
          console.log(s);
      },
      X = () => {
        C.fromTo(
          f.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      };
    return i.jsxs("div", {
      id: "buy-in-window-container",
      ref: f,
      children: [
        i.jsxs("div", {
          id: "buy-in-content",
          children: [
            i.jsx("div", {
              id: "title",
              children: i.jsx("h1", { children: "Select Buy In" }),
            }),
            i.jsx("div", {
              id: "close-button-container",
              children: i.jsx(Zs, { onClick: k }),
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
                          i.jsx("h1", { children: r.toLocaleString("en") }),
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
                          h === "buyInMin"
                            ? "chips-button-active"
                            : "chips-button",
                        onClick: () => F("buyInMin"),
                        children: [n.toLocaleString("en"), " Chips"],
                      }),
                      i.jsxs("button", {
                        id:
                          h === "buyInMax"
                            ? "chips-button-active"
                            : "chips-button",
                        onClick: () => F("buyInMax"),
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
                      onClick: A,
                      children: "Confirm",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(_e, {}),
      ],
    });
  }),
  ti = I.forwardRef((o, e) => {
    const [t, s] = c.useState(!1),
      [n, a] = c.useState(!1),
      [r, h] = c.useState(!1),
      [d, g] = c.useState({
        nickname: localStorage.getItem("nickname") || "",
        money: localStorage.getItem("money") || 0,
        profileImage:
          localStorage.getItem("profileImage") ||
          "assetsimagesgameavatardefault_avatar.png",
      }),
      [p, y] = c.useState({
        bigBlindValue: 0,
        buyInMaxValue: 0,
        buyInMinValue: 0,
        smallBlingValue: 0,
      }),
      x = c.useRef(null),
      f = c.useRef(null),
      u = c.useRef(null),
      w = c.useRef(null),
      P = c.useRef(null),
      [k, A] = c.useState(!1),
      [F, X] = c.useState(!1),
      [B, be] = c.useState(!1),
      [Le, xe] = c.useState(!1),
      [je, Pe] = c.useState(!1),
      Re = "\\TESTLIVE\\assets\\images\\cash_games_label.png",
      Me = "\\TESTLIVE\\assets\\images\\sit_n_go_label.png",
      Ve = "\\TESTLIVE\\assets\\images\\private_games_label.png",
      Oe = "\\TESTLIVE\\assets\\images\\shop_label.png",
      Ee = "\\TESTLIVE\\assets\\images\\rankings_label.png",
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
      Ge = "\\TESTLIVE\\assets\\images\\cash_games_label_mobile.png",
      De = "\\TESTLIVE\\assets\\images\\sit_n_go_label_mobile.png",
      Ne = "\\TESTLIVE\\assets\\images\\private_games_label_mobile.png",
      Fe = "\\TESTLIVE\\assets\\images\\shop_label_mobile.png",
      He = "\\TESTLIVE\\assets\\images\\rankings_label_mobile.png",
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
    t || We(),
      c.useEffect(
        () => (
          window.addEventListener("resize", $),
          () => window.removeEventListener("resize", $)
        ),
        []
      ),
      c.useEffect(() => {
        const L = ge.get("authToken");
        l.getPlayerAndGameProfileInformation.dispatch(L), Ye(), $();
      }, []);
    function We() {
      s(!0),
        l.onPlayerAndGameProfileInformation.add((L) => {
          g(L.playerInformation),
            y(L.gameInformation),
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
    const ze = (L) => {
        h(L);
      },
      Ue = () => {
        h(!0);
      },
      Ke = () => {
        l.onPlayerAndGameProfileInformation.detachAll();
      },
      Y = () => {
        console.log("Claim CHips button CLicked");
      },
      Xe = () => {
        console.log("Home button clicked");
      },
      $ = () => {
        window.innerWidth < 680 ? a(!0) : a(!1);
      },
      Ye = () => {
        C.fromTo(
          f.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        ),
          C.fromTo(
            u.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 0.5 }
          ),
          C.fromTo(
            P.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 0.6 }
          );
      };
    return (
      c.useImperativeHandle(e, () => ({
        removeListeners: Ke,
        handleBuyInWindowVisible: ze,
        onResize: $,
      })),
      i.jsxs("div", {
        id: "lobby-container",
        ref: x,
        children: [
          i.jsxs("div", {
            id: "lobby-container-wrapper",
            children: [
              i.jsxs("div", {
                id: "top-bar-container",
                ref: f,
                children: [
                  i.jsx("div", {
                    id: "home-button-container",
                    children: i.jsx(V, {
                      onClick: Xe,
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
                        src: d.profileImage,
                        alt: "home-button",
                      }),
                      i.jsxs("div", {
                        id: "player-information-container",
                        children: [
                          i.jsx("h2", { children: d.nickname }),
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
                                children: d.money.toLocaleString("en"),
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
                ref: u,
                children: [
                  i.jsxs("div", {
                    id: k
                      ? "first-card-container-hover"
                      : "first-card-container",
                    onMouseEnter: () => A(!0),
                    onMouseLeave: () => A(!1),
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: n ? Ge : Re,
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "second-button",
                        children: "Quick Play",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: Ue,
                        children: "Show Rooms",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: F
                      ? "second-card-container-hover"
                      : "second-card-container",
                    onMouseEnter: () => X(!0),
                    onMouseLeave: () => X(!1),
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: n ? De : Me,
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: Y,
                        children: "Join Now",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: B
                      ? "second-card-container-hover"
                      : "second-card-container",
                    onMouseEnter: () => be(!0),
                    onMouseLeave: () => be(!1),
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: n ? Ne : Ve,
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: Y,
                        children: "Join Now",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: "double-card-container",
                    children: [
                      i.jsxs("div", {
                        id: Le
                          ? "third-card-container-hover"
                          : "third-card-container",
                        onMouseEnter: () => xe(!0),
                        onMouseLeave: () => xe(!1),
                        children: [
                          i.jsx("img", {
                            id: "card",
                            src: n ? Fe : Oe,
                            alt: "card",
                          }),
                          i.jsx("button", {
                            id: "first-button",
                            onClick: Y,
                            children: "Open",
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "second-image",
                        id: je
                          ? "third-card-container-hover"
                          : "third-card-container",
                        onMouseEnter: () => Pe(!0),
                        onMouseLeave: () => Pe(!1),
                        children: [
                          i.jsx("img", {
                            id: "card",
                            src: n ? He : Ee,
                            alt: "card",
                          }),
                          i.jsx("button", {
                            id: "first-button",
                            onClick: Y,
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
                children: i.jsx("div", { id: "bottom-line", ref: w }),
              }),
              i.jsxs("div", {
                id: "claim-chips-container",
                ref: P,
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
          r && i.jsx(ei, { data: p, availableChips: d.money }),
        ],
      })
    );
  });
I.forwardRef((o, e) => {
  const t = c.useRef(null);
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
const si = I.forwardRef((o, e) => {
  const [t, s] = c.useState(!1),
    [n, a] = c.useState(!1),
    [r, h] = c.useState(!0),
    [d, g] = c.useState(!1),
    p = c.useRef(null),
    y = c.useRef(null),
    x = c.useRef(null),
    f = c.useRef(null);
  M.add("lobbyScreen", f);
  const u = (A) => {
      s(A);
    },
    w = (A) => {
      a(A);
    },
    P = (A) => {
      h(A);
    },
    k = (A) => {
      A === !1 && f.current.removeListeners(), g(A);
    };
  return (
    c.useImperativeHandle(e, () => ({
      handleLoadingPageVisible: u,
      handleLoginPageVisible: w,
      handleLoadingGameVisible: P,
      handleLobbyPageVisible: k,
    })),
    i.jsxs("div", {
      id: "pages",
      ref: e,
      children: [
        r && i.jsx(Qs, { ref: x }),
        n && i.jsx(qs, { ref: y }),
        d && i.jsx(ti, { ref: f }),
        t && i.jsx(Xs, { ref: p }),
      ],
    })
  );
});
I.forwardRef((o, e) => {
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
function ii(o) {
  const e = parseFloat(o.replace(/,/g, ""));
  return parseFloat(e);
}
const ni = c.forwardRef((o, e) => {
    const [t, s] = c.useState(D(1e3));
    c.useState(D(1e3));
    const n = (d) => {
        const [g, p, y, x, f] = Ie,
          u = { action: "", data: 0 };
        if (d === g) (u.action = g), l.playerTurnAction.dispatch(u);
        else if (d === y) (u.action = y), l.playerTurnAction.dispatch(u);
        else if (d === x) {
          //! BET
          (u.action = "bet"), (u.data = ii(t)), l.playerTurnAction.dispatch(u);
        } else d === p && ((u.action = p), l.playerTurnAction.dispatch(u));
      },
      a = (d) => {},
      r = (d) => {
        const g = D(d.target.value);
        s(g);
      },
      h = (d) => {};
    return (
      c.useImperativeHandle(e, () => ({ update: h })),
      i.jsxs("div", {
        id: "betting-panel-container",
        children: [
          i.jsxs("div", {
            id: "left-panel-container",
            children: [
              i.jsx("button", {
                id: "call-button",
                onClick: () => n("call"),
                children: "Call",
              }),
              i.jsx("button", {
                id: "fold-button",
                onClick: () => n("fold"),
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
                    onClick: () => a(),
                    children: "5BB",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => a(),
                    children: "35%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => a(),
                    children: "75%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => a(),
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
                        onChange: r,
                        min: "1000",
                        max: "10000",
                        step: "1000",
                      }),
                      i.jsx("span", { id: "slider-value", children: t }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: "betting-buttons-container",
                    children: [
                      i.jsx("button", {
                        id: "check-button",
                        onClick: () => n("check"),
                        children: "Check",
                      }),
                      i.jsx("button", {
                        id: "raise-button",
                        onClick: () => n("raise"),
                        children: "Bet",
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
  ai = c.forwardRef((o, e) => {
    const [t, s] = c.useState("chat"),
      n = (a) => {
        E.changeChannel(a), s(a);
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
  oi = c.forwardRef((o, e) => {
    const t = (s) => {
      //! WSZYSTKO GOTOWE. MOZESZ ZACZAC TWORZYĆ
      console.log(s);
    };
    return (
      c.useImperativeHandle(e, () => ({ changeChannel: t })),
      i.jsx("div", { id: "channels-container" })
    );
  }),
  ri = I.forwardRef((o, e) => {
    const [t, s] = c.useState(0),
      [n, a] = c.useState(!1),
      [r, h] = c.useState(!1),
      [d, g] = c.useState({ bottom: "0px", height: 100 }),
      p = c.useRef(null),
      y = c.useRef();
    M.add("channels", y);
    const x = (A) => {
      s(A); //! ZUPDATOWAĆ CZIPY w balance danymi z servera
      //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
      //! OGarnąć check z servera aby zamieniało przyciski
    };
    c.useEffect(
      () => (
        window.addEventListener("resize", k),
        () => window.removeEventListener("resize", k)
      ),
      []
    ),
      c.useEffect(() => {
        k();
      }, []);
    const f = () => {
        h(!r);
      },
      u = (A) => {
        g((F) => ({ ...F, ...A }));
      },
      w = () => d.height,
      P = () => {
        C.fromTo(
          p.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      },
      k = () => {
        window.innerHeight < window.innerWidth
          ? (a(!0), h(!0))
          : (a(!1), h(!1));
      };
    return (
      c.useImperativeHandle(e, () => ({
        resize: u,
        getHeight: w,
        startOpenTween: P,
        update: x,
      })),
      i.jsxs("div", {
        id: "bottom-bar",
        style: d,
        ref: p,
        children: [
          !n &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsx("div", {
                id: "chat_button-container",
                children: i.jsx(V, {
                  onClick: f,
                  default: "chat_button",
                  hover: "chat_button_hover",
                  push: "chat_button",
                }),
              }),
            }),
          r &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsxs("div", {
                id: "channels-container-wrapper",
                children: [
                  i.jsx(ai, {}),
                  i.jsx(oi, { ref: y }),
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
          i.jsx("div", { id: "separation-container", children: i.jsx(ni, {}) }),
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
  ci = I.forwardRef((o, e) => {
    const [t, s] = c.useState(!1),
      [n, a] = c.useState(!1),
      [r, h] = c.useState({}),
      d = c.useRef(null),
      [g, p] = c.useState({
        nickname: localStorage.getItem("nickname") || "",
        money: localStorage.getItem("money") || 0,
        profileImage:
          localStorage.getItem("profileImage") ||
          "assetsimagesgameavatardefault_avatar.png",
      });
    c.useEffect(
      () => (
        window.addEventListener("resize", y),
        () => window.removeEventListener("resize", y)
      ),
      []
    ),
      c.useEffect(() => {
        y();
      }, []);
    const y = () => {
        window.innerHeight > window.innerWidth ? s(!0) : s(!1);
      },
      x = () => {
        l.onBackButtonClick.dispatch(), _.handleLoadingPageVisible(!0);
      },
      f = () => {
        a(!n), K.handleSounds(n);
      },
      u = () => {
        C.fromTo(
          d.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      w = (k) => {
        h((A) => ({ ...A, ...k }));
      },
      P = (k) => {
        p(k);
      };
    return (
      c.useImperativeHandle(e, () => ({
        resize: w,
        startOpenTween: u,
        update: P,
      })),
      i.jsxs("div", {
        id: "top-bar",
        style: r,
        ref: d,
        children: [
          i.jsx("div", {
            id: "left-side-buttons-container",
            children: i.jsxs("div", {
              id: "left-side-buttons-wrapper",
              children: [
                i.jsx(V, {
                  onClick: x,
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
                  onClick: f,
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
                  src: g.profileImage,
                  alt: "home-button",
                }),
                i.jsxs("div", {
                  id: "player-information-container",
                  children: [
                    i.jsx("h2", { children: g.nickname }),
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
                          children: g.money.toLocaleString("en"),
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
  li = c.forwardRef((o, e) => {
    c.useState(0);
    const t = c.useRef(),
      s = c.useRef();
    M.add("channels", t);
    const n = (r) => {
        //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      a = () => {
        C.fromTo(
          s.current,
          { scale: 0, x: "+=1000" },
          { scale: 1, x: "-=1000", ease: "back.out", duration: 0.8 }
        );
      };
    return (
      c.useImperativeHandle(e, () => ({
        update: n,
        contextContainerOpenTween: a,
      })),
      i.jsx("div", {
        id: "middle-bar",
        children: i.jsx("div", { id: "context-container", ref: s }),
      })
    );
  });
class di extends c.Component {
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
      (this.topBarRef = c.createRef()),
      (this.bottomBarRef = c.createRef()),
      (this.middleBarRef = c.createRef()),
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
        display: r,
      } = this.state,
      h = { width: e, height: t, left: s, top: n, transform: a, display: r };
    return i.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: h,
      children: [
        i.jsx(ci, { ref: this.topBarRef }),
        i.jsx(ri, { ref: this.bottomBarRef }),
        i.jsx(li, { ref: this.middleBarRef }),
      ],
    });
  }
}
const hi = I.forwardRef((o, e) => i.jsx(di, { ref: e, ...o }));
function ui() {
  const o = c.useRef(),
    e = c.useRef(null),
    t = c.useRef(null);
  return (
    c.useEffect(() => {
      const s = o.current,
        n = e.current,
        a = t.current;
      Ks(s),
        E.create(n),
        _.create(a),
        W.resizeScreen(n, s),
        window.addEventListener("resize", () => W.resizeScreen(n, s));
    }, []),
    i.jsxs("div", {
      id: "app",
      children: [
        i.jsx(lt, { ref: o }),
        i.jsx(hi, { ref: e }),
        i.jsx(si, { ref: t }),
      ],
    })
  );
}
qe.createRoot(document.getElementById("root")).render(i.jsx(ui, {}));
