import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Footer from './FooterComponent';

function Main() {
//const [page, setPage] = React.useState("footer-box")
//setup this page state with an event handler that updates based on the page routed to, and then the page value should
//either be "footer-box" on Home or "fixed-bottom footer-box" on About or Contact
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