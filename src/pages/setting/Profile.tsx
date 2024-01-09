import { Box, Divider, Grid } from "@mui/material"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import { EditLocation, Email, Phone } from "@mui/icons-material";
import { useDispatch, useSelector } from "../../store";
import { useEffect } from "react";
import { getUser } from "../../store/slice/userSlice";

const Profile = () => {


    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())

    }, [])
    return (

        <Box>


            <Grid container spacing={2}>
                <Grid item xl={5} xs={12} sm={12} md={5}>
                    <Card>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                P Kumar
                            </Typography>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px" }} >
                                <div> <Email /> </div>
                                <div>
                                    <p style={{ fontSize: "16px", paddingBottom: "5px" }}> {user?.email}</p>
                                </div>
                            </div>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px" }} >
                                <div> <Phone /> </div>
                                <div>
                                    <p style={{ fontSize: "16px", paddingBottom: "5px" }}> (+91) 99999 99999</p>
                                </div>
                            </div>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px" }} >
                                <div> <EditLocation /> </div>
                                <div>
                                    <p style={{ fontSize: "16px", paddingBottom: "5px" }}> 110 ngo 80 xuan phuong</p>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xl={7} xs={12} sm={12} md={7}>
                    <Card>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                About
                            </Typography>
                            <Divider />
                            <Typography variant="body2" marginTop={2}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quae alias dolor magni, libero quibusdam ratione a sapiente fugiat vero tempore non tempora ea quaerat unde, aliquid perferendis debitis enim.
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" marginTop={2}>
                                Detail
                            </Typography>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                                <Typography variant="body1" component="h6" width={140}>
                                    Id:
                                </Typography>
                                <Typography variant="body2">
                                    {user?.sub}
                                </Typography>

                            </div>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                                <Typography variant="body1" component="h6" width={140}>
                                    Last Name:
                                </Typography>
                                <Typography variant="body2">
                                    {user?.family_name}
                                </Typography>

                            </div>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                                <Typography variant="body1" component="h6" width={140}>
                                    First Name:
                                </Typography>
                                <Typography variant="body2">
                                    {user?.given_name}
                                </Typography>

                            </div>
                            <Divider />
                            <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                                <Typography variant="body1" component="h6" width={140}>
                                    Preferred Username:
                                </Typography>
                                <Typography variant="body2">
                                    {(user?.preferred_username).toUpperCase()}
                                </Typography>

                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Box>


    )
}

export default Profile