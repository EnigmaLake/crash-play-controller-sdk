import React from "react";
import { GAME_MODE } from "../../../types";
declare const themes: {
    primary: string;
    success: string;
    ghost: string;
};
type Props = React.ComponentProps<"button"> & {
    theme?: (typeof themes)[keyof typeof themes];
    roleType?: GAME_MODE;
    className?: string;
};
declare const Button: {
    ({ disabled, roleType, className, theme, ...props }: Props): import("react/jsx-runtime").JSX.Element;
    themes: {
        primary: string;
        success: string;
        ghost: string;
    };
};
export default Button;
