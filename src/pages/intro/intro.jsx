import React, {useState} from 'react';

import data from "../../data.json";

import Search from "../../components/search";
import CardItem from "../../components/card-item";

const Intro = () => {
    const [inputSearch, setInputSearch] = useState('');

    const setInputValue = e => {
        e.preventDefault();
        setInputSearch(e.target.value)
    }

    const filteredData = data.Sheet1.filter(card => {
        const company = card.company.toLowerCase().includes(inputSearch.toLowerCase());
        const country = card.country.toLowerCase().includes(inputSearch.toLowerCase());
        if(inputSearch == '') {
            return card
        }else if(company || country) {
            return card
        }
    })

    return (
        <div className="intro">
            <Search setInputValue={setInputValue}/>
            <div className="intro__cards d-flex flex-row-reverse gap-3 flex-wrap align-content-stretch mt-5">
                {filteredData.map(item => (
                    <CardItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
};

export default Intro;