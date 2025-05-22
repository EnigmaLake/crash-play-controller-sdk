import { ReactElement, useMemo } from "react";
import cx from "classnames";

import { GAME_MODE } from "../../types/gameMode";
import { PlayControllerProps } from "../../types/playController";

import ManualMultiPlayController from "../base/ManualMultiPlayController";

import styles_ui from "./UI.module.scss";
import {
  AutoManualPlayStateContext,
  AutoManualPlayStateContextType,
} from "./AutoManualPlayStateContext";
import { hexToRgb } from "../utils";

interface AutoManualPlayStateProviderProps {
  children:
    | React.ReactNode
    | ((state: AutoManualPlayStateContextType) => ReactElement);
  config: PlayControllerProps;
}

const AutoManualPlayProvider: React.FC<AutoManualPlayStateProviderProps> = ({
  children,
  config,
}) => {
  const contextValue = useMemo(
    () => ({
      mode: GAME_MODE.MANUAL,
      config,
    }),
    [config],
  );

  return (
    <AutoManualPlayStateContext.Provider value={contextValue}>
      {typeof children === "function" ? children(contextValue) : children}

      <div
        className={cx(styles_ui.base, styles_ui.betForm, {
          [styles_ui.multiPlayController]: true,
        })}
        style={
          {
            "--play-bottom": config.panel.bottom,
            "--play-panel-bg": hexToRgb(config.panel.bgColorHex ?? "#01243A"),
          } as React.CSSProperties
        }
      >
        <ManualMultiPlayController />
      </div>
    </AutoManualPlayStateContext.Provider>
  );
};

export default AutoManualPlayProvider;
