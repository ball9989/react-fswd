import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Author from './page/Author';
import Post from './page/Posts';
const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="posts" element={<Post />} />
      <Route path="author" element={<Author />} />
    </Routes>
</BrowserRouter>,
 rootElement);
