import React from "react";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import winery from "../assets/winery.jpeg";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const { name, email, phoneNumber, inquiry, question } = data;
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("phone number: ", phoneNumber);
    console.log("inquiries: ", inquiry);
    console.log("questions: ", question);
    try {
      const templateParams = {
        name,
        email,
        phoneNumber,
        inquiry,
        question,
      };
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const inquiries = [
    { value: "Wine Club", label: "Wine Club" },
    { value: "Tasting Room", label: "Tasting Room" },
    { value: "Cuisine", label: "Cuisine" },
    { value: "Book Events", label: "Book Events" },
    { value: "Other", label: "Other" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundImage: `url(${winery})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "700px",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ maxWidth: "800px", width: "100%", padding: "20px" }}
          >
            <h1>Questions?</h1>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="name"
                  label="Name"
                  variant="filled"
                  type="text"
                  name="name"
                  className="form-control formInput"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    minLength: {
                      value: 2,
                      message: "Your name must be at least 2 characters",
                    },
                  })}
                />
                {errors.name && (
                  <div
                    className="errorMessage"
                    style={{
                      color: "red",
                      backgroundColor: "white",
                      padding: "5px",
                      paddingTop: "5px",
                      marginTop: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <strong>{errors.name.message}</strong>
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{}}
                  fullWidth
                  id="email"
                  label="Email"
                  variant="filled"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter an email address",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="form-control formInput"
                />
                {errors.email && (
                  <div
                    className="errorMessage"
                    style={{
                      color: "red",
                      backgroundColor: "white",
                      padding: "5px",
                      paddingTop: "5px",
                      marginTop: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <strong>{errors.email.message}</strong>
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number - optional"
                  variant="filled"
                  name="phoneNumber"
                  className="form-control formInput"
                  {...register("phoneNumber", {
                    required: {
                      value: false,
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="inquiry"
                  select
                  label="Inquiry"
                  variant="filled"
                  value={watch("inquiry") || "Wine Club"} // Set the initial value
                  name="inquiry"
                  className="form-control formInput"
                  {...register("inquiry", {
                    required: {
                      value: true,
                      message: "Please select an option",
                    },
                  })}
                >
                  {inquiries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.inquiry && (
                  <span className="errorMessage" style={{ color: "red" }}>
                    <strong>{errors.inquiry.message}</strong>
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="question"
                  label="Question"
                  multiline
                  rows={6}
                  // defaultValue="Default Value"
                  variant="filled"
                  name="question"
                  {...register("question", {
                    required: {
                      value: true,
                      message: "Please enter a question",
                    },
                    minLength: {
                      value: 5,
                      message: "Questions must be at least 5 characters",
                    },
                  })}
                  className="form-control formInput"
                />
                {errors.question && (
                  <div
                    className="errorMessage"
                    style={{
                      color: "red",
                      backgroundColor: "white",
                      padding: "5px",
                      paddingTop: "5px",
                      marginTop: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <strong>{errors.question.message}</strong>
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Button
                  variant="contained"
                  className="submit-btn"
                  type="submit"
                >
                  Submit Question
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};
