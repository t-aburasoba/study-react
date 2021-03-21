import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSignedIn } from '../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { Badge } from '@material-ui/core';
import { FavoriteBorder, ShoppingCart } from '@material-ui/icons';
import ClosableDrawer from './ClosableDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolBar: {
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    }
}));

const Header = () => {
    const classes = useStyles();
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const isSignedIn = getIsSignedIn(selector)
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title} onClick={() => dispatch(push('/'))}>
                    EC app
                </Typography>
                {isSignedIn && (
                    <div>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <FavoriteBorder></FavoriteBorder>
                        </IconButton>
                        <IconButton>
                            <ClosableDrawer></ClosableDrawer>
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Header
