
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../data/getDatas";


export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [userId, setUserId] = useState();
  const [error, setError] = useState(false);

  const [env, setEnv] = useState(
    JSON.parse(localStorage.getItem("env")) || null
  );

  const [userInfos, setUserInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAvgSessions, setUserAvgSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const userInfoData = await getUserData(userId, env, "infos");
        setUserInfos(userInfoData);

        const userActivityData = await getUserData(userId, env, "activity");
        setUserActivity(userActivityData);

        const avgSessionsData = await getUserData(userId,env,"averageSessions");
        const userAvgSessionsData = avgSessionsData.getSessions();
        setUserAvgSessions(userAvgSessionsData);

        const performanceData = await getUserData(userId, env, "performance");
        const userPerformanceData = performanceData.getPerformance();
        setUserPerformance(userPerformanceData);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [userId, env]);

  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        env,
        setEnv,
        userInfos,
        userActivity,
        userAvgSessions,
        userPerformance,
        setError,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
