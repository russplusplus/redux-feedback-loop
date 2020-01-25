import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page4 extends Component {
    state = {
        comment: ''
    }
    
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
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.setSupport}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page4);