import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import ManualPlayController from "../ManualPlayController";
import style_multi from "./ManualMultiPlayController.module.scss";
import { PlaySide } from "../../../types/playController";
const ManualMultiPlayController = ({ lastPlayedSide, }) => {
    return (_jsxs("div", { className: cx(style_multi.base), children: [_jsx(ManualPlayController, { side: PlaySide.LEFT, lastPlayedSide: lastPlayedSide }), _jsx(ManualPlayController, { side: PlaySide.RIGHT, lastPlayedSide: lastPlayedSide })] }));
};
export default ManualMultiPlayController;
//# sourceMappingURL=ManualMultiPlayController.js.map