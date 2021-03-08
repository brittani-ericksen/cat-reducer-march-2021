import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "./actionTypes";

export const actionNapping = () => {
    return {
        type: ACTION_NAP
    }
}

export const actionEating = () => {
    return {
        type: ACTION_EAT
    }
}

export const actionPlaying = () => {
    return {
        type: ACTION_PLAY
    }
}