import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfo = atom({
  key: "userInfo",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
