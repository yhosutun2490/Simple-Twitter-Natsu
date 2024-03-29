// 引入axios
import axios from 'axios';
// 後端Heroku網址
const baseUrl ="https://lingering-wildflower-6442.fly.dev"

// 產生axios 實例來管理API
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// 利用axios 攔截器再發現請求前帶入token
axiosInstance.interceptors.request.use(
  (config) => {
     const token = localStorage.getItem('authToken'); // 取出token
     // 如果有token的話 放入API請求Header中
      if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error) => {console.error(error)}
)

//對某位使用者按追隨
export const addfollowUser = async (userID) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/api/followships`,{id:Number(userID)})
    return res
  }
  catch (error) {
    console.error('[Add Follow User request failed]: ', error);
  }
}

//對某位使用者取消追隨
export const deletefollowUser = async (userID,unFollowerID) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/api/followships/${unFollowerID}`,{id:Number(userID)})
    return res
  }
  catch (error) {
    console.error('[Delete Follow User request failed]: ', error);
  }
}

// 看見某位使用者被跟隨的人
export const getOneUserFollower = async (userID) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/api/users/${userID}/followers`)
    return res.data
  }
  catch (error) {
    console.error('[Get OneUser Follower request failed]: ', error);
  }
}
// 看見某位使用者跟隨中的名單
export const getOneUserFollowing = async (userID) => {
   try {
    const res = await axiosInstance.get(`${baseUrl}/api/users/${userID}/followings`)
    return res.data
  }
  catch (error) {
    console.error('[Get OneUser Following Data request failed]: ', error);
  }

}

