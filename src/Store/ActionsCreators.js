import {PLAY_SOUND,CLEAN_STATE,DISPLAY_TEXT} from './Actions'

export const playSound = (keyCode) => {
    return {
        type: PLAY_SOUND,
        keyCode
    }
}

export const cleanState = () => {
    return {
        type: CLEAN_STATE
    }
}

export const displayText = (text) => {
    return {
        type: DISPLAY_TEXT,
        text
    }
}