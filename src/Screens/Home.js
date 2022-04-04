import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, TextField, Container } from '@mui/material'
import { Menu, ArrowRight } from '@mui/icons-material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Styles from '../Styles/Styles'
import { db } from '../config/firebase';
/*
you cannont associate/ eddit a hotel which you are not admin of, the butons become dissabled
*/
function Home() {
    const [pressed, setPressed] = React.useState(false)
    const [hotelData, setHotelData] = React.useState([])
    const [filterValue, setFilterValue] = React.useState("")
    const classes = Styles()

    function togglemenuPress() {
        if (pressed == false) {
            setPressed(true)
        } else {
            setPressed(false)
        }
    }

    React.useEffect(() => {
        db.collection("Hotels").onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setHotelData(dis);
            console.log(hotelData)
        });
    }, [])

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

            <Container maxWidth="xs" color='red'>
                <Box>
                    <Typography variant='h2' align='center'>Hotels</Typography>
                    <div style={{ display: 'flex' }}>
                        <TextField style={{ marginRight: 10 }} id="outlined-basic" label="Filter Resort" variant="outlined" fullWidth onChange={(filterValue) => setFilterValue(filterValue.target.value)} />
                        <Button variant='contained' className={classes.clear} onClick={function dids() {
                            console.log(filterValue)
                        }}>clear</Button>
                    </div>
                    {
                        filterValue == "" ?
                            hotelData.map((data) => {
                                return (
                                    <>
                                        <Container>
                                            <Button variant='text' color="inherit" >
                                                <Typography variant='h6' align="center">
                                                    {data.name}
                                                </Typography>
                                            </Button>
                                        </Container>
                                    </>
                                )
                            })
                            :
                            hotelData.filter(hotel => hotel.name == filterValue)
                                .map((data) => {
                                    return (
                                        <>
                                            <Container>
                                                <Button variant='text' color="inherit" fullWidth onClick={""}>
                                                    <Typography variant='h6' align="center">
                                                        {data.name}
                                                    </Typography>
                                                </Button>
                                            </Container>
                                        </>
                                    )
                                })
                    }

                </Box>

            </Container>
        </div>
    )
}

export default Home