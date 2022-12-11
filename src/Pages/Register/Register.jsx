import React, { useState } from 'react'
import './Register.scss'
import { loginSuccess } from '../../redux/userSlice'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios'

function Register() {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [username1, setUsername1] = useState('');
    const [pwd1, setpwd1] = useState('');
    const [pwd2, setpwd2] = useState('');

    const dispatch = useDispatch()

    const handlesubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            name: username,
            surname: username1,
            password: pwd1
        }
        try {
            const response = await axios.post('http://localhost:5000/users/register', userData)
            dispatch(loginSuccess(response.data))
            setEmail('')
            setUsername("")
            setUsername1("")
            setpwd1("")
            setpwd2("")
        } catch (err) {
            console.log(err)

        }
    }
    return (
        <div className='main-Register'>
            <div className="left-side">
                <div className="header">
                    <img src="https://communityactionmk.org/wp-content/uploads/2022/08/Volunteer-Opportunity-of-the-Week-Blog-banner-8.jpg" id='logo-img' alt="" srcset="" />
                </div>
                <p>Вы профессионал в своём деле? Вы всегда ищете новые пути? Вы действительно всей душой желаете, чтобы в жизни наших детей были долговременные перемены к лучшему?</p>

            </div>
            <div className="right-side">
                <div className="top-right">
                    <p>Уже есть аккаунт?
                        <Link id='Links-signin' to='/login'>Войти</Link>
                    </p>
                </div>
                <div className="body-right">
                    <div className="container">
                        <h1>Регистрация</h1>
                        <form onSubmit={handlesubmit}>
                            <div className="input-group">

                                <input placeholder="Введите Ваше имя" type="text" name="Fname" value={username}
                                    onChange={(e) => { setUsername(e.target.value) }} id="fname" placeholeder="lulme" />
                            </div>
                            <div className="input-group">
                                <input placeholder="Введите Вашу фамилию" type="text" name="lname" value={username1}
                                    onChange={(e) => { setUsername1(e.target.value) }} id="lname" />
                            </div>
                            <div className="input-group">

                                <input placeholder="Введите Ваш email" type="Email" name="email" value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} id="email1" />
                            </div>
                            <div className="input-group">

                                <input placeholder="Введите Ваш пароль" type="password" value={pwd1}
                                    onChange={(e) => { setpwd1(e.target.value) }} name="pwd" id="pwd1" />
                            </div>
                            <div className="input-group">

                                <input placeholder="Подтвердите Ваш email" type="password" value={pwd2}
                                    onChange={(e) => { setpwd2(e.target.value) }} name="pwd" id="pwd2" />
                            </div>
                            <input type="submit" id='sbtn' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;