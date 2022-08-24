import React, {createContext, useState} from 'react';
import cookies from "js-cookie";
import i18next from "i18next";

export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'en');
    const [openModal, setOpenModal] = useState(null);
    const [copied, setCopied] = useState(false);

    const changeLanguage = (code) => {
        setCurrentLanguageCode(i18next.changeLanguage(code))
    };

    const handleOpenModal = (id) => {
        setOpenModal(id);
    };

    const value = {
        currentLanguageCode,
        changeLanguage,
        openModal,
        setOpenModal,
        handleOpenModal,
        copied,
        setCopied
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
};

export default ProjectProvider;