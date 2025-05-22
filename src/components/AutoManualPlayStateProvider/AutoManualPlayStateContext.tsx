import { useContext } from "react";
import { createContext } from "react";

import { GAME_MODE } from "../../types/gameMode";
import { PlayControllerProps } from "../../types/playController";

export interface AutoManualPlayStateContextType {
  mode: GAME_MODE;
  config: PlayControllerProps;
}

export const AutoManualPlayStateContext = createContext<
  AutoManualPlayStateContextType | undefined
>(undefined);

export const useAutoManualPlayState = () => {
  const context = useContext(AutoManualPlayStateContext);
  if (!context) {
    throw new Error(
      "useAutoManualPlayStateState must be used within a AutoManualPlayStateProvider",
    );
  }
  return context;
};
