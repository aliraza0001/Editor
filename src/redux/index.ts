import { combineReducers, createStore } from 'redux';
import editor, { editorState } from './Reducers/editor'
export interface RootState {
    editor: editorState
}
export const store = createStore<RootState, any, any, any>(
    combineReducers({ editor }));

