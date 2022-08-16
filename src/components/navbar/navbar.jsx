import React from 'react';
import {useTranslation} from 'react-i18next';

import Locallization from "../locallization";
import cookies from "js-cookie";

const navlinks = [
    {name: "menu__home", link: '/'},
    {name: "menu__news", link: '/news'},
];

const Navbar = () => {
    const {t: translateKey} = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const localeDonateLink = `https://savelife.in.ua/${currentLanguageCode}/`;

    return (
        <div className="container">
            <Locallization/>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    {navlinks.map(nav => (
                        <li key={nav.name}><a href={nav.link} className="nav-link px-2 link-secondary">
                            {translateKey(nav.name)}</a>
                        </li>
                    ))}
                    <a className="btn btn-outline-dark" role="button" href={localeDonateLink} target='_blank'>
                        {translateKey('gen__save-life')}
                    </a>
                </ul>
            </header>
        </div>
    )
};

export default Navbar;