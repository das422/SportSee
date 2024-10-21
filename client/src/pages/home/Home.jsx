import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/dataContext';
import './home.scss';

export default function Home() {
    const { setEnv, userId, env } = useDataContext();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setEnv(isChecked ? "production" : "development");
    }, [isChecked, setEnv]);

    useEffect(() => {
        setIsChecked(env === "production");
    }, []);

    useEffect(() => {
        localStorage.setItem("env", JSON.stringify(env));
    }, []);

    return (
        <main className='home'>
            <div className="home_wrapper">
                <div className="home_wrapper_type">
                    <span>Développement</span>
                    <div className="checkbox">
                        <input type="checkbox" id='check' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="check" aria-label="Choisir l'environnement"></label>
                    </div>
                    <span>Production</span>
                </div>
                <div className="home_wrapper_link">
                    <Link to="/profile/12">Karl</Link>
                    <Link to="/profile/18">Cecilia</Link>
                </div>
                {!userId && <p className="home_wrapper_error">Veuillez choisir un utilisateur</p>}
            </div>
        </main>
    )
}
