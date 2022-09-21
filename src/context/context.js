import React, {createContext, useEffect, useState} from 'react';
import cookies from "js-cookie";
import i18next from "i18next";

import data from '../data.json';

export const ProjectContext = createContext({});

const companiesFromData = data.Sheet1.map(company => company);

export const ProjectProvider = ({children}) => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(cookies.get('i18next') || 'en');

    const [companies, setCompanies] = useState(companiesFromData);
    const [inputSearch, setInputSearch] = useState('');
    const [filters, setFilters] = useState({status: 'all', category: 'all'}); // stayed, left, all

    const [openModal, setOpenModal] = useState(null);
    const [modalComponent, setModalComponent] = useState('');

    const [copied, setCopied] = useState(false);

    const filteredCompanies = companies
        .filter(card => { // searh filtering
            const companyMatch = card.company.toLowerCase().includes(inputSearch.toLowerCase());
            const countryMatch = card.country.toLowerCase().includes(inputSearch.toLowerCase());
            const brandsMatch = card.brands.toLowerCase().includes(inputSearch.toLowerCase());

            return companyMatch || countryMatch || brandsMatch
        })
        .filter(card => { // apply filters
            if (filters.status !== 'all' && card.status !== filters.status) {
                return false;
            }
            if(filters.category !== 'all' && card.category !== filters.category) {
                return false
            }

            return true;
        });

    const uniqueCategory = [...new Set(companies.map(item => item.category))].sort((a, b) => a.localeCompare(b))
    const uniqueCountry = [...new Set(companies.map(item => item.country))].sort((a, b) => a.localeCompare(b))

    const changeLanguage = (code) => {
        setCurrentLanguageCode(i18next.changeLanguage(code))
    };

    const setInputValue = e => {
        e.preventDefault();
        setInputSearch(e.target.value)
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

    const stayedCount = companies.filter(company => company.status.includes('stayed')).length;
    const leftCount = companies.filter(company => company.status.includes('left')).length;

    const value = {
        currentLanguageCode,
        changeLanguage,
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
        copied,
        setCopied,
        modalComponent,
        companies,
        filteredCompanies,
        setCompanies,
        setInputValue,
        setFilters,
        filters,
        stayedCount,
        leftCount,
        uniqueCategory,
        uniqueCountry
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
};

export default ProjectProvider;