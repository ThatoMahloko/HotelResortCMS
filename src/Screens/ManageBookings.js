import React from 'react'
import { Container, Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Card, CardContent, CardMedia, CardHeader, Avatar, IconButton, Alert, Dialog, Collapse, Autocomplete, TextField, Button } from '@mui/material'
import { TableChart, Construction, ExitToApp, ExpandMore, MoreVert, PartyModeSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Styles from '../Styles/Styles'
import { db } from '../config/firebase'
import moment from 'moment'

function ManageBookings() {
  const navigate = useNavigate()
  const drawerWidth = 240
  const classes = Styles()
  const [status, setStatus] = React.useState("success")
  const [docId, setDocId] = React.useState()
  const [open, setOpen] = React.useState(false)
  const [hotelData, setHotelData] = React.useState([])

  React.useEffect(() => {
    db.collection("Hotels").doc("ApogeeBoutiqueHotel&Spa").collection("Bookings").onSnapshot((snapshot) => {
      const dis = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setHotelData(dis);
      console.log('hello')
      console.log(hotelData)
    })
  }, [])

  function ToggleEditBooking() {
    if (open == false) {
      setOpen(true)
    } else {
      setOpen(false)

    }
  }

  function UpdateStatus() {
    db.collection("Hotels").doc("ApogeeBoutiqueHotel&Spa").collection("Bookings").doc(docId).update({
      alert_status: status.toString()
    }).then(() => {
      console.log("Document successfully updated!");
    }).catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
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
              Manage Bookings
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
          </List>
          <Divider />
          <List>

            <ListItem button onClick={function name() {
              navigate('/')
            }}>
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
          {
            hotelData.map(data => {
              return (
                <>
                  <Card sx={{ maxWidth: 700, marginTop: 5 }}>
                    <CardContent>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings" onClick={ToggleEditBooking}>
                            <MoreVert />
                          </IconButton>
                        }
                        title={data.id}
                        subheader={moment(data.check_in).format('MMMM DD, YYYY')}
                      />
                      <CardMedia image={data.image} className={classes.imageStyle} />
                      <Alert variant="filled" severity={data.alert_status} className={classes.alertBox}>
                        {
                          data.alert_status == "error" ?

                            `Booking Is cancelled.`
                            :
                            data.alert_status == "info" ?
                              `Booking is confirmed`
                              :
                              data.alert_status == "warning" ?

                                `Booking is pending for confirmation.`
                                :
                                data.alert_status == "success" ?
                                  `Guest currently visiting.`
                                  :
                                  "fgf"
                        }

                      </Alert>
                      <Collapse in={open}>
                        <Button variant="contained" color="error" sx={{ margin: 2 }} onClick={function n() { setStatus("error"); setDocId(data.id) }}>Cancel</Button>
                        <Button variant="contained" color="info" sx={{ margin: 2 }} onClick={function n() { setStatus("info"); setDocId(data.id) }}>Confirm</Button>
                        <Button variant="contained" color="warning" sx={{ margin: 2 }} onClick={function n() { setStatus("warning"); setDocId(data.id) }}>Pending</Button>
                        <Button variant="contained" color="success" sx={{ margin: 2 }} onClick={function n() { setStatus("success"); setDocId(data.id) }}>Visiting</Button>
                        <Alert variant="filled" severity={status} className={classes.alertBox}>
                          {
                            status == "error" ?

                              `Booking Is cancelled.`
                              :
                              status == "info" ?
                                `Booking is confirmed`
                                :
                                status == "warning" ?

                                  `Booking is pending for confirmation.`
                                  :
                                  status == "success" ?
                                    `Guest currently visiting.`
                                    :
                                    "fgf"
                          }
                        </Alert>
                        <Button variant="contained" color="info" sx={{ margin: 2 }} onClick={function name() { UpdateStatus(); setOpen(false) }}>Update</Button>

                      </Collapse>
                    </CardContent>
                  </Card>
                </>
              )
            })
          }
        </Box>

      </Box>
    </Container>
  )
}

export default ManageBookings
