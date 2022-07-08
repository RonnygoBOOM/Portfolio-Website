import React from 'react';
import Header from './HeaderComponent';
import Home from '../Pages/Home';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';

function Main() {
//const [page, setPage] = React.useState("footer-box")
//setup this page state with an event handler that updates based on the page routed to, and then the page value should
//either be "footer-box" on Home or "fixed-bottom footer-box" on About or Contact
    return (
<>
<Header />
<Home />
<About />
<Contact />
<Footer />
</>
    );
}

export default Main;