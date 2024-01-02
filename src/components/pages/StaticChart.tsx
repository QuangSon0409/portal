// import React from 'react'
import { Box, Grid, Stack } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Card from '@mui/material/Card';
import WalletIcon from '@mui/icons-material/Wallet';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CreditCard, Storefront } from '@mui/icons-material';
import { BarChart } from './BarChart';
import CountUp from 'react-countup';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const StaticChart = () => {
    return (
        <>
            <Box height={50}>
                <Box>
                    <Grid container>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction="row">

                                <Card sx={{ minWidth: 49 + "%", height: 140, backgroundColor: "#222B74" }}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" color="white">
                                                <WalletIcon />
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="p" color="white">
                                                $<CountUp delay={0.4} end={500} duration={0.6} />
                                            </Typography>

                                            <Typography variant="body2" color="#CCD1BD">
                                                Total Wallet
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                                <Card sx={{ minWidth: 49 + "%", height: 140, backgroundColor: "#449A80" }}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" color="white">
                                                <CreditCard />
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="p" color="white">
                                                $<CountUp delay={0.4} end={900} duration={0.6} />
                                            </Typography>

                                            <Typography variant="body2" color="#CCD1BD">
                                                Total Order
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack spacing={1} marginLeft={2}>
                                <Card sx={{ minWidth: 49 + "%", backgroundColor: "#469D7B", display: "flex", justifyContent: "space-around", height: 70, alignItems: "center", padding: 1 }}>
                                    <Storefront sx={{ color: "white" }} />
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" color="white">
                                                $203k
                                            </Typography>
                                            <Typography variant="body2" color="#CCD1BD">
                                                Total Income
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                                <Card sx={{ minWidth: 49 + "%", backgroundColor: "white", display: "flex", justifyContent: "space-around", height: 60, alignItems: "center", padding: 1 }}>
                                    <Storefront />
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" >
                                                $203k
                                            </Typography>
                                            <Typography variant="body2">
                                                Total Income
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>

                            </Stack>
                        </Grid>


                    </Grid>

                </Box>
                <Box height={20} marginTop={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Card sx={{ height: 70 + "vh" }}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box >


        </>
    )
}

export default StaticChart