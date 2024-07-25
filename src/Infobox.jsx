import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card"; 
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';// Correct import for Card

function InfoBox({info}) {
  const HOT_URL ="https://media.istockphoto.com/id/959597700/photo/sun.webp?b=1&s=170667a&w=0&k=20&c=hSapIa80cSDdDeJ7-WUmrafZtKio_V77ZMNzsiZe0j0=";
const COLD_URL="https://media.istockphoto.com/id/2149941006/photo/cold-foggy-wheather-at-street-of-glasgow-scotland-england.webp?b=1&s=170667a&w=0&k=20&c=6OdCb5UcIwvco0W-qA02UI6ZE53fTdo5q8cAJ_db-rM="
const RAIN_URL="https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.webp?b=1&s=170667a&w=0&k=20&c=csV5-O0mIadLwh-_Ap-XGuZGhpmYUOuo4_k2fkXr7-4="
  

  return (
    <div className="InfoBox">
      <h3>WeatherInfo {info.weather}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={info.humidity>80 ? RAIN_URL : info.temp>15?HOT_URL: COLD_URL} title="green iguana" />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
  {info.city}
  {info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}
</Typography>

            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
