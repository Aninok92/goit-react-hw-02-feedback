import s from "./Section.module.scss";
const Section = ({ title, children }) => (
  <div className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

export default Section;
