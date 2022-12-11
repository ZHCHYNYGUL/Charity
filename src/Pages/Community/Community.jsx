import React from 'react';
import './Community.css'
import bckgrnd from '../../assets/logo.jpg'
import first from '../../assets/book.png'
import second from '../../assets/human.png'
import third from '../../assets/pencil.png'
import fourth from '../../assets/speaker.png'
const Community = () => {
    return (
        <div className="community-cover">
            <div className='container'>
                <div className="community-title">
                    <h2 className='commmunity-name'>Исследования</h2>
                    <hr className='community-hr' />
                </div>
                <div className="community-descr">
                    <div className="community-bckgrnd">
                        <img className='community-img' src={bckgrnd} alt="assets" />
                    </div>
                    <div className="community-text">
                        <h2 className='community-title' >
                            Отчёты
                        </h2>
                        <p className="community-subtitle">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit tempora deleniti voluptas asperiores perspiciatis neque error. Magni soluta ipsa quaerat molestiae, esse eveniet ullam nam at animi harum molestias porro atque ab, eligendi quo hic voluptatem non minus dolorem vero incidunt ducimus, repellat vitae? Nisi deserunt, mollitia eligendi commodi quasi voluptatum est. Ut, natus vel minus rerum pariatur magnam similique?
                        </p>
                    </div>
                </div>
                <div className="notes">
                    <div className="notes-card">
                        <div className="notes-img">
                            <img src={first} alt="" />
                        </div>
                        <h3 className='notes-title'>Знания</h3>
                        <p className='notes-descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia autem odio officia voluptate soluta.</p>
                    </div>
                    <div className="notes-card">
                        <div className="notes-img">
                            <img src={second} alt="" />
                        </div>
                        <h3 className='notes-title'>
                            Волонтёрство
                        </h3>
                        <p className='notes-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus fugiat nulla mollitia, deleniti laboriosam!</p>
                    </div>
                    <div className="notes-card">
                        <div className="notes-img">
                            <img src={third} alt="" />
                        </div>
                        <h3 className='notes-title'>
                            Сотрудничество
                        </h3>
                        <p className='notes-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus enim. Doloribus veritatis libero quibusdam.</p>
                    </div>
                    <div className="notes-card">
                        <div className="notes-img">
                            <img src={fourth} alt="" />
                        </div>
                        <h3 className='notes-title'>Объявления</h3>
                        <p className='notes-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo aperiam beatae pariatur, consequatur ratione.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Community;