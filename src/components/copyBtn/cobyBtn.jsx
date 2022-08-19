import React, {useContext} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import {IconButton} from "@material-ui/core";

import {ProjectContext} from '../../context/context';

const CopyBtn = ({value}) => {
    const {setCopied} = useContext(ProjectContext);

    return (
        <>
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                <IconButton>
                    <FileCopyIcon color="primary"/>
                </IconButton>
            </CopyToClipboard>
        </>
    )
};

export default CopyBtn;