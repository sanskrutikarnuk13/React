import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherInfo({ detail }) {
    let rain_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let hot_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    let weatherImage = hot_URL;

if (detail?.weather?.[0]?.main === "Rain") {
  weatherImage = rain_URL;
} else if (detail?.main?.temp < 20) {
  weatherImage = cold_URL;
}


  return (
    <div className="weatherInfo">
      <Card sx={{ width:"100%", maxWidth: 420 }}>
        <CardMedia
          sx={{ height: 200}}
          image={weatherImage}
          title="weather image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {detail?.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            🌡 Temp: {detail?.main?.temp}°C <br />
            🤗 Feels Like: {detail?.main?.feels_like}°C <br />
            💧 Humidity: {detail?.main?.humidity}% <br />
            🔺 Max Temp: {detail?.main?.temp_max}°C <br />
            🔻 Min Temp: {detail?.main?.temp_min}°C <br />
            ☁ Weather: {detail?.weather?.[0]?.main}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
