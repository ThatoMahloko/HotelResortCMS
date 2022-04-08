import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline } from '@mui/material'
import Styles from '../Styles/Styles'
function Login() {
    const classes = Styles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth="lg" className={classes.container}>
                <Box component="form" sx={{ bgcolor: '#D2D2D2', height: '75vh', padding: '1%' }} >
                    <TextField type="email" variant='outlined' label="email address" sx={{ margin: 1 }} />
                    <TextField type="password" variant='outlined' label="password" sx={{ margin: 1 }} />
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Login