import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page3 extends Component {
    state = {}
    
    handleClick = () => {
        //dispatch
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support 
        })

        this.props.history.push('/page4');
    }

    setSupport = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="number" min="1" max="5" onChange={this.setSupport}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page3);