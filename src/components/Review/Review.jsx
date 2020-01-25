import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        let feedback = this.props.reduxState;
        Axios.post('/feedback', feedback)
        .then((result) => {
            console.log('success!')
        }).catch((err) => {
            alert(err);
        })
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