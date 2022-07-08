import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Card, CardTitle, CardText} from 'reactstrap';
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
<Card className="about-card">
<CardTitle>
About
</CardTitle>
<CardText>
          Thanks for taking the time to check out my portfolio! This is very
          much a work in progress, but I will keep improving and adding
          content week by week as I continue on my growth journey as a web
          developer.
</CardText>
</Card>
<Footer />
</>
    );
}

export default Main;