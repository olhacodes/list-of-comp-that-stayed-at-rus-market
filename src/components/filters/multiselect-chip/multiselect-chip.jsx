import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import {ProjectContext} from "../../../context/context";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectChip() {
    const classes = useStyles();
    const {t: translateKey} = useTranslation();

    const [category, setCategory] = useState([]);
    const {uniqueCategory, uniqueCountry} =useContext(ProjectContext);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const filtersChip = [
        {
            inputLabel: 'gen_category',
            values: uniqueCategory
        },
        {
            inputLabel: 'gen_country',
            values: uniqueCountry
        },
    ];

    return (
        <div>
            {filtersChip.map(chip => (
                <FormControl className={classes.formControl}>
                    <InputLabel>{translateKey(chip.inputLabel)}</InputLabel>
                    <Select
                        multiple
                        value={category}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {chip.values.map(filter => (
                            <MenuItem key={filter} value={filter}>
                                {translateKey(filter)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ))}
        </div>
    );
}
