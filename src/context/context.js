import React, {createContext, useState} from 'react';
import cookies from "js-cookie";
import i18next from "i18next";

export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'en');
    const [openModal, setOpenModal] = React.useState(false);
    const [copied, setCopied] = useState(false);

    const changeLanguage = (code) => {
        setCurrentLanguageCode(i18next.changeLanguage(code))
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const value = {
        currentLanguageCode,
        changeLanguage,
        openModal,
        handleOpenModal,
        handleCloseModal,
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