import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import Input from "../Input/Input";
import styles from "./MiniInputWithIcon.module.scss";
const MiniInputWithIcon = ({ children, disabled, currency, label, className, ...restProps }) => {
    return (_jsxs("div", { className: cx(styles.base, className), children: [_jsx("span", { className: cx(styles.label, styles[currency]), children: label }), _jsxs("div", { className: cx(styles.inputGroup), children: [children && _jsx("div", { className: cx(styles.icon), children: children }), _jsx(Input, { ...restProps, className: cx(styles.input, {
                            [styles.inputWithLabel]: label !== undefined,
                        }), disabled: disabled })] })] }));
};
export default MiniInputWithIcon;
//# sourceMappingURL=MiniInputWithIcon.js.map