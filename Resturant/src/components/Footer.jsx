import React from 'react'
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
        <Box sx={{bgcolor:"black",color:"white",textAlign:"center",p:3}}>
            <Box sx={{my:2,"& svg":{
                mr:3,
                cursor:"pointer",
                fontSize:"2.1rem"
            },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translateX(5px)",
                transition:"all 300ms"

            }
            }}>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>

            </Box>
            <Typography variant='h6'>
                All Rights Reserved&copy; Foodz
            </Typography>
        </Box>

    </>
  )
}

export default Footer