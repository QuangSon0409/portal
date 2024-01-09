import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import keycloak from '../service/UserService';
import { useDispatch, useSelector } from '../store';
import { getUser } from '../store/slice/userSlice';

export default function SubMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUser())

    }, [])
    console.log(user)
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
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