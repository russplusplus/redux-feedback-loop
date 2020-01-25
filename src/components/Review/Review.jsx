import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="range" name="feeling" min="1" max="5"></input>
            </div>
        )
    }
}

export default connect()(Page1);