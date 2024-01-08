// import React from 'react'

import { Box, Button, Grid, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    firstName: yup
        .string()
        .required('First Name is required'),
    lastName: yup
        .string()
        .required('Last Name is required'),
    phone: yup.number().required('Phone number is required')

});
const MyAccount = () => {
    const formik = useFormik({
        initialValues: {
            email: null,
            firstName: null,
            lastName: null,
            phone: null
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log("form data:", values.email)
        },
    });
    return (
        <>
            <Box component="div" >
                <Card>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            General Setting
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}

                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} xl={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        type="text"
                                        fullWidth
                                        // defaultValue="Hello World"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        style={{ width: "100%" }}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} xl={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="LastName"
                                        type="text"
                                        fullWidth
                                        // defaultValue="Hello World"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        style={{ width: "100%" }}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} xl={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        // defaultValue="Hello World"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        style={{ width: "100%" }}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} xl={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Number Phone"
                                        type="phone"
                                        fullWidth
                                        // defaultValue="Hello World"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        style={{ width: "100%" }}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }} >
                                <Button variant="contained" type="submit">
                                    Submit
                                </Button>
                            </Box>


                        </Box>
                    </CardContent>

                </Card>
            </Box>
        </>
    )
}

export default MyAccount