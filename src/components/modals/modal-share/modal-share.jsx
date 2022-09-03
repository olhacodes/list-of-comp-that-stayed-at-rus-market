import React from 'react';
import {useTranslation} from 'react-i18next';

import {withStyles} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";
import {LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton} from "react-share";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";

import CopyBtn from "../../copyBtn";

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

const ModalShare = withStyles(styles)(({message, hashtags, shareUrl, copied, classes}) => {
    const {t: translateKey} = useTranslation;
    return (
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
    )
});

export default ModalShare;