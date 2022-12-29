import React from 'react'
import UseStyles from './Style'
import homepage_array from './homepage_array'
import {
    Typography,
    AppBar,
    CardActions,
    CardContent,
    Button,
    Container,
    Toolbar,
    Card,
    Box,
    IconButton,
    List,
    ListItemText,
    colors,
} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import * as ROUTES from "../../constants/routes"
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { padding } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';
// import ListItemButton from '@mui/icons-material'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartIcon'

const homepage_map = ({ id, cardName, image, links, siz }) => {
    const classes = UseStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {/* <ListItemButton><AddShoppingCartIcon /></ListItemButton> */}
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <TurnedInIcon></TurnedInIcon>
                        <SvgIcon />
                    </IconButton> */}
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                        BookSky store
                    </Typography>
                    <Grid >
                        <Toolbar >
                            <Link href={ROUTES.Contact_us} variant="body2">
                                <Button variant="text" color="success" >contactus</Button>
                            </Link>
                            <Link href={ROUTES.About_us} variant="body2">
                                <Button variant="text" color="success" >Aboutus</Button>
                            </Link>
                            <Link href={ROUTES.SIGN_IN} variant="body2">
                                <Button variant="text" color="success">Signin</Button>
                            </Link>
                            <Link href={ROUTES.SIGN_UP} variant="body2">
                                <Button variant="text" color="success">register</Button>
                            </Link>
                            <Link href={ROUTES.profile} variant="body2">
                                <Button variant="text" color="success">profile</Button>
                            </Link>
                            {/* <IconButton color='inherit' aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                        </Toolbar>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.paperContainer}>
                <Container maxWidth="9g" style={{ marginTop: "90px" }}>
                    <Typography variant='h2'
                        align='center'
                        color='textPrimary'
                        gutterBottom>
                        BookSky Store
                    </Typography>
                    <Typography variant='h4'
                        align="center"
                        color="textSecondary"
                        gutterBottom>
                        welcome in our book store we hope you find what you want
                    </Typography>
                </Container>
            </div>
            < Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} >
                    {homepage_array.map((homecard) => (
                        <Grid xs={6} sm={4} md={3} lg={4} height={'50px'} width={"100px"} item>
                            <Card className={classes.card} style={{ width: "30", height: "40" }}>
                                <div style={{ width: "100%", height: "70%" }}>
                                    <img className={classes.cardMedia} src={homecard.image} alt={homecard}></img>
                                </div>
                                <CardContent className={classes.cardContent} style={{ width: "100", height: "15", padding: '3px' }}>
                                    <Typography gutterBottom variant='h6'>
                                        {homecard.cardName}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ padding: '3px' }}>
                                    <Link href={homecard.links} variant="body2">
                                        <Button size="small" color="primary" >
                                            {/* onClick={() => alert('check your car')} */}
                                            views
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div style={{
                background: "#848482",
                padding: "20px",
                margin: "5px",
            }}>

                <Grid container spacing={2} justifyContent="center">
                    <Grid item md={6} lg={4}>
                        <Typography variant="body1">Information</Typography>
                        <Typography variant="caption"> book sky store is a book store build in 20/Oct/2003
                            we have more than ten shop around EGYPT, and we have more than 1000 employee work with us
                            and we have more than 10000 book in our store </Typography>
                    </Grid>
                    <Box sx={{ mt: 4 }}></Box>
                    <Grid item md={6} lg={2}>
                        <Typography>Company</Typography>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption">
                                    <Link href={ROUTES.Contact_us} variant="body2" color='inherit'>contact us</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption">
                                    <Link href={ROUTES.About_us} variant="body2" color='inherit'>About us</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption">
                                    <Link href={ROUTES.About_us} variant="body2" color='inherit'>Return policy</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption">
                                    <Link href={ROUTES.About_us} variant="body2" color='inherit'>Copyright</Link>
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </div>
        </div >

    )
}

export default homepage_map
