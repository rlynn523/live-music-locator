import actions from '../actions/events';
import initialState from './initialstate';
export default function EventsReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_EVENTS_SUCCESS:
        let events = state.events.concat(action);
        let Events = Object.assign({}, state, {
            events: events,
        });
        return Events;
    }
    return state;
}
