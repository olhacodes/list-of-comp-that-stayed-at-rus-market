import React, {createContext, useState} from 'react';
import cookies from "js-cookie";
import i18next from "i18next";

export const ProjectContext = createContext({});

export const ProjectProvider = ({children}) => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'en');
    const [openModal, setOpenModal] = useState(null);
    const [copied, setCopied] = useState(false);
    const [modalComponent, setModalComponent] = useState('');

    const changeLanguage = (code) => {
        setCurrentLanguageCode(i18next.changeLanguage(code))
    };

    const handleOpenModal = (id, modal) => {
        setOpenModal(id)
        setModalComponent(modal)
    };

    const handleCloseModal = () => {
        setOpenModal(null)
        setCopied(null)
        setModalComponent('')
    }

    const value = {
        currentLanguageCode,
        changeLanguage,
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
        copied,
        setCopied,
        modalComponent
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
};

export default ProjectProvider;