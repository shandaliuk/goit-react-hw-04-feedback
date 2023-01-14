import { useReducer } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      return new Error('Unknown feedback');
  }
};

export const App = () => {
  const [feedback, dispatch] = useReducer(feedbackReducer, initialState);

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, vote) => acc + vote);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return total;
    }
    return Math.round((feedback.good / total) * 100);
  };

  const onFeedback = name => dispatch({ type: name });

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

//Test
