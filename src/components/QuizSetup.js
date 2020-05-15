import React, { Component } from 'react'
import './quizz.css'
import {
    Button,
    Grid,
    Header,
} from 'semantic-ui-react'
import Quiz from './Quiz'
const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}
const categoriesName = ["Animals", "General Knowledge", "Geography", "Science & Nature", "Random"]
const difficulties = ["easy", "medium", "hard", "random"]
const Error = () => (
    <p>
        Something went <strong>wrong</strong>!
    </p>
);
class QuizSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catDisabled: true,
            diffDisabled: true,
            status: "setup"
        }
    }
    randomchoice(array) {
        return (
            `${array[Math.floor(Math.random() * (array.length - 1))]}`
        )
    }
    checkCategory = cat => {
        let catNum = ""
        if (cat === "Animals") {
            catNum = "27"
        } else if (cat === "General Knowledge") {
            catNum = "9"
        } else if (cat === "Geography") {
            catNum = "22"
        } else if (cat === "Science & Nature") {
            catNum = "17"
        } else if (cat === "Random") {
            catNum = this.randomchoice(["27", "9", "22", "17"])
        } else {
            catNum = ""
        }
        this.setState({
            Category: catNum,
            category: cat,
            catDisabled: false
        })
    }
    checkDifficulty = diff => {
        diff === "random" ?
            this.setState({
                Difficulty: this.randomchoice(difficulties),
                difficulty: diff,
                diffDisabled: false
            })
            :
            this.setState({
                Difficulty: diff,
                difficulty: diff,
                diffDisabled: false
            })
    }
    startQuiz = () => { this.setState({ status: "quiz" }) }
    render() {
        switch (this.state.status) {
            case "quiz":
                return <Quiz Category={this.state.Category} Difficulty={this.state.Difficulty} />;
            case "setup":
                return (
                    <div className='category'>
                        <Header as='h3' content='Choose your quiz category :' style={style.h3} textAlign='center' />
                        <Grid container columns={6} stackable>
                            {categoriesName.map(cat => (
                                <>
                                    <Grid.Column>
                                        <Button color='teal' key={cat}
                                            onClick={() => this.checkCategory(cat)}
                                        >
                                            {cat}
                                        </Button>
                                        </Grid.Column>
                                </>
                            ))}</Grid>
                            <Header as='h3' content='Choose your quiz difficulty :' style={style.h3} textAlign='center' />
                            <Grid container columns={6} nested stackable grid>
                                {difficulties.map(diff => (
                                    <Grid.Column>
                                        <Button color='brown' key={diff}
                                            onClick={() => this.checkDifficulty(diff)}
                                        >
                                            {diff}
                                        </Button></Grid.Column>
                                ))}</Grid>
                            <h3 key="catsel">Category selected :  {this.state.category}</h3>
                            <h3 key="diffsel">Difficulty selected :   {this.state.difficulty}</h3>
                            <Button color='red'
                                class="ui red button"
                                key="startButton"
                                disabled={!this.state.catDisabled && !this.state.diffDisabled ? false : true}
                                onClick={this.startQuiz}>
                                Start
                            </Button>
                    </div>
                        );
                    default:
                return <Error />;
                }
            }
        }
export default QuizSetup






















