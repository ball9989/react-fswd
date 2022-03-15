
import {useState,useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { avatarClasses } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';



const Author = () => {
    const [data,setData] = useState([]);
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
        .then(response => response.json())
        .then(users => setUser(users));
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => setData(posts))
    },[]);

    
    

  return (
    <>
    <NavBar></NavBar>
    <Container>
    <div className='text-center' style={{'fontSize':'4rem','fontWeight':'bold'}}>
      Author
    </div>
    <div className='text-center' style={{'fontSize':'2.5rem'}}>
    Author is the creator or originator of any written work.
    </div>
    <Grid className="mt-5" justifyContent="center" container rowSpacing={1} columnSpacing={3}>
    {users.map(u =>
            <Grid item xs={2.5}>
            <Card>
            <CardMedia
              component="img"
              height="200"
              image={u.avatar_urls[96]}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {u.name}
              </Typography>
              <Link href={u.link} target="_blank">Profile Link</Link>
            </CardContent>
          </Card>
          </Grid>
    )}
    </Grid>


    </Container>
    </>


  )
}

export default Author;
