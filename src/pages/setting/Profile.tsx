import { Divider, Grid } from "@mui/material"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import { EditLocation, Email, Phone } from "@mui/icons-material";

const Profile = () => {
    return (


        <Grid container spacing={2}>
            <Grid item xl={5} xs={12} sm={5} md={5}>
                <Card>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            P Kumar
                        </Typography>
                        <Divider />
                        <div style={{ display: "flex", alignItems: "center", gap: "30px" }} >
                            <div> <Email /> </div>
                            <div>
                                <p style={{ fontSize: "16px", paddingBottom: "5px" }}> buiquangson0409@gmail.com</p>
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
            <Grid item xl={7} xs={12} sm={7} md={7}>
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
                                157836da-05d8-4a77-b791-342d0396d40b
                            </Typography>

                        </div>
                        <Divider />
                        <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                            <Typography variant="body1" component="h6" width={140}>
                                Last Name:
                            </Typography>
                            <Typography variant="body2">
                                Bui
                            </Typography>

                        </div>
                        <Divider />
                        <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                            <Typography variant="body1" component="h6" width={140}>
                                First Name:
                            </Typography>
                            <Typography variant="body2">
                                Son
                            </Typography>

                        </div>
                        <Divider />
                        <div style={{ display: "flex", alignItems: "center", gap: "30px", margin: "20px 0 20px 0" }} >
                            <Typography variant="body1" component="h6" width={140}>
                                CreateAt:
                            </Typography>
                            <Typography variant="body2">
                                12/27/2023, 2:52:29 PM
                            </Typography>

                        </div>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>


    )
}

export default Profile