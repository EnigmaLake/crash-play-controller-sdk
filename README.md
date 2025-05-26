# MultiPlayController

The `MultiPlayController` component provides a responsive and configurable interface for managing left and right side game interactions. It supports play amount adjustment, multi-currency handling, and customizable styling, all powered through a React Context Provider.

---

## ✨ Features

- Dual-sided manual play (Left / Right).
- Multi-currency selection with real-time switching.
- Dynamic play amount controls (half/double).
- Context-driven configuration and state.
- Customizable UI panel position and background.

---

## 🛠️ Installation

```bash
npm install @enigma-lake/crash-play-controller-sdk
```

---

## 🔗 Usage

### 1. Import Styles and Provider

```tsx
import "@enigma-lake/crash-play-controller-sdk/dist/style.css";
import { AutoManualPlayProvider } from "@enigma-lake/crash-play-controller-sdk";
```

### 2. Wrap Your App or Game Component

```tsx
import { AutoManualPlayProvider } from "@enigma-lake/crash-play-controller-sdk";
import { Currency } from "@enigma-lake/zoot-platform-sdk";

const GameExample = () => {
  const config = {
    currencyOptions: {
      currentCurrency: Currency.SWEEPS,
      currencies: [Currency.SWEEPS, Currency.GOLD],
    },
    playOptions: {
      playLimits: {
        [Currency.SWEEPS]: { limits: { min: 1, max: 100 } },
        [Currency.GOLD]: { limits: { min: 5, max: 200 } },
      },
      playHook: (side) => ({
        playAmount: 10,
        onHalf: () => 5,
        onDouble: () => 20,
        onBlur: (value) => Number(value),
        renderActionButton: () => ({
          type: "play",
          element: <button>Play</button>,
        }),
        formDisabled: false,
        disabledCurrencySwitcher: false,
      }),
    },
    panel: {
      bottom: "70px",
      bgColorHex: "#08643F",
    },
  };

  return (
    <AutoManualPlayProvider config={config}>
      {/* Render controller UI here */}
    </AutoManualPlayProvider>
  );
};
```

---

## 📆 Props Reference

### StylingProps

```ts
type StylingProps = {
  panel: {
    bottom: string;
    bgColorHex: string;
  };
};
```

### CurrencyProps

```ts
type CurrencyProps = {
  currentCurrency: Currency;
  currencies: Currency[];
};
```

### PlaySettingsProps

```ts
type PlaySettingsProps = {
  playLimits: PlayLimits;
  playHook: (side: PlaySide) => PlayHookType;
};
```

### PlayHookType

```ts
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
```

---

## 🛏️ UI Structure

The `MultiPlayController` renders:

- Two instances of `MiniPlayAmountControl` (one for each side: LEFT, RIGHT).
- Controls for:

  - Doubling/Halving play amount
  - Selecting currency
  - Typing custom amount
  - Action button (e.g., Play / Cashout)

---

## 💰 Currency Behavior

- Currency selection is synced between both sides.
- On change:

  - Play amount resets based on currency limits.
  - Any queued bets are cleared to ensure consistency.

---

## 🎨 Custom Styling

Use the `panel` prop to customize the floating controller position and background.

```ts
panel: {
  bottom: "55px",
  bgColorHex: "#123456"
}
```

---

## 🖊️ Development Notes

- All play amount updates are clamped to limits.
- The form is disabled when a play is active.
- Built with SCSS modules and utility class merging (`classnames`).
- Requires `AutoManualPlayProvider` for context to function.

---
