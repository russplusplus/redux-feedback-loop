import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleSubmit = () => {
        
    }
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>Feelings: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                <p>Comments: {this.props.reduxState.comment}</p>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Review);