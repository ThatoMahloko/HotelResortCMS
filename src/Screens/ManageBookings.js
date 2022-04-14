import React from 'react'
import { Container, Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Card, CardContent, CardMedia, CardHeader, Avatar, IconButton, Alert, Dialog, Collapse, Autocomplete, TextField, Button } from '@mui/material'
import { TableChart, Construction, ExitToApp, ExpandMore, MoreVert, PartyModeSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Styles from '../Styles/Styles'
import { db } from '../config/firebase'

function ManageBookins() {
  const navigate = useNavigate()
  const drawerWidth = 240
  const classes = Styles()
  const [status, setStatus] = React.useState("success")
  const [alertmMessage, setAlertMessage] = React.useState()
  const [open, setOpen] = React.useState(false)

  var statusObj = [
    {
      stat: 'warning',
      id: "1"
    },
    {
      stat: 'error',
      id: "2"
    },
    {
      stat: 'info',
      id: "3"
    },
    {
      stat: 'success',
      id: "4"
    },
    {
      stat: 'error',
      id: "5"
    },
    {
      stat: 'error',
      id: "6"
    },
  ]

  function ToggleEditBooking() {
    if (open == false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
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
            statusObj.map(data => {
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
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardMedia image='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' className={classes.imageStyle} />
                      <Alert variant="filled" severity={data.stat} className={classes.alertBox}>
                        {
                          data.stat == "error" ?

                            `Booking Is cancelled. ${data.id}`
                            :
                            data.stat == "info" ?
                              `Booking is confirmed ${data.id}`
                              :
                              data.stat == "warning" ?

                                `Booking is pending for confirmation. ${data.id}`
                                :
                                data.stat == "success" ?
                                  `Guest currently visiting. ${data.id}`
                                  :
                                  ""
                        }

                      </Alert>
                      <Collapse in={open}>

                        <Button variant="contained" color="error" sx={{ margin: 2 }} onClick={
                          db.collection("Hotels").doc(data.id).collection("Bookings").doc("thato732mahloko@gmail.com").update({
                            alert_status: "error"
                          })
                            .then(() => {
                              console.log("Document successfully updated!!")
                            })
                            .catch((error) => {
                              console.log("Error Updataing the document", error.code)
                            })
                        }>Cancel</Button>
                        <Button variant="contained" color="info" sx={{ margin: 2 }} onClick={
                          db.collection("Hotels").doc(data.id).collection("Bookings").doc("thato732mahloko@gmail.com").update({
                            alert_status: "info"
                          })
                            .then(() => {
                              console.log("Document successfully updated!!")
                            })
                            .catch((error) => {
                              console.log("Error Updataing the document", error.code)
                            })
                        }>Confirm</Button>
                        <Button variant="contained" color="warning" sx={{ margin: 2 }} onClick={
                          db.collection("Hotels").doc(data.id).collection("Bookings").doc("thato732mahloko@gmail.com").update({
                            alert_status: "warning"
                          })
                            .then(() => {
                              console.log("Document successfully updated!!")
                            })
                            .catch((error) => {
                              console.log("Error Updataing the document", error.code)
                            })
                        }>Pending</Button>
                        <Button variant="contained" color="success" sx={{ margin: 2 }} onClick={
                          db.collection("Hotels").doc(data.id).collection("Bookings").doc("thato732mahloko@gmail.com").update({
                            alert_status: "success"
                          })
                            .then(() => {
                              console.log("Document successfully updated!!")
                            })
                            .catch((error) => {
                              console.log("Error Updataing the document", error.code)
                            })
                        }>Visiting</Button>

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

export default ManageBookins

{
  /*
  create a dialog that opens when the toggle button is clicked.
  create a form that updates the content on the database,
  onse the data is entered, have an update button that wiill update with
  an onscreen loader
  */
}