import  Layout  from "../components/Layout"
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";


const Contact = () => {
  return (
   <div>
       
          <Layout>
      <Box sx={{ minHeight: "80vh", p: 3 }}>
        
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight={700}>
            Contact Us
          </Typography>
          <Typography sx={{ mt: 1, color: "gray" }}>
            We’d love to hear from you
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />

          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              "&:hover": { bgcolor: "goldenrod" },
            }}
          >
            Send Message
          </Button>
        </Box>

      </Box>
      </Layout>
      </div>
  )
}

export default Contact