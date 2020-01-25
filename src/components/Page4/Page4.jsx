import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page4 extends Component {
    state = {}
    
    handleClick = () => {
        
        this.props.dispatch({
            type: 'SET_COMMENT',
            payload: this.state.comment 
        })

        this.props.history.push('/review');
    }

    setSupport = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.setSupport}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page4);