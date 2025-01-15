import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import CategoryMenu from './components/CategoryMenu';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
 
  return (
    
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<BlogPosts/>} />
            <Route path="/admin" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
            <Route path="/about" element={<AboutMe/>}/>
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}
 
export default App;

