import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Tooltip } from '@material-ui/core';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { makeStyles } from '@material-ui/core/styles';
import googleDocsIcon from './googledocicon.png';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PrintIcon from '@material-ui/icons/Print';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
    },
    titleGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    menuGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0px',  // Adjust the margin as needed
    },
    leftGroup: {
        display: 'flex',
        alignItems: 'center',
    },
    rightGroup: {
        display: 'flex',
        alignItems: 'center',

    },
    menuButton: {

        padding: '6px 0px !important',
        width: '80px',
        textTransform: 'none !important',
        boxSizing: 'border-box !important',
    }
}));

function CustomToolbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" style={{ paddingLeft: '59px' }}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.titleGroup}>
                    <div className={classes.leftGroup}>
                        <img src={googleDocsIcon} alt="Google Docs" style={{ height: '30px', marginRight: '10px' }} />
                        <Typography variant="h6" style={{ marginLeft: '10px' }}>
                            Untitled Document
                        </Typography>
                        <IconButton color="inherit" style={{ marginLeft: '850px' }}>
                            <StarBorderIcon />
                        </IconButton>

                        <Tooltip title="Last Saved">
                            <IconButton color="inherit">
                                <FormatBoldIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Comment History">
                            <IconButton color="inherit">
                                <InsertCommentIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Join a Call Here">
                            <IconButton color="inherit">
                                <FormatBoldIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                            <IconButton color="inherit">
                                <FormatBoldIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Account">
                            <IconButton color="inherit">
                                <AccountCircleIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={classes.menuGroup}>
                    <div className={classes.leftGroup}>
                        <Button className={classes.menuButton}>File</Button>
                        <Button className={classes.menuButton}>Edit</Button>
                        <Button className={classes.menuButton}>View</Button>
                        <Button className={classes.menuButton}>Insert</Button>
                        <Button className={classes.menuButton}>Format</Button>
                        <Button className={classes.menuButton}>Tools</Button>
                        <Button className={classes.menuButton}>Extensions</Button>
                        <Button className={classes.menuButton}>Help</Button>
                    </div>
                    <div className={classes.rightGroup}></div>
                </div>
                <div style={{
                    backgroundColor: 'rgba(173, 216, 230, 0.3)',
                    width: '100%',
                    height: '37px',
                    marginTop: '10px',
                    marginBottom: '15px',
                    marginLeft: '10px',
                    borderRadius: '50px',
                }} >
                    <IconButton color="inherit">
                        <UndoIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <RedoIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <PrintIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <SpellcheckIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ZoomInIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ZoomOutIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <FormatBoldIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <FormatItalicIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <FormatUnderlinedIcon />
                    </IconButton>
                    {/* Add other buttons/icons */}
                    <Button color="inherit" style={{ marginLeft: '20px' }}>Editing Mode</Button>
                </div>


            </Toolbar>
        </AppBar>
    );
}

export default CustomToolbar;
