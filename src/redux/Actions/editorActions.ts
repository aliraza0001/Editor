import * as actionTypes from "../types"

export const addSelectedText = (text: String) => ({
    type: actionTypes.ADD_SELECTED_TEXT,
    payload: { selectedText: text },
})