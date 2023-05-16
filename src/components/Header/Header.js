import React from 'react';
import '../Header/Header.scss';
import avatar from '../../assets/logos/images/ron-swanson.png'

function Header() {
    return (
        <section className="header">
            <div className="header__search">
                <form className="header__search--input">
                    <input className="header__search--input-text" placeholder="Search" type="text" name="searchBar" id="searchBar" size="20" />
                </form>
            </div>
            <img className="header__image" src={avatar} alt="profile picture"></img>
        </section>
    )
}

export default Header