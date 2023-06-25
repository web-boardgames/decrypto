import { isServer } from "@/utils/isServer";
import { AtomEffect, atom } from "recoil";

// FIXME: type any

const store = isServer() ? null : window.localStorage;

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

export const userNicknameState = atom({
  key: "userNicknameState",
  default: "",
  effects: [localStorageEffect<string>("userNickname")],
});
