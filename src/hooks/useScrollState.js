import { EventDispatcher } from "@/libs/EventDispatcher";

const i = (e) => !!e && typeof e.top == "number" && typeof e.left == "number";

export class useScrollState {
  constructor() {
    this.eventEmitter = new EventDispatcher();
    this.containers = [];

    this.addContainer = (e) => {
      const { mode: t = "normal", element: n } = e;
      if (this.containers.find((e) => e.element === n)) {
        throw Error("Container already exists");
      }

      const r = {
        element: n,
        mode: t,
        locked: false,
        synthetic: false,
        rawPosition: { top: 0, left: 0 },
        scrollPosition: { top: 0, left: 0 },
        handler: () => {},
      };

      r.scrollPosition = this.getScrollPosition(r, true);
      r.rawPosition = this.getRawPosition(r, true);

      r.handler = (evt) => {
        this.onScroll(r, evt);
      };

      this.containers.push(r);
      n.addEventListener("scroll", r.handler, { passive: false });
    };

    this.setContainer = (e) => {
      const { mode: t, synthetic: n, locked: r, element: i } = e;
      const s = this.containers.find((e) => e.element === i);
      if (s) {
        if (t !== undefined) {
          s.mode = t;
          if (t === "smooth") {
            s.element.removeEventListener("scroll", s.handler);
          } else if (t === "normal") {
            s.element.addEventListener("scroll", s.handler, { passive: false });
          }
        }

        if (n !== undefined) s.synthetic = n;
        if (r !== undefined) s.locked = r;
      } else {
        throw Error("Container doesn't exist");
      }
    };

    this.setSynthetic = (e) => {
      const { element: t, synthetic: n } = e;
      const r = this.containers.find((e) => e.element === (t || window));
      if (r) {
        r.synthetic = n;
      } else {
        throw Error("Container doesn't exist");
      }
    };

    this.onScroll = (e, t) => {
      const n = { ...e.scrollPosition };
      const r = { ...e.rawPosition };

      if (t && e.mode === "smooth" && i(t.detail)) {
        e.scrollPosition.top = t.detail.top;
        e.scrollPosition.left = t.detail.left;
      } else {
        e.scrollPosition = this.getScrollPosition(e);
      }

      e.rawPosition = this.getRawPosition(e);

      if (
        Math.abs(e.scrollPosition.left - n.left) >= 0.01 ||
        Math.abs(e.scrollPosition.top - n.top) >= 0.01 ||
        Math.abs(e.rawPosition.left - r.left) >= 0.01 ||
        Math.abs(e.rawPosition.top - r.top) >= 0.01
      ) {
        this.eventEmitter.dispatch({ type: "scroll" });
      }
    };

    this.getRawPosition = function (e, t = false) {
      if (t) {
        return {
          top: e.element.scrollTop || 0,
          left: e.element.scrollLeft || 0,
        };
      }

      if (e.locked && e.element === window) {
        return e.rawPosition;
      }

      if (e.element === window) {
        return { top: window.scrollY || 0, left: window.scrollX || 0 };
      }

      return { top: e.element.scrollTop || 0, left: e.element.scrollLeft || 0 };
    };

    this.getScrollPosition = function (t, n = false) {
      if (n) return this.getRawPosition(t, n);
      if (t.locked && t.element === window) return t.scrollPosition;
      return this.getRawPosition(t, n);
    };

    this.get = () => {
      const c = this.containers[0];
      return {
        locked: c?.locked,
        synthetic: c?.synthetic,
        mode: c?.mode,
        left: c?.scrollPosition.left,
        top: c?.scrollPosition.top,
        rawLeft: c?.rawPosition.left,
        rawTop: c?.rawPosition.top,
      };
    };

    this.getContainer = (e) => {
      const t = this.containers.find((t) => t.element === e);
      if (!t) throw Error("Container doesn't exist");
      return t;
    };

    this.subscribe = (e) => this.eventEmitter.subscribe(e);
    this.unsubscribe = (e) => this.eventEmitter.unsubscribe(e);

    // Only attach to window if it exists (i.e., on client)
    if (typeof window !== "undefined") {
      this.addContainer({ mode: "normal", element: window });
    }
  }
}

// Only instantiate on client
export const scrollExporter =
  typeof window !== "undefined" ? new useScrollState() : null;
