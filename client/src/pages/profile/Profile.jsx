import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import chicken from "../../assets/chicken.svg";
import energy from "../../assets/energy.svg";
import Card from "../../components/card/Card";
import SimpleBarChart from "../../components/simpleBarChart/SimpleBarChart";
import SimpleLineChart from "../../components/simpleLineChart/SimpleLineChart";
import SimplePieChart from "../../components/simplePieChart/SimplePieChart";
import SimpleRadarChart from "../../components/simpleRadarChart/SimpleRadarChart";
import { useDataContext } from "../../context/dataContext";
import "./profile.scss";

export default function Profile() {
  const {
    userId,
    setUserId,
    userInfos,
    userActivity,
    userAvgSessions,
    userPerformance,
		setError,
		error
  } = useDataContext();

	const navigate = useNavigate();

	useEffect(() => {
		if (error) {
			setError(false);
			setUserId(null);
			return navigate('/not-found');
		}
	}, [error, navigate, setError, setUserId]);

  const { id } = useParams();

  useEffect(() => {
    setUserId(id);
  }, [id, setUserId]);

  if (
    !userId ||
    !userInfos ||
    !userActivity ||
    !userAvgSessions ||
    !userPerformance
  )
    return <div>Chargement...</div>;



  return (
    <main className="profile">
      <header className="profile_title">
        <h1>
          Bonjour <span>{userInfos?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <section className="profile_main">
        <section className="profile_main_charts">
          <SimpleBarChart data={userActivity?.sessions} />
          <div className="profile_main_charts_horizontal">
            <SimpleLineChart data={userAvgSessions} />
            <SimpleRadarChart data={userPerformance} />
            <SimplePieChart data={userInfos} />
          </div>
        </section>
        <div className="profile_main_cards">
          <Card
            value={userInfos?.calorieCount}
            title="Calories"
            img={energy}
            unit="kCal"
          />
          <Card
            value={userInfos?.proteinCount}
            title="Proteines"
            img={chicken}
            unit="g"
          />
          <Card
            value={userInfos?.carbohydrateCount}
            title="Glucides"
            img={apple}
            unit="g"
          />
          <Card
            value={userInfos?.lipidCount}
            title="Lipides"
            img={cheeseburger}
            unit="g"
          />
        </div>
      </section>
    </main>
  );
}
