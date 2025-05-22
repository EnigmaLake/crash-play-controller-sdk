import cx from "classnames";

import MiniPlayAmountControl from "../PlayController/MiniPlayAmountControl";
import styles_group from "./ManualPlayController.module.scss";
import { PlaySide } from "../../../types/playController";
import { useAutoManualPlayState } from "../../AutoManualPlayStateProvider/AutoManualPlayStateContext";
import style_button from "../Button/Button.module.scss";
import React, { useEffect } from "react";

const ManualPlayController = ({
  side = PlaySide.LEFT,
}: {
  side?: PlaySide;
}) => {
  const playControllerContext = useAutoManualPlayState();
  const {
    currencyOptions: { currentCurrency },
    playOptions: { playHook },
  } = playControllerContext.config;

  const config = playHook(side);
  const { type, element } = config.renderActionButton() as {
    type: string;
    element: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  };

  useEffect(() => {
    const thisElement = document.getElementById(
      `${type}-${side}-${currentCurrency}`,
    );

    if (thisElement) {
      thisElement.className = "";
      const newClassName = cx(
        style_button.base,
        style_button[`base__theme-primary`],
        style_button[`${type}_${currentCurrency}`],
      );
      thisElement.classList.add(...newClassName.split(" "));
    }
  }, [type, side, currentCurrency, config.formDisabled]);

  return (
    <div className={cx(styles_group.base)}>
      <MiniPlayAmountControl side={side} />
      {element}
    </div>
  );
};

export default ManualPlayController;
