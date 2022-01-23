import React, { FC } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core";

interface IAccordion {
  question: string
  answer: string
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#433a8b",
    textAlign: "left",
    width: "100%",
  }
})

const SimpleAccordion: FC<IAccordion> = (props: IAccordion) => {

  const classes = useStyles();

  return (
    <Accordion className={classes.container} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default SimpleAccordion;
