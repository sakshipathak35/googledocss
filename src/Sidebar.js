import React from 'react';
import './Sidebar.css';
import { IconButton, Tooltip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DuoIcon from '@material-ui/icons/Duo';
import ContactsIcon from '@material-ui/icons/Contacts';

const Sidebar = () => (
    <div className='sidebar'>
        <Tooltip title="Home">
            <IconButton>
                <HomeIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Docs">
            <IconButton>
                <InsertDriveFileIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Calendar">
            <IconButton>
                <CalendarTodayIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Mail">
            <IconButton>
                <MailOutlineIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Duo">
            <IconButton>
                <DuoIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Contacts">
            <IconButton>
                <ContactsIcon />
            </IconButton>
        </Tooltip>
    </div>
);

export default Sidebar;
