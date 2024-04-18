var we = Object.defineProperty;
var Se = (r, e, t) =>
  e in r
    ? we(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var y = (r, e, t) => (Se(r, typeof e != "symbol" ? e + "" : e, t), t);
import { r as d, j as i, R as v } from "./react-CWbZ82Fp.js";
import { c as Te } from "./react-dom-1bg23oq7.js";
import {
  b as Ae,
  c as ae,
  T as ke,
  S as ve,
  e as Be,
  G as Ie,
  f as ue,
} from "./@pixi-CX1DKKQY.js";
import "./pixi.js-CFi_l-1O.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { l as _e } from "./socket.io-client-DFi9RC7o.js";
import { d as P } from "./mini-signals-DMh6wOcT.js";
import { g as C } from "./gsap-ZORhgBxb.js";
import { h as Le } from "./howler-BozPm2lL.js";
import { Q as be, B as q } from "./react-toastify-DdhT_1Lx.js";
import { a as re } from "./js-cookie-Cz0CWeBA.js";
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
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
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
const je = {
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundAlpha: 0,
    parent: "game-container",
  },
  Re = (r) => new Ae({ ...je, parent: r }),
  Me = d.forwardRef(function ({ currentActiveScene: e }, t) {
    const s = d.useRef(),
      n = d.useRef(null);
    return (
      d.useLayoutEffect(() => {
        s.current === void 0 &&
          ((s.current = Re("game-container")),
          (globalThis.__PHASER_GAME__ = s.current),
          t !== null &&
            ((t.current = s.current), n.current.appendChild(s.current.view)));
      }, [t]),
      i.jsx("div", { id: "game-container", ref: n })
    );
  });
class oe {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
y(oe, "_app", null);
class X {
  static get app() {
    return oe.app;
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
class N {
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
y(N, "_scenes", new Map());
class _ {
  static addScene(e) {
    e.forEach((t) => {
      N.addScene(t), X.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = N.scenes,
      t = Array.from(e.keys()),
      s = t.length > 0 ? t[0] : void 0;
    s && this.startScene(s);
  }
  static startScene(e, t) {
    const s = this.getScene(e);
    X.addChild(s), s.init(t);
  }
  static removeScene(e) {
    const t = this.getScene(e);
    t == null || t.removeListeners(), X.removeChild(t);
  }
  static getScene(e) {
    return N.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), N.deleteScene(e);
  }
  static setVisible(e, t) {
    const s = this.getScene(e);
    s.visible = t;
  }
} //! ///////////////////////////////////////////////////
let Ve = "https://backendpoker.blockspingaming.com",
  Oe = "https://backendpoker.blockspingaming.com"; //! ///////////////////////////////////////////////////
class c {}
y(c, "onPlayerJoinRoom", new P.MiniSignal()),
  y(c, "onGetPlayers", new P.MiniSignal()),
  y(c, "onAllPlayerJoined", new P.MiniSignal()),
  y(c, "onChangePlayerTurn", new P.MiniSignal()),
  y(c, "onInitNextRound", new P.MiniSignal()),
  y(c, "onPlayerLeave", new P.MiniSignal()),
  y(c, "onUpdatePlayerTurnAction", new P.MiniSignal()),
  y(c, "onGameResult", new P.MiniSignal()),
  y(c, "onRoomsState", new P.MiniSignal()),
  y(c, "onGameState", new P.MiniSignal()),
  y(c, "onResetGame", new P.MiniSignal()),
  y(c, "onAnnouncement", new P.MiniSignal()),
  y(c, "onBackButtonClick", new P.MiniSignal()),
  y(c, "onPlayerAndGameProfileInformation", new P.MiniSignal()),
  y(c, "onKick", new P.MiniSignal()),
  y(c, "getPlayerAndGameProfileInformation", new P.MiniSignal()),
  y(c, "playerTurnAction", new P.MiniSignal()),
  y(c, "joinGame", new P.MiniSignal()),
  y(c, "getRoomsState", new P.MiniSignal());
class Ge {
  constructor() {
    (this.client = null), (this.myId = ""), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await _e(`${Oe}`).on("connect", () => {
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
      this.client.on("playerAndGameProfileInformation", (e) => {
        c.onPlayerAndGameProfileInformation.dispatch(e);
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
      this.client.on("kick", () => {
        c.onKick.dispatch();
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
    c.playerTurnAction.add((e) => this.playerTurnAction(e)),
      c.joinGame.add((e) => this.joinGame(e)),
      c.onBackButtonClick.add(() => this.playerLeaveRoom()),
      c.getPlayerAndGameProfileInformation.add((e) =>
        this.getPlayerAndGameProfileInformation(e)
      );
  }
}
const j = new Ge();
class ce extends ae {
  constructor(e) {
    super(), (this.sceneKey = e), (this.isActive = !1);
  }
  init(e) {
    this.isActive = !0;
  }
}
class le extends ke {
  constructor(e) {
    const {
      message: t,
      x: s = 0,
      y: n = 0,
      anchorX: a = 0,
      anchorY: o = 0,
      visible: h = !0,
      isStatic: l = !1,
      scaleX: g = 1,
      scaleY: m = 1,
      textConfig: {
        fontFamily: f = "Arial",
        fontSize: b = 55,
        fill: x = 0,
      } = {},
    } = e;
    super(t, { fontFamily: f, fontSize: b, fill: x }),
      this.anchor.set(a, o),
      this.position.set(s, n),
      (this.visible = h),
      (this.scale.x = g),
      (this.scale.y = m),
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
class R extends ae {
  constructor() {
    super();
  }
}
class Q {
  static addImage(e, t) {
    this.images.set(e, t);
  }
  static getImage(e) {
    return this.images.get(e);
  }
}
y(Q, "images", new Map());
class W {
  static addImage(e, t) {
    Q.addImage(e, t);
  }
  static getImage(e) {
    return Q.getImage(e);
  }
}
class S extends ve {
  constructor(e) {
    const {
        textureKey: t,
        x: s = 0,
        y: n = 0,
        anchorX: a = 0.5,
        anchorY: o = 0.5,
        visible: h = !0,
        scaleX: l = 1,
        scaleY: g = 1,
        angle: m = 0,
        tint: f = 16777215,
        isStatic: b = !0,
        interactive: x = !1,
        eventMode: u = "none",
      } = e,
      A = W.getImage(t);
    super(A),
      this.anchor.set(a, o),
      this.position.set(s, n),
      (this.scale.x = l),
      (this.scale.y = g),
      (this.angle = m),
      (this.tint = f),
      (this.visible = h),
      (this.filters = null),
      (this.eventMode = u),
      (this.interactiveChildren = x),
      (this.cacheAsBitmap = b);
  }
  changeTexture(e) {
    const t = W.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  changeTextureURL(e) {
    const t = Be.from(e);
    (this.texture = t), (this.width = 39), (this.height = 39);
  }
  setVisible(e) {
    this.visible = e;
  }
}
function V(r) {
  return parseInt(r).toLocaleString("en", { useGrouping: !0 });
}
class xe extends R {
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
      t = new S(e);
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
    this.text.updateMessage(V(e));
  }
  reset() {
    (this.x = this.config.x),
      (this.y = this.config.y),
      (this.visible = !1),
      this.text.updateMessage(0);
  }
}
const Ee = 1e3,
  ee = { deal: "deal_card", slide: "slide_card", turn: "turn_card" },
  De = {
    nextAnimDelay: 200,
    nextCardDeal: 100,
    cardScale: { owner: 1, other: 1 },
  },
  Fe = { duration: 0.1, ease: "none", yoyo: !0, repeat: 1 },
  Ne = { duration: 0.5, ease: "circ.out", angle: 360, scaleOnStart: 0.5 },
  He = { duration: 0.3, ease: "none" },
  We = { duration: 0.3, ease: "none", scale: 1.5 },
  ge = { y: 520, duration: 0.2, ease: "none" };
class Ce extends S {
  constructor(e) {
    super(e), (this.config = e), (this.isTurned = !1), (this.isSlideDown = !1);
  }
  async turnOverAnim(e) {
    const { duration: t, ease: s, yoyo: n, repeat: a } = Fe;
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
    const { duration: n, ease: a, scaleOnStart: o, angle: h } = Ne,
      l = { scale: this.scale.x * o, angle: this.angle, x: this.x, y: this.y };
    (this.visible = !0),
      C.to(l, {
        scale: s,
        angle: this.angle + h,
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
    C.to(this, { x: t, duration: 0.3, ease: "none" });
  }
  moveDownAnim() {
    const e = this.y + 9;
    C.to(this, { y: e, duration: 0.3, ease: "back.out" });
  }
  async slideFromTopAnim() {
    const { ease: e, duration: t, y: s } = ge;
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
    const { ease: t, duration: s } = He;
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
    const { y: e } = ge;
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
class te {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
}
y(te, "audio", new Map());
class D {
  static addAudio(e, t) {
    const s = new Le.Howl({ src: [t] });
    te.addAudio(e, s);
  }
  static getAudio(e) {
    return te.getAudio(e);
  }
  static playAudio(e) {
    const t = this.getAudio(e);
    t == null || t.play();
  }
}
class Ue extends R {
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
        o = t + n * e,
        h = a.moveXAnim(o);
      s.push(h);
    }
    await Promise.all(s);
  }
  async newCardsTurnOverAnim(e, t) {
    const s = e.length,
      n = t + s;
    for (let a = t; a < n; a++) {
      const o = e[a - t].name;
      await this.turnOverCardAnim(a, o);
    }
  }
  async newCardsSlideFromTopAnim(e, t) {
    const s = t + e;
    for (let n = t; n < s; n++) await this.slideCardFormTopAnim(n);
  }
  async slideCardFormTopAnim(e) {
    const t = ee.slide;
    D.playAudio(t), await this.getCard(e).slideFromTopAnim();
  }
  async turnOverCardAnim(e, t) {
    const s = ee.turn;
    D.playAudio(s), await this.getCard(e).turnOverAnim(t);
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
      s = new Ce(t);
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
function se() {
  return window.innerWidth / window.innerHeight <= 1;
}
const Ke = {
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
      y: se() ? -528 : -400,
      isStatic: !1,
      scaleX: 0.9,
      scaleY: 0.9,
    },
  },
};
class ze extends ae {
  constructor() {
    super(),
      (this.config = Ke),
      (this.table = this.createTable()),
      (this.cards = this.createCards()),
      (this.totalBets = this.createTotalBets());
  }
  createTable() {
    const e = { textureKey: "table", x: 987, y: 530, isStatic: !0 },
      t = new S(e);
    return this.addChild(t), t;
  }
  createTotalBets() {
    const e = this.config.bet,
      t = new xe(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = this.config.card,
      t = new Ue(e);
    return this.addChild(t), t;
  }
}
class Ye {
  constructor() {
    this.table = null;
  }
  createTable() {
    return (this.table = new ze()), this.table;
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
const Xe = { duration: 1, ease: "circ.out" },
  K = class K {
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
      const { ease: s, duration: n } = Xe,
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
(K.tableAdapter = new Ye()), (K.createTableTween = null);
let L = K;
const de = class de {
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
de.players = {};
let E = de;
const $e = 2,
  Pe = ["fold", "check", "call", "raise", "bet"],
  Je = {
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
    E.addPlayer(e);
  }
  static getPlayers() {
    return E.getPlayers;
  }
  static getPlayersCount() {
    const e = this.getPlayers();
    return Object.keys(e).length;
  }
  static getPlayer(e) {
    return E.getPlayer(e);
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
      } = De,
      o = (h) => new Promise((l) => setTimeout(l, h));
    for (let h = 0; h < $e; h++) {
      await o(s);
      for (const l in e)
        if (e.hasOwnProperty(l)) {
          await o(t);
          const g = j.isMyId(l) ? n : a;
          e[l].startDealCardsAnim(h, g);
        }
    }
  }
  static turnOverPlayersCardsAnim(e, t) {
    const s = this.getPlayers(),
      n = j.getMyId,
      a = (o) => {
        const h = e[o],
          l = s[o];
        l && !l.isInLobby && l.turnOverCards(h);
      };
    if (t) a(n);
    else for (const o in s) j.isMyId(o) || a(o);
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
    t && t.destroy(), E.deletePlayer(e);
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
const z = class z {
  static convertConfigToArray() {
    return Object.values(Je);
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
z.positionsConfig = z.convertConfigToArray();
let H = z;
const Ze = ["check_sign", "call_sign", "raise_sign"],
  $ = {
    playerTurnStart: "player_turn_start",
    playerTurnEnd: "player_turn_end",
    playerLeave: "player_leave",
  },
  qe = {
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
class Qe extends R {
  constructor() {
    super(),
      (this.dealAnimStartPositions = []),
      (this.dealAnimEndPositions = []),
      (this.cards = []);
  }
  createCard(e) {
    const t = e,
      s = new Ce(t);
    return s !== null && this.addChild(s), s;
  }
  dealAnim(e, t, s, n) {
    const a = ee.deal;
    D.playAudio(a), e.dealAnim(t, s, n);
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
    const { duration: e, ease: t, scale: s } = We,
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
class et extends R {
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
      t = new S(e);
    return t && this.addChild(t), t;
  }
  createContainer() {
    const e = this.config.container,
      t = new S(e);
    return t && this.addChild(t), t;
  }
  createBar() {
    const e = this.config.bar,
      t = new S(e);
    return t && this.addChild(t), t;
  }
  createBarMask(e) {
    const { x: t, y: s, height: n } = this.config.mask,
      a = new Ie();
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
class tt extends R {
  constructor(e) {
    super(),
      (this.config = e),
      (this.fps = this.config.fps),
      (this.countdownInterval = null),
      (this.progressBar = this.createProgressBar());
  }
  createProgressBar() {
    const e = this.config.progressBar,
      t = new et(e);
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
class st extends R {
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
    return t.updateMessage(V(e.message)), this.addChild(t), t;
  }
  createMoneyIcon() {
    const e = this.config.moneyIcon,
      t = new S(e.image);
    return this.addChild(t), t;
  }
  updateMoneyText(e) {
    this.money.updateMessage(V(e)), this.updateIconPosition();
  }
  updateIconPosition() {
    this.moneyIcon.x = this.money.x - this.config.moneyIcon.offsetX;
  }
}
class it extends R {
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
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createBackgroundLight() {
    const e = this.config.backgroundLight,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatar() {
    const e = this.config.avatar,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createAvatarMask() {
    const e = this.config.avatarMask,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createNickname() {
    const e = this.config.nickname,
      t = new le(e);
    return this.addChild(t), t;
  }
  createMoney() {
    const e = this.config,
      t = new st(e.moneyContainer);
    return this.addChild(t), t;
  }
  createBet() {
    const e = this.config.bet,
      t = new xe(e);
    return this.addChild(t), t;
  }
  createCards() {
    const e = new Qe();
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
      t = new tt(e);
    return t.setVisible(!1), this.addChild(t), t;
  }
  createDealerSign() {
    const e = this.config.dealerSign,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createActionSign() {
    const e = this.config.actionSign,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
  createWinSprite() {
    const e = this.config.winImage,
      t = new S(e);
    return t !== null && this.addChild(t), t;
  }
}
class nt {
  constructor(e) {
    (this.playerComponents = new it(e)),
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
    this.playerComponents.bet.text.updateMessage(V(e));
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
class at {
  constructor() {
    y(this, "handleLoadingGameVisible", (e) => {
      this.pages.handleLoadingGameVisible(e);
    });
    y(this, "handleLobbyPageVisible", (e) => {
      this.pages.handleLobbyPageVisible(e);
    });
    y(this, "handleRoomsPageVisible", (e) => {
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
const T = new at();
class rt extends ce {
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
    L.initTable(this);
  }
  createPlayersContainer() {
    const e = new R();
    return this.addChild(e), e;
  }
  addPlayersToGame(e) {
    console.log(e), this.setupGamePositionsConfig(e);
    for (const t in e) {
      const s = e[t];
      this.createPlayerAndAddToGame(s);
    }
    T.handleLoadingPageVisible(!1);
  }
  createPlayerAndAddToGame(e) {
    const t = this.createPlayer(e);
    t !== null && this.playersContainer.addChild(t.getPlayerComponents);
  }
  async onAllPlayerJoined(e) {
    const t = p.getPlayers(),
      {
        drawCards: s,
        playersBets: n,
        playersChips: a,
        playersGamePositions: o,
      } = e.players;
    for (const h in t) {
      const l = t[h];
      l.setAlpha(1),
        (l.isInLobby = !1),
        l.setCardsVisible(!0),
        this.updatePlayerMoney(h, t, a),
        this.updatePlayerBet(h, t, n),
        this.updatePlayerPosition(h, t, o);
    }
    await p.playDealCardsForPlayersAnim(),
      await new Promise((h) => {
        setTimeout(() => {
          p.turnOverPlayersCardsAnim(s, !0), h();
        }, Ee);
      }),
      this.updatePlayerTurn(e.game.playerTurnData);
  }
  updatePlayerMoney(e, t, s) {
    const n = s[e].chips;
    p.updatePlayerMoneyText(e, t, n);
  }
  updatePlayerBet(e, t, s) {
    const n = s[e].bet;
    s[e] !== void 0 && p.updatePlayerBet(e, t, n);
  }
  updatePlayerPosition(e, t, s) {
    const n = s[e].position;
    p.updatePlayerPosition(e, t, n), p.checkDisplayDealerSign(e, t, n);
  }
  updatePlayerTurn(e) {
    const { playerIdGameTurn: t, serverTime: s, turnRespondTime: n } = e,
      a = $.playerTurnStart;
    D.playAudio(a),
      p.turnOffActiveRoundEffects(),
      p.setPlayerActionSignVisible(t, !1);
    const o = p.getPlayer(t);
    o && (o.startTimer(s, n), o.handleBackgroundLightVisible(!0));
  }
  createPlayer(e) {
    const {
        id: t,
        money: s,
        chips: n,
        nick: a,
        sit: o,
        bet: h,
        position: l,
        inLobby: g,
        profileImage: m,
      } = e,
      {
        sitPosition: f,
        betPosition: b,
        cardsPositions: x,
      } = H.getPositionsConfig(o),
      u = { ...qe };
    (u.x = f.x),
      (u.y = f.y),
      (u.bet.x = b.x),
      (u.bet.y = b.y),
      (u.id = t),
      (u.sit = o),
      (u.inLobby = g),
      (u.bet.text.message = h),
      (u.position = l),
      (u.nickname.message = a),
      (u.moneyContainer.money.message = n),
      (u.cardsAnimPositions.animStartPosition = x.dealAnimStartPositions),
      (u.cardsAnimPositions.animEndPosition = x.dealAnimEndPositions);
    for (let w = 0; w < x.dealAnimEndPositions.length; w++)
      (u.cards[w].x = x.dealAnimEndPositions[w].x),
        (u.cards[w].y = x.dealAnimEndPositions[w].y);
    const A = new nt(u);
    return A.changeAvatarSprite(m), p.addPlayer(A), A;
  }
  initGameState(e) {
    const {
        tableCards: t,
        tableBets: s,
        playersBets: n,
        playerTurnID: a,
        serverTime: o,
        turnRespondTime: h,
      } = e,
      l = p.getPlayers();
    L.layOutCards(t, !1),
      L.updateTotalBetsTextAndMakeVisible(s),
      p.setPlayersCardsVisible();
    const g = p.getPlayer(a);
    g.startTimer(o, h), g.handleBackgroundLightVisible(!0);
    for (const m in n) {
      const f = n[m];
      p.updatePlayerBet(m, l, f);
    }
  }
  async initNextRound(e) {
    const { tableCards: t, tableBets: s } = e.game;
    await L.layOutCards(t),
      L.updateTotalBetsTextAndMakeVisible(s),
      p.resetPlayersBets(),
      p.setPlayersSignsVisible(!1);
  }
  deletePlayer(e) {
    const t = $.playerLeave;
    D.playAudio(t), p.deletePlayer(e);
  }
  updatePlayerTurnAction(e) {
    const [t, s, n] = Ze,
      [a, o, h, l, g] = Pe,
      { playerId: m, type: f, bet: b, chips: x } = e,
      u = p.getPlayer(m),
      A = $.playerTurnEnd;
    if ((D.playAudio(A), f === o)) {
      const w = t;
      u.setActionSignAndTextureVisible(w, !0);
    } else if (f === g) this.updatePlayerMoneyAndBetText(m, b, x);
    else if (f === h) {
      const w = s;
      u.setActionSignAndTextureVisible(w, !0),
        this.updatePlayerMoneyAndBetText(m, b, x);
    } else
      f === a && ((u.isInLobby = !0), u.setAlpha(0.5), u.setCardsVisible(!1));
  }
  updatePlayerMoneyAndBetText(e, t, s) {
    const n = p.getPlayers();
    p.updatePlayerBet(e, n, t), p.updatePlayerMoneyText(e, n, s);
  }
  updateUiMoneyAndBetText(e, t) {}
  setupGamePositionsConfig(e) {
    const t = j.getMyId,
      s = e[t].sit;
    H.setupConfigPositions(s);
  }
  async initGameResult(e) {
    const {
        players: { playersCards: t },
        game: { winnerPlayerId: s, winnerPlayerChips: n, tableBets: a },
      } = e,
      o = p.getPlayer(s),
      h = p.getPlayers(),
      { x: l, y: g } = o.getPosition;
    L.updateTotalBetsTextAndMakeVisible(a),
      p.setPlayersSignsVisible(!1),
      o.startShowWInImageAnim(),
      p.updatePlayerMoneyText(s, h, n),
      p.turnOverPlayersCardsAnim(t, !1),
      L.moveBetsToWinnerAnim(l, g),
      p.turnOffActiveRoundEffects(),
      p.resetPlayersBets();
  }
  resetGame() {
    p.turnOffActiveRoundEffects(), H.reset(), p.resetPlayersData(), L.reset();
  }
  refreshGameData(e) {
    p.deletePlayers(), this.addPlayersToGame(e), L.startCreateTableTween();
  }
}
const ot = new rt();
class O {
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
y(O, "_refs", new Map());
class ct {
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
    O.get("lobbyScreen").handleBuyInWindowVisible(!1);
  }
  update(e) {
    O.get("middleBar").update(e);
  }
  changeChannel(e) {
    O.get("channels").changeChannel(e);
  }
}
const G = new ct(),
  he = class he {
    static startGame(e) {
      const t = _.getScene("Game"),
        s = _.getScene("Background");
      if (!(t != null && t.isActive)) {
        _.startScene("Game", e),
          (this.game = _.getScene("Game")),
          this.bindSignals(),
          s.startGameBackground();
        return;
      }
      _.setVisible("Game", !0),
        this.game.refreshGameData(e),
        s.startGameBackground();
    }
    static afterLoadGameCallback() {
      T.handleLoadingGameVisible(!1),
        T.handleLoginPageVisible(!0),
        this.startBackground();
    }
    static startBackground() {
      _.startScene("Background");
    }
    static resetAndHide() {
      const e = _.getScene("Game"),
        t = _.getScene("Background");
      e.resetGame(), _.setVisible("Game", !1), t.startLobbyBackground();
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
        c.onResetGame.add((e) => this.resetGame(e)),
        c.onKick.add(() => this.kickPlayer());
    }
    static addPlayerToGame(e) {
      console.log(e), !j.isMyId(e.id) && this.game.createPlayerAndAddToGame(e);
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
      if (j.isMyId(e)) {
        this.resetAndHide(),
          G.handleVisible(!1),
          T.handleLobbyPageVisible(!0),
          T.handleLoadingPageVisible(!1);
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
      this.resetAndHide(), G.handleVisible(!1), T.handleLobbyPageVisible(!0);
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
        c.onKick.detachAll(),
        c.onChangePlayerTurn.detachAll(),
        c.onUpdatePlayerTurnAction.detachAll();
    }
  };
he.game = null;
let U = he;
const lt = { path: "game/backgrounds", key: "background" },
  dt = { path: "game/backgrounds", key: "bet_background" },
  ht = { path: "game/avatar", key: "default_avatar" },
  ut = { path: "game/avatar", key: "avatar_background" },
  gt = { path: "game/chips", key: "bet" },
  pt = { path: "game/croupier", key: "croupier" },
  mt = { path: "game/signs", key: "check_sign" },
  yt = { path: "game/signs", key: "dealer_sign" },
  ft = { path: "game/signs", key: "call_sign" },
  bt = { path: "game/signs", key: "winner_sign" },
  xt = { path: "game/tables", key: "table" },
  Ct = { path: "game/timer", key: "timer_bar_background" },
  Pt = { path: "game/timer", key: "timer_bar_container" },
  wt = { path: "game/timer", key: "timer_bar" },
  St = {
    gameBackground: lt,
    betBackground: dt,
    defaultPlayerAvatar: ht,
    avatarBackground: ut,
    betChip: gt,
    croupier: pt,
    playerCheckSign: mt,
    playerDealerSign: yt,
    playerCallSign: ft,
    playerWinnerSign: bt,
    gameTable: xt,
    timerBackground: Ct,
    timerContainer: Pt,
    timerBar: wt,
  },
  Tt = { path: "interface/buttons", key: "bet_button_push" },
  At = { path: "interface/buttons", key: "bet_button" },
  kt = { path: "interface/buttons", key: "betting_hide_button" },
  vt = { path: "interface/buttons", key: "betting_show_button" },
  Bt = { path: "interface/buttons", key: "call_button_push" },
  It = { path: "interface/buttons", key: "call_button" },
  _t = { path: "interface/buttons", key: "check_button_push" },
  Lt = { path: "interface/buttons", key: "check_button" },
  jt = { path: "interface/buttons", key: "fold_button_push" },
  Rt = { path: "interface/buttons", key: "fold_button" },
  Mt = { path: "interface/buttons", key: "raise_button_push" },
  Vt = { path: "interface/buttons", key: "raise_button" },
  Ot = { path: "interface", key: "batting_arrow" },
  Gt = { path: "interface", key: "betting_background" },
  Et = { path: "interface", key: "betting_text_field" },
  Dt = { path: "interface", key: "bottom_bar" },
  Ft = {
    betButtonPush: Tt,
    betButton: At,
    bettingHideButton: kt,
    bettingShowButton: vt,
    callButtonPush: Bt,
    callButton: It,
    checkButtonPush: _t,
    checkButton: Lt,
    foldButtonPush: jt,
    foldButton: Rt,
    raiseButtonPush: Mt,
    raiseButton: Vt,
    battingArrow: Ot,
    bettingBackground: Gt,
    bettingTextField: Et,
    bottomBar: Dt,
  },
  Nt = { path: "loginScreen/background", key: "login_screen_background" },
  Ht = { path: "loginScreen/buttons", key: "login_button" },
  Wt = { path: "loginScreen/buttons", key: "login_button_push" },
  Ut = { loginScreenBackground: Nt, loginButton: Ht, loginButtonPush: Wt },
  Kt = { path: "registerScreen/background", key: "register_screen_background" },
  zt = { path: "registerScreen/buttons", key: "register_button" },
  Yt = { path: "registerScreen/buttons", key: "register_button_push" },
  Xt = { path: "registerScreen/buttons", key: "back_button" },
  $t = { path: "registerScreen/buttons", key: "back_button_push" },
  Jt = {
    registerScreenBackground: Kt,
    registerButton: zt,
    registerButtonPush: Yt,
    backButton: Xt,
    backButtonPush: $t,
  },
  Zt = [St, Ft, Ut, Jt],
  qt = {
    path: "game/cards",
    number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    color: ["d", "c", "h", "s"],
  },
  Qt = { key: "card_hidden" },
  pe = { cards: qt, hiddenCard: Qt },
  es = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class ts extends ce {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadImages(),
      await this.loadAllImages(),
      await this.loadCardImages(),
      U.afterLoadGameCallback();
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
    ];
    let t = e.length;
    for (let s = 0; s < t; s++) {
      let n = e[s],
        a = await ue.load(`assets/images/${n}.png`);
      W.addImage(n, a);
    }
  }
  loadAllImages() {
    Zt.forEach((e) => {
      Object.entries(e).forEach(([t, s]) => {
        this.loadImage(s);
      });
    });
  }
  async loadCardImages() {
    const { path: e, number: t, color: s } = pe.cards,
      n = pe.hiddenCard.key,
      a = t,
      o = s;
    for (let l = 0; l < o.length; l++) {
      const g = o[l];
      for (let m = 0; m < a.length; m++) {
        const b = g + a[m];
        await this.loadImage({ path: e, key: b });
      }
    }
    const h = n;
    await this.loadImage({ path: e, key: h });
  }
  async loadImage({ path: e, key: t }) {
    const { _path: s, extension: n } = es.images;
    let a = s + e + "/" + t + n,
      o = await ue.load(a);
    W.addImage(t, o);
  }
  handleStartNextScene() {}
}
const ss = new ts();
class is extends ce {
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
      t = new S(e);
    return this.addChild(t), t;
  }
  createFirstLayer() {
    const e = {
        textureKey: "background_first_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new S(e);
    return this.addChild(t), t;
  }
  createSecondLayer() {
    const e = {
        textureKey: "background_second_layer",
        x: 960,
        y: 540,
        isStatic: !1,
      },
      t = new S(e);
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
const ns = new is(),
  as = (r) => {
    oe.add(r),
      _.addScene([ss, ns, ot]),
      _.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = r);
  },
  J = 1920,
  Z = 1080,
  me = 1080,
  ye = 1920;
class ie {
  static resizeScreen(e, t) {
    this._isPortraitOrientation = se();
    const s = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, s), this.resizeGame(t, s);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / J, window.innerHeight / Z);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / ye, window.innerWidth / me);
  }
  static get isPortraitOrientation() {
    return this._isPortraitOrientation;
  }
  static resizeGame(e, t) {
    const s = (window.innerWidth - J * t) / 2,
      n = (window.innerHeight - Z * t) / 2;
    e.stage.position.set(s, n), e.stage.scale.set(t);
  }
  static resizeUI(e, t) {
    const s = this._isPortraitOrientation ? me : J,
      n = this._isPortraitOrientation ? ye : Z,
      a = (window.innerHeight - n * t) / 2,
      o = (window.innerWidth - s * t) / 2;
    e.resize({
      width: `${s}px`,
      height: `${n}px`,
      left: `${o}px`,
      top: `${a}px`,
      transform: `scale(${t})`,
    }),
      this.resizeUIElements(e, a, t);
  }
  static resizeUIElements(e, t, s) {
    const n = window.innerHeight / s;
    let a = 0,
      o = 0;
    this._isPortraitOrientation, (a = window.innerHeight * 0.03), (o = 50);
    const h = n - e.bottomBarHeight - t / s - a,
      l = -(t / s) + o;
    e.resizeBottomBar({ top: `${h}px` }), e.resizeTopBar({ top: `${l}px` });
  }
}
y(ie, "_isPortraitOrientation", se());
const rs = v.forwardRef((r, e) => {
    const t = d.useRef(null);
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
  os = { "Content-Type": "application/json", Accept: "application/json" },
  cs = (r, e) =>
    fetch(`${Ve}/${e}`, {
      method: "post",
      headers: os,
      body: JSON.stringify(r),
    }),
  ls = (r) => cs(r, "authentication"),
  ds = v.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      n = d.useRef(null),
      a = () => {
        t || (s(!0), T.handleLoadingPageVisible(!0), o());
      },
      o = async () => {
        const { success: l, jwt: g } = await h();
        l
          ? (await j.connectWithServer(),
            q.success("Success !"),
            re.set("authToken", g, { expires: 1 }),
            j.setupServerListeners(),
            T.handleLobbyPageVisible(!0),
            T.handleLoadingPageVisible(!1),
            T.handleLoginPageVisible(!1),
            s(!1))
          : (T.handleLoadingPageVisible(!1),
            q.error("Invalid login or password !"),
            s(!1));
      },
      h = async () => {
        const l = n.current.querySelector("#login").value,
          g = n.current.querySelector("#password").value,
          m = await (await ls({ username: l, password: g })).json(),
          { success: f, jwt: b } = m;
        return { success: f, jwt: b };
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
        i.jsx(be, {}),
      ],
    });
  }),
  hs = v.forwardRef((r, e) => {
    const t = d.useRef(null);
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
  fe = v.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      n = () => {
        s(!0);
      },
      a = () => {
        s(!1);
      },
      o = () => {
        r.onClick;
      },
      h = t ? r.hover : r.default;
    return i.jsx("div", {
      id: "texture-button",
      children: i.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: o,
        src: h,
        onMouseEnter: n,
        onMouseLeave: a,
        alt: "button",
      }),
    });
  }),
  us = v.forwardRef((r, e) =>
    i.jsx("button", {
      id: "close-button",
      onClick: r.onClick,
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
  gs = v.forwardRef((r, e) => {
    const {
        bigBlindValue: t,
        buyInMaxValue: s,
        buyInMinValue: n,
        smallBlingValue: a,
      } = r.data,
      o = r.availableChips,
      [h, l] = d.useState("buyInMin"),
      [g, m] = d.useState(5e3),
      [f, b] = d.useState(!1),
      x = d.useRef(null);
    f || u(),
      d.useEffect(() => {
        Y();
      }, []);
    function u() {
      b(!0),
        c.onGetPlayers.add((k) => A(k)),
        c.onAnnouncement.add((k) => {
          q.warning(k), T.handleLoadingPageVisible(!1);
        });
    }
    function A(k) {
      T.handleLobbyPageVisible(!1), w(), G.handleVisible(!0), U.startGame(k);
    }
    const w = () => {
        c.onGetPlayers.detachAll(), c.onAnnouncement.detachAll();
      },
      F = () => {
        w(), G.closeBuyInWindow();
      },
      B = () => {
        T.handleLoadingPageVisible(!0);
        const k = re.get("authToken");
        c.joinGame.dispatch({ authToken: k, buyInValue: g });
      },
      M = (k) => {
        l(k),
          k === "buyInMin" ? m(n) : k === "buyInMax" && m(s),
          console.log(s);
      },
      Y = () => {
        C.fromTo(
          x.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        );
      };
    return i.jsxs("div", {
      id: "buy-in-window-container",
      ref: x,
      children: [
        i.jsxs("div", {
          id: "buy-in-content",
          children: [
            i.jsx("div", {
              id: "title",
              children: i.jsx("h1", { children: "Select Buy In" }),
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
                          i.jsx("h1", { children: o.toLocaleString("en") }),
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
                        onClick: () => M("buyInMin"),
                        children: [n.toLocaleString("en"), " Chips"],
                      }),
                      i.jsxs("button", {
                        id:
                          h === "buyInMax"
                            ? "chips-button-active"
                            : "chips-button",
                        onClick: () => M("buyInMax"),
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
                      onClick: B,
                      children: "Confirm",
                    }),
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              id: "close-button-container",
              children: i.jsx(us, { onClick: F }),
            }),
          ],
        }),
        i.jsx(be, {}),
      ],
    });
  }),
  ps = v.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      [n, a] = d.useState(!1),
      [o, h] = d.useState({
        nickname: localStorage.getItem("nickname") || "",
        money: localStorage.getItem("money") || 0,
        profileImage:
          localStorage.getItem("profileImage") ||
          "assetsimagesgameavatardefault_avatar.png",
      }),
      [l, g] = d.useState({
        bigBlindValue: 0,
        buyInMaxValue: 0,
        buyInMinValue: 0,
        smallBlingValue: 0,
      }),
      m = d.useRef(null),
      f = d.useRef(null),
      b = d.useRef(null),
      x = d.useRef(null),
      u = d.useRef(null);
    t || A(),
      d.useEffect(() => {
        const I = re.get("authToken");
        c.getPlayerAndGameProfileInformation.dispatch(I), k();
      }, []);
    function A() {
      s(!0),
        c.onPlayerAndGameProfileInformation.add((I) => {
          h(I.playerInformation),
            g(I.gameInformation),
            G.update(I.playerInformation.money),
            localStorage.setItem("nickname", I.playerInformation.nickname),
            localStorage.setItem("money", I.playerInformation.money),
            localStorage.setItem(
              "profileImage",
              I.playerInformation.profileImage
            ),
            console.log(I);
        });
    }
    const w = (I) => {
        a(I);
      },
      F = () => {
        a(!0);
      },
      B = () => {
        c.onPlayerAndGameProfileInformation.detachAll();
      },
      M = () => {
        console.log("Claim CHips button CLicked");
      },
      Y = () => {
        console.log("Home button clicked");
      },
      k = () => {
        C.fromTo(
          f.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 0.6 }
        ),
          C.fromTo(
            b.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 0.5 }
          ),
          C.fromTo(
            u.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 0.6 }
          );
      };
    return (
      d.useImperativeHandle(e, () => ({
        removeListeners: B,
        handleBuyInWindowVisible: w,
      })),
      i.jsxs("div", {
        id: "lobby-container",
        ref: m,
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
                    children: i.jsxs("div", {
                      children: [
                        " ",
                        i.jsx("img", {
                          id: "home-button",
                          onClick: Y,
                          src: "\\TESTLIVE\\assets\\images\\home_button.png",
                          alt: "home-button",
                        }),
                      ],
                    }),
                  }),
                  i.jsxs("div", {
                    id: "profile-container",
                    children: [
                      i.jsx("img", {
                        id: "profile-image",
                        src: o.profileImage,
                        alt: "home-button",
                      }),
                      i.jsxs("div", {
                        id: "player-information-container",
                        children: [
                          i.jsx("h2", { children: o.nickname }),
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
                                children: o.money.toLocaleString("en"),
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
                ref: b,
                children: [
                  i.jsxs("div", {
                    id: "first-card-container",
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: "\\TESTLIVE\\assets\\images\\cash_games_label.png",
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "second-button",
                        children: "Quick Play",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: F,
                        children: "Show Rooms",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: "second-card-container",
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: "\\TESTLIVE\\assets\\images\\sit_n_go_label.png",
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: M,
                        children: "Join Now",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: "second-card-container",
                    children: [
                      i.jsx("img", {
                        id: "card",
                        src: "\\TESTLIVE\\assets\\images\\private_games_label.png",
                        alt: "card",
                      }),
                      i.jsx("button", {
                        id: "first-button",
                        onClick: M,
                        children: "Join Now",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    id: "double-card-container",
                    children: [
                      i.jsxs("div", {
                        id: "third-card-container",
                        children: [
                          i.jsx("img", {
                            id: "card",
                            src: "\\TESTLIVE\\assets\\images\\shop_label.png",
                            alt: "card",
                          }),
                          i.jsx("button", {
                            id: "first-button",
                            onClick: M,
                            children: "Open",
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "second-image",
                        id: "third-card-container",
                        children: [
                          i.jsx("img", {
                            id: "card",
                            src: "\\TESTLIVE\\assets\\images\\rankings_label.png",
                            alt: "card",
                          }),
                          i.jsx("button", {
                            id: "first-button",
                            onClick: M,
                            children: "Open",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("div", { id: "bottom-line", ref: x }),
              i.jsxs("div", {
                id: "claim-chips-container",
                ref: u,
                children: [
                  i.jsx(fe, {
                    id: "claim-chips-button",
                    hover:
                      "\\TESTLIVE\\assets\\images\\claim_chips_button_hover.png",
                    default:
                      "\\TESTLIVE\\assets\\images\\claim_chips_button.png",
                  }),
                  i.jsx(fe, {
                    id: "claim-chips-button",
                    hover:
                      "\\TESTLIVE\\assets\\images\\sunday_reward_button_hover.png",
                    default:
                      "\\TESTLIVE\\assets\\images\\sunday_reward_button.png",
                  }),
                ],
              }),
            ],
          }),
          n && i.jsx(gs, { data: l, availableChips: o.money }),
        ],
      })
    );
  });
v.forwardRef((r, e) => {
  const t = d.useRef(null);
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
const ms = v.forwardRef((r, e) => {
    const [t, s] = d.useState(!1),
      [n, a] = d.useState(!1),
      [o, h] = d.useState(!0),
      [l, g] = d.useState(!1),
      m = d.useRef(null),
      f = d.useRef(null),
      b = d.useRef(null),
      x = d.useRef(null);
    O.add("lobbyScreen", x);
    const u = (B) => {
        s(B);
      },
      A = (B) => {
        a(B);
      },
      w = (B) => {
        h(B);
      },
      F = (B) => {
        B === !1 && x.current.removeListeners(), g(B);
      };
    return (
      d.useImperativeHandle(e, () => ({
        handleLoadingPageVisible: u,
        handleLoginPageVisible: A,
        handleLoadingGameVisible: w,
        handleLobbyPageVisible: F,
      })),
      i.jsxs("div", {
        id: "pages",
        ref: e,
        children: [
          o && i.jsx(hs, { ref: b }),
          n && i.jsx(ds, { ref: f }),
          l && i.jsx(ps, { ref: x }),
          t && i.jsx(rs, { ref: m }),
        ],
      })
    );
  }),
  ne = v.forwardRef((r, e) => {
    const t =
        r.path ||
        "M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z",
      s = r.fill || "#FFF",
      n = r.width || "40px",
      a = r.height || "40px";
    return i.jsx("div", {
      id: "ui-svg-button-container",
      children: i.jsx("button", {
        id: "d",
        onClick: r.onClick,
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
  }),
  ys = v.forwardRef((r, e) => {
    const [t, s] = d.useState({ bottom: "0px", height: 100 }),
      n = d.useRef(null),
      a = () => {
        console.log("Sound Button Clicked");
      },
      o = () => {
        console.log("Info Button Clicked");
      },
      h = (b) => {
        s((x) => ({ ...x, ...b }));
      },
      l = () => t.height,
      g = () => {
        C.fromTo(
          n.current,
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
      i.jsx("div", {
        id: "bottom-bar",
        style: t,
        ref: n,
        children: i.jsxs("div", {
          id: "navi-buttons-container",
          children: [
            i.jsx("div", {
              id: "sound-button-container",
              children: i.jsx(ne, {
                width: "60px",
                height: "80px",
                path: "M15.0403 5.22915C15.3245 5.34698 15.5674 5.54641 15.7382 5.80225C15.909 6.05809 16.0002 6.35884 16.0001 6.66648V25.333C16 25.6406 15.9088 25.9413 15.7378 26.1971C15.5669 26.4528 15.324 26.6521 15.0398 26.7698C14.7556 26.8875 14.4429 26.9183 14.1412 26.8584C13.8395 26.7984 13.5623 26.6503 13.3448 26.4328L7.57837 20.6664H3.55573C3.14317 20.6664 2.74751 20.5025 2.45579 20.2108C2.16407 19.9191 2.00018 19.5234 2.00018 19.1108V12.8887C2.00018 12.4761 2.16407 12.0804 2.45579 11.7887C2.74751 11.497 3.14317 11.3331 3.55573 11.3331H7.57837L13.3448 5.5667C13.5623 5.34903 13.8395 5.20078 14.1413 5.14069C14.4431 5.0806 14.756 5.11139 15.0403 5.22915ZM23.2443 5.00049C23.536 4.70887 23.9316 4.54504 24.344 4.54504C24.7565 4.54504 25.1521 4.70887 25.4438 5.00049C28.2578 7.81291 30 11.7049 30 15.9982C30 20.2915 28.2578 24.185 25.4438 26.999C25.1504 27.2824 24.7575 27.4391 24.3496 27.4356C23.9418 27.4321 23.5516 27.2685 23.2632 26.9801C22.9748 26.6916 22.8112 26.3015 22.8077 25.8936C22.8041 25.4858 22.9609 25.0928 23.2443 24.7995C24.4018 23.6453 25.3197 22.2737 25.9452 20.7635C26.5707 19.2533 26.8914 17.6343 26.8889 15.9997C26.8889 12.562 25.4982 9.45401 23.2443 7.20003C22.9526 6.90832 22.7888 6.51273 22.7888 6.10026C22.7888 5.68778 22.9526 5.29219 23.2443 5.00049ZM18.8436 9.39957C18.9881 9.25494 19.1596 9.1402 19.3485 9.06192C19.5373 8.98364 19.7397 8.94335 19.9442 8.94335C20.1486 8.94335 20.351 8.98364 20.5399 9.06192C20.7287 9.1402 20.9003 9.25494 21.0447 9.39957C21.9125 10.2655 22.6007 11.2943 23.0697 12.427C23.5388 13.5596 23.7794 14.7738 23.7778 15.9997C23.7793 17.2257 23.5386 18.4398 23.0696 19.5725C22.6006 20.7051 21.9125 21.734 21.0447 22.5999C20.7528 22.8918 20.357 23.0558 19.9442 23.0558C19.5314 23.0558 19.1355 22.8918 18.8436 22.5999C18.5517 22.308 18.3878 21.9122 18.3878 21.4994C18.3878 21.0866 18.5517 20.6907 18.8436 20.3988C19.4226 19.822 19.8817 19.1364 20.1946 18.3814C20.5074 17.6264 20.6679 16.817 20.6667 15.9997C20.668 15.1825 20.5076 14.3731 20.1947 13.6181C19.8818 12.8631 19.4226 12.1774 18.8436 11.6007C18.699 11.4562 18.5843 11.2846 18.506 11.0958C18.4277 10.907 18.3874 10.7045 18.3874 10.5001C18.3874 10.2957 18.4277 10.0933 18.506 9.90443C18.5843 9.71559 18.699 9.54404 18.8436 9.39957Z",
                onClick: a,
              }),
            }),
            i.jsx("div", {
              id: "info-button-container",
              children: i.jsx(ne, {
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
  fs = v.forwardRef((r, e) => {
    const [t, s] = d.useState({}),
      n = d.useRef(null),
      a = () => {
        c.onBackButtonClick.dispatch(), T.handleLoadingPageVisible(!0);
      },
      o = () => {
        C.fromTo(
          n.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      h = (l) => {
        s((g) => ({ ...g, ...l }));
      };
    return (
      d.useImperativeHandle(e, () => ({ resize: h, startOpenTween: o })),
      i.jsx("div", {
        id: "top-bar",
        style: t,
        ref: n,
        children: i.jsx("div", {
          id: "back-button-container",
          children: i.jsx(ne, { onClick: a }),
        }),
      })
    );
  }),
  bs = d.forwardRef((r, e) => {
    const [t, s] = d.useState("chat"),
      n = (a) => {
        G.changeChannel(a), s(a);
      };
    return i.jsxs("div", {
      id: "buttons-container",
      children: [
        i.jsx("div", {
          id: "button-container",
          children: i.jsxs("button", {
            id: t === "chat" ? "label-button-active" : "label-button",
            onClick: () => n("chat"),
            children: [
              i.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: i.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              i.jsx("span", { children: "CHAT" }),
            ],
          }),
        }),
        i.jsx("div", {
          id: "button-container",
          children: i.jsxs("button", {
            id: t === "hands" ? "label-button-active" : "label-button",
            onClick: () => n("hands"),
            children: [
              i.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: i.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              i.jsx("span", { children: "HANDS" }),
            ],
          }),
        }),
        i.jsx("div", {
          id: "button-container",
          children: i.jsxs("button", {
            id: t === "table" ? "label-button-active" : "label-button",
            onClick: () => n("table"),
            children: [
              i.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "icon",
                viewBox: "0 0 50 50",
                width: "25",
                height: "25",
                children: i.jsx("path", {
                  d: "M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z",
                }),
              }),
              i.jsx("span", { children: "TABLE" }),
            ],
          }),
        }),
      ],
    });
  });
function xs(r) {
  const e = parseFloat(r.replace(/,/g, ""));
  return parseFloat(e);
}
const Cs = d.forwardRef((r, e) => {
    const [t, s] = d.useState(V(1e3));
    d.useState(V(1e3));
    const n = (l) => {
        const [g, m, f, b, x] = Pe,
          u = { action: "", data: 0 };
        if (l === g) (u.action = g), c.playerTurnAction.dispatch(u);
        else if (l === f) (u.action = f), c.playerTurnAction.dispatch(u);
        else if (l === b) {
          //! BET
          (u.action = "bet"), (u.data = xs(t)), c.playerTurnAction.dispatch(u);
        } else l === m && ((u.action = m), c.playerTurnAction.dispatch(u));
      },
      a = (l) => {},
      o = (l) => {
        const g = V(l.target.value);
        s(g);
      },
      h = (l) => {};
    return (
      d.useImperativeHandle(e, () => ({ update: h })),
      i.jsxs("div", {
        id: "betting-panel-container",
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
            id: "bet-slider-container",
            children: [
              i.jsx("input", {
                id: "bet-slider",
                type: "range",
                onChange: o,
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
                id: "fold-button",
                onClick: () => n("fold"),
                children: "Fold",
              }),
              i.jsx("button", {
                id: "check-button",
                onClick: () => n("check"),
                children: "Check",
              }),
              i.jsx("button", {
                id: "call-button",
                onClick: () => n("call"),
                children: "Call",
              }),
              i.jsx("button", {
                id: "raise-button",
                onClick: () => n("raise"),
                children: "Bet",
              }),
            ],
          }),
        ],
      })
    );
  }),
  Ps = d.forwardRef((r, e) => {
    const t = (s) => {
      //! WSZYSTKO GOTOWE. MOZESZ ZACZAC TWORZYĆ
      console.log(s);
    };
    return (
      d.useImperativeHandle(e, () => ({ changeChannel: t })),
      i.jsx("div", { id: "channels-container" })
    );
  }),
  ws = d.forwardRef((r, e) => {
    const [t, s] = d.useState(0),
      n = d.useRef(),
      a = d.useRef();
    O.add("channels", n);
    const o = (l) => {
        console.log(l), console.log("UI DATA"), s(l); //! ZUPDATOWAĆ CZIPY w balance danymi z servera
        //! OGARNAĆ WYSWIETLANIE LICZBY NA PRZYCISKU CALL / WYSŁAĆ Z SERVERA ILE DO CALL BRAKUJE
        //! OGarnąć check z servera aby zamieniało przyciski
      },
      h = () => {
        C.fromTo(
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
      i.jsx("div", {
        id: "middle-bar",
        children: i.jsxs("div", {
          id: "context-container",
          ref: a,
          children: [
            i.jsx(bs, {}),
            i.jsx(Ps, { ref: n }),
            i.jsx(Cs, {}),
            i.jsxs("div", {
              id: "balance-text-container",
              children: [
                i.jsx("h2", { children: "Balance" }),
                i.jsxs("h1", { children: [t.toLocaleString("en"), " Chips"] }),
              ],
            }),
          ],
        }),
      })
    );
  });
class Ss extends d.Component {
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
      O.add("middleBar", this.middleBarRef);
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
        display: o,
      } = this.state,
      h = { width: e, height: t, left: s, top: n, transform: a, display: o };
    return i.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: h,
      children: [
        i.jsx(fs, { ref: this.topBarRef }),
        i.jsx(ys, { ref: this.bottomBarRef }),
        i.jsx(ws, { ref: this.middleBarRef }),
      ],
    });
  }
}
const Ts = v.forwardRef((r, e) => i.jsx(Ss, { ref: e, ...r }));
function As() {
  const r = d.useRef(),
    e = d.useRef(null),
    t = d.useRef(null);
  return (
    d.useEffect(() => {
      const s = r.current,
        n = e.current,
        a = t.current;
      as(s),
        G.create(n),
        T.create(a),
        ie.resizeScreen(n, s),
        window.addEventListener("resize", () => ie.resizeScreen(n, s));
    }, []),
    i.jsxs("div", {
      id: "app",
      children: [
        i.jsx(Me, { ref: r }),
        i.jsx(Ts, { ref: e }),
        i.jsx(ms, { ref: t }),
      ],
    })
  );
}
Te.createRoot(document.getElementById("root")).render(i.jsx(As, {}));
