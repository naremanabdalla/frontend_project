import { react } from "react";
import historicalList from './historical';
import BookCard from "./BookCard";
import { Grid, Container, Typography, AppBar, Toolbar, Link, Button } from "@material-ui/core";
import useStyles from './Style'
import * as ROUTES from '../../constants/routes'

const Historical = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
            BookSky store
          </Typography>
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
        </Toolbar>
      </AppBar>

      < Container maxWidth="md">
        <Grid padding={0} spacing={3} container style={{ marginTop: "130px" }}>
          {historicalList.map((historical) => (
            <Grid xs={6}
              sm={4}
              md={3}
              lg={4}
              height={'500px'}
              width={"100%"}
              item
              Key={historical.id}>
              <BookCard
                id={historical.id}
                image={historical.image}
                BookAuthor={historical.BookAuthor}
                BookName={historical.BookName}
                Price={historical.Price}
              />
            </Grid>
          ))}

        </Grid>
      </Container>
      <div style={{
        background: "#848482",
        padding: "20px",
        margin: "5px",
      }}>
        <Container maxWidth="9g" style={{ marginTop: "10px" }}>
          <Typography variant='h6'
            align="left"
            color='textPrimary'
            gutterBottom>
            <table>
              <thead>
                <tr>
                  <td>instractions</td>
                  <td>Company</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>Terms of service</Link></td>
                  <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>contact us</Link></td>
                </tr>
                <tr>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Copyright </Link></td>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>About us</Link></td>
                </tr>
                <tr>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Return policy</Link></td>
                </tr>
              </tbody>
            </table>
          </Typography>
          <div style={{ padding: "20px", margin: "5px" }}>
            <Container maxWidth="9g" >
              <Typography variant='h7'
                align="center"
                color='textPrimary'
                gutterBottom>
                All rights reserved to BookSky 2021-2022 - by our teams
              </Typography>
            </Container>
          </div>
        </Container>
      </div>
    </div>

  );
};

export default Historical;
