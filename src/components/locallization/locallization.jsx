import React, {useEffect} from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

import GlobeIcon from '../globeIcon';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'en',
    },
    {
        code: 'ua',
        name: 'Українська',
        country_code: 'ua',
    }
];

export default function Locallization() {
    const currentLanguageCode = cookies.get('i18next') || 'en';

    return (
        <div className="container pt-3">
            <div className="language-select">
                <div className="d-flex justify-content-end align-items-center language-select-root">
                    <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <GlobeIcon/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {languages.map(({code, name, country_code}) => (
                                <li key={country_code}>
                                    <a href="/" className={classNames('dropdown-item', {
                                        disabled: currentLanguageCode === code,
                                    })}
                                       onClick={() => {
                                           i18next.changeLanguage(code)
                                       }}>
                    <span className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                              opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                    ></span>{name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}