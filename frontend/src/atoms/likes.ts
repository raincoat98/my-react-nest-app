import { atom } from "jotai";

export const likesAtom = atom<number>(0);
export const refreshLikesAtom = atom(null, async (get, set) => {
  try {
    const response = await fetch("http://localhost:3000/likes");
    const count = await response.json();
    set(likesAtom, count);
  } catch (error) {
    console.error("좋아요 수를 가져오는데 실패했습니다:", error);
  }
});
