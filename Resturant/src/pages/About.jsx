import { Box, Typography } from "@mui/material"
import Layout from "../components/Layout"
import "../styles/About.css"
import React from 'react'

const About = () => {
  return (
    <div>
      <Layout>
        <Box className="aboutpage">
          <Box>
            <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
              Welcome To Resturant
            </Typography>
          </Box>

                  <Box sx={{ p: 3 }}>
          <Typography paragraph>
            Food plays an essential role in our everyday lives, going far beyond
            simply satisfying hunger. It is a source of comfort, joy, and
            connection that brings people together across cultures and
            traditions. At Foodz, we believe that good food starts with fresh,
            high-quality ingredients and thoughtful preparation. Every dish is
            carefully crafted to ensure rich flavors, balanced nutrition, and an
            enjoyable eating experience that leaves a lasting impression.
          </Typography>

          <Typography paragraph>
            Our approach to food combines traditional recipes with a modern
            touch, allowing us to preserve authentic tastes while presenting
            them in a way that suits today’s lifestyle. From the careful
            selection of vegetables and spices to the final presentation on the
            plate, we focus on maintaining hygiene, consistency, and taste. Each
            meal is prepared with attention to detail, ensuring that every bite
            reflects our passion for cooking and commitment to quality.
          </Typography>

          <Typography paragraph>
            We understand that food is not just about taste but also about trust
            and satisfaction. That is why we strive to create meals that are
            wholesome, flavorful, and accessible to everyone. Whether you are
            enjoying a quick snack or a full meal, our goal is to provide food
            that makes you feel happy, energized, and satisfied. At Foodz, food
            is an experience meant to be enjoyed, remembered, and shared.
          </Typography>
        </Box>

        </Box>
      </Layout>
    </div>
  )
}

export default About