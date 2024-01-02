// import React from 'react'

import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([yup.ref('password')]) : field
    ),
});
const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: null,
            password: null,
            confirmPassword: null
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log("form data:", values.email, values.password)
        },
    });
    return (
        <>
            <Container component="main" maxWidth="sm" >
                <Box sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // border: '1px solid gray',
                    // borderRadius: 3,
                    padding: 8,
                    position: "relative",
                }}>
                    <i style={{
                        position: 'absolute',
                        inset: 0,
                        border: "6px solid green",
                        filter: "drop-shadow(0 0 20px green)",
                        transition: "0.5s",
                        borderRadius: "40% 62% 63% 37% / 41% 70% 56% 59%",
                        animation: "anime 2s infinite",

                    }}></i>
                    <i style={{
                        position: 'absolute',
                        inset: 0,
                        border: "6px solid #ff0057",
                        filter: "drop-shadow(0 0 20px #ff0057)",
                        transition: "0.5s",
                        borderRadius: "41% 44% 56% 70% / 38% 56% 63% 37%",
                        animation: "anim 4s infinite",

                    }}></i>
                    <i style={{
                        position: 'absolute',
                        inset: 0,
                        border: "6px solid #fffd44",
                        filter: "drop-shadow(0 0 20px #fffd44)",
                        transition: "0.5s",
                        borderRadius: "41% 44% 56% 70% / 38% 56% 63% 37%",
                        animation: "anime 6s infinite",

                    }}></i>
                    <Typography component="h1" variant="h3">Sign in</Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="current-email"
                            type="email"

                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="current-password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            name="confirmPassword"
                            autoComplete="current-password"
                            type="password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign up
                        </Button>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <Link href="#" variant="caption">
                                    {"<< Back to login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Register