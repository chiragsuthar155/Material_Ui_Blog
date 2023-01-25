import React from "react";

import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Stock Prices</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container className={classes.First} maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Quickly build an effective pricing table for your potential
              customers with this layout. It's built with default MUI components
              with little customization.
            </Typography>

            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Buy Stocks
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button} variant="outlined">
                    Sell Stocks
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is media Card, You can use this card to describe its
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
