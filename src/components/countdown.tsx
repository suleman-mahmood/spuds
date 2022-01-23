import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    // width: "100%"
  },
  fontPrimary: {
    fontFamily: '"Fredoka One", cursive',
    fontSize: "24px"
  }
})

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number, postfix: string, upperBound: number },
) => {

  const classes = useStyles();

  return (
    <Box className={classes.container} sx={{ position: 'relative' }}>
      <CircularProgress size={150} thickness={5} variant="determinate" {...props} value={(props.value * 100) / props.upperBound} />
      <Box
        sx={{
          top: -30,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography className={classes.fontPrimary} >{`${Math.round(props.value)}`}</Typography>
      </Box>
      <Box
        sx={{
          top: 30,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>{`${props.postfix}`}</Typography>
      </Box>
    </Box >
  );
}

export default CircularProgressWithLabel;
