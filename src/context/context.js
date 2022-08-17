import React, {createContext, useState} from 'react';
import cookies from "js-cookie";
import i18next from "i18next";

export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'en');

    const changeLanguage = (code) => {
        setCurrentLanguageCode(i18next.changeLanguage(code))
    };

    const value = {
        currentLanguageCode,
        changeLanguage
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
};

export default ProjectProvider;