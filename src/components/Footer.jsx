import React from 'react';
import { FaFacebook, FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling
import { Button, Flex, Box, useColorMode, Grid, Heading, GridItem, Text } from '@chakra-ui/react'

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <footer style={{ backgroundColor: (colorMode === "dark" ? "#1D1E22" : "#EFEFEF"), marginTop: "60px" }}>
            <div className="footer-columns">
                <div className="team-members">
                    {/* <h2>Team Members</h2> */}
                    <Heading as='h3' size='lg'>Team Members</Heading>
                    <ul>
                        <li style={{ fontSize: "18px", fontWeight: "bold" }}>Vũ Đức Huy</li>
                    </ul>
                </div>
                <div className="social-icons">
                    {/* <h3>Follow Us</h3> */}
                    <Heading as='h3' size='lg'>Liên hệ</Heading>
                    <div className="icons">
                        <a href="https://www.facebook.com">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com">
                            <FaTwitter />
                        </a>
                        <a href="https://www.telegram.org">
                            <FaTelegram />
                        </a>
                        <a href="https://www.discord.com">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="copyright">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div> */}
        </footer>
    );
};

export default Footer;
