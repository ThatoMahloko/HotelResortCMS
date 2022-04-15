import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline } from '@mui/material'
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

    function Login() {
        setLoad(true)
        setTimeout(function name() {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user
                    console.log("Successfully Logged in")
                    navigate('/Home')
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })
            setLoad(false)
        }, 10000)
        console.log(email, password)
    }

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
                                <Rings/>
                            </form>
                   }

                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Link to='/Signup'>
                            <Button className={classes.textButton}>SIGN UP</Button>
                        </Link>
                    </form>

                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Login