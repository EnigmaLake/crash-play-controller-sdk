import cx from "classnames";
import { sendSetUserCurrencyEvent } from "@enigma-lake/zoot-platform-sdk";

import Button from "../Button";
import MiniInputWithIcon from "../MiniInputWithIcon";
import SelectMenu from "../SelectMenu";
import { PlaySide } from "../../../types/playController";

import styles_group from "./MiniPlayAmountController.module.scss";
import { useAutoManualPlayState } from "../../AutoManualPlayStateProvider/AutoManualPlayStateContext";
import { useEffect, useState } from "react";

const MiniPlayAmountControl = ({ side }: { side: PlaySide }) => {
  const playControllerContext = useAutoManualPlayState();

  const {
    currencyOptions: { currentCurrency, currencies },
    playOptions: { playHook, playLimits },
  } = playControllerContext.config;
  const config = playHook(side);
  const [newPlayAmount, setNewPlayAmount] = useState<string>(
    config.playAmount.toString(),
  );
  const formDisabled = config.formDisabled;

  const handleOnDouble = () => {
    const result = config.onDouble(side);
    setNewPlayAmount(result.toString());
  };

  const handleOnHalf = () => {
    const result = config.onHalf(side);
    setNewPlayAmount(result.toString());
  };

  const handleOnBlur = (newValue: string) => {
    const result = config.onBlur(newValue, side);
    setNewPlayAmount(result.toString());
    return result;
  };

  useEffect(() => {
    const defaultAmount = playLimits[currentCurrency].limits.min;
    setNewPlayAmount(defaultAmount.toString());
  }, [currentCurrency, playLimits]);

  return (
    <div className={cx(styles_group.base)}>
      <div className={cx(styles_group.group)}>
        <Button
          className={styles_group.groupItem}
          onClick={() => handleOnHalf()}
          theme="ghost"
          disabled={formDisabled}
        >
          <span className={cx(styles_group.x2, styles_group.first)}>-</span>
        </Button>
        <Button
          className={styles_group.groupItem}
          onClick={() => handleOnDouble()}
          theme="ghost"
          disabled={formDisabled}
        >
          <span className={cx(styles_group.x2, styles_group.last)}>+</span>
        </Button>
      </div>
      <MiniInputWithIcon
        className={styles_group.groupItem}
        value={newPlayAmount}
        type="number"
        onChange={(event) => setNewPlayAmount(event.currentTarget.value)}
        onBlur={(event) => {
          const newValue = event.currentTarget.value;
          const result = handleOnBlur(newValue);
          if (result !== Number(newValue)) {
            setNewPlayAmount(result.toFixed(2));
          }
        }}
        placeholder={playLimits[currentCurrency].limits.min.toString()}
        max={playLimits[currentCurrency].limits.max}
        min={playLimits[currentCurrency].limits.min}
        disabled={formDisabled}
        currency={currentCurrency}
        label="Play Amount"
      >
        <SelectMenu
          currencies={currencies}
          selectedCurrency={currentCurrency}
          setSelectedCurrency={sendSetUserCurrencyEvent}
          disabled={formDisabled}
          side={side}
        />
      </MiniInputWithIcon>
    </div>
  );
};

export default MiniPlayAmountControl;
