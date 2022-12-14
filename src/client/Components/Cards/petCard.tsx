import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function PetCard() {
  const navigate = useNavigate();
  const routeRent = () => {
    navigate('/rent');
  };
  return (
    <div className='petCardContainer'>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="250"
          image="../../../../images/Doji.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doji
          </Typography>
          <h5>Owner: Murad</h5><h5>Species/Breed: Dog/Shiba</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            He was purchased with Dogecoin, and will shake his head no
            if he disapproves of you (which he does).
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
          height="250"
          image="../../../../images/angel.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Angel
          </Typography>
          <h5>Owner: Jeff</h5><h5>Species/Breed: Dog/American Bully XL</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            The most adorable pit bull you will ever meet. She loves 
            going to the park and having her nails painted.
            
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={routeRent}>Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="250"
          image="../../../../images/starburst.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Starburst
          </Typography>
          <h5>Owner: Crystal</h5><h5>Species/Breed: Bird/Parakeet</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Extremely sweet and gentle Parakeet who will keep you company while you code!
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Rent</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className='petCard'>
        <CardMedia
          component="img"
          height="250"
          image="../../../../images/bean.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bean
          </Typography>
          <h5>Owner: Irvin</h5><h5>Species/Breed: Dog/Yorkie</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Actually the size of a bean, and so cute I might die.
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
          height="250"
          image="../../../../images/yoshi.png"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Yoshi
          </Typography>
          <h5>Owner: Kat</h5><h5>Species/Breed: Dog/</h5>
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
          height= "250"
          component="img"
          // square
          image='../../../../images/bentley.jpg'
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bentley
          </Typography>
          <h5>Owner: Richard</h5><h5>Species/Breed: Dog/Toy Poodle</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Bentley is a goofy gal who loves belly rubs and long naps 
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
          height="250"
          image="../../../../images/benji.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Benji
          </Typography>
          <h5>Owner: Samee</h5><h5>Species/Breed: Dog/Labradoodle</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            He is as ridiculous as He looks. If there is mud anywhere
            within 10 miles, He will find it.
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
          height="250"
          image="../../../../images/mango.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mango
          </Typography>
          <h5>Owner: Murad</h5><h5>Species/Breed: Cat/Orange Tabby</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Raised by Murad since she was 2 days old.
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
          height="250"
          image="../../../../images/lemy.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lemy
          </Typography>
          <h5>Owner: Mimi</h5><h5>Species/Breed: Dog/Alaskan Kleekai</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Lemy is a derp, but she makes up for it with
            cuteness.
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
          height="250"
          image="../../../../images/jax.jpeg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jax
          </Typography>
          <h5>Owner: Nick</h5><h5>Species/Breed: Dog/Black Lab Mix</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Jax will take a nap wherever he drops. 
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
          height="250"
          image="../../../../images/kolache.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kolache
          </Typography>
          <h5>Owner: Will Paragraph</h5><h5>Species/Breed: Cat/</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Kolache is as great as the food and will demand
            your attention if you spend too much time coding.
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
          height="250"
          image="../../../../images/jackjack.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jack Jack
          </Typography>
          <h5>Owner: Victoria</h5><h5>Species/Breed: Dog/Yorkie Mix</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            As bright as a black hole, and twice as dense.
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
          height="250"
          image="../../../../images/lucy.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lucy (Goose)
          </Typography>
          <h5>Owner: Eli</h5><h5>Species/Breed: Dog/Pitbull/American Bulldog</h5>
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
          height="250"
          image="../../../../images/cookie.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cookie
          </Typography>
          <h5>Owner: Chris</h5><h5>Species/Breed: Dog/</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            So much sweetness in such a small package.
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
          height="250"
          image="../../../../images/ellie.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ellie
          </Typography>
          <h5>Owner: Tyler</h5><h5>Species/Breed: Dog/</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Great at power claps, terrible at cleaning up after
            herself.
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
          height="250"
          image="../../../../images/bailey.jpeg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bailey
          </Typography>
          <h5>Owner: Chase</h5><h5>Species/Breed: American Staffie/Bulldog/Boxer/Wild Canine</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            She loves basking in the sun and judging your system design
            decisions.
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
          height="250"
          image="../../../../images/goat.jpg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Goat #0496
          </Typography>
          <h5>Owner: Rosendo</h5><h5>Species/Breed: Goat</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Loves playing with all his siblings and only mildly 
            resents having his ears pierced.
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
          height="250"
          image="../../../../images/bridgette.jpeg"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bridgette
          </Typography>
          <h5>Owner: Jason</h5><h5>Species/Breed: Dog/</h5>
          <Typography
            variant="body2"
            color="text.secondary">
            Enjoys snuggling with laundry more than folding it.
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