import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import AnimatedCursor from "react-animated-cursor";


// files import Css
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// files import JS
// import '../node_modules/jquery/dist/jquery.js';
import './js/main.js';
import './css/App.scss';

// 
import Home from "./components/Home";
import Header from "./components/Header";
import Empty from "./components/Empty";
import AllPortfolio from "./components/AllPortfolio";
// import About from "./components/pages/About";
// import Skills from "./components/pages/Skills";
// import Portfolio from "./components/pages/Portfolio";
// import Projects from "./components/pages/Projects";
// import Contact from "./components/pages/Conatct";

function App() {
    return ( 
        <>
            <Header/>
            {/* <AnimatedCursor color = "101,177,91" innerSize = { 6 } outerSize = { 25 } innerScale = { 1 } outerScale = { 1.2 } outerAlpha = { 0.3 } outerStyle = { { border: '1px solid #65b15b' } }/> */}
            {/* {window.location.pathname === '/all-portfolio' || window.location.pathname === '/empty' ? <Header text={'d-none'}/> : <Header text={'d-block'} /> } */}
            <Routes>
                <Route exact path={ `${process.env.PUBLIC_URL}/` } element = { <Home /> } /> 
                {/* <Route path={ `${process.env.PUBLIC_URL}/404` } element = { <Empty /> } /> */}
                <Route path={'/all-portfolio'} element = { <AllPortfolio /> } />
                <Route path="*" element={<Empty />} />
                {
                /* <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
                <Route path={`${process.env.PUBLIC_URL}/skills`} element={<Skills />} />
                <Route path={`${process.env.PUBLIC_URL}/portfolio`} element={<Portfolio />} />
                <Route path={`${process.env.PUBLIC_URL}/projects`} element={<Projects />} />
                <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} /> */
                } 
            </Routes> 
        </>
    );
}
export default App;