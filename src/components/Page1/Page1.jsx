import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page1 extends Component {

    state = {}
    
    handleClick = () => {
        //dispatch
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling 
        })

        this.props.history.push('/page2');
    }

    setFeeling = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How are you feeling today?</h1>
                <input type="number" name="feeling" min="1" max="5" onChange={this.setFeeling}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page1);