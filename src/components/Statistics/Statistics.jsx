import PropTypes from 'prop-types';
import { List, Text, Stat } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>
        <Text>
          Good: <Stat>{good}</Stat>
        </Text>
      </li>
      <li>
        <Text>
          Neutral: <Stat>{neutral}</Stat>
        </Text>
      </li>
      <li>
        <Text>
          Bad: <Stat>{bad}</Stat>
        </Text>
      </li>
      <li>
        <Text>
          Total: <Stat>{total}</Stat>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback: <Stat>{positivePercentage}%</Stat>
        </Text>
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
