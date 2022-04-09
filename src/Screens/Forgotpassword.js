import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import Styles from '../Styles/Styles'

function Forgotpassword() {
    const classes = Styles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth="lg" className={classes.container}>
                <Box component="form" sx={{ bgcolor: '#D2D2D2', height: '83vh', padding: '20%' }} >
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <TextField classsName={classes.field} type="email" variant='outlined' label="email address" sx={{ margin: 1 }} style={{ width: '90%' }} />
                    </form>

                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Button variant="contained" size='large' className={classes.buttonLogin}>SEND RESET EMAIL</Button>
                    </form>
                    <form noValidate autoComplete='off' className={classes.formContainer}>
                        <Link to='/'>
                            <Button className={classes.textButton}>LOGIN</Button>
                        </Link>
                    </form>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Forgotpassword