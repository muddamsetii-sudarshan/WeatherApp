import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({demo}){
    let int_url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Hot_url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Cold_url="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNub3clMjBjb2xkJTIwdXJsfGVufDB8fDB8fHww";
    let Rain_url="https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
                <div className='contain'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={demo.humidity>80?Rain_url:demo.temp>15?Hot_url:Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {demo.city}{demo.humidity>80?<ThunderstormIcon/>:demo.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>Humidity={demo.humidity}&deg;C</div>
          <div>Temp={demo.temp}&deg;C</div>
          <div>Temp_min={demo.temp_min}&deg;C</div>
          <div>Temp_max={demo.temp_max}&deg;C</div>
          <div>The weather can be described as <i>{demo.description}</i> and feels like {demo.feelslike}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        
    );
}