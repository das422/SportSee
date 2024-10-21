import { Link } from 'react-router-dom';
import LogoCycle from '../../assets/cycle.png';
import LogoDumbbell from '../../assets/dumbbell.png';
import LogoSwim from '../../assets/swim.png';
import LogoYoga from '../../assets/yoga.png';
import './sidebar.scss';

export default function Sidebar() {
    return (
        <aside className='sidebar'>
            <nav className='sidebar_nav'>
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={LogoYoga} alt="Yoga" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoSwim} alt="Natation" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoCycle} alt="Cyclisme" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoDumbbell} alt="Musculation" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <footer className='sidebar_footer'>
                <p>Copiryght, SportSee 2020</p>
            </footer>
        </aside>
    )
}