import { EventDispatcher } from "./EventDispatcher";

class ResizeObserverManager {
  constructor() {
    this.eventEmitter = new EventDispatcher();
    this.width = 0;
    this.height = 0;

    this.onResize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.eventEmitter.dispatch({
        type: "resize",
      });
    };

    this.get = () => ({
      width: this.width,
      height: this.height,
    });

    this.subscribe = (e) => this.eventEmitter.subscribe(e);
    this.unsubscribe = (e) => this.eventEmitter.unsubscribe(e);

    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("orientationchange", this.onResize, { passive: true });
    window.addEventListener("load", this.onResize, { passive: true });

    this.onResize();
  }
}

let screenSizeObserver = null;

if (typeof window !== "undefined") {
  screenSizeObserver = new ResizeObserverManager();
}

export { screenSizeObserver };
