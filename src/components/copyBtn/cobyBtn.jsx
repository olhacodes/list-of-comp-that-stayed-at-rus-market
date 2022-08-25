import React, {useContext} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {IconButton} from "@material-ui/core";

import {ProjectContext} from '../../context/context';

const useStyles = makeStyles(() => ({
    copyToClipboard: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    iconButton: {
        width: 'fit-content'
    }
}));

const CopyBtn = ({value}) => {
    const {setCopied} = useContext(ProjectContext);
    const classes = useStyles();

    return (
        <>
            <CopyToClipboard text={value} onCopy={() => setCopied(true)} className={classes.copyToClipboard}>
                <IconButton className={classes.iconButton}>
                    <FileCopyIcon color="primary"/>
                </IconButton>
            </CopyToClipboard>
        </>
    )
};

export default CopyBtn;