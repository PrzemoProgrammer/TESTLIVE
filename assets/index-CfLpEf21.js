var Pe = Object.defineProperty;
var we = (r, e, t) =>
  e in r
    ? Pe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var b = (r, e, t) => (we(r, typeof e != "symbol" ? e + "" : e, t), t);
import { r as d, j as n, R as k } from "./react-CWbZ82Fp.js";
import { c as Te } from "./react-dom-1bg23oq7.js";
import {
  b as Se,
  c as ee,
  T as Ae,
  S as ke,
  G as Be,
  e as re,
} from "./@pixi-D_V7FC-8.js";
import "./pixi.js-3a2kr_JA.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { l as ve } from "./socket.io-client-DFi9RC7o.js";
import { d as P } from "./mini-signals-DMh6wOcT.js";
import { g as w } from "./gsap-ZORhgBxb.js";
import { h as _e } from "./howler-BozPm2lL.js";
import { Q as he, B as X } from "./react-toastify-DdhT_1Lx.js";
import { a as ue } from "./js-cookie-Cz0CWeBA.js";
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
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = t(i);
    fetch(i.href, a);
  }
})();
const Re = {
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundAlpha: 0,
    parent: "game-container",
  },
  Ie = (r) => new Se({ ...Re, parent: r }),
  Le = d.forwardRef(function ({ currentActiveScene: e }, t) {
    const s = d.useRef(),
      i = d.useRef(null);
    return (
      d.useLayoutEffect(() => {
        s.current === void 0 &&
          ((s.current = Ie("game-container")),
          (globalThis.__PHASER_GAME__ = s.current),
          t !== null &&
            ((t.current = s.current), i.current.appendChild(s.current.view)));
      }, [t]),
      n.jsx("div", { id: "game-container", ref: i })
    );
  });
