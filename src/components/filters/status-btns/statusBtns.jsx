import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import data from '../../../data.json'

import {Button} from "@material-ui/core";
import {ProjectContext} from "../../../context/context";

const StatusBtns = () => {
    const {t: translateKey} = useTranslation();
    const { stayedCount, leftCount, filters, setFilters} = useContext(ProjectContext);

    return (
        <div className="status-btns d-flex gap-3 justify-content-center">
            <Button variant="outlined" color='primary' onClick={() => setFilters({...filters, status: 'all'})}>
                {translateKey('gen_all')}
            </Button>
            <Button variant="outlined" color='secondary' onClick={() => setFilters({...filters, status: 'stayed'})}>
                {translateKey('gen_stayed') + " " + stayedCount}
            </Button>
            <Button variant="outlined" color='primary' onClick={() => setFilters({...filters, status: 'left'})}>
                {translateKey('gen_left') + " " + leftCount}
            </Button>
        </div>
    )
};

export default StatusBtns;