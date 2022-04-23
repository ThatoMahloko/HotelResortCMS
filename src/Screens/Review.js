import React from 'react'
import { Container, Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, TableCell, TableRow, TableHead, Checkbox, Table, styled, tableCellClasses, Paper, Alert, Collapse, Button, IconButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Styles from '../Styles/Styles'
import { db, auth } from '../config/firebase'
import { Check, ExitToApp, GraphicEq, TableChart, Close, Construction  } from '@mui/icons-material';
import  ReviewsIcon  from '@mui/icons-material/Reviews';
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
///Add a filter feature to filter though all the users
function Review() {
    const drawerWidth = 240;
    const [hotelData, setHotelData] = React.useState([])
    const [isChecked, setischecked] = React.useState.apply(false)
    const [open, setOpen] = React.useState(true);
    const classes = Styles()
    const navigate = useNavigate();

    React.useEffect(() => {
        db.collection("Hotels").doc("ApogeeBoutiqueHotel&Spa").collection("Bookings").onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setHotelData(dis)
            console.log("hello")
        })
    })

    function SignOut() {
        auth.signOut().then(() => {
            console.log("Successfully Signed Out")
            navigate('/')
        }).catch((error) => {
            console.log(error.code)
        })
    }
    return (
        <Container sx={{ paddingBottom: 1 }}>
            <Box sx={{ display: 'flex', p: 3 }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Overall Bookings
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List>

                        <ListItem button onClick={function name() {
                            navigate('/Home')
                        }}>
                            <ListItemIcon>
                                <TableChart />
                            </ListItemIcon>
                            <ListItemText primary="Overall Bookings" />
                        </ListItem>

                        <ListItem button onClick={function name() {
                            navigate('/ManageBookings')
                        }}>
                            <ListItemIcon>
                                <Construction />
                            </ListItemIcon>
                            <ListItemText primary="Manage Bookings" />
                        </ListItem>

                        <ListItem button onClick={function name() {
                            navigate('/Review')
                        }}>
                            <ListItemIcon>
                                <ReviewsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Review" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>

                        <ListItem button onClick={SignOut}>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ bgcolor: 'background.default', p: 0 }}
                >
                    <Toolbar />
                    <Collapse in={open}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <Close fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            You are authorised to manage this hotel — here are all reviews!
                        </Alert>
                    </Collapse>
                 
                    <Toolbar />
                
                </Box>
            </Box>
        </Container >
    )
}

export default Review