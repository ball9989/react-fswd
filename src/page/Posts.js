
import {useState,useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from '../components/NavBar'
import PostCard from '../components/PostCard';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';




const Post = () => {
    const [category, setCategory] =useState('');
    const [data,setData] = useState([]);
    const [users,setUser] = useState([]);
    const [categories,setCategories] = useState([]);
    const [comment,setComment] = useState([]);
    useEffect(()=>{
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
        .then(response => response.json())
        .then(users => setUser(users));
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => setData(posts))
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
        .then(response => response.json())
        .then(cat => setCategories(cat));
        fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments')
        .then(response => response.json())
        .then(comment => setComment(comment));
    },[]);

    
    


    const handleChange = (event) => {
        setCategory(event.target.value);
      };
  return (
    <>
    <NavBar></NavBar>
    <Container>
    <FormControl className="w-25 mt-5 p-3 bg-dark rounded shadow-lg" variant='standard'>
        <Select
          id="demo-simple-select"
          value={category}
          className='text-white'
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value=""><h3>All post</h3></MenuItem>
          {categories.map(cat =>
            <MenuItem key={cat.id} value={cat.id}><h3>{cat.name}</h3></MenuItem>
            )}
        </Select>
      </FormControl>
    <Grid className="mt-4" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {data.filter(item=>{
        return item.categories.some(cat => {
            return (cat === category || category === '');
        })
    }).map(d => 
        <Grid item xs={2} sm={4} md={4} key={d.id}>
            <PostCard data={d} users={users} comment={comment.filter(item=>item.post===d.id)}></PostCard>
        </Grid>
    )}
    </Grid>
    </Container>
    </>


  )
}

export default Post;
