import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./quizz.css";
import { Button, Header, Grid, List, Message } from "semantic-ui-react";
import Axios from "axios";

let quizPoints = 0;
let points = localStorage.getItem("points");
let trizz = localStorage.getItem("trizz");

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      userAnswer: null,
      userAnswers: [],
      options: [],
      quizEnd: false,
      restart: false,
      disabled: true,
      score: 0,
      Category: this.props.Category,
      category: this.props.category,
      difficulty: this.props.difficulty,
      Difficulty: this.props.Difficulty,
      QuizData: [],
    };
  }
  loadQuiz() {
    const { Category, Difficulty, currentQuestion } = this.state;
    Axios.get(
      `https://opentdb.com/api.php?amount=5&category=${Category}&difficulty=${Difficulty}`
    ).then((response) =>
      this.setState(() => {
        return {
          QuizData: response.data.results,
          questions: response.data.results[currentQuestion].question
            .replace("&#039;", "'")
            .replace("&rsquo;", "'"),
          answer: response.data.results[currentQuestion].correct_answer
            .replace("&#039;", "'")
            .replace("&rsquo;", "'"),
          options: response.data.results[
            currentQuestion
          ].incorrect_answers.map((corAns) =>
            corAns.replace("&#039;", "'").replace("&rsquo;", "'")
          ),
          difficulty: response.data.results[currentQuestion].difficulty,
          category: response.data.results[currentQuestion].category,
        };
      })
    );
  }

  componentDidMount() {
    this.loadQuiz();
  }

  ponderedPoints(score) {
    return (
      score *
      (this.state.userAnswer === this.state.answer &&
      this.state.difficulty === "easy"
        ? 2
        : this.state.userAnswer === this.state.answer &&
          this.state.difficulty === "medium"
        ? 3
        : this.state.userAnswer === this.state.answer &&
          this.state.difficulty === "hard"
        ? 5
        : 0)
    );
  }

  nextQuestionHandler = () => {
    //calculer ici le nouveau score
    let score = this.state.score;
    score += this.state.userAnswer === this.state.answer ? 1 : 0;
    quizPoints = Number(this.ponderedPoints(this.state.score + 1));
    const { QuizData } = this.state;
    const currentQuestion = this.state.currentQuestion + 1;
    const userAnswers = this.state.userAnswers;
    const userAnswer = this.state.userAnswer;
    userAnswers.push(userAnswer);
    //mettre le nouveau score dans le state
    this.setState({
      currentQuestion: currentQuestion,
      disabled: true,
      questions: QuizData[currentQuestion].question
        .replace("&#039;", "'")
        .replace("&rsquo;", "'"),
      answer: QuizData[currentQuestion].correct_answer
        .replace("&#039;", "'")
        .replace("&rsquo;", "'"),
      options: QuizData[currentQuestion].incorrect_answers.map((corAns) =>
        corAns.replace("&#039;", "'").replace("&rsquo;", "'")
      ),
      userAnswers: userAnswers,
      score: score,
    });
  };

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    const userAnswers = this.state.userAnswers;
    const userAnswer = this.state.userAnswer;
    userAnswers.push(userAnswer);
    if (userAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1,
        userAnswers: userAnswers,
      });
      quizPoints = Number(this.ponderedPoints(this.state.score + 1));
      points = Number(points) + quizPoints;
      trizz = Math.floor(points / 50);
    } else {
      points = Number(points) + Number(this.ponderedPoints(this.state.score));
    }
    localStorage.setItem("points", points);
    localStorage.setItem("trizz", trizz);
    if (this.state.currentQuestion === this.state.QuizData.length - 1) {
      this.setState({ quizEnd: true });
    }
  };

  render() {
    const {
      questions,
      options,
      answer,
      score,
      currentQuestion,
      category,
      difficulty,
      userAnswer,
      QuizData,
      quizEnd,
    } = this.state;
    if (quizEnd) {
      return (
        <div id="gameOver">
          <Message id="bandeauFinish">
            <h2 className="Header">
              Game Over final score is {score} and you earn {quizPoints}
            </h2>
            <p className="paragraph">
              The Correct Answers for the Questions were
            </p>
          </Message>
          <Grid container columns={1} textAlign="center" nested stackable grid>
            {QuizData.map((item, index) => {
              return (
                <Grid.Column>
                  <List.Description>
                    {item.question
                      .replace("&#039;", "'")
                      .replace("&rsquo;", "'")}
                  </List.Description>

                  <Button
                    color={
                      this.state.userAnswers[QuizData.indexOf(item)] ===
                      item.correct_answer
                        ? "green"
                        : "red"
                    }
                  >
                    Correct Answer :{" "}
                    {item.correct_answer
                      .replace("&#039;", "'")
                      .replace("&rsquo;", "'")}
                  </Button>
                </Grid.Column>
              );
            })}
          </Grid>
          <Grid.Column>
            <Button color="teal" onClick={() => window.location.reload(false)}>
              one again
            </Button>
            <Link to="/">
              <Button color="teal">Back to home</Button>
            </Link>
          </Grid.Column>
        </div>
      );
    }

    return (
      <>
        <div id="recap">
          <Message id="bandeauQuiz">
            <h2 className="Header">Quiz</h2>
            <p className="paragraph">Category : {category}</p>
            <p className="paragraph">Difficulty : {difficulty}</p>
          </Message>
        </div>
        <Header
          as="h5"
          content={`Questions ${currentQuestion + 1} out of ${QuizData.length}`}
          style={style.h3}
          textAlign="center"
        />
        <Header as="h3" content={`${questions}`} textAlign="center" />

        <div className="questionPage">
          {[...options, answer]
            .sort(function (a, b) {
              if (a > b) return 1;
              else return -1;
            })
            .map((option) => (
              <div>
                <Button
                  className="answer"
                  color="teal"
                  key={option}
                  className={`question
                    ${userAnswer === option ? "selected" : null}`}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </Button>
              </div>
            ))}
          {currentQuestion < QuizData.length - 1 && (
            <Button
              className="answer"
              positive
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </Button>
          )}
          {currentQuestion === QuizData.length - 1 && (
            <Button className="answer" onClick={this.finishHandler}>
              Finish
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default Quiz;
