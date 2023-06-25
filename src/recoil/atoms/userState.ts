import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const userIdState = atom({
  key: "userIdState",
  default: "",
  effects: [localStorageEffect("userId")],
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
  effects: [localStorageEffect("userName")],
});
