import {useState,useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" >
<Container>
  <Navbar.Brand as={Link} to="/">
    <img
      alt=""
      src="https://cdn2.iconfinder.com/data/icons/social-media-black-white-1/1024/bw-4-512.png"
      width="50"
      height="50"
      className="d-inline-block align-center"
    />{'  '}
    Blog-Fswd-Project
  </Navbar.Brand>
  <Nav style={{'marginRight':'90vh'}}>
  <Nav.Link className="text-white h4" as={Link} to="/" >Home</Nav.Link>
  <Nav.Link className="text-white h4" as={Link} to="/posts">Posts</Nav.Link>
  <Nav.Link className="text-white h4" as={Link} to="/author" >Author</Nav.Link>
</Nav>
</Container>
</Navbar> 
    )
}

export default NavBar;