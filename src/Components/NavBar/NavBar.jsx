import React, { useState } from 'react';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../../redux/userSlice';
// import logo from '../../assets/cards.png'
const NavBar = () => {
    const [active, setActive] = useState('nav_menu')
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }
    const user = useSelector(s => s.user.user)
    const dispatch=useDispatch()
    const handleLogOut=()=>{
        dispatch(logOut())
    }
    return (
        <div>
            <nav className="nav">
                <a href="">logo</a>
                <ul className={active}>

                    <li className="nav_item"><Link to='/about'>О проекте</Link></li>
                    <li className="nav_item"><Link to='/community'>Истории и отчёты</Link></li>
                    <li className="nav_item"><Link to='/home'>Публикации</Link></li>
                    <li className="nav_item"><Link to='/donation'>Сделать пожертвование</Link></li>

                </ul>
                {user ? <button className="btn_sign_in" onClick={handleLogOut}>Выйти</button> : <div className="registration">
                    <Link to="/login"><button className="btn_sign_in">Вход</button></Link>
                    <Link to="/register"><button className="btn_register">Регистрация</button></Link>
                </div>}

                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>

        </div>
    );
};

export default NavBar;

