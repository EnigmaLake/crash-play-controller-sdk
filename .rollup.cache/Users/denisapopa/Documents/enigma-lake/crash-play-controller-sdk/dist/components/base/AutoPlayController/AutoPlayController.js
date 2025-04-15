import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Currency } from "@enigma-lake/zoot-platform-sdk";
import { usePlayController } from "../../hooks/usePlayController";
import { AUTO_PLAY_STATE, GAME_MODE } from "../../../types";
import PlayAmountControl from "../PlayController/PlayController";
import Button from "../Button";
import styles_button from "../Button/Button.module.scss";
import { PlaySide } from "../../../types/playController";
import { useCallback, useEffect, useMemo } from "react";
import { selectButton, addPressedClass, removePressedClass } from "../../utils";
const AutoPlayController = ({ side = PlaySide.LEFT }) => {
    const { currentCurrency, currencies, playAmount, minPlayAmount, maxPlayAmount, isValidPlayAmount, adjustPlayAmount, onChangeAmount, onBlurAmount, playOptions, autoPlay: { isDisabled, state, onPlay, onStopPlay }, } = usePlayController(side);
    const roleButton = GAME_MODE.AUTOPLAY;
    const activeClassName = useMemo(() => {
        const baseClass = currentCurrency === Currency.GOLD
            ? styles_button.buttonGold__active
            : styles_button.buttonSweeps__active;
        return baseClass;
    }, [currentCurrency]);
    const getClassName = useMemo(() => {
        if (state === AUTO_PLAY_STATE.PLAYING) {
            return styles_button.buttonCashout;
        }
        return currentCurrency === Currency.GOLD
            ? styles_button.buttonGold
            : styles_button.buttonSweeps;
    }, [currentCurrency, state]);
    const handleKeyPress = useCallback((event) => {
        if (event.code !== "Space") {
            return;
        }
        const button = selectButton(roleButton);
        if (!button) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const canTrigger = !isDisabled() || state === AUTO_PLAY_STATE.PLAYING;
        if (canTrigger) {
            addPressedClass(roleButton, activeClassName, side);
            button.click();
        }
    }, [activeClassName, isDisabled, roleButton, state, side]);
    const handleKeyUp = useCallback((event) => {
        if (event.code !== "Space") {
            return;
        }
        const button = selectButton(roleButton);
        if (!button) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        removePressedClass(roleButton, activeClassName, side);
    }, [activeClassName, roleButton, side]);
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress, true);
        window.addEventListener("keyup", handleKeyUp, true);
        return () => {
            window.removeEventListener("keydown", handleKeyPress, true);
            window.removeEventListener("keyup", handleKeyUp, true);
        };
    }, [handleKeyPress, handleKeyUp]);
    const isButtonDisabled = state === AUTO_PLAY_STATE.PLAYING
        ? false
        : isDisabled() || !isValidPlayAmount;
    const buttonLabel = state === AUTO_PLAY_STATE.PLAYING ? "Stop Autoplay" : "Start Autoplay";
    const buttonAction = state === AUTO_PLAY_STATE.PLAYING ? onStopPlay : onPlay;
    return (_jsxs(_Fragment, { children: [_jsx(PlayAmountControl, { playAmount: playAmount, minPlayAmount: minPlayAmount, maxPlayAmount: maxPlayAmount, isDisabled: isDisabled, adjustPlayAmount: adjustPlayAmount, onChangeAmount: onChangeAmount, onBlurAmount: onBlurAmount, currentCurrency: currentCurrency, currencies: currencies, disableInput: playOptions.disableInput }), _jsx(Button, { disabled: isButtonDisabled, className: getClassName, onClick: () => buttonAction(side), roleType: roleButton, children: buttonLabel })] }));
};
export default AutoPlayController;
//# sourceMappingURL=AutoPlayController.js.map