import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paymant from '@material-ui/icons/Payment';
import LocalPizza from '@material-ui/icons/LocalPizza';
import Restaurant from '@material-ui/icons/Restaurant';
import PinDrop from '@material-ui/icons/PinDrop';

function InfoArea(props) {
  const { classes, title, iconColor } = props;
  return (
    <div>
      <div>
        <props.icon color={iconColor} className={classes.icon} />
      </div>
      <div className={classes.infoTitle}>
        <Typography variant="h4">{title}</Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: 'center',
    zIndex: 1000,
    position: 'relative',
    marginTop: '2rem',
  },
  infoTitle: {
    paddingTop: theme.spacing(3),
  },
  icon: {
    fontSize: '58px',
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper component="section" className={classes.root}>
      <div className={classes.section}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <InfoArea
              title="Válassz ételt!"
              icon={LocalPizza}
              iconColor="action"
              classes={classes}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoArea title="Rendeld meg!" icon={PinDrop} iconColor="action" classes={classes} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoArea title="Fizesd ki!" icon={Paymant} iconColor="action" classes={classes} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoArea
              title="Jó étvágyat!"
              icon={Restaurant}
              iconColor="secondary"
              classes={classes}
            />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
