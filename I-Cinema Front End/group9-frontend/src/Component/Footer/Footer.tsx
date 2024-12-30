import React from 'react';
import { Box, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, GitHub, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#424242', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ maxWidth: 'lg', mx: 'auto', p: 4 }}>
                <Grid container spacing={4}>
                    <Grid item md={3} xs={12}>
                        {/* <Link to="/" display="flex" alignItems="center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                alt="Logo"
                                style={{ marginRight: 12, height: 64 }}
                            />
                        </Link> */}
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Resources
                        </Typography>
                        <Box>
                            <Link href="/" color="textSecondary" underline="hover" display="block" mb={1}>
                                Home
                            </Link>
                            <Link href="/about" color="textSecondary" underline="hover">
                                About
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <Link href="https://github.com/adityadolui" color="textSecondary" underline="hover" display="block" mb={1}>
                                GitHub
                            </Link>
                            <Link href="/" color="textSecondary" underline="hover" display="block">
                                Discord
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Legal
                        </Typography>
                        <Box>
                            <Link href="#" color="textSecondary" underline="hover" display="block" mb={1}>
                                Privacy Policy
                            </Link>
                            <Link href="#" color="textSecondary" underline="hover">
                                Terms & Conditions
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="textSecondary">
                        © 2023
                        <Link href="https://hiteshchoudhary.com/" color="textSecondary" underline="hover">
                            hiteshchoudhary
                        </Link>
                        . All Rights Reserved.
                    </Typography>

                    <Box>
                        {/* Uncomment the IconButtons below for social media links */}
                        {/* <IconButton href="#" color="inherit" aria-label="facebook">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="inherit" aria-label="github">
                            <GitHub />
                        </IconButton>
                        <IconButton href="#" color="inherit" aria-label="discord">
                            <Discord />
                        </IconButton>
                        <IconButton href="#" color="inherit" aria-label="twitter">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="inherit" aria-label="dribbble">
                            <Dribbble />
                        </IconButton> */}
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
