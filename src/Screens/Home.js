import React from 'react'
import { Container, Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, TableCell, TableRow, TableHead, Checkbox, Table, styled, tableCellClasses, Paper } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Styles from '../Styles/Styles'
import { db } from '../config/firebase'
import { Check } from '@mui/icons-material';

function Home() {
    const drawerWidth = 240;
    const [hotelData, setHotelData] = React.useState("")
    const [isChecked, setischecked] = React.useState.apply(false)
    const classes = Styles()
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'grey',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }))

    React.useEffect(() => {
        db.collection("Hotels").onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setHotelData(dis);
            console.log(hotelData)
        });
    })
    return (
        <Container sx={{ paddingBottom: 1 }}>
            <Box sx={{ display: 'flex', padding: 0 }}>
                <CssBaseline />

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
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ bgcolor: 'background.default', p: 0 }}
                >
                    <Toolbar />
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <Table >
                            <TableHead className={classes.tabCell}>
                                <TableCell padding='checkbox' defaultChecked>
                                    <Checkbox color='primary' checked={isChecked} onClick={function name() {
                                        if (isChecked == false) {
                                            setischecked(true)
                                        } else {
                                            setischecked(false)
                                        }
                                    }} />

                                </TableCell>
                                <TableCell>
                                    <Typography variant='h7'>
                                        Email
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='h7'>
                                        #Guests
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='h7'>
                                        Check In
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='h7'>
                                        Check Out
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='h7'>
                                        Status
                                    </Typography>
                                </TableCell>
                            </TableHead>

                            <TableRow >
                                {
                                    isChecked == true ?
                                        <TableCell padding='checkbox'>
                                            <Checkbox color='success' checked={true} />
                                        </TableCell>
                                        :
                                        <TableCell padding='checkbox'>
                                            <Checkbox color='success' checked={false} />
                                        </TableCell>
                                }

                                <TableCell>
                                    <Typography variant='h7'>
                                        thato732mahloko@gmail.com
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography variant='h7'>
                                        5
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography variant='h7'>
                                        Sun Apr 03 2022
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='h7'>
                                        Sat Apr 09 2022
                                    </Typography>
                                </TableCell>
                                {
                                    isChecked == false ?
                                        <TableCell sx={{ backgroundColor: 'red' }}>
                                            <Typography variant='h7'>
                                                DECLINED
                                            </Typography>
                                        </TableCell>
                                        :
                                        <TableCell sx={{ backgroundColor: 'green' }}>
                                            <Typography variant='h7'>
                                                ACCEPTED
                                            </Typography>
                                        </TableCell>
                                }
                            </TableRow>
                        </Table>
                    </Paper>
                </Box>
            </Box>
        </Container>
    )
}

export default Home