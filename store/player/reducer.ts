import { UserData } from "interfaces";
import { AnyAction } from "redux";
import { actionTypes } from "./action";

export const playerState: UserData | null = null;

const reducer = (state = playerState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYER_SUCCESS: {
      return { ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