class te {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
b(te, "_app", null);
class W {
  static get app() {
    return te.app;
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
class M {
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
b(M, "_scenes", new Map());
class S {
  static addScene(e) {
    e.forEach((t) => {
      M.addScene(t), W.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = M.scenes,
      t = Array.from(e.keys()),
      s = t.length > 0 ? t[0] : void 0;
    s && this.startScene(s);
  }
  static startScene(e, t) {
    const s = this.getScene(e);
    W.addChild(s), s.init(t);
  }
  static removeScene(e) {
    const t = this.getScene(e);
    t == null || t.removeListeners(), W.removeChild(t);
  }
  static getScene(e) {
    return M.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), M.deleteScene(e);
  }
  static setVisible(e, t) {
    const s = this.getScene(e);
    s.visible = t;
  }
}
let je = "https://backendpoker.blockspingaming.com",
  Ve = "https://backendpoker.blockspingaming.com"; //! ///////////////////
class c {}
b(c, "onPlayerJoinRoom", new P.MiniSignal()),
  b(c, "onGetPlayers", new P.MiniSignal()),
  b(c, "onAllPlayerJoined", new P.MiniSignal()),
  b(c, "onChangePlayerTurn", new P.MiniSignal()),
  b(c, "onInitNextRound", new P.MiniSignal()),
  b(c, "onPlayerLeave", new P.MiniSignal()),
  b(c, "onUpdatePlayerTurnAction", new P.MiniSignal()),
  b(c, "onGameResult", new P.MiniSignal()),
  b(c, "onRoomsState", new P.MiniSignal()),
  b(c, "onGameState", new P.MiniSignal()),
  b(c, "onResetGame", new P.MiniSignal()),
  b(c, "onAnnouncement", new P.MiniSignal()),
  b(c, "onBackButtonClick", new P.MiniSignal()),
  b(c, "playerTurnAction", new P.MiniSignal()),
  b(c, "getRoomData", new P.MiniSignal()),
  b(c, "getRoomsState", new P.MiniSignal());
class Me {
  constructor() {
    (this.client = null), (this.myId = ""), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await ve(`${Ve}`).on("connect", () => {
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
      c.onRoomsState.dispatch(e);
    }),
      this.client.on("roomState", (e) => {
        c.onGameState.dispatch(e);
      }),
      this.client.on("getPlayers", (e) => {
        c.onGetPlayers.dispatch(e);
      }),
      this.client.on("playerJoinRoom", (e) => {
        c.onPlayerJoinRoom.dispatch(e);
      }),
      this.client.on("initPreflopRound", (e) => {
        c.onAllPlayerJoined.dispatch(e);
      }),
      this.client.on("updateGameTurn", (e) => {
        c.onChangePlayerTurn.dispatch(e);
      }),
      this.client.on("initNextRound", (e) => {
        c.onInitNextRound.dispatch(e);
      }),
      this.client.on("playerLeaveGame", (e) => {
        c.onPlayerLeave.dispatch(e);
      }),
      this.client.on("updatePlayerTurnAction", (e) => {
        c.onUpdatePlayerTurnAction.dispatch(e);
      }),
      this.client.on("gameResult", (e) => {
        c.onGameResult.dispatch(e);
      }),
      this.client.on("resetGame", (e) => {
        c.onResetGame.dispatch(e);
      }),
      this.client.on("announcement", (e) => {
        c.onAnnouncement.dispatch(e);
      });
  }
  playerTurnAction(e) {
    this.client.emit("playerTurnAction", e);
  }
  playerGetRoomData(e) {
    this.client.emit("playerJoinRoom", e);
  }
  playerLeaveRoom() {
    this.client.emit("leaveRoom");
  }
  getRoomsState() {
    this.client.emit("getRoomsState");
  }
  bindSignals() {
    c.playerTurnAction.add((e) => this.playerTurnAction(e)),
      c.getRoomData.add((e) => this.playerGetRoomData(e)),
      c.onBackButtonClick.add(() => this.playerLeaveRoom()),
      c.getRoomsState.add(() => this.getRoomsState());
  }
}
const v = new Me();
class se extends ee {
  constructor(e) {
    super(), (this.sceneKey = e), (this.isActive = !1);
  }
  init(e) {
    this.isActive = !0;
  }
}
class ie extends Ae {
  constructor(e) {
    const {
      message: t,
      x: s = 0,
      y: i = 0,
      anchorX: a = 0,
      anchorY: o = 0,
      visible: h = !0,
      isStatic: l = !1,
      scaleX: g = 1,
      scaleY: y = 1,
      textConfig: {
        fontFamily: m = "Arial",
        fontSize: u = 55,
        fill: C = 0,
      } = {},
    } = e;
    super(t, { fontFamily: m, fontSize: u, fill: C }),
      this.anchor.set(a, o),
      this.position.set(s, i),
      (this.visible = h),
      (this.scale.x = g),
      (this.scale.y = y),
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
class _ extends ee {
  constructor() {
    super();
  }
}
class $ {
  static addImage(e, t) {
    this.images.set(e, t);
  }
  static getImage(e) {
    return this.images.get(e);
  }
}
b($, "images", new Map());
class F {
  static addImage(e, t) {
    $.addImage(e, t);
  }
  static getImage(e) {
    return $.getImage(e);
  }
}
class T extends ke {
  constructor(e) {
    const {
        textureKey: t,
        x: s = 0,
        y: i = 0,
        anchorX: a = 0.5,
        anchorY: o = 0.5,
        visible: h = !0,
        scaleX: l = 1,
        scaleY: g = 1,
        angle: y = 0,
        tint: m = 16777215,
        isStatic: u = !0,
        interactive: C = !1,
        eventMode: f = "none",
      } = e,
      V = F.getImage(t);
    super(V),
      this.anchor.set(a, o),
      this.position.set(s, i),
      (this.scale.x = l),
      (this.scale.y = g),
      (this.angle = y),
      (this.tint = m),
      (this.visible = h),
      (this.filters = null),
      (this.eventMode = f),
      (this.interactiveChildren = C),
      (this.cacheAsBitmap = u);
  }
  changeTexture(e) {
    const t = F.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  setVisible(e) {
    this.visible = e;
  }
}
function R(r) {
  return parseInt(r).toLocaleString("en", { useGrouping: !0 });
}
class ge extends _ {
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
      t = new ie(e);
    return this.addChild(t), t;
  }
  setVisible(e) {
    this.visible = e;
  }
  updateText(e) {
    this.text.updateMessage(R(e));
  }
  reset() {
    (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visible = !1),
      this.text.updateMessage(0);
  }
}
const Oe = 1e3,
  J = { deal: "deal_card", slide: "slide_card", turn: "turn_card" },
  Ge = {
    nextAnimDelay: 200,
    nextCardDeal: 100,
    cardScale: { owner: 1, other: 1 },
  },
  Ee = { duration: 0.1, ease: "none", yoyo: !0, repeat: 1 },
  De = { duration: 0.5, ease: "circ.out", angle: 360, scaleOnStart: 0.5 },
  Fe = { duration: 0.3, ease: "none" },
  Ne = { duration: 0.3, ease: "none", scale: 1.5 },
  oe = { y: 520, duration: 0.2, ease: "none" };
class pe extends T {
  constructor(e) {
    super(e), (this.config = e), (this.isTurned = !1), (this.isSlideDown = !1);
  }
  async turnOverAnim(e) {
    const { duration: t, ease: s, yoyo: i, repeat: a } = Ee;
    await w.to(this, {
      width: 0,
      duration: t,
      ease: s,
      yoyo: i,
      repeat: a,
      onRepeat: () => {
        this.changeTexture(e), (this.isTurned = !0);
      },
    });
  }
  dealAnim(e, t, s) {
    const { duration: i, ease: a, scaleOnStart: o, angle: h } = De,
      l = { scale: this.scale.x * o, angle: this.angle, x: this.x, y: this.y };
    (this.visible = !0),
      w.to(l, {
        scale: s,
        angle: this.angle + h,
        x: e,
        y: t,
        duration: i,
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
    const { ease: e, duration: t, y: s } = oe;
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
    const { ease: t, duration: s } = Fe;
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
    const { y: e } = oe;
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
class Z {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
}
b(Z, "audio", new Map());
class j {
  static addAudio(e, t) {
    const s = new _e.Howl({ src: [t] });
    Z.addAudio(e, s);
  }
  static getAudio(e) {
    return Z.getAudio(e);
  }
  static playAudio(e) {
    const t = this.getAudio(e);
    t == null || t.play();
  }
}
class He extends _ {
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
        i = this.createCard(s);
      i && this.cards.push(i);
    }
  }
  async layOutFirstCards() {
    const e = this.cardsSpace,
      t = this.cards[0].x,
      s = [];
    for (let i = 1; i < this.cards.length; i++) {
      const a = this.getCard(i),
        o = t + i * e,
        h = a.moveXAnim(o);
      s.push(h);
    }
    await Promise.all(s);
  }
  async newCardsTurnOverAnim(e, t) {
    const s = e.length,
      i = t + s;
    for (let a = t; a < i; a++) {
      const o = e[a - t].name;
      await this.turnOverCardAnim(a, o);
    }
  }
  async newCardsSlideFromTopAnim(e, t) {
    const s = t + e;
    for (let i = t; i < s; i++) await this.slideCardFormTopAnim(i);
  }
  async slideCardFormTopAnim(e) {
    const t = J.slide;
    j.playAudio(t), await this.getCard(e).slideFromTopAnim();
  }
  async turnOverCardAnim(e, t) {
    const s = J.turn;
    j.playAudio(s), await this.getCard(e).turnOverAnim(t);
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
        i = e[t].name;
      s.turnOver(i), s.putOnTable(), (s.visible = !0);
    }
  }
  createCard(e) {
    const t = e,
      s = new pe(t);
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
function q() {
  return window.innerWidth / window.innerHeight <= 1;
}
const Ue = {
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
      y: q() ? -528 : -400,
      isStatic: !1,
      scaleX: 0.9,
      scaleY: 0.9,
    },
  },
};
class We extends ee {
  constructor() {
    super(),
      (this.config = Ue),
      (this.table = this.createTable()),
      (this.cards = this.createCards()),
      (this.totalBets = this.createTotalBets());
  }
  createTable() {
    const e = { textureKey: "table", x: 987, y: 530, isStatic: !0 },
      t = new T(e);
    return this.addChild(t), t;
  }
  createTotalBets() {
    const e = this.config.bet,
      t = new ge(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = this.config.card,
      t = new He(e);
    return this.addChild(t), t;
  }
}
class ze {
  constructor() {
    this.table = null;
  }
  createTable() {
    return (this.table = new We()), this.table;
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
const Ye = { duration: 1, ease: "circ.out" },
  H = class H {
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
      const { ease: s, duration: i } = Ye,
        a = this.tableAdapter.getTotalBetsText;
      await w.to(a, { y: t, x: e, duration: i, ease: s });
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
(H.tableAdapter = new ze()), (H.createTableTween = null);
let A = H;
const ne = class ne {
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
ne.players = {};
let L = ne;
const Ke = 2,
  ye = ["fold", "check", "call", "raise", "bet"],
  Xe = {
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
  };
class p {
  static addPlayer(e) {
    L.addPlayer(e);
  }
  static getPlayers() {
    return L.getPlayers;
  }
  static getPlayersCount() {
    const e = this.getPlayers();
    return Object.keys(e).length;
  }
  static getPlayer(e) {
    return L.getPlayer(e);
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
        cardScale: { owner: i, other: a },
      } = Ge,
      o = (h) => new Promise((l) => setTimeout(l, h));
    for (let h = 0; h < Ke; h++) {
      await o(s);
      for (const l in e)
        if (e.hasOwnProperty(l)) {
          await o(t);
          const g = v.isMyId(l) ? i : a;
          e[l].startDealCardsAnim(h, g);
        }
    }
  }
  static turnOverPlayersCardsAnim(e, t) {
    const s = this.getPlayers(),
      i = v.getMyId,
      a = (o) => {
        const h = e[o],
          l = s[o];
        l && !l.isInLobby && l.turnOverCards(h);
      };
    if (t) a(i);
    else for (const o in s) v.isMyId(o) || a(o);
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
        i = s.getCards();
      if ((s.setCardsVisible(!0), s.isInLobby)) return;
      i.forEach((a) => {
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
    t && t.destroy(), L.deletePlayer(e);
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
    p.getPlayer(e).startShowWInImageAnim();
  }
  static setPlayerActionSignVisible(e, t) {
    const i = this.getPlayers()[e];
    i && i.setPlayerActionSignVisible(t);
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
const U = class U {
  static convertConfigToArray() {
    return Object.values(Xe);
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
U.positionsConfig = U.convertConfigToArray();
let O = U;
const $e = ["check_sign", "call_sign", "raise_sign"],
  z = {
    playerTurnStart: "player_turn_start",
    playerTurnEnd: "player_turn_end",
    playerLeave: "player_leave",
  },
  Je = {
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
    nickname: {
      message: "Guest",
      x: -60,
      y: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      anchorX: 0,
      anchorY: 0.5,
      visible: !0,
      textConfig: { fontFamily: "Arial", fontSize: 14, fill: 12961479 },
    },
    moneyContainer: {
      x: -38,
      y: 26,
      money: {
        message: 0,
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        anchorX: 0,
        anchorY: 0.5,
        visible: !0,
        textConfig: { fontFamily: "Arial", fontSize: 14, fill: 16777215 },
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
class Ze extends _ {
  constructor() {
    super(),
      (this.dealAnimStartPositions = []),
      (this.dealAnimEndPositions = []),
      (this.cards = []);
  }
  createCard(e) {
    const t = e,
      s = new pe(t);
    return s !== null && this.addChild(s), s;
  }
  dealAnim(e, t, s, i) {
    const a = J.deal;
    j.playAudio(a), e.dealAnim(t, s, i);
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
      i = this.dealAnimEndPositions[e].y,
      a = this.cards[e];
    a.setVisible(!0),
      this.resetCardsAnimPositions(e),
      this.dealAnim(a, s, i, t);
  }
  getCards() {
    return this.cards;
  }
  turnOverCardsAnim(e) {
    for (let t = 0; t < this.cards.length; t++) {
      const s = this.cards[t];
      let i = 0;
      const a = e[t].name;
      s.turnOverAnim(a),
        t === 0 && ((i = 1), s.moveDownAnim()),
        t === 1 && (i = -1),
        s.spreadCardAnim(i);
    }
  }
  setAnimStartPosition(e) {
    this.dealAnimStartPositions = e;
  }
  setAnimEndPosition(e) {
    this.dealAnimEndPositions = e;
  }
  async startScaleUpCardsAnim() {
    const { duration: e, ease: t, scale: s } = Ne,
      i = { scale: this.scale.x };
    await w.to(i, {
      scale: s,
      duration: e,
      ease: t,
      onUpdate: () => {
        this.setScale(i.scale);
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
class qe extends _ {
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
    const { x: t, y: s, height: i } = this.config.mask,
      a = new Be();
    return (
      a.beginFill(16711680),
      a.drawRect(t, s, e, i),
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
class Qe extends _ {
  constructor(e) {
    super(),
      (this.config = e),
      (this.fps = this.config.fps),
      (this.countdownInterval = null),
      (this.progressBar = this.createProgressBar());
  }
  createProgressBar() {
    const e = this.config.progressBar,
      t = new qe(e);
    return t && this.addChild(t), t;
  }
  startCountdown(e, t) {
    const s = this.calculatePlayerTurnTime(e, t);
    this.setVisible(!0);
    const a = this.progressBar.getBarMaskWidth / (s * this.fps);
    this.countdownInterval = setInterval(() => {
      const o = this.progressBar.getBarMaskWidth;
      if (o > 1) {
        let h = o - a;
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
class et extends _ {
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
      t = new ie(e);
    return t.updateMessage(R(e.message)), this.addChild(t), t;
  }
  createMoneyIcon() {
    const e = this.config.moneyIcon,
      t = new T(e.image);
    return this.addChild(t), t;
  }
  updateMoneyText(e) {
    this.money.updateMessage(R(e)), this.updateIconPosition();
  }
  updateIconPosition() {
    this.moneyIcon.x = this.money.x - this.config.moneyIcon.offsetX;
  }
}
class tt extends _ {
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
      (this.nickname = this.createNickname()),
      (this.money = this.createMoney()),
      (this.dealerSign = this.createDealerSign()),
      (this.bet = this.createBet()),
      (this.timer = this.createTimer()),
      (this.actionSign = this.createActionSign()),
      (this.winImage = this.createWinSprite()),
      (this.cards = this.createCards()),
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
  createNickname() {
    const e = this.config.nickname,
      t = new ie(e);
    return this.addChild(t), t;
  }
  createMoney() {
    const e = this.config,
      t = new et(e.moneyContainer);
    return this.addChild(t), t;
  }
  createBet() {
    const e = this.config.bet,
      t = new ge(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = new Ze();
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
      t = new Qe(e);
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
class st {
  constructor(e) {
    (this.playerComponents = new tt(e)),
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
    this.playerComponents.bet.text.updateMessage(R(e));
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
class it {
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
const x = new it();
class nt extends se {
  constructor() {
    super("Game");
  }
  init(e) {
    (this.isActive = !0),
      this.createTable(),
      (this.playersContainer = this.createPlayersContainer()),
      this.addPlayersToGame(e);
  }
  createTable() {
    A.initTable(this);
  }
  createPlayersContainer() {
    const e = new _();
    return this.addChild(e), e;
  }
  addPlayersToGame(e) {
    console.log(e), this.setupGamePositionsConfig(e);
    for (const t in e) {
      const s = e[t];
      this.createPlayerAndAddToGame(s);
    }
    x.handleLoadingPageVisible(!1);
  }
  createPlayerAndAddToGame(e) {
    const t = this.createPlayer(e);
    t !== null && this.playersContainer.addChild(t.getPlayerComponents);
  }
  async onAllPlayerJoined(e) {
    const t = p.getPlayers(),
      {
        drawCards: s,
        playersBets: i,
        playersMoney: a,
        playersGamePositions: o,
      } = e.players;
    for (const h in t) {
      const l = t[h];
      l.setAlpha(1),
        (l.isInLobby = !1),
        l.setCardsVisible(!0),
        this.updatePlayerMoney(h, t, a),
        this.updatePlayerBet(h, t, i),
        this.updatePlayerPosition(h, t, o);
    }
    await p.playDealCardsForPlayersAnim(),
      await new Promise((h) => {
        setTimeout(() => {
          p.turnOverPlayersCardsAnim(s, !0), h();
        }, Oe);
      }),
      this.updatePlayerTurn(e.game.playerTurnData);
  }
  updatePlayerMoney(e, t, s) {
    const i = s[e].money;
    p.updatePlayerMoneyText(e, t, i);
  }
  updatePlayerBet(e, t, s) {
    const i = s[e].bet;
    s[e] !== void 0 && p.updatePlayerBet(e, t, i);
  }
  updatePlayerPosition(e, t, s) {
    const i = s[e].position;
    p.updatePlayerPosition(e, t, i), p.checkDisplayDealerSign(e, t, i);
  }
  updatePlayerTurn(e) {
    const { playerIdGameTurn: t, serverTime: s, turnRespondTime: i } = e,
      a = z.playerTurnStart;
    j.playAudio(a),
      p.turnOffActiveRoundEffects(),
      p.setPlayerActionSignVisible(t, !1);
    const o = p.getPlayer(t);
    o && (o.startTimer(s, i), o.handleBackgroundLightVisible(!0));
  }
  createPlayer(e) {
    const {
        id: t,
        money: s,
        nick: i,
        sit: a,
        bet: o,
        position: h,
        inLobby: l,
      } = e,
      {
        sitPosition: g,
        betPosition: y,
        cardsPositions: m,
      } = O.getPositionsConfig(a),
      u = { ...Je };
    (u.x = g.x),
      (u.y = g.y),
      (u.bet.x = y.x),
      (u.bet.y = y.y),
      (u.id = t),
      (u.sit = a),
      (u.inLobby = l),
      (u.bet.text.message = o),
      (u.position = h),
      (u.nickname.message = i),
      (u.moneyContainer.money.message = s),
      (u.cardsAnimPositions.animStartPosition = m.dealAnimStartPositions),
      (u.cardsAnimPositions.animEndPosition = m.dealAnimEndPositions);
    for (let f = 0; f < m.dealAnimEndPositions.length; f++)
      (u.cards[f].x = m.dealAnimEndPositions[f].x),
        (u.cards[f].y = m.dealAnimEndPositions[f].y);
    const C = new st(u);
    return p.addPlayer(C), C;
  }
  initGameState(e) {
    const {
        tableCards: t,
        tableBets: s,
        playersBets: i,
        playerTurnID: a,
        serverTime: o,
        turnRespondTime: h,
      } = e,
      l = p.getPlayers();
    A.layOutCards(t, !1),
      A.updateTotalBetsTextAndMakeVisible(s),
      p.setPlayersCardsVisible();
    const g = p.getPlayer(a);
    g.startTimer(o, h), g.handleBackgroundLightVisible(!0);
    for (const y in i) {
      const m = i[y];
      p.updatePlayerBet(y, l, m);
    }
  }
  async initNextRound(e) {
    const { tableCards: t, tableBets: s } = e.game;
    await A.layOutCards(t),
      A.updateTotalBetsTextAndMakeVisible(s),
      p.resetPlayersBets(),
      p.setPlayersSignsVisible(!1);
  }
  deletePlayer(e) {
    const t = z.playerLeave;
    j.playAudio(t), p.deletePlayer(e);
  }
  updatePlayerTurnAction(e) {
    const [t, s, i] = $e,
      [a, o, h, l, g] = ye,
      { playerId: y, type: m, bet: u, money: C } = e,
      f = p.getPlayer(y),
      V = z.playerTurnEnd;
    if ((j.playAudio(V), m === o)) {
      const I = t;
      f.setActionSignAndTextureVisible(I, !0);
    } else if (m === g) this.updatePlayerMoneyAndBetText(y, u, C);
    else if (m === h) {
      const I = s;
      f.setActionSignAndTextureVisible(I, !0),
        this.updatePlayerMoneyAndBetText(y, u, C);
    } else
      m === a && ((f.isInLobby = !0), f.setAlpha(0.5), f.setCardsVisible(!1));
  }
  updatePlayerMoneyAndBetText(e, t, s) {
    const i = p.getPlayers();
    p.updatePlayerBet(e, i, t),
      p.updatePlayerMoneyText(e, i, s),
      v.isMyId(e) && this.updateUiMoneyAndBetText(t, s);
  }
  updateUiMoneyAndBetText(e, t) {}
  setupGamePositionsConfig(e) {
    const t = v.getMyId,
      s = e[t].sit;
    O.setupConfigPositions(s);
  }
  async initGameResult(e) {
    const {
        players: { playersCards: t },
        game: { winnerPlayerId: s, winnerPlayerMoney: i, tableBets: a },
      } = e,
      o = p.getPlayer(s),
      h = p.getPlayers(),
      { x: l, y: g } = o.getPosition;
    A.updateTotalBetsTextAndMakeVisible(a),
      p.setPlayersSignsVisible(!1),
      o.startShowWInImageAnim(),
      p.updatePlayerMoneyText(s, h, i),
      v.isMyId(s) && this.updateUiMoneyAndBetText(0, i),
      p.turnOverPlayersCardsAnim(t, !1),
      A.moveBetsToWinnerAnim(l, g),
      p.turnOffActiveRoundEffects(),
      p.resetPlayersBets();
  }
  resetGame() {
    p.turnOffActiveRoundEffects(), O.reset(), p.resetPlayersData(), A.reset();
  }
  refreshGameData(e) {
    p.deletePlayers(), this.addPlayersToGame(e), A.startCreateTableTween();
  }
}
const at = new nt();
class G {
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
b(G, "_refs", new Map());
class rt {
  constructor() {
    this.UI = null;
  }
  create(e) {
    this.UI = e;
  }
  handleVisible(e) {
    this.UI.handleVisible(e);
  }
  update(e) {
    G.get("middleBar");
  }
  changeChannel(e) {
    G.get("channels").changeChannel(e);
  }
}
const D = new rt(),
  ae = class ae {
    static startGame(e) {
      const t = S.getScene("Game"),
        s = S.getScene("Background");
      if (!(t != null && t.isActive)) {
        S.startScene("Game", e),
          (this.game = S.getScene("Game")),
          this.bindSignals(),
          s.startGameBackground();
        return;
      }
      S.setVisible("Game", !0),
        this.game.refreshGameData(e),
        s.startGameBackground();
    }
    static afterLoadGameCallback() {
      x.handleLoadingGameVisible(!1),
        x.handleLoginPageVisible(!0),
        this.startBackground();
    }
    static startBackground() {
      S.startScene("Background");
    }
    static resetAndHide() {
      const e = S.getScene("Game"),
        t = S.getScene("Background");
      e.resetGame(),
        S.setVisible("Game", !1),
        c.onBackButtonClick.dispatch(),
        t.startLobbyBackground();
    }
    static bindSignals() {
      c.onPlayerJoinRoom.add((e) => this.addPlayerToGame(e)),
        c.onAllPlayerJoined.add((e) => this.onAllPlayerJoined(e)),
        c.onChangePlayerTurn.add((e) => this.changePlayerTurn(e)),
        c.onGameState.add((e) => this.initGameState(e)),
        c.onInitNextRound.add((e) => this.initNextRound(e)),
        c.onPlayerLeave.add((e) => this.deletePlayerFromGame(e)),
        c.onUpdatePlayerTurnAction.add((e) => this.updatePlayerTurnAction(e)),
        c.onGameResult.add((e) => this.initGameResult(e)),
        c.onResetGame.add((e) => this.resetGame(e));
    }
    static addPlayerToGame(e) {
      console.log(e), !v.isMyId(e.id) && this.game.createPlayerAndAddToGame(e);
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
      this.game.deletePlayer(e);
    }
    static updatePlayerTurnAction(e) {
      this.game.updatePlayerTurnAction(e), D.update(e);
    }
    static initGameResult(e) {
      this.game.initGameResult(e);
    }
    static initGameState(e) {
      this.game.initGameState(e);
    }
    static resetGame(e) {
      this.game.resetGame();
    }
    static removeListeners() {
      c.onPlayerJoinRoom.detachAll(),
        c.onGameState.detachAll(),
        c.onAllPlayerJoined.detachAll(),
        c.onInitNextRound.detachAll(),
        c.onPlayerLeave.detachAll(),
        c.onGameResult.detachAll(),
        c.onResetGame.detachAll(),
        c.onChangePlayerTurn.detachAll(),
        c.onUpdatePlayerTurnAction.detachAll();
    }
  };
ae.game = null;
let E = ae;
const ot = { path: "game/backgrounds", key: "background" },
  ct = { path: "game/backgrounds", key: "bet_background" },
  lt = { path: "game/avatar", key: "default_avatar" },
  dt = { path: "game/avatar", key: "avatar_background" },
  ht = { path: "game/chips", key: "bet" },
  ut = { path: "game/croupier", key: "croupier" },
  gt = { path: "game/signs", key: "check_sign" },
  pt = { path: "game/signs", key: "dealer_sign" },
  yt = { path: "game/signs", key: "call_sign" },
  mt = { path: "game/signs", key: "winner_sign" },
  ft = { path: "game/tables", key: "table" },
  bt = { path: "game/timer", key: "timer_bar_background" },
  Ct = { path: "game/timer", key: "timer_bar_container" },
  xt = { path: "game/timer", key: "timer_bar" },
  Pt = {
    gameBackground: ot,
    betBackground: ct,
    defaultPlayerAvatar: lt,
    avatarBackground: dt,
    betChip: ht,
    croupier: ut,
    playerCheckSign: gt,
    playerDealerSign: pt,
    playerCallSign: yt,
    playerWinnerSign: mt,
    gameTable: ft,
    timerBackground: bt,
    timerContainer: Ct,
    timerBar: xt,
  },
  wt = { path: "interface/buttons", key: "bet_button_push" },
  Tt = { path: "interface/buttons", key: "bet_button" },
  St = { path: "interface/buttons", key: "betting_hide_button" },
  At = { path: "interface/buttons", key: "betting_show_button" },
  kt = { path: "interface/buttons", key: "call_button_push" },
  Bt = { path: "interface/buttons", key: "call_button" },
  vt = { path: "interface/buttons", key: "check_button_push" },
  _t = { path: "interface/buttons", key: "check_button" },
  Rt = { path: "interface/buttons", key: "fold_button_push" },
  It = { path: "interface/buttons", key: "fold_button" },
  Lt = { path: "interface/buttons", key: "raise_button_push" },
  jt = { path: "interface/buttons", key: "raise_button" },
  Vt = { path: "interface", key: "batting_arrow" },
  Mt = { path: "interface", key: "betting_background" },
  Ot = { path: "interface", key: "betting_text_field" },
  Gt = { path: "interface", key: "bottom_bar" },
  Et = {
    betButtonPush: wt,
    betButton: Tt,
    bettingHideButton: St,
    bettingShowButton: At,
    callButtonPush: kt,
    callButton: Bt,
    checkButtonPush: vt,
    checkButton: _t,
    foldButtonPush: Rt,
    foldButton: It,
    raiseButtonPush: Lt,
    raiseButton: jt,
    battingArrow: Vt,
    bettingBackground: Mt,
    bettingTextField: Ot,
    bottomBar: Gt,
  },
  Dt = { path: "loginScreen/background", key: "login_screen_background" },
  Ft = { path: "loginScreen/buttons", key: "login_button" },
  Nt = { path: "loginScreen/buttons", key: "login_button_push" },
  Ht = { loginScreenBackground: Dt, loginButton: Ft, loginButtonPush: Nt },
  Ut = { path: "registerScreen/background", key: "register_screen_background" },
  Wt = { path: "registerScreen/buttons", key: "register_button" },
  zt = { path: "registerScreen/buttons", key: "register_button_push" },
  Yt = { path: "registerScreen/buttons", key: "back_button" },
  Kt = { path: "registerScreen/buttons", key: "back_button_push" },
  Xt = {
    registerScreenBackground: Ut,
    registerButton: Wt,
    registerButtonPush: zt,
    backButton: Yt,
    backButtonPush: Kt,
  },
  $t = [Pt, Et, Ht, Xt],
  Jt = {
    path: "game/cards",
    number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    color: ["d", "c", "h", "s"],
  },
  Zt = { key: "card_hidden" },
  ce = { cards: Jt, hiddenCard: Zt },
  qt = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class Qt extends se {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadImages(),
      await this.loadAllImages(),
      await this.loadCardImages(),
      E.afterLoadGameCallback();
  }
  async loadImages() {
    const e = [
      "room_icon",
      "game_background",
      "player_background_light",
      "background_first_layer",
      "player_chips_icon",
    ];
    let t = e.length;
    for (let s = 0; s < t; s++) {
      let i = e[s],
        a = await re.load(`assets/images/${i}.png`);
      F.addImage(i, a);
    }
  }
  loadAllImages() {
    $t.forEach((e) => {
      Object.entries(e).forEach(([t, s]) => {
        this.loadImage(s);
      });
    });
  }
  async loadCardImages() {
    const { path: e, number: t, color: s } = ce.cards,
      i = ce.hiddenCard.key,
      a = t,
      o = s;
    for (let l = 0; l < o.length; l++) {
      const g = o[l];
      for (let y = 0; y < a.length; y++) {
        const u = g + a[y];
        await this.loadImage({ path: e, key: u });
      }
    }
    const h = i;
    await this.loadImage({ path: e, key: h });
  }
  async loadImage({ path: e, key: t }) {
    const { _path: s, extension: i } = qt.images;
    let a = s + e + "/" + t + i,
      o = await re.load(a);
    F.addImage(t, o);
  }
  handleStartNextScene() {}
}
const es = new Qt();
class ts extends se {
  constructor() {
    super("Background");
  }
  init() {
    (this.isActive = !0),
      (this.sprite = this.createSprite()),
      (this.firstLayer = this.createFirstLayer()),
      (this.firstLayerCreateTween = null),
      (this.firstLayerOutTween = null),
      this.startFirstLayerCreateTween();
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
  startLobbyBackground() {
    this.startFirstLayerCreateTween();
  }
  startGameBackground() {
    this.startFirstLayerOutTween();
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
  resetTweens() {
    (this.firstLayerCreateTween = null), (this.firstLayerOutTween = null);
  }
}
const ss = new ts(),
  is = (r) => {
    te.add(r),
      S.addScene([es, ss, at]),
      S.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = r);
  },
  Y = 1920,
  K = 1080,
  le = 1080,
  de = 1920;
class Q {
  static resizeScreen(e, t) {
    this._isPortraitOrientation = q();
    const s = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, s), this.resizeGame(t, s);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / Y, window.innerHeight / K);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / de, window.innerWidth / le);
  }
  static get isPortraitOrientation() {
    return this._isPortraitOrientation;
  }
  static resizeGame(e, t) {
    const s = (window.innerWidth - Y * t) / 2,
      i = (window.innerHeight - K * t) / 2;
    e.stage.position.set(s, i), e.stage.scale.set(t);
  }
  static resizeUI(e, t) {
    const s = this._isPortraitOrientation ? le : Y,
      i = this._isPortraitOrientation ? de : K,
      a = (window.innerHeight - i * t) / 2,
      o = (window.innerWidth - s * t) / 2;
    e.resize({
      width: `${s}px`,
      height: `${i}px`,
      left: `${o}px`,
      top: `${a}px`,
      transform: `scale(${t})`,
    }),
      this.resizeUIElements(e, a, t);
  }
  static resizeUIElements(e, t, s) {
    const i = window.innerHeight / s;
    let a = 0,
      o = 0;
    this._isPortraitOrientation, (a = window.innerHeight * 0.03), (o = 50);
    const h = i - e.bottomBarHeight - t / s - a,
      l = -(t / s) + o;
    e.resizeBottomBar({ top: `${h}px` }), e.resizeTopBar({ top: `${l}px` });
  }
}
b(Q, "_isPortraitOrientation", q());
const ns = k.forwardRef((r, e) => {
    const t = d.useRef(null);
    return n.jsx("div", {
      id: "loading-screen",
      ref: t,
      children: n.jsx("img", {
        id: "loading-icon",
        src: "\\TESTLIVE\\assets\\images\\loading_game_anim.svg",
        alt: "Loading_icon",
      }),
    });
  }),
  as = { "Content-Type": "application/json", Accept: "application/json" },
  rs = (r, e) =>
    fetch(`${je}/${e}`, {
      method: "post",
      headers: as,
      body: JSON.stringify(r),
    }),
  os = (r) => rs(r, "authentication"),
  cs = k.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      i = d.useRef(null),
      a = () => {
        t || (s(!0), x.handleLoadingPageVisible(!0), o());
      },
      o = async () => {
        const { success: l, jwt: g } = await h();
        l
          ? (await v.connectWithServer(),
            X.success("Success !"),
            ue.set("authToken", g, { expires: 1 }),
            v.setupServerListeners(),
            x.handleLobbyPageVisible(!0),
            x.handleLoadingPageVisible(!1),
            x.handleLoginPageVisible(!1),
            s(!1))
          : (x.handleLoadingPageVisible(!1),
            X.error("Invalid login or password !"),
            s(!1));
      },
      h = async () => {
        const l = i.current.querySelector("#login").value,
          g = i.current.querySelector("#password").value,
          y = await (await os({ username: l, password: g })).json(),
          { success: m, jwt: u } = y;
        return { success: m, jwt: u };
      };
    return n.jsxs("div", {
      id: "login-container",
      children: [
        n.jsxs("div", {
          id: "login-form",
          ref: i,
          children: [
            n.jsx("input", { type: "text", id: "login", placeholder: "Login" }),
            n.jsx("input", {
              type: "password",
              id: "password",
              placeholder: "Password",
            }),
            n.jsx("button", { onClick: a, children: "Login" }),
          ],
        }),
        n.jsx(he, {}),
      ],
    });
  }),
  ls = k.forwardRef((r, e) => {
    const t = d.useRef(null);
    return n.jsxs("div", {
      id: "loading-game",
      ref: t,
      children: [
        n.jsx("img", {
          id: "logo",
          src: "https://blockspingaming.com/img/blockspin-logo.7e3e1a95.webp",
          alt: "Loading_logo",
        }),
        n.jsx("img", {
          id: "loading-icon",
          src: "\\TESTLIVE\\assets\\images\\loading_game_anim.svg",
          alt: "Loading_icon",
        }),
      ],
    });
  }),
  ds = k.forwardRef((r, e) => {
    const t = d.useRef(null),
      s = () => {
        console.log("Claim CHips button CLicked");
      },
      i = () => {
        console.log("Home button clicked");
      },
      a = () => {
        x.handleLoadingPageVisible(!0),
          x.handleRoomsPageVisible(!0),
          x.handleLobbyPageVisible(!1);
      };
    return n.jsxs("div", {
      id: "lobby-container",
      ref: t,
      children: [
        n.jsx("div", {
          id: "home-button-container",
          children: n.jsx("img", {
            id: "home-button",
            onClick: i,
            src: "\\TESTLIVE\\assets\\images\\home_button.png",
            alt: "home-button",
          }),
        }),
        n.jsx("div", {
          id: "lobby-text-container",
          children: n.jsx("h1", { children: "Lobby" }),
        }),
        n.jsxs("div", {
          id: "cards-container",
          children: [
            n.jsxs("div", {
              id: "first-card-container",
              children: [
                n.jsx("img", {
                  id: "card",
                  src: "\\TESTLIVE\\assets\\images\\lobby_label_background.png",
                  alt: "card",
                }),
                n.jsx("h1", { children: "Cash Games" }),
                n.jsx("button", {
                  id: "second-button",
                  children: "Quick Play",
                }),
                n.jsx("button", {
                  id: "first-button",
                  onClick: a,
                  children: "Show Rooms",
                }),
              ],
            }),
            n.jsxs("div", {
              id: "second-card-container",
              children: [
                n.jsx("img", {
                  id: "card",
                  src: "\\TESTLIVE\\assets\\images\\lobby_label_background.png",
                  alt: "card",
                }),
                n.jsx("h1", { children: "Sit-n-Go" }),
                n.jsx("h2", { children: "Single Table Tournament" }),
                n.jsx("button", {
                  id: "first-button",
                  onClick: s,
                  children: "Join Now",
                }),
              ],
            }),
            n.jsxs("div", {
              id: "second-card-container",
              children: [
                n.jsx("img", {
                  id: "card",
                  src: "\\TESTLIVE\\assets\\images\\lobby_label_background.png",
                  alt: "card",
                }),
                n.jsx("h1", { children: "Private Games" }),
                n.jsx("button", {
                  id: "first-button",
                  onClick: s,
                  children: "Join Now",
                }),
              ],
            }),
            n.jsxs("div", {
              id: "double-card-container",
              children: [
                n.jsxs("div", {
                  id: "third-card-container",
                  children: [
                    n.jsx("img", {
                      id: "card",
                      src: "\\TESTLIVE\\assets\\images\\lobby_label_background_small.png",
                      alt: "card",
                    }),
                    n.jsx("h1", { children: "Shop" }),
                    n.jsx("button", {
                      id: "first-button",
                      onClick: s,
                      children: "Open",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  id: "third-card-container",
                  children: [
                    n.jsx("img", {
                      id: "card",
                      src: "\\TESTLIVE\\assets\\images\\lobby_label_background_small.png",
                      alt: "card",
                    }),
                    n.jsx("h1", { children: "Rankings" }),
                    n.jsx("button", {
                      id: "first-button",
                      onClick: s,
                      children: "Open",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n.jsx("div", {
          id: "claim-chips-container",
          children: n.jsx("button", {
            id: "claim-chips-button",
            onClick: s,
            children: " Claim Chips",
          }),
        }),
      ],
    });
  }),
  N = k.forwardRef((r, e) => {
    const t =
        r.path ||
        "M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z",
      s = r.fill || "#FFF",
      i = r.width || "40px",
      a = r.height || "40px";
    return n.jsx("div", {
      id: "ui-svg-button-container",
      children: n.jsx("button", {
        id: "d",
        onClick: r.onClick,
        children: n.jsx("svg", {
          fill: s,
          id: "icon",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          width: i,
          height: a,
          viewBox: "0 0 45.58 45.58",
          children: n.jsx("g", { children: n.jsx("path", { d: t }) }),
        }),
      }),
    });
  }),
  hs = k.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      [i, a] = d.useState(null),
      o = d.useRef(null);
    t || h(),
      d.useEffect(() => {
        c.getRoomsState.dispatch();
      }, []);
    function h() {
      s(!0),
        c.onRoomsState.add((u) => {
          console.log(u), a(u), x.handleLoadingPageVisible(!1);
        }),
        c.onGetPlayers.add((u) => g(u)),
        c.onAnnouncement.add((u) => {
          X.warning(u), x.handleLoadingPageVisible(!1);
        });
    }
    const l = (u) => {
      x.handleLoadingPageVisible(!0);
      const C = ue.get("authToken");
      c.getRoomData.dispatch({ roomID: u, authToken: C });
    };
    function g(u) {
      x.handleRoomsPageVisible(!1), D.handleVisible(!0), E.startGame(u);
    }
    const y = () => {
        x.handleRoomsPageVisible(!1), x.handleLobbyPageVisible(!0);
      },
      m = () => {
        c.onRoomsState.detachAll(),
          c.onGetPlayers.detachAll(),
          c.onAnnouncement.detachAll();
      };
    return (
      d.useImperativeHandle(e, () => ({ removeListeners: m })),
      n.jsxs("div", {
        id: "rooms-screen-container",
        ref: o,
        children: [
          n.jsx("div", {
            id: "back-button-container",
            children: n.jsx(N, { onClick: y }),
          }),
          n.jsx("div", {
            id: "rooms-container",
            ref: o,
            children: n.jsx("div", {
              id: "rooms-wrapper",
              children:
                i &&
                Object.entries(i).map(([u, C]) =>
                  n.jsxs(
                    "div",
                    {
                      id: "room",
                      onClick: () => l(C.roomID),
                      children: [
                        n.jsxs("p", { children: ["Room ID: ", C.roomID] }),
                        n.jsxs("p", { children: ["Entry Fee: ", C.entryFee] }),
                        n.jsxs("p", {
                          children: [
                            "Player Count: ",
                            C.playerCount,
                            "/",
                            C.max_players,
                          ],
                        }),
                      ],
                    },
                    u
                  )
                ),
            }),
          }),
          n.jsx(he, {}),
        ],
      })
    );
  });
k.forwardRef((r, e) => {
  const t = d.useRef(null);
  return n.jsx("div", {
    id: "background-container",
    ref: t,
    children: n.jsx("img", {
      id: "background-image",
      src: "\\TESTLIVE\\assets\\images\\loading_background.png",
      alt: "Loading_icon",
    }),
  });
});
const us = k.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      [i, a] = d.useState(!1),
      [o, h] = d.useState(!0),
      [l, g] = d.useState(!1),
      [y, m] = d.useState(!1),
      u = d.useRef(null),
      C = d.useRef(null),
      f = d.useRef(null),
      V = d.useRef(null),
      I = d.useRef(null),
      me = (B) => {
        s(B);
      },
      fe = (B) => {
        a(B);
      },
      be = (B) => {
        h(B);
      },
      Ce = (B) => {
        g(B);
      },
      xe = (B) => {
        B === !1 && I.current.removeListeners(), m(B);
      };
    return (
      d.useImperativeHandle(e, () => ({
        handleLoadingPageVisible: me,
        handleLoginPageVisible: fe,
        handleLoadingGameVisible: be,
        handleLobbyPageVisible: Ce,
        handleRoomsPageVisible: xe,
      })),
      n.jsxs("div", {
        id: "pages",
        ref: e,
        children: [
          o && n.jsx(ls, { ref: f }),
          i && n.jsx(cs, { ref: C }),
          l && n.jsx(ds, { ref: V }),
          y && n.jsx(hs, { ref: I }),
          t && n.jsx(ns, { ref: u }),
        ],
      })
    );
  }),
  gs = k.forwardRef((r, e) => {
    const [t, s] = d.useState({ bottom: "0px", height: 100 }),
      i = d.useRef(null),
      a = () => {
        console.log("Sound Button Clicked");
      },
      o = () => {
        console.log("Info Button Clicked");
      },
      h = (u) => {
        s((C) => ({ ...C, ...u }));
      },
      l = () => t.height,
      g = () => {
        w.fromTo(
          i.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      };
    return (
      d.useImperativeHandle(e, () => ({
        resize: h,
        getHeight: l,
        startOpenTween: g,
      })),
      n.jsx("div", {
        id: "bottom-bar",
        style: t,
        ref: i,
        children: n.jsxs("div", {
          id: "navi-buttons-container",
          children: [
            n.jsx("div", {
              id: "sound-button-container",
              children: n.jsx(N, {
                width: "60px",
                height: "80px",
                path: "M15.0403 5.22915C15.3245 5.34698 15.5674 5.54641 15.7382 5.80225C15.909 6.05809 16.0002 6.35884 16.0001 6.66648V25.333C16 25.6406 15.9088 25.9413 15.7378 26.1971C15.5669 26.4528 15.324 26.6521 15.0398 26.7698C14.7556 26.8875 14.4429 26.9183 14.1412 26.8584C13.8395 26.7984 13.5623 26.6503 13.3448 26.4328L7.57837 20.6664H3.55573C3.14317 20.6664 2.74751 20.5025 2.45579 20.2108C2.16407 19.9191 2.00018 19.5234 2.00018 19.1108V12.8887C2.00018 12.4761 2.16407 12.0804 2.45579 11.7887C2.74751 11.497 3.14317 11.3331 3.55573 11.3331H7.57837L13.3448 5.5667C13.5623 5.34903 13.8395 5.20078 14.1413 5.14069C14.4431 5.0806 14.756 5.11139 15.0403 5.22915ZM23.2443 5.00049C23.536 4.70887 23.9316 4.54504 24.344 4.54504C24.7565 4.54504 25.1521 4.70887 25.4438 5.00049C28.2578 7.81291 30 11.7049 30 15.9982C30 20.2915 28.2578 24.185 25.4438 26.999C25.1504 27.2824 24.7575 27.4391 24.3496 27.4356C23.9418 27.4321 23.5516 27.2685 23.2632 26.9801C22.9748 26.6916 22.8112 26.3015 22.8077 25.8936C22.8041 25.4858 22.9609 25.0928 23.2443 24.7995C24.4018 23.6453 25.3197 22.2737 25.9452 20.7635C26.5707 19.2533 26.8914 17.6343 26.8889 15.9997C26.8889 12.562 25.4982 9.45401 23.2443 7.20003C22.9526 6.90832 22.7888 6.51273 22.7888 6.10026C22.7888 5.68778 22.9526 5.29219 23.2443 5.00049ZM18.8436 9.39957C18.9881 9.25494 19.1596 9.1402 19.3485 9.06192C19.5373 8.98364 19.7397 8.94335 19.9442 8.94335C20.1486 8.94335 20.351 8.98364 20.5399 9.06192C20.7287 9.1402 20.9003 9.25494 21.0447 9.39957C21.9125 10.2655 22.6007 11.2943 23.0697 12.427C23.5388 13.5596 23.7794 14.7738 23.7778 15.9997C23.7793 17.2257 23.5386 18.4398 23.0696 19.5725C22.6006 20.7051 21.9125 21.734 21.0447 22.5999C20.7528 22.8918 20.357 23.0558 19.9442 23.0558C19.5314 23.0558 19.1355 22.8918 18.8436 22.5999C18.5517 22.308 18.3878 21.9122 18.3878 21.4994C18.3878 21.0866 18.5517 20.6907 18.8436 20.3988C19.4226 19.822 19.8817 19.1364 20.1946 18.3814C20.5074 17.6264 20.6679 16.817 20.6667 15.9997C20.668 15.1825 20.5076 14.3731 20.1947 13.6181C19.8818 12.8631 19.4226 12.1774 18.8436 11.6007C18.699 11.4562 18.5843 11.2846 18.506 11.0958C18.4277 10.907 18.3874 10.7045 18.3874 10.5001C18.3874 10.2957 18.4277 10.0933 18.506 9.90443C18.5843 9.71559 18.699 9.54404 18.8436 9.39957Z",
                onClick: a,
              }),
            }),
            n.jsx("div", {
              id: "info-button-container",
              children: n.jsx(N, {
                width: "60px",
                height: "80px",
                path: "M19.644 15.7734C19.6664 16.6803 19.2844 17.8576 18.9249 19.0349C18.453 20.5941 17.9812 22.1532 17.749 23.776C17.6891 24.2056 17.6666 24.6431 17.6591 25.0806C17.6591 25.7329 17.9512 26.0352 18.5729 26.067C19.2994 26.1068 19.981 25.9238 20.6551 25.6852C20.8873 25.6056 21.112 25.5897 21.2543 25.8283C21.3217 25.9397 21.3517 26.1147 21.3217 26.242C21.2019 26.7352 21.0745 27.2204 20.9098 27.6898C20.8573 27.8409 20.7075 28.0159 20.5652 28.0716C19.3968 28.5887 18.2134 29.0341 16.9625 29.2489C15.2847 29.5353 13.7867 29.0898 12.476 27.9602C11.9067 27.475 11.7195 26.775 11.6446 26.0352C11.4948 24.5397 11.7794 23.0839 12.1314 21.6521C12.5434 19.9418 13.0302 18.2553 13.4647 16.553C13.5471 16.2189 13.5995 15.8689 13.6145 15.5268C13.6294 15.0177 13.3898 14.7393 12.9104 14.6518C12.3112 14.5325 11.742 14.6677 11.1652 14.8109C10.9855 14.8586 10.8057 14.9223 10.6259 14.9779C10.229 15.0973 9.93686 14.8427 10.0118 14.4211C10.0941 13.9359 10.184 13.4427 10.3039 12.9654C10.3338 12.8301 10.4537 12.671 10.566 12.6154C12.2738 11.8596 14.0414 11.3028 15.9139 11.3346C17.0599 11.3505 18.116 11.7085 18.88 12.7029C19.4792 13.4904 19.644 14.4291 19.644 15.7734Z",
                onClick: o,
              }),
            }),
          ],
        }),
      })
    );
  }),
  ps = k.forwardRef((r, e) => {
    const [t, s] = d.useState({}),
      i = d.useRef(null),
      a = () => {
        D.handleVisible(!1),
          x.handleRoomsPageVisible(!0),
          E.resetAndHide(),
          console.log("Back to Rooms !");
      },
      o = () => {
        w.fromTo(
          i.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      h = (l) => {
        s((g) => ({ ...g, ...l }));
      };
    return (
      d.useImperativeHandle(e, () => ({ resize: h, startOpenTween: o })),
      n.jsx("div", {
        id: "top-bar",
        style: t,
        ref: i,
        children: n.jsx("div", {
          id: "back-button-container",
          children: n.jsx(N, { onClick: a }),
        }),
      })
    );
  }),
  ys = d.forwardRef((r, e) => {
    const [t, s] = d.useState("chat"),
      i = (a) => {
        D.changeChannel(a), s(a);
      };
    return n.jsxs("div", {
      id: "buttons-container",
      children: [
        n.jsx("div", {
          id: "button-container",
          children: n.jsxs("button", {
            id: t === "chat" ? "label-button-active" : "label-button",
            onClick: () => i("chat"),
            children: [
              n.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: n.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              n.jsx("span", { children: "CHAT" }),
            ],
          }),
        }),
        n.jsx("div", {
          id: "button-container",
          children: n.jsxs("button", {
            id: t === "hands" ? "label-button-active" : "label-button",
            onClick: () => i("hands"),
            children: [
              n.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: n.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              n.jsx("span", { children: "HANDS" }),
            ],
          }),
        }),
        n.jsx("div", {
          id: "button-container",
          children: n.jsxs("button", {
            id: t === "table" ? "label-button-active" : "label-button",
            onClick: () => i("table"),
            children: [
              n.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: n.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              n.jsx("span", { children: "TABLE" }),
            ],
          }),
        }),
      ],
    });
  });
function ms(r) {
  const e = parseFloat(r.replace(/,/g, ""));
  return parseFloat(e);
}
const fs = d.forwardRef((r, e) => {
    const [t, s] = d.useState(R(1e3));
    d.useState(R(1e3));
    const i = (l) => {
        const [g, y, m, u, C] = ye,
          f = { action: "", data: 0 };
        if (l === g) (f.action = g), c.playerTurnAction.dispatch(f);
        else if (l === m) (f.action = m), c.playerTurnAction.dispatch(f);
        else if (l === u) {
          //! BET
          (f.action = "bet"), (f.data = ms(t)), c.playerTurnAction.dispatch(f);
        } else l === y && ((f.action = y), c.playerTurnAction.dispatch(f));
      },
      a = (l) => {},
      o = (l) => {
        const g = R(l.target.value);
        s(g);
      },
      h = (l) => {};
    return (
      d.useImperativeHandle(e, () => ({ update: h })),
      n.jsxs("div", {
        id: "betting-panel-container",
        children: [
          n.jsxs("div", {
            id: "bet-values-container",
            children: [
              n.jsx("button", {
                id: "bet-value-button",
                onClick: () => a(),
                children: "5BB",
              }),
              n.jsx("button", {
                id: "bet-value-button",
                onClick: () => a(),
                children: "35%",
              }),
              n.jsx("button", {
                id: "bet-value-button",
                onClick: () => a(),
                children: "75%",
              }),
              n.jsx("button", {
                id: "bet-value-button",
                onClick: () => a(),
                children: "110%",
              }),
            ],
          }),
          n.jsxs("div", {
            id: "bet-slider-container",
            children: [
              n.jsx("input", {
                id: "bet-slider",
                type: "range",
                onChange: o,
                min: "1000",
                max: "10000",
                step: "1000",
              }),
              n.jsx("span", { id: "slider-value", children: t }),
            ],
          }),
          n.jsxs("div", {
            id: "betting-buttons-container",
            children: [
              n.jsx("button", {
                id: "fold-button",
                onClick: () => i("fold"),
                children: "Fold",
              }),
              n.jsx("button", {
                id: "check-button",
                onClick: () => i("check"),
                children: "Check",
              }),
              n.jsx("button", {
                id: "call-button",
                onClick: () => i("call"),
                children: "Call",
              }),
              n.jsx("button", {
                id: "raise-button",
                onClick: () => i("raise"),
                children: "Bet",
              }),
            ],
          }),
        ],
      })
    );
  }),
  bs = d.forwardRef((r, e) => {
    const t = (s) => {
      //! WSZYSTKO GOTOWE. MOZESZ ZACZAC TWORZYĆ
      console.log(s);
    };
    return (
      d.useImperativeHandle(e, () => ({ changeChannel: t })),
      n.jsx("div", { id: "channels-container" })
    );
  }),
  Cs = d.forwardRef((r, e) => {
    const [t, s] = d.useState(0),
      i = d.useRef(),
      a = d.useRef();
    G.add("channels", i);
    const o = (l) => {
        console.log(l), console.log("UI DATA"), s(); //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      h = () => {
        w.fromTo(
          a.current,
          { scale: 0, x: "+=1000" },
          { scale: 1, x: "-=1000", ease: "back.out", duration: 0.8 }
        );
      };
    return (
      d.useImperativeHandle(e, () => ({
        update: o,
        contextContainerOpenTween: h,
      })),
      n.jsx("div", {
        id: "middle-bar",
        children: n.jsxs("div", {
          id: "context-container",
          ref: a,
          children: [
            n.jsx(ys, {}),
            n.jsx(bs, { ref: i }),
            n.jsx(fs, {}),
            n.jsxs("div", {
              id: "balance-text-container",
              children: [
                n.jsx("h2", { children: "Balance" }),
                n.jsxs("h1", { children: [t, " Chips"] }),
              ],
            }),
          ],
        }),
      })
    );
  });
class xs extends d.Component {
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
      (this.topBarRef = d.createRef()),
      (this.bottomBarRef = d.createRef()),
      (this.middleBarRef = d.createRef()),
      G.add("middleBar", this.middleBarRef);
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
        top: i,
        transform: a,
        display: o,
      } = this.state,
      h = { width: e, height: t, left: s, top: i, transform: a, display: o };
    return n.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: h,
      children: [
        n.jsx(ps, { ref: this.topBarRef }),
        n.jsx(gs, { ref: this.bottomBarRef }),
        n.jsx(Cs, { ref: this.middleBarRef }),
      ],
    });
  }
}
const Ps = k.forwardRef((r, e) => n.jsx(xs, { ref: e, ...r }));
function ws() {
  const r = d.useRef(),
    e = d.useRef(null),
    t = d.useRef(null);
  return (
    d.useEffect(() => {
      const s = r.current,
        i = e.current,
        a = t.current;
      is(s),
        D.create(i),
        x.create(a),
        Q.resizeScreen(i, s),
        window.addEventListener("resize", () => Q.resizeScreen(i, s));
    }, []),
    n.jsxs("div", {
      id: "app",
      children: [
        n.jsx(Le, { ref: r }),
        n.jsx(Ps, { ref: e }),
        n.jsx(us, { ref: t }),
      ],
    })
  );
}
Te.createRoot(document.getElementById("root")).render(n.jsx(ws, {}));
