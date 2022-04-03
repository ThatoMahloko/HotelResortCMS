import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Menu, ArrowRight } from '@mui/icons-material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Styles from '../Styles/Styles'

function Home() {
    const [pressed, setPressed] = React.useState(false)
    const classes = Styles()

    function togglemenuPress() {
        if (pressed == false) {
            setPressed(true)
        } else {
            setPressed(false)
        }
    }

    return (
        <div>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar variant="regular" >
                    {
                        pressed == false ?
                            <>
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={togglemenuPress}>
                                    <Menu />
                                </IconButton>
                                <Button variant='text' color="inherit">
                                    <Typography variant="h6" color="inherit" component="div">
                                        Dashboard
                                    </Typography>
                                </Button>
                            </>
                            :
                            <>
                                <IconButton color="inherit" edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={togglemenuPress}>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                                <Button variant='text' color="inherit">
                                    <Typography variant="h6" color="inherit" component="div">
                                        Add
                                    </Typography>
                                </Button>

                                <Button variant='text' color="inherit">
                                    <Typography variant="h6" color="inherit" component="div">
                                        Edit
                                    </Typography>
                                </Button>

                                <Button variant='text' color="inherit">
                                    <Typography variant="h6" color="inherit" component="div">
                                        Bookings
                                    </Typography>
                                </Button>
                            </>

                    }

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Home