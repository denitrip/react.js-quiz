import React from 'react';

class NextQuestionBtn extends React.Component {

  render() {
    this.nextQuestion = this.props.nextQuestion;
    this.btnDisabled = this.props.btnDisabled;

    return (<button onClick={this.nextQuestion} className={this.btnDisabled ? 'disabled' : ''}>Next question</button>)
  }
}

export default NextQuestionBtn