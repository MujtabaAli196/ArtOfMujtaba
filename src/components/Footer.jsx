import React from 'react';
import {Col,Row} from "react-bootstrap";
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <Col className='col-xx-9 col-xl-9 col-lg-10 col-11 mx-auto'>
                <Row className='text-center text-lg-start align-items-center'>
                    <Col sm={'4'}><Link to="home" spy={true} smooth={true} className='navbar-brand d-inline-block'><h1><span>M</span>ujtaba</h1></Link></Col>
                    <Col sm={'8'} className="text-lg-end"><p className='m-0'>© 2022 - 2023 Proudly Powered by <Link to="home" className="fontweightbold main_text">ARTOFMUJTABA</Link></p></Col>
                </Row>
            </Col>
        </footer>
    </>
  )
}

export default Footer;