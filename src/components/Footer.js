import React from 'react'
import "../index.css";
import "../components/Footer.scss";
import Box from '@material-ui/core/Box';
import resume from '../assets/Tong Yin Han - PM Resume S24.pdf'

const Footer = () => {
    return (
        <Box className="footerContainer" >
            <Box justifyContent="space-evenly">
                <a target="_blank" className="link" href="https://github.com/TongYinn" rel="noopener noreferrer">Github</a>
                <a target="_blank" className="link" href="mailto:tyhan@uwaterloo.ca" rel="noopener noreferrer">Email</a>
                <a target="_blank" className="link" href={resume} rel="noopener noreferrer">Resume</a>
            </Box>
            <Box className="credit"> designed and developed by Tong Yin Han</Box>
        </Box>
    );
  };
  
  export default Footer;