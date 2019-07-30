import React from 'react';

class QuestionLabel extends React.Component {

  render() {

    return (
      <div>
        <label>{this.props.label}</label>
        <hr/>
      </div>)
  }
}

export default QuestionLabel