import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';

import {TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share";
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, Dialog, Typography, CardMedia, Button} from '@material-ui/core';
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";

import CopyBtn from "../copyBtn";
import DialogTitle from '../dialog-title';
import {ProjectContext} from "../../context/context";

import './modal-action.css';

const styles = () => ({
    hashtags: {
        color: '#00aced',
        justifyContent: 'start'
    },
    copyBtn: {
        position: 'absolute',
        bottom: 0,
    }
});

const ModalAction = withStyles(styles)(({company, brand_hashtag, classes,
                                            modalComponent, alternatives_img, alternatives, id}) => {
    const {openModal, copied, setCopied, handleCloseModal, handleOpenModal} = useContext(ProjectContext);
    const {t: translateKey} = useTranslation();

    const shareUrl = 'https://www.dontfundwar.com/';
    const message = 'As long as you continue to do business in russia, innocent children and civilians are dying ' +
        'in Ukraine from the aggressor\'s army. Stop your bloody business, ' +
        'it\'s enough to sponsor the war against Ukraine!\n';
    const hashtags = `#${company.split(' ').join('')}StopFundTheWar ${brand_hashtag ? `#Ban${brand_hashtag}` : ''} #RussiaIsATerroristState`;

    return (
        <Dialog onClose={handleCloseModal} open={openModal} fullWidth={true}>
            {modalComponent === 'modal-action' ? (
            <>
                <DialogTitle onClick={() => setCopied(false)} onClose={handleCloseModal}>
                    {translateKey('gen_modal-title-actions')}
                </DialogTitle>
                <Card>
                    <CardContent>
                        <div className='modal__text d-flex flex-column'>
                            <CopyBtn value={message + hashtags}/>
                            <Typography gutterBottom>{message}</Typography>
                            <Typography className={classes.hashtags} gutterBottom>{hashtags}</Typography>
                        </div>
                        <div className="d-flex">
                            <TwitterShareButton
                                url={shareUrl}
                                title={message+ hashtags}
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon className='mx-1' size={32} round />
                            </LinkedinShareButton>
                            {copied ? <Alert className='flex-grow-1' icon={<CheckIcon fontSize="inherit" />} severity="success">
                                {translateKey('gen_copied')}
                            </Alert> : null}
                        </div>
                    </CardContent>
                </Card>
            </>
                ) : (
                <>
                    <DialogTitle onClick={() => setCopied(false)} onClose={handleCloseModal}>
                        {translateKey('gen_modal-title-alternatives')}
                    </DialogTitle>
                    <Card>
                        <CardContent>
                            <div className='modal__text d-flex flex-column'>
                                <img className='img-thumbnail w-50' src={alternatives_img} alt={translateKey(alternatives)}/>
                                <ul className="list-group">
                                    {alternatives.split(' ').map(altBrand => (
                                        <li class="list-group-item">{altBrand}</li>
                                    ))}
                                </ul>
                                <Typography>{translateKey('gen_modal-alternative-text')}</Typography>
                                <Button variant="outlined" color="primary"
                                        onClick={() => {
                                            handleOpenModal(id, 'modal-action')
                                        }}>
                                    {translateKey('gen_push-company')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </>

            )}
        </Dialog>
    );
});

export default ModalAction;
