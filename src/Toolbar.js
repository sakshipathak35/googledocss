import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Tooltip, Menu, MenuItem } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import googleDocsIcon from './icons/googledocicon.png';
import undoImage from './icons/undo.png';
import redoImage from './icons/redo.png';
import printIcon from './icons/printer.png';
import SpellcheckIcon from './icons/spell-check.png';
import paint from './icons/bucket.png';
import zoom from './icons/100-percent.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import bold from './icons/bold.png';
import italic from './icons/italics.png';
import underline from './icons/underline.png';
import texteditor from './icons/texteditor.png';
import highlighter from './icons/highlighter.png';
import link from './icons/link.png';
import comment from './icons/comment.png';
import image2 from './icons/image2.png';
import alignleft from './icons/alignleft.png';
import spacing from './icons/spacing.png';
import checklist from './icons/checklist.png';
import list from './icons/list.png';
import listnumber from './icons/listnumber.png';
import lindent from './icons/lindent.png';
import rindent from './icons/rindent.png';
import clear from './icons/clear.png';
import pen from './icons/pen.png';
import uppertick from './icons/uppertick.png';
import commentH from './icons/commentH.png';
import padlock from './icons/padlock.png';

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

        width: '100%',
        marginTop: '-12px',// Adjust the margin as needed
    },
    leftGroup: {
        display: 'flex',
        alignItems: 'center',
    },
    rightGroup: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '9px'

    },
    menuButton: {

        padding: '6px 0px !important',
        width: '80px',
        textTransform: 'none !important',
        boxSizing: 'border-box !important',
    }
}));

