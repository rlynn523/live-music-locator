import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/events';

export class Search extends Component {
    componentDidMount() {
        this.props.dispatch(
            actions.fetchEvents(this.props.title, this.props.venue, this.props.venueUrl, this.props.url, this.props.id)
        );
    }
    render() {
        var eventLists = this.props.eventLists.map(function(eventList){
             return <li key={eventList.id}>{eventList}</li>;
        });
        return(
            <ul>
                {eventLists}
            </ul>
        );
    }
}
let mapStateToProps = function(state, props) {
    return {
        eventLists: state.events
    }
}
export default connect(mapStateToProps)(Search);
