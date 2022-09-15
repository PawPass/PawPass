import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';

export default function PetCard() {
  return (
    <div className='petCardContainer'>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/angel.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Angel
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            The most adorable pit bull you will ever meet. She loves 
            going to the park and having her nails painted.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/yoshi.png"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Yoshi
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            Yoshi is a tiny little bundle of joy who happens to be
            very opinionated about software development.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345}} className='petCard'>
        <CardMedia
          height= "180"
          component="img"
          // square
          image='../../../../images/Athena.jpg'
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Athena
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            Athena is a goofy gal who loves belly rubs and long naps 
            in the sun.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/jasmine.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jasmine
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            She is as sassy as she looks. She enjoys belly rubs for 
            exactly 3 seconds.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/whispers.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Whispers
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            He got his name because if you hold him up to your ear
            you can hear him make cute little noises. And he loves apples!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/Tater-Tot.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tater Tot
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            He is highly mischevious and loves to chew on shoes!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/chipandDale.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chip and Dale
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            These two have been inseparable since birth. They talk a lot
            and poop a lot.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/cooper.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cooper
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            Cooper the pooper loves to make trouble. Watch out 
            for his begging, hes really good at it.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/farro.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Farro
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            She will bark at anything that moves, and cuddle all day.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="180"
          image="../../../../images/crush.jpg.webp"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Crush
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            Really laid back and down to smoke weed all day.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>

    
  );
}