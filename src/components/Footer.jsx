import React from 'react';
import {Col,Row} from "react-bootstrap";
import {Link} from 'react-scroll';

import f_logo from "../images/f_logo.svg";

const Footer = () => {
  return (
    <>
        <footer className='footer py-2'>
            <Col className='col-10 mx-auto'>
                <Row className='text-center text-lg-start align-items-center'>
                    <Col sm={'4'}><Link to="home" spy={true} smooth={true} className='navbar-brand py-0 m-0 d-inline-block'>
                      {/* <h1><span>M</span>ujtaba</h1> */}
                      <img style={{width:'200px'}} className='img-fluid' src={f_logo} alt="icon"/>
                    </Link></Col>
                    <Col sm={'8'} className="text-lg-end"><p className='m-0'>© 2020 - 2024 Proudly Powered by <Link to="home" className="fontweightbold main_text">ARTOFMUJTABA</Link></p></Col>
                </Row>
            </Col>
        </footer>
    </>
  )
}

export default Footer;