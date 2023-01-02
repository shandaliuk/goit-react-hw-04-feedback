import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, vote) => acc + vote);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return total;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onFeedback = name => {
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
