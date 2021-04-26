// import action types
import { ADD_SELECTED_TEXT } from '../types'
// initial state values
const initialState = {
    selectedText: ''
}

//create reducer
const editorReducer = (state: editorState = initialState, action: any) => {
    //check action type
    switch (action.type) {
        case ADD_SELECTED_TEXT:
            //return updated redux store and can properties daynamically for minimal redux boiler plate
            return { ...state, ...action.payload }
        default:
            // return same redux  state if not match with case
            return state
    }
}

export interface editorState {
    selectedText: String
}

export default editorReducer;

