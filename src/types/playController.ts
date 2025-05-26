import { Currency, PlayLimits } from "@enigma-lake/zoot-platform-sdk";

export type StylingProps = {
  panel: {
    bottom: string;
    bgColorHex: string;
  };
  dropdown: {
    bgColorHex: string;
  }
};

export type CurrencyProps = {
  currentCurrency: Currency;
  currencies: Currency[];
};

type PlayHookType = {
  onHalf: (side: PlaySide) => number;
  onDouble: (side: PlaySide) => number;
  onBlur: (newValue: string, side: PlaySide) => number;
  playAmount: number;
  renderActionButton: () => {
    type:
    | "cashout"
    | "cancel"
    | "cancel-next"
    | "play-next"
    | "play"
    | "waiting";
    element: React.ReactElement;
  };
  disabledCurrencySwitcher: boolean;
  formDisabled: boolean;
};
export type PlaySettingsProps = {
  playLimits: PlayLimits;
  playHook: (side: PlaySide) => PlayHookType;
};

export type PlayControllerProps = StylingProps & {
  currencyOptions: CurrencyProps;
  playOptions: PlaySettingsProps;
};

export enum PlaySide {
  LEFT = "left",
  RIGHT = "right",
}
