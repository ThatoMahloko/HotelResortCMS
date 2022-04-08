import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import Styles from '../Styles/Styles'

function Login() {
    const classes = Styles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth="lg" className={classes.container}>
                <Box component="form" sx={{ bgcolor: '#D2D2D2', height: '75vh', padding: '20%' }} >
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <TextField classsName={classes.field} type="email" variant='outlined' label="email address" sx={{ margin: 1 }} style={{ width: 300 }} />
                        <TextField classsName={classes.field} type="password" variant='outlined' label="password" sx={{ margin: 1 }} style={{ width: 300 }} />
                    </form>
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Link to='/Signup'>
                            <Button className={classes.textButton}>FORGOT PASSWORD</Button>
                        </Link>
                    </form>
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Button variant="contained" size='large' className={classes.buttonLogin}>LOG IN</Button>
                    </form>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Login