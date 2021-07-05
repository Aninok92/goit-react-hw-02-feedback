import s from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <span className={s.itemSpan}>Good:</span> {good}
    </li>
    <li className={s.item}>
      <span className={s.itemSpan}>Neutral:</span> {neutral}
    </li>
    <li className={s.item}>
      <span className={s.itemSpan}>Bad:</span> {bad}
    </li>
    <li className={s.item}>
      <span className={s.itemSpan}>Total:</span> {total}
    </li>
    <li className={s.item}>
      <span className={s.itemSpan}>Positive feedback:</span>
      {positivePercentage} %
    </li>
  </ul>
);

export default Statistics;
