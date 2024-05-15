var Qe = Object.defineProperty;
var Ze = (c, e, t) =>
  e in c
    ? Qe(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (c[e] = t);
var x = (c, e, t) => (Ze(c, typeof e != "symbol" ? e + "" : e, t), t);
import { r as o, j as i, R } from "./react-CWbZ82Fp.js";
import { c as et } from "./react-dom-1bg23oq7.js";
import {
  S as tt,
  M as st,
  b as it,
  c as Q,
  T as nt,
  e as at,
  f as ot,
  G as rt,
  g as ke,
} from "./@pixi-cAsFVl3M.js";
import "./pixi.js-UbLQVW1G.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { l as ct } from "./socket.io-client-DFi9RC7o.js";
import { d as w } from "./mini-signals-DMh6wOcT.js";
import { g as v } from "./gsap-ZORhgBxb.js";
import { h as lt } from "./howler-BozPm2lL.js";
import { Q as Ve, B as Pe } from "./react-toastify-DdhT_1Lx.js";
import { a as we } from "./js-cookie-Cz0CWeBA.js";
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
const dt = {
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundAlpha: 0,
    resolution: window.devicePixelRatio,
    antialias: !0,
    scaleMode: tt.LINEAR,
    legacy: !1,
    transparent: !1,
    clearBeforeRender: !0,
    preserveDrawingBuffer: !1,
    forceCanvas: !1,
    cullable: !1,
    autoDensity: !0,
    MIPMAP_TEXTURES: st.POW2,
  },
  ut = (c) => new it({ ...dt, parent: c }),
  ht = o.forwardRef(function ({ currentActiveScene: e }, t) {
    const s = o.useRef(),
      n = o.useRef(null);
    return (
      o.useLayoutEffect(() => {
        s.current === void 0 &&
          ((s.current = ut("game-container")),
          (globalThis.__PHASER_GAME__ = s.current),
          t !== null &&
            ((t.current = s.current), n.current.appendChild(s.current.view)));
      }, [t]),
      i.jsx("div", { id: "game-container", ref: n })
    );
  });
class Te {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
x(Te, "_app", null);
class me {
  static get app() {
    return Te.app;
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
class q {
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
x(q, "_scenes", new Map());
class D {
  static addScene(e) {
    e.forEach((t) => {
      q.addScene(t), me.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = q.scenes,
      t = Array.from(e.keys()),
      s = t.length > 0 ? t[0] : void 0;
    s && this.startScene(s);
  }
  static startScene(e, t) {
    const s = this.getScene(e);
    me.addChild(s), s.init(t);
  }
  static removeScene(e) {
    const t = this.getScene(e);
    t == null || t.removeListeners(), me.removeChild(t);
  }
  static getScene(e) {
    return q.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), q.deleteScene(e);
  }
  static setVisible(e, t) {
    const s = this.getScene(e);
    s.visible = t;
  }
} //! ///////////////////////////////////////////////////
let gt = "https://backendpoker.blockspingaming.com",
  pt = "https://backendpoker.blockspingaming.com"; //! ///////////////////////////////////////////////////
class d {}
x(d, "onPlayerJoinRoom", new w.MiniSignal()),
  x(d, "onGetPlayers", new w.MiniSignal()),
  x(d, "onAllPlayerJoined", new w.MiniSignal()),
  x(d, "onChangePlayerTurn", new w.MiniSignal()),
  x(d, "onInitNextRound", new w.MiniSignal()),
  x(d, "onPlayerLeave", new w.MiniSignal()),
  x(d, "onUpdatePlayerTurnAction", new w.MiniSignal()),
  x(d, "onGameResult", new w.MiniSignal()),
  x(d, "onRoomsState", new w.MiniSignal()),
  x(d, "onGameState", new w.MiniSignal()),
  x(d, "onResetGame", new w.MiniSignal()),
  x(d, "onAnnouncement", new w.MiniSignal()),
  x(d, "onBackButtonClick", new w.MiniSignal()),
  x(d, "onPlayerAndGameProfileInformation", new w.MiniSignal()),
  x(d, "onKick", new w.MiniSignal()),
  x(d, "onChatMessage", new w.MiniSignal()),
  x(d, "getPlayerAndGameProfileInformation", new w.MiniSignal()),
  x(d, "playerTurnAction", new w.MiniSignal()),
  x(d, "joinGame", new w.MiniSignal()),
  x(d, "getRoomsState", new w.MiniSignal()),
  x(d, "sendChatMessage", new w.MiniSignal());
class yt {
  constructor() {
    (this.client = null), (this.myId = ""), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await ct(`${pt}`).on("connect", () => {
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
      d.onRoomsState.dispatch(e);
    }),
      this.client.on("roomState", (e) => {
        d.onGameState.dispatch(e);
      }),
      this.client.on("playerAndGameProfileInformation", (e) => {
        d.onPlayerAndGameProfileInformation.dispatch(e);
      }),
      this.client.on("getPlayers", (e) => {
        d.onGetPlayers.dispatch(e);
      }),
      this.client.on("playerJoinRoom", (e) => {
        d.onPlayerJoinRoom.dispatch(e);
      }),
      this.client.on("initPreflopRound", (e) => {
        d.onAllPlayerJoined.dispatch(e);
      }),
      this.client.on("updateGameTurn", (e) => {
        d.onChangePlayerTurn.dispatch(e);
      }),
      this.client.on("initNextRound", (e) => {
        d.onInitNextRound.dispatch(e);
      }),
      this.client.on("playerLeaveGame", (e) => {
        d.onPlayerLeave.dispatch(e);
      }),
      this.client.on("updatePlayerTurnAction", (e) => {
        d.onUpdatePlayerTurnAction.dispatch(e);
      }),
      this.client.on("onChatMessage", (e) => {
        d.onChatMessage.dispatch(e);
      }),
      this.client.on("kick", () => {
        d.onKick.dispatch();
      }),
      this.client.on("gameResult", (e) => {
        d.onGameResult.dispatch(e);
      }),
      this.client.on("resetGame", (e) => {
        d.onResetGame.dispatch(e);
      }),
      this.client.on("announcement", (e) => {
        d.onAnnouncement.dispatch(e);
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
  sendChatMessage(e) {
    this.client.emit("sendMessage", e);
  }
  bindSignals() {
    d.playerTurnAction.add((e) => this.playerTurnAction(e)),
      d.joinGame.add((e) => this.joinGame(e)),
      d.onBackButtonClick.add(() => this.playerLeaveRoom()),
      d.getPlayerAndGameProfileInformation.add((e) =>
        this.getPlayerAndGameProfileInformation(e)
      ),
      d.sendChatMessage.add((e) => this.sendChatMessage(e));
  }
}
const N = new yt();
class Ae extends Q {
  constructor(e) {
    super(), (this.sceneKey = e), (this.isActive = !1);
  }
  init(e) {
    this.isActive = !0;
  }
}
class le extends nt {
  constructor(e) {
    const {
      message: t,
      x: s = 0,
      y: n = 0,
      anchorX: a = 0,
      anchorY: r = 0,
      visible: l = !0,
      isStatic: u = !1,
      scaleX: p = 1,
      scaleY: g = 1,
      textConfig: {
        fontFamily: y = "Arial",
        fontSize: f = 55,
        fill: P = 0,
      } = {},
    } = e;
    super(t, { fontFamily: y, fontSize: f, fill: P }),
      this.anchor.set(a, r),
      this.position.set(s, n),
      (this.visible = l),
      (this.scale.x = p),
      (this.scale.y = g),
      (this.cacheAsBitmap = u),
      this.updateMessage(t);
  }
  updateMessage(e) {
    this.text = e;
  }
  get getTextInNumber() {
    return parseInt(this.text);
  }
}
class F extends Q {
  constructor() {
    super();
  }
}
class Ce {
  static addImage(e, t) {
    this.images.set(e, t);
  }
  static getImage(e) {
    return this.images.get(e);
  }
}
x(Ce, "images", new Map());
class ae {
  static addImage(e, t) {
    Ce.addImage(e, t);
  }
  static getImage(e) {
    return Ce.getImage(e);
  }
}
class B extends at {
  constructor(e) {
    const {
        textureKey: t,
        x: s = 0,
        y: n = 0,
        anchorX: a = 0.5,
        anchorY: r = 0.5,
        visible: l = !0,
        scaleX: u = 1,
        scaleY: p = 1,
        angle: g = 0,
        tint: y = 16777215,
        isStatic: f = !0,
        interactive: P = !1,
        eventMode: h = "none",
      } = e,
      b = ae.getImage(t);
    super(b),
      this.anchor.set(a, r),
      this.position.set(s, n),
      (this.scale.x = u),
      (this.scale.y = p),
      (this.angle = g),
      (this.tint = y),
      (this.visible = l),
      (this.filters = null),
      (this.eventMode = h),
      (this.interactiveChildren = P),
      (this.cacheAsBitmap = f);
  }
  changeTexture(e) {
    const t = ae.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  changeTextureURL(e) {
    const t = ot.from(e);
    (this.texture = t), (this.width = 39), (this.height = 39);
  }
  setVisible(e) {
    this.visible = e;
  }
}
function z(c) {
  return parseInt(c).toLocaleString("en", { useGrouping: !0 });
}
class Se extends F {
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
      t = new B(e);
    return t && this.addChild(t), t;
  }
  createBetsCountText() {
    const e = this.config.text,
      t = new le(e);
    return this.addChild(t), t;
  }
  setVisible(e) {
    this.visible = e;
  }
  updateText(e) {
    this.text.updateMessage(z(e));
  }
  reset() {
    (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visible = !1),
      this.text.updateMessage(0);
  }
}
const ft = 1e3,
  oe = { deal: "deal_card", slide: "slide_card", turn: "turn_card" },
  mt = {
    nextAnimDelay: 200,
    nextCardDeal: 100,
    cardScale: { owner: 1, other: 1 },
  },
  bt = { duration: 0.1, ease: "none", yoyo: !0, repeat: 1 },
  xt = { duration: 0.5, ease: "circ.out", angle: 360, scaleOnStart: 0.5 },
  Pt = { duration: 0.3, ease: "none" },
  Ct = { duration: 0.3, ease: "none", scale: 1.5 };
function U() {
  return window.innerWidth / window.innerHeight <= 1;
}
const Ie = { y: U() ? 426 : 520, duration: 0.2, ease: "none" };
class Ee extends B {
  constructor(e) {
    super(e), (this.config = e), (this.isTurned = !1), (this.isSlideDown = !1);
  }
  async turnOverAnim(e) {
    const { duration: t, ease: s, yoyo: n, repeat: a } = bt;
    await v.to(this, {
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
    const { duration: n, ease: a, scaleOnStart: r, angle: l } = xt,
      u = { scale: this.scale.x * r, angle: this.angle, x: this.x, y: this.y };
    (this.visible = !0),
      v.to(u, {
        scale: s,
        angle: this.angle + l,
        x: e,
        y: t,
        duration: n,
        ease: a,
        onUpdate: () => {
          (this.angle = u.angle),
            this.setScale(u.scale),
            (this.x = u.x),
            (this.y = u.y);
        },
      });
  }
  spreadCardAnim(e) {
    const t = e * 35;
    v.to(this, { x: t, duration: 0.3, ease: "none" });
  }
  moveDownAnim() {
    const e = this.y + 9;
    v.to(this, { y: e, duration: 0.3, ease: "back.out" });
  }
  async slideFromTopAnim() {
    const { ease: e, duration: t, y: s } = Ie;
    (this.visible = !0),
      await v.to(this, {
        y: s,
        duration: t,
        ease: e,
        onComplete: () => {
          this.isSlideDown = !0;
        },
      });
  }
  async moveXAnim(e) {
    const { ease: t, duration: s } = Pt;
    await v.to(this, { x: e, duration: s, ease: t });
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
    const { y: e } = Ie;
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
class ve {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
}
x(ve, "audio", new Map());
class _ {
  static addAudio(e, t) {
    return new Promise((s) => {
      const n = new lt.Howl({ src: [t], html5: !1, onload: () => s(1) });
      ve.addAudio(e, n);
    });
  }
  static getAudio(e) {
    return ve.getAudio(e);
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
class St extends F {
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
        l = a.moveXAnim(r);
      s.push(l);
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
    const t = oe.slide;
    _.playAudio(t), await this.getCard(e).slideFromTopAnim();
  }
  async turnOverCardAnim(e, t) {
    const s = oe.turn;
    _.playAudio(s), await this.getCard(e).turnOverAnim(t);
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
      s = new Ee(t);
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
const vt = {
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
  Tt = U() ? wt : vt,
  be = 1920,
  xe = 1080,
  Le = 1080,
  je = 1920;
class Y {
  static resizeScreen(e, t, s) {
    this._isPortraitOrientation = U();
    const n = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, s, n), this.resizeGame(t, n);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / be, window.innerHeight / xe);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / je, window.innerWidth / Le);
  }
  static get isPortraitOrientation() {
    return this._isPortraitOrientation;
  }
  static resizeGame(e, t) {
    const s = (window.innerWidth - be * t) / 2,
      n = (window.innerHeight - xe * t) / 2;
    e.stage.position.set(s, n), e.stage.scale.set(t);
  }
  static resizeUI(e, t, s) {
    const n = this._isPortraitOrientation ? Le : be,
      a = this._isPortraitOrientation ? je : xe,
      r = (window.innerHeight - a * s) / 2,
      l = (window.innerWidth - n * s) / 2;
    e.resize({
      width: `${n}px`,
      height: `${a}px`,
      left: `${l}px`,
      top: `${r}px`,
      transform: `scale(${s})`,
    }),
      t.resize({
        width: `${n}px`,
        height: `${a}px`,
        left: `${l}px`,
        top: `${r}px`,
        transform: `scale(${s})`,
      }),
      this.resizeUIElements(e, r, s);
  }
  static resizeUIElements(e, t, s) {
    const n = window.innerHeight / s;
    let a = 0,
      r = 0;
    this._isPortraitOrientation, (a = window.innerHeight * 0.03), (r = 50);
    const l = n - e.bottomBarHeight - t / s - a,
      u = -(t / s) + r;
    e.resizeBottomBar({ top: `${l}px` }), e.resizeTopBar({ top: `${u}px` });
  }
}
x(Y, "_isPortraitOrientation", U());
class At extends Q {
  constructor() {
    super(),
      (this.config = Tt),
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
        x: Y.isPortraitOrientation ? 723 : 987,
        y: Y.isPortraitOrientation ? 453 : 530,
        angle: Y.isPortraitOrientation ? 90 : 0,
        isStatic: !0,
      },
      t = new B(e);
    return this.addChild(t), t;
  }
  createPotSizeText() {
    const e = new le(this.config.potSizeText);
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
      r = new Q();
    for (let l = 0; l < e; l++) {
      let u = { ...a };
      u.x = l * t;
      const p = new B(u);
      r.addChild(p);
    }
    (r.x = s), (r.y = n), this.addChild(r);
  }
  createTotalBets() {
    const e = this.config.bet,
      t = new Se(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = this.config.card,
      t = new St(e);
    return this.addChild(t), t;
  }
  createWinnerBets() {
    const e = new Q();
    for (let t = 0; t < 5; t++) {
      const s = this.config.bet,
        n = new Se(s);
      e.addChild(n);
    }
    return this.addChild(e), e;
  }
}
class _t {
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
const Bt = { duration: 1, ease: "circ.out" },
  re = class re {
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
      const { ease: a, duration: r } = Bt,
        u = this.tableAdapter.winnerBets.children[n];
      u.updateText(s),
        u.setVisible(!0),
        await v.to(u, {
          y: t,
          x: e,
          duration: r,
          ease: a,
          onComplete: () => {
            u.setVisible(!1);
          },
        });
    }
    static getTableImage() {
      return this.tableAdapter.table.table;
    }
    static startCreateTableTween() {
      const e = this.getTableImage();
      e.scale.set(0.3),
        (this.createTableTween = v.to(e.scale, {
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
(re.tableAdapter = new _t()), (re.createTableTween = null);
let W = re;
const _e = class _e {
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
_e.players = {};
let X = _e;
const kt = 2,
  Oe = ["fold", "check", "call", "raise", "bet"],
  It = {
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
  Lt = {
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
  jt = U() ? Lt : It;
class m {
  static addPlayer(e) {
    X.addPlayer(e);
  }
  static getPlayers() {
    return X.getPlayers;
  }
  static getPlayersCount() {
    const e = this.getPlayers();
    return Object.keys(e).length;
  }
  static getPlayer(e) {
    return X.getPlayer(e);
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
  static updateSign(e, t, s) {
    const n = t[e];
    s === "dealer"
      ? n.setDealerSignVisible(!0)
      : s === "bigBlind"
      ? (n.setPlayerBlindSignTexture("big_blind_sign"),
        n.setPlayerBlindSignVisible(!0))
      : s === "smallBlind" &&
        (n.setPlayerBlindSignTexture("small_blind_sign"),
        n.setPlayerBlindSignVisible(!0));
  }
  static async playDealCardsForPlayersAnim() {
    const e = this.getPlayers(),
      {
        nextAnimDelay: t,
        nextCardDeal: s,
        cardScale: { owner: n, other: a },
      } = mt,
      r = (l) => new Promise((u) => setTimeout(u, l));
    for (let l = 0; l < kt; l++) {
      await r(s);
      for (const u in e)
        if (e.hasOwnProperty(u)) {
          await r(t);
          const p = N.isMyId(u) ? n : a;
          e[u].startDealCardsAnim(l, p);
        }
    }
  }
  static turnOverPlayersCardsAnim(e, t) {
    const s = this.getPlayers(),
      n = N.getMyId,
      a = (r) => {
        const l = e[r],
          u = s[r];
        u && !u.isInLobby && u.turnOverCards(l);
      };
    if (t) a(n);
    else for (const r in s) N.isMyId(r) || a(r);
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
    t && t.destroy(), X.deletePlayer(e);
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
        s.handleWinImageVisible(!1),
        s.setPlayerBlindSignVisible(!1);
    }
  }
}
const ce = class ce {
  static convertConfigToArray() {
    return Object.values(jt);
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
ce.positionsConfig = ce.convertConfigToArray();
let Z = ce;
const Mt = ["check_sign", "call_sign", "raise_sign"],
  ne = {
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
      scaleX: 0.5,
      scaleY: 0.5,
      visible: !1,
      isStatic: !1,
    },
    blindSign: {
      textureKey: "big_blind_sign",
      x: 92,
      y: -35,
      scaleX: 0.5,
      scaleY: 0.5,
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
class Vt extends F {
  constructor() {
    super(),
      (this.dealAnimStartPositions = []),
      (this.dealAnimEndPositions = []),
      (this.cards = []);
  }
  createCard(e) {
    const t = e,
      s = new Ee(t);
    return s !== null && this.addChild(s), s;
  }
  dealAnim(e, t, s, n) {
    const a = oe.deal;
    _.playAudio(a), e.dealAnim(t, s, n);
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
    const { duration: e, ease: t, scale: s } = Ct,
      n = { scale: this.scale.x };
    await v.to(n, {
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
class Et extends F {
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
      t = new B(e);
    return t && this.addChild(t), t;
  }
  createContainer() {
    const e = this.config.container,
      t = new B(e);
    return t && this.addChild(t), t;
  }
  createBar() {
    const e = this.config.bar,
      t = new B(e);
    return t && this.addChild(t), t;
  }
  createBarMask(e) {
    const { x: t, y: s, height: n } = this.config.mask,
      a = new rt();
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
class Ot extends F {
  constructor(e) {
    super(),
      (this.config = e),
      (this.fps = this.config.fps),
      (this.countdownInterval = null),
      (this.progressBar = this.createProgressBar());
  }
  createProgressBar() {
    const e = this.config.progressBar,
      t = new Et(e);
    return t && this.addChild(t), t;
  }
  startCountdown(e, t) {
    const s = this.calculatePlayerTurnTime(e, t);
    this.setVisible(!0);
    const a = this.progressBar.getBarMaskWidth / (s * this.fps);
    this.countdownInterval = setInterval(() => {
      const r = this.progressBar.getBarMaskWidth;
      if (r > 1) {
        let l = r - a;
        this.progressBar.updateBar(l);
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
class Gt extends F {
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
      t = new le(e);
    return t.updateMessage(z(e.message)), this.addChild(t), t;
  }
  createMoneyIcon() {
    const e = this.config.moneyIcon,
      t = new B(e.image);
    return this.addChild(t), t;
  }
  updateMoneyText(e) {
    this.money.updateMessage(z(e)), this.updateIconPosition();
  }
  updateIconPosition() {
    this.moneyIcon.x = this.money.x - this.config.moneyIcon.offsetX;
  }
}
class Dt extends F {
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
      (this.blindSign = this.createBlindSign()),
      (this.winImage = this.createWinSprite()),
      (this.cards = this.createCards()),
      (this.avatarSprite.mask = this.avatarSpriteMask),
      e.inLobby && (this.alpha = 0.5);
  }
  createBackground() {
    const e = this.config.background,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createBackgroundLight() {
    const e = this.config.backgroundLight,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatar() {
    const e = this.config.avatar,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatarMask() {
    const e = this.config.avatarMask,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createNickname() {
    const e = this.config.nickname,
      t = new le(e);
    return this.addChild(t), t;
  }
  createMoney() {
    const e = this.config,
      t = new Gt(e.moneyContainer);
    return this.addChild(t), t;
  }
  createBet() {
    const e = this.config.bet,
      t = new Se(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = new Vt();
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
      t = new Ot(e);
    return t.setVisible(!1), this.addChild(t), t;
  }
  createDealerSign() {
    const e = this.config.dealerSign,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createActionSign() {
    const e = this.config.actionSign,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createBlindSign() {
    const e = this.config.blindSign,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
  createWinSprite() {
    const e = this.config.winImage,
      t = new B(e);
    return t !== null && this.addChild(t), t;
  }
}
class Wt {
  constructor(e) {
    (this.playerComponents = new Dt(e)),
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
    this.playerComponents.bet.text.updateMessage(z(e));
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
  setPlayerBlindSignVisible(e) {
    var t;
    (t = this.playerComponents.blindSign) == null || t.setVisible(e);
  }
  setPlayerBlindSignTexture(e) {
    var t;
    (t = this.playerComponents.blindSign) == null || t.changeTexture(e);
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
    this.createPlayerTween = v.to(e, {
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
      (this.showWinImageTween = v.to(e.scale, {
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
    x(this, "setPointerEventActive", (e) => {
      this.pages.setPointerEventActive(e);
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
const k = new Nt();
class Ht extends Ae {
  constructor() {
    super("Game");
  }
  init(e) {
    (this.y = this.y - 40),
      (this.scale.x = U() ? 1.3 : 1),
      (this.scale.y = U() ? 1.3 : 1),
      (this.isActive = !0),
      this.createTable(),
      (this.playersContainer = this.createPlayersContainer()),
      this.addPlayersToGame(e);
  }
  createTable() {
    W.initTable(this);
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
    k.handleLoadingPageVisible(!1);
  }
  createPlayerAndAddToGame(e) {
    const t = this.createPlayer(e);
    _.playAudio("player_join"),
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
    for (const l in t) {
      const u = t[l];
      u.setAlpha(1),
        (u.isInLobby = !1),
        u.setCardsVisible(!0),
        this.updatePlayerMoney(l, t, a),
        this.updatePlayerBet(l, t, n),
        this.updatePlayerPosition(l, t, r);
    }
    await m.playDealCardsForPlayersAnim(),
      await new Promise((l) => {
        setTimeout(() => {
          m.turnOverPlayersCardsAnim(s, !0), l();
        }, ft);
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
    m.updatePlayerPosition(e, t, n), m.updateSign(e, t, n);
  }
  updatePlayerTurn(e) {
    const { playerIdGameTurn: t, serverTime: s, turnRespondTime: n } = e,
      a = ne.playerTurnStart;
    _.playAudio(a),
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
        bet: l,
        position: u,
        inLobby: p,
        profileImage: g,
      } = e,
      {
        sitPosition: y,
        betPosition: f,
        cardsPositions: P,
      } = Z.getPositionsConfig(r),
      h = { ...Rt };
    (h.x = y.x),
      (h.y = y.y),
      (h.bet.x = f.x),
      (h.bet.y = f.y),
      (h.id = t),
      (h.sit = r),
      (h.inLobby = p),
      (h.bet.text.message = l),
      (h.position = u),
      (h.nickname.message = a),
      (h.moneyContainer.money.message = n),
      (h.cardsAnimPositions.animStartPosition = P.dealAnimStartPositions),
      (h.cardsAnimPositions.animEndPosition = P.dealAnimEndPositions);
    for (let S = 0; S < P.dealAnimEndPositions.length; S++)
      (h.cards[S].x = P.dealAnimEndPositions[S].x),
        (h.cards[S].y = P.dealAnimEndPositions[S].y);
    const b = new Wt(h);
    return b.changeAvatarSprite(g), m.addPlayer(b), b;
  }
  initGameState(e) {
    const {
        tableCards: t,
        tableBets: s,
        playersBets: n,
        playerTurnID: a,
        serverTime: r,
        turnRespondTime: l,
      } = e,
      u = m.getPlayers();
    W.layOutCards(t, !1),
      W.updateTotalBetsTextAndMakeVisible(s),
      m.setPlayersCardsVisible();
    const p = m.getPlayer(a);
    p.startTimer(r, l), p.handleBackgroundLightVisible(!0);
    for (const g in n) {
      const y = n[g];
      m.updatePlayerBet(g, u, y);
    }
  }
  async initNextRound(e) {
    const { tableCards: t, tableBets: s } = e.game;
    await W.layOutCards(t),
      W.updateTotalBetsTextAndMakeVisible(s),
      m.resetPlayersBets(),
      m.setPlayersSignsVisible(!1);
  }
  deletePlayer(e) {
    const t = ne.playerLeave;
    _.playAudio(t), m.deletePlayer(e);
  }
  updatePlayerTurnAction(e) {
    const [t, s, n] = Mt,
      [a, r, l, u, p] = Oe,
      { playerId: g, type: y, bet: f, chips: P } = e,
      h = m.getPlayer(g),
      b = ne.playerTurnEnd;
    if ((_.playAudio(b), y === r)) {
      const S = t;
      h.setActionSignAndTextureVisible(S, !0);
    } else if (y === p || y === u) this.updatePlayerMoneyAndBetText(g, f, P);
    else if (y === l) {
      const S = s;
      h.setActionSignAndTextureVisible(S, !0),
        this.updatePlayerMoneyAndBetText(g, f, P);
    } else
      y === a && ((h.isInLobby = !0), h.setAlpha(0.5), h.setCardsVisible(!1));
  }
  updatePlayerMoneyAndBetText(e, t, s) {
    const n = m.getPlayers();
    m.updatePlayerBet(e, n, t), m.updatePlayerMoneyText(e, n, s);
  }
  updateUiMoneyAndBetText(e, t) {}
  setupGamePositionsConfig(e) {
    const t = N.getMyId,
      s = e[t].sit;
    Z.setupConfigPositions(s);
  }
  async initGameResult(e) {
    const {
      players: { playersCards: t },
      game: {
        winnersPlayerId: s,
        winningPlayerChips: n,
        tableBets: a,
        winningsPerPlayer: r,
      },
    } = e;
    for (let l = 0; l < s.length; l++) {
      const u = s[l],
        p = m.getPlayer(u),
        { x: g, y } = p.getPosition;
      p.startShowWInImageAnim();
      const f = m.getPlayers(),
        P = n[u];
      m.updatePlayerMoneyText(u, f, P), W.moveBetsToWinnerAnim(g, y, r, l);
    }
    W.setTotalBetsTextVisible(!1),
      m.setPlayersSignsVisible(!1),
      m.turnOverPlayersCardsAnim(t, !1),
      m.turnOffActiveRoundEffects(),
      m.resetPlayersBets(); //! ///////////////////////////////////
  }
  resetGame() {
    m.turnOffActiveRoundEffects(), Z.reset(), m.resetPlayersData(), W.reset();
  }
  refreshGameData(e) {
    m.deletePlayers(), this.addPlayersToGame(e), W.startCreateTableTween();
  }
  handleSounds(e) {
    const { deal: t, slide: s, turn: n } = oe,
      { playerTurnStart: a, playerTurnEnd: r, playerLeave: l } = ne;
    e === !0
      ? (_.offAudio(n),
        _.offAudio(s),
        _.offAudio(t),
        _.offAudio(a),
        _.offAudio(r),
        _.offAudio(l))
      : (_.onAudio(n),
        _.onAudio(s),
        _.onAudio(t),
        _.onAudio(a),
        _.onAudio(r),
        _.onAudio(l));
  }
}
const Ft = new Ht();
class L {
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
x(L, "_refs", new Map());
class zt {
  constructor() {
    (this.UI = null), this.bindSignals();
  }
  create(e) {
    this.UI = e;
  }
  handleVisible(e) {
    this.UI.handleVisible(e), L.get("chat").resetMessages();
  }
  closeBuyInWindow() {
    L.get("lobbyScreen").handleBuyInWindowVisible(!1);
  }
  closeInformationWindow() {
    L.get("lobbyScreen").handleInformationWindowVisible(!1);
  }
  update(e) {
    L.get("bottomBar").update(e), this.updateTopBar(e);
  }
  updateTopBar(e) {
    L.get("topBar").update(e);
  }
  updateBottomBarButtons(e) {
    L.get("bottomBar").updateBettingPanel(e);
  }
  updateBottomBarRaiseSystem(e) {
    L.get("bottomBar").updateBettingPanelRaiseSystem(e);
  }
  changeChannel(e) {
    L.get("channels").changeChannel(e);
  }
  addMessageToChat(e) {
    L.get("chat").updateMessages(e);
  }
  bindSignals() {
    d.onChatMessage.add((e) => this.addMessageToChat(e));
  }
  removeListeners() {
    d.onChatMessage.detachAll();
  }
}
const M = new zt(),
  Be = class Be {
    static startGame(e) {
      const t = D.getScene("Game"),
        s = D.getScene("Background");
      if (!(t != null && t.isActive)) {
        D.startScene("Game", e),
          (this.game = D.getScene("Game")),
          this.bindSignals(),
          s.startGameBackground();
        return;
      }
      D.setVisible("Game", !0),
        this.game.refreshGameData(e),
        s.startGameBackground();
    }
    static afterLoadGameCallback() {
      k.handleLoadingGameVisible(!1),
        k.handleLoginPageVisible(!0),
        this.startBackground();
    }
    static startBackground() {
      D.startScene("Background");
    }
    static resetAndHide() {
      const e = D.getScene("Game"),
        t = D.getScene("Background");
      e.resetGame(), D.setVisible("Game", !1), t.startLobbyBackground();
    }
    static addPlayerToGame(e) {
      console.log(e), !N.isMyId(e.id) && this.game.createPlayerAndAddToGame(e);
    }
    static onAllPlayerJoined(e) {
      this.game.onAllPlayerJoined(e),
        M.updateBottomBarButtons(e.game.playerTurnData);
      const t = { money: e.players.playersMoney[N.getMyId] };
      M.update(t);
    }
    static changePlayerTurn(e) {
      this.game.updatePlayerTurn(e),
        N.isMyId(e.playerIdGameTurn) && M.updateBottomBarButtons(e);
    }
    static async initNextRound(e) {
      this.game.initNextRound(e);
    }
    static deletePlayerFromGame(e) {
      if (N.isMyId(e)) {
        this.resetAndHide(),
          M.handleVisible(!1),
          k.handleLobbyPageVisible(!0),
          k.handleLoadingPageVisible(!1),
          k.setPointerEventActive(!0);
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
      this.resetAndHide(), M.handleVisible(!1), k.handleLobbyPageVisible(!0);
    }
    static resetGame(e) {
      this.game.resetGame();
    }
    static handleSounds(e) {
      this.game.handleSounds(e);
    }
    static bindSignals() {
      d.onPlayerJoinRoom.add((e) => this.addPlayerToGame(e)),
        d.onAllPlayerJoined.add((e) => this.onAllPlayerJoined(e)),
        d.onChangePlayerTurn.add((e) => this.changePlayerTurn(e)),
        d.onGameState.add((e) => this.initGameState(e)),
        d.onInitNextRound.add((e) => this.initNextRound(e)),
        d.onPlayerLeave.add((e) => this.deletePlayerFromGame(e)),
        d.onUpdatePlayerTurnAction.add((e) => this.updatePlayerTurnAction(e)),
        d.onGameResult.add((e) => this.initGameResult(e)),
        d.onResetGame.add((e) => this.resetGame(e)),
        d.onKick.add(() => this.kickPlayer());
    }
    static removeListeners() {
      d.onPlayerJoinRoom.detachAll(),
        d.onGameState.detachAll(),
        d.onAllPlayerJoined.detachAll(),
        d.onInitNextRound.detachAll(),
        d.onPlayerLeave.detachAll(),
        d.onGameResult.detachAll(),
        d.onResetGame.detachAll(),
        d.onKick.detachAll(),
        d.onChangePlayerTurn.detachAll(),
        d.onUpdatePlayerTurnAction.detachAll();
    }
  };
Be.game = null;
let ee = Be;
const Ut = { path: "card", key: "deal_card" },
  Kt = { path: "player", key: "player_leave" },
  Xt = { path: "player", key: "player_turn_end" },
  Yt = { path: "player", key: "player_turn_start" },
  $t = { path: "player", key: "player_join" },
  Jt = { path: "card", key: "slide_card" },
  qt = { path: "button", key: "swipe_button" },
  Qt = { path: "card", key: "turn_card" },
  Zt = {
    dealCard: Ut,
    playerLeave: Kt,
    playerTurnEnd: Xt,
    playerTurnStart: Yt,
    playerWin: $t,
    slideCard: Jt,
    swipeButton: qt,
    turnCard: Qt,
  },
  es = { path: "game/backgrounds", key: "background" },
  ts = { path: "game/backgrounds", key: "bet_background" },
  ss = { path: "game/avatar", key: "default_avatar" },
  is = { path: "game/avatar", key: "avatar_background" },
  ns = { path: "game/chips", key: "bet" },
  as = { path: "game/croupier", key: "croupier" },
  os = { path: "game/signs", key: "check_sign" },
  rs = { path: "game/signs", key: "dealer_sign" },
  cs = { path: "game/signs", key: "call_sign" },
  ls = { path: "game/signs", key: "winner_sign" },
  ds = { path: "game/signs", key: "big_blind_sign" },
  us = { path: "game/signs", key: "small_blind_sign" },
  hs = { path: "game/tables", key: "table" },
  gs = { path: "game/timer", key: "timer_bar_background" },
  ps = { path: "game/timer", key: "timer_bar_container" },
  ys = { path: "game/timer", key: "timer_bar" },
  fs = {
    gameBackground: es,
    betBackground: ts,
    defaultPlayerAvatar: ss,
    avatarBackground: is,
    betChip: ns,
    croupier: as,
    playerCheckSign: os,
    playerDealerSign: rs,
    playerCallSign: cs,
    playerWinnerSign: ls,
    playerBigBlindSign: ds,
    playerSmallBlindSign: us,
    gameTable: hs,
    timerBackground: gs,
    timerContainer: ps,
    timerBar: ys,
  },
  ms = { path: "interface/buttons", key: "bet_button_push" },
  bs = { path: "interface/buttons", key: "bet_button" },
  xs = { path: "interface/buttons", key: "betting_hide_button" },
  Ps = { path: "interface/buttons", key: "betting_show_button" },
  Cs = { path: "interface/buttons", key: "call_button_push" },
  Ss = { path: "interface/buttons", key: "call_button" },
  vs = { path: "interface/buttons", key: "check_button_push" },
  ws = { path: "interface/buttons", key: "check_button" },
  Ts = { path: "interface/buttons", key: "fold_button_push" },
  As = { path: "interface/buttons", key: "fold_button" },
  _s = { path: "interface/buttons", key: "raise_button_push" },
  Bs = { path: "interface/buttons", key: "raise_button" },
  ks = { path: "interface", key: "batting_arrow" },
  Is = { path: "interface", key: "betting_background" },
  Ls = { path: "interface", key: "betting_text_field" },
  js = { path: "interface", key: "bottom_bar" },
  Ms = {
    betButtonPush: ms,
    betButton: bs,
    bettingHideButton: xs,
    bettingShowButton: Ps,
    callButtonPush: Cs,
    callButton: Ss,
    checkButtonPush: vs,
    checkButton: ws,
    foldButtonPush: Ts,
    foldButton: As,
    raiseButtonPush: _s,
    raiseButton: Bs,
    battingArrow: ks,
    bettingBackground: Is,
    bettingTextField: Ls,
    bottomBar: js,
  },
  Rs = { path: "loginScreen/background", key: "login_screen_background" },
  Vs = { path: "loginScreen/buttons", key: "login_button" },
  Es = { path: "loginScreen/buttons", key: "login_button_push" },
  Os = { loginScreenBackground: Rs, loginButton: Vs, loginButtonPush: Es },
  Gs = { path: "registerScreen/background", key: "register_screen_background" },
  Ds = { path: "registerScreen/buttons", key: "register_button" },
  Ws = { path: "registerScreen/buttons", key: "register_button_push" },
  Ns = { path: "registerScreen/buttons", key: "back_button" },
  Hs = { path: "registerScreen/buttons", key: "back_button_push" },
  Fs = {
    registerScreenBackground: Gs,
    registerButton: Ds,
    registerButtonPush: Ws,
    backButton: Ns,
    backButtonPush: Hs,
  },
  zs = [fs, Ms, Os, Fs],
  Us = {
    path: "game/cards",
    number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    color: ["d", "c", "h", "s"],
  },
  Ks = { key: "card_hidden" },
  Me = { cards: Us, hiddenCard: Ks },
  Re = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class Xs extends Ae {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadAllAudio(),
      await this.loadImages(),
      await this.loadAllImages(),
      await this.loadCardImages(),
      ee.afterLoadGameCallback();
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
        a = await ke.load(`assets/images/${n}.png`);
      ae.addImage(n, a);
    }
  }
  loadAllImages() {
    zs.forEach((e) => {
      Object.entries(e).forEach(([t, s]) => {
        this.loadImage(s);
      });
    });
  }
  async loadCardImages() {
    const { path: e, number: t, color: s } = Me.cards,
      n = Me.hiddenCard.key,
      a = t,
      r = s;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      for (let g = 0; g < a.length; g++) {
        const f = p + a[g];
        await this.loadImage({ path: e, key: f });
      }
    }
    const l = n;
    await this.loadImage({ path: e, key: l });
  }
  async loadImage({ path: e, key: t }) {
    const { _path: s, extension: n } = Re.images;
    let a = s + e + "/" + t + n,
      r = await ke.load(a);
    ae.addImage(t, r);
  }
  async loadAllAudio() {
    await Object.entries(Zt).forEach(async ([e, t]) => {
      await this.loadAudio(t);
    });
  }
  async loadAudio({ path: e, key: t }) {
    const { _path: s, extension: n } = Re.audio;
    let a = s + e + "/" + t + n;
    await _.addAudio(t, a);
  }
  handleStartNextScene() {}
}
const Ys = new Xs();
class $s extends Ae {
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
      t = new B(e);
    return this.addChild(t), t;
  }
  createFirstLayer() {
    const e = {
        textureKey: "background_first_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new B(e);
    return this.addChild(t), t;
  }
  createSecondLayer() {
    const e = {
        textureKey: "background_second_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new B(e);
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
      (this.firstLayerCreateTween = v.to(this.firstLayer.scale, {
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
    this.firstLayerOutTween = v.to(this.firstLayer.scale, {
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
      (this.secondLayerCreateTween = v.to(this.secondLayer, {
        alpha: 1,
        duration: 0.6,
        onComplete: () => {},
      }));
  }
  startSecondLayerOutTween() {
    this.secondLayerOutTween = v.to(this.secondLayer, {
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
const Js = new $s(),
  qs = (c) => {
    Te.add(c),
      D.addScene([Ys, Js, Ft]),
      D.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = c);
  },
  Qs = R.forwardRef((c, e) => {
    const t = o.useRef(null);
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
  Zs = { "Content-Type": "application/json", Accept: "application/json" },
  ei = (c, e) =>
    fetch(`${gt}/${e}`, {
      method: "post",
      headers: Zs,
      body: JSON.stringify(c),
    }),
  ti = (c) => ei(c, "authentication"),
  si = R.forwardRef((c, e) => {
    const [t, s] = o.useState(!1),
      n = o.useRef(null),
      a = () => {
        t || (s(!0), k.handleLoadingPageVisible(!0), r());
      },
      r = async () => {
        const { success: u, jwt: p } = await l();
        u
          ? (await N.connectWithServer(),
            Pe.success("Success !"),
            we.set("authToken", p, { expires: 1 }),
            N.setupServerListeners(),
            k.handleLobbyPageVisible(!0),
            k.handleLoadingPageVisible(!1),
            k.handleLoginPageVisible(!1),
            s(!1))
          : (k.handleLoadingPageVisible(!1),
            Pe.error("Invalid login or password !"),
            s(!1));
      },
      l = async () => {
        const u = n.current.querySelector("#login").value,
          p = n.current.querySelector("#password").value,
          g = await (await ti({ username: u, password: p })).json(),
          { success: y, jwt: f } = g;
        return { success: y, jwt: f };
      };
    return i.jsxs("div", {
      id: "login-container",
      children: [
        i.jsx("div", {
          id: "login-wrapper",
          children: i.jsxs("div", {
            id: "login-form",
            ref: n,
            children: [
              i.jsx("input", {
                type: "text",
                id: "login",
                placeholder: "Login",
              }),
              i.jsx("input", {
                type: "password",
                id: "password",
                placeholder: "Password",
              }),
              i.jsx("button", { onClick: a, children: "Login" }),
            ],
          }),
        }),
        i.jsx(Ve, {}),
      ],
    });
  }),
  ii = R.forwardRef((c, e) => {
    const t = o.useRef(null);
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
  H = R.forwardRef((c, e) => {
    const [t, s] = o.useState(!1),
      [n, a] = o.useState(!1),
      r = c.svg ? ".svg" : ".png",
      l = "\\TESTLIVE\\assets\\images\\UI\\buttons\\",
      u = l + c.default + r,
      p = l + c.hover + r,
      g = l + c.push + r,
      y = () => {
        s(!0);
      },
      f = () => {
        s(!1);
      },
      P = () => {
        c.onClick();
      },
      h = () => {
        a(!0);
      },
      b = () => {
        a(!1);
      },
      S = n ? g : t ? p : u;
    return i.jsx("div", {
      id: "texture-button",
      children: i.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: P,
        src: S,
        onMouseEnter: y,
        onMouseLeave: f,
        onMouseDown: h,
        onMouseUp: b,
        alt: "button",
      }),
    });
  }),
  Ge = R.forwardRef((c, e) =>
    i.jsx("button", {
      id: "close-button",
      onClick: c.onClick,
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
  ni = R.forwardRef((c, e) => {
    const {
        bigBlindValue: t,
        buyInMaxValue: s,
        buyInMinValue: n,
        smallBlingValue: a,
      } = c.data,
      r = c.availableChips,
      [l, u] = o.useState("buyInMin"),
      [p, g] = o.useState(5e3),
      [y, f] = o.useState(!1),
      P = o.useRef(null);
    y || h(),
      o.useEffect(() => {
        A();
      }, []);
    function h() {
      f(!0), d.onGetPlayers.add((C) => b(C));
    }
    function b(C) {
      k.handleLobbyPageVisible(!1),
        k.setPointerEventActive(!1),
        S(),
        M.handleVisible(!0),
        ee.startGame(C);
    }
    const S = () => {
        d.onGetPlayers.detachAll();
      },
      I = () => {
        S(), M.closeBuyInWindow();
      },
      V = () => {
        k.handleLoadingPageVisible(!0);
        const C = we.get("authToken");
        d.joinGame.dispatch({ authToken: C, buyInValue: p });
      },
      T = (C) => {
        u(C), C === "buyInMin" ? g(n) : C === "buyInMax" && g(s);
      },
      A = () => {
        v.fromTo(
          P.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      };
    return i.jsx("div", {
      id: "buy-in-window-container",
      ref: P,
      children: i.jsxs("div", {
        id: "buy-in-content",
        children: [
          i.jsx("div", {
            id: "title",
            children: i.jsx("h1", { children: "Select Buy In" }),
          }),
          i.jsx("div", {
            id: "close-button-container",
            children: i.jsx(Ge, { onClick: I }),
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
                        l === "buyInMin"
                          ? "chips-button-active"
                          : "chips-button",
                      onClick: () => T("buyInMin"),
                      children: [n.toLocaleString("en"), " Chips"],
                    }),
                    i.jsxs("button", {
                      id:
                        l === "buyInMax"
                          ? "chips-button-active"
                          : "chips-button",
                      onClick: () => T("buyInMax"),
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
                    onClick: V,
                    children: "Confirm",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }),
  ai = R.forwardRef((c, e) => {
    const [t, s] = o.useState("The currently selected option is unavailable"),
      n = o.useRef(null);
    o.useEffect(() => {
      l();
    }, []);
    const a = () => {
        M.closeInformationWindow();
      },
      r = () => {
        M.closeInformationWindow();
      },
      l = () => {
        v.fromTo(
          n.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      };
    return i.jsx("div", {
      id: "information-window-container",
      ref: n,
      children: i.jsxs("div", {
        id: "information-content",
        children: [
          i.jsx("div", {
            id: "title",
            children: i.jsx("h1", { children: "Information" }),
          }),
          i.jsx("div", {
            id: "close-button-container",
            children: i.jsx(Ge, { onClick: a }),
          }),
          i.jsx("div", {
            id: "game-information-container",
            children: i.jsxs("div", {
              id: "game-information-wrapper",
              children: [
                i.jsx("div", {
                  id: "text-container",
                  children: i.jsx("h1", { children: t }),
                }),
                i.jsx("div", {
                  id: "confirm-button-container",
                  children: i.jsx("button", {
                    id: "confirm-button",
                    onClick: r,
                    children: "Ok",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  });
d.onAnnouncement.add((c) => {
  Pe.warning(c), k.handleLoadingPageVisible(!1);
});
const oi = R.forwardRef((c, e) => {
  const [t, s] = o.useState(!1),
    [n, a] = o.useState(!1),
    [r, l] = o.useState(!1),
    [u, p] = o.useState(!1),
    [g, y] = o.useState({
      nickname: localStorage.getItem("nickname") || "",
      money: localStorage.getItem("money") || 0,
      profileImage:
        localStorage.getItem("profileImage") ||
        "assetsimagesgameavatardefault_avatar.png",
    }),
    [f, P] = o.useState({
      bigBlindValue: 0,
      buyInMaxValue: 0,
      buyInMinValue: 0,
      smallBlingValue: 0,
      raiseMinValue: 0,
      raiseMaxValue: 0,
      riseStep: 0,
    }),
    h = o.useRef(null),
    b = o.useRef(null),
    S = o.useRef(null),
    I = o.useRef(null),
    V = o.useRef(null),
    [T, A] = o.useState(!1),
    [C, G] = o.useState(!1),
    [$, J] = o.useState(!1),
    [E, te] = o.useState(!1),
    [de, se] = o.useState(!1),
    ue = "\\TESTLIVE\\assets\\images\\cash_games_label.png",
    he = "\\TESTLIVE\\assets\\images\\sit_n_go_label.png",
    j = "\\TESTLIVE\\assets\\images\\private_games_label.png",
    De = "\\TESTLIVE\\assets\\images\\shop_label.png",
    We = "\\TESTLIVE\\assets\\images\\rankings_label.png",
    ge = {
      default: "claim_chips_button",
      hover: "claim_chips_button_hover",
      push: "claim_chips_button_hover",
    },
    pe = {
      default: "sunday_reward_button",
      hover: "sunday_reward_button_hover",
      push: "sunday_reward_button_hover",
    },
    Ne = "\\TESTLIVE\\assets\\images\\cash_games_label_mobile.png",
    He = "\\TESTLIVE\\assets\\images\\sit_n_go_label_mobile.png",
    Fe = "\\TESTLIVE\\assets\\images\\private_games_label_mobile.png",
    ze = "\\TESTLIVE\\assets\\images\\shop_label_mobile.png",
    Ue = "\\TESTLIVE\\assets\\images\\rankings_label_mobile.png",
    ye = {
      default: "claim_chips_button_mobile",
      hover: "claim_chips_button_mobile",
      push: "claim_chips_button_mobile",
    },
    fe = {
      default: "sunday_reward_button_mobile",
      hover: "sunday_reward_button_mobile",
      push: "sunday_reward_button_mobile",
    };
  t || Ke(),
    o.useEffect(
      () => (
        window.addEventListener("resize", ie),
        () => window.removeEventListener("resize", ie)
      ),
      []
    ),
    o.useEffect(() => {
      M.updateBottomBarRaiseSystem(f);
    }, [f]),
    o.useEffect(() => {
      const O = we.get("authToken");
      d.getPlayerAndGameProfileInformation.dispatch(O), qe(), ie();
    }, []);
  function Ke() {
    s(!0),
      d.onPlayerAndGameProfileInformation.add((O) => {
        y(O.playerInformation),
          P(O.gameInformation),
          M.update(O.playerInformation),
          localStorage.setItem("nickname", O.playerInformation.nickname),
          localStorage.setItem("money", O.playerInformation.money),
          localStorage.setItem(
            "profileImage",
            O.playerInformation.profileImage
          ),
          M.updateTopBar(O.playerInformation);
      });
  }
  const Xe = (O) => {
      l(O);
    },
    K = (O) => {
      p(O);
    },
    Ye = () => {
      l(!0);
    },
    $e = () => {
      d.onPlayerAndGameProfileInformation.detachAll();
    },
    Je = () => {
      console.log("Home button clicked");
    },
    ie = () => {
      window.innerWidth < 681 ? a(!0) : a(!1);
    },
    qe = () => {
      v.fromTo(
        b.current,
        { scale: 0 },
        { scale: 1, ease: "back.out", duration: 0.6 }
      ),
        v.fromTo(
          S.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.5 }
        ),
        v.fromTo(
          V.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
    };
  return (
    o.useImperativeHandle(e, () => ({
      removeListeners: $e,
      handleBuyInWindowVisible: Xe,
      handleInformationWindowVisible: K,
      onResize: ie,
    })),
    i.jsxs("div", {
      id: "lobby-container",
      ref: h,
      children: [
        i.jsxs("div", {
          id: "lobby-container-wrapper",
          children: [
            i.jsxs("div", {
              id: "top-bar-container",
              ref: b,
              children: [
                i.jsx("div", {
                  id: "home-button-container",
                  children: i.jsx(H, {
                    onClick: Je,
                    default: "home_button",
                    hover: "home_button_hover",
                    push: "home_button_hover",
                    svg: "true",
                  }),
                }),
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
                        i.jsx("div", { id: "background" }),
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
            }),
            i.jsxs("div", {
              id: "cards-container",
              ref: S,
              children: [
                i.jsxs("div", {
                  id: T ? "first-card-container-hover" : "first-card-container",
                  onMouseEnter: () => A(!0),
                  onMouseLeave: () => A(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? Ne : ue, alt: "card" }),
                    i.jsx("button", {
                      id: "second-button",
                      onClick: () => K(!0),
                      children: "Quick Play",
                    }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: Ye,
                      children: "Show Rooms",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: C
                    ? "second-card-container-hover"
                    : "second-card-container",
                  onMouseEnter: () => G(!0),
                  onMouseLeave: () => G(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? He : he, alt: "card" }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: () => K(!0),
                      children: "Join Now",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: $
                    ? "second-card-container-hover"
                    : "second-card-container",
                  onMouseEnter: () => J(!0),
                  onMouseLeave: () => J(!1),
                  children: [
                    i.jsx("img", { id: "card", src: n ? Fe : j, alt: "card" }),
                    i.jsx("button", {
                      id: "first-button",
                      onClick: () => K(!0),
                      children: "Join Now",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "double-card-container",
                  children: [
                    i.jsxs("div", {
                      id: E
                        ? "third-card-container-hover"
                        : "third-card-container",
                      onMouseEnter: () => te(!0),
                      onMouseLeave: () => te(!1),
                      children: [
                        i.jsx("img", {
                          id: "card",
                          src: n ? ze : De,
                          alt: "card",
                        }),
                        i.jsx("button", {
                          id: "first-button",
                          onClick: () => K(!0),
                          children: "Open",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "second-image",
                      id: de
                        ? "third-card-container-hover"
                        : "third-card-container",
                      onMouseEnter: () => se(!0),
                      onMouseLeave: () => se(!1),
                      children: [
                        i.jsx("img", {
                          id: "card",
                          src: n ? Ue : We,
                          alt: "card",
                        }),
                        i.jsx("button", {
                          id: "first-button",
                          onClick: () => K(!0),
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
              children: i.jsx("div", { id: "bottom-line", ref: I }),
            }),
            i.jsxs("div", {
              id: "claim-chips-container",
              ref: V,
              children: [
                i.jsx(H, {
                  id: "claim-chips-button",
                  onClick: () => {},
                  default: n ? ye.default : ge.default,
                  hover: n ? ye.hover : ge.hover,
                  push: n ? ye.push : ge.push,
                }),
                i.jsx(H, {
                  id: "claim-chips-button",
                  onClick: () => {},
                  default: n ? fe.default : pe.default,
                  hover: n ? fe.hover : pe.hover,
                  push: n ? fe.push : pe.push,
                }),
              ],
            }),
          ],
        }),
        r && i.jsx(ni, { data: f, availableChips: g.money }),
        u && i.jsx(ai, {}),
        i.jsx(Ve, {}),
      ],
    })
  );
});
R.forwardRef((c, e) => {
  const t = o.useRef(null);
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
const ri = R.forwardRef((c, e) => {
  const [t, s] = o.useState({
      width: "0px",
      height: "0px",
      left: "0px",
      top: "0px",
      transform: "none",
      display: "none",
    }),
    [n, a] = o.useState(!0),
    [r, l] = o.useState(!1),
    [u, p] = o.useState(!1),
    [g, y] = o.useState(!0),
    [f, P] = o.useState(!1),
    h = o.useRef(null),
    b = o.useRef(null),
    S = o.useRef(null),
    I = o.useRef(null);
  L.add("lobbyScreen", I);
  const V = (j) => {
      l(j);
    },
    T = (j) => {
      p(j);
    },
    A = (j) => {
      y(j);
    },
    C = (j) => {
      j === !1 && I.current.removeListeners(), P(j);
    },
    G = (j) => {
      s(j);
    },
    $ = (j) => {
      a(j);
    };
  o.useImperativeHandle(e, () => ({
    handleLoadingPageVisible: V,
    handleLoginPageVisible: T,
    handleLoadingGameVisible: A,
    handleLobbyPageVisible: C,
    setPointerEventActive: $,
    resize: G,
  }));
  const {
      width: J,
      height: E,
      left: te,
      top: de,
      transform: se,
      display: ue,
    } = t,
    he = { width: J, height: E, left: te, top: de, transform: se, display: ue };
  return i.jsxs("div", {
    id: n === !0 ? "pages" : "pages-not-active",
    ref: e,
    style: he,
    children: [
      g && i.jsx(ii, { ref: S }),
      u && i.jsx(si, { ref: b }),
      f && i.jsx(oi, { ref: I }),
      r && i.jsx(Qs, { ref: h }),
    ],
  });
});
function ci(c) {
  const e = parseFloat(c.replace(/,/g, ""));
  return parseFloat(e);
}
const li = o.forwardRef((c, e) => {
    const [t, s] = o.useState(0),
      [n, a] = o.useState(0),
      [r, l] = o.useState(0),
      [u, p] = o.useState(t),
      [g, y] = o.useState(!1),
      [f, P] = o.useState(0),
      h = (T) => {
        const [A, C, G, $, J] = Oe,
          E = { action: "", data: 0 };
        T === A
          ? ((E.action = A), d.playerTurnAction.dispatch(E))
          : T === G
          ? ((E.action = G), d.playerTurnAction.dispatch(E))
          : T === $
          ? ((E.action = "bet"),
            (E.data = ci(u)),
            d.playerTurnAction.dispatch(E))
          : T === C && ((E.action = C), d.playerTurnAction.dispatch(E));
      },
      b = (T) => {},
      S = (T) => {
        const A = z(T.target.value);
        p(A);
      },
      I = (T) => {
        const { isBetOnTable: A, playerBetDifference: C } = T;
        y(A), P(C == 0 ? "" : z(C));
      },
      V = (T) => {
        const { raiseMinValue: A, raiseMaxValue: C, riseStep: G } = T;
        s(A), a(C), l(G), p(z(A));
      };
    return (
      o.useImperativeHandle(e, () => ({ update: I, updateRaiseSystem: V })),
      i.jsxs("div", {
        id: "betting-panel-container",
        children: [
          i.jsxs("div", {
            id: "left-panel-container",
            children: [
              i.jsxs("button", {
                id: "call-button",
                onClick: () => h("call"),
                children: [" ", g ? "Call " + f : "Check"],
              }),
              i.jsx("button", {
                id: "fold-button",
                onClick: () => h("fold"),
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
                    onClick: () => b(),
                    children: "5BB",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => b(),
                    children: "35%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => b(),
                    children: "75%",
                  }),
                  i.jsx("button", {
                    id: "bet-value-button",
                    onClick: () => b(),
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
                        onChange: S,
                        min: t,
                        max: n,
                        step: r,
                      }),
                      i.jsx("span", { id: "slider-value", children: u }),
                    ],
                  }),
                  i.jsx("div", {
                    id: "betting-buttons-container",
                    children: i.jsxs("button", {
                      id: "raise-button",
                      onClick: () => h("raise"),
                      children: [" ", g ? "Raise " + u : "Bet"],
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
  di = o.forwardRef((c, e) => {
    const [t, s] = o.useState("chat"),
      n = (a) => {
        s(a), M.changeChannel(a);
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
  ui = o.forwardRef((c, e) => {
    const [t, s] = o.useState([]),
      [n, a] = o.useState(!0),
      [r, l] = o.useState(!1),
      [u, p] = o.useState(!1),
      g = (h) => {
        h === "chat"
          ? (a(!0), l(!1), p(!1))
          : h === "hands"
          ? (a(!1), l(!0), p(!1))
          : h === "table" && (a(!1), l(!1), p(!0));
      },
      y = (h) => {
        const b = [h, ...t];
        b.length > 20 && b.pop(), s(b);
      },
      f = () => {
        s([]);
      };
    o.useImperativeHandle(e, () => ({
      changeChannel: g,
      updateMessages: y,
      resetMessages: f,
    }));
    const P = (h, b) => {
      const { nickname: S, message: I, type: V } = h;
      return i.jsx(
        "div",
        {
          id: "message-container",
          children: i.jsx("div", {
            id: "message-wrapper",
            children: i.jsxs("h1", {
              id: "message",
              children: [
                " ",
                i.jsxs("span", { id: "nickname", children: [S, ":"] }),
                " ",
                I,
              ],
            }),
          }),
        },
        b
      );
    };
    return i.jsxs("div", {
      id: "channels-container",
      children: [
        n &&
          i.jsx("div", {
            id: "players-messages-container",
            children: t.map((h, b) => P(h, b)),
          }),
        r && i.jsx("div", { id: "hands-messages-container" }),
        u && i.jsx("div", { id: "table-messages-container" }),
      ],
    });
  }),
  hi = R.forwardRef((c, e) => {
    const [t, s] = o.useState(""),
      n = o.useRef();
    L.add("channels", n), o.useEffect(() => {}, []);
    const a = (g) => {
        s(g.target.value);
      },
      r = (g) => {
        g.key === "Enter" && l();
      },
      l = () => {
        t.trim() && (d.sendChatMessage.dispatch(t), s(""));
      },
      u = (g) => {
        n.current.updateMessages(g);
      },
      p = () => {
        n.current.resetMessages(), s("");
      };
    return (
      o.useImperativeHandle(e, () => ({ updateMessages: u, resetMessages: p })),
      i.jsxs("div", {
        id: "channels-container-wrapper",
        children: [
          i.jsx(di, {}),
          i.jsx(ui, { ref: n }),
          i.jsxs("div", {
            id: "text-input-container",
            children: [
              i.jsx("input", {
                type: "text",
                id: "message-input",
                onChange: a,
                onKeyDown: r,
                value: t,
                placeholder: "Send a message...",
              }),
              i.jsx("div", {
                id: "send-icon-container",
                children: i.jsx("img", {
                  id: "loading-icon",
                  onClick: l,
                  src: "\\TESTLIVE\\assets\\images\\send_icon.svg",
                  alt: "Loading_icon",
                }),
              }),
            ],
          }),
        ],
      })
    );
  }),
  gi = R.forwardRef((c, e) => {
    const [t, s] = o.useState(0),
      [n, a] = o.useState(!1),
      [r, l] = o.useState(!1);
    o.useState("");
    const [u, p] = o.useState({ bottom: "0px", height: 100 }),
      g = o.useRef(null);
    o.useRef();
    const y = o.useRef(),
      f = o.useRef();
    L.add("chat", f);
    const P = (C) => {
        s(C.money);
      },
      h = (C) => {
        y.current.update(C);
      },
      b = (C) => {
        y.current.updateRaiseSystem(C);
      };
    o.useEffect(
      () => (
        window.addEventListener("resize", A),
        () => window.removeEventListener("resize", A)
      ),
      []
    ),
      o.useEffect(() => {
        A();
      }, []);
    const S = () => {
        l(!r);
      },
      I = (C) => {
        p((G) => ({ ...G, ...C }));
      },
      V = () => u.height,
      T = () => {
        v.fromTo(
          g.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      },
      A = () => {
        window.innerHeight < window.innerWidth
          ? (a(!0), l(!0))
          : (a(!1), l(!1));
      };
    return (
      o.useImperativeHandle(e, () => ({
        resize: I,
        getHeight: V,
        startOpenTween: T,
        update: P,
        updateBettingPanel: h,
        updateBettingPanelRaiseSystem: b,
      })),
      i.jsxs("div", {
        id: "bottom-bar",
        style: u,
        ref: g,
        children: [
          !n &&
            i.jsx("div", {
              id: "separation-container",
              children: i.jsx("div", {
                id: "chat_button-container",
                children: i.jsx(H, {
                  onClick: S,
                  default: "chat_button",
                  hover: "chat_button",
                  push: "chat_button",
                  svg: "true",
                }),
              }),
            }),
          r &&
            i.jsxs("div", {
              id: "separation-container",
              children: [" ", i.jsx(hi, { ref: f })],
            }),
          i.jsx("div", {
            id: "separation-container",
            children: i.jsx(li, { ref: y }),
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
  pi = R.forwardRef((c, e) => {
    const [t, s] = o.useState(!1),
      [n, a] = o.useState(!1),
      [r, l] = o.useState({}),
      u = o.useRef(null),
      [p, g] = o.useState({
        nickname: localStorage.getItem("nickname") || "",
        money: localStorage.getItem("money") || 0,
        profileImage:
          localStorage.getItem("profileImage") ||
          "assetsimagesgameavatardefault_avatar.png",
      });
    o.useEffect(
      () => (
        window.addEventListener("resize", y),
        () => window.removeEventListener("resize", y)
      ),
      []
    ),
      o.useEffect(() => {
        y();
      }, []);
    const y = () => {
        window.innerHeight > window.innerWidth ? s(!0) : s(!1);
      },
      f = () => {
        d.onBackButtonClick.dispatch(), k.handleLoadingPageVisible(!0);
      },
      P = () => {
        a(!n), ee.handleSounds(n);
      },
      h = () => {
        v.fromTo(
          u.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      b = (I) => {
        l((V) => ({ ...V, ...I }));
      },
      S = (I) => {
        g(I);
      };
    return (
      o.useImperativeHandle(e, () => ({
        resize: b,
        startOpenTween: h,
        update: S,
      })),
      i.jsxs("div", {
        id: "top-bar",
        style: r,
        ref: u,
        children: [
          i.jsx("div", {
            id: "left-side-buttons-container",
            children: i.jsxs("div", {
              id: "left-side-buttons-wrapper",
              children: [
                i.jsx(H, {
                  onClick: f,
                  default: "quit_to_lobby_button",
                  hover: "quit_to_lobby_button_hover",
                  push: "quit_to_lobby_button_push",
                  svg: "true",
                }),
                i.jsx(H, {
                  onClick: () => {},
                  default: "stand_button",
                  hover: "stand_button_hover",
                  push: "stand_button_push",
                  svg: "true",
                }),
              ],
            }),
          }),
          i.jsx("div", {
            id: "right-side-buttons-container",
            children: i.jsxs("div", {
              id: "right-side-buttons-wrapper",
              children: [
                i.jsx(H, {
                  onClick: () => {},
                  default: "emoticons_button",
                  hover: "emoticons_button_hover",
                  push: "emoticons_button_push",
                  svg: "true",
                }),
                i.jsx(H, {
                  onClick: () => {},
                  default: "info_button",
                  hover: "info_button_hover",
                  push: "info_button_push",
                  svg: "true",
                }),
                i.jsx(H, {
                  onClick: P,
                  default: n ? "sound_off_button" : "sound_on_button",
                  hover: n ? "sound_off_button_hover" : "sound_on_button_hover",
                  push: n ? "sound_off_button_push" : "sound_on_button_push",
                  svg: "true",
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
                  src: p.profileImage,
                  alt: "home-button",
                }),
                i.jsxs("div", {
                  id: "player-information-container",
                  children: [
                    i.jsx("h2", { children: p.nickname }),
                    i.jsxs("div", {
                      id: "chips-container",
                      children: [
                        i.jsx("div", { id: "background" }),
                        i.jsx("img", {
                          id: "chips-image",
                          src: "\\TESTLIVE\\assets\\images\\player_chips_icon.png",
                          alt: "home-button",
                        }),
                        i.jsx("h1", {
                          id: "chips",
                          children: p.money.toLocaleString("en"),
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
  yi = o.forwardRef((c, e) => {
    o.useState(0);
    const t = o.useRef(),
      s = o.useRef();
    L.add("channels", t);
    const n = (r) => {
        //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      a = () => {
        v.fromTo(
          s.current,
          { scale: 0, x: "+=1000" },
          { scale: 1, x: "-=1000", ease: "back.out", duration: 0.8 }
        );
      };
    return (
      o.useImperativeHandle(e, () => ({
        update: n,
        contextContainerOpenTween: a,
      })),
      i.jsx("div", {
        id: "middle-bar",
        children: i.jsx("div", { id: "context-container", ref: s }),
      })
    );
  });
class fi extends o.Component {
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
      (this.topBarRef = o.createRef()),
      (this.bottomBarRef = o.createRef()),
      (this.middleBarRef = o.createRef()),
      L.add("bottomBar", this.bottomBarRef),
      L.add("topBar", this.topBarRef);
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
      l = { width: e, height: t, left: s, top: n, transform: a, display: r };
    return i.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: l,
      children: [
        i.jsx(pi, { ref: this.topBarRef }),
        i.jsx(gi, { ref: this.bottomBarRef }),
        i.jsx(yi, { ref: this.middleBarRef }),
      ],
    });
  }
}
const mi = R.forwardRef((c, e) => i.jsx(fi, { ref: e, ...c }));
function bi() {
  const c = o.useRef(),
    e = o.useRef(null),
    t = o.useRef(null);
  return (
    o.useEffect(() => {
      const s = c.current,
        n = e.current,
        a = t.current;
      qs(s),
        M.create(n),
        k.create(a),
        Y.resizeScreen(n, s, a),
        window.addEventListener("resize", () => Y.resizeScreen(n, s, a));
    }, []),
    i.jsxs("div", {
      id: "app",
      children: [
        i.jsx(ht, { ref: c }),
        i.jsx(mi, { ref: e }),
        i.jsx(ri, { ref: t }),
      ],
    })
  );
}
et.createRoot(document.getElementById("root")).render(i.jsx(bi, {}));
