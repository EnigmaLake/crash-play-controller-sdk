import { Button, Input, InputWithIcon, GroupRow, SelectMenu } from "./base";
import AutoManualPlayProvider from "./AutoManualPlayStateProvider";

import { GAME_MODE, AUTO_PLAY_STATE } from "../types/gameMode";

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

export {
  Button,
  InputWithIcon,
  GroupRow,
  Input,
  SelectMenu,
  AutoManualPlayProvider,
  GAME_MODE,
  AUTO_PLAY_STATE,
};
