import React from 'react';
import './Sidebar.css';
import { IconButton, Button, Tooltip } from '@material-ui/core';

import googlemeet from './googlemeet.png';
import gmail from './gmail.png';
import google from './google.png';
import chrome from './chrome.png';
import googlephotos from './googlephotos.png';
import googledrive from './googledrive.png';

const Sidebar = () => (
    <div className='sidebar'>
        <Tooltip title="Google meet">
            <Button style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '50px' }} >
                <img src={googlemeet} alt="pen" style={{ width: '30px', height: '30px' }} />
            </Button>
        </Tooltip>
        <Tooltip title="Gmail">
            <IconButton style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '20px' }}>
                <img src={gmail} alt="gmail" style={{ width: '30px', height: '30px' }} />
            </IconButton>
        </Tooltip>
        <Tooltip title="Google">
            <IconButton style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '20px' }}>
                <img src={google} alt="google" style={{ width: '30px', height: '30px' }} />
            </IconButton>
        </Tooltip>
        <Tooltip title="Chrome">
            <IconButton style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '20px' }}>
                <img src={chrome} alt="chrome" style={{ width: '30px', height: '30px' }} />
            </IconButton>
        </Tooltip>
        <Tooltip title="Google photos">
            <IconButton style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '20px' }}>
                <img src={googlephotos} alt="googlephotos" style={{ width: '30px', height: '30px' }} />
            </IconButton>
        </Tooltip>
        <Tooltip title="Google drive">
            <IconButton style={{ borderRadius: '0px', padding: '6px 6px', marginRight: '20px' }}>
                <img src={googledrive} alt="googledrive" style={{ width: '30px', height: '30px' }} />
            </IconButton>
        </Tooltip>
    </div>
);

export default Sidebar;
