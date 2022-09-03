import React from 'react';
import {useTranslation} from 'react-i18next';

import {Button} from "@material-ui/core";

const StatusBtns = ({companies}) => {
    const {t: translateKey} = useTranslation();
    const stayed = companies.filter(company => company.status === 'stayed')
    const left = companies.filter(company => company.status === 'left')

    return (
        <div className="status-btns d-flex gap-3 justify-content-center">
            <Button variant="outlined" color="secondary">{translateKey(`gen_stayed`) + " " + stayed.length}</Button>
            <Button variant="outlined" color="primary">{translateKey(`gen_left`) + " " + left.length}</Button>
        </div>
    )
};

export default StatusBtns;