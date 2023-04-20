import React from 'react';
import {Link} from 'react-scroll';
import {Col} from "react-bootstrap";


const ExperienceLoop = (props) => {
  return (
    <>
        <Col className='col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 mb-xl-0'>
            <Link to={props.movetolink} spy={true} smooth={true} className="">
            <div className='icon'><img className='img-fluid' src={props.experienceimg} alt='icon'/></div>
            <div className='text_content'><h3>{props.title}</h3><strong>{props.text}</strong></div>
            <span className='arrow_circle'><img className="img-fluid" src={props.arrowicon} alt='icon'/></span>
            </Link>
        </Col>
    </>
  )
}

export default ExperienceLoop;