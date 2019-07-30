import React from 'react';

class QuizAnswers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.answers.map((e, index) => <li key={index}>
        <button onClick={_ => this.props.answerQuestion(e)} disabled={this.props.btnDisabled}>{e}</button>
      </li>)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(_ => ({
        answers: nextProps.answers ? nextProps.answers.map((e, index) => <li key={index}>
          <button onClick={_ => this.props.answerQuestion(e)}
                  className={nextProps.answer && nextProps.answer === e ? 'green-button' : nextProps.answer ? 'red-button' : ''}
                  disabled={nextProps.btnDisabled}>{e}</button>
        </li>) : []
      }
    ))
  }


  render() {
    const answers = this.state.answers;

    return (<ul>{answers}</ul>)
  }
}

export default QuizAnswers