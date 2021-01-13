import React from "react";
import styles from "./cards.module.css";
import { Typography, Grid, CardContent, Card } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";

export default function Cards(props) {
  const { confirmed: infected, recovered, deaths, lastUpdate } = props.data;

  if (!infected) return "loading....";
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              {/* {confirmed.value} */}
              <CountUp
                start={0}
                end={infected.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography variant="body2">
              Number of recovered cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5" >
              <CountUp
                start={1}
                end={deaths.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography variant="body2">
              Numberof Death cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
