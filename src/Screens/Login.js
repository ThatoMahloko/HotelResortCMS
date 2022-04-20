import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline, Modal, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { db, firebase } from '../config/firebase'
import Styles from '../Styles/Styles'
import { Rings } from 'react-loader-spinner'

function Login() {
    const classes = Styles()
    const navigate = useNavigate()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [load, setLoad] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalMessage, setModalMessage] = React.useState("")
    const [modalMessageErrorOrSuccess, setModalMessageErrorOrSuccess] = React.useState("")

    function Login() {
        setLoad(true)
        setTimeout(function name() {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user
                    console.log("Successfully Logged in")
                    navigate('/Home')
                    setModalMessageErrorOrSuccess('Error!')
                    setModalMessage("Successfully Logged In")
                    handleOpen()
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setModalMessageErrorOrSuccess('Error!')
                    setModalMessage(errorMessage)
                    handleOpen()
                });
            setLoad(false)
        }, 2000)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth="lg" className={classes.container}>
                <Box component="form" sx={{ bgcolor: '#D2D2D2', height: '83vh', padding: '20%' }} >
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <TextField classsName={classes.field} type="email" variant='outlined' label="email address" sx={{ margin: 1 }} style={{ width: 300 }} onChange={(email) => setEmail(email.target.value)} />
                        <TextField classsName={classes.field} type="password" variant='outlined' label="password" sx={{ margin: 1 }} style={{ width: 300 }} onChange={(password) => setPassword(password.target.value)} />
                    </form>
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Link to='/Forgotpassword'>
                            <Button className={classes.textButton}>FORGOT PASSWORD</Button>
                        </Link>
                    </form>
                    {
                        load == false ?
                            <form noValidate autoComplete='off' className={classes.formContainer}>
                                <Button variant="contained" size='large' className={classes.buttonLogin} onClick={Login}>LOG IN</Button>
                            </form>
                            :
                            <form className={classes.formContainer}>
                                <Rings />
                            </form>
                    }

                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Link to='/Signup'>
                            <Button className={classes.textButton}>SIGN UP</Button>
                        </Link>
                    </form>

                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {modalMessageErrorOrSuccess}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {modalMessage}
                        </Typography>
                    </Box>
                </Modal>
            </Container>
        </React.Fragment>
    )
}

export default Login