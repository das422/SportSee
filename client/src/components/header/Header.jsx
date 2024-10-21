import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamb from '../../assets/hamb.svg';
import Logo from '../../assets/logo.png';
import { useDataContext } from '../../context/dataContext';
import './header.scss';

export default function Header() {

    const { userId } = useDataContext();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="header">
            <img className="header_img" src={Logo} alt="SportSee - logo" />
            <img className="header_hamb" src={Hamb} alt="SportSee - menu" onClick={() => setToggleMenu(!toggleMenu)} />
            <nav className={toggleMenu ? "header_nav visible" : "header_nav"}>
                <ul>
                    <Link to="/">
                        <li>Accueil</li>
                    </Link>
                    <Link to={userId && `/profile/${userId}`}>
                        <li>Profil</li>
                    </Link>
                    <Link to="/">
                        <li>Réglage</li>
                    </Link>
                    <Link to="/">
                        <li>Communauté</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}