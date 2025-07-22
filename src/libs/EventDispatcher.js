export class EventDispatcher {
  constructor() {
    this.handlers = [];
    this.pendingHandlers = [];
    this.frozen = 0;
  }

  dispatch(event) {
    Object.freeze(event);
    this.frozen++;

    for (const handler of this.handlers) {
      handler(event);
    }

    this.frozen--;

    if (this.frozen === 0) {
      for (const { pending, handler } of this.pendingHandlers) {
        if (pending === "add") {
          this.subscribe(handler);
        } else if (pending === "remove") {
          this.unsubscribe(handler);
        }
      }
      this.pendingHandlers = [];
    }
  }

  subscribe(handler) {
    if (this.frozen > 0) {
      this.pendingHandlers.push({ pending: "add", handler });
      return;
    }

    if (this.handlers.includes(handler)) {
      console.log(handler);
      throw new Error("Handler was already subscribed");
    }

    this.handlers.push(handler);
  }

  unsubscribe(handler) {
    if (this.frozen > 0) {
      this.pendingHandlers.push({ pending: "remove", handler });
      return;
    }

    const index = this.handlers.indexOf(handler);
    if (index === -1) {
      console.log(handler);
      throw new Error("Handler was never subscribed");
    }

    this.handlers.splice(index, 1);
  }
}
