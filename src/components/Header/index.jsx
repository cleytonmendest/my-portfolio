import React from 'react'
import './styles.scss'

const Header = ({ setSection, sectionActive }) => {


    return (
        <header className='header__main-container'>
            <nav className='header__wrapper'>
                <div className='header__logo-container'>
                    <button onClick={() => setSection('home')}>
                        <h1 className={sectionActive === 'home' ? 'active' : ''}>CM<span>.</span></h1>
                    </button>
                </div>
                <ul className='header__links-container'>
                    <li><button className={sectionActive === 'about' ? 'active' : ''} onClick={() => setSection('about')}>Sobre</button></li>
                    <li><button className={sectionActive === 'projects' ? 'active' : ''} onClick={() => setSection('projects')}>Projetos</button></li>
                    <li><button className={sectionActive === 'contact' ? 'active' : ''} onClick={() => setSection('contact')}>Contato</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header