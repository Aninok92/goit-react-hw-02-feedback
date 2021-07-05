import s from "./Notification.module.scss";

const Notification = ({ message }) => (
  <p className={s.notification}>{message}</p>
);

export default Notification;
