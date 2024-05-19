import cls from "cls-hooked";
import { v4 as uuidv4 } from "uuid";


const store = cls.createNamespace("correlationId");

const CORRELATION_ID_KEY = "correlationId";

function withId(fn: any, id: any) {
  store.run(() => {
    store.set(CORRELATION_ID_KEY, id || uuidv4());
    fn();
  });
}

function getId() {
  return store.get(CORRELATION_ID_KEY);
}

export const contextManager = {
  withId,
  getId,
  bindEmitter: store.bindEmitter.bind(store),
  bind: store.bind.bind(store),
}