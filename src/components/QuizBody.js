import React from 'react';
import StartBtn from './StartBtn'
import NextQuestionBtn from './NextQuestionBtn'
import QuizAnswers from './QuizAnswers'
import QuestionLabel from './QuestionLabel'

class QuizBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isQuizStarted: false,
      answers: [['Belarus', 'Kongo', 'North Korea', 'Somali'], ['USA', 'Germany', 'Belarus', 'Serbia'], ['USA', 'France', 'Syria', 'Belarus'], ['USA', 'Belarus', 'China', 'Norway'], ['USA', 'Germany', 'Belarus', 'Kazahstan']],
      questionLabels: ['Best country in the world', 'Country with the best people', 'Country with the best president', 'Country with the strongest economics', 'Country where everyone wants to live'],
      correctAnswers: ['Belarus', 'Belarus', 'Belarus', 'Belarus', 'Belarus'],
      correctAnswersCount: 0,
      incorrectAnswersCount: 0,
      currentQuestionNumber: 0,
      currentQuestionAnswers: [],
      currentQuestionLabel: '',
      quizFinished: false,
      answerBtnDisabled: false,
      nextQuestionBtnDisabled: true,
      correctAnswer: ''
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  startQuiz() {
    this.setState(prevState => ({
      isQuizStarted: !prevState.isQuizStarted,
      currentQuestionAnswers: prevState.answers[prevState.currentQuestionNumber],
      currentQuestionLabel: prevState.questionLabels[prevState.currentQuestionNumber]
    }));
  }

  nextQuestion() {
    if (this.state.answers.length > this.state.currentQuestionNumber + 1) {
      this.setState(prevState => ({
        currentQuestionNumber: prevState.currentQuestionNumber + 1,
        currentQuestionAnswers: prevState.answers[prevState.currentQuestionNumber + 1],
        currentQuestionLabel: prevState.questionLabels[prevState.currentQuestionNumber + 1]
      }))
    } else {
      this.setState(_ => ({
        currentQuestionAnswers: [],
        currentQuestionLabel: '',
        quizFinished: true
      }))
    }
    this.setState(_ => ({
      correctAnswer: '',
      answerBtnDisabled: false,
      nextQuestionBtnDisabled: true
    }))
  }

  answerQuestion(answer) {
    if (answer && answer === this.state.correctAnswers[this.state.currentQuestionNumber]) {
      this.setState(prevState => ({
        correctAnswersCount: prevState.correctAnswersCount + 1
      }));
    } else {
      this.setState(prevState => ({
        incorrectAnswersCount: prevState.incorrectAnswersCount + 1
      }));
    }
    this.setState(prevState => ({
      answerBtnDisabled: true,
      nextQuestionBtnDisabled: false,
      correctAnswer: prevState.correctAnswers[prevState.currentQuestionNumber]
    }))
  }

  render() {

    return (
      <div>
        {this.state.isQuizStarted && !this.state.quizFinished &&
        <QuestionLabel label={this.state.currentQuestionLabel}/>
        }
        {this.state.quizFinished &&
        <div><label>Quiz results:</label>
          <hr/>
          <label>Correct answers: <span
            className="correct-answers">{this.state.correctAnswersCount}</span></label> | <label>Incorrect
            answers: <span
              className="incorrect-answers">{this.state.incorrectAnswersCount}</span></label>
        </div>
        }
        {this.state.isQuizStarted &&
        <QuizAnswers answers={this.state.currentQuestionAnswers} answerQuestion={this.answerQuestion}
                     btnDisabled={this.state.answerBtnDisabled} answer={this.state.correctAnswer}/>
        }
        {!this.state.isQuizStarted &&
        <StartBtn startQuiz={this.startQuiz}/>
        }
        {this.state.isQuizStarted && !this.state.quizFinished &&
        <NextQuestionBtn nextQuestion={this.nextQuestion} btnDisabled={this.state.nextQuestionBtnDisabled}/>
        }
      </div>
    );
  }
}

export default QuizBody