//import "./App.css";
import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Container from "../Container/Container";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = (option) => {
    this.setState((prevState) => {
      if (option === "good") {
        return {
          good: prevState.good + 1,
        };
      }
      if (option === "neutral") {
        return {
          neutral: prevState.neutral + 1,
        };
      }
      if (option === "bad") {
        return {
          bad: prevState.bad + 1,
        };
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={"Statistics"}>
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </Section>
      </Container>
    );
  }
}

export default App;
