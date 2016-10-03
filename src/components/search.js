import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/events';

export class Search extends Component {
    componentDidMount() {
        this.props.dispatch(
            actions.fetchEvents()
        )
    }
    render() {
        if(this.props.events.events !== undefined){
            let events = this.props.events.events.map(function(event){
                return <li key={event.id}>{event.title} at {event.venue_name}</li>
            });
            return(
                <ul>
                    {events}
                </ul>
            );
        } else {
            return (
                <h2>Loading...</h2>
            );
        }
    }
}
let mapStateToProps = function(state, props) {
    return {
        events: state.events
    }
}
export default connect(mapStateToProps)(Search);
