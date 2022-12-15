import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
// import emailjs from "emailjs-com";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../assets/images/Check";

const MessageBox = () => {
  const classes = useStyles();
  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
  const SendEmail = (object) => {
    setSending(true);
    // Засунуть сюда кредлы от emailjs
    // emailjs
    //   .send(
    //     "service_",
    //     "template_",
    //     object,
    //     "user_"
    //   )
    //   .then(
    //     (result) => {
    //       setSendEmailSuccess(true);
    //       setSending(false);
    //     },
    //     (error) => {
    //       setSending(false);
    //     }
    //   );
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Укажите имя"),
      email: Yup.string()
        .email("Адрес электронной почты недействителен")
        .required("Укажите адрес электронной почты"),
      message: Yup.string().required("Укажите текст сообщения"),
    }),
    onSubmit: (values) => {
      SendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Container maxWidth="md">
      <Box
        overflow="hidden"
        style={{ position: "relative", minHeight: "300px" }}
      >
        <AnimatePresence>
          {!sendEmailSuccess && (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                helperText={formik.touched.name && formik.errors.name}
                variant="filled"
                margin="normal"
                type="text"
                fullWidth
                id="name"
                label={"Ваше имя"}
                name="name"
              />
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
                variant="filled"
                type="email"
                margin="normal"
                fullWidth
                id="email"
                label={"Эл. почта для связи"}
                name="email"
              />
              <TextField
                error={Boolean(formik.touched.message && formik.errors.message)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
                helperText={formik.touched.message && formik.errors.message}
                variant="filled"
                margin="normal"
                fullWidth
                name="message"
                label="Текст сообщения"
                type="text"
                id="message"
                multiline
                minRows={5}
              />
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={sending}
                >
                  {"Отправить"}
                </Button>
              </Box>
            </form>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {sendEmailSuccess && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box m={2}>
                <Check width="150" />
              </Box>
              <Typography
                component={motion.h4}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                variant="body2"
              >
                Ваше сообщение успешно отправлено, я отвечу в ближайшее время.
              </Typography>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submitBtn: {
    width: "200px",
  },
}));

export default MessageBox;
