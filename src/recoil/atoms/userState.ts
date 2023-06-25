import { atom } from "recoil";

// FIXME: type any

const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (value: any) => void;
    onSet: (
      callback: (newValue: any, oldValue: any, isReset: boolean) => void
    ) => void;
  }) => {
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

export const userIdState = atom<string>({
  key: "userIdState",
  default: "",
  effects: [localStorageEffect("userId")],
});

export const userNameState = atom<string>({
  key: "userNameState",
  default: "",
  effects: [localStorageEffect("userName")],
});
