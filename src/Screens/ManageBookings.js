import React from 'react'
import { Container, Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Card, CardContent, CardMedia, CardHeader, Avatar, IconButton, Alert, Dialog } from '@mui/material'
import { TableChart, Construction, ExitToApp, ExpandMore, MoreVert } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Styles from '../Styles/Styles'

function ManageBookins() {
  const navigate = useNavigate()
  const drawerWidth = 240
  const classes = Styles()
  const [status, setStatus] = React.useState("success")
  const [alertmMessage, setAlertMessage] = React.useState()

  var statusObj = [
    {
      stat: 'warning'
    },
    {
      stat: 'error'
    },
    {
      stat: 'info'
    },
    {
      stat: 'success'
    },
    {
      stat: 'error'
    },
    {
      stat: 'error'
    },
  ]

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
                          <IconButton aria-label="settings">
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

                            "hello"
                            :
                            data.stat == "info" ?
                              "info"
                              :
                              data.stat == "warning" ?

                                "warn"
                                :
                                data.stat == "success" ?
                                  "successssss"
                                  :
                                  ""


                        }

                      </Alert>
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