import React from 'react';
import {useTranslation} from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import {InputBase} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%'
    },
}));

const Search = ({setInputValue}) => {
    const {t: translateKey} = useTranslation();
    const classes = useStyles();

    return (
        <form className="container d-flex mb-3">
            <InputBase
                onChange={setInputValue}
                className={classes.input}
                placeholder={translateKey('gen_search')}
                inputProps={{ 'aria-label': translateKey('gen_search')}}
            />
        </form>
    )
};

export default Search;