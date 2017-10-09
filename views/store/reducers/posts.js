
import { ADD_POST } from '../actions/posts';

export default function (state=[], action) {
    switch (action.type) {
    case ADD_POST:
        return state.concat([action.payload]);
    default:
        return state;
    }
}