import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as ROUTES from "../../constants/routes";
import { Card ,Toolbar,AppBar} from '@material-ui/core';

import AxiosContext from "../../Services/context";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "red",
  },
}));

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

export default function SignUp({ history }) {
  const [{ name, email, password, error }, setSignUpFormState] = React.useState(
    INITIAL_STATE
  );
  const axios = React.useContext(AxiosContext);

  const isInvalid = password === "" || email === "" || name === "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    axios
      .createUserWithEmailAndPassword(name, email, password)
      .then(() => {
        setSignUpFormState(INITIAL_STATE);
        history.goBack();
      })
      .catch((error) => {
        if(error.response?.data?.error )
          error.message = error.response.data.error + " - " + error.message;
        setSignUpFormState((prev) => ({ ...prev, error: error }));
      });

    event.preventDefault();
  };
  const classes = useStyles();

  return (
    <>    <AppBar position="static">
    <Toolbar>
               {/* <ListItemButton><AddShoppingCartIcon /></ListItemButton> */}
               {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                   <TurnedInIcon></TurnedInIcon>
                   <SvgIcon />
               </IconButton> */}
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
       <Link href={ROUTES.homepage_map} style={{ color: "#f8f8ff" }}>
         BookSky store
       </Link>
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {isInvalid && (
            <Box className={classes.error}>
              {"Please enter email and password."}
            </Box>
          )}
          {!!error && <Box className={classes.error}>{error.message}</Box>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={ROUTES.SIGN_IN} variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
