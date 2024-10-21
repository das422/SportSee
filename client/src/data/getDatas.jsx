import UserActivity from "../models/userActivity";
import UserSessions from "../models/userAvgSessions";
import UserInfos from "../models/userInfos";
import UserPerformance from "../models/userPerformance";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mocks";

export const getUserData = async (userId, env, dataType) => {
  let user;

  try {
    let url;
    let dataExtractor;

    switch (dataType) {
      case 'infos':
        if (env === "development") {
          user = USER_MAIN_DATA.find((user) => user.id == userId);
        } else if (env === "production") {
          url = `http://localhost:3000/user/${userId}`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'activity':
        if (env === "development") {
          user = USER_ACTIVITY.find((user) => user.userId == userId);
        } else if (env === "production") {
          url = `http://localhost:3000/user/${userId}/activity`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'averageSessions':
        if (env === "development") {
          user = USER_AVERAGE_SESSIONS.find((user) => user.userId == userId);
        } else if (env === "production") {
          url = `http://localhost:3000/user/${userId}/average-sessions`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'performance':
        if (env === "development") {
          user = USER_PERFORMANCE.find((user) => user.userId == userId);
        } else if (env === "production") {
          url = `http://localhost:3000/user/${userId}/performance`;
          dataExtractor = (data) => data.data;
        }
        break;
      default:
        throw new Error('Invalid data type');
    }

    if (url) {
      const response = await fetch(url);
      const data = await response.json();
      user = dataExtractor(data);
    }
  } catch (error) {
    console.error(error);
  }

  switch (dataType) {
    case 'infos':
      return new UserInfos(user);
    case 'activity':
      return new UserActivity(user);
    case 'averageSessions':
      return new UserSessions(user);
    case 'performance':
      return new UserPerformance(user);
    default:
      throw new Error('Invalid data type');
  }
};
