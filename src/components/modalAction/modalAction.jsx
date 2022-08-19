import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

import { withStyles } from '@material-ui/core/styles';
import {Button, Dialog, IconButton, Typography} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

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

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ModalAction() {
    const {openModal, handleCloseModal} = useContext(ProjectContext);
    const {t: translateKey} = useTranslation();
    const shareUrl = 'https://www.dontfundwar.com/';
    const title = 'As long as you continue to do business in russia, innocent children and civilians are dying ' +
        'in Ukraine from the aggressor\'s army. Stop your bloody business, ' +
        'it is enough to sponsor the war against Ukraine!\n';

    return (
        <div>
            <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={openModal}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                    {translateKey('gen_modal-title')}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>{title}</Typography>
                </DialogContent>
                <DialogActions>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <Button autoFocus onClick={handleCloseModal} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
