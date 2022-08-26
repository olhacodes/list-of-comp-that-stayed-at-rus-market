import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import {ProjectContext} from '../../context/context';

import {CardHeader, Chip, Card, CardMedia, CardContent, CardActions,
    Avatar, IconButton, Link, Button, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ModalAction from "../modalAction/";
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '30%',
        minWidth: '200px',
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        cursor: 'pointer',
        transition: '1s ease',
        '&:hover': {
           transform: 'scale(1.2)',
           transition: '1s ease',
        },
    },
    chip: {
        position: 'absolute',
        right: '5%',
        top: '60%',
    },
    CardContent: {
        padding: '0.5rem',
    },
    cardActions: {
        justifyContent: 'end',
        gap: '5%'
    },
    alert: {
        marginTop: '1rem',
        padding: '0.375rem',
    },
    shareIcon: {
        cursor: 'pointer',
    },
}));

export default function CardItem({id, logo, brand_hashtag, country, company, img, alertMessage,
                                     proof_url, category, alternatives_img, alternatives, brands}) {
    const {t: translateKey} = useTranslation();
    const {handleOpenModal, openModal, modalComponent} = useContext(ProjectContext);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={logo} alt={translateKey(country)} className={classes.avatar}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={company}
                subheader={translateKey(country)}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={company}
                onClick={() => {
                    handleOpenModal(id, 'modal-action')
                }}
            />
            <Chip label={translateKey(category)} className={classes.chip} />
            <CardContent>
                {alertMessage ? (
                    <Alert className={classes.alert} severity="error">{translateKey(alertMessage)}</Alert>)
                    : null}
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Link onClick={() => handleOpenModal(id, 'modal-action')}
                className={classes.shareIcon}>
                    <ShareIcon />
                    {translateKey('gen__share')}
                </Link>
                <Link target="_blank" href={proof_url}><AttachFileIcon />
                    {translateKey('gen__source')}
                </Link>
                {alternatives ? (
                    <Button variant="outlined" color="primary"
                            onClick={() => {
                                handleOpenModal(id, 'modal-alternatives')
                            }}>
                        {translateKey('gen_alternatives')}
                    </Button>
                ) : null}
            </CardActions>
            {id === openModal ? (
                <ModalAction company={company}
                             brand_hashtag={brand_hashtag}
                             modalComponent={modalComponent}
                             alternatives_img={alternatives_img}
                             alternatives={alternatives}
                             handleOpenModal={handleOpenModal} id={id}/>
            ): null}
        </Card>
    );
}
