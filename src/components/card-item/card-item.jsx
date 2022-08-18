import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import {ProjectContext} from '../../context/context';

import {CardHeader, Chip, Card, CardMedia, CardContent, CardActions,
    Avatar, IconButton, Typography, Link, Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ModalAction from "../modalAction/";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '30%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function CardItem({imgCountry, country, brand, img, alertMessage,proof_url, proof_explanation, category}) {
    const {t: translateKey} = useTranslation();
    const {handleOpenModal} = useContext(ProjectContext);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={imgCountry} alt={translateKey(country)} className={classes.avatar}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={brand}
                subheader={translateKey(country)}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={translateKey(brand)}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {translateKey(proof_explanation)}
                </Typography>
                {alertMessage ? (
                    <Alert severity="error">{translateKey(alertMessage)}</Alert>)
                    : null}
            </CardContent>
            <CardActions disableSpacing>
                <Chip label={translateKey(category)} />
                <IconButton aria-label="share">
                    <Link target="_blank" href={proof_url}><ShareIcon /></Link>
                </IconButton>
                <Button variant="outlined" color="primary" onClick={handleOpenModal}>
                    {translateKey('gen_push-company')}
                </Button>
            </CardActions>
            <ModalAction/>
        </Card>
    );
}
