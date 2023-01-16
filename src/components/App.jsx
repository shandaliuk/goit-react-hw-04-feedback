import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [goodFeedbackCount, setGoodFeedbackCount] = useState(0);
  const [neutralFeedbackCount, setNeutralFeedbackCount] = useState(0);
  const [badFeedbackCount, setBadFeedbackCount] = useState(0);

  const countTotalFeedback = () =>
    goodFeedbackCount + neutralFeedbackCount + badFeedbackCount;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return total;
    }
    return Math.round((goodFeedbackCount / total) * 100);
  };

  const onFeedback = name => {
    switch (name) {
      case 'good':
        setGoodFeedbackCount(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedbackCount(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedbackCount(prevState => prevState + 1);
        break;
      default:
        new Error('Unknown feedback');
    }
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={goodFeedbackCount}
            neutral={neutralFeedbackCount}
            bad={badFeedbackCount}
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
