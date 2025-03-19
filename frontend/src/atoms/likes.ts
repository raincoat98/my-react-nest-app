import { atom } from "jotai";
import api from "../api/axios";

export const likesAtom = atom<number>(0);
export const refreshLikesAtom = atom(null, async (_get, set) => {
  try {
    const response = await api.get("/likes");
    const count = response.data;
    set(likesAtom, count);
  } catch (error) {
    console.error("좋아요 수를 가져오는데 실패했습니다:", error);
  }
});
