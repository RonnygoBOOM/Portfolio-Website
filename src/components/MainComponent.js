import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Footer from './FooterComponent';

function Main() {
    return (
<>
<Header />
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</BrowserRouter>
<Footer />
</>
    );
}

export default Main;