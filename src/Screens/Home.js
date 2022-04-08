import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, TextField, Container } from '@mui/material'
import { Menu, ArrowRight } from '@mui/icons-material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import { List, ListItemButton, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert, AlertTitle } from '@mui/material';
import { FixedSizeList } from 'react-window'
import { Rings } from 'react-loader-spinner'
import Styles from '../Styles/Styles'
import { db } from '../config/firebase';
/*
you cannont associate/ eddit a hotel which you are not admin of, the butons become dissabled
*/
function Home() {
    const [pressed, setPressed] = React.useState(false)
    const [hotelData, setHotelData] = React.useState([])
    const [filterValue, setFilterValue] = React.useState("")
    const [hotelNameTableDisplay, setHotelNametableDisplay] = React.useState("")
    const [toggleTableOnOff, setToggleTableOnOff] = React.useState(false)
    const classes = Styles()

    function togglemenuPress() {
        if (pressed == false) {
            setPressed(true)
        } else {
            setPressed(false)
        }
    }

    function toggleTableOff() {
        if (toggleTableOnOff == false) {
            setToggleTableOnOff(true)
        } else {
            setToggleTableOnOff(false)
        }
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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

    function setThoteltabel() {
        db.collection("Hotels").doc(hotelNameTableDisplay).onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

        })
    }

    return (
        <Container sx={{ paddingBottom: 1 }}>
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

            <Container maxWidth="xs">
                <Box>
                    <Typography variant='h2' align='center' color="#FE6B8B">Hotels</Typography>
                    <div style={{ display: 'flex' }}>
                        <TextField style={{ marginRight: 10 }} id="outlined-basic" label="Filter Resort" variant="outlined" fullWidth onChange={(filterValue) => setFilterValue(filterValue.target.value)} />
                        <Button variant='contained' className={classes.clear} onClick={function dids() {
                            console.log(filterValue)
                            setFilterValue("")
                        }}>clear</Button>
                    </div>
                    {
                        filterValue == "" ?
                            <List sx={{
                                width: '100%',
                                maxWidth: 360,
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}>
                                <ListItemButton variant='text' color="inherit" fullWidth onClick={""}>
                                    <Typography variant='h6' align="center">
                                        Enter Filter Value (e.g: 'Apogee Boutique Hotel & Spa')
                                    </Typography>
                                </ListItemButton>
                            </List>

                            :
                            hotelData.filter(hotel => hotel.name == filterValue)
                                .map((data) => {
                                    return (
                                        <>
                                            <List sx={{
                                                width: '100%',
                                                maxWidth: 360,
                                                position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                '& ul': { padding: 0 },
                                            }}>
                                                <ListItemButton variant='text' color="inherit" fullWidth onClick={function name() {
                                                    setHotelNametableDisplay(data.id)
                                                }}>
                                                    <Typography variant='h6' align="center">
                                                        {data.name}
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </>
                                    )
                                })
                    }


                    <Grid container direction="column" alignItems="center">
                        <Rings color="#FE6B8B" height={80} width={80} />
                    </Grid>
                </Box>
            </Container>
            {    /* Apogee Boutique Hotel & Spa*/}
            <Typography variant="h2" component="div" gutterBottom align='center' color="#FE6B8B" boxShadow={'3'} >
                Hotel Name

            </Typography>

            <Alert severity="info" className={classes.alerts}>
                <AlertTitle>Info</AlertTitle>
                You are authorised to manage these bookings <strong>check it out!</strong>
            </Alert>

            <Typography variant="h4" component="div" gutterBottom align='center' color="#FE6B8B" boxShadow={'3'} >
                Total Bookings: 12
            </Typography>


            <TableContainer component={Paper} className={classes.maintable}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Guest Email Address</TableCell>
                            <TableCell align="right">Number Of Guests</TableCell>
                            <TableCell align="right">Date Booked</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container direction="column" alignItems="center">
                <Button variant='contained' className={classes.toggleOut} onClick={toggleTableOff}>
                    Toggle Out
                </Button>
            </Grid>

        </Container>
    )
}

export default Home