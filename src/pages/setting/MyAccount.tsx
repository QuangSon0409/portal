// import React from 'react'

import { Alert, Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "../../store";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../store/slice/userSlice";
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
    username: yup.string().required('username is required')

});
const MyAccount = () => {

    const user = useSelector((store) => store.user.user);
    const [open, setOpen] = useState<boolean>(false);
    const [showButton, setShowButton] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const formik = useFormik({
        initialValues: {
            email: user?.email,
            firstName: user?.given_name,
            lastName: user?.family_name,
            username: user?.preferred_username
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            console.log("form data:", values.email)
            const data = {
                username: values.username,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email
            }

            dispatch(updateUser(data)).then(() => {

                setOpen(true)
                setShowButton(false);
            }).then(() => {
                setTimeout(() => {
                    setShowButton(true);
                }, 3000);

            })

        },

    });
    const handleClose = () => {
        setOpen(false);
        setShowButton(true)
    }



    return (
        <>
            <Box component="div" >
                <Card>
                    <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleClose}>
                        <Alert severity="success" onClose={handleClose}>
                            my account has been updated successfully
                        </Alert>
                    </Snackbar>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            General Setting
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            onSubmit={formik.handleSubmit}

                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} xl={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        type="text"
                                        fullWidth
                                        value={formik.values.firstName}
                                        onChange={(e) => formik.setFieldValue('firstName', e.target.value)}
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
                                        onChange={(e) => formik.setFieldValue('lastName', e.target.value)}

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
                                        onChange={(e) => formik.setFieldValue('email', e.target.value)}
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
                                        label="User Name"
                                        type="text"
                                        fullWidth
                                        // defaultValue="Hello World"
                                        value={formik.values.username}
                                        onChange={(e) => formik.setFieldValue('username', e.target.value)}

                                        style={{ width: "100%" }}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }} >
                                <Button disabled={!showButton} className="button1" variant="contained" type="submit" >
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