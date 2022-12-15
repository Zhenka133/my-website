import React from "react";
import {
  makeStyles,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

const Card = ({ id, title, backgroundImage, frontImage, onClick, ...rest }) => {
  const classes = useStyles();
  const controls = useAnimation();
  const handleMouseEnterControls = () => {
    controls.start("hover");
  };
  const handleMouseLeaveControls = () => {
    controls.start("initial");
  };
  controls.start("initial");
  return (
    <MuiCard
      className={classes.root}
      elevation={10}
      component={motion.div}
      layoutId={id}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
      onClick={() => onClick()}
      {...rest}
    >
      <div>
        <CardMedia
          component={motion.div}
          layoutId={`img-container-${id}`}
          className={classes.media}
          image={backgroundImage}
          title={title}
        >
          <motion.img
            layoutId={`front-img-${id}`}
            className={classes.frontImage}
            src={frontImage}
            alt={title}
          />
        </CardMedia>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            className={classes.title}
            component={motion.h5}
            layoutId={`title-${id}`}
          >
            {title}
          </Typography>
        </CardContent>
      </div>
    </MuiCard>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
  },

  media: {
    height: 200,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  frontImage: {
    marginTop: "20px",
    objectFit: "cover",
    objectPosition: "center top",
    width: "90%",
    boxShadow: theme.shadows[8],
  },
  title: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
}));

export default Card;
