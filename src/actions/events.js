import fetch from 'isomorphic-fetch';

let FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
let fetchEventsSuccess = function(events) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        events: events
    }
}
let fetchEvents = function(events) {
    return function(dispatch) {
        let url = 'http://api.eventful.com/json/events/search?app_key=b9b48zPkWjgxW98J&c=music&l=pittsburgh&t=Today';
        return fetch(url, {mode: 'cors'}).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
        })
    .then(function(data) {
        let events = data.events.event;
        dispatch(
            fetchEventsSuccess(events)
        )
    })
    .catch(function(error) {
        return dispatch(
            console.log(error)
        )
    })
    }
}
exports.FETCH_EVENTS_SUCCESS = FETCH_EVENTS_SUCCESS;
exports.fetchEvents = fetchEvents;
