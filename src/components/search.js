import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/events';

export class Search extends Component {
    componentDidMount() {
        this.props.dispatch(
            actions.fetchEvents(this.props.title, this.props.venue, this.props.venueUrl, this.props.sites, this.props.lat, this.props.long, this.props.id)
        );
    }
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.venue}</p>
            </div>
        );
    }
}
let mapStateToProps = function(state, props) {
    return {
        title: state.title,
        venue: state.venue,
        venueUrl: state.venueUrl,
        site: state.site,
        lat: state.lat,
        long: state.long
    }
}
export default connect(mapStateToProps)(Search);
