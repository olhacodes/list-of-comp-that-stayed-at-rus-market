import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardHeader, Dialog, IconButton, Typography} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

import CopyBtn from "../copyBtn";
import {ProjectContext} from "../../context/context";

import './modal-action.css';
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;


    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function ModalAction() {
    const {openModal, handleCloseModal, copied} = useContext(ProjectContext);
    const {t: translateKey} = useTranslation();
    const shareUrl = 'https://www.dontfundwar.com/';
    const message = 'As long as you continue to do business in russia, innocent children and civilians are dying ' +
        'in Ukraine from the aggressor\'s army. Stop your bloody business, ' +
        'it is enough to sponsor the war against Ukraine!\n';

    return (
        <div>
            <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={openModal}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                    {translateKey('gen_modal-title')}
                </DialogTitle>
                <Card>
                    <CardContent>
                        <div className='d-flex'>
                            <Typography gutterBottom>{message}</Typography>
                            <CopyBtn value={message}/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <TwitterShareButton
                                url={shareUrl}
                                title={message}
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                                <LinkedinIcon className='mx-1' size={32} round />
                            </LinkedinShareButton>
                            {copied ? <Alert className='flex-grow-1' icon={<CheckIcon fontSize="inherit" />} severity="success">
                                {translateKey('gen_copied')}
                            </Alert> : null}
                        </div>
                    </CardContent>
                </Card>
            </Dialog>
        </div>
    );
}
