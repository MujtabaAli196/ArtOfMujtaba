import React from 'react'
import{Link} from "react-router-dom";
import {Nav,Navbar,NavItem, Col} from "react-bootstrap";


// img import
import phoneimg from "../images/whatsapp-svgr.svg";
import mailimg from "../images/mail-svgrepo.svg";
import logo from "../images/logo.svg";


const Header = () => {
  return (
    <>
    <header className={"header"}>
      <Navbar bg="" expand="" className='p-0'>
        <Col className="col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto">
          <div className="d-flex align-items-center justify-content-between">
          <Link to={'/'} className='navbar-brand m-0 d-flex align-items-center'>
            <img className='img-fluid' width={'80px'} src={logo} alt='logo'/>
          </Link>
          {/* <Link to={'/'} className='navbar-brand'><h1><span>M</span>ujtaba</h1></Link> */}
            {/* <Nav className="d-none d-lg-flex align-items-center list-unstyled">
              <NavItem><Link activeClass="active" to="home" spy={true} smooth={true} className='nav-link'>Home</Link></NavItem>
              <NavItem><Link to="about" className='nav-link' spy={true} smooth={true}>About</Link></NavItem>
              <NavItem><Link to="skills" className='nav-link' spy={true} smooth={true}>Skills</Link></NavItem>
              <NavItem><Link to="portfolio" className='nav-link' spy={true} smooth={true}>Portfolio</Link></NavItem>
              <NavItem><Link to="projects" className='nav-link' spy={true} smooth={true}>Projects</Link></NavItem>
              <NavItem><Link to="contact" className='nav-link' spy={true} smooth={true}>Contact</Link></NavItem>
            </Nav> */}
            <Nav className="">
              <NavItem><Nav.Link href="https://wa.me/%2B923344558449?text=Feel%20free%20to%20contact%20me%2024%2F7hours." className='phone main_bg'><img className='img-fluid' src={phoneimg} alt="icon"/></Nav.Link></NavItem>
              <NavItem className="m-0"><Nav.Link href="mailto:mujtabaa196@gmail.com" className='phone main_bg'><img className='img-fluid' src={mailimg} alt="icon"/></Nav.Link></NavItem>
              {/* <NavItem><Nav.Link href="#" className='phone d-flex d-lg-none'>x</Nav.Link></NavItem> */}
            </Nav>
          </div>
        </Col>
      </Navbar>
    </header>
    </>
  )
}

export default Header;