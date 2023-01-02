import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = event => {
    onLeaveFeedback(event.target.name);
  };

  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" name={option} onClick={handleClick}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
