import React from 'react'
import { Box, TextField, styled, Button, Container, CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import Styles from '../Styles/Styles'

function Signup() {
    const classes = Styles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth="lg" className={classes.container}>
                <Box component="form" sx={{ bgcolor: '#D2D2D2', height: '75vh', paddingTop: '15%', paddingBottom: 20, paddingLeft: '20%', paddingRight: '20%' }} >
                    <div style={{ marginBottom: 50 }}>
                        <form noValidate autoComplete='off' className={classes.formContainer}>
                            <TextField classsName={classes.field} type="text" variant='outlined' label="branch code" sx={{ margin: 1 }} style={{ width: 300 }} />
                            <TextField classsName={classes.field} type="email" variant='outlined' label="email" sx={{ margin: 1 }} style={{ width: 300 }} />
                        </form>
                        <form noValidate autoComplete='off' className={classes.formContainer}>
                            <TextField classsName={classes.field} type="password" variant='outlined' label="password" sx={{ margin: 1 }} style={{ width: 300 }} />
                            <TextField classsName={classes.field} type="password" variant='outlined' label="confirm password" sx={{ margin: 1 }} style={{ width: 300 }} />
                        </form>
                        <form noValidate autoComplete='off' className={classes.formContainer}>
                            <Button variant="contained" size='large' className={classes.buttonLogin}>LOG IN</Button>
                        </form>
                        <form noValidate autoComplete='off' className={classes.formContainer}>
                            <Link to='/'>
                                <Button className={classes.textButton}>ALREADY SIGNED UP?</Button>
                            </Link>
                        </form>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    )
}


export default Signup