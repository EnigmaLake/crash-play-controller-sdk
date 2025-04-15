import { ComponentProps, PropsWithChildren } from "react";
import { Currency } from "@enigma-lake/zoot-platform-sdk";
export type Props = PropsWithChildren<ComponentProps<"input">> & {
    currency: Currency;
    label?: string;
    max?: number;
    noBorderRadiuses?: boolean;
};
declare const MiniInputWithIcon: ({ children, disabled, currency, label, className, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default MiniInputWithIcon;
