import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import { sendSetUserCurrencyEvent, } from "@enigma-lake/zoot-platform-sdk";
import Button from "../Button";
import MiniInputWithIcon from "../MiniInputWithIcon";
import SelectMenu from "../SelectMenu";
import { PLAY_HALVE, PLAY_DOUBLE } from "../../../types/playController";
import styles_group from "./MiniPlayAmountController.module.scss";
const MiniPlayAmountControl = ({ playAmount, minPlayAmount, maxPlayAmount, isDisabled, adjustPlayAmount, onChangeAmount, onBlurAmount, currentCurrency, currencies, disableInput, }) => {
    return (_jsxs("div", { className: cx(styles_group.base), children: [_jsxs("div", { className: cx(styles_group.group), children: [_jsx(Button, { className: styles_group.groupItem, onClick: () => adjustPlayAmount(PLAY_HALVE), theme: "ghost", disabled: isDisabled(), children: _jsx("span", { className: cx(styles_group.x2, styles_group.first), children: "-" }) }), _jsx(Button, { className: styles_group.groupItem, onClick: () => adjustPlayAmount(PLAY_DOUBLE), theme: "ghost", disabled: isDisabled(), children: _jsx("span", { className: cx(styles_group.x2, styles_group.last), children: "+" }) })] }), _jsx(MiniInputWithIcon, { className: styles_group.groupItem, value: playAmount, type: "number", onChange: onChangeAmount, onBlur: onBlurAmount, placeholder: minPlayAmount.toString(), max: maxPlayAmount, min: minPlayAmount, disabled: isDisabled() || disableInput, currency: currentCurrency, label: "Play Amount", children: _jsx(SelectMenu, { currencies: currencies, selectedCurrency: currentCurrency, setSelectedCurrency: sendSetUserCurrencyEvent, disabled: isDisabled() }) })] }));
};
export default MiniPlayAmountControl;
//# sourceMappingURL=MiniPlayAmountControl.js.map