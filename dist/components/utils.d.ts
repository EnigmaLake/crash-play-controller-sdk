import { GAME_MODE } from "../types";
import { PlaySide } from "../types/playController";
export declare const hexToRgb: (hex: string) => string | null;
export declare const selectButton: (gameMode: GAME_MODE, side?: PlaySide) => HTMLButtonElement;
export declare const addPressedClass: (gameMode: GAME_MODE, activeClassName: string, side?: PlaySide) => void;
export declare const removePressedClass: (gameMode: GAME_MODE, activeClassName: string, side?: PlaySide) => void;
