import React, { useContext } from 'react';

import Search from "../../components/search";
import StatusBtns from "../../components/filters/status-btns";
import CardItem from "../../components/card-item";
import Modals from "../../components/modals";

import {ProjectContext} from "../../context/context";

const Intro = () => {
    const { openModal, setInputValue, filteredCompanies} = useContext(ProjectContext);

    return (

        <div className="intro">
            <Search setInputValue={setInputValue}/>
            <StatusBtns/>
            <div className="intro__cards d-flex flex-row-reverse gap-3 flex-wrap align-content-stretch mt-5 justify-content-center">
                {filteredCompanies.map(item => (
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