import s from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.wrapper}>
    {options.map((option) => (
      <button
        className={s.feedbackButton}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
