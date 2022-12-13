import styles from "./UserTweetBox.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/icons/AcLogo.svg";
import ReplyIconButton from "../ReplyIconButton";
import UserInfo from "./UserInfo";
import LikeFullIconButton from "../LikeFullIconButton";
import LikeIconButton from "../LikeIconButton";
function UserTweetBox(props) {
  // 先設定好要傳入的資料props
  // 資料要傳給ReplyIconButton 跳窗才會正常顯示資料
  const {
    tweeterAccount,
    tweeterName,
    tweeterAvatar,
    responseAcoount,
    update,
    tweetContent,
    tweetNumber,
    likesNumber,
    tweetID,
    isLike,
  } = props;

  return (
    <div className={styles["container"]}>
      <div className={styles["user-avatar"]}>
        <Link to={`/user/${tweeterAccount}`}>
          <Avatar />
        </Link>
      </div>
      <div className={styles["tweet-detail"]}>
        <UserInfo
          userName={tweeterName}
          account={tweeterAccount}
          update={update}
        />
        <div className={styles["tweet-content"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={styles["tweet-social-list"]}>
          <div className={styles["tweet-social-group"]}>
            <div className={styles["reply-link"]}>
              <ReplyIconButton />
            </div>
            <p className={styles["reply-number"]}>
              {tweetNumber ? tweetNumber : 16}
            </p>
          </div>
          <div className={styles["tweet-social-group"]}>
            {isLike ? (
              <div className={styles["like-btn"]}>
                <LikeFullIconButton />
              </div>
            ) : (
              <div className={styles["like-btn"]}>
                <LikeIconButton />
              </div>
            )}

            <p className={styles["like-number"]}>
              {likesNumber ? likesNumber : 5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTweetBox;