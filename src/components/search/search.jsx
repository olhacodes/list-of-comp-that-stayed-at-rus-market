import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import {InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import jsonData from '../../data.json';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%'
    },
}));

const Search = () => {
    const {t: translateKey} = useTranslation();
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const setInputValue = e => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <form className="container d-flex mb-3">
            <InputBase
                onChange={setInputValue}
                className={classes.input}
                placeholder={translateKey('gen_search')}
                inputProps={{ 'aria-label': translateKey('gen_search')}}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </form>
    )
};

export default Search;