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
        const company = card.brand.toLowerCase().includes(inputSearch.toLowerCase());
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
            {filteredData.map(item => (
                <CardItem key={item.id} {...item}/>
            ))}
        </div>
    )
};

export default Intro;