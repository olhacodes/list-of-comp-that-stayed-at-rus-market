import React, {useState, useContext, useEffect} from 'react';

import Search from "../../components/search";
import CardItem from "../../components/card-item";
import Modals from "../../components/modals";

import {ProjectContext} from "../../context/context";
import StatusBtns from "../../components/filters/status-btns";

const Intro = () => {
    const [inputSearch, setInputSearch] = useState('');
    const {companies, openModal} = useContext(ProjectContext);

    const setInputValue = e => {
        e.preventDefault();
        setInputSearch(e.target.value)
    }

    const filteredData = companies.filter(card => {
        const company = card.company.toLowerCase().includes(inputSearch.toLowerCase());
        const country = card.country.toLowerCase().includes(inputSearch.toLowerCase());
        const brands = card.brands.toLowerCase().includes(inputSearch.toLowerCase())
        if(inputSearch == '') {
            return card
        }else if(country || company || brands) {
            return card
        }
    })

    return (
        <div className="intro">
            <Search setInputValue={setInputValue}/>
            <StatusBtns companies={companies}/>
            <div className="intro__cards d-flex flex-row gap-3 flex-wrap align-content-stretch mt-5">
                {filteredData.map(item => (
                    <>
                        <CardItem key={item.id} {...item}/>
                        {item.id === openModal ? (
                            <Modals {...item}/>
                        ) : null}
                    </>
                ))}
            </div>
        </div>
    )
};

export default Intro;