function CustomToolbar({ onUndo, onRedo }) {
    const classes = useStyles();
    const [zoomLevel, setZoomLevel] = useState(100);
    const [anchorEl, setAnchorEl] = useState(null);
    const [zoomMenuOpen, setZoomMenuOpen] = useState(false);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [anchorE3, setAnchorE3] = React.useState(null);
    const [anchorE4, setAnchorE4] = React.useState(null);
    const [anchorE6, setAnchorE6] = React.useState(null);
    const [anchorE7, setAnchorE7] = React.useState(null);
    const [anchorE5, setAnchorE5] = React.useState(null);
    const [anchorE8, setAnchorE8] = React.useState(null);

    const handleZoomMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setZoomMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setZoomMenuOpen(false);
    };

    const handleZoomOptionSelect = (option) => {
        setZoomLevel(option);
        handleMenuClose();
    };
    const handleClick = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE2(null);
    };
    const handleclick = (event) => {
        setAnchorE3(event.currentTarget);
    };

    const handleclose = () => {
        setAnchorE3(null);
    };
    const handlEclick = (event) => {
        setAnchorE4(event.currentTarget);
    };

    const handlEclose = () => {
        setAnchorE4(null);
    };
    const handleC = (event) => {
        setAnchorE5(event.currentTarget);
    };

    const handleCL = () => {
        setAnchorE5(null);
    };
    const handlec = (event) => {
        setAnchorE6(event.currentTarget);
    };

    const handlecl = () => {
        setAnchorE6(null);
    };
    const handleCLI = (event) => {
        setAnchorE7(event.currentTarget);
    };

    const handleCLIO = () => {
        setAnchorE7(null);
    };
    const handleCLICK = (event) => {
        setAnchorE8(event.currentTarget);
    };

    const handleCLOSE = () => {
        setAnchorE8(null);
    };

    return (
        <AppBar position="static" color="default" style={{ paddingLeft: '59px' }}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.titleGroup}>
                    <div className={classes.leftGroup}>
                        <img src={googleDocsIcon} alt="Google Docs" style={{ width: '35px', height: '40px', marginRight: '10px', marginTop: '19px' }} />
                        <Tooltip title="Rename">
                            <Typography variant="h6" style={{ marginLeft: '0px', marginTop: '4px' }}>
                                Untitled document
                            </Typography>
                        </Tooltip>
                        <Tooltip title="Star">
                            <IconButton color="inherit" style={{ marginLeft: '10px', padding: '6px 6px', marginTop: '4px' }}>
                                <StarBorderIcon style={{ width: '20px', height: '20px' }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={classes.rightGroup}>
                        <Tooltip title="Open comment history(Ctrl+Alt+Shift+A)">
                            <IconButton color="inherit" style={{ marginLeft: '4px', padding: '9px 9px', marginTop: '10px', marginRight: '4px' }}>
                                <img src={commentH} alt="commentH" style={{ width: '20px', height: '20px' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Private to only me">
                            <Button aria-controls="simple-menu" aria-haspopup="true" style={{ marginLeft: '4px', marginTop: '5px', borderRadius: '40px', textTransform: 'none', backgroundColor: '#add8e6', marginRight: '4px', padding: '6px 20px' }} >
                                <img src={padlock} alt="padlock" style={{ width: '15px', height: '15px', marginRight: '4px' }} />
                                Share
                            </Button>
                        </Tooltip>
                        <Tooltip title="Add Account">
                            <IconButton color="inherit" style={{ marginLeft: 'px', padding: '9px 9px', marginTop: '10px' }}>
                                <AccountCircleIcon style={{ width: '30px', height: '30px' }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={classes.menuGroup}>
                    <Tooltip title="File">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px', marginLeft: '26px', padding: '6px 6px' }} >
                            File
                        </Button>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            Edit
                        </Button>
                    </Tooltip>
                    <Tooltip title="View">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            View
                        </Button>
                    </Tooltip>
                    <Tooltip title="Insert">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            Insert
                        </Button>
                    </Tooltip>
                    <Tooltip title="Format">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            Format
                        </Button>
                    </Tooltip>
                    <Tooltip title="Tools">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px', marginRight: '8px' }} >
                            Tools
                        </Button>
                    </Tooltip>
                    <Tooltip title="Extensions">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            Extensions
                        </Button>
                    </Tooltip>
                    <Tooltip title="Help">
                        <Button style={{ textTransform: 'none', width: '15px', height: '20px' }} >
                            Help
                        </Button>
                    </Tooltip>

                </div>
                <div style={{
                    backgroundColor: 'rgba(173, 216, 230, 0.3)',
                    width: '100%',
                    height: '37px',
                    marginTop: '10px',
                    marginBottom: '15px',
                    marginLeft: '10px',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                }} >
                    <Tooltip title="Undo (Ctrl+Z)">
                        <IconButton color="inherit" onClick={onUndo} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '10px' }}>
                            <img src={undoImage} alt="Undo" style={{ width: '14px', height: '14px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Redo (Ctrl+Y)">
                        <IconButton color="inherit" onClick={onRedo} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={redoImage} alt="Redo" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Print (Ctrl+P)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={printIcon} alt="printer" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Spelling and grammar check (Ctrl+Alt+X)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={SpellcheckIcon} alt="printer" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Paint format">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={paint} alt="printer" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Zoom">
                        <IconButton color="inherit" onClick={handleZoomMenuOpen} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>

                            {zoomLevel === 100 ? <img src={zoom} alt="Zoom Out" style={{ width: '30px', height: '30px' }} /> : <img src={zoom} alt="Zoom In" style={{ width: '25px', height: '25px' }} />}
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => handleZoomOptionSelect(100)}>100%</MenuItem>
                        <MenuItem onClick={() => handleZoomOptionSelect(75)}>75%</MenuItem>
                        <MenuItem onClick={() => handleZoomOptionSelect(50)}>50%</MenuItem>
                    </Menu>
                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Styles">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ textTransform: 'none' }} >
                            Normal text
                            <ArrowDropDownIcon />
                        </Button>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE2}
                        keepMounted
                        open={Boolean(anchorE2)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Option 1</MenuItem>
                        <MenuItem onClick={handleClose}>Option 2</MenuItem>
                        <MenuItem onClick={handleClose}>Option 3</MenuItem>
                    </Menu>
                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Font">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleclick} style={{ textTransform: 'none' }} >
                            Arial
                            <ArrowDropDownIcon />
                        </Button>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE3}
                        keepMounted
                        open={Boolean(anchorE3)}
                        onClose={handleclose}
                    >
                        <MenuItem onClick={handleclose}>Option 1</MenuItem>
                        <MenuItem onClick={handleclose}>Option 2</MenuItem>
                        <MenuItem onClick={handleclose}>Option 3</MenuItem>
                    </Menu>
                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Decrease font size (Ctrl+Shift+,)">
                        <Button

                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            style={{ textTransform: 'none', minWidth: '30px', padding: '6px 0px' }} // Adjust size as needed
                        >
                            -
                        </Button>
                    </Tooltip>
                    <Tooltip title="Font size">
                        <Button

                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            style={{
                                textTransform: 'none',
                                border: '1px solid',   // Add border
                                minWidth: '30px',
                                padding: '-10px 10px', // Adjust size as needed

                            }}
                        >
                            11
                        </Button>
                    </Tooltip>
                    <Tooltip title="Increase font size (Ctrl+Shift+.)">
                        <Button

                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            style={{ textTransform: 'none', minWidth: '30px', padding: '6px 0px' }} // Adjust size as needed
                        >
                            +
                        </Button>
                    </Tooltip>
                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Bold (Ctrl+B)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={bold} alt="bold" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Italic (Ctrl+I)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={italic} alt="italic" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Underline (Ctrl+U)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={underline} alt="underline" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Text color">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={texteditor} alt="texteditor" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Highlight color">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={highlighter} alt="highlighter" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>

                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Insert link (Ctrl+K)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={link} alt="link" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add comment (Ctrl+Alt+M)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={comment} alt="comment" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Insert image">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={image2} alt="image2" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <div style={{ height: '24px', borderLeft: '1px solid #c1c1c1', marginTop: '6px' }}></div>
                    <Tooltip title="Align & indent">
                        <IconButton color="inherit" onClick={handlEclick} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={alignleft} alt="alignleft" style={{ width: '15px', height: '15px' }} />
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE4}
                        keepMounted
                        open={Boolean(anchorE4)}
                        onClose={handlEclose}
                    >
                        <MenuItem onClick={handlEclose}>Option 1</MenuItem>
                        <MenuItem onClick={handlEclose}>Option 2</MenuItem>
                        <MenuItem onClick={handlEclose}>Option 3</MenuItem>
                    </Menu>
                    <Tooltip title="Line & paragraph spacing">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={spacing} alt="spacing" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Checklist (Ctrl+Shift+9)">
                        <IconButton color="inherit" onClick={handleC} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={checklist} alt="checklist" style={{ width: '15px', height: '15px' }} />
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE5}
                        keepMounted
                        open={Boolean(anchorE5)}
                        onClose={handleCL}
                    >
                        <MenuItem onClick={handleCL}>Option 1</MenuItem>
                        <MenuItem onClick={handleCL}>Option 2</MenuItem>
                        <MenuItem onClick={handleCL}>Option 3</MenuItem>
                    </Menu>
                    <Tooltip title="Bulleted list (Ctrl+Shift+8)">
                        <IconButton color="inherit" onClick={handlec} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={list} alt="list" style={{ width: '15px', height: '15px' }} />
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE6}
                        keepMounted
                        open={Boolean(anchorE6)}
                        onClose={handlecl}
                    >
                        <MenuItem onClick={handlecl}>Option 1</MenuItem>
                        <MenuItem onClick={handlecl}>Option 2</MenuItem>
                        <MenuItem onClick={handlecl}>Option 3</MenuItem>
                    </Menu>
                    <Tooltip title="Numbered list (Ctrl+Shift+7)">
                        <IconButton color="inherit" onClick={handleCLI} style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={listnumber} alt="listnumber" style={{ width: '15px', height: '15px' }} />
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE7}
                        keepMounted
                        open={Boolean(anchorE7)}
                        onClose={handleCLIO}
                    >
                        <MenuItem onClick={handleCLIO}>Option 1</MenuItem>
                        <MenuItem onClick={handleCLIO}>Option 2</MenuItem>
                        <MenuItem onClick={handleCLIO}>Option 3</MenuItem>
                    </Menu>
                    <Tooltip title="Decrease indent (Ctrl+[)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={lindent} alt="lindent" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Increase indent (Ctrl+])">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={rindent} alt="rindent" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Clear formatting (Ctrl+\)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '4px' }}>
                            <img src={clear} alt="clear" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Editing mode">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleCLICK} style={{ borderRadius: '40px', textTransform: 'none', marginLeft: '450px', padding: '-6px 6px' }} >
                            <img src={pen} alt="pen" style={{ width: '15px', height: '15px', marginRight: '10px' }} />
                            Editing Mode
                            <ArrowDropDownIcon />
                        </Button>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorE8}
                        keepMounted
                        open={Boolean(anchorE8)}
                        onClose={handleCLOSE}
                    >
                        <MenuItem onClick={handleCLOSE}>Option 1</MenuItem>
                        <MenuItem onClick={handleCLOSE}>Option 2</MenuItem>
                        <MenuItem onClick={handleCLOSE}>Option 3</MenuItem>
                    </Menu>
                    <Tooltip title="Hide the menus (Ctrl+Shift+F)">
                        <IconButton color="inherit" style={{ borderRadius: '0px', marginTop: '-1px', padding: '6px 6px', marginLeft: '00px' }}>
                            <img src={uppertick} alt="uppertick" style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Tooltip>
                    {/* Add other buttons/icons */}

                </div>


            </Toolbar>
        </AppBar>
    );
}

export default CustomToolbar;
