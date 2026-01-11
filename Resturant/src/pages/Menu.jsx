import { MenuList } from "../Data/data"
import  Layout  from "../components/Layout"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box
} from "@mui/material";
import React from 'react'

const Menu = () => {
  return (
   <div>
      <Layout>
         <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 3,
      justifyContent: "center",
      p: 3,
    }}
  >
        {MenuList.map((item)=>{
          return( <Card sx={{ maxWidth: 300 }}>
      
      <CardMedia
        component="img"
        height="180"
        image={item.image}
        alt={item.name}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {item.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>

        <Typography sx={{ mt: 1, fontWeight: 700 }}>
          ₹{item.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{
            bgcolor: "black",
            "&:hover": { bgcolor: "goldenrod", color: "black" },
          }}
        >
          Add to cart
        </Button>
      </CardActions>

    </Card>
          )
        })}
        </Box>
      </Layout>
    </div>
  )
}

export default Menu