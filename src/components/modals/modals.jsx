import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';

import {
    Card,
    CardContent,
    Dialog,
} from '@material-ui/core';
import DialogTitle from '../dialog-title';

import {ProjectContext} from "../../context/context";
import ModalShare from "./modal-share";

import './modals.css';

const Modals = ({company, brand_hashtag}) => {
    const {openModal, setCopied, handleCloseModal, modalComponent} = useContext(ProjectContext);
    const {t: translateKey} = useTranslation();

    const shareUrl = 'https://www.dontfundwar.com/';
    const message = 'As long as you continue to do business in russia, innocent children and civilians are dying ' +
        'in Ukraine from the aggressor\'s army. Stop your bloody business, ' +
        'it\'s enough to sponsor the war against Ukraine!\n';
    const hashtags = `#${company.split(' ').join('')}StopFundTheWar 
    ${brand_hashtag ? `#Ban${brand_hashtag}` : ''} 
    #RussiaIsATerroristState`;

    return (
        <Dialog onClose={handleCloseModal} open={openModal} fullWidth={true}>
            {modalComponent === 'modal-action' ? (
            <>
                <DialogTitle onClick={() => setCopied(false)} onClose={handleCloseModal}>
                    {translateKey('gen_modal-title-actions')}
                </DialogTitle>
                <ModalShare shareUrl={shareUrl} message={message} hashtags={hashtags}/>
            </>
                ) : (
                <>
                    <DialogTitle onClick={() => setCopied(false)} onClose={handleCloseModal}>
                        {translateKey('gen_modal-title-alternatives')}
                    </DialogTitle>
                    <Card>
                        <CardContent>

                        </CardContent>
                    </Card>
                </>
            )}
        </Dialog>
    );
};

export default Modals;
