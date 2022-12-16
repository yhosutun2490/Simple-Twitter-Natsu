import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutCommon from "./Components/LayoutCommon";
import { AuthProvider } from "./Context/AuthContext"; //引入驗證用AuthProvider
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import TweetPage from "./Pages/TweetPage";
import ProfilePage from "./Pages/ProfilePage";
import ProfileReplyPage from "./Pages/ProfileReplyPage";
import ProfileLikePage from "./Pages/ProfileLikePage";
import FollowerListPage from "./Pages/FollowerListPage";

function App() {
  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/">
              <Route path="login" element={<LoginPage />}></Route>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="setting"></Route>
              <Route path="home" element={<LayoutCommon />}>
                <Route index element={<HomePage />}></Route>
              </Route>
              <Route path="tweet/:id" element={<LayoutCommon />}>
                <Route index element={<TweetPage />}></Route>
              </Route>
              <Route path="/user/:username" element={<LayoutCommon />}>
                <Route index element={<ProfilePage />}></Route>
                <Route path="reply" element={<ProfileReplyPage />}></Route>
                <Route path="likes" element={<ProfileLikePage />}></Route>
                <Route path="follower" element={<FollowerListPage />}></Route>
                <Route path="following"></Route>
              </Route>
              <Route path="admin">
                <Route index></Route>
                <Route path="tweet-list"></Route>
                <Route path="user-list"></Route>
              </Route>
            </Route>
            <Route path="*" />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
