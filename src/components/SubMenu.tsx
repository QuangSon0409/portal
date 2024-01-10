import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Badge, Box, Card, Fade, Popper, Typography } from '@mui/material';

import { deepPurple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';
import keycloak from '../service/UserService';
import { useDispatch, useSelector } from '../store';
import { getUser } from '../store/slice/userSlice';
import { getAllNotification } from '../store/slice/notificationSlice';
import { io } from 'socket.io-client';


export default function SubMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);



    const [openNot, setOpenNot] = React.useState(false);
    const [anchorElNot, setAnchorElNot] = React.useState<null | HTMLElement>(null);



    const canBeOpen = openNot && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const user = useSelector((store) => store.user.user);

    // const data = useSelector((state: RootState) => state.notification.data);
    // const totalItems = useSelector((state: RootState) => state.notification.totalItems)

    const dispatch = useDispatch();
    const handleChange = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNot(event.currentTarget);
        setOpenNot((previousOpen) => !previousOpen);



    }

    const token: any = localStorage.getItem("serviceToken");
    React.useEffect(() => {
        dispatch(getUser())
        dispatch(getAllNotification())
        const api_url: any = import.meta.env.VITE_APP_SOCKET;


        // let socket;
        const serviceToken = token.replace(/"/g, '');

        // console.log("token: ", token);
        const socket = io(api_url, {
            "extraHeaders": {
                "token": `${serviceToken}`,
            },
        });
        console.log("socket: ", socket)

        socket.on("connected", (message: any) => {
            console.log("connected", message)
            // setConnected(message);
        })
        socket.on("notification", (message) => {
            console.log("notification", message)
            // setOpenNotification(true)
            // setNotification(message.data)
        })
    }, [token])
    // console.log(user)
    return (
        <div>

            <Badge badgeContent={4} color="secondary" onClick={handleChange} style={{ cursor: 'pointer' }}>
                <NotificationsActiveIcon color="action" />
            </Badge>
            <Popper id={id} open={openNot} anchorEl={anchorElNot} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350} style={{ marginTop: "20px" }}>
                        <Box sx={{ p: 1, bgcolor: 'background.paper', border: "none" }}>
                            <Card sx={{ maxWidth: 250, p: 1 }}>
                                <Typography gutterBottom variant="body1" component="div">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>

                            </Card>

                        </Box>
                    </Fade>
                )}
            </Popper>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} style={{ marginLeft: "1rem" }}
            >
                <Avatar sx={{ bgcolor: deepPurple[500] }} >
                    <AccountCircleIcon />
                </Avatar>

                <Typography variant="body1" color="white" marginLeft={1}>
                    {(user?.preferred_username).toUpperCase()}
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { handleClose(), navigate("/setting") }}>Profile</MenuItem>
                <MenuItem onClick={() => { handleClose(), navigate("/setting") }}>My account</MenuItem>
                <MenuItem onClick={() => keycloak.logout()}>Logout</MenuItem>
            </Menu>
        </div>
    );
}