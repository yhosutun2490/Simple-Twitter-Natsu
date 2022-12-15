import styles from "./ProfileLikePage.module.scss";
import ProfileUserNavBar from "../../Components/ProfileUserNavBar";
import UserTweetList from "../../Components/UserTweetList";
function ProfileLikePage() {
  // 預設使用者id
  const userID = 1;
  //另一支API 使用者個人資料
  const user = {
    id: 1,
    account: "NatsuTW",
    email: "user1@example.com",
    name: "Natsu",
    avatar: "https://picsum.photos/50/50",
    introduction: "我是大帥哥",
    role: "1",
    cover: "https://imgur.com/kaoge55g",
    createdAt: "2022-11-17T15:32:31.000z",
    updatedAt: "2022-11-17T15:32:31.000z",
    following: "true",
    followingCount: 3,
    follower: 2,
    tweetsCount: 4,
  };

  // api文件 使用者like推文資料
  const likedata = {
    status: "success",
    data: [
      {
        id: 1,
        description: "我在推文",
        createdAt: "2022-11-17T15:32:31.000z",
        updatedAt: "2022-11-17T15:32:31.000z",
        likeCount: 8,
        liked: true,
        replies: 5,
        user: {
          id: 3,
          account: "Rafael202",
          name: "Rafael",
          avatar: "https://picsum.photos/50/50",
        },
      },
      {
        id: 2,
        description: "我在推文2",
        createdAt: "2022-11-17T15:32:31.000z",
        updatedAt: "2022-11-17T15:32:31.000z",
        liked: true,
        user: {
          id: 2,
          account: "Rubyhelen",
          name: "Ruby",
          avatar: "https://picsum.photos/50/50",
        },
      },
    ],
  };

  return (
    <div className={styles["container"]}>
      <ProfileUserNavBar userID={userID} />
      <div>
        <UserTweetList tweetList={likedata.data} />
      </div>
    </div>
  );
}

export default ProfileLikePage;
