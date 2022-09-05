import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import {Input, InputLabel, MenuItem, FormControl, Select, Chip} from '@material-ui/core';

import {ProjectContext} from "../../../context/context";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 400,
        width: '50%'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
        width: 'fit-content'
    }
}));

export default function MultipleSelectChip() {
    const classes = useStyles();
    const {t: translateKey} = useTranslation();

    const [category, setCategory] = useState([]);
    const [country, setCountry] = useState([]);
    const {uniqueCategory, uniqueCountry, setFilters, filters} =useContext(ProjectContext);

    const filtersChips = [
        {
            inputLabel: 'gen_category',
            filters: uniqueCategory,
            onChange: setCategory,
            value: category
        },
        {
            inputLabel: 'gen_country',
            filters: uniqueCountry,
            onChange: setCountry,
            value: country
        },
    ];

    const handleDeleteChip = (chipToDelete) => () => {
        filtersChips.map(filter => filter.onChange((chips) => chips.filter((chip) => chip !== chipToDelete)));
    };

    return (
        <div className='d-flex justify-content-center gap-3'>
            {filtersChips.map(chip => (
                <FormControl key={chip.inputLabel} className={classes.formControl}>
                    <InputLabel>{translateKey(chip.inputLabel)}</InputLabel>
                    <Select
                        multiple
                        value={chip.value}
                        onChange={(e) => chip.onChange(e.target.value)}
                        input={<Input />}>
                        {chip.filters.map(filter => (
                            <MenuItem key={filter} value={filter}>
                                {translateKey(filter)}
                            </MenuItem>
                        ))}
                    </Select>
                    <div className='d-flex flex-wrap'>
                        {chip.value.map(value => (
                            <Chip key={value} label={translateKey(value)} className={classes.chip}
                            onDelete={handleDeleteChip(value)}/>
                        ))}
                    </div>
                </FormControl>
            ))}
        </div>
    );
}