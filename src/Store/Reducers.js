import {PLAY_SOUND,CLEAN_STATE,DISPLAY_TEXT} from './Actions'

const initialState = {
    keyCode: '',
    displayText: ''
}

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case PLAY_SOUND:
            return Object.assign({},state,{keyCode: action.keyCode})
        case CLEAN_STATE:
            return Object.assign({},state,{keyCode:''})
        case DISPLAY_TEXT:
            return Object.assign({},state,{displayText: action.text})
        default:
            return state
    }
}

export default Reducer