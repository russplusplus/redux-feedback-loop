import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page2 extends Component {

    state = {}
    
    handleClick = () => {
        //dispatch
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding 
        })

        this.props.history.push('/page3');
    }

    setUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="number" min="1" max="5" onChange={this.setUnderstanding}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page2);