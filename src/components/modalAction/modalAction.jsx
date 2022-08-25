import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';

import {TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, Dialog, IconButton, Typography} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";

import CopyBtn from "../copyBtn";
import {ProjectContext} from "../../context/context";

import './modal-action.css';

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
    hashtags: {
        color: '#00aced',
        justifyContent: 'start'
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const ModalAction = withStyles(styles)(({company, brand, classes}) => {
    const {openModal, setOpenModal, copied, setCopied} = useContext(ProjectContext);
    const {t: translateKey} = useTranslation();

    const shareUrl = 'https://www.dontfundwar.com/';
    const message = 'As long as you continue to do business in russia, innocent children and civilians are dying ' +
        'in Ukraine from the aggressor\'s army. Stop your bloody business, ' +
        'it\'s enough to sponsor the war against Ukraine!\n';
    const hashtags = `#${company.split(' ').join('')}StopFundTheWar ${brand ? `#Ban${brand}` : null} #RussiaIsATerroristState`;

    return (
        <div>
            <Dialog onClose={() => setOpenModal(null)} aria-labelledby="customized-dialog-title" open={openModal}>
                <DialogTitle id="customized-dialog-title" onClick={() => setCopied(false)} onClose={() => setOpenModal(null)}>
                    {translateKey('gen_modal-title')}
                </DialogTitle>
                <Card>
                    <CardContent>
                        <div className='d-flex flex-column'>
                            <CopyBtn value={message}/>
                            <Typography gutterBottom>{message}</Typography>
                            <Typography className={classes.hashtags} gutterBottom>{hashtags}</Typography>
                        </div>
                        <div className="d-flex">
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
});

export default ModalAction;
