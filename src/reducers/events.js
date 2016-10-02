import actions from '../actions/events';
import initialState from './initialstate';

export default function EventsReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_EVENTS_SUCCESS:
        console.log(action);
        let Events = Object.assign({}, state, {
            events: action
        });
        return Events;
    }
    return state;
}
