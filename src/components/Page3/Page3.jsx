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
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How well are you being supported?</h1>
                <input type="number" min="1" max="5" onChange={this.setSupport}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page3);