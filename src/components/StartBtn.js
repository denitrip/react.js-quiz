import React from 'react';

class StartBtn extends React.Component {

  render() {
    this.startQuiz = this.props.startQuiz;

    return (<button className={'green-button'} onClick={this.startQuiz}>Start quiz</button>)
  }
}

export default StartBtn