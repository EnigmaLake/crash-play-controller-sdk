import { AUTO_PLAY_STATE } from "../../types";
import { PlaySide } from "../../types/playController";
import { ChangeEvent, FocusEvent } from "react";
export declare const usePlayController: (side: PlaySide) => {
    currentCurrency: import("@enigma-lake/zoot-platform-sdk").Currency;
    currencies: import("@enigma-lake/zoot-platform-sdk").Currency[];
    playAmount: number;
    minPlayAmount: number;
    maxPlayAmount: number;
    setPlayAmount: (value: number) => void;
    adjustPlayAmount: (multiplier: number) => void;
    onChangeAmount: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlurAmount: (event: FocusEvent<HTMLInputElement>) => void;
    playOptions: import("../../types/playController").PlaySettingsProps;
    isValidPlayAmount: boolean;
    mode: import("../../types").GAME_MODE;
    lastPlayedSide: PlaySide;
    manualPlay: {
        isDisabled: () => boolean;
        onPlay: (playSide: PlaySide) => void;
        canCashout: boolean;
    };
    autoPlay: {
        isDisabled: () => boolean;
        state: AUTO_PLAY_STATE;
        onPlay: (playSide: PlaySide) => void;
        onStopPlay: () => void;
    };
};
