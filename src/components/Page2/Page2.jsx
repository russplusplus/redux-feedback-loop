import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page2 extends Component {

    state = {
        understanding: ''
    }
    
    handleClick = () => {
        if (this.state.understanding === '') {
            alert('A number must be entered')
        } else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.understanding 
            })
            this.props.history.push('/page3');
        }
    }

    setUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How well are you understanding the content?</h1>
                <input type="number" min="1" max="5" onChange={this.setUnderstanding}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Page2);