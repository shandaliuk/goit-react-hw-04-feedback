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
