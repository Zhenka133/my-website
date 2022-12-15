import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  makeStyles,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <SectionContainer id="about" title={"Обо мне"} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography variant="body1">
              {
                'Доброго времени суток. Меня зовут Митрофанова Евгения Сергеевна. Я - тренер по ментальной арифметике Международной Онлайн Школы "Менталика". Я воспитываю будущих Чемпионов Российских и Международных Олимпиад, а также сама многократным являюсь победителем Олимпиад данного масштаба.'
              }
            </Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default About;
