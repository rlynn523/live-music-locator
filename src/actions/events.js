import fetch from 'isomorphic-fetch';

let FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
let fetchEventsSuccess = function(title, venue, venueUrl, url, image, lat, long, id) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        title: title,
        venue: venue,
        venueUrl: venueUrl,
        url: url,
        image: image,
        lat: lat,
        long: long,
        id: id
    }
}
let fetchEvents = function(title, venue, venueUrl, url, image, lat, long, id) {
    return function(dispatch) {
        let url = 'http://api.eventful.com/json/events/search?app_key=b9b48zPkWjgxW98J&c=music&l=pittsburgh&t=Today';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
        })
    .then(function(data) {
        let events = data.events.event;
        let i;
        for(i = 0; i < events.length; i++) {
            let event = events[i];
            let title = event.title;
            let venue = event.venue_name;
            let venueUrl = event.venue_url;
            let url = event.url;
            let image = event.image.medium.url
            let lat = event.latitude;
            let long = event.longitude;
            let id = event.id;
            dispatch(
                fetchEventsSuccess(title, venue, venueUrl, url, image, lat, long, id)
            )
        }
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
