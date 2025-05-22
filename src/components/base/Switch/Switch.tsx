import { Switch as HeadlessSwitch } from "@headlessui/react";
import { Fragment, useMemo, useEffect } from "react";
import cx from "classnames";
import { Currency } from "@enigma-lake/zoot-platform-sdk";

import styles from "./Switch.module.scss";
import { useAutoManualPlayState } from "../../AutoManualPlayStateProvider/AutoManualPlayStateContext";
import { PlaySide } from "../../../types/playController";

interface SwitchProps {
  enabled: boolean;
  onSwitch: () => void;
  isPlaying: boolean;
  currency: Currency;
  disabled: boolean;
  side: PlaySide;
}

export const Switch = ({
  enabled,
  onSwitch,
  disabled,
  currency,
  isPlaying,
  side,
}: SwitchProps) => {
  const playControllerContext = useAutoManualPlayState();
  const {
    playOptions: { playHook },
  } = playControllerContext.config;
  const { disabledCurrencySwitcher } = playHook(side);

  const switcherClassName = useMemo(
    () =>
      cx(styles.switcher, styles[currency], {
        [styles.checked]: enabled,
        [styles.unchecked]: !enabled,
        [styles.disabled]: disabled || disabledCurrencySwitcher,
      }),
    [currency, enabled, disabled, disabledCurrencySwitcher],
  );

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const focusedElement = document.activeElement as HTMLElement;
      if (
        event.code === "Space" &&
        focusedElement?.getAttribute("role") === "switch"
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        focusedElement.blur();
      }
    };

    // Attach global event listener
    window.addEventListener("keydown", handleGlobalKeyDown, true);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown, true);
    };
  }, []);

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={onSwitch}
      as={Fragment}
      disabled={isPlaying}
    >
      <div className={styles.base}>
        <span className={styles.label}>Auto</span>
        <div className={switcherClassName}>
          <span
            className={cx(styles.thumb, { [styles["move-right"]]: enabled })}
          />
        </div>
      </div>
    </HeadlessSwitch>
  );
};
