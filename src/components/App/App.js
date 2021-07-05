//import "./App.css";
import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Notification from "../Notification/Notification";

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedBack = (good / totalFeedback) * 100;
    return positiveFeedBack.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedBack = this.countPositiveFeedbackPercentage();
    const isFeedBack = good > 0 || neutral > 0 || bad > 0;
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={"Statistics"}>
          {isFeedBack ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedBack}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
