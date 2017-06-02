import React, { Component } from 'react';

class Heart extends Component {
    render() {
        return (
            <div className="like is-liked" style={this.props.style} id="like"></div>
        )
    }
}

export default Heart;