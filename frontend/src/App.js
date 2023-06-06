import React from 'react';

// npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons
import { About, Header, Work, Skills, Testimonial, Footer } from './container/index.js'
import { NavBar } from './components/index.js';
import "./App.scss";

//stopped at 29 min 29 sec - https://www.youtube.com/watch?v=3HNyXCPDQ7Q

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App