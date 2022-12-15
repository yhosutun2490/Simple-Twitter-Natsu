import styles from "./ReplyBox.module.scss";
import UserInfo from "../UserTweetBox/UserInfo";
import { ReactComponent as Avatar } from "../../assets/icons/AcLogo.svg";
import { Link } from "react-router-dom";
import { TimeFromNow } from "../../CostumHook/TransFormDate";

function ReplyBox(props) {
  // 這邊傳進來的是回覆的使用者
  const { name, account, avatar, update, userID, replyTo, comment } = props;
  const date = TimeFromNow(update);
  return (
    <div className={styles["container"]}>
      <div className={styles["user-avatar"]}>
        <Link to={`/user/${account}`}>
          <img src={avatar} alt="avatar-img" className={styles["avatar-img"]} />
        </Link>
      </div>
      <div className={styles["response-detail"]}>
        <UserInfo userName={name} account={account} update={date} />
        <div className={styles["response-to"]}>
          <p className={styles["response-title-1"]}>回覆</p>
          <p className={styles["response-title-2"]}>@{replyTo}</p>
        </div>
        <div className={styles["response-text"]}>{comment}</div>
      </div>
    </div>
  );
}

export default ReplyBox;