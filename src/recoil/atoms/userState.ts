import { AtomEffect, atom } from "recoil";

// FIXME: type any

const store = typeof window !== "undefined" ? window.localStorage : null;

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = store?.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? store?.removeItem(key)
        : store?.setItem(key, JSON.stringify(newValue));
    });
  };

export const userIdState = atom({
  key: "userIdState",
  default: "",
  effects: [localStorageEffect<string>("userId")],
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
  effects: [localStorageEffect<string>("userName")],
});
