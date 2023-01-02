export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = event => {
    onLeaveFeedback(event.target.name);
  };

  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" name={option} onClick={handleClick}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
