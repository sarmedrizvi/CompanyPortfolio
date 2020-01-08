import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
// import { InputButton } from '../Input-Button/Button'
import './MessageBox.scss'
import '../Input-Button/Button.scss'

export const MessageBox = ({ onContactClick, title, innerText }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    return (
        <div className='message-box'>
            <Button type='submit' id='button' onClick={() => { handleClickOpen(); onContactClick() }}>Submit</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`${title}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {innerText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {innerText === "Thank you for the response" ?
                        <Button onClick={handleClose} color="primary" >
                            OK
                        </Button>
                        :
                        innerText === "something is wrong" ?
                            <Button onClick={handleClose} color="primary" >
                                DISMISS
                        </Button>
                            :
                            null

                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}